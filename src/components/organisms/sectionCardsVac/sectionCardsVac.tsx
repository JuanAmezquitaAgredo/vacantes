'use client'
import ButtonPag from "@/components/atoms/buttonPag/buttonPag";
import CardVacComponents from "@/components/molecules/cardVac/cardVac";
import { IVacancy } from "@/models/coders/coder.model";

import { useState } from "react";
import styled from "styled-components";

interface CardProps {
    data: IVacancy[];
}

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
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 columnas */
    grid-template-rows: auto;
    justify-items: center;
    align-items: start;
`;

const Pagination = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function SectionCardCav({ data }: CardProps) {

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
                {data.slice(0, 6).map((vacant) => (
                    <CardVacComponents
                        key={vacant.id}
                        title={vacant.title}
                        description={vacant.description}
                        status={vacant.status}
                        company={vacant.company.name}
                        onClickEdit={handleEdit}
                        onClickDelete={handleDelete}
                    />
                ))}
            </Cards>
            <Pagination>
                <ButtonPag label="<" onClick={HandleClickBack} />
                pagina 1 de 2
                <ButtonPag label=">" onClick={HandleClickNext} />
            </Pagination>
        </SectionVac>
    );
}