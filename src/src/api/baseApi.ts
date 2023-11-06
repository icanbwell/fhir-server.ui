import axios from 'axios';
import cookies from 'js-cookie';
import { InternalAxiosRequestConfig } from 'axios';
import { Request } from 'express';

interface GetDataParams {
    urlString: string;
    params?: any;
}

class BaseApi {
    private readonly fhirUrl: string;

    constructor({ fhirUrl }: { fhirUrl: string }) {
        this.fhirUrl = fhirUrl;
        axios.interceptors.request.use(this.requestInterceptor);
    }

    private getBaseUrl(): string {
        return this.fhirUrl;
    }

    async getData({ urlString, params }: GetDataParams): Promise<any> {
        if (urlString.includes(window.location.origin)) {
            urlString = urlString.replace(window.location.origin, '');
        }
        const url = new URL(urlString, this.getBaseUrl());
        if (params && Object.keys(params).length > 0) {
            url.search = new URLSearchParams(params).toString();
        }

        const response = await axios.get(url.toString());

        if (response.status !== 200) {
            throw new Error('Network response was not ok');
        }

        return { status: response.status, json: response.data };
    }

    requestInterceptor(req: InternalAxiosRequestConfig<Request<any>>): InternalAxiosRequestConfig<Request<any>> {
        const token = cookies.get('jwt');
        if (typeof token === 'string') {
            req.headers.Authorization = `Bearer ${token}`;
        };
        req.headers.Accept = 'application/json';
        return req;
    }
}

export default BaseApi;
