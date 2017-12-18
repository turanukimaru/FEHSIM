if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'FEHSIM'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'FEHSIM'.");
}
var FEHSIM = function (_, Kotlin) {
  'use strict';
  var equals = Kotlin.equals;
  var listOfNotNull = Kotlin.kotlin.collections.listOfNotNull_jurz7g$;
  var Pair = Kotlin.kotlin.Pair;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var plus = Kotlin.kotlin.collections.plus_qloxvw$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ensureNotNull = Kotlin.ensureNotNull;
  var union = Kotlin.kotlin.collections.union_q4559j$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var arrayListOf = Kotlin.kotlin.collections.arrayListOf_i5x0yv$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var Exception = Kotlin.kotlin.Exception;
  var toString = Kotlin.toString;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  WeaponType.prototype = Object.create(Enum.prototype);
  WeaponType.prototype.constructor = WeaponType;
  MoveType.prototype = Object.create(Enum.prototype);
  MoveType.prototype.constructor = MoveType;
  BoonType.prototype = Object.create(Enum.prototype);
  BoonType.prototype.constructor = BoonType;
  SIDES.prototype = Object.create(Enum.prototype);
  SIDES.prototype.constructor = SIDES;
  EffectiveAgainst.prototype = Object.create(Enum.prototype);
  EffectiveAgainst.prototype.constructor = EffectiveAgainst;
  Locale.prototype = Object.create(Enum.prototype);
  Locale.prototype.constructor = Locale;
  Assist.prototype = Object.create(Enum.prototype);
  Assist.prototype.constructor = Assist;
  RefineSkill.prototype = Object.create(Enum.prototype);
  RefineSkill.prototype.constructor = RefineSkill;
  RefineSkill$WrathfulStaff.prototype = Object.create(RefineSkill.prototype);
  RefineSkill$WrathfulStaff.prototype.constructor = RefineSkill$WrathfulStaff;
  RefineSkill$DazzlingStaff.prototype = Object.create(RefineSkill.prototype);
  RefineSkill$DazzlingStaff.prototype.constructor = RefineSkill$DazzlingStaff;
  RefineSkill$SolKatti.prototype = Object.create(RefineSkill.prototype);
  RefineSkill$SolKatti.prototype.constructor = RefineSkill$SolKatti;
  RefineSkill$Mystletainn.prototype = Object.create(RefineSkill.prototype);
  RefineSkill$Mystletainn.prototype.constructor = RefineSkill$Mystletainn;
  RefineSkill$Siegmund.prototype = Object.create(RefineSkill.prototype);
  RefineSkill$Siegmund.prototype.constructor = RefineSkill$Siegmund;
  RefineSkill$Hauteclere.prototype = Object.create(RefineSkill.prototype);
  RefineSkill$Hauteclere.prototype.constructor = RefineSkill$Hauteclere;
  RefineSkill$DeathlyDagger2.prototype = Object.create(RefineSkill.prototype);
  RefineSkill$DeathlyDagger2.prototype.constructor = RefineSkill$DeathlyDagger2;
  RefineSkill$Armorsmasher.prototype = Object.create(RefineSkill.prototype);
  RefineSkill$Armorsmasher.prototype.constructor = RefineSkill$Armorsmasher;
  RefineSkill$SlayingSpear.prototype = Object.create(RefineSkill.prototype);
  RefineSkill$SlayingSpear.prototype.constructor = RefineSkill$SlayingSpear;
  RefineSkill$SlayingHammer.prototype = Object.create(RefineSkill.prototype);
  RefineSkill$SlayingHammer.prototype.constructor = RefineSkill$SlayingHammer;
  RefineSkill$Zanbato.prototype = Object.create(RefineSkill.prototype);
  RefineSkill$Zanbato.prototype.constructor = RefineSkill$Zanbato;
  RefineSkill$Ridersbane.prototype = Object.create(RefineSkill.prototype);
  RefineSkill$Ridersbane.prototype.constructor = RefineSkill$Ridersbane;
  RefineSkill$KeenRauorwolf2.prototype = Object.create(RefineSkill.prototype);
  RefineSkill$KeenRauorwolf2.prototype.constructor = RefineSkill$KeenRauorwolf2;
  RefineSkill$KeenBlarwolf2.prototype = Object.create(RefineSkill.prototype);
  RefineSkill$KeenBlarwolf2.prototype.constructor = RefineSkill$KeenBlarwolf2;
  RefineSkill$KeenGronnwolf2.prototype = Object.create(RefineSkill.prototype);
  RefineSkill$KeenGronnwolf2.prototype.constructor = RefineSkill$KeenGronnwolf2;
  RefineSkill$CarrotLance2.prototype = Object.create(RefineSkill.prototype);
  RefineSkill$CarrotLance2.prototype.constructor = RefineSkill$CarrotLance2;
  RefineSkill$CarrotAxe2.prototype = Object.create(RefineSkill.prototype);
  RefineSkill$CarrotAxe2.prototype.constructor = RefineSkill$CarrotAxe2;
  RefineSkill$BlueEgg2.prototype = Object.create(RefineSkill.prototype);
  RefineSkill$BlueEgg2.prototype.constructor = RefineSkill$BlueEgg2;
  RefineSkill$GreenEgg2.prototype = Object.create(RefineSkill.prototype);
  RefineSkill$GreenEgg2.prototype.constructor = RefineSkill$GreenEgg2;
  RefineSkill$LightningBreath2.prototype = Object.create(RefineSkill.prototype);
  RefineSkill$LightningBreath2.prototype.constructor = RefineSkill$LightningBreath2;
  RefineSkill$BerkutsLance2.prototype = Object.create(RefineSkill.prototype);
  RefineSkill$BerkutsLance2.prototype.constructor = RefineSkill$BerkutsLance2;
  RefineSkill$GuardBow2.prototype = Object.create(RefineSkill.prototype);
  RefineSkill$GuardBow2.prototype.constructor = RefineSkill$GuardBow2;
  RefineSkill$DeathlyDagger.prototype = Object.create(RefineSkill.prototype);
  RefineSkill$DeathlyDagger.prototype.constructor = RefineSkill$DeathlyDagger;
  RefineSkill$RefineType.prototype = Object.create(Enum.prototype);
  RefineSkill$RefineType.prototype.constructor = RefineSkill$RefineType;
  Seal.prototype = Object.create(Enum.prototype);
  Seal.prototype.constructor = Seal;
  Seal$Hp.prototype = Object.create(Seal.prototype);
  Seal$Hp.prototype.constructor = Seal$Hp;
  Seal$SquadAceA.prototype = Object.create(Seal.prototype);
  Seal$SquadAceA.prototype.constructor = Seal$SquadAceA;
  Seal$Attack.prototype = Object.create(Seal.prototype);
  Seal$Attack.prototype.constructor = Seal$Attack;
  Seal$Speed.prototype = Object.create(Seal.prototype);
  Seal$Speed.prototype.constructor = Seal$Speed;
  Seal$SquadAceD.prototype = Object.create(Seal.prototype);
  Seal$SquadAceD.prototype.constructor = Seal$SquadAceD;
  Seal$Defense.prototype = Object.create(Seal.prototype);
  Seal$Defense.prototype.constructor = Seal$Defense;
  Seal$SquadAceB.prototype = Object.create(Seal.prototype);
  Seal$SquadAceB.prototype.constructor = Seal$SquadAceB;
  Seal$Resistance.prototype = Object.create(Seal.prototype);
  Seal$Resistance.prototype.constructor = Seal$Resistance;
  Seal$SquadAceC.prototype = Object.create(Seal.prototype);
  Seal$SquadAceC.prototype.constructor = Seal$SquadAceC;
  Seal$DistantDef.prototype = Object.create(Seal.prototype);
  Seal$DistantDef.prototype.constructor = Seal$DistantDef;
  Seal$BrashAssault.prototype = Object.create(Seal.prototype);
  Seal$BrashAssault.prototype.constructor = Seal$BrashAssault;
  Seal$HardyBearing.prototype = Object.create(Seal.prototype);
  Seal$HardyBearing.prototype.constructor = Seal$HardyBearing;
  Seal$PhantomSpeed.prototype = Object.create(Seal.prototype);
  Seal$PhantomSpeed.prototype.constructor = Seal$PhantomSpeed;
  Seal$DeflectMagic.prototype = Object.create(Seal.prototype);
  Seal$DeflectMagic.prototype.constructor = Seal$DeflectMagic;
  Seal$DeflectMelee.prototype = Object.create(Seal.prototype);
  Seal$DeflectMelee.prototype.constructor = Seal$DeflectMelee;
  Seal$DeflectMissile.prototype = Object.create(Seal.prototype);
  Seal$DeflectMissile.prototype.constructor = Seal$DeflectMissile;
  Skill$SkillType.prototype = Object.create(Enum.prototype);
  Skill$SkillType.prototype.constructor = Skill$SkillType;
  SkillA.prototype = Object.create(Enum.prototype);
  SkillA.prototype.constructor = SkillA;
  SkillA$Hp.prototype = Object.create(SkillA.prototype);
  SkillA$Hp.prototype.constructor = SkillA$Hp;
  SkillA$HpSpd.prototype = Object.create(SkillA.prototype);
  SkillA$HpSpd.prototype.constructor = SkillA$HpSpd;
  SkillA$HpRes.prototype = Object.create(SkillA.prototype);
  SkillA$HpRes.prototype.constructor = SkillA$HpRes;
  SkillA$Attack.prototype = Object.create(SkillA.prototype);
  SkillA$Attack.prototype.constructor = SkillA$Attack;
  SkillA$AtkSpd.prototype = Object.create(SkillA.prototype);
  SkillA$AtkSpd.prototype.constructor = SkillA$AtkSpd;
  SkillA$AtkRes.prototype = Object.create(SkillA.prototype);
  SkillA$AtkRes.prototype.constructor = SkillA$AtkRes;
  SkillA$Speed.prototype = Object.create(SkillA.prototype);
  SkillA$Speed.prototype.constructor = SkillA$Speed;
  SkillA$SpdRes.prototype = Object.create(SkillA.prototype);
  SkillA$SpdRes.prototype.constructor = SkillA$SpdRes;
  SkillA$SpdDef.prototype = Object.create(SkillA.prototype);
  SkillA$SpdDef.prototype.constructor = SkillA$SpdDef;
  SkillA$Defense.prototype = Object.create(SkillA.prototype);
  SkillA$Defense.prototype.constructor = SkillA$Defense;
  SkillA$AtkDef.prototype = Object.create(SkillA.prototype);
  SkillA$AtkDef.prototype.constructor = SkillA$AtkDef;
  SkillA$HpDef.prototype = Object.create(SkillA.prototype);
  SkillA$HpDef.prototype.constructor = SkillA$HpDef;
  SkillA$Resistance.prototype = Object.create(SkillA.prototype);
  SkillA$Resistance.prototype.constructor = SkillA$Resistance;
  SkillA$DefiantAtk.prototype = Object.create(SkillA.prototype);
  SkillA$DefiantAtk.prototype.constructor = SkillA$DefiantAtk;
  SkillA$DefiantSpd.prototype = Object.create(SkillA.prototype);
  SkillA$DefiantSpd.prototype.constructor = SkillA$DefiantSpd;
  SkillA$DefiantDef.prototype = Object.create(SkillA.prototype);
  SkillA$DefiantDef.prototype.constructor = SkillA$DefiantDef;
  SkillA$DefiantRes.prototype = Object.create(SkillA.prototype);
  SkillA$DefiantRes.prototype.constructor = SkillA$DefiantRes;
  SkillA$TriangleAdept.prototype = Object.create(SkillA.prototype);
  SkillA$TriangleAdept.prototype.constructor = SkillA$TriangleAdept;
  SkillA$LifeAndDeath.prototype = Object.create(SkillA.prototype);
  SkillA$LifeAndDeath.prototype.constructor = SkillA$LifeAndDeath;
  SkillA$Furry.prototype = Object.create(SkillA.prototype);
  SkillA$Furry.prototype.constructor = SkillA$Furry;
  SkillA$FortressDef.prototype = Object.create(SkillA.prototype);
  SkillA$FortressDef.prototype.constructor = SkillA$FortressDef;
  SkillA$FortressRes.prototype = Object.create(SkillA.prototype);
  SkillA$FortressRes.prototype.constructor = SkillA$FortressRes;
  SkillA$ArmoredBlow.prototype = Object.create(SkillA.prototype);
  SkillA$ArmoredBlow.prototype.constructor = SkillA$ArmoredBlow;
  SkillA$WardingBlow.prototype = Object.create(SkillA.prototype);
  SkillA$WardingBlow.prototype.constructor = SkillA$WardingBlow;
  SkillA$DeathBlow.prototype = Object.create(SkillA.prototype);
  SkillA$DeathBlow.prototype.constructor = SkillA$DeathBlow;
  SkillA$DartingBlow.prototype = Object.create(SkillA.prototype);
  SkillA$DartingBlow.prototype.constructor = SkillA$DartingBlow;
  SkillA$SwiftSparrow.prototype = Object.create(SkillA.prototype);
  SkillA$SwiftSparrow.prototype.constructor = SkillA$SwiftSparrow;
  SkillA$SturdyBlow.prototype = Object.create(SkillA.prototype);
  SkillA$SturdyBlow.prototype.constructor = SkillA$SturdyBlow;
  SkillA$SteadyBlow.prototype = Object.create(SkillA.prototype);
  SkillA$SteadyBlow.prototype.constructor = SkillA$SteadyBlow;
  SkillA$MirrorStrike.prototype = Object.create(SkillA.prototype);
  SkillA$MirrorStrike.prototype.constructor = SkillA$MirrorStrike;
  SkillA$BracingBlow.prototype = Object.create(SkillA.prototype);
  SkillA$BracingBlow.prototype.constructor = SkillA$BracingBlow;
  SkillA$SwiftStrike.prototype = Object.create(SkillA.prototype);
  SkillA$SwiftStrike.prototype.constructor = SkillA$SwiftStrike;
  SkillA$DistantDef.prototype = Object.create(SkillA.prototype);
  SkillA$DistantDef.prototype.constructor = SkillA$DistantDef;
  SkillA$CloseDef.prototype = Object.create(SkillA.prototype);
  SkillA$CloseDef.prototype.constructor = SkillA$CloseDef;
  SkillA$FierceStance.prototype = Object.create(SkillA.prototype);
  SkillA$FierceStance.prototype.constructor = SkillA$FierceStance;
  SkillA$SteadyStance.prototype = Object.create(SkillA.prototype);
  SkillA$SteadyStance.prototype.constructor = SkillA$SteadyStance;
  SkillA$WardingStance.prototype = Object.create(SkillA.prototype);
  SkillA$WardingStance.prototype.constructor = SkillA$WardingStance;
  SkillA$SteadyBreath.prototype = Object.create(SkillA.prototype);
  SkillA$SteadyBreath.prototype.constructor = SkillA$SteadyBreath;
  SkillA$EarthBoost.prototype = Object.create(SkillA.prototype);
  SkillA$EarthBoost.prototype.constructor = SkillA$EarthBoost;
  SkillA$WindBoost.prototype = Object.create(SkillA.prototype);
  SkillA$WindBoost.prototype.constructor = SkillA$WindBoost;
  SkillA$FireBoost.prototype = Object.create(SkillA.prototype);
  SkillA$FireBoost.prototype.constructor = SkillA$FireBoost;
  SkillA$WaterBoost.prototype = Object.create(SkillA.prototype);
  SkillA$WaterBoost.prototype.constructor = SkillA$WaterBoost;
  SkillA$HeavyBlade.prototype = Object.create(SkillA.prototype);
  SkillA$HeavyBlade.prototype.constructor = SkillA$HeavyBlade;
  SkillA$FlashingBlade.prototype = Object.create(SkillA.prototype);
  SkillA$FlashingBlade.prototype.constructor = SkillA$FlashingBlade;
  SkillA$CloseCounter.prototype = Object.create(SkillA.prototype);
  SkillA$CloseCounter.prototype.constructor = SkillA$CloseCounter;
  SkillA$DistantCounter.prototype = Object.create(SkillA.prototype);
  SkillA$DistantCounter.prototype.constructor = SkillA$DistantCounter;
  SkillA$SvalinnShield.prototype = Object.create(SkillA.prototype);
  SkillA$SvalinnShield.prototype.constructor = SkillA$SvalinnShield;
  SkillA$IotesShield.prototype = Object.create(SkillA.prototype);
  SkillA$IotesShield.prototype.constructor = SkillA$IotesShield;
  SkillA$GranisShield.prototype = Object.create(SkillA.prototype);
  SkillA$GranisShield.prototype.constructor = SkillA$GranisShield;
  SkillA$BrazenAtkDef.prototype = Object.create(SkillA.prototype);
  SkillA$BrazenAtkDef.prototype.constructor = SkillA$BrazenAtkDef;
  SkillA$BrazenAtkSpd.prototype = Object.create(SkillA.prototype);
  SkillA$BrazenAtkSpd.prototype.constructor = SkillA$BrazenAtkSpd;
  SkillB.prototype = Object.create(Enum.prototype);
  SkillB.prototype.constructor = SkillB;
  SkillB$SwordBreaker.prototype = Object.create(SkillB.prototype);
  SkillB$SwordBreaker.prototype.constructor = SkillB$SwordBreaker;
  SkillB$LanceBreaker.prototype = Object.create(SkillB.prototype);
  SkillB$LanceBreaker.prototype.constructor = SkillB$LanceBreaker;
  SkillB$AxeBreaker.prototype = Object.create(SkillB.prototype);
  SkillB$AxeBreaker.prototype.constructor = SkillB$AxeBreaker;
  SkillB$BowBreaker.prototype = Object.create(SkillB.prototype);
  SkillB$BowBreaker.prototype.constructor = SkillB$BowBreaker;
  SkillB$DaggerBreaker.prototype = Object.create(SkillB.prototype);
  SkillB$DaggerBreaker.prototype.constructor = SkillB$DaggerBreaker;
  SkillB$RTomeBreaker.prototype = Object.create(SkillB.prototype);
  SkillB$RTomeBreaker.prototype.constructor = SkillB$RTomeBreaker;
  SkillB$GTomeBreaker.prototype = Object.create(SkillB.prototype);
  SkillB$GTomeBreaker.prototype.constructor = SkillB$GTomeBreaker;
  SkillB$BTomeBreaker.prototype = Object.create(SkillB.prototype);
  SkillB$BTomeBreaker.prototype.constructor = SkillB$BTomeBreaker;
  SkillB$Vantage.prototype = Object.create(SkillB.prototype);
  SkillB$Vantage.prototype.constructor = SkillB$Vantage;
  SkillB$WaryFighter.prototype = Object.create(SkillB.prototype);
  SkillB$WaryFighter.prototype.constructor = SkillB$WaryFighter;
  SkillB$BoldFighter.prototype = Object.create(SkillB.prototype);
  SkillB$BoldFighter.prototype.constructor = SkillB$BoldFighter;
  SkillB$VengefulFighter.prototype = Object.create(SkillB.prototype);
  SkillB$VengefulFighter.prototype.constructor = SkillB$VengefulFighter;
  SkillB$Desperation.prototype = Object.create(SkillB.prototype);
  SkillB$Desperation.prototype.constructor = SkillB$Desperation;
  SkillB$QuickRiposte.prototype = Object.create(SkillB.prototype);
  SkillB$QuickRiposte.prototype.constructor = SkillB$QuickRiposte;
  SkillB$BrashAssault.prototype = Object.create(SkillB.prototype);
  SkillB$BrashAssault.prototype.constructor = SkillB$BrashAssault;
  SkillB$Windsweep.prototype = Object.create(SkillB.prototype);
  SkillB$Windsweep.prototype.constructor = SkillB$Windsweep;
  SkillB$Watersweep.prototype = Object.create(SkillB.prototype);
  SkillB$Watersweep.prototype.constructor = SkillB$Watersweep;
  SkillB$Guard.prototype = Object.create(SkillB.prototype);
  SkillB$Guard.prototype.constructor = SkillB$Guard;
  SkillB$WrathfulStaff.prototype = Object.create(SkillB.prototype);
  SkillB$WrathfulStaff.prototype.constructor = SkillB$WrathfulStaff;
  SkillB$DazzlingStaff.prototype = Object.create(SkillB.prototype);
  SkillB$DazzlingStaff.prototype.constructor = SkillB$DazzlingStaff;
  SkillB$CancelAffinity.prototype = Object.create(SkillB.prototype);
  SkillB$CancelAffinity.prototype.constructor = SkillB$CancelAffinity;
  SkillB$FollowUpRing.prototype = Object.create(SkillB.prototype);
  SkillB$FollowUpRing.prototype.constructor = SkillB$FollowUpRing;
  SkillB$SacaesBlessing.prototype = Object.create(SkillB.prototype);
  SkillB$SacaesBlessing.prototype.constructor = SkillB$SacaesBlessing;
  SkillB$BeorcsBlessing.prototype = Object.create(SkillB.prototype);
  SkillB$BeorcsBlessing.prototype.constructor = SkillB$BeorcsBlessing;
  SkillB$CrusadersWard.prototype = Object.create(SkillB.prototype);
  SkillB$CrusadersWard.prototype.constructor = SkillB$CrusadersWard;
  SkillB$PoisonStrike.prototype = Object.create(SkillB.prototype);
  SkillB$PoisonStrike.prototype.constructor = SkillB$PoisonStrike;
  SkillC.prototype = Object.create(Enum.prototype);
  SkillC.prototype.constructor = SkillC;
  Special.prototype = Object.create(Enum.prototype);
  Special.prototype.constructor = Special;
  Special$DayLight.prototype = Object.create(Special.prototype);
  Special$DayLight.prototype.constructor = Special$DayLight;
  Special$Noontime.prototype = Object.create(Special.prototype);
  Special$Noontime.prototype.constructor = Special$Noontime;
  Special$Sol.prototype = Object.create(Special.prototype);
  Special$Sol.prototype.constructor = Special$Sol;
  Special$NightSky.prototype = Object.create(Special.prototype);
  Special$NightSky.prototype.constructor = Special$NightSky;
  Special$Glimmer.prototype = Object.create(Special.prototype);
  Special$Glimmer.prototype.constructor = Special$Glimmer;
  Special$Astra.prototype = Object.create(Special.prototype);
  Special$Astra.prototype.constructor = Special$Astra;
  Special$RegnalAstra.prototype = Object.create(Special.prototype);
  Special$RegnalAstra.prototype.constructor = Special$RegnalAstra;
  Special$Miracle.prototype = Object.create(Special.prototype);
  Special$Miracle.prototype.constructor = Special$Miracle;
  Special$DraconicAura.prototype = Object.create(Special.prototype);
  Special$DraconicAura.prototype.constructor = Special$DraconicAura;
  Special$DragonGaze.prototype = Object.create(Special.prototype);
  Special$DragonGaze.prototype.constructor = Special$DragonGaze;
  Special$DragonFang.prototype = Object.create(Special.prototype);
  Special$DragonFang.prototype.constructor = Special$DragonFang;
  Special$GlowingEmber.prototype = Object.create(Special.prototype);
  Special$GlowingEmber.prototype.constructor = Special$GlowingEmber;
  Special$Bonfire.prototype = Object.create(Special.prototype);
  Special$Bonfire.prototype.constructor = Special$Bonfire;
  Special$Ignis.prototype = Object.create(Special.prototype);
  Special$Ignis.prototype.constructor = Special$Ignis;
  Special$ChillingWind.prototype = Object.create(Special.prototype);
  Special$ChillingWind.prototype.constructor = Special$ChillingWind;
  Special$Iceberg.prototype = Object.create(Special.prototype);
  Special$Iceberg.prototype.constructor = Special$Iceberg;
  Special$Glacies.prototype = Object.create(Special.prototype);
  Special$Glacies.prototype.constructor = Special$Glacies;
  Special$Aether.prototype = Object.create(Special.prototype);
  Special$Aether.prototype.constructor = Special$Aether;
  Special$NewMoon.prototype = Object.create(Special.prototype);
  Special$NewMoon.prototype.constructor = Special$NewMoon;
  Special$Moonbow.prototype = Object.create(Special.prototype);
  Special$Moonbow.prototype.constructor = Special$Moonbow;
  Special$Luna.prototype = Object.create(Special.prototype);
  Special$Luna.prototype.constructor = Special$Luna;
  Special$BlackLuna.prototype = Object.create(Special.prototype);
  Special$BlackLuna.prototype.constructor = Special$BlackLuna;
  Special$Retribution.prototype = Object.create(Special.prototype);
  Special$Retribution.prototype.constructor = Special$Retribution;
  Special$Reprisal.prototype = Object.create(Special.prototype);
  Special$Reprisal.prototype.constructor = Special$Reprisal;
  Special$Vengeance.prototype = Object.create(Special.prototype);
  Special$Vengeance.prototype.constructor = Special$Vengeance;
  Special$HolyVestments.prototype = Object.create(Special.prototype);
  Special$HolyVestments.prototype.constructor = Special$HolyVestments;
  Special$SacredCowl.prototype = Object.create(Special.prototype);
  Special$SacredCowl.prototype.constructor = Special$SacredCowl;
  Special$IceMirror.prototype = Object.create(Special.prototype);
  Special$IceMirror.prototype.constructor = Special$IceMirror;
  Special$Aegis.prototype = Object.create(Special.prototype);
  Special$Aegis.prototype.constructor = Special$Aegis;
  Special$Buckler.prototype = Object.create(Special.prototype);
  Special$Buckler.prototype.constructor = Special$Buckler;
  Special$Escutcheon.prototype = Object.create(Special.prototype);
  Special$Escutcheon.prototype.constructor = Special$Escutcheon;
  Special$Pavise.prototype = Object.create(Special.prototype);
  Special$Pavise.prototype.constructor = Special$Pavise;
  Weapon.prototype = Object.create(Enum.prototype);
  Weapon.prototype.constructor = Weapon;
  Weapon$ArmorSlayer.prototype = Object.create(Weapon.prototype);
  Weapon$ArmorSlayer.prototype.constructor = Weapon$ArmorSlayer;
  Weapon$ArmorSlayer2.prototype = Object.create(Weapon.prototype);
  Weapon$ArmorSlayer2.prototype.constructor = Weapon$ArmorSlayer2;
  Weapon$Armorsmasher2.prototype = Object.create(Weapon.prototype);
  Weapon$Armorsmasher2.prototype.constructor = Weapon$Armorsmasher2;
  Weapon$BraveSword.prototype = Object.create(Weapon.prototype);
  Weapon$BraveSword.prototype.constructor = Weapon$BraveSword;
  Weapon$BraveSword2.prototype = Object.create(Weapon.prototype);
  Weapon$BraveSword2.prototype.constructor = Weapon$BraveSword2;
  Weapon$RubySword.prototype = Object.create(Weapon.prototype);
  Weapon$RubySword.prototype.constructor = Weapon$RubySword;
  Weapon$RubySword2.prototype = Object.create(Weapon.prototype);
  Weapon$RubySword2.prototype.constructor = Weapon$RubySword2;
  Weapon$KillingEdge.prototype = Object.create(Weapon.prototype);
  Weapon$KillingEdge.prototype.constructor = Weapon$KillingEdge;
  Weapon$KillingEdge2.prototype = Object.create(Weapon.prototype);
  Weapon$KillingEdge2.prototype.constructor = Weapon$KillingEdge2;
  Weapon$WaoDao.prototype = Object.create(Weapon.prototype);
  Weapon$WaoDao.prototype.constructor = Weapon$WaoDao;
  Weapon$WaoDao2.prototype = Object.create(Weapon.prototype);
  Weapon$WaoDao2.prototype.constructor = Weapon$WaoDao2;
  Weapon$Zanbato.prototype = Object.create(Weapon.prototype);
  Weapon$Zanbato.prototype.constructor = Weapon$Zanbato;
  Weapon$Zanbato2.prototype = Object.create(Weapon.prototype);
  Weapon$Zanbato2.prototype.constructor = Weapon$Zanbato2;
  Weapon$SlayingEdge.prototype = Object.create(Weapon.prototype);
  Weapon$SlayingEdge.prototype.constructor = Weapon$SlayingEdge;
  Weapon$SlayingEdge2.prototype = Object.create(Weapon.prototype);
  Weapon$SlayingEdge2.prototype.constructor = Weapon$SlayingEdge2;
  Weapon$AyrasBlade.prototype = Object.create(Weapon.prototype);
  Weapon$AyrasBlade.prototype.constructor = Weapon$AyrasBlade;
  Weapon$Folkvangr.prototype = Object.create(Weapon.prototype);
  Weapon$Folkvangr.prototype.constructor = Weapon$Folkvangr;
  Weapon$Falchion.prototype = Object.create(Weapon.prototype);
  Weapon$Falchion.prototype.constructor = Weapon$Falchion;
  Weapon$BindingBlade.prototype = Object.create(Weapon.prototype);
  Weapon$BindingBlade.prototype.constructor = Weapon$BindingBlade;
  Weapon$Durandal.prototype = Object.create(Weapon.prototype);
  Weapon$Durandal.prototype.constructor = Weapon$Durandal;
  Weapon$SolKatti.prototype = Object.create(Weapon.prototype);
  Weapon$SolKatti.prototype.constructor = Weapon$SolKatti;
  Weapon$Yato.prototype = Object.create(Weapon.prototype);
  Weapon$Yato.prototype.constructor = Weapon$Yato;
  Weapon$Raijinto.prototype = Object.create(Weapon.prototype);
  Weapon$Raijinto.prototype.constructor = Weapon$Raijinto;
  Weapon$Tyrfing.prototype = Object.create(Weapon.prototype);
  Weapon$Tyrfing.prototype.constructor = Weapon$Tyrfing;
  Weapon$Mystletainn.prototype = Object.create(Weapon.prototype);
  Weapon$Mystletainn.prototype.constructor = Weapon$Mystletainn;
  Weapon$Siegfried.prototype = Object.create(Weapon.prototype);
  Weapon$Siegfried.prototype.constructor = Weapon$Siegfried;
  Weapon$Ragnell.prototype = Object.create(Weapon.prototype);
  Weapon$Ragnell.prototype.constructor = Weapon$Ragnell;
  Weapon$BlazingDurandal.prototype = Object.create(Weapon.prototype);
  Weapon$BlazingDurandal.prototype.constructor = Weapon$BlazingDurandal;
  Weapon$Amiti.prototype = Object.create(Weapon.prototype);
  Weapon$Amiti.prototype.constructor = Weapon$Amiti;
  Weapon$Alondite.prototype = Object.create(Weapon.prototype);
  Weapon$Alondite.prototype.constructor = Weapon$Alondite;
  Weapon$DivineTyrfing.prototype = Object.create(Weapon.prototype);
  Weapon$DivineTyrfing.prototype.constructor = Weapon$DivineTyrfing;
  Weapon$RegalBlade.prototype = Object.create(Weapon.prototype);
  Weapon$RegalBlade.prototype.constructor = Weapon$RegalBlade;
  Weapon$ResoluteBlade.prototype = Object.create(Weapon.prototype);
  Weapon$ResoluteBlade.prototype.constructor = Weapon$ResoluteBlade;
  Weapon$Audhulma.prototype = Object.create(Weapon.prototype);
  Weapon$Audhulma.prototype.constructor = Weapon$Audhulma;
  Weapon$DarkGreatsword.prototype = Object.create(Weapon.prototype);
  Weapon$DarkGreatsword.prototype.constructor = Weapon$DarkGreatsword;
  Weapon$FiresweepSword.prototype = Object.create(Weapon.prototype);
  Weapon$FiresweepSword.prototype.constructor = Weapon$FiresweepSword;
  Weapon$FiresweepSword2.prototype = Object.create(Weapon.prototype);
  Weapon$FiresweepSword2.prototype.constructor = Weapon$FiresweepSword2;
  Weapon$KillerLance.prototype = Object.create(Weapon.prototype);
  Weapon$KillerLance.prototype.constructor = Weapon$KillerLance;
  Weapon$KillerLance2.prototype = Object.create(Weapon.prototype);
  Weapon$KillerLance2.prototype.constructor = Weapon$KillerLance2;
  Weapon$BraveLance.prototype = Object.create(Weapon.prototype);
  Weapon$BraveLance.prototype.constructor = Weapon$BraveLance;
  Weapon$BraveLance2.prototype = Object.create(Weapon.prototype);
  Weapon$BraveLance2.prototype.constructor = Weapon$BraveLance2;
  Weapon$SapphireLance.prototype = Object.create(Weapon.prototype);
  Weapon$SapphireLance.prototype.constructor = Weapon$SapphireLance;
  Weapon$SapphireLance2.prototype = Object.create(Weapon.prototype);
  Weapon$SapphireLance2.prototype.constructor = Weapon$SapphireLance2;
  Weapon$HeavySpear.prototype = Object.create(Weapon.prototype);
  Weapon$HeavySpear.prototype.constructor = Weapon$HeavySpear;
  Weapon$HeavySpear2.prototype = Object.create(Weapon.prototype);
  Weapon$HeavySpear2.prototype.constructor = Weapon$HeavySpear2;
  Weapon$SlayingSpear2.prototype = Object.create(Weapon.prototype);
  Weapon$SlayingSpear2.prototype.constructor = Weapon$SlayingSpear2;
  Weapon$CarrotLance.prototype = Object.create(Weapon.prototype);
  Weapon$CarrotLance.prototype.constructor = Weapon$CarrotLance;
  Weapon$CarrotLance2.prototype = Object.create(Weapon.prototype);
  Weapon$CarrotLance2.prototype.constructor = Weapon$CarrotLance2;
  Weapon$FiresweepLance.prototype = Object.create(Weapon.prototype);
  Weapon$FiresweepLance.prototype.constructor = Weapon$FiresweepLance;
  Weapon$FiresweepLance2.prototype = Object.create(Weapon.prototype);
  Weapon$FiresweepLance2.prototype.constructor = Weapon$FiresweepLance2;
  Weapon$DeftHarpoon.prototype = Object.create(Weapon.prototype);
  Weapon$DeftHarpoon.prototype.constructor = Weapon$DeftHarpoon;
  Weapon$DeftHarpoon2.prototype = Object.create(Weapon.prototype);
  Weapon$DeftHarpoon2.prototype.constructor = Weapon$DeftHarpoon2;
  Weapon$Ridersbane.prototype = Object.create(Weapon.prototype);
  Weapon$Ridersbane.prototype.constructor = Weapon$Ridersbane;
  Weapon$Ridersbane2.prototype = Object.create(Weapon.prototype);
  Weapon$Ridersbane2.prototype.constructor = Weapon$Ridersbane2;
  Weapon$BerkutsLance.prototype = Object.create(Weapon.prototype);
  Weapon$BerkutsLance.prototype.constructor = Weapon$BerkutsLance;
  Weapon$BerkutsLance2.prototype = Object.create(Weapon.prototype);
  Weapon$BerkutsLance2.prototype.constructor = Weapon$BerkutsLance2;
  Weapon$SlayingLance.prototype = Object.create(Weapon.prototype);
  Weapon$SlayingLance.prototype.constructor = Weapon$SlayingLance;
  Weapon$SlayingLance2.prototype = Object.create(Weapon.prototype);
  Weapon$SlayingLance2.prototype.constructor = Weapon$SlayingLance2;
  Weapon$Gradivus.prototype = Object.create(Weapon.prototype);
  Weapon$Gradivus.prototype.constructor = Weapon$Gradivus;
  Weapon$Vidofinir.prototype = Object.create(Weapon.prototype);
  Weapon$Vidofinir.prototype.constructor = Weapon$Vidofinir;
  Weapon$CursedLance.prototype = Object.create(Weapon.prototype);
  Weapon$CursedLance.prototype.constructor = Weapon$CursedLance;
  Weapon$Geirskogul.prototype = Object.create(Weapon.prototype);
  Weapon$Geirskogul.prototype.constructor = Weapon$Geirskogul;
  Weapon$Leiptr.prototype = Object.create(Weapon.prototype);
  Weapon$Leiptr.prototype.constructor = Weapon$Leiptr;
  Weapon$BrightNaginata.prototype = Object.create(Weapon.prototype);
  Weapon$BrightNaginata.prototype.constructor = Weapon$BrightNaginata;
  Weapon$Tannenboom.prototype = Object.create(Weapon.prototype);
  Weapon$Tannenboom.prototype.constructor = Weapon$Tannenboom;
  Weapon$Tannenboom2.prototype = Object.create(Weapon.prototype);
  Weapon$Tannenboom2.prototype.constructor = Weapon$Tannenboom2;
  Weapon$KillerAxe.prototype = Object.create(Weapon.prototype);
  Weapon$KillerAxe.prototype.constructor = Weapon$KillerAxe;
  Weapon$KillerAxe2.prototype = Object.create(Weapon.prototype);
  Weapon$KillerAxe2.prototype.constructor = Weapon$KillerAxe2;
  Weapon$BraveAxe.prototype = Object.create(Weapon.prototype);
  Weapon$BraveAxe.prototype.constructor = Weapon$BraveAxe;
  Weapon$BraveAxe2.prototype = Object.create(Weapon.prototype);
  Weapon$BraveAxe2.prototype.constructor = Weapon$BraveAxe2;
  Weapon$Hammer.prototype = Object.create(Weapon.prototype);
  Weapon$Hammer.prototype.constructor = Weapon$Hammer;
  Weapon$Hammer2.prototype = Object.create(Weapon.prototype);
  Weapon$Hammer2.prototype.constructor = Weapon$Hammer2;
  Weapon$SlayingHammer2.prototype = Object.create(Weapon.prototype);
  Weapon$SlayingHammer2.prototype.constructor = Weapon$SlayingHammer2;
  Weapon$EmeraldAxe.prototype = Object.create(Weapon.prototype);
  Weapon$EmeraldAxe.prototype.constructor = Weapon$EmeraldAxe;
  Weapon$EmeraldAxe2.prototype = Object.create(Weapon.prototype);
  Weapon$EmeraldAxe2.prototype.constructor = Weapon$EmeraldAxe2;
  Weapon$SlayingAxe.prototype = Object.create(Weapon.prototype);
  Weapon$SlayingAxe.prototype.constructor = Weapon$SlayingAxe;
  Weapon$SlayingAxe2.prototype = Object.create(Weapon.prototype);
  Weapon$SlayingAxe2.prototype.constructor = Weapon$SlayingAxe2;
  Weapon$CarrotAxe.prototype = Object.create(Weapon.prototype);
  Weapon$CarrotAxe.prototype.constructor = Weapon$CarrotAxe;
  Weapon$CarrotAxe2.prototype = Object.create(Weapon.prototype);
  Weapon$CarrotAxe2.prototype.constructor = Weapon$CarrotAxe2;
  Weapon$MelonCrusher.prototype = Object.create(Weapon.prototype);
  Weapon$MelonCrusher.prototype.constructor = Weapon$MelonCrusher;
  Weapon$MelonCrusher2.prototype = Object.create(Weapon.prototype);
  Weapon$MelonCrusher2.prototype.constructor = Weapon$MelonCrusher2;
  Weapon$Hauteclere.prototype = Object.create(Weapon.prototype);
  Weapon$Hauteclere.prototype.constructor = Weapon$Hauteclere;
  Weapon$Armoads.prototype = Object.create(Weapon.prototype);
  Weapon$Armoads.prototype.constructor = Weapon$Armoads;
  Weapon$Urvan.prototype = Object.create(Weapon.prototype);
  Weapon$Urvan.prototype.constructor = Weapon$Urvan;
  Weapon$StoutTomahawk.prototype = Object.create(Weapon.prototype);
  Weapon$StoutTomahawk.prototype.constructor = Weapon$StoutTomahawk;
  Weapon$SackOGifts.prototype = Object.create(Weapon.prototype);
  Weapon$SackOGifts.prototype.constructor = Weapon$SackOGifts;
  Weapon$SackOGifts2.prototype = Object.create(Weapon.prototype);
  Weapon$SackOGifts2.prototype.constructor = Weapon$SackOGifts2;
  Weapon$Handbell.prototype = Object.create(Weapon.prototype);
  Weapon$Handbell.prototype.constructor = Weapon$Handbell;
  Weapon$Handbell2.prototype = Object.create(Weapon.prototype);
  Weapon$Handbell2.prototype.constructor = Weapon$Handbell2;
  Weapon$BraveBow.prototype = Object.create(Weapon.prototype);
  Weapon$BraveBow.prototype.constructor = Weapon$BraveBow;
  Weapon$BraveBow2.prototype = Object.create(Weapon.prototype);
  Weapon$BraveBow2.prototype.constructor = Weapon$BraveBow2;
  Weapon$KillerBow.prototype = Object.create(Weapon.prototype);
  Weapon$KillerBow.prototype.constructor = Weapon$KillerBow;
  Weapon$KillerBow2.prototype = Object.create(Weapon.prototype);
  Weapon$KillerBow2.prototype.constructor = Weapon$KillerBow2;
  Weapon$AssassinsBow.prototype = Object.create(Weapon.prototype);
  Weapon$AssassinsBow.prototype.constructor = Weapon$AssassinsBow;
  Weapon$AssassinsBow2.prototype = Object.create(Weapon.prototype);
  Weapon$AssassinsBow2.prototype.constructor = Weapon$AssassinsBow2;
  Weapon$FiresweepBow.prototype = Object.create(Weapon.prototype);
  Weapon$FiresweepBow.prototype.constructor = Weapon$FiresweepBow;
  Weapon$FiresweepBow2.prototype = Object.create(Weapon.prototype);
  Weapon$FiresweepBow2.prototype.constructor = Weapon$FiresweepBow2;
  Weapon$RefreshingBolt.prototype = Object.create(Weapon.prototype);
  Weapon$RefreshingBolt.prototype.constructor = Weapon$RefreshingBolt;
  Weapon$RefreshingBolt2.prototype = Object.create(Weapon.prototype);
  Weapon$RefreshingBolt2.prototype.constructor = Weapon$RefreshingBolt2;
  Weapon$SlayingBow.prototype = Object.create(Weapon.prototype);
  Weapon$SlayingBow.prototype.constructor = Weapon$SlayingBow;
  Weapon$SlayingBow2.prototype = Object.create(Weapon.prototype);
  Weapon$SlayingBow2.prototype.constructor = Weapon$SlayingBow2;
  Weapon$Parthia.prototype = Object.create(Weapon.prototype);
  Weapon$Parthia.prototype.constructor = Weapon$Parthia;
  Weapon$Mulagir.prototype = Object.create(Weapon.prototype);
  Weapon$Mulagir.prototype.constructor = Weapon$Mulagir;
  Weapon$PoisonDagger.prototype = Object.create(Weapon.prototype);
  Weapon$PoisonDagger.prototype.constructor = Weapon$PoisonDagger;
  Weapon$PoisonDagger2.prototype = Object.create(Weapon.prototype);
  Weapon$PoisonDagger2.prototype.constructor = Weapon$PoisonDagger2;
  Weapon$Seashell.prototype = Object.create(Weapon.prototype);
  Weapon$Seashell.prototype.constructor = Weapon$Seashell;
  Weapon$Seashell2.prototype = Object.create(Weapon.prototype);
  Weapon$Seashell2.prototype.constructor = Weapon$Seashell2;
  Weapon$DeathlyDagger.prototype = Object.create(Weapon.prototype);
  Weapon$DeathlyDagger.prototype.constructor = Weapon$DeathlyDagger;
  Weapon$KittyPaddle.prototype = Object.create(Weapon.prototype);
  Weapon$KittyPaddle.prototype.constructor = Weapon$KittyPaddle;
  Weapon$KittyPaddle2.prototype = Object.create(Weapon.prototype);
  Weapon$KittyPaddle2.prototype.constructor = Weapon$KittyPaddle2;
  Weapon$Absorb.prototype = Object.create(Weapon.prototype);
  Weapon$Absorb.prototype.constructor = Weapon$Absorb;
  Weapon$Absorb2.prototype = Object.create(Weapon.prototype);
  Weapon$Absorb2.prototype.constructor = Weapon$Absorb2;
  Weapon$Pain.prototype = Object.create(Weapon.prototype);
  Weapon$Pain.prototype.constructor = Weapon$Pain;
  Weapon$Pain2.prototype = Object.create(Weapon.prototype);
  Weapon$Pain2.prototype.constructor = Weapon$Pain2;
  Weapon$Rauorwolf.prototype = Object.create(Weapon.prototype);
  Weapon$Rauorwolf.prototype.constructor = Weapon$Rauorwolf;
  Weapon$Rauorwolf2.prototype = Object.create(Weapon.prototype);
  Weapon$Rauorwolf2.prototype.constructor = Weapon$Rauorwolf2;
  Weapon$KeenRauorwolf2.prototype = Object.create(Weapon.prototype);
  Weapon$KeenRauorwolf2.prototype.constructor = Weapon$KeenRauorwolf2;
  Weapon$Rauorraven.prototype = Object.create(Weapon.prototype);
  Weapon$Rauorraven.prototype.constructor = Weapon$Rauorraven;
  Weapon$Rauorraven2.prototype = Object.create(Weapon.prototype);
  Weapon$Rauorraven2.prototype.constructor = Weapon$Rauorraven2;
  Weapon$Rauorblade.prototype = Object.create(Weapon.prototype);
  Weapon$Rauorblade.prototype.constructor = Weapon$Rauorblade;
  Weapon$Rauorblade2.prototype = Object.create(Weapon.prototype);
  Weapon$Rauorblade2.prototype.constructor = Weapon$Rauorblade2;
  Weapon$Ragnarok.prototype = Object.create(Weapon.prototype);
  Weapon$Ragnarok.prototype.constructor = Weapon$Ragnarok;
  Weapon$Candelabra.prototype = Object.create(Weapon.prototype);
  Weapon$Candelabra.prototype.constructor = Weapon$Candelabra;
  Weapon$Candelabra2.prototype = Object.create(Weapon.prototype);
  Weapon$Candelabra2.prototype.constructor = Weapon$Candelabra2;
  Weapon$Blarwolf.prototype = Object.create(Weapon.prototype);
  Weapon$Blarwolf.prototype.constructor = Weapon$Blarwolf;
  Weapon$Blarwolf2.prototype = Object.create(Weapon.prototype);
  Weapon$Blarwolf2.prototype.constructor = Weapon$Blarwolf2;
  Weapon$KeenBlarwolf2.prototype = Object.create(Weapon.prototype);
  Weapon$KeenBlarwolf2.prototype.constructor = Weapon$KeenBlarwolf2;
  Weapon$Blarraven.prototype = Object.create(Weapon.prototype);
  Weapon$Blarraven.prototype.constructor = Weapon$Blarraven;
  Weapon$Blarraven2.prototype = Object.create(Weapon.prototype);
  Weapon$Blarraven2.prototype.constructor = Weapon$Blarraven2;
  Weapon$Blarblade.prototype = Object.create(Weapon.prototype);
  Weapon$Blarblade.prototype.constructor = Weapon$Blarblade;
  Weapon$Blarblade2.prototype = Object.create(Weapon.prototype);
  Weapon$Blarblade2.prototype.constructor = Weapon$Blarblade2;
  Weapon$Valaskjalf.prototype = Object.create(Weapon.prototype);
  Weapon$Valaskjalf.prototype.constructor = Weapon$Valaskjalf;
  Weapon$DireThunder.prototype = Object.create(Weapon.prototype);
  Weapon$DireThunder.prototype.constructor = Weapon$DireThunder;
  Weapon$WeirdingTome.prototype = Object.create(Weapon.prototype);
  Weapon$WeirdingTome.prototype.constructor = Weapon$WeirdingTome;
  Weapon$Gronnwolf.prototype = Object.create(Weapon.prototype);
  Weapon$Gronnwolf.prototype.constructor = Weapon$Gronnwolf;
  Weapon$Gronnwolf2.prototype = Object.create(Weapon.prototype);
  Weapon$Gronnwolf2.prototype.constructor = Weapon$Gronnwolf2;
  Weapon$KeenGronnwolf2.prototype = Object.create(Weapon.prototype);
  Weapon$KeenGronnwolf2.prototype.constructor = Weapon$KeenGronnwolf2;
  Weapon$Gronnraven.prototype = Object.create(Weapon.prototype);
  Weapon$Gronnraven.prototype.constructor = Weapon$Gronnraven;
  Weapon$Gronnraven2.prototype = Object.create(Weapon.prototype);
  Weapon$Gronnraven2.prototype.constructor = Weapon$Gronnraven2;
  Weapon$Gronnblade.prototype = Object.create(Weapon.prototype);
  Weapon$Gronnblade.prototype.constructor = Weapon$Gronnblade;
  Weapon$Gronnblade2.prototype = Object.create(Weapon.prototype);
  Weapon$Gronnblade2.prototype.constructor = Weapon$Gronnblade2;
  Weapon$GreenEgg.prototype = Object.create(Weapon.prototype);
  Weapon$GreenEgg.prototype.constructor = Weapon$GreenEgg;
  Weapon$GreenEgg2.prototype = Object.create(Weapon.prototype);
  Weapon$GreenEgg2.prototype.constructor = Weapon$GreenEgg2;
  Weapon$Excalibur.prototype = Object.create(Weapon.prototype);
  Weapon$Excalibur.prototype.constructor = Weapon$Excalibur;
  Weapon$Naga.prototype = Object.create(Weapon.prototype);
  Weapon$Naga.prototype.constructor = Weapon$Naga;
  Weapon$DarkExcalibur.prototype = Object.create(Weapon.prototype);
  Weapon$DarkExcalibur.prototype.constructor = Weapon$DarkExcalibur;
  Weapon$DivineNaga.prototype = Object.create(Weapon.prototype);
  Weapon$DivineNaga.prototype.constructor = Weapon$DivineNaga;
  Weapon$LightningBreath.prototype = Object.create(Weapon.prototype);
  Weapon$LightningBreath.prototype.constructor = Weapon$LightningBreath;
  Weapon$LightningBreath2.prototype = Object.create(Weapon.prototype);
  Weapon$LightningBreath2.prototype.constructor = Weapon$LightningBreath2;
  function ArmedHero(baseHero, name, baseWeapon, refinedWeapon, assist, special, aSkill, bSkill, cSkill, seal, rarity, levelBoost, boon, bane, defensiveTerrain, atkBuff, spdBuff, defBuff, resBuff, atkSpur, spdSpur, defSpur, resSpur) {
    if (name === void 0)
      name = '';
    if (baseWeapon === void 0)
      baseWeapon = Skill$Companion_getInstance().NONE;
    if (refinedWeapon === void 0)
      refinedWeapon = Skill$Companion_getInstance().NONE;
    if (assist === void 0)
      assist = Skill$Companion_getInstance().NONE;
    if (special === void 0)
      special = Skill$Companion_getInstance().NONE;
    if (aSkill === void 0)
      aSkill = Skill$Companion_getInstance().NONE;
    if (bSkill === void 0)
      bSkill = Skill$Companion_getInstance().NONE;
    if (cSkill === void 0)
      cSkill = Skill$Companion_getInstance().NONE;
    if (seal === void 0)
      seal = Skill$Companion_getInstance().NONE;
    if (rarity === void 0)
      rarity = 5;
    if (levelBoost === void 0)
      levelBoost = 0;
    if (boon === void 0)
      boon = BoonType$NONE_getInstance();
    if (bane === void 0)
      bane = BoonType$NONE_getInstance();
    if (defensiveTerrain === void 0)
      defensiveTerrain = false;
    if (atkBuff === void 0)
      atkBuff = 0;
    if (spdBuff === void 0)
      spdBuff = 0;
    if (defBuff === void 0)
      defBuff = 0;
    if (resBuff === void 0)
      resBuff = 0;
    if (atkSpur === void 0)
      atkSpur = 0;
    if (spdSpur === void 0)
      spdSpur = 0;
    if (defSpur === void 0)
      defSpur = 0;
    if (resSpur === void 0)
      resSpur = 0;
    this.baseHero = baseHero;
    this.name = name;
    this.baseWeapon = baseWeapon;
    this.refinedWeapon = refinedWeapon;
    this.assist = assist;
    this.special = special;
    this.aSkill = aSkill;
    this.bSkill = bSkill;
    this.cSkill = cSkill;
    this.seal = seal;
    this.rarity = rarity;
    this.levelBoost = levelBoost;
    this.boon = boon;
    this.bane = bane;
    this.defensiveTerrain = defensiveTerrain;
    this.atkBuff = atkBuff;
    this.spdBuff = spdBuff;
    this.defBuff = defBuff;
    this.resBuff = resBuff;
    this.atkSpur = atkSpur;
    this.spdSpur = spdSpur;
    this.defSpur = defSpur;
    this.resSpur = resSpur;
    this.reduceSpecialCooldown = 0;
    this.hpEqp = 0;
    this.atkEqp = 0;
    this.spdEqp = 0;
    this.defEqp = 0;
    this.resEqp = 0;
    this.hpBoost = 0;
    this.atkBoost = 0;
    this.spdBoost = 0;
    this.defBoost = 0;
    this.resBoost = 0;
    this.growths = this.baseHero.growths;
    if (this.name.length === 0) {
      this.baseWeapon = this.baseHero.weapon;
      this.assist = this.baseHero.assist;
      this.special = this.baseHero.special;
      this.aSkill = this.baseHero.aSkill;
      this.bSkill = this.baseHero.bSkill;
      this.cSkill = this.baseHero.cSkill;
    }
    this.equip();
  }
  Object.defineProperty(ArmedHero.prototype, 'weapon', {
    get: function () {
      var tmp$;
      return !equals(this.refinedWeapon, Skill$Companion_getInstance().NONE) ? (tmp$ = RefineSkill$Companion_getInstance().valueOfWeapon_3b0btc$(this.baseWeapon)) != null ? tmp$ : this.baseWeapon : this.baseWeapon;
    }
  });
  Object.defineProperty(ArmedHero.prototype, 'skills', {
    get: function () {
      return listOfNotNull([this.weapon, this.refinedWeapon, this.assist, this.special, this.aSkill, this.bSkill, this.cSkill, this.seal]);
    }
  });
  Object.defineProperty(ArmedHero.prototype, 'movableSteps', {
    get: function () {
      return this.baseHero.movableSteps;
    }
  });
  Object.defineProperty(ArmedHero.prototype, 'effectiveRange', {
    get: function () {
      return this.baseHero.effectiveRange;
    }
  });
  Object.defineProperty(ArmedHero.prototype, 'maxHp', {
    get: function () {
      return this.boonedHp + this.hpEqp + this.hpBoost + this.growths.get_za3lpa$(this.rarity - 1 | 0).get_za3lpa$(this.baseHero.hpGrowth + this.boonHp | 0) | 0;
    }
  });
  Object.defineProperty(ArmedHero.prototype, 'atk', {
    get: function () {
      return this.boonedAtk + this.atkEqp + this.atkBoost + this.growths.get_za3lpa$(this.rarity - 1 | 0).get_za3lpa$(this.baseHero.atkGrowth + this.boonAtk | 0) | 0;
    }
  });
  Object.defineProperty(ArmedHero.prototype, 'spd', {
    get: function () {
      return this.boonedSpd + this.spdEqp + this.spdBoost + this.growths.get_za3lpa$(this.rarity - 1 | 0).get_za3lpa$(this.baseHero.spdGrowth + this.boonSpd | 0) | 0;
    }
  });
  Object.defineProperty(ArmedHero.prototype, 'def', {
    get: function () {
      return this.boonedDef + this.defEqp + this.defBoost + this.growths.get_za3lpa$(this.rarity - 1 | 0).get_za3lpa$(this.baseHero.defGrowth + this.boonDef | 0) | 0;
    }
  });
  Object.defineProperty(ArmedHero.prototype, 'res', {
    get: function () {
      return this.boonedRes + this.resEqp + this.resBoost + this.growths.get_za3lpa$(this.rarity - 1 | 0).get_za3lpa$(this.baseHero.resGrowth + this.boonRes | 0) | 0;
    }
  });
  Object.defineProperty(ArmedHero.prototype, 'boonHp', {
    get: function () {
      if (this.boon === BoonType$HP_getInstance())
        return 1;
      else if (this.bane === BoonType$HP_getInstance())
        return -1;
      else
        return 0;
    }
  });
  Object.defineProperty(ArmedHero.prototype, 'boonAtk', {
    get: function () {
      if (this.boon === BoonType$ATK_getInstance())
        return 1;
      else if (this.bane === BoonType$ATK_getInstance())
        return -1;
      else
        return 0;
    }
  });
  Object.defineProperty(ArmedHero.prototype, 'boonSpd', {
    get: function () {
      if (this.boon === BoonType$SPD_getInstance())
        return 1;
      else if (this.bane === BoonType$SPD_getInstance())
        return -1;
      else
        return 0;
    }
  });
  Object.defineProperty(ArmedHero.prototype, 'boonDef', {
    get: function () {
      if (this.boon === BoonType$DEF_getInstance())
        return 1;
      else if (this.bane === BoonType$DEF_getInstance())
        return -1;
      else
        return 0;
    }
  });
  Object.defineProperty(ArmedHero.prototype, 'boonRes', {
    get: function () {
      if (this.boon === BoonType$RES_getInstance())
        return 1;
      else if (this.bane === BoonType$RES_getInstance())
        return -1;
      else
        return 0;
    }
  });
  Object.defineProperty(ArmedHero.prototype, 'boonedHp', {
    get: function () {
      return this.baseHero.hitPoint + this.boonHp | 0;
    }
  });
  Object.defineProperty(ArmedHero.prototype, 'boonedAtk', {
    get: function () {
      return this.baseHero.attack + this.boonAtk | 0;
    }
  });
  Object.defineProperty(ArmedHero.prototype, 'boonedSpd', {
    get: function () {
      return this.baseHero.speed + this.boonSpd | 0;
    }
  });
  Object.defineProperty(ArmedHero.prototype, 'boonedDef', {
    get: function () {
      return this.baseHero.defense + this.boonDef | 0;
    }
  });
  Object.defineProperty(ArmedHero.prototype, 'boonedRes', {
    get: function () {
      return this.baseHero.resistance + this.boonRes | 0;
    }
  });
  Object.defineProperty(ArmedHero.prototype, 'specialCoolDownTime', {
    get: function () {
      return this.special.level - this.reduceSpecialCooldown | 0;
    }
  });
  ArmedHero.prototype.toString = function () {
    return this.name + ' MaxHP:' + this.maxHp + ' , totalAtk:' + this.atk + ' , spd:' + this.spd + ' , def:' + this.def + ' , res:' + this.res + ' ,weapon:' + this.weapon + ', refinedWeapon:' + this.refinedWeapon + ', assist:' + this.assist + ', special:' + this.special + ', skillA,' + this.aSkill + ', skillB:' + this.bSkill + ', skillC:' + this.cSkill + ', seal:' + this.seal + ', hpEqp:' + this.hpEqp + ' , atkEqp:' + this.atkEqp + ' , spdEqp:' + this.spdEqp + ' , defEqp:' + this.defEqp + ' , resEqp:' + this.resEqp;
  };
  ArmedHero.prototype.bothEffect_trfvk0$ = function (battleUnit) {
    var tmp$;
    var accumulator = battleUnit;
    tmp$ = this.skills.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      accumulator = element.bothEffect_sv9jhu$(accumulator);
    }
    return accumulator;
  };
  ArmedHero.prototype.attackEffect_trfvk0$ = function (battleUnit) {
    var tmp$;
    var accumulator = battleUnit;
    tmp$ = this.skills.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      accumulator = element.attackEffect_sv9jhu$(accumulator);
    }
    return accumulator;
  };
  ArmedHero.prototype.counterEffect_trfvk0$ = function (battleUnit) {
    var tmp$;
    var accumulator = battleUnit;
    tmp$ = this.skills.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      accumulator = element.counterEffect_sv9jhu$(accumulator);
    }
    return accumulator;
  };
  ArmedHero.prototype.effectedAttackEffect_trfvk0$ = function (battleUnit) {
    var tmp$;
    var accumulator = battleUnit;
    tmp$ = this.skills.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      accumulator = element.effectedAttackEffect_sv9jhu$(accumulator);
    }
    return accumulator;
  };
  ArmedHero.prototype.effectedCcounterEffect_trfvk0$ = function (battleUnit) {
    var tmp$;
    var accumulator = battleUnit;
    tmp$ = this.skills.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      accumulator = element.effectedCounterEffect_sv9jhu$(accumulator);
    }
    return accumulator;
  };
  ArmedHero.prototype.attackPlan_9jfrn9$ = function (fightPlan) {
    var tmp$;
    var accumulator = fightPlan;
    tmp$ = this.skills.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      accumulator = element.attackPlan_p6uegp$(accumulator);
    }
    return accumulator;
  };
  ArmedHero.prototype.counterPlan_9jfrn9$ = function (fightPlan) {
    var tmp$;
    var accumulator = fightPlan;
    tmp$ = this.skills.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      accumulator = element.counterPlan_p6uegp$(accumulator);
    }
    return accumulator;
  };
  ArmedHero.prototype.afterFightEffect_trfvk0$ = function (battleUnit) {
    var tmp$;
    var accumulator = battleUnit;
    tmp$ = this.skills.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      accumulator = element.afterFightEffect_sv9jhu$(accumulator);
    }
    return accumulator;
  };
  ArmedHero.prototype.reducedDamage_sv9jhu$ = function (battleUnit, damage) {
    var tmp$;
    var accumulator = battleUnit;
    tmp$ = this.skills.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      accumulator = element.reducedDamage_upjsjk$(accumulator, damage);
    }
    return accumulator;
  };
  ArmedHero.prototype.isMagicWeapon = function () {
    return this.baseHero.isMagicWeapon();
  };
  ArmedHero.prototype.have_gysh9z$ = function (weaponType, moveType) {
    return (weaponType == null || equals(this.baseHero.weaponType, weaponType)) && (moveType == null || equals(this.baseHero.moveType, moveType));
  };
  function ArmedHero$lvUpStatus$lambda(pair) {
    return -pair.first;
  }
  function ArmedHero$lvUpStatus$lambda_0(pair) {
    return -pair.first;
  }
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var wrapFunction = Kotlin.wrapFunction;
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  var Comparator = Kotlin.kotlin.Comparator;
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareBy$lambda_0 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Comparator$ObjectLiteral_0(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_0.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  ArmedHero.prototype.lvUpStatus_0 = function () {
    this.hpBoost = 0;
    this.atkBoost = 0;
    this.spdBoost = 0;
    this.defBoost = 0;
    this.resBoost = 0;
    if (this.rarity < 5) {
      var sortedRarityBonus = plus(sortedWith(listOf([new Pair(this.baseHero.attack + 0.4, BoonType$ATK_getInstance()), new Pair(this.baseHero.speed + 0.3, BoonType$SPD_getInstance()), new Pair(this.baseHero.defense + 0.2, BoonType$DEF_getInstance()), new Pair(this.baseHero.resistance + 0.1, BoonType$RES_getInstance())]), new Comparator$ObjectLiteral(compareBy$lambda(ArmedHero$lvUpStatus$lambda))), new Pair(this.baseHero.hitPoint + 0.5, BoonType$HP_getInstance()));
      var tmp$;
      tmp$ = until(0, ((this.rarity - 1 | 0) * 5 | 0) / 2 | 0).iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var tmp$_0;
        tmp$_0 = sortedRarityBonus.get_za3lpa$(element % 5).second;
        if (equals(tmp$_0, BoonType$HP_getInstance())) {
          this.hpBoost = this.hpBoost + 1 | 0;
        }
         else if (equals(tmp$_0, BoonType$ATK_getInstance())) {
          this.atkBoost = this.atkBoost + 1 | 0;
        }
         else if (equals(tmp$_0, BoonType$SPD_getInstance())) {
          this.spdBoost = this.spdBoost + 1 | 0;
        }
         else if (equals(tmp$_0, BoonType$DEF_getInstance())) {
          this.defBoost = this.defBoost + 1 | 0;
        }
         else if (equals(tmp$_0, BoonType$RES_getInstance())) {
          this.resBoost = this.resBoost + 1 | 0;
        }
         else if (!equals(tmp$_0, BoonType$NONE_getInstance()))
          Kotlin.noWhenBranchMatched();
      }
      this.hpBoost = this.hpBoost - 2 | 0;
      this.atkBoost = this.atkBoost - 2 | 0;
      this.spdBoost = this.spdBoost - 2 | 0;
      this.defBoost = this.defBoost - 2 | 0;
      this.resBoost = this.resBoost - 2 | 0;
    }
    var priority = sortedWith(listOf([new Pair((this.baseHero.hitPoint + this.boonHp | 0) + 0.5, BoonType$HP_getInstance()), new Pair((this.baseHero.attack + this.boonAtk | 0) + 0.4, BoonType$ATK_getInstance()), new Pair((this.baseHero.speed + this.boonSpd | 0) + 0.3, BoonType$SPD_getInstance()), new Pair((this.baseHero.defense + this.boonDef | 0) + 0.2, BoonType$DEF_getInstance()), new Pair((this.baseHero.resistance + this.boonRes | 0) + 0.1, BoonType$RES_getInstance())]), new Comparator$ObjectLiteral_0(compareBy$lambda_0(ArmedHero$lvUpStatus$lambda_0)));
    var tmp$_1;
    tmp$_1 = until(0, this.levelBoost * 2 | 0).iterator();
    while (tmp$_1.hasNext()) {
      var element_0 = tmp$_1.next();
      var tmp$_2;
      tmp$_2 = priority.get_za3lpa$(element_0 % 5).second;
      if (equals(tmp$_2, BoonType$HP_getInstance())) {
        this.hpBoost = this.hpBoost + 1 | 0;
      }
       else if (equals(tmp$_2, BoonType$ATK_getInstance())) {
        this.atkBoost = this.atkBoost + 1 | 0;
      }
       else if (equals(tmp$_2, BoonType$SPD_getInstance())) {
        this.spdBoost = this.spdBoost + 1 | 0;
      }
       else if (equals(tmp$_2, BoonType$DEF_getInstance())) {
        this.defBoost = this.defBoost + 1 | 0;
      }
       else if (equals(tmp$_2, BoonType$RES_getInstance())) {
        this.resBoost = this.resBoost + 1 | 0;
      }
       else if (!equals(tmp$_2, BoonType$NONE_getInstance()))
        Kotlin.noWhenBranchMatched();
    }
  };
  ArmedHero.prototype.equip = function () {
    this.hpEqp = 0;
    this.atkEqp = 0;
    this.spdEqp = 0;
    this.defEqp = 0;
    this.resEqp = 0;
    this.reduceSpecialCooldown = 0;
    this.lvUpStatus_0();
    var tmp$;
    var accumulator = this;
    tmp$ = this.skills.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      accumulator = element.equip_yukhz7$(accumulator);
    }
  };
  ArmedHero.prototype.lv1equip = function () {
    this.hpEqp = 0;
    this.atkEqp = 0;
    this.spdEqp = 0;
    this.defEqp = 0;
    this.resEqp = 0;
    this.reduceSpecialCooldown = 0;
    var $receiver = until(0, 5 - this.rarity | 0);
    var tmp$;
    var accumulator = this.baseHero.weaponType === WeaponType$STAFF_getInstance() ? Skill$Companion_getInstance().NONE : this.weapon;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      accumulator = accumulator.preSkill;
    }
    accumulator.equip_yukhz7$(this);
    var result = new BattleParam(this.boonedHp + this.hpEqp + this.hpBoost | 0, this.boonedAtk + this.atkEqp + this.atkBoost | 0, this.boonedSpd + this.spdEqp + this.spdBoost | 0, this.boonedDef + this.defEqp + this.defBoost | 0, this.boonedRes + this.resEqp + this.resBoost | 0);
    this.equip();
    return result;
  };
  ArmedHero.prototype.goodStatus = function () {
    return new BattleParam(this.growths.get_za3lpa$(this.rarity - 1 | 0).get_za3lpa$(this.baseHero.hpGrowth + 1 | 0) + this.growths.get_za3lpa$(this.rarity - 1 | 0).get_za3lpa$(this.baseHero.hpGrowth - 1 | 0) - (this.growths.get_za3lpa$(this.rarity - 1 | 0).get_za3lpa$(this.baseHero.hpGrowth) * 2 | 0) | 0, this.growths.get_za3lpa$(this.rarity - 1 | 0).get_za3lpa$(this.baseHero.atkGrowth + 1 | 0) + this.growths.get_za3lpa$(this.rarity - 1 | 0).get_za3lpa$(this.baseHero.atkGrowth - 1 | 0) - (this.growths.get_za3lpa$(this.rarity - 1 | 0).get_za3lpa$(this.baseHero.atkGrowth) * 2 | 0) | 0, this.growths.get_za3lpa$(this.rarity - 1 | 0).get_za3lpa$(this.baseHero.spdGrowth + 1 | 0) + this.growths.get_za3lpa$(this.rarity - 1 | 0).get_za3lpa$(this.baseHero.spdGrowth - 1 | 0) - (this.growths.get_za3lpa$(this.rarity - 1 | 0).get_za3lpa$(this.baseHero.spdGrowth) * 2 | 0) | 0, this.growths.get_za3lpa$(this.rarity - 1 | 0).get_za3lpa$(this.baseHero.defGrowth + 1 | 0) + this.growths.get_za3lpa$(this.rarity - 1 | 0).get_za3lpa$(this.baseHero.defGrowth - 1 | 0) - (this.growths.get_za3lpa$(this.rarity - 1 | 0).get_za3lpa$(this.baseHero.defGrowth) * 2 | 0) | 0, this.growths.get_za3lpa$(this.rarity - 1 | 0).get_za3lpa$(this.baseHero.resGrowth + 1 | 0) + this.growths.get_za3lpa$(this.rarity - 1 | 0).get_za3lpa$(this.baseHero.resGrowth - 1 | 0) - (this.growths.get_za3lpa$(this.rarity - 1 | 0).get_za3lpa$(this.baseHero.resGrowth) * 2 | 0) | 0);
  };
  ArmedHero.prototype.localeName_miixs2$ = function (locale) {
    var tmp$;
    if (this.name.length > 0)
      return this.name;
    if (equals(locale, Locale$JAPAN_getInstance()))
      tmp$ = this.baseHero.name;
    else if (equals(locale, Locale$JAPANESE_getInstance()))
      tmp$ = this.baseHero.name;
    else
      tmp$ = this.baseHero.usName;
    return tmp$;
  };
  ArmedHero.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArmedHero',
    interfaces: []
  };
  ArmedHero.prototype.component1 = function () {
    return this.baseHero;
  };
  ArmedHero.prototype.component2 = function () {
    return this.name;
  };
  ArmedHero.prototype.component3 = function () {
    return this.baseWeapon;
  };
  ArmedHero.prototype.component4 = function () {
    return this.refinedWeapon;
  };
  ArmedHero.prototype.component5 = function () {
    return this.assist;
  };
  ArmedHero.prototype.component6 = function () {
    return this.special;
  };
  ArmedHero.prototype.component7 = function () {
    return this.aSkill;
  };
  ArmedHero.prototype.component8 = function () {
    return this.bSkill;
  };
  ArmedHero.prototype.component9 = function () {
    return this.cSkill;
  };
  ArmedHero.prototype.component10 = function () {
    return this.seal;
  };
  ArmedHero.prototype.component11 = function () {
    return this.rarity;
  };
  ArmedHero.prototype.component12 = function () {
    return this.levelBoost;
  };
  ArmedHero.prototype.component13 = function () {
    return this.boon;
  };
  ArmedHero.prototype.component14 = function () {
    return this.bane;
  };
  ArmedHero.prototype.component15 = function () {
    return this.defensiveTerrain;
  };
  ArmedHero.prototype.component16 = function () {
    return this.atkBuff;
  };
  ArmedHero.prototype.component17 = function () {
    return this.spdBuff;
  };
  ArmedHero.prototype.component18 = function () {
    return this.defBuff;
  };
  ArmedHero.prototype.component19 = function () {
    return this.resBuff;
  };
  ArmedHero.prototype.component20 = function () {
    return this.atkSpur;
  };
  ArmedHero.prototype.component21 = function () {
    return this.spdSpur;
  };
  ArmedHero.prototype.component22 = function () {
    return this.defSpur;
  };
  ArmedHero.prototype.component23 = function () {
    return this.resSpur;
  };
  ArmedHero.prototype.copy_3ltboa$ = function (baseHero, name, baseWeapon, refinedWeapon, assist, special, aSkill, bSkill, cSkill, seal, rarity, levelBoost, boon, bane, defensiveTerrain, atkBuff, spdBuff, defBuff, resBuff, atkSpur, spdSpur, defSpur, resSpur) {
    return new ArmedHero(baseHero === void 0 ? this.baseHero : baseHero, name === void 0 ? this.name : name, baseWeapon === void 0 ? this.baseWeapon : baseWeapon, refinedWeapon === void 0 ? this.refinedWeapon : refinedWeapon, assist === void 0 ? this.assist : assist, special === void 0 ? this.special : special, aSkill === void 0 ? this.aSkill : aSkill, bSkill === void 0 ? this.bSkill : bSkill, cSkill === void 0 ? this.cSkill : cSkill, seal === void 0 ? this.seal : seal, rarity === void 0 ? this.rarity : rarity, levelBoost === void 0 ? this.levelBoost : levelBoost, boon === void 0 ? this.boon : boon, bane === void 0 ? this.bane : bane, defensiveTerrain === void 0 ? this.defensiveTerrain : defensiveTerrain, atkBuff === void 0 ? this.atkBuff : atkBuff, spdBuff === void 0 ? this.spdBuff : spdBuff, defBuff === void 0 ? this.defBuff : defBuff, resBuff === void 0 ? this.resBuff : resBuff, atkSpur === void 0 ? this.atkSpur : atkSpur, spdSpur === void 0 ? this.spdSpur : spdSpur, defSpur === void 0 ? this.defSpur : defSpur, resSpur === void 0 ? this.resSpur : resSpur);
  };
  ArmedHero.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.baseHero) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.baseWeapon) | 0;
    result = result * 31 + Kotlin.hashCode(this.refinedWeapon) | 0;
    result = result * 31 + Kotlin.hashCode(this.assist) | 0;
    result = result * 31 + Kotlin.hashCode(this.special) | 0;
    result = result * 31 + Kotlin.hashCode(this.aSkill) | 0;
    result = result * 31 + Kotlin.hashCode(this.bSkill) | 0;
    result = result * 31 + Kotlin.hashCode(this.cSkill) | 0;
    result = result * 31 + Kotlin.hashCode(this.seal) | 0;
    result = result * 31 + Kotlin.hashCode(this.rarity) | 0;
    result = result * 31 + Kotlin.hashCode(this.levelBoost) | 0;
    result = result * 31 + Kotlin.hashCode(this.boon) | 0;
    result = result * 31 + Kotlin.hashCode(this.bane) | 0;
    result = result * 31 + Kotlin.hashCode(this.defensiveTerrain) | 0;
    result = result * 31 + Kotlin.hashCode(this.atkBuff) | 0;
    result = result * 31 + Kotlin.hashCode(this.spdBuff) | 0;
    result = result * 31 + Kotlin.hashCode(this.defBuff) | 0;
    result = result * 31 + Kotlin.hashCode(this.resBuff) | 0;
    result = result * 31 + Kotlin.hashCode(this.atkSpur) | 0;
    result = result * 31 + Kotlin.hashCode(this.spdSpur) | 0;
    result = result * 31 + Kotlin.hashCode(this.defSpur) | 0;
    result = result * 31 + Kotlin.hashCode(this.resSpur) | 0;
    return result;
  };
  ArmedHero.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.baseHero, other.baseHero) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.baseWeapon, other.baseWeapon) && Kotlin.equals(this.refinedWeapon, other.refinedWeapon) && Kotlin.equals(this.assist, other.assist) && Kotlin.equals(this.special, other.special) && Kotlin.equals(this.aSkill, other.aSkill) && Kotlin.equals(this.bSkill, other.bSkill) && Kotlin.equals(this.cSkill, other.cSkill) && Kotlin.equals(this.seal, other.seal) && Kotlin.equals(this.rarity, other.rarity) && Kotlin.equals(this.levelBoost, other.levelBoost) && Kotlin.equals(this.boon, other.boon) && Kotlin.equals(this.bane, other.bane) && Kotlin.equals(this.defensiveTerrain, other.defensiveTerrain) && Kotlin.equals(this.atkBuff, other.atkBuff) && Kotlin.equals(this.spdBuff, other.spdBuff) && Kotlin.equals(this.defBuff, other.defBuff) && Kotlin.equals(this.resBuff, other.resBuff) && Kotlin.equals(this.atkSpur, other.atkSpur) && Kotlin.equals(this.spdSpur, other.spdSpur) && Kotlin.equals(this.defSpur, other.defSpur) && Kotlin.equals(this.resSpur, other.resSpur)))));
  };
  function ArmedHeroRepository() {
    ArmedHeroRepository_instance = this;
    this.repo = null;
  }
  ArmedHeroRepository.prototype.getById_61zpoe$ = function (id) {
    return StandardBaseHero_getInstance().containsKey_61zpoe$(id) ? new ArmedHero(ensureNotNull(StandardBaseHero_getInstance().get_61zpoe$(id))) : ensureNotNull(this.repo).getById_61zpoe$(id);
  };
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  ArmedHeroRepository.prototype.allItems_6taknv$ = function (includeDb) {
    if (includeDb === void 0)
      includeDb = false;
    var tmp$;
    if (includeDb) {
      var $receiver = StandardBaseHero_getInstance().allItems();
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination.add_11rb$(new ArmedHero(item));
      }
      tmp$ = toList(union(destination, ensureNotNull(this.repo).allItems()));
    }
     else {
      var $receiver_0 = StandardBaseHero_getInstance().allItems();
      var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_1;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var item_0 = tmp$_1.next();
        destination_0.add_11rb$(new ArmedHero(item_0));
      }
      tmp$ = destination_0;
    }
    return tmp$;
  };
  ArmedHeroRepository.prototype.isStandardBattleClass_61zpoe$ = function (id) {
    return StandardBaseHero_getInstance().containsKey_61zpoe$(id);
  };
  ArmedHeroRepository.prototype.createItem_7l4nap$ = function (battleHero) {
    return ensureNotNull(this.repo).createOrUpdate_11rb$(battleHero);
  };
  ArmedHeroRepository.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ArmedHeroRepository',
    interfaces: []
  };
  var ArmedHeroRepository_instance = null;
  function ArmedHeroRepository_getInstance() {
    if (ArmedHeroRepository_instance === null) {
      new ArmedHeroRepository();
    }
    return ArmedHeroRepository_instance;
  }
  function AttackResult(source, target, damage, sourceSpecial, targetSpecial, side) {
    if (side === void 0)
      side = SIDES$ATTACKER_getInstance();
    this.source = source;
    this.target = target;
    this.damage = damage;
    this.sourceSpecial = sourceSpecial;
    this.targetSpecial = targetSpecial;
    this.side = side;
  }
  AttackResult.prototype.flip = function () {
    return this.copy_ysg1qq$(this.target, this.source, void 0, void 0, void 0, SIDES$COUNTER_getInstance());
  };
  AttackResult.prototype.details = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if (equals(this.side, SIDES$ATTACKER_getInstance()))
      tmp$ = this.source.armedHero.name + ' attacks ' + this.damage + ' damage';
    else
      tmp$ = this.target.armedHero.name + ' attacks ' + this.damage + ' damage';
    return tmp$ + (this.sourceSpecial != null || this.targetSpecial != null ? ' wakeup ' + ((tmp$_1 = (tmp$_0 = this.sourceSpecial) != null ? tmp$_0.value : null) != null ? tmp$_1 : '') + ' ' + ((tmp$_3 = (tmp$_2 = this.targetSpecial) != null ? tmp$_2.value : null) != null ? tmp$_3 : '') : '');
  };
  AttackResult.prototype.detailsShort_4ylgoe$ = function (baseSide, locale) {
    var tmp$;
    if (equals(baseSide, this.side))
      tmp$ = '\u2193' + this.damage + ' ';
    else
      tmp$ = '\u2191' + this.damage + ' ';
    return tmp$ + (this.sourceSpecial != null ? '\u2606' + this.sourceSpecial.localeName_miixs2$(locale) + ' ' : '') + (this.targetSpecial != null ? '\u2606' + this.targetSpecial.localeName_miixs2$(locale) + ' ' : '');
  };
  AttackResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AttackResult',
    interfaces: []
  };
  AttackResult.prototype.component1 = function () {
    return this.source;
  };
  AttackResult.prototype.component2 = function () {
    return this.target;
  };
  AttackResult.prototype.component3 = function () {
    return this.damage;
  };
  AttackResult.prototype.component4 = function () {
    return this.sourceSpecial;
  };
  AttackResult.prototype.component5 = function () {
    return this.targetSpecial;
  };
  AttackResult.prototype.component6 = function () {
    return this.side;
  };
  AttackResult.prototype.copy_ysg1qq$ = function (source, target, damage, sourceSpecial, targetSpecial, side) {
    return new AttackResult(source === void 0 ? this.source : source, target === void 0 ? this.target : target, damage === void 0 ? this.damage : damage, sourceSpecial === void 0 ? this.sourceSpecial : sourceSpecial, targetSpecial === void 0 ? this.targetSpecial : targetSpecial, side === void 0 ? this.side : side);
  };
  AttackResult.prototype.toString = function () {
    return 'AttackResult(source=' + Kotlin.toString(this.source) + (', target=' + Kotlin.toString(this.target)) + (', damage=' + Kotlin.toString(this.damage)) + (', sourceSpecial=' + Kotlin.toString(this.sourceSpecial)) + (', targetSpecial=' + Kotlin.toString(this.targetSpecial)) + (', side=' + Kotlin.toString(this.side)) + ')';
  };
  AttackResult.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.source) | 0;
    result = result * 31 + Kotlin.hashCode(this.target) | 0;
    result = result * 31 + Kotlin.hashCode(this.damage) | 0;
    result = result * 31 + Kotlin.hashCode(this.sourceSpecial) | 0;
    result = result * 31 + Kotlin.hashCode(this.targetSpecial) | 0;
    result = result * 31 + Kotlin.hashCode(this.side) | 0;
    return result;
  };
  AttackResult.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.source, other.source) && Kotlin.equals(this.target, other.target) && Kotlin.equals(this.damage, other.damage) && Kotlin.equals(this.sourceSpecial, other.sourceSpecial) && Kotlin.equals(this.targetSpecial, other.targetSpecial) && Kotlin.equals(this.side, other.side)))));
  };
  function BaseHero(color, weaponType, moveType, minRarity, name, usName, hitPoint, attack, speed, defense, resistance, hpGrowth, atkGrowth, spdGrowth, defGrowth, resGrowth, weapon, assist, special, aSkill, bSkill, cSkill, seal) {
    if (color === void 0)
      color = 0;
    if (weaponType === void 0)
      weaponType = WeaponType$SWORD_getInstance();
    if (moveType === void 0)
      moveType = MoveType$INFANTRY_getInstance();
    if (minRarity === void 0)
      minRarity = 5;
    if (name === void 0)
      name = '';
    if (usName === void 0)
      usName = '';
    if (hitPoint === void 0)
      hitPoint = 0;
    if (attack === void 0)
      attack = 0;
    if (speed === void 0)
      speed = 0;
    if (defense === void 0)
      defense = 0;
    if (resistance === void 0)
      resistance = 0;
    if (hpGrowth === void 0)
      hpGrowth = 0;
    if (atkGrowth === void 0)
      atkGrowth = 0;
    if (spdGrowth === void 0)
      spdGrowth = 0;
    if (defGrowth === void 0)
      defGrowth = 0;
    if (resGrowth === void 0)
      resGrowth = 0;
    if (weapon === void 0)
      weapon = Skill$Companion_getInstance().NONE;
    if (assist === void 0)
      assist = Skill$Companion_getInstance().NONE;
    if (special === void 0)
      special = Skill$Companion_getInstance().NONE;
    if (aSkill === void 0)
      aSkill = Skill$Companion_getInstance().NONE;
    if (bSkill === void 0)
      bSkill = Skill$Companion_getInstance().NONE;
    if (cSkill === void 0)
      cSkill = Skill$Companion_getInstance().NONE;
    if (seal === void 0)
      seal = Skill$Companion_getInstance().NONE;
    this.color = color;
    this.weaponType = weaponType;
    this.moveType = moveType;
    this.minRarity = minRarity;
    this.name = name;
    this.usName = usName;
    this.hitPoint = hitPoint;
    this.attack = attack;
    this.speed = speed;
    this.defense = defense;
    this.resistance = resistance;
    this.hpGrowth = hpGrowth;
    this.atkGrowth = atkGrowth;
    this.spdGrowth = spdGrowth;
    this.defGrowth = defGrowth;
    this.resGrowth = resGrowth;
    this.weapon = weapon;
    this.assist = assist;
    this.special = special;
    this.aSkill = aSkill;
    this.bSkill = bSkill;
    this.cSkill = cSkill;
    this.seal = seal;
    this.growths = listOf([listOf([6, 8, 9, 11, 13, 14, 16, 18, 19, 21, 23, 24, 26, 0]), listOf([7, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 26, 28, 0]), listOf([7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 0]), listOf([8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 31, 33, 35, 0]), listOf([8, 10, 13, 15, 17, 19, 22, 24, 26, 28, 30, 33, 35, 37, 0])]);
  }
  Object.defineProperty(BaseHero.prototype, 'movableSteps', {
    get: function () {
      return this.moveType.steps;
    }
  });
  Object.defineProperty(BaseHero.prototype, 'effectiveRange', {
    get: function () {
      return this.weaponType.range;
    }
  });
  BaseHero.prototype.isMagicWeapon = function () {
    return this.weaponType === WeaponType$RTOME_getInstance() || this.weaponType === WeaponType$GTOME_getInstance() || this.weaponType === WeaponType$BTOME_getInstance();
  };
  BaseHero.prototype.clone = function () {
    return new BaseHero(this.color, this.weaponType, this.moveType, this.minRarity, this.name, this.usName, this.hitPoint, this.attack, this.speed, this.defense, this.resistance, this.hpGrowth, this.atkGrowth, this.spdGrowth, this.defGrowth, this.resGrowth, this.weapon, this.assist, this.special, this.aSkill, this.bSkill, this.cSkill, this.seal);
  };
  BaseHero.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseHero',
    interfaces: []
  };
  function BattleParam(hp, atk, spd, def, res) {
    this.hp = hp;
    this.atk = atk;
    this.spd = spd;
    this.def = def;
    this.res = res;
  }
  BattleParam.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BattleParam',
    interfaces: []
  };
  BattleParam.prototype.component1 = function () {
    return this.hp;
  };
  BattleParam.prototype.component2 = function () {
    return this.atk;
  };
  BattleParam.prototype.component3 = function () {
    return this.spd;
  };
  BattleParam.prototype.component4 = function () {
    return this.def;
  };
  BattleParam.prototype.component5 = function () {
    return this.res;
  };
  BattleParam.prototype.copy_4qozqa$ = function (hp, atk, spd, def, res) {
    return new BattleParam(hp === void 0 ? this.hp : hp, atk === void 0 ? this.atk : atk, spd === void 0 ? this.spd : spd, def === void 0 ? this.def : def, res === void 0 ? this.res : res);
  };
  BattleParam.prototype.toString = function () {
    return 'BattleParam(hp=' + Kotlin.toString(this.hp) + (', atk=' + Kotlin.toString(this.atk)) + (', spd=' + Kotlin.toString(this.spd)) + (', def=' + Kotlin.toString(this.def)) + (', res=' + Kotlin.toString(this.res)) + ')';
  };
  BattleParam.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.hp) | 0;
    result = result * 31 + Kotlin.hashCode(this.atk) | 0;
    result = result * 31 + Kotlin.hashCode(this.spd) | 0;
    result = result * 31 + Kotlin.hashCode(this.def) | 0;
    result = result * 31 + Kotlin.hashCode(this.res) | 0;
    return result;
  };
  BattleParam.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.hp, other.hp) && Kotlin.equals(this.atk, other.atk) && Kotlin.equals(this.spd, other.spd) && Kotlin.equals(this.def, other.def) && Kotlin.equals(this.res, other.res)))));
  };
  function BattleUnit(armedHero, hp, specialCount, atkBuff, spdBuff, defBuff, resBuff, atkDebuff, spdDebuff, defDebuff, resDebuff, atkEffect, spdEffect, defEffect, resEffect, side, phantomSpeed, accelerateAttackCooldown, accelerateTargetCooldown, InflictCooldown, followupable, antiFollowup, doubleAttack, colorlessAdvantage, colorAdvantageLevel, antiColorAdvantage, effectiveAgainst, counterAllRange, cannotCcounter, antiBuffBonus, hpLossAtEndOfFight, blade, defensiveTerrain, disableChangePlan, wrathfulStaff, oneTimeOnlyAdditionalDamage) {
    if (hp === void 0)
      hp = 0;
    if (specialCount === void 0)
      specialCount = 0;
    if (atkBuff === void 0)
      atkBuff = 0;
    if (spdBuff === void 0)
      spdBuff = 0;
    if (defBuff === void 0)
      defBuff = 0;
    if (resBuff === void 0)
      resBuff = 0;
    if (atkDebuff === void 0)
      atkDebuff = 0;
    if (spdDebuff === void 0)
      spdDebuff = 0;
    if (defDebuff === void 0)
      defDebuff = 0;
    if (resDebuff === void 0)
      resDebuff = 0;
    if (atkEffect === void 0)
      atkEffect = 0;
    if (spdEffect === void 0)
      spdEffect = 0;
    if (defEffect === void 0)
      defEffect = 0;
    if (resEffect === void 0)
      resEffect = 0;
    if (side === void 0)
      side = SIDES$NONE_getInstance();
    if (phantomSpeed === void 0)
      phantomSpeed = 0;
    if (accelerateAttackCooldown === void 0)
      accelerateAttackCooldown = 0;
    if (accelerateTargetCooldown === void 0)
      accelerateTargetCooldown = 0;
    if (InflictCooldown === void 0)
      InflictCooldown = 0;
    if (followupable === void 0)
      followupable = false;
    if (antiFollowup === void 0)
      antiFollowup = false;
    if (doubleAttack === void 0)
      doubleAttack = false;
    if (colorlessAdvantage === void 0)
      colorlessAdvantage = false;
    if (colorAdvantageLevel === void 0)
      colorAdvantageLevel = 0;
    if (antiColorAdvantage === void 0)
      antiColorAdvantage = 1;
    if (effectiveAgainst === void 0)
      effectiveAgainst = EffectiveAgainst$NONE_getInstance();
    if (counterAllRange === void 0)
      counterAllRange = false;
    if (cannotCcounter === void 0)
      cannotCcounter = false;
    if (antiBuffBonus === void 0)
      antiBuffBonus = false;
    if (hpLossAtEndOfFight === void 0)
      hpLossAtEndOfFight = 0;
    if (blade === void 0)
      blade = false;
    if (defensiveTerrain === void 0)
      defensiveTerrain = false;
    if (disableChangePlan === void 0)
      disableChangePlan = false;
    if (wrathfulStaff === void 0)
      wrathfulStaff = false;
    if (oneTimeOnlyAdditionalDamage === void 0)
      oneTimeOnlyAdditionalDamage = 0;
    this.armedHero = armedHero;
    this.hp = hp;
    this.specialCount = specialCount;
    this.atkBuff = atkBuff;
    this.spdBuff = spdBuff;
    this.defBuff = defBuff;
    this.resBuff = resBuff;
    this.atkDebuff = atkDebuff;
    this.spdDebuff = spdDebuff;
    this.defDebuff = defDebuff;
    this.resDebuff = resDebuff;
    this.atkEffect = atkEffect;
    this.spdEffect = spdEffect;
    this.defEffect = defEffect;
    this.resEffect = resEffect;
    this.side = side;
    this.phantomSpeed = phantomSpeed;
    this.accelerateAttackCooldown = accelerateAttackCooldown;
    this.accelerateTargetCooldown = accelerateTargetCooldown;
    this.InflictCooldown = InflictCooldown;
    this.followupable = followupable;
    this.antiFollowup = antiFollowup;
    this.doubleAttack = doubleAttack;
    this.colorlessAdvantage = colorlessAdvantage;
    this.colorAdvantageLevel = colorAdvantageLevel;
    this.antiColorAdvantage = antiColorAdvantage;
    this.effectiveAgainst = effectiveAgainst;
    this.counterAllRange = counterAllRange;
    this.cannotCcounter = cannotCcounter;
    this.antiBuffBonus = antiBuffBonus;
    this.hpLossAtEndOfFight = hpLossAtEndOfFight;
    this.blade = blade;
    this.defensiveTerrain = defensiveTerrain;
    this.disableChangePlan = disableChangePlan;
    this.wrathfulStaff = wrathfulStaff;
    this.oneTimeOnlyAdditionalDamage = oneTimeOnlyAdditionalDamage;
    this.enemy = null;
  }
  Object.defineProperty(BattleUnit.prototype, 'movableSteps', {
    get: function () {
      return this.armedHero.movableSteps;
    }
  });
  Object.defineProperty(BattleUnit.prototype, 'effectiveRange', {
    get: function () {
      return this.armedHero.effectiveRange;
    }
  });
  Object.defineProperty(BattleUnit.prototype, 'atk', {
    get: function () {
      return this.armedHero.atk + this.atkDebuff + (!this.antiBuffBonus ? this.atkBuff : 0) | 0;
    }
  });
  Object.defineProperty(BattleUnit.prototype, 'spd', {
    get: function () {
      return this.armedHero.spd + this.spdDebuff + (!this.antiBuffBonus ? this.spdBuff : 0) | 0;
    }
  });
  Object.defineProperty(BattleUnit.prototype, 'def', {
    get: function () {
      return this.armedHero.def + this.defDebuff + (!this.antiBuffBonus ? this.defBuff : 0) | 0;
    }
  });
  Object.defineProperty(BattleUnit.prototype, 'res', {
    get: function () {
      return this.armedHero.res + this.resDebuff + (!this.antiBuffBonus ? this.resBuff : 0) | 0;
    }
  });
  Object.defineProperty(BattleUnit.prototype, 'effectedAtk', {
    get: function () {
      return this.atk + this.atkEffect | 0;
    }
  });
  Object.defineProperty(BattleUnit.prototype, 'effectedSpd', {
    get: function () {
      return this.spd + this.spdEffect | 0;
    }
  });
  Object.defineProperty(BattleUnit.prototype, 'effectedDef', {
    get: function () {
      return this.def + this.defEffect | 0;
    }
  });
  Object.defineProperty(BattleUnit.prototype, 'effectedRes', {
    get: function () {
      return this.res + this.resEffect | 0;
    }
  });
  Object.defineProperty(BattleUnit.prototype, 'effectedBladeAtk', {
    get: function () {
      return this.effectedAtk + (this.blade && !this.antiBuffBonus ? this.atkBuff + this.spdBuff + this.defBuff + this.resBuff | 0 : 0) | 0;
    }
  });
  Object.defineProperty(BattleUnit.prototype, 'effectedPhantomSpd', {
    get: function () {
      return this.effectedSpd + this.phantomSpeed | 0;
    }
  });
  BattleUnit.prototype.clearEffect = function () {
    this.atkEffect = 0;
    this.spdEffect = 0;
    this.defEffect = 0;
    this.resEffect = 0;
  };
  BattleUnit.prototype.buffAtk_za3lpa$ = function (buff) {
    this.atkBuff = buff > this.atkBuff ? buff : this.atkBuff;
  };
  BattleUnit.prototype.buffSpd_za3lpa$ = function (buff) {
    this.spdBuff = buff > this.spdBuff ? buff : this.spdBuff;
  };
  BattleUnit.prototype.buffDef_za3lpa$ = function (buff) {
    this.defBuff = buff > this.defBuff ? buff : this.defBuff;
  };
  BattleUnit.prototype.buffRes_za3lpa$ = function (buff) {
    this.resBuff = buff > this.resBuff ? buff : this.resBuff;
  };
  BattleUnit.prototype.bothEffect = function () {
    return this.armedHero.bothEffect_trfvk0$(this);
  };
  BattleUnit.prototype.attackEffect = function () {
    return this.armedHero.attackEffect_trfvk0$(this);
  };
  BattleUnit.prototype.counterEffect = function () {
    return this.armedHero.counterEffect_trfvk0$(this);
  };
  BattleUnit.prototype.effectedAttackEffect = function () {
    return this.armedHero.effectedAttackEffect_trfvk0$(this);
  };
  BattleUnit.prototype.effectedCcounterEffect = function () {
    return this.armedHero.effectedCcounterEffect_trfvk0$(this);
  };
  BattleUnit.prototype.afterFightEffect = function () {
    this.lossHp_za3lpa$(this.hpLossAtEndOfFight);
    this.armedHero.afterFightEffect_trfvk0$(this);
  };
  BattleUnit.prototype.reducedDamage_za3lpa$ = function (damage) {
    this.oneTimeOnlyAdditionalDamage = 0;
    this.armedHero.reducedDamage_sv9jhu$(this, damage);
  };
  BattleUnit.prototype.fight_trfvk0$ = function (targetUnit) {
    var source = this.copy_vp8c0q$();
    var target = targetUnit.copy_vp8c0q$();
    source.enemy = target;
    target.enemy = source;
    var fightPlan = this.fightPlan_8n9n3g$(source, target);
    return fightPlan.fight();
  };
  BattleUnit.prototype.fightPlan_8n9n3g$ = function (battleUnit, targetUnit) {
    var effectedAttacker = battleUnit.bothEffect().attackEffect();
    var effectedTarget = targetUnit.bothEffect().counterEffect();
    return (new FightPlan(effectedAttacker.effectedAttackEffect(), effectedTarget.effectedCcounterEffect())).planning();
  };
  BattleUnit.prototype.attackPlan_9jfrn9$ = function (fightPlan) {
    return this.disableChangePlan ? fightPlan : this.armedHero.attackPlan_9jfrn9$(fightPlan);
  };
  BattleUnit.prototype.counterPlan_9jfrn9$ = function (fightPlan) {
    return this.disableChangePlan ? fightPlan : this.armedHero.counterPlan_9jfrn9$(fightPlan);
  };
  BattleUnit.prototype.fightAndAfterEffect_trfvk0$ = function (targetUnit) {
    var result = this.fight_trfvk0$(targetUnit);
    last(result).source.afterFightEffect();
    last(result).target.afterFightEffect();
    return result;
  };
  BattleUnit.prototype.attack_dayeuq$ = function (target, results) {
    var tmp$, tmp$_0;
    var damage = this.damage_dayeuq$(target, results);
    var preventedDamage = target.preventBySkill_hqdydw$(damage.first, results);
    target.reducedDamage_za3lpa$(damage.first - preventedDamage.first | 0);
    (tmp$ = damage.second) != null ? tmp$.absorb_6zcyla$(this, target, target.hp > preventedDamage.first ? preventedDamage.first : target.hp) : null;
    if (target.hp > preventedDamage.first) {
      tmp$_0 = target.hp - preventedDamage.first | 0;
    }
     else {
      tmp$_0 = 0;
    }
    target.hp = tmp$_0;
    return new AttackResult(this, target, preventedDamage.first, damage.second, preventedDamage.second);
  };
  BattleUnit.prototype.damage_dayeuq$ = function (target, results) {
    if (this.specialCount === this.armedHero.specialCoolDownTime) {
      var damage = this.armedHero.special.damage_96237r$(this, target, results);
      this.specialCount = damage.second != null ? 0 : this.specialCount;
      var tmp$;
      if (damage.second != null) {
        var tmp$_0 = damage.first;
        var tmp$_1;
        var accumulator = 0;
        tmp$_1 = this.armedHero.skills.iterator();
        while (tmp$_1.hasNext()) {
          var element = tmp$_1.next();
          accumulator = element.specialTriggered_upjsjk$(this, accumulator);
        }
        tmp$ = new Pair(tmp$_0 + accumulator | 0, damage.second);
      }
       else
        tmp$ = damage;
      return tmp$;
    }
    this.specialCount = this.specialCount + ((this.accelerateAttackCooldown + 1 | 0) > this.InflictCooldown ? this.accelerateAttackCooldown + 1 - this.InflictCooldown | 0 : 0) | 0;
    this.specialCount = this.specialCount > this.armedHero.specialCoolDownTime ? this.armedHero.specialCoolDownTime : this.specialCount;
    return Skill$Companion_getInstance().NONE.damage_96237r$(this, target, results, null);
  };
  BattleUnit.prototype.effectedPrevent_urha4z$ = function (weaponType) {
    return weaponType === Skill$SkillType$REFINED_DRAGON_getInstance() && this.armedHero.baseHero.weaponType.range === 2 ? this.effectedDef < this.effectedRes ? this.effectedDef : this.effectedRes : ensureNotNull(weaponType.weaponType).isMaterial ? this.effectedDef : this.effectedRes;
  };
  BattleUnit.prototype.halfByStaff_za3lpa$ = function (damage) {
    return damage - (this.armedHero.baseHero.weaponType === WeaponType$STAFF_getInstance() && !this.wrathfulStaff ? damage / 2 | 0 : 0) | 0;
  };
  BattleUnit.prototype.preventByDefResTerrain_6sdwnf$ = function (damage, weaponType, mitModPercent) {
    if (mitModPercent === void 0)
      mitModPercent = 0;
    return damage - (Kotlin.imul(this.effectedPrevent_urha4z$(weaponType), this.defensiveTerrain ? 130 : 100) / 100 | 0) + (Kotlin.imul(this.effectedPrevent_urha4z$(weaponType), mitModPercent) / 100 | 0) | 0;
  };
  BattleUnit.prototype.preventBySkill_hqdydw$ = function (damage, results) {
    var tmp$;
    var accumulator = damage;
    tmp$ = this.armedHero.skills.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      accumulator = element.prevent_w6mj9q$(this, accumulator, results);
    }
    var prevented = accumulator;
    if (this.specialCount === this.armedHero.specialCoolDownTime) {
      var specialPrevented = this.armedHero.special.specialPrevent_upjsjk$(this, prevented);
      this.specialCount = specialPrevented.second != null ? 0 : this.specialCount;
      return specialPrevented;
    }
    this.specialCount = this.specialCount + ((this.accelerateTargetCooldown + 1 | 0) > this.InflictCooldown ? this.accelerateTargetCooldown + 1 - this.InflictCooldown | 0 : 0) | 0;
    this.specialCount = this.specialCount > this.armedHero.specialCoolDownTime ? this.armedHero.specialCoolDownTime : this.specialCount;
    return new Pair(prevented, null);
  };
  BattleUnit.prototype.colorAdvantage = function () {
    var colorDiff = ensureNotNull(this.enemy).armedHero.baseHero.color - this.armedHero.baseHero.color | 0;
    return this.colorlessAdvantage && ensureNotNull(this.enemy).armedHero.baseHero.color === 0 ? 1 : ensureNotNull(this.enemy).colorlessAdvantage && this.armedHero.baseHero.color === 0 ? -1 : ensureNotNull(this.enemy).armedHero.baseHero.color === 0 || this.armedHero.baseHero.color === 0 || colorDiff === 0 ? 0 : colorDiff === -1 || colorDiff === 2 ? 1 : colorDiff === 1 || colorDiff === -2 ? -1 : 0;
  };
  BattleUnit.prototype.colorAttack = function () {
    var advantageLevel = this.colorAdvantageLevel >= ensureNotNull(this.enemy).colorAdvantageLevel ? this.colorAdvantageLevel : ensureNotNull(this.enemy).colorAdvantageLevel;
    var colorAd = this.colorAdvantage();
    var colorPow = Kotlin.imul(advantageLevel === 0 ? 20 : Kotlin.imul((advantageLevel * 5 | 0) + 5 | 0, this.antiColorAdvantage) + 20 | 0, colorAd);
    var effectiveDamage = Kotlin.imul(this.effectedBladeAtk, this.effectiveAgainst !== EffectiveAgainst$NONE_getInstance() ? 15 : 10) / 10 | 0;
    return effectiveDamage + (Kotlin.imul(effectiveDamage, colorPow) / 100 | 0) | 0;
  };
  BattleUnit.prototype.heal_za3lpa$ = function (life) {
    this.hp = this.hp + life | 0;
    if (this.hp > this.armedHero.maxHp) {
      this.hp = this.armedHero.maxHp;
    }
    return life;
  };
  BattleUnit.prototype.lossHp_za3lpa$ = function (damage) {
    var tmp$;
    if (this.hp <= 0)
      tmp$ = 0;
    else if ((new IntRange(1, damage)).contains_mef7kx$(this.hp))
      tmp$ = 1;
    else
      tmp$ = this.hp - damage | 0;
    this.hp = tmp$;
    return damage;
  };
  BattleUnit.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BattleUnit',
    interfaces: []
  };
  BattleUnit.prototype.component1 = function () {
    return this.armedHero;
  };
  BattleUnit.prototype.component2 = function () {
    return this.hp;
  };
  BattleUnit.prototype.component3 = function () {
    return this.specialCount;
  };
  BattleUnit.prototype.component4 = function () {
    return this.atkBuff;
  };
  BattleUnit.prototype.component5 = function () {
    return this.spdBuff;
  };
  BattleUnit.prototype.component6 = function () {
    return this.defBuff;
  };
  BattleUnit.prototype.component7 = function () {
    return this.resBuff;
  };
  BattleUnit.prototype.component8 = function () {
    return this.atkDebuff;
  };
  BattleUnit.prototype.component9 = function () {
    return this.spdDebuff;
  };
  BattleUnit.prototype.component10 = function () {
    return this.defDebuff;
  };
  BattleUnit.prototype.component11 = function () {
    return this.resDebuff;
  };
  BattleUnit.prototype.component12 = function () {
    return this.atkEffect;
  };
  BattleUnit.prototype.component13 = function () {
    return this.spdEffect;
  };
  BattleUnit.prototype.component14 = function () {
    return this.defEffect;
  };
  BattleUnit.prototype.component15 = function () {
    return this.resEffect;
  };
  BattleUnit.prototype.component16 = function () {
    return this.side;
  };
  BattleUnit.prototype.component17 = function () {
    return this.phantomSpeed;
  };
  BattleUnit.prototype.component18 = function () {
    return this.accelerateAttackCooldown;
  };
  BattleUnit.prototype.component19 = function () {
    return this.accelerateTargetCooldown;
  };
  BattleUnit.prototype.component20 = function () {
    return this.InflictCooldown;
  };
  BattleUnit.prototype.component21 = function () {
    return this.followupable;
  };
  BattleUnit.prototype.component22 = function () {
    return this.antiFollowup;
  };
  BattleUnit.prototype.component23 = function () {
    return this.doubleAttack;
  };
  BattleUnit.prototype.component24 = function () {
    return this.colorlessAdvantage;
  };
  BattleUnit.prototype.component25 = function () {
    return this.colorAdvantageLevel;
  };
  BattleUnit.prototype.component26 = function () {
    return this.antiColorAdvantage;
  };
  BattleUnit.prototype.component27 = function () {
    return this.effectiveAgainst;
  };
  BattleUnit.prototype.component28 = function () {
    return this.counterAllRange;
  };
  BattleUnit.prototype.component29 = function () {
    return this.cannotCcounter;
  };
  BattleUnit.prototype.component30 = function () {
    return this.antiBuffBonus;
  };
  BattleUnit.prototype.component31 = function () {
    return this.hpLossAtEndOfFight;
  };
  BattleUnit.prototype.component32 = function () {
    return this.blade;
  };
  BattleUnit.prototype.component33 = function () {
    return this.defensiveTerrain;
  };
  BattleUnit.prototype.component34 = function () {
    return this.disableChangePlan;
  };
  BattleUnit.prototype.component35 = function () {
    return this.wrathfulStaff;
  };
  BattleUnit.prototype.component36 = function () {
    return this.oneTimeOnlyAdditionalDamage;
  };
  BattleUnit.prototype.copy_vp8c0q$ = function (armedHero, hp, specialCount, atkBuff, spdBuff, defBuff, resBuff, atkDebuff, spdDebuff, defDebuff, resDebuff, atkEffect, spdEffect, defEffect, resEffect, side, phantomSpeed, accelerateAttackCooldown, accelerateTargetCooldown, InflictCooldown, followupable, antiFollowup, doubleAttack, colorlessAdvantage, colorAdvantageLevel, antiColorAdvantage, effectiveAgainst, counterAllRange, cannotCcounter, antiBuffBonus, hpLossAtEndOfFight, blade, defensiveTerrain, disableChangePlan, wrathfulStaff, oneTimeOnlyAdditionalDamage) {
    return new BattleUnit(armedHero === void 0 ? this.armedHero : armedHero, hp === void 0 ? this.hp : hp, specialCount === void 0 ? this.specialCount : specialCount, atkBuff === void 0 ? this.atkBuff : atkBuff, spdBuff === void 0 ? this.spdBuff : spdBuff, defBuff === void 0 ? this.defBuff : defBuff, resBuff === void 0 ? this.resBuff : resBuff, atkDebuff === void 0 ? this.atkDebuff : atkDebuff, spdDebuff === void 0 ? this.spdDebuff : spdDebuff, defDebuff === void 0 ? this.defDebuff : defDebuff, resDebuff === void 0 ? this.resDebuff : resDebuff, atkEffect === void 0 ? this.atkEffect : atkEffect, spdEffect === void 0 ? this.spdEffect : spdEffect, defEffect === void 0 ? this.defEffect : defEffect, resEffect === void 0 ? this.resEffect : resEffect, side === void 0 ? this.side : side, phantomSpeed === void 0 ? this.phantomSpeed : phantomSpeed, accelerateAttackCooldown === void 0 ? this.accelerateAttackCooldown : accelerateAttackCooldown, accelerateTargetCooldown === void 0 ? this.accelerateTargetCooldown : accelerateTargetCooldown, InflictCooldown === void 0 ? this.InflictCooldown : InflictCooldown, followupable === void 0 ? this.followupable : followupable, antiFollowup === void 0 ? this.antiFollowup : antiFollowup, doubleAttack === void 0 ? this.doubleAttack : doubleAttack, colorlessAdvantage === void 0 ? this.colorlessAdvantage : colorlessAdvantage, colorAdvantageLevel === void 0 ? this.colorAdvantageLevel : colorAdvantageLevel, antiColorAdvantage === void 0 ? this.antiColorAdvantage : antiColorAdvantage, effectiveAgainst === void 0 ? this.effectiveAgainst : effectiveAgainst, counterAllRange === void 0 ? this.counterAllRange : counterAllRange, cannotCcounter === void 0 ? this.cannotCcounter : cannotCcounter, antiBuffBonus === void 0 ? this.antiBuffBonus : antiBuffBonus, hpLossAtEndOfFight === void 0 ? this.hpLossAtEndOfFight : hpLossAtEndOfFight, blade === void 0 ? this.blade : blade, defensiveTerrain === void 0 ? this.defensiveTerrain : defensiveTerrain, disableChangePlan === void 0 ? this.disableChangePlan : disableChangePlan, wrathfulStaff === void 0 ? this.wrathfulStaff : wrathfulStaff, oneTimeOnlyAdditionalDamage === void 0 ? this.oneTimeOnlyAdditionalDamage : oneTimeOnlyAdditionalDamage);
  };
  BattleUnit.prototype.toString = function () {
    return 'BattleUnit(armedHero=' + Kotlin.toString(this.armedHero) + (', hp=' + Kotlin.toString(this.hp)) + (', specialCount=' + Kotlin.toString(this.specialCount)) + (', atkBuff=' + Kotlin.toString(this.atkBuff)) + (', spdBuff=' + Kotlin.toString(this.spdBuff)) + (', defBuff=' + Kotlin.toString(this.defBuff)) + (', resBuff=' + Kotlin.toString(this.resBuff)) + (', atkDebuff=' + Kotlin.toString(this.atkDebuff)) + (', spdDebuff=' + Kotlin.toString(this.spdDebuff)) + (', defDebuff=' + Kotlin.toString(this.defDebuff)) + (', resDebuff=' + Kotlin.toString(this.resDebuff)) + (', atkEffect=' + Kotlin.toString(this.atkEffect)) + (', spdEffect=' + Kotlin.toString(this.spdEffect)) + (', defEffect=' + Kotlin.toString(this.defEffect)) + (', resEffect=' + Kotlin.toString(this.resEffect)) + (', side=' + Kotlin.toString(this.side)) + (', phantomSpeed=' + Kotlin.toString(this.phantomSpeed)) + (', accelerateAttackCooldown=' + Kotlin.toString(this.accelerateAttackCooldown)) + (', accelerateTargetCooldown=' + Kotlin.toString(this.accelerateTargetCooldown)) + (', InflictCooldown=' + Kotlin.toString(this.InflictCooldown)) + (', followupable=' + Kotlin.toString(this.followupable)) + (', antiFollowup=' + Kotlin.toString(this.antiFollowup)) + (', doubleAttack=' + Kotlin.toString(this.doubleAttack)) + (', colorlessAdvantage=' + Kotlin.toString(this.colorlessAdvantage)) + (', colorAdvantageLevel=' + Kotlin.toString(this.colorAdvantageLevel)) + (', antiColorAdvantage=' + Kotlin.toString(this.antiColorAdvantage)) + (', effectiveAgainst=' + Kotlin.toString(this.effectiveAgainst)) + (', counterAllRange=' + Kotlin.toString(this.counterAllRange)) + (', cannotCcounter=' + Kotlin.toString(this.cannotCcounter)) + (', antiBuffBonus=' + Kotlin.toString(this.antiBuffBonus)) + (', hpLossAtEndOfFight=' + Kotlin.toString(this.hpLossAtEndOfFight)) + (', blade=' + Kotlin.toString(this.blade)) + (', defensiveTerrain=' + Kotlin.toString(this.defensiveTerrain)) + (', disableChangePlan=' + Kotlin.toString(this.disableChangePlan)) + (', wrathfulStaff=' + Kotlin.toString(this.wrathfulStaff)) + (', oneTimeOnlyAdditionalDamage=' + Kotlin.toString(this.oneTimeOnlyAdditionalDamage)) + ')';
  };
  BattleUnit.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.armedHero) | 0;
    result = result * 31 + Kotlin.hashCode(this.hp) | 0;
    result = result * 31 + Kotlin.hashCode(this.specialCount) | 0;
    result = result * 31 + Kotlin.hashCode(this.atkBuff) | 0;
    result = result * 31 + Kotlin.hashCode(this.spdBuff) | 0;
    result = result * 31 + Kotlin.hashCode(this.defBuff) | 0;
    result = result * 31 + Kotlin.hashCode(this.resBuff) | 0;
    result = result * 31 + Kotlin.hashCode(this.atkDebuff) | 0;
    result = result * 31 + Kotlin.hashCode(this.spdDebuff) | 0;
    result = result * 31 + Kotlin.hashCode(this.defDebuff) | 0;
    result = result * 31 + Kotlin.hashCode(this.resDebuff) | 0;
    result = result * 31 + Kotlin.hashCode(this.atkEffect) | 0;
    result = result * 31 + Kotlin.hashCode(this.spdEffect) | 0;
    result = result * 31 + Kotlin.hashCode(this.defEffect) | 0;
    result = result * 31 + Kotlin.hashCode(this.resEffect) | 0;
    result = result * 31 + Kotlin.hashCode(this.side) | 0;
    result = result * 31 + Kotlin.hashCode(this.phantomSpeed) | 0;
    result = result * 31 + Kotlin.hashCode(this.accelerateAttackCooldown) | 0;
    result = result * 31 + Kotlin.hashCode(this.accelerateTargetCooldown) | 0;
    result = result * 31 + Kotlin.hashCode(this.InflictCooldown) | 0;
    result = result * 31 + Kotlin.hashCode(this.followupable) | 0;
    result = result * 31 + Kotlin.hashCode(this.antiFollowup) | 0;
    result = result * 31 + Kotlin.hashCode(this.doubleAttack) | 0;
    result = result * 31 + Kotlin.hashCode(this.colorlessAdvantage) | 0;
    result = result * 31 + Kotlin.hashCode(this.colorAdvantageLevel) | 0;
    result = result * 31 + Kotlin.hashCode(this.antiColorAdvantage) | 0;
    result = result * 31 + Kotlin.hashCode(this.effectiveAgainst) | 0;
    result = result * 31 + Kotlin.hashCode(this.counterAllRange) | 0;
    result = result * 31 + Kotlin.hashCode(this.cannotCcounter) | 0;
    result = result * 31 + Kotlin.hashCode(this.antiBuffBonus) | 0;
    result = result * 31 + Kotlin.hashCode(this.hpLossAtEndOfFight) | 0;
    result = result * 31 + Kotlin.hashCode(this.blade) | 0;
    result = result * 31 + Kotlin.hashCode(this.defensiveTerrain) | 0;
    result = result * 31 + Kotlin.hashCode(this.disableChangePlan) | 0;
    result = result * 31 + Kotlin.hashCode(this.wrathfulStaff) | 0;
    result = result * 31 + Kotlin.hashCode(this.oneTimeOnlyAdditionalDamage) | 0;
    return result;
  };
  BattleUnit.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.armedHero, other.armedHero) && Kotlin.equals(this.hp, other.hp) && Kotlin.equals(this.specialCount, other.specialCount) && Kotlin.equals(this.atkBuff, other.atkBuff) && Kotlin.equals(this.spdBuff, other.spdBuff) && Kotlin.equals(this.defBuff, other.defBuff) && Kotlin.equals(this.resBuff, other.resBuff) && Kotlin.equals(this.atkDebuff, other.atkDebuff) && Kotlin.equals(this.spdDebuff, other.spdDebuff) && Kotlin.equals(this.defDebuff, other.defDebuff) && Kotlin.equals(this.resDebuff, other.resDebuff) && Kotlin.equals(this.atkEffect, other.atkEffect) && Kotlin.equals(this.spdEffect, other.spdEffect) && Kotlin.equals(this.defEffect, other.defEffect) && Kotlin.equals(this.resEffect, other.resEffect) && Kotlin.equals(this.side, other.side) && Kotlin.equals(this.phantomSpeed, other.phantomSpeed) && Kotlin.equals(this.accelerateAttackCooldown, other.accelerateAttackCooldown) && Kotlin.equals(this.accelerateTargetCooldown, other.accelerateTargetCooldown) && Kotlin.equals(this.InflictCooldown, other.InflictCooldown) && Kotlin.equals(this.followupable, other.followupable) && Kotlin.equals(this.antiFollowup, other.antiFollowup) && Kotlin.equals(this.doubleAttack, other.doubleAttack) && Kotlin.equals(this.colorlessAdvantage, other.colorlessAdvantage) && Kotlin.equals(this.colorAdvantageLevel, other.colorAdvantageLevel) && Kotlin.equals(this.antiColorAdvantage, other.antiColorAdvantage) && Kotlin.equals(this.effectiveAgainst, other.effectiveAgainst) && Kotlin.equals(this.counterAllRange, other.counterAllRange) && Kotlin.equals(this.cannotCcounter, other.cannotCcounter) && Kotlin.equals(this.antiBuffBonus, other.antiBuffBonus) && Kotlin.equals(this.hpLossAtEndOfFight, other.hpLossAtEndOfFight) && Kotlin.equals(this.blade, other.blade) && Kotlin.equals(this.defensiveTerrain, other.defensiveTerrain) && Kotlin.equals(this.disableChangePlan, other.disableChangePlan) && Kotlin.equals(this.wrathfulStaff, other.wrathfulStaff) && Kotlin.equals(this.oneTimeOnlyAdditionalDamage, other.oneTimeOnlyAdditionalDamage)))));
  };
  function WeaponType(name, ordinal, range, isMaterial, sortOrder) {
    Enum.call(this);
    this.range = range;
    this.isMaterial = isMaterial;
    this.sortOrder = sortOrder;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function WeaponType_initFields() {
    WeaponType_initFields = function () {
    };
    WeaponType$SWORD_instance = new WeaponType('SWORD', 0, 1, true, 0);
    WeaponType$LANCE_instance = new WeaponType('LANCE', 1, 1, true, 0);
    WeaponType$AXE_instance = new WeaponType('AXE', 2, 1, true, 0);
    WeaponType$DRAGON_instance = new WeaponType('DRAGON', 3, 1, false, 1);
    WeaponType$RTOME_instance = new WeaponType('RTOME', 4, 2, false, 2);
    WeaponType$BTOME_instance = new WeaponType('BTOME', 5, 2, false, 2);
    WeaponType$GTOME_instance = new WeaponType('GTOME', 6, 2, false, 2);
    WeaponType$BOW_instance = new WeaponType('BOW', 7, 2, true, 3);
    WeaponType$DAGGER_instance = new WeaponType('DAGGER', 8, 2, true, 4);
    WeaponType$STAFF_instance = new WeaponType('STAFF', 9, 2, false, 5);
    WeaponType$Companion_getInstance();
  }
  var WeaponType$SWORD_instance;
  function WeaponType$SWORD_getInstance() {
    WeaponType_initFields();
    return WeaponType$SWORD_instance;
  }
  var WeaponType$LANCE_instance;
  function WeaponType$LANCE_getInstance() {
    WeaponType_initFields();
    return WeaponType$LANCE_instance;
  }
  var WeaponType$AXE_instance;
  function WeaponType$AXE_getInstance() {
    WeaponType_initFields();
    return WeaponType$AXE_instance;
  }
  var WeaponType$DRAGON_instance;
  function WeaponType$DRAGON_getInstance() {
    WeaponType_initFields();
    return WeaponType$DRAGON_instance;
  }
  var WeaponType$RTOME_instance;
  function WeaponType$RTOME_getInstance() {
    WeaponType_initFields();
    return WeaponType$RTOME_instance;
  }
  var WeaponType$BTOME_instance;
  function WeaponType$BTOME_getInstance() {
    WeaponType_initFields();
    return WeaponType$BTOME_instance;
  }
  var WeaponType$GTOME_instance;
  function WeaponType$GTOME_getInstance() {
    WeaponType_initFields();
    return WeaponType$GTOME_instance;
  }
  var WeaponType$BOW_instance;
  function WeaponType$BOW_getInstance() {
    WeaponType_initFields();
    return WeaponType$BOW_instance;
  }
  var WeaponType$DAGGER_instance;
  function WeaponType$DAGGER_getInstance() {
    WeaponType_initFields();
    return WeaponType$DAGGER_instance;
  }
  var WeaponType$STAFF_instance;
  function WeaponType$STAFF_getInstance() {
    WeaponType_initFields();
    return WeaponType$STAFF_instance;
  }
  function WeaponType$Companion() {
    WeaponType$Companion_instance = this;
    this.weaponTypeMap = mapOf([to('\u5263', WeaponType$SWORD_getInstance()), to('\u69CD', WeaponType$LANCE_getInstance()), to('\u65A7', WeaponType$AXE_getInstance()), to('\u5F13', WeaponType$BOW_getInstance()), to('\u6697\u5668', WeaponType$DAGGER_getInstance()), to('\u8D64\u9B54', WeaponType$RTOME_getInstance()), to('\u7DD1\u9B54', WeaponType$GTOME_getInstance()), to('\u9752\u9B54', WeaponType$BTOME_getInstance()), to('\u6756', WeaponType$STAFF_getInstance()), to('\u7ADC', WeaponType$DRAGON_getInstance())]);
  }
  WeaponType$Companion.prototype.weaponTypeOf_61zpoe$ = function (key) {
    if (this.weaponTypeMap.containsKey_11rb$(key))
      return this.weaponTypeMap.get_11rb$(key);
    else {
      var $receiver = WeaponType$values();
      var any$result;
      any$break: do {
        var tmp$;
        for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
          var element = $receiver[tmp$];
          if (equals(element.name, key)) {
            any$result = true;
            break any$break;
          }
        }
        any$result = false;
      }
       while (false);
      if (any$result)
        return WeaponType$valueOf(key);
      else
        return null;
    }
  };
  WeaponType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var WeaponType$Companion_instance = null;
  function WeaponType$Companion_getInstance() {
    WeaponType_initFields();
    if (WeaponType$Companion_instance === null) {
      new WeaponType$Companion();
    }
    return WeaponType$Companion_instance;
  }
  WeaponType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WeaponType',
    interfaces: [Enum]
  };
  function WeaponType$values() {
    return [WeaponType$SWORD_getInstance(), WeaponType$LANCE_getInstance(), WeaponType$AXE_getInstance(), WeaponType$DRAGON_getInstance(), WeaponType$RTOME_getInstance(), WeaponType$BTOME_getInstance(), WeaponType$GTOME_getInstance(), WeaponType$BOW_getInstance(), WeaponType$DAGGER_getInstance(), WeaponType$STAFF_getInstance()];
  }
  WeaponType.values = WeaponType$values;
  function WeaponType$valueOf(name) {
    switch (name) {
      case 'SWORD':
        return WeaponType$SWORD_getInstance();
      case 'LANCE':
        return WeaponType$LANCE_getInstance();
      case 'AXE':
        return WeaponType$AXE_getInstance();
      case 'DRAGON':
        return WeaponType$DRAGON_getInstance();
      case 'RTOME':
        return WeaponType$RTOME_getInstance();
      case 'BTOME':
        return WeaponType$BTOME_getInstance();
      case 'GTOME':
        return WeaponType$GTOME_getInstance();
      case 'BOW':
        return WeaponType$BOW_getInstance();
      case 'DAGGER':
        return WeaponType$DAGGER_getInstance();
      case 'STAFF':
        return WeaponType$STAFF_getInstance();
      default:throwISE('No enum constant jp.blogspot.turanukimaru.fehs.WeaponType.' + name);
    }
  }
  WeaponType.valueOf_61zpoe$ = WeaponType$valueOf;
  function MoveType(name, ordinal, steps) {
    Enum.call(this);
    this.steps = steps;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MoveType_initFields() {
    MoveType_initFields = function () {
    };
    MoveType$INFANTRY_instance = new MoveType('INFANTRY', 0, 2);
    MoveType$CAVALRY_instance = new MoveType('CAVALRY', 1, 3);
    MoveType$FLIER_instance = new MoveType('FLIER', 2, 2);
    MoveType$ARMORED_instance = new MoveType('ARMORED', 3, 1);
    MoveType$Companion_getInstance();
  }
  var MoveType$INFANTRY_instance;
  function MoveType$INFANTRY_getInstance() {
    MoveType_initFields();
    return MoveType$INFANTRY_instance;
  }
  var MoveType$CAVALRY_instance;
  function MoveType$CAVALRY_getInstance() {
    MoveType_initFields();
    return MoveType$CAVALRY_instance;
  }
  var MoveType$FLIER_instance;
  function MoveType$FLIER_getInstance() {
    MoveType_initFields();
    return MoveType$FLIER_instance;
  }
  var MoveType$ARMORED_instance;
  function MoveType$ARMORED_getInstance() {
    MoveType_initFields();
    return MoveType$ARMORED_instance;
  }
  function MoveType$Companion() {
    MoveType$Companion_instance = this;
    this.moveTypeMap = mapOf([to('\u6B69\u884C', MoveType$INFANTRY_getInstance()), to('\u98DB\u884C', MoveType$FLIER_getInstance()), to('\u9A0E\u99AC', MoveType$CAVALRY_getInstance()), to('\u91CD\u88C5', MoveType$ARMORED_getInstance())]);
  }
  MoveType$Companion.prototype.moveTypeOf_61zpoe$ = function (key) {
    if (this.moveTypeMap.containsKey_11rb$(key))
      return this.moveTypeMap.get_11rb$(key);
    else {
      var $receiver = MoveType$values();
      var any$result;
      any$break: do {
        var tmp$;
        for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
          var element = $receiver[tmp$];
          if (equals(element.name, key)) {
            any$result = true;
            break any$break;
          }
        }
        any$result = false;
      }
       while (false);
      if (any$result)
        return MoveType$valueOf(key);
      else
        return null;
    }
  };
  MoveType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MoveType$Companion_instance = null;
  function MoveType$Companion_getInstance() {
    MoveType_initFields();
    if (MoveType$Companion_instance === null) {
      new MoveType$Companion();
    }
    return MoveType$Companion_instance;
  }
  MoveType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MoveType',
    interfaces: [Enum]
  };
  function MoveType$values() {
    return [MoveType$INFANTRY_getInstance(), MoveType$CAVALRY_getInstance(), MoveType$FLIER_getInstance(), MoveType$ARMORED_getInstance()];
  }
  MoveType.values = MoveType$values;
  function MoveType$valueOf(name) {
    switch (name) {
      case 'INFANTRY':
        return MoveType$INFANTRY_getInstance();
      case 'CAVALRY':
        return MoveType$CAVALRY_getInstance();
      case 'FLIER':
        return MoveType$FLIER_getInstance();
      case 'ARMORED':
        return MoveType$ARMORED_getInstance();
      default:throwISE('No enum constant jp.blogspot.turanukimaru.fehs.MoveType.' + name);
    }
  }
  MoveType.valueOf_61zpoe$ = MoveType$valueOf;
  function BoonType(name, ordinal, jp) {
    Enum.call(this);
    this.jp = jp;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BoonType_initFields() {
    BoonType_initFields = function () {
    };
    BoonType$NONE_instance = new BoonType('NONE', 0, '-');
    BoonType$HP_instance = new BoonType('HP', 1, 'HP');
    BoonType$ATK_instance = new BoonType('ATK', 2, '\u653B\u6483');
    BoonType$SPD_instance = new BoonType('SPD', 3, '\u901F\u3055');
    BoonType$DEF_instance = new BoonType('DEF', 4, '\u5B88\u5099');
    BoonType$RES_instance = new BoonType('RES', 5, '\u9B54\u9632');
    BoonType$Companion_getInstance();
  }
  var BoonType$NONE_instance;
  function BoonType$NONE_getInstance() {
    BoonType_initFields();
    return BoonType$NONE_instance;
  }
  var BoonType$HP_instance;
  function BoonType$HP_getInstance() {
    BoonType_initFields();
    return BoonType$HP_instance;
  }
  var BoonType$ATK_instance;
  function BoonType$ATK_getInstance() {
    BoonType_initFields();
    return BoonType$ATK_instance;
  }
  var BoonType$SPD_instance;
  function BoonType$SPD_getInstance() {
    BoonType_initFields();
    return BoonType$SPD_instance;
  }
  var BoonType$DEF_instance;
  function BoonType$DEF_getInstance() {
    BoonType_initFields();
    return BoonType$DEF_instance;
  }
  var BoonType$RES_instance;
  function BoonType$RES_getInstance() {
    BoonType_initFields();
    return BoonType$RES_instance;
  }
  BoonType.prototype.localeName_miixs2$ = function (locale) {
    if (equals(locale, Locale$JAPAN_getInstance()))
      return this.jp;
    else if (equals(locale, Locale$JAPANESE_getInstance()))
      return this.jp;
    else
      return this.name;
  };
  function BoonType$Companion() {
    BoonType$Companion_instance = this;
    this.boonTypeMap = mapOf([to('HP', BoonType$HP_getInstance()), to('\u653B\u6483', BoonType$ATK_getInstance()), to('\u901F\u3055', BoonType$SPD_getInstance()), to('\u5B88\u5099', BoonType$DEF_getInstance()), to('\u9B54\u9632', BoonType$RES_getInstance())]);
  }
  BoonType$Companion.prototype.boonTypeOf_61zpoe$ = function (key) {
    if (this.boonTypeMap.containsKey_11rb$(key))
      return ensureNotNull(this.boonTypeMap.get_11rb$(key));
    else {
      var $receiver = BoonType$values();
      var any$result;
      any$break: do {
        var tmp$;
        for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
          var element = $receiver[tmp$];
          if (equals(element.name, key)) {
            any$result = true;
            break any$break;
          }
        }
        any$result = false;
      }
       while (false);
      if (any$result)
        return BoonType$valueOf(key);
      else
        return BoonType$NONE_getInstance();
    }
  };
  BoonType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BoonType$Companion_instance = null;
  function BoonType$Companion_getInstance() {
    BoonType_initFields();
    if (BoonType$Companion_instance === null) {
      new BoonType$Companion();
    }
    return BoonType$Companion_instance;
  }
  BoonType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoonType',
    interfaces: [Enum]
  };
  function BoonType$values() {
    return [BoonType$NONE_getInstance(), BoonType$HP_getInstance(), BoonType$ATK_getInstance(), BoonType$SPD_getInstance(), BoonType$DEF_getInstance(), BoonType$RES_getInstance()];
  }
  BoonType.values = BoonType$values;
  function BoonType$valueOf(name) {
    switch (name) {
      case 'NONE':
        return BoonType$NONE_getInstance();
      case 'HP':
        return BoonType$HP_getInstance();
      case 'ATK':
        return BoonType$ATK_getInstance();
      case 'SPD':
        return BoonType$SPD_getInstance();
      case 'DEF':
        return BoonType$DEF_getInstance();
      case 'RES':
        return BoonType$RES_getInstance();
      default:throwISE('No enum constant jp.blogspot.turanukimaru.fehs.BoonType.' + name);
    }
  }
  BoonType.valueOf_61zpoe$ = BoonType$valueOf;
  function SIDES(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function SIDES_initFields() {
    SIDES_initFields = function () {
    };
    SIDES$NONE_instance = new SIDES('NONE', 0);
    SIDES$ATTACKER_instance = new SIDES('ATTACKER', 1);
    SIDES$COUNTER_instance = new SIDES('COUNTER', 2);
  }
  var SIDES$NONE_instance;
  function SIDES$NONE_getInstance() {
    SIDES_initFields();
    return SIDES$NONE_instance;
  }
  var SIDES$ATTACKER_instance;
  function SIDES$ATTACKER_getInstance() {
    SIDES_initFields();
    return SIDES$ATTACKER_instance;
  }
  var SIDES$COUNTER_instance;
  function SIDES$COUNTER_getInstance() {
    SIDES_initFields();
    return SIDES$COUNTER_instance;
  }
  SIDES.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SIDES',
    interfaces: [Enum]
  };
  function SIDES$values() {
    return [SIDES$NONE_getInstance(), SIDES$ATTACKER_getInstance(), SIDES$COUNTER_getInstance()];
  }
  SIDES.values = SIDES$values;
  function SIDES$valueOf(name) {
    switch (name) {
      case 'NONE':
        return SIDES$NONE_getInstance();
      case 'ATTACKER':
        return SIDES$ATTACKER_getInstance();
      case 'COUNTER':
        return SIDES$COUNTER_getInstance();
      default:throwISE('No enum constant jp.blogspot.turanukimaru.fehs.SIDES.' + name);
    }
  }
  SIDES.valueOf_61zpoe$ = SIDES$valueOf;
  function EffectiveAgainst(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function EffectiveAgainst_initFields() {
    EffectiveAgainst_initFields = function () {
    };
    EffectiveAgainst$NONE_instance = new EffectiveAgainst('NONE', 0);
    EffectiveAgainst$ARMORED_instance = new EffectiveAgainst('ARMORED', 1);
    EffectiveAgainst$FLIER_instance = new EffectiveAgainst('FLIER', 2);
    EffectiveAgainst$MAGIC_instance = new EffectiveAgainst('MAGIC', 3);
    EffectiveAgainst$CAVALRY_instance = new EffectiveAgainst('CAVALRY', 4);
    EffectiveAgainst$DRAGON_instance = new EffectiveAgainst('DRAGON', 5);
    EffectiveAgainst$Companion_getInstance();
  }
  var EffectiveAgainst$NONE_instance;
  function EffectiveAgainst$NONE_getInstance() {
    EffectiveAgainst_initFields();
    return EffectiveAgainst$NONE_instance;
  }
  var EffectiveAgainst$ARMORED_instance;
  function EffectiveAgainst$ARMORED_getInstance() {
    EffectiveAgainst_initFields();
    return EffectiveAgainst$ARMORED_instance;
  }
  var EffectiveAgainst$FLIER_instance;
  function EffectiveAgainst$FLIER_getInstance() {
    EffectiveAgainst_initFields();
    return EffectiveAgainst$FLIER_instance;
  }
  var EffectiveAgainst$MAGIC_instance;
  function EffectiveAgainst$MAGIC_getInstance() {
    EffectiveAgainst_initFields();
    return EffectiveAgainst$MAGIC_instance;
  }
  var EffectiveAgainst$CAVALRY_instance;
  function EffectiveAgainst$CAVALRY_getInstance() {
    EffectiveAgainst_initFields();
    return EffectiveAgainst$CAVALRY_instance;
  }
  var EffectiveAgainst$DRAGON_instance;
  function EffectiveAgainst$DRAGON_getInstance() {
    EffectiveAgainst_initFields();
    return EffectiveAgainst$DRAGON_instance;
  }
  function EffectiveAgainst$Companion() {
    EffectiveAgainst$Companion_instance = this;
  }
  EffectiveAgainst$Companion.prototype.valueOfMoveType_5a1elt$ = function (moveType) {
    if (equals(moveType, MoveType$ARMORED_getInstance()))
      return EffectiveAgainst$ARMORED_getInstance();
    else if (equals(moveType, MoveType$FLIER_getInstance()))
      return EffectiveAgainst$FLIER_getInstance();
    else if (equals(moveType, MoveType$CAVALRY_getInstance()))
      return EffectiveAgainst$CAVALRY_getInstance();
    else
      return EffectiveAgainst$NONE_getInstance();
  };
  EffectiveAgainst$Companion.prototype.valueOfWeaponType_ihvkbe$ = function (weaponType) {
    if (equals(weaponType, WeaponType$RTOME_getInstance()))
      return EffectiveAgainst$MAGIC_getInstance();
    else if (equals(weaponType, WeaponType$GTOME_getInstance()))
      return EffectiveAgainst$MAGIC_getInstance();
    else if (equals(weaponType, WeaponType$BTOME_getInstance()))
      return EffectiveAgainst$MAGIC_getInstance();
    else if (equals(weaponType, WeaponType$DRAGON_getInstance()))
      return EffectiveAgainst$DRAGON_getInstance();
    else
      return EffectiveAgainst$NONE_getInstance();
  };
  EffectiveAgainst$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var EffectiveAgainst$Companion_instance = null;
  function EffectiveAgainst$Companion_getInstance() {
    EffectiveAgainst_initFields();
    if (EffectiveAgainst$Companion_instance === null) {
      new EffectiveAgainst$Companion();
    }
    return EffectiveAgainst$Companion_instance;
  }
  EffectiveAgainst.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EffectiveAgainst',
    interfaces: [Enum]
  };
  function EffectiveAgainst$values() {
    return [EffectiveAgainst$NONE_getInstance(), EffectiveAgainst$ARMORED_getInstance(), EffectiveAgainst$FLIER_getInstance(), EffectiveAgainst$MAGIC_getInstance(), EffectiveAgainst$CAVALRY_getInstance(), EffectiveAgainst$DRAGON_getInstance()];
  }
  EffectiveAgainst.values = EffectiveAgainst$values;
  function EffectiveAgainst$valueOf(name) {
    switch (name) {
      case 'NONE':
        return EffectiveAgainst$NONE_getInstance();
      case 'ARMORED':
        return EffectiveAgainst$ARMORED_getInstance();
      case 'FLIER':
        return EffectiveAgainst$FLIER_getInstance();
      case 'MAGIC':
        return EffectiveAgainst$MAGIC_getInstance();
      case 'CAVALRY':
        return EffectiveAgainst$CAVALRY_getInstance();
      case 'DRAGON':
        return EffectiveAgainst$DRAGON_getInstance();
      default:throwISE('No enum constant jp.blogspot.turanukimaru.fehs.EffectiveAgainst.' + name);
    }
  }
  EffectiveAgainst.valueOf_61zpoe$ = EffectiveAgainst$valueOf;
  function FightPlan(attacker, target) {
    this.attacker = attacker;
    this.target = target;
    this.firstAttack = FightPlan$firstAttack$lambda;
    this.firstCounter = FightPlan$firstCounter$lambda;
    this.secondAttack = FightPlan$secondAttack$lambda;
    this.secondCounter = FightPlan$secondCounter$lambda;
    this.plan = arrayListOf([this.firstAttack, this.firstCounter, this.secondAttack, this.secondCounter]);
    this.resultList = ArrayList_init();
  }
  FightPlan.prototype.planning = function () {
    this.attacker.attackPlan_9jfrn9$(this);
    this.target.counterPlan_9jfrn9$(this);
    return this;
  };
  FightPlan.prototype.fight = function () {
    var tmp$;
    this.buildFightPlan_8n9n3g$(this.attacker, this.target);
    var last = new AttackResult(this.attacker, this.target, 0, null, null);
    tmp$ = this.plan.iterator();
    while (tmp$.hasNext()) {
      var fight = tmp$.next();
      var s = last.source.copy_vp8c0q$();
      var t = last.target.copy_vp8c0q$();
      s.enemy = t;
      t.enemy = s;
      var result = fight(new Pair(s, t), this.resultList);
      this.resultList.add_11rb$(result);
      if (result.source.hp === 0 || result.target.hp === 0) {
        return this.resultList;
      }
      last = result;
    }
    return this.resultList;
  };
  FightPlan.prototype.buildFightPlan_8n9n3g$ = function (attacker, target) {
    attacker.side = SIDES$ATTACKER_getInstance();
    target.side = SIDES$COUNTER_getInstance();
    if (attacker.followupable === attacker.antiFollowup && (attacker.effectedSpd - target.effectedSpd | 0) < 5 || (!attacker.followupable && attacker.antiFollowup)) {
      this.plan.remove_11rb$(this.secondAttack);
    }
    if (target.followupable === target.antiFollowup && (target.effectedSpd - attacker.effectedSpd | 0) < 5 || (!target.followupable && target.antiFollowup)) {
      this.plan.remove_11rb$(this.secondCounter);
    }
    if (attacker.armedHero.baseHero.weaponType.range !== target.armedHero.baseHero.weaponType.range && !target.counterAllRange) {
      this.plan.remove_11rb$(this.firstCounter);
      this.plan.remove_11rb$(this.secondCounter);
    }
    if (target.cannotCcounter) {
      this.plan.remove_11rb$(this.firstCounter);
      this.plan.remove_11rb$(this.secondCounter);
    }
    if (attacker.doubleAttack) {
      this.plan.add_wxm5ur$(this.plan.indexOf_11rb$(this.firstAttack), this.firstAttack);
      if (this.plan.indexOf_11rb$(this.secondAttack) > 0) {
        this.plan.add_wxm5ur$(this.plan.indexOf_11rb$(this.secondAttack), this.secondAttack);
      }
    }
  };
  function FightPlan$firstAttack$lambda(pair, results) {
    return pair.first.attack_dayeuq$(pair.second, results);
  }
  function FightPlan$firstCounter$lambda(pair, results) {
    return pair.second.attack_dayeuq$(pair.first, results).flip();
  }
  function FightPlan$secondAttack$lambda(pair, results) {
    return pair.first.attack_dayeuq$(pair.second, results);
  }
  function FightPlan$secondCounter$lambda(pair, results) {
    return pair.second.attack_dayeuq$(pair.first, results).flip();
  }
  FightPlan.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FightPlan',
    interfaces: []
  };
  function Locale(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Locale_initFields() {
    Locale_initFields = function () {
    };
    Locale$JAPANESE_instance = new Locale('JAPANESE', 0);
    Locale$JAPAN_instance = new Locale('JAPAN', 1);
    Locale$OTHER_instance = new Locale('OTHER', 2);
  }
  var Locale$JAPANESE_instance;
  function Locale$JAPANESE_getInstance() {
    Locale_initFields();
    return Locale$JAPANESE_instance;
  }
  var Locale$JAPAN_instance;
  function Locale$JAPAN_getInstance() {
    Locale_initFields();
    return Locale$JAPAN_instance;
  }
  var Locale$OTHER_instance;
  function Locale$OTHER_getInstance() {
    Locale_initFields();
    return Locale$OTHER_instance;
  }
  Locale.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Locale',
    interfaces: [Enum]
  };
  function Locale$values() {
    return [Locale$JAPANESE_getInstance(), Locale$JAPAN_getInstance(), Locale$OTHER_getInstance()];
  }
  Locale.values = Locale$values;
  function Locale$valueOf(name) {
    switch (name) {
      case 'JAPANESE':
        return Locale$JAPANESE_getInstance();
      case 'JAPAN':
        return Locale$JAPAN_getInstance();
      case 'OTHER':
        return Locale$OTHER_getInstance();
      default:throwISE('No enum constant jp.blogspot.turanukimaru.fehs.Locale.' + name);
    }
  }
  Locale.valueOf_61zpoe$ = Locale$valueOf;
  function ModelObjectRepository() {
  }
  ModelObjectRepository.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ModelObjectRepository',
    interfaces: []
  };
  function StandardBaseHero() {
    StandardBaseHero_instance = this;
    this.ITEMS_0 = ArrayList_init();
    this.ITEMMAP_0 = HashMap_init();
    this.creates();
  }
  StandardBaseHero.prototype.get_61zpoe$ = function (id) {
    var tmp$;
    return (tmp$ = this.ITEMMAP_0.get_11rb$(id)) != null ? tmp$.clone() : null;
  };
  StandardBaseHero.prototype.get_za3lpa$ = function (id) {
    return this.ITEMS_0.get_za3lpa$(id).clone();
  };
  StandardBaseHero.prototype.containsKey_61zpoe$ = function (id) {
    return this.ITEMMAP_0.containsKey_11rb$(id);
  };
  StandardBaseHero.prototype.allItems = function () {
    var tmp$ = this.ITEMS_0;
    var tmp$_0;
    var accumulator = ArrayList_init();
    tmp$_0 = tmp$.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      var list = accumulator;
      list.add_11rb$(element);
      accumulator = list;
    }
    return accumulator;
  };
  StandardBaseHero.prototype.creates = function () {
    this.createItem_kwpjrd$('\u30A2\u30A4\u30AF', 1, WeaponType$SWORD_getInstance(), MoveType$INFANTRY_getInstance(), 'Ike', 5, 18, 9, 7, 8, 5, 7, 8, 7, 7, 2, Weapon$Ragnell_getInstance(), null, Special$Aether_getInstance(), SkillA$HeavyBlade_getInstance().lv_za3lpa$(3), SkillB$SwordBreaker_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30A2\u30A4\u30E9', 1, WeaponType$SWORD_getInstance(), MoveType$INFANTRY_getInstance(), 'Ayra', 4, 19, 7, 11, 7, 4, 6, 8, 8, 7, 4, Weapon$AyrasBlade_getInstance(), null, Special$RegnalAstra_getInstance(), SkillA$SwiftSparrow_getInstance().lv_za3lpa$(2), SkillB$Desperation_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30A2\u30FC\u30C0\u30F3', 1, WeaponType$SWORD_getInstance(), MoveType$ARMORED_getInstance(), 'Arden', 4, 25, 10, 3, 13, 3, 12, 8, 2, 9, 2, Weapon$BraveSword2_getInstance(), null, Special$Pavise_getInstance(), SkillB$FollowUpRing_getInstance(), SkillC$DriveDef_getInstance().lv_za3lpa$(2));
    this.createItem_kwpjrd$('\u30A2\u30C6\u30CA', 1, WeaponType$SWORD_getInstance(), MoveType$INFANTRY_getInstance(), 'Athena', 4, 17, 7, 10, 8, 5, 5, 7, 9, 5, 5, Weapon$WaoDao2_getInstance(), null, Special$Moonbow_getInstance(), SkillA$SturdyBlow_getInstance().lv_za3lpa$(2), Skill$Companion_getInstance().NONE, SkillC$SwordExperience_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30A2\u30EB\u30D5\u30A9\u30F3\u30B9', 1, WeaponType$SWORD_getInstance(), MoveType$INFANTRY_getInstance(), 'Alfonse', 2, 19, 9, 6, 8, 5, 7, 8, 5, 7, 4, Weapon$Folkvangr_getInstance(), null, Special$Sol_getInstance(), SkillA$DeathBlow_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$SpurAtk_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30A2\u30EB\u30E0', 1, WeaponType$SWORD_getInstance(), MoveType$INFANTRY_getInstance(), 'Alm', 5, 21, 9, 6, 6, 5, 7, 7, 7, 6, 4, Weapon$Falchion_getInstance(), null, Special$DragonGaze_getInstance(), SkillA$Attack_getInstance().lv_za3lpa$(3), SkillB$Windsweep_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30A8\u30A4\u30EA\u30FC\u30AF', 1, WeaponType$SWORD_getInstance(), MoveType$INFANTRY_getInstance(), 'Eirika', 4, 18, 7, 9, 7, 6, 7, 5, 8, 5, 6, Weapon$Sieglinde_getInstance(), Assist$Pivot_getInstance(), null, Skill$Companion_getInstance().NONE, SkillB$DragBack_getInstance(), SkillC$HoneSpd_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30A8\u30EA\u30A6\u30C3\u30C9', 1, WeaponType$SWORD_getInstance(), MoveType$CAVALRY_getInstance(), 'Eliwood', 3, 17, 7, 8, 6, 8, 6, 7, 6, 4, 7, Weapon$Durandal_getInstance(), null, Special$SacredCowl_getInstance(), Skill$Companion_getInstance().NONE, SkillB$AxeBreaker_getInstance().lv_za3lpa$(3), SkillC$WardCavalry_getInstance());
    this.createItem_kwpjrd$('\u30A8\u30EA\u30F3\u30B7\u30A2', 1, WeaponType$SWORD_getInstance(), MoveType$FLIER_getInstance(), 'Elincia', 5, 16, 8, 10, 5, 8, 5, 8, 8, 5, 5, Weapon$Amiti_getInstance(), Assist$ArdentSacrifice_getInstance(), null, SkillA$DeathBlow_getInstance().lv_za3lpa$(3), SkillB$FlierFormation_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30A8\u30EB\u30C8\u30B7\u30E3\u30F3', 1, WeaponType$SWORD_getInstance(), MoveType$CAVALRY_getInstance(), 'Eldigan', 5, 19, 8, 5, 8, 6, 8, 7, 5, 8, 2, Weapon$Mystletainn_getInstance(), null, Special$GrowingLight_getInstance(), SkillA$Furry_getInstance().lv_za3lpa$(3), SkillB$Lunge_getInstance(), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30AA\u30B0\u30DE', 1, WeaponType$SWORD_getInstance(), MoveType$INFANTRY_getInstance(), 'Ogma', 4, 21, 7, 10, 6, 3, 8, 9, 7, 6, 1, Weapon$BraveSword2_getInstance(), null, Special$Noontime_getInstance(), SkillA$DefiantAtk_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$SpurAtk_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30AA\u30EA\u30F4\u30A3\u30A8', 1, WeaponType$SWORD_getInstance(), MoveType$INFANTRY_getInstance(), 'Olivia', 3, 17, 6, 7, 5, 4, 5, 6, 8, 6, 6, Weapon$SilverSword2_getInstance(), Assist$Dance_getInstance(), null, Skill$Companion_getInstance().NONE, SkillB$KnockBack_getInstance(), SkillC$HoneAtk_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30AB\u30A4\u30F3', 1, WeaponType$SWORD_getInstance(), MoveType$CAVALRY_getInstance(), 'Cain', 4, 18, 8, 6, 8, 6, 7, 7, 8, 5, 3, Weapon$BraveSword2_getInstance(), null, Special$Escutcheon_getInstance(), Skill$Companion_getInstance().NONE, SkillB$WingsOfMercy_getInstance().lv_za3lpa$(3), SkillC$ThreatenAtk_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30AB\u30B6\u30CF\u30CA', 1, WeaponType$SWORD_getInstance(), MoveType$INFANTRY_getInstance(), 'Hana', 3, 18, 9, 10, 6, 4, 5, 8, 8, 4, 6, Weapon$ArmorSlayer2_getInstance(), Assist$RallyAttack_getInstance(), null, SkillA$LifeAndDeath_getInstance().lv_za3lpa$(3), SkillB$Obstruct_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30AB\u30E0\u30A4\uFF08\u7537\uFF09', 1, WeaponType$SWORD_getInstance(), MoveType$INFANTRY_getInstance(), 'Corrin(M)', 4, 20, 8, 8, 6, 5, 6, 7, 7, 6, 5, Weapon$Yato_getInstance(), null, Special$DragonFang_getInstance(), SkillA$Defense_getInstance().lv_za3lpa$(3), SkillB$Obstruct_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30AB\u30EC\u30EB', 1, WeaponType$SWORD_getInstance(), MoveType$INFANTRY_getInstance(), 'Karel', 5, 19, 8, 9, 6, 5, 9, 6, 8, 5, 3, Weapon$WaoDao2_getInstance(), null, Special$Reprisal_getInstance(), SkillA$DefiantAtk_getInstance().lv_za3lpa$(3), SkillB$Desperation_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30B0\u30EC\u30A4', 1, WeaponType$SWORD_getInstance(), MoveType$INFANTRY_getInstance(), 'Gray', 5, 17, 7, 6, 6, 3, 8, 9, 8, 7, 5, Weapon$Zanbato2_getInstance(), Assist$Swap_getInstance(), null, SkillA$WindBoost_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$SwordValor_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30AF\u30ED\u30E0', 1, WeaponType$SWORD_getInstance(), MoveType$INFANTRY_getInstance(), 'Chrom', 4, 21, 9, 6, 7, 4, 8, 9, 5, 7, 2, Weapon$Falchion_getInstance(), null, Special$Aether_getInstance(), SkillA$DefiantDef_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$SpurDef_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30B7\u30FC\u30C0', 1, WeaponType$SWORD_getInstance(), MoveType$FLIER_getInstance(), 'Caeda', 4, 17, 6, 9, 5, 10, 5, 5, 9, 5, 7, Weapon$ArmorSlayer2_getInstance(), Assist$RallySpeed_getInstance(), null, SkillA$DartingBlow_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$FortifyFliers_getInstance());
    this.createItem_kwpjrd$('\u30B7\u30B0\u30EB\u30C9', 1, WeaponType$SWORD_getInstance(), MoveType$CAVALRY_getInstance(), 'Sigurd', 5, 19, 9, 8, 6, 4, 6, 8, 7, 9, 2, Weapon$DivineTyrfing_getInstance(), null, Special$Miracle_getInstance(), SkillA$CloseDef_getInstance().lv_za3lpa$(3), SkillB$CrusadersWard_getInstance(), SkillC$SpdSmoke_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u6F06\u9ED2\u306E\u9A0E\u58EB', 1, WeaponType$SWORD_getInstance(), MoveType$ARMORED_getInstance(), 'Black Knight', 4, 22, 10, 8, 9, 5, 8, 7, 8, 8, 2, Weapon$Alondite_getInstance(), null, Special$BlackLuna_getInstance(), SkillA$SteadyStance_getInstance().lv_za3lpa$(3), SkillB$WingsOfMercy_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30BB\u30FC\u30D0\u30FC', 1, WeaponType$SWORD_getInstance(), MoveType$INFANTRY_getInstance(), 'Saber', 5, 18, 7, 9, 8, 5, 6, 7, 7, 7, 4, Weapon$SlayingEdge2_getInstance(), null, Special$Aegis_getInstance(), SkillA$HpSpd_getInstance().lv_za3lpa$(2), SkillB$ShieldPulse_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30BC\u30C8', 1, WeaponType$SWORD_getInstance(), MoveType$CAVALRY_getInstance(), 'Seth', 5, 18, 8, 7, 8, 5, 5, 7, 7, 7, 4, Weapon$RubySword2_getInstance(), Assist$Swap_getInstance(), null, SkillA$FortressDef_getInstance().lv_za3lpa$(3), SkillB$SealAtkDef_getInstance().lv_za3lpa$(2), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30BC\u30D5\u30A3\u30FC\u30EB', 1, WeaponType$SWORD_getInstance(), MoveType$ARMORED_getInstance(), 'Zephiel', 3, 25, 9, 3, 12, 5, 10, 8, 2, 8, 5, Weapon$Eckesachs_getInstance(), null, Special$Reprisal_getInstance(), SkillA$LifeAndDeath_getInstance().lv_za3lpa$(3), SkillB$WaryFighter_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30BB\u30EA\u30B9', 1, WeaponType$SWORD_getInstance(), MoveType$INFANTRY_getInstance(), 'Seliph', 4, 19, 8, 7, 8, 5, 9, 8, 4, 6, 4, Weapon$Tyrfing_getInstance(), Assist$RallySpeed_getInstance(), null, SkillA$Hp_getInstance().lv_za3lpa$(3), SkillB$BrashAssault_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30BD\u30FC\u30EB', 1, WeaponType$SWORD_getInstance(), MoveType$CAVALRY_getInstance(), 'Stahl', 3, 19, 7, 7, 8, 5, 8, 7, 5, 6, 4, Weapon$RubySword2_getInstance(), Assist$Swap_getInstance(), null, SkillA$Defense_getInstance().lv_za3lpa$(3), SkillB$Obstruct_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30C9\u30FC\u30AC', 1, WeaponType$SWORD_getInstance(), MoveType$ARMORED_getInstance(), 'Draug', 2, 24, 8, 6, 13, 3, 8, 6, 8, 8, 3, Weapon$BraveSword2_getInstance(), null, Special$Pavise_getInstance(), Skill$Companion_getInstance().NONE, SkillB$Lunge_getInstance(), SkillC$WardArmor_getInstance());
    this.createItem_kwpjrd$('\u30CA\u30D0\u30FC\u30EB', 1, WeaponType$SWORD_getInstance(), MoveType$INFANTRY_getInstance(), 'Navarre', 3, 18, 7, 11, 6, 5, 7, 7, 8, 4, 5, Weapon$KillingEdge2_getInstance(), null, Special$BlazingWind_getInstance(), Skill$Companion_getInstance().NONE, SkillB$Desperation_getInstance().lv_za3lpa$(3), SkillC$ThreatenSpd_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30D1\u30AA\u30E9', 1, WeaponType$SWORD_getInstance(), MoveType$FLIER_getInstance(), 'Palla', 3, 18, 7, 9, 6, 7, 7, 7, 6, 6, 5, Weapon$RubySword2_getInstance(), null, Special$Moonbow_getInstance(), Skill$Companion_getInstance().NONE, SkillB$WingsOfMercy_getInstance().lv_za3lpa$(3), SkillC$GoadFliers_getInstance());
    this.createItem_kwpjrd$('\u30D2\u30CA\u30BF', 1, WeaponType$SWORD_getInstance(), MoveType$INFANTRY_getInstance(), 'Hinata', 3, 21, 8, 5, 10, 3, 8, 7, 5, 8, 3, Weapon$RubySword2_getInstance(), null, Special$Pavise_getInstance(), SkillA$Furry_getInstance().lv_za3lpa$(3), SkillB$BrashAssault_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30D5\u30A3\u30EB', 1, WeaponType$SWORD_getInstance(), MoveType$INFANTRY_getInstance(), 'Fir', 3, 19, 6, 10, 5, 7, 6, 5, 8, 5, 7, Weapon$KillingEdge2_getInstance(), null, Special$Glacies_getInstance(), SkillA$Speed_getInstance().lv_za3lpa$(3), SkillB$Pass_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30DE\u30EB\u30B9', 1, WeaponType$SWORD_getInstance(), MoveType$INFANTRY_getInstance(), 'Marth', 4, 19, 7, 8, 7, 6, 6, 7, 8, 6, 4, Weapon$Falchion_getInstance(), Assist$Pivot_getInstance(), null, Skill$Companion_getInstance().NONE, SkillB$EscapeRoute_getInstance().lv_za3lpa$(3), SkillC$SpurSpd_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30DE\u30EB\u30B9\uFF08\u4EEE\u9762\uFF09', 1, WeaponType$SWORD_getInstance(), MoveType$INFANTRY_getInstance(), 'Marth (Masked)', 4, 19, 8, 10, 6, 4, 7, 8, 8, 5, 3, Weapon$Falchion_getInstance(), null, null, Skill$Companion_getInstance().NONE, Skill$Companion_getInstance().NONE, Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30DE\u30FC\u30AF\u30B9', 1, WeaponType$SWORD_getInstance(), MoveType$CAVALRY_getInstance(), 'Xander', 3, 20, 8, 5, 9, 4, 7, 7, 5, 9, 2, Weapon$Siegfried_getInstance(), null, Special$BlazingLight_getInstance(), SkillA$ArmoredBlow_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$SpurDef_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30E9\u30BA\u30EF\u30EB\u30C9', 1, WeaponType$SWORD_getInstance(), MoveType$INFANTRY_getInstance(), 'Laslow', 3, 20, 9, 7, 6, 5, 7, 8, 5, 7, 4, Weapon$SilverSword2_getInstance(), null, Special$Noontime_getInstance(), Skill$Companion_getInstance().NONE, SkillB$AxeBreaker_getInstance().lv_za3lpa$(3), SkillC$HoneSpd_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30EA\u30E7\u30A6\u30DE', 1, WeaponType$SWORD_getInstance(), MoveType$INFANTRY_getInstance(), 'Ryoma', 5, 19, 8, 11, 5, 4, 6, 8, 7, 6, 4, Weapon$Raijinto_getInstance(), null, Special$Astra_getInstance(), SkillA$DefiantAtk_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$HoneSpd_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30EA\u30F3', 1, WeaponType$SWORD_getInstance(), MoveType$INFANTRY_getInstance(), 'Lyn', 5, 18, 6, 11, 7, 5, 5, 6, 8, 5, 7, Weapon$SolKatti_getInstance(), null, Special$Galeforce_getInstance(), SkillA$DefiantAtk_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$SpurSpd_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30EB\u30FC\u30AF', 1, WeaponType$SWORD_getInstance(), MoveType$CAVALRY_getInstance(), 'Luke', 5, 19, 8, 6, 8, 5, 7, 8, 6, 6, 3, Weapon$BraveSword2_getInstance(), null, Special$Bonfire_getInstance(), SkillA$FireBoost_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$PanicPloy_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30EB\u30FC\u30CA', 1, WeaponType$SWORD_getInstance(), MoveType$INFANTRY_getInstance(), 'Selena', 3, 18, 6, 9, 8, 6, 5, 5, 8, 7, 6, Weapon$ArmorSlayer2_getInstance(), Assist$Reposition_getInstance(), null, SkillA$TriangleAdept_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$ThreatenSpd_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30EB\u30AD\u30CA', 1, WeaponType$SWORD_getInstance(), MoveType$INFANTRY_getInstance(), 'Lucina', 5, 19, 8, 10, 6, 4, 7, 8, 8, 5, 3, Weapon$Falchion_getInstance(), null, Special$Aether_getInstance(), SkillA$DefiantSpd_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$SpurAtk_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30ED\u30A4', 1, WeaponType$SWORD_getInstance(), MoveType$INFANTRY_getInstance(), 'Roy', 4, 20, 8, 9, 6, 4, 7, 6, 6, 5, 7, Weapon$BindingBlade_getInstance(), Assist$Shove_getInstance(), null, SkillA$TriangleAdept_getInstance().lv_za3lpa$(3), SkillB$SealDef_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30ED\u30A4\uFF08\u7DCF\u9078\u6319\uFF09', 1, WeaponType$SWORD_getInstance(), MoveType$CAVALRY_getInstance(), 'Roy (Brave Heroes)', 5, 16, 8, 8, 7, 7, 6, 7, 8, 5, 4, Weapon$BlazingDurandal_getInstance(), null, Special$Galeforce_getInstance(), SkillA$SteadyBlow_getInstance().lv_za3lpa$(2), SkillB$Desperation_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30ED\u30A4\u30C9', 1, WeaponType$SWORD_getInstance(), MoveType$INFANTRY_getInstance(), 'Lloyd', 3, 17, 8, 9, 5, 8, 7, 7, 8, 3, 6, Weapon$RegalBlade_getInstance(), null, Special$Iceberg_getInstance(), Skill$Companion_getInstance().NONE, SkillB$Pass_getInstance().lv_za3lpa$(3), SkillC$ThreatenAtk_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30ED\u30D3\u30F3', 1, WeaponType$SWORD_getInstance(), MoveType$INFANTRY_getInstance(), 'Tobin', 4, 18, 7, 5, 5, 4, 9, 7, 6, 9, 6, Weapon$ArmorSlayer2_getInstance(), Assist$Pivot_getInstance(), null, SkillA$Attack_getInstance().lv_za3lpa$(3), SkillB$SealSpd_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30ED\u30F3\u30AF\u30FC', 1, WeaponType$SWORD_getInstance(), MoveType$INFANTRY_getInstance(), 'Lonqu', 3, 19, 7, 11, 5, 5, 8, 6, 9, 4, 4, Weapon$KillingEdge2_getInstance(), null, Special$Glimmer_getInstance(), SkillA$Speed_getInstance().lv_za3lpa$(3), SkillB$Vantage_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30A2\u30EB\u30F4\u30A3\u30B9', 1, WeaponType$RTOME_getInstance(), MoveType$INFANTRY_getInstance(), 'Arvis', 3, 18, 8, 7, 4, 7, 3, 8, 7, 2, 8, Weapon$Valflame_getInstance(), null, Special$GrowingFlame_getInstance(), Skill$Companion_getInstance().NONE, SkillB$RecoverRing_getInstance(), SkillC$DefPloy_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30AB\u30BF\u30EA\u30CA', 1, WeaponType$RTOME_getInstance(), MoveType$INFANTRY_getInstance(), 'Katarina', 5, 17, 6, 8, 5, 8, 4, 8, 8, 1, 7, Weapon$Rauorowl2_getInstance(), null, Special$Glacies_getInstance(), SkillA$SwiftSparrow_getInstance().lv_za3lpa$(2), Skill$Companion_getInstance().NONE, SkillC$AtkPloy_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30B5\u30FC\u30EA\u30E3', 1, WeaponType$RTOME_getInstance(), MoveType$INFANTRY_getInstance(), 'Tharja', 4, 17, 8, 8, 6, 5, 6, 7, 8, 4, 3, Weapon$Rauorblade2_getInstance(), null, Special$Vengeance_getInstance(), SkillA$DartingBlow_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$SpurRes_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30B5\u30CA\u30AD', 1, WeaponType$RTOME_getInstance(), MoveType$INFANTRY_getInstance(), 'Sanaki', 5, 16, 9, 7, 4, 8, 4, 9, 5, 2, 8, Weapon$Cymbeline_getInstance(), Assist$HarshCommand_getInstance(), null, SkillA$TriangleAdept_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$HoneAtk_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30BB\u30EA\u30AB', 1, WeaponType$RTOME_getInstance(), MoveType$INFANTRY_getInstance(), 'Celica', 5, 17, 8, 7, 5, 7, 6, 7, 8, 4, 3, Weapon$Ragnarok_getInstance(), null, Special$BlazingLight_getInstance(), SkillA$DistantDef_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$SpurDef_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30BD\u30D5\u30A3\u30FC\u30E4', 1, WeaponType$RTOME_getInstance(), MoveType$INFANTRY_getInstance(), 'Sophia', 3, 18, 9, 4, 6, 7, 6, 7, 3, 6, 6, Weapon$Fenrir2_getInstance(), null, Special$DragonFang_getInstance(), SkillA$WardingBlow_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$FortifyRes_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30D8\u30F3\u30EA\u30FC', 1, WeaponType$RTOME_getInstance(), MoveType$INFANTRY_getInstance(), 'Henry', 3, 19, 6, 5, 8, 6, 8, 4, 4, 7, 5, Weapon$Rauorraven2_getInstance(), null, Special$Ignis_getInstance(), SkillA$DefiantDef_getInstance().lv_za3lpa$(3), SkillB$GTomeBreaker_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30EA\u30EA\u30FC\u30CA', 1, WeaponType$RTOME_getInstance(), MoveType$INFANTRY_getInstance(), 'Lilina', 4, 16, 9, 6, 4, 9, 5, 9, 5, 3, 6, Weapon$Bolganone2_getInstance(), null, Special$GrowingFlame_getInstance(), SkillA$Attack_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$SpurAtk_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30EC\u30A4', 1, WeaponType$RTOME_getInstance(), MoveType$INFANTRY_getInstance(), 'Raigh', 3, 17, 8, 7, 5, 7, 5, 7, 6, 4, 6, Weapon$Rauorwolf2_getInstance(), Assist$RallyAttack_getInstance(), null, SkillA$Hp_getInstance().lv_za3lpa$(3), SkillB$SealRes_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30EC\u30AA\u30F3', 1, WeaponType$RTOME_getInstance(), MoveType$CAVALRY_getInstance(), 'Leo', 5, 17, 7, 5, 6, 8, 6, 6, 4, 5, 6, Weapon$Brynhildr_getInstance(), null, Special$BlazingLight_getInstance(), Skill$Companion_getInstance().NONE, SkillB$QuickRiposte_getInstance().lv_za3lpa$(3), SkillC$SavageBlow_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30EC\u30AA\u30F3\uFF08\u590F\uFF09', 1, WeaponType$RTOME_getInstance(), MoveType$INFANTRY_getInstance(), 'Leo (Summer)', 5, 18, 8, 5, 6, 7, 5, 7, 6, 1, 9, Weapon$TomatoTome2_getInstance(), null, Special$Iceberg_getInstance(), Skill$Companion_getInstance().NONE, SkillB$SealRes_getInstance().lv_za3lpa$(3), SkillC$AtkPloy_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30C1\u30AD\uFF08\u5927\u4EBA\uFF09', 1, WeaponType$DRAGON_getInstance(), MoveType$INFANTRY_getInstance(), 'Tiki(A)', 3, 18, 7, 6, 9, 7, 6, 9, 4, 8, 4, Weapon$LightningBreath2_getInstance(), null, Special$Bonfire_getInstance(), SkillA$DefiantAtk_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$SpurRes_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30C1\u30AD\uFF08\u5E7C\uFF09', 1, WeaponType$DRAGON_getInstance(), MoveType$INFANTRY_getInstance(), 'Tiki(Y)', 5, 15, 5, 4, 8, 7, 8, 8, 8, 7, 6, Weapon$Flametongue2_getInstance(), null, Special$GrowingFlame_getInstance(), SkillA$ArmoredBlow_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$BreathOfLife_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30A2\u30AF\u30A2', 2, WeaponType$LANCE_getInstance(), MoveType$INFANTRY_getInstance(), 'Azura', 5, 17, 5, 7, 4, 6, 5, 8, 8, 4, 6, Weapon$SapphireLance2_getInstance(), Assist$Sing_getInstance(), null, SkillA$Speed_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$FortifyRes_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30A2\u30D9\u30EB', 2, WeaponType$LANCE_getInstance(), MoveType$CAVALRY_getInstance(), 'Abel', 4, 17, 7, 8, 8, 6, 6, 8, 7, 4, 5, Weapon$BraveLance2_getInstance(), null, Special$Aegis_getInstance(), SkillA$Hp_getInstance().lv_za3lpa$(3), SkillB$SwordBreaker_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30F4\u30A1\u30EB\u30BF\u30FC', 2, WeaponType$LANCE_getInstance(), MoveType$FLIER_getInstance(), 'Valter', 3, 18, 8, 9, 8, 4, 7, 7, 6, 8, 3, Weapon$CursedLance_getInstance(), null, Special$Luna_getInstance(), SkillA$DartingBlow_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$PanicPloy_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30A6\u30A7\u30F3\u30C7\u30A3', 2, WeaponType$LANCE_getInstance(), MoveType$ARMORED_getInstance(), 'Gwendolyn', 3, 23, 8, 5, 12, 6, 8, 6, 5, 8, 6, Weapon$KillerLance2_getInstance(), null, Special$Escutcheon_getInstance(), Skill$Companion_getInstance().NONE, SkillB$DragBack_getInstance(), SkillC$HoneArmor_getInstance());
    this.createItem_kwpjrd$('\u30A8\u30B9\u30C8', 2, WeaponType$LANCE_getInstance(), MoveType$FLIER_getInstance(), 'Est', 3, 17, 9, 8, 5, 8, 5, 8, 6, 5, 7, Weapon$HeavySpear2_getInstance(), Assist$Shove_getInstance(), null, SkillA$DefiantRes_getInstance().lv_za3lpa$(3), SkillB$SealSpd_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30A8\u30D5\u30E9\u30E0', 2, WeaponType$LANCE_getInstance(), MoveType$INFANTRY_getInstance(), 'Ephraim', 5, 19, 9, 6, 8, 5, 8, 8, 5, 7, 3, Weapon$Siegmund_getInstance(), null, Special$Moonbow_getInstance(), Skill$Companion_getInstance().NONE, SkillB$SealDef_getInstance().lv_za3lpa$(3), SkillC$ThreatenDef_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30A8\u30EB\u30D5\u30A3', 2, WeaponType$LANCE_getInstance(), MoveType$ARMORED_getInstance(), 'Effie', 4, 22, 12, 5, 11, 4, 9, 9, 4, 6, 5, Weapon$SilverLance2_getInstance(), Assist$Smite_getInstance(), null, SkillA$DeathBlow_getInstance().lv_za3lpa$(3), SkillB$WaryFighter_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30AA\u30B9\u30AB\u30FC', 2, WeaponType$LANCE_getInstance(), MoveType$CAVALRY_getInstance(), 'Oscar', 5, 18, 7, 8, 7, 6, 6, 8, 8, 5, 3, Weapon$SapphireLance2_getInstance(), Assist$RallySpdDef_getInstance(), null, Skill$Companion_getInstance().NONE, SkillB$LanceBreaker_getInstance().lv_za3lpa$(3), SkillC$SpurSpdDef_getInstance().lv_za3lpa$(2));
    this.createItem_kwpjrd$('\u30AA\u30DC\u30ED', 2, WeaponType$LANCE_getInstance(), MoveType$INFANTRY_getInstance(), 'Oboro', 3, 18, 8, 7, 9, 5, 6, 7, 5, 8, 5, Weapon$HeavySpear2_getInstance(), Assist$RallyDefense_getInstance(), null, Skill$Companion_getInstance().NONE, SkillB$SealDef_getInstance().lv_za3lpa$(3), SkillC$ThreatenRes_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30AB\u30C1\u30E5\u30A2', 2, WeaponType$LANCE_getInstance(), MoveType$FLIER_getInstance(), 'Catria', 4, 17, 7, 10, 7, 6, 6, 7, 7, 6, 5, Weapon$KillerLance2_getInstance(), null, Special$Luna_getInstance(), SkillA$ArmoredBlow_getInstance().lv_za3lpa$(3), SkillB$SealAtk_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30AB\u30DF\u30E5', 2, WeaponType$LANCE_getInstance(), MoveType$CAVALRY_getInstance(), 'Camus', 3, 18, 8, 9, 7, 4, 7, 7, 7, 7, 2, Weapon$Gradivus_getInstance(), null, Special$GrowingThunder_getInstance(), SkillA$GranisShield_getInstance(), Skill$Companion_getInstance().NONE, SkillC$GoadCavalry_getInstance());
    this.createItem_kwpjrd$('\u30AB\u30E0\u30A4\uFF08\u5973\uFF09', 2, WeaponType$DRAGON_getInstance(), MoveType$INFANTRY_getInstance(), 'Corrin(F)', 3, 19, 8, 6, 8, 6, 6, 5, 9, 8, 3, Weapon$DarkBreath2_getInstance(), null, Special$DragonGaze_getInstance(), Skill$Companion_getInstance().NONE, SkillB$SealRes_getInstance().lv_za3lpa$(3), SkillC$HoneAtk_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30AF\u30EC\u30A2', 2, WeaponType$LANCE_getInstance(), MoveType$FLIER_getInstance(), 'Clair', 5, 18, 7, 8, 5, 9, 5, 5, 9, 5, 7, Weapon$SilverLance2_getInstance(), Assist$HarshCommand_getInstance(), null, Skill$Companion_getInstance().NONE, SkillB$HitAndRun_getInstance(), SkillC$SpurSpd_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30AF\u30EC\u30FC\u30D9', 2, WeaponType$LANCE_getInstance(), MoveType$CAVALRY_getInstance(), 'Clive', 4, 19, 9, 6, 8, 4, 8, 7, 5, 7, 3, Weapon$SilverLance2_getInstance(), null, Special$Escutcheon_getInstance(), SkillA$Defense_getInstance().lv_za3lpa$(3), SkillB$HitAndRun_getInstance(), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30B7\u30FC\u30C0\uFF08\u82B1\u5AC1\uFF09', 2, WeaponType$BTOME_getInstance(), MoveType$INFANTRY_getInstance(), 'Caeda (Bride)', 5, 16, 7, 9, 4, 8, 4, 6, 9, 3, 6, Weapon$BlessedBouquet2_getInstance(), null, Special$Iceberg_getInstance(), SkillA$AtkRes_getInstance().lv_za3lpa$(2), Skill$Companion_getInstance().NONE, SkillC$HoneSpd_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30B8\u30A7\u30A4\u30AC\u30F3', 2, WeaponType$LANCE_getInstance(), MoveType$CAVALRY_getInstance(), 'Jagen', 3, 20, 8, 7, 8, 11, 4, 5, 4, 4, 7, Weapon$SilverLance2_getInstance(), null, Special$Aegis_getInstance(), SkillA$Furry_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$FortifyCavalry_getInstance());
    this.createItem_kwpjrd$('\u30B7\u30E3\u30FC\u30ED\u30C3\u30C6\uFF08\u82B1\u5AC1\uFF09', 2, WeaponType$LANCE_getInstance(), MoveType$INFANTRY_getInstance(), 'Charlotte (Bride)', 5, 20, 10, 8, 5, 4, 8, 8, 7, 5, 3, Weapon$FirstBite2_getInstance(), Assist$Smite_getInstance(), null, SkillA$WindBoost_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$ThreatenAtk_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30B7\u30E3\u30CB\u30FC', 2, WeaponType$LANCE_getInstance(), MoveType$FLIER_getInstance(), 'Shanna', 3, 17, 8, 9, 6, 7, 6, 6, 8, 5, 6, Weapon$KillerLance2_getInstance(), null, Special$Iceberg_getInstance(), Skill$Companion_getInstance().NONE, SkillB$Desperation_getInstance().lv_za3lpa$(3), SkillC$ThreatenSpd_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30B7\u30E3\u30ED\u30F3', 2, WeaponType$LANCE_getInstance(), MoveType$INFANTRY_getInstance(), 'Sharena', 2, 19, 8, 8, 7, 5, 7, 7, 7, 6, 4, Weapon$Fensalir_getInstance(), Assist$RallyAttack_getInstance(), null, SkillA$Speed_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$FortifyDef_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30BD\u30EF\u30EC', 2, WeaponType$LANCE_getInstance(), MoveType$CAVALRY_getInstance(), 'Sully', 3, 18, 7, 8, 7, 6, 7, 5, 8, 4, 6, Weapon$SapphireLance2_getInstance(), Assist$DrawBack_getInstance(), null, Skill$Companion_getInstance().NONE, SkillB$SwordBreaker_getInstance().lv_za3lpa$(3), SkillC$SpurDef_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30BF\u30FC\u30CA', 2, WeaponType$LANCE_getInstance(), MoveType$FLIER_getInstance(), 'Tana', 5, 17, 8, 10, 6, 6, 5, 8, 8, 5, 5, Weapon$Vidofinir_getInstance(), null, Special$Moonbow_getInstance(), SkillA$SpdDef_getInstance().lv_za3lpa$(2), Skill$Companion_getInstance().NONE, SkillC$Guidance_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30C4\u30D0\u30AD', 2, WeaponType$LANCE_getInstance(), MoveType$FLIER_getInstance(), 'Subaki', 3, 18, 6, 9, 9, 5, 6, 5, 8, 8, 4, Weapon$SapphireLance2_getInstance(), Assist$Swap_getInstance(), null, SkillA$Resistance_getInstance().lv_za3lpa$(3), SkillB$QuickRiposte_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30C6\u30A3\u30A2\u30E2', 2, WeaponType$LANCE_getInstance(), MoveType$FLIER_getInstance(), 'Cordelia', 4, 18, 9, 9, 5, 6, 6, 8, 8, 4, 5, Weapon$BraveLance2_getInstance(), null, Special$Galeforce_getInstance(), SkillA$TriangleAdept_getInstance().lv_za3lpa$(3), SkillB$Pass_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30C9\u30CB', 2, WeaponType$LANCE_getInstance(), MoveType$INFANTRY_getInstance(), 'Donnel', 3, 17, 7, 5, 6, 4, 8, 9, 7, 8, 5, Weapon$BraveLance2_getInstance(), Assist$ReciprocalAid_getInstance(), null, SkillA$Hp_getInstance().lv_za3lpa$(3), SkillB$DragBack_getInstance(), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30CD\u30D5\u30A7\u30CB\u30FC', 2, WeaponType$LANCE_getInstance(), MoveType$INFANTRY_getInstance(), 'Nephenee', 5, 18, 7, 9, 8, 5, 5, 7, 8, 8, 3, Weapon$SlayingLance2_getInstance(), null, Special$Moonbow_getInstance(), SkillA$AtkSpd_getInstance().lv_za3lpa$(2), SkillB$Wrath_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30D4\u30A8\u30EA', 2, WeaponType$LANCE_getInstance(), MoveType$CAVALRY_getInstance(), 'Peri', 4, 16, 9, 9, 6, 6, 5, 7, 7, 4, 7, Weapon$KillerLance2_getInstance(), null, Special$Glimmer_getInstance(), SkillA$Resistance_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$ThreatenDef_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30D2\u30CE\u30AB', 2, WeaponType$LANCE_getInstance(), MoveType$FLIER_getInstance(), 'Hinoka', 5, 19, 7, 8, 6, 7, 6, 9, 7, 5, 4, Weapon$BraveLance2_getInstance(), null, Special$BlazingWind_getInstance(), SkillA$DefiantDef_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$HoneFliers_getInstance());
    this.createItem_kwpjrd$('\u30D5\u30ED\u30EA\u30FC\u30CA', 2, WeaponType$LANCE_getInstance(), MoveType$FLIER_getInstance(), 'Florina', 3, 18, 7, 8, 6, 8, 7, 6, 5, 5, 8, Weapon$HeavySpear2_getInstance(), Assist$ArdentSacrifice_getInstance(), null, SkillA$DartingBlow_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$BreathOfLife_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30D9\u30EB\u30AF\u30C8', 2, WeaponType$LANCE_getInstance(), MoveType$CAVALRY_getInstance(), 'Berkut', 3, 19, 8, 5, 7, 7, 7, 8, 4, 7, 4, Weapon$BerkutsLance2_getInstance(), null, Special$BlazingFlame_getInstance(), SkillA$WaterBoost_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$WardCavalry_getInstance());
    this.createItem_kwpjrd$('\u30DE\u30FC\u30AF\u30B9\uFF08\u6625\uFF09', 2, WeaponType$LANCE_getInstance(), MoveType$CAVALRY_getInstance(), 'Xander (Spring)', 5, 18, 6, 6, 9, 7, 6, 5, 6, 8, 5, Weapon$CarrotLance2_getInstance(), Assist$Swap_getInstance(), null, Skill$Companion_getInstance().NONE, SkillB$LiveForHonor_getInstance(), SkillC$FortifyDef_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30DE\u30C1\u30EB\u30C0', 2, WeaponType$LANCE_getInstance(), MoveType$CAVALRY_getInstance(), 'Mathilda', 5, 16, 7, 8, 7, 8, 5, 6, 7, 4, 8, Weapon$Ridersbane2_getInstance(), Assist$RallyResistance_getInstance(), null, Skill$Companion_getInstance().NONE, SkillB$CancelAffinity_getInstance().lv_za3lpa$(3), SkillC$HoneAtk_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30EB\u30AB', 2, WeaponType$LANCE_getInstance(), MoveType$INFANTRY_getInstance(), 'Lukas', 5, 19, 9, 5, 10, 4, 8, 8, 4, 9, 2, Weapon$KillerLance2_getInstance(), null, Special$SacredCowl_getInstance(), SkillA$FortressDef_getInstance().lv_za3lpa$(3), SkillB$Obstruct_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30EB\u30AD\u30CA\uFF08\u6625\uFF09', 2, WeaponType$BTOME_getInstance(), MoveType$INFANTRY_getInstance(), 'Lucina (Spring)', 5, 16, 7, 10, 5, 6, 5, 6, 8, 4, 5, Weapon$BlueEgg2_getInstance(), Assist$RallySpeed_getInstance(), null, SkillA$SwiftSparrow_getInstance().lv_za3lpa$(2), SkillB$SealRes_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30EB\u30AD\u30CA\uFF08\u7DCF\u9078\u6319\uFF09', 2, WeaponType$LANCE_getInstance(), MoveType$INFANTRY_getInstance(), 'Lucina (Brave Heroes)', 5, 17, 8, 10, 8, 4, 7, 8, 8, 5, 3, Weapon$Geirskogul_getInstance(), null, Special$Aether_getInstance(), SkillA$SturdyBlow_getInstance().lv_za3lpa$(2), Skill$Companion_getInstance().NONE, SkillC$DriveSpd_getInstance().lv_za3lpa$(2));
    this.createItem_kwpjrd$('\u30EB\u30D5\u30EC\uFF08\u590F\uFF09', 2, WeaponType$LANCE_getInstance(), MoveType$INFANTRY_getInstance(), 'Robin(F) (Summer)', 5, 18, 8, 8, 6, 7, 4, 7, 8, 6, 6, Weapon$DeftHarpoon2_getInstance(), Assist$Reposition_getInstance(), null, SkillA$HpDef_getInstance().lv_za3lpa$(2), Skill$Companion_getInstance().NONE, SkillC$LanceValor_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30ED\u30C7\u30A3', 2, WeaponType$LANCE_getInstance(), MoveType$CAVALRY_getInstance(), 'Roderick', 5, 18, 7, 8, 6, 7, 6, 7, 8, 5, 4, Weapon$FiresweepLance2_getInstance(), Assist$RallyDefRes_getInstance(), null, Skill$Companion_getInstance().NONE, SkillB$DragBack_getInstance(), SkillC$DriveDef_getInstance().lv_za3lpa$(2));
    this.createItem_kwpjrd$('\u30A6\u30EB\u30B9\u30E9', 2, WeaponType$BTOME_getInstance(), MoveType$CAVALRY_getInstance(), 'Ursula', 3, 16, 7, 8, 4, 8, 5, 6, 7, 3, 6, Weapon$Blarwolf2_getInstance(), null, Special$GrowingThunder_getInstance(), SkillA$DeathBlow_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$ThreatenRes_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30AA\u30FC\u30C7\u30A3\u30F3', 2, WeaponType$BTOME_getInstance(), MoveType$INFANTRY_getInstance(), 'Odin', 3, 19, 5, 8, 6, 6, 7, 4, 7, 5, 5, Weapon$Blarblade2_getInstance(), null, Special$Moonbow_getInstance(), SkillA$DefiantAtk_getInstance().lv_za3lpa$(3), SkillB$RTomeBreaker_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30AA\u30EB\u30A8\u30F3', 2, WeaponType$BTOME_getInstance(), MoveType$CAVALRY_getInstance(), 'Olwen', 5, 17, 7, 8, 5, 6, 4, 5, 8, 3, 7, Weapon$DireThunder_getInstance(), Assist$Reposition_getInstance(), null, SkillA$WardingBlow_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$WardCavalry_getInstance());
    this.createItem_kwpjrd$('\u30AB\u30E0\u30A4\uFF08\u590F\uFF09', 2, WeaponType$BTOME_getInstance(), MoveType$FLIER_getInstance(), 'Corrin(F) (Summer)', 5, 17, 7, 8, 5, 7, 4, 7, 8, 4, 5, Weapon$SealifeTome2_getInstance(), null, Special$DragonFang_getInstance(), SkillA$SwiftStrike_getInstance().lv_za3lpa$(2), Skill$Companion_getInstance().NONE, SkillC$FortifyFliers_getInstance());
    this.createItem_kwpjrd$('\u30B7\u30B0\u30EC\uFF08\u821E\u8E0F\u796D\uFF09', 2, WeaponType$BTOME_getInstance(), MoveType$INFANTRY_getInstance(), 'Shigure (Performing Arts)', 5, 15, 7, 5, 4, 5, 5, 7, 7, 4, 5, Weapon$DancersScore2_getInstance(), Assist$Sing_getInstance(), null, Skill$Companion_getInstance().NONE, SkillB$GeyserDance_getInstance().lv_za3lpa$(2), SkillC$BTomeValor_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30C6\u30A3\u30EB\u30C6\u30E5', 2, WeaponType$BTOME_getInstance(), MoveType$INFANTRY_getInstance(), 'Tailtiu', 5, 17, 8, 9, 4, 6, 6, 7, 8, 2, 5, Weapon$Blarblade2_getInstance(), Assist$RallySpdRes_getInstance(), null, SkillA$AtkRes_getInstance().lv_za3lpa$(2), Skill$Companion_getInstance().NONE, SkillC$DriveSpd_getInstance().lv_za3lpa$(2));
    this.createItem_kwpjrd$('\u30C7\u30E5\u30FC\u30C6', 2, WeaponType$BTOME_getInstance(), MoveType$INFANTRY_getInstance(), 'Delthea', 5, 16, 10, 8, 3, 7, 4, 8, 8, 1, 7, Weapon$DarkAura_getInstance(), null, Special$Miracle_getInstance(), SkillA$DeathBlow_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$DriveAtk_getInstance().lv_za3lpa$(2));
    this.createItem_kwpjrd$('\u30E1\u30A4', 2, WeaponType$BTOME_getInstance(), MoveType$INFANTRY_getInstance(), 'Mae', 5, 16, 10, 7, 3, 8, 5, 8, 7, 2, 6, Weapon$Blarowl2_getInstance(), Assist$DrawBack_getInstance(), null, Skill$Companion_getInstance().NONE, SkillB$Desperation_getInstance().lv_za3lpa$(3), SkillC$BTomeExperience_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30E9\u30A4\u30F3\u30CF\u30EB\u30C8', 2, WeaponType$BTOME_getInstance(), MoveType$CAVALRY_getInstance(), 'Reinhardt', 4, 16, 8, 6, 5, 8, 6, 7, 4, 6, 4, Weapon$DireThunder_getInstance(), null, Special$BlazingThunder_getInstance(), Skill$Companion_getInstance().NONE, SkillB$Vantage_getInstance().lv_za3lpa$(3), SkillC$GoadCavalry_getInstance());
    this.createItem_kwpjrd$('\u30EA\u30F3\u30C0', 2, WeaponType$BTOME_getInstance(), MoveType$INFANTRY_getInstance(), 'Linde', 5, 16, 9, 10, 4, 5, 5, 8, 8, 1, 6, Weapon$Aura_getInstance(), Assist$ArdentSacrifice_getInstance(), null, SkillA$Speed_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$FortifyRes_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30EB\u30D5\u30EC\uFF08\u7537\uFF09', 2, WeaponType$BTOME_getInstance(), MoveType$INFANTRY_getInstance(), 'Robin(M)', 3, 18, 7, 7, 7, 5, 6, 6, 6, 6, 4, Weapon$Blarraven2_getInstance(), null, Special$Bonfire_getInstance(), SkillA$DefiantSpd_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$SpurDef_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30CB\u30CB\u30A2\u30F3', 2, WeaponType$DRAGON_getInstance(), MoveType$INFANTRY_getInstance(), 'Ninian', 5, 16, 5, 7, 6, 5, 8, 5, 8, 4, 6, Weapon$LightBreath2_getInstance(), Assist$Dance_getInstance(), null, Skill$Companion_getInstance().NONE, SkillB$EscapeRoute_getInstance().lv_za3lpa$(3), SkillC$FortifyDragons_getInstance());
    this.createItem_kwpjrd$('\u30CE\u30CE', 2, WeaponType$DRAGON_getInstance(), MoveType$INFANTRY_getInstance(), 'Nowi', 4, 17, 6, 5, 6, 5, 9, 9, 6, 7, 6, Weapon$LightningBreath2_getInstance(), Assist$RallyDefense_getInstance(), null, SkillA$Defense_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$ThreatenRes_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30A2\u30A4\u30AF\uFF08\u7DCF\u9078\u6319\uFF09', 3, WeaponType$AXE_getInstance(), MoveType$INFANTRY_getInstance(), 'Ike (Brave Heroes)', 5, 17, 10, 6, 9, 5, 8, 8, 6, 8, 3, Weapon$Urvan_getInstance(), null, Special$Aether_getInstance(), SkillA$SteadyBreath_getInstance(), SkillB$BeorcsBlessing_getInstance(), SkillC$ThreatenDef_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30A2\u30AF\u30A2\uFF08\u821E\u8E0F\u796D\uFF09', 3, WeaponType$AXE_getInstance(), MoveType$INFANTRY_getInstance(), 'Azura (Performing Arts)', 5, 16, 6, 8, 3, 6, 5, 8, 8, 4, 6, Weapon$Uror_getInstance(), Assist$Sing_getInstance(), null, SkillA$TriangleAdept_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$DriveRes_getInstance().lv_za3lpa$(2));
    this.createItem_kwpjrd$('\u30A2\u30E1\u30EA\u30A2', 3, WeaponType$AXE_getInstance(), MoveType$ARMORED_getInstance(), 'Amelia', 5, 19, 6, 8, 9, 4, 9, 9, 8, 8, 5, Weapon$SlayingAxe2_getInstance(), null, Special$HolyVestments_getInstance(), SkillA$EarthBoost_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$ArmorMarch_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30A2\u30F3\u30CA', 3, WeaponType$AXE_getInstance(), MoveType$INFANTRY_getInstance(), 'Anna', 2, 19, 7, 10, 5, 6, 6, 6, 9, 4, 6, Weapon$Noatun_getInstance(), null, Special$Astra_getInstance(), Skill$Companion_getInstance().NONE, SkillB$Vantage_getInstance().lv_za3lpa$(3), SkillC$SpurRes_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30AB\u30DF\u30E9', 3, WeaponType$AXE_getInstance(), MoveType$FLIER_getInstance(), 'Camilla', 4, 18, 8, 8, 6, 7, 5, 6, 7, 6, 7, Weapon$BraveAxe2_getInstance(), null, Special$DragonGaze_getInstance(), SkillA$DartingBlow_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$SavageBlow_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30AE\u30E5\u30F3\u30BF\u30FC', 3, WeaponType$AXE_getInstance(), MoveType$CAVALRY_getInstance(), 'Gunter', 3, 21, 10, 7, 11, 5, 6, 6, 4, 6, 2, Weapon$SilverAxe2_getInstance(), Assist$HarshCommand_getInstance(), null, SkillA$ArmoredBlow_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$HoneCavalry_getInstance());
    this.createItem_kwpjrd$('\u30AF\u30ED\u30E0\uFF08\u6625\uFF09', 3, WeaponType$AXE_getInstance(), MoveType$INFANTRY_getInstance(), 'Chrom (Spring)', 5, 19, 9, 8, 6, 5, 7, 8, 7, 6, 3, Weapon$CarrotAxe2_getInstance(), Assist$Shove_getInstance(), null, SkillA$AtkDef_getInstance().lv_za3lpa$(2), Skill$Companion_getInstance().NONE, SkillC$AxeExperience_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30B7\u30FC\u30DE', 3, WeaponType$AXE_getInstance(), MoveType$ARMORED_getInstance(), 'Sheena', 4, 21, 8, 6, 12, 7, 7, 6, 5, 7, 8, Weapon$KillerAxe2_getInstance(), null, Special$Escutcheon_getInstance(), SkillA$SvalinnShield_getInstance(), Skill$Companion_getInstance().NONE, SkillC$FortifyArmor_getInstance());
    this.createItem_kwpjrd$('\u30BB\u30EB\u30B8\u30E5', 3, WeaponType$AXE_getInstance(), MoveType$FLIER_getInstance(), 'Cherche', 3, 20, 10, 6, 8, 3, 8, 9, 5, 7, 2, Weapon$Hammer2_getInstance(), Assist$Pivot_getInstance(), null, SkillA$Attack_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$FortifyDef_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30C1\u30AD\uFF08\u590F\uFF09', 3, WeaponType$AXE_getInstance(), MoveType$INFANTRY_getInstance(), 'Tiki(A) (Summer)', 5, 18, 8, 6, 8, 7, 4, 9, 7, 7, 4, Weapon$MelonCrusher2_getInstance(), null, Special$Sol_getInstance(), SkillA$CloseDef_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$AxeValor_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30C6\u30A3\u30A2\u30DE\u30C8', 3, WeaponType$AXE_getInstance(), MoveType$CAVALRY_getInstance(), 'Titania', 5, 18, 6, 8, 6, 8, 5, 6, 8, 5, 6, Weapon$EmeraldAxe2_getInstance(), Assist$ReciprocalAid_getInstance(), null, SkillA$ArmoredBlow_getInstance().lv_za3lpa$(3), SkillB$Guard_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30CA\u30FC\u30B7\u30A7\u30F3', 3, WeaponType$AXE_getInstance(), MoveType$FLIER_getInstance(), 'Narcian', 2, 18, 7, 7, 8, 7, 7, 6, 6, 7, 5, Weapon$EmeraldAxe2_getInstance(), null, Special$Vengeance_getInstance(), Skill$Companion_getInstance().NONE, SkillB$LanceBreaker_getInstance().lv_za3lpa$(3), SkillC$SavageBlow_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30CB\u30CE', 3, WeaponType$GTOME_getInstance(), MoveType$INFANTRY_getInstance(), 'Nino', 3, 16, 7, 10, 4, 7, 4, 8, 8, 3, 5, Weapon$Gronnblade2_getInstance(), Assist$DrawBack_getInstance(), null, SkillA$Resistance_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$HoneAtk_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30D0\u30FC\u30C4', 3, WeaponType$AXE_getInstance(), MoveType$INFANTRY_getInstance(), 'Barst', 3, 20, 9, 8, 6, 4, 8, 7, 7, 7, 2, Weapon$BraveAxe2_getInstance(), Assist$Reposition_getInstance(), null, Skill$Companion_getInstance().NONE, SkillB$KnockBack_getInstance(), SkillC$SpurAtk_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30D0\u30A2\u30C8\u30EB', 3, WeaponType$AXE_getInstance(), MoveType$INFANTRY_getInstance(), 'Bartre', 3, 21, 10, 6, 7, 3, 9, 8, 5, 8, 1, Weapon$Hammer2_getInstance(), Assist$Smite_getInstance(), null, SkillA$Furry_getInstance().lv_za3lpa$(3), SkillB$BrashAssault_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30CF\u30ED\u30EB\u30C9', 3, WeaponType$AXE_getInstance(), MoveType$INFANTRY_getInstance(), 'Arthur', 3, 19, 8, 7, 8, 5, 7, 7, 6, 6, 5, Weapon$EmeraldAxe2_getInstance(), Assist$Swap_getInstance(), null, SkillA$Hp_getInstance().lv_za3lpa$(3), SkillB$LanceBreaker_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30D5\u30A1', 3, WeaponType$DRAGON_getInstance(), MoveType$INFANTRY_getInstance(), 'Fae', 4, 16, 5, 4, 6, 8, 10, 9, 7, 5, 6, Weapon$LightBreath2_getInstance(), Assist$DrawBack_getInstance(), null, Skill$Companion_getInstance().NONE, SkillB$Renewal_getInstance().lv_za3lpa$(3), SkillC$ThreatenAtk_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30D5\u30EC\u30C7\u30EA\u30AF', 3, WeaponType$AXE_getInstance(), MoveType$CAVALRY_getInstance(), 'Frederick', 3, 19, 9, 6, 8, 4, 7, 8, 5, 9, 1, Weapon$Hammer2_getInstance(), null, Special$Luna_getInstance(), Skill$Companion_getInstance().NONE, SkillB$WingsOfMercy_getInstance().lv_za3lpa$(3), SkillC$FortifyDef_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30D8\u30AF\u30C8\u30EB', 3, WeaponType$AXE_getInstance(), MoveType$ARMORED_getInstance(), 'Hector', 5, 24, 10, 5, 11, 4, 9, 8, 5, 8, 3, Weapon$Armoads_getInstance(), null, Special$Pavise_getInstance(), SkillA$DistantCounter_getInstance(), Skill$Companion_getInstance().NONE, SkillC$GoadArmor_getInstance());
    this.createItem_kwpjrd$('\u30D9\u30EB\u30AB', 3, WeaponType$AXE_getInstance(), MoveType$FLIER_getInstance(), 'Beruka', 3, 20, 7, 6, 9, 5, 8, 6, 4, 9, 4, Weapon$KillerAxe2_getInstance(), null, Special$Glimmer_getInstance(), SkillA$DefiantDef_getInstance().lv_za3lpa$(3), SkillB$Lunge_getInstance(), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30DB\u30FC\u30AF\u30A2\u30A4', 3, WeaponType$AXE_getInstance(), MoveType$INFANTRY_getInstance(), 'Hawkeye', 4, 21, 9, 5, 6, 6, 7, 7, 4, 6, 7, Weapon$KillerAxe2_getInstance(), null, Special$GrowingLight_getInstance(), SkillA$DeathBlow_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$ThreatenAtk_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30DE\u30FC\u30AF\u30B9\uFF08\u590F\uFF09', 3, WeaponType$AXE_getInstance(), MoveType$INFANTRY_getInstance(), 'Xander (Summer)', 5, 19, 8, 6, 8, 6, 7, 7, 7, 9, 1, Weapon$LilithFloatie2_getInstance(), null, Special$Bonfire_getInstance(), SkillA$FireBoost_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$InfantryPulse_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30DF\u30B7\u30A7\u30A4\u30EB', 3, WeaponType$AXE_getInstance(), MoveType$FLIER_getInstance(), 'Michalis', 3, 19, 8, 7, 9, 4, 7, 8, 5, 8, 3, Weapon$Hauteclere_getInstance(), null, Special$BlazingThunder_getInstance(), SkillA$IotesShield_getInstance(), Skill$Companion_getInstance().NONE, SkillC$ThreatenDef_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30DF\u30CD\u30EB\u30D0', 3, WeaponType$AXE_getInstance(), MoveType$FLIER_getInstance(), 'Minerva', 5, 18, 7, 9, 8, 5, 6, 7, 7, 7, 4, Weapon$Hauteclere_getInstance(), null, Special$SacredCowl_getInstance(), SkillA$LifeAndDeath_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$WardFliers_getInstance());
    this.createItem_kwpjrd$('\u30EC\u30A4\u30F4\u30A1\u30F3', 3, WeaponType$AXE_getInstance(), MoveType$INFANTRY_getInstance(), 'Raven', 4, 19, 8, 9, 6, 5, 6, 8, 8, 5, 4, Weapon$BraveAxe2_getInstance(), null, Special$Sol_getInstance(), SkillA$DefiantSpd_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$ThreatenDef_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30ED\u30FC\u30ED\u30FC', 3, WeaponType$AXE_getInstance(), MoveType$INFANTRY_getInstance(), 'Legion', 3, 20, 10, 9, 5, 3, 8, 8, 8, 4, 3, Weapon$LegionsAxe2_getInstance(), null, Special$Reprisal_getInstance(), SkillA$Furry_getInstance().lv_za3lpa$(3), SkillB$Obstruct_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30A2\u30BA\u30FC\u30EB\uFF08\u821E\u8E0F\u796D\uFF09', 3, WeaponType$GTOME_getInstance(), MoveType$INFANTRY_getInstance(), 'Inigo (Performing Arts)', 5, 15, 6, 7, 5, 3, 6, 6, 8, 4, 4, Weapon$DancersRing2_getInstance(), Assist$Dance_getInstance(), null, Skill$Companion_getInstance().NONE, SkillB$GaleDance_getInstance().lv_za3lpa$(3), SkillC$HoneAtk_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30A8\u30EA\u30FC\u30BC\uFF08\u590F\uFF09', 3, WeaponType$GTOME_getInstance(), MoveType$INFANTRY_getInstance(), 'Elise (Summer)', 5, 17, 10, 8, 3, 6, 4, 8, 8, 3, 5, Weapon$HibiscusTome2_getInstance(), Assist$RallyAtkRes_getInstance(), null, SkillA$SpdRes_getInstance().lv_za3lpa$(2), Skill$Companion_getInstance().NONE, SkillC$GTomeValor_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30AB\u30DF\u30E9\uFF08\u6625\uFF09', 3, WeaponType$GTOME_getInstance(), MoveType$FLIER_getInstance(), 'Camilla (Spring)', 5, 17, 9, 6, 8, 4, 6, 8, 5, 6, 3, Weapon$GreenEgg2_getInstance(), Assist$RallyAttack_getInstance(), null, SkillA$DefiantSpd_getInstance().lv_za3lpa$(3), SkillB$LiveForBounty_getInstance(), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30BB\u30B7\u30EA\u30A2', 3, WeaponType$GTOME_getInstance(), MoveType$CAVALRY_getInstance(), 'Cecilia', 3, 17, 8, 6, 5, 7, 5, 7, 5, 4, 6, Weapon$Gronnraven2_getInstance(), Assist$RallyResistance_getInstance(), null, SkillA$Attack_getInstance().lv_za3lpa$(3), SkillB$EscapeRoute_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30BB\u30CD\u30EA\u30AA', 3, WeaponType$GTOME_getInstance(), MoveType$INFANTRY_getInstance(), 'Soren', 5, 17, 7, 9, 4, 7, 5, 8, 7, 2, 6, Weapon$Rexcalibur2_getInstance(), null, Special$GrowingWind_getInstance(), Skill$Companion_getInstance().NONE, SkillB$Watersweep_getInstance().lv_za3lpa$(3), SkillC$FortifyRes_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30BD\u30CB\u30A2', 3, WeaponType$GTOME_getInstance(), MoveType$INFANTRY_getInstance(), 'Sonya', 5, 17, 7, 7, 5, 8, 5, 8, 7, 1, 7, Weapon$DarkExcalibur_getInstance(), null, Special$Moonbow_getInstance(), SkillA$DeathBlow_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$ResPloy_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30C7\u30A3\u30A2\u30C9\u30E9', 3, WeaponType$GTOME_getInstance(), MoveType$INFANTRY_getInstance(), 'Deirdre', 5, 17, 9, 6, 3, 9, 5, 7, 6, 2, 8, Weapon$DivineNaga_getInstance(), Assist$ArdentSacrifice_getInstance(), null, Skill$Companion_getInstance().NONE, SkillB$QuickRiposte_getInstance().lv_za3lpa$(3), SkillC$SpdPloy_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30DC\u30FC\u30A4', 3, WeaponType$GTOME_getInstance(), MoveType$INFANTRY_getInstance(), 'Boey', 5, 19, 7, 5, 8, 5, 7, 6, 6, 7, 2, Weapon$Gronnowl2_getInstance(), null, Special$Ignis_getInstance(), SkillA$EarthBoost_getInstance().lv_za3lpa$(3), SkillB$Renewal_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30DE\u30EA\u30AF', 3, WeaponType$GTOME_getInstance(), MoveType$INFANTRY_getInstance(), 'Merric', 4, 19, 7, 8, 6, 4, 7, 5, 7, 6, 3, Weapon$Excalibur_getInstance(), null, Special$GrowingWind_getInstance(), SkillA$Hp_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$SpurRes_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30E6\u30EA\u30A2', 3, WeaponType$GTOME_getInstance(), MoveType$INFANTRY_getInstance(), 'Julia', 5, 16, 9, 7, 4, 8, 6, 8, 5, 2, 7, Weapon$Naga_getInstance(), null, Special$DragonFang_getInstance(), SkillA$Resistance_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$BreathOfLife_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30EB\u30D5\u30EC\uFF08\u5973\uFF09', 3, WeaponType$GTOME_getInstance(), MoveType$INFANTRY_getInstance(), 'Robin(F)', 2, 18, 7, 7, 7, 5, 6, 6, 6, 6, 4, Weapon$Gronnwolf2_getInstance(), null, Special$Ignis_getInstance(), SkillA$DefiantRes_getInstance().lv_za3lpa$(3), SkillB$BTomeBreaker_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30A2\u30B5\u30DE', 0, WeaponType$STAFF_getInstance(), MoveType$INFANTRY_getInstance(), 'Azama', 3, 19, 4, 7, 8, 6, 7, 4, 5, 7, 5, Weapon$Pain_getInstance(), Assist$Martyr_getInstance(), Special$SolidEarthBalm_getInstance(), Skill$Companion_getInstance().NONE, Skill$Companion_getInstance().NONE, SkillC$ThreatenAtk_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30F4\u30A3\u30AA\u30FC\u30EB', 0, WeaponType$BOW_getInstance(), MoveType$INFANTRY_getInstance(), 'Virion', 3, 20, 7, 7, 7, 3, 8, 7, 7, 5, 1, Weapon$SilverBow2_getInstance(), null, Special$Astra_getInstance(), SkillA$DefiantRes_getInstance().lv_za3lpa$(3), SkillB$SealSpd_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30A8\u30D5\u30A3', 0, WeaponType$BOW_getInstance(), MoveType$INFANTRY_getInstance(), 'Faye', 5, 16, 6, 3, 4, 7, 8, 7, 6, 6, 7, Weapon$FiresweepBow2_getInstance(), null, Special$Noontime_getInstance(), Skill$Companion_getInstance().NONE, SkillB$WingsOfMercy_getInstance().lv_za3lpa$(3), SkillC$BowExperience_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30A8\u30EA\u30FC\u30BC', 0, WeaponType$STAFF_getInstance(), MoveType$CAVALRY_getInstance(), 'Elise', 5, 15, 8, 8, 4, 8, 3, 7, 7, 3, 7, Weapon$Gravity_getInstance(), Assist$Recover_getInstance(), Special$KindledFireBalm_getInstance(), Skill$Companion_getInstance().NONE, SkillB$LiveToServe_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30AA\u30EA\u30F4\u30A3\u30A8\uFF08\u821E\u8E0F\u796D\uFF09', 0, WeaponType$DAGGER_getInstance(), MoveType$INFANTRY_getInstance(), 'Olivia (Performing Arts)', 5, 15, 6, 8, 3, 4, 5, 6, 8, 2, 7, Weapon$DancersFan2_getInstance(), Assist$Dance_getInstance(), null, SkillA$DistantDef_getInstance().lv_za3lpa$(3), SkillB$BlazeDance_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30AC\u30A4\u30A2', 0, WeaponType$DAGGER_getInstance(), MoveType$INFANTRY_getInstance(), 'Gaius', 3, 18, 7, 10, 5, 4, 7, 6, 8, 4, 3, Weapon$RogueDagger2_getInstance(), Assist$RallySpeed_getInstance(), null, SkillA$DefiantAtk_getInstance().lv_za3lpa$(3), SkillB$Pass_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30AC\u30A4\u30A2\uFF08\u590F\uFF09', 0, WeaponType$BOW_getInstance(), MoveType$INFANTRY_getInstance(), 'Gaius (Summer)', 5, 17, 8, 9, 4, 6, 4, 6, 9, 3, 6, Weapon$RefreshingBolt2_getInstance(), null, Special$Astra_getInstance(), Skill$Companion_getInstance().NONE, SkillB$Vantage_getInstance().lv_za3lpa$(3), SkillC$DefPloy_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30AB\u30B2\u30ED\u30A6', 0, WeaponType$DAGGER_getInstance(), MoveType$INFANTRY_getInstance(), 'Kagero', 4, 16, 9, 8, 5, 6, 3, 8, 7, 4, 6, Weapon$PoisonDagger2_getInstance(), null, Special$Reprisal_getInstance(), SkillA$WardingBlow_getInstance().lv_za3lpa$(3), SkillB$DaggerBreaker_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30AF\u30E9\u30A4\u30CD', 0, WeaponType$BOW_getInstance(), MoveType$INFANTRY_getInstance(), 'Clarisse', 5, 18, 7, 8, 6, 5, 5, 7, 8, 5, 3, Weapon$ClarissesBow2_getInstance(), null, Special$Glimmer_getInstance(), Skill$Companion_getInstance().NONE, SkillB$PoisonStrike_getInstance().lv_za3lpa$(3), SkillC$ThreatenDef_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30AF\u30E9\u30EA\u30FC\u30CD', 0, WeaponType$STAFF_getInstance(), MoveType$CAVALRY_getInstance(), 'Clarine', 3, 16, 6, 9, 5, 7, 5, 5, 7, 4, 6, Weapon$Fear_getInstance(), Assist$Martyr_getInstance(), Special$SwiftWindsBalm_getInstance(), SkillA$Resistance_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30AF\u30EC\u30A4\u30F3', 0, WeaponType$BOW_getInstance(), MoveType$INFANTRY_getInstance(), 'Klein', 4, 18, 9, 7, 5, 5, 6, 6, 8, 3, 5, Weapon$BraveBow2_getInstance(), null, Special$Glacies_getInstance(), SkillA$DeathBlow_getInstance().lv_za3lpa$(3), SkillB$QuickRiposte_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30B4\u30FC\u30C9\u30F3', 0, WeaponType$BOW_getInstance(), MoveType$INFANTRY_getInstance(), 'Gordin', 3, 19, 7, 6, 8, 4, 7, 7, 5, 7, 2, Weapon$BraveBow2_getInstance(), Assist$Shove_getInstance(), null, SkillA$Attack_getInstance().lv_za3lpa$(3), SkillB$Vantage_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30B5\u30A4\u30BE\u30A6', 0, WeaponType$DAGGER_getInstance(), MoveType$INFANTRY_getInstance(), 'Saizo', 3, 17, 7, 8, 9, 3, 5, 6, 8, 7, 2, Weapon$SmokeDagger2_getInstance(), Assist$HarshCommand_getInstance(), null, Skill$Companion_getInstance().NONE, SkillB$PoisonStrike_getInstance().lv_za3lpa$(3), SkillC$SpurSpd_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30B5\u30AF\u30E9', 0, WeaponType$STAFF_getInstance(), MoveType$INFANTRY_getInstance(), 'Sakura', 4, 17, 6, 8, 5, 8, 5, 6, 6, 5, 6, Weapon$Fear_getInstance(), Assist$Physic_getInstance(), Special$StillWaterBalm_getInstance(), Skill$Companion_getInstance().NONE, Skill$Companion_getInstance().NONE, SkillC$FortifyDef_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30B8\u30A7\u30CB\u30FC', 0, WeaponType$STAFF_getInstance(), MoveType$INFANTRY_getInstance(), 'Genny', 5, 17, 9, 6, 4, 8, 3, 8, 5, 4, 8, Weapon$Gravity_getInstance(), Assist$Physic_getInstance(), Special$HeavenlyLight_getInstance(), Skill$Companion_getInstance().NONE, SkillB$WrathfulStaff_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30B8\u30E3\u30D5\u30A1\u30EB', 0, WeaponType$DAGGER_getInstance(), MoveType$INFANTRY_getInstance(), 'Jaffar', 5, 17, 7, 9, 6, 5, 7, 5, 7, 5, 4, Weapon$DeathlyDagger_getInstance(), null, Special$Glimmer_getInstance(), SkillA$LifeAndDeath_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$ThreatenSpd_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30B8\u30E7\u30FC\u30AB\u30FC', 0, WeaponType$DAGGER_getInstance(), MoveType$INFANTRY_getInstance(), 'Jakob', 4, 17, 7, 9, 6, 5, 6, 6, 6, 5, 5, Weapon$SilverDagger2_getInstance(), Assist$RallyResistance_getInstance(), null, SkillA$Defense_getInstance().lv_za3lpa$(3), SkillB$Renewal_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30B8\u30E7\u30EB\u30B8\u30E5', 0, WeaponType$BOW_getInstance(), MoveType$INFANTRY_getInstance(), 'Jeorge', 4, 18, 8, 8, 5, 5, 5, 7, 7, 5, 4, Weapon$Parthia_getInstance(), null, Special$BlazingFlame_getInstance(), Skill$Companion_getInstance().NONE, SkillB$SealAtk_getInstance().lv_za3lpa$(3), SkillC$SpurSpd_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30BB\u30FC\u30E9', 0, WeaponType$STAFF_getInstance(), MoveType$INFANTRY_getInstance(), 'Serra', 3, 16, 6, 9, 4, 9, 4, 7, 6, 4, 7, Weapon$Absorb_getInstance(), Assist$Recover_getInstance(), Special$SwiftWindsBalm_getInstance(), Skill$Companion_getInstance().NONE, Skill$Companion_getInstance().NONE, SkillC$HoneAtk_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30BB\u30C4\u30CA', 0, WeaponType$BOW_getInstance(), MoveType$INFANTRY_getInstance(), 'Setsuna', 3, 18, 6, 9, 5, 6, 5, 6, 9, 4, 4, Weapon$AssassinsBow2_getInstance(), Assist$ReciprocalAid_getInstance(), null, SkillA$Hp_getInstance().lv_za3lpa$(3), SkillB$BowBreaker_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30BC\u30ED', 0, WeaponType$BOW_getInstance(), MoveType$INFANTRY_getInstance(), 'Niles', 3, 18, 6, 8, 4, 8, 5, 5, 8, 2, 8, Weapon$KillerBow2_getInstance(), null, Special$Iceberg_getInstance(), SkillA$WardingBlow_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$SpurRes_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30BF\u30AF\u30DF', 0, WeaponType$BOW_getInstance(), MoveType$INFANTRY_getInstance(), 'Takumi', 5, 18, 8, 7, 6, 5, 6, 7, 8, 5, 2, Weapon$FujinYumi_getInstance(), null, Special$Vengeance_getInstance(), SkillA$CloseCounter_getInstance(), Skill$Companion_getInstance().NONE, SkillC$ThreatenSpd_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30C6\u30A3\u30A2\u30E2\uFF08\u82B1\u5AC1\uFF09', 0, WeaponType$BOW_getInstance(), MoveType$INFANTRY_getInstance(), 'Cordelia (Bride)', 5, 17, 9, 9, 4, 5, 5, 8, 8, 3, 4, Weapon$CupidArrow2_getInstance(), Assist$RallyAtkSpd_getInstance(), null, Skill$Companion_getInstance().NONE, SkillB$EscapeRoute_getInstance().lv_za3lpa$(3), SkillC$BreathOfLife_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30D2\u30FC\u30CB\u30A2\u30B9', 0, WeaponType$BOW_getInstance(), MoveType$INFANTRY_getInstance(), 'Innes', 5, 16, 9, 8, 4, 7, 5, 7, 8, 1, 7, Weapon$Nidhogg_getInstance(), null, Special$Iceberg_getInstance(), SkillA$FortressRes_getInstance().lv_za3lpa$(3), SkillB$CancelAffinity_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30D5\u30A7\u30EA\u30B7\u30A2', 0, WeaponType$DAGGER_getInstance(), MoveType$INFANTRY_getInstance(), 'Felicia', 3, 15, 6, 11, 3, 9, 5, 4, 8, 3, 8, Weapon$SilverDagger2_getInstance(), null, Special$Glacies_getInstance(), SkillA$Resistance_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$BreathOfLife_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30D7\u30EA\u30B7\u30E9', 0, WeaponType$STAFF_getInstance(), MoveType$CAVALRY_getInstance(), 'Priscilla', 4, 17, 7, 7, 4, 8, 5, 6, 6, 3, 7, Weapon$Panic_getInstance(), Assist$Rehabilitate_getInstance(), Special$StillWaterBalm_getInstance(), Skill$Companion_getInstance().NONE, Skill$Companion_getInstance().NONE, SkillC$SpurDef_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30D5\u30EC\u30C7\u30EA\u30AF\uFF08\u590F\uFF09', 0, WeaponType$DAGGER_getInstance(), MoveType$INFANTRY_getInstance(), 'Frederick (Summer)', 5, 18, 8, 7, 6, 5, 6, 7, 7, 6, 2, Weapon$Seashell2_getInstance(), Assist$ArdentSacrifice_getInstance(), null, SkillA$ArmoredBlow_getInstance().lv_za3lpa$(3), SkillB$SealAtkSpd_getInstance().lv_za3lpa$(2), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30DE\u30B7\u30E5\u30FC', 0, WeaponType$DAGGER_getInstance(), MoveType$INFANTRY_getInstance(), 'Matthew', 3, 17, 6, 10, 6, 5, 7, 5, 7, 7, 2, Weapon$RogueDagger2_getInstance(), Assist$ReciprocalAid_getInstance(), null, Skill$Companion_getInstance().NONE, SkillB$PoisonStrike_getInstance().lv_za3lpa$(3), SkillC$HoneSpd_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30DE\u30EA\u30A2', 0, WeaponType$STAFF_getInstance(), MoveType$INFANTRY_getInstance(), 'Maria', 4, 17, 5, 8, 4, 10, 5, 6, 8, 3, 6, Weapon$Panic_getInstance(), Assist$Physic_getInstance(), Special$Miracle_getInstance(), Skill$Companion_getInstance().NONE, Skill$Companion_getInstance().NONE, SkillC$FortifyRes_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30DF\u30B9\u30C8', 0, WeaponType$STAFF_getInstance(), MoveType$INFANTRY_getInstance(), 'Mist', 5, 17, 8, 6, 5, 8, 6, 5, 6, 3, 8, Weapon$Slow_getInstance(), Assist$Recover_getInstance(), Special$Miracle_getInstance(), Skill$Companion_getInstance().NONE, Skill$Companion_getInstance().NONE, SkillC$SpurDefRes_getInstance().lv_za3lpa$(2));
    this.createItem_kwpjrd$('\u30E9\u30B1\u30B7\u30B9', 0, WeaponType$STAFF_getInstance(), MoveType$INFANTRY_getInstance(), 'Lachesis', 4, 17, 6, 8, 5, 8, 6, 8, 4, 4, 6, Weapon$Absorb_getInstance(), Assist$Physic_getInstance(), Special$SolidEarthBalm_getInstance(), Skill$Companion_getInstance().NONE, Skill$Companion_getInstance().NONE, SkillC$SpurRes_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30EA\u30BA', 0, WeaponType$STAFF_getInstance(), MoveType$INFANTRY_getInstance(), 'Lissa', 3, 17, 7, 6, 6, 8, 6, 5, 5, 6, 6, Weapon$Gravity_getInstance(), Assist$Rehabilitate_getInstance(), Special$KindledFireBalm_getInstance(), Skill$Companion_getInstance().NONE, SkillB$Renewal_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30EA\u30D5', 0, WeaponType$STAFF_getInstance(), MoveType$INFANTRY_getInstance(), 'Wrys', 3, 18, 5, 6, 5, 10, 7, 5, 4, 4, 8, Weapon$Slow_getInstance(), Assist$Rehabilitate_getInstance(), Special$HeavenlyLight_getInstance(), Skill$Companion_getInstance().NONE, SkillB$LiveToServe_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30EA\u30F3\uFF08\u82B1\u5AC1\uFF09', 0, WeaponType$STAFF_getInstance(), MoveType$INFANTRY_getInstance(), 'Lyn (Bride)', 5, 17, 6, 10, 6, 5, 6, 6, 7, 4, 5, Weapon$Candlelight_getInstance(), Assist$Rehabilitate_getInstance(), Special$SwiftWindsBalm_getInstance(), Skill$Companion_getInstance().NONE, SkillB$DazzlingStaff_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30EA\u30F3\uFF08\u7DCF\u9078\u6319\uFF09', 0, WeaponType$BOW_getInstance(), MoveType$CAVALRY_getInstance(), 'Lyn (Brave Heroes)', 5, 16, 7, 9, 5, 6, 5, 8, 8, 2, 6, Weapon$Mulagir_getInstance(), null, Special$DragonGaze_getInstance(), SkillA$SwiftSparrow_getInstance().lv_za3lpa$(2), SkillB$SacaesBlessing_getInstance(), SkillC$AtkSmoke_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30EB\u30BB\u30A2', 0, WeaponType$STAFF_getInstance(), MoveType$INFANTRY_getInstance(), 'Lucius', 4, 18, 6, 8, 3, 9, 5, 8, 6, 1, 8, Weapon$Pain_getInstance(), Assist$Martyr_getInstance(), Special$Miracle_getInstance(), SkillA$Hp_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30EC\u30AA', 0, WeaponType$BOW_getInstance(), MoveType$INFANTRY_getInstance(), 'Leon', 5, 17, 8, 6, 8, 5, 6, 8, 7, 6, 1, Weapon$SlayingBow2_getInstance(), null, Special$Ignis_getInstance(), SkillA$Speed_getInstance().lv_za3lpa$(3), SkillB$Guard_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30EC\u30D9\u30C3\u30AB', 0, WeaponType$BOW_getInstance(), MoveType$INFANTRY_getInstance(), 'Rebecca', 4, 18, 7, 8, 6, 5, 5, 6, 8, 3, 6, Weapon$SilverBow2_getInstance(), Assist$ArdentSacrifice_getInstance(), null, SkillA$DartingBlow_getInstance().lv_za3lpa$(3), SkillB$SealAtk_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30D8\u30F3\u30EA\u30FC\uFF08\u53CE\u7A6B\u796D\uFF09', 3, WeaponType$GTOME_getInstance(), MoveType$INFANTRY_getInstance(), 'Henry (Trick or Defeat)', 5, 17, 9, 10, 4, 12, 5, 7, 7, 6, 7, Weapon$SpectralTome2_getInstance(), null, Special$Reprisal_getInstance(), Skill$Companion_getInstance().NONE, SkillB$LiveForHonor_getInstance(), SkillC$ArmorMarch_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30B8\u30E7\u30FC\u30AB\u30FC\uFF08\u53CE\u7A6B\u796D\uFF09', 0, WeaponType$BOW_getInstance(), MoveType$ARMORED_getInstance(), 'Jakob (Trick or Defeat)', 5, 20, 9, 6, 9, 8, 6, 8, 4, 7, 7, Weapon$MonstrousBow2_getInstance(), null, null, SkillA$BracingBlow_getInstance().lv_za3lpa$(2), SkillB$WaryFighter_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30CE\u30CE\uFF08\u53CE\u7A6B\u796D\uFF09', 1, WeaponType$RTOME_getInstance(), MoveType$FLIER_getInstance(), 'Nowi (Trick or Defeat)', 5, 17, 8, 6, 5, 8, 4, 8, 8, 3, 5, Weapon$Grimoire_getInstance(), Assist$Reposition_getInstance(), null, SkillA$AtkResBond_getInstance().lv_za3lpa$(3), SkillB$LiveForBounty_getInstance(), SkillC$HoneAtk_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30B5\u30AF\u30E9\uFF08\u53CE\u7A6B\u796D\uFF09', 0, WeaponType$DAGGER_getInstance(), MoveType$INFANTRY_getInstance(), 'Sakura (Trick or Defeat)', 5, 16, 8, 8, 4, 8, 4, 7, 8, 1, 8, Weapon$KittyPaddle2_getInstance(), null, Special$Glacies_getInstance(), SkillA$WardingStance_getInstance().lv_za3lpa$(3), SkillB$Guard_getInstance().lv_za3lpa$(3), SkillC$DaggerValor_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30C9\u30EB\u30AB\u30B9', 3, WeaponType$AXE_getInstance(), MoveType$INFANTRY_getInstance(), 'Dorcas', 5, 19, 9, 6, 9, 5, 8, 8, 4, 8, 5, Weapon$StoutTomahawk_getInstance(), null, Special$DragonGaze_getInstance(), SkillA$FierceStance_getInstance().lv_za3lpa$(3), SkillB$QuickRiposte_getInstance().lv_za3lpa$(3), SkillC$InfantryPulse_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30EB\u30FC\u30C6', 2, WeaponType$BTOME_getInstance(), MoveType$INFANTRY_getInstance(), 'Lute', 5, 16, 10, 8, 3, 8, 4, 8, 7, 2, 8, Weapon$WeirdingTome_getInstance(), Assist$RallyAtkRes_getInstance(), null, SkillA$HpRes_getInstance().lv_za3lpa$(2), Skill$Companion_getInstance().NONE, SkillC$ResPloy_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30EF\u30E6', 1, WeaponType$SWORD_getInstance(), MoveType$INFANTRY_getInstance(), 'Mia', 5, 16, 8, 12, 6, 6, 6, 7, 9, 6, 5, Weapon$ResoluteBlade_getInstance(), null, Special$Luna_getInstance(), SkillA$FlashingBlade_getInstance().lv_za3lpa$(3), SkillB$Vantage_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30E8\u30B7\u30E5\u30A2', 1, WeaponType$SWORD_getInstance(), MoveType$INFANTRY_getInstance(), 'Joshua', 5, 18, 7, 9, 8, 6, 6, 7, 8, 6, 6, Weapon$Audhulma_getInstance(), null, Special$Moonbow_getInstance(), SkillA$CloseDef_getInstance().lv_za3lpa$(3), SkillB$Windsweep_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30D5\u30A3\u30E8\u30EB\u30E0', 2, WeaponType$LANCE_getInstance(), MoveType$INFANTRY_getInstance(), 'Fjorm', 5, 17, 8, 7, 8, 8, 6, 6, 7, 6, 8, Weapon$Leiptr_getInstance(), null, Special$IceMirror_getInstance(), SkillA$AtkResBond_getInstance(), SkillB$ShieldPulse_getInstance().lv_za3lpa$(3), SkillC$DriveAtk_getInstance().lv_za3lpa$(2));
    this.createItem_kwpjrd$('\u30B7\u30E3\u30E9', 3, WeaponType$GTOME_getInstance(), MoveType$INFANTRY_getInstance(), 'Rhajat', 5, 17, 9, 8, 4, 7, 5, 8, 8, 4, 4, Weapon$KeenGronnwolf2_getInstance(), Assist$RallyAtkDef_getInstance(), null, SkillA$DistantDef_getInstance(), Skill$Companion_getInstance().NONE, SkillC$SavageBlow_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30B7\u30CE\u30CE\u30E1', 2, WeaponType$LANCE_getInstance(), MoveType$INFANTRY_getInstance(), 'Shiro', 5, 19, 9, 6, 9, 5, 6, 8, 7, 8, 4, Weapon$BrightNaginata_getInstance(), Assist$Swap_getInstance(), null, SkillA$SteadyStance_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$DefTactic_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30B8\u30FC\u30AF\u30D9\u30EB\u30C8', 1, WeaponType$SWORD_getInstance(), MoveType$CAVALRY_getInstance(), 'Siegbert', 5, 19, 8, 9, 7, 3, 6, 8, 8, 7, 2, Weapon$DarkGreatsword_getInstance(), null, Special$DragonFang_getInstance(), SkillA$DeathBlow_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$AtkTactic_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30BD\u30EC\u30A4\u30E6', 1, WeaponType$SWORD_getInstance(), MoveType$INFANTRY_getInstance(), 'Soleil', 5, 18, 10, 9, 6, 5, 5, 9, 8, 6, 5, Weapon$FiresweepSword2_getInstance(), null, Special$BlazingWind_getInstance(), SkillA$DartingBlow_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$DriveRes_getInstance().lv_za3lpa$(2));
    this.createItem_kwpjrd$('\u30AF\u30ED\u30E0\uFF08\u51AC\uFF09', 3, WeaponType$AXE_getInstance(), MoveType$ARMORED_getInstance(), "Chrom (Winter's Envoy)", 5, 25, 12, 4, 9, 5, 8, 9, 3, 8, 7, Weapon$SackOGifts2_getInstance(), Assist$Pivot_getInstance(), null, SkillA$BrazenAtkDef_getInstance().lv_za3lpa$(3), SkillB$WaryFighter_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE);
    this.createItem_kwpjrd$('\u30EA\u30BA\uFF08\u51AC\uFF09', 3, WeaponType$AXE_getInstance(), MoveType$ARMORED_getInstance(), "Lissa (Winter's Envoy)", 5, 21, 9, 8, 9, 8, 6, 7, 6, 8, 8, Weapon$Handbell2_getInstance(), null, Special$Bonfire_getInstance(), Skill$Companion_getInstance().NONE, SkillB$BoldFighter_getInstance(), SkillC$FortifyArmor_getInstance());
    this.createItem_kwpjrd$('\u30EB\u30D5\u30EC\uFF08\u51AC\uFF09', 2, WeaponType$LANCE_getInstance(), MoveType$ARMORED_getInstance(), "Robin (M) (Winter's Envoy)", 5, 23, 9, 8, 9, 6, 6, 8, 8, 8, 5, Weapon$Tannenboom2_getInstance(), Assist$ReciprocalAid_getInstance(), Special$BlazingWind_getInstance(), SkillA$BrazenAtkSpd_getInstance().lv_za3lpa$(3), Skill$Companion_getInstance().NONE, SkillC$ArmorMarch_getInstance().lv_za3lpa$(3));
    this.createItem_kwpjrd$('\u30B5\u30FC\u30EA\u30E3\uFF08\u51AC\uFF09', 1, WeaponType$RTOME_getInstance(), MoveType$ARMORED_getInstance(), "Tharja (Winter's Envoy)", 5, 19, 10, 5, 8, 10, 7, 7, 2, 8, 8, Weapon$Candelabra2_getInstance(), null, Special$Iceberg_getInstance(), SkillA$CloseCounter_getInstance(), SkillB$VengefulFighter_getInstance().lv_za3lpa$(3), SkillC$RTomeValor_getInstance().lv_za3lpa$(3));
  };
  StandardBaseHero.prototype.createItem_kwpjrd$ = function (name, color, weaponType, moveType, usName, minRarity, hp, atk, spd, def, res, hpgrowth, atkgrowth, spdgrowth, defgrowth, resgrowth, weapon, assist, special, aSkill, bSkill, cSkill) {
    if (name === void 0)
      name = '';
    if (color === void 0)
      color = 0;
    if (weaponType === void 0)
      weaponType = WeaponType$SWORD_getInstance();
    if (moveType === void 0)
      moveType = MoveType$INFANTRY_getInstance();
    if (usName === void 0)
      usName = '';
    if (minRarity === void 0)
      minRarity = 0;
    if (hp === void 0)
      hp = 0;
    if (atk === void 0)
      atk = 0;
    if (spd === void 0)
      spd = 0;
    if (def === void 0)
      def = 0;
    if (res === void 0)
      res = 0;
    if (hpgrowth === void 0)
      hpgrowth = 0;
    if (atkgrowth === void 0)
      atkgrowth = 0;
    if (spdgrowth === void 0)
      spdgrowth = 0;
    if (defgrowth === void 0)
      defgrowth = 0;
    if (resgrowth === void 0)
      resgrowth = 0;
    if (weapon === void 0)
      weapon = null;
    if (assist === void 0)
      assist = null;
    if (special === void 0)
      special = null;
    if (aSkill === void 0)
      aSkill = Skill$Companion_getInstance().NONE;
    if (bSkill === void 0)
      bSkill = Skill$Companion_getInstance().NONE;
    if (cSkill === void 0)
      cSkill = Skill$Companion_getInstance().NONE;
    var item = new BaseHero(color, weaponType, moveType, minRarity, name, usName, hp, atk, spd, def, res, hpgrowth, atkgrowth, spdgrowth, defgrowth, resgrowth, weapon != null ? weapon : Skill$Companion_getInstance().NONE, assist != null ? assist : Skill$Companion_getInstance().NONE, special != null ? special : Skill$Companion_getInstance().NONE, aSkill, bSkill, cSkill);
    this.ITEMS_0.add_11rb$(item);
    this.ITEMMAP_0.put_xwzc9p$(item.name, item);
    this.ITEMMAP_0.put_xwzc9p$(item.usName, item);
  };
  StandardBaseHero.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'StandardBaseHero',
    interfaces: []
  };
  var StandardBaseHero_instance = null;
  function StandardBaseHero_getInstance() {
    if (StandardBaseHero_instance === null) {
      new StandardBaseHero();
    }
    return StandardBaseHero_instance;
  }
  function Assist(name, ordinal, jp, type, level, preSkill) {
    if (level === void 0)
      level = 0;
    if (preSkill === void 0)
      preSkill = Skill$Companion_getInstance().NONE;
    Enum.call(this);
    this.jp_6nrvcg$_0 = jp;
    this.type_7p5y3o$_0 = type;
    this.level_to173a$_0 = level;
    this.preSkill_7hg9k8$_0 = preSkill;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Assist_initFields() {
    Assist_initFields = function () {
    };
    Assist$RallyAttack_instance = new Assist('RallyAttack', 0, '\u653B\u6483\u306E\u5FDC\u63F4', Skill$SkillType$ASSIST_getInstance());
    Assist$RallySpeed_instance = new Assist('RallySpeed', 1, '\u901F\u3055\u306E\u5FDC\u63F4', Skill$SkillType$ASSIST_getInstance());
    Assist$RallyDefense_instance = new Assist('RallyDefense', 2, '\u5B88\u5099\u306E\u5FDC\u63F4', Skill$SkillType$ASSIST_getInstance());
    Assist$RallyResistance_instance = new Assist('RallyResistance', 3, '\u9B54\u9632\u306E\u5FDC\u63F4', Skill$SkillType$ASSIST_getInstance());
    Assist$RallyAtkSpd_instance = new Assist('RallyAtkSpd', 4, '\u653B\u6483\u901F\u3055\u306E\u5FDC\u63F4', Skill$SkillType$ASSIST_getInstance());
    Assist$RallyAtkDef_instance = new Assist('RallyAtkDef', 5, '\u653B\u6483\u5B88\u5099\u306E\u5FDC\u63F4', Skill$SkillType$ASSIST_getInstance());
    Assist$RallyAtkRes_instance = new Assist('RallyAtkRes', 6, '\u653B\u6483\u9B54\u9632\u306E\u5FDC\u63F4', Skill$SkillType$ASSIST_getInstance());
    Assist$RallyDefRes_instance = new Assist('RallyDefRes', 7, '\u5B88\u5099\u9B54\u9632\u306E\u5FDC\u63F4', Skill$SkillType$ASSIST_getInstance());
    Assist$RallySpdDef_instance = new Assist('RallySpdDef', 8, '\u901F\u3055\u5B88\u5099\u306E\u5FDC\u63F4', Skill$SkillType$ASSIST_getInstance());
    Assist$RallySpdRes_instance = new Assist('RallySpdRes', 9, '\u901F\u3055\u9B54\u9632\u306E\u5FDC\u63F4', Skill$SkillType$ASSIST_getInstance());
    Assist$Sing_instance = new Assist('Sing', 10, '\u6B4C\u3046', Skill$SkillType$ASSIST_getInstance());
    Assist$Dance_instance = new Assist('Dance', 11, '\u8E0A\u308B', Skill$SkillType$ASSIST_getInstance());
    Assist$ReciprocalAid_instance = new Assist('ReciprocalAid', 12, '\u76F8\u4E92\u63F4\u52A9', Skill$SkillType$ASSIST_getInstance());
    Assist$Heal_instance = new Assist('Heal', 13, '\u30E9\u30A4\u30D6', Skill$SkillType$ASSIST_getInstance());
    Assist$Reconcile_instance = new Assist('Reconcile', 14, '\u30D2\u30FC\u30EB', Skill$SkillType$ASSIST_getInstance());
    Assist$Rehabilitate_instance = new Assist('Rehabilitate', 15, '\u30EA\u30D0\u30FC\u30B9', Skill$SkillType$ASSIST_getInstance());
    Assist$Mend_instance = new Assist('Mend', 16, '\u30EA\u30E9\u30A4\u30D6', Skill$SkillType$ASSIST_getInstance());
    Assist$Recover_instance = new Assist('Recover', 17, '\u30EA\u30AB\u30D0\u30FC', Skill$SkillType$ASSIST_getInstance());
    Assist$Physic_instance = new Assist('Physic', 18, '\u30EA\u30D6\u30ED\u30FC', Skill$SkillType$ASSIST_getInstance());
    Assist$Martyr_instance = new Assist('Martyr', 19, '\u30BB\u30A4\u30F3\u30C4', Skill$SkillType$ASSIST_getInstance());
    Assist$ArdentSacrifice_instance = new Assist('ArdentSacrifice', 20, '\u732E\u8EAB', Skill$SkillType$ASSIST_getInstance());
    Assist$Swap_instance = new Assist('Swap', 21, '\u5165\u308C\u66FF\u3048', Skill$SkillType$ASSIST_getInstance());
    Assist$Pivot_instance = new Assist('Pivot', 22, '\u56DE\u308A\u8FBC\u307F', Skill$SkillType$ASSIST_getInstance());
    Assist$Reposition_instance = new Assist('Reposition', 23, '\u5F15\u304D\u623B\u3057', Skill$SkillType$ASSIST_getInstance());
    Assist$DrawBack_instance = new Assist('DrawBack', 24, '\u5F15\u304D\u5BC4\u305B', Skill$SkillType$ASSIST_getInstance());
    Assist$Shove_instance = new Assist('Shove', 25, '\u4F53\u5F53\u305F\u308A', Skill$SkillType$ASSIST_getInstance());
    Assist$Smite_instance = new Assist('Smite', 26, '\u3076\u3061\u304B\u307E\u3057', Skill$SkillType$ASSIST_getInstance());
    Assist$HarshCommand_instance = new Assist('HarshCommand', 27, '\u4E00\u559D', Skill$SkillType$ASSIST_getInstance());
    Assist$Companion_getInstance();
  }
  Object.defineProperty(Assist.prototype, 'jp', {
    get: function () {
      return this.jp_6nrvcg$_0;
    }
  });
  Object.defineProperty(Assist.prototype, 'type', {
    get: function () {
      return this.type_7p5y3o$_0;
    }
  });
  Object.defineProperty(Assist.prototype, 'level', {
    get: function () {
      return this.level_to173a$_0;
    }
  });
  Object.defineProperty(Assist.prototype, 'preSkill', {
    get: function () {
      return this.preSkill_7hg9k8$_0;
    }
  });
  var Assist$RallyAttack_instance;
  function Assist$RallyAttack_getInstance() {
    Assist_initFields();
    return Assist$RallyAttack_instance;
  }
  var Assist$RallySpeed_instance;
  function Assist$RallySpeed_getInstance() {
    Assist_initFields();
    return Assist$RallySpeed_instance;
  }
  var Assist$RallyDefense_instance;
  function Assist$RallyDefense_getInstance() {
    Assist_initFields();
    return Assist$RallyDefense_instance;
  }
  var Assist$RallyResistance_instance;
  function Assist$RallyResistance_getInstance() {
    Assist_initFields();
    return Assist$RallyResistance_instance;
  }
  var Assist$RallyAtkSpd_instance;
  function Assist$RallyAtkSpd_getInstance() {
    Assist_initFields();
    return Assist$RallyAtkSpd_instance;
  }
  var Assist$RallyAtkDef_instance;
  function Assist$RallyAtkDef_getInstance() {
    Assist_initFields();
    return Assist$RallyAtkDef_instance;
  }
  var Assist$RallyAtkRes_instance;
  function Assist$RallyAtkRes_getInstance() {
    Assist_initFields();
    return Assist$RallyAtkRes_instance;
  }
  var Assist$RallyDefRes_instance;
  function Assist$RallyDefRes_getInstance() {
    Assist_initFields();
    return Assist$RallyDefRes_instance;
  }
  var Assist$RallySpdDef_instance;
  function Assist$RallySpdDef_getInstance() {
    Assist_initFields();
    return Assist$RallySpdDef_instance;
  }
  var Assist$RallySpdRes_instance;
  function Assist$RallySpdRes_getInstance() {
    Assist_initFields();
    return Assist$RallySpdRes_instance;
  }
  var Assist$Sing_instance;
  function Assist$Sing_getInstance() {
    Assist_initFields();
    return Assist$Sing_instance;
  }
  var Assist$Dance_instance;
  function Assist$Dance_getInstance() {
    Assist_initFields();
    return Assist$Dance_instance;
  }
  var Assist$ReciprocalAid_instance;
  function Assist$ReciprocalAid_getInstance() {
    Assist_initFields();
    return Assist$ReciprocalAid_instance;
  }
  var Assist$Heal_instance;
  function Assist$Heal_getInstance() {
    Assist_initFields();
    return Assist$Heal_instance;
  }
  var Assist$Reconcile_instance;
  function Assist$Reconcile_getInstance() {
    Assist_initFields();
    return Assist$Reconcile_instance;
  }
  var Assist$Rehabilitate_instance;
  function Assist$Rehabilitate_getInstance() {
    Assist_initFields();
    return Assist$Rehabilitate_instance;
  }
  var Assist$Mend_instance;
  function Assist$Mend_getInstance() {
    Assist_initFields();
    return Assist$Mend_instance;
  }
  var Assist$Recover_instance;
  function Assist$Recover_getInstance() {
    Assist_initFields();
    return Assist$Recover_instance;
  }
  var Assist$Physic_instance;
  function Assist$Physic_getInstance() {
    Assist_initFields();
    return Assist$Physic_instance;
  }
  var Assist$Martyr_instance;
  function Assist$Martyr_getInstance() {
    Assist_initFields();
    return Assist$Martyr_instance;
  }
  var Assist$ArdentSacrifice_instance;
  function Assist$ArdentSacrifice_getInstance() {
    Assist_initFields();
    return Assist$ArdentSacrifice_instance;
  }
  var Assist$Swap_instance;
  function Assist$Swap_getInstance() {
    Assist_initFields();
    return Assist$Swap_instance;
  }
  var Assist$Pivot_instance;
  function Assist$Pivot_getInstance() {
    Assist_initFields();
    return Assist$Pivot_instance;
  }
  var Assist$Reposition_instance;
  function Assist$Reposition_getInstance() {
    Assist_initFields();
    return Assist$Reposition_instance;
  }
  var Assist$DrawBack_instance;
  function Assist$DrawBack_getInstance() {
    Assist_initFields();
    return Assist$DrawBack_instance;
  }
  var Assist$Shove_instance;
  function Assist$Shove_getInstance() {
    Assist_initFields();
    return Assist$Shove_instance;
  }
  var Assist$Smite_instance;
  function Assist$Smite_getInstance() {
    Assist_initFields();
    return Assist$Smite_instance;
  }
  var Assist$HarshCommand_instance;
  function Assist$HarshCommand_getInstance() {
    Assist_initFields();
    return Assist$HarshCommand_instance;
  }
  Object.defineProperty(Assist.prototype, 'value', {
    get: function () {
      return replace(this.name, '2', '+');
    }
  });
  Assist.prototype.localeName_miixs2$ = function (locale) {
    if (equals(locale, Locale$JAPAN_getInstance()))
      return this.jp;
    else if (equals(locale, Locale$JAPANESE_getInstance()))
      return this.jp;
    else
      return this.value;
  };
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function Assist$Companion() {
    Assist$Companion_instance = this;
    this.itemMap_0 = LinkedHashMap_init();
  }
  Assist$Companion.prototype.spreadItems = function () {
    var $receiver = Assist$values();
    var tmp$;
    var accumulator = arrayListOf([Skill$Companion_getInstance().NONE]);
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      var list = accumulator;
      list.add_11rb$(element);
      accumulator = list;
    }
    return accumulator;
  };
  Assist$Companion.prototype.valueOfOrNONE_pdl1vj$ = function (key) {
    var tmp$;
    if (key == null)
      return Skill$Companion_getInstance().NONE;
    else
      try {
        if (this.itemMap_0.isEmpty()) {
          var $receiver = Assist$values();
          var tmp$_0;
          for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
            var element = $receiver[tmp$_0];
            this.itemMap_0.put_xwzc9p$(element.jp, element);
          }
          var $receiver_0 = Assist$values();
          var tmp$_1;
          for (tmp$_1 = 0; tmp$_1 !== $receiver_0.length; ++tmp$_1) {
            var element_0 = $receiver_0[tmp$_1];
            this.itemMap_0.put_xwzc9p$(element_0.value, element_0);
          }
        }
        return (tmp$ = this.itemMap_0.get_11rb$(key)) != null ? tmp$ : Assist$valueOf(key);
      }
       catch (e) {
        if (Kotlin.isType(e, Exception)) {
          return Skill$Companion_getInstance().NONE;
        }
         else
          throw e;
      }
  };
  Assist$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Assist$Companion_instance = null;
  function Assist$Companion_getInstance() {
    Assist_initFields();
    if (Assist$Companion_instance === null) {
      new Assist$Companion();
    }
    return Assist$Companion_instance;
  }
  Assist.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Assist',
    interfaces: [Skill, Enum]
  };
  function Assist$values() {
    return [Assist$RallyAttack_getInstance(), Assist$RallySpeed_getInstance(), Assist$RallyDefense_getInstance(), Assist$RallyResistance_getInstance(), Assist$RallyAtkSpd_getInstance(), Assist$RallyAtkDef_getInstance(), Assist$RallyAtkRes_getInstance(), Assist$RallyDefRes_getInstance(), Assist$RallySpdDef_getInstance(), Assist$RallySpdRes_getInstance(), Assist$Sing_getInstance(), Assist$Dance_getInstance(), Assist$ReciprocalAid_getInstance(), Assist$Heal_getInstance(), Assist$Reconcile_getInstance(), Assist$Rehabilitate_getInstance(), Assist$Mend_getInstance(), Assist$Recover_getInstance(), Assist$Physic_getInstance(), Assist$Martyr_getInstance(), Assist$ArdentSacrifice_getInstance(), Assist$Swap_getInstance(), Assist$Pivot_getInstance(), Assist$Reposition_getInstance(), Assist$DrawBack_getInstance(), Assist$Shove_getInstance(), Assist$Smite_getInstance(), Assist$HarshCommand_getInstance()];
  }
  Assist.values = Assist$values;
  function Assist$valueOf(name) {
    switch (name) {
      case 'RallyAttack':
        return Assist$RallyAttack_getInstance();
      case 'RallySpeed':
        return Assist$RallySpeed_getInstance();
      case 'RallyDefense':
        return Assist$RallyDefense_getInstance();
      case 'RallyResistance':
        return Assist$RallyResistance_getInstance();
      case 'RallyAtkSpd':
        return Assist$RallyAtkSpd_getInstance();
      case 'RallyAtkDef':
        return Assist$RallyAtkDef_getInstance();
      case 'RallyAtkRes':
        return Assist$RallyAtkRes_getInstance();
      case 'RallyDefRes':
        return Assist$RallyDefRes_getInstance();
      case 'RallySpdDef':
        return Assist$RallySpdDef_getInstance();
      case 'RallySpdRes':
        return Assist$RallySpdRes_getInstance();
      case 'Sing':
        return Assist$Sing_getInstance();
      case 'Dance':
        return Assist$Dance_getInstance();
      case 'ReciprocalAid':
        return Assist$ReciprocalAid_getInstance();
      case 'Heal':
        return Assist$Heal_getInstance();
      case 'Reconcile':
        return Assist$Reconcile_getInstance();
      case 'Rehabilitate':
        return Assist$Rehabilitate_getInstance();
      case 'Mend':
        return Assist$Mend_getInstance();
      case 'Recover':
        return Assist$Recover_getInstance();
      case 'Physic':
        return Assist$Physic_getInstance();
      case 'Martyr':
        return Assist$Martyr_getInstance();
      case 'ArdentSacrifice':
        return Assist$ArdentSacrifice_getInstance();
      case 'Swap':
        return Assist$Swap_getInstance();
      case 'Pivot':
        return Assist$Pivot_getInstance();
      case 'Reposition':
        return Assist$Reposition_getInstance();
      case 'DrawBack':
        return Assist$DrawBack_getInstance();
      case 'Shove':
        return Assist$Shove_getInstance();
      case 'Smite':
        return Assist$Smite_getInstance();
      case 'HarshCommand':
        return Assist$HarshCommand_getInstance();
      default:throwISE('No enum constant jp.blogspot.turanukimaru.fehs.skill.Assist.' + name);
    }
  }
  Assist.valueOf_61zpoe$ = Assist$valueOf;
  function LappedSkill(skill, level) {
    this.skill = skill;
    this.level_cp3tvc$_0 = level;
  }
  Object.defineProperty(LappedSkill.prototype, 'level', {
    get: function () {
      return this.level_cp3tvc$_0;
    }
  });
  LappedSkill.prototype.localeName_miixs2$ = function (locale) {
    if (equals(locale, Locale$JAPAN_getInstance()))
      return this.skill.jp + (this.level > 0 ? ' ' + toString(this.level) : '');
    else if (equals(locale, Locale$JAPANESE_getInstance()))
      return this.skill.jp + (this.level > 0 ? ' ' + toString(this.level) : '');
    else
      return this.skill.value + (this.level > 0 ? ' ' + toString(this.level) : '');
  };
  Object.defineProperty(LappedSkill.prototype, 'value', {
    get: function () {
      return this.skill.value + (this.level > 0 ? ' ' + toString(this.level) : '');
    }
  });
  LappedSkill.prototype.toString = function () {
    return this.value;
  };
  LappedSkill.prototype.equals = function (other) {
    if (Kotlin.isType(other, Skill))
      return equals(other, this.skill) && other.level === this.level;
    else if (Kotlin.isType(other, LappedSkill))
      return equals(other.skill, this.skill) && other.level === this.level;
    else
      return false;
  };
  Object.defineProperty(LappedSkill.prototype, 'jp', {
    get: function () {
      return this.skill.jp;
    }
  });
  Object.defineProperty(LappedSkill.prototype, 'maxLevel', {
    get: function () {
      return this.skill.maxLevel;
    }
  });
  Object.defineProperty(LappedSkill.prototype, 'preSkill', {
    get: function () {
      return this.skill.preSkill;
    }
  });
  Object.defineProperty(LappedSkill.prototype, 'type', {
    get: function () {
      return this.skill.type;
    }
  });
  LappedSkill.prototype.absorb_6zcyla$ = function (battleUnit, target, damage) {
    return this.skill.absorb_6zcyla$(battleUnit, target, damage);
  };
  LappedSkill.prototype.accelerateAttackCooldown_sv9jhu$ = function (battleUnit, lv) {
    return this.skill.accelerateAttackCooldown_sv9jhu$(battleUnit, lv);
  };
  LappedSkill.prototype.afterFightEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.skill.afterFightEffect_sv9jhu$$default(battleUnit, lv);
  };
  LappedSkill.prototype.allBonus_sv9jhu$ = function (battleUnit, i) {
    return this.skill.allBonus_sv9jhu$(battleUnit, i);
  };
  LappedSkill.prototype.antiAccelerateCooldown_sv9jhu$ = function (battleUnit, lv) {
    return this.skill.antiAccelerateCooldown_sv9jhu$(battleUnit, lv);
  };
  LappedSkill.prototype.antiBuffBonus_trfvk0$ = function (battleUnit) {
    return this.skill.antiBuffBonus_trfvk0$(battleUnit);
  };
  LappedSkill.prototype.antiEffectiveAgainst_ut57va$ = function (battleUnit, type) {
    return this.skill.antiEffectiveAgainst_ut57va$(battleUnit, type);
  };
  LappedSkill.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.skill.attackEffect_sv9jhu$$default(battleUnit, lv);
  };
  LappedSkill.prototype.attackHeal_sv9jhu$ = function (battleUnit, lv) {
    return this.skill.attackHeal_sv9jhu$(battleUnit, lv);
  };
  LappedSkill.prototype.attackHpLoss_sv9jhu$ = function (battleUnit, lv) {
    return this.skill.attackHpLoss_sv9jhu$(battleUnit, lv);
  };
  LappedSkill.prototype.attackPain_sv9jhu$ = function (battleUnit, lv) {
    return this.skill.attackPain_sv9jhu$(battleUnit, lv);
  };
  LappedSkill.prototype.attackPlan_p6uegp$$default = function (fightPlan, lv) {
    return this.skill.attackPlan_p6uegp$$default(fightPlan, lv);
  };
  LappedSkill.prototype.beorcsBlessing_sv9jhu$ = function (battleUnit, thisLevel) {
    return this.skill.beorcsBlessing_sv9jhu$(battleUnit, thisLevel);
  };
  LappedSkill.prototype.bladeEffect_trfvk0$ = function (battleUnit) {
    return this.skill.bladeEffect_trfvk0$(battleUnit);
  };
  LappedSkill.prototype.blowAtk_sv9jhu$ = function (battleUnit, lv) {
    return this.skill.blowAtk_sv9jhu$(battleUnit, lv);
  };
  LappedSkill.prototype.blowDef_sv9jhu$ = function (battleUnit, lv) {
    return this.skill.blowDef_sv9jhu$(battleUnit, lv);
  };
  LappedSkill.prototype.blowRes_sv9jhu$ = function (battleUnit, lv) {
    return this.skill.blowRes_sv9jhu$(battleUnit, lv);
  };
  LappedSkill.prototype.blowSpd_sv9jhu$ = function (battleUnit, lv) {
    return this.skill.blowSpd_sv9jhu$(battleUnit, lv);
  };
  LappedSkill.prototype.boostAtk_sv9jhu$ = function (battleUnit, lv) {
    return this.skill.boostAtk_sv9jhu$(battleUnit, lv);
  };
  LappedSkill.prototype.boostDef_sv9jhu$ = function (battleUnit, lv) {
    return this.skill.boostDef_sv9jhu$(battleUnit, lv);
  };
  LappedSkill.prototype.boostRes_sv9jhu$ = function (battleUnit, lv) {
    return this.skill.boostRes_sv9jhu$(battleUnit, lv);
  };
  LappedSkill.prototype.boostSpd_sv9jhu$ = function (battleUnit, lv) {
    return this.skill.boostSpd_sv9jhu$(battleUnit, lv);
  };
  LappedSkill.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.skill.bothEffect_sv9jhu$$default(battleUnit, lv);
  };
  LappedSkill.prototype.brashAssault_sv9jhu$ = function (battleUnit, percentile) {
    return this.skill.brashAssault_sv9jhu$(battleUnit, percentile);
  };
  LappedSkill.prototype.brazenAtk_sv9jhu$ = function (battleUnit, lv) {
    return this.skill.brazenAtk_sv9jhu$(battleUnit, lv);
  };
  LappedSkill.prototype.brazenDef_sv9jhu$ = function (battleUnit, lv) {
    return this.skill.brazenDef_sv9jhu$(battleUnit, lv);
  };
  LappedSkill.prototype.brazenRes_sv9jhu$ = function (battleUnit, lv) {
    return this.skill.brazenRes_sv9jhu$(battleUnit, lv);
  };
  LappedSkill.prototype.brazenSpd_sv9jhu$ = function (battleUnit, lv) {
    return this.skill.brazenSpd_sv9jhu$(battleUnit, lv);
  };
  LappedSkill.prototype.closeDef_sv9jhu$ = function (battleUnit, lv) {
    return this.skill.closeDef_sv9jhu$(battleUnit, lv);
  };
  LappedSkill.prototype.colorAdvantage_sv9jhu$ = function (battleUnit, lv) {
    return this.skill.colorAdvantage_sv9jhu$(battleUnit, lv);
  };
  LappedSkill.prototype.counterAllRange_trfvk0$ = function (battleUnit) {
    return this.skill.counterAllRange_trfvk0$(battleUnit);
  };
  LappedSkill.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.skill.counterEffect_sv9jhu$$default(battleUnit, lv);
  };
  LappedSkill.prototype.counterPlan_p6uegp$$default = function (fightPlan, lv) {
    return this.skill.counterPlan_p6uegp$$default(fightPlan, lv);
  };
  LappedSkill.prototype.damage_96237r$$default = function (battleUnit, target, results, skill) {
    return this.skill.damage_96237r$$default(battleUnit, target, results, skill);
  };
  LappedSkill.prototype.dazzling_sv9jhu$ = function (battleUnit, lv) {
    return this.skill.dazzling_sv9jhu$(battleUnit, lv);
  };
  LappedSkill.prototype.defiantAtk_sv9jhu$ = function (battleUnit, lv) {
    return this.skill.defiantAtk_sv9jhu$(battleUnit, lv);
  };
  LappedSkill.prototype.defiantDef_sv9jhu$ = function (battleUnit, lv) {
    return this.skill.defiantDef_sv9jhu$(battleUnit, lv);
  };
  LappedSkill.prototype.defiantRes_sv9jhu$ = function (battleUnit, lv) {
    return this.skill.defiantRes_sv9jhu$(battleUnit, lv);
  };
  LappedSkill.prototype.defiantSpd_sv9jhu$ = function (battleUnit, lv) {
    return this.skill.defiantSpd_sv9jhu$(battleUnit, lv);
  };
  LappedSkill.prototype.desperation_p6uegp$ = function (fightPlan, lv) {
    return this.skill.desperation_p6uegp$(fightPlan, lv);
  };
  LappedSkill.prototype.disableEachCounter_sv9jhu$ = function (battleUnit, thisLevel) {
    return this.skill.disableEachCounter_sv9jhu$(battleUnit, thisLevel);
  };
  LappedSkill.prototype.distantDef_sv9jhu$ = function (battleUnit, lv) {
    return this.skill.distantDef_sv9jhu$(battleUnit, lv);
  };
  LappedSkill.prototype.doubleAttack_trfvk0$ = function (battleUnit) {
    return this.skill.doubleAttack_trfvk0$(battleUnit);
  };
  LappedSkill.prototype.eachNofollowupable_sv9jhu$ = function (battleUnit, lv) {
    return this.skill.eachNofollowupable_sv9jhu$(battleUnit, lv);
  };
  LappedSkill.prototype.effectedAttackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.skill.effectedAttackEffect_sv9jhu$$default(battleUnit, lv);
  };
  LappedSkill.prototype.effectedCounterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.skill.effectedCounterEffect_sv9jhu$$default(battleUnit, lv);
  };
  LappedSkill.prototype.effectiveAgainst_d5yp1f$ = function (moveType, battleUnit) {
    return this.skill.effectiveAgainst_d5yp1f$(moveType, battleUnit);
  };
  LappedSkill.prototype.effectiveAgainst_58hff6$ = function (weaponType, battleUnit) {
    return this.skill.effectiveAgainst_58hff6$(weaponType, battleUnit);
  };
  LappedSkill.prototype.effectiveAgainstMagic_trfvk0$ = function (battleUnit) {
    return this.skill.effectiveAgainstMagic_trfvk0$(battleUnit);
  };
  LappedSkill.prototype.enemyFullHpBonus_sv9jhu$ = function (battleUnit, i) {
    return this.skill.enemyFullHpBonus_sv9jhu$(battleUnit, i);
  };
  LappedSkill.prototype.equip_emsvym$ = function (armedHero, type) {
    return this.skill.equip_emsvym$(armedHero, type);
  };
  LappedSkill.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.skill.equip_yukhz7$$default(armedHero, lv);
  };
  LappedSkill.prototype.equipAtk_yukhz7$ = function (armedHero, lv) {
    return this.skill.equipAtk_yukhz7$(armedHero, lv);
  };
  LappedSkill.prototype.equipBlade_yukhz7$ = function (armedHero, level) {
    return this.skill.equipBlade_yukhz7$(armedHero, level);
  };
  LappedSkill.prototype.equipBrave_yukhz7$ = function (armedHero, level) {
    return this.skill.equipBrave_yukhz7$(armedHero, level);
  };
  LappedSkill.prototype.equipDef_yukhz7$ = function (armedHero, lv) {
    return this.skill.equipDef_yukhz7$(armedHero, lv);
  };
  LappedSkill.prototype.equipHp_yukhz7$ = function (armedHero, lv) {
    return this.skill.equipHp_yukhz7$(armedHero, lv);
  };
  LappedSkill.prototype.equipKiller_yukhz7$ = function (armedHero, lv) {
    return this.skill.equipKiller_yukhz7$(armedHero, lv);
  };
  LappedSkill.prototype.equipRaven_trfvk0$ = function (battleUnit) {
    return this.skill.equipRaven_trfvk0$(battleUnit);
  };
  LappedSkill.prototype.equipRes_yukhz7$ = function (armedHero, lv) {
    return this.skill.equipRes_yukhz7$(armedHero, lv);
  };
  LappedSkill.prototype.equipSpd_yukhz7$ = function (armedHero, lv) {
    return this.skill.equipSpd_yukhz7$(armedHero, lv);
  };
  LappedSkill.prototype.flashingBlade_sv9jhu$ = function (battleUnit, lv) {
    return this.skill.flashingBlade_sv9jhu$(battleUnit, lv);
  };
  LappedSkill.prototype.followupable_sv9jhu$ = function (battleUnit, lv) {
    return this.skill.followupable_sv9jhu$(battleUnit, lv);
  };
  LappedSkill.prototype.fullHpAtkSpdBonus_sv9jhu$ = function (battleUnit, i) {
    return this.skill.fullHpAtkSpdBonus_sv9jhu$(battleUnit, i);
  };
  LappedSkill.prototype.fullHpBonus_sv9jhu$ = function (battleUnit, i) {
    return this.skill.fullHpBonus_sv9jhu$(battleUnit, i);
  };
  LappedSkill.prototype.furry_yukhz7$ = function (armedHero, lv) {
    return this.skill.furry_yukhz7$(armedHero, lv);
  };
  LappedSkill.prototype.heavyBlade_sv9jhu$ = function (battleUnit, lv) {
    return this.skill.heavyBlade_sv9jhu$(battleUnit, lv);
  };
  LappedSkill.prototype.lifeAndDeath_yukhz7$ = function (armedHero, lv) {
    return this.skill.lifeAndDeath_yukhz7$(armedHero, lv);
  };
  LappedSkill.prototype.log_za3rmp$ = function (s) {
    return this.skill.log_za3rmp$(s);
  };
  LappedSkill.prototype.noFollowupAttack_9jfrn9$ = function (fightPlan) {
    return this.skill.noFollowupAttack_9jfrn9$(fightPlan);
  };
  LappedSkill.prototype.prevent_w6mj9q$$default = function (battleUnit, damage, results, lv) {
    return this.skill.prevent_w6mj9q$$default(battleUnit, damage, results, lv);
  };
  LappedSkill.prototype.reducedDamage_upjsjk$$default = function (battleUnit, damage, lv) {
    return this.skill.reducedDamage_upjsjk$$default(battleUnit, damage, lv);
  };
  LappedSkill.prototype.sacasBlessing_sv9jhu$ = function (battleUnit, thisLevel) {
    return this.skill.sacasBlessing_sv9jhu$(battleUnit, thisLevel);
  };
  LappedSkill.prototype.specialPrevent_upjsjk$$default = function (battleUnit, damage, lv) {
    return this.skill.specialPrevent_upjsjk$$default(battleUnit, damage, lv);
  };
  LappedSkill.prototype.specialTriggered_upjsjk$$default = function (battleUnit, damage, lv) {
    return this.skill.specialTriggered_upjsjk$$default(battleUnit, damage, lv);
  };
  LappedSkill.prototype.steadyAtk_sv9jhu$ = function (battleUnit, lv) {
    return this.skill.steadyAtk_sv9jhu$(battleUnit, lv);
  };
  LappedSkill.prototype.steadyDef_sv9jhu$ = function (battleUnit, lv) {
    return this.skill.steadyDef_sv9jhu$(battleUnit, lv);
  };
  LappedSkill.prototype.steadyRes_sv9jhu$ = function (battleUnit, lv) {
    return this.skill.steadyRes_sv9jhu$(battleUnit, lv);
  };
  LappedSkill.prototype.turnStart_sv9jhu$$default = function (battleUnit, lv) {
    return this.skill.turnStart_sv9jhu$$default(battleUnit, lv);
  };
  LappedSkill.prototype.vantage_p6uegp$ = function (fightPlan, lv) {
    return this.skill.vantage_p6uegp$(fightPlan, lv);
  };
  LappedSkill.prototype.watersweep_sv9jhu$ = function (battleUnit, lv) {
    return this.skill.watersweep_sv9jhu$(battleUnit, lv);
  };
  LappedSkill.prototype.weaponBreaker_y53988$ = function (battleUnit, weapon, lv) {
    return this.skill.weaponBreaker_y53988$(battleUnit, weapon, lv);
  };
  LappedSkill.prototype.windsweep_sv9jhu$ = function (battleUnit, lv) {
    return this.skill.windsweep_sv9jhu$(battleUnit, lv);
  };
  LappedSkill.prototype.wrathfulStaff_sv9jhu$ = function (battleUnit, lv) {
    return this.skill.wrathfulStaff_sv9jhu$(battleUnit, lv);
  };
  LappedSkill.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LappedSkill',
    interfaces: [Skill]
  };
  var nullifiesUs;
  var nullifiesJp;
  function RefineSkill(name, ordinal, us, jp, hp, atk, spd, def, res, refineSkillType, preSkill, level, type) {
    if (us === void 0)
      us = '';
    if (refineSkillType === void 0)
      refineSkillType = RefineSkill$RefineType$NONE_getInstance();
    if (preSkill === void 0)
      preSkill = Skill$Companion_getInstance().NONE;
    if (level === void 0)
      level = 0;
    if (type === void 0)
      type = Skill$SkillType$REFINERY_getInstance();
    Enum.call(this);
    this.us = us;
    this.jp_mhklnb$_0 = jp;
    this.hp = hp;
    this.atk = atk;
    this.spd = spd;
    this.def = def;
    this.res = res;
    this.refineSkillType = refineSkillType;
    this.preSkill_fqi2db$_0 = preSkill;
    this.level_ksdp41$_0 = level;
    this.type_hj0bbf$_0 = type;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function RefineSkill_initFields() {
    RefineSkill_initFields = function () {
    };
    RefineSkill$Range1Atk_instance = new RefineSkill('Range1Atk', 0, 'Atk(melee)', '\u653B\u6483(\u8FD1)', 5, 2, 0, 0, 0, RefineSkill$RefineType$Range1_getInstance());
    RefineSkill$Range1Spd_instance = new RefineSkill('Range1Spd', 1, 'Spd(melee)', '\u901F\u3055(\u8FD1)', 5, 0, 3, 0, 0, RefineSkill$RefineType$Range1_getInstance());
    RefineSkill$Range1Def_instance = new RefineSkill('Range1Def', 2, 'Def(melee)', '\u5B88\u5099(\u8FD1)', 5, 0, 0, 4, 0, RefineSkill$RefineType$Range1_getInstance());
    RefineSkill$Range1Res_instance = new RefineSkill('Range1Res', 3, 'Res(melee)', '\u9B54\u9632(\u8FD1)', 5, 0, 0, 0, 4, RefineSkill$RefineType$Range1_getInstance());
    RefineSkill$Range2Atk_instance = new RefineSkill('Range2Atk', 4, 'Atk(Ranged)', '\u653B\u6483(\u9060)', 2, 1, 0, 0, 0, RefineSkill$RefineType$Range2_getInstance());
    RefineSkill$Range2Spd_instance = new RefineSkill('Range2Spd', 5, 'Spd(Ranged)', '\u901F\u3055(\u9060)', 2, 0, 2, 0, 0, RefineSkill$RefineType$Range2_getInstance());
    RefineSkill$Range2Def_instance = new RefineSkill('Range2Def', 6, 'Def(Ranged)', '\u5B88\u5099(\u9060)', 2, 0, 0, 3, 0, RefineSkill$RefineType$Range2_getInstance());
    RefineSkill$Range2Res_instance = new RefineSkill('Range2Res', 7, 'Res(Ranged)', '\u9B54\u9632(\u9060)', 2, 0, 0, 0, 3, RefineSkill$RefineType$Range2_getInstance());
    new RefineSkill$WrathfulStaff();
    new RefineSkill$DazzlingStaff();
    new RefineSkill$SolKatti();
    new RefineSkill$Mystletainn();
    new RefineSkill$Siegmund();
    new RefineSkill$Hauteclere();
    RefineSkill$FujinYumi_instance = new RefineSkill('FujinYumi', 14, 'Follow', '\u8FFD\u5F93', 0, 0, 0, 0, 0, RefineSkill$RefineType$DependWeapon_getInstance(), Weapon$FujinYumi_getInstance());
    new RefineSkill$DeathlyDagger2();
    new RefineSkill$Armorsmasher();
    new RefineSkill$SlayingSpear();
    new RefineSkill$SlayingHammer();
    new RefineSkill$Zanbato();
    new RefineSkill$Ridersbane();
    new RefineSkill$KeenRauorwolf2();
    new RefineSkill$KeenBlarwolf2();
    new RefineSkill$KeenGronnwolf2();
    RefineSkill$SilverSword2_instance = new RefineSkill('SilverSword2', 24, 'SilverSword+', '\u9280\u306E\u5263\uFF0B', 0, 1, 0, 0, 0, RefineSkill$RefineType$ReplaceWeapon_getInstance(), Weapon$SilverSword2_getInstance(), 15, Skill$SkillType$SWORD_getInstance());
    RefineSkill$SilverLance2_instance = new RefineSkill('SilverLance2', 25, 'SilverLance+', '\u9280\u306E\u69CD\uFF0B', 0, 1, 0, 0, 0, RefineSkill$RefineType$ReplaceWeapon_getInstance(), Weapon$SilverLance2_getInstance(), 15, Skill$SkillType$LANCE_getInstance());
    RefineSkill$SilverAxe2_instance = new RefineSkill('SilverAxe2', 26, 'SilverAxe+', '\u9280\u306E\u65A7\uFF0B', 0, 1, 0, 0, 0, RefineSkill$RefineType$ReplaceWeapon_getInstance(), Weapon$SilverAxe2_getInstance(), 15, Skill$SkillType$AXE_getInstance());
    RefineSkill$SilverBow2_instance = new RefineSkill('SilverBow2', 27, 'SilverBow+', '\u9280\u306E\u5F13\uFF0B', 0, 1, 0, 0, 0, RefineSkill$RefineType$ReplaceWeapon_getInstance(), Weapon$SilverBow2_getInstance(), 14, Skill$SkillType$BOW_getInstance());
    RefineSkill$SilverDagger2_instance = new RefineSkill('SilverDagger2', 28, 'SilverDagger+', '\u9280\u306E\u6697\u5668\uFF0B', 0, 4, 0, 0, 0, RefineSkill$RefineType$ReplaceWeapon_getInstance(), Weapon$SilverDagger2_getInstance(), 10, Skill$SkillType$DAGGER_getInstance());
    RefineSkill$Bolganone2_instance = new RefineSkill('Bolganone2', 29, 'Bolganone+', '\u30DC\u30EB\u30AC\u30CE\u30F3\uFF0B', 0, 1, 0, 0, 0, RefineSkill$RefineType$ReplaceWeapon_getInstance(), Weapon$Bolganone2_getInstance(), 14, Skill$SkillType$RTOME_getInstance());
    RefineSkill$Fenrir2_instance = new RefineSkill('Fenrir2', 30, 'Fenrir+', '\u30CE\u30B9\u30D5\u30A7\u30E9\u30FC\u30C8\uFF0B', 0, 1, 0, 0, 0, RefineSkill$RefineType$ReplaceWeapon_getInstance(), Weapon$Fenrir2_getInstance(), 14, Skill$SkillType$RTOME_getInstance());
    RefineSkill$Thoron2_instance = new RefineSkill('Thoron2', 31, 'Thoron+', '\u30C8\u30ED\u30F3\uFF0B', 0, 1, 0, 0, 0, RefineSkill$RefineType$ReplaceWeapon_getInstance(), Weapon$Thoron2_getInstance(), 14, Skill$SkillType$BTOME_getInstance());
    RefineSkill$Rexcalibur2_instance = new RefineSkill('Rexcalibur2', 32, 'Rexcalibur+', '\u30EC\u30AF\u30B9\u30AB\u30EA\u30D0\u30FC\uFF0B', 0, 1, 0, 0, 0, RefineSkill$RefineType$ReplaceWeapon_getInstance(), Weapon$Rexcalibur2_getInstance(), 14, Skill$SkillType$GTOME_getInstance());
    RefineSkill$Rauorowl2_instance = new RefineSkill('Rauorowl2', 33, 'Rauorowl+', '\u30E9\u30A6\u30A2\u30A2\u30A6\u30EB\uFF0B', 0, 1, 0, 0, 0, RefineSkill$RefineType$ReplaceWeapon_getInstance(), Weapon$Rauorowl2_getInstance(), 10, Skill$SkillType$RTOME_getInstance());
    RefineSkill$Blarowl2_instance = new RefineSkill('Blarowl2', 34, 'Blarowl+', '\u30D6\u30E9\u30FC\u30A2\u30A6\u30EB\uFF0B', 0, 1, 0, 0, 0, RefineSkill$RefineType$ReplaceWeapon_getInstance(), Weapon$Blarowl2_getInstance(), 10, Skill$SkillType$BTOME_getInstance());
    RefineSkill$Gronnowl2_instance = new RefineSkill('Gronnowl2', 35, 'Gronnowl+', '\u30B0\u30EB\u30F3\u30A2\u30A6\u30EB\uFF0B', 0, 1, 0, 0, 0, RefineSkill$RefineType$ReplaceWeapon_getInstance(), Weapon$Gronnowl2_getInstance(), 10, Skill$SkillType$GTOME_getInstance());
    RefineSkill$SmokeDagger2_instance = new RefineSkill('SmokeDagger2', 36, 'SmokeDagger+', '\u7D2B\u7159\u306E\u6697\u5668\uFF0B', 0, 3, 0, 0, 0, RefineSkill$RefineType$ReplaceWeapon_getInstance(), Weapon$SmokeDagger2_getInstance(), 9, Skill$SkillType$DAGGER_getInstance());
    RefineSkill$RogueDagger2_instance = new RefineSkill('RogueDagger2', 37, 'RogueDagger+', '\u76D7\u8CCA\u306E\u6697\u5668\uFF0B', 0, 5, 0, 0, 0, RefineSkill$RefineType$ReplaceWeapon_getInstance(), Weapon$Gronnowl2_getInstance(), 6, Skill$SkillType$DAGGER_getInstance());
    RefineSkill$Flametongue2_instance = new RefineSkill('Flametongue2', 38, 'Flametongue+', '\u707C\u71B1\u306E\u30D6\u30EC\u30B9\uFF0B', 0, 1, 0, 0, 0, RefineSkill$RefineType$ReplaceWeapon_getInstance(), Weapon$Flametongue2_getInstance(), 15, Skill$SkillType$REFINED_DRAGON_getInstance());
    RefineSkill$LightBreath2_instance = new RefineSkill('LightBreath2', 39, 'LightBreath+', '\u5149\u306E\u30D6\u30EC\u30B9\uFF0B', 0, 1, 0, 0, 0, RefineSkill$RefineType$ReplaceWeapon_getInstance(), Weapon$LightBreath2_getInstance(), 13, Skill$SkillType$REFINED_DRAGON_getInstance());
    new RefineSkill$CarrotLance2();
    new RefineSkill$CarrotAxe2();
    new RefineSkill$BlueEgg2();
    new RefineSkill$GreenEgg2();
    RefineSkill$DancersFan2_instance = new RefineSkill('DancersFan2', 44, 'DancersFan+', '\u821E\u8E0F\u796D\u306E\u6247\u5B50\uFF0B', 0, 2, 0, 0, 0, RefineSkill$RefineType$ReplaceWeapon_getInstance(), Weapon$DancersFan2_getInstance(), 10, Skill$SkillType$DAGGER_getInstance());
    new RefineSkill$LightningBreath2();
    RefineSkill$DarkBreath2_instance = new RefineSkill('DarkBreath2', 46, 'DarkBreath+', '\u95C7\u306E\u30D6\u30EC\u30B9\uFF0B', 0, 1, 0, 0, 0, RefineSkill$RefineType$ReplaceWeapon_getInstance(), Weapon$DarkBreath2_getInstance(), 13, Skill$SkillType$REFINED_DRAGON_getInstance());
    new RefineSkill$BerkutsLance2();
    new RefineSkill$GuardBow2();
    new RefineSkill$DeathlyDagger();
    RefineSkill$Companion_getInstance();
  }
  Object.defineProperty(RefineSkill.prototype, 'jp', {
    get: function () {
      return this.jp_mhklnb$_0;
    }
  });
  Object.defineProperty(RefineSkill.prototype, 'preSkill', {
    get: function () {
      return this.preSkill_fqi2db$_0;
    }
  });
  Object.defineProperty(RefineSkill.prototype, 'level', {
    get: function () {
      return this.level_ksdp41$_0;
    }
  });
  Object.defineProperty(RefineSkill.prototype, 'type', {
    get: function () {
      return this.type_hj0bbf$_0;
    }
  });
  var RefineSkill$Range1Atk_instance;
  function RefineSkill$Range1Atk_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$Range1Atk_instance;
  }
  var RefineSkill$Range1Spd_instance;
  function RefineSkill$Range1Spd_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$Range1Spd_instance;
  }
  var RefineSkill$Range1Def_instance;
  function RefineSkill$Range1Def_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$Range1Def_instance;
  }
  var RefineSkill$Range1Res_instance;
  function RefineSkill$Range1Res_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$Range1Res_instance;
  }
  var RefineSkill$Range2Atk_instance;
  function RefineSkill$Range2Atk_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$Range2Atk_instance;
  }
  var RefineSkill$Range2Spd_instance;
  function RefineSkill$Range2Spd_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$Range2Spd_instance;
  }
  var RefineSkill$Range2Def_instance;
  function RefineSkill$Range2Def_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$Range2Def_instance;
  }
  var RefineSkill$Range2Res_instance;
  function RefineSkill$Range2Res_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$Range2Res_instance;
  }
  function RefineSkill$WrathfulStaff() {
    RefineSkill$WrathfulStaff_instance = this;
    RefineSkill.call(this, 'WrathfulStaff', 8, 'WrathfulStaff', '\u795E\u7F70', 0, 0, 0, 0, 0, RefineSkill$RefineType$Staff_getInstance());
  }
  RefineSkill$WrathfulStaff.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.wrathfulStaff_sv9jhu$(battleUnit, 3);
  };
  RefineSkill$WrathfulStaff.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WrathfulStaff',
    interfaces: [RefineSkill]
  };
  var RefineSkill$WrathfulStaff_instance = null;
  function RefineSkill$WrathfulStaff_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$WrathfulStaff_instance;
  }
  function RefineSkill$DazzlingStaff() {
    RefineSkill$DazzlingStaff_instance = this;
    RefineSkill.call(this, 'DazzlingStaff', 9, 'DazzlingStaff', '\u5E7B\u60D1', 0, 0, 0, 0, 0, RefineSkill$RefineType$Staff_getInstance());
  }
  RefineSkill$DazzlingStaff.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.dazzling_sv9jhu$(battleUnit, 3);
  };
  RefineSkill$DazzlingStaff.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DazzlingStaff',
    interfaces: [RefineSkill]
  };
  var RefineSkill$DazzlingStaff_instance = null;
  function RefineSkill$DazzlingStaff_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$DazzlingStaff_instance;
  }
  function RefineSkill$SolKatti() {
    RefineSkill$SolKatti_instance = this;
    RefineSkill.call(this, 'SolKatti', 10, 'BrashAssault', '\u5DEE\u3057\u9055\u3048', 3, 0, 0, 0, 0, RefineSkill$RefineType$DependWeapon_getInstance(), Weapon$SolKatti_getInstance());
  }
  RefineSkill$SolKatti.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.brashAssault_sv9jhu$(battleUnit, 75);
  };
  RefineSkill$SolKatti.prototype.attackPlan_p6uegp$$default = function (fightPlan, lv) {
    return this.desperation_p6uegp$(fightPlan, lv);
  };
  RefineSkill$SolKatti.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SolKatti',
    interfaces: [RefineSkill]
  };
  var RefineSkill$SolKatti_instance = null;
  function RefineSkill$SolKatti_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$SolKatti_instance;
  }
  function RefineSkill$Mystletainn() {
    RefineSkill$Mystletainn_instance = this;
    RefineSkill.call(this, 'Mystletainn', 11, 'Furry', '\u7345\u5B50\u596E\u8FC5', 3, 0, 0, 0, 0, RefineSkill$RefineType$DependWeapon_getInstance(), Weapon$Mystletainn_getInstance());
  }
  RefineSkill$Mystletainn.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.attackHpLoss_sv9jhu$(battleUnit, lv * 3 | 0);
  };
  RefineSkill$Mystletainn.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mystletainn',
    interfaces: [RefineSkill]
  };
  var RefineSkill$Mystletainn_instance = null;
  function RefineSkill$Mystletainn_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$Mystletainn_instance;
  }
  function RefineSkill$Siegmund() {
    RefineSkill$Siegmund_instance = this;
    RefineSkill.call(this, 'Siegmund', 12, 'Pursuit', '\u8FFD\u6483', 3, 0, 0, 0, 0, RefineSkill$RefineType$DependWeapon_getInstance(), Weapon$Siegmund_getInstance());
  }
  RefineSkill$Siegmund.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    if (battleUnit.hp >= ((battleUnit.armedHero.maxHp * 9 | 0) / 10 | 0)) {
      battleUnit.followupable = true;
    }
    return battleUnit;
  };
  RefineSkill$Siegmund.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Siegmund',
    interfaces: [RefineSkill]
  };
  var RefineSkill$Siegmund_instance = null;
  function RefineSkill$Siegmund_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$Siegmund_instance;
  }
  function RefineSkill$Hauteclere() {
    RefineSkill$Hauteclere_instance = this;
    RefineSkill.call(this, 'Hauteclere', 13, 'SpecialDamage', '\u5965\u7FA9\u30C0\u30E1\u30FC\u30B8\u8FFD\u52A0', 3, 0, 0, 0, 0, RefineSkill$RefineType$DependWeapon_getInstance(), Weapon$Hauteclere_getInstance());
  }
  RefineSkill$Hauteclere.prototype.specialTriggered_upjsjk$$default = function (battleUnit, damage, lv) {
    return damage + 10 | 0;
  };
  RefineSkill$Hauteclere.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Hauteclere',
    interfaces: [RefineSkill]
  };
  var RefineSkill$Hauteclere_instance = null;
  function RefineSkill$Hauteclere_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$Hauteclere_instance;
  }
  var RefineSkill$FujinYumi_instance;
  function RefineSkill$FujinYumi_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$FujinYumi_instance;
  }
  function RefineSkill$DeathlyDagger2() {
    RefineSkill$DeathlyDagger2_instance = this;
    RefineSkill.call(this, 'DeathlyDagger2', 15, 'MagicSuppression', '\u9B54\u6CD5\u306F\u53CD\u6483\u4E0D\u80FD', 0, 0, 0, 0, 0, RefineSkill$RefineType$DependWeapon_getInstance(), Weapon$DeathlyDagger_getInstance());
  }
  RefineSkill$DeathlyDagger2.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    if (ensureNotNull(battleUnit.enemy).armedHero.isMagicWeapon()) {
      ensureNotNull(battleUnit.enemy).cannotCcounter = true;
    }
    return battleUnit;
  };
  RefineSkill$DeathlyDagger2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DeathlyDagger2',
    interfaces: [RefineSkill]
  };
  var RefineSkill$DeathlyDagger2_instance = null;
  function RefineSkill$DeathlyDagger2_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$DeathlyDagger2_instance;
  }
  function RefineSkill$Armorsmasher() {
    RefineSkill$Armorsmasher_instance = this;
    RefineSkill.call(this, 'Armorsmasher', 16, nullifiesUs, nullifiesJp, 3, 0, 0, 0, 0, RefineSkill$RefineType$DependWeapon_getInstance(), Weapon$Armorsmasher2_getInstance());
  }
  RefineSkill$Armorsmasher.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.antiBuffBonus_trfvk0$(this.effectiveAgainst_d5yp1f$(MoveType$ARMORED_getInstance(), battleUnit));
  };
  RefineSkill$Armorsmasher.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Armorsmasher',
    interfaces: [RefineSkill]
  };
  var RefineSkill$Armorsmasher_instance = null;
  function RefineSkill$Armorsmasher_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$Armorsmasher_instance;
  }
  function RefineSkill$SlayingSpear() {
    RefineSkill$SlayingSpear_instance = this;
    RefineSkill.call(this, 'SlayingSpear', 17, nullifiesUs, nullifiesJp, 3, 0, 0, 0, 0, RefineSkill$RefineType$DependWeapon_getInstance(), Weapon$SlayingSpear2_getInstance());
  }
  RefineSkill$SlayingSpear.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.antiBuffBonus_trfvk0$(this.effectiveAgainst_d5yp1f$(MoveType$ARMORED_getInstance(), battleUnit));
  };
  RefineSkill$SlayingSpear.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SlayingSpear',
    interfaces: [RefineSkill]
  };
  var RefineSkill$SlayingSpear_instance = null;
  function RefineSkill$SlayingSpear_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$SlayingSpear_instance;
  }
  function RefineSkill$SlayingHammer() {
    RefineSkill$SlayingHammer_instance = this;
    RefineSkill.call(this, 'SlayingHammer', 18, nullifiesUs, nullifiesJp, 3, 0, 0, 0, 0, RefineSkill$RefineType$DependWeapon_getInstance(), Weapon$SlayingHammer2_getInstance());
  }
  RefineSkill$SlayingHammer.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.antiBuffBonus_trfvk0$(this.effectiveAgainst_d5yp1f$(MoveType$ARMORED_getInstance(), battleUnit));
  };
  RefineSkill$SlayingHammer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SlayingHammer',
    interfaces: [RefineSkill]
  };
  var RefineSkill$SlayingHammer_instance = null;
  function RefineSkill$SlayingHammer_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$SlayingHammer_instance;
  }
  function RefineSkill$Zanbato() {
    RefineSkill$Zanbato_instance = this;
    RefineSkill.call(this, 'Zanbato', 19, nullifiesUs, nullifiesJp, 3, 0, 0, 0, 0, RefineSkill$RefineType$DependWeapon_getInstance(), Weapon$Zanbato2_getInstance());
  }
  RefineSkill$Zanbato.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.antiBuffBonus_trfvk0$(this.effectiveAgainst_d5yp1f$(MoveType$CAVALRY_getInstance(), battleUnit));
  };
  RefineSkill$Zanbato.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Zanbato',
    interfaces: [RefineSkill]
  };
  var RefineSkill$Zanbato_instance = null;
  function RefineSkill$Zanbato_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$Zanbato_instance;
  }
  function RefineSkill$Ridersbane() {
    RefineSkill$Ridersbane_instance = this;
    RefineSkill.call(this, 'Ridersbane', 20, nullifiesUs, nullifiesJp, 3, 0, 0, 0, 0, RefineSkill$RefineType$DependWeapon_getInstance(), Weapon$Ridersbane2_getInstance());
  }
  RefineSkill$Ridersbane.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.antiBuffBonus_trfvk0$(this.effectiveAgainst_d5yp1f$(MoveType$CAVALRY_getInstance(), battleUnit));
  };
  RefineSkill$Ridersbane.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Ridersbane',
    interfaces: [RefineSkill]
  };
  var RefineSkill$Ridersbane_instance = null;
  function RefineSkill$Ridersbane_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$Ridersbane_instance;
  }
  function RefineSkill$KeenRauorwolf2() {
    RefineSkill$KeenRauorwolf2_instance = this;
    RefineSkill.call(this, 'KeenRauorwolf2', 21, nullifiesUs, nullifiesJp, 0, 0, 0, 0, 0, RefineSkill$RefineType$DependWeapon_getInstance(), Weapon$KeenRauorwolf2_getInstance());
  }
  RefineSkill$KeenRauorwolf2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.antiBuffBonus_trfvk0$(this.effectiveAgainst_d5yp1f$(MoveType$CAVALRY_getInstance(), battleUnit));
  };
  RefineSkill$KeenRauorwolf2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeenRauorwolf2',
    interfaces: [RefineSkill]
  };
  var RefineSkill$KeenRauorwolf2_instance = null;
  function RefineSkill$KeenRauorwolf2_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$KeenRauorwolf2_instance;
  }
  function RefineSkill$KeenBlarwolf2() {
    RefineSkill$KeenBlarwolf2_instance = this;
    RefineSkill.call(this, 'KeenBlarwolf2', 22, nullifiesUs, nullifiesJp, 0, 0, 0, 0, 0, RefineSkill$RefineType$DependWeapon_getInstance(), Weapon$KeenBlarwolf2_getInstance());
  }
  RefineSkill$KeenBlarwolf2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.antiBuffBonus_trfvk0$(this.effectiveAgainst_d5yp1f$(MoveType$CAVALRY_getInstance(), battleUnit));
  };
  RefineSkill$KeenBlarwolf2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeenBlarwolf2',
    interfaces: [RefineSkill]
  };
  var RefineSkill$KeenBlarwolf2_instance = null;
  function RefineSkill$KeenBlarwolf2_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$KeenBlarwolf2_instance;
  }
  function RefineSkill$KeenGronnwolf2() {
    RefineSkill$KeenGronnwolf2_instance = this;
    RefineSkill.call(this, 'KeenGronnwolf2', 23, nullifiesUs, nullifiesJp, 0, 0, 0, 0, 0, RefineSkill$RefineType$DependWeapon_getInstance(), Weapon$KeenGronnwolf2_getInstance());
  }
  RefineSkill$KeenGronnwolf2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.antiBuffBonus_trfvk0$(this.effectiveAgainst_d5yp1f$(MoveType$CAVALRY_getInstance(), battleUnit));
  };
  RefineSkill$KeenGronnwolf2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeenGronnwolf2',
    interfaces: [RefineSkill]
  };
  var RefineSkill$KeenGronnwolf2_instance = null;
  function RefineSkill$KeenGronnwolf2_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$KeenGronnwolf2_instance;
  }
  var RefineSkill$SilverSword2_instance;
  function RefineSkill$SilverSword2_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$SilverSword2_instance;
  }
  var RefineSkill$SilverLance2_instance;
  function RefineSkill$SilverLance2_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$SilverLance2_instance;
  }
  var RefineSkill$SilverAxe2_instance;
  function RefineSkill$SilverAxe2_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$SilverAxe2_instance;
  }
  var RefineSkill$SilverBow2_instance;
  function RefineSkill$SilverBow2_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$SilverBow2_instance;
  }
  var RefineSkill$SilverDagger2_instance;
  function RefineSkill$SilverDagger2_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$SilverDagger2_instance;
  }
  var RefineSkill$Bolganone2_instance;
  function RefineSkill$Bolganone2_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$Bolganone2_instance;
  }
  var RefineSkill$Fenrir2_instance;
  function RefineSkill$Fenrir2_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$Fenrir2_instance;
  }
  var RefineSkill$Thoron2_instance;
  function RefineSkill$Thoron2_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$Thoron2_instance;
  }
  var RefineSkill$Rexcalibur2_instance;
  function RefineSkill$Rexcalibur2_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$Rexcalibur2_instance;
  }
  var RefineSkill$Rauorowl2_instance;
  function RefineSkill$Rauorowl2_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$Rauorowl2_instance;
  }
  var RefineSkill$Blarowl2_instance;
  function RefineSkill$Blarowl2_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$Blarowl2_instance;
  }
  var RefineSkill$Gronnowl2_instance;
  function RefineSkill$Gronnowl2_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$Gronnowl2_instance;
  }
  var RefineSkill$SmokeDagger2_instance;
  function RefineSkill$SmokeDagger2_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$SmokeDagger2_instance;
  }
  var RefineSkill$RogueDagger2_instance;
  function RefineSkill$RogueDagger2_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$RogueDagger2_instance;
  }
  var RefineSkill$Flametongue2_instance;
  function RefineSkill$Flametongue2_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$Flametongue2_instance;
  }
  var RefineSkill$LightBreath2_instance;
  function RefineSkill$LightBreath2_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$LightBreath2_instance;
  }
  function RefineSkill$CarrotLance2() {
    RefineSkill$CarrotLance2_instance = this;
    RefineSkill.call(this, 'CarrotLance2', 40, 'CarrotLance', '\u30CB\u30F3\u30B8\u30F3\u306E\u69CD\uFF0B', 0, 1, 0, 0, 0, RefineSkill$RefineType$ReplaceWeapon_getInstance(), Weapon$CarrotLance2_getInstance(), 13, Skill$SkillType$LANCE_getInstance());
  }
  RefineSkill$CarrotLance2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.attackHeal_sv9jhu$(battleUnit, 4);
  };
  RefineSkill$CarrotLance2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CarrotLance2',
    interfaces: [RefineSkill]
  };
  var RefineSkill$CarrotLance2_instance = null;
  function RefineSkill$CarrotLance2_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$CarrotLance2_instance;
  }
  function RefineSkill$CarrotAxe2() {
    RefineSkill$CarrotAxe2_instance = this;
    RefineSkill.call(this, 'CarrotAxe2', 41, 'CarrotAxe+', '\u30CB\u30F3\u30B8\u30F3\u306E\u65A7\uFF0B', 0, 1, 0, 0, 0, RefineSkill$RefineType$ReplaceWeapon_getInstance(), Weapon$CarrotAxe2_getInstance(), 13, Skill$SkillType$AXE_getInstance());
  }
  RefineSkill$CarrotAxe2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.attackHeal_sv9jhu$(battleUnit, 4);
  };
  RefineSkill$CarrotAxe2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CarrotAxe2',
    interfaces: [RefineSkill]
  };
  var RefineSkill$CarrotAxe2_instance = null;
  function RefineSkill$CarrotAxe2_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$CarrotAxe2_instance;
  }
  function RefineSkill$BlueEgg2() {
    RefineSkill$BlueEgg2_instance = this;
    RefineSkill.call(this, 'BlueEgg2', 42, 'BlueEgg+', '\u9752\u306E\u5375\uFF0B', 0, 1, 0, 0, 0, RefineSkill$RefineType$ReplaceWeapon_getInstance(), Weapon$BlueEgg2_getInstance(), 11, Skill$SkillType$BTOME_getInstance());
  }
  RefineSkill$BlueEgg2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.attackHeal_sv9jhu$(battleUnit, 4);
  };
  RefineSkill$BlueEgg2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlueEgg2',
    interfaces: [RefineSkill]
  };
  var RefineSkill$BlueEgg2_instance = null;
  function RefineSkill$BlueEgg2_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$BlueEgg2_instance;
  }
  function RefineSkill$GreenEgg2() {
    RefineSkill$GreenEgg2_instance = this;
    RefineSkill.call(this, 'GreenEgg2', 43, 'GreenEgg+', '\u7DD1\u306E\u5375\uFF0B', 0, 1, 0, 0, 0, RefineSkill$RefineType$ReplaceWeapon_getInstance(), Weapon$GreenEgg2_getInstance(), 11, Skill$SkillType$GTOME_getInstance());
  }
  RefineSkill$GreenEgg2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.attackHeal_sv9jhu$(battleUnit, 4);
  };
  RefineSkill$GreenEgg2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GreenEgg2',
    interfaces: [RefineSkill]
  };
  var RefineSkill$GreenEgg2_instance = null;
  function RefineSkill$GreenEgg2_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$GreenEgg2_instance;
  }
  var RefineSkill$DancersFan2_instance;
  function RefineSkill$DancersFan2_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$DancersFan2_instance;
  }
  function RefineSkill$LightningBreath2() {
    RefineSkill$LightningBreath2_instance = this;
    RefineSkill.call(this, 'LightningBreath2', 45, 'LightningBreath+', '\u96F7\u306E\u30D6\u30EC\u30B9\uFF0B', 0, 1, 0, 0, 0, RefineSkill$RefineType$ReplaceWeapon_getInstance(), Weapon$LightningBreath2_getInstance(), 11, Skill$SkillType$REFINED_DRAGON_getInstance());
  }
  RefineSkill$LightningBreath2.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipBlade_yukhz7$(armedHero, lv);
  };
  RefineSkill$LightningBreath2.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.counterAllRange_trfvk0$(battleUnit);
  };
  RefineSkill$LightningBreath2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LightningBreath2',
    interfaces: [RefineSkill]
  };
  var RefineSkill$LightningBreath2_instance = null;
  function RefineSkill$LightningBreath2_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$LightningBreath2_instance;
  }
  var RefineSkill$DarkBreath2_instance;
  function RefineSkill$DarkBreath2_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$DarkBreath2_instance;
  }
  function RefineSkill$BerkutsLance2() {
    RefineSkill$BerkutsLance2_instance = this;
    RefineSkill.call(this, 'BerkutsLance2', 47, 'BerkutsLance+', '\u30D9\u30EB\u30AF\u30C8\u306E\u69CD\uFF0B', 0, 1, 0, 0, 0, RefineSkill$RefineType$ReplaceWeapon_getInstance(), Weapon$BerkutsLance2_getInstance(), 16, Skill$SkillType$LANCE_getInstance());
  }
  RefineSkill$BerkutsLance2.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.blowRes_sv9jhu$(battleUnit, 4);
  };
  RefineSkill$BerkutsLance2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BerkutsLance2',
    interfaces: [RefineSkill]
  };
  var RefineSkill$BerkutsLance2_instance = null;
  function RefineSkill$BerkutsLance2_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$BerkutsLance2_instance;
  }
  function RefineSkill$GuardBow2() {
    RefineSkill$GuardBow2_instance = this;
    RefineSkill.call(this, 'GuardBow2', 48, 'GuardBow+', '\u9060\u8DDD\u96E2\u9632\u5FA1\u306E\u5F13\uFF0B', 0, 1, 0, 0, 0, RefineSkill$RefineType$ReplaceWeapon_getInstance(), Weapon$AssassinsBow2_getInstance(), 11, Skill$SkillType$BOW_getInstance());
  }
  RefineSkill$GuardBow2.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.distantDef_sv9jhu$(battleUnit, 6);
  };
  RefineSkill$GuardBow2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GuardBow2',
    interfaces: [RefineSkill]
  };
  var RefineSkill$GuardBow2_instance = null;
  function RefineSkill$GuardBow2_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$GuardBow2_instance;
  }
  function RefineSkill$DeathlyDagger() {
    RefineSkill$DeathlyDagger_instance = this;
    RefineSkill.call(this, 'DeathlyDagger', 49, 'DeathlyDagger', '\u6B7B\u795E\u306E\u6697\u5668', 0, 3, 0, 0, 0, RefineSkill$RefineType$ReplaceWeapon_getInstance(), Weapon$DeathlyDagger_getInstance(), 11, Skill$SkillType$DAGGER_getInstance());
  }
  RefineSkill$DeathlyDagger.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.attackPain_sv9jhu$(battleUnit, 10);
  };
  RefineSkill$DeathlyDagger.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DeathlyDagger',
    interfaces: [RefineSkill]
  };
  var RefineSkill$DeathlyDagger_instance = null;
  function RefineSkill$DeathlyDagger_getInstance() {
    RefineSkill_initFields();
    return RefineSkill$DeathlyDagger_instance;
  }
  RefineSkill.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    this.equipHp_yukhz7$(armedHero, this.hp);
    this.equipAtk_yukhz7$(armedHero, this.atk);
    this.equipSpd_yukhz7$(armedHero, this.spd);
    this.equipDef_yukhz7$(armedHero, this.def);
    this.equipRes_yukhz7$(armedHero, this.res);
    return this.equip_yukhz7$(armedHero, lv, Skill.prototype.equip_yukhz7$$default.bind(this));
  };
  Object.defineProperty(RefineSkill.prototype, 'value', {
    get: function () {
      return this.name;
    }
  });
  RefineSkill.prototype.localeName_miixs2$ = function (locale) {
    if (equals(locale, Locale$JAPAN_getInstance()))
      return this.jp;
    else if (equals(locale, Locale$JAPANESE_getInstance()))
      return this.jp;
    else
      return this.us;
  };
  function RefineSkill$Companion() {
    RefineSkill$Companion_instance = this;
    this.itemMap_0 = LinkedHashMap_init();
  }
  RefineSkill$Companion.prototype.spreadItems_3o6c2a$ = function (weapon, range) {
    var tmp$, tmp$_0, tmp$_1;
    if (range === void 0)
      range = (tmp$_1 = (tmp$_0 = Kotlin.isType(tmp$ = weapon, Weapon) ? tmp$ : null) != null ? tmp$_0.refineSkillType : null) != null ? tmp$_1 : RefineSkill$RefineType$NOT_WEAPON_getInstance();
    var $receiver = RefineSkill$values();
    var tmp$_2;
    var accumulator = arrayListOf([Skill$Companion_getInstance().NONE]);
    for (tmp$_2 = 0; tmp$_2 !== $receiver.length; ++tmp$_2) {
      var element = $receiver[tmp$_2];
      var list = accumulator;
      if (element.refineSkillType === range || (element.refineSkillType === RefineSkill$RefineType$DependWeapon_getInstance() && (equals(element.preSkill, weapon) || equals(element.preSkill, weapon.preSkill))))
        list.add_11rb$(element);
      accumulator = list;
    }
    return accumulator;
  };
  RefineSkill$Companion.prototype.valueOfWeapon_3b0btc$ = function (weapon) {
    var $receiver = RefineSkill$values();
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        if (element.refineSkillType === RefineSkill$RefineType$ReplaceWeapon_getInstance() && equals(element.preSkill, weapon)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return firstOrNull$result;
  };
  RefineSkill$Companion.prototype.valueOfOrNONE_pdl1vj$ = function (key) {
    var tmp$;
    var tmp$_0 = key == null;
    if (!tmp$_0) {
      tmp$_0 = key.length === 0;
    }
    if (tmp$_0)
      return Skill$Companion_getInstance().NONE;
    else
      try {
        if (this.itemMap_0.isEmpty()) {
          var $receiver = RefineSkill$values();
          var tmp$_1;
          for (tmp$_1 = 0; tmp$_1 !== $receiver.length; ++tmp$_1) {
            var element = $receiver[tmp$_1];
            this.itemMap_0.put_xwzc9p$(element.jp, element);
            this.itemMap_0.put_xwzc9p$(element.us, element);
            this.itemMap_0.put_xwzc9p$(element.value, element);
          }
        }
        return (tmp$ = this.itemMap_0.get_11rb$(key)) != null ? tmp$ : RefineSkill$valueOf(key);
      }
       catch (e) {
        if (Kotlin.isType(e, Exception)) {
          return Skill$Companion_getInstance().NONE;
        }
         else
          throw e;
      }
  };
  RefineSkill$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RefineSkill$Companion_instance = null;
  function RefineSkill$Companion_getInstance() {
    RefineSkill_initFields();
    if (RefineSkill$Companion_instance === null) {
      new RefineSkill$Companion();
    }
    return RefineSkill$Companion_instance;
  }
  function RefineSkill$RefineType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function RefineSkill$RefineType_initFields() {
    RefineSkill$RefineType_initFields = function () {
    };
    RefineSkill$RefineType$NONE_instance = new RefineSkill$RefineType('NONE', 0);
    RefineSkill$RefineType$Range1_instance = new RefineSkill$RefineType('Range1', 1);
    RefineSkill$RefineType$Range2_instance = new RefineSkill$RefineType('Range2', 2);
    RefineSkill$RefineType$Staff_instance = new RefineSkill$RefineType('Staff', 3);
    RefineSkill$RefineType$DependWeapon_instance = new RefineSkill$RefineType('DependWeapon', 4);
    RefineSkill$RefineType$ReplaceWeapon_instance = new RefineSkill$RefineType('ReplaceWeapon', 5);
    RefineSkill$RefineType$NOT_WEAPON_instance = new RefineSkill$RefineType('NOT_WEAPON', 6);
  }
  var RefineSkill$RefineType$NONE_instance;
  function RefineSkill$RefineType$NONE_getInstance() {
    RefineSkill$RefineType_initFields();
    return RefineSkill$RefineType$NONE_instance;
  }
  var RefineSkill$RefineType$Range1_instance;
  function RefineSkill$RefineType$Range1_getInstance() {
    RefineSkill$RefineType_initFields();
    return RefineSkill$RefineType$Range1_instance;
  }
  var RefineSkill$RefineType$Range2_instance;
  function RefineSkill$RefineType$Range2_getInstance() {
    RefineSkill$RefineType_initFields();
    return RefineSkill$RefineType$Range2_instance;
  }
  var RefineSkill$RefineType$Staff_instance;
  function RefineSkill$RefineType$Staff_getInstance() {
    RefineSkill$RefineType_initFields();
    return RefineSkill$RefineType$Staff_instance;
  }
  var RefineSkill$RefineType$DependWeapon_instance;
  function RefineSkill$RefineType$DependWeapon_getInstance() {
    RefineSkill$RefineType_initFields();
    return RefineSkill$RefineType$DependWeapon_instance;
  }
  var RefineSkill$RefineType$ReplaceWeapon_instance;
  function RefineSkill$RefineType$ReplaceWeapon_getInstance() {
    RefineSkill$RefineType_initFields();
    return RefineSkill$RefineType$ReplaceWeapon_instance;
  }
  var RefineSkill$RefineType$NOT_WEAPON_instance;
  function RefineSkill$RefineType$NOT_WEAPON_getInstance() {
    RefineSkill$RefineType_initFields();
    return RefineSkill$RefineType$NOT_WEAPON_instance;
  }
  RefineSkill$RefineType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RefineType',
    interfaces: [Enum]
  };
  function RefineSkill$RefineType$values() {
    return [RefineSkill$RefineType$NONE_getInstance(), RefineSkill$RefineType$Range1_getInstance(), RefineSkill$RefineType$Range2_getInstance(), RefineSkill$RefineType$Staff_getInstance(), RefineSkill$RefineType$DependWeapon_getInstance(), RefineSkill$RefineType$ReplaceWeapon_getInstance(), RefineSkill$RefineType$NOT_WEAPON_getInstance()];
  }
  RefineSkill$RefineType.values = RefineSkill$RefineType$values;
  function RefineSkill$RefineType$valueOf(name) {
    switch (name) {
      case 'NONE':
        return RefineSkill$RefineType$NONE_getInstance();
      case 'Range1':
        return RefineSkill$RefineType$Range1_getInstance();
      case 'Range2':
        return RefineSkill$RefineType$Range2_getInstance();
      case 'Staff':
        return RefineSkill$RefineType$Staff_getInstance();
      case 'DependWeapon':
        return RefineSkill$RefineType$DependWeapon_getInstance();
      case 'ReplaceWeapon':
        return RefineSkill$RefineType$ReplaceWeapon_getInstance();
      case 'NOT_WEAPON':
        return RefineSkill$RefineType$NOT_WEAPON_getInstance();
      default:throwISE('No enum constant jp.blogspot.turanukimaru.fehs.skill.RefineSkill.RefineType.' + name);
    }
  }
  RefineSkill$RefineType.valueOf_61zpoe$ = RefineSkill$RefineType$valueOf;
  RefineSkill.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RefineSkill',
    interfaces: [Skill, Enum]
  };
  function RefineSkill$values() {
    return [RefineSkill$Range1Atk_getInstance(), RefineSkill$Range1Spd_getInstance(), RefineSkill$Range1Def_getInstance(), RefineSkill$Range1Res_getInstance(), RefineSkill$Range2Atk_getInstance(), RefineSkill$Range2Spd_getInstance(), RefineSkill$Range2Def_getInstance(), RefineSkill$Range2Res_getInstance(), RefineSkill$WrathfulStaff_getInstance(), RefineSkill$DazzlingStaff_getInstance(), RefineSkill$SolKatti_getInstance(), RefineSkill$Mystletainn_getInstance(), RefineSkill$Siegmund_getInstance(), RefineSkill$Hauteclere_getInstance(), RefineSkill$FujinYumi_getInstance(), RefineSkill$DeathlyDagger2_getInstance(), RefineSkill$Armorsmasher_getInstance(), RefineSkill$SlayingSpear_getInstance(), RefineSkill$SlayingHammer_getInstance(), RefineSkill$Zanbato_getInstance(), RefineSkill$Ridersbane_getInstance(), RefineSkill$KeenRauorwolf2_getInstance(), RefineSkill$KeenBlarwolf2_getInstance(), RefineSkill$KeenGronnwolf2_getInstance(), RefineSkill$SilverSword2_getInstance(), RefineSkill$SilverLance2_getInstance(), RefineSkill$SilverAxe2_getInstance(), RefineSkill$SilverBow2_getInstance(), RefineSkill$SilverDagger2_getInstance(), RefineSkill$Bolganone2_getInstance(), RefineSkill$Fenrir2_getInstance(), RefineSkill$Thoron2_getInstance(), RefineSkill$Rexcalibur2_getInstance(), RefineSkill$Rauorowl2_getInstance(), RefineSkill$Blarowl2_getInstance(), RefineSkill$Gronnowl2_getInstance(), RefineSkill$SmokeDagger2_getInstance(), RefineSkill$RogueDagger2_getInstance(), RefineSkill$Flametongue2_getInstance(), RefineSkill$LightBreath2_getInstance(), RefineSkill$CarrotLance2_getInstance(), RefineSkill$CarrotAxe2_getInstance(), RefineSkill$BlueEgg2_getInstance(), RefineSkill$GreenEgg2_getInstance(), RefineSkill$DancersFan2_getInstance(), RefineSkill$LightningBreath2_getInstance(), RefineSkill$DarkBreath2_getInstance(), RefineSkill$BerkutsLance2_getInstance(), RefineSkill$GuardBow2_getInstance(), RefineSkill$DeathlyDagger_getInstance()];
  }
  RefineSkill.values = RefineSkill$values;
  function RefineSkill$valueOf(name) {
    switch (name) {
      case 'Range1Atk':
        return RefineSkill$Range1Atk_getInstance();
      case 'Range1Spd':
        return RefineSkill$Range1Spd_getInstance();
      case 'Range1Def':
        return RefineSkill$Range1Def_getInstance();
      case 'Range1Res':
        return RefineSkill$Range1Res_getInstance();
      case 'Range2Atk':
        return RefineSkill$Range2Atk_getInstance();
      case 'Range2Spd':
        return RefineSkill$Range2Spd_getInstance();
      case 'Range2Def':
        return RefineSkill$Range2Def_getInstance();
      case 'Range2Res':
        return RefineSkill$Range2Res_getInstance();
      case 'WrathfulStaff':
        return RefineSkill$WrathfulStaff_getInstance();
      case 'DazzlingStaff':
        return RefineSkill$DazzlingStaff_getInstance();
      case 'SolKatti':
        return RefineSkill$SolKatti_getInstance();
      case 'Mystletainn':
        return RefineSkill$Mystletainn_getInstance();
      case 'Siegmund':
        return RefineSkill$Siegmund_getInstance();
      case 'Hauteclere':
        return RefineSkill$Hauteclere_getInstance();
      case 'FujinYumi':
        return RefineSkill$FujinYumi_getInstance();
      case 'DeathlyDagger2':
        return RefineSkill$DeathlyDagger2_getInstance();
      case 'Armorsmasher':
        return RefineSkill$Armorsmasher_getInstance();
      case 'SlayingSpear':
        return RefineSkill$SlayingSpear_getInstance();
      case 'SlayingHammer':
        return RefineSkill$SlayingHammer_getInstance();
      case 'Zanbato':
        return RefineSkill$Zanbato_getInstance();
      case 'Ridersbane':
        return RefineSkill$Ridersbane_getInstance();
      case 'KeenRauorwolf2':
        return RefineSkill$KeenRauorwolf2_getInstance();
      case 'KeenBlarwolf2':
        return RefineSkill$KeenBlarwolf2_getInstance();
      case 'KeenGronnwolf2':
        return RefineSkill$KeenGronnwolf2_getInstance();
      case 'SilverSword2':
        return RefineSkill$SilverSword2_getInstance();
      case 'SilverLance2':
        return RefineSkill$SilverLance2_getInstance();
      case 'SilverAxe2':
        return RefineSkill$SilverAxe2_getInstance();
      case 'SilverBow2':
        return RefineSkill$SilverBow2_getInstance();
      case 'SilverDagger2':
        return RefineSkill$SilverDagger2_getInstance();
      case 'Bolganone2':
        return RefineSkill$Bolganone2_getInstance();
      case 'Fenrir2':
        return RefineSkill$Fenrir2_getInstance();
      case 'Thoron2':
        return RefineSkill$Thoron2_getInstance();
      case 'Rexcalibur2':
        return RefineSkill$Rexcalibur2_getInstance();
      case 'Rauorowl2':
        return RefineSkill$Rauorowl2_getInstance();
      case 'Blarowl2':
        return RefineSkill$Blarowl2_getInstance();
      case 'Gronnowl2':
        return RefineSkill$Gronnowl2_getInstance();
      case 'SmokeDagger2':
        return RefineSkill$SmokeDagger2_getInstance();
      case 'RogueDagger2':
        return RefineSkill$RogueDagger2_getInstance();
      case 'Flametongue2':
        return RefineSkill$Flametongue2_getInstance();
      case 'LightBreath2':
        return RefineSkill$LightBreath2_getInstance();
      case 'CarrotLance2':
        return RefineSkill$CarrotLance2_getInstance();
      case 'CarrotAxe2':
        return RefineSkill$CarrotAxe2_getInstance();
      case 'BlueEgg2':
        return RefineSkill$BlueEgg2_getInstance();
      case 'GreenEgg2':
        return RefineSkill$GreenEgg2_getInstance();
      case 'DancersFan2':
        return RefineSkill$DancersFan2_getInstance();
      case 'LightningBreath2':
        return RefineSkill$LightningBreath2_getInstance();
      case 'DarkBreath2':
        return RefineSkill$DarkBreath2_getInstance();
      case 'BerkutsLance2':
        return RefineSkill$BerkutsLance2_getInstance();
      case 'GuardBow2':
        return RefineSkill$GuardBow2_getInstance();
      case 'DeathlyDagger':
        return RefineSkill$DeathlyDagger_getInstance();
      default:throwISE('No enum constant jp.blogspot.turanukimaru.fehs.skill.RefineSkill.' + name);
    }
  }
  RefineSkill.valueOf_61zpoe$ = RefineSkill$valueOf;
  function Seal(name, ordinal, jp, type, level, preSkill, maxLevel) {
    if (level === void 0)
      level = 0;
    if (preSkill === void 0)
      preSkill = Skill$Companion_getInstance().NONE;
    if (maxLevel === void 0)
      maxLevel = 3;
    Enum.call(this);
    this.jp_dnt2zo$_0 = jp;
    this.type_c0sg0g$_0 = type;
    this.level_lm6id6$_0 = level;
    this.preSkill_2yq5dw$_0 = preSkill;
    this.maxLevel_e9dega$_0 = maxLevel;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Seal_initFields() {
    Seal_initFields = function () {
    };
    new Seal$Hp();
    new Seal$SquadAceA();
    new Seal$Attack();
    new Seal$Speed();
    new Seal$SquadAceD();
    new Seal$Defense();
    new Seal$SquadAceB();
    new Seal$Resistance();
    new Seal$SquadAceC();
    new Seal$DistantDef();
    new Seal$BrashAssault();
    Seal$SpurAtk_instance = new Seal('SpurAtk', 11, '\u653B\u6483\u306E\u7D0B\u7AE0', Skill$SkillType$SEAL_getInstance());
    Seal$SpurSpd_instance = new Seal('SpurSpd', 12, '\u901F\u3055\u306E\u7D0B\u7AE0', Skill$SkillType$SEAL_getInstance());
    Seal$SpurDef_instance = new Seal('SpurDef', 13, '\u5B88\u5099\u306E\u7D0B\u7AE0', Skill$SkillType$SEAL_getInstance());
    Seal$SpurRes_instance = new Seal('SpurRes', 14, '\u9B54\u9632\u306E\u7D0B\u7AE0', Skill$SkillType$SEAL_getInstance());
    Seal$FortifyDef_instance = new Seal('FortifyDef', 15, '\u5B88\u5099\u306E\u9F13\u821E', Skill$SkillType$SEAL_getInstance());
    Seal$FortifyRes_instance = new Seal('FortifyRes', 16, '\u9B54\u9632\u306E\u9F13\u821E', Skill$SkillType$SEAL_getInstance());
    Seal$BreathOfLife_instance = new Seal('BreathOfLife', 17, '\u751F\u547D\u306E\u606F\u5439', Skill$SkillType$SEAL_getInstance());
    Seal$Guidance_instance = new Seal('Guidance', 18, '\u7A7A\u304B\u3089\u306E\u5148\u5C0E', Skill$SkillType$SEAL_getInstance());
    Seal$AttackSmoke_instance = new Seal('AttackSmoke', 19, '\u653B\u6483\u306E\u7D2B\u7159', Skill$SkillType$SEAL_getInstance());
    Seal$AttackPloy_instance = new Seal('AttackPloy', 20, '\u653B\u6483\u306E\u8B00\u7B56', Skill$SkillType$SEAL_getInstance());
    Seal$PanicPloy_instance = new Seal('PanicPloy', 21, '\u6050\u614C\u306E\u5947\u7B56', Skill$SkillType$SEAL_getInstance());
    new Seal$HardyBearing();
    new Seal$PhantomSpeed();
    Seal$QuickenedPulse_instance = new Seal('QuickenedPulse', 24, '\u5965\u7FA9\u306E\u9F13\u52D5', Skill$SkillType$SEAL_getInstance(), void 0, void 0, 0);
    new Seal$DeflectMagic();
    new Seal$DeflectMelee();
    new Seal$DeflectMissile();
    Seal$Companion_getInstance();
  }
  Object.defineProperty(Seal.prototype, 'jp', {
    get: function () {
      return this.jp_dnt2zo$_0;
    }
  });
  Object.defineProperty(Seal.prototype, 'type', {
    get: function () {
      return this.type_c0sg0g$_0;
    }
  });
  Object.defineProperty(Seal.prototype, 'level', {
    get: function () {
      return this.level_lm6id6$_0;
    }
  });
  Object.defineProperty(Seal.prototype, 'preSkill', {
    get: function () {
      return this.preSkill_2yq5dw$_0;
    }
  });
  Object.defineProperty(Seal.prototype, 'maxLevel', {
    get: function () {
      return this.maxLevel_e9dega$_0;
    }
  });
  function Seal$Hp() {
    Seal$Hp_instance = this;
    Seal.call(this, 'Hp', 0, 'HP', Skill$SkillType$A_getInstance());
  }
  Seal$Hp.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipHp_yukhz7$(armedHero, lv);
  };
  Seal$Hp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Hp',
    interfaces: [Seal]
  };
  var Seal$Hp_instance = null;
  function Seal$Hp_getInstance() {
    Seal_initFields();
    return Seal$Hp_instance;
  }
  function Seal$SquadAceA() {
    Seal$SquadAceA_instance = this;
    Seal.call(this, 'SquadAceA', 1, '\u7B2C1\u8FF7\u5BAE\u306E\u8987\u8005', Skill$SkillType$A_getInstance());
  }
  Seal$SquadAceA.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipHp_yukhz7$(armedHero, lv);
  };
  Seal$SquadAceA.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SquadAceA',
    interfaces: [Seal]
  };
  var Seal$SquadAceA_instance = null;
  function Seal$SquadAceA_getInstance() {
    Seal_initFields();
    return Seal$SquadAceA_instance;
  }
  function Seal$Attack() {
    Seal$Attack_instance = this;
    Seal.call(this, 'Attack', 2, '\u653B\u6483', Skill$SkillType$A_getInstance());
  }
  Seal$Attack.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipAtk_yukhz7$(armedHero, lv);
  };
  Seal$Attack.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Attack',
    interfaces: [Seal]
  };
  var Seal$Attack_instance = null;
  function Seal$Attack_getInstance() {
    Seal_initFields();
    return Seal$Attack_instance;
  }
  function Seal$Speed() {
    Seal$Speed_instance = this;
    Seal.call(this, 'Speed', 3, '\u901F\u3055', Skill$SkillType$A_getInstance());
  }
  Seal$Speed.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipSpd_yukhz7$(armedHero, lv);
  };
  Seal$Speed.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Speed',
    interfaces: [Seal]
  };
  var Seal$Speed_instance = null;
  function Seal$Speed_getInstance() {
    Seal_initFields();
    return Seal$Speed_instance;
  }
  function Seal$SquadAceD() {
    Seal$SquadAceD_instance = this;
    Seal.call(this, 'SquadAceD', 4, '\u7B2C4\u8FF7\u5BAE\u306E\u8987\u8005', Skill$SkillType$A_getInstance());
  }
  Seal$SquadAceD.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipSpd_yukhz7$(armedHero, lv);
  };
  Seal$SquadAceD.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SquadAceD',
    interfaces: [Seal]
  };
  var Seal$SquadAceD_instance = null;
  function Seal$SquadAceD_getInstance() {
    Seal_initFields();
    return Seal$SquadAceD_instance;
  }
  function Seal$Defense() {
    Seal$Defense_instance = this;
    Seal.call(this, 'Defense', 5, '\u5B88\u5099', Skill$SkillType$A_getInstance());
  }
  Seal$Defense.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipDef_yukhz7$(armedHero, lv);
  };
  Seal$Defense.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Defense',
    interfaces: [Seal]
  };
  var Seal$Defense_instance = null;
  function Seal$Defense_getInstance() {
    Seal_initFields();
    return Seal$Defense_instance;
  }
  function Seal$SquadAceB() {
    Seal$SquadAceB_instance = this;
    Seal.call(this, 'SquadAceB', 6, '\u7B2C3\u8FF7\u5BAE\u306E\u8987\u8005', Skill$SkillType$A_getInstance());
  }
  Seal$SquadAceB.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipDef_yukhz7$(armedHero, lv);
  };
  Seal$SquadAceB.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SquadAceB',
    interfaces: [Seal]
  };
  var Seal$SquadAceB_instance = null;
  function Seal$SquadAceB_getInstance() {
    Seal_initFields();
    return Seal$SquadAceB_instance;
  }
  function Seal$Resistance() {
    Seal$Resistance_instance = this;
    Seal.call(this, 'Resistance', 7, '\u9B54\u9632', Skill$SkillType$A_getInstance());
  }
  Seal$Resistance.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipRes_yukhz7$(armedHero, lv);
  };
  Seal$Resistance.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Resistance',
    interfaces: [Seal]
  };
  var Seal$Resistance_instance = null;
  function Seal$Resistance_getInstance() {
    Seal_initFields();
    return Seal$Resistance_instance;
  }
  function Seal$SquadAceC() {
    Seal$SquadAceC_instance = this;
    Seal.call(this, 'SquadAceC', 8, '\u7B2C3\u8FF7\u5BAE\u306E\u8987\u8005', Skill$SkillType$A_getInstance());
  }
  Seal$SquadAceC.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipRes_yukhz7$(armedHero, lv);
  };
  Seal$SquadAceC.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SquadAceC',
    interfaces: [Seal]
  };
  var Seal$SquadAceC_instance = null;
  function Seal$SquadAceC_getInstance() {
    Seal_initFields();
    return Seal$SquadAceC_instance;
  }
  function Seal$DistantDef() {
    Seal$DistantDef_instance = this;
    Seal.call(this, 'DistantDef', 9, '\u9060\u8DDD\u96E2\u9632\u5FA1', Skill$SkillType$A_getInstance());
  }
  Seal$DistantDef.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.distantDef_sv9jhu$(battleUnit, lv * 2 | 0);
  };
  Seal$DistantDef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DistantDef',
    interfaces: [Seal]
  };
  var Seal$DistantDef_instance = null;
  function Seal$DistantDef_getInstance() {
    Seal_initFields();
    return Seal$DistantDef_instance;
  }
  function Seal$BrashAssault() {
    Seal$BrashAssault_instance = this;
    Seal.call(this, 'BrashAssault', 10, '\u5DEE\u3057\u9055\u3048', Skill$SkillType$B_getInstance());
  }
  Seal$BrashAssault.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.brashAssault_sv9jhu$(battleUnit, lv);
  };
  Seal$BrashAssault.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BrashAssault',
    interfaces: [Seal]
  };
  var Seal$BrashAssault_instance = null;
  function Seal$BrashAssault_getInstance() {
    Seal_initFields();
    return Seal$BrashAssault_instance;
  }
  var Seal$SpurAtk_instance;
  function Seal$SpurAtk_getInstance() {
    Seal_initFields();
    return Seal$SpurAtk_instance;
  }
  var Seal$SpurSpd_instance;
  function Seal$SpurSpd_getInstance() {
    Seal_initFields();
    return Seal$SpurSpd_instance;
  }
  var Seal$SpurDef_instance;
  function Seal$SpurDef_getInstance() {
    Seal_initFields();
    return Seal$SpurDef_instance;
  }
  var Seal$SpurRes_instance;
  function Seal$SpurRes_getInstance() {
    Seal_initFields();
    return Seal$SpurRes_instance;
  }
  var Seal$FortifyDef_instance;
  function Seal$FortifyDef_getInstance() {
    Seal_initFields();
    return Seal$FortifyDef_instance;
  }
  var Seal$FortifyRes_instance;
  function Seal$FortifyRes_getInstance() {
    Seal_initFields();
    return Seal$FortifyRes_instance;
  }
  var Seal$BreathOfLife_instance;
  function Seal$BreathOfLife_getInstance() {
    Seal_initFields();
    return Seal$BreathOfLife_instance;
  }
  var Seal$Guidance_instance;
  function Seal$Guidance_getInstance() {
    Seal_initFields();
    return Seal$Guidance_instance;
  }
  var Seal$AttackSmoke_instance;
  function Seal$AttackSmoke_getInstance() {
    Seal_initFields();
    return Seal$AttackSmoke_instance;
  }
  var Seal$AttackPloy_instance;
  function Seal$AttackPloy_getInstance() {
    Seal_initFields();
    return Seal$AttackPloy_instance;
  }
  var Seal$PanicPloy_instance;
  function Seal$PanicPloy_getInstance() {
    Seal_initFields();
    return Seal$PanicPloy_instance;
  }
  function Seal$HardyBearing() {
    Seal$HardyBearing_instance = this;
    Seal.call(this, 'HardyBearing', 22, '\u4E0D\u52D5\u306E\u59FF\u52E2', Skill$SkillType$SEAL_getInstance());
  }
  Seal$HardyBearing.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    battleUnit.disableChangePlan = true;
    if (battleUnit.hp >= (Kotlin.imul(battleUnit.armedHero.maxHp, 150 - (lv * 50 | 0) | 0) / 100 | 0)) {
      ensureNotNull(battleUnit.enemy).disableChangePlan = true;
    }
    return this.bothEffect_sv9jhu$(battleUnit, lv, Seal.prototype.bothEffect_sv9jhu$$default.bind(this));
  };
  Seal$HardyBearing.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HardyBearing',
    interfaces: [Seal]
  };
  var Seal$HardyBearing_instance = null;
  function Seal$HardyBearing_getInstance() {
    Seal_initFields();
    return Seal$HardyBearing_instance;
  }
  function Seal$PhantomSpeed() {
    Seal$PhantomSpeed_instance = this;
    Seal.call(this, 'PhantomSpeed', 23, '\u901F\u3055\u306E\u865A\u52E2', Skill$SkillType$SEAL_getInstance());
  }
  Seal$PhantomSpeed.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    var tmp$;
    if (lv === 1)
      tmp$ = 5;
    else if (lv === 2)
      tmp$ = 8;
    else if (lv === 3)
      tmp$ = 10;
    else
      tmp$ = 0;
    battleUnit.phantomSpeed = tmp$;
    return this.bothEffect_sv9jhu$(battleUnit, lv, Seal.prototype.bothEffect_sv9jhu$$default.bind(this));
  };
  Seal$PhantomSpeed.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PhantomSpeed',
    interfaces: [Seal]
  };
  var Seal$PhantomSpeed_instance = null;
  function Seal$PhantomSpeed_getInstance() {
    Seal_initFields();
    return Seal$PhantomSpeed_instance;
  }
  var Seal$QuickenedPulse_instance;
  function Seal$QuickenedPulse_getInstance() {
    Seal_initFields();
    return Seal$QuickenedPulse_instance;
  }
  function Seal$DeflectMagic() {
    Seal$DeflectMagic_instance = this;
    Seal.call(this, 'DeflectMagic', 25, '\u9023\u6483\u9632\u5FA1\u30FB\u9B54', Skill$SkillType$SEAL_getInstance());
  }
  Seal$DeflectMagic.prototype.prevent_w6mj9q$$default = function (battleUnit, damage, results, lv) {
    var tmp$;
    if (!results.isEmpty() && last(results).side !== battleUnit.side && ensureNotNull(battleUnit.enemy).armedHero.isMagicWeapon()) {
      if (lv === 1)
        tmp$ = 3;
      else if (lv === 2)
        tmp$ = 5;
      else if (lv === 3)
        tmp$ = 8;
      else
        tmp$ = 0;
      return damage - (Kotlin.imul(damage, tmp$) / 10 | 0) | 0;
    }
     else
      return damage;
  };
  Seal$DeflectMagic.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DeflectMagic',
    interfaces: [Seal]
  };
  var Seal$DeflectMagic_instance = null;
  function Seal$DeflectMagic_getInstance() {
    Seal_initFields();
    return Seal$DeflectMagic_instance;
  }
  function Seal$DeflectMelee() {
    Seal$DeflectMelee_instance = this;
    Seal.call(this, 'DeflectMelee', 26, '\u9023\u6483\u9632\u5FA1\u30FB\u5263\u69CD\u65A7', Skill$SkillType$SEAL_getInstance());
  }
  Seal$DeflectMelee.prototype.prevent_w6mj9q$$default = function (battleUnit, damage, results, lv) {
    var tmp$;
    if (!results.isEmpty() && last(results).side !== battleUnit.side && ensureNotNull(battleUnit.enemy).armedHero.isMagicWeapon()) {
      if (lv === 1)
        tmp$ = 3;
      else if (lv === 2)
        tmp$ = 5;
      else if (lv === 3)
        tmp$ = 8;
      else
        tmp$ = 0;
      return damage - (Kotlin.imul(damage, tmp$) / 10 | 0) | 0;
    }
     else
      return damage;
  };
  Seal$DeflectMelee.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DeflectMelee',
    interfaces: [Seal]
  };
  var Seal$DeflectMelee_instance = null;
  function Seal$DeflectMelee_getInstance() {
    Seal_initFields();
    return Seal$DeflectMelee_instance;
  }
  function Seal$DeflectMissile() {
    Seal$DeflectMissile_instance = this;
    Seal.call(this, 'DeflectMissile', 27, '\u9023\u6483\u9632\u5FA1\u30FB\u5F13\u6697\u5668', Skill$SkillType$SEAL_getInstance());
  }
  Seal$DeflectMissile.prototype.prevent_w6mj9q$$default = function (battleUnit, damage, results, lv) {
    var tmp$;
    if (!results.isEmpty() && last(results).side !== battleUnit.side && ensureNotNull(battleUnit.enemy).armedHero.isMagicWeapon()) {
      if (lv === 1)
        tmp$ = 3;
      else if (lv === 2)
        tmp$ = 5;
      else if (lv === 3)
        tmp$ = 8;
      else
        tmp$ = 0;
      return damage - (Kotlin.imul(damage, tmp$) / 10 | 0) | 0;
    }
     else
      return damage;
  };
  Seal$DeflectMissile.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DeflectMissile',
    interfaces: [Seal]
  };
  var Seal$DeflectMissile_instance = null;
  function Seal$DeflectMissile_getInstance() {
    Seal_initFields();
    return Seal$DeflectMissile_instance;
  }
  Seal.prototype.lv_za3lpa$ = function (lv) {
    return this.level === lv ? this : new LappedSkill(this, lv);
  };
  Object.defineProperty(Seal.prototype, 'value', {
    get: function () {
      return this.name;
    }
  });
  Seal.prototype.localeName_miixs2$ = function (locale) {
    if (equals(locale, Locale$JAPAN_getInstance()))
      return this.jp;
    else if (equals(locale, Locale$JAPANESE_getInstance()))
      return this.jp;
    else
      return this.value;
  };
  function Seal$Companion() {
    Seal$Companion_instance = this;
    this.itemMap_0 = LinkedHashMap_init();
  }
  Seal$Companion.prototype.spreadItems = function () {
    var $receiver = Seal$values();
    var tmp$;
    var accumulator = arrayListOf([Skill$Companion_getInstance().NONE]);
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      var list = accumulator;
      var tmp$_0;
      tmp$_0 = (new IntRange(1, element.maxLevel)).iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        list.add_11rb$(element.lv_za3lpa$(element_0));
      }
      accumulator = list;
    }
    return accumulator;
  };
  var Regex = Kotlin.kotlin.text.Regex_61zpoe$;
  var throwCCE = Kotlin.throwCCE;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  Seal$Companion.prototype.valueOfOrNONE_pdl1vj$ = function (key) {
    var tmp$, tmp$_0;
    if (key == null)
      return Skill$Companion_getInstance().NONE;
    else {
      try {
        if (this.itemMap_0.isEmpty()) {
          var $receiver = Seal$values();
          var tmp$_1;
          for (tmp$_1 = 0; tmp$_1 !== $receiver.length; ++tmp$_1) {
            var element = $receiver[tmp$_1];
            this.itemMap_0.put_xwzc9p$(element.jp, element);
          }
          var $receiver_0 = Seal$values();
          var tmp$_2;
          for (tmp$_2 = 0; tmp$_2 !== $receiver_0.length; ++tmp$_2) {
            var element_0 = $receiver_0[tmp$_2];
            this.itemMap_0.put_xwzc9p$(element_0.value, element_0);
          }
        }
        var regex = Regex(' \\d');
        var lv = regex.find_905azu$(key);
        if (lv != null) {
          var skill = regex.replaceFirst_x2uqeu$(key, '');
          var tmp$_3 = (tmp$ = this.itemMap_0.get_11rb$(skill)) != null ? tmp$ : Seal$valueOf(skill);
          var $receiver_1 = lv.value;
          var tmp$_4;
          return tmp$_3.lv_za3lpa$(toInt(trim(Kotlin.isCharSequence(tmp$_4 = $receiver_1) ? tmp$_4 : throwCCE()).toString()));
        }
         else
          return (tmp$_0 = this.itemMap_0.get_11rb$(key)) != null ? tmp$_0 : Seal$valueOf(key);
      }
       catch (e) {
        if (Kotlin.isType(e, Exception)) {
          println(e);
          return Skill$Companion_getInstance().NONE;
        }
         else
          throw e;
      }
    }
  };
  Seal$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Seal$Companion_instance = null;
  function Seal$Companion_getInstance() {
    Seal_initFields();
    if (Seal$Companion_instance === null) {
      new Seal$Companion();
    }
    return Seal$Companion_instance;
  }
  Seal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Seal',
    interfaces: [Skill, Enum]
  };
  function Seal$values() {
    return [Seal$Hp_getInstance(), Seal$SquadAceA_getInstance(), Seal$Attack_getInstance(), Seal$Speed_getInstance(), Seal$SquadAceD_getInstance(), Seal$Defense_getInstance(), Seal$SquadAceB_getInstance(), Seal$Resistance_getInstance(), Seal$SquadAceC_getInstance(), Seal$DistantDef_getInstance(), Seal$BrashAssault_getInstance(), Seal$SpurAtk_getInstance(), Seal$SpurSpd_getInstance(), Seal$SpurDef_getInstance(), Seal$SpurRes_getInstance(), Seal$FortifyDef_getInstance(), Seal$FortifyRes_getInstance(), Seal$BreathOfLife_getInstance(), Seal$Guidance_getInstance(), Seal$AttackSmoke_getInstance(), Seal$AttackPloy_getInstance(), Seal$PanicPloy_getInstance(), Seal$HardyBearing_getInstance(), Seal$PhantomSpeed_getInstance(), Seal$QuickenedPulse_getInstance(), Seal$DeflectMagic_getInstance(), Seal$DeflectMelee_getInstance(), Seal$DeflectMissile_getInstance()];
  }
  Seal.values = Seal$values;
  function Seal$valueOf(name) {
    switch (name) {
      case 'Hp':
        return Seal$Hp_getInstance();
      case 'SquadAceA':
        return Seal$SquadAceA_getInstance();
      case 'Attack':
        return Seal$Attack_getInstance();
      case 'Speed':
        return Seal$Speed_getInstance();
      case 'SquadAceD':
        return Seal$SquadAceD_getInstance();
      case 'Defense':
        return Seal$Defense_getInstance();
      case 'SquadAceB':
        return Seal$SquadAceB_getInstance();
      case 'Resistance':
        return Seal$Resistance_getInstance();
      case 'SquadAceC':
        return Seal$SquadAceC_getInstance();
      case 'DistantDef':
        return Seal$DistantDef_getInstance();
      case 'BrashAssault':
        return Seal$BrashAssault_getInstance();
      case 'SpurAtk':
        return Seal$SpurAtk_getInstance();
      case 'SpurSpd':
        return Seal$SpurSpd_getInstance();
      case 'SpurDef':
        return Seal$SpurDef_getInstance();
      case 'SpurRes':
        return Seal$SpurRes_getInstance();
      case 'FortifyDef':
        return Seal$FortifyDef_getInstance();
      case 'FortifyRes':
        return Seal$FortifyRes_getInstance();
      case 'BreathOfLife':
        return Seal$BreathOfLife_getInstance();
      case 'Guidance':
        return Seal$Guidance_getInstance();
      case 'AttackSmoke':
        return Seal$AttackSmoke_getInstance();
      case 'AttackPloy':
        return Seal$AttackPloy_getInstance();
      case 'PanicPloy':
        return Seal$PanicPloy_getInstance();
      case 'HardyBearing':
        return Seal$HardyBearing_getInstance();
      case 'PhantomSpeed':
        return Seal$PhantomSpeed_getInstance();
      case 'QuickenedPulse':
        return Seal$QuickenedPulse_getInstance();
      case 'DeflectMagic':
        return Seal$DeflectMagic_getInstance();
      case 'DeflectMelee':
        return Seal$DeflectMelee_getInstance();
      case 'DeflectMissile':
        return Seal$DeflectMissile_getInstance();
      default:throwISE('No enum constant jp.blogspot.turanukimaru.fehs.skill.Seal.' + name);
    }
  }
  Seal.valueOf_61zpoe$ = Seal$valueOf;
  function Skill() {
    Skill$Companion_getInstance();
  }
  Object.defineProperty(Skill.prototype, 'level', {
    get: function () {
      return 0;
    }
  });
  Object.defineProperty(Skill.prototype, 'type', {
    get: function () {
      return Skill$SkillType$NONE_getInstance();
    }
  });
  Object.defineProperty(Skill.prototype, 'value', {
    get: function () {
      return '';
    }
  });
  Object.defineProperty(Skill.prototype, 'jp', {
    get: function () {
      return '';
    }
  });
  Object.defineProperty(Skill.prototype, 'maxLevel', {
    get: function () {
      return 0;
    }
  });
  Object.defineProperty(Skill.prototype, 'preSkill', {
    get: function () {
      return Skill$Companion_getInstance().NONE;
    }
  });
  function Skill$None() {
  }
  Skill$None.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'None',
    interfaces: [Skill]
  };
  function Skill$Companion() {
    Skill$Companion_instance = this;
    this.NONE = new Skill$None();
  }
  Skill$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Skill$Companion_instance = null;
  function Skill$Companion_getInstance() {
    if (Skill$Companion_instance === null) {
      new Skill$Companion();
    }
    return Skill$Companion_instance;
  }
  Skill.prototype.localeName_miixs2$ = function (locale) {
    return '';
  };
  Skill.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    if (this.type === Skill$SkillType$BOW_getInstance() && ensureNotNull(battleUnit.enemy).armedHero.baseHero.moveType === MoveType$FLIER_getInstance())
      battleUnit.effectiveAgainst = EffectiveAgainst$FLIER_getInstance();
    return battleUnit;
  };
  Skill.prototype.bothEffect_sv9jhu$ = function (battleUnit, lv, callback$default) {
    if (lv === void 0)
      lv = this.level;
    return callback$default ? callback$default(battleUnit, lv) : this.bothEffect_sv9jhu$$default(battleUnit, lv);
  };
  Skill.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return battleUnit;
  };
  Skill.prototype.attackEffect_sv9jhu$ = function (battleUnit, lv, callback$default) {
    if (lv === void 0)
      lv = this.level;
    return callback$default ? callback$default(battleUnit, lv) : this.attackEffect_sv9jhu$$default(battleUnit, lv);
  };
  Skill.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return battleUnit;
  };
  Skill.prototype.counterEffect_sv9jhu$ = function (battleUnit, lv, callback$default) {
    if (lv === void 0)
      lv = this.level;
    return callback$default ? callback$default(battleUnit, lv) : this.counterEffect_sv9jhu$$default(battleUnit, lv);
  };
  Skill.prototype.effectedAttackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return battleUnit;
  };
  Skill.prototype.effectedAttackEffect_sv9jhu$ = function (battleUnit, lv, callback$default) {
    if (lv === void 0)
      lv = this.level;
    return callback$default ? callback$default(battleUnit, lv) : this.effectedAttackEffect_sv9jhu$$default(battleUnit, lv);
  };
  Skill.prototype.effectedCounterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return battleUnit;
  };
  Skill.prototype.effectedCounterEffect_sv9jhu$ = function (battleUnit, lv, callback$default) {
    if (lv === void 0)
      lv = this.level;
    return callback$default ? callback$default(battleUnit, lv) : this.effectedCounterEffect_sv9jhu$$default(battleUnit, lv);
  };
  Skill.prototype.attackPlan_p6uegp$$default = function (fightPlan, lv) {
    return fightPlan;
  };
  Skill.prototype.attackPlan_p6uegp$ = function (fightPlan, lv, callback$default) {
    if (lv === void 0)
      lv = this.level;
    return callback$default ? callback$default(fightPlan, lv) : this.attackPlan_p6uegp$$default(fightPlan, lv);
  };
  Skill.prototype.counterPlan_p6uegp$$default = function (fightPlan, lv) {
    return fightPlan;
  };
  Skill.prototype.counterPlan_p6uegp$ = function (fightPlan, lv, callback$default) {
    if (lv === void 0)
      lv = this.level;
    return callback$default ? callback$default(fightPlan, lv) : this.counterPlan_p6uegp$$default(fightPlan, lv);
  };
  Skill.prototype.prevent_w6mj9q$$default = function (battleUnit, damage, results, lv) {
    return damage;
  };
  Skill.prototype.prevent_w6mj9q$ = function (battleUnit, damage, results, lv, callback$default) {
    if (lv === void 0)
      lv = this.level;
    return callback$default ? callback$default(battleUnit, damage, results, lv) : this.prevent_w6mj9q$$default(battleUnit, damage, results, lv);
  };
  Skill.prototype.specialPrevent_upjsjk$$default = function (battleUnit, damage, lv) {
    return new Pair(damage, null);
  };
  Skill.prototype.specialPrevent_upjsjk$ = function (battleUnit, damage, lv, callback$default) {
    if (lv === void 0)
      lv = this.level;
    return callback$default ? callback$default(battleUnit, damage, lv) : this.specialPrevent_upjsjk$$default(battleUnit, damage, lv);
  };
  Skill.prototype.specialTriggered_upjsjk$$default = function (battleUnit, damage, lv) {
    return damage;
  };
  Skill.prototype.specialTriggered_upjsjk$ = function (battleUnit, damage, lv, callback$default) {
    if (lv === void 0)
      lv = this.level;
    return callback$default ? callback$default(battleUnit, damage, lv) : this.specialTriggered_upjsjk$$default(battleUnit, damage, lv);
  };
  Skill.prototype.damage_96237r$$default = function (battleUnit, target, results, skill) {
    var damage = battleUnit.halfByStaff_za3lpa$(target.preventByDefResTerrain_6sdwnf$(battleUnit.colorAttack() + battleUnit.oneTimeOnlyAdditionalDamage | 0, battleUnit.armedHero.weapon.type));
    battleUnit.oneTimeOnlyAdditionalDamage = 0;
    return new Pair(damage > 0 ? damage : 0, skill);
  };
  Skill.prototype.damage_96237r$ = function (battleUnit, target, results, skill, callback$default) {
    if (skill === void 0)
      skill = null;
    return callback$default ? callback$default(battleUnit, target, results, skill) : this.damage_96237r$$default(battleUnit, target, results, skill);
  };
  Skill.prototype.absorb_6zcyla$ = function (battleUnit, target, damage) {
    return damage;
  };
  Skill.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    if (this.type.isWeapon) {
      armedHero.atkEqp = armedHero.atkEqp + this.level | 0;
    }
    return armedHero;
  };
  Skill.prototype.equip_yukhz7$ = function (armedHero, lv, callback$default) {
    if (lv === void 0)
      lv = this.level;
    return callback$default ? callback$default(armedHero, lv) : this.equip_yukhz7$$default(armedHero, lv);
  };
  Skill.prototype.turnStart_sv9jhu$$default = function (battleUnit, lv) {
    return battleUnit;
  };
  Skill.prototype.turnStart_sv9jhu$ = function (battleUnit, lv, callback$default) {
    if (lv === void 0)
      lv = this.level;
    return callback$default ? callback$default(battleUnit, lv) : this.turnStart_sv9jhu$$default(battleUnit, lv);
  };
  Skill.prototype.afterFightEffect_sv9jhu$$default = function (battleUnit, lv) {
    return battleUnit;
  };
  Skill.prototype.afterFightEffect_sv9jhu$ = function (battleUnit, lv, callback$default) {
    if (lv === void 0)
      lv = this.level;
    return callback$default ? callback$default(battleUnit, lv) : this.afterFightEffect_sv9jhu$$default(battleUnit, lv);
  };
  Skill.prototype.reducedDamage_upjsjk$$default = function (battleUnit, damage, lv) {
    return battleUnit;
  };
  Skill.prototype.reducedDamage_upjsjk$ = function (battleUnit, damage, lv, callback$default) {
    if (damage === void 0)
      damage = 0;
    if (lv === void 0)
      lv = this.level;
    return callback$default ? callback$default(battleUnit, damage, lv) : this.reducedDamage_upjsjk$$default(battleUnit, damage, lv);
  };
  Skill.prototype.defiantAtk_sv9jhu$ = function (battleUnit, lv) {
    if (battleUnit.hp <= (battleUnit.armedHero.maxHp / 2 | 0))
      battleUnit.buffAtk_za3lpa$((lv * 2 | 0) + 1 | 0);
    return battleUnit;
  };
  Skill.prototype.defiantSpd_sv9jhu$ = function (battleUnit, lv) {
    if (battleUnit.hp <= (battleUnit.armedHero.maxHp / 2 | 0))
      battleUnit.buffSpd_za3lpa$((lv * 2 | 0) + 1 | 0);
    return battleUnit;
  };
  Skill.prototype.defiantDef_sv9jhu$ = function (battleUnit, lv) {
    if (battleUnit.hp <= (battleUnit.armedHero.maxHp / 2 | 0))
      battleUnit.buffDef_za3lpa$((lv * 2 | 0) + 1 | 0);
    return battleUnit;
  };
  Skill.prototype.defiantRes_sv9jhu$ = function (battleUnit, lv) {
    if (battleUnit.hp <= (battleUnit.armedHero.maxHp / 2 | 0))
      battleUnit.buffRes_za3lpa$((lv * 2 | 0) + 1 | 0);
    return battleUnit;
  };
  Skill.prototype.blowAtk_sv9jhu$ = function (battleUnit, lv) {
    battleUnit.atkEffect = battleUnit.atkEffect + lv | 0;
    return battleUnit;
  };
  Skill.prototype.blowSpd_sv9jhu$ = function (battleUnit, lv) {
    battleUnit.spdEffect = battleUnit.spdEffect + lv | 0;
    return battleUnit;
  };
  Skill.prototype.blowDef_sv9jhu$ = function (battleUnit, lv) {
    battleUnit.defEffect = battleUnit.defEffect + lv | 0;
    return battleUnit;
  };
  Skill.prototype.blowRes_sv9jhu$ = function (battleUnit, lv) {
    battleUnit.resEffect = battleUnit.resEffect + lv | 0;
    return battleUnit;
  };
  Skill.prototype.steadyDef_sv9jhu$ = function (battleUnit, lv) {
    battleUnit.defEffect = battleUnit.defEffect + lv | 0;
    return battleUnit;
  };
  Skill.prototype.steadyRes_sv9jhu$ = function (battleUnit, lv) {
    battleUnit.resEffect = battleUnit.resEffect + lv | 0;
    return battleUnit;
  };
  Skill.prototype.steadyAtk_sv9jhu$ = function (battleUnit, lv) {
    battleUnit.atkEffect = battleUnit.atkEffect + lv | 0;
    return battleUnit;
  };
  Skill.prototype.closeDef_sv9jhu$ = function (battleUnit, lv) {
    if (ensureNotNull(battleUnit.enemy).armedHero.baseHero.weaponType.range === 1) {
      battleUnit.defEffect = battleUnit.defEffect + lv | 0;
      battleUnit.resEffect = battleUnit.resEffect + lv | 0;
    }
    return battleUnit;
  };
  Skill.prototype.distantDef_sv9jhu$ = function (battleUnit, lv) {
    if (ensureNotNull(battleUnit.enemy).armedHero.baseHero.weaponType.range === 2) {
      battleUnit.defEffect = battleUnit.defEffect + lv | 0;
      battleUnit.resEffect = battleUnit.resEffect + lv | 0;
    }
    return battleUnit;
  };
  Skill.prototype.weaponBreaker_y53988$ = function (battleUnit, weapon, lv) {
    this.log_za3rmp$('HP:' + battleUnit.hp);
    this.log_za3rmp$('threashold:' + (Kotlin.imul(battleUnit.armedHero.maxHp, (lv * 20 | 0) - 10 | 0) / 100 | 0));
    if (battleUnit.hp >= (Kotlin.imul(battleUnit.armedHero.maxHp, (lv * 20 | 0) - 10 | 0) / 100 | 0) && ensureNotNull(battleUnit.enemy).armedHero.baseHero.weaponType === weapon) {
      battleUnit.followupable = true;
      ensureNotNull(battleUnit.enemy).antiFollowup = true;
    }
    return battleUnit;
  };
  Skill.prototype.boostDef_sv9jhu$ = function (battleUnit, lv) {
    if ((battleUnit.hp - ensureNotNull(battleUnit.enemy).hp | 0) >= 3) {
      battleUnit.defEffect = battleUnit.defEffect + lv | 0;
    }
    return battleUnit;
  };
  Skill.prototype.boostSpd_sv9jhu$ = function (battleUnit, lv) {
    if ((battleUnit.hp - ensureNotNull(battleUnit.enemy).hp | 0) >= 3) {
      battleUnit.spdEffect = battleUnit.spdEffect + lv | 0;
    }
    return battleUnit;
  };
  Skill.prototype.boostAtk_sv9jhu$ = function (battleUnit, lv) {
    if ((battleUnit.hp - ensureNotNull(battleUnit.enemy).hp | 0) >= 3) {
      battleUnit.atkEffect = battleUnit.atkEffect + lv | 0;
    }
    return battleUnit;
  };
  Skill.prototype.boostRes_sv9jhu$ = function (battleUnit, lv) {
    if ((battleUnit.hp - ensureNotNull(battleUnit.enemy).hp | 0) >= 3) {
      battleUnit.resEffect = battleUnit.resEffect + lv | 0;
    }
    return battleUnit;
  };
  Skill.prototype.furry_yukhz7$ = function (armedHero, lv) {
    armedHero.atkEqp = armedHero.atkEqp + lv | 0;
    armedHero.spdEqp = armedHero.spdEqp + lv | 0;
    armedHero.defEqp = armedHero.defEqp + lv | 0;
    armedHero.resEqp = armedHero.resEqp + lv | 0;
    return armedHero;
  };
  Skill.prototype.lifeAndDeath_yukhz7$ = function (armedHero, lv) {
    armedHero.atkEqp = armedHero.atkEqp + lv | 0;
    armedHero.spdEqp = armedHero.spdEqp + lv | 0;
    armedHero.defEqp = armedHero.defEqp - lv | 0;
    armedHero.resEqp = armedHero.resEqp - lv | 0;
    return armedHero;
  };
  Skill.prototype.log_za3rmp$ = function (s) {
  };
  Skill.prototype.equipHp_yukhz7$ = function (armedHero, lv) {
    armedHero.hpEqp = armedHero.hpEqp + lv | 0;
    return armedHero;
  };
  Skill.prototype.equipAtk_yukhz7$ = function (armedHero, lv) {
    armedHero.atkEqp = armedHero.atkEqp + lv | 0;
    return armedHero;
  };
  Skill.prototype.equipKiller_yukhz7$ = function (armedHero, lv) {
    armedHero.atkEqp = armedHero.atkEqp + lv | 0;
    armedHero.reduceSpecialCooldown = armedHero.reduceSpecialCooldown + 1 | 0;
    return armedHero;
  };
  Skill.prototype.equipSpd_yukhz7$ = function (armedHero, lv) {
    armedHero.spdEqp = armedHero.spdEqp + lv | 0;
    return armedHero;
  };
  Skill.prototype.equipDef_yukhz7$ = function (armedHero, lv) {
    armedHero.defEqp = armedHero.defEqp + lv | 0;
    return armedHero;
  };
  Skill.prototype.equipRes_yukhz7$ = function (armedHero, lv) {
    armedHero.resEqp = armedHero.resEqp + lv | 0;
    return armedHero;
  };
  Skill.prototype.effectiveAgainst_d5yp1f$ = function (moveType, battleUnit) {
    if (ensureNotNull(battleUnit.enemy).armedHero.baseHero.moveType === moveType) {
      battleUnit.effectiveAgainst = EffectiveAgainst$Companion_getInstance().valueOfMoveType_5a1elt$(moveType);
    }
    return battleUnit;
  };
  Skill.prototype.effectiveAgainst_58hff6$ = function (weaponType, battleUnit) {
    if (ensureNotNull(battleUnit.enemy).armedHero.baseHero.weaponType === weaponType) {
      battleUnit.effectiveAgainst = EffectiveAgainst$Companion_getInstance().valueOfWeaponType_ihvkbe$(weaponType);
    }
    return battleUnit;
  };
  Skill.prototype.effectiveAgainstMagic_trfvk0$ = function (battleUnit) {
    if (ensureNotNull(battleUnit.enemy).armedHero.isMagicWeapon()) {
      battleUnit.effectiveAgainst = EffectiveAgainst$Companion_getInstance().valueOfWeaponType_ihvkbe$(ensureNotNull(battleUnit.enemy).armedHero.baseHero.weaponType);
    }
    return battleUnit;
  };
  Skill.prototype.doubleAttack_trfvk0$ = function (battleUnit) {
    battleUnit.doubleAttack = true;
    return battleUnit;
  };
  Skill.prototype.colorAdvantage_sv9jhu$ = function (battleUnit, lv) {
    battleUnit.colorAdvantageLevel = lv;
    return battleUnit;
  };
  Skill.prototype.vantage_p6uegp$ = function (fightPlan, lv) {
    if (fightPlan.target.hp <= (Kotlin.imul(fightPlan.target.armedHero.maxHp, 25 * lv | 0) / 100 | 0)) {
      fightPlan.plan.remove_11rb$(fightPlan.firstCounter);
      fightPlan.plan.add_wxm5ur$(0, fightPlan.firstCounter);
    }
    return fightPlan;
  };
  Skill.prototype.noFollowupAttack_9jfrn9$ = function (fightPlan) {
    fightPlan.plan.remove_11rb$(fightPlan.secondAttack);
    return fightPlan;
  };
  Skill.prototype.followupable_sv9jhu$ = function (battleUnit, lv) {
    if (battleUnit.hp >= (Kotlin.imul(battleUnit.armedHero.maxHp, 100 - (10 * lv | 0) | 0) / 100 | 0)) {
      this.log_za3rmp$(battleUnit.armedHero.name + ' followapable');
      battleUnit.followupable = true;
    }
    return battleUnit;
  };
  Skill.prototype.eachNofollowupable_sv9jhu$ = function (battleUnit, lv) {
    if (battleUnit.hp >= (Kotlin.imul(battleUnit.armedHero.maxHp, 110 - (20 * lv | 0) | 0) / 100 | 0)) {
      this.log_za3rmp$(battleUnit.armedHero.name + ' followapable');
      battleUnit.antiFollowup = true;
      ensureNotNull(battleUnit.enemy).antiFollowup = true;
    }
    return battleUnit;
  };
  Skill.prototype.desperation_p6uegp$ = function (fightPlan, lv) {
    if (fightPlan.attacker.hp <= (Kotlin.imul(fightPlan.attacker.armedHero.maxHp, 25 * lv | 0) / 100 | 0) && fightPlan.plan.contains_11rb$(fightPlan.secondAttack)) {
      fightPlan.plan.remove_11rb$(fightPlan.secondAttack);
      fightPlan.plan.add_wxm5ur$(fightPlan.plan.indexOf_11rb$(fightPlan.firstAttack) + 1 | 0, fightPlan.secondAttack);
    }
    return fightPlan;
  };
  Skill.prototype.brashAssault_sv9jhu$ = function (battleUnit, percentile) {
    if ((battleUnit.armedHero.baseHero.weaponType.range === ensureNotNull(battleUnit.enemy).armedHero.baseHero.weaponType.range || ensureNotNull(battleUnit.enemy).counterAllRange) && !ensureNotNull(battleUnit.enemy).cannotCcounter && battleUnit.hp <= (Kotlin.imul(battleUnit.armedHero.maxHp, percentile) / 100 | 0)) {
      battleUnit.followupable = true;
    }
    return battleUnit;
  };
  Skill.prototype.windsweep_sv9jhu$ = function (battleUnit, lv) {
    if (ensureNotNull(battleUnit.enemy).armedHero.baseHero.weaponType.isMaterial && (battleUnit.effectedPhantomSpd - ensureNotNull(battleUnit.enemy).effectedPhantomSpd | 0) >= (7 - (lv * 2 | 0) | 0)) {
      ensureNotNull(battleUnit.enemy).cannotCcounter = true;
    }
    return battleUnit;
  };
  Skill.prototype.watersweep_sv9jhu$ = function (battleUnit, lv) {
    if (!ensureNotNull(battleUnit.enemy).armedHero.baseHero.weaponType.isMaterial && (battleUnit.effectedPhantomSpd - ensureNotNull(battleUnit.enemy).effectedPhantomSpd | 0) >= (7 - (lv * 2 | 0) | 0)) {
      ensureNotNull(battleUnit.enemy).cannotCcounter = true;
    }
    return battleUnit;
  };
  Skill.prototype.dazzling_sv9jhu$ = function (battleUnit, lv) {
    if (battleUnit.hp >= Kotlin.imul(battleUnit.armedHero.maxHp, 150 - (lv * 50 | 0) | 0)) {
      ensureNotNull(battleUnit.enemy).cannotCcounter = true;
    }
    return battleUnit;
  };
  Skill.prototype.wrathfulStaff_sv9jhu$ = function (battleUnit, lv) {
    if (battleUnit.hp >= Kotlin.imul(battleUnit.armedHero.maxHp, 150 - (lv * 50 | 0) | 0)) {
      battleUnit.wrathfulStaff = true;
    }
    return battleUnit;
  };
  Skill.prototype.counterAllRange_trfvk0$ = function (battleUnit) {
    battleUnit.counterAllRange = true;
    return battleUnit;
  };
  Skill.prototype.disableEachCounter_sv9jhu$ = function (battleUnit, thisLevel) {
    battleUnit.cannotCcounter = true;
    ensureNotNull(battleUnit.enemy).cannotCcounter = true;
    return battleUnit;
  };
  Skill.prototype.sacasBlessing_sv9jhu$ = function (battleUnit, thisLevel) {
    var enemyType = ensureNotNull(battleUnit.enemy).armedHero.baseHero.weaponType;
    if (enemyType === WeaponType$SWORD_getInstance() || enemyType === WeaponType$LANCE_getInstance() || enemyType === WeaponType$AXE_getInstance()) {
      ensureNotNull(battleUnit.enemy).cannotCcounter = true;
    }
    return battleUnit;
  };
  Skill.prototype.beorcsBlessing_sv9jhu$ = function (battleUnit, thisLevel) {
    var enemyType = ensureNotNull(battleUnit.enemy).armedHero.baseHero.moveType;
    if (enemyType === MoveType$CAVALRY_getInstance() || enemyType === MoveType$FLIER_getInstance()) {
      ensureNotNull(battleUnit.enemy).antiBuffBonus = true;
    }
    return battleUnit;
  };
  Skill.prototype.equip_emsvym$ = function (armedHero, type) {
    if (type.isWeapon) {
      armedHero.atkEqp = armedHero.atkEqp + this.level | 0;
    }
    return armedHero;
  };
  Skill.prototype.fullHpBonus_sv9jhu$ = function (battleUnit, i) {
    if (battleUnit.hp === battleUnit.armedHero.maxHp) {
      battleUnit.atkEffect = battleUnit.atkEffect + 2 | 0;
      battleUnit.spdEffect = battleUnit.spdEffect + 2 | 0;
      battleUnit.defEffect = battleUnit.defEffect + 2 | 0;
      battleUnit.resEffect = battleUnit.resEffect + 2 | 0;
      if (battleUnit.side === SIDES$ATTACKER_getInstance()) {
        battleUnit.hpLossAtEndOfFight = battleUnit.hpLossAtEndOfFight + 2 | 0;
      }
    }
    return battleUnit;
  };
  Skill.prototype.allBonus_sv9jhu$ = function (battleUnit, i) {
    battleUnit.atkEffect = battleUnit.atkEffect + i | 0;
    battleUnit.spdEffect = battleUnit.spdEffect + i | 0;
    battleUnit.defEffect = battleUnit.defEffect + i | 0;
    battleUnit.resEffect = battleUnit.resEffect + i | 0;
    return battleUnit;
  };
  Skill.prototype.enemyFullHpBonus_sv9jhu$ = function (battleUnit, i) {
    if (ensureNotNull(battleUnit.enemy).hp === ensureNotNull(battleUnit.enemy).armedHero.maxHp) {
      battleUnit.atkEffect = battleUnit.atkEffect + 2 | 0;
      battleUnit.spdEffect = battleUnit.spdEffect + 2 | 0;
    }
    return battleUnit;
  };
  Skill.prototype.equipBrave_yukhz7$ = function (armedHero, level) {
    armedHero.atkEqp = armedHero.atkEqp + level | 0;
    armedHero.spdEqp = armedHero.spdEqp - 5 | 0;
    return armedHero;
  };
  Skill.prototype.equipBlade_yukhz7$ = function (armedHero, level) {
    armedHero.atkEqp = armedHero.atkEqp + level | 0;
    armedHero.reduceSpecialCooldown = armedHero.reduceSpecialCooldown - 1 | 0;
    return armedHero;
  };
  Skill.prototype.equipRaven_trfvk0$ = function (battleUnit) {
    battleUnit.colorlessAdvantage = true;
    return battleUnit;
  };
  Skill.prototype.bladeEffect_trfvk0$ = function (battleUnit) {
    battleUnit.blade = true;
    return battleUnit;
  };
  Skill.prototype.fullHpAtkSpdBonus_sv9jhu$ = function (battleUnit, i) {
    if (battleUnit.hp === battleUnit.armedHero.maxHp) {
      battleUnit.atkEffect = battleUnit.atkEffect + 5 | 0;
      battleUnit.spdEffect = battleUnit.spdEffect + 5 | 0;
      if (battleUnit.side === SIDES$ATTACKER_getInstance()) {
        battleUnit.hpLossAtEndOfFight = battleUnit.hpLossAtEndOfFight + 5 | 0;
      }
    }
    return battleUnit;
  };
  Skill.prototype.antiBuffBonus_trfvk0$ = function (battleUnit) {
    ensureNotNull(battleUnit.enemy).antiBuffBonus = true;
    return battleUnit;
  };
  Skill.prototype.heavyBlade_sv9jhu$ = function (battleUnit, lv) {
    if ((battleUnit.effectedAtk - ensureNotNull(battleUnit.enemy).effectedAtk | 0) > lv) {
      battleUnit.accelerateAttackCooldown = 1;
    }
    return battleUnit;
  };
  Skill.prototype.flashingBlade_sv9jhu$ = function (battleUnit, lv) {
    if ((battleUnit.effectedPhantomSpd - ensureNotNull(battleUnit.enemy).effectedPhantomSpd | 0) > lv) {
      battleUnit.accelerateAttackCooldown = 1;
    }
    return battleUnit;
  };
  Skill.prototype.accelerateAttackCooldown_sv9jhu$ = function (battleUnit, lv) {
    if ((battleUnit.hp * 10 | 0) >= Kotlin.imul(battleUnit.armedHero.maxHp, 11 - lv | 0)) {
      battleUnit.accelerateAttackCooldown = 1;
    }
    return battleUnit;
  };
  Skill.prototype.antiEffectiveAgainst_ut57va$ = function (battleUnit, type) {
    if (battleUnit.effectiveAgainst === type) {
      battleUnit.effectiveAgainst = EffectiveAgainst$NONE_getInstance();
    }
    return battleUnit;
  };
  Skill.prototype.antiAccelerateCooldown_sv9jhu$ = function (battleUnit, lv) {
    if ((battleUnit.hp * 10 | 0) >= Kotlin.imul(battleUnit.armedHero.maxHp, 11 - lv | 0)) {
      ensureNotNull(battleUnit.enemy).InflictCooldown = 1;
    }
    return battleUnit;
  };
  Skill.prototype.attackPain_sv9jhu$ = function (battleUnit, lv) {
    var tmp$;
    tmp$ = ensureNotNull(battleUnit.enemy);
    tmp$.hpLossAtEndOfFight = tmp$.hpLossAtEndOfFight + lv | 0;
    return battleUnit;
  };
  Skill.prototype.attackHpLoss_sv9jhu$ = function (battleUnit, lv) {
    battleUnit.hpLossAtEndOfFight = battleUnit.hpLossAtEndOfFight + lv | 0;
    return battleUnit;
  };
  Skill.prototype.attackHeal_sv9jhu$ = function (battleUnit, lv) {
    battleUnit.hpLossAtEndOfFight = battleUnit.hpLossAtEndOfFight - lv | 0;
    return battleUnit;
  };
  Skill.prototype.brazenAtk_sv9jhu$ = function (battleUnit, lv) {
    if ((battleUnit.hp * 10 | 0) <= (battleUnit.armedHero.maxHp * 8 | 0)) {
      battleUnit.atkEffect = battleUnit.atkEffect + lv | 0;
    }
    return battleUnit;
  };
  Skill.prototype.brazenSpd_sv9jhu$ = function (battleUnit, lv) {
    if ((battleUnit.hp * 10 | 0) <= (battleUnit.armedHero.maxHp * 8 | 0)) {
      battleUnit.spdEffect = battleUnit.spdEffect + lv | 0;
    }
    return battleUnit;
  };
  Skill.prototype.brazenDef_sv9jhu$ = function (battleUnit, lv) {
    if ((battleUnit.hp * 10 | 0) <= (battleUnit.armedHero.maxHp * 8 | 0)) {
      battleUnit.defEffect = battleUnit.defEffect + lv | 0;
    }
    return battleUnit;
  };
  Skill.prototype.brazenRes_sv9jhu$ = function (battleUnit, lv) {
    if ((battleUnit.hp * 10 | 0) <= (battleUnit.armedHero.maxHp * 8 | 0)) {
      battleUnit.resEffect = battleUnit.resEffect + lv | 0;
    }
    return battleUnit;
  };
  function Skill$SkillType(name, ordinal, jp, weaponType) {
    if (weaponType === void 0)
      weaponType = null;
    Enum.call(this);
    this.jp = jp;
    this.weaponType = weaponType;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Skill$SkillType_initFields() {
    Skill$SkillType_initFields = function () {
    };
    Skill$SkillType$NONE_instance = new Skill$SkillType('NONE', 0, '');
    Skill$SkillType$A_instance = new Skill$SkillType('A', 1, '');
    Skill$SkillType$B_instance = new Skill$SkillType('B', 2, '');
    Skill$SkillType$C_instance = new Skill$SkillType('C', 3, '');
    Skill$SkillType$SWORD_instance = new Skill$SkillType('SWORD', 4, '\u5263', WeaponType$SWORD_getInstance());
    Skill$SkillType$LANCE_instance = new Skill$SkillType('LANCE', 5, '\u69CD', WeaponType$LANCE_getInstance());
    Skill$SkillType$AXE_instance = new Skill$SkillType('AXE', 6, '\u65A7', WeaponType$AXE_getInstance());
    Skill$SkillType$DRAGON_instance = new Skill$SkillType('DRAGON', 7, '\u7ADC', WeaponType$DRAGON_getInstance());
    Skill$SkillType$REFINED_DRAGON_instance = new Skill$SkillType('REFINED_DRAGON', 8, '\u7ADC', WeaponType$DRAGON_getInstance());
    Skill$SkillType$RTOME_instance = new Skill$SkillType('RTOME', 9, '\u8D64\u9B54', WeaponType$RTOME_getInstance());
    Skill$SkillType$BTOME_instance = new Skill$SkillType('BTOME', 10, '\u9752\u9B54', WeaponType$BTOME_getInstance());
    Skill$SkillType$GTOME_instance = new Skill$SkillType('GTOME', 11, '\u7DD1\u9B54', WeaponType$GTOME_getInstance());
    Skill$SkillType$BOW_instance = new Skill$SkillType('BOW', 12, '\u5F13', WeaponType$BOW_getInstance());
    Skill$SkillType$DAGGER_instance = new Skill$SkillType('DAGGER', 13, '\u6697\u5668', WeaponType$DAGGER_getInstance());
    Skill$SkillType$STAFF_instance = new Skill$SkillType('STAFF', 14, '\u6756', WeaponType$STAFF_getInstance());
    Skill$SkillType$ASSIST_instance = new Skill$SkillType('ASSIST', 15, '');
    Skill$SkillType$SPECIAL_A_instance = new Skill$SkillType('SPECIAL_A', 16, '');
    Skill$SkillType$SPECIAL_B_instance = new Skill$SkillType('SPECIAL_B', 17, '');
    Skill$SkillType$SPECIAL_C_instance = new Skill$SkillType('SPECIAL_C', 18, '');
    Skill$SkillType$SPECIAL_D_instance = new Skill$SkillType('SPECIAL_D', 19, '');
    Skill$SkillType$SEAL_instance = new Skill$SkillType('SEAL', 20, '');
    Skill$SkillType$REFINERY_instance = new Skill$SkillType('REFINERY', 21, '');
  }
  var Skill$SkillType$NONE_instance;
  function Skill$SkillType$NONE_getInstance() {
    Skill$SkillType_initFields();
    return Skill$SkillType$NONE_instance;
  }
  var Skill$SkillType$A_instance;
  function Skill$SkillType$A_getInstance() {
    Skill$SkillType_initFields();
    return Skill$SkillType$A_instance;
  }
  var Skill$SkillType$B_instance;
  function Skill$SkillType$B_getInstance() {
    Skill$SkillType_initFields();
    return Skill$SkillType$B_instance;
  }
  var Skill$SkillType$C_instance;
  function Skill$SkillType$C_getInstance() {
    Skill$SkillType_initFields();
    return Skill$SkillType$C_instance;
  }
  var Skill$SkillType$SWORD_instance;
  function Skill$SkillType$SWORD_getInstance() {
    Skill$SkillType_initFields();
    return Skill$SkillType$SWORD_instance;
  }
  var Skill$SkillType$LANCE_instance;
  function Skill$SkillType$LANCE_getInstance() {
    Skill$SkillType_initFields();
    return Skill$SkillType$LANCE_instance;
  }
  var Skill$SkillType$AXE_instance;
  function Skill$SkillType$AXE_getInstance() {
    Skill$SkillType_initFields();
    return Skill$SkillType$AXE_instance;
  }
  var Skill$SkillType$DRAGON_instance;
  function Skill$SkillType$DRAGON_getInstance() {
    Skill$SkillType_initFields();
    return Skill$SkillType$DRAGON_instance;
  }
  var Skill$SkillType$REFINED_DRAGON_instance;
  function Skill$SkillType$REFINED_DRAGON_getInstance() {
    Skill$SkillType_initFields();
    return Skill$SkillType$REFINED_DRAGON_instance;
  }
  var Skill$SkillType$RTOME_instance;
  function Skill$SkillType$RTOME_getInstance() {
    Skill$SkillType_initFields();
    return Skill$SkillType$RTOME_instance;
  }
  var Skill$SkillType$BTOME_instance;
  function Skill$SkillType$BTOME_getInstance() {
    Skill$SkillType_initFields();
    return Skill$SkillType$BTOME_instance;
  }
  var Skill$SkillType$GTOME_instance;
  function Skill$SkillType$GTOME_getInstance() {
    Skill$SkillType_initFields();
    return Skill$SkillType$GTOME_instance;
  }
  var Skill$SkillType$BOW_instance;
  function Skill$SkillType$BOW_getInstance() {
    Skill$SkillType_initFields();
    return Skill$SkillType$BOW_instance;
  }
  var Skill$SkillType$DAGGER_instance;
  function Skill$SkillType$DAGGER_getInstance() {
    Skill$SkillType_initFields();
    return Skill$SkillType$DAGGER_instance;
  }
  var Skill$SkillType$STAFF_instance;
  function Skill$SkillType$STAFF_getInstance() {
    Skill$SkillType_initFields();
    return Skill$SkillType$STAFF_instance;
  }
  var Skill$SkillType$ASSIST_instance;
  function Skill$SkillType$ASSIST_getInstance() {
    Skill$SkillType_initFields();
    return Skill$SkillType$ASSIST_instance;
  }
  var Skill$SkillType$SPECIAL_A_instance;
  function Skill$SkillType$SPECIAL_A_getInstance() {
    Skill$SkillType_initFields();
    return Skill$SkillType$SPECIAL_A_instance;
  }
  var Skill$SkillType$SPECIAL_B_instance;
  function Skill$SkillType$SPECIAL_B_getInstance() {
    Skill$SkillType_initFields();
    return Skill$SkillType$SPECIAL_B_instance;
  }
  var Skill$SkillType$SPECIAL_C_instance;
  function Skill$SkillType$SPECIAL_C_getInstance() {
    Skill$SkillType_initFields();
    return Skill$SkillType$SPECIAL_C_instance;
  }
  var Skill$SkillType$SPECIAL_D_instance;
  function Skill$SkillType$SPECIAL_D_getInstance() {
    Skill$SkillType_initFields();
    return Skill$SkillType$SPECIAL_D_instance;
  }
  var Skill$SkillType$SEAL_instance;
  function Skill$SkillType$SEAL_getInstance() {
    Skill$SkillType_initFields();
    return Skill$SkillType$SEAL_instance;
  }
  var Skill$SkillType$REFINERY_instance;
  function Skill$SkillType$REFINERY_getInstance() {
    Skill$SkillType_initFields();
    return Skill$SkillType$REFINERY_instance;
  }
  Object.defineProperty(Skill$SkillType.prototype, 'isWeapon', {
    get: function () {
      return this.weaponType != null;
    }
  });
  Skill$SkillType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SkillType',
    interfaces: [Enum]
  };
  function Skill$SkillType$values() {
    return [Skill$SkillType$NONE_getInstance(), Skill$SkillType$A_getInstance(), Skill$SkillType$B_getInstance(), Skill$SkillType$C_getInstance(), Skill$SkillType$SWORD_getInstance(), Skill$SkillType$LANCE_getInstance(), Skill$SkillType$AXE_getInstance(), Skill$SkillType$DRAGON_getInstance(), Skill$SkillType$REFINED_DRAGON_getInstance(), Skill$SkillType$RTOME_getInstance(), Skill$SkillType$BTOME_getInstance(), Skill$SkillType$GTOME_getInstance(), Skill$SkillType$BOW_getInstance(), Skill$SkillType$DAGGER_getInstance(), Skill$SkillType$STAFF_getInstance(), Skill$SkillType$ASSIST_getInstance(), Skill$SkillType$SPECIAL_A_getInstance(), Skill$SkillType$SPECIAL_B_getInstance(), Skill$SkillType$SPECIAL_C_getInstance(), Skill$SkillType$SPECIAL_D_getInstance(), Skill$SkillType$SEAL_getInstance(), Skill$SkillType$REFINERY_getInstance()];
  }
  Skill$SkillType.values = Skill$SkillType$values;
  function Skill$SkillType$valueOf(name) {
    switch (name) {
      case 'NONE':
        return Skill$SkillType$NONE_getInstance();
      case 'A':
        return Skill$SkillType$A_getInstance();
      case 'B':
        return Skill$SkillType$B_getInstance();
      case 'C':
        return Skill$SkillType$C_getInstance();
      case 'SWORD':
        return Skill$SkillType$SWORD_getInstance();
      case 'LANCE':
        return Skill$SkillType$LANCE_getInstance();
      case 'AXE':
        return Skill$SkillType$AXE_getInstance();
      case 'DRAGON':
        return Skill$SkillType$DRAGON_getInstance();
      case 'REFINED_DRAGON':
        return Skill$SkillType$REFINED_DRAGON_getInstance();
      case 'RTOME':
        return Skill$SkillType$RTOME_getInstance();
      case 'BTOME':
        return Skill$SkillType$BTOME_getInstance();
      case 'GTOME':
        return Skill$SkillType$GTOME_getInstance();
      case 'BOW':
        return Skill$SkillType$BOW_getInstance();
      case 'DAGGER':
        return Skill$SkillType$DAGGER_getInstance();
      case 'STAFF':
        return Skill$SkillType$STAFF_getInstance();
      case 'ASSIST':
        return Skill$SkillType$ASSIST_getInstance();
      case 'SPECIAL_A':
        return Skill$SkillType$SPECIAL_A_getInstance();
      case 'SPECIAL_B':
        return Skill$SkillType$SPECIAL_B_getInstance();
      case 'SPECIAL_C':
        return Skill$SkillType$SPECIAL_C_getInstance();
      case 'SPECIAL_D':
        return Skill$SkillType$SPECIAL_D_getInstance();
      case 'SEAL':
        return Skill$SkillType$SEAL_getInstance();
      case 'REFINERY':
        return Skill$SkillType$REFINERY_getInstance();
      default:throwISE('No enum constant jp.blogspot.turanukimaru.fehs.skill.Skill.SkillType.' + name);
    }
  }
  Skill$SkillType.valueOf_61zpoe$ = Skill$SkillType$valueOf;
  Skill.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Skill',
    interfaces: []
  };
  function SkillA(name, ordinal, jp, type, level, preSkill, maxLevel) {
    if (level === void 0)
      level = 0;
    if (preSkill === void 0)
      preSkill = Skill$Companion_getInstance().NONE;
    if (maxLevel === void 0)
      maxLevel = 3;
    Enum.call(this);
    this.jp_3a5s95$_0 = jp;
    this.type_sprxq5$_0 = type;
    this.level_t45ob7$_0 = level;
    this.preSkill_i9jjgv$_0 = preSkill;
    this.maxLevel_zhn3b1$_0 = maxLevel;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function SkillA_initFields() {
    SkillA_initFields = function () {
    };
    new SkillA$Hp();
    new SkillA$HpSpd();
    new SkillA$HpRes();
    new SkillA$Attack();
    new SkillA$AtkSpd();
    new SkillA$AtkRes();
    new SkillA$Speed();
    new SkillA$SpdRes();
    new SkillA$SpdDef();
    new SkillA$Defense();
    new SkillA$AtkDef();
    new SkillA$HpDef();
    new SkillA$Resistance();
    new SkillA$DefiantAtk();
    new SkillA$DefiantSpd();
    new SkillA$DefiantDef();
    new SkillA$DefiantRes();
    new SkillA$TriangleAdept();
    new SkillA$LifeAndDeath();
    new SkillA$Furry();
    new SkillA$FortressDef();
    new SkillA$FortressRes();
    new SkillA$ArmoredBlow();
    new SkillA$WardingBlow();
    new SkillA$DeathBlow();
    new SkillA$DartingBlow();
    new SkillA$SwiftSparrow();
    new SkillA$SturdyBlow();
    new SkillA$SteadyBlow();
    new SkillA$MirrorStrike();
    new SkillA$BracingBlow();
    new SkillA$SwiftStrike();
    new SkillA$DistantDef();
    new SkillA$CloseDef();
    new SkillA$FierceStance();
    new SkillA$SteadyStance();
    new SkillA$WardingStance();
    new SkillA$SteadyBreath();
    new SkillA$EarthBoost();
    new SkillA$WindBoost();
    new SkillA$FireBoost();
    new SkillA$WaterBoost();
    new SkillA$HeavyBlade();
    new SkillA$FlashingBlade();
    new SkillA$CloseCounter();
    new SkillA$DistantCounter();
    new SkillA$SvalinnShield();
    new SkillA$IotesShield();
    new SkillA$GranisShield();
    SkillA$AtkDefBond_instance = new SkillA('AtkDefBond', 49, '\u653B\u6483\u5B88\u5099\u306E\u7D46', Skill$SkillType$A_getInstance(), void 0, void 0, 3);
    SkillA$AtkResBond_instance = new SkillA('AtkResBond', 50, '\u653B\u6483\u9B54\u9632\u306E\u7D46', Skill$SkillType$A_getInstance(), void 0, void 0, 3);
    new SkillA$BrazenAtkDef();
    new SkillA$BrazenAtkSpd();
    SkillA$Companion_getInstance();
  }
  Object.defineProperty(SkillA.prototype, 'jp', {
    get: function () {
      return this.jp_3a5s95$_0;
    }
  });
  Object.defineProperty(SkillA.prototype, 'type', {
    get: function () {
      return this.type_sprxq5$_0;
    }
  });
  Object.defineProperty(SkillA.prototype, 'level', {
    get: function () {
      return this.level_t45ob7$_0;
    }
  });
  Object.defineProperty(SkillA.prototype, 'preSkill', {
    get: function () {
      return this.preSkill_i9jjgv$_0;
    }
  });
  Object.defineProperty(SkillA.prototype, 'maxLevel', {
    get: function () {
      return this.maxLevel_zhn3b1$_0;
    }
  });
  function SkillA$Hp() {
    SkillA$Hp_instance = this;
    SkillA.call(this, 'Hp', 0, 'HP', Skill$SkillType$A_getInstance());
  }
  SkillA$Hp.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipHp_yukhz7$(armedHero, lv + 2 | 0);
  };
  SkillA$Hp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Hp',
    interfaces: [SkillA]
  };
  var SkillA$Hp_instance = null;
  function SkillA$Hp_getInstance() {
    SkillA_initFields();
    return SkillA$Hp_instance;
  }
  function SkillA$HpSpd() {
    SkillA$HpSpd_instance = this;
    SkillA.call(this, 'HpSpd', 1, 'HP\u901F\u3055', Skill$SkillType$A_getInstance(), void 0, void 0, 2);
  }
  SkillA$HpSpd.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipSpd_yukhz7$(this.equipHp_yukhz7$(armedHero, lv + 2 | 0), lv);
  };
  SkillA$HpSpd.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HpSpd',
    interfaces: [SkillA]
  };
  var SkillA$HpSpd_instance = null;
  function SkillA$HpSpd_getInstance() {
    SkillA_initFields();
    return SkillA$HpSpd_instance;
  }
  function SkillA$HpRes() {
    SkillA$HpRes_instance = this;
    SkillA.call(this, 'HpRes', 2, 'HP\u9B54\u9632', Skill$SkillType$A_getInstance(), void 0, void 0, 2);
  }
  SkillA$HpRes.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipRes_yukhz7$(this.equipHp_yukhz7$(armedHero, lv + 2 | 0), lv);
  };
  SkillA$HpRes.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HpRes',
    interfaces: [SkillA]
  };
  var SkillA$HpRes_instance = null;
  function SkillA$HpRes_getInstance() {
    SkillA_initFields();
    return SkillA$HpRes_instance;
  }
  function SkillA$Attack() {
    SkillA$Attack_instance = this;
    SkillA.call(this, 'Attack', 3, '\u653B\u6483', Skill$SkillType$A_getInstance());
  }
  SkillA$Attack.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipAtk_yukhz7$(armedHero, lv);
  };
  SkillA$Attack.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Attack',
    interfaces: [SkillA]
  };
  var SkillA$Attack_instance = null;
  function SkillA$Attack_getInstance() {
    SkillA_initFields();
    return SkillA$Attack_instance;
  }
  function SkillA$AtkSpd() {
    SkillA$AtkSpd_instance = this;
    SkillA.call(this, 'AtkSpd', 4, '\u653B\u6483\u901F\u3055', Skill$SkillType$A_getInstance(), void 0, void 0, 2);
  }
  SkillA$AtkSpd.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipSpd_yukhz7$(this.equipAtk_yukhz7$(armedHero, lv), lv);
  };
  SkillA$AtkSpd.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtkSpd',
    interfaces: [SkillA]
  };
  var SkillA$AtkSpd_instance = null;
  function SkillA$AtkSpd_getInstance() {
    SkillA_initFields();
    return SkillA$AtkSpd_instance;
  }
  function SkillA$AtkRes() {
    SkillA$AtkRes_instance = this;
    SkillA.call(this, 'AtkRes', 5, '\u653B\u6483\u9B54\u9632', Skill$SkillType$A_getInstance(), void 0, void 0, 2);
  }
  SkillA$AtkRes.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipRes_yukhz7$(this.equipAtk_yukhz7$(armedHero, lv), lv);
  };
  SkillA$AtkRes.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtkRes',
    interfaces: [SkillA]
  };
  var SkillA$AtkRes_instance = null;
  function SkillA$AtkRes_getInstance() {
    SkillA_initFields();
    return SkillA$AtkRes_instance;
  }
  function SkillA$Speed() {
    SkillA$Speed_instance = this;
    SkillA.call(this, 'Speed', 6, '\u901F\u3055', Skill$SkillType$A_getInstance());
  }
  SkillA$Speed.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipSpd_yukhz7$(armedHero, lv);
  };
  SkillA$Speed.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Speed',
    interfaces: [SkillA]
  };
  var SkillA$Speed_instance = null;
  function SkillA$Speed_getInstance() {
    SkillA_initFields();
    return SkillA$Speed_instance;
  }
  function SkillA$SpdRes() {
    SkillA$SpdRes_instance = this;
    SkillA.call(this, 'SpdRes', 7, '\u901F\u3055\u9B54\u9632', Skill$SkillType$A_getInstance(), void 0, void 0, 2);
  }
  SkillA$SpdRes.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipRes_yukhz7$(this.equipSpd_yukhz7$(armedHero, lv), lv);
  };
  SkillA$SpdRes.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SpdRes',
    interfaces: [SkillA]
  };
  var SkillA$SpdRes_instance = null;
  function SkillA$SpdRes_getInstance() {
    SkillA_initFields();
    return SkillA$SpdRes_instance;
  }
  function SkillA$SpdDef() {
    SkillA$SpdDef_instance = this;
    SkillA.call(this, 'SpdDef', 8, '\u901F\u3055\u5B88\u5099', Skill$SkillType$A_getInstance(), void 0, void 0, 2);
  }
  SkillA$SpdDef.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipDef_yukhz7$(this.equipSpd_yukhz7$(armedHero, lv), lv);
  };
  SkillA$SpdDef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SpdDef',
    interfaces: [SkillA]
  };
  var SkillA$SpdDef_instance = null;
  function SkillA$SpdDef_getInstance() {
    SkillA_initFields();
    return SkillA$SpdDef_instance;
  }
  function SkillA$Defense() {
    SkillA$Defense_instance = this;
    SkillA.call(this, 'Defense', 9, '\u5B88\u5099', Skill$SkillType$A_getInstance());
  }
  SkillA$Defense.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipDef_yukhz7$(armedHero, lv);
  };
  SkillA$Defense.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Defense',
    interfaces: [SkillA]
  };
  var SkillA$Defense_instance = null;
  function SkillA$Defense_getInstance() {
    SkillA_initFields();
    return SkillA$Defense_instance;
  }
  function SkillA$AtkDef() {
    SkillA$AtkDef_instance = this;
    SkillA.call(this, 'AtkDef', 10, '\u653B\u6483\u5B88\u5099', Skill$SkillType$A_getInstance(), void 0, void 0, 2);
  }
  SkillA$AtkDef.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipDef_yukhz7$(this.equipAtk_yukhz7$(armedHero, lv), lv);
  };
  SkillA$AtkDef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtkDef',
    interfaces: [SkillA]
  };
  var SkillA$AtkDef_instance = null;
  function SkillA$AtkDef_getInstance() {
    SkillA_initFields();
    return SkillA$AtkDef_instance;
  }
  function SkillA$HpDef() {
    SkillA$HpDef_instance = this;
    SkillA.call(this, 'HpDef', 11, 'HP\u5B88\u5099', Skill$SkillType$A_getInstance(), void 0, void 0, 2);
  }
  SkillA$HpDef.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipDef_yukhz7$(this.equipHp_yukhz7$(armedHero, lv + 2 | 0), lv);
  };
  SkillA$HpDef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HpDef',
    interfaces: [SkillA]
  };
  var SkillA$HpDef_instance = null;
  function SkillA$HpDef_getInstance() {
    SkillA_initFields();
    return SkillA$HpDef_instance;
  }
  function SkillA$Resistance() {
    SkillA$Resistance_instance = this;
    SkillA.call(this, 'Resistance', 12, '\u9B54\u9632', Skill$SkillType$A_getInstance());
  }
  SkillA$Resistance.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipRes_yukhz7$(armedHero, lv);
  };
  SkillA$Resistance.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Resistance',
    interfaces: [SkillA]
  };
  var SkillA$Resistance_instance = null;
  function SkillA$Resistance_getInstance() {
    SkillA_initFields();
    return SkillA$Resistance_instance;
  }
  function SkillA$DefiantAtk() {
    SkillA$DefiantAtk_instance = this;
    SkillA.call(this, 'DefiantAtk', 13, '\u653B\u6483\u306E\u899A\u9192', Skill$SkillType$A_getInstance());
  }
  SkillA$DefiantAtk.prototype.turnStart_sv9jhu$$default = function (battleUnit, lv) {
    return this.defiantAtk_sv9jhu$(battleUnit, lv);
  };
  SkillA$DefiantAtk.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefiantAtk',
    interfaces: [SkillA]
  };
  var SkillA$DefiantAtk_instance = null;
  function SkillA$DefiantAtk_getInstance() {
    SkillA_initFields();
    return SkillA$DefiantAtk_instance;
  }
  function SkillA$DefiantSpd() {
    SkillA$DefiantSpd_instance = this;
    SkillA.call(this, 'DefiantSpd', 14, '\u901F\u3055\u306E\u899A\u9192', Skill$SkillType$A_getInstance());
  }
  SkillA$DefiantSpd.prototype.turnStart_sv9jhu$$default = function (battleUnit, lv) {
    return this.defiantSpd_sv9jhu$(battleUnit, lv);
  };
  SkillA$DefiantSpd.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefiantSpd',
    interfaces: [SkillA]
  };
  var SkillA$DefiantSpd_instance = null;
  function SkillA$DefiantSpd_getInstance() {
    SkillA_initFields();
    return SkillA$DefiantSpd_instance;
  }
  function SkillA$DefiantDef() {
    SkillA$DefiantDef_instance = this;
    SkillA.call(this, 'DefiantDef', 15, '\u5B88\u5099\u306E\u899A\u9192', Skill$SkillType$A_getInstance());
  }
  SkillA$DefiantDef.prototype.turnStart_sv9jhu$$default = function (battleUnit, lv) {
    return this.defiantDef_sv9jhu$(battleUnit, lv);
  };
  SkillA$DefiantDef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefiantDef',
    interfaces: [SkillA]
  };
  var SkillA$DefiantDef_instance = null;
  function SkillA$DefiantDef_getInstance() {
    SkillA_initFields();
    return SkillA$DefiantDef_instance;
  }
  function SkillA$DefiantRes() {
    SkillA$DefiantRes_instance = this;
    SkillA.call(this, 'DefiantRes', 16, '\u9B54\u9632\u306E\u899A\u9192', Skill$SkillType$A_getInstance());
  }
  SkillA$DefiantRes.prototype.turnStart_sv9jhu$$default = function (battleUnit, lv) {
    return this.defiantRes_sv9jhu$(battleUnit, lv);
  };
  SkillA$DefiantRes.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefiantRes',
    interfaces: [SkillA]
  };
  var SkillA$DefiantRes_instance = null;
  function SkillA$DefiantRes_getInstance() {
    SkillA_initFields();
    return SkillA$DefiantRes_instance;
  }
  function SkillA$TriangleAdept() {
    SkillA$TriangleAdept_instance = this;
    SkillA.call(this, 'TriangleAdept', 17, '\u76F8\u6027\u6FC0\u5316', Skill$SkillType$A_getInstance());
  }
  SkillA$TriangleAdept.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.colorAdvantage_sv9jhu$(battleUnit, lv);
  };
  SkillA$TriangleAdept.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TriangleAdept',
    interfaces: [SkillA]
  };
  var SkillA$TriangleAdept_instance = null;
  function SkillA$TriangleAdept_getInstance() {
    SkillA_initFields();
    return SkillA$TriangleAdept_instance;
  }
  function SkillA$LifeAndDeath() {
    SkillA$LifeAndDeath_instance = this;
    SkillA.call(this, 'LifeAndDeath', 18, '\u6B7B\u7DDA', Skill$SkillType$A_getInstance());
  }
  SkillA$LifeAndDeath.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.lifeAndDeath_yukhz7$(armedHero, lv + 2 | 0);
  };
  SkillA$LifeAndDeath.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LifeAndDeath',
    interfaces: [SkillA]
  };
  var SkillA$LifeAndDeath_instance = null;
  function SkillA$LifeAndDeath_getInstance() {
    SkillA_initFields();
    return SkillA$LifeAndDeath_instance;
  }
  function SkillA$Furry() {
    SkillA$Furry_instance = this;
    SkillA.call(this, 'Furry', 19, '\u7345\u5B50\u596E\u8FC5', Skill$SkillType$A_getInstance());
  }
  SkillA$Furry.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.furry_yukhz7$(armedHero, lv);
  };
  SkillA$Furry.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.attackHpLoss_sv9jhu$(battleUnit, lv * 2 | 0);
  };
  SkillA$Furry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Furry',
    interfaces: [SkillA]
  };
  var SkillA$Furry_instance = null;
  function SkillA$Furry_getInstance() {
    SkillA_initFields();
    return SkillA$Furry_instance;
  }
  function SkillA$FortressDef() {
    SkillA$FortressDef_instance = this;
    SkillA.call(this, 'FortressDef', 20, '\u5B88\u5099\u306E\u57CE\u585E', Skill$SkillType$A_getInstance());
  }
  SkillA$FortressDef.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipAtk_yukhz7$(this.equipDef_yukhz7$(armedHero, lv + 2 | 0), -3);
  };
  SkillA$FortressDef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FortressDef',
    interfaces: [SkillA]
  };
  var SkillA$FortressDef_instance = null;
  function SkillA$FortressDef_getInstance() {
    SkillA_initFields();
    return SkillA$FortressDef_instance;
  }
  function SkillA$FortressRes() {
    SkillA$FortressRes_instance = this;
    SkillA.call(this, 'FortressRes', 21, '\u9B54\u9632\u306E\u57CE\u585E', Skill$SkillType$A_getInstance());
  }
  SkillA$FortressRes.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipAtk_yukhz7$(this.equipRes_yukhz7$(armedHero, lv + 2 | 0), -3);
  };
  SkillA$FortressRes.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FortressRes',
    interfaces: [SkillA]
  };
  var SkillA$FortressRes_instance = null;
  function SkillA$FortressRes_getInstance() {
    SkillA_initFields();
    return SkillA$FortressRes_instance;
  }
  function SkillA$ArmoredBlow() {
    SkillA$ArmoredBlow_instance = this;
    SkillA.call(this, 'ArmoredBlow', 22, '\u91D1\u525B\u306E\u4E00\u6483', Skill$SkillType$A_getInstance());
  }
  SkillA$ArmoredBlow.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.blowDef_sv9jhu$(battleUnit, lv * 2 | 0);
  };
  SkillA$ArmoredBlow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArmoredBlow',
    interfaces: [SkillA]
  };
  var SkillA$ArmoredBlow_instance = null;
  function SkillA$ArmoredBlow_getInstance() {
    SkillA_initFields();
    return SkillA$ArmoredBlow_instance;
  }
  function SkillA$WardingBlow() {
    SkillA$WardingBlow_instance = this;
    SkillA.call(this, 'WardingBlow', 23, '\u660E\u93E1\u306E\u4E00\u6483', Skill$SkillType$A_getInstance());
  }
  SkillA$WardingBlow.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.blowRes_sv9jhu$(battleUnit, lv * 2 | 0);
  };
  SkillA$WardingBlow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WardingBlow',
    interfaces: [SkillA]
  };
  var SkillA$WardingBlow_instance = null;
  function SkillA$WardingBlow_getInstance() {
    SkillA_initFields();
    return SkillA$WardingBlow_instance;
  }
  function SkillA$DeathBlow() {
    SkillA$DeathBlow_instance = this;
    SkillA.call(this, 'DeathBlow', 24, '\u9B3C\u795E\u306E\u4E00\u6483', Skill$SkillType$A_getInstance());
  }
  SkillA$DeathBlow.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.blowAtk_sv9jhu$(battleUnit, lv * 2 | 0);
  };
  SkillA$DeathBlow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DeathBlow',
    interfaces: [SkillA]
  };
  var SkillA$DeathBlow_instance = null;
  function SkillA$DeathBlow_getInstance() {
    SkillA_initFields();
    return SkillA$DeathBlow_instance;
  }
  function SkillA$DartingBlow() {
    SkillA$DartingBlow_instance = this;
    SkillA.call(this, 'DartingBlow', 25, '\u98DB\u71D5\u306E\u4E00\u6483', Skill$SkillType$A_getInstance());
  }
  SkillA$DartingBlow.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.blowSpd_sv9jhu$(battleUnit, lv * 2 | 0);
  };
  SkillA$DartingBlow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DartingBlow',
    interfaces: [SkillA]
  };
  var SkillA$DartingBlow_instance = null;
  function SkillA$DartingBlow_getInstance() {
    SkillA_initFields();
    return SkillA$DartingBlow_instance;
  }
  function SkillA$SwiftSparrow() {
    SkillA$SwiftSparrow_instance = this;
    SkillA.call(this, 'SwiftSparrow', 26, '\u9B3C\u795E\u98DB\u71D5\u306E\u4E00\u6483', Skill$SkillType$A_getInstance(), void 0, void 0, 2);
  }
  SkillA$SwiftSparrow.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.blowAtk_sv9jhu$(this.blowSpd_sv9jhu$(battleUnit, lv * 2 | 0), lv * 2 | 0);
  };
  SkillA$SwiftSparrow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SwiftSparrow',
    interfaces: [SkillA]
  };
  var SkillA$SwiftSparrow_instance = null;
  function SkillA$SwiftSparrow_getInstance() {
    SkillA_initFields();
    return SkillA$SwiftSparrow_instance;
  }
  function SkillA$SturdyBlow() {
    SkillA$SturdyBlow_instance = this;
    SkillA.call(this, 'SturdyBlow', 27, '\u9B3C\u795E\u91D1\u525B\u306E\u4E00\u6483', Skill$SkillType$A_getInstance(), void 0, void 0, 2);
  }
  SkillA$SturdyBlow.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.blowAtk_sv9jhu$(this.blowDef_sv9jhu$(battleUnit, lv * 2 | 0), lv * 2 | 0);
  };
  SkillA$SturdyBlow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SturdyBlow',
    interfaces: [SkillA]
  };
  var SkillA$SturdyBlow_instance = null;
  function SkillA$SturdyBlow_getInstance() {
    SkillA_initFields();
    return SkillA$SturdyBlow_instance;
  }
  function SkillA$SteadyBlow() {
    SkillA$SteadyBlow_instance = this;
    SkillA.call(this, 'SteadyBlow', 28, '\u98DB\u71D5\u91D1\u525B\u306E\u4E00\u6483', Skill$SkillType$A_getInstance(), void 0, void 0, 2);
  }
  SkillA$SteadyBlow.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.blowSpd_sv9jhu$(this.blowDef_sv9jhu$(battleUnit, lv * 2 | 0), lv * 2 | 0);
  };
  SkillA$SteadyBlow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SteadyBlow',
    interfaces: [SkillA]
  };
  var SkillA$SteadyBlow_instance = null;
  function SkillA$SteadyBlow_getInstance() {
    SkillA_initFields();
    return SkillA$SteadyBlow_instance;
  }
  function SkillA$MirrorStrike() {
    SkillA$MirrorStrike_instance = this;
    SkillA.call(this, 'MirrorStrike', 29, '\u9B3C\u795E\u660E\u93E1\u306E\u4E00\u6483', Skill$SkillType$A_getInstance(), void 0, void 0, 2);
  }
  SkillA$MirrorStrike.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.blowAtk_sv9jhu$(this.blowRes_sv9jhu$(battleUnit, lv * 2 | 0), lv * 2 | 0);
  };
  SkillA$MirrorStrike.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MirrorStrike',
    interfaces: [SkillA]
  };
  var SkillA$MirrorStrike_instance = null;
  function SkillA$MirrorStrike_getInstance() {
    SkillA_initFields();
    return SkillA$MirrorStrike_instance;
  }
  function SkillA$BracingBlow() {
    SkillA$BracingBlow_instance = this;
    SkillA.call(this, 'BracingBlow', 30, '\u91D1\u525B\u660E\u93E1\u306E\u4E00\u6483', Skill$SkillType$A_getInstance(), void 0, void 0, 2);
  }
  SkillA$BracingBlow.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.blowRes_sv9jhu$(this.blowDef_sv9jhu$(battleUnit, lv * 2 | 0), lv * 2 | 0);
  };
  SkillA$BracingBlow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BracingBlow',
    interfaces: [SkillA]
  };
  var SkillA$BracingBlow_instance = null;
  function SkillA$BracingBlow_getInstance() {
    SkillA_initFields();
    return SkillA$BracingBlow_instance;
  }
  function SkillA$SwiftStrike() {
    SkillA$SwiftStrike_instance = this;
    SkillA.call(this, 'SwiftStrike', 31, '\u98DB\u71D5\u660E\u93E1\u306E\u4E00\u6483', Skill$SkillType$A_getInstance(), void 0, void 0, 2);
  }
  SkillA$SwiftStrike.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.blowRes_sv9jhu$(this.blowSpd_sv9jhu$(battleUnit, lv * 2 | 0), lv * 2 | 0);
  };
  SkillA$SwiftStrike.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SwiftStrike',
    interfaces: [SkillA]
  };
  var SkillA$SwiftStrike_instance = null;
  function SkillA$SwiftStrike_getInstance() {
    SkillA_initFields();
    return SkillA$SwiftStrike_instance;
  }
  function SkillA$DistantDef() {
    SkillA$DistantDef_instance = this;
    SkillA.call(this, 'DistantDef', 32, '\u9060\u8DDD\u96E2\u9632\u5FA1', Skill$SkillType$A_getInstance());
  }
  SkillA$DistantDef.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.distantDef_sv9jhu$(battleUnit, lv * 2 | 0);
  };
  SkillA$DistantDef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DistantDef',
    interfaces: [SkillA]
  };
  var SkillA$DistantDef_instance = null;
  function SkillA$DistantDef_getInstance() {
    SkillA_initFields();
    return SkillA$DistantDef_instance;
  }
  function SkillA$CloseDef() {
    SkillA$CloseDef_instance = this;
    SkillA.call(this, 'CloseDef', 33, '\u8FD1\u8DDD\u96E2\u9632\u5FA1', Skill$SkillType$A_getInstance());
  }
  SkillA$CloseDef.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.closeDef_sv9jhu$(battleUnit, lv * 2 | 0);
  };
  SkillA$CloseDef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CloseDef',
    interfaces: [SkillA]
  };
  var SkillA$CloseDef_instance = null;
  function SkillA$CloseDef_getInstance() {
    SkillA_initFields();
    return SkillA$CloseDef_instance;
  }
  function SkillA$FierceStance() {
    SkillA$FierceStance_instance = this;
    SkillA.call(this, 'FierceStance', 34, '\u9B3C\u795E\u306E\u69CB\u3048', Skill$SkillType$A_getInstance());
  }
  SkillA$FierceStance.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.steadyAtk_sv9jhu$(battleUnit, lv * 2 | 0);
  };
  SkillA$FierceStance.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FierceStance',
    interfaces: [SkillA]
  };
  var SkillA$FierceStance_instance = null;
  function SkillA$FierceStance_getInstance() {
    SkillA_initFields();
    return SkillA$FierceStance_instance;
  }
  function SkillA$SteadyStance() {
    SkillA$SteadyStance_instance = this;
    SkillA.call(this, 'SteadyStance', 35, '\u91D1\u525B\u306E\u69CB\u3048', Skill$SkillType$A_getInstance());
  }
  SkillA$SteadyStance.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.steadyDef_sv9jhu$(battleUnit, lv * 2 | 0);
  };
  SkillA$SteadyStance.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SteadyStance',
    interfaces: [SkillA]
  };
  var SkillA$SteadyStance_instance = null;
  function SkillA$SteadyStance_getInstance() {
    SkillA_initFields();
    return SkillA$SteadyStance_instance;
  }
  function SkillA$WardingStance() {
    SkillA$WardingStance_instance = this;
    SkillA.call(this, 'WardingStance', 36, '\u660E\u93E1\u306E\u69CB\u3048', Skill$SkillType$A_getInstance());
  }
  SkillA$WardingStance.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.steadyRes_sv9jhu$(battleUnit, lv * 2 | 0);
  };
  SkillA$WardingStance.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WardingStance',
    interfaces: [SkillA]
  };
  var SkillA$WardingStance_instance = null;
  function SkillA$WardingStance_getInstance() {
    SkillA_initFields();
    return SkillA$WardingStance_instance;
  }
  function SkillA$SteadyBreath() {
    SkillA$SteadyBreath_instance = this;
    SkillA.call(this, 'SteadyBreath', 37, '\u91D1\u525B\u306E\u547C\u5438', Skill$SkillType$A_getInstance(), void 0, void 0, 0);
  }
  SkillA$SteadyBreath.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    battleUnit.accelerateAttackCooldown = 1;
    return this.steadyDef_sv9jhu$(battleUnit, 2);
  };
  SkillA$SteadyBreath.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SteadyBreath',
    interfaces: [SkillA]
  };
  var SkillA$SteadyBreath_instance = null;
  function SkillA$SteadyBreath_getInstance() {
    SkillA_initFields();
    return SkillA$SteadyBreath_instance;
  }
  function SkillA$EarthBoost() {
    SkillA$EarthBoost_instance = this;
    SkillA.call(this, 'EarthBoost', 38, '\u751F\u547D\u306E\u5927\u5730', Skill$SkillType$A_getInstance());
  }
  SkillA$EarthBoost.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.boostDef_sv9jhu$(battleUnit, lv * 2 | 0);
  };
  SkillA$EarthBoost.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EarthBoost',
    interfaces: [SkillA]
  };
  var SkillA$EarthBoost_instance = null;
  function SkillA$EarthBoost_getInstance() {
    SkillA_initFields();
    return SkillA$EarthBoost_instance;
  }
  function SkillA$WindBoost() {
    SkillA$WindBoost_instance = this;
    SkillA.call(this, 'WindBoost', 39, '\u751F\u547D\u306E\u75BE\u98A8', Skill$SkillType$A_getInstance());
  }
  SkillA$WindBoost.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.boostSpd_sv9jhu$(battleUnit, lv * 2 | 0);
  };
  SkillA$WindBoost.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WindBoost',
    interfaces: [SkillA]
  };
  var SkillA$WindBoost_instance = null;
  function SkillA$WindBoost_getInstance() {
    SkillA_initFields();
    return SkillA$WindBoost_instance;
  }
  function SkillA$FireBoost() {
    SkillA$FireBoost_instance = this;
    SkillA.call(this, 'FireBoost', 40, '\u751F\u547D\u306E\u696D\u706B', Skill$SkillType$A_getInstance());
  }
  SkillA$FireBoost.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.boostAtk_sv9jhu$(battleUnit, lv * 2 | 0);
  };
  SkillA$FireBoost.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FireBoost',
    interfaces: [SkillA]
  };
  var SkillA$FireBoost_instance = null;
  function SkillA$FireBoost_getInstance() {
    SkillA_initFields();
    return SkillA$FireBoost_instance;
  }
  function SkillA$WaterBoost() {
    SkillA$WaterBoost_instance = this;
    SkillA.call(this, 'WaterBoost', 41, '\u751F\u547D\u306E\u9759\u6C34', Skill$SkillType$A_getInstance());
  }
  SkillA$WaterBoost.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.boostRes_sv9jhu$(battleUnit, lv * 2 | 0);
  };
  SkillA$WaterBoost.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WaterBoost',
    interfaces: [SkillA]
  };
  var SkillA$WaterBoost_instance = null;
  function SkillA$WaterBoost_getInstance() {
    SkillA_initFields();
    return SkillA$WaterBoost_instance;
  }
  function SkillA$HeavyBlade() {
    SkillA$HeavyBlade_instance = this;
    SkillA.call(this, 'HeavyBlade', 42, '\u525B\u5263', Skill$SkillType$A_getInstance());
  }
  SkillA$HeavyBlade.prototype.effectedAttackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.heavyBlade_sv9jhu$(battleUnit, 7 - (lv * 2 | 0) | 0);
  };
  SkillA$HeavyBlade.prototype.effectedCounterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.heavyBlade_sv9jhu$(battleUnit, 7 - (lv * 2 | 0) | 0);
  };
  SkillA$HeavyBlade.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HeavyBlade',
    interfaces: [SkillA]
  };
  var SkillA$HeavyBlade_instance = null;
  function SkillA$HeavyBlade_getInstance() {
    SkillA_initFields();
    return SkillA$HeavyBlade_instance;
  }
  function SkillA$FlashingBlade() {
    SkillA$FlashingBlade_instance = this;
    SkillA.call(this, 'FlashingBlade', 43, '\u67D4\u5263', Skill$SkillType$A_getInstance());
  }
  SkillA$FlashingBlade.prototype.effectedAttackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.flashingBlade_sv9jhu$(battleUnit, 7 - (lv * 2 | 0) | 0);
  };
  SkillA$FlashingBlade.prototype.effectedCounterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.flashingBlade_sv9jhu$(battleUnit, 7 - (lv * 2 | 0) | 0);
  };
  SkillA$FlashingBlade.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FlashingBlade',
    interfaces: [SkillA]
  };
  var SkillA$FlashingBlade_instance = null;
  function SkillA$FlashingBlade_getInstance() {
    SkillA_initFields();
    return SkillA$FlashingBlade_instance;
  }
  function SkillA$CloseCounter() {
    SkillA$CloseCounter_instance = this;
    SkillA.call(this, 'CloseCounter', 44, '\u8FD1\u8DDD\u96E2\u53CD\u6483', Skill$SkillType$A_getInstance(), void 0, void 0, 0);
  }
  SkillA$CloseCounter.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.counterAllRange_trfvk0$(battleUnit);
  };
  SkillA$CloseCounter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CloseCounter',
    interfaces: [SkillA]
  };
  var SkillA$CloseCounter_instance = null;
  function SkillA$CloseCounter_getInstance() {
    SkillA_initFields();
    return SkillA$CloseCounter_instance;
  }
  function SkillA$DistantCounter() {
    SkillA$DistantCounter_instance = this;
    SkillA.call(this, 'DistantCounter', 45, '\u9060\u8DDD\u96E2\u53CD\u6483', Skill$SkillType$A_getInstance(), void 0, void 0, 0);
  }
  SkillA$DistantCounter.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.counterAllRange_trfvk0$(battleUnit);
  };
  SkillA$DistantCounter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DistantCounter',
    interfaces: [SkillA]
  };
  var SkillA$DistantCounter_instance = null;
  function SkillA$DistantCounter_getInstance() {
    SkillA_initFields();
    return SkillA$DistantCounter_instance;
  }
  function SkillA$SvalinnShield() {
    SkillA$SvalinnShield_instance = this;
    SkillA.call(this, 'SvalinnShield', 46, '\u30B9\u30F4\u30A7\u30EB\u306E\u76FE', Skill$SkillType$A_getInstance(), void 0, void 0, 0);
  }
  SkillA$SvalinnShield.prototype.effectedAttackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.antiEffectiveAgainst_ut57va$(battleUnit, EffectiveAgainst$ARMORED_getInstance());
  };
  SkillA$SvalinnShield.prototype.effectedCounterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.antiEffectiveAgainst_ut57va$(battleUnit, EffectiveAgainst$ARMORED_getInstance());
  };
  SkillA$SvalinnShield.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SvalinnShield',
    interfaces: [SkillA]
  };
  var SkillA$SvalinnShield_instance = null;
  function SkillA$SvalinnShield_getInstance() {
    SkillA_initFields();
    return SkillA$SvalinnShield_instance;
  }
  function SkillA$IotesShield() {
    SkillA$IotesShield_instance = this;
    SkillA.call(this, 'IotesShield', 47, '\u30A2\u30A4\u30AA\u30C6\u306E\u76FE', Skill$SkillType$A_getInstance(), void 0, void 0, 0);
  }
  SkillA$IotesShield.prototype.effectedAttackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.antiEffectiveAgainst_ut57va$(battleUnit, EffectiveAgainst$FLIER_getInstance());
  };
  SkillA$IotesShield.prototype.effectedCounterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.antiEffectiveAgainst_ut57va$(battleUnit, EffectiveAgainst$FLIER_getInstance());
  };
  SkillA$IotesShield.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IotesShield',
    interfaces: [SkillA]
  };
  var SkillA$IotesShield_instance = null;
  function SkillA$IotesShield_getInstance() {
    SkillA_initFields();
    return SkillA$IotesShield_instance;
  }
  function SkillA$GranisShield() {
    SkillA$GranisShield_instance = this;
    SkillA.call(this, 'GranisShield', 48, '\u30B0\u30E9\u30CB\u306E\u76FE', Skill$SkillType$A_getInstance(), void 0, void 0, 0);
  }
  SkillA$GranisShield.prototype.effectedAttackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.antiEffectiveAgainst_ut57va$(battleUnit, EffectiveAgainst$CAVALRY_getInstance());
  };
  SkillA$GranisShield.prototype.effectedCounterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.antiEffectiveAgainst_ut57va$(battleUnit, EffectiveAgainst$CAVALRY_getInstance());
  };
  SkillA$GranisShield.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GranisShield',
    interfaces: [SkillA]
  };
  var SkillA$GranisShield_instance = null;
  function SkillA$GranisShield_getInstance() {
    SkillA_initFields();
    return SkillA$GranisShield_instance;
  }
  var SkillA$AtkDefBond_instance;
  function SkillA$AtkDefBond_getInstance() {
    SkillA_initFields();
    return SkillA$AtkDefBond_instance;
  }
  var SkillA$AtkResBond_instance;
  function SkillA$AtkResBond_getInstance() {
    SkillA_initFields();
    return SkillA$AtkResBond_instance;
  }
  function SkillA$BrazenAtkDef() {
    SkillA$BrazenAtkDef_instance = this;
    SkillA.call(this, 'BrazenAtkDef', 51, '\u653B\u6483\u5B88\u5099\u306E\u5927\u899A\u91923', Skill$SkillType$A_getInstance());
  }
  SkillA$BrazenAtkDef.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.brazenDef_sv9jhu$(this.brazenAtk_sv9jhu$(battleUnit, (lv * 2 | 0) + 1 | 0), (lv * 2 | 0) + 1 | 0);
  };
  SkillA$BrazenAtkDef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BrazenAtkDef',
    interfaces: [SkillA]
  };
  var SkillA$BrazenAtkDef_instance = null;
  function SkillA$BrazenAtkDef_getInstance() {
    SkillA_initFields();
    return SkillA$BrazenAtkDef_instance;
  }
  function SkillA$BrazenAtkSpd() {
    SkillA$BrazenAtkSpd_instance = this;
    SkillA.call(this, 'BrazenAtkSpd', 52, '\u653B\u6483\u901F\u3055\u306E\u5927\u899A\u91923', Skill$SkillType$A_getInstance());
  }
  SkillA$BrazenAtkSpd.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.brazenSpd_sv9jhu$(this.brazenAtk_sv9jhu$(battleUnit, (lv * 2 | 0) + 1 | 0), (lv * 2 | 0) + 1 | 0);
  };
  SkillA$BrazenAtkSpd.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BrazenAtkSpd',
    interfaces: [SkillA]
  };
  var SkillA$BrazenAtkSpd_instance = null;
  function SkillA$BrazenAtkSpd_getInstance() {
    SkillA_initFields();
    return SkillA$BrazenAtkSpd_instance;
  }
  SkillA.prototype.lv_za3lpa$ = function (lv) {
    return this.level === lv ? this : new LappedSkill(this, lv);
  };
  Object.defineProperty(SkillA.prototype, 'value', {
    get: function () {
      return this.name;
    }
  });
  SkillA.prototype.localeName_miixs2$ = function (locale) {
    if (equals(locale, Locale$JAPAN_getInstance()))
      return this.jp;
    else if (equals(locale, Locale$JAPANESE_getInstance()))
      return this.jp;
    else
      return this.value;
  };
  function SkillA$Companion() {
    SkillA$Companion_instance = this;
    this.itemMap_0 = LinkedHashMap_init();
  }
  SkillA$Companion.prototype.spreadItems = function () {
    var $receiver = SkillA$values();
    var tmp$;
    var accumulator = arrayListOf([Skill$Companion_getInstance().NONE]);
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      var list = accumulator;
      var tmp$_0;
      tmp$_0 = (new IntRange(1, element.maxLevel)).iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        list.add_11rb$(element.lv_za3lpa$(element_0));
      }
      accumulator = list;
    }
    return accumulator;
  };
  SkillA$Companion.prototype.valueOfOrNONE_pdl1vj$ = function (key) {
    var tmp$, tmp$_0;
    if (key == null)
      return Skill$Companion_getInstance().NONE;
    else {
      try {
        if (this.itemMap_0.isEmpty()) {
          var $receiver = SkillA$values();
          var tmp$_1;
          for (tmp$_1 = 0; tmp$_1 !== $receiver.length; ++tmp$_1) {
            var element = $receiver[tmp$_1];
            this.itemMap_0.put_xwzc9p$(element.jp, element);
          }
          var $receiver_0 = SkillA$values();
          var tmp$_2;
          for (tmp$_2 = 0; tmp$_2 !== $receiver_0.length; ++tmp$_2) {
            var element_0 = $receiver_0[tmp$_2];
            this.itemMap_0.put_xwzc9p$(element_0.value, element_0);
          }
        }
        var regex = Regex(' \\d');
        var lv = regex.find_905azu$(key);
        if (lv != null) {
          var skill = regex.replaceFirst_x2uqeu$(key, '');
          var tmp$_3 = (tmp$ = this.itemMap_0.get_11rb$(skill)) != null ? tmp$ : SkillA$valueOf(skill);
          var $receiver_1 = lv.value;
          var tmp$_4;
          return tmp$_3.lv_za3lpa$(toInt(trim(Kotlin.isCharSequence(tmp$_4 = $receiver_1) ? tmp$_4 : throwCCE()).toString()));
        }
         else
          return (tmp$_0 = this.itemMap_0.get_11rb$(key)) != null ? tmp$_0 : SkillA$valueOf(key);
      }
       catch (e) {
        if (Kotlin.isType(e, Exception)) {
          println(e);
          return Skill$Companion_getInstance().NONE;
        }
         else
          throw e;
      }
    }
  };
  SkillA$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SkillA$Companion_instance = null;
  function SkillA$Companion_getInstance() {
    SkillA_initFields();
    if (SkillA$Companion_instance === null) {
      new SkillA$Companion();
    }
    return SkillA$Companion_instance;
  }
  SkillA.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SkillA',
    interfaces: [Skill, Enum]
  };
  function SkillA$values() {
    return [SkillA$Hp_getInstance(), SkillA$HpSpd_getInstance(), SkillA$HpRes_getInstance(), SkillA$Attack_getInstance(), SkillA$AtkSpd_getInstance(), SkillA$AtkRes_getInstance(), SkillA$Speed_getInstance(), SkillA$SpdRes_getInstance(), SkillA$SpdDef_getInstance(), SkillA$Defense_getInstance(), SkillA$AtkDef_getInstance(), SkillA$HpDef_getInstance(), SkillA$Resistance_getInstance(), SkillA$DefiantAtk_getInstance(), SkillA$DefiantSpd_getInstance(), SkillA$DefiantDef_getInstance(), SkillA$DefiantRes_getInstance(), SkillA$TriangleAdept_getInstance(), SkillA$LifeAndDeath_getInstance(), SkillA$Furry_getInstance(), SkillA$FortressDef_getInstance(), SkillA$FortressRes_getInstance(), SkillA$ArmoredBlow_getInstance(), SkillA$WardingBlow_getInstance(), SkillA$DeathBlow_getInstance(), SkillA$DartingBlow_getInstance(), SkillA$SwiftSparrow_getInstance(), SkillA$SturdyBlow_getInstance(), SkillA$SteadyBlow_getInstance(), SkillA$MirrorStrike_getInstance(), SkillA$BracingBlow_getInstance(), SkillA$SwiftStrike_getInstance(), SkillA$DistantDef_getInstance(), SkillA$CloseDef_getInstance(), SkillA$FierceStance_getInstance(), SkillA$SteadyStance_getInstance(), SkillA$WardingStance_getInstance(), SkillA$SteadyBreath_getInstance(), SkillA$EarthBoost_getInstance(), SkillA$WindBoost_getInstance(), SkillA$FireBoost_getInstance(), SkillA$WaterBoost_getInstance(), SkillA$HeavyBlade_getInstance(), SkillA$FlashingBlade_getInstance(), SkillA$CloseCounter_getInstance(), SkillA$DistantCounter_getInstance(), SkillA$SvalinnShield_getInstance(), SkillA$IotesShield_getInstance(), SkillA$GranisShield_getInstance(), SkillA$AtkDefBond_getInstance(), SkillA$AtkResBond_getInstance(), SkillA$BrazenAtkDef_getInstance(), SkillA$BrazenAtkSpd_getInstance()];
  }
  SkillA.values = SkillA$values;
  function SkillA$valueOf(name) {
    switch (name) {
      case 'Hp':
        return SkillA$Hp_getInstance();
      case 'HpSpd':
        return SkillA$HpSpd_getInstance();
      case 'HpRes':
        return SkillA$HpRes_getInstance();
      case 'Attack':
        return SkillA$Attack_getInstance();
      case 'AtkSpd':
        return SkillA$AtkSpd_getInstance();
      case 'AtkRes':
        return SkillA$AtkRes_getInstance();
      case 'Speed':
        return SkillA$Speed_getInstance();
      case 'SpdRes':
        return SkillA$SpdRes_getInstance();
      case 'SpdDef':
        return SkillA$SpdDef_getInstance();
      case 'Defense':
        return SkillA$Defense_getInstance();
      case 'AtkDef':
        return SkillA$AtkDef_getInstance();
      case 'HpDef':
        return SkillA$HpDef_getInstance();
      case 'Resistance':
        return SkillA$Resistance_getInstance();
      case 'DefiantAtk':
        return SkillA$DefiantAtk_getInstance();
      case 'DefiantSpd':
        return SkillA$DefiantSpd_getInstance();
      case 'DefiantDef':
        return SkillA$DefiantDef_getInstance();
      case 'DefiantRes':
        return SkillA$DefiantRes_getInstance();
      case 'TriangleAdept':
        return SkillA$TriangleAdept_getInstance();
      case 'LifeAndDeath':
        return SkillA$LifeAndDeath_getInstance();
      case 'Furry':
        return SkillA$Furry_getInstance();
      case 'FortressDef':
        return SkillA$FortressDef_getInstance();
      case 'FortressRes':
        return SkillA$FortressRes_getInstance();
      case 'ArmoredBlow':
        return SkillA$ArmoredBlow_getInstance();
      case 'WardingBlow':
        return SkillA$WardingBlow_getInstance();
      case 'DeathBlow':
        return SkillA$DeathBlow_getInstance();
      case 'DartingBlow':
        return SkillA$DartingBlow_getInstance();
      case 'SwiftSparrow':
        return SkillA$SwiftSparrow_getInstance();
      case 'SturdyBlow':
        return SkillA$SturdyBlow_getInstance();
      case 'SteadyBlow':
        return SkillA$SteadyBlow_getInstance();
      case 'MirrorStrike':
        return SkillA$MirrorStrike_getInstance();
      case 'BracingBlow':
        return SkillA$BracingBlow_getInstance();
      case 'SwiftStrike':
        return SkillA$SwiftStrike_getInstance();
      case 'DistantDef':
        return SkillA$DistantDef_getInstance();
      case 'CloseDef':
        return SkillA$CloseDef_getInstance();
      case 'FierceStance':
        return SkillA$FierceStance_getInstance();
      case 'SteadyStance':
        return SkillA$SteadyStance_getInstance();
      case 'WardingStance':
        return SkillA$WardingStance_getInstance();
      case 'SteadyBreath':
        return SkillA$SteadyBreath_getInstance();
      case 'EarthBoost':
        return SkillA$EarthBoost_getInstance();
      case 'WindBoost':
        return SkillA$WindBoost_getInstance();
      case 'FireBoost':
        return SkillA$FireBoost_getInstance();
      case 'WaterBoost':
        return SkillA$WaterBoost_getInstance();
      case 'HeavyBlade':
        return SkillA$HeavyBlade_getInstance();
      case 'FlashingBlade':
        return SkillA$FlashingBlade_getInstance();
      case 'CloseCounter':
        return SkillA$CloseCounter_getInstance();
      case 'DistantCounter':
        return SkillA$DistantCounter_getInstance();
      case 'SvalinnShield':
        return SkillA$SvalinnShield_getInstance();
      case 'IotesShield':
        return SkillA$IotesShield_getInstance();
      case 'GranisShield':
        return SkillA$GranisShield_getInstance();
      case 'AtkDefBond':
        return SkillA$AtkDefBond_getInstance();
      case 'AtkResBond':
        return SkillA$AtkResBond_getInstance();
      case 'BrazenAtkDef':
        return SkillA$BrazenAtkDef_getInstance();
      case 'BrazenAtkSpd':
        return SkillA$BrazenAtkSpd_getInstance();
      default:throwISE('No enum constant jp.blogspot.turanukimaru.fehs.skill.SkillA.' + name);
    }
  }
  SkillA.valueOf_61zpoe$ = SkillA$valueOf;
  function SkillB(name, ordinal, jp, type, level, preSkill, maxLevel) {
    if (level === void 0)
      level = 0;
    if (preSkill === void 0)
      preSkill = Skill$Companion_getInstance().NONE;
    if (maxLevel === void 0)
      maxLevel = 3;
    Enum.call(this);
    this.jp_39lzns$_0 = jp;
    this.type_e1dni4$_0 = type;
    this.level_d3bwlq$_0 = level;
    this.preSkill_bgbd2o$_0 = preSkill;
    this.maxLevel_5rs6ri$_0 = maxLevel;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function SkillB_initFields() {
    SkillB_initFields = function () {
    };
    new SkillB$SwordBreaker();
    new SkillB$LanceBreaker();
    new SkillB$AxeBreaker();
    new SkillB$BowBreaker();
    new SkillB$DaggerBreaker();
    new SkillB$RTomeBreaker();
    new SkillB$GTomeBreaker();
    new SkillB$BTomeBreaker();
    SkillB$EscapeRoute_instance = new SkillB('EscapeRoute', 8, '\u96E2\u8131\u306E\u884C\u8DEF', Skill$SkillType$B_getInstance());
    new SkillB$Vantage();
    new SkillB$WaryFighter();
    new SkillB$BoldFighter();
    new SkillB$VengefulFighter();
    new SkillB$Desperation();
    new SkillB$QuickRiposte();
    new SkillB$BrashAssault();
    SkillB$Renewal_instance = new SkillB('Renewal', 16, '\u56DE\u5FA9', Skill$SkillType$B_getInstance());
    SkillB$LiveToServe_instance = new SkillB('LiveToServe', 17, '\u3054\u5949\u4ED5\u306E\u559C\u3073', Skill$SkillType$B_getInstance());
    SkillB$WingsOfMercy_instance = new SkillB('WingsOfMercy', 18, '\u6551\u63F4\u306E\u884C\u8DEF', Skill$SkillType$B_getInstance());
    SkillB$Pass_instance = new SkillB('Pass', 19, '\u3059\u308A\u629C\u3051', Skill$SkillType$B_getInstance());
    SkillB$Obstruct_instance = new SkillB('Obstruct', 20, '\u9032\u8ECD\u963B\u6B62', Skill$SkillType$B_getInstance());
    SkillB$SealAtk_instance = new SkillB('SealAtk', 21, '\u653B\u6483\u5C01\u3058', Skill$SkillType$B_getInstance());
    SkillB$SealSpd_instance = new SkillB('SealSpd', 22, '\u901F\u3055\u5C01\u3058', Skill$SkillType$B_getInstance());
    SkillB$SealDef_instance = new SkillB('SealDef', 23, '\u5B88\u5099\u5C01\u3058', Skill$SkillType$B_getInstance());
    SkillB$SealRes_instance = new SkillB('SealRes', 24, '\u9B54\u9632\u5C01\u3058', Skill$SkillType$B_getInstance());
    SkillB$SealAtkSpd_instance = new SkillB('SealAtkSpd', 25, '\u653B\u6483\u901F\u3055\u5C01\u3058', Skill$SkillType$B_getInstance(), void 0, void 0, 2);
    SkillB$SealAtkDef_instance = new SkillB('SealAtkDef', 26, '\u653B\u6483\u5B88\u5099\u5C01\u3058', Skill$SkillType$B_getInstance(), void 0, void 0, 2);
    new SkillB$Windsweep();
    new SkillB$Watersweep();
    new SkillB$Guard();
    SkillB$ShieldPulse_instance = new SkillB('ShieldPulse', 30, '\u76FE\u306E\u9F13\u52D5', Skill$SkillType$B_getInstance());
    new SkillB$WrathfulStaff();
    new SkillB$DazzlingStaff();
    new SkillB$CancelAffinity();
    SkillB$Wrath_instance = new SkillB('Wrath', 34, '\u6012\u308A', Skill$SkillType$B_getInstance());
    SkillB$FlierFormation_instance = new SkillB('FlierFormation', 35, '\u7DE8\u968A\u98DB\u884C', Skill$SkillType$B_getInstance());
    SkillB$BlazeDance_instance = new SkillB('BlazeDance', 36, '\u696D\u706B\u306E\u821E\u3044', Skill$SkillType$B_getInstance());
    SkillB$GaleDance_instance = new SkillB('GaleDance', 37, '\u75BE\u98A8\u306E\u821E\u3044', Skill$SkillType$B_getInstance());
    SkillB$TorrentDance_instance = new SkillB('TorrentDance', 38, '\u9759\u6C34\u306E\u821E\u3044', Skill$SkillType$B_getInstance());
    SkillB$GeyserDance_instance = new SkillB('GeyserDance', 39, '\u5927\u5730\u9759\u6C34\u306E\u821E\u3044', Skill$SkillType$B_getInstance(), void 0, void 0, 2);
    SkillB$KnockBack_instance = new SkillB('KnockBack', 40, '\u53E9\u304D\u8FBC\u307F', Skill$SkillType$B_getInstance(), void 0, void 0, 0);
    SkillB$DragBack_instance = new SkillB('DragBack', 41, '\u5F15\u304D\u8FBC\u307F', Skill$SkillType$B_getInstance(), void 0, void 0, 0);
    SkillB$Lunge_instance = new SkillB('Lunge', 42, '\u5207\u308A\u8FBC\u307F', Skill$SkillType$B_getInstance(), void 0, void 0, 0);
    SkillB$HitAndRun_instance = new SkillB('HitAndRun', 43, '\u4E00\u6483\u96E2\u8131', Skill$SkillType$B_getInstance(), void 0, void 0, 0);
    new SkillB$FollowUpRing();
    SkillB$RecoverRing_instance = new SkillB('RecoverRing', 45, '\u30EA\u30AB\u30D0\u30FC\u30EA\u30F3\u30B0', Skill$SkillType$B_getInstance(), void 0, void 0, 0);
    SkillB$LiveForBounty_instance = new SkillB('LiveForBounty', 46, '\u8C4A\u7A63\u306E\u559C\u3073', Skill$SkillType$B_getInstance(), void 0, void 0, 0);
    SkillB$LiveForHonor_instance = new SkillB('LiveForHonor', 47, '\u6804\u8A89\u306E\u559C\u3073', Skill$SkillType$B_getInstance(), void 0, void 0, 0);
    new SkillB$SacaesBlessing();
    new SkillB$BeorcsBlessing();
    new SkillB$CrusadersWard();
    new SkillB$PoisonStrike();
    SkillB$Companion_getInstance();
  }
  Object.defineProperty(SkillB.prototype, 'jp', {
    get: function () {
      return this.jp_39lzns$_0;
    }
  });
  Object.defineProperty(SkillB.prototype, 'type', {
    get: function () {
      return this.type_e1dni4$_0;
    }
  });
  Object.defineProperty(SkillB.prototype, 'level', {
    get: function () {
      return this.level_d3bwlq$_0;
    }
  });
  Object.defineProperty(SkillB.prototype, 'preSkill', {
    get: function () {
      return this.preSkill_bgbd2o$_0;
    }
  });
  Object.defineProperty(SkillB.prototype, 'maxLevel', {
    get: function () {
      return this.maxLevel_5rs6ri$_0;
    }
  });
  function SkillB$SwordBreaker() {
    SkillB$SwordBreaker_instance = this;
    SkillB.call(this, 'SwordBreaker', 0, '\u5263\u6BBA\u3057', Skill$SkillType$B_getInstance());
  }
  SkillB$SwordBreaker.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.weaponBreaker_y53988$(battleUnit, WeaponType$SWORD_getInstance(), lv);
  };
  SkillB$SwordBreaker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SwordBreaker',
    interfaces: [SkillB]
  };
  var SkillB$SwordBreaker_instance = null;
  function SkillB$SwordBreaker_getInstance() {
    SkillB_initFields();
    return SkillB$SwordBreaker_instance;
  }
  function SkillB$LanceBreaker() {
    SkillB$LanceBreaker_instance = this;
    SkillB.call(this, 'LanceBreaker', 1, '\u69CD\u6BBA\u3057', Skill$SkillType$B_getInstance());
  }
  SkillB$LanceBreaker.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.weaponBreaker_y53988$(battleUnit, WeaponType$LANCE_getInstance(), lv);
  };
  SkillB$LanceBreaker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LanceBreaker',
    interfaces: [SkillB]
  };
  var SkillB$LanceBreaker_instance = null;
  function SkillB$LanceBreaker_getInstance() {
    SkillB_initFields();
    return SkillB$LanceBreaker_instance;
  }
  function SkillB$AxeBreaker() {
    SkillB$AxeBreaker_instance = this;
    SkillB.call(this, 'AxeBreaker', 2, '\u65A7\u6BBA\u3057', Skill$SkillType$B_getInstance());
  }
  SkillB$AxeBreaker.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.weaponBreaker_y53988$(battleUnit, WeaponType$AXE_getInstance(), lv);
  };
  SkillB$AxeBreaker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AxeBreaker',
    interfaces: [SkillB]
  };
  var SkillB$AxeBreaker_instance = null;
  function SkillB$AxeBreaker_getInstance() {
    SkillB_initFields();
    return SkillB$AxeBreaker_instance;
  }
  function SkillB$BowBreaker() {
    SkillB$BowBreaker_instance = this;
    SkillB.call(this, 'BowBreaker', 3, '\u5F13\u6BBA\u3057', Skill$SkillType$B_getInstance());
  }
  SkillB$BowBreaker.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.weaponBreaker_y53988$(battleUnit, WeaponType$BOW_getInstance(), lv);
  };
  SkillB$BowBreaker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BowBreaker',
    interfaces: [SkillB]
  };
  var SkillB$BowBreaker_instance = null;
  function SkillB$BowBreaker_getInstance() {
    SkillB_initFields();
    return SkillB$BowBreaker_instance;
  }
  function SkillB$DaggerBreaker() {
    SkillB$DaggerBreaker_instance = this;
    SkillB.call(this, 'DaggerBreaker', 4, '\u6697\u5668\u6BBA\u3057', Skill$SkillType$B_getInstance());
  }
  SkillB$DaggerBreaker.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.weaponBreaker_y53988$(battleUnit, WeaponType$DAGGER_getInstance(), lv);
  };
  SkillB$DaggerBreaker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DaggerBreaker',
    interfaces: [SkillB]
  };
  var SkillB$DaggerBreaker_instance = null;
  function SkillB$DaggerBreaker_getInstance() {
    SkillB_initFields();
    return SkillB$DaggerBreaker_instance;
  }
  function SkillB$RTomeBreaker() {
    SkillB$RTomeBreaker_instance = this;
    SkillB.call(this, 'RTomeBreaker', 5, '\u8D64\u9B54\u6BBA\u3057', Skill$SkillType$B_getInstance());
  }
  SkillB$RTomeBreaker.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.weaponBreaker_y53988$(battleUnit, WeaponType$RTOME_getInstance(), lv);
  };
  SkillB$RTomeBreaker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RTomeBreaker',
    interfaces: [SkillB]
  };
  var SkillB$RTomeBreaker_instance = null;
  function SkillB$RTomeBreaker_getInstance() {
    SkillB_initFields();
    return SkillB$RTomeBreaker_instance;
  }
  function SkillB$GTomeBreaker() {
    SkillB$GTomeBreaker_instance = this;
    SkillB.call(this, 'GTomeBreaker', 6, '\u7DD1\u9B54\u6BBA\u3057', Skill$SkillType$B_getInstance());
  }
  SkillB$GTomeBreaker.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.weaponBreaker_y53988$(battleUnit, WeaponType$GTOME_getInstance(), lv);
  };
  SkillB$GTomeBreaker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GTomeBreaker',
    interfaces: [SkillB]
  };
  var SkillB$GTomeBreaker_instance = null;
  function SkillB$GTomeBreaker_getInstance() {
    SkillB_initFields();
    return SkillB$GTomeBreaker_instance;
  }
  function SkillB$BTomeBreaker() {
    SkillB$BTomeBreaker_instance = this;
    SkillB.call(this, 'BTomeBreaker', 7, '\u9752\u9B54\u6BBA\u3057', Skill$SkillType$B_getInstance());
  }
  SkillB$BTomeBreaker.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.weaponBreaker_y53988$(battleUnit, WeaponType$BTOME_getInstance(), lv);
  };
  SkillB$BTomeBreaker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BTomeBreaker',
    interfaces: [SkillB]
  };
  var SkillB$BTomeBreaker_instance = null;
  function SkillB$BTomeBreaker_getInstance() {
    SkillB_initFields();
    return SkillB$BTomeBreaker_instance;
  }
  var SkillB$EscapeRoute_instance;
  function SkillB$EscapeRoute_getInstance() {
    SkillB_initFields();
    return SkillB$EscapeRoute_instance;
  }
  function SkillB$Vantage() {
    SkillB$Vantage_instance = this;
    SkillB.call(this, 'Vantage', 9, '\u5F85\u3061\u4F0F\u305B', Skill$SkillType$B_getInstance());
  }
  SkillB$Vantage.prototype.counterPlan_p6uegp$$default = function (fightPlan, lv) {
    return this.vantage_p6uegp$(fightPlan, lv);
  };
  SkillB$Vantage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Vantage',
    interfaces: [SkillB]
  };
  var SkillB$Vantage_instance = null;
  function SkillB$Vantage_getInstance() {
    SkillB_initFields();
    return SkillB$Vantage_instance;
  }
  function SkillB$WaryFighter() {
    SkillB$WaryFighter_instance = this;
    SkillB.call(this, 'WaryFighter', 10, '\u5B88\u5099\u968A\u5F62', Skill$SkillType$B_getInstance());
  }
  SkillB$WaryFighter.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.eachNofollowupable_sv9jhu$(battleUnit, lv);
  };
  SkillB$WaryFighter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WaryFighter',
    interfaces: [SkillB]
  };
  var SkillB$WaryFighter_instance = null;
  function SkillB$WaryFighter_getInstance() {
    SkillB_initFields();
    return SkillB$WaryFighter_instance;
  }
  function SkillB$BoldFighter() {
    SkillB$BoldFighter_instance = this;
    SkillB.call(this, 'BoldFighter', 11, '\u653B\u6483\u968A\u5F62', Skill$SkillType$B_getInstance());
  }
  SkillB$BoldFighter.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.accelerateAttackCooldown_sv9jhu$(this.followupable_sv9jhu$(battleUnit, 10), 11);
  };
  SkillB$BoldFighter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoldFighter',
    interfaces: [SkillB]
  };
  var SkillB$BoldFighter_instance = null;
  function SkillB$BoldFighter_getInstance() {
    SkillB_initFields();
    return SkillB$BoldFighter_instance;
  }
  function SkillB$VengefulFighter() {
    SkillB$VengefulFighter_instance = this;
    SkillB.call(this, 'VengefulFighter', 12, '\u8FCE\u6483\u968A\u5F62', Skill$SkillType$B_getInstance());
  }
  SkillB$VengefulFighter.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.accelerateAttackCooldown_sv9jhu$(this.followupable_sv9jhu$(battleUnit, 5), 6);
  };
  SkillB$VengefulFighter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VengefulFighter',
    interfaces: [SkillB]
  };
  var SkillB$VengefulFighter_instance = null;
  function SkillB$VengefulFighter_getInstance() {
    SkillB_initFields();
    return SkillB$VengefulFighter_instance;
  }
  function SkillB$Desperation() {
    SkillB$Desperation_instance = this;
    SkillB.call(this, 'Desperation', 13, '\u653B\u3081\u7ACB\u3066', Skill$SkillType$B_getInstance());
  }
  SkillB$Desperation.prototype.attackPlan_p6uegp$$default = function (fightPlan, lv) {
    return this.desperation_p6uegp$(fightPlan, lv);
  };
  SkillB$Desperation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Desperation',
    interfaces: [SkillB]
  };
  var SkillB$Desperation_instance = null;
  function SkillB$Desperation_getInstance() {
    SkillB_initFields();
    return SkillB$Desperation_instance;
  }
  function SkillB$QuickRiposte() {
    SkillB$QuickRiposte_instance = this;
    SkillB.call(this, 'QuickRiposte', 14, '\u5207\u308A\u8FD4\u3057', Skill$SkillType$B_getInstance());
  }
  SkillB$QuickRiposte.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.followupable_sv9jhu$(battleUnit, lv);
  };
  SkillB$QuickRiposte.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'QuickRiposte',
    interfaces: [SkillB]
  };
  var SkillB$QuickRiposte_instance = null;
  function SkillB$QuickRiposte_getInstance() {
    SkillB_initFields();
    return SkillB$QuickRiposte_instance;
  }
  function SkillB$BrashAssault() {
    SkillB$BrashAssault_instance = this;
    SkillB.call(this, 'BrashAssault', 15, '\u5DEE\u3057\u9055\u3048', Skill$SkillType$B_getInstance());
  }
  SkillB$BrashAssault.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.brashAssault_sv9jhu$(battleUnit, (lv * 10 | 0) + 20 | 0);
  };
  SkillB$BrashAssault.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BrashAssault',
    interfaces: [SkillB]
  };
  var SkillB$BrashAssault_instance = null;
  function SkillB$BrashAssault_getInstance() {
    SkillB_initFields();
    return SkillB$BrashAssault_instance;
  }
  var SkillB$Renewal_instance;
  function SkillB$Renewal_getInstance() {
    SkillB_initFields();
    return SkillB$Renewal_instance;
  }
  var SkillB$LiveToServe_instance;
  function SkillB$LiveToServe_getInstance() {
    SkillB_initFields();
    return SkillB$LiveToServe_instance;
  }
  var SkillB$WingsOfMercy_instance;
  function SkillB$WingsOfMercy_getInstance() {
    SkillB_initFields();
    return SkillB$WingsOfMercy_instance;
  }
  var SkillB$Pass_instance;
  function SkillB$Pass_getInstance() {
    SkillB_initFields();
    return SkillB$Pass_instance;
  }
  var SkillB$Obstruct_instance;
  function SkillB$Obstruct_getInstance() {
    SkillB_initFields();
    return SkillB$Obstruct_instance;
  }
  var SkillB$SealAtk_instance;
  function SkillB$SealAtk_getInstance() {
    SkillB_initFields();
    return SkillB$SealAtk_instance;
  }
  var SkillB$SealSpd_instance;
  function SkillB$SealSpd_getInstance() {
    SkillB_initFields();
    return SkillB$SealSpd_instance;
  }
  var SkillB$SealDef_instance;
  function SkillB$SealDef_getInstance() {
    SkillB_initFields();
    return SkillB$SealDef_instance;
  }
  var SkillB$SealRes_instance;
  function SkillB$SealRes_getInstance() {
    SkillB_initFields();
    return SkillB$SealRes_instance;
  }
  var SkillB$SealAtkSpd_instance;
  function SkillB$SealAtkSpd_getInstance() {
    SkillB_initFields();
    return SkillB$SealAtkSpd_instance;
  }
  var SkillB$SealAtkDef_instance;
  function SkillB$SealAtkDef_getInstance() {
    SkillB_initFields();
    return SkillB$SealAtkDef_instance;
  }
  function SkillB$Windsweep() {
    SkillB$Windsweep_instance = this;
    SkillB.call(this, 'Windsweep', 27, '\u98A8\u8599\u304E', Skill$SkillType$B_getInstance());
  }
  SkillB$Windsweep.prototype.effectedAttackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.windsweep_sv9jhu$(battleUnit, lv);
  };
  SkillB$Windsweep.prototype.attackPlan_p6uegp$$default = function (fightPlan, lv) {
    return this.noFollowupAttack_9jfrn9$(fightPlan);
  };
  SkillB$Windsweep.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Windsweep',
    interfaces: [SkillB]
  };
  var SkillB$Windsweep_instance = null;
  function SkillB$Windsweep_getInstance() {
    SkillB_initFields();
    return SkillB$Windsweep_instance;
  }
  function SkillB$Watersweep() {
    SkillB$Watersweep_instance = this;
    SkillB.call(this, 'Watersweep', 28, '\u6C34\u8599\u304E', Skill$SkillType$B_getInstance());
  }
  SkillB$Watersweep.prototype.effectedAttackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.watersweep_sv9jhu$(battleUnit, lv);
  };
  SkillB$Watersweep.prototype.attackPlan_p6uegp$$default = function (fightPlan, lv) {
    return this.noFollowupAttack_9jfrn9$(fightPlan);
  };
  SkillB$Watersweep.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Watersweep',
    interfaces: [SkillB]
  };
  var SkillB$Watersweep_instance = null;
  function SkillB$Watersweep_getInstance() {
    SkillB_initFields();
    return SkillB$Watersweep_instance;
  }
  function SkillB$Guard() {
    SkillB$Guard_instance = this;
    SkillB.call(this, 'Guard', 29, '\u30AD\u30E3\u30F3\u30BB\u30EB', Skill$SkillType$B_getInstance());
  }
  SkillB$Guard.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.antiAccelerateCooldown_sv9jhu$(battleUnit, lv);
  };
  SkillB$Guard.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Guard',
    interfaces: [SkillB]
  };
  var SkillB$Guard_instance = null;
  function SkillB$Guard_getInstance() {
    SkillB_initFields();
    return SkillB$Guard_instance;
  }
  var SkillB$ShieldPulse_instance;
  function SkillB$ShieldPulse_getInstance() {
    SkillB_initFields();
    return SkillB$ShieldPulse_instance;
  }
  function SkillB$WrathfulStaff() {
    SkillB$WrathfulStaff_instance = this;
    SkillB.call(this, 'WrathfulStaff', 31, '\u795E\u7F70\u306E\u6756', Skill$SkillType$B_getInstance());
  }
  SkillB$WrathfulStaff.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.wrathfulStaff_sv9jhu$(battleUnit, lv);
  };
  SkillB$WrathfulStaff.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WrathfulStaff',
    interfaces: [SkillB]
  };
  var SkillB$WrathfulStaff_instance = null;
  function SkillB$WrathfulStaff_getInstance() {
    SkillB_initFields();
    return SkillB$WrathfulStaff_instance;
  }
  function SkillB$DazzlingStaff() {
    SkillB$DazzlingStaff_instance = this;
    SkillB.call(this, 'DazzlingStaff', 32, '\u5E7B\u60D1\u306E\u6756', Skill$SkillType$B_getInstance());
  }
  SkillB$DazzlingStaff.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.dazzling_sv9jhu$(battleUnit, lv);
  };
  SkillB$DazzlingStaff.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DazzlingStaff',
    interfaces: [SkillB]
  };
  var SkillB$DazzlingStaff_instance = null;
  function SkillB$DazzlingStaff_getInstance() {
    SkillB_initFields();
    return SkillB$DazzlingStaff_instance;
  }
  function SkillB$CancelAffinity() {
    SkillB$CancelAffinity_instance = this;
    SkillB.call(this, 'CancelAffinity', 33, '\u76F8\u6027\u76F8\u6BBA', Skill$SkillType$B_getInstance());
  }
  SkillB$CancelAffinity.prototype.effectedAttackEffect_sv9jhu$$default = function (battleUnit, lv) {
    battleUnit.colorAdvantageLevel = 0;
    var colorAd = battleUnit.colorAdvantage();
    if (lv === 1) {
      battleUnit.antiColorAdvantage = 0;
      ensureNotNull(battleUnit.enemy).antiColorAdvantage = 0;
    }
     else if (lv === 2) {
      if (colorAd === -1) {
        battleUnit.antiColorAdvantage = 0;
        ensureNotNull(battleUnit.enemy).antiColorAdvantage = 0;
      }
    }
     else if (lv === 3)
      if (colorAd === -1) {
        battleUnit.antiColorAdvantage = -1;
        ensureNotNull(battleUnit.enemy).antiColorAdvantage = -1;
      }
    return battleUnit;
  };
  SkillB$CancelAffinity.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CancelAffinity',
    interfaces: [SkillB]
  };
  var SkillB$CancelAffinity_instance = null;
  function SkillB$CancelAffinity_getInstance() {
    SkillB_initFields();
    return SkillB$CancelAffinity_instance;
  }
  var SkillB$Wrath_instance;
  function SkillB$Wrath_getInstance() {
    SkillB_initFields();
    return SkillB$Wrath_instance;
  }
  var SkillB$FlierFormation_instance;
  function SkillB$FlierFormation_getInstance() {
    SkillB_initFields();
    return SkillB$FlierFormation_instance;
  }
  var SkillB$BlazeDance_instance;
  function SkillB$BlazeDance_getInstance() {
    SkillB_initFields();
    return SkillB$BlazeDance_instance;
  }
  var SkillB$GaleDance_instance;
  function SkillB$GaleDance_getInstance() {
    SkillB_initFields();
    return SkillB$GaleDance_instance;
  }
  var SkillB$TorrentDance_instance;
  function SkillB$TorrentDance_getInstance() {
    SkillB_initFields();
    return SkillB$TorrentDance_instance;
  }
  var SkillB$GeyserDance_instance;
  function SkillB$GeyserDance_getInstance() {
    SkillB_initFields();
    return SkillB$GeyserDance_instance;
  }
  var SkillB$KnockBack_instance;
  function SkillB$KnockBack_getInstance() {
    SkillB_initFields();
    return SkillB$KnockBack_instance;
  }
  var SkillB$DragBack_instance;
  function SkillB$DragBack_getInstance() {
    SkillB_initFields();
    return SkillB$DragBack_instance;
  }
  var SkillB$Lunge_instance;
  function SkillB$Lunge_getInstance() {
    SkillB_initFields();
    return SkillB$Lunge_instance;
  }
  var SkillB$HitAndRun_instance;
  function SkillB$HitAndRun_getInstance() {
    SkillB_initFields();
    return SkillB$HitAndRun_instance;
  }
  function SkillB$FollowUpRing() {
    SkillB$FollowUpRing_instance = this;
    SkillB.call(this, 'FollowUpRing', 44, '\u8FFD\u6483\u306E\u30EA\u30F3\u30B0', Skill$SkillType$B_getInstance(), void 0, void 0, 0);
  }
  SkillB$FollowUpRing.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.followupable_sv9jhu$(battleUnit, 5);
  };
  SkillB$FollowUpRing.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FollowUpRing',
    interfaces: [SkillB]
  };
  var SkillB$FollowUpRing_instance = null;
  function SkillB$FollowUpRing_getInstance() {
    SkillB_initFields();
    return SkillB$FollowUpRing_instance;
  }
  var SkillB$RecoverRing_instance;
  function SkillB$RecoverRing_getInstance() {
    SkillB_initFields();
    return SkillB$RecoverRing_instance;
  }
  var SkillB$LiveForBounty_instance;
  function SkillB$LiveForBounty_getInstance() {
    SkillB_initFields();
    return SkillB$LiveForBounty_instance;
  }
  var SkillB$LiveForHonor_instance;
  function SkillB$LiveForHonor_getInstance() {
    SkillB_initFields();
    return SkillB$LiveForHonor_instance;
  }
  function SkillB$SacaesBlessing() {
    SkillB$SacaesBlessing_instance = this;
    SkillB.call(this, 'SacaesBlessing', 48, '\u30B5\u30AB\u306E\u52A0\u8B77', Skill$SkillType$B_getInstance());
  }
  SkillB$SacaesBlessing.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.sacasBlessing_sv9jhu$(battleUnit, lv);
  };
  SkillB$SacaesBlessing.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SacaesBlessing',
    interfaces: [SkillB]
  };
  var SkillB$SacaesBlessing_instance = null;
  function SkillB$SacaesBlessing_getInstance() {
    SkillB_initFields();
    return SkillB$SacaesBlessing_instance;
  }
  function SkillB$BeorcsBlessing() {
    SkillB$BeorcsBlessing_instance = this;
    SkillB.call(this, 'BeorcsBlessing', 49, '\u30D9\u30AA\u30AF\u306E\u52A0\u8B77', Skill$SkillType$B_getInstance(), void 0, void 0, 0);
  }
  SkillB$BeorcsBlessing.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.beorcsBlessing_sv9jhu$(battleUnit, lv);
  };
  SkillB$BeorcsBlessing.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BeorcsBlessing',
    interfaces: [SkillB]
  };
  var SkillB$BeorcsBlessing_instance = null;
  function SkillB$BeorcsBlessing_getInstance() {
    SkillB_initFields();
    return SkillB$BeorcsBlessing_instance;
  }
  function SkillB$CrusadersWard() {
    SkillB$CrusadersWard_instance = this;
    SkillB.call(this, 'CrusadersWard', 50, '\u8056\u9A0E\u58EB\u306E\u52A0\u8B77', Skill$SkillType$B_getInstance(), void 0, void 0, 0);
  }
  SkillB$CrusadersWard.prototype.prevent_w6mj9q$$default = function (battleUnit, damage, results, lv) {
    var tmp$ = ensureNotNull(battleUnit.enemy).effectiveRange === 2;
    if (tmp$) {
      tmp$ = !results.isEmpty();
    }
    return tmp$ && last(results).side !== battleUnit.side ? damage - ((damage * 8 | 0) / 10 | 0) | 0 : damage;
  };
  SkillB$CrusadersWard.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CrusadersWard',
    interfaces: [SkillB]
  };
  var SkillB$CrusadersWard_instance = null;
  function SkillB$CrusadersWard_getInstance() {
    SkillB_initFields();
    return SkillB$CrusadersWard_instance;
  }
  function SkillB$PoisonStrike() {
    SkillB$PoisonStrike_instance = this;
    SkillB.call(this, 'PoisonStrike', 51, '\u86C7\u6BD2', Skill$SkillType$B_getInstance());
  }
  SkillB$PoisonStrike.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.attackPain_sv9jhu$(battleUnit, (lv * 3 | 0) + 1 | 0);
  };
  SkillB$PoisonStrike.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PoisonStrike',
    interfaces: [SkillB]
  };
  var SkillB$PoisonStrike_instance = null;
  function SkillB$PoisonStrike_getInstance() {
    SkillB_initFields();
    return SkillB$PoisonStrike_instance;
  }
  SkillB.prototype.lv_za3lpa$ = function (lv) {
    return this.level === lv ? this : new LappedSkill(this, lv);
  };
  Object.defineProperty(SkillB.prototype, 'value', {
    get: function () {
      return this.name;
    }
  });
  SkillB.prototype.localeName_miixs2$ = function (locale) {
    if (equals(locale, Locale$JAPAN_getInstance()))
      return this.jp;
    else if (equals(locale, Locale$JAPANESE_getInstance()))
      return this.jp;
    else
      return this.value;
  };
  function SkillB$Companion() {
    SkillB$Companion_instance = this;
    this.itemMap_0 = LinkedHashMap_init();
  }
  SkillB$Companion.prototype.spreadItems = function () {
    var $receiver = SkillB$values();
    var tmp$;
    var accumulator = arrayListOf([Skill$Companion_getInstance().NONE]);
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      var list = accumulator;
      var tmp$_0;
      tmp$_0 = (new IntRange(1, element.maxLevel)).iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        list.add_11rb$(element.lv_za3lpa$(element_0));
      }
      accumulator = list;
    }
    return accumulator;
  };
  SkillB$Companion.prototype.valueOfOrNONE_pdl1vj$ = function (key) {
    var tmp$, tmp$_0;
    if (key == null)
      return Skill$Companion_getInstance().NONE;
    else {
      try {
        if (this.itemMap_0.isEmpty()) {
          var $receiver = SkillB$values();
          var tmp$_1;
          for (tmp$_1 = 0; tmp$_1 !== $receiver.length; ++tmp$_1) {
            var element = $receiver[tmp$_1];
            this.itemMap_0.put_xwzc9p$(element.jp, element);
          }
          var $receiver_0 = SkillB$values();
          var tmp$_2;
          for (tmp$_2 = 0; tmp$_2 !== $receiver_0.length; ++tmp$_2) {
            var element_0 = $receiver_0[tmp$_2];
            this.itemMap_0.put_xwzc9p$(element_0.value, element_0);
          }
        }
        var regex = Regex(' \\d');
        var lv = regex.find_905azu$(key);
        if (lv != null) {
          var skill = regex.replaceFirst_x2uqeu$(key, '');
          var tmp$_3 = (tmp$ = this.itemMap_0.get_11rb$(skill)) != null ? tmp$ : SkillB$valueOf(skill);
          var $receiver_1 = lv.value;
          var tmp$_4;
          return tmp$_3.lv_za3lpa$(toInt(trim(Kotlin.isCharSequence(tmp$_4 = $receiver_1) ? tmp$_4 : throwCCE()).toString()));
        }
         else
          return (tmp$_0 = this.itemMap_0.get_11rb$(key)) != null ? tmp$_0 : SkillB$valueOf(key);
      }
       catch (e) {
        if (Kotlin.isType(e, Exception)) {
          println(e);
          return Skill$Companion_getInstance().NONE;
        }
         else
          throw e;
      }
    }
  };
  SkillB$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SkillB$Companion_instance = null;
  function SkillB$Companion_getInstance() {
    SkillB_initFields();
    if (SkillB$Companion_instance === null) {
      new SkillB$Companion();
    }
    return SkillB$Companion_instance;
  }
  SkillB.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SkillB',
    interfaces: [Skill, Enum]
  };
  function SkillB$values() {
    return [SkillB$SwordBreaker_getInstance(), SkillB$LanceBreaker_getInstance(), SkillB$AxeBreaker_getInstance(), SkillB$BowBreaker_getInstance(), SkillB$DaggerBreaker_getInstance(), SkillB$RTomeBreaker_getInstance(), SkillB$GTomeBreaker_getInstance(), SkillB$BTomeBreaker_getInstance(), SkillB$EscapeRoute_getInstance(), SkillB$Vantage_getInstance(), SkillB$WaryFighter_getInstance(), SkillB$BoldFighter_getInstance(), SkillB$VengefulFighter_getInstance(), SkillB$Desperation_getInstance(), SkillB$QuickRiposte_getInstance(), SkillB$BrashAssault_getInstance(), SkillB$Renewal_getInstance(), SkillB$LiveToServe_getInstance(), SkillB$WingsOfMercy_getInstance(), SkillB$Pass_getInstance(), SkillB$Obstruct_getInstance(), SkillB$SealAtk_getInstance(), SkillB$SealSpd_getInstance(), SkillB$SealDef_getInstance(), SkillB$SealRes_getInstance(), SkillB$SealAtkSpd_getInstance(), SkillB$SealAtkDef_getInstance(), SkillB$Windsweep_getInstance(), SkillB$Watersweep_getInstance(), SkillB$Guard_getInstance(), SkillB$ShieldPulse_getInstance(), SkillB$WrathfulStaff_getInstance(), SkillB$DazzlingStaff_getInstance(), SkillB$CancelAffinity_getInstance(), SkillB$Wrath_getInstance(), SkillB$FlierFormation_getInstance(), SkillB$BlazeDance_getInstance(), SkillB$GaleDance_getInstance(), SkillB$TorrentDance_getInstance(), SkillB$GeyserDance_getInstance(), SkillB$KnockBack_getInstance(), SkillB$DragBack_getInstance(), SkillB$Lunge_getInstance(), SkillB$HitAndRun_getInstance(), SkillB$FollowUpRing_getInstance(), SkillB$RecoverRing_getInstance(), SkillB$LiveForBounty_getInstance(), SkillB$LiveForHonor_getInstance(), SkillB$SacaesBlessing_getInstance(), SkillB$BeorcsBlessing_getInstance(), SkillB$CrusadersWard_getInstance(), SkillB$PoisonStrike_getInstance()];
  }
  SkillB.values = SkillB$values;
  function SkillB$valueOf(name) {
    switch (name) {
      case 'SwordBreaker':
        return SkillB$SwordBreaker_getInstance();
      case 'LanceBreaker':
        return SkillB$LanceBreaker_getInstance();
      case 'AxeBreaker':
        return SkillB$AxeBreaker_getInstance();
      case 'BowBreaker':
        return SkillB$BowBreaker_getInstance();
      case 'DaggerBreaker':
        return SkillB$DaggerBreaker_getInstance();
      case 'RTomeBreaker':
        return SkillB$RTomeBreaker_getInstance();
      case 'GTomeBreaker':
        return SkillB$GTomeBreaker_getInstance();
      case 'BTomeBreaker':
        return SkillB$BTomeBreaker_getInstance();
      case 'EscapeRoute':
        return SkillB$EscapeRoute_getInstance();
      case 'Vantage':
        return SkillB$Vantage_getInstance();
      case 'WaryFighter':
        return SkillB$WaryFighter_getInstance();
      case 'BoldFighter':
        return SkillB$BoldFighter_getInstance();
      case 'VengefulFighter':
        return SkillB$VengefulFighter_getInstance();
      case 'Desperation':
        return SkillB$Desperation_getInstance();
      case 'QuickRiposte':
        return SkillB$QuickRiposte_getInstance();
      case 'BrashAssault':
        return SkillB$BrashAssault_getInstance();
      case 'Renewal':
        return SkillB$Renewal_getInstance();
      case 'LiveToServe':
        return SkillB$LiveToServe_getInstance();
      case 'WingsOfMercy':
        return SkillB$WingsOfMercy_getInstance();
      case 'Pass':
        return SkillB$Pass_getInstance();
      case 'Obstruct':
        return SkillB$Obstruct_getInstance();
      case 'SealAtk':
        return SkillB$SealAtk_getInstance();
      case 'SealSpd':
        return SkillB$SealSpd_getInstance();
      case 'SealDef':
        return SkillB$SealDef_getInstance();
      case 'SealRes':
        return SkillB$SealRes_getInstance();
      case 'SealAtkSpd':
        return SkillB$SealAtkSpd_getInstance();
      case 'SealAtkDef':
        return SkillB$SealAtkDef_getInstance();
      case 'Windsweep':
        return SkillB$Windsweep_getInstance();
      case 'Watersweep':
        return SkillB$Watersweep_getInstance();
      case 'Guard':
        return SkillB$Guard_getInstance();
      case 'ShieldPulse':
        return SkillB$ShieldPulse_getInstance();
      case 'WrathfulStaff':
        return SkillB$WrathfulStaff_getInstance();
      case 'DazzlingStaff':
        return SkillB$DazzlingStaff_getInstance();
      case 'CancelAffinity':
        return SkillB$CancelAffinity_getInstance();
      case 'Wrath':
        return SkillB$Wrath_getInstance();
      case 'FlierFormation':
        return SkillB$FlierFormation_getInstance();
      case 'BlazeDance':
        return SkillB$BlazeDance_getInstance();
      case 'GaleDance':
        return SkillB$GaleDance_getInstance();
      case 'TorrentDance':
        return SkillB$TorrentDance_getInstance();
      case 'GeyserDance':
        return SkillB$GeyserDance_getInstance();
      case 'KnockBack':
        return SkillB$KnockBack_getInstance();
      case 'DragBack':
        return SkillB$DragBack_getInstance();
      case 'Lunge':
        return SkillB$Lunge_getInstance();
      case 'HitAndRun':
        return SkillB$HitAndRun_getInstance();
      case 'FollowUpRing':
        return SkillB$FollowUpRing_getInstance();
      case 'RecoverRing':
        return SkillB$RecoverRing_getInstance();
      case 'LiveForBounty':
        return SkillB$LiveForBounty_getInstance();
      case 'LiveForHonor':
        return SkillB$LiveForHonor_getInstance();
      case 'SacaesBlessing':
        return SkillB$SacaesBlessing_getInstance();
      case 'BeorcsBlessing':
        return SkillB$BeorcsBlessing_getInstance();
      case 'CrusadersWard':
        return SkillB$CrusadersWard_getInstance();
      case 'PoisonStrike':
        return SkillB$PoisonStrike_getInstance();
      default:throwISE('No enum constant jp.blogspot.turanukimaru.fehs.skill.SkillB.' + name);
    }
  }
  SkillB.valueOf_61zpoe$ = SkillB$valueOf;
  function SkillC(name, ordinal, jp, type, level, preSkill, maxLevel) {
    if (level === void 0)
      level = 0;
    if (preSkill === void 0)
      preSkill = Skill$Companion_getInstance().NONE;
    if (maxLevel === void 0)
      maxLevel = 3;
    Enum.call(this);
    this.jp_39272f$_0 = jp;
    this.type_n0mpx$_0 = type;
    this.level_fqakgh$_0 = level;
    this.preSkill_tuxscx$_0 = preSkill;
    this.maxLevel_ny2ps1$_0 = maxLevel;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function SkillC_initFields() {
    SkillC_initFields = function () {
    };
    SkillC$SpurAtk_instance = new SkillC('SpurAtk', 0, '\u653B\u6483\u306E\u7D0B\u7AE0', Skill$SkillType$C_getInstance());
    SkillC$SpurSpd_instance = new SkillC('SpurSpd', 1, '\u901F\u3055\u306E\u7D0B\u7AE0', Skill$SkillType$C_getInstance());
    SkillC$SpurDef_instance = new SkillC('SpurDef', 2, '\u5B88\u5099\u306E\u7D0B\u7AE0', Skill$SkillType$C_getInstance());
    SkillC$SpurRes_instance = new SkillC('SpurRes', 3, '\u9B54\u9632\u306E\u7D0B\u7AE0', Skill$SkillType$C_getInstance());
    SkillC$SpurDefRes_instance = new SkillC('SpurDefRes', 4, '\u5B88\u5099\u9B54\u9632\u306E\u7D0B\u7AE0', Skill$SkillType$C_getInstance(), void 0, void 0, 2);
    SkillC$SpurSpdDef_instance = new SkillC('SpurSpdDef', 5, '\u901F\u3055\u5B88\u5099\u306E\u7D0B\u7AE0', Skill$SkillType$C_getInstance(), void 0, void 0, 2);
    SkillC$ThreatenAtk_instance = new SkillC('ThreatenAtk', 6, '\u653B\u6483\u306E\u5A01\u5687', Skill$SkillType$C_getInstance());
    SkillC$ThreatenSpd_instance = new SkillC('ThreatenSpd', 7, '\u901F\u3055\u306E\u5A01\u5687', Skill$SkillType$C_getInstance());
    SkillC$ThreatenDef_instance = new SkillC('ThreatenDef', 8, '\u5B88\u5099\u306E\u5A01\u5687', Skill$SkillType$C_getInstance());
    SkillC$ThreatenRes_instance = new SkillC('ThreatenRes', 9, '\u9B54\u9632\u306E\u5A01\u5687', Skill$SkillType$C_getInstance());
    SkillC$FortifyDef_instance = new SkillC('FortifyDef', 10, '\u5B88\u5099\u306E\u9F13\u821E', Skill$SkillType$C_getInstance());
    SkillC$FortifyRes_instance = new SkillC('FortifyRes', 11, '\u9B54\u9632\u306E\u9F13\u821E', Skill$SkillType$C_getInstance());
    SkillC$FortifyArmor_instance = new SkillC('FortifyArmor', 12, '\u91CD\u76FE\u306E\u9F13\u821E', Skill$SkillType$C_getInstance(), void 0, void 0, 0);
    SkillC$FortifyCavalry_instance = new SkillC('FortifyCavalry', 13, '\u9A0E\u76FE\u306E\u9F13\u821E', Skill$SkillType$C_getInstance(), void 0, void 0, 0);
    SkillC$FortifyFliers_instance = new SkillC('FortifyFliers', 14, '\u98DB\u76FE\u306E\u9F13\u821E', Skill$SkillType$C_getInstance(), void 0, void 0, 0);
    SkillC$FortifyDragons_instance = new SkillC('FortifyDragons', 15, '\u7ADC\u76FE\u306E\u9F13\u821E', Skill$SkillType$C_getInstance(), void 0, void 0, 0);
    SkillC$HoneAtk_instance = new SkillC('HoneAtk', 16, '\u653B\u6483\u306E\u9F13\u821E', Skill$SkillType$C_getInstance());
    SkillC$HoneSpd_instance = new SkillC('HoneSpd', 17, '\u901F\u3055\u306E\u9F13\u821E', Skill$SkillType$C_getInstance());
    SkillC$DriveAtk_instance = new SkillC('DriveAtk', 18, '\u653B\u6483\u306E\u5927\u7D0B\u7AE0', Skill$SkillType$C_getInstance(), void 0, void 0, 2);
    SkillC$DriveDef_instance = new SkillC('DriveDef', 19, '\u5B88\u5099\u306E\u5927\u7D0B\u7AE0', Skill$SkillType$C_getInstance(), void 0, void 0, 2);
    SkillC$DriveSpd_instance = new SkillC('DriveSpd', 20, '\u901F\u3055\u306E\u5927\u7D0B\u7AE0', Skill$SkillType$C_getInstance(), void 0, void 0, 2);
    SkillC$DriveRes_instance = new SkillC('DriveRes', 21, '\u9B54\u9632\u306E\u5927\u7D0B\u7AE0', Skill$SkillType$C_getInstance(), void 0, void 0, 2);
    SkillC$HoneArmor_instance = new SkillC('HoneArmor', 22, '\u91CD\u5203\u306E\u9F13\u821E', Skill$SkillType$C_getInstance(), void 0, void 0, 0);
    SkillC$HoneCavalry_instance = new SkillC('HoneCavalry', 23, '\u9A0E\u5203\u306E\u9F13\u821E', Skill$SkillType$C_getInstance(), void 0, void 0, 0);
    SkillC$HoneFliers_instance = new SkillC('HoneFliers', 24, '\u98DB\u5203\u306E\u9F13\u821E', Skill$SkillType$C_getInstance(), void 0, void 0, 0);
    SkillC$GoadArmor_instance = new SkillC('GoadArmor', 25, '\u91CD\u5203\u306E\u7D0B\u7AE0', Skill$SkillType$C_getInstance(), void 0, void 0, 0);
    SkillC$GoadCavalry_instance = new SkillC('GoadCavalry', 26, '\u9A0E\u5203\u306E\u7D0B\u7AE0', Skill$SkillType$C_getInstance(), void 0, void 0, 0);
    SkillC$GoadFliers_instance = new SkillC('GoadFliers', 27, '\u98DB\u5203\u306E\u7D0B\u7AE0', Skill$SkillType$C_getInstance(), void 0, void 0, 0);
    SkillC$WardArmor_instance = new SkillC('WardArmor', 28, '\u91CD\u76FE\u306E\u7D0B\u7AE0', Skill$SkillType$C_getInstance(), void 0, void 0, 0);
    SkillC$WardCavalry_instance = new SkillC('WardCavalry', 29, '\u9A0E\u76FE\u306E\u7D0B\u7AE0', Skill$SkillType$C_getInstance(), void 0, void 0, 0);
    SkillC$WardFliers_instance = new SkillC('WardFliers', 30, '\u98DB\u76FE\u306E\u7D0B\u7AE0', Skill$SkillType$C_getInstance(), void 0, void 0, 0);
    SkillC$SavageBlow_instance = new SkillC('SavageBlow', 31, '\u6B7B\u306E\u5410\u606F', Skill$SkillType$C_getInstance());
    SkillC$BreathOfLife_instance = new SkillC('BreathOfLife', 32, '\u751F\u306E\u606F\u5439', Skill$SkillType$C_getInstance());
    SkillC$SwordExperience_instance = new SkillC('SwordExperience', 33, '\u5263\u306E\u7D4C\u9A13', Skill$SkillType$C_getInstance());
    SkillC$AxeExperience_instance = new SkillC('AxeExperience', 34, '\u65A7\u306E\u7D4C\u9A13', Skill$SkillType$C_getInstance());
    SkillC$BowExperience_instance = new SkillC('BowExperience', 35, '\u5F13\u306E\u7D4C\u9A13', Skill$SkillType$C_getInstance());
    SkillC$BTomeExperience_instance = new SkillC('BTomeExperience', 36, '\u9752\u9B54\u306E\u7D4C\u9A13', Skill$SkillType$C_getInstance());
    SkillC$SwordValor_instance = new SkillC('SwordValor', 37, '\u5263\u306E\u6280\u91CF', Skill$SkillType$C_getInstance());
    SkillC$LanceValor_instance = new SkillC('LanceValor', 38, '\u69CD\u306E\u6280\u91CF', Skill$SkillType$C_getInstance());
    SkillC$AxeValor_instance = new SkillC('AxeValor', 39, '\u65A7\u306E\u6280\u91CF', Skill$SkillType$C_getInstance());
    SkillC$DaggerValor_instance = new SkillC('DaggerValor', 40, '\u6697\u5668\u306E\u6280\u91CF', Skill$SkillType$C_getInstance());
    SkillC$RTomeValor_instance = new SkillC('RTomeValor', 41, '\u8D64\u9B54\u306E\u6280\u91CF', Skill$SkillType$C_getInstance());
    SkillC$BTomeValor_instance = new SkillC('BTomeValor', 42, '\u9752\u9B54\u306E\u6280\u91CF', Skill$SkillType$C_getInstance());
    SkillC$GTomeValor_instance = new SkillC('GTomeValor', 43, '\u7DD1\u9B54\u306E\u6280\u91CF', Skill$SkillType$C_getInstance());
    SkillC$PanicPloy_instance = new SkillC('PanicPloy', 44, '\u6050\u614C\u306E\u5947\u7B56', Skill$SkillType$C_getInstance());
    SkillC$AtkPloy_instance = new SkillC('AtkPloy', 45, '\u653B\u6483\u306E\u8B00\u7B56', Skill$SkillType$C_getInstance());
    SkillC$SpdPloy_instance = new SkillC('SpdPloy', 46, '\u901F\u3055\u306E\u8B00\u7B56', Skill$SkillType$C_getInstance());
    SkillC$DefPloy_instance = new SkillC('DefPloy', 47, '\u5B88\u5099\u306E\u8B00\u7B56', Skill$SkillType$C_getInstance());
    SkillC$ResPloy_instance = new SkillC('ResPloy', 48, '\u9B54\u9632\u306E\u8B00\u7B56', Skill$SkillType$C_getInstance());
    SkillC$InfantryPulse_instance = new SkillC('InfantryPulse', 49, '\u6B69\u884C\u306E\u9F13\u52D5', Skill$SkillType$C_getInstance());
    SkillC$AtkSmoke_instance = new SkillC('AtkSmoke', 50, '\u653B\u6483\u306E\u7D2B\u7159', Skill$SkillType$C_getInstance());
    SkillC$SpdSmoke_instance = new SkillC('SpdSmoke', 51, '\u901F\u3055\u306E\u7D2B\u7159', Skill$SkillType$C_getInstance());
    SkillC$ArmorMarch_instance = new SkillC('ArmorMarch', 52, '\u91CD\u88C5\u306E\u884C\u8ECD', Skill$SkillType$C_getInstance());
    SkillC$Guidance_instance = new SkillC('Guidance', 53, '\u7A7A\u304B\u3089\u306E\u5148\u5C0E', Skill$SkillType$C_getInstance());
    SkillC$AtkTactic_instance = new SkillC('AtkTactic', 54, '\u653B\u6483\u306E\u6307\u63EE', Skill$SkillType$C_getInstance());
    SkillC$DefTactic_instance = new SkillC('DefTactic', 55, '\u5B88\u5099\u306E\u6307\u63EE', Skill$SkillType$C_getInstance());
    SkillC$Companion_getInstance();
  }
  Object.defineProperty(SkillC.prototype, 'jp', {
    get: function () {
      return this.jp_39272f$_0;
    }
  });
  Object.defineProperty(SkillC.prototype, 'type', {
    get: function () {
      return this.type_n0mpx$_0;
    }
  });
  Object.defineProperty(SkillC.prototype, 'level', {
    get: function () {
      return this.level_fqakgh$_0;
    }
  });
  Object.defineProperty(SkillC.prototype, 'preSkill', {
    get: function () {
      return this.preSkill_tuxscx$_0;
    }
  });
  Object.defineProperty(SkillC.prototype, 'maxLevel', {
    get: function () {
      return this.maxLevel_ny2ps1$_0;
    }
  });
  var SkillC$SpurAtk_instance;
  function SkillC$SpurAtk_getInstance() {
    SkillC_initFields();
    return SkillC$SpurAtk_instance;
  }
  var SkillC$SpurSpd_instance;
  function SkillC$SpurSpd_getInstance() {
    SkillC_initFields();
    return SkillC$SpurSpd_instance;
  }
  var SkillC$SpurDef_instance;
  function SkillC$SpurDef_getInstance() {
    SkillC_initFields();
    return SkillC$SpurDef_instance;
  }
  var SkillC$SpurRes_instance;
  function SkillC$SpurRes_getInstance() {
    SkillC_initFields();
    return SkillC$SpurRes_instance;
  }
  var SkillC$SpurDefRes_instance;
  function SkillC$SpurDefRes_getInstance() {
    SkillC_initFields();
    return SkillC$SpurDefRes_instance;
  }
  var SkillC$SpurSpdDef_instance;
  function SkillC$SpurSpdDef_getInstance() {
    SkillC_initFields();
    return SkillC$SpurSpdDef_instance;
  }
  var SkillC$ThreatenAtk_instance;
  function SkillC$ThreatenAtk_getInstance() {
    SkillC_initFields();
    return SkillC$ThreatenAtk_instance;
  }
  var SkillC$ThreatenSpd_instance;
  function SkillC$ThreatenSpd_getInstance() {
    SkillC_initFields();
    return SkillC$ThreatenSpd_instance;
  }
  var SkillC$ThreatenDef_instance;
  function SkillC$ThreatenDef_getInstance() {
    SkillC_initFields();
    return SkillC$ThreatenDef_instance;
  }
  var SkillC$ThreatenRes_instance;
  function SkillC$ThreatenRes_getInstance() {
    SkillC_initFields();
    return SkillC$ThreatenRes_instance;
  }
  var SkillC$FortifyDef_instance;
  function SkillC$FortifyDef_getInstance() {
    SkillC_initFields();
    return SkillC$FortifyDef_instance;
  }
  var SkillC$FortifyRes_instance;
  function SkillC$FortifyRes_getInstance() {
    SkillC_initFields();
    return SkillC$FortifyRes_instance;
  }
  var SkillC$FortifyArmor_instance;
  function SkillC$FortifyArmor_getInstance() {
    SkillC_initFields();
    return SkillC$FortifyArmor_instance;
  }
  var SkillC$FortifyCavalry_instance;
  function SkillC$FortifyCavalry_getInstance() {
    SkillC_initFields();
    return SkillC$FortifyCavalry_instance;
  }
  var SkillC$FortifyFliers_instance;
  function SkillC$FortifyFliers_getInstance() {
    SkillC_initFields();
    return SkillC$FortifyFliers_instance;
  }
  var SkillC$FortifyDragons_instance;
  function SkillC$FortifyDragons_getInstance() {
    SkillC_initFields();
    return SkillC$FortifyDragons_instance;
  }
  var SkillC$HoneAtk_instance;
  function SkillC$HoneAtk_getInstance() {
    SkillC_initFields();
    return SkillC$HoneAtk_instance;
  }
  var SkillC$HoneSpd_instance;
  function SkillC$HoneSpd_getInstance() {
    SkillC_initFields();
    return SkillC$HoneSpd_instance;
  }
  var SkillC$DriveAtk_instance;
  function SkillC$DriveAtk_getInstance() {
    SkillC_initFields();
    return SkillC$DriveAtk_instance;
  }
  var SkillC$DriveDef_instance;
  function SkillC$DriveDef_getInstance() {
    SkillC_initFields();
    return SkillC$DriveDef_instance;
  }
  var SkillC$DriveSpd_instance;
  function SkillC$DriveSpd_getInstance() {
    SkillC_initFields();
    return SkillC$DriveSpd_instance;
  }
  var SkillC$DriveRes_instance;
  function SkillC$DriveRes_getInstance() {
    SkillC_initFields();
    return SkillC$DriveRes_instance;
  }
  var SkillC$HoneArmor_instance;
  function SkillC$HoneArmor_getInstance() {
    SkillC_initFields();
    return SkillC$HoneArmor_instance;
  }
  var SkillC$HoneCavalry_instance;
  function SkillC$HoneCavalry_getInstance() {
    SkillC_initFields();
    return SkillC$HoneCavalry_instance;
  }
  var SkillC$HoneFliers_instance;
  function SkillC$HoneFliers_getInstance() {
    SkillC_initFields();
    return SkillC$HoneFliers_instance;
  }
  var SkillC$GoadArmor_instance;
  function SkillC$GoadArmor_getInstance() {
    SkillC_initFields();
    return SkillC$GoadArmor_instance;
  }
  var SkillC$GoadCavalry_instance;
  function SkillC$GoadCavalry_getInstance() {
    SkillC_initFields();
    return SkillC$GoadCavalry_instance;
  }
  var SkillC$GoadFliers_instance;
  function SkillC$GoadFliers_getInstance() {
    SkillC_initFields();
    return SkillC$GoadFliers_instance;
  }
  var SkillC$WardArmor_instance;
  function SkillC$WardArmor_getInstance() {
    SkillC_initFields();
    return SkillC$WardArmor_instance;
  }
  var SkillC$WardCavalry_instance;
  function SkillC$WardCavalry_getInstance() {
    SkillC_initFields();
    return SkillC$WardCavalry_instance;
  }
  var SkillC$WardFliers_instance;
  function SkillC$WardFliers_getInstance() {
    SkillC_initFields();
    return SkillC$WardFliers_instance;
  }
  var SkillC$SavageBlow_instance;
  function SkillC$SavageBlow_getInstance() {
    SkillC_initFields();
    return SkillC$SavageBlow_instance;
  }
  var SkillC$BreathOfLife_instance;
  function SkillC$BreathOfLife_getInstance() {
    SkillC_initFields();
    return SkillC$BreathOfLife_instance;
  }
  var SkillC$SwordExperience_instance;
  function SkillC$SwordExperience_getInstance() {
    SkillC_initFields();
    return SkillC$SwordExperience_instance;
  }
  var SkillC$AxeExperience_instance;
  function SkillC$AxeExperience_getInstance() {
    SkillC_initFields();
    return SkillC$AxeExperience_instance;
  }
  var SkillC$BowExperience_instance;
  function SkillC$BowExperience_getInstance() {
    SkillC_initFields();
    return SkillC$BowExperience_instance;
  }
  var SkillC$BTomeExperience_instance;
  function SkillC$BTomeExperience_getInstance() {
    SkillC_initFields();
    return SkillC$BTomeExperience_instance;
  }
  var SkillC$SwordValor_instance;
  function SkillC$SwordValor_getInstance() {
    SkillC_initFields();
    return SkillC$SwordValor_instance;
  }
  var SkillC$LanceValor_instance;
  function SkillC$LanceValor_getInstance() {
    SkillC_initFields();
    return SkillC$LanceValor_instance;
  }
  var SkillC$AxeValor_instance;
  function SkillC$AxeValor_getInstance() {
    SkillC_initFields();
    return SkillC$AxeValor_instance;
  }
  var SkillC$DaggerValor_instance;
  function SkillC$DaggerValor_getInstance() {
    SkillC_initFields();
    return SkillC$DaggerValor_instance;
  }
  var SkillC$RTomeValor_instance;
  function SkillC$RTomeValor_getInstance() {
    SkillC_initFields();
    return SkillC$RTomeValor_instance;
  }
  var SkillC$BTomeValor_instance;
  function SkillC$BTomeValor_getInstance() {
    SkillC_initFields();
    return SkillC$BTomeValor_instance;
  }
  var SkillC$GTomeValor_instance;
  function SkillC$GTomeValor_getInstance() {
    SkillC_initFields();
    return SkillC$GTomeValor_instance;
  }
  var SkillC$PanicPloy_instance;
  function SkillC$PanicPloy_getInstance() {
    SkillC_initFields();
    return SkillC$PanicPloy_instance;
  }
  var SkillC$AtkPloy_instance;
  function SkillC$AtkPloy_getInstance() {
    SkillC_initFields();
    return SkillC$AtkPloy_instance;
  }
  var SkillC$SpdPloy_instance;
  function SkillC$SpdPloy_getInstance() {
    SkillC_initFields();
    return SkillC$SpdPloy_instance;
  }
  var SkillC$DefPloy_instance;
  function SkillC$DefPloy_getInstance() {
    SkillC_initFields();
    return SkillC$DefPloy_instance;
  }
  var SkillC$ResPloy_instance;
  function SkillC$ResPloy_getInstance() {
    SkillC_initFields();
    return SkillC$ResPloy_instance;
  }
  var SkillC$InfantryPulse_instance;
  function SkillC$InfantryPulse_getInstance() {
    SkillC_initFields();
    return SkillC$InfantryPulse_instance;
  }
  var SkillC$AtkSmoke_instance;
  function SkillC$AtkSmoke_getInstance() {
    SkillC_initFields();
    return SkillC$AtkSmoke_instance;
  }
  var SkillC$SpdSmoke_instance;
  function SkillC$SpdSmoke_getInstance() {
    SkillC_initFields();
    return SkillC$SpdSmoke_instance;
  }
  var SkillC$ArmorMarch_instance;
  function SkillC$ArmorMarch_getInstance() {
    SkillC_initFields();
    return SkillC$ArmorMarch_instance;
  }
  var SkillC$Guidance_instance;
  function SkillC$Guidance_getInstance() {
    SkillC_initFields();
    return SkillC$Guidance_instance;
  }
  var SkillC$AtkTactic_instance;
  function SkillC$AtkTactic_getInstance() {
    SkillC_initFields();
    return SkillC$AtkTactic_instance;
  }
  var SkillC$DefTactic_instance;
  function SkillC$DefTactic_getInstance() {
    SkillC_initFields();
    return SkillC$DefTactic_instance;
  }
  SkillC.prototype.lv_za3lpa$ = function (lv) {
    return this.level === lv ? this : new LappedSkill(this, lv);
  };
  Object.defineProperty(SkillC.prototype, 'value', {
    get: function () {
      return this.name;
    }
  });
  SkillC.prototype.localeName_miixs2$ = function (locale) {
    if (equals(locale, Locale$JAPAN_getInstance()))
      return this.jp;
    else if (equals(locale, Locale$JAPANESE_getInstance()))
      return this.jp;
    else
      return this.value;
  };
  function SkillC$Companion() {
    SkillC$Companion_instance = this;
    this.itemMap_0 = LinkedHashMap_init();
  }
  SkillC$Companion.prototype.spreadItems = function () {
    var $receiver = SkillC$values();
    var tmp$;
    var accumulator = arrayListOf([Skill$Companion_getInstance().NONE]);
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      var list = accumulator;
      var tmp$_0;
      tmp$_0 = (new IntRange(1, element.maxLevel)).iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        list.add_11rb$(element.lv_za3lpa$(element_0));
      }
      accumulator = list;
    }
    return accumulator;
  };
  SkillC$Companion.prototype.valueOfOrNONE_pdl1vj$ = function (key) {
    var tmp$, tmp$_0;
    if (key == null)
      return Skill$Companion_getInstance().NONE;
    else {
      try {
        if (this.itemMap_0.isEmpty()) {
          var $receiver = SkillC$values();
          var tmp$_1;
          for (tmp$_1 = 0; tmp$_1 !== $receiver.length; ++tmp$_1) {
            var element = $receiver[tmp$_1];
            this.itemMap_0.put_xwzc9p$(element.jp, element);
          }
          var $receiver_0 = SkillC$values();
          var tmp$_2;
          for (tmp$_2 = 0; tmp$_2 !== $receiver_0.length; ++tmp$_2) {
            var element_0 = $receiver_0[tmp$_2];
            this.itemMap_0.put_xwzc9p$(element_0.value, element_0);
          }
        }
        var regex = Regex(' \\d');
        var lv = regex.find_905azu$(key);
        if (lv != null) {
          var skill = regex.replaceFirst_x2uqeu$(key, '');
          var tmp$_3 = (tmp$ = this.itemMap_0.get_11rb$(skill)) != null ? tmp$ : SkillC$valueOf(skill);
          var $receiver_1 = lv.value;
          var tmp$_4;
          return tmp$_3.lv_za3lpa$(toInt(trim(Kotlin.isCharSequence(tmp$_4 = $receiver_1) ? tmp$_4 : throwCCE()).toString()));
        }
         else
          return (tmp$_0 = this.itemMap_0.get_11rb$(key)) != null ? tmp$_0 : SkillC$valueOf(key);
      }
       catch (e) {
        if (Kotlin.isType(e, Exception)) {
          println(e);
          return Skill$Companion_getInstance().NONE;
        }
         else
          throw e;
      }
    }
  };
  SkillC$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SkillC$Companion_instance = null;
  function SkillC$Companion_getInstance() {
    SkillC_initFields();
    if (SkillC$Companion_instance === null) {
      new SkillC$Companion();
    }
    return SkillC$Companion_instance;
  }
  SkillC.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SkillC',
    interfaces: [Skill, Enum]
  };
  function SkillC$values() {
    return [SkillC$SpurAtk_getInstance(), SkillC$SpurSpd_getInstance(), SkillC$SpurDef_getInstance(), SkillC$SpurRes_getInstance(), SkillC$SpurDefRes_getInstance(), SkillC$SpurSpdDef_getInstance(), SkillC$ThreatenAtk_getInstance(), SkillC$ThreatenSpd_getInstance(), SkillC$ThreatenDef_getInstance(), SkillC$ThreatenRes_getInstance(), SkillC$FortifyDef_getInstance(), SkillC$FortifyRes_getInstance(), SkillC$FortifyArmor_getInstance(), SkillC$FortifyCavalry_getInstance(), SkillC$FortifyFliers_getInstance(), SkillC$FortifyDragons_getInstance(), SkillC$HoneAtk_getInstance(), SkillC$HoneSpd_getInstance(), SkillC$DriveAtk_getInstance(), SkillC$DriveDef_getInstance(), SkillC$DriveSpd_getInstance(), SkillC$DriveRes_getInstance(), SkillC$HoneArmor_getInstance(), SkillC$HoneCavalry_getInstance(), SkillC$HoneFliers_getInstance(), SkillC$GoadArmor_getInstance(), SkillC$GoadCavalry_getInstance(), SkillC$GoadFliers_getInstance(), SkillC$WardArmor_getInstance(), SkillC$WardCavalry_getInstance(), SkillC$WardFliers_getInstance(), SkillC$SavageBlow_getInstance(), SkillC$BreathOfLife_getInstance(), SkillC$SwordExperience_getInstance(), SkillC$AxeExperience_getInstance(), SkillC$BowExperience_getInstance(), SkillC$BTomeExperience_getInstance(), SkillC$SwordValor_getInstance(), SkillC$LanceValor_getInstance(), SkillC$AxeValor_getInstance(), SkillC$DaggerValor_getInstance(), SkillC$RTomeValor_getInstance(), SkillC$BTomeValor_getInstance(), SkillC$GTomeValor_getInstance(), SkillC$PanicPloy_getInstance(), SkillC$AtkPloy_getInstance(), SkillC$SpdPloy_getInstance(), SkillC$DefPloy_getInstance(), SkillC$ResPloy_getInstance(), SkillC$InfantryPulse_getInstance(), SkillC$AtkSmoke_getInstance(), SkillC$SpdSmoke_getInstance(), SkillC$ArmorMarch_getInstance(), SkillC$Guidance_getInstance(), SkillC$AtkTactic_getInstance(), SkillC$DefTactic_getInstance()];
  }
  SkillC.values = SkillC$values;
  function SkillC$valueOf(name) {
    switch (name) {
      case 'SpurAtk':
        return SkillC$SpurAtk_getInstance();
      case 'SpurSpd':
        return SkillC$SpurSpd_getInstance();
      case 'SpurDef':
        return SkillC$SpurDef_getInstance();
      case 'SpurRes':
        return SkillC$SpurRes_getInstance();
      case 'SpurDefRes':
        return SkillC$SpurDefRes_getInstance();
      case 'SpurSpdDef':
        return SkillC$SpurSpdDef_getInstance();
      case 'ThreatenAtk':
        return SkillC$ThreatenAtk_getInstance();
      case 'ThreatenSpd':
        return SkillC$ThreatenSpd_getInstance();
      case 'ThreatenDef':
        return SkillC$ThreatenDef_getInstance();
      case 'ThreatenRes':
        return SkillC$ThreatenRes_getInstance();
      case 'FortifyDef':
        return SkillC$FortifyDef_getInstance();
      case 'FortifyRes':
        return SkillC$FortifyRes_getInstance();
      case 'FortifyArmor':
        return SkillC$FortifyArmor_getInstance();
      case 'FortifyCavalry':
        return SkillC$FortifyCavalry_getInstance();
      case 'FortifyFliers':
        return SkillC$FortifyFliers_getInstance();
      case 'FortifyDragons':
        return SkillC$FortifyDragons_getInstance();
      case 'HoneAtk':
        return SkillC$HoneAtk_getInstance();
      case 'HoneSpd':
        return SkillC$HoneSpd_getInstance();
      case 'DriveAtk':
        return SkillC$DriveAtk_getInstance();
      case 'DriveDef':
        return SkillC$DriveDef_getInstance();
      case 'DriveSpd':
        return SkillC$DriveSpd_getInstance();
      case 'DriveRes':
        return SkillC$DriveRes_getInstance();
      case 'HoneArmor':
        return SkillC$HoneArmor_getInstance();
      case 'HoneCavalry':
        return SkillC$HoneCavalry_getInstance();
      case 'HoneFliers':
        return SkillC$HoneFliers_getInstance();
      case 'GoadArmor':
        return SkillC$GoadArmor_getInstance();
      case 'GoadCavalry':
        return SkillC$GoadCavalry_getInstance();
      case 'GoadFliers':
        return SkillC$GoadFliers_getInstance();
      case 'WardArmor':
        return SkillC$WardArmor_getInstance();
      case 'WardCavalry':
        return SkillC$WardCavalry_getInstance();
      case 'WardFliers':
        return SkillC$WardFliers_getInstance();
      case 'SavageBlow':
        return SkillC$SavageBlow_getInstance();
      case 'BreathOfLife':
        return SkillC$BreathOfLife_getInstance();
      case 'SwordExperience':
        return SkillC$SwordExperience_getInstance();
      case 'AxeExperience':
        return SkillC$AxeExperience_getInstance();
      case 'BowExperience':
        return SkillC$BowExperience_getInstance();
      case 'BTomeExperience':
        return SkillC$BTomeExperience_getInstance();
      case 'SwordValor':
        return SkillC$SwordValor_getInstance();
      case 'LanceValor':
        return SkillC$LanceValor_getInstance();
      case 'AxeValor':
        return SkillC$AxeValor_getInstance();
      case 'DaggerValor':
        return SkillC$DaggerValor_getInstance();
      case 'RTomeValor':
        return SkillC$RTomeValor_getInstance();
      case 'BTomeValor':
        return SkillC$BTomeValor_getInstance();
      case 'GTomeValor':
        return SkillC$GTomeValor_getInstance();
      case 'PanicPloy':
        return SkillC$PanicPloy_getInstance();
      case 'AtkPloy':
        return SkillC$AtkPloy_getInstance();
      case 'SpdPloy':
        return SkillC$SpdPloy_getInstance();
      case 'DefPloy':
        return SkillC$DefPloy_getInstance();
      case 'ResPloy':
        return SkillC$ResPloy_getInstance();
      case 'InfantryPulse':
        return SkillC$InfantryPulse_getInstance();
      case 'AtkSmoke':
        return SkillC$AtkSmoke_getInstance();
      case 'SpdSmoke':
        return SkillC$SpdSmoke_getInstance();
      case 'ArmorMarch':
        return SkillC$ArmorMarch_getInstance();
      case 'Guidance':
        return SkillC$Guidance_getInstance();
      case 'AtkTactic':
        return SkillC$AtkTactic_getInstance();
      case 'DefTactic':
        return SkillC$DefTactic_getInstance();
      default:throwISE('No enum constant jp.blogspot.turanukimaru.fehs.skill.SkillC.' + name);
    }
  }
  SkillC.valueOf_61zpoe$ = SkillC$valueOf;
  function Special(name, ordinal, jp, type, level, preSkill) {
    if (level === void 0)
      level = 0;
    if (preSkill === void 0)
      preSkill = Skill$Companion_getInstance().NONE;
    Enum.call(this);
    this.jp_1of7wi$_0 = jp;
    this.type_kx066i$_0 = type;
    this.level_51vtyk$_0 = level;
    this.preSkill_3562qy$_0 = preSkill;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Special_initFields() {
    Special_initFields = function () {
    };
    new Special$DayLight();
    new Special$Noontime();
    new Special$Sol();
    new Special$NightSky();
    new Special$Glimmer();
    new Special$Astra();
    new Special$RegnalAstra();
    new Special$Miracle();
    new Special$DraconicAura();
    new Special$DragonGaze();
    new Special$DragonFang();
    new Special$GlowingEmber();
    new Special$Bonfire();
    new Special$Ignis();
    new Special$ChillingWind();
    new Special$Iceberg();
    new Special$Glacies();
    new Special$Aether();
    new Special$NewMoon();
    new Special$Moonbow();
    new Special$Luna();
    new Special$BlackLuna();
    new Special$Retribution();
    new Special$Reprisal();
    new Special$Vengeance();
    new Special$HolyVestments();
    new Special$SacredCowl();
    new Special$IceMirror();
    new Special$Aegis();
    new Special$Buckler();
    new Special$Escutcheon();
    new Special$Pavise();
    Special$Galeforce_instance = new Special('Galeforce', 32, '\u75BE\u98A8\u8FC5\u96F7', Skill$SkillType$SPECIAL_A_getInstance(), 5);
    Special$Imbue_instance = new Special('Imbue', 33, '\u6CBB\u7652', Skill$SkillType$SPECIAL_A_getInstance(), 1);
    Special$HeavenlyLight_instance = new Special('HeavenlyLight', 34, '\u5929\u7167', Skill$SkillType$SPECIAL_A_getInstance(), 2);
    Special$SolidEarthBalm_instance = new Special('SolidEarthBalm', 35, '\u5927\u5730\u306E\u795D\u798F', Skill$SkillType$SPECIAL_A_getInstance(), 1);
    Special$SwiftWindsBalm_instance = new Special('SwiftWindsBalm', 36, '\u75BE\u98A8\u306E\u795D\u798F', Skill$SkillType$SPECIAL_A_getInstance(), 1);
    Special$KindledFireBalm_instance = new Special('KindledFireBalm', 37, '\u696D\u706B\u306E\u795D\u798F', Skill$SkillType$SPECIAL_A_getInstance(), 1);
    Special$StillWaterBalm_instance = new Special('StillWaterBalm', 38, '\u9759\u6C34\u306E\u795D\u798F', Skill$SkillType$SPECIAL_A_getInstance(), 1);
    Special$RisingFlame_instance = new Special('RisingFlame', 39, '\u7815\u706B', Skill$SkillType$SPECIAL_A_getInstance(), 4);
    Special$BlazingFlame_instance = new Special('BlazingFlame', 40, '\u70C8\u706B', Skill$SkillType$SPECIAL_A_getInstance(), 4);
    Special$GrowingFlame_instance = new Special('GrowingFlame', 41, '\u7206\u706B', Skill$SkillType$SPECIAL_A_getInstance(), 4);
    Special$RisingLight_instance = new Special('RisingLight', 42, '\u7815\u5149', Skill$SkillType$SPECIAL_A_getInstance(), 4);
    Special$BlazingLight_instance = new Special('BlazingLight', 43, '\u70C8\u5149', Skill$SkillType$SPECIAL_A_getInstance(), 4);
    Special$GrowingLight_instance = new Special('GrowingLight', 44, '\u7206\u5149', Skill$SkillType$SPECIAL_A_getInstance(), 4);
    Special$RisingWind_instance = new Special('RisingWind', 45, '\u7815\u98A8', Skill$SkillType$SPECIAL_A_getInstance(), 4);
    Special$BlazingWind_instance = new Special('BlazingWind', 46, '\u70C8\u98A8', Skill$SkillType$SPECIAL_A_getInstance(), 4);
    Special$GrowingWind_instance = new Special('GrowingWind', 47, '\u7206\u98A8', Skill$SkillType$SPECIAL_A_getInstance(), 4);
    Special$RisingThunder_instance = new Special('RisingThunder', 48, '\u7815\u96F7', Skill$SkillType$SPECIAL_A_getInstance(), 4);
    Special$BlazingThunder_instance = new Special('BlazingThunder', 49, '\u70C8\u96F7', Skill$SkillType$SPECIAL_A_getInstance(), 4);
    Special$GrowingThunder_instance = new Special('GrowingThunder', 50, '\u7206\u96F7', Skill$SkillType$SPECIAL_A_getInstance(), 4);
    Special$Companion_getInstance();
  }
  Object.defineProperty(Special.prototype, 'jp', {
    get: function () {
      return this.jp_1of7wi$_0;
    }
  });
  Object.defineProperty(Special.prototype, 'type', {
    get: function () {
      return this.type_kx066i$_0;
    }
  });
  Object.defineProperty(Special.prototype, 'level', {
    get: function () {
      return this.level_51vtyk$_0;
    }
  });
  Object.defineProperty(Special.prototype, 'preSkill', {
    get: function () {
      return this.preSkill_3562qy$_0;
    }
  });
  function Special$DayLight() {
    Special$DayLight_instance = this;
    Special.call(this, 'DayLight', 0, '\u967D\u5F71', Skill$SkillType$SPECIAL_A_getInstance(), 3);
  }
  Special$DayLight.prototype.damage_96237r$$default = function (battleUnit, target, results, skill) {
    return this.damage_96237r$(battleUnit, target, results, this, Special.prototype.damage_96237r$$default.bind(this));
  };
  Special$DayLight.prototype.absorb_6zcyla$ = function (battleUnit, target, damage) {
    battleUnit.heal_za3lpa$((damage * 3 | 0) / 10 | 0);
    return damage;
  };
  Special$DayLight.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DayLight',
    interfaces: [Special]
  };
  var Special$DayLight_instance = null;
  function Special$DayLight_getInstance() {
    Special_initFields();
    return Special$DayLight_instance;
  }
  function Special$Noontime() {
    Special$Noontime_instance = this;
    Special.call(this, 'Noontime', 1, '\u5915\u967D', Skill$SkillType$SPECIAL_A_getInstance(), 2);
  }
  Special$Noontime.prototype.damage_96237r$$default = function (battleUnit, target, results, skill) {
    return this.damage_96237r$(battleUnit, target, results, this, Special.prototype.damage_96237r$$default.bind(this));
  };
  Special$Noontime.prototype.absorb_6zcyla$ = function (battleUnit, target, damage) {
    battleUnit.heal_za3lpa$((damage * 3 | 0) / 10 | 0);
    return damage;
  };
  Special$Noontime.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Noontime',
    interfaces: [Special]
  };
  var Special$Noontime_instance = null;
  function Special$Noontime_getInstance() {
    Special_initFields();
    return Special$Noontime_instance;
  }
  function Special$Sol() {
    Special$Sol_instance = this;
    Special.call(this, 'Sol', 2, '\u592A\u967D', Skill$SkillType$SPECIAL_A_getInstance(), 3);
  }
  Special$Sol.prototype.damage_96237r$$default = function (battleUnit, target, results, skill) {
    return this.damage_96237r$(battleUnit, target, results, this, Special.prototype.damage_96237r$$default.bind(this));
  };
  Special$Sol.prototype.absorb_6zcyla$ = function (battleUnit, target, damage) {
    battleUnit.heal_za3lpa$((damage * 5 | 0) / 10 | 0);
    return damage;
  };
  Special$Sol.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Sol',
    interfaces: [Special]
  };
  var Special$Sol_instance = null;
  function Special$Sol_getInstance() {
    Special_initFields();
    return Special$Sol_instance;
  }
  function Special$NightSky() {
    Special$NightSky_instance = this;
    Special.call(this, 'NightSky', 3, '\u661F\u5F71', Skill$SkillType$SPECIAL_A_getInstance(), 3);
  }
  Special$NightSky.prototype.damage_96237r$$default = function (battleUnit, target, results, skill) {
    return new Pair((this.damage_96237r$(battleUnit, target, results, this, Special.prototype.damage_96237r$$default.bind(this)).first * 15 | 0) / 10 | 0, this);
  };
  Special$NightSky.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NightSky',
    interfaces: [Special]
  };
  var Special$NightSky_instance = null;
  function Special$NightSky_getInstance() {
    Special_initFields();
    return Special$NightSky_instance;
  }
  function Special$Glimmer() {
    Special$Glimmer_instance = this;
    Special.call(this, 'Glimmer', 4, '\u51F6\u661F', Skill$SkillType$SPECIAL_A_getInstance(), 2);
  }
  Special$Glimmer.prototype.damage_96237r$$default = function (battleUnit, target, results, skill) {
    return new Pair((this.damage_96237r$(battleUnit, target, results, this, Special.prototype.damage_96237r$$default.bind(this)).first * 15 | 0) / 10 | 0, this);
  };
  Special$Glimmer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Glimmer',
    interfaces: [Special]
  };
  var Special$Glimmer_instance = null;
  function Special$Glimmer_getInstance() {
    Special_initFields();
    return Special$Glimmer_instance;
  }
  function Special$Astra() {
    Special$Astra_instance = this;
    Special.call(this, 'Astra', 5, '\u6D41\u661F', Skill$SkillType$SPECIAL_A_getInstance(), 4);
  }
  Special$Astra.prototype.damage_96237r$$default = function (battleUnit, target, results, skill) {
    return new Pair((this.damage_96237r$(battleUnit, target, results, this, Special.prototype.damage_96237r$$default.bind(this)).first * 25 | 0) / 10 | 0, this);
  };
  Special$Astra.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Astra',
    interfaces: [Special]
  };
  var Special$Astra_instance = null;
  function Special$Astra_getInstance() {
    Special_initFields();
    return Special$Astra_instance;
  }
  function Special$RegnalAstra() {
    Special$RegnalAstra_instance = this;
    Special.call(this, 'RegnalAstra', 6, '\u5263\u59EB\u306E\u6D41\u661F', Skill$SkillType$SPECIAL_A_getInstance(), 2);
  }
  Special$RegnalAstra.prototype.damage_96237r$$default = function (battleUnit, target, results, skill) {
    return new Pair(battleUnit.halfByStaff_za3lpa$(target.preventByDefResTerrain_6sdwnf$(battleUnit.colorAttack() + ((battleUnit.effectedSpd * 4 | 0) / 10 | 0) | 0, battleUnit.armedHero.baseHero.weapon.type)), this);
  };
  Special$RegnalAstra.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RegnalAstra',
    interfaces: [Special]
  };
  var Special$RegnalAstra_instance = null;
  function Special$RegnalAstra_getInstance() {
    Special_initFields();
    return Special$RegnalAstra_instance;
  }
  function Special$Miracle() {
    Special$Miracle_instance = this;
    Special.call(this, 'Miracle', 7, '\u7948\u308A', Skill$SkillType$SPECIAL_B_getInstance(), 5);
  }
  Special$Miracle.prototype.specialPrevent_upjsjk$$default = function (battleUnit, damage, lv) {
    return (new IntRange(2, damage)).contains_mef7kx$(battleUnit.hp) ? new Pair(battleUnit.hp - 1 | 0, this) : this.specialPrevent_upjsjk$(battleUnit, damage, lv, Special.prototype.specialPrevent_upjsjk$$default.bind(this));
  };
  Special$Miracle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Miracle',
    interfaces: [Special]
  };
  var Special$Miracle_instance = null;
  function Special$Miracle_getInstance() {
    Special_initFields();
    return Special$Miracle_instance;
  }
  function Special$DraconicAura() {
    Special$DraconicAura_instance = this;
    Special.call(this, 'DraconicAura', 8, '\u4F0F\u7ADC', Skill$SkillType$SPECIAL_A_getInstance(), 4);
  }
  Special$DraconicAura.prototype.damage_96237r$$default = function (battleUnit, target, results, skill) {
    return new Pair(battleUnit.halfByStaff_za3lpa$(target.preventByDefResTerrain_6sdwnf$(battleUnit.colorAttack() + ((battleUnit.effectedAtk * 3 | 0) / 10 | 0) | 0, battleUnit.armedHero.baseHero.weapon.type)), this);
  };
  Special$DraconicAura.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DraconicAura',
    interfaces: [Special]
  };
  var Special$DraconicAura_instance = null;
  function Special$DraconicAura_getInstance() {
    Special_initFields();
    return Special$DraconicAura_instance;
  }
  function Special$DragonGaze() {
    Special$DragonGaze_instance = this;
    Special.call(this, 'DragonGaze', 9, '\u7ADC\u88C2', Skill$SkillType$SPECIAL_A_getInstance(), 3);
  }
  Special$DragonGaze.prototype.damage_96237r$$default = function (battleUnit, target, results, skill) {
    return new Pair(battleUnit.halfByStaff_za3lpa$(target.preventByDefResTerrain_6sdwnf$(battleUnit.colorAttack() + ((battleUnit.effectedAtk * 3 | 0) / 10 | 0) | 0, battleUnit.armedHero.baseHero.weapon.type)), this);
  };
  Special$DragonGaze.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DragonGaze',
    interfaces: [Special]
  };
  var Special$DragonGaze_instance = null;
  function Special$DragonGaze_getInstance() {
    Special_initFields();
    return Special$DragonGaze_instance;
  }
  function Special$DragonFang() {
    Special$DragonFang_instance = this;
    Special.call(this, 'DragonFang', 10, '\u7ADC\u7A7F', Skill$SkillType$SPECIAL_A_getInstance(), 4);
  }
  Special$DragonFang.prototype.damage_96237r$$default = function (battleUnit, target, results, skill) {
    return new Pair(battleUnit.halfByStaff_za3lpa$(target.preventByDefResTerrain_6sdwnf$(battleUnit.colorAttack() + ((battleUnit.effectedAtk * 5 | 0) / 10 | 0) | 0, battleUnit.armedHero.baseHero.weapon.type)), this);
  };
  Special$DragonFang.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DragonFang',
    interfaces: [Special]
  };
  var Special$DragonFang_instance = null;
  function Special$DragonFang_getInstance() {
    Special_initFields();
    return Special$DragonFang_instance;
  }
  function Special$GlowingEmber() {
    Special$GlowingEmber_instance = this;
    Special.call(this, 'GlowingEmber', 11, '\u86CD\u706B', Skill$SkillType$SPECIAL_A_getInstance(), 4);
  }
  Special$GlowingEmber.prototype.damage_96237r$$default = function (battleUnit, target, results, skill) {
    return new Pair(battleUnit.halfByStaff_za3lpa$(target.preventByDefResTerrain_6sdwnf$(battleUnit.colorAttack() + ((battleUnit.effectedDef * 5 | 0) / 10 | 0) | 0, battleUnit.armedHero.baseHero.weapon.type)), this);
  };
  Special$GlowingEmber.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GlowingEmber',
    interfaces: [Special]
  };
  var Special$GlowingEmber_instance = null;
  function Special$GlowingEmber_getInstance() {
    Special_initFields();
    return Special$GlowingEmber_instance;
  }
  function Special$Bonfire() {
    Special$Bonfire_instance = this;
    Special.call(this, 'Bonfire', 12, '\u7DCB\u708E', Skill$SkillType$SPECIAL_A_getInstance(), 3);
  }
  Special$Bonfire.prototype.damage_96237r$$default = function (battleUnit, target, results, skill) {
    return new Pair(battleUnit.halfByStaff_za3lpa$(target.preventByDefResTerrain_6sdwnf$(battleUnit.colorAttack() + ((battleUnit.effectedDef * 5 | 0) / 10 | 0) | 0, battleUnit.armedHero.baseHero.weapon.type)), this);
  };
  Special$Bonfire.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bonfire',
    interfaces: [Special]
  };
  var Special$Bonfire_instance = null;
  function Special$Bonfire_getInstance() {
    Special_initFields();
    return Special$Bonfire_instance;
  }
  function Special$Ignis() {
    Special$Ignis_instance = this;
    Special.call(this, 'Ignis', 13, '\u83EF\u708E', Skill$SkillType$SPECIAL_A_getInstance(), 4);
  }
  Special$Ignis.prototype.damage_96237r$$default = function (battleUnit, target, results, skill) {
    return new Pair(battleUnit.halfByStaff_za3lpa$(target.preventByDefResTerrain_6sdwnf$(battleUnit.colorAttack() + ((battleUnit.effectedDef * 8 | 0) / 10 | 0) | 0, battleUnit.armedHero.baseHero.weapon.type)), this);
  };
  Special$Ignis.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Ignis',
    interfaces: [Special]
  };
  var Special$Ignis_instance = null;
  function Special$Ignis_getInstance() {
    Special_initFields();
    return Special$Ignis_instance;
  }
  function Special$ChillingWind() {
    Special$ChillingWind_instance = this;
    Special.call(this, 'ChillingWind', 14, '\u6C37\u70B9', Skill$SkillType$SPECIAL_A_getInstance(), 4);
  }
  Special$ChillingWind.prototype.damage_96237r$$default = function (battleUnit, target, results, skill) {
    return new Pair(battleUnit.halfByStaff_za3lpa$(target.preventByDefResTerrain_6sdwnf$(battleUnit.colorAttack() + ((battleUnit.effectedRes * 5 | 0) / 10 | 0) | 0, battleUnit.armedHero.baseHero.weapon.type)), this);
  };
  Special$ChillingWind.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChillingWind',
    interfaces: [Special]
  };
  var Special$ChillingWind_instance = null;
  function Special$ChillingWind_getInstance() {
    Special_initFields();
    return Special$ChillingWind_instance;
  }
  function Special$Iceberg() {
    Special$Iceberg_instance = this;
    Special.call(this, 'Iceberg', 15, '\u6C37\u84BC', Skill$SkillType$SPECIAL_A_getInstance(), 3);
  }
  Special$Iceberg.prototype.damage_96237r$$default = function (battleUnit, target, results, skill) {
    return new Pair(battleUnit.halfByStaff_za3lpa$(target.preventByDefResTerrain_6sdwnf$(battleUnit.colorAttack() + ((battleUnit.effectedRes * 5 | 0) / 10 | 0) | 0, battleUnit.armedHero.baseHero.weapon.type)), this);
  };
  Special$Iceberg.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Iceberg',
    interfaces: [Special]
  };
  var Special$Iceberg_instance = null;
  function Special$Iceberg_getInstance() {
    Special_initFields();
    return Special$Iceberg_instance;
  }
  function Special$Glacies() {
    Special$Glacies_instance = this;
    Special.call(this, 'Glacies', 16, '\u6C37\u83EF', Skill$SkillType$SPECIAL_A_getInstance(), 4);
  }
  Special$Glacies.prototype.damage_96237r$$default = function (battleUnit, target, results, skill) {
    return new Pair(battleUnit.halfByStaff_za3lpa$(target.preventByDefResTerrain_6sdwnf$(battleUnit.colorAttack() + ((battleUnit.effectedRes * 8 | 0) / 10 | 0) | 0, battleUnit.armedHero.baseHero.weapon.type)), this);
  };
  Special$Glacies.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Glacies',
    interfaces: [Special]
  };
  var Special$Glacies_instance = null;
  function Special$Glacies_getInstance() {
    Special_initFields();
    return Special$Glacies_instance;
  }
  function Special$Aether() {
    Special$Aether_instance = this;
    Special.call(this, 'Aether', 17, '\u5929\u7A7A', Skill$SkillType$SPECIAL_A_getInstance(), 5);
  }
  Special$Aether.prototype.damage_96237r$$default = function (battleUnit, target, results, skill) {
    return new Pair(battleUnit.halfByStaff_za3lpa$(target.preventByDefResTerrain_6sdwnf$(battleUnit.colorAttack(), battleUnit.armedHero.baseHero.weapon.type, 50)), this);
  };
  Special$Aether.prototype.absorb_6zcyla$ = function (battleUnit, target, damage) {
    battleUnit.heal_za3lpa$((damage * 5 | 0) / 10 | 0);
    return damage;
  };
  Special$Aether.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Aether',
    interfaces: [Special]
  };
  var Special$Aether_instance = null;
  function Special$Aether_getInstance() {
    Special_initFields();
    return Special$Aether_instance;
  }
  function Special$NewMoon() {
    Special$NewMoon_instance = this;
    Special.call(this, 'NewMoon', 18, '\u5F71\u6708', Skill$SkillType$SPECIAL_A_getInstance(), 3);
  }
  Special$NewMoon.prototype.damage_96237r$$default = function (battleUnit, target, results, skill) {
    return new Pair(battleUnit.halfByStaff_za3lpa$(target.preventByDefResTerrain_6sdwnf$(battleUnit.colorAttack(), battleUnit.armedHero.baseHero.weapon.type, 30)), this);
  };
  Special$NewMoon.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NewMoon',
    interfaces: [Special]
  };
  var Special$NewMoon_instance = null;
  function Special$NewMoon_getInstance() {
    Special_initFields();
    return Special$NewMoon_instance;
  }
  function Special$Moonbow() {
    Special$Moonbow_instance = this;
    Special.call(this, 'Moonbow', 19, '\u6708\u8679', Skill$SkillType$SPECIAL_A_getInstance(), 2);
  }
  Special$Moonbow.prototype.damage_96237r$$default = function (battleUnit, target, results, skill) {
    return new Pair(battleUnit.halfByStaff_za3lpa$(target.preventByDefResTerrain_6sdwnf$(battleUnit.colorAttack(), battleUnit.armedHero.baseHero.weapon.type, 30)), this);
  };
  Special$Moonbow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Moonbow',
    interfaces: [Special]
  };
  var Special$Moonbow_instance = null;
  function Special$Moonbow_getInstance() {
    Special_initFields();
    return Special$Moonbow_instance;
  }
  function Special$Luna() {
    Special$Luna_instance = this;
    Special.call(this, 'Luna', 20, '\u6708\u5149', Skill$SkillType$SPECIAL_A_getInstance(), 3);
  }
  Special$Luna.prototype.damage_96237r$$default = function (battleUnit, target, results, skill) {
    return new Pair(battleUnit.halfByStaff_za3lpa$(battleUnit.halfByStaff_za3lpa$(target.preventByDefResTerrain_6sdwnf$(battleUnit.colorAttack(), battleUnit.armedHero.baseHero.weapon.type, 50))), this);
  };
  Special$Luna.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Luna',
    interfaces: [Special]
  };
  var Special$Luna_instance = null;
  function Special$Luna_getInstance() {
    Special_initFields();
    return Special$Luna_instance;
  }
  function Special$BlackLuna() {
    Special$BlackLuna_instance = this;
    Special.call(this, 'BlackLuna', 21, '\u9ED2\u306E\u6708\u5149', Skill$SkillType$SPECIAL_A_getInstance(), 3);
  }
  Special$BlackLuna.prototype.damage_96237r$$default = function (battleUnit, target, results, skill) {
    return new Pair(battleUnit.halfByStaff_za3lpa$(target.preventByDefResTerrain_6sdwnf$(battleUnit.colorAttack(), battleUnit.armedHero.baseHero.weapon.type, 80)), this);
  };
  Special$BlackLuna.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlackLuna',
    interfaces: [Special]
  };
  var Special$BlackLuna_instance = null;
  function Special$BlackLuna_getInstance() {
    Special_initFields();
    return Special$BlackLuna_instance;
  }
  function Special$Retribution() {
    Special$Retribution_instance = this;
    Special.call(this, 'Retribution', 22, '\u96EA\u8FB1', Skill$SkillType$SPECIAL_A_getInstance(), 3);
  }
  Special$Retribution.prototype.damage_96237r$$default = function (battleUnit, target, results, skill) {
    return new Pair(battleUnit.halfByStaff_za3lpa$(target.preventByDefResTerrain_6sdwnf$(battleUnit.colorAttack() + (((battleUnit.armedHero.maxHp - battleUnit.hp | 0) * 3 | 0) / 10 | 0) | 0, battleUnit.armedHero.baseHero.weapon.type)), this);
  };
  Special$Retribution.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Retribution',
    interfaces: [Special]
  };
  var Special$Retribution_instance = null;
  function Special$Retribution_getInstance() {
    Special_initFields();
    return Special$Retribution_instance;
  }
  function Special$Reprisal() {
    Special$Reprisal_instance = this;
    Special.call(this, 'Reprisal', 23, '\u8840\u8B90', Skill$SkillType$SPECIAL_A_getInstance(), 2);
  }
  Special$Reprisal.prototype.damage_96237r$$default = function (battleUnit, target, results, skill) {
    return new Pair(battleUnit.halfByStaff_za3lpa$(target.preventByDefResTerrain_6sdwnf$(battleUnit.colorAttack() + (((battleUnit.armedHero.maxHp - battleUnit.hp | 0) * 3 | 0) / 10 | 0) | 0, battleUnit.armedHero.baseHero.weapon.type)), this);
  };
  Special$Reprisal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Reprisal',
    interfaces: [Special]
  };
  var Special$Reprisal_instance = null;
  function Special$Reprisal_getInstance() {
    Special_initFields();
    return Special$Reprisal_instance;
  }
  function Special$Vengeance() {
    Special$Vengeance_instance = this;
    Special.call(this, 'Vengeance', 24, '\u5FA9\u8B90', Skill$SkillType$SPECIAL_A_getInstance(), 3);
  }
  Special$Vengeance.prototype.damage_96237r$$default = function (battleUnit, target, results, skill) {
    return new Pair(battleUnit.halfByStaff_za3lpa$(target.preventByDefResTerrain_6sdwnf$(battleUnit.colorAttack() + (((battleUnit.armedHero.maxHp - battleUnit.hp | 0) * 5 | 0) / 10 | 0) | 0, battleUnit.armedHero.baseHero.weapon.type)), this);
  };
  Special$Vengeance.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Vengeance',
    interfaces: [Special]
  };
  var Special$Vengeance_instance = null;
  function Special$Vengeance_getInstance() {
    Special_initFields();
    return Special$Vengeance_instance;
  }
  function Special$HolyVestments() {
    Special$HolyVestments_instance = this;
    Special.call(this, 'HolyVestments', 25, '\u8056\u8863', Skill$SkillType$SPECIAL_C_getInstance(), 3);
  }
  Special$HolyVestments.prototype.specialPrevent_upjsjk$$default = function (battleUnit, damage, lv) {
    return ensureNotNull(battleUnit.armedHero.baseHero.weapon.type.weaponType).range === 2 ? new Pair(damage - ((damage * 3 | 0) / 10 | 0) | 0, this) : this.specialPrevent_upjsjk$(battleUnit, damage, lv, Special.prototype.specialPrevent_upjsjk$$default.bind(this));
  };
  Special$HolyVestments.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HolyVestments',
    interfaces: [Special]
  };
  var Special$HolyVestments_instance = null;
  function Special$HolyVestments_getInstance() {
    Special_initFields();
    return Special$HolyVestments_instance;
  }
  function Special$SacredCowl() {
    Special$SacredCowl_instance = this;
    Special.call(this, 'SacredCowl', 26, '\u8056\u515C', Skill$SkillType$SPECIAL_C_getInstance(), 2);
  }
  Special$SacredCowl.prototype.specialPrevent_upjsjk$$default = function (battleUnit, damage, lv) {
    return ensureNotNull(battleUnit.armedHero.baseHero.weapon.type.weaponType).range === 2 ? new Pair(damage - ((damage * 3 | 0) / 10 | 0) | 0, this) : this.specialPrevent_upjsjk$(battleUnit, damage, lv, Special.prototype.specialPrevent_upjsjk$$default.bind(this));
  };
  Special$SacredCowl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SacredCowl',
    interfaces: [Special]
  };
  var Special$SacredCowl_instance = null;
  function Special$SacredCowl_getInstance() {
    Special_initFields();
    return Special$SacredCowl_instance;
  }
  function Special$IceMirror() {
    Special$IceMirror_instance = this;
    Special.call(this, 'IceMirror', 27, '\u6C37\u306E\u8056\u93E1', Skill$SkillType$SPECIAL_C_getInstance(), 2);
  }
  Special$IceMirror.prototype.specialPrevent_upjsjk$$default = function (battleUnit, damage, lv) {
    return ensureNotNull(battleUnit.armedHero.baseHero.weapon.type.weaponType).range === 2 ? new Pair(damage - ((damage * 3 | 0) / 10 | 0) | 0, this) : this.specialPrevent_upjsjk$(battleUnit, damage, lv, Special.prototype.specialPrevent_upjsjk$$default.bind(this));
  };
  Special$IceMirror.prototype.reducedDamage_upjsjk$$default = function (battleUnit, damage, lv) {
    battleUnit.oneTimeOnlyAdditionalDamage = damage;
    return battleUnit;
  };
  Special$IceMirror.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IceMirror',
    interfaces: [Special]
  };
  var Special$IceMirror_instance = null;
  function Special$IceMirror_getInstance() {
    Special_initFields();
    return Special$IceMirror_instance;
  }
  function Special$Aegis() {
    Special$Aegis_instance = this;
    Special.call(this, 'Aegis', 28, '\u8056\u76FE', Skill$SkillType$SPECIAL_C_getInstance(), 3);
  }
  Special$Aegis.prototype.specialPrevent_upjsjk$$default = function (battleUnit, damage, lv) {
    return ensureNotNull(battleUnit.armedHero.baseHero.weapon.type.weaponType).range === 2 ? new Pair(damage - ((damage * 5 | 0) / 10 | 0) | 0, this) : this.specialPrevent_upjsjk$(battleUnit, damage, lv, Special.prototype.specialPrevent_upjsjk$$default.bind(this));
  };
  Special$Aegis.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Aegis',
    interfaces: [Special]
  };
  var Special$Aegis_instance = null;
  function Special$Aegis_getInstance() {
    Special_initFields();
    return Special$Aegis_instance;
  }
  function Special$Buckler() {
    Special$Buckler_instance = this;
    Special.call(this, 'Buckler', 29, '\u5C0F\u76FE', Skill$SkillType$SPECIAL_A_getInstance(), 3);
  }
  Special$Buckler.prototype.specialPrevent_upjsjk$$default = function (battleUnit, damage, lv) {
    return ensureNotNull(battleUnit.armedHero.baseHero.weapon.type.weaponType).range === 1 ? new Pair(damage - ((damage * 3 | 0) / 10 | 0) | 0, this) : this.specialPrevent_upjsjk$(battleUnit, damage, lv, Special.prototype.specialPrevent_upjsjk$$default.bind(this));
  };
  Special$Buckler.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Buckler',
    interfaces: [Special]
  };
  var Special$Buckler_instance = null;
  function Special$Buckler_getInstance() {
    Special_initFields();
    return Special$Buckler_instance;
  }
  function Special$Escutcheon() {
    Special$Escutcheon_instance = this;
    Special.call(this, 'Escutcheon', 30, '\u9577\u76FE', Skill$SkillType$SPECIAL_A_getInstance(), 2);
  }
  Special$Escutcheon.prototype.specialPrevent_upjsjk$$default = function (battleUnit, damage, lv) {
    return ensureNotNull(ensureNotNull(battleUnit.enemy).armedHero.baseHero.weapon.type.weaponType).range === 1 ? new Pair(damage - ((damage * 3 | 0) / 10 | 0) | 0, this) : this.specialPrevent_upjsjk$(battleUnit, damage, lv, Special.prototype.specialPrevent_upjsjk$$default.bind(this));
  };
  Special$Escutcheon.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Escutcheon',
    interfaces: [Special]
  };
  var Special$Escutcheon_instance = null;
  function Special$Escutcheon_getInstance() {
    Special_initFields();
    return Special$Escutcheon_instance;
  }
  function Special$Pavise() {
    Special$Pavise_instance = this;
    Special.call(this, 'Pavise', 31, '\u5927\u76FE', Skill$SkillType$SPECIAL_A_getInstance(), 3);
  }
  Special$Pavise.prototype.specialPrevent_upjsjk$$default = function (battleUnit, damage, lv) {
    return ensureNotNull(battleUnit.armedHero.baseHero.weapon.type.weaponType).range === 1 ? new Pair(damage - ((damage * 5 | 0) / 10 | 0) | 0, this) : this.specialPrevent_upjsjk$(battleUnit, damage, lv, Special.prototype.specialPrevent_upjsjk$$default.bind(this));
  };
  Special$Pavise.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Pavise',
    interfaces: [Special]
  };
  var Special$Pavise_instance = null;
  function Special$Pavise_getInstance() {
    Special_initFields();
    return Special$Pavise_instance;
  }
  var Special$Galeforce_instance;
  function Special$Galeforce_getInstance() {
    Special_initFields();
    return Special$Galeforce_instance;
  }
  var Special$Imbue_instance;
  function Special$Imbue_getInstance() {
    Special_initFields();
    return Special$Imbue_instance;
  }
  var Special$HeavenlyLight_instance;
  function Special$HeavenlyLight_getInstance() {
    Special_initFields();
    return Special$HeavenlyLight_instance;
  }
  var Special$SolidEarthBalm_instance;
  function Special$SolidEarthBalm_getInstance() {
    Special_initFields();
    return Special$SolidEarthBalm_instance;
  }
  var Special$SwiftWindsBalm_instance;
  function Special$SwiftWindsBalm_getInstance() {
    Special_initFields();
    return Special$SwiftWindsBalm_instance;
  }
  var Special$KindledFireBalm_instance;
  function Special$KindledFireBalm_getInstance() {
    Special_initFields();
    return Special$KindledFireBalm_instance;
  }
  var Special$StillWaterBalm_instance;
  function Special$StillWaterBalm_getInstance() {
    Special_initFields();
    return Special$StillWaterBalm_instance;
  }
  var Special$RisingFlame_instance;
  function Special$RisingFlame_getInstance() {
    Special_initFields();
    return Special$RisingFlame_instance;
  }
  var Special$BlazingFlame_instance;
  function Special$BlazingFlame_getInstance() {
    Special_initFields();
    return Special$BlazingFlame_instance;
  }
  var Special$GrowingFlame_instance;
  function Special$GrowingFlame_getInstance() {
    Special_initFields();
    return Special$GrowingFlame_instance;
  }
  var Special$RisingLight_instance;
  function Special$RisingLight_getInstance() {
    Special_initFields();
    return Special$RisingLight_instance;
  }
  var Special$BlazingLight_instance;
  function Special$BlazingLight_getInstance() {
    Special_initFields();
    return Special$BlazingLight_instance;
  }
  var Special$GrowingLight_instance;
  function Special$GrowingLight_getInstance() {
    Special_initFields();
    return Special$GrowingLight_instance;
  }
  var Special$RisingWind_instance;
  function Special$RisingWind_getInstance() {
    Special_initFields();
    return Special$RisingWind_instance;
  }
  var Special$BlazingWind_instance;
  function Special$BlazingWind_getInstance() {
    Special_initFields();
    return Special$BlazingWind_instance;
  }
  var Special$GrowingWind_instance;
  function Special$GrowingWind_getInstance() {
    Special_initFields();
    return Special$GrowingWind_instance;
  }
  var Special$RisingThunder_instance;
  function Special$RisingThunder_getInstance() {
    Special_initFields();
    return Special$RisingThunder_instance;
  }
  var Special$BlazingThunder_instance;
  function Special$BlazingThunder_getInstance() {
    Special_initFields();
    return Special$BlazingThunder_instance;
  }
  var Special$GrowingThunder_instance;
  function Special$GrowingThunder_getInstance() {
    Special_initFields();
    return Special$GrowingThunder_instance;
  }
  Object.defineProperty(Special.prototype, 'value', {
    get: function () {
      return replace(this.name, '2', '+');
    }
  });
  Special.prototype.localeName_miixs2$ = function (locale) {
    if (equals(locale, Locale$JAPAN_getInstance()))
      return this.jp;
    else if (equals(locale, Locale$JAPANESE_getInstance()))
      return this.jp;
    else
      return this.value;
  };
  function Special$Companion() {
    Special$Companion_instance = this;
    this.itemMap_0 = LinkedHashMap_init();
  }
  Special$Companion.prototype.spreadItems = function () {
    var $receiver = Special$values();
    var tmp$;
    var accumulator = arrayListOf([Skill$Companion_getInstance().NONE]);
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      var list = accumulator;
      list.add_11rb$(element);
      accumulator = list;
    }
    return accumulator;
  };
  Special$Companion.prototype.valueOfOrNONE_pdl1vj$ = function (key) {
    var tmp$;
    if (key == null)
      return Skill$Companion_getInstance().NONE;
    else
      try {
        if (this.itemMap_0.isEmpty()) {
          var $receiver = Special$values();
          var tmp$_0;
          for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
            var element = $receiver[tmp$_0];
            this.itemMap_0.put_xwzc9p$(element.jp, element);
          }
          var $receiver_0 = Special$values();
          var tmp$_1;
          for (tmp$_1 = 0; tmp$_1 !== $receiver_0.length; ++tmp$_1) {
            var element_0 = $receiver_0[tmp$_1];
            this.itemMap_0.put_xwzc9p$(element_0.value, element_0);
          }
        }
        return (tmp$ = this.itemMap_0.get_11rb$(key)) != null ? tmp$ : Special$valueOf(key);
      }
       catch (e) {
        if (Kotlin.isType(e, Exception)) {
          return Skill$Companion_getInstance().NONE;
        }
         else
          throw e;
      }
  };
  Special$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Special$Companion_instance = null;
  function Special$Companion_getInstance() {
    Special_initFields();
    if (Special$Companion_instance === null) {
      new Special$Companion();
    }
    return Special$Companion_instance;
  }
  Special.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Special',
    interfaces: [Skill, Enum]
  };
  function Special$values() {
    return [Special$DayLight_getInstance(), Special$Noontime_getInstance(), Special$Sol_getInstance(), Special$NightSky_getInstance(), Special$Glimmer_getInstance(), Special$Astra_getInstance(), Special$RegnalAstra_getInstance(), Special$Miracle_getInstance(), Special$DraconicAura_getInstance(), Special$DragonGaze_getInstance(), Special$DragonFang_getInstance(), Special$GlowingEmber_getInstance(), Special$Bonfire_getInstance(), Special$Ignis_getInstance(), Special$ChillingWind_getInstance(), Special$Iceberg_getInstance(), Special$Glacies_getInstance(), Special$Aether_getInstance(), Special$NewMoon_getInstance(), Special$Moonbow_getInstance(), Special$Luna_getInstance(), Special$BlackLuna_getInstance(), Special$Retribution_getInstance(), Special$Reprisal_getInstance(), Special$Vengeance_getInstance(), Special$HolyVestments_getInstance(), Special$SacredCowl_getInstance(), Special$IceMirror_getInstance(), Special$Aegis_getInstance(), Special$Buckler_getInstance(), Special$Escutcheon_getInstance(), Special$Pavise_getInstance(), Special$Galeforce_getInstance(), Special$Imbue_getInstance(), Special$HeavenlyLight_getInstance(), Special$SolidEarthBalm_getInstance(), Special$SwiftWindsBalm_getInstance(), Special$KindledFireBalm_getInstance(), Special$StillWaterBalm_getInstance(), Special$RisingFlame_getInstance(), Special$BlazingFlame_getInstance(), Special$GrowingFlame_getInstance(), Special$RisingLight_getInstance(), Special$BlazingLight_getInstance(), Special$GrowingLight_getInstance(), Special$RisingWind_getInstance(), Special$BlazingWind_getInstance(), Special$GrowingWind_getInstance(), Special$RisingThunder_getInstance(), Special$BlazingThunder_getInstance(), Special$GrowingThunder_getInstance()];
  }
  Special.values = Special$values;
  function Special$valueOf(name) {
    switch (name) {
      case 'DayLight':
        return Special$DayLight_getInstance();
      case 'Noontime':
        return Special$Noontime_getInstance();
      case 'Sol':
        return Special$Sol_getInstance();
      case 'NightSky':
        return Special$NightSky_getInstance();
      case 'Glimmer':
        return Special$Glimmer_getInstance();
      case 'Astra':
        return Special$Astra_getInstance();
      case 'RegnalAstra':
        return Special$RegnalAstra_getInstance();
      case 'Miracle':
        return Special$Miracle_getInstance();
      case 'DraconicAura':
        return Special$DraconicAura_getInstance();
      case 'DragonGaze':
        return Special$DragonGaze_getInstance();
      case 'DragonFang':
        return Special$DragonFang_getInstance();
      case 'GlowingEmber':
        return Special$GlowingEmber_getInstance();
      case 'Bonfire':
        return Special$Bonfire_getInstance();
      case 'Ignis':
        return Special$Ignis_getInstance();
      case 'ChillingWind':
        return Special$ChillingWind_getInstance();
      case 'Iceberg':
        return Special$Iceberg_getInstance();
      case 'Glacies':
        return Special$Glacies_getInstance();
      case 'Aether':
        return Special$Aether_getInstance();
      case 'NewMoon':
        return Special$NewMoon_getInstance();
      case 'Moonbow':
        return Special$Moonbow_getInstance();
      case 'Luna':
        return Special$Luna_getInstance();
      case 'BlackLuna':
        return Special$BlackLuna_getInstance();
      case 'Retribution':
        return Special$Retribution_getInstance();
      case 'Reprisal':
        return Special$Reprisal_getInstance();
      case 'Vengeance':
        return Special$Vengeance_getInstance();
      case 'HolyVestments':
        return Special$HolyVestments_getInstance();
      case 'SacredCowl':
        return Special$SacredCowl_getInstance();
      case 'IceMirror':
        return Special$IceMirror_getInstance();
      case 'Aegis':
        return Special$Aegis_getInstance();
      case 'Buckler':
        return Special$Buckler_getInstance();
      case 'Escutcheon':
        return Special$Escutcheon_getInstance();
      case 'Pavise':
        return Special$Pavise_getInstance();
      case 'Galeforce':
        return Special$Galeforce_getInstance();
      case 'Imbue':
        return Special$Imbue_getInstance();
      case 'HeavenlyLight':
        return Special$HeavenlyLight_getInstance();
      case 'SolidEarthBalm':
        return Special$SolidEarthBalm_getInstance();
      case 'SwiftWindsBalm':
        return Special$SwiftWindsBalm_getInstance();
      case 'KindledFireBalm':
        return Special$KindledFireBalm_getInstance();
      case 'StillWaterBalm':
        return Special$StillWaterBalm_getInstance();
      case 'RisingFlame':
        return Special$RisingFlame_getInstance();
      case 'BlazingFlame':
        return Special$BlazingFlame_getInstance();
      case 'GrowingFlame':
        return Special$GrowingFlame_getInstance();
      case 'RisingLight':
        return Special$RisingLight_getInstance();
      case 'BlazingLight':
        return Special$BlazingLight_getInstance();
      case 'GrowingLight':
        return Special$GrowingLight_getInstance();
      case 'RisingWind':
        return Special$RisingWind_getInstance();
      case 'BlazingWind':
        return Special$BlazingWind_getInstance();
      case 'GrowingWind':
        return Special$GrowingWind_getInstance();
      case 'RisingThunder':
        return Special$RisingThunder_getInstance();
      case 'BlazingThunder':
        return Special$BlazingThunder_getInstance();
      case 'GrowingThunder':
        return Special$GrowingThunder_getInstance();
      default:throwISE('No enum constant jp.blogspot.turanukimaru.fehs.skill.Special.' + name);
    }
  }
  Special.valueOf_61zpoe$ = Special$valueOf;
  function Weapon(name, ordinal, jp, type, level, preSkill, refineSkillType) {
    if (level === void 0)
      level = 0;
    if (preSkill === void 0)
      preSkill = Skill$Companion_getInstance().NONE;
    if (refineSkillType === void 0)
      refineSkillType = RefineSkill$RefineType$NONE_getInstance();
    Enum.call(this);
    this.jp_6p0ke5$_0 = jp;
    this.type_u6thn3$_0 = type;
    this.level_8dohc7$_0 = level;
    this.preSkill_rx80px$_0 = preSkill;
    this.refineSkillType = refineSkillType;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Weapon_initFields() {
    Weapon_initFields = function () {
    };
    Weapon$IronSword_instance = new Weapon('IronSword', 0, '\u9244\u306E\u5263', Skill$SkillType$SWORD_getInstance(), 6);
    Weapon$SteelSword_instance = new Weapon('SteelSword', 1, '\u92FC\u306E\u5263', Skill$SkillType$SWORD_getInstance(), 8, Weapon$IronSword_getInstance());
    Weapon$SilverSword_instance = new Weapon('SilverSword', 2, '\u9280\u306E\u5263', Skill$SkillType$SWORD_getInstance(), 11, Weapon$SteelSword_getInstance());
    Weapon$SilverSword2_instance = new Weapon('SilverSword2', 3, '\u9280\u306E\u5263\uFF0B', Skill$SkillType$SWORD_getInstance(), 15, Weapon$SilverSword_getInstance(), RefineSkill$RefineType$Range1_getInstance());
    new Weapon$ArmorSlayer();
    new Weapon$ArmorSlayer2();
    new Weapon$Armorsmasher2();
    new Weapon$BraveSword();
    new Weapon$BraveSword2();
    new Weapon$RubySword();
    new Weapon$RubySword2();
    new Weapon$KillingEdge();
    new Weapon$KillingEdge2();
    new Weapon$WaoDao();
    new Weapon$WaoDao2();
    new Weapon$Zanbato();
    new Weapon$Zanbato2();
    new Weapon$SlayingEdge();
    new Weapon$SlayingEdge2();
    new Weapon$AyrasBlade();
    new Weapon$Folkvangr();
    new Weapon$Falchion();
    new Weapon$BindingBlade();
    new Weapon$Durandal();
    new Weapon$SolKatti();
    new Weapon$Yato();
    new Weapon$Raijinto();
    Weapon$Sieglinde_instance = new Weapon('Sieglinde', 27, '\u30B8\u30FC\u30AF\u30EA\u30F3\u30C7', Skill$SkillType$SWORD_getInstance(), 16, Weapon$SilverSword_getInstance());
    new Weapon$Tyrfing();
    new Weapon$Mystletainn();
    Weapon$Eckesachs_instance = new Weapon('Eckesachs', 30, '\u30A8\u30C3\u30B1\u30B6\u30C3\u30AF\u30B9', Skill$SkillType$SWORD_getInstance(), 16, Weapon$SilverSword_getInstance());
    new Weapon$Siegfried();
    new Weapon$Ragnell();
    new Weapon$BlazingDurandal();
    new Weapon$Amiti();
    new Weapon$Alondite();
    new Weapon$DivineTyrfing();
    new Weapon$RegalBlade();
    new Weapon$ResoluteBlade();
    new Weapon$Audhulma();
    new Weapon$DarkGreatsword();
    new Weapon$FiresweepSword();
    new Weapon$FiresweepSword2();
    Weapon$IronLance_instance = new Weapon('IronLance', 43, '\u9244\u306E\u69CD', Skill$SkillType$LANCE_getInstance(), 6);
    Weapon$SteelLance_instance = new Weapon('SteelLance', 44, '\u92FC\u306E\u69CD', Skill$SkillType$LANCE_getInstance(), 8, Weapon$IronLance_getInstance());
    Weapon$SilverLance_instance = new Weapon('SilverLance', 45, '\u9280\u306E\u69CD', Skill$SkillType$LANCE_getInstance(), 11, Weapon$SteelLance_getInstance());
    Weapon$SilverLance2_instance = new Weapon('SilverLance2', 46, '\u9280\u306E\u69CD\uFF0B', Skill$SkillType$LANCE_getInstance(), 15, Weapon$SilverLance_getInstance(), RefineSkill$RefineType$Range1_getInstance());
    new Weapon$KillerLance();
    new Weapon$KillerLance2();
    new Weapon$BraveLance();
    new Weapon$BraveLance2();
    new Weapon$SapphireLance();
    new Weapon$SapphireLance2();
    new Weapon$HeavySpear();
    new Weapon$HeavySpear2();
    new Weapon$SlayingSpear2();
    new Weapon$CarrotLance();
    new Weapon$CarrotLance2();
    Weapon$FirstBite_instance = new Weapon('FirstBite', 58, '\u30D5\u30A1\u30FC\u30B9\u30C8\u30D0\u30A4\u30C8', Skill$SkillType$LANCE_getInstance(), 10, Weapon$SteelLance_getInstance());
    Weapon$FirstBite2_instance = new Weapon('FirstBite2', 59, '\u30D5\u30A1\u30FC\u30B9\u30C8\u30D0\u30A4\u30C8\uFF0B', Skill$SkillType$LANCE_getInstance(), 14, Weapon$FirstBite_getInstance(), RefineSkill$RefineType$Range1_getInstance());
    new Weapon$FiresweepLance();
    new Weapon$FiresweepLance2();
    new Weapon$DeftHarpoon();
    new Weapon$DeftHarpoon2();
    new Weapon$Ridersbane();
    new Weapon$Ridersbane2();
    new Weapon$BerkutsLance();
    new Weapon$BerkutsLance2();
    new Weapon$SlayingLance();
    new Weapon$SlayingLance2();
    Weapon$Fensalir_instance = new Weapon('Fensalir', 70, '\u30D5\u30A7\u30F3\u30B5\u30EA\u30EB', Skill$SkillType$LANCE_getInstance(), 16, Weapon$SilverLance_getInstance());
    Weapon$Siegmund_instance = new Weapon('Siegmund', 71, '\u30B8\u30FC\u30AF\u30E0\u30F3\u30C8', Skill$SkillType$LANCE_getInstance(), 16, Weapon$SilverLance_getInstance(), RefineSkill$RefineType$Range1_getInstance());
    new Weapon$Gradivus();
    new Weapon$Vidofinir();
    new Weapon$CursedLance();
    new Weapon$Geirskogul();
    new Weapon$Leiptr();
    new Weapon$BrightNaginata();
    new Weapon$Tannenboom();
    new Weapon$Tannenboom2();
    Weapon$IronAxe_instance = new Weapon('IronAxe', 80, '\u9244\u306E\u65A7', Skill$SkillType$AXE_getInstance(), 6);
    Weapon$SteelAxe_instance = new Weapon('SteelAxe', 81, '\u92FC\u306E\u65A7', Skill$SkillType$AXE_getInstance(), 8, Weapon$IronAxe_getInstance());
    Weapon$SilverAxe_instance = new Weapon('SilverAxe', 82, '\u9280\u306E\u65A7', Skill$SkillType$AXE_getInstance(), 11, Weapon$SteelAxe_getInstance());
    Weapon$SilverAxe2_instance = new Weapon('SilverAxe2', 83, '\u9280\u306E\u65A7\uFF0B', Skill$SkillType$AXE_getInstance(), 15, Weapon$SilverAxe_getInstance(), RefineSkill$RefineType$Range1_getInstance());
    new Weapon$KillerAxe();
    new Weapon$KillerAxe2();
    new Weapon$BraveAxe();
    new Weapon$BraveAxe2();
    new Weapon$Hammer();
    new Weapon$Hammer2();
    new Weapon$SlayingHammer2();
    new Weapon$EmeraldAxe();
    new Weapon$EmeraldAxe2();
    new Weapon$SlayingAxe();
    new Weapon$SlayingAxe2();
    new Weapon$CarrotAxe();
    new Weapon$CarrotAxe2();
    Weapon$LegionsAxe_instance = new Weapon('LegionsAxe', 97, '\u30ED\u30FC\u30ED\u30FC\u306E\u65A7', Skill$SkillType$AXE_getInstance(), 10, Weapon$SteelAxe_getInstance());
    Weapon$LegionsAxe2_instance = new Weapon('LegionsAxe2', 98, '\u30ED\u30FC\u30ED\u30FC\u306E\u65A7\uFF0B', Skill$SkillType$AXE_getInstance(), 14, Weapon$LegionsAxe_getInstance(), RefineSkill$RefineType$Range1_getInstance());
    new Weapon$MelonCrusher();
    new Weapon$MelonCrusher2();
    Weapon$LilithFloatie_instance = new Weapon('LilithFloatie', 101, '\u30EA\u30EA\u30B9\u306E\u6D6E\u304D\u8F2A', Skill$SkillType$AXE_getInstance(), 10, Weapon$SteelAxe_getInstance());
    Weapon$LilithFloatie2_instance = new Weapon('LilithFloatie2', 102, '\u30EA\u30EA\u30B9\u306E\u6D6E\u304D\u8F2A\uFF0B', Skill$SkillType$AXE_getInstance(), 14, Weapon$LilithFloatie_getInstance(), RefineSkill$RefineType$Range1_getInstance());
    Weapon$Noatun_instance = new Weapon('Noatun', 103, '\u30CE\u30FC\u30A2\u30C8\u30A5\u30FC\u30F3', Skill$SkillType$AXE_getInstance(), 16, Weapon$SilverAxe_getInstance());
    new Weapon$Hauteclere();
    new Weapon$Armoads();
    new Weapon$Urvan();
    Weapon$Uror_instance = new Weapon('Uror', 107, '\u30A6\u30EB\u30BA', Skill$SkillType$AXE_getInstance(), 16, Weapon$SilverAxe_getInstance());
    new Weapon$StoutTomahawk();
    new Weapon$SackOGifts();
    new Weapon$SackOGifts2();
    new Weapon$Handbell();
    new Weapon$Handbell2();
    Weapon$IronBow_instance = new Weapon('IronBow', 113, '\u9244\u306E\u5F13', Skill$SkillType$BOW_getInstance(), 4);
    Weapon$SteelBow_instance = new Weapon('SteelBow', 114, '\u92FC\u306E\u5F13', Skill$SkillType$BOW_getInstance(), 6, Weapon$IronBow_getInstance());
    Weapon$SilverBow_instance = new Weapon('SilverBow', 115, '\u9280\u306E\u5F13', Skill$SkillType$BOW_getInstance(), 9, Weapon$SteelBow_getInstance());
    Weapon$SilverBow2_instance = new Weapon('SilverBow2', 116, '\u9280\u306E\u5F13\uFF0B', Skill$SkillType$BOW_getInstance(), 13, Weapon$SilverBow_getInstance(), RefineSkill$RefineType$Range2_getInstance());
    new Weapon$BraveBow();
    new Weapon$BraveBow2();
    new Weapon$KillerBow();
    new Weapon$KillerBow2();
    new Weapon$AssassinsBow();
    new Weapon$AssassinsBow2();
    new Weapon$FiresweepBow();
    new Weapon$FiresweepBow2();
    Weapon$CupidArrow_instance = new Weapon('CupidArrow', 125, '\u30AD\u30E5\u30FC\u30D4\u30C3\u30C9\u306E\u77E2', Skill$SkillType$BOW_getInstance(), 8, Weapon$SteelBow_getInstance());
    Weapon$CupidArrow2_instance = new Weapon('CupidArrow2', 126, '\u30AD\u30E5\u30FC\u30D4\u30C3\u30C9\u306E\u77E2\uFF0B', Skill$SkillType$BOW_getInstance(), 12, Weapon$CupidArrow_getInstance(), RefineSkill$RefineType$Range2_getInstance());
    new Weapon$RefreshingBolt();
    new Weapon$RefreshingBolt2();
    Weapon$ClarissesBow_instance = new Weapon('ClarissesBow', 129, '\u30AF\u30E9\u30A4\u30CD\u306E\u5F13', Skill$SkillType$BOW_getInstance(), 7, Weapon$SteelBow_getInstance());
    Weapon$ClarissesBow2_instance = new Weapon('ClarissesBow2', 130, '\u30AF\u30E9\u30A4\u30CD\u306E\u5F13\uFF0B', Skill$SkillType$BOW_getInstance(), 11, Weapon$ClarissesBow_getInstance(), RefineSkill$RefineType$Range2_getInstance());
    new Weapon$SlayingBow();
    new Weapon$SlayingBow2();
    new Weapon$Parthia();
    Weapon$FujinYumi_instance = new Weapon('FujinYumi', 134, '\u98A8\u795E\u5F13', Skill$SkillType$BOW_getInstance(), 14, Weapon$SilverBow_getInstance(), RefineSkill$RefineType$Range2_getInstance());
    Weapon$Nidhogg_instance = new Weapon('Nidhogg', 135, '\u30CB\u30FC\u30BA\u30D8\u30C3\u30B0', Skill$SkillType$BOW_getInstance(), 14, Weapon$SilverBow_getInstance());
    new Weapon$Mulagir();
    Weapon$MonstrousBow_instance = new Weapon('MonstrousBow', 137, '\u602A\u7269\u306E\u5F13', Skill$SkillType$BOW_getInstance(), 8, Weapon$SteelBow_getInstance());
    Weapon$MonstrousBow2_instance = new Weapon('MonstrousBow2', 138, '\u602A\u7269\u306E\u5F13\uFF0B', Skill$SkillType$BOW_getInstance(), 12, Weapon$MonstrousBow_getInstance(), RefineSkill$RefineType$Range2_getInstance());
    Weapon$IronDagger_instance = new Weapon('IronDagger', 139, '\u9244\u306E\u6697\u5668', Skill$SkillType$DAGGER_getInstance(), 3);
    Weapon$SteelDagger_instance = new Weapon('SteelDagger', 140, '\u92FC\u306E\u6697\u5668', Skill$SkillType$DAGGER_getInstance(), 5, Weapon$IronDagger_getInstance());
    Weapon$SilverDagger_instance = new Weapon('SilverDagger', 141, '\u9280\u306E\u6697\u5668', Skill$SkillType$DAGGER_getInstance(), 7, Weapon$SteelDagger_getInstance());
    Weapon$SilverDagger2_instance = new Weapon('SilverDagger2', 142, '\u9280\u306E\u6697\u5668\uFF0B', Skill$SkillType$DAGGER_getInstance(), 10, Weapon$SilverDagger_getInstance(), RefineSkill$RefineType$Range2_getInstance());
    Weapon$RogueDagger_instance = new Weapon('RogueDagger', 143, '\u76D7\u8CCA\u306E\u6697\u5668', Skill$SkillType$DAGGER_getInstance(), 4, Weapon$SteelDagger_getInstance());
    Weapon$RogueDagger2_instance = new Weapon('RogueDagger2', 144, '\u76D7\u8CCA\u306E\u6697\u5668\uFF0B', Skill$SkillType$DAGGER_getInstance(), 7, Weapon$RogueDagger_getInstance(), RefineSkill$RefineType$Range2_getInstance());
    Weapon$SmokeDagger_instance = new Weapon('SmokeDagger', 145, '\u7D2B\u7159\u306E\u6697\u5668', Skill$SkillType$DAGGER_getInstance(), 6, Weapon$SteelDagger_getInstance());
    Weapon$SmokeDagger2_instance = new Weapon('SmokeDagger2', 146, '\u7D2B\u7159\u306E\u6697\u5668\uFF0B', Skill$SkillType$DAGGER_getInstance(), 9, Weapon$SmokeDagger_getInstance(), RefineSkill$RefineType$Range2_getInstance());
    new Weapon$PoisonDagger();
    new Weapon$PoisonDagger2();
    new Weapon$Seashell();
    new Weapon$Seashell2();
    Weapon$DancersFan_instance = new Weapon('DancersFan', 151, '\u821E\u8E0F\u796D\u306E\u6247\u5B50', Skill$SkillType$DAGGER_getInstance(), 7, Weapon$SteelDagger_getInstance());
    Weapon$DancersFan2_instance = new Weapon('DancersFan2', 152, '\u821E\u8E0F\u796D\u306E\u6247\u5B50\uFF0B', Skill$SkillType$DAGGER_getInstance(), 10, Weapon$DancersFan_getInstance(), RefineSkill$RefineType$Range2_getInstance());
    new Weapon$DeathlyDagger();
    new Weapon$KittyPaddle();
    new Weapon$KittyPaddle2();
    Weapon$Assault_instance = new Weapon('Assault', 156, '\u30A2\u30B5\u30EB\u30C8', Skill$SkillType$STAFF_getInstance(), 10);
    new Weapon$Absorb();
    new Weapon$Absorb2();
    Weapon$Candlelight_instance = new Weapon('Candlelight', 159, '\u30AD\u30E3\u30F3\u30C9\u30EB\u30B5\u30FC\u30D3\u30B9', Skill$SkillType$STAFF_getInstance(), 7, Weapon$Assault_getInstance());
    Weapon$Candlelight2_instance = new Weapon('Candlelight2', 160, '\u30AD\u30E3\u30F3\u30C9\u30EB\u30B5\u30FC\u30D3\u30B9\uFF0B', Skill$SkillType$STAFF_getInstance(), 11, Weapon$Assault_getInstance(), RefineSkill$RefineType$Staff_getInstance());
    Weapon$Gravity_instance = new Weapon('Gravity', 161, '\u30B0\u30E9\u30D3\u30C6\u30A3', Skill$SkillType$STAFF_getInstance(), 7, Weapon$Assault_getInstance());
    Weapon$Gravity2_instance = new Weapon('Gravity2', 162, '\u30B0\u30E9\u30D3\u30C6\u30A3\uFF0B', Skill$SkillType$STAFF_getInstance(), 10, Weapon$Gravity_getInstance(), RefineSkill$RefineType$Staff_getInstance());
    Weapon$Fear_instance = new Weapon('Fear', 163, '\u30D5\u30A3\u30A2\u30FC', Skill$SkillType$STAFF_getInstance(), 5, Weapon$Assault_getInstance());
    Weapon$Fear2_instance = new Weapon('Fear2', 164, '\u30D5\u30A3\u30A2\u30FC\uFF0B', Skill$SkillType$STAFF_getInstance(), 12, Weapon$Fear_getInstance(), RefineSkill$RefineType$Staff_getInstance());
    Weapon$Slow_instance = new Weapon('Slow', 165, '\u30B9\u30ED\u30A6', Skill$SkillType$STAFF_getInstance(), 5, Weapon$Assault_getInstance());
    Weapon$Slow2_instance = new Weapon('Slow2', 166, '\u30B9\u30ED\u30A6\uFF0B', Skill$SkillType$STAFF_getInstance(), 12, Weapon$Slow_getInstance(), RefineSkill$RefineType$Staff_getInstance());
    Weapon$Panic_instance = new Weapon('Panic', 167, '\u30D1\u30CB\u30C3\u30AF', Skill$SkillType$STAFF_getInstance(), 6, Weapon$Assault_getInstance());
    Weapon$Panic2_instance = new Weapon('Panic2', 168, '\u30D1\u30CB\u30C3\u30AF\uFF0B', Skill$SkillType$STAFF_getInstance(), 11, Weapon$Panic_getInstance(), RefineSkill$RefineType$Staff_getInstance());
    new Weapon$Pain();
    new Weapon$Pain2();
    Weapon$Flux_instance = new Weapon('Flux', 171, '\u30DF\u30A3\u30EB', Skill$SkillType$RTOME_getInstance(), 4);
    Weapon$Fire_instance = new Weapon('Fire', 172, '\u30D5\u30A1\u30A4\u30A2\u30FC', Skill$SkillType$RTOME_getInstance(), 4);
    Weapon$Ruin_instance = new Weapon('Ruin', 173, '\u30EB\u30A4\u30F3', Skill$SkillType$RTOME_getInstance(), 6, Weapon$Flux_getInstance());
    Weapon$Elfire_instance = new Weapon('Elfire', 174, '\u30A8\u30EB\u30D5\u30A1\u30A4\u30A2\u30FC', Skill$SkillType$RTOME_getInstance(), 6, Weapon$Fire_getInstance());
    new Weapon$Rauorwolf();
    new Weapon$Rauorwolf2();
    new Weapon$KeenRauorwolf2();
    new Weapon$Rauorraven();
    new Weapon$Rauorraven2();
    new Weapon$Rauorblade();
    new Weapon$Rauorblade2();
    Weapon$Rauorowl_instance = new Weapon('Rauorowl', 182, '\u30E9\u30A6\u30A2\u30A2\u30A6\u30EB', Skill$SkillType$RTOME_getInstance(), 6, Weapon$Elfire_getInstance());
    Weapon$Rauorowl2_instance = new Weapon('Rauorowl2', 183, '\u30E9\u30A6\u30A2\u30A2\u30A6\u30EB\uFF0B', Skill$SkillType$RTOME_getInstance(), 10, Weapon$Rauorowl_getInstance(), RefineSkill$RefineType$Range2_getInstance());
    Weapon$Fenrir_instance = new Weapon('Fenrir', 184, '\u30CE\u30B9\u30D5\u30A7\u30E9\u30FC\u30C8', Skill$SkillType$RTOME_getInstance(), 9, Weapon$Elfire_getInstance());
    Weapon$Fenrir2_instance = new Weapon('Fenrir2', 185, '\u30CE\u30B9\u30D5\u30A7\u30E9\u30FC\u30C8\uFF0B', Skill$SkillType$RTOME_getInstance(), 14, Weapon$Fenrir_getInstance(), RefineSkill$RefineType$Range2_getInstance());
    Weapon$Bolganone_instance = new Weapon('Bolganone', 186, '\u30DC\u30EB\u30AC\u30CE\u30F3', Skill$SkillType$RTOME_getInstance(), 9, Weapon$Elfire_getInstance());
    Weapon$Bolganone2_instance = new Weapon('Bolganone2', 187, '\u30DC\u30EB\u30AC\u30CE\u30F3\uFF0B', Skill$SkillType$RTOME_getInstance(), 14, Weapon$Bolganone_getInstance(), RefineSkill$RefineType$Range2_getInstance());
    Weapon$TomatoTome_instance = new Weapon('TomatoTome', 188, '\u30C8\u30DE\u30C8\u306E\u672C', Skill$SkillType$RTOME_getInstance(), 8, Weapon$Elfire_getInstance());
    Weapon$TomatoTome2_instance = new Weapon('TomatoTome2', 189, '\u30C8\u30DE\u30C8\u306E\u672C\uFF0B', Skill$SkillType$RTOME_getInstance(), 12, Weapon$TomatoTome_getInstance(), RefineSkill$RefineType$Range2_getInstance());
    Weapon$Brynhildr_instance = new Weapon('Brynhildr', 190, '\u30D6\u30EA\u30E5\u30F3\u30D2\u30EB\u30C7', Skill$SkillType$RTOME_getInstance(), 14, Weapon$Bolganone_getInstance());
    Weapon$Cymbeline_instance = new Weapon('Cymbeline', 191, '\u30B7\u30E0\u30D9\u30EA\u30F3', Skill$SkillType$RTOME_getInstance(), 14, Weapon$Bolganone_getInstance());
    new Weapon$Ragnarok();
    Weapon$Valflame_instance = new Weapon('Valflame', 193, '\u30D5\u30A1\u30E9\u30D5\u30EC\u30A4\u30E0', Skill$SkillType$RTOME_getInstance(), 14, Weapon$Bolganone_getInstance());
    Weapon$Grimoire_instance = new Weapon('Grimoire', 194, '\u30B0\u30EA\u30E2\u30EF\u30FC\u30EB', Skill$SkillType$RTOME_getInstance(), 14, Weapon$Bolganone_getInstance());
    new Weapon$Candelabra();
    new Weapon$Candelabra2();
    Weapon$Thunder_instance = new Weapon('Thunder', 197, '\u30B5\u30F3\u30C0\u30FC', Skill$SkillType$BTOME_getInstance(), 4);
    Weapon$Elthunder_instance = new Weapon('Elthunder', 198, '\u30A8\u30EB\u30B5\u30F3\u30C0\u30FC', Skill$SkillType$BTOME_getInstance(), 6, Weapon$Thunder_getInstance());
    new Weapon$Blarwolf();
    new Weapon$Blarwolf2();
    new Weapon$KeenBlarwolf2();
    new Weapon$Blarraven();
    new Weapon$Blarraven2();
    new Weapon$Blarblade();
    new Weapon$Blarblade2();
    Weapon$Blarowl_instance = new Weapon('Blarowl', 206, '\u30D6\u30E9\u30FC\u30A2\u30A6\u30EB', Skill$SkillType$BTOME_getInstance(), 6, Weapon$Elthunder_getInstance());
    Weapon$Blarowl2_instance = new Weapon('Blarowl2', 207, '\u30D6\u30E9\u30FC\u30A2\u30A6\u30EB\uFF0B', Skill$SkillType$BTOME_getInstance(), 10, Weapon$Blarowl_getInstance(), RefineSkill$RefineType$Range2_getInstance());
    Weapon$Thoron_instance = new Weapon('Thoron', 208, '\u30C8\u30ED\u30F3', Skill$SkillType$BTOME_getInstance(), 9, Weapon$Elthunder_getInstance());
    Weapon$Thoron2_instance = new Weapon('Thoron2', 209, '\u30C8\u30ED\u30F3\uFF0B', Skill$SkillType$BTOME_getInstance(), 13, Weapon$Thoron_getInstance(), RefineSkill$RefineType$Range2_getInstance());
    Weapon$BlueEgg_instance = new Weapon('BlueEgg', 210, '\u9752\u306E\u5375', Skill$SkillType$BTOME_getInstance(), 7, Weapon$Elthunder_getInstance());
    Weapon$BlueEgg2_instance = new Weapon('BlueEgg2', 211, '\u9752\u306E\u5375\uFF0B', Skill$SkillType$BTOME_getInstance(), 11, Weapon$BlueEgg_getInstance(), RefineSkill$RefineType$Range2_getInstance());
    Weapon$BlessedBouquet_instance = new Weapon('BlessedBouquet', 212, '\u8056\u306A\u308B\u30D6\u30FC\u30B1', Skill$SkillType$BTOME_getInstance(), 9, Weapon$Elthunder_getInstance());
    Weapon$BlessedBouquet2_instance = new Weapon('BlessedBouquet2', 213, '\u8056\u306A\u308B\u30D6\u30FC\u30B1\uFF0B', Skill$SkillType$BTOME_getInstance(), 12, Weapon$BlessedBouquet_getInstance(), RefineSkill$RefineType$Range2_getInstance());
    Weapon$SealifeTome_instance = new Weapon('SealifeTome', 214, '\u71B1\u5E2F\u9B5A\u306E\u672C', Skill$SkillType$BTOME_getInstance(), 8, Weapon$Elthunder_getInstance());
    Weapon$SealifeTome2_instance = new Weapon('SealifeTome2', 215, '\u71B1\u5E2F\u9B5A\u306E\u672C\uFF0B', Skill$SkillType$BTOME_getInstance(), 12, Weapon$SealifeTome_getInstance(), RefineSkill$RefineType$Range2_getInstance());
    Weapon$DancersScore_instance = new Weapon('DancersScore', 216, '\u821E\u8E0F\u796D\u306E\u697D\u8B5C', Skill$SkillType$BTOME_getInstance(), 8, Weapon$Elthunder_getInstance());
    Weapon$DancersScore2_instance = new Weapon('DancersScore2', 217, '\u821E\u8E0F\u796D\u306E\u697D\u8B5C\uFF0B', Skill$SkillType$BTOME_getInstance(), 12, Weapon$DancersScore_getInstance(), RefineSkill$RefineType$Range2_getInstance());
    Weapon$DarkAura_instance = new Weapon('DarkAura', 218, '\u5171\u9CF4\u30AA\u30FC\u30E9', Skill$SkillType$BTOME_getInstance(), 14, Weapon$Thoron_getInstance());
    new Weapon$Valaskjalf();
    Weapon$Aura_instance = new Weapon('Aura', 220, '\u30AA\u30FC\u30E9', Skill$SkillType$BTOME_getInstance(), 14, Weapon$Thoron_getInstance());
    new Weapon$DireThunder();
    new Weapon$WeirdingTome();
    Weapon$Wind_instance = new Weapon('Wind', 223, '\u30A6\u30A3\u30F3\u30C9', Skill$SkillType$GTOME_getInstance(), 4);
    Weapon$Elwind_instance = new Weapon('Elwind', 224, '\u30A8\u30EB\u30A6\u30A3\u30F3\u30C9', Skill$SkillType$GTOME_getInstance(), 6, Weapon$Wind_getInstance());
    Weapon$Rexcalibur_instance = new Weapon('Rexcalibur', 225, '\u30EC\u30AF\u30B9\u30AB\u30EA\u30D0\u30FC', Skill$SkillType$GTOME_getInstance(), 9, Weapon$Elwind_getInstance());
    Weapon$Rexcalibur2_instance = new Weapon('Rexcalibur2', 226, '\u30EC\u30AF\u30B9\u30AB\u30EA\u30D0\u30FC\uFF0B', Skill$SkillType$GTOME_getInstance(), 14, Weapon$Rexcalibur_getInstance(), RefineSkill$RefineType$Range2_getInstance());
    new Weapon$Gronnwolf();
    new Weapon$Gronnwolf2();
    new Weapon$KeenGronnwolf2();
    new Weapon$Gronnraven();
    new Weapon$Gronnraven2();
    new Weapon$Gronnblade();
    new Weapon$Gronnblade2();
    Weapon$Gronnowl_instance = new Weapon('Gronnowl', 234, '\u30B0\u30EB\u30F3\u30A2\u30A6\u30EB', Skill$SkillType$GTOME_getInstance(), 6, Weapon$Elwind_getInstance());
    Weapon$Gronnowl2_instance = new Weapon('Gronnowl2', 235, '\u30B0\u30EB\u30F3\u30A2\u30A6\u30EB\uFF0B', Skill$SkillType$GTOME_getInstance(), 10, Weapon$Gronnowl_getInstance(), RefineSkill$RefineType$Range2_getInstance());
    new Weapon$GreenEgg();
    new Weapon$GreenEgg2();
    Weapon$HibiscusTome_instance = new Weapon('HibiscusTome', 238, '\u30CF\u30A4\u30D3\u30B9\u30AB\u30B9\u306E\u672C', Skill$SkillType$GTOME_getInstance(), 8, Weapon$Elwind_getInstance());
    Weapon$HibiscusTome2_instance = new Weapon('HibiscusTome2', 239, '\u30CF\u30A4\u30D3\u30B9\u30AB\u30B9\u306E\u672C\uFF0B', Skill$SkillType$GTOME_getInstance(), 12, Weapon$HibiscusTome_getInstance(), RefineSkill$RefineType$Range2_getInstance());
    Weapon$DancersRing_instance = new Weapon('DancersRing', 240, '\u821E\u8E0F\u796D\u306E\u8F2A', Skill$SkillType$GTOME_getInstance(), 8, Weapon$Elwind_getInstance());
    Weapon$DancersRing2_instance = new Weapon('DancersRing2', 241, '\u821E\u8E0F\u796D\u306E\u8F2A\uFF0B', Skill$SkillType$GTOME_getInstance(), 12, Weapon$DancersRing_getInstance(), RefineSkill$RefineType$Range2_getInstance());
    Weapon$Elivagar_instance = new Weapon('Elivagar', 242, '\u30A8\u30EA\u30F4\u30A1\u30FC\u30AC\u30EB', Skill$SkillType$GTOME_getInstance(), 14, Weapon$Rexcalibur_getInstance());
    new Weapon$Excalibur();
    new Weapon$Naga();
    new Weapon$DarkExcalibur();
    new Weapon$DivineNaga();
    Weapon$SpectralTome_instance = new Weapon('SpectralTome', 247, '\u30B4\u30FC\u30B9\u30C8\u306E\u9B54\u5C0E\u66F8', Skill$SkillType$GTOME_getInstance(), 8, Weapon$Elwind_getInstance());
    Weapon$SpectralTome2_instance = new Weapon('SpectralTome2', 248, '\u30B4\u30FC\u30B9\u30C8\u306E\u9B54\u5C0E\u66F8+', Skill$SkillType$GTOME_getInstance(), 12, Weapon$SpectralTome_getInstance(), RefineSkill$RefineType$Range2_getInstance());
    Weapon$FireBreath_instance = new Weapon('FireBreath', 249, '\u706B\u306E\u30D6\u30EC\u30B9', Skill$SkillType$DRAGON_getInstance(), 6);
    Weapon$FireBreath2_instance = new Weapon('FireBreath2', 250, '\u706B\u708E\u306E\u30D6\u30EC\u30B9', Skill$SkillType$DRAGON_getInstance(), 8, Weapon$FireBreath_getInstance());
    new Weapon$LightningBreath();
    new Weapon$LightningBreath2();
    Weapon$Flametongue_instance = new Weapon('Flametongue', 253, '\u707C\u71B1\u306E\u30D6\u30EC\u30B9', Skill$SkillType$DRAGON_getInstance(), 11, Weapon$FireBreath2_getInstance());
    Weapon$Flametongue2_instance = new Weapon('Flametongue2', 254, '\u707C\u71B1\u306E\u30D6\u30EC\u30B9\uFF0B', Skill$SkillType$DRAGON_getInstance(), 15, Weapon$Flametongue_getInstance(), RefineSkill$RefineType$Range1_getInstance());
    Weapon$LightBreath_instance = new Weapon('LightBreath', 255, '\u5149\u306E\u30D6\u30EC\u30B9', Skill$SkillType$DRAGON_getInstance(), 9, Weapon$FireBreath2_getInstance());
    Weapon$LightBreath2_instance = new Weapon('LightBreath2', 256, '\u5149\u306E\u30D6\u30EC\u30B9\uFF0B', Skill$SkillType$DRAGON_getInstance(), 13, Weapon$LightBreath_getInstance(), RefineSkill$RefineType$Range1_getInstance());
    Weapon$DarkBreath_instance = new Weapon('DarkBreath', 257, '\u95C7\u306E\u30D6\u30EC\u30B9', Skill$SkillType$DRAGON_getInstance(), 9, Weapon$FireBreath_getInstance());
    Weapon$DarkBreath2_instance = new Weapon('DarkBreath2', 258, '\u95C7\u306E\u30D6\u30EC\u30B9\uFF0B', Skill$SkillType$DRAGON_getInstance(), 13, Weapon$DarkBreath_getInstance(), RefineSkill$RefineType$Range1_getInstance());
    Weapon$Companion_getInstance();
  }
  Object.defineProperty(Weapon.prototype, 'jp', {
    get: function () {
      return this.jp_6p0ke5$_0;
    }
  });
  Object.defineProperty(Weapon.prototype, 'type', {
    get: function () {
      return this.type_u6thn3$_0;
    }
  });
  Object.defineProperty(Weapon.prototype, 'level', {
    get: function () {
      return this.level_8dohc7$_0;
    }
  });
  Object.defineProperty(Weapon.prototype, 'preSkill', {
    get: function () {
      return this.preSkill_rx80px$_0;
    }
  });
  var Weapon$IronSword_instance;
  function Weapon$IronSword_getInstance() {
    Weapon_initFields();
    return Weapon$IronSword_instance;
  }
  var Weapon$SteelSword_instance;
  function Weapon$SteelSword_getInstance() {
    Weapon_initFields();
    return Weapon$SteelSword_instance;
  }
  var Weapon$SilverSword_instance;
  function Weapon$SilverSword_getInstance() {
    Weapon_initFields();
    return Weapon$SilverSword_instance;
  }
  var Weapon$SilverSword2_instance;
  function Weapon$SilverSword2_getInstance() {
    Weapon_initFields();
    return Weapon$SilverSword2_instance;
  }
  function Weapon$ArmorSlayer() {
    Weapon$ArmorSlayer_instance = this;
    Weapon.call(this, 'ArmorSlayer', 4, '\u30A2\u30FC\u30DE\u30FC\u30AD\u30E9\u30FC', Skill$SkillType$SWORD_getInstance(), 8, Weapon$SteelSword_getInstance());
  }
  Weapon$ArmorSlayer.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.effectiveAgainst_d5yp1f$(MoveType$ARMORED_getInstance(), battleUnit);
  };
  Weapon$ArmorSlayer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArmorSlayer',
    interfaces: [Weapon]
  };
  var Weapon$ArmorSlayer_instance = null;
  function Weapon$ArmorSlayer_getInstance() {
    Weapon_initFields();
    return Weapon$ArmorSlayer_instance;
  }
  function Weapon$ArmorSlayer2() {
    Weapon$ArmorSlayer2_instance = this;
    Weapon.call(this, 'ArmorSlayer2', 5, '\u30A2\u30FC\u30DE\u30FC\u30AD\u30E9\u30FC\uFF0B', Skill$SkillType$SWORD_getInstance(), 12, Weapon$ArmorSlayer_getInstance());
  }
  Weapon$ArmorSlayer2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.effectiveAgainst_d5yp1f$(MoveType$ARMORED_getInstance(), battleUnit);
  };
  Weapon$ArmorSlayer2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArmorSlayer2',
    interfaces: [Weapon]
  };
  var Weapon$ArmorSlayer2_instance = null;
  function Weapon$ArmorSlayer2_getInstance() {
    Weapon_initFields();
    return Weapon$ArmorSlayer2_instance;
  }
  function Weapon$Armorsmasher2() {
    Weapon$Armorsmasher2_instance = this;
    Weapon.call(this, 'Armorsmasher2', 6, '\u30A2\u30FC\u30DE\u30FC\u30AD\u30E9\u30FC\u935B\uFF0B', Skill$SkillType$SWORD_getInstance(), 14, Weapon$ArmorSlayer2_getInstance(), RefineSkill$RefineType$Range1_getInstance());
  }
  Weapon$Armorsmasher2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.effectiveAgainst_d5yp1f$(MoveType$ARMORED_getInstance(), battleUnit);
  };
  Weapon$Armorsmasher2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Armorsmasher2',
    interfaces: [Weapon]
  };
  var Weapon$Armorsmasher2_instance = null;
  function Weapon$Armorsmasher2_getInstance() {
    Weapon_initFields();
    return Weapon$Armorsmasher2_instance;
  }
  function Weapon$BraveSword() {
    Weapon$BraveSword_instance = this;
    Weapon.call(this, 'BraveSword', 7, '\u52C7\u8005\u306E\u5263', Skill$SkillType$SWORD_getInstance(), 5, Weapon$SteelSword_getInstance());
  }
  Weapon$BraveSword.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipBrave_yukhz7$(armedHero, lv);
  };
  Weapon$BraveSword.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.doubleAttack_trfvk0$(battleUnit);
  };
  Weapon$BraveSword.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BraveSword',
    interfaces: [Weapon]
  };
  var Weapon$BraveSword_instance = null;
  function Weapon$BraveSword_getInstance() {
    Weapon_initFields();
    return Weapon$BraveSword_instance;
  }
  function Weapon$BraveSword2() {
    Weapon$BraveSword2_instance = this;
    Weapon.call(this, 'BraveSword2', 8, '\u52C7\u8005\u306E\u5263\uFF0B', Skill$SkillType$SWORD_getInstance(), 8, Weapon$BraveSword_getInstance());
  }
  Weapon$BraveSword2.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipBrave_yukhz7$(armedHero, lv);
  };
  Weapon$BraveSword2.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.doubleAttack_trfvk0$(battleUnit);
  };
  Weapon$BraveSword2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BraveSword2',
    interfaces: [Weapon]
  };
  var Weapon$BraveSword2_instance = null;
  function Weapon$BraveSword2_getInstance() {
    Weapon_initFields();
    return Weapon$BraveSword2_instance;
  }
  function Weapon$RubySword() {
    Weapon$RubySword_instance = this;
    Weapon.call(this, 'RubySword', 9, '\u65ED\u65E5\u306E\u5263', Skill$SkillType$SWORD_getInstance(), 8, Weapon$SteelSword_getInstance());
  }
  Weapon$RubySword.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.colorAdvantage_sv9jhu$(battleUnit, 3);
  };
  Weapon$RubySword.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RubySword',
    interfaces: [Weapon]
  };
  var Weapon$RubySword_instance = null;
  function Weapon$RubySword_getInstance() {
    Weapon_initFields();
    return Weapon$RubySword_instance;
  }
  function Weapon$RubySword2() {
    Weapon$RubySword2_instance = this;
    Weapon.call(this, 'RubySword2', 10, '\u65ED\u65E5\u306E\u5263\uFF0B', Skill$SkillType$SWORD_getInstance(), 12, Weapon$RubySword_getInstance());
  }
  Weapon$RubySword2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.colorAdvantage_sv9jhu$(battleUnit, 3);
  };
  Weapon$RubySword2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RubySword2',
    interfaces: [Weapon]
  };
  var Weapon$RubySword2_instance = null;
  function Weapon$RubySword2_getInstance() {
    Weapon_initFields();
    return Weapon$RubySword2_instance;
  }
  function Weapon$KillingEdge() {
    Weapon$KillingEdge_instance = this;
    Weapon.call(this, 'KillingEdge', 11, '\u30AD\u30EB\u30BD\u30FC\u30C9', Skill$SkillType$SWORD_getInstance(), 7, Weapon$SteelSword_getInstance());
  }
  Weapon$KillingEdge.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipKiller_yukhz7$(armedHero, lv);
  };
  Weapon$KillingEdge.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KillingEdge',
    interfaces: [Weapon]
  };
  var Weapon$KillingEdge_instance = null;
  function Weapon$KillingEdge_getInstance() {
    Weapon_initFields();
    return Weapon$KillingEdge_instance;
  }
  function Weapon$KillingEdge2() {
    Weapon$KillingEdge2_instance = this;
    Weapon.call(this, 'KillingEdge2', 12, '\u30AD\u30EB\u30BD\u30FC\u30C9\uFF0B', Skill$SkillType$SWORD_getInstance(), 11, Weapon$KillingEdge_getInstance());
  }
  Weapon$KillingEdge2.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipKiller_yukhz7$(armedHero, lv);
  };
  Weapon$KillingEdge2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KillingEdge2',
    interfaces: [Weapon]
  };
  var Weapon$KillingEdge2_instance = null;
  function Weapon$KillingEdge2_getInstance() {
    Weapon_initFields();
    return Weapon$KillingEdge2_instance;
  }
  function Weapon$WaoDao() {
    Weapon$WaoDao_instance = this;
    Weapon.call(this, 'WaoDao', 13, '\u502D\u5200', Skill$SkillType$SWORD_getInstance(), 9, Weapon$SteelSword_getInstance());
  }
  Weapon$WaoDao.prototype.specialTriggered_upjsjk$$default = function (battleUnit, damage, lv) {
    return damage + 10 | 0;
  };
  Weapon$WaoDao.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WaoDao',
    interfaces: [Weapon]
  };
  var Weapon$WaoDao_instance = null;
  function Weapon$WaoDao_getInstance() {
    Weapon_initFields();
    return Weapon$WaoDao_instance;
  }
  function Weapon$WaoDao2() {
    Weapon$WaoDao2_instance = this;
    Weapon.call(this, 'WaoDao2', 14, '\u502D\u5200\uFF0B', Skill$SkillType$SWORD_getInstance(), 13, Weapon$WaoDao_getInstance(), RefineSkill$RefineType$Range1_getInstance());
  }
  Weapon$WaoDao2.prototype.specialTriggered_upjsjk$$default = function (battleUnit, damage, lv) {
    return damage + 10 | 0;
  };
  Weapon$WaoDao2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WaoDao2',
    interfaces: [Weapon]
  };
  var Weapon$WaoDao2_instance = null;
  function Weapon$WaoDao2_getInstance() {
    Weapon_initFields();
    return Weapon$WaoDao2_instance;
  }
  function Weapon$Zanbato() {
    Weapon$Zanbato_instance = this;
    Weapon.call(this, 'Zanbato', 15, '\u65AC\u99AC\u5200', Skill$SkillType$SWORD_getInstance(), 10, Weapon$SteelSword_getInstance());
  }
  Weapon$Zanbato.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.effectiveAgainst_d5yp1f$(MoveType$CAVALRY_getInstance(), battleUnit);
  };
  Weapon$Zanbato.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Zanbato',
    interfaces: [Weapon]
  };
  var Weapon$Zanbato_instance = null;
  function Weapon$Zanbato_getInstance() {
    Weapon_initFields();
    return Weapon$Zanbato_instance;
  }
  function Weapon$Zanbato2() {
    Weapon$Zanbato2_instance = this;
    Weapon.call(this, 'Zanbato2', 16, '\u65AC\u99AC\u5200\uFF0B', Skill$SkillType$SWORD_getInstance(), 14, Weapon$Zanbato_getInstance(), RefineSkill$RefineType$Range1_getInstance());
  }
  Weapon$Zanbato2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.effectiveAgainst_d5yp1f$(MoveType$CAVALRY_getInstance(), battleUnit);
  };
  Weapon$Zanbato2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Zanbato2',
    interfaces: [Weapon]
  };
  var Weapon$Zanbato2_instance = null;
  function Weapon$Zanbato2_getInstance() {
    Weapon_initFields();
    return Weapon$Zanbato2_instance;
  }
  function Weapon$SlayingEdge() {
    Weapon$SlayingEdge_instance = this;
    Weapon.call(this, 'SlayingEdge', 17, '\u30AD\u30EB\u30BD\u30FC\u30C9\u935B', Skill$SkillType$SWORD_getInstance(), 10, Weapon$SteelSword_getInstance());
  }
  Weapon$SlayingEdge.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipBrave_yukhz7$(armedHero, lv);
  };
  Weapon$SlayingEdge.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SlayingEdge',
    interfaces: [Weapon]
  };
  var Weapon$SlayingEdge_instance = null;
  function Weapon$SlayingEdge_getInstance() {
    Weapon_initFields();
    return Weapon$SlayingEdge_instance;
  }
  function Weapon$SlayingEdge2() {
    Weapon$SlayingEdge2_instance = this;
    Weapon.call(this, 'SlayingEdge2', 18, '\u30AD\u30EB\u30BD\u30FC\u30C9\u935B\uFF0B', Skill$SkillType$SWORD_getInstance(), 14, Weapon$SlayingEdge_getInstance(), RefineSkill$RefineType$Range1_getInstance());
  }
  Weapon$SlayingEdge2.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipBrave_yukhz7$(armedHero, lv);
  };
  Weapon$SlayingEdge2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SlayingEdge2',
    interfaces: [Weapon]
  };
  var Weapon$SlayingEdge2_instance = null;
  function Weapon$SlayingEdge2_getInstance() {
    Weapon_initFields();
    return Weapon$SlayingEdge2_instance;
  }
  function Weapon$AyrasBlade() {
    Weapon$AyrasBlade_instance = this;
    Weapon.call(this, 'AyrasBlade', 19, '\u77AC\u9583\u30A2\u30A4\u30E9\u306E\u5263', Skill$SkillType$SWORD_getInstance(), 16, Weapon$SilverSword_getInstance());
  }
  Weapon$AyrasBlade.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equip_yukhz7$(this.equipSpd_yukhz7$(armedHero, 3), lv, Weapon.prototype.equip_yukhz7$$default.bind(this));
  };
  Weapon$AyrasBlade.prototype.effectedAttackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.flashingBlade_sv9jhu$(battleUnit, 3);
  };
  Weapon$AyrasBlade.prototype.effectedCounterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.flashingBlade_sv9jhu$(battleUnit, 3);
  };
  Weapon$AyrasBlade.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AyrasBlade',
    interfaces: [Weapon]
  };
  var Weapon$AyrasBlade_instance = null;
  function Weapon$AyrasBlade_getInstance() {
    Weapon_initFields();
    return Weapon$AyrasBlade_instance;
  }
  function Weapon$Folkvangr() {
    Weapon$Folkvangr_instance = this;
    Weapon.call(this, 'Folkvangr', 20, '\u30D5\u30A9\u30EB\u30AF\u30F4\u30A1\u30F3\u30B0', Skill$SkillType$SWORD_getInstance(), 16, Weapon$SilverSword_getInstance());
  }
  Weapon$Folkvangr.prototype.turnStart_sv9jhu$$default = function (battleUnit, lv) {
    return this.defiantAtk_sv9jhu$(battleUnit, 2);
  };
  Weapon$Folkvangr.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Folkvangr',
    interfaces: [Weapon]
  };
  var Weapon$Folkvangr_instance = null;
  function Weapon$Folkvangr_getInstance() {
    Weapon_initFields();
    return Weapon$Folkvangr_instance;
  }
  function Weapon$Falchion() {
    Weapon$Falchion_instance = this;
    Weapon.call(this, 'Falchion', 21, '\u30D5\u30A1\u30EB\u30B7\u30AA\u30F3', Skill$SkillType$SWORD_getInstance(), 16, Weapon$SilverSword_getInstance());
  }
  Weapon$Falchion.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.effectiveAgainst_58hff6$(WeaponType$DRAGON_getInstance(), battleUnit);
  };
  Weapon$Falchion.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Falchion',
    interfaces: [Weapon]
  };
  var Weapon$Falchion_instance = null;
  function Weapon$Falchion_getInstance() {
    Weapon_initFields();
    return Weapon$Falchion_instance;
  }
  function Weapon$BindingBlade() {
    Weapon$BindingBlade_instance = this;
    Weapon.call(this, 'BindingBlade', 22, '\u5C01\u5370\u306E\u5263', Skill$SkillType$SWORD_getInstance(), 16, Weapon$SilverSword_getInstance());
  }
  Weapon$BindingBlade.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.blowDef_sv9jhu$(this.blowRes_sv9jhu$(battleUnit, 2), 2);
  };
  Weapon$BindingBlade.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BindingBlade',
    interfaces: [Weapon]
  };
  var Weapon$BindingBlade_instance = null;
  function Weapon$BindingBlade_getInstance() {
    Weapon_initFields();
    return Weapon$BindingBlade_instance;
  }
  function Weapon$Durandal() {
    Weapon$Durandal_instance = this;
    Weapon.call(this, 'Durandal', 23, '\u30C7\u30E5\u30E9\u30F3\u30C0\u30EB', Skill$SkillType$SWORD_getInstance(), 16, Weapon$SilverSword_getInstance());
  }
  Weapon$Durandal.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.blowAtk_sv9jhu$(battleUnit, 4);
  };
  Weapon$Durandal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Durandal',
    interfaces: [Weapon]
  };
  var Weapon$Durandal_instance = null;
  function Weapon$Durandal_getInstance() {
    Weapon_initFields();
    return Weapon$Durandal_instance;
  }
  function Weapon$SolKatti() {
    Weapon$SolKatti_instance = this;
    Weapon.call(this, 'SolKatti', 24, '\u30BD\u30FC\u30EB\u30FB\u30AB\u30C6\u30A3', Skill$SkillType$SWORD_getInstance(), 16, Weapon$SilverSword_getInstance(), RefineSkill$RefineType$Range1_getInstance());
  }
  Weapon$SolKatti.prototype.attackPlan_p6uegp$$default = function (fightPlan, lv) {
    return this.desperation_p6uegp$(fightPlan, 2);
  };
  Weapon$SolKatti.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SolKatti',
    interfaces: [Weapon]
  };
  var Weapon$SolKatti_instance = null;
  function Weapon$SolKatti_getInstance() {
    Weapon_initFields();
    return Weapon$SolKatti_instance;
  }
  function Weapon$Yato() {
    Weapon$Yato_instance = this;
    Weapon.call(this, 'Yato', 25, '\u591C\u5200\u795E', Skill$SkillType$SWORD_getInstance(), 16, Weapon$SilverSword_getInstance());
  }
  Weapon$Yato.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.blowSpd_sv9jhu$(battleUnit, 4);
  };
  Weapon$Yato.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Yato',
    interfaces: [Weapon]
  };
  var Weapon$Yato_instance = null;
  function Weapon$Yato_getInstance() {
    Weapon_initFields();
    return Weapon$Yato_instance;
  }
  function Weapon$Raijinto() {
    Weapon$Raijinto_instance = this;
    Weapon.call(this, 'Raijinto', 26, '\u96F7\u795E\u5200', Skill$SkillType$SWORD_getInstance(), 16, Weapon$SilverSword_getInstance());
  }
  Weapon$Raijinto.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.counterAllRange_trfvk0$(battleUnit);
  };
  Weapon$Raijinto.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Raijinto',
    interfaces: [Weapon]
  };
  var Weapon$Raijinto_instance = null;
  function Weapon$Raijinto_getInstance() {
    Weapon_initFields();
    return Weapon$Raijinto_instance;
  }
  var Weapon$Sieglinde_instance;
  function Weapon$Sieglinde_getInstance() {
    Weapon_initFields();
    return Weapon$Sieglinde_instance;
  }
  function Weapon$Tyrfing() {
    Weapon$Tyrfing_instance = this;
    Weapon.call(this, 'Tyrfing', 28, '\u30C6\u30A3\u30EB\u30D5\u30A3\u30F3\u30B0', Skill$SkillType$SWORD_getInstance(), 16, Weapon$SilverSword_getInstance());
  }
  Weapon$Tyrfing.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    if (battleUnit.hp <= (battleUnit.armedHero.maxHp / 2 | 0)) {
      battleUnit.defEffect = battleUnit.defEffect + 4 | 0;
    }
    return battleUnit;
  };
  Weapon$Tyrfing.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Tyrfing',
    interfaces: [Weapon]
  };
  var Weapon$Tyrfing_instance = null;
  function Weapon$Tyrfing_getInstance() {
    Weapon_initFields();
    return Weapon$Tyrfing_instance;
  }
  function Weapon$Mystletainn() {
    Weapon$Mystletainn_instance = this;
    Weapon.call(this, 'Mystletainn', 29, '\u30DF\u30B9\u30C8\u30EB\u30C6\u30A3\u30F3', Skill$SkillType$SWORD_getInstance(), 16, Weapon$SilverSword_getInstance(), RefineSkill$RefineType$Range1_getInstance());
  }
  Weapon$Mystletainn.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipKiller_yukhz7$(armedHero, lv);
  };
  Weapon$Mystletainn.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mystletainn',
    interfaces: [Weapon]
  };
  var Weapon$Mystletainn_instance = null;
  function Weapon$Mystletainn_getInstance() {
    Weapon_initFields();
    return Weapon$Mystletainn_instance;
  }
  var Weapon$Eckesachs_instance;
  function Weapon$Eckesachs_getInstance() {
    Weapon_initFields();
    return Weapon$Eckesachs_instance;
  }
  function Weapon$Siegfried() {
    Weapon$Siegfried_instance = this;
    Weapon.call(this, 'Siegfried', 31, '\u30B8\u30FC\u30AF\u30D5\u30EA\u30FC\u30C8', Skill$SkillType$SWORD_getInstance(), 16, Weapon$SilverSword_getInstance());
  }
  Weapon$Siegfried.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.counterAllRange_trfvk0$(battleUnit);
  };
  Weapon$Siegfried.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Siegfried',
    interfaces: [Weapon]
  };
  var Weapon$Siegfried_instance = null;
  function Weapon$Siegfried_getInstance() {
    Weapon_initFields();
    return Weapon$Siegfried_instance;
  }
  function Weapon$Ragnell() {
    Weapon$Ragnell_instance = this;
    Weapon.call(this, 'Ragnell', 32, '\u30E9\u30B0\u30CD\u30EB', Skill$SkillType$SWORD_getInstance(), 16, Weapon$SilverSword_getInstance());
  }
  Weapon$Ragnell.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.counterAllRange_trfvk0$(battleUnit);
  };
  Weapon$Ragnell.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Ragnell',
    interfaces: [Weapon]
  };
  var Weapon$Ragnell_instance = null;
  function Weapon$Ragnell_getInstance() {
    Weapon_initFields();
    return Weapon$Ragnell_instance;
  }
  function Weapon$BlazingDurandal() {
    Weapon$BlazingDurandal_instance = this;
    Weapon.call(this, 'BlazingDurandal', 33, '\u70C8\u5263\u30C7\u30E5\u30E9\u30F3\u30C0\u30EB', Skill$SkillType$SWORD_getInstance(), 16, Weapon$SilverSword_getInstance());
  }
  Weapon$BlazingDurandal.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equip_yukhz7$(this.equipAtk_yukhz7$(armedHero, 3), lv, Weapon.prototype.equip_yukhz7$$default.bind(this));
  };
  Weapon$BlazingDurandal.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.heavyBlade_sv9jhu$(battleUnit, 3);
  };
  Weapon$BlazingDurandal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlazingDurandal',
    interfaces: [Weapon]
  };
  var Weapon$BlazingDurandal_instance = null;
  function Weapon$BlazingDurandal_getInstance() {
    Weapon_initFields();
    return Weapon$BlazingDurandal_instance;
  }
  function Weapon$Amiti() {
    Weapon$Amiti_instance = this;
    Weapon.call(this, 'Amiti', 34, '\u30A2\u30DF\u30FC\u30C6', Skill$SkillType$SWORD_getInstance(), 11, Weapon$SilverSword_getInstance());
  }
  Weapon$Amiti.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipBrave_yukhz7$(this.equipSpd_yukhz7$(armedHero, 3), lv);
  };
  Weapon$Amiti.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.doubleAttack_trfvk0$(battleUnit);
  };
  Weapon$Amiti.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Amiti',
    interfaces: [Weapon]
  };
  var Weapon$Amiti_instance = null;
  function Weapon$Amiti_getInstance() {
    Weapon_initFields();
    return Weapon$Amiti_instance;
  }
  function Weapon$Alondite() {
    Weapon$Alondite_instance = this;
    Weapon.call(this, 'Alondite', 35, '\u30A8\u30BF\u30EB\u30C9', Skill$SkillType$SWORD_getInstance(), 16, Weapon$SilverSword_getInstance());
  }
  Weapon$Alondite.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.counterAllRange_trfvk0$(battleUnit);
  };
  Weapon$Alondite.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Alondite',
    interfaces: [Weapon]
  };
  var Weapon$Alondite_instance = null;
  function Weapon$Alondite_getInstance() {
    Weapon_initFields();
    return Weapon$Alondite_instance;
  }
  function Weapon$DivineTyrfing() {
    Weapon$DivineTyrfing_instance = this;
    Weapon.call(this, 'DivineTyrfing', 36, '\u8056\u5263\u30C6\u30A3\u30EB\u30D5\u30A3\u30F3\u30B0', Skill$SkillType$SWORD_getInstance(), 16, Weapon$SilverSword_getInstance());
  }
  Weapon$DivineTyrfing.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equip_yukhz7$(this.equipRes_yukhz7$(armedHero, 3), lv, Weapon.prototype.equip_yukhz7$$default.bind(this));
  };
  Weapon$DivineTyrfing.prototype.prevent_w6mj9q$$default = function (battleUnit, damage, results, lv) {
    return results.isEmpty() && ensureNotNull(battleUnit.enemy).armedHero.effectiveRange === 2 && ensureNotNull(battleUnit.enemy).armedHero.isMagicWeapon() ? damage - (damage / 2 | 0) | 0 : damage;
  };
  Weapon$DivineTyrfing.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DivineTyrfing',
    interfaces: [Weapon]
  };
  var Weapon$DivineTyrfing_instance = null;
  function Weapon$DivineTyrfing_getInstance() {
    Weapon_initFields();
    return Weapon$DivineTyrfing_instance;
  }
  function Weapon$RegalBlade() {
    Weapon$RegalBlade_instance = this;
    Weapon.call(this, 'RegalBlade', 37, '\u30EA\u30AC\u30EB\u30D6\u30EC\u30A4\u30C9', Skill$SkillType$SWORD_getInstance(), 16, Weapon$SilverSword_getInstance());
  }
  Weapon$RegalBlade.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.enemyFullHpBonus_sv9jhu$(battleUnit, lv * 2 | 0);
  };
  Weapon$RegalBlade.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RegalBlade',
    interfaces: [Weapon]
  };
  var Weapon$RegalBlade_instance = null;
  function Weapon$RegalBlade_getInstance() {
    Weapon_initFields();
    return Weapon$RegalBlade_instance;
  }
  function Weapon$ResoluteBlade() {
    Weapon$ResoluteBlade_instance = this;
    Weapon.call(this, 'ResoluteBlade', 38, '\u6C17\u92ED\u30EF\u30E6\u306E\u5263', Skill$SkillType$SWORD_getInstance(), 16, Weapon$WaoDao_getInstance());
  }
  Weapon$ResoluteBlade.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equip_yukhz7$(this.equipAtk_yukhz7$(armedHero, 3), lv, Weapon.prototype.equip_yukhz7$$default.bind(this));
  };
  Weapon$ResoluteBlade.prototype.specialTriggered_upjsjk$$default = function (battleUnit, damage, lv) {
    return damage + 10 | 0;
  };
  Weapon$ResoluteBlade.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ResoluteBlade',
    interfaces: [Weapon]
  };
  var Weapon$ResoluteBlade_instance = null;
  function Weapon$ResoluteBlade_getInstance() {
    Weapon_initFields();
    return Weapon$ResoluteBlade_instance;
  }
  function Weapon$Audhulma() {
    Weapon$Audhulma_instance = this;
    Weapon.call(this, 'Audhulma', 39, '\u30A2\u30A6\u30C9\u30E0\u30E9', Skill$SkillType$SWORD_getInstance(), 16, Weapon$SilverSword_getInstance());
  }
  Weapon$Audhulma.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipKiller_yukhz7$(this.equipRes_yukhz7$(armedHero, 5), lv);
  };
  Weapon$Audhulma.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Audhulma',
    interfaces: [Weapon]
  };
  var Weapon$Audhulma_instance = null;
  function Weapon$Audhulma_getInstance() {
    Weapon_initFields();
    return Weapon$Audhulma_instance;
  }
  function Weapon$DarkGreatsword() {
    Weapon$DarkGreatsword_instance = this;
    Weapon.call(this, 'DarkGreatsword', 40, '\u9ED2\u304D\u8840\u306E\u5927\u5263', Skill$SkillType$SWORD_getInstance(), 16, Weapon$SilverSword_getInstance());
  }
  Weapon$DarkGreatsword.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.blowSpd_sv9jhu$(this.blowAtk_sv9jhu$(battleUnit, 4), 4);
  };
  Weapon$DarkGreatsword.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DarkGreatsword',
    interfaces: [Weapon]
  };
  var Weapon$DarkGreatsword_instance = null;
  function Weapon$DarkGreatsword_getInstance() {
    Weapon_initFields();
    return Weapon$DarkGreatsword_instance;
  }
  function Weapon$FiresweepSword() {
    Weapon$FiresweepSword_instance = this;
    Weapon.call(this, 'FiresweepSword', 41, '\u706B\u8599\u304E\u306E\u69CD', Skill$SkillType$SWORD_getInstance(), 11, Weapon$SteelSword_getInstance());
  }
  Weapon$FiresweepSword.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.disableEachCounter_sv9jhu$(battleUnit, 0);
  };
  Weapon$FiresweepSword.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FiresweepSword',
    interfaces: [Weapon]
  };
  var Weapon$FiresweepSword_instance = null;
  function Weapon$FiresweepSword_getInstance() {
    Weapon_initFields();
    return Weapon$FiresweepSword_instance;
  }
  function Weapon$FiresweepSword2() {
    Weapon$FiresweepSword2_instance = this;
    Weapon.call(this, 'FiresweepSword2', 42, '\u706B\u8599\u304E\u306E\u69CD\uFF0B', Skill$SkillType$SWORD_getInstance(), 15, Weapon$FiresweepSword_getInstance());
  }
  Weapon$FiresweepSword2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.disableEachCounter_sv9jhu$(battleUnit, 0);
  };
  Weapon$FiresweepSword2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FiresweepSword2',
    interfaces: [Weapon]
  };
  var Weapon$FiresweepSword2_instance = null;
  function Weapon$FiresweepSword2_getInstance() {
    Weapon_initFields();
    return Weapon$FiresweepSword2_instance;
  }
  var Weapon$IronLance_instance;
  function Weapon$IronLance_getInstance() {
    Weapon_initFields();
    return Weapon$IronLance_instance;
  }
  var Weapon$SteelLance_instance;
  function Weapon$SteelLance_getInstance() {
    Weapon_initFields();
    return Weapon$SteelLance_instance;
  }
  var Weapon$SilverLance_instance;
  function Weapon$SilverLance_getInstance() {
    Weapon_initFields();
    return Weapon$SilverLance_instance;
  }
  var Weapon$SilverLance2_instance;
  function Weapon$SilverLance2_getInstance() {
    Weapon_initFields();
    return Weapon$SilverLance2_instance;
  }
  function Weapon$KillerLance() {
    Weapon$KillerLance_instance = this;
    Weapon.call(this, 'KillerLance', 47, '\u30AD\u30E9\u30FC\u30E9\u30F3\u30B9', Skill$SkillType$LANCE_getInstance(), 7, Weapon$SteelLance_getInstance());
  }
  Weapon$KillerLance.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipKiller_yukhz7$(armedHero, lv);
  };
  Weapon$KillerLance.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KillerLance',
    interfaces: [Weapon]
  };
  var Weapon$KillerLance_instance = null;
  function Weapon$KillerLance_getInstance() {
    Weapon_initFields();
    return Weapon$KillerLance_instance;
  }
  function Weapon$KillerLance2() {
    Weapon$KillerLance2_instance = this;
    Weapon.call(this, 'KillerLance2', 48, '\u30AD\u30E9\u30FC\u30E9\u30F3\u30B9\uFF0B', Skill$SkillType$LANCE_getInstance(), 11, Weapon$KillerLance_getInstance());
  }
  Weapon$KillerLance2.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipKiller_yukhz7$(armedHero, lv);
  };
  Weapon$KillerLance2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KillerLance2',
    interfaces: [Weapon]
  };
  var Weapon$KillerLance2_instance = null;
  function Weapon$KillerLance2_getInstance() {
    Weapon_initFields();
    return Weapon$KillerLance2_instance;
  }
  function Weapon$BraveLance() {
    Weapon$BraveLance_instance = this;
    Weapon.call(this, 'BraveLance', 49, '\u52C7\u8005\u306E\u69CD', Skill$SkillType$LANCE_getInstance(), 5, Weapon$SteelLance_getInstance());
  }
  Weapon$BraveLance.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipBrave_yukhz7$(armedHero, lv);
  };
  Weapon$BraveLance.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.doubleAttack_trfvk0$(battleUnit);
  };
  Weapon$BraveLance.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BraveLance',
    interfaces: [Weapon]
  };
  var Weapon$BraveLance_instance = null;
  function Weapon$BraveLance_getInstance() {
    Weapon_initFields();
    return Weapon$BraveLance_instance;
  }
  function Weapon$BraveLance2() {
    Weapon$BraveLance2_instance = this;
    Weapon.call(this, 'BraveLance2', 50, '\u52C7\u8005\u306E\u69CD\uFF0B', Skill$SkillType$LANCE_getInstance(), 8, Weapon$BraveLance_getInstance());
  }
  Weapon$BraveLance2.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipBrave_yukhz7$(armedHero, lv);
  };
  Weapon$BraveLance2.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.doubleAttack_trfvk0$(battleUnit);
  };
  Weapon$BraveLance2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BraveLance2',
    interfaces: [Weapon]
  };
  var Weapon$BraveLance2_instance = null;
  function Weapon$BraveLance2_getInstance() {
    Weapon_initFields();
    return Weapon$BraveLance2_instance;
  }
  function Weapon$SapphireLance() {
    Weapon$SapphireLance_instance = this;
    Weapon.call(this, 'SapphireLance', 51, '\u84BC\u6D77\u306E\u69CD', Skill$SkillType$LANCE_getInstance(), 8, Weapon$SteelLance_getInstance());
  }
  Weapon$SapphireLance.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.colorAdvantage_sv9jhu$(battleUnit, 3);
  };
  Weapon$SapphireLance.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SapphireLance',
    interfaces: [Weapon]
  };
  var Weapon$SapphireLance_instance = null;
  function Weapon$SapphireLance_getInstance() {
    Weapon_initFields();
    return Weapon$SapphireLance_instance;
  }
  function Weapon$SapphireLance2() {
    Weapon$SapphireLance2_instance = this;
    Weapon.call(this, 'SapphireLance2', 52, '\u84BC\u6D77\u306E\u69CD\uFF0B', Skill$SkillType$LANCE_getInstance(), 12, Weapon$SapphireLance_getInstance());
  }
  Weapon$SapphireLance2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.colorAdvantage_sv9jhu$(battleUnit, 3);
  };
  Weapon$SapphireLance2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SapphireLance2',
    interfaces: [Weapon]
  };
  var Weapon$SapphireLance2_instance = null;
  function Weapon$SapphireLance2_getInstance() {
    Weapon_initFields();
    return Weapon$SapphireLance2_instance;
  }
  function Weapon$HeavySpear() {
    Weapon$HeavySpear_instance = this;
    Weapon.call(this, 'HeavySpear', 53, '\u8CAB\u304D\u306E\u69CD', Skill$SkillType$LANCE_getInstance(), 8, Weapon$SteelLance_getInstance());
  }
  Weapon$HeavySpear.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.effectiveAgainst_d5yp1f$(MoveType$ARMORED_getInstance(), battleUnit);
  };
  Weapon$HeavySpear.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HeavySpear',
    interfaces: [Weapon]
  };
  var Weapon$HeavySpear_instance = null;
  function Weapon$HeavySpear_getInstance() {
    Weapon_initFields();
    return Weapon$HeavySpear_instance;
  }
  function Weapon$HeavySpear2() {
    Weapon$HeavySpear2_instance = this;
    Weapon.call(this, 'HeavySpear2', 54, '\u8CAB\u304D\u306E\u69CD\uFF0B', Skill$SkillType$LANCE_getInstance(), 12, Weapon$HeavySpear_getInstance());
  }
  Weapon$HeavySpear2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.effectiveAgainst_d5yp1f$(MoveType$ARMORED_getInstance(), battleUnit);
  };
  Weapon$HeavySpear2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HeavySpear2',
    interfaces: [Weapon]
  };
  var Weapon$HeavySpear2_instance = null;
  function Weapon$HeavySpear2_getInstance() {
    Weapon_initFields();
    return Weapon$HeavySpear2_instance;
  }
  function Weapon$SlayingSpear2() {
    Weapon$SlayingSpear2_instance = this;
    Weapon.call(this, 'SlayingSpear2', 55, '\u8CAB\u304D\u306E\u69CD\u935B\uFF0B', Skill$SkillType$LANCE_getInstance(), 14, Weapon$HeavySpear2_getInstance(), RefineSkill$RefineType$Range1_getInstance());
  }
  Weapon$SlayingSpear2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.effectiveAgainst_d5yp1f$(MoveType$ARMORED_getInstance(), battleUnit);
  };
  Weapon$SlayingSpear2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SlayingSpear2',
    interfaces: [Weapon]
  };
  var Weapon$SlayingSpear2_instance = null;
  function Weapon$SlayingSpear2_getInstance() {
    Weapon_initFields();
    return Weapon$SlayingSpear2_instance;
  }
  function Weapon$CarrotLance() {
    Weapon$CarrotLance_instance = this;
    Weapon.call(this, 'CarrotLance', 56, '\u30CB\u30F3\u30B8\u30F3\u306E\u69CD', Skill$SkillType$LANCE_getInstance(), 9, Weapon$SteelLance_getInstance());
  }
  Weapon$CarrotLance.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.attackHeal_sv9jhu$(battleUnit, 4);
  };
  Weapon$CarrotLance.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CarrotLance',
    interfaces: [Weapon]
  };
  var Weapon$CarrotLance_instance = null;
  function Weapon$CarrotLance_getInstance() {
    Weapon_initFields();
    return Weapon$CarrotLance_instance;
  }
  function Weapon$CarrotLance2() {
    Weapon$CarrotLance2_instance = this;
    Weapon.call(this, 'CarrotLance2', 57, '\u30CB\u30F3\u30B8\u30F3\u306E\u69CD\uFF0B', Skill$SkillType$LANCE_getInstance(), 13, Weapon$CarrotLance_getInstance(), RefineSkill$RefineType$Range1_getInstance());
  }
  Weapon$CarrotLance2.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.attackHeal_sv9jhu$(battleUnit, 4);
  };
  Weapon$CarrotLance2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CarrotLance2',
    interfaces: [Weapon]
  };
  var Weapon$CarrotLance2_instance = null;
  function Weapon$CarrotLance2_getInstance() {
    Weapon_initFields();
    return Weapon$CarrotLance2_instance;
  }
  var Weapon$FirstBite_instance;
  function Weapon$FirstBite_getInstance() {
    Weapon_initFields();
    return Weapon$FirstBite_instance;
  }
  var Weapon$FirstBite2_instance;
  function Weapon$FirstBite2_getInstance() {
    Weapon_initFields();
    return Weapon$FirstBite2_instance;
  }
  function Weapon$FiresweepLance() {
    Weapon$FiresweepLance_instance = this;
    Weapon.call(this, 'FiresweepLance', 60, '\u706B\u8599\u304E\u306E\u69CD', Skill$SkillType$LANCE_getInstance(), 11, Weapon$SteelLance_getInstance());
  }
  Weapon$FiresweepLance.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.disableEachCounter_sv9jhu$(battleUnit, 0);
  };
  Weapon$FiresweepLance.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FiresweepLance',
    interfaces: [Weapon]
  };
  var Weapon$FiresweepLance_instance = null;
  function Weapon$FiresweepLance_getInstance() {
    Weapon_initFields();
    return Weapon$FiresweepLance_instance;
  }
  function Weapon$FiresweepLance2() {
    Weapon$FiresweepLance2_instance = this;
    Weapon.call(this, 'FiresweepLance2', 61, '\u706B\u8599\u304E\u306E\u69CD\uFF0B', Skill$SkillType$LANCE_getInstance(), 15, Weapon$FiresweepLance_getInstance());
  }
  Weapon$FiresweepLance2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.disableEachCounter_sv9jhu$(battleUnit, 0);
  };
  Weapon$FiresweepLance2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FiresweepLance2',
    interfaces: [Weapon]
  };
  var Weapon$FiresweepLance2_instance = null;
  function Weapon$FiresweepLance2_getInstance() {
    Weapon_initFields();
    return Weapon$FiresweepLance2_instance;
  }
  function Weapon$DeftHarpoon() {
    Weapon$DeftHarpoon_instance = this;
    Weapon.call(this, 'DeftHarpoon', 62, '\u9B5A\u3092\u7A81\u3044\u305F\u929B', Skill$SkillType$LANCE_getInstance(), 10, Weapon$SteelLance_getInstance());
  }
  Weapon$DeftHarpoon.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.fullHpBonus_sv9jhu$(battleUnit, 2);
  };
  Weapon$DeftHarpoon.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DeftHarpoon',
    interfaces: [Weapon]
  };
  var Weapon$DeftHarpoon_instance = null;
  function Weapon$DeftHarpoon_getInstance() {
    Weapon_initFields();
    return Weapon$DeftHarpoon_instance;
  }
  function Weapon$DeftHarpoon2() {
    Weapon$DeftHarpoon2_instance = this;
    Weapon.call(this, 'DeftHarpoon2', 63, '\u9B5A\u3092\u7A81\u3044\u305F\u929B\uFF0B', Skill$SkillType$LANCE_getInstance(), 14, Weapon$DeftHarpoon_getInstance(), RefineSkill$RefineType$Range1_getInstance());
  }
  Weapon$DeftHarpoon2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.fullHpBonus_sv9jhu$(battleUnit, 2);
  };
  Weapon$DeftHarpoon2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DeftHarpoon2',
    interfaces: [Weapon]
  };
  var Weapon$DeftHarpoon2_instance = null;
  function Weapon$DeftHarpoon2_getInstance() {
    Weapon_initFields();
    return Weapon$DeftHarpoon2_instance;
  }
  function Weapon$Ridersbane() {
    Weapon$Ridersbane_instance = this;
    Weapon.call(this, 'Ridersbane', 64, '\u30DB\u30FC\u30B9\u30AD\u30E9\u30FC', Skill$SkillType$LANCE_getInstance(), 10, Weapon$SteelLance_getInstance());
  }
  Weapon$Ridersbane.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.effectiveAgainst_d5yp1f$(MoveType$CAVALRY_getInstance(), battleUnit);
  };
  Weapon$Ridersbane.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Ridersbane',
    interfaces: [Weapon]
  };
  var Weapon$Ridersbane_instance = null;
  function Weapon$Ridersbane_getInstance() {
    Weapon_initFields();
    return Weapon$Ridersbane_instance;
  }
  function Weapon$Ridersbane2() {
    Weapon$Ridersbane2_instance = this;
    Weapon.call(this, 'Ridersbane2', 65, '\u30DB\u30FC\u30B9\u30AD\u30E9\u30FC\uFF0B', Skill$SkillType$LANCE_getInstance(), 14, Weapon$Ridersbane_getInstance(), RefineSkill$RefineType$Range1_getInstance());
  }
  Weapon$Ridersbane2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.effectiveAgainst_d5yp1f$(MoveType$CAVALRY_getInstance(), battleUnit);
  };
  Weapon$Ridersbane2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Ridersbane2',
    interfaces: [Weapon]
  };
  var Weapon$Ridersbane2_instance = null;
  function Weapon$Ridersbane2_getInstance() {
    Weapon_initFields();
    return Weapon$Ridersbane2_instance;
  }
  function Weapon$BerkutsLance() {
    Weapon$BerkutsLance_instance = this;
    Weapon.call(this, 'BerkutsLance', 66, '\u30D9\u30EB\u30AF\u30C8\u306E\u69CD', Skill$SkillType$LANCE_getInstance(), 10, Weapon$SteelLance_getInstance());
  }
  Weapon$BerkutsLance.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.blowRes_sv9jhu$(battleUnit, 4);
  };
  Weapon$BerkutsLance.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BerkutsLance',
    interfaces: [Weapon]
  };
  var Weapon$BerkutsLance_instance = null;
  function Weapon$BerkutsLance_getInstance() {
    Weapon_initFields();
    return Weapon$BerkutsLance_instance;
  }
  function Weapon$BerkutsLance2() {
    Weapon$BerkutsLance2_instance = this;
    Weapon.call(this, 'BerkutsLance2', 67, '\u30D9\u30EB\u30AF\u30C8\u306E\u69CD\uFF0B', Skill$SkillType$LANCE_getInstance(), 14, Weapon$BerkutsLance_getInstance(), RefineSkill$RefineType$Range1_getInstance());
  }
  Weapon$BerkutsLance2.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.blowRes_sv9jhu$(battleUnit, 4);
  };
  Weapon$BerkutsLance2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BerkutsLance2',
    interfaces: [Weapon]
  };
  var Weapon$BerkutsLance2_instance = null;
  function Weapon$BerkutsLance2_getInstance() {
    Weapon_initFields();
    return Weapon$BerkutsLance2_instance;
  }
  function Weapon$SlayingLance() {
    Weapon$SlayingLance_instance = this;
    Weapon.call(this, 'SlayingLance', 68, '\u30AD\u30E9\u30FC\u30E9\u30F3\u30B9\u935B', Skill$SkillType$LANCE_getInstance(), 10, Weapon$SteelLance_getInstance());
  }
  Weapon$SlayingLance.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipKiller_yukhz7$(armedHero, lv);
  };
  Weapon$SlayingLance.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SlayingLance',
    interfaces: [Weapon]
  };
  var Weapon$SlayingLance_instance = null;
  function Weapon$SlayingLance_getInstance() {
    Weapon_initFields();
    return Weapon$SlayingLance_instance;
  }
  function Weapon$SlayingLance2() {
    Weapon$SlayingLance2_instance = this;
    Weapon.call(this, 'SlayingLance2', 69, '\u30AD\u30E9\u30FC\u30E9\u30F3\u30B9\u935B\uFF0B', Skill$SkillType$LANCE_getInstance(), 14, Weapon$SlayingLance_getInstance(), RefineSkill$RefineType$Range1_getInstance());
  }
  Weapon$SlayingLance2.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipKiller_yukhz7$(armedHero, lv);
  };
  Weapon$SlayingLance2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SlayingLance2',
    interfaces: [Weapon]
  };
  var Weapon$SlayingLance2_instance = null;
  function Weapon$SlayingLance2_getInstance() {
    Weapon_initFields();
    return Weapon$SlayingLance2_instance;
  }
  var Weapon$Fensalir_instance;
  function Weapon$Fensalir_getInstance() {
    Weapon_initFields();
    return Weapon$Fensalir_instance;
  }
  var Weapon$Siegmund_instance;
  function Weapon$Siegmund_getInstance() {
    Weapon_initFields();
    return Weapon$Siegmund_instance;
  }
  function Weapon$Gradivus() {
    Weapon$Gradivus_instance = this;
    Weapon.call(this, 'Gradivus', 72, '\u30B0\u30E9\u30C7\u30A3\u30A6\u30B9', Skill$SkillType$LANCE_getInstance(), 16, Weapon$SilverLance_getInstance());
  }
  Weapon$Gradivus.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.counterAllRange_trfvk0$(battleUnit);
  };
  Weapon$Gradivus.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Gradivus',
    interfaces: [Weapon]
  };
  var Weapon$Gradivus_instance = null;
  function Weapon$Gradivus_getInstance() {
    Weapon_initFields();
    return Weapon$Gradivus_instance;
  }
  function Weapon$Vidofinir() {
    Weapon$Vidofinir_instance = this;
    Weapon.call(this, 'Vidofinir', 73, '\u30F4\u30A3\u30C9\u30D5\u30CB\u30EB', Skill$SkillType$LANCE_getInstance(), 16, Weapon$SilverLance_getInstance());
  }
  Weapon$Vidofinir.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    var weapon = ensureNotNull(battleUnit.enemy).armedHero.baseHero.weaponType;
    if (weapon === WeaponType$SWORD_getInstance() || weapon === WeaponType$LANCE_getInstance() || weapon === WeaponType$AXE_getInstance()) {
      battleUnit.defEffect = battleUnit.defEffect + 7 | 0;
    }
    return battleUnit;
  };
  Weapon$Vidofinir.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Vidofinir',
    interfaces: [Weapon]
  };
  var Weapon$Vidofinir_instance = null;
  function Weapon$Vidofinir_getInstance() {
    Weapon_initFields();
    return Weapon$Vidofinir_instance;
  }
  function Weapon$CursedLance() {
    Weapon$CursedLance_instance = this;
    Weapon.call(this, 'CursedLance', 74, '\u9B54\u6027\u306E\u69CD', Skill$SkillType$LANCE_getInstance(), 16, Weapon$SilverLance_getInstance());
  }
  Weapon$CursedLance.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipKiller_yukhz7$(this.equipAtk_yukhz7$(this.equipSpd_yukhz7$(armedHero, 2), 2), lv);
  };
  Weapon$CursedLance.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.attackHpLoss_sv9jhu$(battleUnit, 4);
  };
  Weapon$CursedLance.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CursedLance',
    interfaces: [Weapon]
  };
  var Weapon$CursedLance_instance = null;
  function Weapon$CursedLance_getInstance() {
    Weapon_initFields();
    return Weapon$CursedLance_instance;
  }
  function Weapon$Geirskogul() {
    Weapon$Geirskogul_instance = this;
    Weapon.call(this, 'Geirskogul', 75, '\u30B2\u30A4\u30EB\u30B9\u30B1\u30B0\u30EB', Skill$SkillType$LANCE_getInstance(), 16, Weapon$SilverLance_getInstance());
  }
  Weapon$Geirskogul.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equip_yukhz7$(this.equipDef_yukhz7$(armedHero, 3), lv, Weapon.prototype.equip_yukhz7$$default.bind(this));
  };
  Weapon$Geirskogul.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Geirskogul',
    interfaces: [Weapon]
  };
  var Weapon$Geirskogul_instance = null;
  function Weapon$Geirskogul_getInstance() {
    Weapon_initFields();
    return Weapon$Geirskogul_instance;
  }
  function Weapon$Leiptr() {
    Weapon$Leiptr_instance = this;
    Weapon.call(this, 'Leiptr', 76, '\u30EC\u30A4\u30D7\u30C8', Skill$SkillType$LANCE_getInstance(), 16, Weapon$SilverLance_getInstance());
  }
  Weapon$Leiptr.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.counterAllRange_trfvk0$(battleUnit);
  };
  Weapon$Leiptr.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Leiptr',
    interfaces: [Weapon]
  };
  var Weapon$Leiptr_instance = null;
  function Weapon$Leiptr_getInstance() {
    Weapon_initFields();
    return Weapon$Leiptr_instance;
  }
  function Weapon$BrightNaginata() {
    Weapon$BrightNaginata_instance = this;
    Weapon.call(this, 'BrightNaginata', 77, '\u767D\u304D\u8840\u306E\u8599\u5200', Skill$SkillType$LANCE_getInstance(), 16, Weapon$SilverLance_getInstance());
  }
  Weapon$BrightNaginata.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.blowDef_sv9jhu$(this.blowAtk_sv9jhu$(battleUnit, 4), 4);
  };
  Weapon$BrightNaginata.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BrightNaginata',
    interfaces: [Weapon]
  };
  var Weapon$BrightNaginata_instance = null;
  function Weapon$BrightNaginata_getInstance() {
    Weapon_initFields();
    return Weapon$BrightNaginata_instance;
  }
  function Weapon$Tannenboom() {
    Weapon$Tannenboom_instance = this;
    Weapon.call(this, 'Tannenboom', 78, '\u8056\u6A39', Skill$SkillType$LANCE_getInstance(), 10, Weapon$SteelLance_getInstance());
  }
  Weapon$Tannenboom.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.allBonus_sv9jhu$(battleUnit, 2);
  };
  Weapon$Tannenboom.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Tannenboom',
    interfaces: [Weapon]
  };
  var Weapon$Tannenboom_instance = null;
  function Weapon$Tannenboom_getInstance() {
    Weapon_initFields();
    return Weapon$Tannenboom_instance;
  }
  function Weapon$Tannenboom2() {
    Weapon$Tannenboom2_instance = this;
    Weapon.call(this, 'Tannenboom2', 79, '\u8056\u6A39\uFF0B', Skill$SkillType$LANCE_getInstance(), 14, Weapon$Tannenboom_getInstance());
  }
  Weapon$Tannenboom2.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.allBonus_sv9jhu$(battleUnit, 2);
  };
  Weapon$Tannenboom2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Tannenboom2',
    interfaces: [Weapon]
  };
  var Weapon$Tannenboom2_instance = null;
  function Weapon$Tannenboom2_getInstance() {
    Weapon_initFields();
    return Weapon$Tannenboom2_instance;
  }
  var Weapon$IronAxe_instance;
  function Weapon$IronAxe_getInstance() {
    Weapon_initFields();
    return Weapon$IronAxe_instance;
  }
  var Weapon$SteelAxe_instance;
  function Weapon$SteelAxe_getInstance() {
    Weapon_initFields();
    return Weapon$SteelAxe_instance;
  }
  var Weapon$SilverAxe_instance;
  function Weapon$SilverAxe_getInstance() {
    Weapon_initFields();
    return Weapon$SilverAxe_instance;
  }
  var Weapon$SilverAxe2_instance;
  function Weapon$SilverAxe2_getInstance() {
    Weapon_initFields();
    return Weapon$SilverAxe2_instance;
  }
  function Weapon$KillerAxe() {
    Weapon$KillerAxe_instance = this;
    Weapon.call(this, 'KillerAxe', 84, '\u30AD\u30E9\u30FC\u30A2\u30AF\u30B9', Skill$SkillType$AXE_getInstance(), 7, Weapon$SteelAxe_getInstance());
  }
  Weapon$KillerAxe.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipKiller_yukhz7$(armedHero, lv);
  };
  Weapon$KillerAxe.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KillerAxe',
    interfaces: [Weapon]
  };
  var Weapon$KillerAxe_instance = null;
  function Weapon$KillerAxe_getInstance() {
    Weapon_initFields();
    return Weapon$KillerAxe_instance;
  }
  function Weapon$KillerAxe2() {
    Weapon$KillerAxe2_instance = this;
    Weapon.call(this, 'KillerAxe2', 85, '\u30AD\u30E9\u30FC\u30A2\u30AF\u30B9\uFF0B', Skill$SkillType$AXE_getInstance(), 11, Weapon$KillerAxe_getInstance());
  }
  Weapon$KillerAxe2.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipKiller_yukhz7$(armedHero, lv);
  };
  Weapon$KillerAxe2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KillerAxe2',
    interfaces: [Weapon]
  };
  var Weapon$KillerAxe2_instance = null;
  function Weapon$KillerAxe2_getInstance() {
    Weapon_initFields();
    return Weapon$KillerAxe2_instance;
  }
  function Weapon$BraveAxe() {
    Weapon$BraveAxe_instance = this;
    Weapon.call(this, 'BraveAxe', 86, '\u52C7\u8005\u306E\u65A7', Skill$SkillType$AXE_getInstance(), 5, Weapon$SteelAxe_getInstance());
  }
  Weapon$BraveAxe.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipBrave_yukhz7$(armedHero, lv);
  };
  Weapon$BraveAxe.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.doubleAttack_trfvk0$(battleUnit);
  };
  Weapon$BraveAxe.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BraveAxe',
    interfaces: [Weapon]
  };
  var Weapon$BraveAxe_instance = null;
  function Weapon$BraveAxe_getInstance() {
    Weapon_initFields();
    return Weapon$BraveAxe_instance;
  }
  function Weapon$BraveAxe2() {
    Weapon$BraveAxe2_instance = this;
    Weapon.call(this, 'BraveAxe2', 87, '\u52C7\u8005\u306E\u65A7\uFF0B', Skill$SkillType$AXE_getInstance(), 8, Weapon$BraveAxe_getInstance());
  }
  Weapon$BraveAxe2.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipBrave_yukhz7$(armedHero, lv);
  };
  Weapon$BraveAxe2.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.doubleAttack_trfvk0$(battleUnit);
  };
  Weapon$BraveAxe2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BraveAxe2',
    interfaces: [Weapon]
  };
  var Weapon$BraveAxe2_instance = null;
  function Weapon$BraveAxe2_getInstance() {
    Weapon_initFields();
    return Weapon$BraveAxe2_instance;
  }
  function Weapon$Hammer() {
    Weapon$Hammer_instance = this;
    Weapon.call(this, 'Hammer', 88, '\u30CF\u30F3\u30DE\u30FC', Skill$SkillType$AXE_getInstance(), 8, Weapon$SteelAxe_getInstance());
  }
  Weapon$Hammer.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.effectiveAgainst_d5yp1f$(MoveType$ARMORED_getInstance(), battleUnit);
  };
  Weapon$Hammer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Hammer',
    interfaces: [Weapon]
  };
  var Weapon$Hammer_instance = null;
  function Weapon$Hammer_getInstance() {
    Weapon_initFields();
    return Weapon$Hammer_instance;
  }
  function Weapon$Hammer2() {
    Weapon$Hammer2_instance = this;
    Weapon.call(this, 'Hammer2', 89, '\u30CF\u30F3\u30DE\u30FC\uFF0B', Skill$SkillType$AXE_getInstance(), 12, Weapon$Hammer_getInstance());
  }
  Weapon$Hammer2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.effectiveAgainst_d5yp1f$(MoveType$ARMORED_getInstance(), battleUnit);
  };
  Weapon$Hammer2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Hammer2',
    interfaces: [Weapon]
  };
  var Weapon$Hammer2_instance = null;
  function Weapon$Hammer2_getInstance() {
    Weapon_initFields();
    return Weapon$Hammer2_instance;
  }
  function Weapon$SlayingHammer2() {
    Weapon$SlayingHammer2_instance = this;
    Weapon.call(this, 'SlayingHammer2', 90, '\u30CF\u30F3\u30DE\u30FC\u935B\uFF0B', Skill$SkillType$AXE_getInstance(), 14, Weapon$Hammer2_getInstance(), RefineSkill$RefineType$Range1_getInstance());
  }
  Weapon$SlayingHammer2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.effectiveAgainst_d5yp1f$(MoveType$ARMORED_getInstance(), battleUnit);
  };
  Weapon$SlayingHammer2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SlayingHammer2',
    interfaces: [Weapon]
  };
  var Weapon$SlayingHammer2_instance = null;
  function Weapon$SlayingHammer2_getInstance() {
    Weapon_initFields();
    return Weapon$SlayingHammer2_instance;
  }
  function Weapon$EmeraldAxe() {
    Weapon$EmeraldAxe_instance = this;
    Weapon.call(this, 'EmeraldAxe', 91, '\u6DF1\u7DD1\u306E\u65A7', Skill$SkillType$AXE_getInstance(), 8, Weapon$SteelAxe_getInstance());
  }
  Weapon$EmeraldAxe.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.colorAdvantage_sv9jhu$(battleUnit, 3);
  };
  Weapon$EmeraldAxe.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EmeraldAxe',
    interfaces: [Weapon]
  };
  var Weapon$EmeraldAxe_instance = null;
  function Weapon$EmeraldAxe_getInstance() {
    Weapon_initFields();
    return Weapon$EmeraldAxe_instance;
  }
  function Weapon$EmeraldAxe2() {
    Weapon$EmeraldAxe2_instance = this;
    Weapon.call(this, 'EmeraldAxe2', 92, '\u6DF1\u7DD1\u306E\u65A7\uFF0B', Skill$SkillType$AXE_getInstance(), 12, Weapon$EmeraldAxe_getInstance());
  }
  Weapon$EmeraldAxe2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.colorAdvantage_sv9jhu$(battleUnit, 3);
  };
  Weapon$EmeraldAxe2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EmeraldAxe2',
    interfaces: [Weapon]
  };
  var Weapon$EmeraldAxe2_instance = null;
  function Weapon$EmeraldAxe2_getInstance() {
    Weapon_initFields();
    return Weapon$EmeraldAxe2_instance;
  }
  function Weapon$SlayingAxe() {
    Weapon$SlayingAxe_instance = this;
    Weapon.call(this, 'SlayingAxe', 93, '\u30AD\u30E9\u30FC\u30A2\u30AF\u30B9\u935B', Skill$SkillType$AXE_getInstance(), 10, Weapon$SteelAxe_getInstance());
  }
  Weapon$SlayingAxe.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipKiller_yukhz7$(armedHero, lv);
  };
  Weapon$SlayingAxe.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SlayingAxe',
    interfaces: [Weapon]
  };
  var Weapon$SlayingAxe_instance = null;
  function Weapon$SlayingAxe_getInstance() {
    Weapon_initFields();
    return Weapon$SlayingAxe_instance;
  }
  function Weapon$SlayingAxe2() {
    Weapon$SlayingAxe2_instance = this;
    Weapon.call(this, 'SlayingAxe2', 94, '\u30AD\u30E9\u30FC\u30A2\u30AF\u30B9\u935B\uFF0B', Skill$SkillType$AXE_getInstance(), 14, Weapon$SlayingAxe_getInstance(), RefineSkill$RefineType$Range1_getInstance());
  }
  Weapon$SlayingAxe2.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipKiller_yukhz7$(armedHero, lv);
  };
  Weapon$SlayingAxe2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SlayingAxe2',
    interfaces: [Weapon]
  };
  var Weapon$SlayingAxe2_instance = null;
  function Weapon$SlayingAxe2_getInstance() {
    Weapon_initFields();
    return Weapon$SlayingAxe2_instance;
  }
  function Weapon$CarrotAxe() {
    Weapon$CarrotAxe_instance = this;
    Weapon.call(this, 'CarrotAxe', 95, '\u30CB\u30F3\u30B8\u30F3\u306E\u65A7', Skill$SkillType$AXE_getInstance(), 9, Weapon$SteelAxe_getInstance());
  }
  Weapon$CarrotAxe.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.attackHeal_sv9jhu$(battleUnit, 4);
  };
  Weapon$CarrotAxe.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CarrotAxe',
    interfaces: [Weapon]
  };
  var Weapon$CarrotAxe_instance = null;
  function Weapon$CarrotAxe_getInstance() {
    Weapon_initFields();
    return Weapon$CarrotAxe_instance;
  }
  function Weapon$CarrotAxe2() {
    Weapon$CarrotAxe2_instance = this;
    Weapon.call(this, 'CarrotAxe2', 96, '\u30CB\u30F3\u30B8\u30F3\u306E\u65A7\uFF0B', Skill$SkillType$AXE_getInstance(), 13, Weapon$CarrotAxe_getInstance(), RefineSkill$RefineType$Range1_getInstance());
  }
  Weapon$CarrotAxe2.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.attackHeal_sv9jhu$(battleUnit, 4);
  };
  Weapon$CarrotAxe2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CarrotAxe2',
    interfaces: [Weapon]
  };
  var Weapon$CarrotAxe2_instance = null;
  function Weapon$CarrotAxe2_getInstance() {
    Weapon_initFields();
    return Weapon$CarrotAxe2_instance;
  }
  var Weapon$LegionsAxe_instance;
  function Weapon$LegionsAxe_getInstance() {
    Weapon_initFields();
    return Weapon$LegionsAxe_instance;
  }
  var Weapon$LegionsAxe2_instance;
  function Weapon$LegionsAxe2_getInstance() {
    Weapon_initFields();
    return Weapon$LegionsAxe2_instance;
  }
  function Weapon$MelonCrusher() {
    Weapon$MelonCrusher_instance = this;
    Weapon.call(this, 'MelonCrusher', 99, '\u30B9\u30A4\u30AB\u5272\u308A\u306E\u68CD\u68D2', Skill$SkillType$AXE_getInstance(), 10, Weapon$SteelAxe_getInstance());
  }
  Weapon$MelonCrusher.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.fullHpBonus_sv9jhu$(battleUnit, 2);
  };
  Weapon$MelonCrusher.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MelonCrusher',
    interfaces: [Weapon]
  };
  var Weapon$MelonCrusher_instance = null;
  function Weapon$MelonCrusher_getInstance() {
    Weapon_initFields();
    return Weapon$MelonCrusher_instance;
  }
  function Weapon$MelonCrusher2() {
    Weapon$MelonCrusher2_instance = this;
    Weapon.call(this, 'MelonCrusher2', 100, '\u30B9\u30A4\u30AB\u5272\u308A\u306E\u68CD\u68D2\uFF0B', Skill$SkillType$AXE_getInstance(), 14, Weapon$MelonCrusher_getInstance(), RefineSkill$RefineType$Range1_getInstance());
  }
  Weapon$MelonCrusher2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.fullHpBonus_sv9jhu$(battleUnit, 2);
  };
  Weapon$MelonCrusher2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MelonCrusher2',
    interfaces: [Weapon]
  };
  var Weapon$MelonCrusher2_instance = null;
  function Weapon$MelonCrusher2_getInstance() {
    Weapon_initFields();
    return Weapon$MelonCrusher2_instance;
  }
  var Weapon$LilithFloatie_instance;
  function Weapon$LilithFloatie_getInstance() {
    Weapon_initFields();
    return Weapon$LilithFloatie_instance;
  }
  var Weapon$LilithFloatie2_instance;
  function Weapon$LilithFloatie2_getInstance() {
    Weapon_initFields();
    return Weapon$LilithFloatie2_instance;
  }
  var Weapon$Noatun_instance;
  function Weapon$Noatun_getInstance() {
    Weapon_initFields();
    return Weapon$Noatun_instance;
  }
  function Weapon$Hauteclere() {
    Weapon$Hauteclere_instance = this;
    Weapon.call(this, 'Hauteclere', 104, '\u30AA\u30FC\u30C8\u30AF\u30EC\u30FC\u30EB', Skill$SkillType$AXE_getInstance(), 16, Weapon$SilverAxe_getInstance(), RefineSkill$RefineType$Range1_getInstance());
  }
  Weapon$Hauteclere.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipKiller_yukhz7$(armedHero, lv);
  };
  Weapon$Hauteclere.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Hauteclere',
    interfaces: [Weapon]
  };
  var Weapon$Hauteclere_instance = null;
  function Weapon$Hauteclere_getInstance() {
    Weapon_initFields();
    return Weapon$Hauteclere_instance;
  }
  function Weapon$Armoads() {
    Weapon$Armoads_instance = this;
    Weapon.call(this, 'Armoads', 105, '\u30A2\u30EB\u30DE\u30FC\u30BA', Skill$SkillType$AXE_getInstance(), 16, Weapon$SilverAxe_getInstance());
  }
  Weapon$Armoads.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.followupable_sv9jhu$(battleUnit, 2);
  };
  Weapon$Armoads.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Armoads',
    interfaces: [Weapon]
  };
  var Weapon$Armoads_instance = null;
  function Weapon$Armoads_getInstance() {
    Weapon_initFields();
    return Weapon$Armoads_instance;
  }
  function Weapon$Urvan() {
    Weapon$Urvan_instance = this;
    Weapon.call(this, 'Urvan', 106, '\u30A6\u30EB\u30F4\u30A1\u30F3', Skill$SkillType$AXE_getInstance(), 16, Weapon$SilverAxe_getInstance());
  }
  Weapon$Urvan.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipKiller_yukhz7$(armedHero, lv);
  };
  Weapon$Urvan.prototype.prevent_w6mj9q$$default = function (battleUnit, damage, results, lv) {
    return !results.isEmpty() && last(results).side !== battleUnit.side ? damage - ((damage * 8 | 0) / 10 | 0) | 0 : damage;
  };
  Weapon$Urvan.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Urvan',
    interfaces: [Weapon]
  };
  var Weapon$Urvan_instance = null;
  function Weapon$Urvan_getInstance() {
    Weapon_initFields();
    return Weapon$Urvan_instance;
  }
  var Weapon$Uror_instance;
  function Weapon$Uror_getInstance() {
    Weapon_initFields();
    return Weapon$Uror_instance;
  }
  function Weapon$StoutTomahawk() {
    Weapon$StoutTomahawk_instance = this;
    Weapon.call(this, 'StoutTomahawk', 108, '\u525B\u65A7\u30C8\u30DE\u30DB\u30FC\u30AF', Skill$SkillType$AXE_getInstance(), 16, Weapon$SilverAxe_getInstance());
  }
  Weapon$StoutTomahawk.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.counterAllRange_trfvk0$(battleUnit);
  };
  Weapon$StoutTomahawk.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StoutTomahawk',
    interfaces: [Weapon]
  };
  var Weapon$StoutTomahawk_instance = null;
  function Weapon$StoutTomahawk_getInstance() {
    Weapon_initFields();
    return Weapon$StoutTomahawk_instance;
  }
  function Weapon$SackOGifts() {
    Weapon$SackOGifts_instance = this;
    Weapon.call(this, 'SackOGifts', 109, '\u30D7\u30EC\u30BC\u30F3\u30C8\u888B', Skill$SkillType$AXE_getInstance(), 10, Weapon$SteelAxe_getInstance());
  }
  Weapon$SackOGifts.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.allBonus_sv9jhu$(battleUnit, 2);
  };
  Weapon$SackOGifts.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SackOGifts',
    interfaces: [Weapon]
  };
  var Weapon$SackOGifts_instance = null;
  function Weapon$SackOGifts_getInstance() {
    Weapon_initFields();
    return Weapon$SackOGifts_instance;
  }
  function Weapon$SackOGifts2() {
    Weapon$SackOGifts2_instance = this;
    Weapon.call(this, 'SackOGifts2', 110, '\u30D7\u30EC\u30BC\u30F3\u30C8\u888B\uFF0B', Skill$SkillType$AXE_getInstance(), 14, Weapon$SackOGifts_getInstance());
  }
  Weapon$SackOGifts2.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.allBonus_sv9jhu$(battleUnit, 2);
  };
  Weapon$SackOGifts2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SackOGifts2',
    interfaces: [Weapon]
  };
  var Weapon$SackOGifts2_instance = null;
  function Weapon$SackOGifts2_getInstance() {
    Weapon_initFields();
    return Weapon$SackOGifts2_instance;
  }
  function Weapon$Handbell() {
    Weapon$Handbell_instance = this;
    Weapon.call(this, 'Handbell', 111, '\u30CF\u30F3\u30C9\u30D9\u30EB', Skill$SkillType$AXE_getInstance(), 10, Weapon$SteelAxe_getInstance());
  }
  Weapon$Handbell.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.allBonus_sv9jhu$(battleUnit, 2);
  };
  Weapon$Handbell.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Handbell',
    interfaces: [Weapon]
  };
  var Weapon$Handbell_instance = null;
  function Weapon$Handbell_getInstance() {
    Weapon_initFields();
    return Weapon$Handbell_instance;
  }
  function Weapon$Handbell2() {
    Weapon$Handbell2_instance = this;
    Weapon.call(this, 'Handbell2', 112, '\u30CF\u30F3\u30C9\u30D9\u30EB\uFF0B', Skill$SkillType$AXE_getInstance(), 14, Weapon$Handbell_getInstance());
  }
  Weapon$Handbell2.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.allBonus_sv9jhu$(battleUnit, 2);
  };
  Weapon$Handbell2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Handbell2',
    interfaces: [Weapon]
  };
  var Weapon$Handbell2_instance = null;
  function Weapon$Handbell2_getInstance() {
    Weapon_initFields();
    return Weapon$Handbell2_instance;
  }
  var Weapon$IronBow_instance;
  function Weapon$IronBow_getInstance() {
    Weapon_initFields();
    return Weapon$IronBow_instance;
  }
  var Weapon$SteelBow_instance;
  function Weapon$SteelBow_getInstance() {
    Weapon_initFields();
    return Weapon$SteelBow_instance;
  }
  var Weapon$SilverBow_instance;
  function Weapon$SilverBow_getInstance() {
    Weapon_initFields();
    return Weapon$SilverBow_instance;
  }
  var Weapon$SilverBow2_instance;
  function Weapon$SilverBow2_getInstance() {
    Weapon_initFields();
    return Weapon$SilverBow2_instance;
  }
  function Weapon$BraveBow() {
    Weapon$BraveBow_instance = this;
    Weapon.call(this, 'BraveBow', 117, '\u52C7\u8005\u306E\u5F13', Skill$SkillType$BOW_getInstance(), 4, Weapon$SteelBow_getInstance());
  }
  Weapon$BraveBow.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipBrave_yukhz7$(armedHero, lv);
  };
  Weapon$BraveBow.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.attackEffect_sv9jhu$(this.doubleAttack_trfvk0$(battleUnit), lv, Weapon.prototype.attackEffect_sv9jhu$$default.bind(this));
  };
  Weapon$BraveBow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BraveBow',
    interfaces: [Weapon]
  };
  var Weapon$BraveBow_instance = null;
  function Weapon$BraveBow_getInstance() {
    Weapon_initFields();
    return Weapon$BraveBow_instance;
  }
  function Weapon$BraveBow2() {
    Weapon$BraveBow2_instance = this;
    Weapon.call(this, 'BraveBow2', 118, '\u52C7\u8005\u306E\u5F13\uFF0B', Skill$SkillType$BOW_getInstance(), 7, Weapon$BraveBow_getInstance());
  }
  Weapon$BraveBow2.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipBrave_yukhz7$(armedHero, lv);
  };
  Weapon$BraveBow2.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.attackEffect_sv9jhu$(this.doubleAttack_trfvk0$(battleUnit), lv, Weapon.prototype.attackEffect_sv9jhu$$default.bind(this));
  };
  Weapon$BraveBow2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BraveBow2',
    interfaces: [Weapon]
  };
  var Weapon$BraveBow2_instance = null;
  function Weapon$BraveBow2_getInstance() {
    Weapon_initFields();
    return Weapon$BraveBow2_instance;
  }
  function Weapon$KillerBow() {
    Weapon$KillerBow_instance = this;
    Weapon.call(this, 'KillerBow', 119, '\u30AD\u30E9\u30FC\u30DC\u30A6', Skill$SkillType$BOW_getInstance(), 5, Weapon$SteelBow_getInstance());
  }
  Weapon$KillerBow.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipKiller_yukhz7$(armedHero, lv);
  };
  Weapon$KillerBow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KillerBow',
    interfaces: [Weapon]
  };
  var Weapon$KillerBow_instance = null;
  function Weapon$KillerBow_getInstance() {
    Weapon_initFields();
    return Weapon$KillerBow_instance;
  }
  function Weapon$KillerBow2() {
    Weapon$KillerBow2_instance = this;
    Weapon.call(this, 'KillerBow2', 120, '\u30AD\u30E9\u30FC\u30DC\u30A6\uFF0B', Skill$SkillType$BOW_getInstance(), 9, Weapon$KillerBow_getInstance());
  }
  Weapon$KillerBow2.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipKiller_yukhz7$(armedHero, lv);
  };
  Weapon$KillerBow2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KillerBow2',
    interfaces: [Weapon]
  };
  var Weapon$KillerBow2_instance = null;
  function Weapon$KillerBow2_getInstance() {
    Weapon_initFields();
    return Weapon$KillerBow2_instance;
  }
  function Weapon$AssassinsBow() {
    Weapon$AssassinsBow_instance = this;
    Weapon.call(this, 'AssassinsBow', 121, '\u6697\u5668\u6BBA\u3057\u306E\u5F13', Skill$SkillType$BOW_getInstance(), 7, Weapon$SteelBow_getInstance());
  }
  Weapon$AssassinsBow.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.bothEffect_sv9jhu$(this.weaponBreaker_y53988$(battleUnit, WeaponType$DAGGER_getInstance(), lv), lv, Weapon.prototype.bothEffect_sv9jhu$$default.bind(this));
  };
  Weapon$AssassinsBow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AssassinsBow',
    interfaces: [Weapon]
  };
  var Weapon$AssassinsBow_instance = null;
  function Weapon$AssassinsBow_getInstance() {
    Weapon_initFields();
    return Weapon$AssassinsBow_instance;
  }
  function Weapon$AssassinsBow2() {
    Weapon$AssassinsBow2_instance = this;
    Weapon.call(this, 'AssassinsBow2', 122, '\u6697\u5668\u6BBA\u3057\u306E\u5F13\uFF0B', Skill$SkillType$BOW_getInstance(), 11, Weapon$AssassinsBow_getInstance(), RefineSkill$RefineType$Range2_getInstance());
  }
  Weapon$AssassinsBow2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.bothEffect_sv9jhu$(this.weaponBreaker_y53988$(battleUnit, WeaponType$DAGGER_getInstance(), lv), lv, Weapon.prototype.bothEffect_sv9jhu$$default.bind(this));
  };
  Weapon$AssassinsBow2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AssassinsBow2',
    interfaces: [Weapon]
  };
  var Weapon$AssassinsBow2_instance = null;
  function Weapon$AssassinsBow2_getInstance() {
    Weapon_initFields();
    return Weapon$AssassinsBow2_instance;
  }
  function Weapon$FiresweepBow() {
    Weapon$FiresweepBow_instance = this;
    Weapon.call(this, 'FiresweepBow', 123, '\u706B\u8599\u304E\u306E\u5F13', Skill$SkillType$BOW_getInstance(), 7, Weapon$SteelBow_getInstance());
  }
  Weapon$FiresweepBow.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.bothEffect_sv9jhu$(this.disableEachCounter_sv9jhu$(battleUnit, 0), lv, Weapon.prototype.bothEffect_sv9jhu$$default.bind(this));
  };
  Weapon$FiresweepBow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FiresweepBow',
    interfaces: [Weapon]
  };
  var Weapon$FiresweepBow_instance = null;
  function Weapon$FiresweepBow_getInstance() {
    Weapon_initFields();
    return Weapon$FiresweepBow_instance;
  }
  function Weapon$FiresweepBow2() {
    Weapon$FiresweepBow2_instance = this;
    Weapon.call(this, 'FiresweepBow2', 124, '\u706B\u8599\u304E\u306E\u5F13\uFF0B', Skill$SkillType$BOW_getInstance(), 11, Weapon$FiresweepBow_getInstance());
  }
  Weapon$FiresweepBow2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.attackEffect_sv9jhu$(this.disableEachCounter_sv9jhu$(battleUnit, 0), lv, Weapon.prototype.attackEffect_sv9jhu$$default.bind(this));
  };
  Weapon$FiresweepBow2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FiresweepBow2',
    interfaces: [Weapon]
  };
  var Weapon$FiresweepBow2_instance = null;
  function Weapon$FiresweepBow2_getInstance() {
    Weapon_initFields();
    return Weapon$FiresweepBow2_instance;
  }
  var Weapon$CupidArrow_instance;
  function Weapon$CupidArrow_getInstance() {
    Weapon_initFields();
    return Weapon$CupidArrow_instance;
  }
  var Weapon$CupidArrow2_instance;
  function Weapon$CupidArrow2_getInstance() {
    Weapon_initFields();
    return Weapon$CupidArrow2_instance;
  }
  function Weapon$RefreshingBolt() {
    Weapon$RefreshingBolt_instance = this;
    Weapon.call(this, 'RefreshingBolt', 127, '\u6C37\u83D3\u5B50\u306E\u5F13', Skill$SkillType$BOW_getInstance(), 8, Weapon$SteelBow_getInstance());
  }
  Weapon$RefreshingBolt.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.attackEffect_sv9jhu$(this.fullHpBonus_sv9jhu$(battleUnit, 2), lv, Weapon.prototype.attackEffect_sv9jhu$$default.bind(this));
  };
  Weapon$RefreshingBolt.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RefreshingBolt',
    interfaces: [Weapon]
  };
  var Weapon$RefreshingBolt_instance = null;
  function Weapon$RefreshingBolt_getInstance() {
    Weapon_initFields();
    return Weapon$RefreshingBolt_instance;
  }
  function Weapon$RefreshingBolt2() {
    Weapon$RefreshingBolt2_instance = this;
    Weapon.call(this, 'RefreshingBolt2', 128, '\u6C37\u83D3\u5B50\u306E\u5F13\uFF0B', Skill$SkillType$BOW_getInstance(), 12, Weapon$RefreshingBolt_getInstance(), RefineSkill$RefineType$Range2_getInstance());
  }
  Weapon$RefreshingBolt2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.attackEffect_sv9jhu$(this.fullHpBonus_sv9jhu$(battleUnit, 2), lv, Weapon.prototype.attackEffect_sv9jhu$$default.bind(this));
  };
  Weapon$RefreshingBolt2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RefreshingBolt2',
    interfaces: [Weapon]
  };
  var Weapon$RefreshingBolt2_instance = null;
  function Weapon$RefreshingBolt2_getInstance() {
    Weapon_initFields();
    return Weapon$RefreshingBolt2_instance;
  }
  var Weapon$ClarissesBow_instance;
  function Weapon$ClarissesBow_getInstance() {
    Weapon_initFields();
    return Weapon$ClarissesBow_instance;
  }
  var Weapon$ClarissesBow2_instance;
  function Weapon$ClarissesBow2_getInstance() {
    Weapon_initFields();
    return Weapon$ClarissesBow2_instance;
  }
  function Weapon$SlayingBow() {
    Weapon$SlayingBow_instance = this;
    Weapon.call(this, 'SlayingBow', 131, '\u30AD\u30E9\u30FC\u30DC\u30A6\u935B', Skill$SkillType$BOW_getInstance(), 10, Weapon$SteelBow_getInstance());
  }
  Weapon$SlayingBow.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipKiller_yukhz7$(armedHero, lv);
  };
  Weapon$SlayingBow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SlayingBow',
    interfaces: [Weapon]
  };
  var Weapon$SlayingBow_instance = null;
  function Weapon$SlayingBow_getInstance() {
    Weapon_initFields();
    return Weapon$SlayingBow_instance;
  }
  function Weapon$SlayingBow2() {
    Weapon$SlayingBow2_instance = this;
    Weapon.call(this, 'SlayingBow2', 132, '\u30AD\u30E9\u30FC\u30DC\u30A6\u935B\uFF0B', Skill$SkillType$BOW_getInstance(), 12, Weapon$SlayingBow_getInstance(), RefineSkill$RefineType$Range2_getInstance());
  }
  Weapon$SlayingBow2.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipKiller_yukhz7$(armedHero, lv);
  };
  Weapon$SlayingBow2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SlayingBow2',
    interfaces: [Weapon]
  };
  var Weapon$SlayingBow2_instance = null;
  function Weapon$SlayingBow2_getInstance() {
    Weapon_initFields();
    return Weapon$SlayingBow2_instance;
  }
  function Weapon$Parthia() {
    Weapon$Parthia_instance = this;
    Weapon.call(this, 'Parthia', 133, '\u30D1\u30EB\u30C6\u30A3\u30A2', Skill$SkillType$BOW_getInstance(), 14, Weapon$SilverBow_getInstance());
  }
  Weapon$Parthia.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.attackEffect_sv9jhu$(this.blowRes_sv9jhu$(battleUnit, 2), lv, Weapon.prototype.attackEffect_sv9jhu$$default.bind(this));
  };
  Weapon$Parthia.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Parthia',
    interfaces: [Weapon]
  };
  var Weapon$Parthia_instance = null;
  function Weapon$Parthia_getInstance() {
    Weapon_initFields();
    return Weapon$Parthia_instance;
  }
  var Weapon$FujinYumi_instance;
  function Weapon$FujinYumi_getInstance() {
    Weapon_initFields();
    return Weapon$FujinYumi_instance;
  }
  var Weapon$Nidhogg_instance;
  function Weapon$Nidhogg_getInstance() {
    Weapon_initFields();
    return Weapon$Nidhogg_instance;
  }
  function Weapon$Mulagir() {
    Weapon$Mulagir_instance = this;
    Weapon.call(this, 'Mulagir', 136, '\u30DF\u30E5\u30EB\u30B0\u30EC', Skill$SkillType$BOW_getInstance(), 14, Weapon$SilverBow_getInstance());
  }
  Weapon$Mulagir.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equip_yukhz7$(this.equipDef_yukhz7$(armedHero, 3), lv, Weapon.prototype.equip_yukhz7$$default.bind(this));
  };
  Weapon$Mulagir.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.bothEffect_sv9jhu$(this.antiBuffBonus_trfvk0$(battleUnit), lv, Weapon.prototype.bothEffect_sv9jhu$$default.bind(this));
  };
  Weapon$Mulagir.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mulagir',
    interfaces: [Weapon]
  };
  var Weapon$Mulagir_instance = null;
  function Weapon$Mulagir_getInstance() {
    Weapon_initFields();
    return Weapon$Mulagir_instance;
  }
  var Weapon$MonstrousBow_instance;
  function Weapon$MonstrousBow_getInstance() {
    Weapon_initFields();
    return Weapon$MonstrousBow_instance;
  }
  var Weapon$MonstrousBow2_instance;
  function Weapon$MonstrousBow2_getInstance() {
    Weapon_initFields();
    return Weapon$MonstrousBow2_instance;
  }
  var Weapon$IronDagger_instance;
  function Weapon$IronDagger_getInstance() {
    Weapon_initFields();
    return Weapon$IronDagger_instance;
  }
  var Weapon$SteelDagger_instance;
  function Weapon$SteelDagger_getInstance() {
    Weapon_initFields();
    return Weapon$SteelDagger_instance;
  }
  var Weapon$SilverDagger_instance;
  function Weapon$SilverDagger_getInstance() {
    Weapon_initFields();
    return Weapon$SilverDagger_instance;
  }
  var Weapon$SilverDagger2_instance;
  function Weapon$SilverDagger2_getInstance() {
    Weapon_initFields();
    return Weapon$SilverDagger2_instance;
  }
  var Weapon$RogueDagger_instance;
  function Weapon$RogueDagger_getInstance() {
    Weapon_initFields();
    return Weapon$RogueDagger_instance;
  }
  var Weapon$RogueDagger2_instance;
  function Weapon$RogueDagger2_getInstance() {
    Weapon_initFields();
    return Weapon$RogueDagger2_instance;
  }
  var Weapon$SmokeDagger_instance;
  function Weapon$SmokeDagger_getInstance() {
    Weapon_initFields();
    return Weapon$SmokeDagger_instance;
  }
  var Weapon$SmokeDagger2_instance;
  function Weapon$SmokeDagger2_getInstance() {
    Weapon_initFields();
    return Weapon$SmokeDagger2_instance;
  }
  function Weapon$PoisonDagger() {
    Weapon$PoisonDagger_instance = this;
    Weapon.call(this, 'PoisonDagger', 147, '\u79D8\u6BD2\u306E\u6697\u5668', Skill$SkillType$DAGGER_getInstance(), 2, Weapon$SteelDagger_getInstance());
  }
  Weapon$PoisonDagger.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.effectiveAgainst_d5yp1f$(MoveType$INFANTRY_getInstance(), battleUnit);
  };
  Weapon$PoisonDagger.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PoisonDagger',
    interfaces: [Weapon]
  };
  var Weapon$PoisonDagger_instance = null;
  function Weapon$PoisonDagger_getInstance() {
    Weapon_initFields();
    return Weapon$PoisonDagger_instance;
  }
  function Weapon$PoisonDagger2() {
    Weapon$PoisonDagger2_instance = this;
    Weapon.call(this, 'PoisonDagger2', 148, '\u79D8\u6BD2\u306E\u6697\u5668\uFF0B', Skill$SkillType$DAGGER_getInstance(), 5, Weapon$PoisonDagger_getInstance());
  }
  Weapon$PoisonDagger2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.effectiveAgainst_d5yp1f$(MoveType$INFANTRY_getInstance(), battleUnit);
  };
  Weapon$PoisonDagger2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PoisonDagger2',
    interfaces: [Weapon]
  };
  var Weapon$PoisonDagger2_instance = null;
  function Weapon$PoisonDagger2_getInstance() {
    Weapon_initFields();
    return Weapon$PoisonDagger2_instance;
  }
  function Weapon$Seashell() {
    Weapon$Seashell_instance = this;
    Weapon.call(this, 'Seashell', 149, '\u8C9D\u6BBB', Skill$SkillType$DAGGER_getInstance(), 7, Weapon$SteelDagger_getInstance());
  }
  Weapon$Seashell.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.fullHpBonus_sv9jhu$(battleUnit, 2);
  };
  Weapon$Seashell.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Seashell',
    interfaces: [Weapon]
  };
  var Weapon$Seashell_instance = null;
  function Weapon$Seashell_getInstance() {
    Weapon_initFields();
    return Weapon$Seashell_instance;
  }
  function Weapon$Seashell2() {
    Weapon$Seashell2_instance = this;
    Weapon.call(this, 'Seashell2', 150, '\u8C9D\u6BBB\uFF0B', Skill$SkillType$DAGGER_getInstance(), 10, Weapon$Seashell_getInstance(), RefineSkill$RefineType$Range2_getInstance());
  }
  Weapon$Seashell2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.fullHpBonus_sv9jhu$(battleUnit, 2);
  };
  Weapon$Seashell2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Seashell2',
    interfaces: [Weapon]
  };
  var Weapon$Seashell2_instance = null;
  function Weapon$Seashell2_getInstance() {
    Weapon_initFields();
    return Weapon$Seashell2_instance;
  }
  var Weapon$DancersFan_instance;
  function Weapon$DancersFan_getInstance() {
    Weapon_initFields();
    return Weapon$DancersFan_instance;
  }
  var Weapon$DancersFan2_instance;
  function Weapon$DancersFan2_getInstance() {
    Weapon_initFields();
    return Weapon$DancersFan2_instance;
  }
  function Weapon$DeathlyDagger() {
    Weapon$DeathlyDagger_instance = this;
    Weapon.call(this, 'DeathlyDagger', 153, '\u6B7B\u795E\u306E\u6697\u5668', Skill$SkillType$DAGGER_getInstance(), 11, Weapon$SilverDagger_getInstance(), RefineSkill$RefineType$Range2_getInstance());
  }
  Weapon$DeathlyDagger.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.attackPain_sv9jhu$(battleUnit, 7);
  };
  Weapon$DeathlyDagger.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DeathlyDagger',
    interfaces: [Weapon]
  };
  var Weapon$DeathlyDagger_instance = null;
  function Weapon$DeathlyDagger_getInstance() {
    Weapon_initFields();
    return Weapon$DeathlyDagger_instance;
  }
  function Weapon$KittyPaddle() {
    Weapon$KittyPaddle_instance = this;
    Weapon.call(this, 'KittyPaddle', 154, '\u732B\u306E\u6697\u5668', Skill$SkillType$DAGGER_getInstance(), 5, Weapon$SteelDagger_getInstance());
  }
  Weapon$KittyPaddle.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.effectiveAgainstMagic_trfvk0$(battleUnit);
  };
  Weapon$KittyPaddle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KittyPaddle',
    interfaces: [Weapon]
  };
  var Weapon$KittyPaddle_instance = null;
  function Weapon$KittyPaddle_getInstance() {
    Weapon_initFields();
    return Weapon$KittyPaddle_instance;
  }
  function Weapon$KittyPaddle2() {
    Weapon$KittyPaddle2_instance = this;
    Weapon.call(this, 'KittyPaddle2', 155, '\u732B\u306E\u6697\u5668\uFF0B', Skill$SkillType$DAGGER_getInstance(), 8, Weapon$KittyPaddle_getInstance());
  }
  Weapon$KittyPaddle2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.effectiveAgainstMagic_trfvk0$(battleUnit);
  };
  Weapon$KittyPaddle2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KittyPaddle2',
    interfaces: [Weapon]
  };
  var Weapon$KittyPaddle2_instance = null;
  function Weapon$KittyPaddle2_getInstance() {
    Weapon_initFields();
    return Weapon$KittyPaddle2_instance;
  }
  var Weapon$Assault_instance;
  function Weapon$Assault_getInstance() {
    Weapon_initFields();
    return Weapon$Assault_instance;
  }
  function Weapon$Absorb() {
    Weapon$Absorb_instance = this;
    Weapon.call(this, 'Absorb', 157, '\u30A2\u30D6\u30BE\u30FC\u30D6', Skill$SkillType$STAFF_getInstance(), 4, Weapon$Assault_getInstance());
  }
  Weapon$Absorb.prototype.absorb_6zcyla$ = function (battleUnit, target, damage) {
    return battleUnit.heal_za3lpa$((damage * 5 | 0) / 10 | 0);
  };
  Weapon$Absorb.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Absorb',
    interfaces: [Weapon]
  };
  var Weapon$Absorb_instance = null;
  function Weapon$Absorb_getInstance() {
    Weapon_initFields();
    return Weapon$Absorb_instance;
  }
  function Weapon$Absorb2() {
    Weapon$Absorb2_instance = this;
    Weapon.call(this, 'Absorb2', 158, '\u30A2\u30D6\u30BE\u30FC\u30D6\uFF0B', Skill$SkillType$STAFF_getInstance(), 7, Weapon$Absorb_getInstance(), RefineSkill$RefineType$Staff_getInstance());
  }
  Weapon$Absorb2.prototype.absorb_6zcyla$ = function (battleUnit, target, damage) {
    return battleUnit.heal_za3lpa$((damage * 5 | 0) / 10 | 0);
  };
  Weapon$Absorb2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Absorb2',
    interfaces: [Weapon]
  };
  var Weapon$Absorb2_instance = null;
  function Weapon$Absorb2_getInstance() {
    Weapon_initFields();
    return Weapon$Absorb2_instance;
  }
  var Weapon$Candlelight_instance;
  function Weapon$Candlelight_getInstance() {
    Weapon_initFields();
    return Weapon$Candlelight_instance;
  }
  var Weapon$Candlelight2_instance;
  function Weapon$Candlelight2_getInstance() {
    Weapon_initFields();
    return Weapon$Candlelight2_instance;
  }
  var Weapon$Gravity_instance;
  function Weapon$Gravity_getInstance() {
    Weapon_initFields();
    return Weapon$Gravity_instance;
  }
  var Weapon$Gravity2_instance;
  function Weapon$Gravity2_getInstance() {
    Weapon_initFields();
    return Weapon$Gravity2_instance;
  }
  var Weapon$Fear_instance;
  function Weapon$Fear_getInstance() {
    Weapon_initFields();
    return Weapon$Fear_instance;
  }
  var Weapon$Fear2_instance;
  function Weapon$Fear2_getInstance() {
    Weapon_initFields();
    return Weapon$Fear2_instance;
  }
  var Weapon$Slow_instance;
  function Weapon$Slow_getInstance() {
    Weapon_initFields();
    return Weapon$Slow_instance;
  }
  var Weapon$Slow2_instance;
  function Weapon$Slow2_getInstance() {
    Weapon_initFields();
    return Weapon$Slow2_instance;
  }
  var Weapon$Panic_instance;
  function Weapon$Panic_getInstance() {
    Weapon_initFields();
    return Weapon$Panic_instance;
  }
  var Weapon$Panic2_instance;
  function Weapon$Panic2_getInstance() {
    Weapon_initFields();
    return Weapon$Panic2_instance;
  }
  function Weapon$Pain() {
    Weapon$Pain_instance = this;
    Weapon.call(this, 'Pain', 169, '\u30DA\u30A4\u30F3', Skill$SkillType$STAFF_getInstance(), 3, Weapon$Assault_getInstance());
  }
  Weapon$Pain.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.attackPain_sv9jhu$(battleUnit, 10);
  };
  Weapon$Pain.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Pain',
    interfaces: [Weapon]
  };
  var Weapon$Pain_instance = null;
  function Weapon$Pain_getInstance() {
    Weapon_initFields();
    return Weapon$Pain_instance;
  }
  function Weapon$Pain2() {
    Weapon$Pain2_instance = this;
    Weapon.call(this, 'Pain2', 170, '\u30DA\u30A4\u30F3\uFF0B', Skill$SkillType$STAFF_getInstance(), 10, Weapon$Pain_getInstance(), RefineSkill$RefineType$Staff_getInstance());
  }
  Weapon$Pain2.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.attackPain_sv9jhu$(battleUnit, 10);
  };
  Weapon$Pain2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Pain2',
    interfaces: [Weapon]
  };
  var Weapon$Pain2_instance = null;
  function Weapon$Pain2_getInstance() {
    Weapon_initFields();
    return Weapon$Pain2_instance;
  }
  var Weapon$Flux_instance;
  function Weapon$Flux_getInstance() {
    Weapon_initFields();
    return Weapon$Flux_instance;
  }
  var Weapon$Fire_instance;
  function Weapon$Fire_getInstance() {
    Weapon_initFields();
    return Weapon$Fire_instance;
  }
  var Weapon$Ruin_instance;
  function Weapon$Ruin_getInstance() {
    Weapon_initFields();
    return Weapon$Ruin_instance;
  }
  var Weapon$Elfire_instance;
  function Weapon$Elfire_getInstance() {
    Weapon_initFields();
    return Weapon$Elfire_instance;
  }
  function Weapon$Rauorwolf() {
    Weapon$Rauorwolf_instance = this;
    Weapon.call(this, 'Rauorwolf', 175, '\u30E9\u30A6\u30A2\u30A6\u30EB\u30D5', Skill$SkillType$RTOME_getInstance(), 6, Weapon$Elfire_getInstance());
  }
  Weapon$Rauorwolf.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.effectiveAgainst_d5yp1f$(MoveType$CAVALRY_getInstance(), battleUnit);
  };
  Weapon$Rauorwolf.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Rauorwolf',
    interfaces: [Weapon]
  };
  var Weapon$Rauorwolf_instance = null;
  function Weapon$Rauorwolf_getInstance() {
    Weapon_initFields();
    return Weapon$Rauorwolf_instance;
  }
  function Weapon$Rauorwolf2() {
    Weapon$Rauorwolf2_instance = this;
    Weapon.call(this, 'Rauorwolf2', 176, '\u30E9\u30A6\u30A2\u30A6\u30EB\u30D5\uFF0B', Skill$SkillType$RTOME_getInstance(), 10, Weapon$Rauorwolf_getInstance());
  }
  Weapon$Rauorwolf2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.effectiveAgainst_d5yp1f$(MoveType$CAVALRY_getInstance(), battleUnit);
  };
  Weapon$Rauorwolf2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Rauorwolf2',
    interfaces: [Weapon]
  };
  var Weapon$Rauorwolf2_instance = null;
  function Weapon$Rauorwolf2_getInstance() {
    Weapon_initFields();
    return Weapon$Rauorwolf2_instance;
  }
  function Weapon$KeenRauorwolf2() {
    Weapon$KeenRauorwolf2_instance = this;
    Weapon.call(this, 'KeenRauorwolf2', 177, '\u30E9\u30A6\u30A2\u30A6\u30EB\u30D5\u935B\uFF0B', Skill$SkillType$RTOME_getInstance(), 12, Weapon$Rauorwolf2_getInstance(), RefineSkill$RefineType$Range2_getInstance());
  }
  Weapon$KeenRauorwolf2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.effectiveAgainst_d5yp1f$(MoveType$CAVALRY_getInstance(), battleUnit);
  };
  Weapon$KeenRauorwolf2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeenRauorwolf2',
    interfaces: [Weapon]
  };
  var Weapon$KeenRauorwolf2_instance = null;
  function Weapon$KeenRauorwolf2_getInstance() {
    Weapon_initFields();
    return Weapon$KeenRauorwolf2_instance;
  }
  function Weapon$Rauorraven() {
    Weapon$Rauorraven_instance = this;
    Weapon.call(this, 'Rauorraven', 178, '\u30E9\u30A6\u30A2\u30EC\u30A4\u30F4\u30F3', Skill$SkillType$RTOME_getInstance(), 7, Weapon$Elfire_getInstance());
  }
  Weapon$Rauorraven.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.equipRaven_trfvk0$(battleUnit);
  };
  Weapon$Rauorraven.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Rauorraven',
    interfaces: [Weapon]
  };
  var Weapon$Rauorraven_instance = null;
  function Weapon$Rauorraven_getInstance() {
    Weapon_initFields();
    return Weapon$Rauorraven_instance;
  }
  function Weapon$Rauorraven2() {
    Weapon$Rauorraven2_instance = this;
    Weapon.call(this, 'Rauorraven2', 179, '\u30E9\u30A6\u30A2\u30EC\u30A4\u30F4\u30F3\uFF0B', Skill$SkillType$RTOME_getInstance(), 11, Weapon$Rauorraven_getInstance());
  }
  Weapon$Rauorraven2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.equipRaven_trfvk0$(battleUnit);
  };
  Weapon$Rauorraven2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Rauorraven2',
    interfaces: [Weapon]
  };
  var Weapon$Rauorraven2_instance = null;
  function Weapon$Rauorraven2_getInstance() {
    Weapon_initFields();
    return Weapon$Rauorraven2_instance;
  }
  function Weapon$Rauorblade() {
    Weapon$Rauorblade_instance = this;
    Weapon.call(this, 'Rauorblade', 180, '\u30E9\u30A6\u30A2\u30D6\u30EC\u30FC\u30C9', Skill$SkillType$RTOME_getInstance(), 9, Weapon$Elfire_getInstance());
  }
  Weapon$Rauorblade.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipBlade_yukhz7$(armedHero, lv);
  };
  Weapon$Rauorblade.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.bladeEffect_trfvk0$(battleUnit);
  };
  Weapon$Rauorblade.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Rauorblade',
    interfaces: [Weapon]
  };
  var Weapon$Rauorblade_instance = null;
  function Weapon$Rauorblade_getInstance() {
    Weapon_initFields();
    return Weapon$Rauorblade_instance;
  }
  function Weapon$Rauorblade2() {
    Weapon$Rauorblade2_instance = this;
    Weapon.call(this, 'Rauorblade2', 181, '\u30E9\u30A6\u30A2\u30D6\u30EC\u30FC\u30C9\uFF0B', Skill$SkillType$RTOME_getInstance(), 13, Weapon$Rauorblade_getInstance());
  }
  Weapon$Rauorblade2.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipBlade_yukhz7$(armedHero, lv);
  };
  Weapon$Rauorblade2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.bladeEffect_trfvk0$(battleUnit);
  };
  Weapon$Rauorblade2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Rauorblade2',
    interfaces: [Weapon]
  };
  var Weapon$Rauorblade2_instance = null;
  function Weapon$Rauorblade2_getInstance() {
    Weapon_initFields();
    return Weapon$Rauorblade2_instance;
  }
  var Weapon$Rauorowl_instance;
  function Weapon$Rauorowl_getInstance() {
    Weapon_initFields();
    return Weapon$Rauorowl_instance;
  }
  var Weapon$Rauorowl2_instance;
  function Weapon$Rauorowl2_getInstance() {
    Weapon_initFields();
    return Weapon$Rauorowl2_instance;
  }
  var Weapon$Fenrir_instance;
  function Weapon$Fenrir_getInstance() {
    Weapon_initFields();
    return Weapon$Fenrir_instance;
  }
  var Weapon$Fenrir2_instance;
  function Weapon$Fenrir2_getInstance() {
    Weapon_initFields();
    return Weapon$Fenrir2_instance;
  }
  var Weapon$Bolganone_instance;
  function Weapon$Bolganone_getInstance() {
    Weapon_initFields();
    return Weapon$Bolganone_instance;
  }
  var Weapon$Bolganone2_instance;
  function Weapon$Bolganone2_getInstance() {
    Weapon_initFields();
    return Weapon$Bolganone2_instance;
  }
  var Weapon$TomatoTome_instance;
  function Weapon$TomatoTome_getInstance() {
    Weapon_initFields();
    return Weapon$TomatoTome_instance;
  }
  var Weapon$TomatoTome2_instance;
  function Weapon$TomatoTome2_getInstance() {
    Weapon_initFields();
    return Weapon$TomatoTome2_instance;
  }
  var Weapon$Brynhildr_instance;
  function Weapon$Brynhildr_getInstance() {
    Weapon_initFields();
    return Weapon$Brynhildr_instance;
  }
  var Weapon$Cymbeline_instance;
  function Weapon$Cymbeline_getInstance() {
    Weapon_initFields();
    return Weapon$Cymbeline_instance;
  }
  function Weapon$Ragnarok() {
    Weapon$Ragnarok_instance = this;
    Weapon.call(this, 'Ragnarok', 192, '\u30E9\u30A4\u30CA\u30ED\u30C3\u30AF', Skill$SkillType$RTOME_getInstance(), 14, Weapon$Bolganone_getInstance());
  }
  Weapon$Ragnarok.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.fullHpAtkSpdBonus_sv9jhu$(battleUnit, 5);
  };
  Weapon$Ragnarok.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Ragnarok',
    interfaces: [Weapon]
  };
  var Weapon$Ragnarok_instance = null;
  function Weapon$Ragnarok_getInstance() {
    Weapon_initFields();
    return Weapon$Ragnarok_instance;
  }
  var Weapon$Valflame_instance;
  function Weapon$Valflame_getInstance() {
    Weapon_initFields();
    return Weapon$Valflame_instance;
  }
  var Weapon$Grimoire_instance;
  function Weapon$Grimoire_getInstance() {
    Weapon_initFields();
    return Weapon$Grimoire_instance;
  }
  function Weapon$Candelabra() {
    Weapon$Candelabra_instance = this;
    Weapon.call(this, 'Candelabra', 195, '\u71ED\u53F0', Skill$SkillType$RTOME_getInstance(), 8, Weapon$Elfire_getInstance());
  }
  Weapon$Candelabra.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.allBonus_sv9jhu$(battleUnit, 2);
  };
  Weapon$Candelabra.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Candelabra',
    interfaces: [Weapon]
  };
  var Weapon$Candelabra_instance = null;
  function Weapon$Candelabra_getInstance() {
    Weapon_initFields();
    return Weapon$Candelabra_instance;
  }
  function Weapon$Candelabra2() {
    Weapon$Candelabra2_instance = this;
    Weapon.call(this, 'Candelabra2', 196, '\u71ED\u53F0\uFF0B', Skill$SkillType$RTOME_getInstance(), 12, Weapon$Candelabra_getInstance());
  }
  Weapon$Candelabra2.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.allBonus_sv9jhu$(battleUnit, 2);
  };
  Weapon$Candelabra2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Candelabra2',
    interfaces: [Weapon]
  };
  var Weapon$Candelabra2_instance = null;
  function Weapon$Candelabra2_getInstance() {
    Weapon_initFields();
    return Weapon$Candelabra2_instance;
  }
  var Weapon$Thunder_instance;
  function Weapon$Thunder_getInstance() {
    Weapon_initFields();
    return Weapon$Thunder_instance;
  }
  var Weapon$Elthunder_instance;
  function Weapon$Elthunder_getInstance() {
    Weapon_initFields();
    return Weapon$Elthunder_instance;
  }
  function Weapon$Blarwolf() {
    Weapon$Blarwolf_instance = this;
    Weapon.call(this, 'Blarwolf', 199, '\u30D6\u30E9\u30FC\u30A6\u30EB\u30D5', Skill$SkillType$BTOME_getInstance(), 6, Weapon$Elthunder_getInstance());
  }
  Weapon$Blarwolf.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.effectiveAgainst_d5yp1f$(MoveType$CAVALRY_getInstance(), battleUnit);
  };
  Weapon$Blarwolf.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Blarwolf',
    interfaces: [Weapon]
  };
  var Weapon$Blarwolf_instance = null;
  function Weapon$Blarwolf_getInstance() {
    Weapon_initFields();
    return Weapon$Blarwolf_instance;
  }
  function Weapon$Blarwolf2() {
    Weapon$Blarwolf2_instance = this;
    Weapon.call(this, 'Blarwolf2', 200, '\u30D6\u30E9\u30FC\u30A6\u30EB\u30D5\uFF0B', Skill$SkillType$BTOME_getInstance(), 10, Weapon$Blarwolf_getInstance());
  }
  Weapon$Blarwolf2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.effectiveAgainst_d5yp1f$(MoveType$CAVALRY_getInstance(), battleUnit);
  };
  Weapon$Blarwolf2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Blarwolf2',
    interfaces: [Weapon]
  };
  var Weapon$Blarwolf2_instance = null;
  function Weapon$Blarwolf2_getInstance() {
    Weapon_initFields();
    return Weapon$Blarwolf2_instance;
  }
  function Weapon$KeenBlarwolf2() {
    Weapon$KeenBlarwolf2_instance = this;
    Weapon.call(this, 'KeenBlarwolf2', 201, '\u30D6\u30E9\u30FC\u30A6\u30EB\u30D5\u935B\uFF0B', Skill$SkillType$BTOME_getInstance(), 12, Weapon$Blarwolf2_getInstance(), RefineSkill$RefineType$Range2_getInstance());
  }
  Weapon$KeenBlarwolf2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.effectiveAgainst_d5yp1f$(MoveType$CAVALRY_getInstance(), battleUnit);
  };
  Weapon$KeenBlarwolf2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeenBlarwolf2',
    interfaces: [Weapon]
  };
  var Weapon$KeenBlarwolf2_instance = null;
  function Weapon$KeenBlarwolf2_getInstance() {
    Weapon_initFields();
    return Weapon$KeenBlarwolf2_instance;
  }
  function Weapon$Blarraven() {
    Weapon$Blarraven_instance = this;
    Weapon.call(this, 'Blarraven', 202, '\u30D6\u30E9\u30FC\u30EC\u30A4\u30F4\u30F3', Skill$SkillType$BTOME_getInstance(), 7, Weapon$Elthunder_getInstance());
  }
  Weapon$Blarraven.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.equipRaven_trfvk0$(battleUnit);
  };
  Weapon$Blarraven.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Blarraven',
    interfaces: [Weapon]
  };
  var Weapon$Blarraven_instance = null;
  function Weapon$Blarraven_getInstance() {
    Weapon_initFields();
    return Weapon$Blarraven_instance;
  }
  function Weapon$Blarraven2() {
    Weapon$Blarraven2_instance = this;
    Weapon.call(this, 'Blarraven2', 203, '\u30D6\u30E9\u30FC\u30EC\u30A4\u30F4\u30F3\uFF0B', Skill$SkillType$BTOME_getInstance(), 11, Weapon$Blarraven_getInstance());
  }
  Weapon$Blarraven2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.equipRaven_trfvk0$(battleUnit);
  };
  Weapon$Blarraven2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Blarraven2',
    interfaces: [Weapon]
  };
  var Weapon$Blarraven2_instance = null;
  function Weapon$Blarraven2_getInstance() {
    Weapon_initFields();
    return Weapon$Blarraven2_instance;
  }
  function Weapon$Blarblade() {
    Weapon$Blarblade_instance = this;
    Weapon.call(this, 'Blarblade', 204, '\u30D6\u30E9\u30FC\u30D6\u30EC\u30FC\u30C9', Skill$SkillType$RTOME_getInstance(), 9, Weapon$Elthunder_getInstance());
  }
  Weapon$Blarblade.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipBlade_yukhz7$(armedHero, lv);
  };
  Weapon$Blarblade.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.bladeEffect_trfvk0$(battleUnit);
  };
  Weapon$Blarblade.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Blarblade',
    interfaces: [Weapon]
  };
  var Weapon$Blarblade_instance = null;
  function Weapon$Blarblade_getInstance() {
    Weapon_initFields();
    return Weapon$Blarblade_instance;
  }
  function Weapon$Blarblade2() {
    Weapon$Blarblade2_instance = this;
    Weapon.call(this, 'Blarblade2', 205, '\u30D6\u30E9\u30FC\u30D6\u30EC\u30FC\u30C9\uFF0B', Skill$SkillType$RTOME_getInstance(), 13, Weapon$Blarblade_getInstance());
  }
  Weapon$Blarblade2.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipBlade_yukhz7$(armedHero, lv);
  };
  Weapon$Blarblade2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.bladeEffect_trfvk0$(battleUnit);
  };
  Weapon$Blarblade2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Blarblade2',
    interfaces: [Weapon]
  };
  var Weapon$Blarblade2_instance = null;
  function Weapon$Blarblade2_getInstance() {
    Weapon_initFields();
    return Weapon$Blarblade2_instance;
  }
  var Weapon$Blarowl_instance;
  function Weapon$Blarowl_getInstance() {
    Weapon_initFields();
    return Weapon$Blarowl_instance;
  }
  var Weapon$Blarowl2_instance;
  function Weapon$Blarowl2_getInstance() {
    Weapon_initFields();
    return Weapon$Blarowl2_instance;
  }
  var Weapon$Thoron_instance;
  function Weapon$Thoron_getInstance() {
    Weapon_initFields();
    return Weapon$Thoron_instance;
  }
  var Weapon$Thoron2_instance;
  function Weapon$Thoron2_getInstance() {
    Weapon_initFields();
    return Weapon$Thoron2_instance;
  }
  var Weapon$BlueEgg_instance;
  function Weapon$BlueEgg_getInstance() {
    Weapon_initFields();
    return Weapon$BlueEgg_instance;
  }
  var Weapon$BlueEgg2_instance;
  function Weapon$BlueEgg2_getInstance() {
    Weapon_initFields();
    return Weapon$BlueEgg2_instance;
  }
  var Weapon$BlessedBouquet_instance;
  function Weapon$BlessedBouquet_getInstance() {
    Weapon_initFields();
    return Weapon$BlessedBouquet_instance;
  }
  var Weapon$BlessedBouquet2_instance;
  function Weapon$BlessedBouquet2_getInstance() {
    Weapon_initFields();
    return Weapon$BlessedBouquet2_instance;
  }
  var Weapon$SealifeTome_instance;
  function Weapon$SealifeTome_getInstance() {
    Weapon_initFields();
    return Weapon$SealifeTome_instance;
  }
  var Weapon$SealifeTome2_instance;
  function Weapon$SealifeTome2_getInstance() {
    Weapon_initFields();
    return Weapon$SealifeTome2_instance;
  }
  var Weapon$DancersScore_instance;
  function Weapon$DancersScore_getInstance() {
    Weapon_initFields();
    return Weapon$DancersScore_instance;
  }
  var Weapon$DancersScore2_instance;
  function Weapon$DancersScore2_getInstance() {
    Weapon_initFields();
    return Weapon$DancersScore2_instance;
  }
  var Weapon$DarkAura_instance;
  function Weapon$DarkAura_getInstance() {
    Weapon_initFields();
    return Weapon$DarkAura_instance;
  }
  function Weapon$Valaskjalf() {
    Weapon$Valaskjalf_instance = this;
    Weapon.call(this, 'Valaskjalf', 219, '\u30F4\u30E9\u30B9\u30AD\u30E3\u30EB\u30F4', Skill$SkillType$BTOME_getInstance(), 14, Weapon$Thoron_getInstance());
  }
  Weapon$Valaskjalf.prototype.counterPlan_p6uegp$$default = function (fightPlan, lv) {
    return this.vantage_p6uegp$(fightPlan, 2);
  };
  Weapon$Valaskjalf.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Valaskjalf',
    interfaces: [Weapon]
  };
  var Weapon$Valaskjalf_instance = null;
  function Weapon$Valaskjalf_getInstance() {
    Weapon_initFields();
    return Weapon$Valaskjalf_instance;
  }
  var Weapon$Aura_instance;
  function Weapon$Aura_getInstance() {
    Weapon_initFields();
    return Weapon$Aura_instance;
  }
  function Weapon$DireThunder() {
    Weapon$DireThunder_instance = this;
    Weapon.call(this, 'DireThunder', 221, '\u30C0\u30A4\u30E0\u30B5\u30F3\u30C0', Skill$SkillType$BTOME_getInstance(), 9, Weapon$Thoron_getInstance());
  }
  Weapon$DireThunder.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipBrave_yukhz7$(armedHero, lv);
  };
  Weapon$DireThunder.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.doubleAttack_trfvk0$(battleUnit);
  };
  Weapon$DireThunder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DireThunder',
    interfaces: [Weapon]
  };
  var Weapon$DireThunder_instance = null;
  function Weapon$DireThunder_getInstance() {
    Weapon_initFields();
    return Weapon$DireThunder_instance;
  }
  function Weapon$WeirdingTome() {
    Weapon$WeirdingTome_instance = this;
    Weapon.call(this, 'WeirdingTome', 222, '\u5947\u7570\u30EB\u30FC\u30C6\u306E\u66F8', Skill$SkillType$BTOME_getInstance(), 14, Weapon$Thoron_getInstance());
  }
  Weapon$WeirdingTome.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equip_yukhz7$(this.equipSpd_yukhz7$(armedHero, 3), lv, Weapon.prototype.equip_yukhz7$$default.bind(this));
  };
  Weapon$WeirdingTome.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WeirdingTome',
    interfaces: [Weapon]
  };
  var Weapon$WeirdingTome_instance = null;
  function Weapon$WeirdingTome_getInstance() {
    Weapon_initFields();
    return Weapon$WeirdingTome_instance;
  }
  var Weapon$Wind_instance;
  function Weapon$Wind_getInstance() {
    Weapon_initFields();
    return Weapon$Wind_instance;
  }
  var Weapon$Elwind_instance;
  function Weapon$Elwind_getInstance() {
    Weapon_initFields();
    return Weapon$Elwind_instance;
  }
  var Weapon$Rexcalibur_instance;
  function Weapon$Rexcalibur_getInstance() {
    Weapon_initFields();
    return Weapon$Rexcalibur_instance;
  }
  var Weapon$Rexcalibur2_instance;
  function Weapon$Rexcalibur2_getInstance() {
    Weapon_initFields();
    return Weapon$Rexcalibur2_instance;
  }
  function Weapon$Gronnwolf() {
    Weapon$Gronnwolf_instance = this;
    Weapon.call(this, 'Gronnwolf', 227, '\u30B0\u30EB\u30F3\u30A6\u30EB\u30D5', Skill$SkillType$GTOME_getInstance(), 6, Weapon$Elwind_getInstance());
  }
  Weapon$Gronnwolf.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.effectiveAgainst_d5yp1f$(MoveType$CAVALRY_getInstance(), battleUnit);
  };
  Weapon$Gronnwolf.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Gronnwolf',
    interfaces: [Weapon]
  };
  var Weapon$Gronnwolf_instance = null;
  function Weapon$Gronnwolf_getInstance() {
    Weapon_initFields();
    return Weapon$Gronnwolf_instance;
  }
  function Weapon$Gronnwolf2() {
    Weapon$Gronnwolf2_instance = this;
    Weapon.call(this, 'Gronnwolf2', 228, '\u30B0\u30EB\u30F3\u30A6\u30EB\u30D5\uFF0B', Skill$SkillType$GTOME_getInstance(), 10, Weapon$Gronnwolf_getInstance());
  }
  Weapon$Gronnwolf2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.effectiveAgainst_d5yp1f$(MoveType$CAVALRY_getInstance(), battleUnit);
  };
  Weapon$Gronnwolf2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Gronnwolf2',
    interfaces: [Weapon]
  };
  var Weapon$Gronnwolf2_instance = null;
  function Weapon$Gronnwolf2_getInstance() {
    Weapon_initFields();
    return Weapon$Gronnwolf2_instance;
  }
  function Weapon$KeenGronnwolf2() {
    Weapon$KeenGronnwolf2_instance = this;
    Weapon.call(this, 'KeenGronnwolf2', 229, '\u30B0\u30EB\u30F3\u30A6\u30EB\u30D5\u935B\uFF0B', Skill$SkillType$GTOME_getInstance(), 12, Weapon$Gronnwolf2_getInstance(), RefineSkill$RefineType$Range2_getInstance());
  }
  Weapon$KeenGronnwolf2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.effectiveAgainst_d5yp1f$(MoveType$CAVALRY_getInstance(), battleUnit);
  };
  Weapon$KeenGronnwolf2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeenGronnwolf2',
    interfaces: [Weapon]
  };
  var Weapon$KeenGronnwolf2_instance = null;
  function Weapon$KeenGronnwolf2_getInstance() {
    Weapon_initFields();
    return Weapon$KeenGronnwolf2_instance;
  }
  function Weapon$Gronnraven() {
    Weapon$Gronnraven_instance = this;
    Weapon.call(this, 'Gronnraven', 230, '\u30B0\u30EB\u30F3\u30EC\u30A4\u30F4\u30F3', Skill$SkillType$GTOME_getInstance(), 7, Weapon$Elwind_getInstance());
  }
  Weapon$Gronnraven.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.equipRaven_trfvk0$(battleUnit);
  };
  Weapon$Gronnraven.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Gronnraven',
    interfaces: [Weapon]
  };
  var Weapon$Gronnraven_instance = null;
  function Weapon$Gronnraven_getInstance() {
    Weapon_initFields();
    return Weapon$Gronnraven_instance;
  }
  function Weapon$Gronnraven2() {
    Weapon$Gronnraven2_instance = this;
    Weapon.call(this, 'Gronnraven2', 231, '\u30B0\u30EB\u30F3\u30EC\u30A4\u30F4\u30F3\uFF0B', Skill$SkillType$GTOME_getInstance(), 11, Weapon$Gronnraven_getInstance());
  }
  Weapon$Gronnraven2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.equipRaven_trfvk0$(battleUnit);
  };
  Weapon$Gronnraven2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Gronnraven2',
    interfaces: [Weapon]
  };
  var Weapon$Gronnraven2_instance = null;
  function Weapon$Gronnraven2_getInstance() {
    Weapon_initFields();
    return Weapon$Gronnraven2_instance;
  }
  function Weapon$Gronnblade() {
    Weapon$Gronnblade_instance = this;
    Weapon.call(this, 'Gronnblade', 232, '\u30B0\u30EB\u30F3\u30D6\u30EC\u30FC\u30C9', Skill$SkillType$GTOME_getInstance(), 9, Weapon$Elwind_getInstance());
  }
  Weapon$Gronnblade.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipBlade_yukhz7$(armedHero, lv);
  };
  Weapon$Gronnblade.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.bladeEffect_trfvk0$(battleUnit);
  };
  Weapon$Gronnblade.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Gronnblade',
    interfaces: [Weapon]
  };
  var Weapon$Gronnblade_instance = null;
  function Weapon$Gronnblade_getInstance() {
    Weapon_initFields();
    return Weapon$Gronnblade_instance;
  }
  function Weapon$Gronnblade2() {
    Weapon$Gronnblade2_instance = this;
    Weapon.call(this, 'Gronnblade2', 233, '\u30B0\u30EB\u30F3\u30D6\u30EC\u30FC\u30C9\uFF0B', Skill$SkillType$GTOME_getInstance(), 13, Weapon$Gronnblade_getInstance());
  }
  Weapon$Gronnblade2.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipBlade_yukhz7$(armedHero, lv);
  };
  Weapon$Gronnblade2.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.bladeEffect_trfvk0$(battleUnit);
  };
  Weapon$Gronnblade2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Gronnblade2',
    interfaces: [Weapon]
  };
  var Weapon$Gronnblade2_instance = null;
  function Weapon$Gronnblade2_getInstance() {
    Weapon_initFields();
    return Weapon$Gronnblade2_instance;
  }
  var Weapon$Gronnowl_instance;
  function Weapon$Gronnowl_getInstance() {
    Weapon_initFields();
    return Weapon$Gronnowl_instance;
  }
  var Weapon$Gronnowl2_instance;
  function Weapon$Gronnowl2_getInstance() {
    Weapon_initFields();
    return Weapon$Gronnowl2_instance;
  }
  function Weapon$GreenEgg() {
    Weapon$GreenEgg_instance = this;
    Weapon.call(this, 'GreenEgg', 236, '\u7DD1\u306E\u5375', Skill$SkillType$GTOME_getInstance(), 7, Weapon$Elwind_getInstance());
  }
  Weapon$GreenEgg.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.attackHeal_sv9jhu$(battleUnit, 4);
  };
  Weapon$GreenEgg.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GreenEgg',
    interfaces: [Weapon]
  };
  var Weapon$GreenEgg_instance = null;
  function Weapon$GreenEgg_getInstance() {
    Weapon_initFields();
    return Weapon$GreenEgg_instance;
  }
  function Weapon$GreenEgg2() {
    Weapon$GreenEgg2_instance = this;
    Weapon.call(this, 'GreenEgg2', 237, '\u7DD1\u306E\u5375\uFF0B', Skill$SkillType$GTOME_getInstance(), 11, Weapon$GreenEgg_getInstance(), RefineSkill$RefineType$Range2_getInstance());
  }
  Weapon$GreenEgg2.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.attackHeal_sv9jhu$(battleUnit, 4);
  };
  Weapon$GreenEgg2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GreenEgg2',
    interfaces: [Weapon]
  };
  var Weapon$GreenEgg2_instance = null;
  function Weapon$GreenEgg2_getInstance() {
    Weapon_initFields();
    return Weapon$GreenEgg2_instance;
  }
  var Weapon$HibiscusTome_instance;
  function Weapon$HibiscusTome_getInstance() {
    Weapon_initFields();
    return Weapon$HibiscusTome_instance;
  }
  var Weapon$HibiscusTome2_instance;
  function Weapon$HibiscusTome2_getInstance() {
    Weapon_initFields();
    return Weapon$HibiscusTome2_instance;
  }
  var Weapon$DancersRing_instance;
  function Weapon$DancersRing_getInstance() {
    Weapon_initFields();
    return Weapon$DancersRing_instance;
  }
  var Weapon$DancersRing2_instance;
  function Weapon$DancersRing2_getInstance() {
    Weapon_initFields();
    return Weapon$DancersRing2_instance;
  }
  var Weapon$Elivagar_instance;
  function Weapon$Elivagar_getInstance() {
    Weapon_initFields();
    return Weapon$Elivagar_instance;
  }
  function Weapon$Excalibur() {
    Weapon$Excalibur_instance = this;
    Weapon.call(this, 'Excalibur', 243, '\u30A8\u30AF\u30B9\u30AB\u30EA\u30D0\u30FC', Skill$SkillType$GTOME_getInstance(), 14, Weapon$Rexcalibur_getInstance());
  }
  Weapon$Excalibur.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.effectiveAgainst_d5yp1f$(MoveType$FLIER_getInstance(), battleUnit);
  };
  Weapon$Excalibur.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Excalibur',
    interfaces: [Weapon]
  };
  var Weapon$Excalibur_instance = null;
  function Weapon$Excalibur_getInstance() {
    Weapon_initFields();
    return Weapon$Excalibur_instance;
  }
  function Weapon$Naga() {
    Weapon$Naga_instance = this;
    Weapon.call(this, 'Naga', 244, '\u30CA\u30FC\u30AC', Skill$SkillType$GTOME_getInstance(), 14, Weapon$Rexcalibur_getInstance());
  }
  Weapon$Naga.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.effectiveAgainst_58hff6$(WeaponType$DRAGON_getInstance(), this.blowDef_sv9jhu$(this.blowRes_sv9jhu$(battleUnit, 2), 2));
  };
  Weapon$Naga.prototype.attackEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.effectiveAgainst_58hff6$(WeaponType$DRAGON_getInstance(), battleUnit);
  };
  Weapon$Naga.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Naga',
    interfaces: [Weapon]
  };
  var Weapon$Naga_instance = null;
  function Weapon$Naga_getInstance() {
    Weapon_initFields();
    return Weapon$Naga_instance;
  }
  function Weapon$DarkExcalibur() {
    Weapon$DarkExcalibur_instance = this;
    Weapon.call(this, 'DarkExcalibur', 245, '\u5171\u9CF4\u30A8\u30AF\u30B9\u30AB\u30EA\u30D0\u30FC', Skill$SkillType$GTOME_getInstance(), 14, Weapon$Rexcalibur_getInstance());
  }
  Weapon$DarkExcalibur.prototype.specialTriggered_upjsjk$$default = function (battleUnit, damage, lv) {
    return damage + 10 | 0;
  };
  Weapon$DarkExcalibur.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DarkExcalibur',
    interfaces: [Weapon]
  };
  var Weapon$DarkExcalibur_instance = null;
  function Weapon$DarkExcalibur_getInstance() {
    Weapon_initFields();
    return Weapon$DarkExcalibur_instance;
  }
  function Weapon$DivineNaga() {
    Weapon$DivineNaga_instance = this;
    Weapon.call(this, 'DivineNaga', 246, '\u8056\u66F8\u30CA\u30FC\u30AC', Skill$SkillType$GTOME_getInstance(), 14, Weapon$Rexcalibur_getInstance());
  }
  Weapon$DivineNaga.prototype.bothEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.antiBuffBonus_trfvk0$(this.effectiveAgainst_58hff6$(WeaponType$DRAGON_getInstance(), battleUnit));
  };
  Weapon$DivineNaga.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DivineNaga',
    interfaces: [Weapon]
  };
  var Weapon$DivineNaga_instance = null;
  function Weapon$DivineNaga_getInstance() {
    Weapon_initFields();
    return Weapon$DivineNaga_instance;
  }
  var Weapon$SpectralTome_instance;
  function Weapon$SpectralTome_getInstance() {
    Weapon_initFields();
    return Weapon$SpectralTome_instance;
  }
  var Weapon$SpectralTome2_instance;
  function Weapon$SpectralTome2_getInstance() {
    Weapon_initFields();
    return Weapon$SpectralTome2_instance;
  }
  var Weapon$FireBreath_instance;
  function Weapon$FireBreath_getInstance() {
    Weapon_initFields();
    return Weapon$FireBreath_instance;
  }
  var Weapon$FireBreath2_instance;
  function Weapon$FireBreath2_getInstance() {
    Weapon_initFields();
    return Weapon$FireBreath2_instance;
  }
  function Weapon$LightningBreath() {
    Weapon$LightningBreath_instance = this;
    Weapon.call(this, 'LightningBreath', 251, '\u96F7\u306E\u30D6\u30EC\u30B9', Skill$SkillType$DRAGON_getInstance(), 8, Weapon$FireBreath2_getInstance());
  }
  Weapon$LightningBreath.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipBlade_yukhz7$(armedHero, lv);
  };
  Weapon$LightningBreath.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.counterAllRange_trfvk0$(battleUnit);
  };
  Weapon$LightningBreath.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LightningBreath',
    interfaces: [Weapon]
  };
  var Weapon$LightningBreath_instance = null;
  function Weapon$LightningBreath_getInstance() {
    Weapon_initFields();
    return Weapon$LightningBreath_instance;
  }
  function Weapon$LightningBreath2() {
    Weapon$LightningBreath2_instance = this;
    Weapon.call(this, 'LightningBreath2', 252, '\u96F7\u306E\u30D6\u30EC\u30B9\uFF0B', Skill$SkillType$DRAGON_getInstance(), 11, Weapon$LightningBreath_getInstance(), RefineSkill$RefineType$Range1_getInstance());
  }
  Weapon$LightningBreath2.prototype.equip_yukhz7$$default = function (armedHero, lv) {
    return this.equipBlade_yukhz7$(armedHero, lv);
  };
  Weapon$LightningBreath2.prototype.counterEffect_sv9jhu$$default = function (battleUnit, lv) {
    return this.counterAllRange_trfvk0$(battleUnit);
  };
  Weapon$LightningBreath2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LightningBreath2',
    interfaces: [Weapon]
  };
  var Weapon$LightningBreath2_instance = null;
  function Weapon$LightningBreath2_getInstance() {
    Weapon_initFields();
    return Weapon$LightningBreath2_instance;
  }
  var Weapon$Flametongue_instance;
  function Weapon$Flametongue_getInstance() {
    Weapon_initFields();
    return Weapon$Flametongue_instance;
  }
  var Weapon$Flametongue2_instance;
  function Weapon$Flametongue2_getInstance() {
    Weapon_initFields();
    return Weapon$Flametongue2_instance;
  }
  var Weapon$LightBreath_instance;
  function Weapon$LightBreath_getInstance() {
    Weapon_initFields();
    return Weapon$LightBreath_instance;
  }
  var Weapon$LightBreath2_instance;
  function Weapon$LightBreath2_getInstance() {
    Weapon_initFields();
    return Weapon$LightBreath2_instance;
  }
  var Weapon$DarkBreath_instance;
  function Weapon$DarkBreath_getInstance() {
    Weapon_initFields();
    return Weapon$DarkBreath_instance;
  }
  var Weapon$DarkBreath2_instance;
  function Weapon$DarkBreath2_getInstance() {
    Weapon_initFields();
    return Weapon$DarkBreath2_instance;
  }
  Object.defineProperty(Weapon.prototype, 'value', {
    get: function () {
      return replace(this.name, '2', '+');
    }
  });
  Weapon.prototype.localeName_miixs2$ = function (locale) {
    if (equals(locale, Locale$JAPAN_getInstance()))
      return this.jp;
    else if (equals(locale, Locale$JAPANESE_getInstance()))
      return this.jp;
    else
      return this.value;
  };
  function Weapon$Companion() {
    Weapon$Companion_instance = this;
    this.itemMap_0 = LinkedHashMap_init();
  }
  Weapon$Companion.prototype.spreadItems = function () {
    var $receiver = Weapon$values();
    var tmp$;
    var accumulator = arrayListOf([Skill$Companion_getInstance().NONE]);
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      var list = accumulator;
      list.add_11rb$(element);
      accumulator = list;
    }
    return accumulator;
  };
  Weapon$Companion.prototype.valueOfOrNONE_pdl1vj$ = function (key) {
    var tmp$;
    if (key == null)
      return Skill$Companion_getInstance().NONE;
    else
      try {
        if (this.itemMap_0.isEmpty()) {
          var $receiver = Weapon$values();
          var tmp$_0;
          for (tmp$_0 = 0; tmp$_0 !== $receiver.length; ++tmp$_0) {
            var element = $receiver[tmp$_0];
            this.itemMap_0.put_xwzc9p$(element.jp, element);
          }
          var $receiver_0 = Weapon$values();
          var tmp$_1;
          for (tmp$_1 = 0; tmp$_1 !== $receiver_0.length; ++tmp$_1) {
            var element_0 = $receiver_0[tmp$_1];
            this.itemMap_0.put_xwzc9p$(element_0.value, element_0);
          }
        }
        return (tmp$ = this.itemMap_0.get_11rb$(key)) != null ? tmp$ : Weapon$valueOf(key);
      }
       catch (e) {
        if (Kotlin.isType(e, Exception)) {
          return Skill$Companion_getInstance().NONE;
        }
         else
          throw e;
      }
  };
  Weapon$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Weapon$Companion_instance = null;
  function Weapon$Companion_getInstance() {
    Weapon_initFields();
    if (Weapon$Companion_instance === null) {
      new Weapon$Companion();
    }
    return Weapon$Companion_instance;
  }
  Weapon.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Weapon',
    interfaces: [Skill, Enum]
  };
  function Weapon$values() {
    return [Weapon$IronSword_getInstance(), Weapon$SteelSword_getInstance(), Weapon$SilverSword_getInstance(), Weapon$SilverSword2_getInstance(), Weapon$ArmorSlayer_getInstance(), Weapon$ArmorSlayer2_getInstance(), Weapon$Armorsmasher2_getInstance(), Weapon$BraveSword_getInstance(), Weapon$BraveSword2_getInstance(), Weapon$RubySword_getInstance(), Weapon$RubySword2_getInstance(), Weapon$KillingEdge_getInstance(), Weapon$KillingEdge2_getInstance(), Weapon$WaoDao_getInstance(), Weapon$WaoDao2_getInstance(), Weapon$Zanbato_getInstance(), Weapon$Zanbato2_getInstance(), Weapon$SlayingEdge_getInstance(), Weapon$SlayingEdge2_getInstance(), Weapon$AyrasBlade_getInstance(), Weapon$Folkvangr_getInstance(), Weapon$Falchion_getInstance(), Weapon$BindingBlade_getInstance(), Weapon$Durandal_getInstance(), Weapon$SolKatti_getInstance(), Weapon$Yato_getInstance(), Weapon$Raijinto_getInstance(), Weapon$Sieglinde_getInstance(), Weapon$Tyrfing_getInstance(), Weapon$Mystletainn_getInstance(), Weapon$Eckesachs_getInstance(), Weapon$Siegfried_getInstance(), Weapon$Ragnell_getInstance(), Weapon$BlazingDurandal_getInstance(), Weapon$Amiti_getInstance(), Weapon$Alondite_getInstance(), Weapon$DivineTyrfing_getInstance(), Weapon$RegalBlade_getInstance(), Weapon$ResoluteBlade_getInstance(), Weapon$Audhulma_getInstance(), Weapon$DarkGreatsword_getInstance(), Weapon$FiresweepSword_getInstance(), Weapon$FiresweepSword2_getInstance(), Weapon$IronLance_getInstance(), Weapon$SteelLance_getInstance(), Weapon$SilverLance_getInstance(), Weapon$SilverLance2_getInstance(), Weapon$KillerLance_getInstance(), Weapon$KillerLance2_getInstance(), Weapon$BraveLance_getInstance(), Weapon$BraveLance2_getInstance(), Weapon$SapphireLance_getInstance(), Weapon$SapphireLance2_getInstance(), Weapon$HeavySpear_getInstance(), Weapon$HeavySpear2_getInstance(), Weapon$SlayingSpear2_getInstance(), Weapon$CarrotLance_getInstance(), Weapon$CarrotLance2_getInstance(), Weapon$FirstBite_getInstance(), Weapon$FirstBite2_getInstance(), Weapon$FiresweepLance_getInstance(), Weapon$FiresweepLance2_getInstance(), Weapon$DeftHarpoon_getInstance(), Weapon$DeftHarpoon2_getInstance(), Weapon$Ridersbane_getInstance(), Weapon$Ridersbane2_getInstance(), Weapon$BerkutsLance_getInstance(), Weapon$BerkutsLance2_getInstance(), Weapon$SlayingLance_getInstance(), Weapon$SlayingLance2_getInstance(), Weapon$Fensalir_getInstance(), Weapon$Siegmund_getInstance(), Weapon$Gradivus_getInstance(), Weapon$Vidofinir_getInstance(), Weapon$CursedLance_getInstance(), Weapon$Geirskogul_getInstance(), Weapon$Leiptr_getInstance(), Weapon$BrightNaginata_getInstance(), Weapon$Tannenboom_getInstance(), Weapon$Tannenboom2_getInstance(), Weapon$IronAxe_getInstance(), Weapon$SteelAxe_getInstance(), Weapon$SilverAxe_getInstance(), Weapon$SilverAxe2_getInstance(), Weapon$KillerAxe_getInstance(), Weapon$KillerAxe2_getInstance(), Weapon$BraveAxe_getInstance(), Weapon$BraveAxe2_getInstance(), Weapon$Hammer_getInstance(), Weapon$Hammer2_getInstance(), Weapon$SlayingHammer2_getInstance(), Weapon$EmeraldAxe_getInstance(), Weapon$EmeraldAxe2_getInstance(), Weapon$SlayingAxe_getInstance(), Weapon$SlayingAxe2_getInstance(), Weapon$CarrotAxe_getInstance(), Weapon$CarrotAxe2_getInstance(), Weapon$LegionsAxe_getInstance(), Weapon$LegionsAxe2_getInstance(), Weapon$MelonCrusher_getInstance(), Weapon$MelonCrusher2_getInstance(), Weapon$LilithFloatie_getInstance(), Weapon$LilithFloatie2_getInstance(), Weapon$Noatun_getInstance(), Weapon$Hauteclere_getInstance(), Weapon$Armoads_getInstance(), Weapon$Urvan_getInstance(), Weapon$Uror_getInstance(), Weapon$StoutTomahawk_getInstance(), Weapon$SackOGifts_getInstance(), Weapon$SackOGifts2_getInstance(), Weapon$Handbell_getInstance(), Weapon$Handbell2_getInstance(), Weapon$IronBow_getInstance(), Weapon$SteelBow_getInstance(), Weapon$SilverBow_getInstance(), Weapon$SilverBow2_getInstance(), Weapon$BraveBow_getInstance(), Weapon$BraveBow2_getInstance(), Weapon$KillerBow_getInstance(), Weapon$KillerBow2_getInstance(), Weapon$AssassinsBow_getInstance(), Weapon$AssassinsBow2_getInstance(), Weapon$FiresweepBow_getInstance(), Weapon$FiresweepBow2_getInstance(), Weapon$CupidArrow_getInstance(), Weapon$CupidArrow2_getInstance(), Weapon$RefreshingBolt_getInstance(), Weapon$RefreshingBolt2_getInstance(), Weapon$ClarissesBow_getInstance(), Weapon$ClarissesBow2_getInstance(), Weapon$SlayingBow_getInstance(), Weapon$SlayingBow2_getInstance(), Weapon$Parthia_getInstance(), Weapon$FujinYumi_getInstance(), Weapon$Nidhogg_getInstance(), Weapon$Mulagir_getInstance(), Weapon$MonstrousBow_getInstance(), Weapon$MonstrousBow2_getInstance(), Weapon$IronDagger_getInstance(), Weapon$SteelDagger_getInstance(), Weapon$SilverDagger_getInstance(), Weapon$SilverDagger2_getInstance(), Weapon$RogueDagger_getInstance(), Weapon$RogueDagger2_getInstance(), Weapon$SmokeDagger_getInstance(), Weapon$SmokeDagger2_getInstance(), Weapon$PoisonDagger_getInstance(), Weapon$PoisonDagger2_getInstance(), Weapon$Seashell_getInstance(), Weapon$Seashell2_getInstance(), Weapon$DancersFan_getInstance(), Weapon$DancersFan2_getInstance(), Weapon$DeathlyDagger_getInstance(), Weapon$KittyPaddle_getInstance(), Weapon$KittyPaddle2_getInstance(), Weapon$Assault_getInstance(), Weapon$Absorb_getInstance(), Weapon$Absorb2_getInstance(), Weapon$Candlelight_getInstance(), Weapon$Candlelight2_getInstance(), Weapon$Gravity_getInstance(), Weapon$Gravity2_getInstance(), Weapon$Fear_getInstance(), Weapon$Fear2_getInstance(), Weapon$Slow_getInstance(), Weapon$Slow2_getInstance(), Weapon$Panic_getInstance(), Weapon$Panic2_getInstance(), Weapon$Pain_getInstance(), Weapon$Pain2_getInstance(), Weapon$Flux_getInstance(), Weapon$Fire_getInstance(), Weapon$Ruin_getInstance(), Weapon$Elfire_getInstance(), Weapon$Rauorwolf_getInstance(), Weapon$Rauorwolf2_getInstance(), Weapon$KeenRauorwolf2_getInstance(), Weapon$Rauorraven_getInstance(), Weapon$Rauorraven2_getInstance(), Weapon$Rauorblade_getInstance(), Weapon$Rauorblade2_getInstance(), Weapon$Rauorowl_getInstance(), Weapon$Rauorowl2_getInstance(), Weapon$Fenrir_getInstance(), Weapon$Fenrir2_getInstance(), Weapon$Bolganone_getInstance(), Weapon$Bolganone2_getInstance(), Weapon$TomatoTome_getInstance(), Weapon$TomatoTome2_getInstance(), Weapon$Brynhildr_getInstance(), Weapon$Cymbeline_getInstance(), Weapon$Ragnarok_getInstance(), Weapon$Valflame_getInstance(), Weapon$Grimoire_getInstance(), Weapon$Candelabra_getInstance(), Weapon$Candelabra2_getInstance(), Weapon$Thunder_getInstance(), Weapon$Elthunder_getInstance(), Weapon$Blarwolf_getInstance(), Weapon$Blarwolf2_getInstance(), Weapon$KeenBlarwolf2_getInstance(), Weapon$Blarraven_getInstance(), Weapon$Blarraven2_getInstance(), Weapon$Blarblade_getInstance(), Weapon$Blarblade2_getInstance(), Weapon$Blarowl_getInstance(), Weapon$Blarowl2_getInstance(), Weapon$Thoron_getInstance(), Weapon$Thoron2_getInstance(), Weapon$BlueEgg_getInstance(), Weapon$BlueEgg2_getInstance(), Weapon$BlessedBouquet_getInstance(), Weapon$BlessedBouquet2_getInstance(), Weapon$SealifeTome_getInstance(), Weapon$SealifeTome2_getInstance(), Weapon$DancersScore_getInstance(), Weapon$DancersScore2_getInstance(), Weapon$DarkAura_getInstance(), Weapon$Valaskjalf_getInstance(), Weapon$Aura_getInstance(), Weapon$DireThunder_getInstance(), Weapon$WeirdingTome_getInstance(), Weapon$Wind_getInstance(), Weapon$Elwind_getInstance(), Weapon$Rexcalibur_getInstance(), Weapon$Rexcalibur2_getInstance(), Weapon$Gronnwolf_getInstance(), Weapon$Gronnwolf2_getInstance(), Weapon$KeenGronnwolf2_getInstance(), Weapon$Gronnraven_getInstance(), Weapon$Gronnraven2_getInstance(), Weapon$Gronnblade_getInstance(), Weapon$Gronnblade2_getInstance(), Weapon$Gronnowl_getInstance(), Weapon$Gronnowl2_getInstance(), Weapon$GreenEgg_getInstance(), Weapon$GreenEgg2_getInstance(), Weapon$HibiscusTome_getInstance(), Weapon$HibiscusTome2_getInstance(), Weapon$DancersRing_getInstance(), Weapon$DancersRing2_getInstance(), Weapon$Elivagar_getInstance(), Weapon$Excalibur_getInstance(), Weapon$Naga_getInstance(), Weapon$DarkExcalibur_getInstance(), Weapon$DivineNaga_getInstance(), Weapon$SpectralTome_getInstance(), Weapon$SpectralTome2_getInstance(), Weapon$FireBreath_getInstance(), Weapon$FireBreath2_getInstance(), Weapon$LightningBreath_getInstance(), Weapon$LightningBreath2_getInstance(), Weapon$Flametongue_getInstance(), Weapon$Flametongue2_getInstance(), Weapon$LightBreath_getInstance(), Weapon$LightBreath2_getInstance(), Weapon$DarkBreath_getInstance(), Weapon$DarkBreath2_getInstance()];
  }
  Weapon.values = Weapon$values;
  function Weapon$valueOf(name) {
    switch (name) {
      case 'IronSword':
        return Weapon$IronSword_getInstance();
      case 'SteelSword':
        return Weapon$SteelSword_getInstance();
      case 'SilverSword':
        return Weapon$SilverSword_getInstance();
      case 'SilverSword2':
        return Weapon$SilverSword2_getInstance();
      case 'ArmorSlayer':
        return Weapon$ArmorSlayer_getInstance();
      case 'ArmorSlayer2':
        return Weapon$ArmorSlayer2_getInstance();
      case 'Armorsmasher2':
        return Weapon$Armorsmasher2_getInstance();
      case 'BraveSword':
        return Weapon$BraveSword_getInstance();
      case 'BraveSword2':
        return Weapon$BraveSword2_getInstance();
      case 'RubySword':
        return Weapon$RubySword_getInstance();
      case 'RubySword2':
        return Weapon$RubySword2_getInstance();
      case 'KillingEdge':
        return Weapon$KillingEdge_getInstance();
      case 'KillingEdge2':
        return Weapon$KillingEdge2_getInstance();
      case 'WaoDao':
        return Weapon$WaoDao_getInstance();
      case 'WaoDao2':
        return Weapon$WaoDao2_getInstance();
      case 'Zanbato':
        return Weapon$Zanbato_getInstance();
      case 'Zanbato2':
        return Weapon$Zanbato2_getInstance();
      case 'SlayingEdge':
        return Weapon$SlayingEdge_getInstance();
      case 'SlayingEdge2':
        return Weapon$SlayingEdge2_getInstance();
      case 'AyrasBlade':
        return Weapon$AyrasBlade_getInstance();
      case 'Folkvangr':
        return Weapon$Folkvangr_getInstance();
      case 'Falchion':
        return Weapon$Falchion_getInstance();
      case 'BindingBlade':
        return Weapon$BindingBlade_getInstance();
      case 'Durandal':
        return Weapon$Durandal_getInstance();
      case 'SolKatti':
        return Weapon$SolKatti_getInstance();
      case 'Yato':
        return Weapon$Yato_getInstance();
      case 'Raijinto':
        return Weapon$Raijinto_getInstance();
      case 'Sieglinde':
        return Weapon$Sieglinde_getInstance();
      case 'Tyrfing':
        return Weapon$Tyrfing_getInstance();
      case 'Mystletainn':
        return Weapon$Mystletainn_getInstance();
      case 'Eckesachs':
        return Weapon$Eckesachs_getInstance();
      case 'Siegfried':
        return Weapon$Siegfried_getInstance();
      case 'Ragnell':
        return Weapon$Ragnell_getInstance();
      case 'BlazingDurandal':
        return Weapon$BlazingDurandal_getInstance();
      case 'Amiti':
        return Weapon$Amiti_getInstance();
      case 'Alondite':
        return Weapon$Alondite_getInstance();
      case 'DivineTyrfing':
        return Weapon$DivineTyrfing_getInstance();
      case 'RegalBlade':
        return Weapon$RegalBlade_getInstance();
      case 'ResoluteBlade':
        return Weapon$ResoluteBlade_getInstance();
      case 'Audhulma':
        return Weapon$Audhulma_getInstance();
      case 'DarkGreatsword':
        return Weapon$DarkGreatsword_getInstance();
      case 'FiresweepSword':
        return Weapon$FiresweepSword_getInstance();
      case 'FiresweepSword2':
        return Weapon$FiresweepSword2_getInstance();
      case 'IronLance':
        return Weapon$IronLance_getInstance();
      case 'SteelLance':
        return Weapon$SteelLance_getInstance();
      case 'SilverLance':
        return Weapon$SilverLance_getInstance();
      case 'SilverLance2':
        return Weapon$SilverLance2_getInstance();
      case 'KillerLance':
        return Weapon$KillerLance_getInstance();
      case 'KillerLance2':
        return Weapon$KillerLance2_getInstance();
      case 'BraveLance':
        return Weapon$BraveLance_getInstance();
      case 'BraveLance2':
        return Weapon$BraveLance2_getInstance();
      case 'SapphireLance':
        return Weapon$SapphireLance_getInstance();
      case 'SapphireLance2':
        return Weapon$SapphireLance2_getInstance();
      case 'HeavySpear':
        return Weapon$HeavySpear_getInstance();
      case 'HeavySpear2':
        return Weapon$HeavySpear2_getInstance();
      case 'SlayingSpear2':
        return Weapon$SlayingSpear2_getInstance();
      case 'CarrotLance':
        return Weapon$CarrotLance_getInstance();
      case 'CarrotLance2':
        return Weapon$CarrotLance2_getInstance();
      case 'FirstBite':
        return Weapon$FirstBite_getInstance();
      case 'FirstBite2':
        return Weapon$FirstBite2_getInstance();
      case 'FiresweepLance':
        return Weapon$FiresweepLance_getInstance();
      case 'FiresweepLance2':
        return Weapon$FiresweepLance2_getInstance();
      case 'DeftHarpoon':
        return Weapon$DeftHarpoon_getInstance();
      case 'DeftHarpoon2':
        return Weapon$DeftHarpoon2_getInstance();
      case 'Ridersbane':
        return Weapon$Ridersbane_getInstance();
      case 'Ridersbane2':
        return Weapon$Ridersbane2_getInstance();
      case 'BerkutsLance':
        return Weapon$BerkutsLance_getInstance();
      case 'BerkutsLance2':
        return Weapon$BerkutsLance2_getInstance();
      case 'SlayingLance':
        return Weapon$SlayingLance_getInstance();
      case 'SlayingLance2':
        return Weapon$SlayingLance2_getInstance();
      case 'Fensalir':
        return Weapon$Fensalir_getInstance();
      case 'Siegmund':
        return Weapon$Siegmund_getInstance();
      case 'Gradivus':
        return Weapon$Gradivus_getInstance();
      case 'Vidofinir':
        return Weapon$Vidofinir_getInstance();
      case 'CursedLance':
        return Weapon$CursedLance_getInstance();
      case 'Geirskogul':
        return Weapon$Geirskogul_getInstance();
      case 'Leiptr':
        return Weapon$Leiptr_getInstance();
      case 'BrightNaginata':
        return Weapon$BrightNaginata_getInstance();
      case 'Tannenboom':
        return Weapon$Tannenboom_getInstance();
      case 'Tannenboom2':
        return Weapon$Tannenboom2_getInstance();
      case 'IronAxe':
        return Weapon$IronAxe_getInstance();
      case 'SteelAxe':
        return Weapon$SteelAxe_getInstance();
      case 'SilverAxe':
        return Weapon$SilverAxe_getInstance();
      case 'SilverAxe2':
        return Weapon$SilverAxe2_getInstance();
      case 'KillerAxe':
        return Weapon$KillerAxe_getInstance();
      case 'KillerAxe2':
        return Weapon$KillerAxe2_getInstance();
      case 'BraveAxe':
        return Weapon$BraveAxe_getInstance();
      case 'BraveAxe2':
        return Weapon$BraveAxe2_getInstance();
      case 'Hammer':
        return Weapon$Hammer_getInstance();
      case 'Hammer2':
        return Weapon$Hammer2_getInstance();
      case 'SlayingHammer2':
        return Weapon$SlayingHammer2_getInstance();
      case 'EmeraldAxe':
        return Weapon$EmeraldAxe_getInstance();
      case 'EmeraldAxe2':
        return Weapon$EmeraldAxe2_getInstance();
      case 'SlayingAxe':
        return Weapon$SlayingAxe_getInstance();
      case 'SlayingAxe2':
        return Weapon$SlayingAxe2_getInstance();
      case 'CarrotAxe':
        return Weapon$CarrotAxe_getInstance();
      case 'CarrotAxe2':
        return Weapon$CarrotAxe2_getInstance();
      case 'LegionsAxe':
        return Weapon$LegionsAxe_getInstance();
      case 'LegionsAxe2':
        return Weapon$LegionsAxe2_getInstance();
      case 'MelonCrusher':
        return Weapon$MelonCrusher_getInstance();
      case 'MelonCrusher2':
        return Weapon$MelonCrusher2_getInstance();
      case 'LilithFloatie':
        return Weapon$LilithFloatie_getInstance();
      case 'LilithFloatie2':
        return Weapon$LilithFloatie2_getInstance();
      case 'Noatun':
        return Weapon$Noatun_getInstance();
      case 'Hauteclere':
        return Weapon$Hauteclere_getInstance();
      case 'Armoads':
        return Weapon$Armoads_getInstance();
      case 'Urvan':
        return Weapon$Urvan_getInstance();
      case 'Uror':
        return Weapon$Uror_getInstance();
      case 'StoutTomahawk':
        return Weapon$StoutTomahawk_getInstance();
      case 'SackOGifts':
        return Weapon$SackOGifts_getInstance();
      case 'SackOGifts2':
        return Weapon$SackOGifts2_getInstance();
      case 'Handbell':
        return Weapon$Handbell_getInstance();
      case 'Handbell2':
        return Weapon$Handbell2_getInstance();
      case 'IronBow':
        return Weapon$IronBow_getInstance();
      case 'SteelBow':
        return Weapon$SteelBow_getInstance();
      case 'SilverBow':
        return Weapon$SilverBow_getInstance();
      case 'SilverBow2':
        return Weapon$SilverBow2_getInstance();
      case 'BraveBow':
        return Weapon$BraveBow_getInstance();
      case 'BraveBow2':
        return Weapon$BraveBow2_getInstance();
      case 'KillerBow':
        return Weapon$KillerBow_getInstance();
      case 'KillerBow2':
        return Weapon$KillerBow2_getInstance();
      case 'AssassinsBow':
        return Weapon$AssassinsBow_getInstance();
      case 'AssassinsBow2':
        return Weapon$AssassinsBow2_getInstance();
      case 'FiresweepBow':
        return Weapon$FiresweepBow_getInstance();
      case 'FiresweepBow2':
        return Weapon$FiresweepBow2_getInstance();
      case 'CupidArrow':
        return Weapon$CupidArrow_getInstance();
      case 'CupidArrow2':
        return Weapon$CupidArrow2_getInstance();
      case 'RefreshingBolt':
        return Weapon$RefreshingBolt_getInstance();
      case 'RefreshingBolt2':
        return Weapon$RefreshingBolt2_getInstance();
      case 'ClarissesBow':
        return Weapon$ClarissesBow_getInstance();
      case 'ClarissesBow2':
        return Weapon$ClarissesBow2_getInstance();
      case 'SlayingBow':
        return Weapon$SlayingBow_getInstance();
      case 'SlayingBow2':
        return Weapon$SlayingBow2_getInstance();
      case 'Parthia':
        return Weapon$Parthia_getInstance();
      case 'FujinYumi':
        return Weapon$FujinYumi_getInstance();
      case 'Nidhogg':
        return Weapon$Nidhogg_getInstance();
      case 'Mulagir':
        return Weapon$Mulagir_getInstance();
      case 'MonstrousBow':
        return Weapon$MonstrousBow_getInstance();
      case 'MonstrousBow2':
        return Weapon$MonstrousBow2_getInstance();
      case 'IronDagger':
        return Weapon$IronDagger_getInstance();
      case 'SteelDagger':
        return Weapon$SteelDagger_getInstance();
      case 'SilverDagger':
        return Weapon$SilverDagger_getInstance();
      case 'SilverDagger2':
        return Weapon$SilverDagger2_getInstance();
      case 'RogueDagger':
        return Weapon$RogueDagger_getInstance();
      case 'RogueDagger2':
        return Weapon$RogueDagger2_getInstance();
      case 'SmokeDagger':
        return Weapon$SmokeDagger_getInstance();
      case 'SmokeDagger2':
        return Weapon$SmokeDagger2_getInstance();
      case 'PoisonDagger':
        return Weapon$PoisonDagger_getInstance();
      case 'PoisonDagger2':
        return Weapon$PoisonDagger2_getInstance();
      case 'Seashell':
        return Weapon$Seashell_getInstance();
      case 'Seashell2':
        return Weapon$Seashell2_getInstance();
      case 'DancersFan':
        return Weapon$DancersFan_getInstance();
      case 'DancersFan2':
        return Weapon$DancersFan2_getInstance();
      case 'DeathlyDagger':
        return Weapon$DeathlyDagger_getInstance();
      case 'KittyPaddle':
        return Weapon$KittyPaddle_getInstance();
      case 'KittyPaddle2':
        return Weapon$KittyPaddle2_getInstance();
      case 'Assault':
        return Weapon$Assault_getInstance();
      case 'Absorb':
        return Weapon$Absorb_getInstance();
      case 'Absorb2':
        return Weapon$Absorb2_getInstance();
      case 'Candlelight':
        return Weapon$Candlelight_getInstance();
      case 'Candlelight2':
        return Weapon$Candlelight2_getInstance();
      case 'Gravity':
        return Weapon$Gravity_getInstance();
      case 'Gravity2':
        return Weapon$Gravity2_getInstance();
      case 'Fear':
        return Weapon$Fear_getInstance();
      case 'Fear2':
        return Weapon$Fear2_getInstance();
      case 'Slow':
        return Weapon$Slow_getInstance();
      case 'Slow2':
        return Weapon$Slow2_getInstance();
      case 'Panic':
        return Weapon$Panic_getInstance();
      case 'Panic2':
        return Weapon$Panic2_getInstance();
      case 'Pain':
        return Weapon$Pain_getInstance();
      case 'Pain2':
        return Weapon$Pain2_getInstance();
      case 'Flux':
        return Weapon$Flux_getInstance();
      case 'Fire':
        return Weapon$Fire_getInstance();
      case 'Ruin':
        return Weapon$Ruin_getInstance();
      case 'Elfire':
        return Weapon$Elfire_getInstance();
      case 'Rauorwolf':
        return Weapon$Rauorwolf_getInstance();
      case 'Rauorwolf2':
        return Weapon$Rauorwolf2_getInstance();
      case 'KeenRauorwolf2':
        return Weapon$KeenRauorwolf2_getInstance();
      case 'Rauorraven':
        return Weapon$Rauorraven_getInstance();
      case 'Rauorraven2':
        return Weapon$Rauorraven2_getInstance();
      case 'Rauorblade':
        return Weapon$Rauorblade_getInstance();
      case 'Rauorblade2':
        return Weapon$Rauorblade2_getInstance();
      case 'Rauorowl':
        return Weapon$Rauorowl_getInstance();
      case 'Rauorowl2':
        return Weapon$Rauorowl2_getInstance();
      case 'Fenrir':
        return Weapon$Fenrir_getInstance();
      case 'Fenrir2':
        return Weapon$Fenrir2_getInstance();
      case 'Bolganone':
        return Weapon$Bolganone_getInstance();
      case 'Bolganone2':
        return Weapon$Bolganone2_getInstance();
      case 'TomatoTome':
        return Weapon$TomatoTome_getInstance();
      case 'TomatoTome2':
        return Weapon$TomatoTome2_getInstance();
      case 'Brynhildr':
        return Weapon$Brynhildr_getInstance();
      case 'Cymbeline':
        return Weapon$Cymbeline_getInstance();
      case 'Ragnarok':
        return Weapon$Ragnarok_getInstance();
      case 'Valflame':
        return Weapon$Valflame_getInstance();
      case 'Grimoire':
        return Weapon$Grimoire_getInstance();
      case 'Candelabra':
        return Weapon$Candelabra_getInstance();
      case 'Candelabra2':
        return Weapon$Candelabra2_getInstance();
      case 'Thunder':
        return Weapon$Thunder_getInstance();
      case 'Elthunder':
        return Weapon$Elthunder_getInstance();
      case 'Blarwolf':
        return Weapon$Blarwolf_getInstance();
      case 'Blarwolf2':
        return Weapon$Blarwolf2_getInstance();
      case 'KeenBlarwolf2':
        return Weapon$KeenBlarwolf2_getInstance();
      case 'Blarraven':
        return Weapon$Blarraven_getInstance();
      case 'Blarraven2':
        return Weapon$Blarraven2_getInstance();
      case 'Blarblade':
        return Weapon$Blarblade_getInstance();
      case 'Blarblade2':
        return Weapon$Blarblade2_getInstance();
      case 'Blarowl':
        return Weapon$Blarowl_getInstance();
      case 'Blarowl2':
        return Weapon$Blarowl2_getInstance();
      case 'Thoron':
        return Weapon$Thoron_getInstance();
      case 'Thoron2':
        return Weapon$Thoron2_getInstance();
      case 'BlueEgg':
        return Weapon$BlueEgg_getInstance();
      case 'BlueEgg2':
        return Weapon$BlueEgg2_getInstance();
      case 'BlessedBouquet':
        return Weapon$BlessedBouquet_getInstance();
      case 'BlessedBouquet2':
        return Weapon$BlessedBouquet2_getInstance();
      case 'SealifeTome':
        return Weapon$SealifeTome_getInstance();
      case 'SealifeTome2':
        return Weapon$SealifeTome2_getInstance();
      case 'DancersScore':
        return Weapon$DancersScore_getInstance();
      case 'DancersScore2':
        return Weapon$DancersScore2_getInstance();
      case 'DarkAura':
        return Weapon$DarkAura_getInstance();
      case 'Valaskjalf':
        return Weapon$Valaskjalf_getInstance();
      case 'Aura':
        return Weapon$Aura_getInstance();
      case 'DireThunder':
        return Weapon$DireThunder_getInstance();
      case 'WeirdingTome':
        return Weapon$WeirdingTome_getInstance();
      case 'Wind':
        return Weapon$Wind_getInstance();
      case 'Elwind':
        return Weapon$Elwind_getInstance();
      case 'Rexcalibur':
        return Weapon$Rexcalibur_getInstance();
      case 'Rexcalibur2':
        return Weapon$Rexcalibur2_getInstance();
      case 'Gronnwolf':
        return Weapon$Gronnwolf_getInstance();
      case 'Gronnwolf2':
        return Weapon$Gronnwolf2_getInstance();
      case 'KeenGronnwolf2':
        return Weapon$KeenGronnwolf2_getInstance();
      case 'Gronnraven':
        return Weapon$Gronnraven_getInstance();
      case 'Gronnraven2':
        return Weapon$Gronnraven2_getInstance();
      case 'Gronnblade':
        return Weapon$Gronnblade_getInstance();
      case 'Gronnblade2':
        return Weapon$Gronnblade2_getInstance();
      case 'Gronnowl':
        return Weapon$Gronnowl_getInstance();
      case 'Gronnowl2':
        return Weapon$Gronnowl2_getInstance();
      case 'GreenEgg':
        return Weapon$GreenEgg_getInstance();
      case 'GreenEgg2':
        return Weapon$GreenEgg2_getInstance();
      case 'HibiscusTome':
        return Weapon$HibiscusTome_getInstance();
      case 'HibiscusTome2':
        return Weapon$HibiscusTome2_getInstance();
      case 'DancersRing':
        return Weapon$DancersRing_getInstance();
      case 'DancersRing2':
        return Weapon$DancersRing2_getInstance();
      case 'Elivagar':
        return Weapon$Elivagar_getInstance();
      case 'Excalibur':
        return Weapon$Excalibur_getInstance();
      case 'Naga':
        return Weapon$Naga_getInstance();
      case 'DarkExcalibur':
        return Weapon$DarkExcalibur_getInstance();
      case 'DivineNaga':
        return Weapon$DivineNaga_getInstance();
      case 'SpectralTome':
        return Weapon$SpectralTome_getInstance();
      case 'SpectralTome2':
        return Weapon$SpectralTome2_getInstance();
      case 'FireBreath':
        return Weapon$FireBreath_getInstance();
      case 'FireBreath2':
        return Weapon$FireBreath2_getInstance();
      case 'LightningBreath':
        return Weapon$LightningBreath_getInstance();
      case 'LightningBreath2':
        return Weapon$LightningBreath2_getInstance();
      case 'Flametongue':
        return Weapon$Flametongue_getInstance();
      case 'Flametongue2':
        return Weapon$Flametongue2_getInstance();
      case 'LightBreath':
        return Weapon$LightBreath_getInstance();
      case 'LightBreath2':
        return Weapon$LightBreath2_getInstance();
      case 'DarkBreath':
        return Weapon$DarkBreath_getInstance();
      case 'DarkBreath2':
        return Weapon$DarkBreath2_getInstance();
      default:throwISE('No enum constant jp.blogspot.turanukimaru.fehs.skill.Weapon.' + name);
    }
  }
  Weapon.valueOf_61zpoe$ = Weapon$valueOf;
  var package$jp = _.jp || (_.jp = {});
  var package$blogspot = package$jp.blogspot || (package$jp.blogspot = {});
  var package$turanukimaru = package$blogspot.turanukimaru || (package$blogspot.turanukimaru = {});
  var package$fehs = package$turanukimaru.fehs || (package$turanukimaru.fehs = {});
  package$fehs.ArmedHero = ArmedHero;
  Object.defineProperty(package$fehs, 'ArmedHeroRepository', {
    get: ArmedHeroRepository_getInstance
  });
  package$fehs.AttackResult = AttackResult;
  package$fehs.BaseHero = BaseHero;
  package$fehs.BattleParam = BattleParam;
  package$fehs.BattleUnit = BattleUnit;
  Object.defineProperty(WeaponType, 'SWORD', {
    get: WeaponType$SWORD_getInstance
  });
  Object.defineProperty(WeaponType, 'LANCE', {
    get: WeaponType$LANCE_getInstance
  });
  Object.defineProperty(WeaponType, 'AXE', {
    get: WeaponType$AXE_getInstance
  });
  Object.defineProperty(WeaponType, 'DRAGON', {
    get: WeaponType$DRAGON_getInstance
  });
  Object.defineProperty(WeaponType, 'RTOME', {
    get: WeaponType$RTOME_getInstance
  });
  Object.defineProperty(WeaponType, 'BTOME', {
    get: WeaponType$BTOME_getInstance
  });
  Object.defineProperty(WeaponType, 'GTOME', {
    get: WeaponType$GTOME_getInstance
  });
  Object.defineProperty(WeaponType, 'BOW', {
    get: WeaponType$BOW_getInstance
  });
  Object.defineProperty(WeaponType, 'DAGGER', {
    get: WeaponType$DAGGER_getInstance
  });
  Object.defineProperty(WeaponType, 'STAFF', {
    get: WeaponType$STAFF_getInstance
  });
  Object.defineProperty(WeaponType, 'Companion', {
    get: WeaponType$Companion_getInstance
  });
  package$fehs.WeaponType = WeaponType;
  Object.defineProperty(MoveType, 'INFANTRY', {
    get: MoveType$INFANTRY_getInstance
  });
  Object.defineProperty(MoveType, 'CAVALRY', {
    get: MoveType$CAVALRY_getInstance
  });
  Object.defineProperty(MoveType, 'FLIER', {
    get: MoveType$FLIER_getInstance
  });
  Object.defineProperty(MoveType, 'ARMORED', {
    get: MoveType$ARMORED_getInstance
  });
  Object.defineProperty(MoveType, 'Companion', {
    get: MoveType$Companion_getInstance
  });
  package$fehs.MoveType = MoveType;
  Object.defineProperty(BoonType, 'NONE', {
    get: BoonType$NONE_getInstance
  });
  Object.defineProperty(BoonType, 'HP', {
    get: BoonType$HP_getInstance
  });
  Object.defineProperty(BoonType, 'ATK', {
    get: BoonType$ATK_getInstance
  });
  Object.defineProperty(BoonType, 'SPD', {
    get: BoonType$SPD_getInstance
  });
  Object.defineProperty(BoonType, 'DEF', {
    get: BoonType$DEF_getInstance
  });
  Object.defineProperty(BoonType, 'RES', {
    get: BoonType$RES_getInstance
  });
  Object.defineProperty(BoonType, 'Companion', {
    get: BoonType$Companion_getInstance
  });
  package$fehs.BoonType = BoonType;
  Object.defineProperty(SIDES, 'NONE', {
    get: SIDES$NONE_getInstance
  });
  Object.defineProperty(SIDES, 'ATTACKER', {
    get: SIDES$ATTACKER_getInstance
  });
  Object.defineProperty(SIDES, 'COUNTER', {
    get: SIDES$COUNTER_getInstance
  });
  package$fehs.SIDES = SIDES;
  Object.defineProperty(EffectiveAgainst, 'NONE', {
    get: EffectiveAgainst$NONE_getInstance
  });
  Object.defineProperty(EffectiveAgainst, 'ARMORED', {
    get: EffectiveAgainst$ARMORED_getInstance
  });
  Object.defineProperty(EffectiveAgainst, 'FLIER', {
    get: EffectiveAgainst$FLIER_getInstance
  });
  Object.defineProperty(EffectiveAgainst, 'MAGIC', {
    get: EffectiveAgainst$MAGIC_getInstance
  });
  Object.defineProperty(EffectiveAgainst, 'CAVALRY', {
    get: EffectiveAgainst$CAVALRY_getInstance
  });
  Object.defineProperty(EffectiveAgainst, 'DRAGON', {
    get: EffectiveAgainst$DRAGON_getInstance
  });
  Object.defineProperty(EffectiveAgainst, 'Companion', {
    get: EffectiveAgainst$Companion_getInstance
  });
  package$fehs.EffectiveAgainst = EffectiveAgainst;
  package$fehs.FightPlan = FightPlan;
  Object.defineProperty(Locale, 'JAPANESE', {
    get: Locale$JAPANESE_getInstance
  });
  Object.defineProperty(Locale, 'JAPAN', {
    get: Locale$JAPAN_getInstance
  });
  Object.defineProperty(Locale, 'OTHER', {
    get: Locale$OTHER_getInstance
  });
  package$fehs.Locale = Locale;
  package$fehs.ModelObjectRepository = ModelObjectRepository;
  Object.defineProperty(package$fehs, 'StandardBaseHero', {
    get: StandardBaseHero_getInstance
  });
  Object.defineProperty(Assist, 'RallyAttack', {
    get: Assist$RallyAttack_getInstance
  });
  Object.defineProperty(Assist, 'RallySpeed', {
    get: Assist$RallySpeed_getInstance
  });
  Object.defineProperty(Assist, 'RallyDefense', {
    get: Assist$RallyDefense_getInstance
  });
  Object.defineProperty(Assist, 'RallyResistance', {
    get: Assist$RallyResistance_getInstance
  });
  Object.defineProperty(Assist, 'RallyAtkSpd', {
    get: Assist$RallyAtkSpd_getInstance
  });
  Object.defineProperty(Assist, 'RallyAtkDef', {
    get: Assist$RallyAtkDef_getInstance
  });
  Object.defineProperty(Assist, 'RallyAtkRes', {
    get: Assist$RallyAtkRes_getInstance
  });
  Object.defineProperty(Assist, 'RallyDefRes', {
    get: Assist$RallyDefRes_getInstance
  });
  Object.defineProperty(Assist, 'RallySpdDef', {
    get: Assist$RallySpdDef_getInstance
  });
  Object.defineProperty(Assist, 'RallySpdRes', {
    get: Assist$RallySpdRes_getInstance
  });
  Object.defineProperty(Assist, 'Sing', {
    get: Assist$Sing_getInstance
  });
  Object.defineProperty(Assist, 'Dance', {
    get: Assist$Dance_getInstance
  });
  Object.defineProperty(Assist, 'ReciprocalAid', {
    get: Assist$ReciprocalAid_getInstance
  });
  Object.defineProperty(Assist, 'Heal', {
    get: Assist$Heal_getInstance
  });
  Object.defineProperty(Assist, 'Reconcile', {
    get: Assist$Reconcile_getInstance
  });
  Object.defineProperty(Assist, 'Rehabilitate', {
    get: Assist$Rehabilitate_getInstance
  });
  Object.defineProperty(Assist, 'Mend', {
    get: Assist$Mend_getInstance
  });
  Object.defineProperty(Assist, 'Recover', {
    get: Assist$Recover_getInstance
  });
  Object.defineProperty(Assist, 'Physic', {
    get: Assist$Physic_getInstance
  });
  Object.defineProperty(Assist, 'Martyr', {
    get: Assist$Martyr_getInstance
  });
  Object.defineProperty(Assist, 'ArdentSacrifice', {
    get: Assist$ArdentSacrifice_getInstance
  });
  Object.defineProperty(Assist, 'Swap', {
    get: Assist$Swap_getInstance
  });
  Object.defineProperty(Assist, 'Pivot', {
    get: Assist$Pivot_getInstance
  });
  Object.defineProperty(Assist, 'Reposition', {
    get: Assist$Reposition_getInstance
  });
  Object.defineProperty(Assist, 'DrawBack', {
    get: Assist$DrawBack_getInstance
  });
  Object.defineProperty(Assist, 'Shove', {
    get: Assist$Shove_getInstance
  });
  Object.defineProperty(Assist, 'Smite', {
    get: Assist$Smite_getInstance
  });
  Object.defineProperty(Assist, 'HarshCommand', {
    get: Assist$HarshCommand_getInstance
  });
  Object.defineProperty(Assist, 'Companion', {
    get: Assist$Companion_getInstance
  });
  var package$skill = package$fehs.skill || (package$fehs.skill = {});
  package$skill.Assist = Assist;
  package$skill.LappedSkill = LappedSkill;
  Object.defineProperty(package$skill, 'nullifiesUs', {
    get: function () {
      return nullifiesUs;
    }
  });
  Object.defineProperty(package$skill, 'nullifiesJp', {
    get: function () {
      return nullifiesJp;
    }
  });
  Object.defineProperty(RefineSkill, 'Range1Atk', {
    get: RefineSkill$Range1Atk_getInstance
  });
  Object.defineProperty(RefineSkill, 'Range1Spd', {
    get: RefineSkill$Range1Spd_getInstance
  });
  Object.defineProperty(RefineSkill, 'Range1Def', {
    get: RefineSkill$Range1Def_getInstance
  });
  Object.defineProperty(RefineSkill, 'Range1Res', {
    get: RefineSkill$Range1Res_getInstance
  });
  Object.defineProperty(RefineSkill, 'Range2Atk', {
    get: RefineSkill$Range2Atk_getInstance
  });
  Object.defineProperty(RefineSkill, 'Range2Spd', {
    get: RefineSkill$Range2Spd_getInstance
  });
  Object.defineProperty(RefineSkill, 'Range2Def', {
    get: RefineSkill$Range2Def_getInstance
  });
  Object.defineProperty(RefineSkill, 'Range2Res', {
    get: RefineSkill$Range2Res_getInstance
  });
  Object.defineProperty(RefineSkill, 'WrathfulStaff', {
    get: RefineSkill$WrathfulStaff_getInstance
  });
  Object.defineProperty(RefineSkill, 'DazzlingStaff', {
    get: RefineSkill$DazzlingStaff_getInstance
  });
  Object.defineProperty(RefineSkill, 'SolKatti', {
    get: RefineSkill$SolKatti_getInstance
  });
  Object.defineProperty(RefineSkill, 'Mystletainn', {
    get: RefineSkill$Mystletainn_getInstance
  });
  Object.defineProperty(RefineSkill, 'Siegmund', {
    get: RefineSkill$Siegmund_getInstance
  });
  Object.defineProperty(RefineSkill, 'Hauteclere', {
    get: RefineSkill$Hauteclere_getInstance
  });
  Object.defineProperty(RefineSkill, 'FujinYumi', {
    get: RefineSkill$FujinYumi_getInstance
  });
  Object.defineProperty(RefineSkill, 'DeathlyDagger2', {
    get: RefineSkill$DeathlyDagger2_getInstance
  });
  Object.defineProperty(RefineSkill, 'Armorsmasher', {
    get: RefineSkill$Armorsmasher_getInstance
  });
  Object.defineProperty(RefineSkill, 'SlayingSpear', {
    get: RefineSkill$SlayingSpear_getInstance
  });
  Object.defineProperty(RefineSkill, 'SlayingHammer', {
    get: RefineSkill$SlayingHammer_getInstance
  });
  Object.defineProperty(RefineSkill, 'Zanbato', {
    get: RefineSkill$Zanbato_getInstance
  });
  Object.defineProperty(RefineSkill, 'Ridersbane', {
    get: RefineSkill$Ridersbane_getInstance
  });
  Object.defineProperty(RefineSkill, 'KeenRauorwolf2', {
    get: RefineSkill$KeenRauorwolf2_getInstance
  });
  Object.defineProperty(RefineSkill, 'KeenBlarwolf2', {
    get: RefineSkill$KeenBlarwolf2_getInstance
  });
  Object.defineProperty(RefineSkill, 'KeenGronnwolf2', {
    get: RefineSkill$KeenGronnwolf2_getInstance
  });
  Object.defineProperty(RefineSkill, 'SilverSword2', {
    get: RefineSkill$SilverSword2_getInstance
  });
  Object.defineProperty(RefineSkill, 'SilverLance2', {
    get: RefineSkill$SilverLance2_getInstance
  });
  Object.defineProperty(RefineSkill, 'SilverAxe2', {
    get: RefineSkill$SilverAxe2_getInstance
  });
  Object.defineProperty(RefineSkill, 'SilverBow2', {
    get: RefineSkill$SilverBow2_getInstance
  });
  Object.defineProperty(RefineSkill, 'SilverDagger2', {
    get: RefineSkill$SilverDagger2_getInstance
  });
  Object.defineProperty(RefineSkill, 'Bolganone2', {
    get: RefineSkill$Bolganone2_getInstance
  });
  Object.defineProperty(RefineSkill, 'Fenrir2', {
    get: RefineSkill$Fenrir2_getInstance
  });
  Object.defineProperty(RefineSkill, 'Thoron2', {
    get: RefineSkill$Thoron2_getInstance
  });
  Object.defineProperty(RefineSkill, 'Rexcalibur2', {
    get: RefineSkill$Rexcalibur2_getInstance
  });
  Object.defineProperty(RefineSkill, 'Rauorowl2', {
    get: RefineSkill$Rauorowl2_getInstance
  });
  Object.defineProperty(RefineSkill, 'Blarowl2', {
    get: RefineSkill$Blarowl2_getInstance
  });
  Object.defineProperty(RefineSkill, 'Gronnowl2', {
    get: RefineSkill$Gronnowl2_getInstance
  });
  Object.defineProperty(RefineSkill, 'SmokeDagger2', {
    get: RefineSkill$SmokeDagger2_getInstance
  });
  Object.defineProperty(RefineSkill, 'RogueDagger2', {
    get: RefineSkill$RogueDagger2_getInstance
  });
  Object.defineProperty(RefineSkill, 'Flametongue2', {
    get: RefineSkill$Flametongue2_getInstance
  });
  Object.defineProperty(RefineSkill, 'LightBreath2', {
    get: RefineSkill$LightBreath2_getInstance
  });
  Object.defineProperty(RefineSkill, 'CarrotLance2', {
    get: RefineSkill$CarrotLance2_getInstance
  });
  Object.defineProperty(RefineSkill, 'CarrotAxe2', {
    get: RefineSkill$CarrotAxe2_getInstance
  });
  Object.defineProperty(RefineSkill, 'BlueEgg2', {
    get: RefineSkill$BlueEgg2_getInstance
  });
  Object.defineProperty(RefineSkill, 'GreenEgg2', {
    get: RefineSkill$GreenEgg2_getInstance
  });
  Object.defineProperty(RefineSkill, 'DancersFan2', {
    get: RefineSkill$DancersFan2_getInstance
  });
  Object.defineProperty(RefineSkill, 'LightningBreath2', {
    get: RefineSkill$LightningBreath2_getInstance
  });
  Object.defineProperty(RefineSkill, 'DarkBreath2', {
    get: RefineSkill$DarkBreath2_getInstance
  });
  Object.defineProperty(RefineSkill, 'BerkutsLance2', {
    get: RefineSkill$BerkutsLance2_getInstance
  });
  Object.defineProperty(RefineSkill, 'GuardBow2', {
    get: RefineSkill$GuardBow2_getInstance
  });
  Object.defineProperty(RefineSkill, 'DeathlyDagger', {
    get: RefineSkill$DeathlyDagger_getInstance
  });
  Object.defineProperty(RefineSkill, 'Companion', {
    get: RefineSkill$Companion_getInstance
  });
  Object.defineProperty(RefineSkill$RefineType, 'NONE', {
    get: RefineSkill$RefineType$NONE_getInstance
  });
  Object.defineProperty(RefineSkill$RefineType, 'Range1', {
    get: RefineSkill$RefineType$Range1_getInstance
  });
  Object.defineProperty(RefineSkill$RefineType, 'Range2', {
    get: RefineSkill$RefineType$Range2_getInstance
  });
  Object.defineProperty(RefineSkill$RefineType, 'Staff', {
    get: RefineSkill$RefineType$Staff_getInstance
  });
  Object.defineProperty(RefineSkill$RefineType, 'DependWeapon', {
    get: RefineSkill$RefineType$DependWeapon_getInstance
  });
  Object.defineProperty(RefineSkill$RefineType, 'ReplaceWeapon', {
    get: RefineSkill$RefineType$ReplaceWeapon_getInstance
  });
  Object.defineProperty(RefineSkill$RefineType, 'NOT_WEAPON', {
    get: RefineSkill$RefineType$NOT_WEAPON_getInstance
  });
  RefineSkill.RefineType = RefineSkill$RefineType;
  package$skill.RefineSkill = RefineSkill;
  Object.defineProperty(Seal, 'Hp', {
    get: Seal$Hp_getInstance
  });
  Object.defineProperty(Seal, 'SquadAceA', {
    get: Seal$SquadAceA_getInstance
  });
  Object.defineProperty(Seal, 'Attack', {
    get: Seal$Attack_getInstance
  });
  Object.defineProperty(Seal, 'Speed', {
    get: Seal$Speed_getInstance
  });
  Object.defineProperty(Seal, 'SquadAceD', {
    get: Seal$SquadAceD_getInstance
  });
  Object.defineProperty(Seal, 'Defense', {
    get: Seal$Defense_getInstance
  });
  Object.defineProperty(Seal, 'SquadAceB', {
    get: Seal$SquadAceB_getInstance
  });
  Object.defineProperty(Seal, 'Resistance', {
    get: Seal$Resistance_getInstance
  });
  Object.defineProperty(Seal, 'SquadAceC', {
    get: Seal$SquadAceC_getInstance
  });
  Object.defineProperty(Seal, 'DistantDef', {
    get: Seal$DistantDef_getInstance
  });
  Object.defineProperty(Seal, 'BrashAssault', {
    get: Seal$BrashAssault_getInstance
  });
  Object.defineProperty(Seal, 'SpurAtk', {
    get: Seal$SpurAtk_getInstance
  });
  Object.defineProperty(Seal, 'SpurSpd', {
    get: Seal$SpurSpd_getInstance
  });
  Object.defineProperty(Seal, 'SpurDef', {
    get: Seal$SpurDef_getInstance
  });
  Object.defineProperty(Seal, 'SpurRes', {
    get: Seal$SpurRes_getInstance
  });
  Object.defineProperty(Seal, 'FortifyDef', {
    get: Seal$FortifyDef_getInstance
  });
  Object.defineProperty(Seal, 'FortifyRes', {
    get: Seal$FortifyRes_getInstance
  });
  Object.defineProperty(Seal, 'BreathOfLife', {
    get: Seal$BreathOfLife_getInstance
  });
  Object.defineProperty(Seal, 'Guidance', {
    get: Seal$Guidance_getInstance
  });
  Object.defineProperty(Seal, 'AttackSmoke', {
    get: Seal$AttackSmoke_getInstance
  });
  Object.defineProperty(Seal, 'AttackPloy', {
    get: Seal$AttackPloy_getInstance
  });
  Object.defineProperty(Seal, 'PanicPloy', {
    get: Seal$PanicPloy_getInstance
  });
  Object.defineProperty(Seal, 'HardyBearing', {
    get: Seal$HardyBearing_getInstance
  });
  Object.defineProperty(Seal, 'PhantomSpeed', {
    get: Seal$PhantomSpeed_getInstance
  });
  Object.defineProperty(Seal, 'QuickenedPulse', {
    get: Seal$QuickenedPulse_getInstance
  });
  Object.defineProperty(Seal, 'DeflectMagic', {
    get: Seal$DeflectMagic_getInstance
  });
  Object.defineProperty(Seal, 'DeflectMelee', {
    get: Seal$DeflectMelee_getInstance
  });
  Object.defineProperty(Seal, 'DeflectMissile', {
    get: Seal$DeflectMissile_getInstance
  });
  Object.defineProperty(Seal, 'Companion', {
    get: Seal$Companion_getInstance
  });
  package$skill.Seal = Seal;
  Skill.None = Skill$None;
  Object.defineProperty(Skill, 'Companion', {
    get: Skill$Companion_getInstance
  });
  Object.defineProperty(Skill$SkillType, 'NONE', {
    get: Skill$SkillType$NONE_getInstance
  });
  Object.defineProperty(Skill$SkillType, 'A', {
    get: Skill$SkillType$A_getInstance
  });
  Object.defineProperty(Skill$SkillType, 'B', {
    get: Skill$SkillType$B_getInstance
  });
  Object.defineProperty(Skill$SkillType, 'C', {
    get: Skill$SkillType$C_getInstance
  });
  Object.defineProperty(Skill$SkillType, 'SWORD', {
    get: Skill$SkillType$SWORD_getInstance
  });
  Object.defineProperty(Skill$SkillType, 'LANCE', {
    get: Skill$SkillType$LANCE_getInstance
  });
  Object.defineProperty(Skill$SkillType, 'AXE', {
    get: Skill$SkillType$AXE_getInstance
  });
  Object.defineProperty(Skill$SkillType, 'DRAGON', {
    get: Skill$SkillType$DRAGON_getInstance
  });
  Object.defineProperty(Skill$SkillType, 'REFINED_DRAGON', {
    get: Skill$SkillType$REFINED_DRAGON_getInstance
  });
  Object.defineProperty(Skill$SkillType, 'RTOME', {
    get: Skill$SkillType$RTOME_getInstance
  });
  Object.defineProperty(Skill$SkillType, 'BTOME', {
    get: Skill$SkillType$BTOME_getInstance
  });
  Object.defineProperty(Skill$SkillType, 'GTOME', {
    get: Skill$SkillType$GTOME_getInstance
  });
  Object.defineProperty(Skill$SkillType, 'BOW', {
    get: Skill$SkillType$BOW_getInstance
  });
  Object.defineProperty(Skill$SkillType, 'DAGGER', {
    get: Skill$SkillType$DAGGER_getInstance
  });
  Object.defineProperty(Skill$SkillType, 'STAFF', {
    get: Skill$SkillType$STAFF_getInstance
  });
  Object.defineProperty(Skill$SkillType, 'ASSIST', {
    get: Skill$SkillType$ASSIST_getInstance
  });
  Object.defineProperty(Skill$SkillType, 'SPECIAL_A', {
    get: Skill$SkillType$SPECIAL_A_getInstance
  });
  Object.defineProperty(Skill$SkillType, 'SPECIAL_B', {
    get: Skill$SkillType$SPECIAL_B_getInstance
  });
  Object.defineProperty(Skill$SkillType, 'SPECIAL_C', {
    get: Skill$SkillType$SPECIAL_C_getInstance
  });
  Object.defineProperty(Skill$SkillType, 'SPECIAL_D', {
    get: Skill$SkillType$SPECIAL_D_getInstance
  });
  Object.defineProperty(Skill$SkillType, 'SEAL', {
    get: Skill$SkillType$SEAL_getInstance
  });
  Object.defineProperty(Skill$SkillType, 'REFINERY', {
    get: Skill$SkillType$REFINERY_getInstance
  });
  Skill.SkillType = Skill$SkillType;
  package$skill.Skill = Skill;
  Object.defineProperty(SkillA, 'Hp', {
    get: SkillA$Hp_getInstance
  });
  Object.defineProperty(SkillA, 'HpSpd', {
    get: SkillA$HpSpd_getInstance
  });
  Object.defineProperty(SkillA, 'HpRes', {
    get: SkillA$HpRes_getInstance
  });
  Object.defineProperty(SkillA, 'Attack', {
    get: SkillA$Attack_getInstance
  });
  Object.defineProperty(SkillA, 'AtkSpd', {
    get: SkillA$AtkSpd_getInstance
  });
  Object.defineProperty(SkillA, 'AtkRes', {
    get: SkillA$AtkRes_getInstance
  });
  Object.defineProperty(SkillA, 'Speed', {
    get: SkillA$Speed_getInstance
  });
  Object.defineProperty(SkillA, 'SpdRes', {
    get: SkillA$SpdRes_getInstance
  });
  Object.defineProperty(SkillA, 'SpdDef', {
    get: SkillA$SpdDef_getInstance
  });
  Object.defineProperty(SkillA, 'Defense', {
    get: SkillA$Defense_getInstance
  });
  Object.defineProperty(SkillA, 'AtkDef', {
    get: SkillA$AtkDef_getInstance
  });
  Object.defineProperty(SkillA, 'HpDef', {
    get: SkillA$HpDef_getInstance
  });
  Object.defineProperty(SkillA, 'Resistance', {
    get: SkillA$Resistance_getInstance
  });
  Object.defineProperty(SkillA, 'DefiantAtk', {
    get: SkillA$DefiantAtk_getInstance
  });
  Object.defineProperty(SkillA, 'DefiantSpd', {
    get: SkillA$DefiantSpd_getInstance
  });
  Object.defineProperty(SkillA, 'DefiantDef', {
    get: SkillA$DefiantDef_getInstance
  });
  Object.defineProperty(SkillA, 'DefiantRes', {
    get: SkillA$DefiantRes_getInstance
  });
  Object.defineProperty(SkillA, 'TriangleAdept', {
    get: SkillA$TriangleAdept_getInstance
  });
  Object.defineProperty(SkillA, 'LifeAndDeath', {
    get: SkillA$LifeAndDeath_getInstance
  });
  Object.defineProperty(SkillA, 'Furry', {
    get: SkillA$Furry_getInstance
  });
  Object.defineProperty(SkillA, 'FortressDef', {
    get: SkillA$FortressDef_getInstance
  });
  Object.defineProperty(SkillA, 'FortressRes', {
    get: SkillA$FortressRes_getInstance
  });
  Object.defineProperty(SkillA, 'ArmoredBlow', {
    get: SkillA$ArmoredBlow_getInstance
  });
  Object.defineProperty(SkillA, 'WardingBlow', {
    get: SkillA$WardingBlow_getInstance
  });
  Object.defineProperty(SkillA, 'DeathBlow', {
    get: SkillA$DeathBlow_getInstance
  });
  Object.defineProperty(SkillA, 'DartingBlow', {
    get: SkillA$DartingBlow_getInstance
  });
  Object.defineProperty(SkillA, 'SwiftSparrow', {
    get: SkillA$SwiftSparrow_getInstance
  });
  Object.defineProperty(SkillA, 'SturdyBlow', {
    get: SkillA$SturdyBlow_getInstance
  });
  Object.defineProperty(SkillA, 'SteadyBlow', {
    get: SkillA$SteadyBlow_getInstance
  });
  Object.defineProperty(SkillA, 'MirrorStrike', {
    get: SkillA$MirrorStrike_getInstance
  });
  Object.defineProperty(SkillA, 'BracingBlow', {
    get: SkillA$BracingBlow_getInstance
  });
  Object.defineProperty(SkillA, 'SwiftStrike', {
    get: SkillA$SwiftStrike_getInstance
  });
  Object.defineProperty(SkillA, 'DistantDef', {
    get: SkillA$DistantDef_getInstance
  });
  Object.defineProperty(SkillA, 'CloseDef', {
    get: SkillA$CloseDef_getInstance
  });
  Object.defineProperty(SkillA, 'FierceStance', {
    get: SkillA$FierceStance_getInstance
  });
  Object.defineProperty(SkillA, 'SteadyStance', {
    get: SkillA$SteadyStance_getInstance
  });
  Object.defineProperty(SkillA, 'WardingStance', {
    get: SkillA$WardingStance_getInstance
  });
  Object.defineProperty(SkillA, 'SteadyBreath', {
    get: SkillA$SteadyBreath_getInstance
  });
  Object.defineProperty(SkillA, 'EarthBoost', {
    get: SkillA$EarthBoost_getInstance
  });
  Object.defineProperty(SkillA, 'WindBoost', {
    get: SkillA$WindBoost_getInstance
  });
  Object.defineProperty(SkillA, 'FireBoost', {
    get: SkillA$FireBoost_getInstance
  });
  Object.defineProperty(SkillA, 'WaterBoost', {
    get: SkillA$WaterBoost_getInstance
  });
  Object.defineProperty(SkillA, 'HeavyBlade', {
    get: SkillA$HeavyBlade_getInstance
  });
  Object.defineProperty(SkillA, 'FlashingBlade', {
    get: SkillA$FlashingBlade_getInstance
  });
  Object.defineProperty(SkillA, 'CloseCounter', {
    get: SkillA$CloseCounter_getInstance
  });
  Object.defineProperty(SkillA, 'DistantCounter', {
    get: SkillA$DistantCounter_getInstance
  });
  Object.defineProperty(SkillA, 'SvalinnShield', {
    get: SkillA$SvalinnShield_getInstance
  });
  Object.defineProperty(SkillA, 'IotesShield', {
    get: SkillA$IotesShield_getInstance
  });
  Object.defineProperty(SkillA, 'GranisShield', {
    get: SkillA$GranisShield_getInstance
  });
  Object.defineProperty(SkillA, 'AtkDefBond', {
    get: SkillA$AtkDefBond_getInstance
  });
  Object.defineProperty(SkillA, 'AtkResBond', {
    get: SkillA$AtkResBond_getInstance
  });
  Object.defineProperty(SkillA, 'BrazenAtkDef', {
    get: SkillA$BrazenAtkDef_getInstance
  });
  Object.defineProperty(SkillA, 'BrazenAtkSpd', {
    get: SkillA$BrazenAtkSpd_getInstance
  });
  Object.defineProperty(SkillA, 'Companion', {
    get: SkillA$Companion_getInstance
  });
  package$skill.SkillA = SkillA;
  Object.defineProperty(SkillB, 'SwordBreaker', {
    get: SkillB$SwordBreaker_getInstance
  });
  Object.defineProperty(SkillB, 'LanceBreaker', {
    get: SkillB$LanceBreaker_getInstance
  });
  Object.defineProperty(SkillB, 'AxeBreaker', {
    get: SkillB$AxeBreaker_getInstance
  });
  Object.defineProperty(SkillB, 'BowBreaker', {
    get: SkillB$BowBreaker_getInstance
  });
  Object.defineProperty(SkillB, 'DaggerBreaker', {
    get: SkillB$DaggerBreaker_getInstance
  });
  Object.defineProperty(SkillB, 'RTomeBreaker', {
    get: SkillB$RTomeBreaker_getInstance
  });
  Object.defineProperty(SkillB, 'GTomeBreaker', {
    get: SkillB$GTomeBreaker_getInstance
  });
  Object.defineProperty(SkillB, 'BTomeBreaker', {
    get: SkillB$BTomeBreaker_getInstance
  });
  Object.defineProperty(SkillB, 'EscapeRoute', {
    get: SkillB$EscapeRoute_getInstance
  });
  Object.defineProperty(SkillB, 'Vantage', {
    get: SkillB$Vantage_getInstance
  });
  Object.defineProperty(SkillB, 'WaryFighter', {
    get: SkillB$WaryFighter_getInstance
  });
  Object.defineProperty(SkillB, 'BoldFighter', {
    get: SkillB$BoldFighter_getInstance
  });
  Object.defineProperty(SkillB, 'VengefulFighter', {
    get: SkillB$VengefulFighter_getInstance
  });
  Object.defineProperty(SkillB, 'Desperation', {
    get: SkillB$Desperation_getInstance
  });
  Object.defineProperty(SkillB, 'QuickRiposte', {
    get: SkillB$QuickRiposte_getInstance
  });
  Object.defineProperty(SkillB, 'BrashAssault', {
    get: SkillB$BrashAssault_getInstance
  });
  Object.defineProperty(SkillB, 'Renewal', {
    get: SkillB$Renewal_getInstance
  });
  Object.defineProperty(SkillB, 'LiveToServe', {
    get: SkillB$LiveToServe_getInstance
  });
  Object.defineProperty(SkillB, 'WingsOfMercy', {
    get: SkillB$WingsOfMercy_getInstance
  });
  Object.defineProperty(SkillB, 'Pass', {
    get: SkillB$Pass_getInstance
  });
  Object.defineProperty(SkillB, 'Obstruct', {
    get: SkillB$Obstruct_getInstance
  });
  Object.defineProperty(SkillB, 'SealAtk', {
    get: SkillB$SealAtk_getInstance
  });
  Object.defineProperty(SkillB, 'SealSpd', {
    get: SkillB$SealSpd_getInstance
  });
  Object.defineProperty(SkillB, 'SealDef', {
    get: SkillB$SealDef_getInstance
  });
  Object.defineProperty(SkillB, 'SealRes', {
    get: SkillB$SealRes_getInstance
  });
  Object.defineProperty(SkillB, 'SealAtkSpd', {
    get: SkillB$SealAtkSpd_getInstance
  });
  Object.defineProperty(SkillB, 'SealAtkDef', {
    get: SkillB$SealAtkDef_getInstance
  });
  Object.defineProperty(SkillB, 'Windsweep', {
    get: SkillB$Windsweep_getInstance
  });
  Object.defineProperty(SkillB, 'Watersweep', {
    get: SkillB$Watersweep_getInstance
  });
  Object.defineProperty(SkillB, 'Guard', {
    get: SkillB$Guard_getInstance
  });
  Object.defineProperty(SkillB, 'ShieldPulse', {
    get: SkillB$ShieldPulse_getInstance
  });
  Object.defineProperty(SkillB, 'WrathfulStaff', {
    get: SkillB$WrathfulStaff_getInstance
  });
  Object.defineProperty(SkillB, 'DazzlingStaff', {
    get: SkillB$DazzlingStaff_getInstance
  });
  Object.defineProperty(SkillB, 'CancelAffinity', {
    get: SkillB$CancelAffinity_getInstance
  });
  Object.defineProperty(SkillB, 'Wrath', {
    get: SkillB$Wrath_getInstance
  });
  Object.defineProperty(SkillB, 'FlierFormation', {
    get: SkillB$FlierFormation_getInstance
  });
  Object.defineProperty(SkillB, 'BlazeDance', {
    get: SkillB$BlazeDance_getInstance
  });
  Object.defineProperty(SkillB, 'GaleDance', {
    get: SkillB$GaleDance_getInstance
  });
  Object.defineProperty(SkillB, 'TorrentDance', {
    get: SkillB$TorrentDance_getInstance
  });
  Object.defineProperty(SkillB, 'GeyserDance', {
    get: SkillB$GeyserDance_getInstance
  });
  Object.defineProperty(SkillB, 'KnockBack', {
    get: SkillB$KnockBack_getInstance
  });
  Object.defineProperty(SkillB, 'DragBack', {
    get: SkillB$DragBack_getInstance
  });
  Object.defineProperty(SkillB, 'Lunge', {
    get: SkillB$Lunge_getInstance
  });
  Object.defineProperty(SkillB, 'HitAndRun', {
    get: SkillB$HitAndRun_getInstance
  });
  Object.defineProperty(SkillB, 'FollowUpRing', {
    get: SkillB$FollowUpRing_getInstance
  });
  Object.defineProperty(SkillB, 'RecoverRing', {
    get: SkillB$RecoverRing_getInstance
  });
  Object.defineProperty(SkillB, 'LiveForBounty', {
    get: SkillB$LiveForBounty_getInstance
  });
  Object.defineProperty(SkillB, 'LiveForHonor', {
    get: SkillB$LiveForHonor_getInstance
  });
  Object.defineProperty(SkillB, 'SacaesBlessing', {
    get: SkillB$SacaesBlessing_getInstance
  });
  Object.defineProperty(SkillB, 'BeorcsBlessing', {
    get: SkillB$BeorcsBlessing_getInstance
  });
  Object.defineProperty(SkillB, 'CrusadersWard', {
    get: SkillB$CrusadersWard_getInstance
  });
  Object.defineProperty(SkillB, 'PoisonStrike', {
    get: SkillB$PoisonStrike_getInstance
  });
  Object.defineProperty(SkillB, 'Companion', {
    get: SkillB$Companion_getInstance
  });
  package$skill.SkillB = SkillB;
  Object.defineProperty(SkillC, 'SpurAtk', {
    get: SkillC$SpurAtk_getInstance
  });
  Object.defineProperty(SkillC, 'SpurSpd', {
    get: SkillC$SpurSpd_getInstance
  });
  Object.defineProperty(SkillC, 'SpurDef', {
    get: SkillC$SpurDef_getInstance
  });
  Object.defineProperty(SkillC, 'SpurRes', {
    get: SkillC$SpurRes_getInstance
  });
  Object.defineProperty(SkillC, 'SpurDefRes', {
    get: SkillC$SpurDefRes_getInstance
  });
  Object.defineProperty(SkillC, 'SpurSpdDef', {
    get: SkillC$SpurSpdDef_getInstance
  });
  Object.defineProperty(SkillC, 'ThreatenAtk', {
    get: SkillC$ThreatenAtk_getInstance
  });
  Object.defineProperty(SkillC, 'ThreatenSpd', {
    get: SkillC$ThreatenSpd_getInstance
  });
  Object.defineProperty(SkillC, 'ThreatenDef', {
    get: SkillC$ThreatenDef_getInstance
  });
  Object.defineProperty(SkillC, 'ThreatenRes', {
    get: SkillC$ThreatenRes_getInstance
  });
  Object.defineProperty(SkillC, 'FortifyDef', {
    get: SkillC$FortifyDef_getInstance
  });
  Object.defineProperty(SkillC, 'FortifyRes', {
    get: SkillC$FortifyRes_getInstance
  });
  Object.defineProperty(SkillC, 'FortifyArmor', {
    get: SkillC$FortifyArmor_getInstance
  });
  Object.defineProperty(SkillC, 'FortifyCavalry', {
    get: SkillC$FortifyCavalry_getInstance
  });
  Object.defineProperty(SkillC, 'FortifyFliers', {
    get: SkillC$FortifyFliers_getInstance
  });
  Object.defineProperty(SkillC, 'FortifyDragons', {
    get: SkillC$FortifyDragons_getInstance
  });
  Object.defineProperty(SkillC, 'HoneAtk', {
    get: SkillC$HoneAtk_getInstance
  });
  Object.defineProperty(SkillC, 'HoneSpd', {
    get: SkillC$HoneSpd_getInstance
  });
  Object.defineProperty(SkillC, 'DriveAtk', {
    get: SkillC$DriveAtk_getInstance
  });
  Object.defineProperty(SkillC, 'DriveDef', {
    get: SkillC$DriveDef_getInstance
  });
  Object.defineProperty(SkillC, 'DriveSpd', {
    get: SkillC$DriveSpd_getInstance
  });
  Object.defineProperty(SkillC, 'DriveRes', {
    get: SkillC$DriveRes_getInstance
  });
  Object.defineProperty(SkillC, 'HoneArmor', {
    get: SkillC$HoneArmor_getInstance
  });
  Object.defineProperty(SkillC, 'HoneCavalry', {
    get: SkillC$HoneCavalry_getInstance
  });
  Object.defineProperty(SkillC, 'HoneFliers', {
    get: SkillC$HoneFliers_getInstance
  });
  Object.defineProperty(SkillC, 'GoadArmor', {
    get: SkillC$GoadArmor_getInstance
  });
  Object.defineProperty(SkillC, 'GoadCavalry', {
    get: SkillC$GoadCavalry_getInstance
  });
  Object.defineProperty(SkillC, 'GoadFliers', {
    get: SkillC$GoadFliers_getInstance
  });
  Object.defineProperty(SkillC, 'WardArmor', {
    get: SkillC$WardArmor_getInstance
  });
  Object.defineProperty(SkillC, 'WardCavalry', {
    get: SkillC$WardCavalry_getInstance
  });
  Object.defineProperty(SkillC, 'WardFliers', {
    get: SkillC$WardFliers_getInstance
  });
  Object.defineProperty(SkillC, 'SavageBlow', {
    get: SkillC$SavageBlow_getInstance
  });
  Object.defineProperty(SkillC, 'BreathOfLife', {
    get: SkillC$BreathOfLife_getInstance
  });
  Object.defineProperty(SkillC, 'SwordExperience', {
    get: SkillC$SwordExperience_getInstance
  });
  Object.defineProperty(SkillC, 'AxeExperience', {
    get: SkillC$AxeExperience_getInstance
  });
  Object.defineProperty(SkillC, 'BowExperience', {
    get: SkillC$BowExperience_getInstance
  });
  Object.defineProperty(SkillC, 'BTomeExperience', {
    get: SkillC$BTomeExperience_getInstance
  });
  Object.defineProperty(SkillC, 'SwordValor', {
    get: SkillC$SwordValor_getInstance
  });
  Object.defineProperty(SkillC, 'LanceValor', {
    get: SkillC$LanceValor_getInstance
  });
  Object.defineProperty(SkillC, 'AxeValor', {
    get: SkillC$AxeValor_getInstance
  });
  Object.defineProperty(SkillC, 'DaggerValor', {
    get: SkillC$DaggerValor_getInstance
  });
  Object.defineProperty(SkillC, 'RTomeValor', {
    get: SkillC$RTomeValor_getInstance
  });
  Object.defineProperty(SkillC, 'BTomeValor', {
    get: SkillC$BTomeValor_getInstance
  });
  Object.defineProperty(SkillC, 'GTomeValor', {
    get: SkillC$GTomeValor_getInstance
  });
  Object.defineProperty(SkillC, 'PanicPloy', {
    get: SkillC$PanicPloy_getInstance
  });
  Object.defineProperty(SkillC, 'AtkPloy', {
    get: SkillC$AtkPloy_getInstance
  });
  Object.defineProperty(SkillC, 'SpdPloy', {
    get: SkillC$SpdPloy_getInstance
  });
  Object.defineProperty(SkillC, 'DefPloy', {
    get: SkillC$DefPloy_getInstance
  });
  Object.defineProperty(SkillC, 'ResPloy', {
    get: SkillC$ResPloy_getInstance
  });
  Object.defineProperty(SkillC, 'InfantryPulse', {
    get: SkillC$InfantryPulse_getInstance
  });
  Object.defineProperty(SkillC, 'AtkSmoke', {
    get: SkillC$AtkSmoke_getInstance
  });
  Object.defineProperty(SkillC, 'SpdSmoke', {
    get: SkillC$SpdSmoke_getInstance
  });
  Object.defineProperty(SkillC, 'ArmorMarch', {
    get: SkillC$ArmorMarch_getInstance
  });
  Object.defineProperty(SkillC, 'Guidance', {
    get: SkillC$Guidance_getInstance
  });
  Object.defineProperty(SkillC, 'AtkTactic', {
    get: SkillC$AtkTactic_getInstance
  });
  Object.defineProperty(SkillC, 'DefTactic', {
    get: SkillC$DefTactic_getInstance
  });
  Object.defineProperty(SkillC, 'Companion', {
    get: SkillC$Companion_getInstance
  });
  package$skill.SkillC = SkillC;
  Object.defineProperty(Special, 'DayLight', {
    get: Special$DayLight_getInstance
  });
  Object.defineProperty(Special, 'Noontime', {
    get: Special$Noontime_getInstance
  });
  Object.defineProperty(Special, 'Sol', {
    get: Special$Sol_getInstance
  });
  Object.defineProperty(Special, 'NightSky', {
    get: Special$NightSky_getInstance
  });
  Object.defineProperty(Special, 'Glimmer', {
    get: Special$Glimmer_getInstance
  });
  Object.defineProperty(Special, 'Astra', {
    get: Special$Astra_getInstance
  });
  Object.defineProperty(Special, 'RegnalAstra', {
    get: Special$RegnalAstra_getInstance
  });
  Object.defineProperty(Special, 'Miracle', {
    get: Special$Miracle_getInstance
  });
  Object.defineProperty(Special, 'DraconicAura', {
    get: Special$DraconicAura_getInstance
  });
  Object.defineProperty(Special, 'DragonGaze', {
    get: Special$DragonGaze_getInstance
  });
  Object.defineProperty(Special, 'DragonFang', {
    get: Special$DragonFang_getInstance
  });
  Object.defineProperty(Special, 'GlowingEmber', {
    get: Special$GlowingEmber_getInstance
  });
  Object.defineProperty(Special, 'Bonfire', {
    get: Special$Bonfire_getInstance
  });
  Object.defineProperty(Special, 'Ignis', {
    get: Special$Ignis_getInstance
  });
  Object.defineProperty(Special, 'ChillingWind', {
    get: Special$ChillingWind_getInstance
  });
  Object.defineProperty(Special, 'Iceberg', {
    get: Special$Iceberg_getInstance
  });
  Object.defineProperty(Special, 'Glacies', {
    get: Special$Glacies_getInstance
  });
  Object.defineProperty(Special, 'Aether', {
    get: Special$Aether_getInstance
  });
  Object.defineProperty(Special, 'NewMoon', {
    get: Special$NewMoon_getInstance
  });
  Object.defineProperty(Special, 'Moonbow', {
    get: Special$Moonbow_getInstance
  });
  Object.defineProperty(Special, 'Luna', {
    get: Special$Luna_getInstance
  });
  Object.defineProperty(Special, 'BlackLuna', {
    get: Special$BlackLuna_getInstance
  });
  Object.defineProperty(Special, 'Retribution', {
    get: Special$Retribution_getInstance
  });
  Object.defineProperty(Special, 'Reprisal', {
    get: Special$Reprisal_getInstance
  });
  Object.defineProperty(Special, 'Vengeance', {
    get: Special$Vengeance_getInstance
  });
  Object.defineProperty(Special, 'HolyVestments', {
    get: Special$HolyVestments_getInstance
  });
  Object.defineProperty(Special, 'SacredCowl', {
    get: Special$SacredCowl_getInstance
  });
  Object.defineProperty(Special, 'IceMirror', {
    get: Special$IceMirror_getInstance
  });
  Object.defineProperty(Special, 'Aegis', {
    get: Special$Aegis_getInstance
  });
  Object.defineProperty(Special, 'Buckler', {
    get: Special$Buckler_getInstance
  });
  Object.defineProperty(Special, 'Escutcheon', {
    get: Special$Escutcheon_getInstance
  });
  Object.defineProperty(Special, 'Pavise', {
    get: Special$Pavise_getInstance
  });
  Object.defineProperty(Special, 'Galeforce', {
    get: Special$Galeforce_getInstance
  });
  Object.defineProperty(Special, 'Imbue', {
    get: Special$Imbue_getInstance
  });
  Object.defineProperty(Special, 'HeavenlyLight', {
    get: Special$HeavenlyLight_getInstance
  });
  Object.defineProperty(Special, 'SolidEarthBalm', {
    get: Special$SolidEarthBalm_getInstance
  });
  Object.defineProperty(Special, 'SwiftWindsBalm', {
    get: Special$SwiftWindsBalm_getInstance
  });
  Object.defineProperty(Special, 'KindledFireBalm', {
    get: Special$KindledFireBalm_getInstance
  });
  Object.defineProperty(Special, 'StillWaterBalm', {
    get: Special$StillWaterBalm_getInstance
  });
  Object.defineProperty(Special, 'RisingFlame', {
    get: Special$RisingFlame_getInstance
  });
  Object.defineProperty(Special, 'BlazingFlame', {
    get: Special$BlazingFlame_getInstance
  });
  Object.defineProperty(Special, 'GrowingFlame', {
    get: Special$GrowingFlame_getInstance
  });
  Object.defineProperty(Special, 'RisingLight', {
    get: Special$RisingLight_getInstance
  });
  Object.defineProperty(Special, 'BlazingLight', {
    get: Special$BlazingLight_getInstance
  });
  Object.defineProperty(Special, 'GrowingLight', {
    get: Special$GrowingLight_getInstance
  });
  Object.defineProperty(Special, 'RisingWind', {
    get: Special$RisingWind_getInstance
  });
  Object.defineProperty(Special, 'BlazingWind', {
    get: Special$BlazingWind_getInstance
  });
  Object.defineProperty(Special, 'GrowingWind', {
    get: Special$GrowingWind_getInstance
  });
  Object.defineProperty(Special, 'RisingThunder', {
    get: Special$RisingThunder_getInstance
  });
  Object.defineProperty(Special, 'BlazingThunder', {
    get: Special$BlazingThunder_getInstance
  });
  Object.defineProperty(Special, 'GrowingThunder', {
    get: Special$GrowingThunder_getInstance
  });
  Object.defineProperty(Special, 'Companion', {
    get: Special$Companion_getInstance
  });
  package$skill.Special = Special;
  Object.defineProperty(Weapon, 'IronSword', {
    get: Weapon$IronSword_getInstance
  });
  Object.defineProperty(Weapon, 'SteelSword', {
    get: Weapon$SteelSword_getInstance
  });
  Object.defineProperty(Weapon, 'SilverSword', {
    get: Weapon$SilverSword_getInstance
  });
  Object.defineProperty(Weapon, 'SilverSword2', {
    get: Weapon$SilverSword2_getInstance
  });
  Object.defineProperty(Weapon, 'ArmorSlayer', {
    get: Weapon$ArmorSlayer_getInstance
  });
  Object.defineProperty(Weapon, 'ArmorSlayer2', {
    get: Weapon$ArmorSlayer2_getInstance
  });
  Object.defineProperty(Weapon, 'Armorsmasher2', {
    get: Weapon$Armorsmasher2_getInstance
  });
  Object.defineProperty(Weapon, 'BraveSword', {
    get: Weapon$BraveSword_getInstance
  });
  Object.defineProperty(Weapon, 'BraveSword2', {
    get: Weapon$BraveSword2_getInstance
  });
  Object.defineProperty(Weapon, 'RubySword', {
    get: Weapon$RubySword_getInstance
  });
  Object.defineProperty(Weapon, 'RubySword2', {
    get: Weapon$RubySword2_getInstance
  });
  Object.defineProperty(Weapon, 'KillingEdge', {
    get: Weapon$KillingEdge_getInstance
  });
  Object.defineProperty(Weapon, 'KillingEdge2', {
    get: Weapon$KillingEdge2_getInstance
  });
  Object.defineProperty(Weapon, 'WaoDao', {
    get: Weapon$WaoDao_getInstance
  });
  Object.defineProperty(Weapon, 'WaoDao2', {
    get: Weapon$WaoDao2_getInstance
  });
  Object.defineProperty(Weapon, 'Zanbato', {
    get: Weapon$Zanbato_getInstance
  });
  Object.defineProperty(Weapon, 'Zanbato2', {
    get: Weapon$Zanbato2_getInstance
  });
  Object.defineProperty(Weapon, 'SlayingEdge', {
    get: Weapon$SlayingEdge_getInstance
  });
  Object.defineProperty(Weapon, 'SlayingEdge2', {
    get: Weapon$SlayingEdge2_getInstance
  });
  Object.defineProperty(Weapon, 'AyrasBlade', {
    get: Weapon$AyrasBlade_getInstance
  });
  Object.defineProperty(Weapon, 'Folkvangr', {
    get: Weapon$Folkvangr_getInstance
  });
  Object.defineProperty(Weapon, 'Falchion', {
    get: Weapon$Falchion_getInstance
  });
  Object.defineProperty(Weapon, 'BindingBlade', {
    get: Weapon$BindingBlade_getInstance
  });
  Object.defineProperty(Weapon, 'Durandal', {
    get: Weapon$Durandal_getInstance
  });
  Object.defineProperty(Weapon, 'SolKatti', {
    get: Weapon$SolKatti_getInstance
  });
  Object.defineProperty(Weapon, 'Yato', {
    get: Weapon$Yato_getInstance
  });
  Object.defineProperty(Weapon, 'Raijinto', {
    get: Weapon$Raijinto_getInstance
  });
  Object.defineProperty(Weapon, 'Sieglinde', {
    get: Weapon$Sieglinde_getInstance
  });
  Object.defineProperty(Weapon, 'Tyrfing', {
    get: Weapon$Tyrfing_getInstance
  });
  Object.defineProperty(Weapon, 'Mystletainn', {
    get: Weapon$Mystletainn_getInstance
  });
  Object.defineProperty(Weapon, 'Eckesachs', {
    get: Weapon$Eckesachs_getInstance
  });
  Object.defineProperty(Weapon, 'Siegfried', {
    get: Weapon$Siegfried_getInstance
  });
  Object.defineProperty(Weapon, 'Ragnell', {
    get: Weapon$Ragnell_getInstance
  });
  Object.defineProperty(Weapon, 'BlazingDurandal', {
    get: Weapon$BlazingDurandal_getInstance
  });
  Object.defineProperty(Weapon, 'Amiti', {
    get: Weapon$Amiti_getInstance
  });
  Object.defineProperty(Weapon, 'Alondite', {
    get: Weapon$Alondite_getInstance
  });
  Object.defineProperty(Weapon, 'DivineTyrfing', {
    get: Weapon$DivineTyrfing_getInstance
  });
  Object.defineProperty(Weapon, 'RegalBlade', {
    get: Weapon$RegalBlade_getInstance
  });
  Object.defineProperty(Weapon, 'ResoluteBlade', {
    get: Weapon$ResoluteBlade_getInstance
  });
  Object.defineProperty(Weapon, 'Audhulma', {
    get: Weapon$Audhulma_getInstance
  });
  Object.defineProperty(Weapon, 'DarkGreatsword', {
    get: Weapon$DarkGreatsword_getInstance
  });
  Object.defineProperty(Weapon, 'FiresweepSword', {
    get: Weapon$FiresweepSword_getInstance
  });
  Object.defineProperty(Weapon, 'FiresweepSword2', {
    get: Weapon$FiresweepSword2_getInstance
  });
  Object.defineProperty(Weapon, 'IronLance', {
    get: Weapon$IronLance_getInstance
  });
  Object.defineProperty(Weapon, 'SteelLance', {
    get: Weapon$SteelLance_getInstance
  });
  Object.defineProperty(Weapon, 'SilverLance', {
    get: Weapon$SilverLance_getInstance
  });
  Object.defineProperty(Weapon, 'SilverLance2', {
    get: Weapon$SilverLance2_getInstance
  });
  Object.defineProperty(Weapon, 'KillerLance', {
    get: Weapon$KillerLance_getInstance
  });
  Object.defineProperty(Weapon, 'KillerLance2', {
    get: Weapon$KillerLance2_getInstance
  });
  Object.defineProperty(Weapon, 'BraveLance', {
    get: Weapon$BraveLance_getInstance
  });
  Object.defineProperty(Weapon, 'BraveLance2', {
    get: Weapon$BraveLance2_getInstance
  });
  Object.defineProperty(Weapon, 'SapphireLance', {
    get: Weapon$SapphireLance_getInstance
  });
  Object.defineProperty(Weapon, 'SapphireLance2', {
    get: Weapon$SapphireLance2_getInstance
  });
  Object.defineProperty(Weapon, 'HeavySpear', {
    get: Weapon$HeavySpear_getInstance
  });
  Object.defineProperty(Weapon, 'HeavySpear2', {
    get: Weapon$HeavySpear2_getInstance
  });
  Object.defineProperty(Weapon, 'SlayingSpear2', {
    get: Weapon$SlayingSpear2_getInstance
  });
  Object.defineProperty(Weapon, 'CarrotLance', {
    get: Weapon$CarrotLance_getInstance
  });
  Object.defineProperty(Weapon, 'CarrotLance2', {
    get: Weapon$CarrotLance2_getInstance
  });
  Object.defineProperty(Weapon, 'FirstBite', {
    get: Weapon$FirstBite_getInstance
  });
  Object.defineProperty(Weapon, 'FirstBite2', {
    get: Weapon$FirstBite2_getInstance
  });
  Object.defineProperty(Weapon, 'FiresweepLance', {
    get: Weapon$FiresweepLance_getInstance
  });
  Object.defineProperty(Weapon, 'FiresweepLance2', {
    get: Weapon$FiresweepLance2_getInstance
  });
  Object.defineProperty(Weapon, 'DeftHarpoon', {
    get: Weapon$DeftHarpoon_getInstance
  });
  Object.defineProperty(Weapon, 'DeftHarpoon2', {
    get: Weapon$DeftHarpoon2_getInstance
  });
  Object.defineProperty(Weapon, 'Ridersbane', {
    get: Weapon$Ridersbane_getInstance
  });
  Object.defineProperty(Weapon, 'Ridersbane2', {
    get: Weapon$Ridersbane2_getInstance
  });
  Object.defineProperty(Weapon, 'BerkutsLance', {
    get: Weapon$BerkutsLance_getInstance
  });
  Object.defineProperty(Weapon, 'BerkutsLance2', {
    get: Weapon$BerkutsLance2_getInstance
  });
  Object.defineProperty(Weapon, 'SlayingLance', {
    get: Weapon$SlayingLance_getInstance
  });
  Object.defineProperty(Weapon, 'SlayingLance2', {
    get: Weapon$SlayingLance2_getInstance
  });
  Object.defineProperty(Weapon, 'Fensalir', {
    get: Weapon$Fensalir_getInstance
  });
  Object.defineProperty(Weapon, 'Siegmund', {
    get: Weapon$Siegmund_getInstance
  });
  Object.defineProperty(Weapon, 'Gradivus', {
    get: Weapon$Gradivus_getInstance
  });
  Object.defineProperty(Weapon, 'Vidofinir', {
    get: Weapon$Vidofinir_getInstance
  });
  Object.defineProperty(Weapon, 'CursedLance', {
    get: Weapon$CursedLance_getInstance
  });
  Object.defineProperty(Weapon, 'Geirskogul', {
    get: Weapon$Geirskogul_getInstance
  });
  Object.defineProperty(Weapon, 'Leiptr', {
    get: Weapon$Leiptr_getInstance
  });
  Object.defineProperty(Weapon, 'BrightNaginata', {
    get: Weapon$BrightNaginata_getInstance
  });
  Object.defineProperty(Weapon, 'Tannenboom', {
    get: Weapon$Tannenboom_getInstance
  });
  Object.defineProperty(Weapon, 'Tannenboom2', {
    get: Weapon$Tannenboom2_getInstance
  });
  Object.defineProperty(Weapon, 'IronAxe', {
    get: Weapon$IronAxe_getInstance
  });
  Object.defineProperty(Weapon, 'SteelAxe', {
    get: Weapon$SteelAxe_getInstance
  });
  Object.defineProperty(Weapon, 'SilverAxe', {
    get: Weapon$SilverAxe_getInstance
  });
  Object.defineProperty(Weapon, 'SilverAxe2', {
    get: Weapon$SilverAxe2_getInstance
  });
  Object.defineProperty(Weapon, 'KillerAxe', {
    get: Weapon$KillerAxe_getInstance
  });
  Object.defineProperty(Weapon, 'KillerAxe2', {
    get: Weapon$KillerAxe2_getInstance
  });
  Object.defineProperty(Weapon, 'BraveAxe', {
    get: Weapon$BraveAxe_getInstance
  });
  Object.defineProperty(Weapon, 'BraveAxe2', {
    get: Weapon$BraveAxe2_getInstance
  });
  Object.defineProperty(Weapon, 'Hammer', {
    get: Weapon$Hammer_getInstance
  });
  Object.defineProperty(Weapon, 'Hammer2', {
    get: Weapon$Hammer2_getInstance
  });
  Object.defineProperty(Weapon, 'SlayingHammer2', {
    get: Weapon$SlayingHammer2_getInstance
  });
  Object.defineProperty(Weapon, 'EmeraldAxe', {
    get: Weapon$EmeraldAxe_getInstance
  });
  Object.defineProperty(Weapon, 'EmeraldAxe2', {
    get: Weapon$EmeraldAxe2_getInstance
  });
  Object.defineProperty(Weapon, 'SlayingAxe', {
    get: Weapon$SlayingAxe_getInstance
  });
  Object.defineProperty(Weapon, 'SlayingAxe2', {
    get: Weapon$SlayingAxe2_getInstance
  });
  Object.defineProperty(Weapon, 'CarrotAxe', {
    get: Weapon$CarrotAxe_getInstance
  });
  Object.defineProperty(Weapon, 'CarrotAxe2', {
    get: Weapon$CarrotAxe2_getInstance
  });
  Object.defineProperty(Weapon, 'LegionsAxe', {
    get: Weapon$LegionsAxe_getInstance
  });
  Object.defineProperty(Weapon, 'LegionsAxe2', {
    get: Weapon$LegionsAxe2_getInstance
  });
  Object.defineProperty(Weapon, 'MelonCrusher', {
    get: Weapon$MelonCrusher_getInstance
  });
  Object.defineProperty(Weapon, 'MelonCrusher2', {
    get: Weapon$MelonCrusher2_getInstance
  });
  Object.defineProperty(Weapon, 'LilithFloatie', {
    get: Weapon$LilithFloatie_getInstance
  });
  Object.defineProperty(Weapon, 'LilithFloatie2', {
    get: Weapon$LilithFloatie2_getInstance
  });
  Object.defineProperty(Weapon, 'Noatun', {
    get: Weapon$Noatun_getInstance
  });
  Object.defineProperty(Weapon, 'Hauteclere', {
    get: Weapon$Hauteclere_getInstance
  });
  Object.defineProperty(Weapon, 'Armoads', {
    get: Weapon$Armoads_getInstance
  });
  Object.defineProperty(Weapon, 'Urvan', {
    get: Weapon$Urvan_getInstance
  });
  Object.defineProperty(Weapon, 'Uror', {
    get: Weapon$Uror_getInstance
  });
  Object.defineProperty(Weapon, 'StoutTomahawk', {
    get: Weapon$StoutTomahawk_getInstance
  });
  Object.defineProperty(Weapon, 'SackOGifts', {
    get: Weapon$SackOGifts_getInstance
  });
  Object.defineProperty(Weapon, 'SackOGifts2', {
    get: Weapon$SackOGifts2_getInstance
  });
  Object.defineProperty(Weapon, 'Handbell', {
    get: Weapon$Handbell_getInstance
  });
  Object.defineProperty(Weapon, 'Handbell2', {
    get: Weapon$Handbell2_getInstance
  });
  Object.defineProperty(Weapon, 'IronBow', {
    get: Weapon$IronBow_getInstance
  });
  Object.defineProperty(Weapon, 'SteelBow', {
    get: Weapon$SteelBow_getInstance
  });
  Object.defineProperty(Weapon, 'SilverBow', {
    get: Weapon$SilverBow_getInstance
  });
  Object.defineProperty(Weapon, 'SilverBow2', {
    get: Weapon$SilverBow2_getInstance
  });
  Object.defineProperty(Weapon, 'BraveBow', {
    get: Weapon$BraveBow_getInstance
  });
  Object.defineProperty(Weapon, 'BraveBow2', {
    get: Weapon$BraveBow2_getInstance
  });
  Object.defineProperty(Weapon, 'KillerBow', {
    get: Weapon$KillerBow_getInstance
  });
  Object.defineProperty(Weapon, 'KillerBow2', {
    get: Weapon$KillerBow2_getInstance
  });
  Object.defineProperty(Weapon, 'AssassinsBow', {
    get: Weapon$AssassinsBow_getInstance
  });
  Object.defineProperty(Weapon, 'AssassinsBow2', {
    get: Weapon$AssassinsBow2_getInstance
  });
  Object.defineProperty(Weapon, 'FiresweepBow', {
    get: Weapon$FiresweepBow_getInstance
  });
  Object.defineProperty(Weapon, 'FiresweepBow2', {
    get: Weapon$FiresweepBow2_getInstance
  });
  Object.defineProperty(Weapon, 'CupidArrow', {
    get: Weapon$CupidArrow_getInstance
  });
  Object.defineProperty(Weapon, 'CupidArrow2', {
    get: Weapon$CupidArrow2_getInstance
  });
  Object.defineProperty(Weapon, 'RefreshingBolt', {
    get: Weapon$RefreshingBolt_getInstance
  });
  Object.defineProperty(Weapon, 'RefreshingBolt2', {
    get: Weapon$RefreshingBolt2_getInstance
  });
  Object.defineProperty(Weapon, 'ClarissesBow', {
    get: Weapon$ClarissesBow_getInstance
  });
  Object.defineProperty(Weapon, 'ClarissesBow2', {
    get: Weapon$ClarissesBow2_getInstance
  });
  Object.defineProperty(Weapon, 'SlayingBow', {
    get: Weapon$SlayingBow_getInstance
  });
  Object.defineProperty(Weapon, 'SlayingBow2', {
    get: Weapon$SlayingBow2_getInstance
  });
  Object.defineProperty(Weapon, 'Parthia', {
    get: Weapon$Parthia_getInstance
  });
  Object.defineProperty(Weapon, 'FujinYumi', {
    get: Weapon$FujinYumi_getInstance
  });
  Object.defineProperty(Weapon, 'Nidhogg', {
    get: Weapon$Nidhogg_getInstance
  });
  Object.defineProperty(Weapon, 'Mulagir', {
    get: Weapon$Mulagir_getInstance
  });
  Object.defineProperty(Weapon, 'MonstrousBow', {
    get: Weapon$MonstrousBow_getInstance
  });
  Object.defineProperty(Weapon, 'MonstrousBow2', {
    get: Weapon$MonstrousBow2_getInstance
  });
  Object.defineProperty(Weapon, 'IronDagger', {
    get: Weapon$IronDagger_getInstance
  });
  Object.defineProperty(Weapon, 'SteelDagger', {
    get: Weapon$SteelDagger_getInstance
  });
  Object.defineProperty(Weapon, 'SilverDagger', {
    get: Weapon$SilverDagger_getInstance
  });
  Object.defineProperty(Weapon, 'SilverDagger2', {
    get: Weapon$SilverDagger2_getInstance
  });
  Object.defineProperty(Weapon, 'RogueDagger', {
    get: Weapon$RogueDagger_getInstance
  });
  Object.defineProperty(Weapon, 'RogueDagger2', {
    get: Weapon$RogueDagger2_getInstance
  });
  Object.defineProperty(Weapon, 'SmokeDagger', {
    get: Weapon$SmokeDagger_getInstance
  });
  Object.defineProperty(Weapon, 'SmokeDagger2', {
    get: Weapon$SmokeDagger2_getInstance
  });
  Object.defineProperty(Weapon, 'PoisonDagger', {
    get: Weapon$PoisonDagger_getInstance
  });
  Object.defineProperty(Weapon, 'PoisonDagger2', {
    get: Weapon$PoisonDagger2_getInstance
  });
  Object.defineProperty(Weapon, 'Seashell', {
    get: Weapon$Seashell_getInstance
  });
  Object.defineProperty(Weapon, 'Seashell2', {
    get: Weapon$Seashell2_getInstance
  });
  Object.defineProperty(Weapon, 'DancersFan', {
    get: Weapon$DancersFan_getInstance
  });
  Object.defineProperty(Weapon, 'DancersFan2', {
    get: Weapon$DancersFan2_getInstance
  });
  Object.defineProperty(Weapon, 'DeathlyDagger', {
    get: Weapon$DeathlyDagger_getInstance
  });
  Object.defineProperty(Weapon, 'KittyPaddle', {
    get: Weapon$KittyPaddle_getInstance
  });
  Object.defineProperty(Weapon, 'KittyPaddle2', {
    get: Weapon$KittyPaddle2_getInstance
  });
  Object.defineProperty(Weapon, 'Assault', {
    get: Weapon$Assault_getInstance
  });
  Object.defineProperty(Weapon, 'Absorb', {
    get: Weapon$Absorb_getInstance
  });
  Object.defineProperty(Weapon, 'Absorb2', {
    get: Weapon$Absorb2_getInstance
  });
  Object.defineProperty(Weapon, 'Candlelight', {
    get: Weapon$Candlelight_getInstance
  });
  Object.defineProperty(Weapon, 'Candlelight2', {
    get: Weapon$Candlelight2_getInstance
  });
  Object.defineProperty(Weapon, 'Gravity', {
    get: Weapon$Gravity_getInstance
  });
  Object.defineProperty(Weapon, 'Gravity2', {
    get: Weapon$Gravity2_getInstance
  });
  Object.defineProperty(Weapon, 'Fear', {
    get: Weapon$Fear_getInstance
  });
  Object.defineProperty(Weapon, 'Fear2', {
    get: Weapon$Fear2_getInstance
  });
  Object.defineProperty(Weapon, 'Slow', {
    get: Weapon$Slow_getInstance
  });
  Object.defineProperty(Weapon, 'Slow2', {
    get: Weapon$Slow2_getInstance
  });
  Object.defineProperty(Weapon, 'Panic', {
    get: Weapon$Panic_getInstance
  });
  Object.defineProperty(Weapon, 'Panic2', {
    get: Weapon$Panic2_getInstance
  });
  Object.defineProperty(Weapon, 'Pain', {
    get: Weapon$Pain_getInstance
  });
  Object.defineProperty(Weapon, 'Pain2', {
    get: Weapon$Pain2_getInstance
  });
  Object.defineProperty(Weapon, 'Flux', {
    get: Weapon$Flux_getInstance
  });
  Object.defineProperty(Weapon, 'Fire', {
    get: Weapon$Fire_getInstance
  });
  Object.defineProperty(Weapon, 'Ruin', {
    get: Weapon$Ruin_getInstance
  });
  Object.defineProperty(Weapon, 'Elfire', {
    get: Weapon$Elfire_getInstance
  });
  Object.defineProperty(Weapon, 'Rauorwolf', {
    get: Weapon$Rauorwolf_getInstance
  });
  Object.defineProperty(Weapon, 'Rauorwolf2', {
    get: Weapon$Rauorwolf2_getInstance
  });
  Object.defineProperty(Weapon, 'KeenRauorwolf2', {
    get: Weapon$KeenRauorwolf2_getInstance
  });
  Object.defineProperty(Weapon, 'Rauorraven', {
    get: Weapon$Rauorraven_getInstance
  });
  Object.defineProperty(Weapon, 'Rauorraven2', {
    get: Weapon$Rauorraven2_getInstance
  });
  Object.defineProperty(Weapon, 'Rauorblade', {
    get: Weapon$Rauorblade_getInstance
  });
  Object.defineProperty(Weapon, 'Rauorblade2', {
    get: Weapon$Rauorblade2_getInstance
  });
  Object.defineProperty(Weapon, 'Rauorowl', {
    get: Weapon$Rauorowl_getInstance
  });
  Object.defineProperty(Weapon, 'Rauorowl2', {
    get: Weapon$Rauorowl2_getInstance
  });
  Object.defineProperty(Weapon, 'Fenrir', {
    get: Weapon$Fenrir_getInstance
  });
  Object.defineProperty(Weapon, 'Fenrir2', {
    get: Weapon$Fenrir2_getInstance
  });
  Object.defineProperty(Weapon, 'Bolganone', {
    get: Weapon$Bolganone_getInstance
  });
  Object.defineProperty(Weapon, 'Bolganone2', {
    get: Weapon$Bolganone2_getInstance
  });
  Object.defineProperty(Weapon, 'TomatoTome', {
    get: Weapon$TomatoTome_getInstance
  });
  Object.defineProperty(Weapon, 'TomatoTome2', {
    get: Weapon$TomatoTome2_getInstance
  });
  Object.defineProperty(Weapon, 'Brynhildr', {
    get: Weapon$Brynhildr_getInstance
  });
  Object.defineProperty(Weapon, 'Cymbeline', {
    get: Weapon$Cymbeline_getInstance
  });
  Object.defineProperty(Weapon, 'Ragnarok', {
    get: Weapon$Ragnarok_getInstance
  });
  Object.defineProperty(Weapon, 'Valflame', {
    get: Weapon$Valflame_getInstance
  });
  Object.defineProperty(Weapon, 'Grimoire', {
    get: Weapon$Grimoire_getInstance
  });
  Object.defineProperty(Weapon, 'Candelabra', {
    get: Weapon$Candelabra_getInstance
  });
  Object.defineProperty(Weapon, 'Candelabra2', {
    get: Weapon$Candelabra2_getInstance
  });
  Object.defineProperty(Weapon, 'Thunder', {
    get: Weapon$Thunder_getInstance
  });
  Object.defineProperty(Weapon, 'Elthunder', {
    get: Weapon$Elthunder_getInstance
  });
  Object.defineProperty(Weapon, 'Blarwolf', {
    get: Weapon$Blarwolf_getInstance
  });
  Object.defineProperty(Weapon, 'Blarwolf2', {
    get: Weapon$Blarwolf2_getInstance
  });
  Object.defineProperty(Weapon, 'KeenBlarwolf2', {
    get: Weapon$KeenBlarwolf2_getInstance
  });
  Object.defineProperty(Weapon, 'Blarraven', {
    get: Weapon$Blarraven_getInstance
  });
  Object.defineProperty(Weapon, 'Blarraven2', {
    get: Weapon$Blarraven2_getInstance
  });
  Object.defineProperty(Weapon, 'Blarblade', {
    get: Weapon$Blarblade_getInstance
  });
  Object.defineProperty(Weapon, 'Blarblade2', {
    get: Weapon$Blarblade2_getInstance
  });
  Object.defineProperty(Weapon, 'Blarowl', {
    get: Weapon$Blarowl_getInstance
  });
  Object.defineProperty(Weapon, 'Blarowl2', {
    get: Weapon$Blarowl2_getInstance
  });
  Object.defineProperty(Weapon, 'Thoron', {
    get: Weapon$Thoron_getInstance
  });
  Object.defineProperty(Weapon, 'Thoron2', {
    get: Weapon$Thoron2_getInstance
  });
  Object.defineProperty(Weapon, 'BlueEgg', {
    get: Weapon$BlueEgg_getInstance
  });
  Object.defineProperty(Weapon, 'BlueEgg2', {
    get: Weapon$BlueEgg2_getInstance
  });
  Object.defineProperty(Weapon, 'BlessedBouquet', {
    get: Weapon$BlessedBouquet_getInstance
  });
  Object.defineProperty(Weapon, 'BlessedBouquet2', {
    get: Weapon$BlessedBouquet2_getInstance
  });
  Object.defineProperty(Weapon, 'SealifeTome', {
    get: Weapon$SealifeTome_getInstance
  });
  Object.defineProperty(Weapon, 'SealifeTome2', {
    get: Weapon$SealifeTome2_getInstance
  });
  Object.defineProperty(Weapon, 'DancersScore', {
    get: Weapon$DancersScore_getInstance
  });
  Object.defineProperty(Weapon, 'DancersScore2', {
    get: Weapon$DancersScore2_getInstance
  });
  Object.defineProperty(Weapon, 'DarkAura', {
    get: Weapon$DarkAura_getInstance
  });
  Object.defineProperty(Weapon, 'Valaskjalf', {
    get: Weapon$Valaskjalf_getInstance
  });
  Object.defineProperty(Weapon, 'Aura', {
    get: Weapon$Aura_getInstance
  });
  Object.defineProperty(Weapon, 'DireThunder', {
    get: Weapon$DireThunder_getInstance
  });
  Object.defineProperty(Weapon, 'WeirdingTome', {
    get: Weapon$WeirdingTome_getInstance
  });
  Object.defineProperty(Weapon, 'Wind', {
    get: Weapon$Wind_getInstance
  });
  Object.defineProperty(Weapon, 'Elwind', {
    get: Weapon$Elwind_getInstance
  });
  Object.defineProperty(Weapon, 'Rexcalibur', {
    get: Weapon$Rexcalibur_getInstance
  });
  Object.defineProperty(Weapon, 'Rexcalibur2', {
    get: Weapon$Rexcalibur2_getInstance
  });
  Object.defineProperty(Weapon, 'Gronnwolf', {
    get: Weapon$Gronnwolf_getInstance
  });
  Object.defineProperty(Weapon, 'Gronnwolf2', {
    get: Weapon$Gronnwolf2_getInstance
  });
  Object.defineProperty(Weapon, 'KeenGronnwolf2', {
    get: Weapon$KeenGronnwolf2_getInstance
  });
  Object.defineProperty(Weapon, 'Gronnraven', {
    get: Weapon$Gronnraven_getInstance
  });
  Object.defineProperty(Weapon, 'Gronnraven2', {
    get: Weapon$Gronnraven2_getInstance
  });
  Object.defineProperty(Weapon, 'Gronnblade', {
    get: Weapon$Gronnblade_getInstance
  });
  Object.defineProperty(Weapon, 'Gronnblade2', {
    get: Weapon$Gronnblade2_getInstance
  });
  Object.defineProperty(Weapon, 'Gronnowl', {
    get: Weapon$Gronnowl_getInstance
  });
  Object.defineProperty(Weapon, 'Gronnowl2', {
    get: Weapon$Gronnowl2_getInstance
  });
  Object.defineProperty(Weapon, 'GreenEgg', {
    get: Weapon$GreenEgg_getInstance
  });
  Object.defineProperty(Weapon, 'GreenEgg2', {
    get: Weapon$GreenEgg2_getInstance
  });
  Object.defineProperty(Weapon, 'HibiscusTome', {
    get: Weapon$HibiscusTome_getInstance
  });
  Object.defineProperty(Weapon, 'HibiscusTome2', {
    get: Weapon$HibiscusTome2_getInstance
  });
  Object.defineProperty(Weapon, 'DancersRing', {
    get: Weapon$DancersRing_getInstance
  });
  Object.defineProperty(Weapon, 'DancersRing2', {
    get: Weapon$DancersRing2_getInstance
  });
  Object.defineProperty(Weapon, 'Elivagar', {
    get: Weapon$Elivagar_getInstance
  });
  Object.defineProperty(Weapon, 'Excalibur', {
    get: Weapon$Excalibur_getInstance
  });
  Object.defineProperty(Weapon, 'Naga', {
    get: Weapon$Naga_getInstance
  });
  Object.defineProperty(Weapon, 'DarkExcalibur', {
    get: Weapon$DarkExcalibur_getInstance
  });
  Object.defineProperty(Weapon, 'DivineNaga', {
    get: Weapon$DivineNaga_getInstance
  });
  Object.defineProperty(Weapon, 'SpectralTome', {
    get: Weapon$SpectralTome_getInstance
  });
  Object.defineProperty(Weapon, 'SpectralTome2', {
    get: Weapon$SpectralTome2_getInstance
  });
  Object.defineProperty(Weapon, 'FireBreath', {
    get: Weapon$FireBreath_getInstance
  });
  Object.defineProperty(Weapon, 'FireBreath2', {
    get: Weapon$FireBreath2_getInstance
  });
  Object.defineProperty(Weapon, 'LightningBreath', {
    get: Weapon$LightningBreath_getInstance
  });
  Object.defineProperty(Weapon, 'LightningBreath2', {
    get: Weapon$LightningBreath2_getInstance
  });
  Object.defineProperty(Weapon, 'Flametongue', {
    get: Weapon$Flametongue_getInstance
  });
  Object.defineProperty(Weapon, 'Flametongue2', {
    get: Weapon$Flametongue2_getInstance
  });
  Object.defineProperty(Weapon, 'LightBreath', {
    get: Weapon$LightBreath_getInstance
  });
  Object.defineProperty(Weapon, 'LightBreath2', {
    get: Weapon$LightBreath2_getInstance
  });
  Object.defineProperty(Weapon, 'DarkBreath', {
    get: Weapon$DarkBreath_getInstance
  });
  Object.defineProperty(Weapon, 'DarkBreath2', {
    get: Weapon$DarkBreath2_getInstance
  });
  Object.defineProperty(Weapon, 'Companion', {
    get: Weapon$Companion_getInstance
  });
  package$skill.Weapon = Weapon;
  Object.defineProperty(Assist.prototype, 'maxLevel', Object.getOwnPropertyDescriptor(Skill.prototype, 'maxLevel'));
  Assist.prototype.bothEffect_sv9jhu$ = Skill.prototype.bothEffect_sv9jhu$;
  Assist.prototype.bothEffect_sv9jhu$$default = Skill.prototype.bothEffect_sv9jhu$$default;
  Assist.prototype.attackEffect_sv9jhu$ = Skill.prototype.attackEffect_sv9jhu$;
  Assist.prototype.attackEffect_sv9jhu$$default = Skill.prototype.attackEffect_sv9jhu$$default;
  Assist.prototype.counterEffect_sv9jhu$ = Skill.prototype.counterEffect_sv9jhu$;
  Assist.prototype.counterEffect_sv9jhu$$default = Skill.prototype.counterEffect_sv9jhu$$default;
  Assist.prototype.effectedAttackEffect_sv9jhu$ = Skill.prototype.effectedAttackEffect_sv9jhu$;
  Assist.prototype.effectedAttackEffect_sv9jhu$$default = Skill.prototype.effectedAttackEffect_sv9jhu$$default;
  Assist.prototype.effectedCounterEffect_sv9jhu$ = Skill.prototype.effectedCounterEffect_sv9jhu$;
  Assist.prototype.effectedCounterEffect_sv9jhu$$default = Skill.prototype.effectedCounterEffect_sv9jhu$$default;
  Assist.prototype.attackPlan_p6uegp$ = Skill.prototype.attackPlan_p6uegp$;
  Assist.prototype.attackPlan_p6uegp$$default = Skill.prototype.attackPlan_p6uegp$$default;
  Assist.prototype.counterPlan_p6uegp$ = Skill.prototype.counterPlan_p6uegp$;
  Assist.prototype.counterPlan_p6uegp$$default = Skill.prototype.counterPlan_p6uegp$$default;
  Assist.prototype.prevent_w6mj9q$ = Skill.prototype.prevent_w6mj9q$;
  Assist.prototype.prevent_w6mj9q$$default = Skill.prototype.prevent_w6mj9q$$default;
  Assist.prototype.specialPrevent_upjsjk$ = Skill.prototype.specialPrevent_upjsjk$;
  Assist.prototype.specialPrevent_upjsjk$$default = Skill.prototype.specialPrevent_upjsjk$$default;
  Assist.prototype.specialTriggered_upjsjk$ = Skill.prototype.specialTriggered_upjsjk$;
  Assist.prototype.specialTriggered_upjsjk$$default = Skill.prototype.specialTriggered_upjsjk$$default;
  Assist.prototype.damage_96237r$ = Skill.prototype.damage_96237r$;
  Assist.prototype.damage_96237r$$default = Skill.prototype.damage_96237r$$default;
  Assist.prototype.absorb_6zcyla$ = Skill.prototype.absorb_6zcyla$;
  Assist.prototype.equip_yukhz7$ = Skill.prototype.equip_yukhz7$;
  Assist.prototype.equip_yukhz7$$default = Skill.prototype.equip_yukhz7$$default;
  Assist.prototype.equip_emsvym$ = Skill.prototype.equip_emsvym$;
  Assist.prototype.turnStart_sv9jhu$ = Skill.prototype.turnStart_sv9jhu$;
  Assist.prototype.turnStart_sv9jhu$$default = Skill.prototype.turnStart_sv9jhu$$default;
  Assist.prototype.afterFightEffect_sv9jhu$ = Skill.prototype.afterFightEffect_sv9jhu$;
  Assist.prototype.afterFightEffect_sv9jhu$$default = Skill.prototype.afterFightEffect_sv9jhu$$default;
  Assist.prototype.reducedDamage_upjsjk$ = Skill.prototype.reducedDamage_upjsjk$;
  Assist.prototype.reducedDamage_upjsjk$$default = Skill.prototype.reducedDamage_upjsjk$$default;
  Assist.prototype.defiantAtk_sv9jhu$ = Skill.prototype.defiantAtk_sv9jhu$;
  Assist.prototype.defiantSpd_sv9jhu$ = Skill.prototype.defiantSpd_sv9jhu$;
  Assist.prototype.defiantDef_sv9jhu$ = Skill.prototype.defiantDef_sv9jhu$;
  Assist.prototype.defiantRes_sv9jhu$ = Skill.prototype.defiantRes_sv9jhu$;
  Assist.prototype.blowAtk_sv9jhu$ = Skill.prototype.blowAtk_sv9jhu$;
  Assist.prototype.blowSpd_sv9jhu$ = Skill.prototype.blowSpd_sv9jhu$;
  Assist.prototype.blowDef_sv9jhu$ = Skill.prototype.blowDef_sv9jhu$;
  Assist.prototype.blowRes_sv9jhu$ = Skill.prototype.blowRes_sv9jhu$;
  Assist.prototype.steadyDef_sv9jhu$ = Skill.prototype.steadyDef_sv9jhu$;
  Assist.prototype.steadyRes_sv9jhu$ = Skill.prototype.steadyRes_sv9jhu$;
  Assist.prototype.steadyAtk_sv9jhu$ = Skill.prototype.steadyAtk_sv9jhu$;
  Assist.prototype.closeDef_sv9jhu$ = Skill.prototype.closeDef_sv9jhu$;
  Assist.prototype.distantDef_sv9jhu$ = Skill.prototype.distantDef_sv9jhu$;
  Assist.prototype.weaponBreaker_y53988$ = Skill.prototype.weaponBreaker_y53988$;
  Assist.prototype.boostDef_sv9jhu$ = Skill.prototype.boostDef_sv9jhu$;
  Assist.prototype.boostSpd_sv9jhu$ = Skill.prototype.boostSpd_sv9jhu$;
  Assist.prototype.boostAtk_sv9jhu$ = Skill.prototype.boostAtk_sv9jhu$;
  Assist.prototype.boostRes_sv9jhu$ = Skill.prototype.boostRes_sv9jhu$;
  Assist.prototype.furry_yukhz7$ = Skill.prototype.furry_yukhz7$;
  Assist.prototype.lifeAndDeath_yukhz7$ = Skill.prototype.lifeAndDeath_yukhz7$;
  Assist.prototype.log_za3rmp$ = Skill.prototype.log_za3rmp$;
  Assist.prototype.equipHp_yukhz7$ = Skill.prototype.equipHp_yukhz7$;
  Assist.prototype.equipAtk_yukhz7$ = Skill.prototype.equipAtk_yukhz7$;
  Assist.prototype.equipKiller_yukhz7$ = Skill.prototype.equipKiller_yukhz7$;
  Assist.prototype.equipSpd_yukhz7$ = Skill.prototype.equipSpd_yukhz7$;
  Assist.prototype.equipDef_yukhz7$ = Skill.prototype.equipDef_yukhz7$;
  Assist.prototype.equipRes_yukhz7$ = Skill.prototype.equipRes_yukhz7$;
  Assist.prototype.effectiveAgainst_d5yp1f$ = Skill.prototype.effectiveAgainst_d5yp1f$;
  Assist.prototype.effectiveAgainst_58hff6$ = Skill.prototype.effectiveAgainst_58hff6$;
  Assist.prototype.effectiveAgainstMagic_trfvk0$ = Skill.prototype.effectiveAgainstMagic_trfvk0$;
  Assist.prototype.doubleAttack_trfvk0$ = Skill.prototype.doubleAttack_trfvk0$;
  Assist.prototype.colorAdvantage_sv9jhu$ = Skill.prototype.colorAdvantage_sv9jhu$;
  Assist.prototype.vantage_p6uegp$ = Skill.prototype.vantage_p6uegp$;
  Assist.prototype.noFollowupAttack_9jfrn9$ = Skill.prototype.noFollowupAttack_9jfrn9$;
  Assist.prototype.followupable_sv9jhu$ = Skill.prototype.followupable_sv9jhu$;
  Assist.prototype.eachNofollowupable_sv9jhu$ = Skill.prototype.eachNofollowupable_sv9jhu$;
  Assist.prototype.desperation_p6uegp$ = Skill.prototype.desperation_p6uegp$;
  Assist.prototype.brashAssault_sv9jhu$ = Skill.prototype.brashAssault_sv9jhu$;
  Assist.prototype.windsweep_sv9jhu$ = Skill.prototype.windsweep_sv9jhu$;
  Assist.prototype.watersweep_sv9jhu$ = Skill.prototype.watersweep_sv9jhu$;
  Assist.prototype.dazzling_sv9jhu$ = Skill.prototype.dazzling_sv9jhu$;
  Assist.prototype.wrathfulStaff_sv9jhu$ = Skill.prototype.wrathfulStaff_sv9jhu$;
  Assist.prototype.counterAllRange_trfvk0$ = Skill.prototype.counterAllRange_trfvk0$;
  Assist.prototype.disableEachCounter_sv9jhu$ = Skill.prototype.disableEachCounter_sv9jhu$;
  Assist.prototype.sacasBlessing_sv9jhu$ = Skill.prototype.sacasBlessing_sv9jhu$;
  Assist.prototype.beorcsBlessing_sv9jhu$ = Skill.prototype.beorcsBlessing_sv9jhu$;
  Assist.prototype.fullHpBonus_sv9jhu$ = Skill.prototype.fullHpBonus_sv9jhu$;
  Assist.prototype.allBonus_sv9jhu$ = Skill.prototype.allBonus_sv9jhu$;
  Assist.prototype.enemyFullHpBonus_sv9jhu$ = Skill.prototype.enemyFullHpBonus_sv9jhu$;
  Assist.prototype.equipBrave_yukhz7$ = Skill.prototype.equipBrave_yukhz7$;
  Assist.prototype.equipBlade_yukhz7$ = Skill.prototype.equipBlade_yukhz7$;
  Assist.prototype.equipRaven_trfvk0$ = Skill.prototype.equipRaven_trfvk0$;
  Assist.prototype.bladeEffect_trfvk0$ = Skill.prototype.bladeEffect_trfvk0$;
  Assist.prototype.fullHpAtkSpdBonus_sv9jhu$ = Skill.prototype.fullHpAtkSpdBonus_sv9jhu$;
  Assist.prototype.antiBuffBonus_trfvk0$ = Skill.prototype.antiBuffBonus_trfvk0$;
  Assist.prototype.heavyBlade_sv9jhu$ = Skill.prototype.heavyBlade_sv9jhu$;
  Assist.prototype.flashingBlade_sv9jhu$ = Skill.prototype.flashingBlade_sv9jhu$;
  Assist.prototype.accelerateAttackCooldown_sv9jhu$ = Skill.prototype.accelerateAttackCooldown_sv9jhu$;
  Assist.prototype.antiEffectiveAgainst_ut57va$ = Skill.prototype.antiEffectiveAgainst_ut57va$;
  Assist.prototype.antiAccelerateCooldown_sv9jhu$ = Skill.prototype.antiAccelerateCooldown_sv9jhu$;
  Assist.prototype.attackPain_sv9jhu$ = Skill.prototype.attackPain_sv9jhu$;
  Assist.prototype.attackHpLoss_sv9jhu$ = Skill.prototype.attackHpLoss_sv9jhu$;
  Assist.prototype.attackHeal_sv9jhu$ = Skill.prototype.attackHeal_sv9jhu$;
  Assist.prototype.brazenAtk_sv9jhu$ = Skill.prototype.brazenAtk_sv9jhu$;
  Assist.prototype.brazenSpd_sv9jhu$ = Skill.prototype.brazenSpd_sv9jhu$;
  Assist.prototype.brazenDef_sv9jhu$ = Skill.prototype.brazenDef_sv9jhu$;
  Assist.prototype.brazenRes_sv9jhu$ = Skill.prototype.brazenRes_sv9jhu$;
  LappedSkill.prototype.bothEffect_sv9jhu$ = Skill.prototype.bothEffect_sv9jhu$;
  LappedSkill.prototype.attackEffect_sv9jhu$ = Skill.prototype.attackEffect_sv9jhu$;
  LappedSkill.prototype.counterEffect_sv9jhu$ = Skill.prototype.counterEffect_sv9jhu$;
  LappedSkill.prototype.effectedAttackEffect_sv9jhu$ = Skill.prototype.effectedAttackEffect_sv9jhu$;
  LappedSkill.prototype.effectedCounterEffect_sv9jhu$ = Skill.prototype.effectedCounterEffect_sv9jhu$;
  LappedSkill.prototype.attackPlan_p6uegp$ = Skill.prototype.attackPlan_p6uegp$;
  LappedSkill.prototype.counterPlan_p6uegp$ = Skill.prototype.counterPlan_p6uegp$;
  LappedSkill.prototype.prevent_w6mj9q$ = Skill.prototype.prevent_w6mj9q$;
  LappedSkill.prototype.specialPrevent_upjsjk$ = Skill.prototype.specialPrevent_upjsjk$;
  LappedSkill.prototype.specialTriggered_upjsjk$ = Skill.prototype.specialTriggered_upjsjk$;
  LappedSkill.prototype.damage_96237r$ = Skill.prototype.damage_96237r$;
  LappedSkill.prototype.equip_yukhz7$ = Skill.prototype.equip_yukhz7$;
  LappedSkill.prototype.turnStart_sv9jhu$ = Skill.prototype.turnStart_sv9jhu$;
  LappedSkill.prototype.afterFightEffect_sv9jhu$ = Skill.prototype.afterFightEffect_sv9jhu$;
  LappedSkill.prototype.reducedDamage_upjsjk$ = Skill.prototype.reducedDamage_upjsjk$;
  RefineSkill.prototype.equip_emsvym$ = Skill.prototype.equip_emsvym$;
  Object.defineProperty(RefineSkill.prototype, 'maxLevel', Object.getOwnPropertyDescriptor(Skill.prototype, 'maxLevel'));
  RefineSkill.prototype.bothEffect_sv9jhu$ = Skill.prototype.bothEffect_sv9jhu$;
  RefineSkill.prototype.bothEffect_sv9jhu$$default = Skill.prototype.bothEffect_sv9jhu$$default;
  RefineSkill.prototype.attackEffect_sv9jhu$ = Skill.prototype.attackEffect_sv9jhu$;
  RefineSkill.prototype.attackEffect_sv9jhu$$default = Skill.prototype.attackEffect_sv9jhu$$default;
  RefineSkill.prototype.counterEffect_sv9jhu$ = Skill.prototype.counterEffect_sv9jhu$;
  RefineSkill.prototype.counterEffect_sv9jhu$$default = Skill.prototype.counterEffect_sv9jhu$$default;
  RefineSkill.prototype.effectedAttackEffect_sv9jhu$ = Skill.prototype.effectedAttackEffect_sv9jhu$;
  RefineSkill.prototype.effectedAttackEffect_sv9jhu$$default = Skill.prototype.effectedAttackEffect_sv9jhu$$default;
  RefineSkill.prototype.effectedCounterEffect_sv9jhu$ = Skill.prototype.effectedCounterEffect_sv9jhu$;
  RefineSkill.prototype.effectedCounterEffect_sv9jhu$$default = Skill.prototype.effectedCounterEffect_sv9jhu$$default;
  RefineSkill.prototype.attackPlan_p6uegp$ = Skill.prototype.attackPlan_p6uegp$;
  RefineSkill.prototype.attackPlan_p6uegp$$default = Skill.prototype.attackPlan_p6uegp$$default;
  RefineSkill.prototype.counterPlan_p6uegp$ = Skill.prototype.counterPlan_p6uegp$;
  RefineSkill.prototype.counterPlan_p6uegp$$default = Skill.prototype.counterPlan_p6uegp$$default;
  RefineSkill.prototype.prevent_w6mj9q$ = Skill.prototype.prevent_w6mj9q$;
  RefineSkill.prototype.prevent_w6mj9q$$default = Skill.prototype.prevent_w6mj9q$$default;
  RefineSkill.prototype.specialPrevent_upjsjk$ = Skill.prototype.specialPrevent_upjsjk$;
  RefineSkill.prototype.specialPrevent_upjsjk$$default = Skill.prototype.specialPrevent_upjsjk$$default;
  RefineSkill.prototype.specialTriggered_upjsjk$ = Skill.prototype.specialTriggered_upjsjk$;
  RefineSkill.prototype.specialTriggered_upjsjk$$default = Skill.prototype.specialTriggered_upjsjk$$default;
  RefineSkill.prototype.damage_96237r$ = Skill.prototype.damage_96237r$;
  RefineSkill.prototype.damage_96237r$$default = Skill.prototype.damage_96237r$$default;
  RefineSkill.prototype.absorb_6zcyla$ = Skill.prototype.absorb_6zcyla$;
  RefineSkill.prototype.turnStart_sv9jhu$ = Skill.prototype.turnStart_sv9jhu$;
  RefineSkill.prototype.turnStart_sv9jhu$$default = Skill.prototype.turnStart_sv9jhu$$default;
  RefineSkill.prototype.afterFightEffect_sv9jhu$ = Skill.prototype.afterFightEffect_sv9jhu$;
  RefineSkill.prototype.afterFightEffect_sv9jhu$$default = Skill.prototype.afterFightEffect_sv9jhu$$default;
  RefineSkill.prototype.reducedDamage_upjsjk$ = Skill.prototype.reducedDamage_upjsjk$;
  RefineSkill.prototype.reducedDamage_upjsjk$$default = Skill.prototype.reducedDamage_upjsjk$$default;
  RefineSkill.prototype.defiantAtk_sv9jhu$ = Skill.prototype.defiantAtk_sv9jhu$;
  RefineSkill.prototype.defiantSpd_sv9jhu$ = Skill.prototype.defiantSpd_sv9jhu$;
  RefineSkill.prototype.defiantDef_sv9jhu$ = Skill.prototype.defiantDef_sv9jhu$;
  RefineSkill.prototype.defiantRes_sv9jhu$ = Skill.prototype.defiantRes_sv9jhu$;
  RefineSkill.prototype.blowAtk_sv9jhu$ = Skill.prototype.blowAtk_sv9jhu$;
  RefineSkill.prototype.blowSpd_sv9jhu$ = Skill.prototype.blowSpd_sv9jhu$;
  RefineSkill.prototype.blowDef_sv9jhu$ = Skill.prototype.blowDef_sv9jhu$;
  RefineSkill.prototype.blowRes_sv9jhu$ = Skill.prototype.blowRes_sv9jhu$;
  RefineSkill.prototype.steadyDef_sv9jhu$ = Skill.prototype.steadyDef_sv9jhu$;
  RefineSkill.prototype.steadyRes_sv9jhu$ = Skill.prototype.steadyRes_sv9jhu$;
  RefineSkill.prototype.steadyAtk_sv9jhu$ = Skill.prototype.steadyAtk_sv9jhu$;
  RefineSkill.prototype.closeDef_sv9jhu$ = Skill.prototype.closeDef_sv9jhu$;
  RefineSkill.prototype.distantDef_sv9jhu$ = Skill.prototype.distantDef_sv9jhu$;
  RefineSkill.prototype.weaponBreaker_y53988$ = Skill.prototype.weaponBreaker_y53988$;
  RefineSkill.prototype.boostDef_sv9jhu$ = Skill.prototype.boostDef_sv9jhu$;
  RefineSkill.prototype.boostSpd_sv9jhu$ = Skill.prototype.boostSpd_sv9jhu$;
  RefineSkill.prototype.boostAtk_sv9jhu$ = Skill.prototype.boostAtk_sv9jhu$;
  RefineSkill.prototype.boostRes_sv9jhu$ = Skill.prototype.boostRes_sv9jhu$;
  RefineSkill.prototype.furry_yukhz7$ = Skill.prototype.furry_yukhz7$;
  RefineSkill.prototype.lifeAndDeath_yukhz7$ = Skill.prototype.lifeAndDeath_yukhz7$;
  RefineSkill.prototype.log_za3rmp$ = Skill.prototype.log_za3rmp$;
  RefineSkill.prototype.equipHp_yukhz7$ = Skill.prototype.equipHp_yukhz7$;
  RefineSkill.prototype.equipAtk_yukhz7$ = Skill.prototype.equipAtk_yukhz7$;
  RefineSkill.prototype.equipKiller_yukhz7$ = Skill.prototype.equipKiller_yukhz7$;
  RefineSkill.prototype.equipSpd_yukhz7$ = Skill.prototype.equipSpd_yukhz7$;
  RefineSkill.prototype.equipDef_yukhz7$ = Skill.prototype.equipDef_yukhz7$;
  RefineSkill.prototype.equipRes_yukhz7$ = Skill.prototype.equipRes_yukhz7$;
  RefineSkill.prototype.effectiveAgainst_d5yp1f$ = Skill.prototype.effectiveAgainst_d5yp1f$;
  RefineSkill.prototype.effectiveAgainst_58hff6$ = Skill.prototype.effectiveAgainst_58hff6$;
  RefineSkill.prototype.effectiveAgainstMagic_trfvk0$ = Skill.prototype.effectiveAgainstMagic_trfvk0$;
  RefineSkill.prototype.doubleAttack_trfvk0$ = Skill.prototype.doubleAttack_trfvk0$;
  RefineSkill.prototype.colorAdvantage_sv9jhu$ = Skill.prototype.colorAdvantage_sv9jhu$;
  RefineSkill.prototype.vantage_p6uegp$ = Skill.prototype.vantage_p6uegp$;
  RefineSkill.prototype.noFollowupAttack_9jfrn9$ = Skill.prototype.noFollowupAttack_9jfrn9$;
  RefineSkill.prototype.followupable_sv9jhu$ = Skill.prototype.followupable_sv9jhu$;
  RefineSkill.prototype.eachNofollowupable_sv9jhu$ = Skill.prototype.eachNofollowupable_sv9jhu$;
  RefineSkill.prototype.desperation_p6uegp$ = Skill.prototype.desperation_p6uegp$;
  RefineSkill.prototype.brashAssault_sv9jhu$ = Skill.prototype.brashAssault_sv9jhu$;
  RefineSkill.prototype.windsweep_sv9jhu$ = Skill.prototype.windsweep_sv9jhu$;
  RefineSkill.prototype.watersweep_sv9jhu$ = Skill.prototype.watersweep_sv9jhu$;
  RefineSkill.prototype.dazzling_sv9jhu$ = Skill.prototype.dazzling_sv9jhu$;
  RefineSkill.prototype.wrathfulStaff_sv9jhu$ = Skill.prototype.wrathfulStaff_sv9jhu$;
  RefineSkill.prototype.counterAllRange_trfvk0$ = Skill.prototype.counterAllRange_trfvk0$;
  RefineSkill.prototype.disableEachCounter_sv9jhu$ = Skill.prototype.disableEachCounter_sv9jhu$;
  RefineSkill.prototype.sacasBlessing_sv9jhu$ = Skill.prototype.sacasBlessing_sv9jhu$;
  RefineSkill.prototype.beorcsBlessing_sv9jhu$ = Skill.prototype.beorcsBlessing_sv9jhu$;
  RefineSkill.prototype.fullHpBonus_sv9jhu$ = Skill.prototype.fullHpBonus_sv9jhu$;
  RefineSkill.prototype.allBonus_sv9jhu$ = Skill.prototype.allBonus_sv9jhu$;
  RefineSkill.prototype.enemyFullHpBonus_sv9jhu$ = Skill.prototype.enemyFullHpBonus_sv9jhu$;
  RefineSkill.prototype.equipBrave_yukhz7$ = Skill.prototype.equipBrave_yukhz7$;
  RefineSkill.prototype.equipBlade_yukhz7$ = Skill.prototype.equipBlade_yukhz7$;
  RefineSkill.prototype.equipRaven_trfvk0$ = Skill.prototype.equipRaven_trfvk0$;
  RefineSkill.prototype.bladeEffect_trfvk0$ = Skill.prototype.bladeEffect_trfvk0$;
  RefineSkill.prototype.fullHpAtkSpdBonus_sv9jhu$ = Skill.prototype.fullHpAtkSpdBonus_sv9jhu$;
  RefineSkill.prototype.antiBuffBonus_trfvk0$ = Skill.prototype.antiBuffBonus_trfvk0$;
  RefineSkill.prototype.heavyBlade_sv9jhu$ = Skill.prototype.heavyBlade_sv9jhu$;
  RefineSkill.prototype.flashingBlade_sv9jhu$ = Skill.prototype.flashingBlade_sv9jhu$;
  RefineSkill.prototype.accelerateAttackCooldown_sv9jhu$ = Skill.prototype.accelerateAttackCooldown_sv9jhu$;
  RefineSkill.prototype.antiEffectiveAgainst_ut57va$ = Skill.prototype.antiEffectiveAgainst_ut57va$;
  RefineSkill.prototype.antiAccelerateCooldown_sv9jhu$ = Skill.prototype.antiAccelerateCooldown_sv9jhu$;
  RefineSkill.prototype.attackPain_sv9jhu$ = Skill.prototype.attackPain_sv9jhu$;
  RefineSkill.prototype.attackHpLoss_sv9jhu$ = Skill.prototype.attackHpLoss_sv9jhu$;
  RefineSkill.prototype.attackHeal_sv9jhu$ = Skill.prototype.attackHeal_sv9jhu$;
  RefineSkill.prototype.brazenAtk_sv9jhu$ = Skill.prototype.brazenAtk_sv9jhu$;
  RefineSkill.prototype.brazenSpd_sv9jhu$ = Skill.prototype.brazenSpd_sv9jhu$;
  RefineSkill.prototype.brazenDef_sv9jhu$ = Skill.prototype.brazenDef_sv9jhu$;
  RefineSkill.prototype.brazenRes_sv9jhu$ = Skill.prototype.brazenRes_sv9jhu$;
  RefineSkill.prototype.equip_yukhz7$ = Skill.prototype.equip_yukhz7$;
  Seal.prototype.bothEffect_sv9jhu$ = Skill.prototype.bothEffect_sv9jhu$;
  Seal.prototype.bothEffect_sv9jhu$$default = Skill.prototype.bothEffect_sv9jhu$$default;
  Seal.prototype.attackEffect_sv9jhu$ = Skill.prototype.attackEffect_sv9jhu$;
  Seal.prototype.attackEffect_sv9jhu$$default = Skill.prototype.attackEffect_sv9jhu$$default;
  Seal.prototype.counterEffect_sv9jhu$ = Skill.prototype.counterEffect_sv9jhu$;
  Seal.prototype.counterEffect_sv9jhu$$default = Skill.prototype.counterEffect_sv9jhu$$default;
  Seal.prototype.effectedAttackEffect_sv9jhu$ = Skill.prototype.effectedAttackEffect_sv9jhu$;
  Seal.prototype.effectedAttackEffect_sv9jhu$$default = Skill.prototype.effectedAttackEffect_sv9jhu$$default;
  Seal.prototype.effectedCounterEffect_sv9jhu$ = Skill.prototype.effectedCounterEffect_sv9jhu$;
  Seal.prototype.effectedCounterEffect_sv9jhu$$default = Skill.prototype.effectedCounterEffect_sv9jhu$$default;
  Seal.prototype.attackPlan_p6uegp$ = Skill.prototype.attackPlan_p6uegp$;
  Seal.prototype.attackPlan_p6uegp$$default = Skill.prototype.attackPlan_p6uegp$$default;
  Seal.prototype.counterPlan_p6uegp$ = Skill.prototype.counterPlan_p6uegp$;
  Seal.prototype.counterPlan_p6uegp$$default = Skill.prototype.counterPlan_p6uegp$$default;
  Seal.prototype.prevent_w6mj9q$ = Skill.prototype.prevent_w6mj9q$;
  Seal.prototype.prevent_w6mj9q$$default = Skill.prototype.prevent_w6mj9q$$default;
  Seal.prototype.specialPrevent_upjsjk$ = Skill.prototype.specialPrevent_upjsjk$;
  Seal.prototype.specialPrevent_upjsjk$$default = Skill.prototype.specialPrevent_upjsjk$$default;
  Seal.prototype.specialTriggered_upjsjk$ = Skill.prototype.specialTriggered_upjsjk$;
  Seal.prototype.specialTriggered_upjsjk$$default = Skill.prototype.specialTriggered_upjsjk$$default;
  Seal.prototype.damage_96237r$ = Skill.prototype.damage_96237r$;
  Seal.prototype.damage_96237r$$default = Skill.prototype.damage_96237r$$default;
  Seal.prototype.absorb_6zcyla$ = Skill.prototype.absorb_6zcyla$;
  Seal.prototype.equip_yukhz7$ = Skill.prototype.equip_yukhz7$;
  Seal.prototype.equip_yukhz7$$default = Skill.prototype.equip_yukhz7$$default;
  Seal.prototype.equip_emsvym$ = Skill.prototype.equip_emsvym$;
  Seal.prototype.turnStart_sv9jhu$ = Skill.prototype.turnStart_sv9jhu$;
  Seal.prototype.turnStart_sv9jhu$$default = Skill.prototype.turnStart_sv9jhu$$default;
  Seal.prototype.afterFightEffect_sv9jhu$ = Skill.prototype.afterFightEffect_sv9jhu$;
  Seal.prototype.afterFightEffect_sv9jhu$$default = Skill.prototype.afterFightEffect_sv9jhu$$default;
  Seal.prototype.reducedDamage_upjsjk$ = Skill.prototype.reducedDamage_upjsjk$;
  Seal.prototype.reducedDamage_upjsjk$$default = Skill.prototype.reducedDamage_upjsjk$$default;
  Seal.prototype.defiantAtk_sv9jhu$ = Skill.prototype.defiantAtk_sv9jhu$;
  Seal.prototype.defiantSpd_sv9jhu$ = Skill.prototype.defiantSpd_sv9jhu$;
  Seal.prototype.defiantDef_sv9jhu$ = Skill.prototype.defiantDef_sv9jhu$;
  Seal.prototype.defiantRes_sv9jhu$ = Skill.prototype.defiantRes_sv9jhu$;
  Seal.prototype.blowAtk_sv9jhu$ = Skill.prototype.blowAtk_sv9jhu$;
  Seal.prototype.blowSpd_sv9jhu$ = Skill.prototype.blowSpd_sv9jhu$;
  Seal.prototype.blowDef_sv9jhu$ = Skill.prototype.blowDef_sv9jhu$;
  Seal.prototype.blowRes_sv9jhu$ = Skill.prototype.blowRes_sv9jhu$;
  Seal.prototype.steadyDef_sv9jhu$ = Skill.prototype.steadyDef_sv9jhu$;
  Seal.prototype.steadyRes_sv9jhu$ = Skill.prototype.steadyRes_sv9jhu$;
  Seal.prototype.steadyAtk_sv9jhu$ = Skill.prototype.steadyAtk_sv9jhu$;
  Seal.prototype.closeDef_sv9jhu$ = Skill.prototype.closeDef_sv9jhu$;
  Seal.prototype.distantDef_sv9jhu$ = Skill.prototype.distantDef_sv9jhu$;
  Seal.prototype.weaponBreaker_y53988$ = Skill.prototype.weaponBreaker_y53988$;
  Seal.prototype.boostDef_sv9jhu$ = Skill.prototype.boostDef_sv9jhu$;
  Seal.prototype.boostSpd_sv9jhu$ = Skill.prototype.boostSpd_sv9jhu$;
  Seal.prototype.boostAtk_sv9jhu$ = Skill.prototype.boostAtk_sv9jhu$;
  Seal.prototype.boostRes_sv9jhu$ = Skill.prototype.boostRes_sv9jhu$;
  Seal.prototype.furry_yukhz7$ = Skill.prototype.furry_yukhz7$;
  Seal.prototype.lifeAndDeath_yukhz7$ = Skill.prototype.lifeAndDeath_yukhz7$;
  Seal.prototype.log_za3rmp$ = Skill.prototype.log_za3rmp$;
  Seal.prototype.equipHp_yukhz7$ = Skill.prototype.equipHp_yukhz7$;
  Seal.prototype.equipAtk_yukhz7$ = Skill.prototype.equipAtk_yukhz7$;
  Seal.prototype.equipKiller_yukhz7$ = Skill.prototype.equipKiller_yukhz7$;
  Seal.prototype.equipSpd_yukhz7$ = Skill.prototype.equipSpd_yukhz7$;
  Seal.prototype.equipDef_yukhz7$ = Skill.prototype.equipDef_yukhz7$;
  Seal.prototype.equipRes_yukhz7$ = Skill.prototype.equipRes_yukhz7$;
  Seal.prototype.effectiveAgainst_d5yp1f$ = Skill.prototype.effectiveAgainst_d5yp1f$;
  Seal.prototype.effectiveAgainst_58hff6$ = Skill.prototype.effectiveAgainst_58hff6$;
  Seal.prototype.effectiveAgainstMagic_trfvk0$ = Skill.prototype.effectiveAgainstMagic_trfvk0$;
  Seal.prototype.doubleAttack_trfvk0$ = Skill.prototype.doubleAttack_trfvk0$;
  Seal.prototype.colorAdvantage_sv9jhu$ = Skill.prototype.colorAdvantage_sv9jhu$;
  Seal.prototype.vantage_p6uegp$ = Skill.prototype.vantage_p6uegp$;
  Seal.prototype.noFollowupAttack_9jfrn9$ = Skill.prototype.noFollowupAttack_9jfrn9$;
  Seal.prototype.followupable_sv9jhu$ = Skill.prototype.followupable_sv9jhu$;
  Seal.prototype.eachNofollowupable_sv9jhu$ = Skill.prototype.eachNofollowupable_sv9jhu$;
  Seal.prototype.desperation_p6uegp$ = Skill.prototype.desperation_p6uegp$;
  Seal.prototype.brashAssault_sv9jhu$ = Skill.prototype.brashAssault_sv9jhu$;
  Seal.prototype.windsweep_sv9jhu$ = Skill.prototype.windsweep_sv9jhu$;
  Seal.prototype.watersweep_sv9jhu$ = Skill.prototype.watersweep_sv9jhu$;
  Seal.prototype.dazzling_sv9jhu$ = Skill.prototype.dazzling_sv9jhu$;
  Seal.prototype.wrathfulStaff_sv9jhu$ = Skill.prototype.wrathfulStaff_sv9jhu$;
  Seal.prototype.counterAllRange_trfvk0$ = Skill.prototype.counterAllRange_trfvk0$;
  Seal.prototype.disableEachCounter_sv9jhu$ = Skill.prototype.disableEachCounter_sv9jhu$;
  Seal.prototype.sacasBlessing_sv9jhu$ = Skill.prototype.sacasBlessing_sv9jhu$;
  Seal.prototype.beorcsBlessing_sv9jhu$ = Skill.prototype.beorcsBlessing_sv9jhu$;
  Seal.prototype.fullHpBonus_sv9jhu$ = Skill.prototype.fullHpBonus_sv9jhu$;
  Seal.prototype.allBonus_sv9jhu$ = Skill.prototype.allBonus_sv9jhu$;
  Seal.prototype.enemyFullHpBonus_sv9jhu$ = Skill.prototype.enemyFullHpBonus_sv9jhu$;
  Seal.prototype.equipBrave_yukhz7$ = Skill.prototype.equipBrave_yukhz7$;
  Seal.prototype.equipBlade_yukhz7$ = Skill.prototype.equipBlade_yukhz7$;
  Seal.prototype.equipRaven_trfvk0$ = Skill.prototype.equipRaven_trfvk0$;
  Seal.prototype.bladeEffect_trfvk0$ = Skill.prototype.bladeEffect_trfvk0$;
  Seal.prototype.fullHpAtkSpdBonus_sv9jhu$ = Skill.prototype.fullHpAtkSpdBonus_sv9jhu$;
  Seal.prototype.antiBuffBonus_trfvk0$ = Skill.prototype.antiBuffBonus_trfvk0$;
  Seal.prototype.heavyBlade_sv9jhu$ = Skill.prototype.heavyBlade_sv9jhu$;
  Seal.prototype.flashingBlade_sv9jhu$ = Skill.prototype.flashingBlade_sv9jhu$;
  Seal.prototype.accelerateAttackCooldown_sv9jhu$ = Skill.prototype.accelerateAttackCooldown_sv9jhu$;
  Seal.prototype.antiEffectiveAgainst_ut57va$ = Skill.prototype.antiEffectiveAgainst_ut57va$;
  Seal.prototype.antiAccelerateCooldown_sv9jhu$ = Skill.prototype.antiAccelerateCooldown_sv9jhu$;
  Seal.prototype.attackPain_sv9jhu$ = Skill.prototype.attackPain_sv9jhu$;
  Seal.prototype.attackHpLoss_sv9jhu$ = Skill.prototype.attackHpLoss_sv9jhu$;
  Seal.prototype.attackHeal_sv9jhu$ = Skill.prototype.attackHeal_sv9jhu$;
  Seal.prototype.brazenAtk_sv9jhu$ = Skill.prototype.brazenAtk_sv9jhu$;
  Seal.prototype.brazenSpd_sv9jhu$ = Skill.prototype.brazenSpd_sv9jhu$;
  Seal.prototype.brazenDef_sv9jhu$ = Skill.prototype.brazenDef_sv9jhu$;
  Seal.prototype.brazenRes_sv9jhu$ = Skill.prototype.brazenRes_sv9jhu$;
  Object.defineProperty(Skill$None.prototype, 'level', Object.getOwnPropertyDescriptor(Skill.prototype, 'level'));
  Object.defineProperty(Skill$None.prototype, 'type', Object.getOwnPropertyDescriptor(Skill.prototype, 'type'));
  Object.defineProperty(Skill$None.prototype, 'value', Object.getOwnPropertyDescriptor(Skill.prototype, 'value'));
  Object.defineProperty(Skill$None.prototype, 'jp', Object.getOwnPropertyDescriptor(Skill.prototype, 'jp'));
  Object.defineProperty(Skill$None.prototype, 'maxLevel', Object.getOwnPropertyDescriptor(Skill.prototype, 'maxLevel'));
  Object.defineProperty(Skill$None.prototype, 'preSkill', Object.getOwnPropertyDescriptor(Skill.prototype, 'preSkill'));
  Skill$None.prototype.localeName_miixs2$ = Skill.prototype.localeName_miixs2$;
  Skill$None.prototype.bothEffect_sv9jhu$ = Skill.prototype.bothEffect_sv9jhu$;
  Skill$None.prototype.bothEffect_sv9jhu$$default = Skill.prototype.bothEffect_sv9jhu$$default;
  Skill$None.prototype.attackEffect_sv9jhu$ = Skill.prototype.attackEffect_sv9jhu$;
  Skill$None.prototype.attackEffect_sv9jhu$$default = Skill.prototype.attackEffect_sv9jhu$$default;
  Skill$None.prototype.counterEffect_sv9jhu$ = Skill.prototype.counterEffect_sv9jhu$;
  Skill$None.prototype.counterEffect_sv9jhu$$default = Skill.prototype.counterEffect_sv9jhu$$default;
  Skill$None.prototype.effectedAttackEffect_sv9jhu$ = Skill.prototype.effectedAttackEffect_sv9jhu$;
  Skill$None.prototype.effectedAttackEffect_sv9jhu$$default = Skill.prototype.effectedAttackEffect_sv9jhu$$default;
  Skill$None.prototype.effectedCounterEffect_sv9jhu$ = Skill.prototype.effectedCounterEffect_sv9jhu$;
  Skill$None.prototype.effectedCounterEffect_sv9jhu$$default = Skill.prototype.effectedCounterEffect_sv9jhu$$default;
  Skill$None.prototype.attackPlan_p6uegp$ = Skill.prototype.attackPlan_p6uegp$;
  Skill$None.prototype.attackPlan_p6uegp$$default = Skill.prototype.attackPlan_p6uegp$$default;
  Skill$None.prototype.counterPlan_p6uegp$ = Skill.prototype.counterPlan_p6uegp$;
  Skill$None.prototype.counterPlan_p6uegp$$default = Skill.prototype.counterPlan_p6uegp$$default;
  Skill$None.prototype.prevent_w6mj9q$ = Skill.prototype.prevent_w6mj9q$;
  Skill$None.prototype.prevent_w6mj9q$$default = Skill.prototype.prevent_w6mj9q$$default;
  Skill$None.prototype.specialPrevent_upjsjk$ = Skill.prototype.specialPrevent_upjsjk$;
  Skill$None.prototype.specialPrevent_upjsjk$$default = Skill.prototype.specialPrevent_upjsjk$$default;
  Skill$None.prototype.specialTriggered_upjsjk$ = Skill.prototype.specialTriggered_upjsjk$;
  Skill$None.prototype.specialTriggered_upjsjk$$default = Skill.prototype.specialTriggered_upjsjk$$default;
  Skill$None.prototype.damage_96237r$ = Skill.prototype.damage_96237r$;
  Skill$None.prototype.damage_96237r$$default = Skill.prototype.damage_96237r$$default;
  Skill$None.prototype.absorb_6zcyla$ = Skill.prototype.absorb_6zcyla$;
  Skill$None.prototype.equip_yukhz7$ = Skill.prototype.equip_yukhz7$;
  Skill$None.prototype.equip_yukhz7$$default = Skill.prototype.equip_yukhz7$$default;
  Skill$None.prototype.equip_emsvym$ = Skill.prototype.equip_emsvym$;
  Skill$None.prototype.turnStart_sv9jhu$ = Skill.prototype.turnStart_sv9jhu$;
  Skill$None.prototype.turnStart_sv9jhu$$default = Skill.prototype.turnStart_sv9jhu$$default;
  Skill$None.prototype.afterFightEffect_sv9jhu$ = Skill.prototype.afterFightEffect_sv9jhu$;
  Skill$None.prototype.afterFightEffect_sv9jhu$$default = Skill.prototype.afterFightEffect_sv9jhu$$default;
  Skill$None.prototype.reducedDamage_upjsjk$ = Skill.prototype.reducedDamage_upjsjk$;
  Skill$None.prototype.reducedDamage_upjsjk$$default = Skill.prototype.reducedDamage_upjsjk$$default;
  Skill$None.prototype.defiantAtk_sv9jhu$ = Skill.prototype.defiantAtk_sv9jhu$;
  Skill$None.prototype.defiantSpd_sv9jhu$ = Skill.prototype.defiantSpd_sv9jhu$;
  Skill$None.prototype.defiantDef_sv9jhu$ = Skill.prototype.defiantDef_sv9jhu$;
  Skill$None.prototype.defiantRes_sv9jhu$ = Skill.prototype.defiantRes_sv9jhu$;
  Skill$None.prototype.blowAtk_sv9jhu$ = Skill.prototype.blowAtk_sv9jhu$;
  Skill$None.prototype.blowSpd_sv9jhu$ = Skill.prototype.blowSpd_sv9jhu$;
  Skill$None.prototype.blowDef_sv9jhu$ = Skill.prototype.blowDef_sv9jhu$;
  Skill$None.prototype.blowRes_sv9jhu$ = Skill.prototype.blowRes_sv9jhu$;
  Skill$None.prototype.steadyDef_sv9jhu$ = Skill.prototype.steadyDef_sv9jhu$;
  Skill$None.prototype.steadyRes_sv9jhu$ = Skill.prototype.steadyRes_sv9jhu$;
  Skill$None.prototype.steadyAtk_sv9jhu$ = Skill.prototype.steadyAtk_sv9jhu$;
  Skill$None.prototype.closeDef_sv9jhu$ = Skill.prototype.closeDef_sv9jhu$;
  Skill$None.prototype.distantDef_sv9jhu$ = Skill.prototype.distantDef_sv9jhu$;
  Skill$None.prototype.weaponBreaker_y53988$ = Skill.prototype.weaponBreaker_y53988$;
  Skill$None.prototype.boostDef_sv9jhu$ = Skill.prototype.boostDef_sv9jhu$;
  Skill$None.prototype.boostSpd_sv9jhu$ = Skill.prototype.boostSpd_sv9jhu$;
  Skill$None.prototype.boostAtk_sv9jhu$ = Skill.prototype.boostAtk_sv9jhu$;
  Skill$None.prototype.boostRes_sv9jhu$ = Skill.prototype.boostRes_sv9jhu$;
  Skill$None.prototype.furry_yukhz7$ = Skill.prototype.furry_yukhz7$;
  Skill$None.prototype.lifeAndDeath_yukhz7$ = Skill.prototype.lifeAndDeath_yukhz7$;
  Skill$None.prototype.log_za3rmp$ = Skill.prototype.log_za3rmp$;
  Skill$None.prototype.equipHp_yukhz7$ = Skill.prototype.equipHp_yukhz7$;
  Skill$None.prototype.equipAtk_yukhz7$ = Skill.prototype.equipAtk_yukhz7$;
  Skill$None.prototype.equipKiller_yukhz7$ = Skill.prototype.equipKiller_yukhz7$;
  Skill$None.prototype.equipSpd_yukhz7$ = Skill.prototype.equipSpd_yukhz7$;
  Skill$None.prototype.equipDef_yukhz7$ = Skill.prototype.equipDef_yukhz7$;
  Skill$None.prototype.equipRes_yukhz7$ = Skill.prototype.equipRes_yukhz7$;
  Skill$None.prototype.effectiveAgainst_d5yp1f$ = Skill.prototype.effectiveAgainst_d5yp1f$;
  Skill$None.prototype.effectiveAgainst_58hff6$ = Skill.prototype.effectiveAgainst_58hff6$;
  Skill$None.prototype.effectiveAgainstMagic_trfvk0$ = Skill.prototype.effectiveAgainstMagic_trfvk0$;
  Skill$None.prototype.doubleAttack_trfvk0$ = Skill.prototype.doubleAttack_trfvk0$;
  Skill$None.prototype.colorAdvantage_sv9jhu$ = Skill.prototype.colorAdvantage_sv9jhu$;
  Skill$None.prototype.vantage_p6uegp$ = Skill.prototype.vantage_p6uegp$;
  Skill$None.prototype.noFollowupAttack_9jfrn9$ = Skill.prototype.noFollowupAttack_9jfrn9$;
  Skill$None.prototype.followupable_sv9jhu$ = Skill.prototype.followupable_sv9jhu$;
  Skill$None.prototype.eachNofollowupable_sv9jhu$ = Skill.prototype.eachNofollowupable_sv9jhu$;
  Skill$None.prototype.desperation_p6uegp$ = Skill.prototype.desperation_p6uegp$;
  Skill$None.prototype.brashAssault_sv9jhu$ = Skill.prototype.brashAssault_sv9jhu$;
  Skill$None.prototype.windsweep_sv9jhu$ = Skill.prototype.windsweep_sv9jhu$;
  Skill$None.prototype.watersweep_sv9jhu$ = Skill.prototype.watersweep_sv9jhu$;
  Skill$None.prototype.dazzling_sv9jhu$ = Skill.prototype.dazzling_sv9jhu$;
  Skill$None.prototype.wrathfulStaff_sv9jhu$ = Skill.prototype.wrathfulStaff_sv9jhu$;
  Skill$None.prototype.counterAllRange_trfvk0$ = Skill.prototype.counterAllRange_trfvk0$;
  Skill$None.prototype.disableEachCounter_sv9jhu$ = Skill.prototype.disableEachCounter_sv9jhu$;
  Skill$None.prototype.sacasBlessing_sv9jhu$ = Skill.prototype.sacasBlessing_sv9jhu$;
  Skill$None.prototype.beorcsBlessing_sv9jhu$ = Skill.prototype.beorcsBlessing_sv9jhu$;
  Skill$None.prototype.fullHpBonus_sv9jhu$ = Skill.prototype.fullHpBonus_sv9jhu$;
  Skill$None.prototype.allBonus_sv9jhu$ = Skill.prototype.allBonus_sv9jhu$;
  Skill$None.prototype.enemyFullHpBonus_sv9jhu$ = Skill.prototype.enemyFullHpBonus_sv9jhu$;
  Skill$None.prototype.equipBrave_yukhz7$ = Skill.prototype.equipBrave_yukhz7$;
  Skill$None.prototype.equipBlade_yukhz7$ = Skill.prototype.equipBlade_yukhz7$;
  Skill$None.prototype.equipRaven_trfvk0$ = Skill.prototype.equipRaven_trfvk0$;
  Skill$None.prototype.bladeEffect_trfvk0$ = Skill.prototype.bladeEffect_trfvk0$;
  Skill$None.prototype.fullHpAtkSpdBonus_sv9jhu$ = Skill.prototype.fullHpAtkSpdBonus_sv9jhu$;
  Skill$None.prototype.antiBuffBonus_trfvk0$ = Skill.prototype.antiBuffBonus_trfvk0$;
  Skill$None.prototype.heavyBlade_sv9jhu$ = Skill.prototype.heavyBlade_sv9jhu$;
  Skill$None.prototype.flashingBlade_sv9jhu$ = Skill.prototype.flashingBlade_sv9jhu$;
  Skill$None.prototype.accelerateAttackCooldown_sv9jhu$ = Skill.prototype.accelerateAttackCooldown_sv9jhu$;
  Skill$None.prototype.antiEffectiveAgainst_ut57va$ = Skill.prototype.antiEffectiveAgainst_ut57va$;
  Skill$None.prototype.antiAccelerateCooldown_sv9jhu$ = Skill.prototype.antiAccelerateCooldown_sv9jhu$;
  Skill$None.prototype.attackPain_sv9jhu$ = Skill.prototype.attackPain_sv9jhu$;
  Skill$None.prototype.attackHpLoss_sv9jhu$ = Skill.prototype.attackHpLoss_sv9jhu$;
  Skill$None.prototype.attackHeal_sv9jhu$ = Skill.prototype.attackHeal_sv9jhu$;
  Skill$None.prototype.brazenAtk_sv9jhu$ = Skill.prototype.brazenAtk_sv9jhu$;
  Skill$None.prototype.brazenSpd_sv9jhu$ = Skill.prototype.brazenSpd_sv9jhu$;
  Skill$None.prototype.brazenDef_sv9jhu$ = Skill.prototype.brazenDef_sv9jhu$;
  Skill$None.prototype.brazenRes_sv9jhu$ = Skill.prototype.brazenRes_sv9jhu$;
  SkillA.prototype.bothEffect_sv9jhu$ = Skill.prototype.bothEffect_sv9jhu$;
  SkillA.prototype.bothEffect_sv9jhu$$default = Skill.prototype.bothEffect_sv9jhu$$default;
  SkillA.prototype.attackEffect_sv9jhu$ = Skill.prototype.attackEffect_sv9jhu$;
  SkillA.prototype.attackEffect_sv9jhu$$default = Skill.prototype.attackEffect_sv9jhu$$default;
  SkillA.prototype.counterEffect_sv9jhu$ = Skill.prototype.counterEffect_sv9jhu$;
  SkillA.prototype.counterEffect_sv9jhu$$default = Skill.prototype.counterEffect_sv9jhu$$default;
  SkillA.prototype.effectedAttackEffect_sv9jhu$ = Skill.prototype.effectedAttackEffect_sv9jhu$;
  SkillA.prototype.effectedAttackEffect_sv9jhu$$default = Skill.prototype.effectedAttackEffect_sv9jhu$$default;
  SkillA.prototype.effectedCounterEffect_sv9jhu$ = Skill.prototype.effectedCounterEffect_sv9jhu$;
  SkillA.prototype.effectedCounterEffect_sv9jhu$$default = Skill.prototype.effectedCounterEffect_sv9jhu$$default;
  SkillA.prototype.attackPlan_p6uegp$ = Skill.prototype.attackPlan_p6uegp$;
  SkillA.prototype.attackPlan_p6uegp$$default = Skill.prototype.attackPlan_p6uegp$$default;
  SkillA.prototype.counterPlan_p6uegp$ = Skill.prototype.counterPlan_p6uegp$;
  SkillA.prototype.counterPlan_p6uegp$$default = Skill.prototype.counterPlan_p6uegp$$default;
  SkillA.prototype.prevent_w6mj9q$ = Skill.prototype.prevent_w6mj9q$;
  SkillA.prototype.prevent_w6mj9q$$default = Skill.prototype.prevent_w6mj9q$$default;
  SkillA.prototype.specialPrevent_upjsjk$ = Skill.prototype.specialPrevent_upjsjk$;
  SkillA.prototype.specialPrevent_upjsjk$$default = Skill.prototype.specialPrevent_upjsjk$$default;
  SkillA.prototype.specialTriggered_upjsjk$ = Skill.prototype.specialTriggered_upjsjk$;
  SkillA.prototype.specialTriggered_upjsjk$$default = Skill.prototype.specialTriggered_upjsjk$$default;
  SkillA.prototype.damage_96237r$ = Skill.prototype.damage_96237r$;
  SkillA.prototype.damage_96237r$$default = Skill.prototype.damage_96237r$$default;
  SkillA.prototype.absorb_6zcyla$ = Skill.prototype.absorb_6zcyla$;
  SkillA.prototype.equip_yukhz7$ = Skill.prototype.equip_yukhz7$;
  SkillA.prototype.equip_yukhz7$$default = Skill.prototype.equip_yukhz7$$default;
  SkillA.prototype.equip_emsvym$ = Skill.prototype.equip_emsvym$;
  SkillA.prototype.turnStart_sv9jhu$ = Skill.prototype.turnStart_sv9jhu$;
  SkillA.prototype.turnStart_sv9jhu$$default = Skill.prototype.turnStart_sv9jhu$$default;
  SkillA.prototype.afterFightEffect_sv9jhu$ = Skill.prototype.afterFightEffect_sv9jhu$;
  SkillA.prototype.afterFightEffect_sv9jhu$$default = Skill.prototype.afterFightEffect_sv9jhu$$default;
  SkillA.prototype.reducedDamage_upjsjk$ = Skill.prototype.reducedDamage_upjsjk$;
  SkillA.prototype.reducedDamage_upjsjk$$default = Skill.prototype.reducedDamage_upjsjk$$default;
  SkillA.prototype.defiantAtk_sv9jhu$ = Skill.prototype.defiantAtk_sv9jhu$;
  SkillA.prototype.defiantSpd_sv9jhu$ = Skill.prototype.defiantSpd_sv9jhu$;
  SkillA.prototype.defiantDef_sv9jhu$ = Skill.prototype.defiantDef_sv9jhu$;
  SkillA.prototype.defiantRes_sv9jhu$ = Skill.prototype.defiantRes_sv9jhu$;
  SkillA.prototype.blowAtk_sv9jhu$ = Skill.prototype.blowAtk_sv9jhu$;
  SkillA.prototype.blowSpd_sv9jhu$ = Skill.prototype.blowSpd_sv9jhu$;
  SkillA.prototype.blowDef_sv9jhu$ = Skill.prototype.blowDef_sv9jhu$;
  SkillA.prototype.blowRes_sv9jhu$ = Skill.prototype.blowRes_sv9jhu$;
  SkillA.prototype.steadyDef_sv9jhu$ = Skill.prototype.steadyDef_sv9jhu$;
  SkillA.prototype.steadyRes_sv9jhu$ = Skill.prototype.steadyRes_sv9jhu$;
  SkillA.prototype.steadyAtk_sv9jhu$ = Skill.prototype.steadyAtk_sv9jhu$;
  SkillA.prototype.closeDef_sv9jhu$ = Skill.prototype.closeDef_sv9jhu$;
  SkillA.prototype.distantDef_sv9jhu$ = Skill.prototype.distantDef_sv9jhu$;
  SkillA.prototype.weaponBreaker_y53988$ = Skill.prototype.weaponBreaker_y53988$;
  SkillA.prototype.boostDef_sv9jhu$ = Skill.prototype.boostDef_sv9jhu$;
  SkillA.prototype.boostSpd_sv9jhu$ = Skill.prototype.boostSpd_sv9jhu$;
  SkillA.prototype.boostAtk_sv9jhu$ = Skill.prototype.boostAtk_sv9jhu$;
  SkillA.prototype.boostRes_sv9jhu$ = Skill.prototype.boostRes_sv9jhu$;
  SkillA.prototype.furry_yukhz7$ = Skill.prototype.furry_yukhz7$;
  SkillA.prototype.lifeAndDeath_yukhz7$ = Skill.prototype.lifeAndDeath_yukhz7$;
  SkillA.prototype.log_za3rmp$ = Skill.prototype.log_za3rmp$;
  SkillA.prototype.equipHp_yukhz7$ = Skill.prototype.equipHp_yukhz7$;
  SkillA.prototype.equipAtk_yukhz7$ = Skill.prototype.equipAtk_yukhz7$;
  SkillA.prototype.equipKiller_yukhz7$ = Skill.prototype.equipKiller_yukhz7$;
  SkillA.prototype.equipSpd_yukhz7$ = Skill.prototype.equipSpd_yukhz7$;
  SkillA.prototype.equipDef_yukhz7$ = Skill.prototype.equipDef_yukhz7$;
  SkillA.prototype.equipRes_yukhz7$ = Skill.prototype.equipRes_yukhz7$;
  SkillA.prototype.effectiveAgainst_d5yp1f$ = Skill.prototype.effectiveAgainst_d5yp1f$;
  SkillA.prototype.effectiveAgainst_58hff6$ = Skill.prototype.effectiveAgainst_58hff6$;
  SkillA.prototype.effectiveAgainstMagic_trfvk0$ = Skill.prototype.effectiveAgainstMagic_trfvk0$;
  SkillA.prototype.doubleAttack_trfvk0$ = Skill.prototype.doubleAttack_trfvk0$;
  SkillA.prototype.colorAdvantage_sv9jhu$ = Skill.prototype.colorAdvantage_sv9jhu$;
  SkillA.prototype.vantage_p6uegp$ = Skill.prototype.vantage_p6uegp$;
  SkillA.prototype.noFollowupAttack_9jfrn9$ = Skill.prototype.noFollowupAttack_9jfrn9$;
  SkillA.prototype.followupable_sv9jhu$ = Skill.prototype.followupable_sv9jhu$;
  SkillA.prototype.eachNofollowupable_sv9jhu$ = Skill.prototype.eachNofollowupable_sv9jhu$;
  SkillA.prototype.desperation_p6uegp$ = Skill.prototype.desperation_p6uegp$;
  SkillA.prototype.brashAssault_sv9jhu$ = Skill.prototype.brashAssault_sv9jhu$;
  SkillA.prototype.windsweep_sv9jhu$ = Skill.prototype.windsweep_sv9jhu$;
  SkillA.prototype.watersweep_sv9jhu$ = Skill.prototype.watersweep_sv9jhu$;
  SkillA.prototype.dazzling_sv9jhu$ = Skill.prototype.dazzling_sv9jhu$;
  SkillA.prototype.wrathfulStaff_sv9jhu$ = Skill.prototype.wrathfulStaff_sv9jhu$;
  SkillA.prototype.counterAllRange_trfvk0$ = Skill.prototype.counterAllRange_trfvk0$;
  SkillA.prototype.disableEachCounter_sv9jhu$ = Skill.prototype.disableEachCounter_sv9jhu$;
  SkillA.prototype.sacasBlessing_sv9jhu$ = Skill.prototype.sacasBlessing_sv9jhu$;
  SkillA.prototype.beorcsBlessing_sv9jhu$ = Skill.prototype.beorcsBlessing_sv9jhu$;
  SkillA.prototype.fullHpBonus_sv9jhu$ = Skill.prototype.fullHpBonus_sv9jhu$;
  SkillA.prototype.allBonus_sv9jhu$ = Skill.prototype.allBonus_sv9jhu$;
  SkillA.prototype.enemyFullHpBonus_sv9jhu$ = Skill.prototype.enemyFullHpBonus_sv9jhu$;
  SkillA.prototype.equipBrave_yukhz7$ = Skill.prototype.equipBrave_yukhz7$;
  SkillA.prototype.equipBlade_yukhz7$ = Skill.prototype.equipBlade_yukhz7$;
  SkillA.prototype.equipRaven_trfvk0$ = Skill.prototype.equipRaven_trfvk0$;
  SkillA.prototype.bladeEffect_trfvk0$ = Skill.prototype.bladeEffect_trfvk0$;
  SkillA.prototype.fullHpAtkSpdBonus_sv9jhu$ = Skill.prototype.fullHpAtkSpdBonus_sv9jhu$;
  SkillA.prototype.antiBuffBonus_trfvk0$ = Skill.prototype.antiBuffBonus_trfvk0$;
  SkillA.prototype.heavyBlade_sv9jhu$ = Skill.prototype.heavyBlade_sv9jhu$;
  SkillA.prototype.flashingBlade_sv9jhu$ = Skill.prototype.flashingBlade_sv9jhu$;
  SkillA.prototype.accelerateAttackCooldown_sv9jhu$ = Skill.prototype.accelerateAttackCooldown_sv9jhu$;
  SkillA.prototype.antiEffectiveAgainst_ut57va$ = Skill.prototype.antiEffectiveAgainst_ut57va$;
  SkillA.prototype.antiAccelerateCooldown_sv9jhu$ = Skill.prototype.antiAccelerateCooldown_sv9jhu$;
  SkillA.prototype.attackPain_sv9jhu$ = Skill.prototype.attackPain_sv9jhu$;
  SkillA.prototype.attackHpLoss_sv9jhu$ = Skill.prototype.attackHpLoss_sv9jhu$;
  SkillA.prototype.attackHeal_sv9jhu$ = Skill.prototype.attackHeal_sv9jhu$;
  SkillA.prototype.brazenAtk_sv9jhu$ = Skill.prototype.brazenAtk_sv9jhu$;
  SkillA.prototype.brazenSpd_sv9jhu$ = Skill.prototype.brazenSpd_sv9jhu$;
  SkillA.prototype.brazenDef_sv9jhu$ = Skill.prototype.brazenDef_sv9jhu$;
  SkillA.prototype.brazenRes_sv9jhu$ = Skill.prototype.brazenRes_sv9jhu$;
  SkillB.prototype.bothEffect_sv9jhu$ = Skill.prototype.bothEffect_sv9jhu$;
  SkillB.prototype.bothEffect_sv9jhu$$default = Skill.prototype.bothEffect_sv9jhu$$default;
  SkillB.prototype.attackEffect_sv9jhu$ = Skill.prototype.attackEffect_sv9jhu$;
  SkillB.prototype.attackEffect_sv9jhu$$default = Skill.prototype.attackEffect_sv9jhu$$default;
  SkillB.prototype.counterEffect_sv9jhu$ = Skill.prototype.counterEffect_sv9jhu$;
  SkillB.prototype.counterEffect_sv9jhu$$default = Skill.prototype.counterEffect_sv9jhu$$default;
  SkillB.prototype.effectedAttackEffect_sv9jhu$ = Skill.prototype.effectedAttackEffect_sv9jhu$;
  SkillB.prototype.effectedAttackEffect_sv9jhu$$default = Skill.prototype.effectedAttackEffect_sv9jhu$$default;
  SkillB.prototype.effectedCounterEffect_sv9jhu$ = Skill.prototype.effectedCounterEffect_sv9jhu$;
  SkillB.prototype.effectedCounterEffect_sv9jhu$$default = Skill.prototype.effectedCounterEffect_sv9jhu$$default;
  SkillB.prototype.attackPlan_p6uegp$ = Skill.prototype.attackPlan_p6uegp$;
  SkillB.prototype.attackPlan_p6uegp$$default = Skill.prototype.attackPlan_p6uegp$$default;
  SkillB.prototype.counterPlan_p6uegp$ = Skill.prototype.counterPlan_p6uegp$;
  SkillB.prototype.counterPlan_p6uegp$$default = Skill.prototype.counterPlan_p6uegp$$default;
  SkillB.prototype.prevent_w6mj9q$ = Skill.prototype.prevent_w6mj9q$;
  SkillB.prototype.prevent_w6mj9q$$default = Skill.prototype.prevent_w6mj9q$$default;
  SkillB.prototype.specialPrevent_upjsjk$ = Skill.prototype.specialPrevent_upjsjk$;
  SkillB.prototype.specialPrevent_upjsjk$$default = Skill.prototype.specialPrevent_upjsjk$$default;
  SkillB.prototype.specialTriggered_upjsjk$ = Skill.prototype.specialTriggered_upjsjk$;
  SkillB.prototype.specialTriggered_upjsjk$$default = Skill.prototype.specialTriggered_upjsjk$$default;
  SkillB.prototype.damage_96237r$ = Skill.prototype.damage_96237r$;
  SkillB.prototype.damage_96237r$$default = Skill.prototype.damage_96237r$$default;
  SkillB.prototype.absorb_6zcyla$ = Skill.prototype.absorb_6zcyla$;
  SkillB.prototype.equip_yukhz7$ = Skill.prototype.equip_yukhz7$;
  SkillB.prototype.equip_yukhz7$$default = Skill.prototype.equip_yukhz7$$default;
  SkillB.prototype.equip_emsvym$ = Skill.prototype.equip_emsvym$;
  SkillB.prototype.turnStart_sv9jhu$ = Skill.prototype.turnStart_sv9jhu$;
  SkillB.prototype.turnStart_sv9jhu$$default = Skill.prototype.turnStart_sv9jhu$$default;
  SkillB.prototype.afterFightEffect_sv9jhu$ = Skill.prototype.afterFightEffect_sv9jhu$;
  SkillB.prototype.afterFightEffect_sv9jhu$$default = Skill.prototype.afterFightEffect_sv9jhu$$default;
  SkillB.prototype.reducedDamage_upjsjk$ = Skill.prototype.reducedDamage_upjsjk$;
  SkillB.prototype.reducedDamage_upjsjk$$default = Skill.prototype.reducedDamage_upjsjk$$default;
  SkillB.prototype.defiantAtk_sv9jhu$ = Skill.prototype.defiantAtk_sv9jhu$;
  SkillB.prototype.defiantSpd_sv9jhu$ = Skill.prototype.defiantSpd_sv9jhu$;
  SkillB.prototype.defiantDef_sv9jhu$ = Skill.prototype.defiantDef_sv9jhu$;
  SkillB.prototype.defiantRes_sv9jhu$ = Skill.prototype.defiantRes_sv9jhu$;
  SkillB.prototype.blowAtk_sv9jhu$ = Skill.prototype.blowAtk_sv9jhu$;
  SkillB.prototype.blowSpd_sv9jhu$ = Skill.prototype.blowSpd_sv9jhu$;
  SkillB.prototype.blowDef_sv9jhu$ = Skill.prototype.blowDef_sv9jhu$;
  SkillB.prototype.blowRes_sv9jhu$ = Skill.prototype.blowRes_sv9jhu$;
  SkillB.prototype.steadyDef_sv9jhu$ = Skill.prototype.steadyDef_sv9jhu$;
  SkillB.prototype.steadyRes_sv9jhu$ = Skill.prototype.steadyRes_sv9jhu$;
  SkillB.prototype.steadyAtk_sv9jhu$ = Skill.prototype.steadyAtk_sv9jhu$;
  SkillB.prototype.closeDef_sv9jhu$ = Skill.prototype.closeDef_sv9jhu$;
  SkillB.prototype.distantDef_sv9jhu$ = Skill.prototype.distantDef_sv9jhu$;
  SkillB.prototype.weaponBreaker_y53988$ = Skill.prototype.weaponBreaker_y53988$;
  SkillB.prototype.boostDef_sv9jhu$ = Skill.prototype.boostDef_sv9jhu$;
  SkillB.prototype.boostSpd_sv9jhu$ = Skill.prototype.boostSpd_sv9jhu$;
  SkillB.prototype.boostAtk_sv9jhu$ = Skill.prototype.boostAtk_sv9jhu$;
  SkillB.prototype.boostRes_sv9jhu$ = Skill.prototype.boostRes_sv9jhu$;
  SkillB.prototype.furry_yukhz7$ = Skill.prototype.furry_yukhz7$;
  SkillB.prototype.lifeAndDeath_yukhz7$ = Skill.prototype.lifeAndDeath_yukhz7$;
  SkillB.prototype.log_za3rmp$ = Skill.prototype.log_za3rmp$;
  SkillB.prototype.equipHp_yukhz7$ = Skill.prototype.equipHp_yukhz7$;
  SkillB.prototype.equipAtk_yukhz7$ = Skill.prototype.equipAtk_yukhz7$;
  SkillB.prototype.equipKiller_yukhz7$ = Skill.prototype.equipKiller_yukhz7$;
  SkillB.prototype.equipSpd_yukhz7$ = Skill.prototype.equipSpd_yukhz7$;
  SkillB.prototype.equipDef_yukhz7$ = Skill.prototype.equipDef_yukhz7$;
  SkillB.prototype.equipRes_yukhz7$ = Skill.prototype.equipRes_yukhz7$;
  SkillB.prototype.effectiveAgainst_d5yp1f$ = Skill.prototype.effectiveAgainst_d5yp1f$;
  SkillB.prototype.effectiveAgainst_58hff6$ = Skill.prototype.effectiveAgainst_58hff6$;
  SkillB.prototype.effectiveAgainstMagic_trfvk0$ = Skill.prototype.effectiveAgainstMagic_trfvk0$;
  SkillB.prototype.doubleAttack_trfvk0$ = Skill.prototype.doubleAttack_trfvk0$;
  SkillB.prototype.colorAdvantage_sv9jhu$ = Skill.prototype.colorAdvantage_sv9jhu$;
  SkillB.prototype.vantage_p6uegp$ = Skill.prototype.vantage_p6uegp$;
  SkillB.prototype.noFollowupAttack_9jfrn9$ = Skill.prototype.noFollowupAttack_9jfrn9$;
  SkillB.prototype.followupable_sv9jhu$ = Skill.prototype.followupable_sv9jhu$;
  SkillB.prototype.eachNofollowupable_sv9jhu$ = Skill.prototype.eachNofollowupable_sv9jhu$;
  SkillB.prototype.desperation_p6uegp$ = Skill.prototype.desperation_p6uegp$;
  SkillB.prototype.brashAssault_sv9jhu$ = Skill.prototype.brashAssault_sv9jhu$;
  SkillB.prototype.windsweep_sv9jhu$ = Skill.prototype.windsweep_sv9jhu$;
  SkillB.prototype.watersweep_sv9jhu$ = Skill.prototype.watersweep_sv9jhu$;
  SkillB.prototype.dazzling_sv9jhu$ = Skill.prototype.dazzling_sv9jhu$;
  SkillB.prototype.wrathfulStaff_sv9jhu$ = Skill.prototype.wrathfulStaff_sv9jhu$;
  SkillB.prototype.counterAllRange_trfvk0$ = Skill.prototype.counterAllRange_trfvk0$;
  SkillB.prototype.disableEachCounter_sv9jhu$ = Skill.prototype.disableEachCounter_sv9jhu$;
  SkillB.prototype.sacasBlessing_sv9jhu$ = Skill.prototype.sacasBlessing_sv9jhu$;
  SkillB.prototype.beorcsBlessing_sv9jhu$ = Skill.prototype.beorcsBlessing_sv9jhu$;
  SkillB.prototype.fullHpBonus_sv9jhu$ = Skill.prototype.fullHpBonus_sv9jhu$;
  SkillB.prototype.allBonus_sv9jhu$ = Skill.prototype.allBonus_sv9jhu$;
  SkillB.prototype.enemyFullHpBonus_sv9jhu$ = Skill.prototype.enemyFullHpBonus_sv9jhu$;
  SkillB.prototype.equipBrave_yukhz7$ = Skill.prototype.equipBrave_yukhz7$;
  SkillB.prototype.equipBlade_yukhz7$ = Skill.prototype.equipBlade_yukhz7$;
  SkillB.prototype.equipRaven_trfvk0$ = Skill.prototype.equipRaven_trfvk0$;
  SkillB.prototype.bladeEffect_trfvk0$ = Skill.prototype.bladeEffect_trfvk0$;
  SkillB.prototype.fullHpAtkSpdBonus_sv9jhu$ = Skill.prototype.fullHpAtkSpdBonus_sv9jhu$;
  SkillB.prototype.antiBuffBonus_trfvk0$ = Skill.prototype.antiBuffBonus_trfvk0$;
  SkillB.prototype.heavyBlade_sv9jhu$ = Skill.prototype.heavyBlade_sv9jhu$;
  SkillB.prototype.flashingBlade_sv9jhu$ = Skill.prototype.flashingBlade_sv9jhu$;
  SkillB.prototype.accelerateAttackCooldown_sv9jhu$ = Skill.prototype.accelerateAttackCooldown_sv9jhu$;
  SkillB.prototype.antiEffectiveAgainst_ut57va$ = Skill.prototype.antiEffectiveAgainst_ut57va$;
  SkillB.prototype.antiAccelerateCooldown_sv9jhu$ = Skill.prototype.antiAccelerateCooldown_sv9jhu$;
  SkillB.prototype.attackPain_sv9jhu$ = Skill.prototype.attackPain_sv9jhu$;
  SkillB.prototype.attackHpLoss_sv9jhu$ = Skill.prototype.attackHpLoss_sv9jhu$;
  SkillB.prototype.attackHeal_sv9jhu$ = Skill.prototype.attackHeal_sv9jhu$;
  SkillB.prototype.brazenAtk_sv9jhu$ = Skill.prototype.brazenAtk_sv9jhu$;
  SkillB.prototype.brazenSpd_sv9jhu$ = Skill.prototype.brazenSpd_sv9jhu$;
  SkillB.prototype.brazenDef_sv9jhu$ = Skill.prototype.brazenDef_sv9jhu$;
  SkillB.prototype.brazenRes_sv9jhu$ = Skill.prototype.brazenRes_sv9jhu$;
  SkillC.prototype.bothEffect_sv9jhu$ = Skill.prototype.bothEffect_sv9jhu$;
  SkillC.prototype.bothEffect_sv9jhu$$default = Skill.prototype.bothEffect_sv9jhu$$default;
  SkillC.prototype.attackEffect_sv9jhu$ = Skill.prototype.attackEffect_sv9jhu$;
  SkillC.prototype.attackEffect_sv9jhu$$default = Skill.prototype.attackEffect_sv9jhu$$default;
  SkillC.prototype.counterEffect_sv9jhu$ = Skill.prototype.counterEffect_sv9jhu$;
  SkillC.prototype.counterEffect_sv9jhu$$default = Skill.prototype.counterEffect_sv9jhu$$default;
  SkillC.prototype.effectedAttackEffect_sv9jhu$ = Skill.prototype.effectedAttackEffect_sv9jhu$;
  SkillC.prototype.effectedAttackEffect_sv9jhu$$default = Skill.prototype.effectedAttackEffect_sv9jhu$$default;
  SkillC.prototype.effectedCounterEffect_sv9jhu$ = Skill.prototype.effectedCounterEffect_sv9jhu$;
  SkillC.prototype.effectedCounterEffect_sv9jhu$$default = Skill.prototype.effectedCounterEffect_sv9jhu$$default;
  SkillC.prototype.attackPlan_p6uegp$ = Skill.prototype.attackPlan_p6uegp$;
  SkillC.prototype.attackPlan_p6uegp$$default = Skill.prototype.attackPlan_p6uegp$$default;
  SkillC.prototype.counterPlan_p6uegp$ = Skill.prototype.counterPlan_p6uegp$;
  SkillC.prototype.counterPlan_p6uegp$$default = Skill.prototype.counterPlan_p6uegp$$default;
  SkillC.prototype.prevent_w6mj9q$ = Skill.prototype.prevent_w6mj9q$;
  SkillC.prototype.prevent_w6mj9q$$default = Skill.prototype.prevent_w6mj9q$$default;
  SkillC.prototype.specialPrevent_upjsjk$ = Skill.prototype.specialPrevent_upjsjk$;
  SkillC.prototype.specialPrevent_upjsjk$$default = Skill.prototype.specialPrevent_upjsjk$$default;
  SkillC.prototype.specialTriggered_upjsjk$ = Skill.prototype.specialTriggered_upjsjk$;
  SkillC.prototype.specialTriggered_upjsjk$$default = Skill.prototype.specialTriggered_upjsjk$$default;
  SkillC.prototype.damage_96237r$ = Skill.prototype.damage_96237r$;
  SkillC.prototype.damage_96237r$$default = Skill.prototype.damage_96237r$$default;
  SkillC.prototype.absorb_6zcyla$ = Skill.prototype.absorb_6zcyla$;
  SkillC.prototype.equip_yukhz7$ = Skill.prototype.equip_yukhz7$;
  SkillC.prototype.equip_yukhz7$$default = Skill.prototype.equip_yukhz7$$default;
  SkillC.prototype.equip_emsvym$ = Skill.prototype.equip_emsvym$;
  SkillC.prototype.turnStart_sv9jhu$ = Skill.prototype.turnStart_sv9jhu$;
  SkillC.prototype.turnStart_sv9jhu$$default = Skill.prototype.turnStart_sv9jhu$$default;
  SkillC.prototype.afterFightEffect_sv9jhu$ = Skill.prototype.afterFightEffect_sv9jhu$;
  SkillC.prototype.afterFightEffect_sv9jhu$$default = Skill.prototype.afterFightEffect_sv9jhu$$default;
  SkillC.prototype.reducedDamage_upjsjk$ = Skill.prototype.reducedDamage_upjsjk$;
  SkillC.prototype.reducedDamage_upjsjk$$default = Skill.prototype.reducedDamage_upjsjk$$default;
  SkillC.prototype.defiantAtk_sv9jhu$ = Skill.prototype.defiantAtk_sv9jhu$;
  SkillC.prototype.defiantSpd_sv9jhu$ = Skill.prototype.defiantSpd_sv9jhu$;
  SkillC.prototype.defiantDef_sv9jhu$ = Skill.prototype.defiantDef_sv9jhu$;
  SkillC.prototype.defiantRes_sv9jhu$ = Skill.prototype.defiantRes_sv9jhu$;
  SkillC.prototype.blowAtk_sv9jhu$ = Skill.prototype.blowAtk_sv9jhu$;
  SkillC.prototype.blowSpd_sv9jhu$ = Skill.prototype.blowSpd_sv9jhu$;
  SkillC.prototype.blowDef_sv9jhu$ = Skill.prototype.blowDef_sv9jhu$;
  SkillC.prototype.blowRes_sv9jhu$ = Skill.prototype.blowRes_sv9jhu$;
  SkillC.prototype.steadyDef_sv9jhu$ = Skill.prototype.steadyDef_sv9jhu$;
  SkillC.prototype.steadyRes_sv9jhu$ = Skill.prototype.steadyRes_sv9jhu$;
  SkillC.prototype.steadyAtk_sv9jhu$ = Skill.prototype.steadyAtk_sv9jhu$;
  SkillC.prototype.closeDef_sv9jhu$ = Skill.prototype.closeDef_sv9jhu$;
  SkillC.prototype.distantDef_sv9jhu$ = Skill.prototype.distantDef_sv9jhu$;
  SkillC.prototype.weaponBreaker_y53988$ = Skill.prototype.weaponBreaker_y53988$;
  SkillC.prototype.boostDef_sv9jhu$ = Skill.prototype.boostDef_sv9jhu$;
  SkillC.prototype.boostSpd_sv9jhu$ = Skill.prototype.boostSpd_sv9jhu$;
  SkillC.prototype.boostAtk_sv9jhu$ = Skill.prototype.boostAtk_sv9jhu$;
  SkillC.prototype.boostRes_sv9jhu$ = Skill.prototype.boostRes_sv9jhu$;
  SkillC.prototype.furry_yukhz7$ = Skill.prototype.furry_yukhz7$;
  SkillC.prototype.lifeAndDeath_yukhz7$ = Skill.prototype.lifeAndDeath_yukhz7$;
  SkillC.prototype.log_za3rmp$ = Skill.prototype.log_za3rmp$;
  SkillC.prototype.equipHp_yukhz7$ = Skill.prototype.equipHp_yukhz7$;
  SkillC.prototype.equipAtk_yukhz7$ = Skill.prototype.equipAtk_yukhz7$;
  SkillC.prototype.equipKiller_yukhz7$ = Skill.prototype.equipKiller_yukhz7$;
  SkillC.prototype.equipSpd_yukhz7$ = Skill.prototype.equipSpd_yukhz7$;
  SkillC.prototype.equipDef_yukhz7$ = Skill.prototype.equipDef_yukhz7$;
  SkillC.prototype.equipRes_yukhz7$ = Skill.prototype.equipRes_yukhz7$;
  SkillC.prototype.effectiveAgainst_d5yp1f$ = Skill.prototype.effectiveAgainst_d5yp1f$;
  SkillC.prototype.effectiveAgainst_58hff6$ = Skill.prototype.effectiveAgainst_58hff6$;
  SkillC.prototype.effectiveAgainstMagic_trfvk0$ = Skill.prototype.effectiveAgainstMagic_trfvk0$;
  SkillC.prototype.doubleAttack_trfvk0$ = Skill.prototype.doubleAttack_trfvk0$;
  SkillC.prototype.colorAdvantage_sv9jhu$ = Skill.prototype.colorAdvantage_sv9jhu$;
  SkillC.prototype.vantage_p6uegp$ = Skill.prototype.vantage_p6uegp$;
  SkillC.prototype.noFollowupAttack_9jfrn9$ = Skill.prototype.noFollowupAttack_9jfrn9$;
  SkillC.prototype.followupable_sv9jhu$ = Skill.prototype.followupable_sv9jhu$;
  SkillC.prototype.eachNofollowupable_sv9jhu$ = Skill.prototype.eachNofollowupable_sv9jhu$;
  SkillC.prototype.desperation_p6uegp$ = Skill.prototype.desperation_p6uegp$;
  SkillC.prototype.brashAssault_sv9jhu$ = Skill.prototype.brashAssault_sv9jhu$;
  SkillC.prototype.windsweep_sv9jhu$ = Skill.prototype.windsweep_sv9jhu$;
  SkillC.prototype.watersweep_sv9jhu$ = Skill.prototype.watersweep_sv9jhu$;
  SkillC.prototype.dazzling_sv9jhu$ = Skill.prototype.dazzling_sv9jhu$;
  SkillC.prototype.wrathfulStaff_sv9jhu$ = Skill.prototype.wrathfulStaff_sv9jhu$;
  SkillC.prototype.counterAllRange_trfvk0$ = Skill.prototype.counterAllRange_trfvk0$;
  SkillC.prototype.disableEachCounter_sv9jhu$ = Skill.prototype.disableEachCounter_sv9jhu$;
  SkillC.prototype.sacasBlessing_sv9jhu$ = Skill.prototype.sacasBlessing_sv9jhu$;
  SkillC.prototype.beorcsBlessing_sv9jhu$ = Skill.prototype.beorcsBlessing_sv9jhu$;
  SkillC.prototype.fullHpBonus_sv9jhu$ = Skill.prototype.fullHpBonus_sv9jhu$;
  SkillC.prototype.allBonus_sv9jhu$ = Skill.prototype.allBonus_sv9jhu$;
  SkillC.prototype.enemyFullHpBonus_sv9jhu$ = Skill.prototype.enemyFullHpBonus_sv9jhu$;
  SkillC.prototype.equipBrave_yukhz7$ = Skill.prototype.equipBrave_yukhz7$;
  SkillC.prototype.equipBlade_yukhz7$ = Skill.prototype.equipBlade_yukhz7$;
  SkillC.prototype.equipRaven_trfvk0$ = Skill.prototype.equipRaven_trfvk0$;
  SkillC.prototype.bladeEffect_trfvk0$ = Skill.prototype.bladeEffect_trfvk0$;
  SkillC.prototype.fullHpAtkSpdBonus_sv9jhu$ = Skill.prototype.fullHpAtkSpdBonus_sv9jhu$;
  SkillC.prototype.antiBuffBonus_trfvk0$ = Skill.prototype.antiBuffBonus_trfvk0$;
  SkillC.prototype.heavyBlade_sv9jhu$ = Skill.prototype.heavyBlade_sv9jhu$;
  SkillC.prototype.flashingBlade_sv9jhu$ = Skill.prototype.flashingBlade_sv9jhu$;
  SkillC.prototype.accelerateAttackCooldown_sv9jhu$ = Skill.prototype.accelerateAttackCooldown_sv9jhu$;
  SkillC.prototype.antiEffectiveAgainst_ut57va$ = Skill.prototype.antiEffectiveAgainst_ut57va$;
  SkillC.prototype.antiAccelerateCooldown_sv9jhu$ = Skill.prototype.antiAccelerateCooldown_sv9jhu$;
  SkillC.prototype.attackPain_sv9jhu$ = Skill.prototype.attackPain_sv9jhu$;
  SkillC.prototype.attackHpLoss_sv9jhu$ = Skill.prototype.attackHpLoss_sv9jhu$;
  SkillC.prototype.attackHeal_sv9jhu$ = Skill.prototype.attackHeal_sv9jhu$;
  SkillC.prototype.brazenAtk_sv9jhu$ = Skill.prototype.brazenAtk_sv9jhu$;
  SkillC.prototype.brazenSpd_sv9jhu$ = Skill.prototype.brazenSpd_sv9jhu$;
  SkillC.prototype.brazenDef_sv9jhu$ = Skill.prototype.brazenDef_sv9jhu$;
  SkillC.prototype.brazenRes_sv9jhu$ = Skill.prototype.brazenRes_sv9jhu$;
  Object.defineProperty(Special.prototype, 'maxLevel', Object.getOwnPropertyDescriptor(Skill.prototype, 'maxLevel'));
  Special.prototype.bothEffect_sv9jhu$ = Skill.prototype.bothEffect_sv9jhu$;
  Special.prototype.bothEffect_sv9jhu$$default = Skill.prototype.bothEffect_sv9jhu$$default;
  Special.prototype.attackEffect_sv9jhu$ = Skill.prototype.attackEffect_sv9jhu$;
  Special.prototype.attackEffect_sv9jhu$$default = Skill.prototype.attackEffect_sv9jhu$$default;
  Special.prototype.counterEffect_sv9jhu$ = Skill.prototype.counterEffect_sv9jhu$;
  Special.prototype.counterEffect_sv9jhu$$default = Skill.prototype.counterEffect_sv9jhu$$default;
  Special.prototype.effectedAttackEffect_sv9jhu$ = Skill.prototype.effectedAttackEffect_sv9jhu$;
  Special.prototype.effectedAttackEffect_sv9jhu$$default = Skill.prototype.effectedAttackEffect_sv9jhu$$default;
  Special.prototype.effectedCounterEffect_sv9jhu$ = Skill.prototype.effectedCounterEffect_sv9jhu$;
  Special.prototype.effectedCounterEffect_sv9jhu$$default = Skill.prototype.effectedCounterEffect_sv9jhu$$default;
  Special.prototype.attackPlan_p6uegp$ = Skill.prototype.attackPlan_p6uegp$;
  Special.prototype.attackPlan_p6uegp$$default = Skill.prototype.attackPlan_p6uegp$$default;
  Special.prototype.counterPlan_p6uegp$ = Skill.prototype.counterPlan_p6uegp$;
  Special.prototype.counterPlan_p6uegp$$default = Skill.prototype.counterPlan_p6uegp$$default;
  Special.prototype.prevent_w6mj9q$ = Skill.prototype.prevent_w6mj9q$;
  Special.prototype.prevent_w6mj9q$$default = Skill.prototype.prevent_w6mj9q$$default;
  Special.prototype.specialPrevent_upjsjk$ = Skill.prototype.specialPrevent_upjsjk$;
  Special.prototype.specialPrevent_upjsjk$$default = Skill.prototype.specialPrevent_upjsjk$$default;
  Special.prototype.specialTriggered_upjsjk$ = Skill.prototype.specialTriggered_upjsjk$;
  Special.prototype.specialTriggered_upjsjk$$default = Skill.prototype.specialTriggered_upjsjk$$default;
  Special.prototype.damage_96237r$ = Skill.prototype.damage_96237r$;
  Special.prototype.damage_96237r$$default = Skill.prototype.damage_96237r$$default;
  Special.prototype.absorb_6zcyla$ = Skill.prototype.absorb_6zcyla$;
  Special.prototype.equip_yukhz7$ = Skill.prototype.equip_yukhz7$;
  Special.prototype.equip_yukhz7$$default = Skill.prototype.equip_yukhz7$$default;
  Special.prototype.equip_emsvym$ = Skill.prototype.equip_emsvym$;
  Special.prototype.turnStart_sv9jhu$ = Skill.prototype.turnStart_sv9jhu$;
  Special.prototype.turnStart_sv9jhu$$default = Skill.prototype.turnStart_sv9jhu$$default;
  Special.prototype.afterFightEffect_sv9jhu$ = Skill.prototype.afterFightEffect_sv9jhu$;
  Special.prototype.afterFightEffect_sv9jhu$$default = Skill.prototype.afterFightEffect_sv9jhu$$default;
  Special.prototype.reducedDamage_upjsjk$ = Skill.prototype.reducedDamage_upjsjk$;
  Special.prototype.reducedDamage_upjsjk$$default = Skill.prototype.reducedDamage_upjsjk$$default;
  Special.prototype.defiantAtk_sv9jhu$ = Skill.prototype.defiantAtk_sv9jhu$;
  Special.prototype.defiantSpd_sv9jhu$ = Skill.prototype.defiantSpd_sv9jhu$;
  Special.prototype.defiantDef_sv9jhu$ = Skill.prototype.defiantDef_sv9jhu$;
  Special.prototype.defiantRes_sv9jhu$ = Skill.prototype.defiantRes_sv9jhu$;
  Special.prototype.blowAtk_sv9jhu$ = Skill.prototype.blowAtk_sv9jhu$;
  Special.prototype.blowSpd_sv9jhu$ = Skill.prototype.blowSpd_sv9jhu$;
  Special.prototype.blowDef_sv9jhu$ = Skill.prototype.blowDef_sv9jhu$;
  Special.prototype.blowRes_sv9jhu$ = Skill.prototype.blowRes_sv9jhu$;
  Special.prototype.steadyDef_sv9jhu$ = Skill.prototype.steadyDef_sv9jhu$;
  Special.prototype.steadyRes_sv9jhu$ = Skill.prototype.steadyRes_sv9jhu$;
  Special.prototype.steadyAtk_sv9jhu$ = Skill.prototype.steadyAtk_sv9jhu$;
  Special.prototype.closeDef_sv9jhu$ = Skill.prototype.closeDef_sv9jhu$;
  Special.prototype.distantDef_sv9jhu$ = Skill.prototype.distantDef_sv9jhu$;
  Special.prototype.weaponBreaker_y53988$ = Skill.prototype.weaponBreaker_y53988$;
  Special.prototype.boostDef_sv9jhu$ = Skill.prototype.boostDef_sv9jhu$;
  Special.prototype.boostSpd_sv9jhu$ = Skill.prototype.boostSpd_sv9jhu$;
  Special.prototype.boostAtk_sv9jhu$ = Skill.prototype.boostAtk_sv9jhu$;
  Special.prototype.boostRes_sv9jhu$ = Skill.prototype.boostRes_sv9jhu$;
  Special.prototype.furry_yukhz7$ = Skill.prototype.furry_yukhz7$;
  Special.prototype.lifeAndDeath_yukhz7$ = Skill.prototype.lifeAndDeath_yukhz7$;
  Special.prototype.log_za3rmp$ = Skill.prototype.log_za3rmp$;
  Special.prototype.equipHp_yukhz7$ = Skill.prototype.equipHp_yukhz7$;
  Special.prototype.equipAtk_yukhz7$ = Skill.prototype.equipAtk_yukhz7$;
  Special.prototype.equipKiller_yukhz7$ = Skill.prototype.equipKiller_yukhz7$;
  Special.prototype.equipSpd_yukhz7$ = Skill.prototype.equipSpd_yukhz7$;
  Special.prototype.equipDef_yukhz7$ = Skill.prototype.equipDef_yukhz7$;
  Special.prototype.equipRes_yukhz7$ = Skill.prototype.equipRes_yukhz7$;
  Special.prototype.effectiveAgainst_d5yp1f$ = Skill.prototype.effectiveAgainst_d5yp1f$;
  Special.prototype.effectiveAgainst_58hff6$ = Skill.prototype.effectiveAgainst_58hff6$;
  Special.prototype.effectiveAgainstMagic_trfvk0$ = Skill.prototype.effectiveAgainstMagic_trfvk0$;
  Special.prototype.doubleAttack_trfvk0$ = Skill.prototype.doubleAttack_trfvk0$;
  Special.prototype.colorAdvantage_sv9jhu$ = Skill.prototype.colorAdvantage_sv9jhu$;
  Special.prototype.vantage_p6uegp$ = Skill.prototype.vantage_p6uegp$;
  Special.prototype.noFollowupAttack_9jfrn9$ = Skill.prototype.noFollowupAttack_9jfrn9$;
  Special.prototype.followupable_sv9jhu$ = Skill.prototype.followupable_sv9jhu$;
  Special.prototype.eachNofollowupable_sv9jhu$ = Skill.prototype.eachNofollowupable_sv9jhu$;
  Special.prototype.desperation_p6uegp$ = Skill.prototype.desperation_p6uegp$;
  Special.prototype.brashAssault_sv9jhu$ = Skill.prototype.brashAssault_sv9jhu$;
  Special.prototype.windsweep_sv9jhu$ = Skill.prototype.windsweep_sv9jhu$;
  Special.prototype.watersweep_sv9jhu$ = Skill.prototype.watersweep_sv9jhu$;
  Special.prototype.dazzling_sv9jhu$ = Skill.prototype.dazzling_sv9jhu$;
  Special.prototype.wrathfulStaff_sv9jhu$ = Skill.prototype.wrathfulStaff_sv9jhu$;
  Special.prototype.counterAllRange_trfvk0$ = Skill.prototype.counterAllRange_trfvk0$;
  Special.prototype.disableEachCounter_sv9jhu$ = Skill.prototype.disableEachCounter_sv9jhu$;
  Special.prototype.sacasBlessing_sv9jhu$ = Skill.prototype.sacasBlessing_sv9jhu$;
  Special.prototype.beorcsBlessing_sv9jhu$ = Skill.prototype.beorcsBlessing_sv9jhu$;
  Special.prototype.fullHpBonus_sv9jhu$ = Skill.prototype.fullHpBonus_sv9jhu$;
  Special.prototype.allBonus_sv9jhu$ = Skill.prototype.allBonus_sv9jhu$;
  Special.prototype.enemyFullHpBonus_sv9jhu$ = Skill.prototype.enemyFullHpBonus_sv9jhu$;
  Special.prototype.equipBrave_yukhz7$ = Skill.prototype.equipBrave_yukhz7$;
  Special.prototype.equipBlade_yukhz7$ = Skill.prototype.equipBlade_yukhz7$;
  Special.prototype.equipRaven_trfvk0$ = Skill.prototype.equipRaven_trfvk0$;
  Special.prototype.bladeEffect_trfvk0$ = Skill.prototype.bladeEffect_trfvk0$;
  Special.prototype.fullHpAtkSpdBonus_sv9jhu$ = Skill.prototype.fullHpAtkSpdBonus_sv9jhu$;
  Special.prototype.antiBuffBonus_trfvk0$ = Skill.prototype.antiBuffBonus_trfvk0$;
  Special.prototype.heavyBlade_sv9jhu$ = Skill.prototype.heavyBlade_sv9jhu$;
  Special.prototype.flashingBlade_sv9jhu$ = Skill.prototype.flashingBlade_sv9jhu$;
  Special.prototype.accelerateAttackCooldown_sv9jhu$ = Skill.prototype.accelerateAttackCooldown_sv9jhu$;
  Special.prototype.antiEffectiveAgainst_ut57va$ = Skill.prototype.antiEffectiveAgainst_ut57va$;
  Special.prototype.antiAccelerateCooldown_sv9jhu$ = Skill.prototype.antiAccelerateCooldown_sv9jhu$;
  Special.prototype.attackPain_sv9jhu$ = Skill.prototype.attackPain_sv9jhu$;
  Special.prototype.attackHpLoss_sv9jhu$ = Skill.prototype.attackHpLoss_sv9jhu$;
  Special.prototype.attackHeal_sv9jhu$ = Skill.prototype.attackHeal_sv9jhu$;
  Special.prototype.brazenAtk_sv9jhu$ = Skill.prototype.brazenAtk_sv9jhu$;
  Special.prototype.brazenSpd_sv9jhu$ = Skill.prototype.brazenSpd_sv9jhu$;
  Special.prototype.brazenDef_sv9jhu$ = Skill.prototype.brazenDef_sv9jhu$;
  Special.prototype.brazenRes_sv9jhu$ = Skill.prototype.brazenRes_sv9jhu$;
  Object.defineProperty(Weapon.prototype, 'maxLevel', Object.getOwnPropertyDescriptor(Skill.prototype, 'maxLevel'));
  Weapon.prototype.bothEffect_sv9jhu$ = Skill.prototype.bothEffect_sv9jhu$;
  Weapon.prototype.bothEffect_sv9jhu$$default = Skill.prototype.bothEffect_sv9jhu$$default;
  Weapon.prototype.attackEffect_sv9jhu$ = Skill.prototype.attackEffect_sv9jhu$;
  Weapon.prototype.attackEffect_sv9jhu$$default = Skill.prototype.attackEffect_sv9jhu$$default;
  Weapon.prototype.counterEffect_sv9jhu$ = Skill.prototype.counterEffect_sv9jhu$;
  Weapon.prototype.counterEffect_sv9jhu$$default = Skill.prototype.counterEffect_sv9jhu$$default;
  Weapon.prototype.effectedAttackEffect_sv9jhu$ = Skill.prototype.effectedAttackEffect_sv9jhu$;
  Weapon.prototype.effectedAttackEffect_sv9jhu$$default = Skill.prototype.effectedAttackEffect_sv9jhu$$default;
  Weapon.prototype.effectedCounterEffect_sv9jhu$ = Skill.prototype.effectedCounterEffect_sv9jhu$;
  Weapon.prototype.effectedCounterEffect_sv9jhu$$default = Skill.prototype.effectedCounterEffect_sv9jhu$$default;
  Weapon.prototype.attackPlan_p6uegp$ = Skill.prototype.attackPlan_p6uegp$;
  Weapon.prototype.attackPlan_p6uegp$$default = Skill.prototype.attackPlan_p6uegp$$default;
  Weapon.prototype.counterPlan_p6uegp$ = Skill.prototype.counterPlan_p6uegp$;
  Weapon.prototype.counterPlan_p6uegp$$default = Skill.prototype.counterPlan_p6uegp$$default;
  Weapon.prototype.prevent_w6mj9q$ = Skill.prototype.prevent_w6mj9q$;
  Weapon.prototype.prevent_w6mj9q$$default = Skill.prototype.prevent_w6mj9q$$default;
  Weapon.prototype.specialPrevent_upjsjk$ = Skill.prototype.specialPrevent_upjsjk$;
  Weapon.prototype.specialPrevent_upjsjk$$default = Skill.prototype.specialPrevent_upjsjk$$default;
  Weapon.prototype.specialTriggered_upjsjk$ = Skill.prototype.specialTriggered_upjsjk$;
  Weapon.prototype.specialTriggered_upjsjk$$default = Skill.prototype.specialTriggered_upjsjk$$default;
  Weapon.prototype.damage_96237r$ = Skill.prototype.damage_96237r$;
  Weapon.prototype.damage_96237r$$default = Skill.prototype.damage_96237r$$default;
  Weapon.prototype.absorb_6zcyla$ = Skill.prototype.absorb_6zcyla$;
  Weapon.prototype.equip_yukhz7$ = Skill.prototype.equip_yukhz7$;
  Weapon.prototype.equip_yukhz7$$default = Skill.prototype.equip_yukhz7$$default;
  Weapon.prototype.equip_emsvym$ = Skill.prototype.equip_emsvym$;
  Weapon.prototype.turnStart_sv9jhu$ = Skill.prototype.turnStart_sv9jhu$;
  Weapon.prototype.turnStart_sv9jhu$$default = Skill.prototype.turnStart_sv9jhu$$default;
  Weapon.prototype.afterFightEffect_sv9jhu$ = Skill.prototype.afterFightEffect_sv9jhu$;
  Weapon.prototype.afterFightEffect_sv9jhu$$default = Skill.prototype.afterFightEffect_sv9jhu$$default;
  Weapon.prototype.reducedDamage_upjsjk$ = Skill.prototype.reducedDamage_upjsjk$;
  Weapon.prototype.reducedDamage_upjsjk$$default = Skill.prototype.reducedDamage_upjsjk$$default;
  Weapon.prototype.defiantAtk_sv9jhu$ = Skill.prototype.defiantAtk_sv9jhu$;
  Weapon.prototype.defiantSpd_sv9jhu$ = Skill.prototype.defiantSpd_sv9jhu$;
  Weapon.prototype.defiantDef_sv9jhu$ = Skill.prototype.defiantDef_sv9jhu$;
  Weapon.prototype.defiantRes_sv9jhu$ = Skill.prototype.defiantRes_sv9jhu$;
  Weapon.prototype.blowAtk_sv9jhu$ = Skill.prototype.blowAtk_sv9jhu$;
  Weapon.prototype.blowSpd_sv9jhu$ = Skill.prototype.blowSpd_sv9jhu$;
  Weapon.prototype.blowDef_sv9jhu$ = Skill.prototype.blowDef_sv9jhu$;
  Weapon.prototype.blowRes_sv9jhu$ = Skill.prototype.blowRes_sv9jhu$;
  Weapon.prototype.steadyDef_sv9jhu$ = Skill.prototype.steadyDef_sv9jhu$;
  Weapon.prototype.steadyRes_sv9jhu$ = Skill.prototype.steadyRes_sv9jhu$;
  Weapon.prototype.steadyAtk_sv9jhu$ = Skill.prototype.steadyAtk_sv9jhu$;
  Weapon.prototype.closeDef_sv9jhu$ = Skill.prototype.closeDef_sv9jhu$;
  Weapon.prototype.distantDef_sv9jhu$ = Skill.prototype.distantDef_sv9jhu$;
  Weapon.prototype.weaponBreaker_y53988$ = Skill.prototype.weaponBreaker_y53988$;
  Weapon.prototype.boostDef_sv9jhu$ = Skill.prototype.boostDef_sv9jhu$;
  Weapon.prototype.boostSpd_sv9jhu$ = Skill.prototype.boostSpd_sv9jhu$;
  Weapon.prototype.boostAtk_sv9jhu$ = Skill.prototype.boostAtk_sv9jhu$;
  Weapon.prototype.boostRes_sv9jhu$ = Skill.prototype.boostRes_sv9jhu$;
  Weapon.prototype.furry_yukhz7$ = Skill.prototype.furry_yukhz7$;
  Weapon.prototype.lifeAndDeath_yukhz7$ = Skill.prototype.lifeAndDeath_yukhz7$;
  Weapon.prototype.log_za3rmp$ = Skill.prototype.log_za3rmp$;
  Weapon.prototype.equipHp_yukhz7$ = Skill.prototype.equipHp_yukhz7$;
  Weapon.prototype.equipAtk_yukhz7$ = Skill.prototype.equipAtk_yukhz7$;
  Weapon.prototype.equipKiller_yukhz7$ = Skill.prototype.equipKiller_yukhz7$;
  Weapon.prototype.equipSpd_yukhz7$ = Skill.prototype.equipSpd_yukhz7$;
  Weapon.prototype.equipDef_yukhz7$ = Skill.prototype.equipDef_yukhz7$;
  Weapon.prototype.equipRes_yukhz7$ = Skill.prototype.equipRes_yukhz7$;
  Weapon.prototype.effectiveAgainst_d5yp1f$ = Skill.prototype.effectiveAgainst_d5yp1f$;
  Weapon.prototype.effectiveAgainst_58hff6$ = Skill.prototype.effectiveAgainst_58hff6$;
  Weapon.prototype.effectiveAgainstMagic_trfvk0$ = Skill.prototype.effectiveAgainstMagic_trfvk0$;
  Weapon.prototype.doubleAttack_trfvk0$ = Skill.prototype.doubleAttack_trfvk0$;
  Weapon.prototype.colorAdvantage_sv9jhu$ = Skill.prototype.colorAdvantage_sv9jhu$;
  Weapon.prototype.vantage_p6uegp$ = Skill.prototype.vantage_p6uegp$;
  Weapon.prototype.noFollowupAttack_9jfrn9$ = Skill.prototype.noFollowupAttack_9jfrn9$;
  Weapon.prototype.followupable_sv9jhu$ = Skill.prototype.followupable_sv9jhu$;
  Weapon.prototype.eachNofollowupable_sv9jhu$ = Skill.prototype.eachNofollowupable_sv9jhu$;
  Weapon.prototype.desperation_p6uegp$ = Skill.prototype.desperation_p6uegp$;
  Weapon.prototype.brashAssault_sv9jhu$ = Skill.prototype.brashAssault_sv9jhu$;
  Weapon.prototype.windsweep_sv9jhu$ = Skill.prototype.windsweep_sv9jhu$;
  Weapon.prototype.watersweep_sv9jhu$ = Skill.prototype.watersweep_sv9jhu$;
  Weapon.prototype.dazzling_sv9jhu$ = Skill.prototype.dazzling_sv9jhu$;
  Weapon.prototype.wrathfulStaff_sv9jhu$ = Skill.prototype.wrathfulStaff_sv9jhu$;
  Weapon.prototype.counterAllRange_trfvk0$ = Skill.prototype.counterAllRange_trfvk0$;
  Weapon.prototype.disableEachCounter_sv9jhu$ = Skill.prototype.disableEachCounter_sv9jhu$;
  Weapon.prototype.sacasBlessing_sv9jhu$ = Skill.prototype.sacasBlessing_sv9jhu$;
  Weapon.prototype.beorcsBlessing_sv9jhu$ = Skill.prototype.beorcsBlessing_sv9jhu$;
  Weapon.prototype.fullHpBonus_sv9jhu$ = Skill.prototype.fullHpBonus_sv9jhu$;
  Weapon.prototype.allBonus_sv9jhu$ = Skill.prototype.allBonus_sv9jhu$;
  Weapon.prototype.enemyFullHpBonus_sv9jhu$ = Skill.prototype.enemyFullHpBonus_sv9jhu$;
  Weapon.prototype.equipBrave_yukhz7$ = Skill.prototype.equipBrave_yukhz7$;
  Weapon.prototype.equipBlade_yukhz7$ = Skill.prototype.equipBlade_yukhz7$;
  Weapon.prototype.equipRaven_trfvk0$ = Skill.prototype.equipRaven_trfvk0$;
  Weapon.prototype.bladeEffect_trfvk0$ = Skill.prototype.bladeEffect_trfvk0$;
  Weapon.prototype.fullHpAtkSpdBonus_sv9jhu$ = Skill.prototype.fullHpAtkSpdBonus_sv9jhu$;
  Weapon.prototype.antiBuffBonus_trfvk0$ = Skill.prototype.antiBuffBonus_trfvk0$;
  Weapon.prototype.heavyBlade_sv9jhu$ = Skill.prototype.heavyBlade_sv9jhu$;
  Weapon.prototype.flashingBlade_sv9jhu$ = Skill.prototype.flashingBlade_sv9jhu$;
  Weapon.prototype.accelerateAttackCooldown_sv9jhu$ = Skill.prototype.accelerateAttackCooldown_sv9jhu$;
  Weapon.prototype.antiEffectiveAgainst_ut57va$ = Skill.prototype.antiEffectiveAgainst_ut57va$;
  Weapon.prototype.antiAccelerateCooldown_sv9jhu$ = Skill.prototype.antiAccelerateCooldown_sv9jhu$;
  Weapon.prototype.attackPain_sv9jhu$ = Skill.prototype.attackPain_sv9jhu$;
  Weapon.prototype.attackHpLoss_sv9jhu$ = Skill.prototype.attackHpLoss_sv9jhu$;
  Weapon.prototype.attackHeal_sv9jhu$ = Skill.prototype.attackHeal_sv9jhu$;
  Weapon.prototype.brazenAtk_sv9jhu$ = Skill.prototype.brazenAtk_sv9jhu$;
  Weapon.prototype.brazenSpd_sv9jhu$ = Skill.prototype.brazenSpd_sv9jhu$;
  Weapon.prototype.brazenDef_sv9jhu$ = Skill.prototype.brazenDef_sv9jhu$;
  Weapon.prototype.brazenRes_sv9jhu$ = Skill.prototype.brazenRes_sv9jhu$;
  nullifiesUs = "Nullifies foe's bonuses";
  nullifiesJp = '\u7279\u52B9\u5BFE\u8C61\u306E\u5F37\u5316\u306E+\u3092\u7121\u52B9\u306B\u3059\u308B';
  Kotlin.defineModule('FEHSIM', _);
  return _;
}(typeof FEHSIM === 'undefined' ? {} : FEHSIM, kotlin);
