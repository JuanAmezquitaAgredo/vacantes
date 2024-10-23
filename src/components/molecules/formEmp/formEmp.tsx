import InputField from "../inputField/inputField";
import ButtonComponent from "@/components/atoms/button/button";
import { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0.5rem;
`;
export default function FormEmp() {
    const [Name, setName] = useState<string>("");
    const [location, setlocation] = useState<string>("");
    const [contact, setcontact] = useState<string>("");

    
    const handleAdd = async (): Promise<void> => {
        try {
            // Aquí se conectaría a la API para agregar una vacante
            console.log('Agregando vacante:', Name);
        } catch (error) {
            console.error('Error agregando vacante:', error);
        } finally {
            setName('');
        }
    }

    return (
        <StyledForm>
            <InputField type="text" onChange={(e) => setName(e.target.value)} name="name" value={Name} focusColor="secondary" label="Nombre" />
            <InputField type="text" onChange={(e) => setlocation(e.target.value)} name="location" value={location} focusColor="secondary" label="Ubicación" />
            <InputField type="text" onChange={(e) => setcontact(e.target.value)} name="contact" value={contact} focusColor="secondary" label="Contacto" />
            <ButtonComponent label="Agregar" onClick={(e) => handleAdd()} color="secondary" hoverColor="secondary" />
        </StyledForm>
    );
}