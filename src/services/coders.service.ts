import { ICompanies, ICompany, IGetCompanyRequest, IGetVacanciesRequest, IVacancyResponse } from "@/models/modelsProgram/program.model";
import { IPostCompany, IPostCompanyResponse, IPostVacancy, IPostVacancyResponse } from "@/models/post/post";
import { HttpClient } from "@/utils/client-http";

export class  Service {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient();
  }

  async Companies({page, size }: IGetCompanyRequest) {
    try {
      const response = this.httpClient.get<ICompanies>(`company?page=${page}&size=${size}`);

      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async AllCompanies() {
    try {
      const response = this.httpClient.get<ICompany[]>(`company/all`);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async allVacants({page, size}: IGetVacanciesRequest) {
    try {
      const response = this.httpClient.get<IVacancyResponse>(`vacants?page=${page}&size=${size}`);

      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  
  async createCompany(company: IPostCompany) {
    try {
      const createdCompany = await this.httpClient.post<IPostCompanyResponse, IPostCompany>("company", company);
      return createdCompany;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async createVacant(vacants: IPostVacancy) {
    try {
      const createdCompany = await this.httpClient.post<IPostVacancyResponse, IPostVacancy>("vacants", vacants);
      return createdCompany;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // async destroy(id: string) {
  //   try {
  //     const coders = this.httpClient.delete<ICoder>(`coders/${id}`);

  //     return coders;
  //   } catch (error) {
  //     console.log(error);
  //     throw error;
  //   }
  // }


  // async update(id: string, coder: ICoder) {
  //   try {
  //     const updatedCoder = await this.httpClient.put<ICoder, ICoder>(`coders/${id}`, coder);
  //     return updatedCoder;
  //   } catch (error) {
  //     console.log(error);
  //     throw error;
  //   }
  // }
  
}
