

export type CardfactionType = "White" | "Black" | "Green" | "Blue" | "Crystal";
type CardLevelType = "Stone" | "Bronze" | "Silver" | "Gold" |"Diamond";
type CardType = "Unit" | "Building" | "Spell";
type CardTier = "I" | "II" | "III";

type CardUnitTypeVariant = "Summoning" | "Spawner";

type ArmorType = "Unarmored" | "Light" | "Medium"| "Heavy" | "Fortified";

type AttackType = "Melee"| "Ranged";

type Abilities = "Bleeding"; // must be expanded


interface Unit {
    squadSize: number,
    healthPerUnit: number,
    armorType: ArmorType
    damage : number,
    attackSpeed: number,
    attackType : AttackType,
    attackRange : number,
    hitboxRange : number,
}

interface Card extends Partial<Unit> {
    name : string,
    image? : string,
    faction: CardfactionType,
    // level : CardLevelType,
    type : CardType,
    tier : CardTier,

    charges?: number, // gold 5
    cooldown?: number // gold 5
    manaCost?: number,
    abilities?: Array<Abilities>


    spellRadius?: number, // > 1 = aoe

    /* calculated by raDi */
    //
    // totalDamage: number
    // totalDps: number
    // totalHealth : number
}


const WhiteCards : Array<Card> = [

    {
        name : "Footmen",
        image: "WhiteFootman",
        faction: "White",
        type : "Unit",
        tier : "I",
    },
    {
        name : "Light Pulse",
        image: "WhiteLightPulse",
        faction: "White",
        type : "Spell",
        tier : "I"
    },
    {
        name : "Shields Up!",
        image: "WhiteShieldsUp",
        faction: "White",
        type : "Spell",
        tier : "I"
    },
    {
        name : "Archers",
        image: "WhiteArcher",
        faction: "White",
        type : "Unit",
        tier : "I"
    },
    {
        name : "Monk",
        image: "WhiteMonk",
        faction: "White",
        type : "Unit",
        tier : "I"
    },
    {
        name : "Priest",
        image: "WhitePriest",
        faction: "White",
        type : "Unit",
        tier : "I"
    },
    {
        name : "Surge of Light",
        image: "WhiteSurgeOfLight",
        faction: "White",
        type : "Spell",
        tier : "I"
    },
    {
        name : "Hail of Arrows",
        image: "WhiteHailOfArrows",
        faction: "White",
        type : "Unit",
        tier : "I"
    },
    {
        name : "Ballista",
        image: "WhiteBallista",
        faction: "White",
        type : "Unit",
        tier : "I"
    },
    {
        name : "Heavy Gunner",
        image: "WhiteHeavyGunner",
        faction: "White",
        type : "Unit",
        tier : "II"
    },{
        name : "Avengers",
        image: "WhiteAvenger",
        faction: "White",
        type : "Unit",
        tier : "II"
    },
    {
        name : "Solar Flare",
        image: "WhiteSolarFlare",
        faction: "White",
        type : "Spell",
        tier : "III"
    },
    {
        name : "Lothar, Wall of Light",
        image: "WhiteDefender",
        faction: "White",
        type : "Unit",
        tier : "II"
    },
    {
        name : "Selga, Patron Saint of Light",
        image: "WhitePatronSaint",
        faction: "White",
        type : "Unit",
        tier : "III"
    },
    {
        name : "Monument of Light",
        image: "WhiteMonumentOfLight",
        faction: "White",
        type : "Building",
        tier : "III"
    },
    {
        name : "Marksman",
        image: "WhiteMarksman",
        faction: "White",
        type : "Unit",
        tier : "II"
    },
    {
        name : "Watchtower",
        image: "WhiteSuntower",
        faction: "White",
        type : "Building",
        tier : "II"
    },
    {
        name : "Promise of Light",
        image: "WhitePromiseOfLife",
        faction: "White",
        type : "Spell",
        tier : "II"
    }
];

