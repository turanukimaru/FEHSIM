package jp.blogspot.turanukimaru.fehs.skill

import jp.blogspot.turanukimaru.fehs.*

/**
 * スキル。武器
 */
enum class Breath(override val jp: SkillName, override val type: SkillType, override val level: Int = 0, override val preSkill: Skill = Skill.NONE, override val spType: SpType = SpType.LEGEND_W, override val refinedWeaponType: RefinedWeapon.RefineType = RefinedWeapon.RefineType.NONE, override val effectiveAgainstMoveType: Array<MoveType> = arrayOf(), override val effectiveAgainstWeaponType: Array<WeaponType> = arrayOf()) : Weapon {
    FireBreath(SkillName.FireBreath, SkillType.DRAGON, 6, Skill.NONE, SpType.IRON),
    FireBreath2(SkillName.FireBreath2, SkillType.DRAGON, 8, FireBreath, SpType.STEEL),
    LightningBreath(SkillName.LightningBreath, SkillType.DRAGON, 7, FireBreath2, SpType.SILVER) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBlade(armedHero, lv)
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = counterAllRange(battleUnit, this)
    },
    LightningBreath2(SkillName.LightningBreath2, SkillType.DRAGON, 11, LightningBreath, SpType.PLUS, RefinedWeapon.RefineType.Range1) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBlade(armedHero, lv)
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = counterAllRange(battleUnit, this)
    },
    Flametongue(SkillName.Flametongue, SkillType.DRAGON, 11, FireBreath2, SpType.SILVER),
    Flametongue2(SkillName.Flametongue2, SkillType.DRAGON, 15, Flametongue, SpType.PLUS, RefinedWeapon.RefineType.Range1),
    LightBreath(SkillName.LightBreath, SkillType.DRAGON, 9, FireBreath2, SpType.SILVER),
    LightBreath2(SkillName.LightBreath2, SkillType.DRAGON, 13, LightBreath, SpType.PLUS, RefinedWeapon.RefineType.Range1),
    DarkBreath(SkillName.DarkBreath, SkillType.DRAGON, 9, FireBreath, SpType.SILVER),
    DarkBreath2(SkillName.DarkBreath2, SkillType.DRAGON, 13, DarkBreath, SpType.PLUS, RefinedWeapon.RefineType.Range1),
    GreatFlame(SkillName.GreatFlame, SkillType.PENETRATE_DRAGON, 16, Flametongue) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipAtk(armedHero, 3)
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = antiFollowupDef(battleUnit, enemy, 5, this)
    },
    Expiration(SkillName.Expiration, SkillType.PENETRATE_DRAGON, 16, Flametongue) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = counterAllRange(battleUnit, this)
    },
    WaterBreath(SkillName.WaterBreath, SkillType.PENETRATE_DRAGON, 10, FireBreath2, SpType.SILVER) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = defRes(battleUnit, 4, this)
    },
    WaterBreath2(SkillName.WaterBreath2, SkillType.PENETRATE_DRAGON, 14, WaterBreath, SpType.PLUS, RefinedWeapon.RefineType.Range1) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = defRes(battleUnit, 4, this)
    },
    BreathOfFog(SkillName.BreathOfFog, SkillType.PENETRATE_DRAGON, 16, Flametongue, SpType.PLUS, RefinedWeapon.RefineType.Range1, effectiveAgainstWeaponType = arrayOf(WeaponType.DRAGON)),
    SummersBreath(SkillName.SummersBreath, SkillType.PENETRATE_DRAGON, 16, Flametongue) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipDef(armedHero, 3)
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit {
            battleUnit.addSkillText(SkillText(this, SkillBaseText.HeavyPlate, 1.toString()))
            battleUnit.accelerateAttackCooldown = 1
            battleUnit.accelerateTargetCooldown = 1
            return battleUnit
        }
    },
    BreathOfBlight(SkillName.BreathOfBlight, SkillType.PENETRATE_DRAGON, 16, Flametongue) {
        override fun effectedAttackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = antiEffectiveAgainst(battleUnit, enemy, EffectiveAgainst.DRAGON, this)

        override fun effectedCounterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = antiEffectiveAgainst(battleUnit, enemy, EffectiveAgainst.DRAGON, this)
    },
    DivineMist(SkillName.DivineMist, SkillType.PENETRATE_DRAGON, 16, Flametongue, effectiveAgainstWeaponType = arrayOf(WeaponType.DRAGON)) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = counterAllRange(battleUnit, this)
    },
    SpiritBreath(SkillName.SpiritBreath, SkillType.PENETRATE_DRAGON, 16, Flametongue) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipDef(armedHero, 3)
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = followupDef(battleUnit, enemy, 5, this)
    },
    DraconicRage(SkillName.DraconicRage, SkillType.PENETRATE_DRAGON, 16, Flametongue) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero)
        //これミュルグレと同じだな。真面目にカウントするなら一本化するか…
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = if (battleUnit.adjacentUnits > 0) atkSpd(battleUnit, 5, this) else battleUnit
    },
    GlitteringBreath(SkillName.GlitteringBreath, SkillType.PENETRATE_DRAGON, 10, FireBreath2, SpType.SILVER) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = defRes(battleUnit, battleUnit.adjacentUnits * 2, this)
    },
    GlitteringBreath2(SkillName.GlitteringBreath2, SkillType.PENETRATE_DRAGON, 14, GlitteringBreath, SpType.PLUS, RefinedWeapon.RefineType.Range1) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = defRes(battleUnit, battleUnit.adjacentUnits * 2, this)
    },
    FellBreath(SkillName.FellBreath, SkillType.PENETRATE_DRAGON, 16, Flametongue) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipAtk(armedHero,3)
        //これミュルグレと同じだな。真面目にカウントするなら一本化するか…
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = if (enemy.hp < enemy.armedHero.maxHp) atkRes(antiFollowup(battleUnit,enemy,this), 6, this) else battleUnit
    },
    ;

    /**
     * nameは誤動作するので共通処理としてはvalueを使う。もっといい名前があるか？
     * なお2を＋に置き換える。
     */
    override val value get() = name
}