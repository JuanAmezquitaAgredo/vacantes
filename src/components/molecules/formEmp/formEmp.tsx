import { title } from "process";
import InputField from "../inputField/inputField";
import ButtonComponent from "@/components/atoms/button/button";
import { useState } from "react";
import SelectComponent from "@/components/atoms/select/select";

export default function FormVacant() {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [selectedValue, setSelectedValue] = useState("");

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(event.target.value);
    };

    const options = [
        { value: 'Full Stack Developer', label: 'Full Stack Developer' },
        { value: 'Frontend Developer', label: 'Frontend Developer' },
        { value: 'Backend Developer', label: 'Backend Developer' },
        { value: 'UI/UX Designer', label: 'UI/UX Designer' },
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
        <div>
            <InputField type="text" onChange={(e) => setTitle(e.target.value)} name="title" value={title} focusColor="secondary" label="Título" />
            <InputField type="text-area" onChange={(e) => setDescription(e.target.value)} name="description" value={description} focusColor="secondary" label="Descripción" />
            <SelectComponent options={options} value={selectedValue} onChange={handleSelectChange} placeholder="--Select--" focusColor="secondary" />
            <ButtonComponent label="Agregar" onClick={(e) => handleAdd()} color="secondary" hoverColor="secondary" />
        </div>
    );
}