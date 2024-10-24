"use client"
import Modal from "@/components/atoms/modal/modal";
import SectionCardCav from "@/components/organisms/sectionCardsVac/sectionCardsVac";
import FormVac from "@/components/molecules/formVac/formVac";
import HeaderPage from "@/components/organisms/headerPage/headerPage";
import React, { useState } from "react";

export default function Home() {
  const [ModalOpenVac, setModalOpenVac] = useState(false);

  const toggleModalVac = () => {
    setModalOpenVac(!ModalOpenVac);
  };

  return (
    <>
      <HeaderPage label="Agregar Vacante" onClick={toggleModalVac} color="primary" hoverColor="primary" title="Vacantes" />
      <SectionCardCav />
      <Modal isOpen={ModalOpenVac} onClose={toggleModalVac} title="Agregar Vacante">
        <FormVac/>
      </Modal>
    </>
  );
}
