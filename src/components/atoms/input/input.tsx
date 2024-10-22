import React from 'react';
import styled from 'styled-components';

interface InputProps {
    type: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    focusColor: 'primary' | 'secondary';
}

const colors = {
    primary: 'rgb(233, 213, 255)',
    secondary: 'rgb(251, 207, 232)',
};

const StyledInput = styled.input<{ focusColor: 'primary' | 'secondary' }>`
    background-color: rgb(255, 255, 255);
    border: solid 1px rgb(229, 231, 235);
    border-radius: 5px;
    padding: 8px;

    // Cambio del borde en focus
    &:focus {
        outline: none;
        border-color: ${(props) => colors[props.focusColor]};
        box-shadow: 0 0 5px ${(props) => colors[props.focusColor]};
    }
`;


export default function InputComponent({ type, onChange, name, value, focusColor }: InputProps): React.ReactElement {
    return (
        <StyledInput type={type} name={name} value={value} onChange={onChange} focusColor={focusColor} />
    )

}