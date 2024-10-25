import SectionCardComp from '@/components/organisms/sectionCardsComp/sectionCardsComp';
import CompaniesTemplate from '@/components/templates/companiesTemplate/companiesTemplate';
import { Service } from '@/services/coders.service';
import React from 'react'

const useCompaniesServices = new Service();
export default async function CompaniesPage() {

  const response = await useCompaniesServices.allCompanies();
  const companies = response.content;
 

  return (
    <>
      <CompaniesTemplate/>
      <SectionCardComp data={companies}/>
    </>
  )
};
