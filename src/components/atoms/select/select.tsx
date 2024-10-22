import styled from "styled-components";

interface IselectProps{
    options: {value: string, label: string}[],
    value: string,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    placeholder: string;
    focusColor: 'primary' | 'secondary';
}

const colors = {
    primary: 'rgb(233, 213, 255)',
    secondary: 'rgb(251, 207, 232)',
};

const StyledSelect = styled.select<{ focusColor: 'primary' | 'secondary' }>`
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
export default function SelectComponent({options, value, placeholder, onChange, focusColor}: IselectProps){
    return(
        <StyledSelect focusColor={focusColor} value={value} onChange={onChange}>
            <option value="">{placeholder}</option>
            {options.map(({value, label}) => (
                <option key={value} value={value}>{label}</option>
            ))}
        </StyledSelect>
    );
};