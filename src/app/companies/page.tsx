import SectionCardComp from '@/components/organisms/sectionCardsComp/sectionCardsComp';
import CompaniesTemplate from '@/components/templates/companiesPage/companiesPage';
import { CompaniesService } from '@/services/coders.service';
import React from 'react'

const useCompaniesServices = new CompaniesService();
export default async function CompaniesPage() {

  const response = await useCompaniesServices.findAll();
  const companies = response.content;
 

  return (
    <>
      <CompaniesTemplate/>
      <SectionCardComp data={companies}/>
    </>
  )
};
