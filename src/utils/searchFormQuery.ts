class SearchFormQuery {
    params: any;
    start: Date | undefined;
    end: Date | undefined;
    chatGptQuestion: string | undefined;

    constructor({
        start,
        end,
        chatGptQuestion,
        ...params
    }: {
        start?: Date | undefined;
        end?: Date | undefined;
        chatGptQuestion?: string | undefined;
        params?: any;
    }) {
        this.start = start;
        this.end = end;
        this.chatGptQuestion = chatGptQuestion;
        this.params = params;
    }

    getQueryParameters() {
        const queryParameters = [];
        if (this.start) {
            queryParameters.push(`_lastUpdated=gt${this.start.toISOString()}`);
        }
        if (this.end) {
            queryParameters.push(`_lastUpdated=lt${this.end.toISOString()}`);
        }
        if (this.chatGptQuestion) {
            queryParameters.push(`_question=${this.chatGptQuestion}`);
        }
        if (this.params) {
            Object.entries(this.params).forEach(
                ([name, value]) => value && queryParameters.push(`${name}=${value}`)
            );
        }
        return queryParameters;
    }
}

export default SearchFormQuery;
