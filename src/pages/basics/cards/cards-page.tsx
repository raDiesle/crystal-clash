import {ReactTable} from "../../../components/react-table";
import {Cards} from "../../../components/cards-data-simple";
import {imgPathCardFn, imgPathFactionFn} from "../../../components/img-utils";

import css from "./cards-page.module.scss";

export function CardsPage(){
    return   <ReactTable
        data={Cards.map((card) =>({id: card.name, ...card}))}
        minTableHeight={1000}
        sortBy={[{ id: "faction", desc: true }, { id: "tier", desc:  false }, { id: "type", desc: true }, { id: "name", desc: true }]}
        columns={[
            // {
            //     accessor: "image",
            //     Header: "",
            //     width: "30",
            //     Cell: ({ value }) => <img className={css.cardImage} src={imgPathFn(value)} alt={value} />
            // }
            {
                Header: "",
                accessor: "image",
                width: "80",
                // @ts-ignore
                Cell: ({ value  }) => <img src={imgPathCardFn(value)} alt={value} className={css.imageCardIcon}/>
            },
            {
                Header: "Name",
                accessor: "name",
                width: "220",
            },
            {
                Header: "Faction",
                accessor: "faction",
                width: "80",
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
                width: "45",
            },

            ]}
        />
}