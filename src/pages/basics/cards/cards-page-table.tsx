import {ReactTable} from "../../../components/react-table";
import {Cards} from "../../../components/cards-data-simple";
import {imgPathCardFn, imgPathFactionFn} from "../../../components/img-utils";

import css from "./cards-page.module.scss";
import {Box, Card, CardContent, Container, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../../cc-routes-config";
import SearchIcon from '@mui/icons-material/Search';
import {useState} from "react";

export function CardsPageTable(){

    const navigate = useNavigate();
    const [searchAllValue, setSearchAllValue] = useState("");
    const dataFiltered = Cards.filter(props => {
        return Object.values(props).some(value => value.toLowerCase().includes(searchAllValue.toLowerCase()))
    });

    const data = dataFiltered.map((card) =>({id: card.name, ...card}));
    // @ts-ignore
    return <Container sx={{py : 2}}>
        <Card>
            <CardContent>
                <div>
                    Click on a card to see its description, details and guides.
                </div>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <SearchIcon sx={{ color: '#70b7b7', mr: 1, my: 0.5 }} />
                        <TextField id="searchAll" label="Search in all columns" variant="standard" onChange={(ev)=>{
                            setSearchAllValue(ev.target.value);
                            }
                        }/>
                    </Box>
                </Box>

            </CardContent>
        </Card>
    <ReactTable
        data={data}
        minTableHeight={1000}
        sortBy={[{ id: "faction", desc: true }, { id: "tier", desc:  false }, { id: "type", desc: true }, { id: "name", desc: true }]}
    // @ts-ignore
        onRowClick={ ({name})=>{
            navigate(ROUTES["/card-details/"] + name );
        }}
        columns={[
            // {
            //     accessor: "image",
            //     Header: "",
            //     width: "30",
            //     Cell: ({ value }) => <img className={css.cardImage} src={imgPathFn(value)} alt={value} />
            // }d
            {
                Header: "",
                accessor: "image",
                width: "80",
                // @ts-ignore
                Cell: ({ value  }) => <div className={css.cellWrapper}><img src={imgPathCardFn(value)} alt={value} className={css.imageCardIcon}/></div>
            },
            {
                Header: "Name",
                accessor: "name",
                width: "220",
                // @ts-ignore
                Cell: ({ value  }) => <div style={{display: "flex", justifyContent: "flex-start", width: "100%"}}><div>{value}</div></div>
            },
            {
                Header: "Faction",
                accessor: "faction",
                width: "100",
                // @ts-ignore
                     Cell: ({ value  }) => <img src={imgPathFactionFn(value)} alt={value} className={css.imageFactionIcon}/>
            },
            {
                Header: "Type",
                accessor: "type",
                width: "80",
            },

            {
                Header: "Tier",
                accessor: "tier",
                width: "80",
            },

            ]}
        /></Container>
}