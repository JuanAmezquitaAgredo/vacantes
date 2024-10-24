import ButtonPag from "@/components/atoms/buttonPag/buttonPag";
import CardVacComponents from "@/components/molecules/cardVac/cardVac";

import { useState } from "react";
import styled from "styled-components";

const SectionVac = styled.div`
    width: 100%;
    height: 65vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Cards = styled.div`
    width: 100%;
    height: 80vh;
`;

const Pagination = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function SectionCardCav() {

    const [currentPage, setCurrentPage] = useState(1);

    const HandleClickNext = () => {
        setCurrentPage(currentPage + 1);
    };

    const HandleClickBack = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleEdit = () => {
        console.log('Editar');
    };

    const handleDelete = () => {
        console.log('Borrar');
    };

    return (
        <SectionVac>
            <Cards>
            <CardVacComponents title='Desarrollador frontend' description='busca desarrollador con experiencia en react' status='OPEN' company='TechCorp' onClickEdit={handleEdit} onClickDelete={handleDelete}/>
            </Cards>
            <Pagination>
                <ButtonPag label="<" onClick={HandleClickBack} />
                pagina 1 de 2
                <ButtonPag label=">" onClick={HandleClickNext} />
            </Pagination>
        </SectionVac>
    );
}