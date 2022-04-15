type SBL_TIER = 1 | 2 | 3;


type IFaction = "ecBlack" | "ecBlue";

interface ICard {
    faction: IFaction;
}

type ISBL_TIER = '{@SBL_Tier}1' | '{@SBL_Tier}2' | '{@SBL_Tier}3';

interface IPrepareSpellData {
    IsLegendary: boolean,
    '@SBL_Tier': ISBL_TIER
}

type IeiUnitPropertiesSpell = 'upSpellSingle' | 'upSpellAlly';

interface IEiWelaDamage {
    '[Tier1]': number,
    '[Tier2]': number,
    '[Tier3]': number,
    '[Base]': number
}

interface IEiCardStats {
    reMetaAttack: number,
    reMetaDefense: number,
    reMetaUtility: number,
    eiWelaDamage: IEiWelaDamage
}

interface IEntityBlackboardSpell {
    eiUnitProperties: Array<IeiUnitPropertiesSpell>,
    eiResourceCost: (template: number) => number,
    eiAbilityTargetCount: number,
    eiCardStats: IEiCardStats
}

type IIconType = 'energy' | "health";

interface ITooltipAbilityProps {
    key: string,
    type: IIconType,
    value: number
}

interface TTooltipUnitAbilityComponentDescription {
    key: string,
    props: Array<ITooltipAbilityProps>
}

type  AbilityType = "StateEffect";

interface IPassValue { // .PassSingle('cooldown', 0, 2);
    key: string,
    value: string | number,
    type: IIconType
}

interface TTooltipUnitAbilityComponent {
    id: string,
    keyword: AbilityType,
    values : Array<IPassValue>
}


interface ISpell extends ICard{
    faction : IFaction,
    PrepareSpellData: IPrepareSpellData,
    ['Entity.Blackboard']: IEntityBlackboardSpell,
    TTooltipUnitAbilityComponent: Array<TTooltipUnitAbilityComponentDescription>
}

type IeiUnitPropertiesUnit = "upTier2" | "upUnit" | "upGround" | "upMelee";

type IUBL_Armortype = "atUnarmored" | "atFortified";

interface IeiResourceBalance {
    type : "reHealth" | "reMana",
    value: number
}

type eiWelaDamage = [[number, number], number]; // TODO tValue(eiWelaDamage, [2, 3], 1.0);


interface IEntityBlackboardUnit {
    eiUnitProperties :  Array<IeiUnitPropertiesUnit>,
    eiArmorType : IUBL_Armortype,
    eiResourceCap: number,
    eiResourceBalance: Array<IeiResourceBalance>,
    eiWelaRange: number,
    eiDamageType: number,
    eiWelaDamage: eiWelaDamage,
    eiCooldown_UBL_Cooldown: number,
    eiWelaActionpoint: number,
    eiWelaActionduration : number,
    eiCooldown: number,

    eiCardStats: IEiCardStats
}

interface IUnit extends ICard{
    ['Entity.Blackboard'] : IEntityBlackboardUnit,
    TTooltipUnitAbilityComponent: Array<TTooltipUnitAbilityComponent>,
}

interface IEntityBlackboardBuilding {
    eiArmorType : IUBL_Armortype,
    eiResourceCap : number,
    eiResourceBalance : Array<IeiResourceBalance>
    eiWelaRange : number, // SetValue(eiWelaRange, [2], 35.0);
    eiCooldown: number,
    eiWelaDamage: eiWelaDamage,
    eiResourceCost: (template: number) => number,
}

interface IBuilding extends ICard {
    ['Entity.Blackboard'] : IEntityBlackboardBuilding,
}

const Cards: Array<ISpell | IUnit> = [
        {
            faction : "ecBlue",
            PrepareSpellData: {

                IsLegendary: true,
                '@SBL_Tier': '{@SBL_Tier}1',
            },
            ['Entity.Blackboard']: {
                eiUnitProperties: ['upSpellSingle', 'upSpellAlly'],
                eiResourceCost: (template) => template - 40,
                eiAbilityTargetCount: 1,

                eiCardStats: {
                    reMetaAttack: 0,
                    reMetaDefense: 0,
                    reMetaUtility: 8,
                    eiWelaDamage: {
                        '[Tier1]': 1.0,
                        '[Tier2]': 0.5,
                        '[Tier3]': 0.25,
                        '[Base]': 0.2,
                    },
                },
            },
            TTooltipUnitAbilityComponent: [
                {
                    key: 'AmmoRefill',
                    props: [
                        {
                            key: 'energy_amount_stage_1_percentage',
                            type: 'energy',
                            value: 100,
                        },
                        {
                            key: 'energy_amount_stage_2_percentage',
                            type: 'energy',
                            value: 50,
                        },
                        {
                            key: 'energy_amount_stage_3_percentage',
                            type: 'energy',
                            value: 25,
                        },
                        {
                            key: 'energy_amount_legendary_percentage',
                            type: 'energy',
                            value: 25,
                        },
                    ],
                },
            ],
        },
    ]
;
