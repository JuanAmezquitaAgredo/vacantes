"use client"
import Layout from "@/components/layouts/layout";
import HeaderPage from "@/components/organisms/headerPage/headerPage";
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
    <>
      <Layout title="Panel de administración">
        <HeaderPage label="Agregar Vacante" onClick={toggleModalEmp} color="primary" hoverColor="primary" title="Vacantes"/>
      </Layout>
    </>
  );
}
