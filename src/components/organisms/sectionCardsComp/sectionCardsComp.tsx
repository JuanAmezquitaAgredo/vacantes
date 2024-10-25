'use client'
import ButtonPag from "@/components/atoms/buttonPag/buttonPag";
import CardCompComponents from "@/components/molecules/cardCom/cardCom";
import { ICompany } from "@/models/coders/coder.model";
import { useState } from "react";
import styled from "styled-components";

interface CardProps {
    data: ICompany[];
}

const SectionComp = styled.div`
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
    margin-top: 16px;
`;

export default function SectionCardComp({ data }: CardProps) {

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
        <SectionComp>
            <Cards>
                {data.slice(0, 6).map((company) => (
                    <CardCompComponents
                        key={company.id}
                        title={company.name}
                        location={company.location}
                        contact={company.contact}
                        onClickEdit={handleEdit}
                        onClickDelete={handleDelete}
                    />
                ))}
            </Cards>
            <Pagination>
                <ButtonPag label="<" onClick={HandleClickBack} />
                Página {currentPage} de 2
                <ButtonPag label=">" onClick={HandleClickNext} />
            </Pagination>
        </SectionComp>
    );
}
