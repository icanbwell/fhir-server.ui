import advSearchJson from '../generator/json/definitions.json/search-parameters.json';

export type FieldInfo = {
    label: string;
    name: string;
    sortField?: string;
    useExactMatch?: boolean;
    columnHeader?: string;
};

const givenNameField = (): FieldInfo => {
    return {
        label: 'Given (Name)',
        name: 'given',
        sortField: 'name',
        useExactMatch: true,
    };
};

const familyNameField = (): FieldInfo => {
    return {
        label: 'Family (Name)',
        name: 'family',
        sortField: 'name.family',
        useExactMatch: true,
    };
};

const emailField = (): FieldInfo => {
    return {
        label: 'Email',
        name: 'email',
        sortField: 'name',
        useExactMatch: true,
    };
};

const identifierField = (): FieldInfo => {
    return {
        label: 'Identifier',
        name: 'identifier',
        sortField: 'identifier',
        useExactMatch: true,
    };
};

const securityTagField = (): FieldInfo => {
    return {
        label: 'Security',
        name: '_security',
        sortField: '_security',
        useExactMatch: true,
    };
};

const getPatientForm = (): FieldInfo[] => {
    let patientArray: FieldInfo[] = [];
    patientArray.push(givenNameField());
    patientArray.push(familyNameField());
    patientArray.push(emailField());
    patientArray.push(securityTagField());
    return patientArray;
};

const getPersonForm = (): FieldInfo[] => {
    let personArray: FieldInfo[] = [];
    personArray.push(givenNameField());
    personArray.push(familyNameField());
    personArray.push(emailField());
    personArray.push(securityTagField());
    return personArray;
};

const getPractitionerForm = (): FieldInfo[] => {
    const practitionerArray: FieldInfo[] = [];
    practitionerArray.push(givenNameField());
    practitionerArray.push(familyNameField());
    practitionerArray.push({
        label: 'NPI',
        name: 'npi',
        sortField: 'identifier',
    });
    practitionerArray.push(securityTagField());
    return practitionerArray;
};

const getOrganizationForm = (): FieldInfo[] => {
    const formElements: FieldInfo[] = [];
    formElements.push({
        label: 'Name',
        name: 'name',
        sortField: 'name',
    });
    formElements.push(securityTagField());
    return formElements;
};

const getEncounterForm = (): FieldInfo[] => {
    const formElements: FieldInfo[] = [];
    formElements.push({
        columnHeader: 'Period',
        label: 'Date',
        name: 'date',
        sortField: 'period',
    });
    return formElements;
};

const getFormData = (resourceName: string): FieldInfo[] => {
    let formData: FieldInfo[] = [];

    switch (resourceName) {
        case 'Patient':
            formData = formData.concat(getPatientForm());
            break;
        case 'Person':
            formData = formData.concat(getPersonForm());
            break;
        case 'Practitioner':
            formData = formData.concat(getPractitionerForm());
            break;
        case 'Organization':
            formData = formData.concat(getOrganizationForm());
            break;
        case 'Encounter':
            formData = formData.concat(getEncounterForm());
            break;
    }

    formData.push({
        label: 'Id',
        name: 'id',
        sortField: 'id',
        useExactMatch: true,
    });

    formData.push(identifierField());

    formData.push({
        label: 'Source',
        name: '_source',
        sortField: 'meta.source',
    });

    return formData;
};

const getAdvSearchFormData = (resourceName: string): FieldInfo[] => {
    const basicFormData = getFormData(resourceName);

    let advFormData: FieldInfo[] = [];
    const resourceFields = advSearchJson.entry.filter((entry: any) => {
        return entry.resource.base.includes(resourceName) && entry.resource.type === 'string';
    });

    resourceFields.forEach((advParam: any) => {
        const foundBasic = basicFormData.find(
            (formData) => formData.name === advParam.resource.name
        );
        if (foundBasic) {
            return;
        }
        advFormData.push({
            label: advParam.resource.name
                .split('-')
                .map((s: string) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' '),
            name: advParam.resource.name,
        });
    });
    return advFormData;
};

export { getAdvSearchFormData, getFormData };
