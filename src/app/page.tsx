import SectionCardCav from "@/components/organisms/sectionCardsVac/sectionCardsVac";
import VacantsTemplate from "@/components/templates/vacantsTemplate/vacantsTemplate";
import { Service } from "@/services/coders.service";
import React from "react";

const usevacantsServices = new Service();
export default async function Home() {

  const response = await usevacantsServices.allVacants();
  const vacancies = response.content;

  return (
    <>
      <VacantsTemplate/>    
      <SectionCardCav data={vacancies}/>
    </>
  );
}
