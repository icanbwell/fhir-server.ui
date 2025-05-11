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
}

const FileDownload: React.FC<FileDownloadProps> = ({ relativeUrl, format }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { fhirUrl } = useContext(EnvironmentContext);

    const downloadUri: URL = new URL(fhirUrl, relativeUrl);
    downloadUri.searchParams.set('_format', format);

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
            const response: AxiosResponse<Blob> = await axios.get(downloadUri.toString(), {
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
                {downloadUri.toString()}
            </Link>
        </React.Fragment>
    );
};

export default FileDownload;
