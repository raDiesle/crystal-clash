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
import {DivineImg} from "../../../components/img-wrappers/divine-img";
import {SiegeImg} from "../../../components/img-wrappers/siege-img";
import {SubmitHandler} from "react-hook-form";
import {DivergenceIcon} from "../../../components/icons/divergence-icon";
import {LimitedGadgetIcon} from "../../../components/icons/limited-gadget-icon";
import {DismantlementIcon} from "../../../components/icons/dismantlement-icon";
import {EnergyFlowIcon} from "../../../components/icons/energy-flow-icon";
import {FlatFiringAngleIcon} from "../../../components/icons/flat-fireing-angle";
import {SurefireIcon} from "../../../components/icons/surefire-icon";
import {LegendaryImg} from "../../../components/img-wrappers/legendary-img";
import {MonumentalIcon} from "../../../components/icons/monumental-icon";
import {ShieldsUpIcon} from "../../../components/icons/shields-up-icon";
import {PredatorStunnedIcon} from "../../../components/icons/predator-stunned-icon";
import {DeathcryLasttryIcon} from "../../../components/icons/deathcry-lasttry-icon";
import {WuxiFingerholdIcon} from "../../../components/icons/wuxi-fingerhold-icon";
import {PuryfyingPotionIcon} from "../../../components/icons/purifying-potion-icon";
import {EnchantmentArmorIcon} from "../../../components/icons/enchantment-armor-icon";
import {ArtilleryIcon} from "../../../components/icons/artillery-icon";
import {LightOverchargeIcon} from "../../../components/icons/light-overcharge-icon";
import {EnergyInfusionIcon} from "../../../components/icons/energy-infusion-icon";
import {LightGrenadesIcon} from "../../../components/icons/light-grenades-icon";
import {InnerfireBounce} from "../../../components/icons/innerfire-bounce-icon";
import {FuryIcon} from "../../../components/icons/fury-icon";
import {DevotionIcon} from "../../../components/icons/devotion-icon";
import {InvokeSmolderingIntenseIcon} from "../../../components/icons/invoke-smoldering-intense-icon";
import {WalloflightIcon} from "../../../components/icons/walloflight-icon";
import {WarmingLightIcon} from "../../../components/icons/warming-light-icon";
import {GuardianLightIcon} from "../../../components/icons/guardianlight-icon";
import {LightwaveIcon} from "../../../components/icons/lightwave-icon";
import {SteadyAimIcon} from "../../../components/icons/steadyaim-icon";
import {BiggamehunterIcon} from "../../../components/icons/biggamehunter-icon";
import {HomelandIcon} from "../../../components/icons/homeland-icon";
import {FrostslimeIcon} from "../../../components/icons/frostslime-icon";
import {DeathcryFrostexplosionIcon} from "../../../components/icons/deathcry-frostexplosion-icon";
import {CleaveIcon} from "../../../components/icons/cleave-icon";
import {SoulgathererIcon} from "../../../components/icons/soulgatherer-icon";
import {FeastIcon} from "../../../components/icons/feast-icon";
import {DeathcryEnergysupplyIcon} from "../../../components/icons/deathcry-energysupply-icon";
import {PredatorFrozenIcon} from "../../../components/icons/predator-frozen-icon";
import {UndyingIcon} from "../../../components/icons/undying-icon";
import {InvokeInsidiousIcon} from "../../../components/icons/invoke-insidious-icon";
import {EnchantmentGrievouswoundsIcon} from "../../../components/icons/enchantment-grievouswounds-icon";
import {DeathcryBlastIcon} from "../../../components/icons/deathcry-blast-icon";
import {ApexpredatorFrozenIcon} from "../../../components/icons/apexpredator-frozen-icon";
import {FrostnovaIcon} from "../../../components/icons/frostnova-icon";
import {SoulenhancerIcon} from "../../../components/icons/soulenhancer-icon";
import {RitualSummonIcon} from "../../../components/icons/ritual-summon-icon";
import {AbsorbIcon} from "../../../components/icons/absorb-icon";
import {StatusAdaptionIcon} from "../../../components/icons/status-adaption-icon";
import {StatusReflectorIcon} from "../../../components/icons/status-reflector-icon";
import {VoidhunterIcon} from "../../../components/icons/voidhunter-icon";


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
                            width: "550",
                            Cell: ({value = []}: CellProps<Array<ICard>>) => {
                                const elements = value.map((value: TAbilities): {type: string, element : ReactElement } => {

                                    const iconMappingConfig  = new Map<TAbilities, ReactElement>([
                                        ["Siege", <SiegeImg/>] ,
                                        ["Legendary", <LegendaryImg/>],
                                        ["Divine", <DivineImg/>],
                                        ["Splash Damage", <SplashDamageImg/>],
                                        ["Doubleshot", <DoubleshotImg/>],
                                        ["Flying", <FlyingImg/>],
                                        ["Tripleshot", <DivergenceIcon/>] ,
                                        ["Limited: Gadget", <LimitedGadgetIcon/>],
                                        ["Dismantlement", <DismantlementIcon/>] ,
                                        ["Energy Flow"  , <EnergyFlowIcon/>] ,
                                        ["Flat Firing Angle"  , <FlatFiringAngleIcon/>] ,
                                        ["Surefire"  , <SurefireIcon/>],
                                        ["Monumental" , <MonumentalIcon/>] ,
                                        ["Raise your shield!" , <ShieldsUpIcon />],
                                        ["Predator: Stunned" , <PredatorStunnedIcon/>],
                                        ["Deathcry: Last Try", <DeathcryLasttryIcon />],
                                        ["Wuxi Finger Hold", <WuxiFingerholdIcon />],
                                        ["Purifying Potion", <PuryfyingPotionIcon />],
                                        ["Enchantment: Armor", <EnchantmentArmorIcon/>],
                                        ["Artillery", <ArtilleryIcon/>],
                                        ["Light Overcharge", <LightOverchargeIcon/>],
                                        ["Energy Infusion", <EnergyInfusionIcon />],
                                        ["Light Grenades", <LightGrenadesIcon/>],
                                        ["Inner Fire: Bounce", <InnerfireBounce/>],
                                        ["Fury", <FuryIcon/>],
                                        ["Devotion Aura", <DevotionIcon/>],
                                        ["Invoke: Smoldering Intensity", <InvokeSmolderingIntenseIcon/>],
                                        ["Wall of Light", <WalloflightIcon/>],
                                        ["Warming Light", <WarmingLightIcon />],
                                        ["Guarding Light", <GuardianLightIcon />],
                                        ["Light Wave", <LightwaveIcon/>],
                                        ["Steady Aim", <SteadyAimIcon />],
                                        ["Big Game Hunter", <BiggamehunterIcon />],
                                        ["Homeland", <HomelandIcon />],
                                        ["Frostslime", <FrostslimeIcon/>],
                                        ["Deathcry: Frost Explosion", <DeathcryFrostexplosionIcon/>],
                                        ["Soulgatherer", <SoulgathererIcon/>],
                                        ["Feast", <FeastIcon/>],
                                        ["Deathcry: Energy Supply", <DeathcryEnergysupplyIcon/>],
                                        ["Predator: Frozen", <PredatorFrozenIcon />],
                                        ["Undying", <UndyingIcon/>],
                                        ["Invoke: Insidious", <InvokeInsidiousIcon />],
                                        ["Enchantment: Grievous Wounds", <EnchantmentGrievouswoundsIcon/>],
                                        ["Deathcry: Blast", <DeathcryBlastIcon />],
                                        ["Apex Predator: Frozen", <ApexpredatorFrozenIcon/>],
                                        ["Frostnova", <FrostnovaIcon/>],
                                        ["Soulenhancer", <SoulenhancerIcon/>],
                                        ["Ritual Summon", <RitualSummonIcon/>],
                                        ["Absorb", <AbsorbIcon/>],
                                        ["Status Adaption", <StatusAdaptionIcon/>],
                                        ["Status Reflector", <StatusReflectorIcon />],
                                        ["Voidhunter", <VoidhunterIcon/>]
                                ]);

                                    const mappedElement = iconMappingConfig.get(value);

                                    if(typeof mappedElement !== "undefined"){
                                        return {
                                            type : "IMAGE",
                                            element : mappedElement
                                        };
                                    }

                                    return {
                                        type : "TEXT",
                                        element : <span>{value}</span>
                                    };
                                }).reduce((previous: {type: string, element : ReactElement}, current: {type: string, element : ReactElement}, currentIndex: number, original : Array<{type: string, element : ReactElement}>) => {
                                    const prevType = currentIndex === 0 ? "TEXT" : original[currentIndex].type;
                                    const nextType = currentIndex === original.length -1 ? "IMAGE" : original[currentIndex+1].type;
                                    const renderCommaByPositionRule = (currentIndex !== (value.length - 1));
                                    const renderCommaByTypeRule = prevType === "TEXT" && current.type === "TEXT" && (nextType === "TEXT");

                                    return <>
                                        <>{previous} {current.element}</>
                                        <>{renderCommaByPositionRule  && renderCommaByTypeRule? <span>,&nbsp;</span> : <>&nbsp;</>} </>
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
                                if(value === 2) {
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