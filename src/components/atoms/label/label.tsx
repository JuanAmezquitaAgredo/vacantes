import React from "react";
import styled from "styled-components";

interface ILabelProps{
    text: string;
}
const StyledLabel = styled.label`
    background-color: rgb(255, 255, 255);
    border: solid 1px rgb(229, 231, 235);
    border-radius: 5px;
`;
export default function LabelComponent({text}: ILabelProps) {
    return(
        <StyledLabel>
            {text}
        </StyledLabel>
    )
}