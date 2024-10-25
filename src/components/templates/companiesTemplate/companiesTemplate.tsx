'use client'
import Modal from "@/components/atoms/modal/modal";
import FormEmp from "@/components/molecules/formEmp/formEmp";
import HeaderPage from "@/components/organisms/headerPage/headerPage";
import { useState } from "react";
import styled from "styled-components";

const Companies = styled.div`
`;
export default function CompaniesTemplate() {

    const [ModalOpenEmp, setModalOpenEmp] = useState(false);

    const toggleModalEmp = () => {
        setModalOpenEmp(!ModalOpenEmp);
    }

    return (
        <Companies>
            <HeaderPage label="Agregar Compañia" onClick={toggleModalEmp} color="secondary" hoverColor="secondary" title="Compañias" />
            <Modal isOpen={ModalOpenEmp} onClose={toggleModalEmp} title="Agregar Compañia">
                <FormEmp />
            </Modal>
        </Companies>
    )
}