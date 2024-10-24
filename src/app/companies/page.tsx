"use client"
import Modal from '@/components/atoms/modal/modal';
import FormEmp from '@/components/molecules/formEmp/formEmp';
import HeaderPage from '@/components/organisms/headerPage/headerPage'
import SectionCardComp from '@/components/organisms/sectionCardsComp/sectionCardsComp';
import React, { useState } from 'react'

export default function CompaniesPage() {
  const [ModalOpenEmp, setModalOpenEmp] = useState(false);

  const toggleModalEmp = () => {
    setModalOpenEmp(!ModalOpenEmp);
  }

  return (
    <>
      <HeaderPage label="Agregar Compañia" onClick={toggleModalEmp} color="secondary" hoverColor="secondary" title="Compañias" />
      <SectionCardComp/>
      <Modal isOpen={ModalOpenEmp} onClose={toggleModalEmp} title="Agregar Compañia">
        <FormEmp/>
      </Modal>
    </>
  )
}
