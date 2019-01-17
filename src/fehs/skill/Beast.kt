package jp.blogspot.turanukimaru.fehs.skill

import jp.blogspot.turanukimaru.fehs.*

/**
 * スキル。武器
 */
enum class Beast(override val jp: SkillName, override val type: SkillType, override val level: Int = 0, override val preSkill: Skill = Skill.NONE, override val spType: SpType = SpType.LEGEND_W, override val refinedWeaponType: RefinedWeapon.RefineType = RefinedWeapon.RefineType.NONE, override val effectiveAgainstMoveType: Array<MoveType> = arrayOf(), override val effectiveAgainstWeaponType: Array<WeaponType> = arrayOf()) : Weapon {
    Hatching(SkillName.HatchingFlier, SkillType.BEAST, 4, Skill.NONE, SpType.IRON) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = atk(battleUnit, 2, this)
    },
    Fledgling(SkillName.FledglingFlier, SkillType.BEAST, 6, Hatching, SpType.STEEL) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = atk(battleUnit, 2, this)
    },
    AdultFlier(SkillName.AdultFlier, SkillType.BEAST, 9, Fledgling, SpType.SILVER) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = atk(battleUnit, 2, this)
    },
    HawkKingClaw(SkillName.HawkKingClaw, SkillType.BEAST, 14, Fledgling) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipAtk(armedHero, 3)
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = followupable(battleUnit, 10, this)
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = atk(battleUnit, 2, this)
    },
    WhelpInfantry(SkillName.WhelpInfantry, SkillType.BEAST, 4, Skill.NONE, SpType.IRON) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = atk(battleUnit, 2, this)
    },
    YearlingInfantry(SkillName.YearlingInfantry, SkillType.BEAST, 6, Hatching, SpType.STEEL) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = atk(battleUnit, 2, this)
    },
    AdultInfantry(SkillName.AdultInfantry, SkillType.BEAST, 9, Fledgling, SpType.SILVER) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = atk(battleUnit, 2, this)
    },
    WolfQueenFang(SkillName.WolfQueenFang, SkillType.BEAST, 14, Fledgling) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero)
        override fun specialTriggered(battleUnit: BattleUnit, damage: Int): Int = damage + 10
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = atkSpd(battleUnit, battleUnit.adjacentUnits * 2, this)
    },
    HeronWing(SkillName.HeronWing, SkillType.BEAST, 14, Fledgling) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipSpd(armedHero, 3)
    },
    RavenKingBeak(SkillName.RavenKingBeak, SkillType.BEAST, 14, Fledgling) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipSpd(armedHero, 3)
        override fun stateFlat(battleUnit: BattleUnit, enemy: BattleUnit): Int = spdFlat(battleUnit, enemy)
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit {
            battleUnit.addSkillText(SkillText(this, SkillBaseText.Damage, spdFlat(battleUnit, enemy).toString()))
            return atk(battleUnit, 2, this)
        }
    },
    ;

    /**
     * nameは誤動作するので共通処理としてはvalueを使う。もっといい名前があるか？
     */
    override val value get() = name
}