import {CARD_ABILITIES_NAME_KEY_MAP} from "./card-abilities-data";

interface Map<K, V> {
    set<SK extends K>(key: SK, value: string): TKMap<K, V, SK>;
}

interface TKMap<K, V, DK> extends Map<K, V> {
    set<SK extends K>(key: SK, value: string): TKMap<K, V, SK | DK>;

    set(key: K, value: V): this;

    set<SK extends K>(key: SK, value: string): TKMap<K, V, SK>;

    get(key: DK): V;

    get(key: K): V | undefined;
}

export type KnownKeyosOfTKMap<T> = T extends TKMap<infer K, infer V, infer DK> ? DK : never;


export enum ECardFaction {
    "White" = "White",
    "Black" = "Black",
    "Green" = "Green",
    "Blue" = "Blue",
    "Crystal" = "Crystal"
}

// type CardLevelType = "Stone" | "Bronze" | "Silver" | "Gold" |"Diamond";
export type CardType = "Unit" | "Building" | "Spell";
type CardTier = "I" | "II" | "III";

// type CardUnitTypeVariant = "Summoning" | "Spawner";
//not needed; all units except legendaries have spawner

export enum EArmor {
    Unarmored = "Unarmored",
    Light = "Light",
    Medium = "Medium",
    Heavy = "Heavy",
    Fortified = "Fortified"
}

export enum EAttackType {
    Melee = "Melee",
    Ranged = "Ranged"
}

export type TAbilities =
    "Raise your shield!"
    | "Predator: Stunned"
    | "Deathcry: Last Try"
    | "Energy Flow"
    | "Wuxi Finger Hold"
    | "Purifying Potion"
    | "Enchantment: Armor"
    | "Artillery"
    | "Siege"
    | "Light Overcharge"
    |
    "Energy Infusion"
    | "Flat Firing Angle"
    | "Splash Damage"
    | "Light Grenades"
    | "Flying"
    | "Inner Fire: Bounce"
    | "Legendary"
    | "Divine"
    | "Fury"
    | "Devotion Aura"
    | "Invoke: Smoldering Intensity"
    |
    "Wall of Light"
    | "Warming Light"
    | "Guarding Light"
    | "Dismantlement"
    | "Light Wave"
    | "Steady Aim"
    | "Big Game Hunter"
    | "Homeland"
    | "Frostslime"
    | "Deathcry: Frost Explosion"
    | "Cleave"
    | "Soulgatherer"
    |
    "Feast"
    | "Deathcry: Energy Supply"
    | "Predator: Frozen"
    | "Undying"
    | "Invoke: Insidious"
    | "Enchantment: Grievous Wounds"
    | "Deathcry: Blast"
    | "Apex Predator: Frozen"
    | "Frostnova"
    | "Soul Enhancer"
    |
    "Ritual Summon"
    | "Absorb"
    | "Status Adaptation"
    | "Status Reflector"
    | "Voidhunter"
    | "Void Rite"
    | "Unstable Negation"
    | "Invoke: Void"
    | "Invoke: Icy Prison"
    | "Icy Breath"
    | "Monarch of Frost"
    | "Soul Vortex"
    |
    "Doubleshot"
    | "Evasion"
    | "Surefire"
    | "Root"
    | "Root Network"
    | "Harvest Saplings"
    | "Pacifist"
    | "Enchantment: Strength"
    | "Vivid Bounce"
    | "Summon Saplings"
    | "Dood Root"
    | "Hail of Stones"
    |
    "Deathcry: Spore Field"
    | "Sapling Absorption"
    | "Monumental"
    | "Juggernaut"
    | "Focus: Buildings"
    | "Massive Stomp"
    | "Ancient Wisdom"
    | "Haste"
    | "Predator: Rooted"
    | "Invoke: Rupture"
    | "Searching Fire"
    |
    "Armor-Piercing"
    | "Limited: Gadget"
    | "Ammunition"
    | "Hard Hat"
    | "Payload"
    | "Stationary"
    | "Stealth"
    | "Guidance System"
    | "Modular"
    | "Active Armor"
    | "Induction: Repair"
    | "Shield Overload"
    | "Warp Strike"
    |
    "Induction: Energy"
    | "Missile Launcher"
    | "Spatial Echo"
    | "Ammo Dispenser"
    | "Invoke: Orbital Drop"
    | "Heavily Armed"
    | "L4Z0R"
    | "Yamato Cannon"
    | "Predator: Flying"
    | "Spell Immune"
    | "Crystal Artillery"
    |
    "Tremor"
    | "Wipe"
    | "Crystal Wind"
    | "Intensify"
    | "Splinter"
    | "Invoke: Asteroid"
    | "Tripleshot";

type Status = ""; // must be expanded

interface Unit {
    squadSize: number,
    healthPerUnit: number,
    energy: number,
    maxEnergy: number,
    armorType: EArmor,
    damagePerHit: number,
    attackSpeed: number, //in seconds
    attackType: EAttackType,
    attackRange: number,
    collisionRadius: number,
    abilities: TAbilities[]
}

export interface ICard extends Partial<Unit> {
    name: string,
    image?: string,
    faction: ECardFaction,
    // level : CardLevelType,
    type: CardType,
    tier: CardTier,

    charges: number, // gold 5
    chargeCooldown: number, // gold 5
    manaCost: number,

    //spells interface

    spellRadius?: number, // > 1 = aoe
    spellTargetCount?: number,
    statusApplied?: Array<Status>,
    domain?: boolean,
    description?: string,
}

