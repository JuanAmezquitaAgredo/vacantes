import { ICompanies, IGetCompanyRequest, IGetVacanciesRequest, IVacancy, IVacancyResponse } from "@/models/coders/coder.model";
import { HttpClient } from "@/utils/client-http";

export class  Service {
  private httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient();
  }

  async allCompanies({page, size }: IGetCompanyRequest) {
    try {
      const response = this.httpClient.get<ICompanies>(`company?page=${page}&size=${size}`);

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

  // async destroy(id: string) {
  //   try {
  //     const coders = this.httpClient.delete<ICoder>(`coders/${id}`);

  //     return coders;
  //   } catch (error) {
  //     console.log(error);
  //     throw error;
  //   }
  // }

  // async create(coder: ICreateCoder) {
  //   try {
  //     const createdCoder = await this.httpClient.post<ICoder, ICreateCoder>("coders", coder);
  //     return createdCoder;
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
