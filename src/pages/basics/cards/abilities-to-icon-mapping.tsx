import {TAbilities} from "../../../components/cards-game-data";
import {ReactElement} from "react";
import {LegendaryImg} from "../../../components/img-wrappers/legendary-img";
import {DivineImg} from "../../../components/img-wrappers/divine-img";
import {SplashDamageImg} from "../../../components/img-wrappers/splash-damage-img";
import {DoubleshotImg} from "../../../components/img-wrappers/doubleshot-img";
import {FlyingImg} from "../../../components/img-wrappers/flying-img";
import {TripleshotImg} from "../../../components/icons/tripleshotImg";
import {LimitedGadgetIcon} from "../../../components/icons/limited-gadget-icon";
import {DismantlementIcon} from "../../../components/icons/dismantlement-icon";
import {EnergyFlowIcon} from "../../../components/icons/energy-flow-icon";
import {FlatFiringAngleIcon} from "../../../components/icons/flat-fireing-angle";
import {SurefireIcon} from "../../../components/icons/surefire-icon";
import {MonumentalIcon} from "../../../components/icons/monumental-icon";
import {RaiseYourShieldIcon} from "../../../components/icons/raise-your-shield-icon";
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
import {DevotionAuraIcon} from "../../../components/icons/devotion-aura-icon";
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
import {StatusAdaptationIcon} from "../../../components/icons/status-adaptation-icon";
import {StatusReflectorIcon} from "../../../components/icons/status-reflector-icon";
import {VoidhunterIcon} from "../../../components/icons/voidhunter-icon";
import {VoidRiteIcon} from "../../../components/icons/void-rite-icon";
import {UnstableNegationIcon} from "../../../components/icons/unstable-negation-icon";
import {InvokeVoidIcon} from "../../../components/icons/invoke-void-icon";
import {InvokeIceprisonIcon} from "../../../components/icons/invoke-iceprison-icon";
import {IcyBreathIcon} from "../../../components/icons/icy-breath-icon";
import {MonarchOfFrostIcon} from "../../../components/icons/monarch-of-frost-icon";
import {SoulVortexIcon} from "../../../components/icons/soul-vortex-icon";
import {EvasionIcon} from "../../../components/icons/evasion-icon";
import {RootIcon} from "../../../components/icons/root-icon";
import {RootNetworkIcon} from "../../../components/icons/root-network-icon";
import {HarvestSaplingsIcon} from "../../../components/icons/harvest-saplings-icon";
import {PacifistIcon} from "../../../components/icons/pacifist-icon";
import {EnchancementStrengthIcon} from "../../../components/icons/enchancement-strength-icon";
import {VividBounceIcon} from "../../../components/icons/vivid-bounce-icon";
import {SummonSaplingsIcon} from "../../../components/icons/summon-saplings-icon";
import {DoodRootIcon} from "../../../components/icons/dood-root-icon";
import {HailOfStonesIcon} from "../../../components/icons/hail-of-stones-icon";
import {DeathcrySporefieldIcon} from "../../../components/icons/deathcry-sporefield-icon";
import {SaplingAbsorptionIcon} from "../../../components/icons/sapling-absorption-icon";
import {JuggernautIcon} from "../../../components/icons/juggernaut-icon";
import {FocusBuildingsIcon} from "../../../components/icons/focus-buildings-icon";
import {MassiveStompIcon} from "../../../components/icons/massive-stomp-icon";
import {AncientWisdomIcon} from "../../../components/icons/ancient-wisdom-icon";
import {HasteIcon} from "../../../components/icons/haste-icon";
import {PredatorRootedIcon} from "../../../components/icons/predator-rooted-icon";
import {InvokeRuptureIcon} from "../../../components/icons/invoke-rupture-icon";
import {SearchingFireIcon} from "../../../components/icons/searching-fire-icon";
import {ArmorPiercingIcon} from "../../../components/icons/armor-piercing-icon";
import {AmmunitionIcon} from "../../../components/icons/ammunition-icon";
import {HardHatIcon} from "../../../components/icons/hard-hat-icon";
import {PayloadIcon} from "../../../components/icons/payload-icon";
import {StationaryIcon} from "../../../components/icons/stationary-icon";
import {StealthIcon} from "../../../components/icons/stealth-icon";
import {GuidanceSystemIcon} from "../../../components/icons/guidance-system-icon";
import {ModularIcon} from "../../../components/icons/modular-icon";
import {ActiveArmorIcon} from "../../../components/icons/active-armor-icon";
import {InductionRepairIcon} from "../../../components/icons/induction-repair-icon";
import {ShieldOverloadIcon} from "../../../components/icons/shield-overload-icon";
import {WarpStrikeIcon} from "../../../components/icons/warp-strike-icon";
import {InductionEnergyIcon} from "../../../components/icons/induction-energy-icon";
import {MissileLauncherIcon} from "../../../components/icons/missile-launcher-icon";
import {SpatialEchoIcon} from "../../../components/icons/spatial-echo-icon";
import {AmmoDispenserIcon} from "../../../components/icons/ammo-dispenser-icon";
import {InvokeOrbitalDropIcon} from "../../../components/icons/invoke-orbital-drop-icon";
import {HeavilyArmedIcon} from "../../../components/icons/heavily-armed-icon";
import {L4z0rIcon} from "../../../components/icons/l4z0r-icon";
import {YamatoCannonIcon} from "../../../components/icons/yamato-cannon-icon";
import {PredatorFlyingIcon} from "../../../components/icons/predator-flying-icon";
import {SpellImmuneIcon} from "../../../components/icons/spell-immune-icon";
import {CrystalArtilleryIcon} from "../../../components/icons/crystal-artillery-icon";
import {TremorIcon} from "../../../components/icons/tremor-icon";
import {WipeIcon} from "../../../components/icons/wipe-icon";
import {CrystalWindIcon} from "../../../components/icons/crystal-wind-icon";
import {IntensifyIcon} from "../../../components/icons/intensify-icon";
import {SplinterIcon} from "../../../components/icons/splinter-icon";
import {InvokeAsteroidIcon} from "../../../components/icons/invoke-asteroid-icon";
import {SiegeIcon} from "../../../components/icons/siege-icon";
import {CleaveIcon} from "../../../components/icons/cleave-icon";

