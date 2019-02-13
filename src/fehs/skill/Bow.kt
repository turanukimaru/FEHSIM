package jp.blogspot.turanukimaru.fehs.skill

import jp.blogspot.turanukimaru.fehs.*

/**
 * スキル。武器
 */
enum class Bow(override val jp: SkillName, override val type: SkillType, override val level: Int = 0, override val preSkill: Skill = Skill.NONE, override val spType: SpType = SpType.LEGEND_W, override val refinedWeaponType: RefinedWeapon.RefineType = RefinedWeapon.RefineType.NONE, override val effectiveAgainstMoveType: Array<MoveType> = arrayOf(), override val effectiveAgainstWeaponType: Array<WeaponType> = arrayOf()) : Weapon {
    IronBow(SkillName.IronBow, SkillType.BOW, 4, Skill.NONE, SpType.IRON, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)),
    SteelBow(SkillName.SteelBow, SkillType.BOW, 6, IronBow, SpType.STEEL, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)),
    SilverBow(SkillName.SilverBow, SkillType.BOW, 9, SteelBow, SpType.SILVER, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)),
    SilverBow2(SkillName.SilverBow2, SkillType.BOW, 13, SilverBow, SpType.PLUS, RefinedWeapon.RefineType.Range2, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)),
    BraveBow(SkillName.BraveBow, SkillType.BOW, 4, SteelBow, SpType.SILVER, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBrave(armedHero, lv)
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = doubleAttack(battleUnit, this)
    },
    BraveBow2(SkillName.BraveBow2, SkillType.BOW, 7, BraveBow, SpType.PLUS, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBrave(armedHero, lv)
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = doubleAttack(battleUnit, this)
    },
    KillerBow(SkillName.KillerBow, SkillType.BOW, 5, SteelBow, SpType.SILVER, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero)
    },
    KillerBow2(SkillName.KillerBow2, SkillType.BOW, 9, KillerBow, SpType.PLUS, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero)
    },
    AssassinsBow(SkillName.AssassinsBow, SkillType.BOW, 7, SteelBow, SpType.SILVER, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = weaponBreaker(battleUnit, enemy, WeaponType.DAGGER, 3, this)
    },
    AssassinsBow2(SkillName.AssassinsBow2, SkillType.BOW, 11, AssassinsBow, SpType.PLUS, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = weaponBreaker(battleUnit, enemy, WeaponType.DAGGER, 3, this)
    },
    GuardBow2(SkillName.GuardBow2, SkillType.BOW, 12, AssassinsBow2, SpType.PLUS, RefinedWeapon.RefineType.Range2, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = distantDef(battleUnit, enemy, 6)
    },
    FiresweepBow(SkillName.FiresweepBow, SkillType.BOW, 7, SteelBow, SpType.SILVER, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = disableEachCounter(battleUnit, enemy, this)
    },
    FiresweepBow2(SkillName.FiresweepBow2, SkillType.BOW, 11, FiresweepBow, SpType.PLUS, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = disableEachCounter(battleUnit, enemy, this)
    },
    CupidArrow(SkillName.CupidArrow, SkillType.BOW, 8, SteelBow, SpType.SILVER, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)),
    CupidArrow2(SkillName.CupidArrow2, SkillType.BOW, 12, CupidArrow, SpType.PLUS, RefinedWeapon.RefineType.Range2, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)),
    RefreshingBolt(SkillName.RefreshingBolt, SkillType.BOW, 8, SteelBow, SpType.SILVER, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = fullHpBonus(battleUnit, 2, this)
    },
    RefreshingBolt2(SkillName.RefreshingBolt2, SkillType.BOW, 12, RefreshingBolt, SpType.PLUS, RefinedWeapon.RefineType.Range2, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = fullHpBonus(battleUnit, 2, this)
    },
    ClarissesBow(SkillName.ClarissesBow, SkillType.BOW, 7, SteelBow, SpType.SILVER, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)),
    ClarissesBow2(SkillName.ClarissesBow2, SkillType.BOW, 11, ClarissesBow, SpType.PLUS, RefinedWeapon.RefineType.Range2, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)),
    SlayingBow(SkillName.SlayingBow, SkillType.BOW, 8, SteelBow, SpType.SILVER, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero)
    },
    SlayingBow2(SkillName.SlayingBow2, SkillType.BOW, 12, SlayingBow, SpType.PLUS, RefinedWeapon.RefineType.Range2, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero)
    },
    Parthia(SkillName.Parthia, SkillType.BOW, 14, SilverBow, SpType.LEGEND_W, RefinedWeapon.RefineType.Range2, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = res(battleUnit, 2, this)
    },
    FujinYumi(SkillName.FujinYumi, SkillType.BOW, 14, SilverBow, SpType.LEGEND_W, RefinedWeapon.RefineType.Range2, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)),
    Nidhogg(SkillName.Nidhogg, SkillType.BOW, 14, SilverBow, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = allBonus(battleUnit, battleUnit.adjacentUnits * 2, this)
    },
    Mulagir(SkillName.Mulagir, SkillType.BOW, 14, SilverBow, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipSpd(armedHero, 3)
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = antiMagicBuffBonus(battleUnit, enemy, this)
    },
    MonstrousBow(SkillName.MonstrousBow, SkillType.BOW, 8, SteelBow, SpType.SILVER, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)),
    MonstrousBow2(SkillName.MonstrousBow2, SkillType.BOW, 12, MonstrousBow, SpType.PLUS, RefinedWeapon.RefineType.Range2, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)),
    HamaYa(SkillName.HamaYa, SkillType.BOW, 8, SteelBow, SpType.SILVER, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)),
    HamaYa2(SkillName.HamaYa2, SkillType.BOW, 12, HamaYa, SpType.PLUS, RefinedWeapon.RefineType.Range2, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)),
    Gratia(SkillName.Gratia, SkillType.BOW, 8, SteelBow, SpType.SILVER, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = antiRangedWeaponBuffBonus(battleUnit, enemy, 3, this)
    },
    Gratia2(SkillName.Gratia2, SkillType.BOW, 12, Gratia, SpType.PLUS, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = antiRangedWeaponBuffBonus(battleUnit, enemy, 3, this)
    },
    Skadi(SkillName.Skadi, SkillType.BOW, 14, SilverBow, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipSpd(armedHero, 3)
    },
    WarriorPrincess(SkillName.WarriorPrincess, SkillType.BOW, 14, SilverBow, effectiveAgainstMoveType = arrayOf(MoveType.FLIER, MoveType.ARMORED)) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipSpd(armedHero, 3)
    },
    SwiftMulagir(SkillName.SwiftMulagir, SkillType.BOW, 14, SilverBow, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipRes(armedHero, 3)
        //マップ実装時には敵ユニット数との判定が必要
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = if (battleUnit.adjacentUnits > 0) atkSpd(battleUnit, 5, this) else battleUnit
    },
    Cocobow(SkillName.Cocobow, SkillType.BOW, 8, SteelBow, SpType.SILVER, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = allBonus(battleUnit, 2, this)
    },
    Cocobow2(SkillName.Cocobow2, SkillType.BOW, 12, Cocobow, SpType.PLUS, RefinedWeapon.RefineType.Range1, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = allBonus(battleUnit, 2, this)
    },
    FishieBow(SkillName.FishieBow, SkillType.BOW, 10, SteelBow, SpType.SILVER, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)) {
        override fun attackPlan(fightPlan: FightPlan, lv: Int): FightPlan = desperation(fightPlan, 3)
    },
    FishieBow2(SkillName.FishieBow2, SkillType.BOW, 12, FishieBow, SpType.PLUS, RefinedWeapon.RefineType.Range2, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)) {
        override fun attackPlan(fightPlan: FightPlan, lv: Int): FightPlan = desperation(fightPlan, 3)
    },
    Thogn(SkillName.Thogn, SkillType.BOW, 14, SilverBow, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipSpd(armedHero, 3)
        //マップ実装時には敵ユニット数との判定が必要
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = if (enemy.armedHero.effectiveRange == 1) allBonus(battleUnit, 4) else battleUnit
    },
    ShiningBow(SkillName.ShiningBow, SkillType.BOW, 8, SteelBow, SpType.SILVER, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = defHigherThanResBonus(battleUnit, enemy, this)
    },
    ShiningBow2(SkillName.ShiningBow2, SkillType.BOW, 12, ShiningBow, SpType.PLUS, RefinedWeapon.RefineType.Range2, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = defHigherThanResBonus(battleUnit, enemy, this)
    },
    DevilishBow(SkillName.DevilishBow, SkillType.BOW, 8, SteelBow, SpType.SILVER, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = antiAccelerateCooldown(battleUnit, enemy, 11, this)
    },
    DevilishBow2(SkillName.DevilishBow2, SkillType.BOW, 12, ShiningBow, SpType.PLUS, RefinedWeapon.RefineType.Range2, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = antiAccelerateCooldown(battleUnit, enemy, 11, this)
    },
    KaburaYa(SkillName.KaburaYa, SkillType.BOW, 8, SteelBow, SpType.SILVER, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)),
    KaburaYa2(SkillName.KaburaYa2, SkillType.BOW, 12, KaburaYa, SpType.PLUS, RefinedWeapon.RefineType.Range2, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)),
    NilessBow (SkillName.NilessBow, SkillType.BOW, 14, KillerBow, SpType.LEGEND_W, RefinedWeapon.RefineType.Range2, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero)
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = defHigherThanResBonus(battleUnit, enemy, this)
    },
    ;

    /**
     * nameは誤動作するので共通処理としてはvalueを使う。もっといい名前があるか？
     * なお2を＋に置き換える。
     */
    override val value get() = name
}