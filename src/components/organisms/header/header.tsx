import styled from "styled-components"

const StyleTitle = styled.h1`
    color: rgb(31, 41, 55);
    font-weight: bold;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    background-color: : rgb(255, 255, 255);
`;
export default function HeaderComponent(){

    return(
        <StyleTitle>Panel de Administración</StyleTitle>
    )
}