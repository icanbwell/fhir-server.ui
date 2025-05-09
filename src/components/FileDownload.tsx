import React, { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { saveAs } from 'file-saver';

// Define the props interface
interface FileDownloadProps {
    url: string;
    buttonText?: string; // Optional custom button text
}

const FileDownload: React.FC<FileDownloadProps> = ({ url, buttonText = 'Download File' }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const extractFilenameFromHeader = (contentDisposition: string): string => {
        // Regular expression to extract filename from Content-Disposition header
        const filenameMatch = contentDisposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/i);

        if (filenameMatch && filenameMatch[1]) {
            // Remove quotes if present
            return filenameMatch[1].replace(/['"]/g, '');
        }

        // Fallback to a default filename if no filename is found
        return 'downloaded-file';
    };

    const downloadFile = async (): Promise<void> => {
        setIsLoading(true);
        try {
            const response: AxiosResponse<Blob> = await axios.get(url, {
                responseType: 'blob', // Handle the response as binary data
            });

            // Extract filename from Content-Disposition header
            const contentDisposition = response.headers['content-disposition'];
            const filename = contentDisposition
                ? extractFilenameFromHeader(contentDisposition)
                : 'downloaded-file';

            // Use file-saver to save the file
            saveAs(response.data, filename);
            setIsLoading(false);
        } catch (error: unknown) {
            console.error('Error downloading the file:', error);
            setIsLoading(false);
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <button
                onClick={downloadFile}
                disabled={isLoading}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: isLoading ? '#ccc' : '#4CAF50',
                    color: 'white',
                    border: 'none',
                    cursor: isLoading ? 'not-allowed' : 'pointer',
                    borderRadius: '5px',
                }}
            >
                {isLoading ? 'Downloading...' : buttonText}
            </button>
        </div>
    );
};

export default FileDownload;