export const ABILITIES_TO_ICON_MAPPING = new Map<TAbilities, ReactElement>([
    ["Siege", <SiegeIcon/>],
    ["Legendary", <LegendaryImg/>],
    ["Divine", <DivineImg/>],
    ["Splash Damage", <SplashDamageImg/>],
    ["Doubleshot", <DoubleshotImg/>],
    ["Flying", <FlyingImg/>],
    ["Tripleshot", <TripleshotImg/>],
    ["Limited: Gadget", <LimitedGadgetIcon/>],
    ["Dismantlement", <DismantlementIcon/>],
    ["Energy Flow", <EnergyFlowIcon/>],
    ["Flat Firing Angle", <FlatFiringAngleIcon/>],
    ["Surefire", <SurefireIcon/>],
    ["Monumental", <MonumentalIcon/>],
    ["Raise your shield!", <RaiseYourShieldIcon/>],
    ["Predator: Stunned", <PredatorStunnedIcon/>],
    ["Deathcry: Last Try", <DeathcryLasttryIcon/>],
    ["Wuxi Finger Hold", <WuxiFingerholdIcon/>],
    ["Purifying Potion", <PuryfyingPotionIcon/>],
    ["Enchantment: Armor", <EnchantmentArmorIcon/>],
    ["Artillery", <ArtilleryIcon/>],
    ["Light Overcharge", <LightOverchargeIcon/>],
    ["Energy Infusion", <EnergyInfusionIcon/>],
    ["Light Grenades", <LightGrenadesIcon/>],
    ["Inner Fire: Bounce", <InnerfireBounce/>],
    ["Fury", <FuryIcon/>],
    ["Devotion Aura", <DevotionAuraIcon/>],
    ["Invoke: Smoldering Intensity", <InvokeSmolderingIntenseIcon/>],
    ["Wall of Light", <WalloflightIcon/>],
    ["Warming Light", <WarmingLightIcon/>],
    ["Guarding Light", <GuardianLightIcon/>],
    ["Light Wave", <LightwaveIcon/>],
    ["Steady Aim", <SteadyAimIcon/>],
    ["Big Game Hunter", <BiggamehunterIcon/>],
    ["Homeland", <HomelandIcon/>],
    ["Frostslime", <FrostslimeIcon/>],
    ["Deathcry: Frost Explosion", <DeathcryFrostexplosionIcon/>],
    ["Soulgatherer", <SoulgathererIcon/>],
    ["Feast", <FeastIcon/>],
    ["Deathcry: Energy Supply", <DeathcryEnergysupplyIcon/>],
    ["Predator: Frozen", <PredatorFrozenIcon/>],
    ["Undying", <UndyingIcon/>],
    ["Invoke: Insidious", <InvokeInsidiousIcon/>],
    ["Enchantment: Grievous Wounds", <EnchantmentGrievouswoundsIcon/>],
    ["Deathcry: Blast", <DeathcryBlastIcon/>],
    ["Apex Predator: Frozen", <ApexpredatorFrozenIcon/>],
    ["Frostnova", <FrostnovaIcon/>],
    ["Soul Enhancer", <SoulenhancerIcon/>],
    ["Ritual Summon", <RitualSummonIcon/>],
    ["Absorb", <AbsorbIcon/>],
    ["Status Adaptation", <StatusAdaptationIcon/>],
    ["Status Reflector", <StatusReflectorIcon/>],
    ["Voidhunter", <VoidhunterIcon/>],
    ["Void Rite", <VoidRiteIcon/>],
    ["Unstable Negation", <UnstableNegationIcon/>],
    ["Invoke: Void", <InvokeVoidIcon/>],
    ["Invoke: Icy Prison", <InvokeIceprisonIcon/>],
    ["Icy Breath", <IcyBreathIcon/>],
    ["Monarch of Frost", <MonarchOfFrostIcon/>],
    ["Soul Vortex", <SoulVortexIcon/>],
    ["Evasion", <EvasionIcon/>],
    ["Root", <RootIcon/>],
    ["Root Network", <RootNetworkIcon/>],
    ["Harvest Saplings", <HarvestSaplingsIcon/>],
    ["Pacifist", <PacifistIcon/>],
    ["Enchantment: Strength", <EnchancementStrengthIcon/>],
    ["Vivid Bounce", <VividBounceIcon/>],
    ["Summon Saplings", <SummonSaplingsIcon/>],
    ["Dood Root", <DoodRootIcon/>],
    ["Hail of Stones", <HailOfStonesIcon/>],
    ["Deathcry: Spore Field", <DeathcrySporefieldIcon/>],
    ["Sapling Absorption", <SaplingAbsorptionIcon/>],
    ["Juggernaut", <JuggernautIcon/>],
    ["Focus: Buildings", <FocusBuildingsIcon/>],
    ["Massive Stomp", <MassiveStompIcon/>],
    ["Ancient Wisdom", <AncientWisdomIcon/>],
    ["Haste", <HasteIcon/>],
    ["Predator: Rooted", <PredatorRootedIcon/>],
    ["Invoke: Rupture", <InvokeRuptureIcon/>],
    ["Searching Fire", <SearchingFireIcon/>],
    ["Armor-Piercing", <ArmorPiercingIcon/>],
    ["Ammunition", <AmmunitionIcon/>],
    ["Hard Hat", <HardHatIcon/>],
    ["Payload", <PayloadIcon/>],
    ["Stationary", <StationaryIcon/>],
    ["Stealth", <StealthIcon/>],
    ["Guidance System", <GuidanceSystemIcon/>],
    ["Modular", <ModularIcon/>],
    ["Active Armor", <ActiveArmorIcon/>],
    ["Induction: Repair", <InductionRepairIcon/>],
    ["Shield Overload", <ShieldOverloadIcon/>],
    ["Warp Strike", <WarpStrikeIcon/>],
    ["Induction: Energy", <InductionEnergyIcon/>],
    ["Missile Launcher", <MissileLauncherIcon/>],
    ["Spatial Echo", <SpatialEchoIcon/>],
    ["Ammo Dispenser", <AmmoDispenserIcon/>],
    ["Invoke: Orbital Drop", <InvokeOrbitalDropIcon/>],
    ["Heavily Armed", <HeavilyArmedIcon/>],
    ["L4Z0R", <L4z0rIcon/>],
    ["Yamato Cannon", <YamatoCannonIcon/>],
    ["Predator: Flying", <PredatorFlyingIcon/>],
    ["Spell Immune", <SpellImmuneIcon/>],
    ["Crystal Artillery", <CrystalArtilleryIcon/>],
    ["Tremor", <TremorIcon/>],
    ["Wipe", <WipeIcon/>],
    ["Crystal Wind", <CrystalWindIcon/>],
    ["Intensify", <IntensifyIcon/>],
    ["Splinter", <SplinterIcon/>],
    ["Invoke: Asteroid", <InvokeAsteroidIcon/>],
    ["Cleave", <CleaveIcon/>]
]);