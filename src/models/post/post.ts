export interface IPostCompany {
    name: string;
    location: string;
    contact: string;
}

export interface IPostCompanyResponse {
    status: string,
    code: number,
    errors: [
        string
    ]
}

export interface IPostvacancy {
    title: string;
    description: string;
    status: string;
    companyId: string;
}