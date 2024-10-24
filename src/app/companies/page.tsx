"use client"
import Modal from '@/components/atoms/modal/modal';
import CardCompComponents from '@/components/molecules/cardCom/cardCom';
import FormEmp from '@/components/molecules/formEmp/formEmp';
import HeaderPage from '@/components/organisms/headerPage/headerPage'
import React, { useState } from 'react'

export default function CompaniesPage() {
  const [ModalOpenEmp, setModalOpenEmp] = useState(false);

  const toggleModalEmp = () => {
    setModalOpenEmp(!ModalOpenEmp);
  }

  const handleEdit = () => {
    console.log('Editar');
  }
  
  const handleDelete = () => {
    console.log('Borrar');
  }

  return (
    <>
      <HeaderPage label="Agregar Compañia" onClick={toggleModalEmp} color="secondary" hoverColor="secondary" title="Compañias" />
      <CardCompComponents title="Techcorp" location="Ciudad de mexico" contact="555-1010" onClickEdit={handleEdit} onClickDelete={handleDelete}/>
      <Modal isOpen={ModalOpenEmp} onClose={toggleModalEmp} title="Agregar Compañia">
        <FormEmp/>
      </Modal>
    </>
  )
}
