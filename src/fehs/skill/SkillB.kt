package jp.blogspot.turanukimaru.fehs.skill

import jp.blogspot.turanukimaru.fehs.*

/**
 * スキル。B
 */
enum class SkillB(override val jp: Name, override val type: SkillType, override val level: Int = 0, override val preSkill: Skill = Skill.Companion.NONE, override val maxLevel: Int = 3) : Skill {
    SwordBreaker(Name.SwordBreaker, SkillType.B) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = weaponBreaker(battleUnit, enemy, WeaponType.SWORD, lv)
    },
    LanceBreaker(Name.LanceBreaker, SkillType.B) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = weaponBreaker(battleUnit, enemy, WeaponType.LANCE, lv)
    },
    AxeBreaker(Name.AxeBreaker, SkillType.B) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = weaponBreaker(battleUnit, enemy, WeaponType.AXE, lv)
    },
    BowBreaker(Name.BowBreaker, SkillType.B) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = weaponBreaker(battleUnit, enemy, WeaponType.BOW, lv)
    },
    DaggerBreaker(Name.DaggerBreaker, SkillType.B) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = weaponBreaker(battleUnit, enemy, WeaponType.DAGGER, lv)
    },
    RTomeBreaker(Name.RTomeBreaker, SkillType.B) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = weaponBreaker(battleUnit, enemy, WeaponType.RTOME, lv)
    },
    GTomeBreaker(Name.GTomeBreaker, SkillType.B) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = weaponBreaker(battleUnit, enemy, WeaponType.GTOME, lv)
    },
    BTomeBreaker(Name.BTomeBreaker, SkillType.B) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = weaponBreaker(battleUnit, enemy, WeaponType.BTOME, lv)
    },
    Vantage(Name.Vantage, SkillType.B) {
        override fun counterPlan(fightPlan: FightPlan, lv: Int): FightPlan = vantage(fightPlan, lv)
    },
    WaryFighter(Name.WaryFighter, SkillType.B) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = eachNofollowupable(battleUnit, enemy, lv)
    },
    BoldFighter(Name.BoldFighter, SkillType.B) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = accelerateAttackCooldown(followupable(battleUnit, 10), 11)
    },
    VengefulFighter(Name.VengefulFighter, SkillType.B) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = accelerateAttackCooldown(followupable(battleUnit, 5), 6)
    },
    Desperation(Name.Desperation, SkillType.B) {
        override fun attackPlan(fightPlan: FightPlan, lv: Int): FightPlan = desperation(fightPlan, lv)

    },
    QuickRiposte(Name.QuickRiposte, SkillType.B) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = followupable(battleUnit, lv)
    },

    BrashAssault(Name.BrashAssault, SkillType.B) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = brashAssault(battleUnit, enemy, (lv * 10 + 20))

    },
    Windsweep(Name.Windsweep, SkillType.B) {
        override fun effectedAttackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = windsweep(battleUnit, enemy, lv)
        override fun attackPlan(fightPlan: FightPlan, lv: Int): FightPlan = noFollowupAttack(fightPlan)
    },
    Watersweep(Name.Watersweep, SkillType.B) {
        override fun effectedAttackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = watersweep(battleUnit, enemy, lv)
        override fun attackPlan(fightPlan: FightPlan, lv: Int): FightPlan = noFollowupAttack(fightPlan)
    },

    Guard(Name.Guard, SkillType.B) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = antiAccelerateCooldown(battleUnit, enemy, lv)
    },
    ShieldPulse(Name.ShieldPulse, SkillType.B) {
        override fun specialPreventTriggered(battleUnit: BattleUnit, damage: Int): Int = damage - 5
    },
    WrathfulStaff(Name.WrathfulStaff, SkillType.B) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = wrathfulStaff(battleUnit, enemy, lv)
    },
    DazzlingStaff(Name.DazzlingStaff, SkillType.B) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = dazzling(battleUnit, enemy, lv)

    },
    CancelAffinity(Name.CancelAffinity, SkillType.B) {
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
                    battleUnit.antiColorAdvantage = 0;enemy.antiColorAdvantage = 0
                }
                3 -> if (colorAd == -1) {
                    battleUnit.antiColorAdvantage = -1;enemy.antiColorAdvantage = -1
                }
            }
            return battleUnit
        }
    },
    Wrath(Name.Wrath, SkillType.B) {
        override fun specialTriggered(battleUnit: BattleUnit, damage: Int): Int = wrath(battleUnit, damage, level * 25)
    },
    PoisonStrike(Name.PoisonStrike, SkillType.B) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = attackPain(battleUnit, enemy, lv * 3 + 1)
    },
    FollowUpRing(Name.FollowUpRing, SkillType.B, maxLevel = 0) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = followupable(battleUnit, 5)
    },
    SacaesBlessing(Name.SacaesBlessing, SkillType.B) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = sacasBlessing(battleUnit, enemy, lv)

    },
    BeorcsBlessing(Name.BeorcsBlessing, SkillType.B, maxLevel = 0) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = beorcsBlessing(battleUnit, enemy, lv)
    },
    CrusadersWard(Name.CrusadersWard, SkillType.B, maxLevel = 0) {
        override fun prevent(battleUnit: BattleUnit, damage: Int, source: BattleUnit, results: List<AttackResult>, lv: Int): Int =
                if (source.effectiveRange == 2 && results.isNotEmpty() && results.last().side != battleUnit.side) damage - damage * 8 / 10 else damage
    },
    SolarBrace(Name.SolarBrace, SkillType.B) {
        override fun absorb(battleUnit: BattleUnit, target: BattleUnit, damage: Int): Int {
            battleUnit.heal(damage * 3 / 10)
            return damage
        }
    },
    DullRanged(Name.DullRanged, SkillType.B) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = dullRanged(battleUnit, enemy, lv)
    },

    EscapeRoute(Name.EscapeRoute, SkillType.B),
    RecoverRing(Name.RecoverRing, SkillType.B, maxLevel = 0),
    Renewal(Name.Renewal, SkillType.B),
    LiveToServe(Name.LiveToServe, SkillType.B),
    WingsOfMercy(Name.WingsOfMercy, SkillType.B),
    Pass(Name.Pass, SkillType.B),
    Obstruct(Name.Obstruct, SkillType.B),
    SealAtk(Name.SealAtk, SkillType.B),
    SealSpd(Name.SealSpd, SkillType.B),
    SealDef(Name.SealDef, SkillType.B),
    SealRes(Name.SealRes, SkillType.B),
    SealAtkSpd(Name.SealAtkSpd, SkillType.B, maxLevel = 2),
    SealAtkDef(Name.SealAtkDef, SkillType.B, maxLevel = 2),
    FlierFormation(Name.FlierFormation, SkillType.B),
    BlazeDance(Name.BlazeDance, SkillType.B),
    GaleDance(Name.GaleDance, SkillType.B),
    TorrentDance(Name.TorrentDance, SkillType.B),
    EarthDance(Name.EarthDance, SkillType.B),
    GeyserDance(Name.GeyserDance, SkillType.B, maxLevel = 2),
    KnockBack(Name.KnockBack, SkillType.B, maxLevel = 0),
    DragBack(Name.DragBack, SkillType.B, maxLevel = 0),
    Lunge(Name.Lunge, SkillType.B, maxLevel = 0),
    HitAndRun(Name.HitAndRun, SkillType.B, maxLevel = 0),
    LiveForBounty(Name.LiveForBounty, SkillType.B, maxLevel = 0),
    LiveForHonor(Name.LiveForHonor, SkillType.B, maxLevel = 0),
    WarpPowder(Name.WarpPowder, SkillType.B),
    ChillingSeal(Name.ChillingSeal, SkillType.B),
    ChillSpd(Name.ChillSpd, SkillType.B),
    ChillDef(Name.ChillDef, SkillType.B),

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
        fun spreadItems(none: Boolean = false): List<Skill> = values().fold(if (none) arrayListOf<Skill>(Skill.NONE) else arrayListOf(), { list, e ->
            if (e.maxLevel == 0) {
                list.add(e)
            } else (1..e.maxLevel).forEach({ i -> list.add(e.lv(i)) });list
        })

        private val itemMap = mutableMapOf<String, SkillB>()

        fun valueOfOrNONE(key: String?): Skill = if (key == null) Skill.NONE
        else {
            try {
                if (itemMap.isEmpty()) {
                    values().forEach { e -> itemMap.put(e.value, e);itemMap.put(e.jp.jp, e);itemMap.put(e.jp.us, e);itemMap.put(e.jp.tw, e) }
                }
                val regex = " \\d".toRegex()

                val lv = regex.find(key)
                if (lv != null) {
                    val skill = regex.replaceFirst(key, "")

                    (itemMap[skill] ?: valueOf(skill)).lv(lv.value.trim().toInt())
                } else itemMap[key] ?: valueOf(key)
            } catch (e: Exception) {
                println(e)
                Skill.NONE
            }
        }
    }
}