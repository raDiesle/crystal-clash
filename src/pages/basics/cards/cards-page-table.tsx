import {ReactTable} from "../../../components/react-table";
import {Cards, CardType, EAttackType, ICard, TAbilities} from "../../../components/cards-game-data";

import css from "./cards-page.module.scss";
import {Box, Card, CardContent} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../../cc-routes-config";
import {ReactElement, useState} from "react";
import {CardFilterForm, SearchInputs} from "./card-filter-form";
import BuildingIcon from "../../../components/icons/building-icon";
import {SpellIcon} from "../../../components/icons/spell-icon";
import {UnitIcon} from "../../../components/icons/unit-icon";
import {CellProps} from "react-table";
import {CardImg} from "../../../components/img-wrappers/card-img";
import {FactionImg} from "../../../components/img-wrappers/faction-img";
import {ArmorImg} from "../../../components/img-wrappers/armor-img";
import {AttackTypeImg} from "../../../components/img-wrappers/attack-type-img";
import {ABILITIES_TO_ICON_MAPPING} from "./abilities-to-icon-mapping";


export function CardsPageTable() {

    const navigate = useNavigate();
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
        <Card>
            <CardContent>
                <CardFilterForm onSubmit={onSubmit}/>
            </CardContent>
        </Card>
        <Box pt={1}>
            Click on the row to navigate to its description, details and wiki guide.
        </Box>
        <ReactTable
            data={tableData}
            sortBy={[{id: "faction", desc: true}, {id: "tier", desc: false}, {id: "type", desc: true}, {
                id: "name",
                desc: true
            }]}
            // @ts-ignore
            onRowClick={({name}) => {
                navigate(ROUTES["/card-details/"] + name);
            }}
            columns={[
                {
                    Header: 'General',
                    columns: [


                        {
                            Header: "",
                            accessor: "image",
                            width: "80",
                            Cell: ({value}: CellProps<Array<ICard>>) => <div className={css.cellWrapperCenter}
                                                                             style={{margin: "-7px 0"}}>
                                <CardImg name={value}/>
                            </div>
                        },
                        {
                            Header: "Name",
                            accessor: "name",
                            width: "220",
                            Cell: ({value}: CellProps<Array<ICard>>) => <div className={css.cellWrapperLeft}>
                                <div>{value}</div>
                            </div>
                        },
                        {
                            Header: "Faction",
                            accessor: "faction",
                            width: "60",
                            Cell: ({value}: CellProps<Array<ICard>>) => <div className={css.cellWrapperCenter}>
                                <FactionImg faction={value}/>
                            </div>
                        },
                        {
                            Header: "Type",
                            accessor: "type",
                            width: "50",
                            Cell: ({value}: CellProps<Array<ICard>>) => {
                                const config = new Map<CardType, ReactElement>([
                                    ["Building", <BuildingIcon/>],
                                    ["Spell", <SpellIcon/>],
                                    ["Unit", <UnitIcon/>]
                                ]);
                                return <div className={css.cellWrapperCenter} title={value}>{config.get(value)}</div>;
                            }
                        },
                        {
                            Header: "Tier",
                            accessor: "tier",
                            width: "50",
                            Cell: ({value}: CellProps<Array<ICard>>) => <div
                                className={css.cellWrapperCenter}>{value}</div>
                        },
                        {
                            Header: "Charges",
                            accessor: "charges",
                            width: "50",
                        },
                        {
                            Header: "Charge Cooldown",
                            accessor: "chargeCooldown",
                            width: "60",
                        },
                        {
                            Header: "Mana cost",
                            accessor: "manaCost",
                            width: "60",
                        },
                        {
                            Header: "Abilities",
                            accessor: "abilities",
                            width: "210",
                            Cell: ({value = []}: CellProps<Array<ICard>>) => {
                                const elements = value.map((value: TAbilities): { type: string, element: ReactElement } => {

                                    const mappedElement = ABILITIES_TO_ICON_MAPPING.get(value);

                                    if (typeof mappedElement !== "undefined") {
                                        return {
                                            type: "IMAGE",
                                            element: mappedElement
                                        };
                                    }

                                    return {
                                        type: "TEXT",
                                        element: <span>{value}</span>
                                    };
                                }).reduce((previous: { type: string, element: ReactElement }, current: { type: string, element: ReactElement }, currentIndex: number, original: Array<{ type: string, element: ReactElement }>) => {
                                    const prevType = currentIndex === 0 ? "TEXT" : original[currentIndex].type;
                                    const nextType = currentIndex === original.length - 1 ? "IMAGE" : original[currentIndex + 1].type;
                                    const renderCommaByPositionRule = (currentIndex !== (value.length - 1));
                                    const renderCommaByTypeRule = prevType === "TEXT" && current.type === "TEXT" && (nextType === "TEXT");

                                    return <>
                                        <>{previous} {current.element}</>
                                        <>{renderCommaByPositionRule && renderCommaByTypeRule ?
                                            <span>,&nbsp;</span> : <>&nbsp;</>} </>
                                    </>;
                                }, <></>)


                                return <div className={css.cellWrapperLeft}>{elements}</div>
                            }
                        },

                    ]
                },
                {
                    Header: 'Unit',
                    columns: [


                        {
                            Header: "Squad Size",
                            accessor: "squadSize",
                            width: "35",
                        },

                        {
                            Header: "Health per Unit",
                            accessor: "healthPerUnit",
                            width: "45",
                        },

                        {
                            Header: "Total Health",
                            accessor: "totalHealth",
                            width: "50",
                            // @ts-ignore
                            Cell: ({value}: CellProps<Array<ICard>>) => (isNaN(value) ? "" : Math.round(value))
                        },

                        {
                            Header: "Energy",
                            accessor: "energy",
                            width: "40",
                        },

                        {
                            Header: "Max Energy",
                            accessor: "maxEnergy",
                            width: "40",
                        },

                        {
                            Header: "Armor",
                            accessor: "armorType",
                            width: "40",
                            // @ts-ignore
                            Cell: ({value}: CellProps<Array<ICard>>) => {
                                if (typeof value === "undefined") {
                                    return null;
                                }
                                return <div className={css.cellWrapperCenter}>
                                    <ArmorImg armor={value}/>
                                </div>
                            }
                        },
                        {
                            Header: "Damage per Hit",
                            accessor: "damagePerHit",
                            width: "40",
                        },

                        {
                            Header: "Attack Speed",
                            accessor: "attackSpeed",
                            width: "40",
                        },

                        {
                            Header: "Total Damage",
                            accessor: "totalDamage",
                            width: "50",
                            // @ts-ignore
                            Cell: ({value}: CellProps<Array<ICard>>) => (isNaN(value) ? "" : Math.round(value))
                        },

                        {
                            Header: "Total Dps",
                            accessor: "totalDps",
                            width: "50",
                            // @ts-ignore
                            Cell: ({value}: CellProps<Array<ICard>>) => (isNaN(value) ? "" : Math.round(value))
                        },


                        {
                            Header: "Ranged",
                            // @ts-ignore
                            accessor: ({attackType}) => {
                                if (typeof attackType === "undefined") {
                                    return 2;
                                }
                                return attackType === "Ranged" ? 1 : 0;
                            },
                            width: "40",
                            // @ts-ignore
                            Cell: ({value}: CellProps<Array<ICard>>) => {
                                if (value === 2) {
                                    return null;
                                }
                                const displayValue: EAttackType = (value ? EAttackType.Ranged : EAttackType.Melee);
                                return <div className={css.cellWrapperCenter}>
                                    <AttackTypeImg attackType={displayValue}/>
                                </div>
                            }
                        },

                        {
                            Header: "Attack Range",
                            accessor: "attackRange",
                            width: "40",
                        },

                        {
                            Header: "Collision Radius",
                            accessor: "collisionRadius",
                            width: "50",
                        },
                    ]
                },


            ]}
        />
    </>
}