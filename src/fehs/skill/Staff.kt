package jp.blogspot.turanukimaru.fehs.skill

import jp.blogspot.turanukimaru.fehs.*

/**
 * スキル。武器
 */
enum class Staff(override val jp: SkillName, override val type: SkillType, override val level: Int = 0, override val preSkill: Skill = Skill.NONE, override val spType: SpType = SpType.LEGEND_W, override val refinedWeaponType: RefinedWeapon.RefineType = RefinedWeapon.RefineType.NONE, override val effectiveAgainstMoveType: Array<MoveType> = arrayOf(), override val effectiveAgainstWeaponType: Array<WeaponType> = arrayOf()) : Weapon {
    Assault(SkillName.Assault, SkillType.STAFF, 10, Skill.NONE, SpType.IRON),
    Absorb(SkillName.Absorb, SkillType.STAFF, 4, Assault, SpType.STEEL) {
        override fun absorb(battleUnit: BattleUnit, target: BattleUnit, damage: Int): Int = battleUnit.heal(damage * 5 / 10)
    },
    Absorb2(SkillName.Absorb2, SkillType.STAFF, 7, Absorb, SpType.LEGEND_W, RefinedWeapon.RefineType.Staff) {
        override fun absorb(battleUnit: BattleUnit, target: BattleUnit, damage: Int): Int = battleUnit.heal(damage * 5 / 10)
    },
    Candlelight(SkillName.Candlelight, SkillType.STAFF, 7, Assault, SpType.STEEL),
    Candlelight2(SkillName.Candlelight2, SkillType.STAFF, 11, Assault, SpType.IRON, RefinedWeapon.RefineType.Staff),
    Gravity(SkillName.Gravity, SkillType.STAFF, 7, Assault, SpType.SILVER),
    Gravity2(SkillName.Gravity2, SkillType.STAFF, 10, Gravity, SpType.LEGEND_W, RefinedWeapon.RefineType.Staff),
    Fear(SkillName.Fear, SkillType.STAFF, 5, Assault, SpType.SILVER),
    Fear2(SkillName.Fear2, SkillType.STAFF, 12, Fear, SpType.PLUS, RefinedWeapon.RefineType.Staff),
    Slow(SkillName.Slow, SkillType.STAFF, 5, Assault, SpType.SILVER),
    Slow2(SkillName.Slow2, SkillType.STAFF, 12, Slow, SpType.PLUS, RefinedWeapon.RefineType.Staff),
    Panic(SkillName.Panic, SkillType.STAFF, 6, Assault, SpType.SILVER),
    Panic2(SkillName.Panic2, SkillType.STAFF, 11, Panic, SpType.PLUS, RefinedWeapon.RefineType.Staff),
    Pain(SkillName.Pain, SkillType.STAFF, 3, Assault, SpType.SILVER) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = attackPain(battleUnit, enemy, 10,this)
    },
    Pain2(SkillName.Pain2, SkillType.STAFF, 10, Pain, SpType.PLUS, RefinedWeapon.RefineType.Staff) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = attackPain(battleUnit, enemy, 10,this)
    },
    Trilemma(SkillName.Trilemma, SkillType.STAFF, 8, Assault, SpType.SILVER),
    Trilemma2(SkillName.Trilemma2, SkillType.STAFF, 12, Trilemma, SpType.PLUS, RefinedWeapon.RefineType.Staff),
    Thokk(SkillName.Thokk, SkillType.STAFF, 14, Assault, SpType.PLUS) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = wrathfulStaff(battleUnit, enemy, lv,this)
    },
    Hliðskjálf(SkillName.Hliðskjálf, SkillType.STAFF, 14, Assault, SpType.PLUS) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = dazzling(battleUnit, enemy, 3,this)
    },
    WitchyWand(SkillName.WitchyWand, SkillType.STAFF, 8, Assault, SpType.SILVER),
    WitchyWand2(SkillName.WitchyWand2, SkillType.STAFF, 12, WitchyWand, SpType.PLUS, RefinedWeapon.RefineType.Staff),
    Flash(SkillName.Flash, SkillType.STAFF, 7, Assault, SpType.STEEL),
    Flash2(SkillName.Flash2, SkillType.STAFF, 11, Assault, SpType.PLUS, RefinedWeapon.RefineType.Staff),
    JoyousLantern(SkillName.JoyousLantern, SkillType.STAFF, 8, Assault, SpType.STEEL),
    JoyousLantern2(SkillName.JoyousLantern2, SkillType.STAFF, 12, Assault, SpType.PLUS, RefinedWeapon.RefineType.Staff),
    Kumade(SkillName.Kumade, SkillType.STAFF, 8, Assault, SpType.STEEL),
    Kumade2(SkillName.Kumade2, SkillType.STAFF, 12, Assault, SpType.PLUS, RefinedWeapon.RefineType.Staff),
    ;

    /**
     * nameは誤動作するので共通処理としてはvalueを使う。もっといい名前があるか？
     * なお2を＋に置き換える。
     */
    override val value get() = name
}