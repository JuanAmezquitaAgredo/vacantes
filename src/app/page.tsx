"use client"
import Modal from "@/components/atoms/modal/modal";
import FormEmp from "@/components/molecules/formEmp/formEmp";
import FormVac from "@/components/molecules/formVac/formVac";
import React, { useState } from "react";

export default function Home() {
  const [ModalOpenEmp, setModalOpenEmp] = useState(false);
  const [ModalOpenVac, setModalOpenVac] = useState(false);

  const toggleModalEmp = () => {
    setModalOpenEmp(!ModalOpenEmp);
  };

  const toggleModalVac = () => {
    setModalOpenVac(!ModalOpenVac);
  };
  
  return (
    <div>
      <h1>home</h1>
      <button onClick={toggleModalEmp}>Empresa</button>
      <button onClick={toggleModalVac}>Vacantes</button>
      <Modal isOpen={ModalOpenEmp} onClose={toggleModalEmp} title="Agregar Compañía">
        <FormEmp/>
      </Modal>
      <Modal isOpen={ModalOpenVac} onClose={toggleModalVac} title="Agregar Vacante">
        <FormVac/>
      </Modal>
    </div>
  );
}
