import React, { useContext, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Link, CircularProgress, Alert } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import axios, { AxiosResponse } from 'axios';
import { saveAs } from 'file-saver';
import EnvironmentContext from '../context/EnvironmentContext';

interface FileDownloadProps {
    relativeUrl: string;
    format: string;
}

const FileDownload: React.FC<FileDownloadProps> = ({ relativeUrl, format }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const { fhirUrl } = useContext(EnvironmentContext);

    const downloadUri: URL = new URL(relativeUrl, fhirUrl);
    downloadUri.searchParams.set('_format', format);

    const extractFilenameFromHeader = (contentDisposition: string): string | undefined => {
        let filename: string | undefined;
        if (contentDisposition && contentDisposition.includes('filename=')) {
            const filenameMatch = contentDisposition.split('filename=')[1];
            filename = filenameMatch.split(';')[0].trim().replace(/"/g, '');
        } else if (contentDisposition && contentDisposition.includes('filename*=')) {
            const filenameMatch = contentDisposition.split("filename*=UTF-8''")[1];
            filename = decodeURIComponent(filenameMatch.split(';')[0].trim());
        }
        return filename || undefined;
    };

    const downloadFile = async (e: React.MouseEvent): Promise<void> => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage(null); // Clear any previous error message
        try {
            const response: AxiosResponse<Blob> = await axios.get(downloadUri.toString(), {
                responseType: 'blob',
            });

            const contentDisposition = response.headers['content-disposition'];
            if (!contentDisposition) {
                console.error('Content-Disposition header not found');
                setErrorMessage('Failed to download the file: Missing Content-Disposition header.');
                setIsLoading(false);
                return;
            }
            const filename = extractFilenameFromHeader(contentDisposition);
            if (!filename) {
                console.error('Filename not found in Content-Disposition header');
                setErrorMessage('Filename not found in Content-Disposition header.');
                setIsLoading(false);
                return;
            }
            saveAs(response.data, filename);
            setIsLoading(false);
        } catch (error1: unknown) {
            console.error('Error downloading the file:', error1);
            setErrorMessage(`An error occurred while downloading the file: ${(error1 as Error).message}`);
            setIsLoading(false);
        }
    };

    return (
        <React.Fragment>
            <Typography variant="h4">
                Download ({format === 'text/csv' ? 'csv' : 'Excel'})
                {isLoading && <CircularProgress size={16} sx={{ ml: 1 }} />}
            </Typography>
            {errorMessage && (
                <Alert severity="error" sx={{ my: 2 }}>
                    {errorMessage}
                </Alert>
            )}
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
