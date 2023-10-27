interface RunPersonMatchParams {
  sourceId: string;
  sourceType: string;
  targetId: string;
  targetType: string;
}

class AdminApi {
  private readonly fhirUrl: string;

  constructor(fhirUrl: string) {
    this.fhirUrl = fhirUrl;
  }

  async runPersonMatch({
    sourceId,
    sourceType,
    targetId,
    targetType,
  }: RunPersonMatchParams): Promise<any> {
    const urlString = '/admin/runPersonMatch';
    const url = new URL(urlString, this.getBaseUrl());
    const params = {
      sourceId,
      sourceType,
      targetId,
      targetType,
    };

    url.search = new URLSearchParams(params).toString();

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  }

  private getBaseUrl() {
    return this.fhirUrl; // window.location.origin;
  }

  async getEverythingForPatient(patientId: string): Promise<any> {
    const urlString = `/4_0_0/Patient/$everything?id=${patientId}&_format=json&contained=true`;
    const url = new URL(urlString, this.getBaseUrl());

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  }

  async deletePatient(patientId: string): Promise<any> {
    const urlString = `/admin/deletePatientDataGraph?id=${patientId}`;
    const url = new URL(urlString, this.getBaseUrl());

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  }

  async getEverythingForPerson(personId: string): Promise<any> {
    const urlString = `/4_0_0/Person/$everything?id=${personId}&_format=json&contained=true`;
    const url = new URL(urlString, this.getBaseUrl());

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  }

  async deletePerson(personId: string): Promise<any> {
    const urlString = `/admin/deletePersonDataGraph?id=${personId}`;
    const url = new URL(urlString, this.getBaseUrl());

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  }

  async showPersonToPersonLink(bwellPersonId: string) {
    const urlString = `/admin/showPersonToPersonLink?bwellPersonId=${bwellPersonId}`;
    const url = new URL(urlString, this.getBaseUrl());

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
      cache: 'no-store',
    });
    return await response.json();
  }

  async createPersonToPersonLink(
    bwellPersonId: string,
    externalPersonId: string,
  ) {
    const urlString = `/admin/createPersonToPersonLink?bwellPersonId=${bwellPersonId}&externalPersonId=${externalPersonId}`;
    const url = new URL(urlString, this.getBaseUrl());

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
      cache: 'no-store',
    });
    return await response.json();
  }

  async removePersonToPersonLink(
    bwellPersonId: string,
    externalPersonId: string,
  ) {
    const urlString = `/admin/removePersonToPersonLink?bwellPersonId=${bwellPersonId}&externalPersonId=${externalPersonId}`;
    const url = new URL(urlString, this.getBaseUrl());

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
      cache: 'no-store',
    });
    return await response.json();
  }

  async createPersonToPatientLink(externalPersonId: string, patientId: string) {
    const urlString = `/admin/createPersonToPatientLink?externalPersonId=${externalPersonId}&patientId=${patientId}`;
    const url = new URL(urlString, this.getBaseUrl());

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
      cache: 'no-store',
    });
    return await response.json();
  }

  async searchLogs(id: string) {
    const urlString = `/admin/searchLogResults?id=${id}`;
    const url = new URL(urlString, this.getBaseUrl());

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
      cache: 'no-store',
    });
    return await response.json();
  }
}

export default AdminApi;
