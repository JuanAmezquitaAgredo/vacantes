import ButtonsCard from "@/components/atoms/buttonsCard/buttonsCard";
import InfoCardComp from "@/components/atoms/infoCarCom/infoCardComp";
import styled from "styled-components";

interface ICardProps{
    title: string;
    location: string;
    contact: string;
    onClickEdit: (e: React.FormEvent) => void;
    onClickDelete: (e: React.FormEvent) => void;
}

const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 370px;
    height: 180px;
    padding: 15px;
    border: solid rgb(229, 231, 235) 1px;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export default function CardCompComponents({title, location, contact, onClickEdit, onClickDelete}: ICardProps ){
    return(
        <Card>
            <InfoCardComp title={title} location={location} contact={contact}/>
            <ButtonsCard onClickEdit={onClickEdit} onClickDelete={onClickDelete} color="primary" hoverColor="primary"/>
        </Card>
    )
};