const WhiteCards: Array<ICard> = [

    {
        name: "Footmen",
        image: "WhiteFootman",
        faction: ECardFaction.White,
        type: "Unit",
        tier: "I",
        charges: 4,
        chargeCooldown: 25,
        manaCost: 100,

        squadSize: 4,
        healthPerUnit: 32,
        energy: 0,
        maxEnergy: 0,
        armorType: EArmor.Medium,
        damagePerHit: 13,
        attackSpeed: 2,
        attackType: EAttackType.Melee,
        attackRange: 1,
        collisionRadius: 0.55,
        abilities: ["Raise your shield!"],

    },
    {
        name: "Light Pulse",
        image: "WhiteLightPulse",
        faction: ECardFaction.White,
        type: "Spell",
        tier: "I",
        charges: 4,
        chargeCooldown: 25,
        manaCost: 70,


    },
    {
        name: "Shields Up!",
        image: "WhiteShieldsUp",
        faction: ECardFaction.White,
        type: "Spell",
        tier: "I",
        charges: 4,
        chargeCooldown: 25,
        manaCost: 80,


    },
    {
        name: "Archers",
        image: "WhiteArcher",
        faction: ECardFaction.White,
        type: "Unit",
        tier: "I",
        charges: 4,
        chargeCooldown: 25,
        manaCost: 100,


        squadSize: 2,
        healthPerUnit: 19,
        energy: 0,
        maxEnergy: 0,
        armorType: EArmor.Unarmored,
        damagePerHit: 20,
        attackSpeed: 2,
        attackType: EAttackType.Ranged,
        attackRange: 10,
        collisionRadius: 0.45,
        abilities: ["Predator: Stunned", "Deathcry: Last Try"],
    },
    {
        name: "Monk",
        image: "WhiteMonk",
        faction: ECardFaction.White,
        type: "Unit",
        tier: "I",
        charges: 4,
        chargeCooldown: 25,
        manaCost: 100,


        squadSize: 1,
        healthPerUnit: 275,
        energy: 4,
        maxEnergy: 4,
        armorType: EArmor.Unarmored,
        damagePerHit: 38,
        attackSpeed: 2.8,
        attackType: EAttackType.Melee,
        attackRange: 1,
        collisionRadius: 0.45,
        abilities: ["Energy Flow", "Wuxi Finger Hold", "Purifying Potion"],
    },
    {
        name: "Priest",
        image: "WhitePriest",
        faction: ECardFaction.White,
        type: "Unit",
        tier: "I",
        charges: 4,
        chargeCooldown: 25,
        manaCost: 100,


        squadSize: 1,
        healthPerUnit: 53,
        energy: 5,
        maxEnergy: 5,
        armorType: EArmor.Unarmored,
        damagePerHit: 18,
        attackSpeed: 2,
        attackType: EAttackType.Ranged,
        attackRange: 8,
        collisionRadius: 0.6,
        abilities: ["Energy Flow", "Enchantment: Armor"],
    },
    {
        name: "Surge of Light",
        image: "WhiteSurgeOfLight",
        faction: ECardFaction.White,
        type: "Spell",
        tier: "I",
        charges: 4,
        chargeCooldown: 25,
        manaCost: 90,


    },
    {
        name: "Hail of Arrows",
        image: "WhiteHailOfArrows",
        faction: ECardFaction.White,
        type: "Unit",
        tier: "II",
        charges: 3,
        chargeCooldown: 37.5,
        manaCost: 130,

    },
    {
        name: "Ballista",
        image: "WhiteBallista",
        faction: ECardFaction.White,
        type: "Unit",
        tier: "I",
        charges: 4,
        chargeCooldown: 25,
        manaCost: 100,


        squadSize: 1,
        healthPerUnit: 64,
        energy: 0,
        maxEnergy: 0,
        armorType: EArmor.Light,
        damagePerHit: 23,
        attackSpeed: 2.8,
        attackType: EAttackType.Ranged,
        attackRange: 14,
        collisionRadius: 0.85,
        abilities: ["Artillery", "Siege", "Light Overcharge"],
    },
    {
        name: "Heavy Gunner",
        image: "WhiteHeavyGunner",
        faction: ECardFaction.White,
        type: "Unit",
        tier: "II",
        charges: 3,
        chargeCooldown: 37.5,
        manaCost: 150,


        squadSize: 1,
        healthPerUnit: 215,
        energy: 0,
        maxEnergy: 4,
        armorType: EArmor.Light,
        damagePerHit: 60,
        attackSpeed: 2.8,
        attackType: EAttackType.Ranged,
        attackRange: 6,
        collisionRadius: 0.45,
        abilities: ["Energy Infusion", "Flat Firing Angle", "Splash Damage", "Light Grenades"],
    }, {
        name: "Avengers",
        image: "WhiteAvenger",
        faction: ECardFaction.White,
        type: "Unit",
        tier: "III",
        charges: 2,
        chargeCooldown: 50,
        manaCost: 200,


        squadSize: 2,
        healthPerUnit: 230,
        energy: 0,
        maxEnergy: 0,
        armorType: EArmor.Light,
        damagePerHit: 42,
        attackSpeed: 2,
        attackType: EAttackType.Ranged,
        attackRange: 6,
        collisionRadius: 0.7,
        abilities: ["Flying", "Inner Fire: Bounce"],
    },
    {
        name: "Solar Flare",
        image: "WhiteSolarFlare",
        faction: ECardFaction.White,
        type: "Spell",
        tier: "III",
        charges: 2,
        chargeCooldown: 50,
        manaCost: 180,


    },
    {
        name: "Lothar, Wall of Light",
        image: "WhiteDefender",
        faction: ECardFaction.White,
        type: "Unit",
        tier: "III",
        charges: 1,
        chargeCooldown: 125,
        manaCost: 300,

        squadSize: 1,
        healthPerUnit: 1300,
        energy: 0,
        maxEnergy: 0,
        armorType: EArmor.Heavy,
        damagePerHit: 270,
        attackSpeed: 1.7,
        attackType: EAttackType.Melee,
        attackRange: 1,
        collisionRadius: 0.6,
        abilities: ["Legendary", "Fury", "Devotion Aura", "Invoke: Smoldering Intensity", "Wall of Light"],
    },
    {
        name: "Selga, Patron Saint of Light",
        image: "WhitePatronSaint",
        faction: ECardFaction.White,
        type: "Unit",
        tier: "III",
        charges: 1,
        chargeCooldown: 125,
        manaCost: 300,

        squadSize: 1,
        healthPerUnit: 680,
        energy: 0,
        maxEnergy: 0,
        armorType: EArmor.Medium,
        damagePerHit: 120,
        attackSpeed: 2.8,
        attackType: EAttackType.Ranged,
        attackRange: 4,
        collisionRadius: 0.6,
        abilities: ["Legendary", "Splash Damage", "Flat Firing Angle", "Warming Light", "Guarding Light"],
    },
    {
        name: "Monument of Light",
        image: "WhiteMonumentOfLight",
        faction: ECardFaction.White,
        type: "Building",
        tier: "III",
        charges: 2,
        chargeCooldown: 50,
        manaCost: 250,


        squadSize: 1,
        healthPerUnit: 290,
        energy: 4,
        maxEnergy: 12,
        armorType: EArmor.Fortified,
        damagePerHit: 0,
        attackSpeed: 0,
        attackType: EAttackType.Melee,
        attackRange: 1,
        collisionRadius: 0.55,
        abilities: ["Dismantlement", "Energy Flow", "Light Wave"],
    },
    {
        name: "Marksman",
        image: "WhiteMarksman",
        faction: ECardFaction.White,
        type: "Unit",
        tier: "II",
        charges: 3,
        chargeCooldown: 37.5,
        manaCost: 150,


        squadSize: 1,
        healthPerUnit: 28,
        energy: 0,
        maxEnergy: 0,
        armorType: EArmor.Unarmored,
        damagePerHit: 170,
        attackSpeed: 5,
        attackType: EAttackType.Ranged,
        attackRange: 12,
        collisionRadius: 0.45,
        abilities: ["Steady Aim", "Big Game Hunter"],
    },
    {
        name: "Watchtower",
        image: "WhiteSuntower",
        faction: ECardFaction.White,
        type: "Building",
        tier: "II",
        charges: 3,
        chargeCooldown: 37.5,
        manaCost: 250,


        squadSize: 1,
        healthPerUnit: 400,
        energy: 0,
        maxEnergy: 0,
        armorType: EArmor.Fortified,
        damagePerHit: 50,
        attackSpeed: 2,
        attackType: EAttackType.Ranged,
        attackRange: 11,
        collisionRadius: 0.95,
        abilities: ["Dismantlement", "Homeland"],
    },
    {
        name: "Promise of Light",
        image: "WhitePromiseOfLife",
        faction: ECardFaction.White,
        type: "Spell",
        tier: "II",
        charges: 3,
        chargeCooldown: 37.5,
        manaCost: 280,


    }
];

