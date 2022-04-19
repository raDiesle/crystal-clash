import {ReactTable} from "../../../components/react-table";
import {Cards, CardType, EAttackType, ICard, TAbilities} from "../../../components/cards-game-data";

import css from "./cards-page.module.scss";
import {Box, Card, CardContent} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {ROUTES} from "../../../cc-routes-config";
import {ReactElement, useEffect, useState} from "react";
import {CardFilterForm, SearchInputs} from "./card-filter-form";
import BuildingIcon from "../../../components/icons/building-icon";
import {SpellIcon} from "../../../components/icons/spell-icon";
import {UnitIcon} from "../../../components/icons/unit-icon";
import {CellProps} from "react-table";
import {CardImg} from "../../../components/img-wrappers/card-img";
import {FactionImg} from "../../../components/img-wrappers/faction-img";
import {ArmorImg} from "../../../components/img-wrappers/armor-img";
import {AttackTypeImg} from "../../../components/img-wrappers/attack-type-img";
import {DoubleshotImg} from "../../../components/img-wrappers/doubleshot-img";
import {FlyingImg} from "../../../components/img-wrappers/flying-img";
import {SplashDamageImg} from "../../../components/img-wrappers/splash-damage-img";
import {LegendaryImg} from "../../../components/img-wrappers/legendary-img";
import {SiegeImg} from "../../../components/img-wrappers/siege-img";
import {SubmitHandler} from "react-hook-form";


export function CardsPageTable() {

    const navigate = useNavigate();
    // const [formState, setFormState] = useState<any>({searchAll : ""});
    const [tableData, setTableData] = useState<Array<ICard>>(Cards);

    const onSubmit: SubmitHandler<SearchInputs> = (formState: SearchInputs) => {


        const dataFiltered = Cards.filter(props => {
            const isMatchByFaction = formState.factions.length === 0 ? formState.factions : formState.factions.some(faction => props.faction.includes(faction));
            if (isMatchByFaction === false) {
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


        const data = dataFiltered.map((card) => ({id: card.name, ...card}));
        setTableData(data);
    };

    // @ts-ignore
    return <>
        <Card>
            <CardContent>


                <CardFilterForm onSubmit={onSubmit}/>

                <div>
                    Click on a card to see its description, details and guides.
                </div>

            </CardContent>
        </Card>
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
                    Cell: ({value}: CellProps<Array<ICard>>) => <div className={css.cellWrapperCenter}>{value}</div>
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
                    Header: "Divine",
                    // @ts-ignore
                    accessor: ({isdivine}) => isdivine ? 1 : 0,
                    width: "40",
                    // @ts-ignore
                    Cell: ({value}: CellProps<Array<ICard>>) => (value ? "X" : "")
                },

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
                    accessor: ({attackType}) => attackType === "Ranged" ? 1 : 0,
                    width: "40",
                    // @ts-ignore
                    Cell: ({value}: CellProps<Array<ICard>>) => {
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

                {
                    Header: "Abilities",
                    accessor: "abilities",
                    width: "550",
                    Cell: ({value = []}: CellProps<Array<ICard>>) => {
                        const elements = value.map((value: TAbilities): ReactElement => {

                            if (value === "Siege") {
                                return <><SiegeImg/></>;
                            }
                            if (value === "Legendary") {
                                return <><LegendaryImg/></>
                            }
                            if (value === "Splash Damage") {
                                return <><SplashDamageImg/></>
                            }

                            if (value === "Doubleshot") {
                                return <><DoubleshotImg/></>
                            }

                            if (value === "Flying") {
                                return <><FlyingImg/></>
                            }

                            return <span>{value}</span>;
                        }).reduce((previous: ReactElement, current: ReactElement, currentIndex: number) => {
                            return <>
                                <>{previous} {current}</>
                                <>{currentIndex !== (value.length - 1) ? <span>,&nbsp;</span> : null} </>
                            </>;
                        }, <></>)


                        return <div className={css.cellWrapperLeft}>{elements}</div>
                    }
                },


            ]}
        />
    </>
}