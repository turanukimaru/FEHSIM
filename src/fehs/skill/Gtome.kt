package jp.blogspot.turanukimaru.fehs.skill

import jp.blogspot.turanukimaru.fehs.*

/**
 * スキル。武器
 */
enum class Gtome(override val jp: SkillName, override val type: SkillType, override val level: Int = 0, override val preSkill: Skill = Skill.NONE, override val spType: SpType = SpType.LEGEND_W, override val refinedWeaponType: RefinedWeapon.RefineType = RefinedWeapon.RefineType.NONE, override val effectiveAgainstMoveType: Array<MoveType> = arrayOf(), override val effectiveAgainstWeaponType: Array<WeaponType> = arrayOf()) : Weapon {
    Wind(SkillName.Wind, SkillType.GTOME, 4, Skill.NONE, SpType.IRON),
    Elwind(SkillName.Elwind, SkillType.GTOME, 6, Wind, SpType.STEEL),
    Rexcalibur(SkillName.Rexcalibur, SkillType.GTOME, 9, Elwind, SpType.SILVER),
    Rexcalibur2(SkillName.Rexcalibur2, SkillType.GTOME, 14, Rexcalibur, SpType.PLUS, RefinedWeapon.RefineType.Range2),
    Gronnwolf(SkillName.Gronnwolf, SkillType.GTOME, 6, Elwind, SpType.SILVER, effectiveAgainstMoveType = arrayOf(MoveType.CAVALRY)),
    Gronnwolf2(SkillName.Gronnwolf2, SkillType.GTOME, 10, Gronnwolf, SpType.PLUS, effectiveAgainstMoveType = arrayOf(MoveType.CAVALRY)),
    KeenGronnwolf2(SkillName.KeenGronnwolf2, SkillType.GTOME, 12, Gronnwolf2, SpType.PLUS, RefinedWeapon.RefineType.Range2, effectiveAgainstMoveType = arrayOf(MoveType.CAVALRY)),
    Gronnraven(SkillName.Gronnraven, SkillType.GTOME, 7, Elwind, SpType.SILVER) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = equipRaven(battleUnit)
    },
    Gronnraven2(SkillName.Gronnraven2, SkillType.GTOME, 11, Gronnraven, SpType.PLUS) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = equipRaven(battleUnit)
    },
    Gronnblade(SkillName.Gronnblade, SkillType.GTOME, 9, Elwind, SpType.SILVER) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBlade(armedHero, lv)
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = bladeEffect(battleUnit)
    },
    Gronnblade2(SkillName.Gronnblade2, SkillType.GTOME, 13, Gronnblade, SpType.PLUS) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBlade(armedHero, lv)
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = bladeEffect(battleUnit)
    },
    Gronnowl(SkillName.Gronnowl, SkillType.GTOME, 6, Elwind, SpType.SILVER) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = allBonus(battleUnit, battleUnit.adjacentUnits * 2, this)
    },
    Gronnowl2(SkillName.Gronnowl2, SkillType.GTOME, 10, Gronnowl, SpType.PLUS, RefinedWeapon.RefineType.Range2) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = allBonus(battleUnit, battleUnit.adjacentUnits * 2, this)
    },
    GreenEgg(SkillName.GreenEgg, SkillType.GTOME, 7, Elwind, SpType.SILVER) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = attackHeal(battleUnit, 4, this)
    },
    GreenEgg2(SkillName.GreenEgg2, SkillType.GTOME, 11, GreenEgg, SpType.PLUS, RefinedWeapon.RefineType.Range2) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = attackHeal(battleUnit, 4, this)
    },
    HibiscusTome(SkillName.HibiscusTome, SkillType.GTOME, 8, Elwind, SpType.SILVER),
    HibiscusTome2(SkillName.HibiscusTome2, SkillType.GTOME, 12, HibiscusTome, SpType.PLUS, RefinedWeapon.RefineType.Range2),
    DancersRing(SkillName.DancersRing, SkillType.GTOME, 8, Elwind, SpType.SILVER),
    DancersRing2(SkillName.DancersRing2, SkillType.GTOME, 12, DancersRing, SpType.PLUS, RefinedWeapon.RefineType.Range2),
    Elivagar(SkillName.Elivagar, SkillType.GTOME, 14, Rexcalibur),
    Excalibur(SkillName.Excalibur, SkillType.GTOME, 14, Rexcalibur, SpType.LEGEND_W, RefinedWeapon.RefineType.Range2, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)),
    Naga(SkillName.Naga, SkillType.GTOME, 14, Rexcalibur, SpType.LEGEND_W, RefinedWeapon.RefineType.Range2, effectiveAgainstWeaponType = arrayOf(WeaponType.DRAGON)) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = defRes(battleUnit, 2, this)
    },
    DarkExcalibur(SkillName.DarkExcalibur, SkillType.GTOME, 14, Rexcalibur) {
        override fun specialTriggered(battleUnit: BattleUnit, damage: Int): Int = damage + 10
    },
    DivineNaga(SkillName.DivineNaga, SkillType.GTOME, 14, Rexcalibur, SpType.LEGEND_W, RefinedWeapon.RefineType.Range2, effectiveAgainstWeaponType = arrayOf(WeaponType.DRAGON)) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = neutralizeBuffBonus(battleUnit, enemy, this)
    },
    SpectralTome(SkillName.SpectralTome, SkillType.GTOME, 8, Elwind, SpType.SILVER),
    SpectralTome2(SkillName.SpectralTome2, SkillType.GTOME, 12, SpectralTome, SpType.PLUS, RefinedWeapon.RefineType.Range2),
    Blizzard(SkillName.Blizzard, SkillType.GTOME, 14, Rexcalibur) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipRes(armedHero, 3)
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = debuffBonus(battleUnit, enemy, this)
    },
    GreenGift(SkillName.GreenGift, SkillType.GTOME, 8, Elwind, SpType.SILVER) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = antiRangedWeaponBuffBonus(battleUnit, enemy, 3, this)
    },
    GreenGift2(SkillName.GreenGift2, SkillType.GTOME, 12, GreenGift, SpType.PLUS) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = antiRangedWeaponBuffBonus(battleUnit, enemy, 3, this)
    },
    WindsBrand(SkillName.WindsBrand, SkillType.GTOME, 14, Rexcalibur, SpType.LEGEND_W, RefinedWeapon.RefineType.Range2),
    MuninnsEgg(SkillName.MuninnsEgg, SkillType.BTOME, 14, Rexcalibur) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipRes(armedHero, 3)
    },
    Thunderhead(SkillName.Thunderhead, SkillType.GTOME, 14, Rexcalibur) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = bladeEffect(battleUnit)
    },
    NiflFrostflowers(SkillName.NiflFrostflowers, SkillType.GTOME, 14, Rexcalibur) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipAtk(armedHero, 3)
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = atkSpd(battleUnit, battleUnit.adjacentUnits * 2, this)
    },
    GigaExcalibur(SkillName.GigaExcalibur, SkillType.GTOME, 14, Rexcalibur) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipSpd(armedHero, 3)
        override fun stateFlat(battleUnit: BattleUnit, enemy: BattleUnit): Int = spdFlat(battleUnit, enemy)
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit {
            battleUnit.addSkillText(SkillText(this, SkillBaseText.Damage, spdFlat(battleUnit, enemy).toString()))
            return battleUnit
        }
    },
    Forseti(SkillName.Forseti, SkillType.GTOME, 14, Rexcalibur) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipSpd(armedHero, 3)
        override fun attackPlan(fightPlan: FightPlan, lv: Int): FightPlan = forseti(fightPlan, 2)//攻めたてと同じLV倍率にしとこう
    },
    BookOfShadows(SkillName.BookOfShadows, SkillType.GTOME, 14, Gtome.Rexcalibur) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipSpd(armedHero, 3)
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = adjacentDebuff(battleUnit, enemy, 4, this)
    },
    TacticalGale(SkillName.TacticalGale, SkillType.GTOME, 14, Gronnwolf, SpType.PLUS) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = equipRaven(battleUnit)
    },
    ;

    /**
     * nameは誤動作するので共通処理としてはvalueを使う。もっといい名前があるか？
     * なお2を＋に置き換える。
     */
    override val value get() = name
}