package jp.blogspot.turanukimaru.fehs.skill

import jp.blogspot.turanukimaru.fehs.*

/**
 * スキル。武器
 */
enum class Axe(override val jp: SkillName, override val type: SkillType, override val level: Int = 0, override val preSkill: Skill = Skill.NONE, override val spType: SpType = SpType.LEGEND_W, override val refinedWeaponType: RefinedWeapon.RefineType = RefinedWeapon.RefineType.NONE, override val effectiveAgainstMoveType: Array<MoveType> = arrayOf(), override val effectiveAgainstWeaponType: Array<WeaponType> = arrayOf()) : Weapon {
    IronAxe(SkillName.IronAxe, SkillType.AXE, 6, Skill.NONE, SpType.IRON),
    SteelAxe(SkillName.SteelAxe, SkillType.AXE, 8, IronAxe, SpType.STEEL),
    SilverAxe(SkillName.SilverAxe, SkillType.AXE, 11, SteelAxe, SpType.SILVER),
    SilverAxe2(SkillName.SilverAxe2, SkillType.AXE, 15, SilverAxe, SpType.PLUS, RefinedWeapon.RefineType.Range1),
    KillerAxe(SkillName.KillerAxe, SkillType.AXE, 7, SteelAxe, SpType.SILVER) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero)
    },
    KillerAxe2(SkillName.KillerAxe2, SkillType.AXE, 11, KillerAxe, SpType.PLUS) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero)
    },
    BraveAxe(SkillName.BraveAxe, SkillType.AXE, 5, SteelAxe, SpType.SILVER) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBrave(armedHero, lv)
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = doubleAttack(battleUnit)
    },
    BraveAxe2(SkillName.BraveAxe2, SkillType.AXE, 8, BraveAxe, SpType.PLUS) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBrave(armedHero, lv)
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = doubleAttack(battleUnit)
    },
    Hammer(SkillName.Hammer, SkillType.AXE, 8, SteelAxe, SpType.SILVER, effectiveAgainstMoveType = arrayOf(MoveType.ARMORED)),
    Hammer2(SkillName.Hammer2, SkillType.AXE, 12, Hammer, SpType.PLUS, effectiveAgainstMoveType = arrayOf(MoveType.ARMORED)),
    SlayingHammer2(SkillName.SlayingHammer2, SkillType.AXE, 14, Hammer2, SpType.PLUS, RefinedWeapon.RefineType.Range1, effectiveAgainstMoveType = arrayOf(MoveType.ARMORED)),
    EmeraldAxe(SkillName.EmeraldAxe, SkillType.AXE, 8, SteelAxe, SpType.SILVER) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = colorAdvantage(battleUnit, enemy, 3, this)
    },
    EmeraldAxe2(SkillName.EmeraldAxe2, SkillType.AXE, 12, EmeraldAxe, SpType.PLUS) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = colorAdvantage(battleUnit, enemy, 3, this)
    },
    SlayingAxe(SkillName.SlayingAxe, SkillType.AXE, 10, SteelAxe, SpType.SILVER) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero)
    },
    SlayingAxe2(SkillName.SlayingAxe2, SkillType.AXE, 14, SlayingAxe, SpType.PLUS, RefinedWeapon.RefineType.Range1) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero)
    },
    CarrotAxe(SkillName.CarrotAxe, SkillType.AXE, 9, SteelAxe, SpType.SILVER) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = attackHeal(battleUnit, 4, this)
    },
    CarrotAxe2(SkillName.CarrotAxe2, SkillType.AXE, 13, CarrotAxe, SpType.PLUS, RefinedWeapon.RefineType.Range1) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = attackHeal(battleUnit, 4, this)
    },
    LegionsAxe(SkillName.LegionsAxe, SkillType.AXE, 10, SteelAxe, SpType.SILVER),
    LegionsAxe2(SkillName.LegionsAxe2, SkillType.AXE, 14, LegionsAxe, SpType.PLUS, RefinedWeapon.RefineType.Range1),
    MelonCrusher(SkillName.MelonCrusher, SkillType.AXE, 10, SteelAxe, SpType.SILVER) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = fullHpBonus(battleUnit, 2, this)
    },
    MelonCrusher2(SkillName.MelonCrusher2, SkillType.AXE, 14, MelonCrusher, SpType.PLUS, RefinedWeapon.RefineType.Range1) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = fullHpBonus(battleUnit, 2, this)
    },
    LilithFloatie(SkillName.LilithFloatie, SkillType.AXE, 10, SteelAxe, SpType.SILVER),
    LilithFloatie2(SkillName.LilithFloatie2, SkillType.AXE, 14, LilithFloatie, SpType.PLUS, RefinedWeapon.RefineType.Range1),
    Noatun(SkillName.Noatun, SkillType.AXE, 16, SilverAxe, SpType.LEGEND_W, RefinedWeapon.RefineType.Range1),
    Hauteclere(SkillName.Hauteclere, SkillType.AXE, 16, SilverAxe, SpType.LEGEND_W, RefinedWeapon.RefineType.Range1) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero)
    },
    Armoads(SkillName.Armoads, SkillType.AXE, 16, SilverAxe) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = followupable(battleUnit, 2, this)
    },
    ThunderArmoads(SkillName.ThunderArmoads, SkillType.AXE, 16, SilverAxe) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipDef(armedHero, 3)
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = antiFollowupAdjacet(battleUnit, enemy, this)
    },
    Urvan(SkillName.Urvan, SkillType.AXE, 16, SilverAxe) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero)
        override fun prevent(battleUnit: BattleUnit, damage: Int, source: BattleUnit, results: List<AttackResult>, lv: Int): Int =
                if (results.isNotEmpty() && results.last().side != battleUnit.side) damage - damage * 8 / 10 else damage
    },
    Uror(SkillName.Uror, SkillType.AXE, 16, SilverAxe),
    StoutTomahawk(SkillName.StoutTomahawk, SkillType.AXE, 16, SilverAxe) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = counterAllRange(battleUnit, this)
    },
    SackOGifts(SkillName.SackOGifts, SkillType.AXE, 10, SteelAxe, SpType.SILVER) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = allBonus(battleUnit, 2, this)
    },
    SackOGifts2(SkillName.SackOGifts2, SkillType.AXE, 14, SackOGifts, SpType.PLUS, RefinedWeapon.RefineType.Range1) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = allBonus(battleUnit, 2, this)
    },
    Handbell(SkillName.Handbell, SkillType.AXE, 10, SteelAxe, SpType.SILVER) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = allBonus(battleUnit, 2, this)
    },
    Handbell2(SkillName.Handbell2, SkillType.AXE, 14, Handbell, SpType.PLUS, RefinedWeapon.RefineType.Range1) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = allBonus(battleUnit, 2, this)
    },
    Hagoita(SkillName.Hagoita, SkillType.AXE, 10, SteelAxe, SpType.SILVER),
    Hagoita2(SkillName.Hagoita2, SkillType.AXE, 14, Hagoita, SpType.PLUS, RefinedWeapon.RefineType.Range1),
    BerserkArmads(SkillName.BerserkArmads, SkillType.AXE, 16, SilverAxe) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero)
        override fun specialTriggered(battleUnit: BattleUnit, damage: Int): Int = wrath(battleUnit, damage, 75, this)
    },
    Basilikos(SkillName.Basilikos, SkillType.AXE, 16, BraveAxe2, SpType.LEGEND_W, RefinedWeapon.RefineType.Range1) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero)
    },
    GiantSpoon(SkillName.GiantSpoon, SkillType.AXE, 9, SteelAxe, SpType.SILVER) {
        override fun specialTriggered(battleUnit: BattleUnit, damage: Int): Int = damage + 10
    },
    GiantSpoon2(SkillName.GiantSpoon2, SkillType.AXE, 13, GiantSpoon, SpType.PLUS, RefinedWeapon.RefineType.Range1) {
        override fun specialTriggered(battleUnit: BattleUnit, damage: Int): Int = damage + 10
    },
    Poleaxe(SkillName.Poleaxe, SkillType.AXE, 10, SteelAxe, SpType.SILVER, effectiveAgainstMoveType = arrayOf(MoveType.CAVALRY)),
    Poleaxe2(SkillName.Poleaxe2, SkillType.AXE, 14, Poleaxe, SpType.PLUS, RefinedWeapon.RefineType.Range1, effectiveAgainstMoveType = arrayOf(MoveType.CAVALRY)),
    CamillasAxe(SkillName.CamillasAxe, SkillType.AXE, 16, BraveAxe2, SpType.LEGEND_W, RefinedWeapon.RefineType.Range1) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = if (battleUnit.adjacentUnits > 0) atkSpd(battleUnit, 4, this) else battleUnit
    },
    ArdentService(SkillName.ArdentService, SkillType.AXE, 10, SteelAxe, SpType.SILVER),
    ArdentService2(SkillName.ArdentService2, SkillType.AXE, 14, ArdentService, SpType.PLUS, RefinedWeapon.RefineType.Range1),
    BeachBanner(SkillName.BeachBanner, SkillType.AXE, 10, SteelAxe, SpType.SILVER) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = allBonus(battleUnit, 2, this)
    },
    BeachBanner2(SkillName.BeachBanner2, SkillType.AXE, 14, BeachBanner, SpType.PLUS, RefinedWeapon.RefineType.Range1) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = allBonus(battleUnit, 2, this)
    },
    DraconicPoleax(SkillName.DraconicPoleax, SkillType.AXE, 16, EmeraldAxe) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = colorAdvantage(battleUnit, enemy, 3, this)
    },
    WoGun(SkillName.WoGun, SkillType.AXE, 9, SteelAxe, SpType.SILVER) {
        override fun specialTriggered(battleUnit: BattleUnit, damage: Int): Int = damage + 10
    },
    WoGun2(SkillName.WoGun2, SkillType.AXE, 13, WoGun, SpType.PLUS, RefinedWeapon.RefineType.Range1) {
        override fun specialTriggered(battleUnit: BattleUnit, damage: Int): Int = damage + 10
    },
    Garm(SkillName.Garm, SkillType.AXE, 16, SilverAxe) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipAtk(armedHero, 3)
        //本来はバフがかかってるとき。…いや行軍はかかってるだろうしデフォルトで常に追撃可能でよくね
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = if (battleUnit.buffDebuffTrigger) followupable(battleUnit, 10, this) else battleUnit
    },
    Byleistr(SkillName.Byleistr, SkillType.AXE, 16, SilverAxe),//4種の波なので戦闘能力自体はない
    Sinmara(SkillName.Sinmara, SkillType.AXE, 16, SilverAxe) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipDef(armedHero, 3)
    },
    CherchesAxe(SkillName.CherchesAxe, SkillType.AXE, 11, Hammer2, SpType.PLUS, RefinedWeapon.RefineType.Range1) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBrave(armedHero, lv)
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = doubleAttack(battleUnit, this)
    },
    AxeOfVirility(SkillName.AxeOfVirility, SkillType.AXE, 16, Hammer2, SpType.LEGEND_W, RefinedWeapon.RefineType.Range1, effectiveAgainstMoveType = arrayOf(MoveType.ARMORED)),
    FaithfulAxe(SkillName.FaithfulAxe, SkillType.AXE, 10, SteelAxe, SpType.SILVER) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = if (battleUnit.adjacentUnits > 0) allBonus(battleUnit, 3, this) else battleUnit
    },
    FaithfulAxe2(SkillName.FaithfulAxe2, SkillType.AXE, 14, FaithfulAxe, SpType.PLUS, RefinedWeapon.RefineType.Range1){
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = if (battleUnit.adjacentUnits > 0) allBonus(battleUnit, 3, this) else battleUnit
    },
    GradoPoleax(SkillName.GradoPoleax, SkillType.AXE, 16, SilverAxe,SpType.LEGEND_W, RefinedWeapon.RefineType.Range1) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero)
    },
    ;

    /**
     * nameは誤動作するので共通処理としてはvalueを使う。もっといい名前があるか？
     */
    override val value get() = name
}