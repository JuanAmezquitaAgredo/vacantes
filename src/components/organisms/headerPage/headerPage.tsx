import ButtonAdd from "@/components/atoms/buttonAdd/buttonAdd";
import styled from "styled-components"

interface IHeaderPageProps {
    label: string;
    onClick: () => void;
    color: 'primary' |'secondary';
    hoverColor: 'primary' |'secondary';
    title: string;
}
const StylesHeaderPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const StylesTitle = styled.h1`
    font-size: 1.4rem;
    font-weight: bold;
    margin-right: 2rem;
`;

export default function HeaderPage({ label, onClick, color, hoverColor, title }: IHeaderPageProps){
    return(
        <StylesHeaderPage>
            <StylesTitle>
                {title}
            </StylesTitle>
            <ButtonAdd label={label} onClick={onClick} color={color} hoverColor={hoverColor}/>
        </StylesHeaderPage>
    )
}