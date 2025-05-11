import React, { useContext, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Link, CircularProgress } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import axios, { AxiosResponse } from 'axios';
import { saveAs } from 'file-saver';
import EnvironmentContext from '../context/EnvironmentContext';

interface FileDownloadProps {
    relativeUrl?: string;
    format: string;
    error?: boolean;
}

const FileDownload: React.FC<FileDownloadProps> = ({ relativeUrl, format, error }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { fhirUrl } = useContext(EnvironmentContext);

    // Construct the URL with query parameters
    const queryParams = new URLSearchParams(error ? window.location.search : '');
    queryParams.set('_format', format);

    const pathName = error
        ? window.location.pathname
        : relativeUrl;

    let downloadUrl = `${pathName}?${queryParams.toString()}`;
    // console.info('downloadUrl', downloadUrl);
    // console.info('fhirUrl', fhirUrl);
    downloadUrl = fhirUrl + downloadUrl;
    // console.info('downloadUrl', downloadUrl);

    const extractFilenameFromHeader = (contentDisposition: string): string | undefined => {
        // Extract filename
        let filename: string | undefined;
        if (contentDisposition && contentDisposition.includes('filename=')) {
            const filenameMatch = contentDisposition.split('filename=')[1];
            filename = filenameMatch.split(';')[0].trim().replace(/"/g, ''); // Remove quotes
        } else if (contentDisposition && contentDisposition.includes('filename*=')) {
            const filenameMatch = contentDisposition.split("filename*=UTF-8''")[1];
            filename = decodeURIComponent(filenameMatch.split(';')[0].trim());
        }

        if (filename) {
            return filename;
        }

        return undefined;
    };

    const downloadFile = async (e: React.MouseEvent): Promise<void> => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response: AxiosResponse<Blob> = await axios.get(downloadUrl, {
                responseType: 'blob',
            });

            const contentDisposition = response.headers['content-disposition'];
            if (!contentDisposition) {
                console.error('Content-Disposition header not found');
                setIsLoading(false);
                return;
            }
            const filename = extractFilenameFromHeader(contentDisposition);

            saveAs(response.data, filename);
            setIsLoading(false);
        } catch (error1: unknown) {
            console.error('Error downloading the file:', error1);
            setIsLoading(false);
        }
    };

    return (
        <React.Fragment>
            <Typography variant="h4">
                Download ({format === 'text/csv' ? 'csv' : 'Excel'})
                {isLoading && <CircularProgress size={16} sx={{ ml: 1 }} />}
            </Typography>
            <Link
                component="button"
                onClick={downloadFile}
                disabled={isLoading}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    cursor: isLoading ? 'not-allowed' : 'pointer',
                    opacity: isLoading ? 0.5 : 1,
                }}
            >
                <DownloadIcon fontSize="small" />
                {downloadUrl}
            </Link>
        </React.Fragment>
    );
};

export default FileDownload;
