/**
 * @name exports
 * @summary Some constants used throughout the app
 */
export const constants = {
    LENIENT_SEARCH_HANDLING: 'lenient' as const,
    STRICT_SEARCH_HANDLING: 'strict' as const,
    SPECIFIED_QUERY_PARAMS: [
        '_explain', '_debug', '_validate', 'contained', '_hash_references', 'base_version', '_elements',
        '_useAccessIndex', 'active', '_source', '_id', 'onset-date', '_lastUpdated',
        'source', 'id', 'onset_date', '_bundle', '_sort', '_count', '_useTwoStepOptimization',
        '_cursorBatchSize', '_setIndexHint', '_total', '_getpagesoffset', 'resource', '_streamResponse', 'remove',
        'streamResponse', 'team', '_text', '_content', '_list', '_has', '_type', '_include', '_revinclude',
        '_summary', '_contained', '_containedType', '_query', '_filter', '_format', '_pretty', 'role', 'member',
        'onBehalfOf', 'period', 'practitionerId', 'patientId', '_prefer'
    ] as const,
    REQUEST_ID_HEADER: 'x-request-id' as const,
    KAFKA_CONNECTION_HEALTHCHECK_INTERVAL: 30000, // In milliseconds,
    REFERENCE_EXTENSION_DATA_MAP: {
        'display': {
            id: 'referenceDisplay',
            url: 'https://www.icanbwell.com/referenceDisplay',
            valueKey: 'valueString',
        },
        'type': {
            id: 'referenceType',
            url: 'https://www.icanbwell.com/referenceType',
            valueKey: 'valueUri',
        },
    },
    GRIDFS: {
        INSERT: 'INSERT' as const,
        RETRIEVE: 'RETRIEVE' as const,
        DELETE: 'DELETE' as const,
    },
    PATIENT_INITIATED_CONNECTION: [
        'proa'
    ] as const,
    REQUEST_ID_TYPE: {
        USER_REQUEST_ID: 'userRequestId' as const,
        SYSTEM_GENERATED_REQUEST_ID: 'systemGeneratedRequestId' as const,
    },
    RESPONSE_NONCE: 'responseNonce' as const,
    ACCESS_LOGS_COLLECTION_NAME: 'access-logs' as const,
    PATIENT_REFERENCE_PREFIX: 'Patient/' as const,
    PERSON_REFERENCE_PREFIX: 'Person/' as const,
    PERSON_PROXY_PREFIX: 'person.' as const,
    BWELL_PERSON_SOURCE_ASSIGNING_AUTHORITY: 'bwell' as const,
    PROXY_PERSON_CONSENT_CODING: {
        SYSTEM: 'http://terminology.hl7.org/3.1.0/CodeSystem-v3-RoleCode.html' as const,
        CODE: 'AUT' as const
    },
    CONSENT_OF_LINKED_PERSON_INDEX: 'consent_of_linked_person' as const,
};