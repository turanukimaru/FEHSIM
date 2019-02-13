package jp.blogspot.turanukimaru.fehs.skill

import jp.blogspot.turanukimaru.fehs.*

/**
 * スキル。武器
 */
enum class Btome(override val jp: SkillName, override val type: SkillType, override val level: Int = 0, override val preSkill: Skill = Skill.NONE, override val spType: SpType = SpType.LEGEND_W, override val refinedWeaponType: RefinedWeapon.RefineType = RefinedWeapon.RefineType.NONE, override val effectiveAgainstMoveType: Array<MoveType> = arrayOf(), override val effectiveAgainstWeaponType: Array<WeaponType> = arrayOf()) : Weapon {
    Thunder(SkillName.Thunder, SkillType.BTOME, 4, Skill.NONE, SpType.IRON),
    Elthunder(SkillName.Elthunder, SkillType.BTOME, 6, Thunder, SpType.STEEL),
    Blarwolf(SkillName.Blarwolf, SkillType.BTOME, 6, Elthunder, SpType.SILVER, effectiveAgainstMoveType = arrayOf(MoveType.CAVALRY)),
    Blarwolf2(SkillName.Blarwolf2, SkillType.BTOME, 10, Blarwolf, SpType.PLUS, effectiveAgainstMoveType = arrayOf(MoveType.CAVALRY)),
    KeenBlarwolf2(SkillName.KeenBlarwolf2, SkillType.BTOME, 12, Blarwolf2, SpType.PLUS, RefinedWeapon.RefineType.Range2, effectiveAgainstMoveType = arrayOf(MoveType.CAVALRY)),
    Blarraven(SkillName.Blarraven, SkillType.BTOME, 7, Elthunder, SpType.SILVER) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = equipRaven(battleUnit)
    },
    Blarraven2(SkillName.Blarraven2, SkillType.BTOME, 11, Blarraven, SpType.PLUS) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = equipRaven(battleUnit)
    },
    Blarblade(SkillName.Blarblade, SkillType.BTOME, 9, Elthunder, SpType.SILVER) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBlade(armedHero, lv)
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = bladeEffect(battleUnit)
    },
    Blarblade2(SkillName.Blarblade2, SkillType.BTOME, 13, Blarblade, SpType.PLUS) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBlade(armedHero, lv)
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = bladeEffect(battleUnit)
    },
    Blarowl(SkillName.Blarowl, SkillType.BTOME, 6, Elthunder, SpType.SILVER) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = allBonus(battleUnit, battleUnit.adjacentUnits * 2, this)
    },
    Blarowl2(SkillName.Blarowl2, SkillType.BTOME, 10, Blarowl, SpType.PLUS, RefinedWeapon.RefineType.Range2) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = allBonus(battleUnit, battleUnit.adjacentUnits * 2, this)
    },
    Blarserpent(SkillName.Blarserpent, SkillType.BTOME, 8, Elthunder, SpType.SILVER) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = distantDef(battleUnit, enemy, 6, this)
    },
    Blarserpent2(SkillName.Blarserpent2, SkillType.BTOME, 12, Blarserpent, SpType.PLUS, RefinedWeapon.RefineType.Range2) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = distantDef(battleUnit, enemy, 6, this)
    },
    Thoron(SkillName.Thoron, SkillType.BTOME, 9, Elthunder, SpType.SILVER),
    Thoron2(SkillName.Thoron2, SkillType.BTOME, 13, Thoron, SpType.PLUS, RefinedWeapon.RefineType.Range2),
    BlueEgg(SkillName.BlueEgg, SkillType.BTOME, 7, Elthunder, SpType.SILVER),
    BlueEgg2(SkillName.BlueEgg2, SkillType.BTOME, 11, BlueEgg, SpType.PLUS, RefinedWeapon.RefineType.Range2),
    BlessedBouquet(SkillName.BlessedBouquet, SkillType.BTOME, 9, Elthunder, SpType.SILVER),
    BlessedBouquet2(SkillName.BlessedBouquet2, SkillType.BTOME, 12, BlessedBouquet, SpType.PLUS, RefinedWeapon.RefineType.Range2),
    SealifeTome(SkillName.SealifeTome, SkillType.BTOME, 8, Elthunder, SpType.SILVER),
    SealifeTome2(SkillName.SealifeTome2, SkillType.BTOME, 12, SealifeTome, SpType.PLUS, RefinedWeapon.RefineType.Range2),
    DancersScore(SkillName.DancersScore, SkillType.BTOME, 8, Elthunder, SpType.SILVER),
    DancersScore2(SkillName.DancersScore2, SkillType.BTOME, 12, DancersScore, SpType.PLUS, RefinedWeapon.RefineType.Range2),
    DarkAura(SkillName.DarkAura, SkillType.BTOME, 14, Thoron),
    Valaskjalf(SkillName.Valaskjalf, SkillType.BTOME, 14, Thoron) {
        override fun counterPlan(fightPlan: FightPlan, lv: Int): FightPlan = vantage(fightPlan, 2)
    },
    Aura(SkillName.Aura, SkillType.BTOME, 14, Thoron, SpType.LEGEND_W, RefinedWeapon.RefineType.Range2),
    DireThunder(SkillName.DireThunder, SkillType.BTOME, 9, Thoron) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBrave(armedHero, lv)
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = doubleAttack(battleUnit)
    },
    WeirdingTome(SkillName.WeirdingTome, SkillType.BTOME, 14, Thoron) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipSpd(armedHero, 3)
    },
    Thani(SkillName.Thani, SkillType.BTOME, 14, Thoron, effectiveAgainstMoveType = arrayOf(MoveType.CAVALRY, MoveType.ARMORED)) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipRes(armedHero, 3)
        override fun prevent(battleUnit: BattleUnit, damage: Int, source: BattleUnit, results: List<AttackResult>, lv: Int): Int =
                if ((source.armedHero.baseHero.moveType == MoveType.ARMORED || source.armedHero.baseHero.moveType == MoveType.CAVALRY)
                        && source.armedHero.effectiveRange == 2
                        && (!results.any { r -> r.side != battleUnit.side })) damage - damage * 3 / 10 else damage
    },
    Ivaldi(SkillName.Ivaldi, SkillType.BTOME, 14, Thoron) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipDef(armedHero, 3)
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = enemyFullHpBonus(battleUnit, enemy, 3, this)
    },
    BlueGift(SkillName.BlueGift, SkillType.BTOME, 8, Thoron, SpType.SILVER) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = antiRangedWeaponBuffBonus(battleUnit, enemy, 3, this)
    },
    BlueGift2(SkillName.BlueGift2, SkillType.BTOME, 12, BlueGift, SpType.PLUS, RefinedWeapon.RefineType.Range2) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = antiRangedWeaponBuffBonus(battleUnit, enemy, 3, this)
    },
    HuginnsEgg(SkillName.HuginnsEgg, SkillType.BTOME, 14, Thoron) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipRes(armedHero, 3)
    },
    WargodsTome(SkillName.WargodsTome, SkillType.BTOME, 14, Thoron),
    Mjolnir(SkillName.Mjolnir, SkillType.BTOME, 14, Thoron) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero)
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = spd(battleUnit, 6, this)
    },
    FreshBouquet(SkillName.FreshBouquet, SkillType.BTOME, 8, Thoron, SpType.SILVER),
    FreshBouquet2(SkillName.FreshBouquet2, SkillType.BTOME, 12, FreshBouquet, SpType.PLUS, RefinedWeapon.RefineType.Range2),
    JuicyWave(SkillName.JuicyWave, SkillType.BTOME, 10, Thoron, SpType.SILVER) {
        override fun attackPlan(fightPlan: FightPlan, lv: Int): FightPlan = desperation(fightPlan, 3)
    },
    JuicyWave2(SkillName.JuicyWave2, SkillType.BTOME, 12, JuicyWave, SpType.PLUS, RefinedWeapon.RefineType.Range2) {
        override fun attackPlan(fightPlan: FightPlan, lv: Int): FightPlan = desperation(fightPlan, 3)
    },
    Missiletainn(SkillName.Missiletainn, SkillType.BTOME, 14, Thoron) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero)
    },
    OdinsGrimoire(SkillName.OdinsGrimoire, SkillType.BTOME, 14, Blarblade2, SpType.LEGEND_W, RefinedWeapon.RefineType.Range2) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBlade(armedHero, lv)
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = bladeEffect(battleUnit, this)
    },
    Sagittae(SkillName.Sagittae, SkillType.BTOME, 14, Thoron) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipDef(armedHero, 3)
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = if (battleUnit.atk + 5 <= enemy.atk) allBonus(battleUnit, 5, this) else battleUnit
    },
    TacticalBolt(SkillName.TacticalBolt, SkillType.BTOME, 14, Blarraven, SpType.PLUS) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = equipRaven(battleUnit)
    },
    PrayerWheel(SkillName.WeirdingTome, SkillType.BTOME, 14, Thoron) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipSpd(armedHero, 3)
    },
    TomeOfThoron(SkillName.TomeOfThoron, SkillType.BTOME, 14, Thoron, SpType.LEGEND_W, RefinedWeapon.RefineType.Range2) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipSpd(armedHero, 3)
        override fun specialTriggered(battleUnit: BattleUnit, damage: Int): Int = wrath(battleUnit, damage, 3 * 25, this)
    },
    Blarblooms(SkillName.Blarblooms, SkillType.BTOME, 8, Thoron, SpType.SILVER){
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = if (battleUnit.adjacentUnits > 0) allBonus(battleUnit, 3, this) else battleUnit
    },
    Blarblooms2(SkillName.Blarblooms2, SkillType.BTOME, 12, Blarblooms, SpType.PLUS, RefinedWeapon.RefineType.Range2){
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = if (battleUnit.adjacentUnits > 0) allBonus(battleUnit, 3, this) else battleUnit
    },
    ;

    /**
     * nameは誤動作するので共通処理としてはvalueを使う。もっといい名前があるか？
     */
    override val value get() = name
}