const BlackCards : Array<Card> = [
    {
        name : "Frostworm",
        image: "BlackVoidworm",
        faction: "Black",
        type : "Unit",
        tier : "I"
    },
    {
        name : "Frost Shock",
        image: "BlackFrostSpear",
        faction: "Black",
        type : "Spell",
        tier : "I"
    },
    {
        name : "Frenzy",
        image: "BlackFrenzy",
        faction: "Black",
        type : "Spell",
        tier : "I"
    },
    {
        name : "Void Bane",
        image: "BlackVoidbane",
        faction: "Black",
        type : "Unit",
        tier : "I"
    },
    {
        name : "Skeletons",
        image: "BlackVoidSkeleton",
        faction: "Black",
        type : "Unit",
        tier : "I"
    },
    {
        name : "Skeleton Archers",
        image: "BlackVoidbowman",
        faction: "Black",
        type : "Unit",
        tier : "I"
    },
    {
        name : "Soul Cauldron",
        image: "BlackVoidCauldron",
        faction: "Black",
        type : "Unit",
        tier : "II"
    },
    {
        name : "Soul Maelstrom",
        image: "BlackRipOutSoul",
        faction: "Black",
        type : "Spell",
        tier : "II"
    },
    {
        name : "Frostgoyles",
        image: "BlackFrostgoyle",
        faction: "Black",
        type : "Unit",
        tier : "II"
    },
    {
        name : "Deep Freeze",
        image: "BlackFreeze",
        faction: "Black",
        type : "Spell",
        tier : "II"
    },
    {
        name : "Shatter Ice",
        image: "BlackShatterIce",
        faction: "Black",
        type : "Spell",
        tier : "III"
    },
    {
        name : "Lich",
        image: "BlackVoidWraith",
        faction: "Black",
        type : "Unit",
        tier : "II"
    },
    {
        name : "Frostgoyle Fountain",
        image: "BlackFrostgoyleFountain",
        faction: "Black",
        type : "Building",
        tier : "II"
    },
    {
        name : "Mirror Slime",
        image: "BlackVoidslime",
        faction: "Black",
        type : "Unit",
        tier : "II"
    },
    {
        name : "Tyrus, Lord of Souls",
        image: "BlackTyrus",
        faction: "Black",
        type : "Unit",
        tier : "II"
    },
    {
        name : "Soul Altar",
        image: "BlackVoidAltar",
        faction: "Black",
        type : "Building",
        tier : "III"
    },
    {
        name : "Vecra, Monarch of Frost",
        image: "BlackVecra",
        faction: "Black",
        type : "Unit",
        tier : "III"
    },
];

const GreenCards : Array<Card> = [
    {
        name : "Thistles",
        image : "GreenThistle",
        faction: "Green",
        type : "Unit",
        tier : "I"
    },{
        name : "Giant Growth",
        image : "GreenGiantGrowth",
        faction: "Green",
        type : "Unit",
        tier : "I"
    },
    {
        name : "Rootling",
        image : "GreenRootling",
        faction: "Green",
        type : "Unit",
        tier : "I"
    },
    {
        name : "Sapling Bush",
        image : "GreenSaplingFarm",
        faction: "Green",
        type : "Building",
        tier : "I"
    },
    {
        name : "Heart of the Forest",
        image : "GreenHeartOfTheForest",
        faction: "Green",
        type : "Unit",
        tier : "I"
    },
    {
        name : "Wisp",
        image : "GreenWisp",
        faction: "Green",
        type : "Unit",
        tier : "I"
    },
    {
        name : "Woodwalker",
        image : "GreenWoodwalker",
        faction: "Green",
        type : "Unit",
        tier : "II"
    },
    {
        name : "Rootdood",
        image : "GreenRootDude",
        faction: "Green",
        type : "Unit",
        tier : "II"
    },
    {
        name : "Pulse of the Forest",
        image : "GreenHealingGarden",
        faction: "Green",
        type : "Spell",
        tier : "II"
    },
    {
        name : "Forest Guardian",
        image : "GreenForestGuardian",
        faction: "Green",
        type : "Building",
        tier : "II"
    },
    {
        name : "Spore",
        image : "GreenSpore",
        faction: "Green",
        type : "Unit",
        tier : "II"
    },
    {
        name : "Oracle",
        image : "GreenOracle",
        faction: "Green",
        type : "Unit",
        tier : "III"
    },
    {
        name : "Evolve: Thistle",
        image : "GreenEvolveThistle",
        faction: "Green",
        type : "Spell",
        tier : "III"
    },
    {
        name : "Sapling Charge",
        image : "GreenSaplingCharge",
        faction: "Green",
        type : "Spell",
        tier : "III"
    },
    {
        name : "Evolve: Oracle",
        image : "GreenEvolveOracle",
        faction: "Green",
        type : "Spell",
        tier : "III"
    },
    {
        name : "Brratu, Keeper of Nature",
        image : "GreenBrratu",
        faction: "Green",
        type : "Unit",
        tier : "III"
    },
    {
        name : "Mulch Digger",
        image : "GreenGroundbreaker",
        faction: "Green",
        type : "Unit",
        tier : "III"
    },
];

