import ButtonsCard from "@/components/atoms/buttonsCard/buttonsCard";
import InfoCard from "@/components/atoms/infoCardVac/infoCardVac";
import styled from "styled-components";

interface ICardProps{
    title: string;
    description: string;
    status: string;
    company: string;
    onClickEdit: (e: React.FormEvent) => void;
    onClickDelete: (e: React.FormEvent) => void;
}

const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 370px;
    height: 190px;
    padding: 10px;
    border: solid rgb(229, 231, 235) 1px;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export default function CardVacComponents({title, description, status, company, onClickEdit, onClickDelete}: ICardProps ){
    return(
        <Card>
            <InfoCard title={title} description={description} status={status} company={company}/>
            <ButtonsCard onClickEdit={onClickEdit} onClickDelete={onClickDelete} color="primary" hoverColor="primary"/>
        </Card>
    )
};