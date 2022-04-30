

export interface ICardDescription {
    key: string,
    propspercentage? : {[paramKey: string] : number};
    propsname? : {[paramKey: string] : string};
    en: string;
}

export const CARD_DESCRIPTIONS : ICardDescription[] = [
    {
        "key": "ammorefill",
        "propspercentage": {
            energy_amount_stage_1_percentage: 100,
            energy_amount_stage_2_percentage: 50,
            energy_amount_stage_3_percentage: 25,
            energy_amount_legendary_percentage: 25
        },
        "en": "Refills energy of target ally. The amount depends on the targets stage.\\n  Stage I - %(energy_amount_stage_1_percentage)\\n  Stage II - %(energy_amount_stage_2_percentage)\\n  Stage III - %(energy_amount_stage_3_percentage)\\n  Legendary - %(energy_amount_legendary_percentage)"
    },
    {
        "key": "cataclysm",
        "propsname": {
            unitability_name_epic: "Divine"
        },
        "en": "§unitability_name_epic. <span class=\"annihilated\">Annihilates</span> all units and buildings (except base buildings) in the target area. Can only be cast within the Nexus summoning zone."
    },
    {
        "key": "earthquake",
        "propspercentage": {wave_cooldown: 5, wave_count:3, damage_amount: 40},
        "en": "Shakes the earth every %(wave_cooldown) seconds for %(wave_count) waves each dealing %(damage_amount) siege splash damage to all enemies in target area. All enemy units are <span class=\"stunned\">stunned</span> each wave."
    },
    {
        "key": "EchoesOfTheFuture",
        "propspercentage": {duration: 30},
        "en": "Doubles your income for the next %(duration) seconds. Afterwards you don't get any income for %(duration) seconds."
    },
    {
        "key": "energyrift",
        "propspercentage": {damage_amount: 24, duration: 30},
        "en": "Creates an energy rift over an allied building, which shoots at enemy targets dealing %(damage_amount) damage per hit. Lasts for %(duration) seconds or until the building is destroyed."
    },
    {
        "key": "entanglingroots",
        "propspercentage": {target_count: 16},
        "en": "<span class=\"keyword rooted\">Roots</span> up to %(target_count) enemy units in target area."
    },
    {
        "key": "evolveoracle",
        "propspercentage": {initial_health_percentage: 60},
        "propsname": {
            card_name_sapling: "Sapling",
            card_name_oracle: "Oracle"
        },
        "en": "Evolves an allied <span class=\"keyword sapling\">§card_name_sapling</span> into an §card_name_oracle. It´s summoned with %(initial_health_percentage) of its maximum health."
    },
    {
        "key": "evolvethistle",
        "propspercentage": {target_count: 6},
        "propsname": {
            card_name_sapling_plural: "Saplings",
        },
        "en": "Evolves up to %(target_count) allied <span class=\"keyword sapling\">§card_name_sapling_plural</span> into Thistles."
    },
    {
        "key": "factoryreset",
        "propspercentage": {target_count: 5},
        "en": "Up to %(target_count) non-legendary non-base targets lose all applied effects. Moreover their <span class=\"keyword health\">health</span>, <span class=\"keyword energy\">energy</span> and building timer are reset to their initial values. Each target can only be reset once."
    },
    {
        "key": "fluxfield",
        "propspercentage": {charge_amount: 6},
        "en": "Creates a <span class=\"keyword domain\">domain</span>. Enemies in the target area are <span class=\"keyword silenced\">silenced</span>. Allied units entering the <span class=\"keyword domain\">domain</span> receive <span class=\"keyword enchantment\">Enchantment</span>: Flux (Has %(charge_amount) charges. <span class=\"keyword domain\">Domains</span> disappear when no charges are left)."
    },
    {
        "key": "freeze",
        "propspercentage": {target_count: 12},
        "en": "<span class=\"keyword frozen\">Freezes</span> up to %(target_count) enemy units in target area."
    },
    {
        "key": "frenzy",
        "en": "Target allied unit gains <span class=\"keyword enchantment\">Enchantment</span>: Frenzy."
    },
    {
        "key": "frostspear",
        "propspercentage": {shard_count: 12, damage_amount: 10},
        "en": "<span class=\"keyword frozen\">Freezes</span> target enemy (halved duration for base buildings). Afterwards it shoots %(shard_count) ice shards at random nearby enemies dealing %(damage_amount) damage each."
    },
    {
        "key": "giantgrowth",
        "en": "Target allied unit gains <span class=\"keyword enchantment\">Enchantment</span>: Growth."
    },
    {
        "key": "hailofarrows",
        "propspercentage": {initial_wave_count: 4, damage_amount: 16},
        "en": "Fires %(initial_wave_count) waves of arrows each dealing %(damage_amount) damage to all enemies in target area. An additional wave of arrows is fired for each nearby Archer."
    },
    {
        "key": "healinggarden",
        "propspercentage": {energy_amount: 1, energy_cooldown: 5, charge_amount: 6},
        "en": "Creates a <span class=\"keyword domain\">domain</span>. Allies in the target area gain %(energy_amount) energy every %(energy_cooldown) seconds (does not stack). Allied units entering the <span class=\"keyword domain\">domain</span> receive <span class=\"keyword enchantment\">Enchantment</span>: Health (Has %(charge_amount) charges. <span class=\"keyword domain\">Domains</span> disappear when no charges are left)."
    },
    {
        "key": "inversegravity",
        "propspercentage": {target_count: 16},
        "en": "Up to %(target_count) non-legendary units or gadgets gain <span class=\"keyword lifted\">lifted</span> (for ground targets) or <span class=\"keyword grounded\">grounded</span> (for flying targets)."
    },
    {
        "key": "lanenode",
        "en": "If only units of any one team are in range of the capture point, it is captured and will be fortified with a light guard tower. If a guard tower is destroyed, it can be recaptured after 60 seconds."
    },
    {
        "key": "lightpulse",
        "propspercentage": {target_count_stun: 10, target_count_blind: 15},
        "en": "<span class=\"keyword stunned\">Stuns</span> (small range, up to %(target_count_stun) targets) and <span class=\"keyword blinded\">blinds</span> (great range, up to %(target_count_blind) targets) enemy units in target area."
    },
    {
        "key": "ontheedge",
        "propspercentage": {range_reduction: 4, charge_amount: 10},
        "propsname": {
            unitability_name_enchantmentgrievouswounds: "",
        },
        "en": "Creates a <span class=\"keyword domain\">domain</span>. Enemies in the target area have their auto attack range reduced by %(range_reduction). Allied units entering the <span class=\"keyword domain\">domain</span> receive <span class=\"keyword enchantment\">§unitability_name_enchantmentgrievouswounds</span> (Has %(charge_amount) charges. <span class=\"keyword domain\">Domains</span> disappear when no charges are left)."
    },
    {
        "key": "orbitalstrike",
        "propspercentage": {
            primary_damage_amount: 13,
            primary_damage_cooldown: 0.5,
            splash_damage_amount: 11,
            splash_damage_cooldown: 0.2,
            duration: 15
        },
        "en": "Target enemy (except base buildings) gets burned by an orbital laser dealing %(primary_damage_amount) damage every %(primary_damage_cooldown) seconds. While the laser is active, surrounding enemies are hit randomly by orbital bombardment dealing %(splash_damage_amount) splash damage every %(splash_damage_cooldown) seconds. The laser is active for %(duration) seconds or until the target dies."
    },
    {
        "key": "permafrost",
        "en": "Target unit gains <span class=\"keyword enchantment\">Enchantment</span>: Harden."
    },
    {
        "key": "petrify",
        "propspercentage": {target_count: 16},
        "en": "Up to %(target_count) non-basebuilding targets in target area are <span class=\"petrified\">petrified</span>."
    },
    {
        "key": "promiseoflife",
        "propspercentage": {charge_amount: 5},
        "en": "Creates a <span class=\"keyword domain\">domain</span>. Allied units in the target area are <span class=\"keyword protected\">protected</span> and immune to status effects. Whenever a unit´s <span class=\"keyword protected\">protection</span> is triggered, the <span class=\"keyword domain\">domain</span> depletes one charge (Has %(charge_amount) charges. <span class=\"keyword domain\">domains</span> disappear when no charges are left)."
    },
    {
        "key": "relocate",
        "propspercentage": {
            target_count: 6,
            cooldown: 20,
            heal_stage_1: 30,
            energy_stage_1: 25,
            heal_stage_2: 25,
            energy_stage_2: 15,
            heal_stage_3: 15,
            energy_stage_3: 15
        },
        "en": "Teleports up to %(target_count) allies to another target location. Recently teleported targets can't be teleported for %(cooldown) seconds. Buildings are prioritized, healed and replenished after reappearing based on their stage.\\n  Stage I - %(heal_stage_1) health and %(energy_stage_1) energy\\n  Stage II - %(heal_stage_2) health and %(energy_stage_2) energy\\n  Stage III - %(heal_stage_3) health and %(energy_stage_3) energy"
    },
    {
        "key": "ripoutsoul",
        "propspercentage": {target_count: 20, damage_amount_percentage: 30},
        "en": "<span class=\"keyword banished\">Banishes</span> up to %(target_count) units in target area and deals damage equal %(damage_amount_percentage) of their maximum health."
    },
    {
        "key": "saplingcharge",
        "propspercentage": {initial_sapling_amount: 15, wave_sapling_amount: 10, wave_count: 11},
        "propsname": {
            card_name_sapling_plural: "Saplings",
        },
        "en": "Summons %(initial_sapling_amount) <span class=\"keyword sapling\">§card_name_sapling_plural</span> on cast and additionally %(wave_sapling_amount) <span class=\"keyword sapling\">§card_name_sapling_plural</span> for %(wave_count) Waves. Can't be cast nearby the enemy nexus."
    },
    {
        "key": "shatterice",
        "propspercentage": {damage_amount: 250, damage_amount_buildings: 800},
        "en": "Deals %(damage_amount) damage to all <span class=\"keyword frozen\">frozen</span> enemies in target area (%(damage_amount_buildings) to Buildings)."
    },
    {
        "key": "shieldsup",
        "propspercentage": {target_count: 30},
        "en": "Up to %(target_count) allied units in target area gain a <span class=\"keyword shieldblock\">shieldblock</span>."
    },
    {
        "key": "solarflare",
        "propspercentage": {primary_heal_amount: 400, splash_heal_amount: 25, duration: 10},
        "en": "Heals target allied unit by %(primary_heal_amount) and creates an aura that heals other nearby units by %(splash_heal_amount) (%(duration) seconds duration). Can <span class=\"keyword overheal\">overheal</span>."
    },
    {
        "key": "StoneCircle",
        "propspercentage": {damage_reduction_percentage: 40, charge_amount: 10},
        "propsname": {
            unitability_name_enchantmentstonefist: "Enhancement: Stonefist",
        },
        "en": "Creates a <span class=\"keyword domain\">domain</span>. Allies in the target area receive only %(damage_reduction_percentage) damage from spells and abilities. Allied melee units entering the <span class=\"keyword domain\">domain</span> receive <span class=\"keyword enchantment\">§unitability_name_enchantmentstonefist</span> (Has %(charge_amount) charges. <span class=\"keyword domain\">Domains</span> disappear when no charges are left)."
    },
    {
        "key": "surgeoflight",
        "propspercentage": {heal_amount: 200, counter_gained_amount: 1, damage_amount: 40},
        "en": "If the target unit is an ally, it is healed for %(heal_amount) (can <span class=\"keyword overheal\">overheal</span>) and this spell gains %(counter_gained_amount) light counter.\\nIf the target unit is an enemy, it receives damage equal to the light counters times %(damage_amount) consuming all light counters."
    }
];

