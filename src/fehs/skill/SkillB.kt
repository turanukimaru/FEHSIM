package jp.blogspot.turanukimaru.fehs.skill

import jp.blogspot.turanukimaru.fehs.*

/**
 * スキル。B
 */
enum class SkillB(override val jp: SkillName, override val type: SkillType = SkillType.B, override val level: Int = 0, override val preSkill: Skill = Skill.NONE, override val maxLevel: Int = 3, override val spType: SpType = SpType.BASE50) : Skill {
    SwordBreaker(SkillName.SwordBreaker) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = weaponBreaker(battleUnit, enemy, WeaponType.SWORD, lv, this)
    },
    LanceBreaker(SkillName.LanceBreaker) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = weaponBreaker(battleUnit, enemy, WeaponType.LANCE, lv, this)
    },
    AxeBreaker(SkillName.AxeBreaker) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = weaponBreaker(battleUnit, enemy, WeaponType.AXE, lv, this)
    },
    //弓殺しは無色限定
    BowBreaker(SkillName.BowBreaker) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = weaponBreaker(battleUnit, enemy, WeaponType.BOW, lv, 0, this)
    },
    DaggerBreaker(SkillName.DaggerBreaker) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = weaponBreaker(battleUnit, enemy, WeaponType.DAGGER, lv, 0, this)
    },
    RTomeBreaker(SkillName.RTomeBreaker) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = weaponBreaker(battleUnit, enemy, WeaponType.RTOME, lv, this)
    },
    GTomeBreaker(SkillName.GTomeBreaker) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = weaponBreaker(battleUnit, enemy, WeaponType.GTOME, lv, this)
    },
    BTomeBreaker(SkillName.BTomeBreaker) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = weaponBreaker(battleUnit, enemy, WeaponType.BTOME, lv, this)
    },
    WaryFighter(SkillName.WaryFighter, spType = SpType.BASE60) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = eachNofollowupable(battleUnit, enemy, lv, this)
    },
    //あれ？LVの考慮忘れてるわ
    BoldFighter(SkillName.BoldFighter, spType = SpType.BASE60) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = accelerateAttackCooldown(followupable(battleUnit, 10, this), 11, this)
    },
    VengefulFighter(SkillName.VengefulFighter, spType = SpType.BASE60) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = accelerateAttackCooldown(followupable(battleUnit, 5, this), 6, this)
    },
    SpecialFighter(SkillName.SpecialFighter, spType = SpType.BASE60) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = accelerateAttackCooldown(antiAccelerateCooldown(battleUnit, enemy, lv * 2, this), lv * 2, this)
    },
    Desperation(SkillName.Desperation) {
        override fun attackPlan(fightPlan: FightPlan, lv: Int): FightPlan = desperation(fightPlan, lv)
    },
    QuickRiposte(SkillName.QuickRiposte, spType = SpType.BASE60) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = followupable(battleUnit, lv, this)
    },
    BrashAssault(SkillName.BrashAssault) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = brashAssault(battleUnit, enemy, (lv * 10 + 20), this)
    },
    Windsweep(SkillName.Windsweep, spType = SpType.BASE60) {
        override fun effectedAttackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = windsweep(battleUnit, enemy, lv, this)
        override fun attackPlan(fightPlan: FightPlan, lv: Int): FightPlan = noFollowupAttack(fightPlan)
    },
    Watersweep(SkillName.Watersweep, spType = SpType.BASE60) {
        override fun effectedAttackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = watersweep(battleUnit, enemy, lv, this)
        override fun attackPlan(fightPlan: FightPlan, lv: Int): FightPlan = noFollowupAttack(fightPlan)
    },
    DullClose(SkillName.DullClose, spType = SpType.BASE60) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = antiMeleeWeaponBuffBonus(battleUnit, enemy, lv, this)
    },
    DullRanged(SkillName.DullRanged, spType = SpType.BASE60) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = antiRangedWeaponBuffBonus(battleUnit, enemy, lv, this)
    },
    WrathfulStaff(SkillName.WrathfulStaff, spType = SpType.BASE60) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = wrathfulStaff(battleUnit, enemy, lv, this)
    },
    DazzlingStaff(SkillName.DazzlingStaff, spType = SpType.BASE60) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = dazzling(battleUnit, enemy, lv, this)

    },
    Vantage(SkillName.Vantage) {
        override fun counterPlan(fightPlan: FightPlan, lv: Int): FightPlan = vantage(fightPlan, lv)
    },

    Guard(SkillName.Guard) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = antiAccelerateCooldown(battleUnit, enemy, lv, this)
    },
    ShieldPulse(SkillName.ShieldPulse, spType = SpType.BASE60) {
        override fun specialPreventTriggered(battleUnit: BattleUnit, damage: Int): Int = damage - 5
    },
    CancelAffinity(SkillName.CancelAffinity) {
        override fun effectedAttackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit {
            //高いほうが適用されるのでとりあえず自分だけ消す
            battleUnit.colorAdvantageLevel = 0
            val colorAd = battleUnit.colorAdvantage(enemy)
            //2と3は負けてるときだけ発動。両者が持ってるときは両社とも激化倍率がなくなるので問題ない
            when (lv) {
                1 -> {
                    battleUnit.antiColorAdvantage = 0;enemy.antiColorAdvantage = 0
                }
                2 -> if (colorAd == -1) {
                    battleUnit.addSkillText(SkillText(this, SkillBaseText.AntiTriangleAdept))
                    battleUnit.antiColorAdvantage = 0;enemy.antiColorAdvantage = 0
                }
                3 -> if (colorAd == -1) {
                    battleUnit.addSkillText(SkillText(this, SkillBaseText.AntiTriangleAdept))//うまい説明が思いつかない…
                    battleUnit.antiColorAdvantage = -1;enemy.antiColorAdvantage = -1
                }
            }
            return battleUnit
        }
    },
    Wrath(SkillName.Wrath, spType = SpType.BASE60) {
        override fun specialTriggered(battleUnit: BattleUnit, damage: Int): Int = wrath(battleUnit, damage, level * 25, this)
    },
    PoisonStrike(SkillName.PoisonStrike, spType = SpType.BASE60) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = attackPain(battleUnit, enemy, lv * 3 + 1, this)
    },
    SacaesBlessing(SkillName.SacaesBlessing, spType = SpType.LEGEND_S) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = sacasBlessing(battleUnit, enemy, lv, this)

    },
    BeorcsBlessing(SkillName.BeorcsBlessing, maxLevel = 0, spType = SpType.LEGEND_S) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = beorcsBlessing(battleUnit, enemy, lv, this)
    },
    CrusadersWard(SkillName.CrusadersWard, maxLevel = 0, spType = SpType.LEGEND_S) {
        override fun prevent(battleUnit: BattleUnit, damage: Int, source: BattleUnit, results: List<AttackResult>, lv: Int): Int =
                if (source.effectiveRange == 2 && results.isNotEmpty() && results.last().side != battleUnit.side) damage - damage * 8 / 10 else damage
    },
    FollowUpRing(SkillName.FollowUpRing, maxLevel = 0, spType = SpType.LEGEND_S) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = followupable(battleUnit, 5, this)
    },
    Bushido(SkillName.Bushido, maxLevel = 0, spType = SpType.LEGEND_S) {
        override fun specialTriggered(battleUnit: BattleUnit, damage: Int): Int = wrath(battleUnit, damage, 100, this)
    },
    SolarBrace(SkillName.SolarBrace, maxLevel = 0, spType = SpType.LEGEND_S) {
        override fun absorb(battleUnit: BattleUnit, target: BattleUnit, damage: Int): Int {
            battleUnit.heal(damage * 3 / 10)
            return damage
        }
    },
    LunarBrace(SkillName.LunarBrace, maxLevel = 0, spType = SpType.LEGEND_S) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBlade(armedHero, lv)
        override val stateDamageEnemy: (BattleUnit) -> Int get() = { it.def / 2 }
    },
    DoubleLion(SkillName.DoubleLion, maxLevel = 0, spType = SpType.LEGEND_S) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = fullHpDoubleAttack(battleUnit, 1, this)
    },
    BindingShield(SkillName.BindingShield, spType = SpType.BASE60) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = if (enemy.armedHero.baseHero.weaponType == WeaponType.DRAGON) wrathfulStaff(antiFollowup(battleUnit, enemy, this), enemy, 3, this) else battleUnit
    },
    NullFollowUp(SkillName.NullFollowUp, spType = SpType.BASE60) {
        override fun effectedAttackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = nullFollowUp(battleUnit, enemy, lv, this)
        override fun effectedCounterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = nullFollowUp(battleUnit, enemy, lv, this)
    },
    MysticBoost(SkillName.MysticBoost, spType = SpType.BASE60) {
        override fun effectedAttackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = mysticBoost(battleUnit, enemy, lv, this)
        override fun effectedCounterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = mysticBoost(battleUnit, enemy, lv, this)
    },
    NullCDisrupt(SkillName.NullCDisrupt, spType = SpType.BASE60) {
        override fun effectedAttackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = nullCDisrupt(battleUnit, enemy, lv, this)
        override fun effectedCounterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = nullCDisrupt(battleUnit, enemy, lv, this)
    },
    SpecialSpiral(SkillName.SpecialSpiral, spType = SpType.BASE60),//戦闘後効果だからまだ要らないといえば要らないが…
    EscapeRoute(SkillName.EscapeRoute, spType = SpType.BASE60),
    RecoverRing(SkillName.RecoverRing, maxLevel = 0, spType = SpType.SHIELD),
    Renewal(SkillName.Renewal, spType = SpType.BASE60),
    LiveToServe(SkillName.LiveToServe, spType = SpType.BASE40),
    WingsOfMercy(SkillName.WingsOfMercy, spType = SpType.BASE60),
    Pass(SkillName.Pass),
    Obstruct(SkillName.Obstruct),
    SealAtk(SkillName.SealAtk),
    SealSpd(SkillName.SealSpd),
    SealDef(SkillName.SealDef),
    SealRes(SkillName.SealRes),
    SealAtkSpd(SkillName.SealAtkSpd, maxLevel = 2, spType = SpType.BASE100),
    SealAtkDef(SkillName.SealAtkDef, maxLevel = 2, spType = SpType.BASE100),
    SealDefRes(SkillName.SealDefRes, maxLevel = 2, spType = SpType.BASE100),
    FlierFormation(SkillName.FlierFormation),
    BlazeDance(SkillName.BlazeDance),
    GaleDance(SkillName.GaleDance),
    EarthDance(SkillName.EarthDance),
    TorrentDance(SkillName.TorrentDance),
    GeyserDance(SkillName.GeyserDance, maxLevel = 2, spType = SpType.BASE120),
    FirestormDance(SkillName.FirestormDance, maxLevel = 2, spType = SpType.BASE120),
    RockslideDance(SkillName.RockslideDance, maxLevel = 2, spType = SpType.BASE120),
    FirefloodDance(SkillName.FirefloodDance, maxLevel = 2, spType = SpType.BASE120),
    DelugeDance(SkillName.DelugeDance, maxLevel = 2, spType = SpType.BASE120),
    KnockBack(SkillName.KnockBack, maxLevel = 0, spType = SpType.ASSIST),
    DragBack(SkillName.DragBack, maxLevel = 0, spType = SpType.ASSIST),
    Lunge(SkillName.Lunge, maxLevel = 0, spType = SpType.ASSIST),
    HitAndRun(SkillName.HitAndRun, maxLevel = 0, spType = SpType.ASSIST),
    LiveForBounty(SkillName.LiveForBounty, maxLevel = 0, spType = SpType.ASSIST),
    LiveForHonor(SkillName.LiveForHonor, maxLevel = 0, spType = SpType.ASSIST),
    WarpPowder(SkillName.WarpPowder, maxLevel = 0, spType = SpType.LEGEND_S),
    ChillingSeal(SkillName.ChillingSeal, maxLevel = 0, spType = SpType.LEGEND_S),
    FreezingSeal(SkillName.FreezingSeal, maxLevel = 0, spType = SpType.LEGEND_S),
    ChillAtk(SkillName.ChillAtk, spType = SpType.BASE60),
    ChillSpd(SkillName.ChillSpd, spType = SpType.BASE60),
    ChillDef(SkillName.ChillDef, spType = SpType.BASE60),
    ChillRes(SkillName.ChillRes, spType = SpType.BASE60),
    SDrink(SkillName.SDrink, maxLevel = 0, spType = SpType.LEGEND_S) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero)
    },
    AtkFeint(SkillName.AtkFeint, spType = SpType.BASE60),
    SpdFeint(SkillName.SpdFeint, spType = SpType.BASE60),
    DefFeint(SkillName.DefFeint, spType = SpType.BASE60),
    ResFeint(SkillName.ResFeint, spType = SpType.BASE60),
    AtkSpdLink(SkillName.AtkSpdLink, spType = SpType.BASE60),
    AtkDefLink(SkillName.AtkDefLink, spType = SpType.BASE60),
    AtkResLink(SkillName.AtkResLink, spType = SpType.BASE60),
    SpdResLink(SkillName.SpdResLink, spType = SpType.BASE60),
    DefResLink(SkillName.DefResLink, spType = SpType.BASE60),
    Aerobatics(SkillName.Aerobatics, spType = SpType.BASE60),
    ;

    /**
     * 同じスキルの別レベルを作成する。レベルがそのままなら自分自身のまま。
     * レベルのないスキル、武器や奥義は攻撃力やクールダウンが入っているので注意
     */
    fun lv(lv: Int) = if (level == lv) this else LappedSkill(this, lv)

    /**
     * nameは誤動作するので共通処理としてはvalueを使う。もっといい名前があるか？
     */
    override val value get() = name

    //   override fun localeName(locale: Locale): String=jp.localeName(locale)

    companion object {
        fun spreadItems(none: Boolean = false): List<Skill> = values().fold(if (none) mutableListOf<Skill>(Skill.NONE) else mutableListOf()) { list, e ->
            if (e.maxLevel == 0) {
                list.add(e)
            } else (1..e.maxLevel).forEach { i -> list.add(e.lv(i)) };list
        }

        fun spreadMaxLvItems(none: Boolean = false): List<Skill> = values().fold(if (none) mutableListOf<Skill>(Skill.NONE) else mutableListOf()) { list, e ->
            if (e.maxLevel == 0) {
                list.add(e)
            } else list.add(e.lv(e.maxLevel));list
        }

        private val itemMap = mutableMapOf<String, SkillB>()

        fun valueOfOrNONE(key: String?): Skill = if (key == null) Skill.NONE
        else {
            try {
                if (itemMap.isEmpty()) {
                    values().forEach { e -> itemMap[e.value] = e;itemMap[e.jp.jp] = e;itemMap[e.jp.us] = e;itemMap[e.jp.tw] = e }
                }
                val regex = " \\d".toRegex()

                val lv = regex.find(key)
                if (lv != null) {
                    val skill = regex.replaceFirst(key, "")

                    (itemMap[skill] ?: valueOf(skill)).lv(lv.value.trim().toInt())
                } else itemMap[key] ?: valueOf(key)
            } catch (e: Exception) {
//                println(e)
                Skill.NONE
            }
        }
    }
}