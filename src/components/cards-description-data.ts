export const CARD_DESCRIPTIONS = [
    {
        "key": "ammorefill",
        "propspercentage": {
            energy_amount_stage_1_percentage: 0,
            energy_amount_stage_2_percentage: 0,
            energy_amount_stage_3_percentage: 0,
            energy_amount_legendary_percentage: 0
        },
        "entext": "Refills energy of target ally. The amount depends on the targets stage.\\n  Stage I - %(energy_amount_stage_1_percentage)\\n  Stage II - %(energy_amount_stage_2_percentage)\\n  Stage III - %(energy_amount_stage_3_percentage)\\n  Legendary - %(energy_amount_legendary_percentage)"
    },
    {
        "key": "cataclysm",
        "propsname": {
            unitability_name_epic: ""
        },
        "entext": "§unitability_name_epic. <span class=\"annihilated\">Annihilates</span> all units and buildings (except base buildings) in the target area. Can only be cast within the Nexus summoning zone."
    },
    {
        "key": "earthquake",
        "propspercentage": {wave_cooldown: 0, wave_count: 0, damage_amount: 0},
        "entext": "Shakes the earth every %(wave_cooldown) seconds for %(wave_count) waves each dealing %(damage_amount) siege splash damage to all enemies in target area. All enemy units are <span class=\"stunned\">stunned</span> each wave."
    },
    {
        "key": "EchoesOfTheFuture",
        "propspercentage": {duration: 0},
        "entext": "Doubles your income for the next %(duration) seconds. Afterwards you don't get any income for %(duration) seconds."
    },
    {
        "key": "energyrift",
        "propspercentage": {damage_amount: 0, duration: 0},
        "entext": "Creates an energy rift over an allied building, which shoots at enemy targets dealing %(damage_amount) damage per hit. Lasts for %(duration) seconds or until the building is destroyed."
    },
    {
        "key": "entanglingroots",
        "propspercentage": {target_count: 0},
        "entext": "<span class=\"keyword rooted\">Roots</span> up to %(target_count) enemy units in target area."
    },
    {
        "key": "evolveoracle",
        "propspercentage": {initial_health_percentage: 0},
        "propsname": {
            card_name_sapling: "",
            card_name_oracle: ""
        },
        "entext": "Evolves an allied <span class=\"keyword sapling\">§card_name_sapling</span> into an §card_name_oracle. It´s summoned with %(initial_health_percentage) of its maximum health."
    },
    {
        "key": "evolvethistle",
        "propspercentage": {target_count: 0},
        "propsname": {
            card_name_sapling_plural: "",
        },
        "entext": "Evolves up to %(target_count) allied <span class=\"keyword sapling\">§card_name_sapling_plural</span> into Thistles."
    },
    {
        "key": "factoryreset",
        "propspercentage": {target_count: 0},
        "entext": "Up to %(target_count) non-legendary non-base targets lose all applied effects. Moreover their <span class=\"keyword health\">health</span>, <span class=\"keyword energy\">energy</span> and building timer are reset to their initial values. Each target can only be reset once."
    },
    {
        "key": "fluxfield",
        "propspercentage": {charge_amount: 0},
        "entext": "Creates a <span class=\"keyword domain\">domain</span>. Enemies in the target area are <span class=\"keyword silenced\">silenced</span>. Allied units entering the <span class=\"keyword domain\">domain</span> receive <span class=\"keyword enchantment\">Enchantment</span>: Flux (Has %(charge_amount) charges. <span class=\"keyword domain\">Domains</span> disappear when no charges are left)."
    },
    {
        "key": "freeze",
        "propspercentage": {target_count: 0},
        "entext": "<span class=\"keyword frozen\">Freezes</span> up to %(target_count) enemy units in target area."
    },
    {
        "key": "frenzy",
        "entext": "Target allied unit gains <span class=\"keyword enchantment\">Enchantment</span>: Frenzy."
    },
    {
        "key": "frostspear",
        "propspercentage": {shard_count: 0, damage_amount: 0},
        "entext": "<span class=\"keyword frozen\">Freezes</span> target enemy (halved duration for base buildings). Afterwards it shoots %(shard_count) ice shards at random nearby enemies dealing %(damage_amount) damage each."
    },
    {
        "key": "giantgrowth",
        "entext": "Target allied unit gains <span class=\"keyword enchantment\">Enchantment</span>: Growth."
    },
    {
        "key": "hailofarrows",
        "propspercentage": {initial_wave_count: 0, damage_amount: 0},
        "entext": "Fires %(initial_wave_count) waves of arrows each dealing %(damage_amount) damage to all enemies in target area. An additional wave of arrows is fired for each nearby Archer."
    },
    {
        "key": "healinggarden",
        "propspercentage": {energy_amount: 0, energy_cooldown: 0, charge_amount: 0},
        "entext": "Creates a <span class=\"keyword domain\">domain</span>. Allies in the target area gain %(energy_amount) energy every %(energy_cooldown) seconds (does not stack). Allied units entering the <span class=\"keyword domain\">domain</span> receive <span class=\"keyword enchantment\">Enchantment</span>: Health (Has %(charge_amount) charges. <span class=\"keyword domain\">Domains</span> disappear when no charges are left)."
    },
    {
        "key": "inversegravity",
        "propspercentage": {target_count: 0},
        "entext": "Up to %(target_count) non-legendary units or gadgets gain <span class=\"keyword lifted\">lifted</span> (for ground targets) or <span class=\"keyword grounded\">grounded</span> (for flying targets)."
    },
    {
        "key": "lanenode",
        "entext": "If only units of any one team are in range of the capture point, it is captured and will be fortified with a light guard tower. If a guard tower is destroyed, it can be recaptured after 60 seconds."
    },
    {
        "key": "lightpulse",
        "propspercentage": {target_count_stun: 0, target_count_blind: 0},
        "entext": "<span class=\"keyword stunned\">Stuns</span> (small range, up to %(target_count_stun) targets) and <span class=\"keyword blinded\">blinds</span> (great range, up to %(target_count_blind) targets) enemy units in target area."
    },
    {
        "key": "ontheedge",
        "propspercentage": {range_reduction: 0, charge_amount: 0},
        "propsname": {
            unitability_name_enchantmentgrievouswounds: "",
        },
        "entext": "Creates a <span class=\"keyword domain\">domain</span>. Enemies in the target area have their auto attack range reduced by %(range_reduction). Allied units entering the <span class=\"keyword domain\">domain</span> receive <span class=\"keyword enchantment\">§unitability_name_enchantmentgrievouswounds</span> (Has %(charge_amount) charges. <span class=\"keyword domain\">Domains</span> disappear when no charges are left)."
    },
    {
        "key": "orbitalstrike",
        "propspercentage": {
            primary_damage_amount: 0,
            primary_damage_cooldown: 0,
            splash_damage_amount: 0,
            splash_damage_cooldown: 0,
            duration: 0
        },
        "entext": "Target enemy (except base buildings) gets burned by an orbital laser dealing %(primary_damage_amount) damage every %(primary_damage_cooldown) seconds. While the laser is active, surrounding enemies are hit randomly by orbital bombardment dealing %(splash_damage_amount) splash damage every %(splash_damage_cooldown) seconds. The laser is active for %(duration) seconds or until the target dies."
    },
    {
        "key": "permafrost",
        "entext": "Target unit gains <span class=\"keyword enchantment\">Enchantment</span>: Harden."
    },
    {
        "key": "petrify",
        "propspercentage": {target_count: 0},
        "entext": "Up to %(target_count) non-basebuilding targets in target area are <span class=\"petrified\">petrified</span>."
    },
    {
        "key": "promiseoflife",
        "propspercentage": {charge_amount: 0},
        "entext": "Creates a <span class=\"keyword domain\">domain</span>. Allied units in the target area are <span class=\"keyword protected\">protected</span> and immune to status effects. Whenever a unit´s <span class=\"keyword protected\">protection</span> is triggered, the <span class=\"keyword domain\">domain</span> depletes one charge (Has %(charge_amount) charges. <span class=\"keyword domain\">domains</span> disappear when no charges are left)."
    },
    {
        "key": "relocate",
        "propspercentage": {
            target_count: 0,
            cooldown: 0,
            heal_stage_1: 0,
            energy_stage_1: 0,
            heal_stage_2: 0,
            energy_stage_2: 0,
            heal_stage_3: 0,
            energy_stage_3: 0
        },
        "entext": "Teleports up to %(target_count) allies to another target location. Recently teleported targets can't be teleported for %(cooldown) seconds. Buildings are prioritized, healed and replenished after reappearing based on their stage.\\n  Stage I - %(heal_stage_1) health and %(energy_stage_1) energy\\n  Stage II - %(heal_stage_2) health and %(energy_stage_2) energy\\n  Stage III - %(heal_stage_3) health and %(energy_stage_3) energy"
    },
    {
        "key": "ripoutsoul",
        "propspercentage": {target_count: 0, damage_amount_percentage: 0},
        "entext": "<span class=\"keyword banished\">Banishes</span> up to %(target_count) units in target area and deals damage equal %(damage_amount_percentage) of their maximum health."
    },
    {
        "key": "saplingcharge",
        "propspercentage": {initial_sapling_amount: 0, wave_sapling_amount: 0, wave_count: 0},
        "propsname": {
            card_name_sapling_plural: "",
        },
        "entext": "Summons %(initial_sapling_amount) <span class=\"keyword sapling\">§card_name_sapling_plural</span> on cast and additionally %(wave_sapling_amount) <span class=\"keyword sapling\">§card_name_sapling_plural</span> for %(wave_count) Waves. Can't be cast nearby the enemy nexus."
    },
    {
        "key": "shatterice",
        "propspercentage": {damage_amount: 0, damage_amount_buildings: 0},
        "entext": "Deals %(damage_amount) damage to all <span class=\"keyword frozen\">frozen</span> enemies in target area (%(damage_amount_buildings) to Buildings)."
    },
    {
        "key": "shieldsup",
        "propspercentage": {target_count: 0},
        "entext": "Up to %(target_count) allied units in target area gain a <span class=\"keyword shieldblock\">shieldblock</span>."
    },
    {
        "key": "solarflare",
        "propspercentage": {primary_heal_amount: 0, splash_heal_amount: 0, duration: 0},
        "entext": "Heals target allied unit by %(primary_heal_amount) and creates an aura that heals other nearby units by %(splash_heal_amount) (%(duration) seconds duration). Can <span class=\"keyword overheal\">overheal</span>."
    },
    {
        "key": "StoneCircle",
        "propspercentage": {damage_reduction_percentage: 0, charge_amount: 0},
        "propsname": {
            unitability_name_enchantmentstonefist: "",
        },
        "entext": "Creates a <span class=\"keyword domain\">domain</span>. Allies in the target area receive only %(damage_reduction_percentage) damage from spells and abilities. Allied melee units entering the <span class=\"keyword domain\">domain</span> receive <span class=\"keyword enchantment\">§unitability_name_enchantmentstonefist</span> (Has %(charge_amount) charges. <span class=\"keyword domain\">Domains</span> disappear when no charges are left)."
    },
    {
        "key": "surgeoflight",
        "propspercentage": {heal_amount: 0, counter_gained_amount: 0, damage_amount: 0},
        "entext": "If the target unit is an ally, it is healed for %(heal_amount) (can <span class=\"keyword overheal\">overheal</span>) and this spell gains %(counter_gained_amount) light counter.\\nIf the target unit is an enemy, it receives damage equal to the light counters times %(damage_amount) consuming all light counters."
    }
];