const BlackCards: Array<ICard> = [
    {
        name: "Frostworm",
        image: "BlackVoidworm",
        faction: ECardFaction.Black,
        type: "Unit",
        tier: "I",
        charges: 4,
        chargeCooldown: 25,
        manaCost: 100,


        squadSize: 1,
        healthPerUnit: 100,
        energy: 0,
        maxEnergy: 0,
        armorType: EArmor.Light,
        damagePerHit: 40,
        attackSpeed: 1.7,
        attackType: EAttackType.Ranged,
        attackRange: 5,
        collisionRadius: 0.6,
        abilities: ["Flat Firing Angle", "Frostslime", "Deathcry: Frost Explosion"],
    },
    {
        name: "Frost Shock",
        image: "BlackFrostSpear",
        faction: ECardFaction.Black,
        type: "Spell",
        tier: "I",
        charges: 4,
        chargeCooldown: 25,
        manaCost: 100,


    },
    {
        name: "Frenzy",
        image: "BlackFrenzy",
        faction: ECardFaction.Black,
        type: "Spell",
        tier: "I",
        charges: 4,
        chargeCooldown: 25,
        manaCost: 100,


    },
    {
        name: "Void Bane",
        image: "BlackVoidbane",
        faction: ECardFaction.Black,
        type: "Unit",
        tier: "I",
        charges: 4,
        chargeCooldown: 25,
        manaCost: 100,


        squadSize: 1,
        healthPerUnit: 205,
        energy: 0,
        maxEnergy: 14,
        armorType: EArmor.Unarmored,
        damagePerHit: 29,
        attackSpeed: 2.3,
        attackType: EAttackType.Melee,
        attackRange: 1,
        collisionRadius: 0.7,
        abilities: ["Cleave", "Soulgatherer", "Feast", "Deathcry: Energy Supply"],
    },
    {
        name: "Skeletons",
        image: "BlackVoidSkeleton",
        faction: ECardFaction.Black,
        type: "Unit",
        tier: "I",
        charges: 4,
        chargeCooldown: 25,
        manaCost: 100,


        squadSize: 2,
        healthPerUnit: 96,
        energy: 0,
        maxEnergy: 1,
        armorType: EArmor.Unarmored,
        damagePerHit: 16,
        attackSpeed: 1.7,
        attackType: EAttackType.Melee,
        attackRange: 1,
        collisionRadius: 0.45,
        abilities: ["Soulgatherer", "Predator: Frozen", "Undying"],
    },
    {
        name: "Skeleton Archers",
        image: "BlackVoidbowman",
        faction: ECardFaction.Black,
        type: "Unit",
        tier: "I",
        charges: 4,
        chargeCooldown: 25,
        manaCost: 100,


        squadSize: 2,
        healthPerUnit: 60,
        energy: 0,
        maxEnergy: 0,
        armorType: EArmor.Unarmored,
        damagePerHit: 20,
        attackSpeed: 1.7,
        attackType: EAttackType.Ranged,
        attackRange: 8,
        collisionRadius: 0.45,
        abilities: ["Invoke: Insidious", "Enchantment: Grievous Wounds"],
    },
    {
        name: "Soul Cauldron",
        image: "BlackVoidCauldron",
        faction: ECardFaction.Black,
        type: "Unit",
        tier: "II",
        charges: 3,
        chargeCooldown: 37.5,
        manaCost: 150,


        squadSize: 1,
        healthPerUnit: 285,
        energy: 0,
        maxEnergy: 15,
        armorType: EArmor.Heavy,
        damagePerHit: 60,
        attackSpeed: 2.8,
        attackType: EAttackType.Ranged,
        attackRange: 3,
        collisionRadius: 0.6,
        abilities: ["Siege", "Soulgatherer", "Deathcry: Blast"],
    },
    {
        name: "Soul Maelstrom",
        image: "BlackRipOutSoul",
        faction: ECardFaction.Black,
        type: "Spell",
        tier: "II",
        charges: 3,
        chargeCooldown: 37.5,
        manaCost: 80,


    },
    {
        name: "Frostgoyles",
        image: "BlackFrostgoyle",
        faction: ECardFaction.Black,
        type: "Unit",
        tier: "II",
        charges: 3,
        chargeCooldown: 37.5,
        manaCost: 150,


        squadSize: 2,
        healthPerUnit: 155,
        energy: 0,
        maxEnergy: 0,
        armorType: EArmor.Unarmored,
        damagePerHit: 80,
        attackSpeed: 3.6,
        attackType: EAttackType.Melee,
        attackRange: 1,
        collisionRadius: 0.7,
        abilities: ["Flying", "Predator: Frozen", "Fury"],
    },
    {
        name: "Freeze",
        image: "BlackFreeze",
        faction: ECardFaction.Black,
        type: "Spell",
        tier: "II",
        charges: 3,
        chargeCooldown: 37.5,
        manaCost: 130,


    },
    {
        name: "Deep Freeze",
        image: "BlackPermaFrost",
        faction: ECardFaction.Black,
        type: "Spell",
        tier: "II",
        charges: 3,
        chargeCooldown: 37.5,
        manaCost: 100,


    },
    {
        name: "Shatter Ice",
        image: "BlackShatterIce",
        faction: ECardFaction.Black,
        type: "Spell",
        tier: "III",
        charges: 2,
        chargeCooldown: 50,
        manaCost: 160,


    },
    {
        name: "Lich",
        image: "BlackVoidwraith",
        faction: ECardFaction.Black,
        type: "Unit",
        tier: "III",
        charges: 2,
        chargeCooldown: 50,
        manaCost: 200,


        squadSize: 1,
        healthPerUnit: 375,
        energy: 6,
        maxEnergy: 12,
        armorType: EArmor.Unarmored,
        damagePerHit: 86,
        attackSpeed: 2,
        attackType: EAttackType.Ranged,
        attackRange: 5,
        collisionRadius: 0.7,
        abilities: ["Apex Predator: Frozen", "Frostnova", "Energy Flow"],
    },
    {
        name: "Frostgoyle Fountain",
        image: "BlackFrostgoyleFountain",
        faction: ECardFaction.Black,
        type: "Building",
        tier: "II",
        charges: 3,
        chargeCooldown: 37.5,
        manaCost: 150,


        squadSize: 1,
        healthPerUnit: 475,
        energy: 0,
        maxEnergy: 16,
        armorType: EArmor.Fortified,
        damagePerHit: 0,
        attackSpeed: 0,
        attackType: EAttackType.Melee,
        attackRange: 1,
        collisionRadius: 0.6,
        abilities: ["Dismantlement", "Soulgatherer", "Soul Enhancer", "Ritual Summon"],
    },
    {
        name: "Mirror Slime",
        image: "BlackVoidslime",
        faction: ECardFaction.Black,
        type: "Unit",
        tier: "II",
        charges: 3,
        chargeCooldown: 37.5,
        manaCost: 150,


        squadSize: 1,
        healthPerUnit: 495,
        energy: 0,
        maxEnergy: 0,
        armorType: EArmor.Unarmored,
        damagePerHit: 91,
        attackSpeed: 2.3,
        attackType: EAttackType.Melee,
        attackRange: 1,
        collisionRadius: 0.7,
        abilities: ["Absorb", "Status Adaptation", "Status Reflector"],
    },
    {
        name: "Tyrus, Lord of Souls",
        image: "BlackTyrus",
        faction: ECardFaction.Black,
        type: "Unit",
        tier: "III",
        charges: 1,
        chargeCooldown: 125,
        manaCost: 300,

        squadSize: 1,
        healthPerUnit: 410,
        energy: 0,
        maxEnergy: 15,
        armorType: EArmor.Medium,
        damagePerHit: 65,
        attackSpeed: 1,
        attackType: EAttackType.Melee,
        attackRange: 1,
        collisionRadius: 0.9,
        abilities: ["Legendary", "Soulgatherer", "Voidhunter", "Void Rite", "Unstable Negation", "Invoke: Void"],
    },
    {
        name: "Soul Altar",
        image: "BlackVoidAltar",
        faction: ECardFaction.Black,
        type: "Building",
        tier: "III",
        charges: 2,
        chargeCooldown: 50,
        manaCost: 200,


        squadSize: 1,
        healthPerUnit: 115,
        energy: 0,
        maxEnergy: 10,
        armorType: EArmor.Fortified,
        damagePerHit: 0,
        attackSpeed: 0,
        attackType: EAttackType.Melee,
        attackRange: 1,
        collisionRadius: 0.9,
        abilities: ["Dismantlement", "Soulgatherer", "Soul Vortex", "Energy Flow"],
    },
    {
        name: "Vecra, Monarch of Frost",
        image: "BlackVecra",
        faction: ECardFaction.Black,
        type: "Unit",
        tier: "III",
        charges: 1,
        chargeCooldown: 125,
        manaCost: 300,

        squadSize: 1,
        healthPerUnit: 460,
        energy: 0,
        maxEnergy: 0,
        armorType: EArmor.Heavy,
        damagePerHit: 290,
        attackSpeed: 2,
        attackType: EAttackType.Ranged,
        attackRange: 7,
        collisionRadius: 1.2,
        abilities: ["Legendary", "Invoke: Icy Prison", "Flying", "Icy Breath", "Monarch of Frost"],
    },
    {
        name: "Void Miasma",
        image: "BlackOnTheEdge",
        faction: ECardFaction.Black,
        type: "Spell",
        tier: "II",
        charges: 3,
        chargeCooldown: 37.5,
        manaCost: 140,


    },
];

