'use client'
import InputField from "../inputField/inputField";
import ButtonComponent from "@/components/atoms/button/button";
import { IPostCompany } from "@/models/post/post";
import { Service } from "@/services/coders.service";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0.5rem;
`;

export default function FormEmp() {
    const router = useRouter();
    const [company, setCompany] = useState<IPostCompany>({
        name: "",
        location: "",
        contact: ""
    });

    const useServices = new Service();

    const handleAdd = async (e: FormEvent<Element>) => {
        e.preventDefault();
        try {
            await useServices.createCompany(company);
            alert('Empresa agregada correctamente');
            router.refresh();
        } catch (error) {
            console.error('Error agregando vacante:', error);
        }
    }

    return (
        <StyledForm>
            <InputField type="text" onChange={(e) => setCompany({ ...company, name: e.target.value })} name="name" value={company.name} focusColor="secondary" label="Nombre" />
            <InputField type="text" onChange={(e) => setCompany({ ...company, location: e.target.value })} name="location" value={company.location} focusColor="secondary" label="Ubicación" />
            <InputField type="text" onChange={(e) => setCompany({ ...company, contact: e.target.value })} name="contact" value={company.contact} focusColor="secondary" label="Contacto" />
            <ButtonComponent label="Agregar" onClick={(e) => handleAdd(e)} color="secondary" hoverColor="secondary" />
        </StyledForm>
    );
}