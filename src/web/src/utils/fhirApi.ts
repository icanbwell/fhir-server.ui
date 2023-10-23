
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
    baseUrl: string;
    resourceType: string;
    id?: string;
    queryString?: string;
    queryParameters?: string[];
    operation?: string;
}

interface GetUrlParams {
    baseUrl: string;
    resourceType: string;
    id?: string;
    queryString?: string;
    queryParameters?: string[];
    operation?: string;
}

class FhirApi {
    async getPatientEverythingAsync({ patientId, question, baseUrl }: GetPatientEverythingAsyncParams) {
        const urlEncodedQuestion = encodeURIComponent(question);
        const url = `${baseUrl}/4_0_0/Patient/${patientId}/$everything?_question=${urlEncodedQuestion}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        });
        return await response.json();
    }

    async getResource({ id, resourceType, baseUrl }: GetResourceParams) {
        const url = `${baseUrl}/4_0_0/${resourceType}/${id}/`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        });
        return await response.json();
    }

    async getBundleAsync({
        baseUrl,
        resourceType,
        id,
        queryString,
        queryParameters,
        operation,
    }: GetBundleAsyncParams): Promise<{ status: number; json: any }> {
        const url = this.getUrl({
            baseUrl,
            resourceType,
            id,
            queryString,
            queryParameters,
            operation,
        });

        const response = await fetch(url.toString(), {
            credentials: 'include',
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        });
        const status = response.status;
        if (status === 404 || status === 401) {
            return { status, json: {} };
        }
        const responseJson = await response.json();
        return { status, json: responseJson };
    }

    getUrl({
        baseUrl,
        resourceType,
        id,
        queryString,
        queryParameters,
        operation,
    }: GetUrlParams): URL {
        let urlString = `${baseUrl}/4_0_0/${resourceType}`;
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