const GreenCards: Array<ICard> = [
    {
        name: "Thistles",
        image: "GreenThistle",
        faction: ECardFaction.Green,
        type: "Unit",
        tier: "I",
        charges: 4,
        chargeCooldown: 25,
        manaCost: 100,


        squadSize: 2,
        healthPerUnit: 40,
        energy: 0,
        maxEnergy: 0,
        armorType: EArmor.Unarmored,
        damagePerHit: 14,
        attackSpeed: 1.5,
        attackType: EAttackType.Ranged,
        attackRange: 8,
        collisionRadius: 0.45,
        abilities: ["Doubleshot", "Evasion"],
    },
    {
        name: "Giant Growth",
        image: "GreenGiantGrowth",
        faction: ECardFaction.Green,
        type: "Unit",
        tier: "I",
        charges: 4,
        chargeCooldown: 25,
        manaCost: 80,


    },
    {
        name: "Entangling Roots",
        image: "GreenEntanglingRoots",
        faction: ECardFaction.Green,
        type: "Unit",
        tier: "I",
        charges: 4,
        chargeCooldown: 25,
        manaCost: 70,


    },
    {
        name: "Rootling",
        image: "GreenRootling",
        faction: ECardFaction.Green,
        type: "Unit",
        tier: "I",
        charges: 4,
        chargeCooldown: 25,
        manaCost: 100,


        squadSize: 1,
        healthPerUnit: 200,
        energy: 0,
        maxEnergy: 0,
        armorType: EArmor.Light,
        damagePerHit: 12,
        attackSpeed: 1,
        attackType: EAttackType.Ranged,
        attackRange: 5,
        collisionRadius: 0.45,
        abilities: ["Flat Firing Angle", "Surefire", "Root", "Root Network"],
    },
    {
        name: "Sapling Bush",
        image: "GreenSaplingFarm",
        faction: ECardFaction.Green,
        type: "Building",
        tier: "I",
        charges: 4,
        chargeCooldown: 25,
        manaCost: 100,


        squadSize: 1,
        healthPerUnit: 170,
        energy: 5,
        maxEnergy: 10,
        armorType: EArmor.Fortified,
        damagePerHit: 0,
        attackSpeed: 0,
        attackType: EAttackType.Melee,
        attackRange: 1,
        collisionRadius: 0.55,
        abilities: ["Dismantlement", "Energy Flow", "Harvest Saplings"],
    },
    {
        name: "Heart of the Forest",
        image: "GreenHeartOfTheForest",
        faction: ECardFaction.Green,
        type: "Unit",
        tier: "I",
        charges: 4,
        chargeCooldown: 25,
        manaCost: 100,


        squadSize: 1,
        healthPerUnit: 60,
        energy: 3,
        maxEnergy: 3,
        armorType: EArmor.Unarmored,
        damagePerHit: 0,
        attackSpeed: 0,
        attackType: EAttackType.Melee,
        attackRange: 1,
        collisionRadius: 0.45,
        abilities: ["Pacifist", "Energy Flow", "Enchantment: Strength"],
    },
    {
        name: "Wisp",
        image: "GreenWisp",
        faction: ECardFaction.Green,
        type: "Unit",
        tier: "I",
        charges: 4,
        chargeCooldown: 25,
        manaCost: 100,


        squadSize: 1,
        healthPerUnit: 75,
        energy: 0,
        maxEnergy: 0,
        armorType: EArmor.Unarmored,
        damagePerHit: 64,
        attackSpeed: 2.8,
        attackType: EAttackType.Ranged,
        attackRange: 6,
        collisionRadius: 0.5,
        abilities: ["Flying", "Vivid Bounce"],
    },
    {
        name: "Woodwalker",
        image: "GreenWoodwalker",
        faction: ECardFaction.Green,
        type: "Unit",
        tier: "II",
        charges: 3,
        chargeCooldown: 37.5,
        manaCost: 150,


        squadSize: 1,
        healthPerUnit: 99,
        energy: 4,
        maxEnergy: 16,
        armorType: EArmor.Unarmored,
        damagePerHit: 87,
        attackSpeed: 2.8,
        attackType: EAttackType.Ranged,
        attackRange: 8,
        collisionRadius: 0.45,
        abilities: ["Energy Flow", "Summon Saplings"],
    },
    {
        name: "Rootdood",
        image: "GreenRootDude",
        faction: ECardFaction.Green,
        type: "Unit",
        tier: "II",
        charges: 3,
        chargeCooldown: 37.5,
        manaCost: 150,


        squadSize: 1,
        healthPerUnit: 575,
        energy: 0,
        maxEnergy: 4,
        armorType: EArmor.Unarmored,
        damagePerHit: 89,
        attackSpeed: 2.8,
        attackType: EAttackType.Ranged,
        attackRange: 3,
        collisionRadius: 0.85,
        abilities: ["Energy Infusion", "Flat Firing Angle", "Dood Root"],
    },
    {
        name: "Pulse of the Forest",
        image: "GreenHealingGarden",
        faction: ECardFaction.Green,
        type: "Spell",
        tier: "II",
        charges: 3,
        chargeCooldown: 37.5,
        manaCost: 160,


    },
    {
        name: "Forest Guardian",
        image: "GreenForestGuardian",
        faction: ECardFaction.Green,
        type: "Building",
        tier: "II",
        charges: 3,
        chargeCooldown: 37.5,
        manaCost: 150,


        squadSize: 1,
        healthPerUnit: 370,
        energy: 0,
        maxEnergy: 0,
        armorType: EArmor.Fortified,
        damagePerHit: 36,
        attackSpeed: 2.8,
        attackType: EAttackType.Ranged,
        attackRange: 11,
        collisionRadius: 0.75,
        abilities: ["Dismantlement", "Siege", "Splash Damage", "Hail of Stones"],
    },
    {
        name: "Spore",
        image: "GreenSpore",
        faction: ECardFaction.Green,
        type: "Unit",
        tier: "II",
        charges: 3,
        chargeCooldown: 37.5,
        manaCost: 150,


        squadSize: 1,
        healthPerUnit: 140,
        energy: 0,
        maxEnergy: 0,
        armorType: EArmor.Unarmored,
        damagePerHit: 80,
        attackSpeed: 1.5,
        attackType: EAttackType.Ranged,
        attackRange: 3,
        collisionRadius: 0.6,
        abilities: ["Flying", "Deathcry: Spore Field"],
    },
    {
        name: "Oracle",
        image: "GreenOracle",
        faction: ECardFaction.Green,
        type: "Unit",
        tier: "III",
        charges: 2,
        chargeCooldown: 50,
        manaCost: 200,


        squadSize: 1,
        healthPerUnit: 825,
        energy: 0,
        maxEnergy: 0,
        armorType: EArmor.Light,
        damagePerHit: 87,
        attackSpeed: 3.6,
        attackType: EAttackType.Melee,
        attackRange: 1,
        collisionRadius: 0.9,
        abilities: ["Splash Damage", "Sapling Absorption"],
    },
    {
        name: "Evolve: Thistle",
        image: "GreenEvolveThistle",
        faction: ECardFaction.Green,
        type: "Spell",
        tier: "III",
        charges: 2,
        chargeCooldown: 25,
        manaCost: 40,


    },
    {
        name: "Sapling Charge",
        image: "GreenSaplingCharge",
        faction: ECardFaction.Green,
        type: "Spell",
        tier: "III",
        charges: 1,
        chargeCooldown: 125,
        manaCost: 200,
        abilities: ["Legendary"]
    },
    {
        name: "Evolve: Oracle",
        image: "GreenEvolveOracle",
        faction: ECardFaction.Green,
        type: "Spell",
        tier: "II",
        charges: 2,
        chargeCooldown: 37.5,
        manaCost: 130,


    },
    {
        name: "Brratu, Keeper of Nature",
        image: "GreenBrratu",
        faction: ECardFaction.Green,
        type: "Unit",
        tier: "III",
        charges: 1,
        chargeCooldown: 125,
        manaCost: 300,

        squadSize: 1,
        healthPerUnit: 1800,
        energy: 0,
        maxEnergy: 0,
        armorType: EArmor.Light,
        damagePerHit: 130,
        attackSpeed: 3.6,
        attackType: EAttackType.Melee,
        attackRange: 1,
        collisionRadius: 1.8,
        abilities: ["Legendary", "Monumental", "Siege", "Juggernaut", "Focus: Buildings", "Massive Stomp", "Ancient Wisdom", "Splash Damage"],
    },
    {
        name: "Mulch Digger",
        image: "GreenGroundbreaker",
        faction: ECardFaction.Green,
        type: "Unit",
        tier: "III",
        charges: 2,
        chargeCooldown: 50,
        manaCost: 200,


        squadSize: 1,
        healthPerUnit: 430,
        energy: 0,
        maxEnergy: 0,
        armorType: EArmor.Unarmored,
        damagePerHit: 150,
        attackSpeed: 1.7,
        attackType: EAttackType.Melee,
        attackRange: 1,
        collisionRadius: 0.75,
        abilities: ["Haste", "Predator: Rooted", "Invoke: Rupture", "Evasion"],
    },
];

