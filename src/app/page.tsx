"use client"
import Modal from "@/components/atoms/modal/modal";
import CardVacComponents from "@/components/molecules/cardVac/cardVac";
import CardCompComponents from "@/components/molecules/cardCom/cardCom";
import FormVac from "@/components/molecules/formVac/formVac";
import HeaderPage from "@/components/organisms/headerPage/headerPage";
import React, { useState } from "react";

export default function Home() {
  const [ModalOpenVac, setModalOpenVac] = useState(false);

  const toggleModalVac = () => {
    setModalOpenVac(!ModalOpenVac);
  };

  const handleEdit = () => {
    console.log('Editando vacante');
  };
  
  const handleDelete = () => {
    console.log('Eliminando vacante');
  };

  return (
    <>
      <HeaderPage label="Agregar Vacante" onClick={toggleModalVac} color="primary" hoverColor="primary" title="Vacantes" />
      <CardVacComponents title='Desarrollador frontend' description='busca desarrollador con experiencia en react' status='OPEN' company='TechCorp' onClickEdit={handleEdit} onClickDelete={handleDelete}/>
      <Modal isOpen={ModalOpenVac} onClose={toggleModalVac} title="Agregar Vacante">
        <FormVac/>
      </Modal>
    </>
  );
}
