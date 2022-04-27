import {TAbilities} from "./cards-game-data";

export const CARD_ABILITIES : ({en: string, key: string})[] = [
    {
        "key": "annihilated",
        "en": "<span class=\"keyword annihilated\">Annihilated</span> units are removed from the game instantly and don't trigger any effects."
    },
    {
        "key": "banished",
        "en": "<span class=\"keyword banished\">Banished</span> (status effect) units can´t move, be attacked or targeted by spells for 10 seconds. Moreover they don't affect capture points. Recently banished units are immune to this effect for 10 seconds."
    },
    {
        "key": "bleeding",
        "en": "<span class=\"bleeding\">Bleeding</span> (status effect) units receive <span class=\"damage\">1%</span> of their maximum health as damage every second (stacks up to <span class=\"counter\">10</span> times). Moreover while having at least <span class=\"counter\">1</span> stack any received heal is reduced by 40%. This effect lasts for 10 seconds."
    },
    {
        "key": "blinded",
        "en": "<span class=\"keyword blinded\">Blinded</span> (status effect) units miss 50% of their attacks for 12 seconds. Recently blinded units are immune to this effect for 10 seconds."
    },
    {
        "key": "domain",
        "en": "<span class=\"keyword domain\">Domains</span> are target areas with certain effects. You can control up to 3 at a time. When creating a fourth domain, the first will disappear."
    },
    {
        "key": "enchanted",
        "en": "<span class=\"keyword enchantment\">Enchantments</span> of the same name can only be received once per unit."
    },
    {
        "key": "frozen",
        "en": "<span class=\"keyword frozen\">Frozen</span> (status effect) units are incapacitated for 9 seconds. Recently frozen units are immune to this effect for 10 seconds."
    },
    {
        "key": "grounded",
        "en": "<span class=\"keyword grounded\">Grounded</span> (status effect) units lose flying and can't move. Recently grounded units are immune to this effect for 10 seconds."
    },
    {
        "key": "guarded",
        "en": "<span class=\"keyword protected\">Protected</span> units are saved from dying once. Their health is set to 1 instead and they become invincible for 2 seconds. Recently protected units are immune to this effect for 60 seconds."
    },
    {
        "key": "lifted",
        "en": "<span class=\"keyword lifted\">Lifted</span> (status effect) units gain flying and can't move. Recently lifted units are immune to this effect for 10 seconds."
    },
    {
        "key": "missile",
        "en": "<span class=\"keyword missile\">Missiles</span> deal <span class=\"keyword damage\">54</span> splash damage and have Predator: Flying (<span class=\"keyword damage\">200%</span> damage to flying and monumental targets)."
    },
    {
        "key": "overheal",
        "en": "<span class=\"keyword overheal\">Overheal</span> exceeding a unit´s maximum health is saved as a shield. The maximum shield amount is <span class=\"keyword health\">200%</span> of the unit´s maximum health."
    },
    {
        "key": "petrified",
        "en": "<span class=\"petrified\">Petrified</span> (status effect) targets are incapacitated for 12 seconds. They regenerate <span class=\"health\">10</span> health each second. Can <span class=\"overheal\">overheal</span>. Recently petrified targets are immune to this effect for 10 seconds."
    },
    {
        "key": "rescued",
        "en": "<span class=\"keyword rescued\">Rescued</span> units are teleported to your nexus. Their health is set to 10 and all status effects are removed. This effect can only occur once per unit."
    },
    {
        "key": "rooted",
        "en": "<span class=\"keyword rooted\">Rooted</span> (status effect) units can´t move for 12 seconds and receive <span class=\"keyword damage\">1.5</span> damage per second. Recently rooted units are immune to this effect for 10 seconds."
    },
    {
        "key": "sapling",
        "en": "<span class=\"keyword sapling\">Saplings</span> are tiny creatures with <span class=\"keyword health\">2</span> health and are <span class=\"timed\">time limited</span>. Once <span class=\"enchantment\">enchanted</span> they flourish, increasing their health by <span class=\"keyword health\">50</span> and living indefinitely."
    },
    {
        "key": "shieldblock",
        "en": "<span class=\"keyword shieldblock\">Shieldblock</span> prevents the next incoming damage that exceeds 10. Shieldblocks do not stack."
    },
    {
        "key": "silenced",
        "en": "<span class=\"keyword silenced\">Silenced</span> (status effect) units can´t use abilities which consume energy."
    },
    {
        "key": "statedescription",
        "en": "Status effects: banished, bleeding, blinded, frozen, grounded, lifted, petrified, rooted, silenced, stunned."
    },
    {
        "key": "stealthed",
        "en": "<span class=\"keyword stealthed\">Stealthed</span> units can't be targeted by enemies and don't affect capture points."
    },
    {
        "key": "stunned",
        "en": "<span class=\"keyword stunned\">Stunned</span> (status effect) units are incapacitated for 3 seconds."
    },
    {
        "key": "summoningsickness",
        "en": "<span class=\"keyword summoningsickness\">Summoning sickness</span> affects units right after they were summoned. They are incapacitated (1 seconds duration)."
    },
    {
        "key": "timed",
        "en": "<span class=\"timed\">Time limited</span> units die after 17 seconds. This limit is removed if this unit receives an <span class=\"keyword enchantment\">enchantment</span>."
    },

];

export interface IUnitAbilityHint {
    key: string;
    propspercentage?: any;
    propsname?: any;
    en: string;
}