const BlueCards: Array<ICard> = [
    {
        name: "Gatling Drone",
        image: "BlueGatlingDrone",
        faction: ECardFaction.Blue,
        type: "Unit",
        tier: "I",
        charges: 4,
        chargeCooldown: 25,
        manaCost: 100,


        squadSize: 1,
        healthPerUnit: 75,
        energy: 0,
        maxEnergy: 0,
        armorType: EArmor.Unarmored,
        damagePerHit: 10,
        attackSpeed: 0.5,
        attackType: EAttackType.Ranged,
        attackRange: 6,
        collisionRadius: 0.55,
        abilities: ["Surefire", "Searching Fire", "Armor-Piercing"],
    },
    {
        name: "Relocate",
        image: "BlueRelocate",
        faction: ECardFaction.Blue,
        type: "Spell",
        tier: "I",
        charges: 4,
        chargeCooldown: 25,
        manaCost: 80,


    },
    {
        name: "Energy Rift",
        image: "BlueEnergyRift",
        faction: ECardFaction.Blue,
        type: "Spell",
        tier: "I",
        charges: 4,
        chargeCooldown: 25,
        manaCost: 80,


    },
    {
        name: "Gatling Turret",
        image: "BlueGatlingTurret",
        faction: ECardFaction.Blue,
        type: "Building",
        tier: "I",
        charges: 4,
        chargeCooldown: 25,
        manaCost: 100,


        squadSize: 1,
        healthPerUnit: 230,
        energy: 29,
        maxEnergy: 29,
        armorType: EArmor.Fortified,
        damagePerHit: 14,
        attackSpeed: 0.5,
        attackType: EAttackType.Ranged,
        attackRange: 7,
        collisionRadius: 0.75,
        abilities: ["Limited: Gadget", "Ammunition", "Searching Fire", "Surefire"],
    },
    {
        name: "Missile Turret",
        image: "BlueMissileturret", //add image filename
        faction: ECardFaction.Blue,
        type: "Building",
        tier: "II",
        charges: 3,
        chargeCooldown: 37.5,
        manaCost: 150,


        squadSize: 1,
        healthPerUnit: 260,
        energy: 18,
        maxEnergy: 18,
        armorType: EArmor.Fortified,
        damagePerHit: 51,
        attackSpeed: 2.3,
        attackType: EAttackType.Ranged,
        attackRange: 15,
        collisionRadius: 0.75,
        abilities: ["Limited: Gadget", "Ammunition", "Predator: Flying", "Splash Damage"],
    },
    {
        name: "Breachers",
        image: "BlueDamperdrone",
        faction: ECardFaction.Blue,
        type: "Unit",
        tier: "I",
        charges: 4,
        chargeCooldown: 25,
        manaCost: 100,


        squadSize: 4,
        healthPerUnit: 51,
        energy: 0,
        maxEnergy: 1,
        armorType: EArmor.Light,
        damagePerHit: 11,
        attackSpeed: 1.5,
        attackType: EAttackType.Melee,
        attackRange: 1,
        collisionRadius: 0.45,
        abilities: ["Siege", "Hard Hat", "Payload"],
    },
    {
        name: "Reload",
        image: "BlueAmmoRefill",
        faction: ECardFaction.Blue,
        type: "Spell",
        tier: "I",
        charges: 4,
        chargeCooldown: 25,
        manaCost: 40,


    },
    {
        name: "Aimbot",
        image: "BlueObserverdrone",
        faction: ECardFaction.Blue,
        type: "Unit",
        tier: "I",
        charges: 4,
        chargeCooldown: 25,
        manaCost: 100,


        squadSize: 1,
        healthPerUnit: 78,
        energy: 0,
        maxEnergy: 0,
        armorType: EArmor.Fortified,
        damagePerHit: 0,
        attackSpeed: 0,
        attackType: EAttackType.Melee,
        attackRange: 1,
        collisionRadius: 0.45,
        abilities: ["Flying", "Limited: Gadget", "Stationary", "Stealth", "Guidance System"],
    },
    {
        name: "Atlas, the Recurring Walker",
        image: "BlueAtlas",
        faction: ECardFaction.Blue,
        type: "Unit",
        tier: "I",
        charges: 1,
        chargeCooldown: 62.5,
        manaCost: 200,

        squadSize: 1,
        healthPerUnit: 205,
        energy: 0,
        maxEnergy: 0,
        armorType: EArmor.Unarmored,
        damagePerHit: 79,
        attackSpeed: 1.7,
        attackType: EAttackType.Melee,
        attackRange: 1,
        collisionRadius: 1,
        abilities: ["Legendary", "Modular", "Active Armor", "Induction: Repair"],
    },
    {
        name: "Inverse Gravity",
        image: "BlueInverseGravity",
        faction: ECardFaction.Blue,
        type: "Spell",
        tier: "II",
        charges: 3,
        chargeCooldown: 37.5,
        manaCost: 80,


    },
    {
        name: "Sentinels",
        image: "BluePhasedrone",
        faction: ECardFaction.Blue,
        type: "Unit",
        tier: "II",
        charges: 3,
        chargeCooldown: 37.5,
        manaCost: 150,


        squadSize: 2,
        healthPerUnit: 165,
        energy: 2,
        maxEnergy: 2,
        armorType: EArmor.Medium,
        damagePerHit: 16,
        attackSpeed: 2,
        attackType: EAttackType.Melee,
        attackRange: 1,
        collisionRadius: 0.7,
        abilities: ["Shield Overload", "Warp Strike", "Induction: Energy"],
    },
    {
        name: "Conductor",
        image: "BlueInductioner",
        faction: ECardFaction.Blue,
        type: "Unit",
        tier: "II",
        charges: 3,
        chargeCooldown: 37.5,
        manaCost: 150,


        squadSize: 1,
        healthPerUnit: 165,
        energy: 0,
        maxEnergy: 2,
        armorType: EArmor.Light,
        damagePerHit: 100,
        attackSpeed: 2.8,
        attackType: EAttackType.Ranged,
        attackRange: 8,
        collisionRadius: 0.75,
        abilities: ["Flat Firing Angle", "Missile Launcher", "Induction: Energy"],
    },
    {
        name: "Echo Projector",
        image: "BlueShielddrone",
        faction: ECardFaction.Blue,
        type: "Unit",
        tier: "II",
        charges: 3,
        chargeCooldown: 37.5,
        manaCost: 150,


        squadSize: 1,
        healthPerUnit: 310,
        energy: 0,
        maxEnergy: 0,
        armorType: EArmor.Unarmored,
        damagePerHit: 0,
        attackSpeed: 0,
        attackType: EAttackType.Melee,
        attackRange: 1,
        collisionRadius: 0.5,
        abilities: ["Flying", "Pacifist", "Spatial Echo"],
    },
    {
        name: "Factory Reset",
        image: "BlueFactoryReset",
        faction: ECardFaction.Blue,
        type: "Spell",
        tier: "II",
        charges: 3,
        chargeCooldown: 37.5,
        manaCost: 230,


    },

    {
        name: "Ammo Factory",
        image: "BlueAmmoFactory",
        faction: ECardFaction.Blue,
        type: "Building",
        tier: "II",
        charges: 3,
        chargeCooldown: 37.5,
        manaCost: 150,


        squadSize: 1,
        healthPerUnit: 295,
        energy: 4,
        maxEnergy: 4,
        armorType: EArmor.Fortified,
        damagePerHit: 0,
        attackSpeed: 0,
        attackType: EAttackType.Melee,
        attackRange: 1,
        collisionRadius: 0.75,
        abilities: ["Limited: Gadget", "Ammo Dispenser", "Energy Flow"],
    },
    {
        name: "Flux Field",
        image: "BlueFluxField",
        faction: ECardFaction.Blue,
        type: "Spell",
        tier: "II",
        charges: 4,
        chargeCooldown: 37.5,
        manaCost: 130,


    },
    {
        name: "Aegis IX, The Last Frontier",
        image: "BlueAegis",
        faction: ECardFaction.Blue,
        type: "Building",
        tier: "III",
        charges: 1,
        chargeCooldown: 125,
        manaCost: 300,

        squadSize: 1,
        healthPerUnit: 990,
        energy: 12,
        maxEnergy: 12,
        armorType: EArmor.Fortified,
        damagePerHit: 0,
        attackSpeed: 6,
        attackType: EAttackType.Ranged,
        attackRange: 11,
        collisionRadius: 1.4,
        abilities: ["Legendary", "Monumental", "Invoke: Orbital Drop", "Heavily Armed"],
    },
    {
        name: "MOAG",
        image: "BlueBombardier",
        faction: ECardFaction.Blue,
        type: "Unit",
        tier: "III",
        charges: 2,
        chargeCooldown: 50,
        manaCost: 200,


        squadSize: 1,
        healthPerUnit: 155,
        energy: 4,
        maxEnergy: 4,
        armorType: EArmor.Light,
        damagePerHit: 66,
        attackSpeed: 3.6,
        attackType: EAttackType.Ranged,
        attackRange: 9,
        collisionRadius: 0.8,
        abilities: ["Surefire", "Flat Firing Angle", "L4Z0R", "Yamato Cannon"],
    },
    {
        name: "Oppressors",
        image: "BlueAirdominator",
        faction: ECardFaction.Blue,
        type: "Unit",
        tier: "III",
        charges: 2,
        chargeCooldown: 50,
        manaCost: 200,


        squadSize: 3,
        healthPerUnit: 120,
        energy: 0,
        maxEnergy: 0,
        armorType: EArmor.Light,
        damagePerHit: 20,
        attackSpeed: 2.8,
        attackType: EAttackType.Ranged,
        attackRange: 13,
        collisionRadius: 0.75,
        abilities: ["Flying", "Flat Firing Angle", "Predator: Flying", "Splash Damage"],
    },
    {
        name: "Orbital Strike",
        image: "BlueOrbitalStrike",
        faction: ECardFaction.Blue,
        type: "Spell",
        tier: "III",
        charges: 2,
        chargeCooldown: 50,
        manaCost: 210,


    }
];

