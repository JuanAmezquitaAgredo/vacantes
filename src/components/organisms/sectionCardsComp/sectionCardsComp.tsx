'use client'
import ButtonPag from "@/components/atoms/buttonPag/buttonPag";
import CardCompComponents from "@/components/molecules/cardCom/cardCom";
import { ICompanies, ICompany, IPageable } from "@/models/coders/coder.model";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";

interface CardProps {
    data: ICompanies;
    pagination: IPageable;
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

export default function SectionCardComp({ data , pagination}: CardProps) {

    const searchParams = useSearchParams();
    const router = useRouter();

    const HandleClickNext = (nextPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        if (nextPage <= data.totalPages) {
            params.set('page', nextPage.toString());
            router.push(`?${params.toString()}`);
        }
    };

    const HandleClickBack = (backPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        if (backPage > 0) {
            params.set('page', backPage.toString());
            router.push(`?${params.toString()}`);
        }
    };

    const handleEdit = () => {
        console.log('Editar');
    };

    const handleDelete = () => {
        console.log('Borrar');
    };

    console.log(data.totalPages);

    const courrentPage = pagination.pageNumber + 1;
    return (
        <SectionComp>
            <Cards>
                {data.content.map((company) => (
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
                <ButtonPag label="<" onClick={() => HandleClickBack(courrentPage - 1)} />
                Página {courrentPage} de {data.totalPages}
                <ButtonPag label=">" onClick={() => HandleClickNext(courrentPage + 1)} />
            </Pagination>
        </SectionComp>
    );
}
