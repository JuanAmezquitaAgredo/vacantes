import InputField from "../inputField/inputField";
import ButtonComponent from "@/components/atoms/button/button";
import { useState } from "react";
import styled from "styled-components";
import SelectField from "../selectField/selectField";

const StyledForm = styled.form`
    max-width: 350px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0.5rem;
`;
export default function FormVac() {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [selectedStatus, setselectedStatus] = useState("");
    const [selectedCompany, setselectedCompany] = useState("");

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setselectedStatus(event.target.value);
        setselectedCompany(event.target.value);
    };

    const optionsStatus = [
        { value: 'Full Stack Developer', label: 'Full Stack Developer' },
        { value: 'Frontend Developer', label: 'Frontend Developer' },
        { value: 'Backend Developer', label: 'Backend Developer' },
        { value: 'UI/UX Designer', label: 'UI/UX Designer' },
    ]

    const optionsCompany = [
        { value: 'Empresa 1', label: 'Empresa 1' },
        { value: 'Empresa 2', label: 'Empresa 2' },
        { value: 'Empresa 3', label: 'Empresa 3' },
        { value: 'Empresa 4', label: 'Empresa 4' },
    ]

    const handleAdd = async (): Promise<void> => {
        try {
            // Aquí se conectaría a la API para agregar una vacante
            console.log('Agregando vacante:', title);
        } catch (error) {
            console.error('Error agregando vacante:', error);
        } finally {
            setTitle('');
        }
    }
    return (
        <StyledForm>
            <InputField type="text" onChange={(e) => setTitle(e.target.value)} name="title" value={title} focusColor="primary" label="Título" />
            <InputField type="text-area" onChange={(e) => setDescription(e.target.value)} name="description" value={description} focusColor="primary" label="Descripción" />
            <SelectField options={optionsStatus} value={selectedStatus} onChange={handleSelectChange} name="status" placeholder="OPEN" focusColor="primary" label="Estado" />
            <SelectField options={optionsCompany} value={selectedCompany} onChange={handleSelectChange} name="company" placeholder="Selecciona una compañia" focusColor="primary" label="Compañía"/>
            <ButtonComponent label="Agregar" onClick={(e) => handleAdd()} color="primary" hoverColor="primary" />
        </StyledForm>
    );
}

