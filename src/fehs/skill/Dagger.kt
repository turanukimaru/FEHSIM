package jp.blogspot.turanukimaru.fehs.skill

import jp.blogspot.turanukimaru.fehs.*

/**
 * スキル。武器
 */
enum class Dagger(override val jp: SkillName, override val type: SkillType, override val level: Int = 0, override val preSkill: Skill = Skill.NONE, override val spType: SpType = SpType.LEGEND_W, override val refinedWeaponType: RefinedWeapon.RefineType = RefinedWeapon.RefineType.NONE, override val effectiveAgainstMoveType: Array<MoveType> = arrayOf(), override val effectiveAgainstWeaponType: Array<WeaponType> = arrayOf()) : Weapon {
    IronDagger(SkillName.IronDagger, SkillType.DAGGER, 3, Skill.NONE, SpType.IRON),
    SteelDagger(SkillName.SteelDagger, SkillType.DAGGER, 5, IronDagger, SpType.STEEL),
    SilverDagger(SkillName.SilverDagger, SkillType.DAGGER, 7, SteelDagger, SpType.SILVER),
    SilverDagger2(SkillName.SilverDagger2, SkillType.DAGGER, 10, SilverDagger, SpType.PLUS, RefinedWeapon.RefineType.Range2),
    RogueDagger(SkillName.RogueDagger, SkillType.DAGGER, 4, SteelDagger, SpType.SILVER),
    RogueDagger2(SkillName.RogueDagger2, SkillType.DAGGER, 7, RogueDagger, SpType.PLUS, RefinedWeapon.RefineType.Range2),
    SmokeDagger(SkillName.SmokeDagger, SkillType.DAGGER, 6, SteelDagger, SpType.SILVER),
    SmokeDagger2(SkillName.SmokeDagger2, SkillType.DAGGER, 9, SmokeDagger, SpType.PLUS, RefinedWeapon.RefineType.Range2),
    PoisonDagger(SkillName.PoisonDagger, SkillType.DAGGER, 2, SteelDagger, SpType.SILVER, effectiveAgainstMoveType = arrayOf(MoveType.INFANTRY)),
    PoisonDagger2(SkillName.PoisonDagger2, SkillType.DAGGER, 5, PoisonDagger, SpType.PLUS, effectiveAgainstMoveType = arrayOf(MoveType.INFANTRY)),
    Seashell(SkillName.Seashell, SkillType.DAGGER, 7, SteelDagger, SpType.SILVER) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = fullHpBonus(battleUnit, 2, this)
    },
    Seashell2(SkillName.Seashell2, SkillType.DAGGER, 10, Seashell, SpType.PLUS, RefinedWeapon.RefineType.Range2) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = fullHpBonus(battleUnit, 2, this)
    },
    DancersFan(SkillName.DancersFan, SkillType.DAGGER, 7, SteelDagger, SpType.SILVER),
    DancersFan2(SkillName.DancersFan2, SkillType.DAGGER, 10, DancersFan, SpType.PLUS, RefinedWeapon.RefineType.Range2),
    DeathlyDagger(SkillName.DeathlyDagger, SkillType.DAGGER, 11, SilverDagger, SpType.LEGEND_W, RefinedWeapon.RefineType.Range2) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = attackPain(battleUnit, enemy, 7, this)
    },
    KittyPaddle(SkillName.KittyPaddle, SkillType.DAGGER, 5, SteelDagger, SpType.SILVER, effectiveAgainstWeaponType = arrayOf(WeaponType.RTOME, WeaponType.BTOME, WeaponType.GTOME)),
    KittyPaddle2(SkillName.KittyPaddle2, SkillType.DAGGER, 8, KittyPaddle, SpType.PLUS, effectiveAgainstWeaponType = arrayOf(WeaponType.RTOME, WeaponType.BTOME, WeaponType.GTOME)),
    KagamiMochi(SkillName.KagamiMochi, SkillType.DAGGER, 8, SteelDagger, SpType.SILVER) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero)
    },
    KagamiMochi2(SkillName.KagamiMochi2, SkillType.DAGGER, 12, KagamiMochi, SpType.PLUS, RefinedWeapon.RefineType.Range2) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero)
    },
    FeliciasPlate(SkillName.FeliciasPlate, SkillType.PENETRATE_DAGGER, 14, SilverDagger2, SpType.LEGEND_W, RefinedWeapon.RefineType.Range2),
    Peshkatz(SkillName.Peshkatz, SkillType.DAGGER, 14, SilverDagger),
    LethalCarrot(SkillName.LethalCarrot, SkillType.DAGGER, 8, SteelDagger, SpType.SILVER) {
        override fun specialTriggered(battleUnit: BattleUnit, damage: Int): Int = damage + 10
    },
    LethalCarrot2(SkillName.LethalCarrot2, SkillType.DAGGER, 12, LethalCarrot, SpType.PLUS, RefinedWeapon.RefineType.Range2) {
        override fun specialTriggered(battleUnit: BattleUnit, damage: Int): Int = damage + 10
    },
    BarbShuriken(SkillName.BarbShuriken, SkillType.DAGGER, 8, SteelDagger, SpType.SILVER) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero)
    },
    BarbShuriken2(SkillName.BarbShuriken2, SkillType.DAGGER, 12, BarbShuriken, SpType.PLUS, RefinedWeapon.RefineType.Range2) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero)
    },
    TheCleaner(SkillName.TheCleaner, SkillType.DAGGER, 8, SteelDagger, SpType.SILVER) {
        override fun stateFlat(battleUnit: BattleUnit, enemy: BattleUnit): Int = enemy.totalBuff
    },
    TheCleaner2(SkillName.TheCleaner2, SkillType.DAGGER, 12, TheCleaner, SpType.PLUS, RefinedWeapon.RefineType.Range2) {
        override fun stateFlat(battleUnit: BattleUnit, enemy: BattleUnit): Int = enemy.totalBuff
    },
    Starfish(SkillName.Starfish, SkillType.DAGGER, 10, SteelDagger, SpType.SILVER) {
        override fun attackPlan(fightPlan: FightPlan, lv: Int): FightPlan = desperation(fightPlan, 3)
    },
    Starfish2(SkillName.Starfish2, SkillType.DAGGER, 12, Starfish, SpType.PLUS, RefinedWeapon.RefineType.Range2) {
        override fun attackPlan(fightPlan: FightPlan, lv: Int): FightPlan = desperation(fightPlan, 3)
    },
    CloudMaiougi(SkillName.CloudMaiougi, SkillType.DAGGER, 8, SteelDagger, SpType.SILVER, effectiveAgainstWeaponType = arrayOf(WeaponType.DRAGON)) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = hardyBearing(battleUnit, enemy, 3, this)
    },
    CloudMaiougi2(SkillName.CloudMaiougi2, SkillType.DAGGER, 12, CloudMaiougi, SpType.PLUS, RefinedWeapon.RefineType.Range2, effectiveAgainstWeaponType = arrayOf(WeaponType.DRAGON)) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = hardyBearing(battleUnit, enemy, 3, this)
    },
    SkyMaiougi(SkillName.SkyMaiougi, SkillType.DAGGER, 8, SteelDagger, SpType.SILVER, effectiveAgainstMoveType = arrayOf(MoveType.ARMORED)) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = hardyBearing(battleUnit, enemy, 3, this)
    },
    SkyMaiougi2(SkillName.SkyMaiougi2, SkillType.DAGGER, 12, SkyMaiougi, SpType.PLUS, RefinedWeapon.RefineType.Range2, effectiveAgainstMoveType = arrayOf(MoveType.ARMORED)) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = hardyBearing(battleUnit, enemy, 3, this)
    },
    DuskUchiwa(SkillName.SkyMaiougi, SkillType.DAGGER, 8, SteelDagger, SpType.SILVER, effectiveAgainstMoveType = arrayOf(MoveType.CAVALRY)) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = hardyBearing(battleUnit, enemy, 3, this)
    },
    DuskUchiwa2(SkillName.SkyMaiougi2, SkillType.DAGGER, 12, DuskUchiwa, SpType.PLUS, RefinedWeapon.RefineType.Range2, effectiveAgainstMoveType = arrayOf(MoveType.CAVALRY)) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = hardyBearing(battleUnit, enemy, 3, this)
    },
    HoarfrostKnife(SkillName.HoarfrostKnife, SkillType.DAGGER, 14, SilverDagger) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero)
        //相手が反撃可能かを判定した後判定
        override fun effectedAttackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit {
            if (enemy.effectiveRange == 1) {
                def(battleUnit, 20, this)
                if (enemy.counterAllRange) {
                    followupable(battleUnit, 10, this)
                }
            }
            return battleUnit
        }
    },
    BottledJuice(SkillName.BottledJuice, SkillType.DAGGER, 8, SteelDagger, SpType.SILVER) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = antiAccelerateCooldown(battleUnit, enemy, 11, this)
    },
    BottledJuice2(SkillName.BottledJuice2, SkillType.DAGGER, 12, DuskUchiwa, SpType.PLUS, RefinedWeapon.RefineType.Range2) {
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = antiAccelerateCooldown(battleUnit, enemy, 11, this)
    },
    Sylgr(SkillName.Sylgr, SkillType.DAGGER, 14, SilverDagger2) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipSpd(armedHero, 3)
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = sylgr(battleUnit, enemy, this)

    },
    Lyfjaberg(SkillName.Lyfjaberg, SkillType.DAGGER, 14, SilverDagger) {
        override fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = equipRes(armedHero, 3)
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = if (battleUnit.hp >= battleUnit.armedHero.maxHp / 2) fightHpLoss(atkSpd(battleUnit, 4, this), 4, this) else battleUnit

        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = if (battleUnit.hp >= battleUnit.armedHero.maxHp / 2) antiFollowup(battleUnit, enemy, this) else battleUnit
    },
    GoodieBoot(SkillName.GoodieBoot, SkillType.DAGGER, 8, SteelDagger, SpType.SILVER) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = defRes(battleUnit, battleUnit.adjacentUnits * 2, this)
    },
    GoodieBoot2(SkillName.GoodieBoot2, SkillType.DAGGER, 12, GoodieBoot, SpType.PLUS, RefinedWeapon.RefineType.Range2) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = defRes(battleUnit, battleUnit.adjacentUnits * 2, this)
    },
    RedHotDucks(SkillName.RedHotDucks, SkillType.DAGGER, 12, SteelDagger, SpType.PLUS, RefinedWeapon.RefineType.Range2) {
        override fun stateFlat(battleUnit: BattleUnit, enemy: BattleUnit): Int = spdFlat(battleUnit, enemy)
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit {
            battleUnit.addSkillText(SkillText(this, SkillBaseText.Damage, spdFlat(battleUnit, enemy).toString()))
            return battleUnit
        }
    },
    RedHotDucks2(SkillName.RedHotDucks2, SkillType.DAGGER, 12, RedHotDucks, SpType.PLUS, RefinedWeapon.RefineType.Range2) {
        override fun stateFlat(battleUnit: BattleUnit, enemy: BattleUnit): Int = spdFlat(battleUnit, enemy)
        override fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit {
            battleUnit.addSkillText(SkillText(this, SkillBaseText.Damage, spdFlat(battleUnit, enemy).toString()))
            return battleUnit
        }
    },
    SplashyBucket(SkillName.SplashyBucket, SkillType.DAGGER, 8, SteelDagger, SpType.SILVER, effectiveAgainstWeaponType = arrayOf(WeaponType.DRAGON)) {
        override fun effectedFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = antiPenetrate(battleUnit, enemy,  this)
    },
    SplashyBucket2(SkillName.SplashyBucket2, SkillType.DAGGER, 12, SplashyBucket, SpType.PLUS, RefinedWeapon.RefineType.Range2, effectiveAgainstWeaponType = arrayOf(WeaponType.DRAGON)) {
        override fun effectedFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = antiPenetrate(battleUnit, enemy, this)
    },
    OuchPouch(SkillName.OuchPouch, SkillType.DAGGER, 8, SteelDagger, SpType.PLUS),
    OuchPouch2(SkillName.OuchPouch2, SkillType.DAGGER, 12, OuchPouch, SpType.PLUS, RefinedWeapon.RefineType.Range2),
    PegasusCarrot(SkillName.PegasusCarrot, SkillType.DAGGER, 8, SteelDagger, SpType.PLUS, RefinedWeapon.RefineType.Range2, effectiveAgainstMoveType = arrayOf(MoveType.ARMORED)) {
        override fun effectedFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit {
            if(battleUnit.colorAdvantage(enemy) == 1){
                battleUnit.addSkillText(SkillText(this, SkillBaseText.NullAntiFollowupAttack))
                battleUnit.antiFollowup = 0
            }
            return battleUnit
        }
    },
    PegasusCarrot2(SkillName.PegasusCarrot2, SkillType.DAGGER, 12, SteelDagger, SpType.PLUS, RefinedWeapon.RefineType.Range2, effectiveAgainstMoveType = arrayOf(MoveType.ARMORED)) {
        override fun effectedFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit {
            if(battleUnit.colorAdvantage(enemy) == 1){
                battleUnit.addSkillText(SkillText(this, SkillBaseText.NullAntiFollowupAttack))
                battleUnit.antiFollowup = 0
            }
            return battleUnit
        }
    },
    ;

    /**
     * nameは誤動作するので共通処理としてはvalueを使う。もっといい名前があるか？
     * なお2を＋に置き換える。
     */
    override val value get() = name
}