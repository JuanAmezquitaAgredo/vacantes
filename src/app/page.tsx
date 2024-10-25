import SectionCardCav from "@/components/organisms/sectionCardsVac/sectionCardsVac";
import VacantsTemplate from "@/components/templates/vacantsTemplate/vacantsTemplate";
import { IGetVacanciesRequest } from "@/models/coders/coder.model";
import { Service } from "@/services/coders.service";
import React from "react";

interface Iprops{
  searchParams: IGetVacanciesRequest;
}
const usevacantsServices = new Service();
export default async function Home({searchParams}: Iprops) {
  const page = searchParams.page? parseInt(searchParams.page.toString()) : 1;
  const response = await usevacantsServices.allVacants({ page, size: 6 });
  const vacancies = response.content;

  return (
    <>
      <VacantsTemplate/>    
      <SectionCardCav data={response} pagination={response.pageable}/>
    </>
  );
}
