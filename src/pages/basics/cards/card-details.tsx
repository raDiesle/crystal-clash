import {CcBreadcrumbs} from "../../../header/cc-breadcrumbs";
import {Card, CardContent, Container} from "@mui/material";
import {Editor} from "../../../editor/editor";
import {useParams} from "react-router-dom";
import { Cards } from "../../../components/cards-data-simple";
import {imgPathCardFn} from "../../../components/img-utils";

export function CardDetails(){
    const {cardName = "" } = useParams();

    const nameAsKey = cardName.replace(" ", "").replace(",", "").toLowerCase();

    // @ts-ignore
    const image : string = Cards.find(({name}) => name === cardName).image;
    return <>
        <CcBreadcrumbs/>
        {/* @ts-ignore */ }
        <Container>

            <Card>
                <CardContent>
                    <img src={imgPathCardFn(image)} alt={image}/>
                </CardContent>
            </Card>

            <Editor pageTitle={cardName} categoryPath="card-details" editorPath={nameAsKey} />
        </Container></>
}