export const UNIT_ABILITY_HINT : IUnitAbilityHint[] = [
    {
        "key": "activearmor",
        "propspercentage": {
            damage_amount : 10,
            self_damage_amount : 5
        },
        "en": "Whenever this unit gets damaged it shoots a projectile at a random enemy dealing %(damage_amount) damage. If a projectile has been shot this unit receives additionally %(self_damage_amount) damage."
    },
    {
        "key": "ammo",
        "propspercentage": {
            energy_cost : 1
        },
        "en": "Consumes %(energy_cost) energy per attack."
    },
    {
        "key": "ammo_basebuilding",
        "propspercentage": {
            charge_cost: 0
        },
        "en": "Consumes %(charge_cost) crystal ammunition per attack."
    },
    {
        "key": "ammo2",
        "propspercentage":  {
            energy_cost: 0
        },
        "en": "Consumes %(energy_cost) energy per attack."
    },
    {
        "key": "ammotransfer",
        "propspercentage": {
            energy_amount : 0,
            cooldown : 0
        },
        "en": "Transfers %(energy_amount) energy to another nearby allied target. (%(cooldown) seconds cooldown)"
    },
    {
        "key": "ancientwisdom",
        "propspercentage": {
            health_bonus :0
        } ,
        "en": "Whenever this unit gains an <span class=\"keyword enchantment\">enchantment</span>, its health is permanently increased by %(health_bonus)."
    },
    {
        "key": "antiair",
        "propspercentage": {
            primary_damage_amount_percentage : 0
        },
        "en": "Deals %(primary_damage_amount_percentage) damage to flying or monumental targets."
    },
    {
        "key": "armorpiercing",
        "en": "Attacks ignore target´s armor."
    },
    {
        "key": "barkboost",
        "propspercentage": {
            health_amount: 0,
            absorb_cap :0,
            cooldown : 0
        },
        "propsname": {
            card_name_sapling_plural : "",
        },
        "en": "Absorbs nearby <span class=\"keyword sapling\">§card_name_sapling_plural</span>. Absorbed §card_name_sapling_plural increase this unit´s health by %(health_amount). Can absorb up to %(absorb_cap) <span class=\"keyword sapling\">§card_name_sapling_plural</span>. (%(cooldown) seconds cooldown)                    "
    },
    {
        "key": "biggamehunter",
        "en": "Always attacks the enemy with the highest maximum health in range."
    },
    {
        "key": "breachingcharge",
        "propspercentage": {
            damage_amount : 0,
            damage_amount_per_energy: 0
        },
        "en": "If this unit gets near to an enemy building it explodes dealing %(damage_amount) (plus %(damage_amount_per_energy) for each carried energy) splash siege damage around it."
    },
    {
        "key": "cleave",
        "en": "Attacks all units in a cone in front of it."
    },
    {
        "key": "cloakground",
        "en": "As long as there is no enemy on the same height nearby and this unit is not affected by a status effect, this unit is <span class=\"stealthed\">stealthed</span>."
    },
    {
        "key": "crystalartillery",
        "propspercentage": {
            damage_amount: 0,
            charge_duration: 0
        },
        "en": "Attacks buildings with a long range attack that deals %(damage_amount) siege damage. Needs to be charged for %(charge_duration) seconds before firing. If this unit is caught in a melee fight it loses all its charges."
    },
    {
        "key": "crystalpower",
        "en": "Gives nearby allied units Crystal Power. Crystal Power adds a secondary attack that targets a unit behind the actual target. "
    },
    {
        "key": "crystalspeed",
        "propspercentage": {
            attack_speed_bonus_percentage : 0,
            cooldown: 0
        },
        "en": "Increases the attack speed of nearby allied units by %(attack_speed_bonus_percentage). (%(cooldown) seconds cooldown) When the ally moves out of range or this unit is incapacitated the effect ends."
    },
    {
        "key": "dampingshield",
        "propspercentage": {
            damage_reduction_percentage : 0
        },
        "en": "This unit gets only %(damage_reduction_percentage) damage from splash damage sources."
    },
    {
        "key": "deathrattlebentbow",
        "en": "Whenever this unit dies, it shoots an arrow at a random nearby enemy."
    },
    {
        "key": "deathrattleblast",
        "propspercentage": {
            energy_cost: 0,
            damage_amount : 0,
        },
        "en": "Whenever this unit dies, it launches a projectile for each %(energy_cost) energy it has at a random nearby enemy building dealing %(damage_amount) siege damage."
    },
    {
        "key": "deathrattlefrostexplosion",
        "en": "Whenever this unit dies, all nearby enemy units are <span class=\"keyword frozen\">frozen</span>."
    },
    {
        "key": "deathrattlesouldonor",
        "en": "Whenever this unit dies, it transfers its energy to random friendly units nearby.      "
    },
    {
        "key": "deathrattlesporefield",
        "propspercentage": {
            heal_amount: 0,
            duration: 0
        },
        "en": "Whenever this unit dies, a small patch of spores is created that regenerates allied units (%(heal_amount) health per second, can't be stacked). Enemy flying units entering this area are <span class=\"keyword grounded\">grounded</span> (lasts for %(duration) seconds)."
    },
    {
        "key": "debutasteroid",
        "propspercentage": {
            damage_amount : 0
        },
        "en": "When this unit enters the battlefield, it deals %(damage_amount) splash damage to all enemies in the impact zone. "
    },
    {
        "key": "debuticyprison",
        "propspercentage": {
            damage_reduction_percentage: 0,
            break_threshold_percentage: 0,
            break_shatter_damage: 0
        },
        "en": "Enters the battlefield perma <span class=\"keyword frozen\">frozen</span>. All incoming damage is reduced by %(damage_reduction_percentage) and Vecra continuously loses health. After dropping below %(break_threshold_percentage) health, she breaks free and <span class=\"keyword frozen\">freezes</span> nearby enemies. If they were already <span class=\"keyword frozen\">frozen</span> they receive %(break_shatter_damage) damage instead."
    },
    {
        "key": "debutinsidious",
        "propsname": {
            enchantmentgrievouswounds: "",
        },
        "en": "Enters the battlefield <span class=\"enchantment\">enchanted</span> with <span class=\"enchantment\">§enchantmentgrievouswounds</span>."
    },
    {
        "key": "debutrupture",
        "propspercentage": {
            damage_amount : 0,
        },
        "en": "Enters the battlefield moving underground, untargetable for the enemy. If an enemy unit comes into range, this unit breaks free dealing %(damage_amount) splash damage to nearby enemy units."
    },
    {
        "key": "debutsoulvortex",
        "propspercentage": {
            energy_amount : 0
        },
        "en": "When this unit enters the battlefield, all nearby units are <span class=\"keyword banished\">banished</span>. Tyrus generates %(energy_amount) energy per affected unit."
    },
    {
        "key": "debutstarfall",
        "en": "When this unit enters the battlefield, it instantly <span class=\"keyword annihilated\">annihilates</span> all non-legendary units and buildings in the impact zone. "
    },
    {
        "key": "debutstun",
        "en": "When this unit enters the battlefield, all nearby enemy units are <span class=\"keyword stunned\">stunned</span>."
    },
    {
        "key": "depletingbounce",
        "propspercentage": {
            target_count: 0
        },
        "en": "Attacks bounce and hit up to %(target_count) random targets. Each hit reduces the damage of the shot by the dealt damage and stops it when the damage is depleted."
    },
    {
        "key": "dragonpunch",
        "propspercentage": {
            damage_bonus: 0,
            annihilate_threshold_percentage: 0
        },
        "en": "Whenever this unit attacks another unit with less current health, that unit is <span class=\"keyword stunned\">stunned</span> and receives %(damage_bonus) damage. If the target´s current health is less than %(annihilate_threshold_percentage) of the Monk´s current health, it is <span class=\"keyword annihilated\">annihilated</span> instead."
    },
    {
        "key": "enchantmentarmor",
        "propspercentage": {
            energy_cost: 0,
            heal_amount: 0,
            armor_increase: 0
        },
        "en": "Consumes %(energy_cost) energy to <span class=\"keyword enchantment\">enchant</span> a nearby allied unit.\\nInitial effect: Target is healed for %(heal_amount) (can <span class=\"keyword overheal\">overheal</span>).\\nPermanent effect: Target´s armor class is increased by %(armor_increase)."
    },
    {
        "key": "enchantmentflux",
        "propspercentage": {
            energy_regeneration_amount: 0,
            energy_regeneration_cooldown: 0,
            energy_regeneration_cap: 0,
            energy_cap_increase: 0
        },
        "en": "Initial effect: Replenishes %(energy_regeneration_amount) energy every %(energy_regeneration_cooldown) seconds until %(energy_regeneration_cap) energy is replenished in total.\\nPermanent effect: Maximum energy is increased by %(energy_cap_increase), but current energy remains the same."
    },
    {
        "key": "enchantmentfrenzy",
        "propspercentage": {
            duration: 0,
            attack_speed_bonus_percentage: 0,
            attack_speed_bonus_ranged_percentage: 0,
            heal_amount: 0,
            additional_target_count: 0,
        },
        "en": "Initial effect (%(duration) seconds duration): Attack speed is increased to %(attack_speed_bonus_percentage) (%(attack_speed_bonus_ranged_percentage) for ranged) and all status effects are removed once.\\nIf the target is melee, it recovers %(heal_amount) health per attack.\\nIf the target is ranged, it can attack %(additional_target_count) additional target.\\nPermanent: Immunity to status effects."
    },
    {
        "key": "enchantmentgrievouswounds",
        "propspercentage": {
            cooldown: 0,
        },
        "en": "Permanent effect: Every unit dealt damage gains <span class=\"bleeding\">bleeding</span>. If it is already <span class=\"bleeding\">bleeding</span>, the duration is reset. (%(cooldown) second cooldown)"
    },
    {
        "key": "enchantmentgrowth",
        "propspercentage": {
            duration: 0,
            heal_amount_percentage: 0,
            health_amount: 0
        },
        "en": "Initial effect (%(duration) seconds duration): Regenerates %(heal_amount_percentage) maximum health per second.\\nPermanent effect: Maximum health is increased by %(health_amount). "
    },
    {
        "key": "enchantmenthealth",
        "propspercentage": {
            health_amount_percentage: 0,
            health_amount: 0,
        },
        "en": "Permanent effect: Health is increased by %(health_amount_percentage) of the unit´s current maximum health plus %(health_amount)."
    },
    {
        "key": "enchantmentstonefist",
        "propspercentage": {
            damage_increase: 0
        },
        "en": "Permanent effect: Increases the auto attack damage by %(damage_increase)."
    },
    {
        "key": "enchantmentstrength",
        "propspercentage": {
            energy_cost : 0,
            health_bonus: 0,
            damage_bonus: 0,
            damage_bonus_surefire: 0
        },
        "en": "Consumes %(energy_cost) energy to <span class=\"keyword enchantment\">enchant</span> a nearby allied unit.\\nPermanent effect: Target´s health is increased by %(health_bonus), and its attack damage by %(damage_bonus) (%(damage_bonus_surefire) for units with surefire)."
    },
    {
        "key": "energy",
        "en": "Can save energy."
    },
    {
        "key": "energyinfusion",
        "propspercentage": {
            energy_per_health: 0,
            health_amount: 0,
            energy_on_enchant: 0
        },
        "en": "Whenever this unit is healed, it gains %(energy_per_health) energy per %(health_amount) health received. Whenever this unit is <span class=\"keyword enchantment\">enchanted</span>, it gains %(energy_on_enchant) energy."
    },
    {
        "key": "energyregeneration",
        "propspercentage": {
            energy_amount : 42,
            cooldown : 6
        },
        "en": "Gains %(energy_amount) energy. (%(cooldown) seconds cooldown)"
    },
    {
        "key": "energyregenerationlanetower",
        "propspercentage": {
            charge_amount: 0,
            cooldown_league_1: 0,
            cooldown_league_2: 0,
            cooldown_league_3: 0,
            cooldown_league_4: 0,
            cooldown_league_5: 0,
        },
        "propsname": {
            league_1: "",
            league_2: "",
            league_3: "",
            league_4: "",
            league_5: "",
        },
        "en": "Generates %(charge_amount) crystal ammunition.\\n§league_1: (%(cooldown_league_1) seconds cooldown)\\n§league_2: (%(cooldown_league_2) seconds cooldown)\\n§league_3: (%(cooldown_league_3) seconds cooldown)\\n§league_4: (%(cooldown_league_4) seconds cooldown)\\n§league_5: (%(cooldown_league_5) seconds cooldown)"
    },
    {
        "key": "epic",
        "en": "Divine cards can only be cast once each match and you can only have one of them in your deck. Moreover they cost always the maximum mana of the current stage and use up all charges, which won't recharge."
    },
    {
        "key": "evasion",
        "propspercentage": {
            evasion_percentage: 0,
        },
        "en": "Has a %(evasion_percentage) chance to evade incoming attacks (except spells and splash damage)."
    },
    {
        "key": "flourish",
        "propspercentage": {
            health_amount: 0
        },
        "en": "This unit´s <span class=\"timed\">time limit</span> is removed and its health is increased by %(health_amount) once it receives an <span class=\"keyword enchantment\">enchantment</span>. (One time effect)    "
    },
    {
        "key": "flying",
        "en": "Can only be attacked by ranged or flying enemies."
    },
    {
        "key": "focussiege",
        "en": "Can only attack buildings."
    },
    {
        "key": "frostnova",
        "propspercentage": {
            energy_cost: 0,
            main_target_damage: 0,
            main_target_splashdamage: 0,
            splash_damage: 0,
            cooldown: 0
        },
        "en": "Consumes %(energy_cost) energy to <span class=\"keyword frozen\">freeze</span> an enemy unit. Also deals %(main_target_damage) damage (+%(main_target_splashdamage) splash damage) to the target and %(splash_damage) splash damage to other nearby enemy units. (%(cooldown) seconds cooldown)"
    },
    {
        "key": "frostshot",
        "en": "Attacks <span class=\"keyword frozen\">freeze</span> the target unit. "
    },
    {
        "key": "fury",
        "en": "Whenever this unit attacks a target with full health, it performs its next attack immediately."
    },
    {
        "key": "groundonly",
        "en": "Can only fight targets at the same height. Ground to ground or air to air."
    },
    {
        "key": "growsaplings",
        "propspercentage": {
            energy_cost: 0,
            sapling_count: 0
        },
        "propsname": "§card_name_sapling_plural",
        "en": "Consumes %(energy_cost) energy to summon %(sapling_count) <span class=\"keyword sapling\">§card_name_sapling_plural</span>."
    },
    {
        "key": "guardinglight",
        "en": "Nearby allied units are <span class=\"keyword protected\">protected</span>. "
    },
    {
        "key": "hailofstones",
        "propspercentage": {
            damage_reduction_percentage: 0
        },
        "en": "If this unit has no current targets nearby, it throws stones at buildings over a long distance (%(damage_reduction_percentage) reduced damage)."
    },
    {
        "key": "haste",
        "en": "Does not suffer from <span class=\"keyword summoningsickness\">summoning sickness</span>."
    },
    {
        "key": "heavilyarmed",
        "en": "Has a rift cannon that <span class=\"keyword annihilated\">annihilates</span> non-legendary enemies instantly, two long-range <span class=\"keyword missile\">missile</span> launchers with limited ammunition and four directed gatling turrets."
    },
    {
        "key": "homeland",
        "en": "Whenever a nearby allied non-legendary unit dies it is <span class=\"keyword rescued\">rescued</span> instead."
    },
    {
        "key": "icybreath",
        "en": "Attacks <span class=\"keyword frozen\">freeze</span> the target unit. "
    },
    {
        "key": "inductionenergy",
        "propspercentage": {
            energy_amount: 0
        },
        "en": "Whenever an allied spell is cast nearby this unit it replenishes %(energy_amount) energy."
    },
    {
        "key": "inductionrepair",
        "propspercentage": {
            heal_amount_percentage :0
        },
        "en": "Whenever an allied spell is cast nearby this unit heals %(heal_amount_percentage) of its maximum health."
    },
    {
        "key": "innerfirebounce",
        "propspercentage": {
            base_health: 0,
            target_count: 0,
            damage_reduction_percentage: 0
        },
        "en": "As long as this unit has at least %(base_health) health, its attacks bounce and hit up to %(target_count) additional targets (bounces deal %(damage_reduction_percentage) reduced damage)."
    },
    {
        "key": "intensify",
        "propspercentage": {
            cooldown: 0,
            damage_increase_percentage: 0,
            cap: 0
        },
        "en": "Attacks with a continuous beam that increases its damage every %(cooldown) seconds by %(damage_increase_percentage). (max %(cap) times)"
    },
    {
        "key": "juggernaut",
        "en": "Movement speed of this unit is halved and it ignores unit collision. Can't be relocated."
    },
    {
        "key": "lanetowerupgrade",
        "en": "This tower gets tougher and deals more damage through the 3 stages of a match."
    },
    {
        "key": "lazor",
        "en": "This unit shoots a laser dealing splash damage to all enemies in a line."
    },
    {
        "key": "legendary",
        "en": "Each player can only have one legendary active at a time. Legendary units are immune to status effects."
    },
    {
        "key": "lightgrenades",
        "propspercentage": {
            energy_cost: 0
        },
        "en": "Consumes %(energy_cost) energy to boost its attack increasing the splash radius and <span class=\"keyword stunned\">stunning</span> and <span class=\"keyword blinded\">blinding</span> all enemies hit. "
    },
    {
        "key": "lightovercharge",
        "propspercentage": {
            target_count : 0,
            heal_amount: 0
        },
        "en": "The projectile of this unit heals up to %(target_count) allied units it passes over for %(heal_amount) health."
    },
    {
        "key": "lightwave",
        "propspercentage": {
            energy_cost: 0,
            damage_amount: 0,
            heal_amount: 0
        },
        "en": "Consumes %(energy_cost) energy to deal %(damage_amount) splash damage to all nearby enemy units and heal all nearby allied units by %(heal_amount) (This effect can <span class=\"keyword overheal\">overheal</span>)."
    },
    {
        "key": "limitedgadget",
        "propspercentage": {
            gadget_limit: 0,
            gadget_limit_exceeded: 0
        },
        "en": "You can control up to %(gadget_limit) gadgets on the battlefield at a time. Placing a %(gadget_limit_exceeded)th gadget destroys the first."
    },
    {
        "key": "lotharaura",
        "propspercentage": {
            redirected_damage_percentage: 0
        },
        "en": "This unit takes %(redirected_damage_percentage) of all the damage nearby allied units would receive. "
    },
    {
        "key": "massivestomp",
        "propspercentage": {
            damage_amount_percentage: 0
        },
        "en": "Deals %(damage_amount_percentage) of this unit´s current health as additional damage on each attack."
    },
    {
        "key": "mercilessfrozen",
        "propspercentage": {
            primary_damage_amount_percentage: 0,
            secondary_damage_amount_percentage: 0
        },
        "en": "Deals %(primary_damage_amount_percentage) damage to <span class=\"keyword frozen\">frozen</span> units and %(secondary_damage_amount_percentage) to units affected by other status effects."
    },
    {
        "key": "missilelauncher",
        "propspercentage": {
            energy_cost:0,
            cooldown:0
        },
        "en": "Consumes %(energy_cost) energy to launch a <span class=\"keyword missile\">missile</span> at a random enemy target. (%(cooldown) seconds cooldown)"
    },
    {
        "key": "monarchoffrost",
        "propspercentage": {
            damage_amount :0,
            heal_amount_percentage: 0
        },
        "en": "Continuously drains %(damage_amount) health per second from nearby <span class=\"keyword frozen\">frozen</span> enemies, regenerating itself for %(heal_amount_percentage) of the amount."
    },
    {
        "key": "monumental",
        "en": "This entity is very tall and counts as ground and flying unit simultaneously."
    },
    {
        "key": "multishot2",
        "propspercentage": {
            target_count: 0
        },
        "en": "Can attack up to %(target_count) enemies at once."
    },
    {
        "key": "multishot3",
        "propspercentage": {
            target_count: 0
        },
        "en": "Can attack up to %(target_count) enemies at once."
    },
    {
        "key": "multishot4",
        "propspercentage": {
            target_count: 0
        },
        "en": "Can attack up to %(target_count) enemies at once."
    },
    {
        "key": "nexusbuster1",
        "propspercentage": {
            damage_amount: 0,
            cooldown: 0,
            activation_cooldown: 0
        },
        "en": "Shoots at the enemy nexus as long as it doesn‘t have any enemies in range (%(damage_amount) damage, %(cooldown) seconds cooldown). This ability is activated %(activation_cooldown) minutes after the match started."
    },
    {
        "key": "nexusupgrade",
        "en": "At the next stage the Nexus becomes tougher and deals more damage."
    },
    {
        "key": "nothoming",
        "propspercentage": {
            range_amount: 0
        },
        "en": "The projectile of this unit flies in an arc to the targets original location, dealing splash damage at the point of impact. If this unit is flying the range is increased by %(range_amount)."
    },
    {
        "key": "pacifist",
        "en": "Will not attack."
    },
    {
        "key": "permafrost",
        "propspercentage": {
            ally_health_amount: 0,
            enemy_health_reduction_amount: 0
        },
        "en": "Initial effect: <span class=\"keyword frozen\">Freezes</span> target unit.\\nPermanent effect: If target unit is an ally, it gains %(ally_health_amount) health. If it´s an enemy, its health is reduced by %(enemy_health_reduction_amount). This unit gains <span class=\"armor\">heavy armor</span> while <span class=\"keyword frozen\">frozen</span>. "
    },
    {
        "key": "primarytarget",
        "en": "As the Nexus is destroyed the team owning it loses the match."
    },
    {
        "key": "primarytargetpve",
        "en": "If you defeat this unit your team will win!"
    },
    {
        "key": "purifyingpotion",
        "propspercentage": {
            energy_cost: 0
        },
        "en": "Consumes %(energy_cost) energy to cleanse all status effects of a nearby ally and makes it immune against status effects. Each unit can drink only one potion."
    },
    {
        "key": "rangeaura",
        "propspercentage": {
            range_increase_buildings: 0,
            range_increase_units: 0
        },
        "en": "Nearby ranged allies increase the range of their auto attacks. Buildings by %(range_increase_buildings) and units by %(range_increase_units)."
    },
    {
        "key": "reflectiveshield",
        "propspercentage": {
            reflected_damage_percentage: 0,
            self_damage_amount: 0
        },
        "propsname": {
            surefire : "",
            card_name_shielddrone: ""
        },
        "en": "Nearby allied units reflect ranged attacks (except from base buildings and units with §surefire). After being hit by such an attack it reflects back to the attacker dealing %(reflected_damage_percentage) of its damage. Each reflection deals %(self_damage_amount) damage to §card_name_shielddrone."
    },
    {
        "key": "relentlessfrozen",
        "propspercentage": {
            primary_damage_amount_percentage: 0,
            secondary_damage_amount_percentage: 0
        },
        "en": "Deals %(primary_damage_amount_percentage) damage to <span class=\"keyword frozen\">frozen</span> units and %(secondary_damage_amount_percentage) to units affected by other status effects."
    },
    {
        "key": "relentlessrooted",
        "propspercentage": {
            primary_damage_amount_percentage: 0,
            secondary_damage_amount_percentage: 0
        },
        "en": "Deals %(primary_damage_amount_percentage) damage to <span class=\"keyword rooted\">rooted</span> units and %(secondary_damage_amount_percentage) to units affected by other status effects."
    },
    {
        "key": "relentlessstunned",
        "propspercentage": {
            primary_damage_amount_percentage: 0,
            secondary_damage_amount_percentage: 0
        },
        "en": "Deals %(primary_damage_amount_percentage) damage to <span class=\"keyword stunned\">stunned</span> units and %(secondary_damage_amount_percentage) to units affected by other status effects."
    },
    {
        "key": "root",
        "en": "Attacked units are <span class=\"keyword rooted\">rooted</span>."
    },
    {
        "key": "rootbraid",
        "propspercentage": {
            energy_cost: 0
        },
        "en": "Consumes %(energy_cost) energy to <span class=\"keyword rooted\">root</span> the farthest away enemy in range. "
    },
    {
        "key": "rootnetwork",
        "propspercentage": {
            damage_amount: 0
        },
        "en": "Whenever this unit deals damage, <span class=\"keyword rooted\">rooted</span> enemies near the target take %(damage_amount) splash damage as well."
    },
    {
        "key": "searchingfire",
        "propspercentage": {
            damage_amount: 0
        },
        "en": "This unit deals additionally %(damage_amount) splash damage to its target and to enemies near its target."
    },
    {
        "key": "shadowhunter",
        "en": "Can attack <span class=\"keyword banished\">banished</span> units."
    },
    {
        "key": "shieldblock",
        "propspercentage": {
            cooldown: 0
        },
        "en": "Gains a <span class=\"keyword shieldblock\">shieldblock</span> every %(cooldown) seconds (does stack with shieldblocks of other sources). "
    },
    {
        "key": "shieldoverload",
        "propspercentage": {
            duration: 0,
            cooldown: 0
        },
        "en": "After being damaged this unit becomes invincible for %(duration) seconds. Can only be triggered while this unit is able to act.  (%(cooldown) seconds cooldown)"
    },
    {
        "key": "siege",
        "en": "Deals 400% damage against fortified armor."
    },
    {
        "key": "souldonor",
        "propspercentage": {
            energy_amount: 0,
            cooldown: 0
        },
        "en": "Transfers %(energy_amount) energy to a nearby ally. (%(cooldown) seconds cooldown)"
    },
    {
        "key": "soulgatherer",
        "propspercentage": {
            energy_amount: 0,
        },
        "en": "Whenever a unit dies, a nearby allied Soulgatherer can collect its soul and convert it into %(energy_amount) energy. If there are no friendly Soulgatherers nearby, an enemy Soulgatherer can collect it."
    },
    {
        "key": "supersoulgatherer",
        "en": "Doubles the energy of each collected soul."
    },
    {
        "key": "soulgathererreaper",
        "propspercentage": {
            energy_amount: 0,
            health_amount: 0
        },
        "en": "Whenever this unit gains %(energy_amount) energy, its health is permanently increased by %(health_amount)."
    },
    {
        "key": "soulgatherersoularmor",
        "propspercentage": {
            energy_cost: 0
        },
        "en": "Consumes %(energy_cost) energy to block the damage of an incoming attack."
    },
    {
        "key": "soulgatherersummonfrostgoyle",
        "propspercentage": {
            energy_cost: 0,
            time_to_live: 0
        },
        "propsname": "§card_name_frostgoyle",
        "en": "Consumes %(energy_cost) energy to summon a §card_name_frostgoyle. It dies after %(time_to_live) seconds."
    },
    {
        "key": "soulgathererundying",
        "propspercentage": {
            duration: 0
        },
        "en": "As long as this unit has energy, it's saved from dying once and fully healed instead. Once this effect triggers, it becomes immune to healing and dies after %(duration) seconds."
    },
    {
        "key": "soulundertow",
        "propspercentage": {
            target_count: 0,
            energy_amount: 0,
            cooldown: 0
        },
        "en": "<span class=\"keyword banished\">Banishes</span> up to %(target_count) nearby units and generates %(energy_amount) energy per affected unit. Targets friendly units if no enemies are nearby. (%(cooldown) seconds cooldown) "
    },
    {
        "key": "soulvortex",
        "propspercentage": {
            health_threshold: 0,
            cooldown: 0
        },
        "en": "<span class=\"keyword annihilated\">Annihilates</span> an enemy unit with less than %(health_threshold) health in a giant radius and extracts its soul. (%(cooldown) seconds cooldown)"
    },
    {
        "key": "spellimmune",
        "en": "Can't be targeted by enemy spells and takes no damage from spells."
    },
    {
        "key": "splash",
        "en": "Enemies near the target take damage as well."
    },
    {
        "key": "splash_lanetower1",
        "propspercentage": {
            damage_amount: 0
        },
        "en": "Enemies near the target take %(damage_amount) splash damage."
    },
    {
        "key": "splash_nexus1",
        "propspercentage": {
            damage_amount: 0
        },
        "en": "Enemies near the target take %(damage_amount) splash damage."
    },
    {
        "key": "splinter",
        "propspercentage": {
            damage_threshold:0,
            cooldown: 0
        },
        "propsname": {
            card_name_smallmeleegolem : ""
        },
        "en": "Whenever this unit receives %(damage_threshold) damage by a single attack a <span class=\"cardname\">§card_name_smallmeleegolem</span> is spawned. (%(cooldown) seconds cooldown)"
    },
    {
        "key": "stationary",
        "en": "Counts as building and unit at the same time."
    },
    {
        "key": "statusabsorb",
        "propspercentage": {
            health_amount: 0
        },
        "en": "Whenever this unit is affected by a certain status effect for the first time, it permanently increases its health by %(health_amount)."
    },
    {
        "key": "statuscopy",
        "en": "Whenever this unit attacks, it copies all status effects of its target."
    },
    {
        "key": "statusmirror",
        "propspercentage": {
            cooldown: 0
        },
        "en": "Whenever this unit is attacked, it copies all of its status effects to the attacker. (%(cooldown) seconds cooldown)"
    },
    {
        "key": "steadyaim",
        "propspercentage": {
            range_increase: 0,
            duration: 0
        },
        "en": "While not moving, this unit gradually increases its attack range up to a maximum of %(range_increase) (over %(duration) seconds). This bonus is lost upon moving."
    },
    {
        "key": "summonsaplings",
        "propspercentage": {
            energy_cost: 0,
            sapling_amount: 0
        },
        "propsname": "§card_name_sapling_plural",
        "en": "Consumes %(energy_cost) energy to summon %(sapling_amount) <span class=\"keyword sapling\">§card_name_sapling_plural</span>."
    },
    {
        "key": "supreme",
        "propspercentage": {
            module_gain: 0,
            module_cap:0,
            health_amount:0,
            armor_level_unarmored: 0,
            armor_level_light:0,
            armor_level_medium:0,
            armor_level_heavy:0
        },
        "propsname": {
            armortype_atunarmored : "",
            armortype_atlight: "",
            armortype_atmedium: "",
            armortype_atheavy: ""
        },
        "en": "Whenever this card is played Atlas gains %(module_gain) module counter up to %(module_cap). For each module counter after the first one he gains %(health_amount) health. Moreover the armor type will be set to:\\n%(armor_level_unarmored) - <span class=\"armor\">§armortype_atunarmored</span>\\n%(armor_level_light) - <span class=\"armor\">§armortype_atlight</span>\\n%(armor_level_medium) - <span class=\"armor\">§armortype_atmedium</span>\\n%(armor_level_heavy) - <span class=\"armor\">§armortype_atheavy</span>"
    },
    {
        "key": "surefire",
        "en": "Can‘t be <span class=\"keyword blinded\">blinded</span>."
    },
    {
        "key": "teleportstrike",
        "propspercentage": {
            energy_cost : 0,
            damage_amount: 0,
            cooldown:0
        },
        "en": "Consumes %(energy_cost) energy to teleport to a nearby random enemy target dealing %(damage_amount) damage to it.  (%(cooldown) seconds cooldown)"
    },
    {
        "key": "timedlife",
        "propspercentage": {
            duration: 0
        },
        "en": "Dies after %(duration) seconds. Effect is removed if this unit receives an <span class=\"keyword enchantment\">enchantment</span>."
    },
    {
        "key": "timedlifebuilding",
        "propspercentage": {
            duration: 0
        },
        "en": "This building is destroyed after %(duration) seconds."
    },
    {
        "key": "tremor",
        "en": "Attacks deal splash damage to all units in a cone behind the target."
    },
    {
        "key": "walloflight",
        "propspercentage": {
            cooldown: 0
        },
        "en": "Whenever this unit is healed, the allied unit with the least maximum health nearby gains a <span class=\"keyword shieldblock\">shieldblock</span>. (%(cooldown) seconds cooldown)"
    },
    {
        "key": "warminglight",
        "propspercentage": {
            heal_amount: 0
        },
        "en": "Attacks heal allied units in the impact zone by %(heal_amount) health."
    },
    {
        "key": "wavegun",
        "propspercentage": {
            energy_cost: 0,
            health_threshold:0,
            damage_amount:0
        },
        "en": "Consumes %(energy_cost) energy to fire a massive shot at an enemy target with at least %(health_threshold) health in a huge range dealing %(damage_amount) damage and <span class=\"keyword stunned\">stunning</span> the target."
    },
    {
        "key": "wipe",
        "propspercentage": {
            health_threshold:0,
            damage_reduction_percentage:0
        },
        "en": "Whenever this unit attacks a target with less than %(health_threshold) maximum health, it attacks all units in front of it instead (reduced damage by %(damage_reduction_percentage))."
    },

];