export const CARD_Short_Descriptions : ICardDescription[] = [

    {
        "key": "ammorefill",
        "en": "Refills target allied unit´s energy."
    },
    {
        "key": "cataclysm",
        "propsname": {
            unitability_name_epic: "Divine",
        },
        "en": "§unitability_name_epic. Annihilates all units and buildings in the target area."
    },
    {
        "key": "earthquake",
        "en": "Legendary. Stuns units and deals siege splash damage in waves in target area."
    },
    {
        "key": "EchoesOfTheFuture",
        "propspercentage": {duration: 30},
        "en": "Doubles your income for the next %(duration) seconds. Afterwards you don't get any income for %(duration) seconds."
    },
    {
        "key": "energyrift",
        "en": "Creates a shooting energy rift over an allied building."
    },
    {
        "key": "entanglingroots",
        "propspercentage": {target_count: 16},
        "en": "Roots %(target_count) enemy units."
    },
    {
        "key": "evolveoracle",
        "propsname": {
            card_name_sapling: "Sapling",
            card_name_oracle: "Oracle"
        },
        "en": "Evolves an allied §card_name_sapling into an §card_name_oracle. "
    },
    {
        "key": "evolvethistle",
        "propspercentage": {target_count: 6},
        "en": "Evolves up to %(target_count) allied Saplings into Thistles."
    },
    {
        "key": "factoryreset",
        "propspercentage": {target_count: 8},
        "en": "Resets once health and energy of up to %(target_count) targets and removes all applied effects."
    },
    {
        "key": "fluxfield",
        "en": "Creates a domain that silences enemy targets and gives allies Enchantment: Flux."
    },
    {
        "key": "freeze",
        "propspercentage": {target_count: 12},
        "en": "Freezes up to %(target_count) enemy units."
    },
    {
        "key": "frenzy",
        "en": "Target allied unit gains Enchantment: Frenzy, increasing its attack speed."
    },
    {
        "key": "frostspear",
        "en": "Freezes the target and let it shoot ice shards."
    },
    {
        "key": "giantgrowth",
        "en": "Target allied unit gains Enchantment: Growth, increasing its maximum health and regenerating it."
    },
    {
        "key": "hailofarrows",
        "en": "Fires waves of arrows onto target area. Nearby Archers enhance this effect."
    },
    {
        "key": "healinggarden",
        "en": "Creates a domain that replenishes allied units energy and gives them Enchantment: Health."
    },
    {
        "key": "inversegravity",
        "propspercentage": {target_count: 16},
        "en": "Up to %(target_count) ground targets are lifted and flying targets are grounded."
    },
    {
        "key": "lightpulse",
        "propspercentage": {target_count_blind: 10},
        "en": "Stuns and blinds up to %(target_count_blind) target enemy units."
    },
    {
        "key": "ontheedge",
        "en": "Creates a domain that reduces enemy range and gives allies Enchantment: Grievous Wounds."
    },
    {
        "key": "orbitalstrike",
        "en": "Target enemy is burned by a laser while bombarding surrounding enemies."
    },
    {
        "key": "permafrost",
        "propsname": {
            unitability_name_permafrost: "Enhancement",
        },
        "en": "Target unit is frozen and gains §unitability_name_permafrost, modifying its health and armor class."
    },
    {
        "key": "petrify",
        "propspercentage": {target_count: 16},
        "en": "Petrifies up to %(target_count) targets."
    },
    {
        "key": "promiseoflife",
        "en": "Creates a domain that prevents allied units from dying and grants immunity to status effects."
    },
    {
        "key": "relocate",
        "propspercentage": {target_count: 6},
        "en": "Teleports up to %(target_count) allies to another location. Buildings are healed and replenished."
    },
    {
        "key": "ripoutsoul",
        "en": "Banishes units and deals damage."
    },
    {
        "key": "saplingcharge",
        "en": "Legendary. Summons hordes of Saplings in target area."
    },
    {
        "key": "shatterice",
        "en": "Deals massive damage to frozen enemies."
    },
    {
        "key": "shieldsup",
        "propspercentage": {target_count: 30},
        "en": "Gives %(target_count) allied units in target area a shieldblock."
    },
    {
        "key": "solarflare",
        "en": "Heals target allied unit and provides a healing aura. Can overheal."
    },
    {
        "key": "StoneCircle",
        "propsname": {
            unitability_name_enchantmentstonefist: "Enhancement: Stonefist",
        },
        "en": "Creates a domain that lower spell and ability damage and gives allies §unitability_name_enchantmentstonefist."
    },
    {
        "key": "surgeoflight",
        "en": "Heals target allied unit gaining charges or damages target enemy unit consuming charges. Can Overheal."
    },

];