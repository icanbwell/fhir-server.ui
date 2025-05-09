import React, { useContext, useState } from 'react';
import Typography from '@mui/material/Typography';
import { Link, CircularProgress } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import axios, { AxiosResponse } from 'axios';
import { saveAs } from 'file-saver';
import { TResource } from '../types/resources/Resource';
import EnvironmentContext from '../context/EnvironmentContext';

interface FileDownloadProps {
    resource: TResource;
    error?: boolean;
}

const FileDownload: React.FC<FileDownloadProps> = ({ resource, error }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { fhirUrl } = useContext(EnvironmentContext);

    // Construct the URL with query parameters
    const queryParams = new URLSearchParams(error ? window.location.search : '');
    queryParams.set('_format', 'text/csv');

    const pathName = error
        ? window.location.pathname
        : `/4_0_0/${resource.resourceType}/${resource.id}`;

    let downloadUrl = `${pathName}?${queryParams.toString()}`;
    // console.info('downloadUrl', downloadUrl);
    // console.info('fhirUrl', fhirUrl);
    downloadUrl = fhirUrl + downloadUrl;
    // console.info('downloadUrl', downloadUrl);

    const extractFilenameFromHeader = (contentDisposition: string): string => {
        const filenameMatch = contentDisposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/i);

        if (filenameMatch && filenameMatch[1]) {
            return filenameMatch[1].replace(/['"]/g, '');
        }

        return `${resource.resourceType}-${resource.id}.json`;
    };

    const downloadFile = async (e: React.MouseEvent): Promise<void> => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response: AxiosResponse<Blob> = await axios.get(downloadUrl, {
                responseType: 'blob',
            });

            const contentDisposition = response.headers['content-disposition'];
            const filename = contentDisposition
                ? extractFilenameFromHeader(contentDisposition)
                : `${resource.resourceType}-${resource.id}.json`;

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
                Download JSON
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