export const CARD_ABILITIES_NAME_KEY_MAP : ({key: string, en: TAbilities})[] |any[] = [
    {
        "key": "activearmor",
        "en": "Active Armor"
    },
    {
        "key": "ammo",
        "en": "Ammunition"
    },
    {
        "key": "ammo_basebuilding",
        "en": "Crystal Ammunition"
    },
    {
        "key": "ammo2",
        "en": "Ammunition"
    },
    {
        "key": "ammotransfer",
        "en": "Ammo Dispenser"
    },
    {
        "key": "ancientwisdom",
        "en": "Ancient Wisdom"
    },
    {
        "key": "antiair",
        "en": "Predator: Flying"
    },
    {
        "key": "armorpiercing",
        "en": "Armor-Piercing"
    },
    {
        "key": "barkboost",
        "en": "Sapling Absorption"
    },
    {
        "key": "biggamehunter",
        "en": "Big Game Hunter"
    },
    {
        "key": "breachingcharge",
        "en": "Payload"
    },
    {
        "key": "cleave",
        "en": "Cleave"
    },
    {
        "key": "cloakground",
        "en": "Stealth"
    },
    {
        "key": "crystalartillery",
        "en": "Crystal Artillery"
    },
    {
        "key": "crystalpower",
        "en": "Crystal Power"
    },
    {
        "key": "crystalspeed",
        "en": "Crystal Wind"
    },
    {
        "key": "dampingshield",
        "en": "Hard Hat"
    },
    {
        "key": "deathrattlebentbow",
        "en": "Deathcry: Last Try"
    },
    {
        "key": "deathrattleblast",
        "en": "Deathcry: Blast"
    },
    {
        "key": "deathrattlefrostexplosion",
        "en": "Deathcry: Frost Explosion"
    },
    {
        "key": "deathrattlesouldonor",
        "en": "Deathcry: Energy Supply"
    },
    {
        "key": "deathrattlesporefield",
        "en": "Deathcry: Spore Field"
    },
    {
        "key": "debutasteroid",
        "en": "Invoke: Asteroid"
    },
    {
        "key": "debuticyprison",
        "en": "Invoke: Icy Prison"
    },
    {
        "key": "debutinsidious",
        "en": "Invoke: Insidious"
    },
    {
        "key": "debutrupture",
        "en": "Invoke: Rupture"
    },
    {
        "key": "debutsoulvortex",
        "en": "Invoke: Void"
    },
    {
        "key": "debutstarfall",
        "en": "Invoke: Orbital Drop"
    },
    {
        "key": "debutstun",
        "en": "Invoke: Smoldering Intensity"
    },
    {
        "key": "depletingbounce",
        "en": "Vivid Bounce"
    },
    {
        "key": "dragonpunch",
        "en": "Wuxi Finger Hold"
    },
    {
        "key": "enchantmentarmor",
        "en": "Enchantment: Armor"
    },
    {
        "key": "enchantmentflux",
        "en": "Enchantment: Flux"
    },
    {
        "key": "enchantmentfrenzy",
        "en": "Enchantment: Frenzy"
    },
    {
        "key": "enchantmentgrievouswounds",
        "en": "Enchantment: Grievous Wounds"
    },
    {
        "key": "enchantmentgrowth",
        "en": "Enchantment: Growth"
    },
    {
        "key": "enchantmenthealth",
        "en": "Enchantment: Health"
    },
    {
        "key": "enchantmentstonefist",
        "en": "Enchantment: Stonefist"
    },
    {
        "key": "enchantmentstrength",
        "en": "Enchantment: Strength"
    },
    {
        "key": "energy",
        "en": "Energy"
    },
    {
        "key": "energyinfusion",
        "en": "Energy Infusion"
    },
    {
        "key": "energyregeneration",
        "en": "Energy Flow"
    },
    {
        "key": "energyregenerationlanetower",
        "en": "Crystal Ammunition Refill"
    },
    {
        "key": "epic",
        "en": "Divine"
    },
    {
        "key": "evasion",
        "en": "Evasion"
    },
    {
        "key": "flourish",
        "en": "Flourish"
    },
    {
        "key": "flying",
        "en": "Flying"
    },
    {
        "key": "focussiege",
        "en": "Focus: Buildings"
    },
    {
        "key": "frostnova",
        "en": "Frostnova"
    },
    {
        "key": "frostshot",
        "en": "Frostslime"
    },
    {
        "key": "fury",
        "en": "Fury"
    },
    {
        "key": "groundonly",
        "en": "Flat Firing Angle"
    },
    {
        "key": "growsaplings",
        "en": "Harvest Saplings"
    },
    {
        "key": "guardinglight",
        "en": "Guarding Light"
    },
    {
        "key": "hailofstones",
        "en": "Hail of Stones"
    },
    {
        "key": "haste",
        "en": "Haste"
    },
    {
        "key": "heavilyarmed",
        "en": "Heavily Armed"
    },
    {
        "key": "homeland",
        "en": "Homeland"
    },
    {
        "key": "icybreath",
        "en": "Icy Breath"
    },
    {
        "key": "inductionenergy",
        "en": "Induction: Energy"
    },
    {
        "key": "inductionrepair",
        "en": "Induction: Repair"
    },
    {
        "key": "innerfirebounce",
        "en": "Inner Fire: Bounce"
    },
    {
        "key": "intensify",
        "en": "Intensify"
    },
    {
        "key": "juggernaut",
        "en": "Juggernaut"
    },
    {
        "key": "lanetowerupgrade",
        "en": "Upgrade"
    },
    {
        "key": "lazor",
        "en": "L4Z0R"
    },
    {
        "key": "legendary",
        "en": "Legendary"
    },
    {
        "key": "lightgrenades",
        "en": "Light Grenades"
    },
    {
        "key": "lightovercharge",
        "en": "Light Overcharge"
    },
    {
        "key": "lightwave",
        "en": "Light Wave"
    },
    {
        "key": "limitedgadget",
        "en": "Limited: Gadget"
    },
    {
        "key": "lotharaura",
        "en": "Devotion Aura"
    },
    {
        "key": "massivestomp",
        "en": "Massive Stomp"
    },
    {
        "key": "mercilessfrozen",
        "en": "Apex Predator: Frozen"
    },
    {
        "key": "missilelauncher",
        "en": "Missile Launcher"
    },
    {
        "key": "monarchoffrost",
        "en": "Monarch of Frost"
    },
    {
        "key": "monumental",
        "en": "Monumental"
    },
    {
        "key": "multishot2",
        "en": "Doubleshot"
    },
    {
        "key": "multishot3",
        "en": "Tripleshot"
    },
    {
        "key": "multishot4",
        "en": "Quadrupleshot"
    },
    {
        "key": "nexusbuster1",
        "en": "Nexusbuster"
    },
    {
        "key": "nexusupgrade",
        "en": "Upgrade"
    },
    {
        "key": "nothoming",
        "en": "Artillery"
    },
    {
        "key": "pacifist",
        "en": "Pacifist"
    },
    {
        "key": "permafrost",
        "en": "Enchantment: Harden"
    },
    {
        "key": "primarytarget",
        "en": "Primary Target"
    },
    {
        "key": "primarytargetpve",
        "en": "Primary Target"
    },
    {
        "key": "purifyingpotion",
        "en": "Purifying Potion"
    },
    {
        "key": "rangeaura",
        "en": "Guidance System"
    },
    {
        "key": "reflectiveshield",
        "en": "Spatial Echo"
    },
    {
        "key": "relentlessfrozen",
        "en": "Predator: Frozen"
    },
    {
        "key": "relentlessrooted",
        "en": "Predator: Rooted"
    },
    {
        "key": "relentlessstunned",
        "en": "Predator: Stunned"
    },
    {
        "key": "root",
        "en": "Root"
    },
    {
        "key": "rootbraid",
        "en": "Dood Root"
    },
    {
        "key": "rootnetwork",
        "en": "Root Network"
    },
    {
        "key": "searchingfire",
        "en": "Searching Fire"
    },
    {
        "key": "shadowhunter",
        "en": "Voidhunter"
    },
    {
        "key": "shieldblock",
        "en": "Raise your shield!"
    },
    {
        "key": "shieldoverload",
        "en": "Shield Overload"
    },
    {
        "key": "siege",
        "en": "Siege"
    },
    {
        "key": "souldonor",
        "en": "Energy Supply"
    },
    {
        "key": "soulgatherer",
        "en": "Soulgatherer"
    },
    {
        "key": "supersoulgatherer",
        "en": "Soul Enhancer"
    },
    {
        "key": "soulgathererreaper",
        "en": "Feast"
    },
    {
        "key": "soulgatherersoularmor",
        "en": "Unstable Negation"
    },
    {
        "key": "soulgatherersummonfrostgoyle",
        "en": "Ritual Summon"
    },
    {
        "key": "soulgathererundying",
        "en": "Undying"
    },
    {
        "key": "soulundertow",
        "en": "Void Rite"
    },
    {
        "key": "soulvortex",
        "en": "Soul Vortex"
    },
    {
        "key": "spellimmune",
        "en": "Spell Immune"
    },
    {
        "key": "splash",
        "en": "Splash Damage"
    },
    {
        "key": "splash_lanetower1",
        "en": "Radiating Shot"
    },
    {
        "key": "splash_nexus1",
        "en": "Radiating Shot"
    },
    {
        "key": "splinter",
        "en": "Splinter"
    },
    {
        "key": "stationary",
        "en": "Stationary"
    },
    {
        "key": "statusabsorb",
        "en": "Absorb"
    },
    {
        "key": "statuscopy",
        "en": "Status Adaptation"
    },
    {
        "key": "statusmirror",
        "en": "Status Reflector"
    },
    {
        "key": "steadyaim",
        "en": "Steady Aim"
    },
    {
        "key": "summonsaplings",
        "en": "Summon Saplings"
    },
    {
        "key": "supreme",
        "en": "Modular"
    },
    {
        "key": "surefire",
        "en": "Surefire"
    },
    {
        "key": "teleportstrike",
        "en": "Warp Strike"
    },
    {
        "key": "timedlife",
        "en": "Time-Limited"
    },
    {
        "key": "timedlifebuilding",
        "en": "Dismantlement"
    },
    {
        "key": "tremor",
        "en": "Tremor"
    },
    {
        "key": "walloflight",
        "en": "Wall of Light"
    },
    {
        "key": "warminglight",
        "en": "Warming Light"
    },
    {
        "key": "wavegun",
        "en": "Yamato Cannon"
    },
    {
        "key": "wipe",
        "en": "Wipe"
    }

];