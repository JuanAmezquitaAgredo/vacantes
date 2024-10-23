"use client"
import Layout from "@/components/layouts/layout";
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
        <h1>hola</h1>
      </Layout>
    </>
  );
}
