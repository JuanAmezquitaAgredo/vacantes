import styled from "styled-components";
import HeaderComponent from "../organisms/header/header";
import { NavbarComponent } from "../organisms/navbar/navbar";

interface ILayout{
    title: string;
    children: React.ReactNode;
}

const StylesLayout = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    min-height: 98vh;
    background-color: var(--background);
    border-radius: 10px;
    padding: 1em;
    gap: 2em;
`;

export default function Layout({ title, children }: ILayout) {
    return(
        <StylesLayout>
            <HeaderComponent title={title}/>
            <NavbarComponent/>
            {children}
        </StylesLayout>
    )
}