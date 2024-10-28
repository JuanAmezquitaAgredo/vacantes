'use client'
import Modal from "@/components/atoms/modal/modal";
import FormVac from "@/components/molecules/formVac/formVac";
import HeaderPage from "@/components/organisms/headerPage/headerPage";
import { useState } from "react";
import styled from "styled-components";

const Vacants = styled.div`
`;
export default function VacantsTemplate() {

    const [ModalOpenVac, setModalOpenVac] = useState(false);

    const toggleModalVac = () => {
        setModalOpenVac(!ModalOpenVac);
    };

    return (
        <Vacants>
            <HeaderPage label="Agregar Vacante" onClick={toggleModalVac} color="primary" hoverColor="primary" title="Vacantes" />
            <Modal isOpen={ModalOpenVac} onClose={toggleModalVac} title="Agregar Vacante">
                <FormVac onClose={toggleModalVac} />
            </Modal>
        </Vacants>
    )
}