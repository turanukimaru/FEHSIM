package jp.blogspot.turanukimaru.fehs.skill

import jp.blogspot.turanukimaru.fehs.*

/**
 * スキル。武器
 */
enum class Rtome(override val jp: SkillName, override val type: SkillType, override val level: Int = 0, override val preSkill: Skill = Skill.NONE, override val spType: SpType = SpType.LEGEND_W, override val refinedWeaponType: RefinedWeapon.RefineType = RefinedWeapon.RefineType.NONE, override val effectiveAgainstMoveType: Array<MoveType> = arrayOf(), override val effectiveAgainstWeaponType: Array<WeaponType> = arrayOf()) : Weapon {
    Flux(SkillName.Flux, SkillType.RTOME, 4, Skill.NONE, SpType.IRON),
    Fire(SkillName.Fire, SkillType.RTOME, 4, Skill.NONE, SpType.IRON),
    Ruin(SkillName.Ruin, SkillType.RTOME, 6, Flux, SpType.STEEL),
    Elfire(SkillName.Elfire, SkillType.RTOME, 6, Fire, SpType.STEEL),
    Rauorwolf(SkillName.Rauorwolf, SkillType.RTOME, 10, Elfire, SpType.SILVER, effectiveAgainstMoveType = arrayOf(MoveType.CAVALRY)),
    Rauorwolf2(SkillName.Rauorwolf2, SkillType.RTOME, 10, Rauorwolf, effectiveAgainstMoveType = arrayOf(MoveType.CAVALRY)),
    KeenRauorwolf2(SkillName.KeenRauorwolf2, SkillType.RTOME, 12, Rauorwolf2, SpType.PLUS, RefinedWeapon.RefineType.Range2, effectiveAgainstMoveType = arrayOf(MoveType.CAVALRY)),
    Rauorraven(SkillName.Rauorraven, SkillType.RTOME, 7, Elfire, SpType.SILVER) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = equipRaven(battleUnit)
    },
    Rauorraven2(SkillName.Rauorraven2, SkillType.RTOME, 11, Rauorraven, SpType.PLUS) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = equipRaven(battleUnit)
    },
    Rauorblade(SkillName.Rauorblade, SkillType.RTOME, 9, Elfire, SpType.SILVER) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBlade(armedHero, lv)
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = bladeEffect(battleUnit)
    },
    Rauorblade2(SkillName.Rauorblade2, SkillType.RTOME, 13, Rauorblade, SpType.PLUS) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBlade(armedHero, lv)
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = bladeEffect(battleUnit)
    },
    Rauorowl(SkillName.Rauorowl, SkillType.RTOME, 6, Elfire, SpType.SILVER) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = allBonus(battleUnit, battleUnit.adjacentUnits * 2,this)
    },
    Rauorowl2(SkillName.Rauorowl2, SkillType.RTOME, 10, Rauorowl, SpType.PLUS, RefinedWeapon.RefineType.Range2) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = allBonus(battleUnit, battleUnit.adjacentUnits * 2,this)
    },
    Fenrir(SkillName.Fenrir, SkillType.RTOME, 9, Elfire, SpType.SILVER),
    Fenrir2(SkillName.Fenrir2, SkillType.RTOME, 13, Fenrir, SpType.PLUS, RefinedWeapon.RefineType.Range2),
    Bolganone(SkillName.Bolganone, SkillType.RTOME, 9, Elfire, SpType.SILVER),
    Bolganone2(SkillName.Bolganone2, SkillType.RTOME, 13, Bolganone, SpType.PLUS, RefinedWeapon.RefineType.Range2),
    TomatoTome(SkillName.TomatoTome, SkillType.RTOME, 8, Elfire, SpType.SILVER),
    TomatoTome2(SkillName.TomatoTome2, SkillType.RTOME, 12, TomatoTome, SpType.PLUS, RefinedWeapon.RefineType.Range2),
    Brynhildr(SkillName.Brynhildr, SkillType.RTOME, 14, Bolganone, SpType.LEGEND_W, RefinedWeapon.RefineType.Range2),
    Cymbeline(SkillName.Cymbeline, SkillType.RTOME, 14, Bolganone, SpType.LEGEND_W, RefinedWeapon.RefineType.Range2),
    Ragnarok(SkillName.Ragnarok, SkillType.RTOME, 14, Bolganone) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = fullHpAtkSpdBonus(battleUnit, 5, 5,this)
    },
    Valflame(SkillName.Valflame, SkillType.RTOME, 14, Bolganone),
    Grimoire(SkillName.Grimoire, SkillType.RTOME, 14, Bolganone),
    Candelabra(SkillName.Candelabra, SkillType.RTOME, 8, Elfire, SpType.SILVER) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = allBonus(battleUnit, 2,this)
    },
    Candelabra2(SkillName.Candelabra2, SkillType.RTOME, 12, Candelabra, SpType.PLUS, RefinedWeapon.RefineType.Range2) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = allBonus(battleUnit, 2,this)
    },
    Gleipnir(SkillName.Gleipnir, SkillType.RTOME, 14, Bolganone) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipRes(armedHero, 3)
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = enemyFullHpBonus(battleUnit, enemy, 3,this)
    },
    Naglfar(SkillName.Naglfar, SkillType.RTOME, 14, Bolganone) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = equipRaven(battleUnit)
    },
    Forblaze(SkillName.Forblaze, SkillType.RTOME, 14, Bolganone2, SpType.LEGEND_W, RefinedWeapon.RefineType.Range2),
    Loptous(SkillName.Loptous, SkillType.BTOME, 14, Bolganone) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipRes(armedHero, 3)
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit {
            if (enemy.armedHero.weapon.effectiveAgainstWeaponType.contains(WeaponType.DRAGON)) {
                battleUnit.addSkillText(SkillText(this, SkillBaseText.EffectiveAgainst))
                enemy.effectiveAgainst = EffectiveAgainst.DRAGON
            } else {
                battleUnit.addSkillText(SkillText(this, SkillBaseText.AtkReduce6))
                enemy.atkEffect -= 6
            }
            return battleUnit
        }
    },
    GrimasTruth(SkillName.GrimasTruth, SkillType.GTOME, 14, Bolganone) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipDef(armedHero, 3)
    },
    MuspellFireposy(SkillName.MuspellFireposy, SkillType.RTOME, 14, Bolganone) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipSpd(armedHero, 3)
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = atkSpd(battleUnit, battleUnit.adjacentUnits * 2,this)
    },
    FruitOfIdunn(SkillName.FruitOfIdunn, SkillType.RTOME, 14, Bolganone) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipSpd(armedHero, 3)
    },
    ReesesTome(SkillName.ReesesTome, SkillType.RTOME, 14, Bolganone2, SpType.LEGEND_W, RefinedWeapon.RefineType.Range2) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = allBonus(battleUnit, battleUnit.adjacentUnits * 2,this)
    },
    DawnSuzu(SkillName.DawnSuzu, SkillType.RTOME, 14, Bolganone2, effectiveAgainstMoveType = arrayOf(MoveType.CAVALRY, MoveType.ARMORED)) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipAtk(armedHero, 3)
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = hardyBearing(battleUnit, enemy, 3,this)
    },
    AversasNight(SkillName.AversasNight, SkillType.RTOME, 14, Bolganone2) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipRes(armedHero, 3)
    },
    BookOfDreams(SkillName.BookOfDreams, SkillType.RTOME, 14, Bolganone2) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipAtk(armedHero, 3)
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = adjacentDebuff(battleUnit, enemy, 4,this)
    },
    Imhullu(SkillName.Imhullu, SkillType.BTOME, 14, Bolganone) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipRes(armedHero, 3)
    },
    ;

    /**
     * nameは誤動作するので共通処理としてはvalueを使う。もっといい名前があるか？
     * なお2を＋に置き換える。
     */
    override val value get() = name
}