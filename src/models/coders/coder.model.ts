export interface ICompany{
  id: string;
  name: string;
  location: string;
  contact: string;
  vacants: []
}

export interface IPageable{
  pageNumber: number;
  pageSize: number;
  sort: {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean
  };
  offset: number;
  paged: boolean;
  unpaged: boolean
}

export interface ICompanies {
  content: ICompany[];
  pageable: IPageable;
  totalPage: number;
  totalElements: number;
  last: boolean;
  numberOfElements: number;
  size: number;
  number: number;
  sort: {};
  first: boolean;
  empty: boolean;
}

export interface ICreateCoder {
  name: string;
  avatar: string;
}