const BlueCards : Array<Card> = [
    {
        name : "Gatling Drone",
        image : "BlueGatlingDrone",
        faction: "Blue",
        type : "Unit",
        tier : "I"
    },
    {
        name : "Relocate",
        image : "BlueRelocate",
        faction: "Blue",
        type : "Spell",
        tier : "I"
    },
    {
        name : "Energy Rift",
        image : "BlueEnergyRift",
        faction: "Blue",
        type : "Spell",
        tier : "I"
    },
    {
        name : "Gatling Turret",
        image : "BlueGatlingTurret",
        faction: "Blue",
        type : "Building",
        tier : "I"
    },
    {
        name : "Breachers",
        image : "BlueDamperdrone",
        faction: "Blue",
        type : "Unit",
        tier : "I"
    },
    {
        name : "Reload",
        image : "BlueAmmoRefill",
        faction: "Blue",
        type : "Spell",
        tier : "I"
    },
    {
        name : "Aimbot",
        image : "BlueObserverdrone",
        faction: "Blue",
        type : "Unit",
        tier : "I"
    },
    {
        name : "Atlas, the Recurring Walker",
        image : "BlueAtlas",
        faction: "Blue",
        type : "Unit",
        tier : "I"
    },
    {
        name : "Inverse Gravity",
        image : "BlueInverseGravity",
        faction: "Blue",
        type : "Spell",
        tier : "II"
    },
    {
        name : "Sentinels",
        image : "BluePhasedrone",
        faction: "Blue",
        type : "Unit",
        tier : "II"
    },
    {
        name : "Conductor",
        image : "BlueInductioner",
        faction: "Blue",
        type : "Unit",
        tier : "II"
    },
    {
        name : "Echo Projector",
        image : "BlueShielddrone",
        faction: "Blue",
        type : "Unit",
        tier : "II"
    },
    {
        name : "Factory Reset",
        image : "BlueFactoryReset",
        faction: "Blue",
        type : "Spell",
        tier : "II"
    },

    {
        name : "AmmoFactory",
        image : "BlueAmmoFactory",
        faction: "Blue",
        type : "Building",
        tier : "II"
    },
    {
        name : "Flux Field",
        image : "BlueFluxField",
        faction: "Blue",
        type : "Spell",
        tier : "II"
    },
    {
        name : "Aegis IX, The Last Frontier",
        image : "BlueAegis",
        faction: "Blue",
        type : "Building",
        tier : "III"
    },
    {
        name : "MOAG",
        image : "BlueBombardier",
        faction: "Blue",
        type : "Unit",
        tier : "III"
    },
    {
        name : "Oppressors",
        image : "BlueAirdominator",
        faction: "Blue",
        type : "Unit",
        tier : "III"
    },
    {
        name : "Orbital Strike",
        image : "BlueOrbitalStrike",
        faction: "Blue",
        type : "Spell",
        tier : "III"
    }
];

const CrystalCards : Array <Card> = [
    {
        name : "Granite Scouts",
        image : "ColorlessSmallMeleeGolem",
        faction: "Crystal",
        type : "Unit",
        tier : "I"
    },
    {
        name : "Cataclysm",
        image : "ColorlessCataclysm",
        faction: "Crystal",
        type : "Spell",
        tier : "I"
    },
    {
        name : "Echoes of the Future",
        image : "ColorlessEchoesOfTheFuture",
        faction: "Crystal",
        type : "Spell",
        tier : "I"
    },
    {
        name : "Stone Weaver",
        image : "ColorlessSmallRangedGolem",
        faction: "Crystal",
        type : "Unit",
        tier : "I"
    },
    {
        name : "Crystal Shrine",
        image : "ColorlessGolemLaneTowerLevel1",
        faction: "Crystal",
        type : "Building",
        tier : "I"
    },
    {
        name : "Crystal Enforcer",
        image : "ColorlessSiegeGolem",
        faction: "Crystal",
        type : "Building",
        tier : "II"
    },
    {
        name : "Grantine Vanguards",
        image : "ColorlessMediumMeleeGolem",
        faction: "Crystal",
        type : "Unit",
        tier : "II"
    },
    {
        name : "Granite Bouncer",
        image : "ColorlessMeleeGolemTower",
        faction: "Crystal",
        type : "Building",
        tier : "II"
    },
    {
        name : "Crystal Chanter",
        image : "ColorlessSmallCasterGolem",
        faction: "Crystal",
        type : "Unit",
        tier : "II"
    },
    {
        name : "Stone Circle",
        image : "ColorlessStoneCircle",
        faction: "Crystal",
        type : "Spell",
        tier : "II"
    },
    {
        name : "Crystal Crescendo",
        image : "ColorlessBigCasterGolem",
        faction: "Crystal",
        type : "Unit",
        tier : "III"
    },
    {
        name : "Earthquake",
        image : "ColorlessEarthquake",
        faction: "Crystal",
        type : "Spell",
        tier : "III"
    },
    {
        name : "Granite Guardian",
        image : "ColorlessBigMeleeGolem",
        faction: "Crystal",
        type : "Unit",
        tier : "III"
    },
    {
        name : "Crystal Temple",
        image : "ColorlessBigGolemTower",
        faction: "Crystal",
        type : "Building",
        tier : "III"
    },
    {
        name : "Crystal Overseer",
        image : "ColorlessBigFlyingGolem",
        faction: "Crystal",
        type : "Unit",
        tier : "III"
    }
];

export const Cards : Array<Card> = [
    ...WhiteCards,
    ...BlackCards,
    ...GreenCards,
    ...BlueCards,
    ...CrystalCards
];