const CARD_Short_Descriptions = [

    {
        "key": "ammorefill",
        "entext": "Refills target allied unit´s energy."
    },
    {
        "key": "cataclysm",
        "propsname": {
            unitability_name_epic: "",
        },
        "entext": "§unitability_name_epic. Annihilates all units and buildings in the target area."
    },
    {
        "key": "earthquake",
        "entext": "Legendary. Stuns units and deals siege splash damage in waves in target area."
    },
    {
        "key": "EchoesOfTheFuture",
        "propspercentage": {duration: 0},
        "entext": "Doubles your income for the next %(duration) seconds. Afterwards you don't get any income for %(duration) seconds."
    },
    {
        "key": "energyrift",
        "entext": "Creates a shooting energy rift over an allied building."
    },
    {
        "key": "entanglingroots",
        "propspercentage": {target_count: 0},
        "entext": "Roots %(target_count) enemy units."
    },
    {
        "key": "evolveoracle",
        "propsname": {
            card_name_sapling: "",
            card_name_oracle: ""
        },
        "entext": "Evolves an allied §card_name_sapling into an §card_name_oracle. "
    },
    {
        "key": "evolvethistle",
        "propspercentage": {target_count: 0},
        "entext": "Evolves up to %(target_count) allied Saplings into Thistles."
    },
    {
        "key": "factoryreset",
        "propspercentage": {target_count: 0},
        "entext": "Resets once health and energy of up to %(target_count) targets and removes all applied effects."
    },
    {
        "key": "fluxfield",
        "entext": "Creates a domain that silences enemy targets and gives allies Enchantment: Flux."
    },
    {
        "key": "freeze",
        "propspercentage": {target_count: 0},
        "entext": "Freezes up to %(target_count) enemy units."
    },
    {
        "key": "frenzy",
        "entext": "Target allied unit gains Enchantment: Frenzy, increasing its attack speed."
    },
    {
        "key": "frostspear",
        "entext": "Freezes the target and let it shoot ice shards."
    },
    {
        "key": "giantgrowth",
        "entext": "Target allied unit gains Enchantment: Growth, increasing its maximum health and regenerating it."
    },
    {
        "key": "hailofarrows",
        "entext": "Fires waves of arrows onto target area. Nearby Archers enhance this effect."
    },
    {
        "key": "healinggarden",
        "entext": "Creates a domain that replenishes allied units energy and gives them Enchantment: Health."
    },
    {
        "key": "inversegravity",
        "propspercentage": {target_count: 0},
        "entext": "Up to %(target_count) ground targets are lifted and flying targets are grounded."
    },
    {
        "key": "lightpulse",
        "propspercentage": {target_count_blind: 0},
        "entext": "Stuns and blinds up to %(target_count_blind) target enemy units."
    },
    {
        "key": "ontheedge",
        "entext": "Creates a domain that reduces enemy range and gives allies Enchantment: Grievous Wounds."
    },
    {
        "key": "orbitalstrike",
        "entext": "Target enemy is burned by a laser while bombarding surrounding enemies."
    },
    {
        "key": "permafrost",
        "propsname": {
            unitability_name_permafrost: "",
        },
        "entext": "Target unit is frozen and gains §unitability_name_permafrost, modifying its health and armor class."
    },
    {
        "key": "petrify",
        "propspercentage": {target_count: 0},
        "entext": "Petrifies up to %(target_count) targets."
    },
    {
        "key": "promiseoflife",
        "entext": "Creates a domain that prevents allied units from dying and grants immunity to status effects."
    },
    {
        "key": "relocate",
        "propspercentage": {target_count: 0},
        "entext": "Teleports up to %(target_count) allies to another location. Buildings are healed and replenished."
    },
    {
        "key": "ripoutsoul",
        "entext": "Banishes units and deals damage."
    },
    {
        "key": "saplingcharge",
        "entext": "Legendary. Summons hordes of Saplings in target area."
    },
    {
        "key": "shatterice",
        "entext": "Deals massive damage to frozen enemies."
    },
    {
        "key": "shieldsup",
        "propspercentage": {target_count: 0},
        "entext": "Gives %(target_count) allied units in target area a shieldblock."
    },
    {
        "key": "solarflare",
        "entext": "Heals target allied unit and provides a healing aura. Can overheal."
    },
    {
        "key": "StoneCircle",
        "propsname": {
            unitability_name_enchantmentstonefist: "",
        },
        "entext": "Creates a domain that lower spell and ability damage and gives allies §unitability_name_enchantmentstonefist."
    },
    {
        "key": "surgeoflight",
        "entext": "Heals target allied unit gaining charges or damages target enemy unit consuming charges. Can Overheal."
    },

];