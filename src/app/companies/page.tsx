import SectionCardComp from '@/components/organisms/sectionCardsComp/sectionCardsComp';
import CompaniesTemplate from '@/components/templates/companiesTemplate/companiesTemplate';
import { IGetCompanyRequest } from '@/models/modelsProgram/program.model';
import { Service } from '@/services/coders.service';
import React, { Suspense } from 'react'

interface Iprops {
  searchParams: IGetCompanyRequest;
}

const useCompaniesServices = new Service();
export default async function CompaniesPage({ searchParams }: Iprops) {
  const page = searchParams.page ? parseInt(searchParams.page.toString()) : 1;
  const name = searchParams.name ? searchParams.name : '';
  const response = await useCompaniesServices.Companies({ page, size: 6, name });

  function SearchBarFallback() {
    return <>Loading...</>
  }

  return (
    <>
      <CompaniesTemplate />
      <Suspense fallback={<SearchBarFallback />}>
        <SectionCardComp data={response} pagination={response.pageable} />
      </Suspense>
    </>
  )
};
