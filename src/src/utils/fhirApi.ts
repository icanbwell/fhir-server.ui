import axios from 'axios';
import { requestInterceptor } from './requestInterceptor';

interface GetPatientEverythingAsyncParams {
    patientId: string;
    question: string;
    baseUrl: string;
}

interface GetResourceParams {
    id: string;
    resourceType: string;
    baseUrl: string;
}

interface GetBundleAsyncParams {
    resourceType: string;
    id?: string;
    queryString?: string;
    queryParameters?: string[];
    operation?: string;
}

interface GetUrlParams {
    resourceType: string;
    id?: string;
    queryString?: string;
    queryParameters?: string[];
    operation?: string;
}

class FhirApi {
    fhirUrl: string;

    constructor({ fhirUrl }: { fhirUrl: string }) {
        this.fhirUrl = fhirUrl;
        axios.interceptors.request.use(requestInterceptor);
    }

    async getPatientEverythingAsync({
        patientId,
        question,
    }: GetPatientEverythingAsyncParams) {
        const urlEncodedQuestion = encodeURIComponent(question);
        const url = `${this.fhirUrl}/4_0_0/Patient/${patientId}/$everything?_question=${urlEncodedQuestion}`;
        const response = await axios.get(url);
        return response.data;
    }

    async getResource({ id, resourceType }: GetResourceParams) {
        const url = `${this.fhirUrl}/4_0_0/${resourceType}/${id}/`;
        const response = await axios.get(url);
        return response.data;
    }

    async getBundleAsync({
        resourceType,
        id,
        queryString,
        queryParameters,
        operation,
    }: GetBundleAsyncParams): Promise<{ status: number; json: object }> {
        const url = this.getUrl({
            resourceType,
            id,
            queryString,
            queryParameters,
            operation,
        });
        const response = await axios.get(url.toString());
        const status = response.status;
        if (status === 404 || status === 401) {
            return { status, json: {} };
        }
        const responseJson = response.data;
        return { status, json: responseJson };
    }

    getUrl({
        resourceType,
        id,
        queryString,
        queryParameters,
        operation,
    }: GetUrlParams): URL {
        let urlString = `${this.fhirUrl}/4_0_0/${resourceType}`;
        if (id) {
            urlString += `/${id}`;
        }
        if (operation) {
            urlString += `/${operation}`;
        }

        function stripFirstCharIfQuestionMark(str: string) {
            if (str.charAt(0) === '?') {
                return str.slice(1);
            }
            return str;
        }

        if (queryString) {
            urlString += `?${stripFirstCharIfQuestionMark(queryString)}`;
        }
        const url = new URL(urlString, window.location.origin);
        if (queryParameters && queryParameters.length > 0) {
            queryParameters.forEach((queryParameter) => {
                const [name, value] = queryParameter.split('=');
                url.searchParams.append(name, value);
            });
        }
        if (!id && !url.searchParams.has('_count')) {
            url.searchParams.append('_count', '10');
        }
        return url;
    }
}

export default FhirApi;
