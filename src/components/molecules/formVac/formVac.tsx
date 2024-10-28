import InputField from "../inputField/inputField";
import ButtonComponent from "@/components/atoms/button/button";
import { FormEvent, useState } from "react";
import styled from "styled-components";
import SelectField from "../selectField/selectField";
import { IGetCompanyRequest } from "@/models/modelsProgram/program.model";
import { Service } from "@/services/coders.service";
import { IPostVacancy } from "@/models/post/post";

const StyledForm = styled.form`
    max-width: 350px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0.5rem;
`;

interface Iprops{
    searchParams: IGetCompanyRequest;
  }

const useCompaniesServices = new Service();
export default function FormVac() {
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

    const optionsCompany = [
        { value: 'Empresa 1', label: 'Empresa 1' },
        { value: 'Empresa 2', label: 'Empresa 2' },
        { value: 'Empresa 3', label: 'Empresa 3' },
        { value: 'Empresa 4', label: 'Empresa 4' },
    ]

    const handleAdd = async (e: FormEvent<Element>)=> {
        e.preventDefault();
        try {
            // Aquí se conectaría a la API para agregar una vacante
        } catch (error) {
            console.error('Error agregando vacante:', error);
        }
    }
    return (
        <StyledForm>
            <InputField type="text" onChange={(e) => setVacant({...vacant, title: e.target.value})} name="title" value={vacant.title} focusColor="primary" label="Título" />
            <InputField type="text-area" onChange={(e) => setVacant({...vacant, description: e.target.value})} name="description" value={vacant.description} focusColor="primary" label="Descripción" />
            <SelectField options={optionsStatus} value={vacant.status} onChange={(e) => setVacant({...vacant, status: e.target.value})} name="status" placeholder="OPEN" focusColor="primary" label="Estado" />
            <SelectField options={optionsCompany} value={vacant.companyId} onChange={(e) => setVacant({...vacant, companyId: e.target.value})} name="company" placeholder="Selecciona una compañia" focusColor="primary" label="Compañía"/>
            <ButtonComponent label="Agregar" onClick={(e) => handleAdd(e)} color="primary" hoverColor="primary" />
        </StyledForm>
    );
}
