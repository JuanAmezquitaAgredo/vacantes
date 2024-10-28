'use client'
import InputField from "../inputField/inputField";
import ButtonComponent from "@/components/atoms/button/button";
import { FormEvent, useEffect, useState } from "react";
import styled from "styled-components";
import SelectField from "../selectField/selectField";
import { Service } from "@/services/coders.service";
import { IPostVacancy } from "@/models/post/post";
import { useRouter } from "next/navigation";

const StyledForm = styled.form`
        max-width: 350px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin: 0.5rem;
    `;
interface ICompanyOptions{
    value: string;
    label: string;
}

interface IFormEmpProps {
    onClose: () => void;
}

const useCompaniesServices = new Service();
export default function FormVac({onClose}:IFormEmpProps) {
    const router = useRouter();
    const [vacant, setVacant] = useState<IPostVacancy>({
        title: '',
        description: '',
        status: '',
        companyId: ''
    });
    const optionsStatus = [
        { value: 'ACTIVE', label: 'Active' },
        { value: 'DISACTIVE', label: 'Disactive' },
    ]
    const [optionsCompany, setOptionsCompany] = useState<ICompanyOptions[]>([]);
    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const companies = await useCompaniesServices.AllCompanies();
                setOptionsCompany(
                    companies && companies.length > 0
                        ? companies.map((company) => ({ value: company.id, label: company.name }))
                        : [{ value: '', label: 'no hay compañías' }]
                );                
            } catch (error) {
                console.error('Error fetching companies:', error);
            }
        };
        fetchCompanies();
    }, []);

    const handleAdd = async (e: FormEvent<Element>) => {
        e.preventDefault();
        try {
            await useCompaniesServices.createVacant(vacant);
            alert('Vacante agregada correctamente');
            onClose();
            router.refresh();
        } catch (error) {
            console.error('Error agregando vacante:', error);
        }
    }
    return (
        <StyledForm>
            <InputField type="text" onChange={(e) => setVacant({ ...vacant, title: e.target.value })} name="title" value={vacant.title} focusColor="primary" label="Título" />
            <InputField type="text-area" onChange={(e) => setVacant({ ...vacant, description: e.target.value })} name="description" value={vacant.description} focusColor="primary" label="Descripción" />
            <SelectField options={optionsStatus} value={vacant.status} onChange={(e) => setVacant({ ...vacant, status: e.target.value })} name="status" placeholder="OPEN" focusColor="primary" label="Estado" />
            <SelectField options={optionsCompany} value={vacant.companyId} onChange={(e) => setVacant({ ...vacant, companyId: e.target.value })} name="company" placeholder="Selecciona una compañia" focusColor="primary" label="Compañía" />
            <ButtonComponent label="Agregar" onClick={(e) => handleAdd(e)} color="primary" hoverColor="primary" />
        </StyledForm>
    );
}
