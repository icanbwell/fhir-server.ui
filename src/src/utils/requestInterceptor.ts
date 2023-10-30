import cookies from 'js-cookie';
import { InternalAxiosRequestConfig } from 'axios';
import { Request } from 'express';

export const requestInterceptor = (req: InternalAxiosRequestConfig<Request>) => {
    const token = cookies.get('jwt');
    if (typeof token === 'string') {
        req.headers.Authorization = `Bearer ${token}`;
    };
    req.headers.Accept = 'application/json';
    return req;
};