const CrystalCards: Array<ICard> = [
    {
        name: "Granite Scouts",
        image: "ColorlessSmallMeleeGolem",
        faction: ECardFaction.Crystal,
        type: "Unit",
        tier: "I",
        charges: 4,
        chargeCooldown: 25,
        manaCost: 100,


        squadSize: 4,
        healthPerUnit: 110,
        energy: 0,
        maxEnergy: 0,
        armorType: EArmor.Light,
        damagePerHit: 14,
        attackSpeed: 1.7,
        attackType: EAttackType.Melee,
        attackRange: 1,
        collisionRadius: 0.55,
        abilities: ["Spell Immune"],
    },
    {
        name: "Cataclysm",
        image: "ColorlessCataclysm",
        faction: ECardFaction.Crystal,
        type: "Spell",
        tier: "I",
        charges: 4,
        chargeCooldown: 25,
        manaCost: 400,

        abilities: ["Divine"]
    },
    {
        name: "Echoes of the Future",
        image: "ColorlessEchoesOfTheFuture",
        faction: ECardFaction.Crystal,
        type: "Spell",
        tier: "I",
        charges: 4,
        chargeCooldown: 25,
        manaCost: 80,


    },
    {
        name: "Petrify",
        image: "ColorlessPetrify",
        faction: ECardFaction.Crystal,
        type: "Spell",
        tier: "II",
        charges: 3,
        chargeCooldown: 37.5,
        manaCost: 100,


    },
    {
        name: "Stone Weaver",
        image: "ColorlessSmallRangedGolem",
        faction: ECardFaction.Crystal,
        type: "Unit",
        tier: "I",
        charges: 4,
        chargeCooldown: 25,
        manaCost: 100,


        squadSize: 2,
        healthPerUnit: 46,
        energy: 0,
        maxEnergy: 0,
        armorType: EArmor.Light,
        damagePerHit: 15,
        attackSpeed: 1.7,
        attackType: EAttackType.Ranged,
        attackRange: 8,
        collisionRadius: 0.4,
        abilities: ["Siege"],
    },
    {
        name: "Crystal Shrine",
        image: "ColorlessSmallGolemTower",
        faction: ECardFaction.Crystal,
        type: "Building",
        tier: "I",
        charges: 4,
        chargeCooldown: 25,
        manaCost: 100,


        squadSize: 1,
        healthPerUnit: 275,
        energy: 0,
        maxEnergy: 0,
        armorType: EArmor.Fortified,
        damagePerHit: 26,
        attackSpeed: 1.5,
        attackType: EAttackType.Ranged,
        attackRange: 10,
        collisionRadius: 0.5,
        abilities: ["Dismantlement"],
    },
    {
        name: "Crystal Enforcer",
        image: "ColorlessSiegeGolem",
        faction: ECardFaction.Crystal,
        type: "Building",
        tier: "II",
        charges: 3,
        chargeCooldown: 37.5,
        manaCost: 150,


        squadSize: 1,
        healthPerUnit: 270,
        energy: 0,
        maxEnergy: 0,
        armorType: EArmor.Medium,
        damagePerHit: 68,
        attackSpeed: 2.3,
        attackType: EAttackType.Melee,
        attackRange: 1,
        collisionRadius: 0.9,
        abilities: ["Siege", "Crystal Artillery"],
    },
    {
        name: "Grantine Vanguards",
        image: "ColorlessMediumMeleeGolem",
        faction: ECardFaction.Crystal,
        type: "Unit",
        tier: "II",
        charges: 3,
        chargeCooldown: 37.5,
        manaCost: 150,


        squadSize: 2,
        healthPerUnit: 220,
        energy: 0,
        maxEnergy: 0,
        armorType: EArmor.Medium,
        damagePerHit: 32,
        attackSpeed: 2.3,
        attackType: EAttackType.Melee,
        attackRange: 1,
        collisionRadius: 0.65,
        abilities: ["Tremor"],
    },
    {
        name: "Granite Bouncer",
        image: "ColorlessMeleeGolemTower",
        faction: ECardFaction.Crystal,
        type: "Building",
        tier: "II",
        charges: 3,
        chargeCooldown: 37.5,
        manaCost: 150,


        squadSize: 1,
        healthPerUnit: 770,
        energy: 0,
        maxEnergy: 0,
        armorType: EArmor.Fortified,
        damagePerHit: 110,
        attackSpeed: 1.7,
        attackType: EAttackType.Melee,
        attackRange: 1,
        collisionRadius: 0.75,
        abilities: ["Dismantlement", "Wipe"],
    },
    {
        name: "Crystal Chanter",
        image: "ColorlessSmallCasterGolem",
        faction: ECardFaction.Crystal,
        type: "Unit",
        tier: "I",
        charges: 4,
        chargeCooldown: 25,
        manaCost: 100,


        squadSize: 1,
        healthPerUnit: 51,
        energy: 0,
        maxEnergy: 0,
        armorType: EArmor.Light,
        damagePerHit: 33,
        attackSpeed: 2.8,
        attackType: EAttackType.Ranged,
        attackRange: 8,
        collisionRadius: 0.45,
        abilities: ["Crystal Wind"],
    },
    {
        name: "Crystal Observer",
        image: "ColorlessSmallFlyingGolem", //add image filename
        faction: ECardFaction.Crystal,
        type: "Unit",
        tier: "II",
        charges: 3,
        chargeCooldown: 37.5,
        manaCost: 150,


        squadSize: 1,
        healthPerUnit: 194,
        energy: 0,
        maxEnergy: 0,
        armorType: EArmor.Medium,
        damagePerHit: 29,
        attackSpeed: 2.3,
        attackType: EAttackType.Ranged,
        attackRange: 6,
        collisionRadius: 0.6,
        abilities: ["Flying", "Doubleshot"],
    },
    {
        name: "Stone Circle",
        image: "ColorlessStoneCircle",
        faction: ECardFaction.Crystal,
        type: "Spell",
        tier: "II",
        charges: 3,
        chargeCooldown: 37.5,
        manaCost: 120,


    },
    {
        name: "Crystal Crescendo",
        image: "ColorlessBigCasterGolem",
        faction: ECardFaction.Crystal,
        type: "Unit",
        tier: "III",
        charges: 2,
        chargeCooldown: 50,
        manaCost: 200,


        squadSize: 1,
        healthPerUnit: 270,
        energy: 0,
        maxEnergy: 0,
        armorType: EArmor.Light,
        damagePerHit: 14,
        attackSpeed: 0.5,
        attackType: EAttackType.Ranged,
        attackRange: 8,
        collisionRadius: 0.6,
        abilities: ["Surefire", "Intensify"],
    },
    {
        name: "Earthquake",
        image: "ColorlessEarthquake",
        faction: ECardFaction.Crystal,
        type: "Spell",
        tier: "III",
        charges: 1,
        chargeCooldown: 125,
        manaCost: 300,
        abilities: ["Legendary"]

    },
    {
        name: "Granite Chieftain",
        image: "ColorlessBigMeleeGolem",
        faction: ECardFaction.Crystal,
        type: "Unit",
        tier: "III",
        charges: 2,
        chargeCooldown: 50,
        manaCost: 200,


        squadSize: 1,
        healthPerUnit: 480,
        energy: 0,
        maxEnergy: 0,
        armorType: EArmor.Heavy,
        damagePerHit: 110,
        attackSpeed: 2.8,
        attackType: EAttackType.Melee,
        attackRange: 1,
        collisionRadius: 0.8,
        abilities: ["Splinter"],
    },
    {
        name: "Granite Guardian",
        image: "ColorlessBossGolem",
        faction: ECardFaction.Crystal,
        type: "Unit",
        tier: "III",
        charges: 1,
        chargeCooldown: 125,
        manaCost: 300,

        squadSize: 1,
        healthPerUnit: 1900,
        energy: 0,
        maxEnergy: 0,
        armorType: EArmor.Fortified,
        damagePerHit: 370,
        attackSpeed: 2.8,
        attackType: EAttackType.Melee,
        attackRange: 1,
        collisionRadius: 1.5,
        abilities: ["Legendary", "Monumental", "Splash Damage", "Invoke: Asteroid"],
    },
    {
        name: "Crystal Temple",
        image: "ColorlessBigGolemTower",
        faction: ECardFaction.Crystal,
        type: "Building",
        tier: "III",
        charges: 2,
        chargeCooldown: 50,
        manaCost: 200,


        squadSize: 1,
        healthPerUnit: 540,
        energy: 0,
        maxEnergy: 0,
        armorType: EArmor.Fortified,
        damagePerHit: 61,
        attackSpeed: 1.7,
        attackType: EAttackType.Ranged,
        attackRange: 11,
        collisionRadius: 0.85,
        abilities: ["Dismantlement", "Doubleshot"],
    },
    {
        name: "Crystal Overseer",
        image: "ColorlessBigFlyingGolem",
        faction: ECardFaction.Crystal,
        type: "Unit",
        tier: "III",
        charges: 2,
        chargeCooldown: 50,
        manaCost: 200,


        squadSize: 1,
        healthPerUnit: 230,
        energy: 0,
        maxEnergy: 0,
        armorType: EArmor.Medium,
        damagePerHit: 63,
        attackSpeed: 2,
        attackType: EAttackType.Ranged,
        attackRange: 6,
        collisionRadius: 0.8,
        abilities: ["Flying", "Tripleshot"],
    }
];




export const Cards: Array<ICard> = [
    ...WhiteCards,
    ...BlackCards,
    ...GreenCards,
    ...BlueCards,
    ...CrystalCards
].map(card => {
    return ({
        ...card,
        id: card.name,
// @ts-ignore
        totalDamage: (card.damagePerHit * card.squadSize),
        // @ts-ignore
        totalHealth: (card.healthPerUnit * card.squadSize),
        // @ts-ignore
        totalDps: (card.damagePerHit * card.squadSize) / card.attackSpeed
    })
});



