import {Cards, ICard} from "../../../components/cards-game-data";
import {Box, Card, CardContent} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {CardFilterForm, SearchInputs} from "./card-filter-form";
import {NavigateToHome} from "../../../header/navigate-to-home";
import {CardsTable} from "./cards-table";


export function CardsTableOverviewPage() {


    const [tableData, setTableData] = useState<ICard[]>(Cards);

    const onSubmit = (formState: SearchInputs) => {

        const dataFiltered = Cards.filter(props => {

            const isMatchByFaction = formState.factions.length === 0 ? formState.factions : formState.factions.some(faction => props.faction.includes(faction));
            if (isMatchByFaction === false) {
                return false;
            }


            const matchByAbility = formState.abilities.length === 0 ? true : formState.abilities.every(ability => typeof props.abilities === "undefined" ? false : props.abilities.includes(ability.code));
            if (matchByAbility === false) {
                return false;
            }

            return Object.values(props).some(value => {
                const checkContains = (compareValue: any) => compareValue.toLowerCase().includes(formState.searchAll.toLowerCase());

                if (Number.isNaN(value)) {
                    return false;
                }
                if (!isNaN(value)) {
                    return false;//(""+value).includes(searchAllValue);
                }
                if (Array.isArray(value)) {
                    return value.some(arrayValue => checkContains(arrayValue));
                }

                return checkContains(value);
            })
        });


        const filteredTableData = dataFiltered.map((card) => ({id: card.name, ...card}));
        setTableData(filteredTableData);
    };

    // @ts-ignore
    return <>
        <NavigateToHome/>
        <Card>
            <CardContent>
                <CardFilterForm onSubmit={onSubmit}/>
            </CardContent>
        </Card>
        <Box pt={1}>
            Click on the row to navigate to its description, details and wiki guide.
        </Box>
        <CardsTable tableData={tableData}/>
    </>
}