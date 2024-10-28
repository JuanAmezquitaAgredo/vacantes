import SectionCardComp from '@/components/organisms/sectionCardsComp/sectionCardsComp';
import CompaniesTemplate from '@/components/templates/companiesTemplate/companiesTemplate';
import { IGetCompanyRequest } from '@/models/modelsProgram/program.model';
import { Service } from '@/services/coders.service';
import React from 'react'

interface Iprops{
  searchParams: IGetCompanyRequest;
}

const useCompaniesServices = new Service();
export default async function CompaniesPage({searchParams}: Iprops) {
  const page = searchParams.page? parseInt(searchParams.page.toString()) : 1;
  const response = await useCompaniesServices.Companies({ page, size: 6 });

  return (
    <>
      <CompaniesTemplate/>
      <SectionCardComp data={response} pagination={response.pageable}/>
    </>
  )
};
