package jp.blogspot.turanukimaru.fehs.skill

import jp.blogspot.turanukimaru.fehs.*

/**
 * スキル。武器
 */
enum class Lance(override val jp: SkillName, override val type: SkillType, override val level: Int = 0, override val preSkill: Skill = Skill.NONE, override val spType: SpType = SpType.LEGEND_W, override val refinedWeaponType: RefinedWeapon.RefineType = RefinedWeapon.RefineType.NONE, override val effectiveAgainstMoveType: Array<MoveType> = arrayOf(), override val effectiveAgainstWeaponType: Array<WeaponType> = arrayOf()) : Weapon {
    IronLance(SkillName.IronLance, SkillType.LANCE, 6, Skill.NONE, SpType.IRON),
    SteelLance(SkillName.SteelLance, SkillType.LANCE, 8, IronLance, SpType.STEEL),
    SilverLance(SkillName.SilverLance, SkillType.LANCE, 11, SteelLance, SpType.SILVER),
    SilverLance2(SkillName.SilverLance2, SkillType.LANCE, 15, SilverLance, SpType.PLUS, RefinedWeapon.RefineType.Range1),
    KillerLance(SkillName.KillerLance, SkillType.LANCE, 7, SteelLance, SpType.SILVER) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero)
    },
    KillerLance2(SkillName.KillerLance2, SkillType.LANCE, 11, KillerLance, SpType.PLUS) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero)
    },
    BraveLance(SkillName.BraveLance, SkillType.LANCE, 5, SteelLance, SpType.SILVER) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBrave(armedHero)
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = doubleAttack(battleUnit, this)
    },
    BraveLance2(SkillName.BraveLance2, SkillType.LANCE, 8, BraveLance, SpType.PLUS) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBrave(armedHero)
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = doubleAttack(battleUnit, this)
    },
    SapphireLance(SkillName.SapphireLance, SkillType.LANCE, 8, SteelLance, SpType.SILVER) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = colorAdvantage(battleUnit, enemy, 3, this)
    },
    SapphireLance2(SkillName.SapphireLance2, SkillType.LANCE, 12, SapphireLance, SpType.PLUS) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = colorAdvantage(battleUnit, enemy, 3, this)
    },
    HeavySpear(SkillName.HeavySpear, SkillType.LANCE, 8, SteelLance, SpType.SILVER, effectiveAgainstMoveType = arrayOf(MoveType.ARMORED)),
    HeavySpear2(SkillName.HeavySpear2, SkillType.LANCE, 12, HeavySpear, SpType.PLUS, effectiveAgainstMoveType = arrayOf(MoveType.ARMORED)),
    SlayingSpear(SkillName.SlayingSpear, SkillType.LANCE, 10, SteelLance, SpType.SILVER, effectiveAgainstMoveType = arrayOf(MoveType.ARMORED)),
    SlayingSpear2(SkillName.SlayingSpear2, SkillType.LANCE, 14, SlayingSpear, SpType.PLUS, RefinedWeapon.RefineType.Range1, effectiveAgainstMoveType = arrayOf(MoveType.ARMORED)),
    CarrotLance(SkillName.CarrotLance, SkillType.LANCE, 9, SteelLance, SpType.SILVER) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = attackHeal(battleUnit, 4, this)
    },
    CarrotLance2(SkillName.CarrotLance2, SkillType.LANCE, 13, CarrotLance, SpType.PLUS, RefinedWeapon.RefineType.Range1) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = attackHeal(battleUnit, 4, this)
    },
    FirstBite(SkillName.FirstBite, SkillType.LANCE, 10, SteelLance, SpType.SILVER),
    FirstBite2(SkillName.FirstBite2, SkillType.LANCE, 14, FirstBite, SpType.PLUS, RefinedWeapon.RefineType.Range1),
    FiresweepLance(SkillName.FiresweepLance, SkillType.LANCE, 11, SteelLance, SpType.SILVER) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = disableEachCounter(battleUnit, enemy, this)
    },
    FiresweepLance2(SkillName.FiresweepLance2, SkillType.LANCE, 15, FiresweepLance) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = disableEachCounter(battleUnit, enemy, this)
    },
    DeftHarpoon(SkillName.DeftHarpoon, SkillType.LANCE, 10, SteelLance, SpType.SILVER) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = fullHpBonus(battleUnit, 2, this)
    },
    DeftHarpoon2(SkillName.DeftHarpoon2, SkillType.LANCE, 14, DeftHarpoon, SpType.PLUS, RefinedWeapon.RefineType.Range1) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = fullHpBonus(battleUnit, 2, this)
    },
    Ridersbane(SkillName.Ridersbane, SkillType.LANCE, 10, SteelLance, SpType.SILVER, effectiveAgainstMoveType = arrayOf(MoveType.CAVALRY)),
    Ridersbane2(SkillName.Ridersbane2, SkillType.LANCE, 14, Ridersbane, SpType.PLUS, RefinedWeapon.RefineType.Range1, effectiveAgainstMoveType = arrayOf(MoveType.CAVALRY)),
    BerkutsLance(SkillName.BerkutsLance, SkillType.LANCE, 10, SteelLance, SpType.SILVER) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = res(battleUnit, 4, this)
    },
    BerkutsLance2(SkillName.BerkutsLance2, SkillType.LANCE, 14, BerkutsLance, SpType.PLUS, RefinedWeapon.RefineType.Range1) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = res(battleUnit, 4, this)
    },
    SlayingLance(SkillName.SlayingLance, SkillType.LANCE, 10, SteelLance, SpType.SILVER) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero)
    },
    SlayingLance2(SkillName.SlayingLance2, SkillType.LANCE, 14, SlayingLance, SpType.PLUS, RefinedWeapon.RefineType.Range1) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero)
    },
    Fensalir(SkillName.Fensalir, SkillType.LANCE, 16, SilverLance, SpType.LEGEND_W, RefinedWeapon.RefineType.Range1),
    Siegmund(SkillName.Siegmund, SkillType.LANCE, 16, SilverLance, SpType.LEGEND_W, RefinedWeapon.RefineType.Range1),
    Gradivus(SkillName.Gradivus, SkillType.LANCE, 16, SilverLance) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = counterAllRange(battleUnit, this)
    },
    Vidofinir(SkillName.Vidofnir, SkillType.LANCE, 16, SilverLance) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit {
            val weapon = enemy.armedHero.baseHero.weaponType
            if (weapon == WeaponType.SWORD || weapon == WeaponType.LANCE || weapon == WeaponType.AXE) {
                def(battleUnit, 7, this)
            }
            return battleUnit
        }
    },
    CursedLance(SkillName.CursedLance, SkillType.LANCE, 16, SilverLance) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(equipAtk(equipSpd(armedHero, 2), 2))
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = fightHpLoss(battleUnit, 4, this)
    },
    Geirskogul(SkillName.Geirskogul, SkillType.LANCE, 16, SilverLance) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipDef(armedHero, 3)
    },
    Leiptr(SkillName.Leiptr, SkillType.LANCE, 16, SilverLance) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = counterAllRange(battleUnit, this)
    },
    BrightNaginata(SkillName.BrightNaginata, SkillType.LANCE, 16, SilverLance) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = atkDef(battleUnit, 4, this)
    },
    Tannenboom(SkillName.Tannenboom, SkillType.LANCE, 10, SteelLance, SpType.SILVER) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = allBonus(battleUnit, 2, this)
    },
    Tannenboom2(SkillName.Tannenboom2, SkillType.LANCE, 14, Tannenboom, SpType.PLUS, RefinedWeapon.RefineType.Range1) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = allBonus(battleUnit, 2, this)
    },
    CasaBlanca(SkillName.CasaBlanca, SkillType.LANCE, 10, SteelLance, SpType.SILVER) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = antiRangedWeaponBuffBonus(battleUnit, enemy, 3, this)
    },
    CasaBlanca2(SkillName.CasaBlanca2, SkillType.LANCE, 14, CasaBlanca, SpType.PLUS) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = antiRangedWeaponBuffBonus(battleUnit, enemy, 3, this)
    },
    HinokasSpear(SkillName.HinokasSpear, SkillType.LANCE, 16, SilverLance, SpType.LEGEND_W, RefinedWeapon.RefineType.Range1) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = if (battleUnit.adjacentUnits > 0) atkSpd(battleUnit, 4, this) else battleUnit
    },
    FlameSiegmund(SkillName.FlameSiegmund, SkillType.LANCE, 16, SilverLance) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipAtk(armedHero, 3)
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = followupable(battleUnit, 10, this)//本来は敵と味方の数を比較するべきなのだが…
    },
    HarmonicLance(SkillName.HarmonicLance, SkillType.LANCE, 9, SteelLance, SpType.SILVER) {
        override fun specialTriggered(battleUnit: BattleUnit, damage: Int): Int = damage + 10
    },
    HarmonicLance2(SkillName.HarmonicLance2, SkillType.LANCE, 13, HarmonicLance, SpType.PLUS, refinedWeaponType = RefinedWeapon.RefineType.Range1) {
        override fun specialTriggered(battleUnit: BattleUnit, damage: Int): Int = damage + 10
    },
    Rhomphaia(SkillName.Rhomphaia, SkillType.LANCE, 16, SilverLance2, SpType.LEGEND_W, RefinedWeapon.RefineType.Range1, effectiveAgainstMoveType = arrayOf(MoveType.CAVALRY, MoveType.ARMORED)),
    ShellLance(SkillName.ShellLance, SkillType.LANCE, 10, SteelLance, SpType.SILVER) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = allBonus(battleUnit, 2, this)
    },
    ShellLance2(SkillName.ShellLance2, SkillType.LANCE, 14, ShellLance, SpType.PLUS, refinedWeaponType = RefinedWeapon.RefineType.Range1) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = allBonus(battleUnit, 2, this)
    },
    DauntlessLance(SkillName.DauntlessLance, SkillType.LANCE, 16, SlayingSpear2, SpType.LEGEND_W, RefinedWeapon.RefineType.Range1, effectiveAgainstMoveType = arrayOf(MoveType.ARMORED)) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero)
    },
    ReprisalLance(SkillName.ReprisalLance, SkillType.LANCE, 10, SteelLance, SpType.SILVER) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = atk(battleUnit, 6, this)
    },
    ReprisalLance2(SkillName.ReprisalLance2, SkillType.LANCE, 14, ReprisalLance, SpType.PLUS, refinedWeaponType = RefinedWeapon.RefineType.Range1) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = atk(battleUnit, 6, this)
    },
    Maltet(SkillName.Maltet, SkillType.LANCE, 16, SilverLance, SpType.LEGEND_W) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero)
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = followupable(battleUnit, 5, this)
    },
    GaeBolg(SkillName.GaeBolg, SkillType.LANCE, 16, SilverLance, SpType.LEGEND_W) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = if (enemy.armedHero.baseHero.moveType == MoveType.INFANTRY || enemy.armedHero.baseHero.moveType == MoveType.ARMORED || enemy.armedHero.baseHero.moveType == MoveType.CAVALRY) atkDef(battleUnit, 5) else battleUnit
    },
    ShannasLance(SkillName.ShannasLance, SkillType.LANCE, 16, KillerLance, SpType.LEGEND_W, RefinedWeapon.RefineType.Range1) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero)
    },
    FlorinasLance(SkillName.FlorinasLance, SkillType.LANCE, 16, SlayingSpear, SpType.LEGEND_W, RefinedWeapon.RefineType.Range1, effectiveAgainstMoveType = arrayOf(MoveType.ARMORED)),
    WhitewingLance(SkillName.WhitewingLance, SkillType.LANCE, 16, KillerLance, SpType.LEGEND_W, RefinedWeapon.RefineType.Range1) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero)
    },
    WhitewingSpear(SkillName.WhitewingSpear, SkillType.LANCE, 16, SlayingSpear, SpType.LEGEND_W, RefinedWeapon.RefineType.Range1, effectiveAgainstMoveType = arrayOf(MoveType.ARMORED)),
    FestiveSiegmund(SkillName.FestiveSiegmund, SkillType.LANCE, 16, SilverLance) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero)
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = if (battleUnit.adjacentUnits == 0) allBonus(battleUnit, 4, this) else battleUnit
    },
    Wagasa(SkillName.Wagasa, SkillType.LANCE, 10, SteelLance, SpType.SILVER),
    Wagasa2(SkillName.Wagasa2, SkillType.LANCE, 14, Wagasa, SpType.PLUS, RefinedWeapon.RefineType.Range1),
    ItsCurtains(SkillName.Wagasa, SkillType.LANCE, 10, SteelLance, SpType.SILVER),
    ItsCurtains2(SkillName.Wagasa2, SkillType.LANCE, 14, ItsCurtains, SpType.PLUS, RefinedWeapon.RefineType.Range1),
    OborosSpear(SkillName.OborosSpear, SkillType.LANCE, 16, HeavySpear, SpType.PLUS, RefinedWeapon.RefineType.Range1, effectiveAgainstMoveType = arrayOf(MoveType.ARMORED)),
    Vanguard(SkillName.Vanguard, SkillType.LANCE, 10, SteelLance, SpType.SILVER) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = def(battleUnit, 7, this)
    },
    Vanguard2(SkillName.Vanguard2, SkillType.LANCE, 14, Vanguard, SpType.PLUS, RefinedWeapon.RefineType.Range1) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = def(battleUnit, 7, this)
    },
    FlashingCarrot(SkillName.FlashingCarrot, SkillType.LANCE, 10, SteelLance, SpType.SILVER) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = if (enemy.hp == enemy.armedHero.maxHp) allBonus(battleUnit, 2, this) else battleUnit
    },
    FlashingCarrot2(SkillName.FlashingCarrot2, SkillType.LANCE, 14, FlashingCarrot, SpType.PLUS, RefinedWeapon.RefineType.Range1) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = if (enemy.hp == enemy.armedHero.maxHp) allBonus(battleUnit, 2, this) else battleUnit
    },
    ;


    /**
     * nameは誤動作するので共通処理としてはvalueを使う。もっといい名前があるか？
     * なお2を＋に置き換える。
     */
    override val value get() = name
}