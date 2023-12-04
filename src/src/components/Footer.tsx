import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { jwtParser } from '../utils/jwtParser';
import EnvironmentContext from '../EnvironmentContext';

function Footer({ links, requestId }: any) {
    const { customGroups, customScope } = useContext(EnvironmentContext);
    const navigate = useNavigate();

    const [username, setUserName] = useState<string>('');
    const [scope, setScope] = useState<string>('');
    const [page, setPage] = useState<number>(1);
    const url: string = location.pathname;
    const hasPrev: boolean = page > 1;
    const hasNext: boolean = links ? links.some((link: any) => link.relation === 'next') : false;

    useEffect(() => {
        const getdataFromJwt = async () => {
            const { username: usernameFromJwt, scope: scopeFromJwt } = await jwtParser({
                customGroups,
                customScope,
            });
            setUserName(usernameFromJwt ?? '');
            setScope(scopeFromJwt ?? '');
        };
        getdataFromJwt();
        const queryParams = new URLSearchParams(location?.search);
        // number of pages skipped + 1 is the current page
        setPage(parseInt(queryParams.get('_getpagesoffset') || '0') + 1);
    }, []);

    // eslint-disable-next-line no-unused-vars
    const handleChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
        const queryParams = new URLSearchParams(location?.search);
        if (newPage > 1) {
            queryParams.set('_getpagesoffset', `${newPage - 1}`);
            setPage(newPage);
        } else if (queryParams.has('_getpagesoffset')) {
            queryParams.delete('_getpagesoffset');
            setPage(1);
        }
        navigate(location.pathname + '?' + queryParams.toString());
    };

    return (
      <Box sx={{ p: 1, display: 'flex', borderTop: 1 }}>
        {url && !url.includes('/_search') && (
          <>
            <Pagination
              boundaryCount={0}
              count={1}
              onChange={handleChange}
              renderItem={(params) => {
                if (
                  (params.type === 'previous' && hasPrev) ||
                  (params.type === 'next' && hasNext)
                ) {
                  params.disabled = false;
                }
                if (params.type === 'page') {
                  params.page = page;
                }
                return <PaginationItem {...params} />;
              }}
            />
          </>
        )}
        {username && (
          <Box sx={{ flexGrow: 1, pt: 2, textAlign: 'end' }}>
            <Typography variant="body2">
              User: {username}{' '}
              {requestId ? (
                <>
                  | RequestId: {requestId}
                  <br />
                </>
              ) : (
                <>| </>
              )}
              Scopes: {scope}
            </Typography>
          </Box>
        )}
        <Box sx={{ flexGrow: 1, pt: 2, textAlign: 'end' }}>
          <Typography variant="body2">
            &copy; Copyright {new Date().getFullYear()} b.well Connected Health |&nbsp;&nbsp;
            <Link href="https://docs.google.com/document/d/1afAuyrckHabnCP-uhOqXOQzFUuA4e6yN/edit?usp=sharing&ouid=100180767885483338723&rtpof=true&sd=true">
              Conditions of Use
            </Link>
          </Typography>
        </Box>
      </Box>
    );
}

export default Footer;
