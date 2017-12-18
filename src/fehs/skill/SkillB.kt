package jp.blogspot.turanukimaru.fehs.skill

import jp.blogspot.turanukimaru.fehs.*

/**
 * スキル。B
 */
enum class SkillB(override val jp: String, override val type: Skill.SkillType, override val level: Int = 0, override val preSkill: Skill = Skill.Companion.NONE, override val maxLevel: Int = 3) : Skill {
    SwordBreaker("剣殺し", Skill.SkillType.B) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = weaponBreaker(battleUnit, WeaponType.SWORD, lv)
    },
    LanceBreaker("槍殺し", Skill.SkillType.B) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = weaponBreaker(battleUnit, WeaponType.LANCE, lv)
    },
    AxeBreaker("斧殺し", Skill.SkillType.B) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = weaponBreaker(battleUnit, WeaponType.AXE, lv)
    },
    BowBreaker("弓殺し", Skill.SkillType.B) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = weaponBreaker(battleUnit, WeaponType.BOW, lv)
    },
    DaggerBreaker("暗器殺し", Skill.SkillType.B) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = weaponBreaker(battleUnit, WeaponType.DAGGER, lv)
    },
    RTomeBreaker("赤魔殺し", Skill.SkillType.B) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = weaponBreaker(battleUnit, WeaponType.RTOME, lv)
    },
    GTomeBreaker("緑魔殺し", Skill.SkillType.B) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = weaponBreaker(battleUnit, WeaponType.GTOME, lv)
    },
    BTomeBreaker("青魔殺し", Skill.SkillType.B) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = weaponBreaker(battleUnit, WeaponType.BTOME, lv)
    },
    EscapeRoute("離脱の行路", Skill.SkillType.B),
    Vantage("待ち伏せ", Skill.SkillType.B) {
        override fun counterPlan(fightPlan: FightPlan, lv: Int): FightPlan = vantage(fightPlan, lv)
    },
    WaryFighter("守備隊形", Skill.SkillType.B) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = eachNofollowupable(battleUnit, lv)
    },
    BoldFighter("攻撃隊形", Skill.SkillType.B) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = accelerateAttackCooldown(followupable(battleUnit, 10), 11)
    },
    VengefulFighter("迎撃隊形", Skill.SkillType.B) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = accelerateAttackCooldown(followupable(battleUnit, 5), 6)
    },
    Desperation("攻め立て", Skill.SkillType.B) {
        override fun attackPlan(fightPlan: FightPlan, lv: Int): FightPlan = desperation(fightPlan, lv)

    },
    QuickRiposte("切り返し", Skill.SkillType.B) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = followupable(battleUnit, lv)
    },

    BrashAssault("差し違え", Skill.SkillType.B) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = brashAssault(battleUnit, (lv * 10 + 20))

    },
    Renewal("回復", Skill.SkillType.B),
    LiveToServe("ご奉仕の喜び", Skill.SkillType.B),
    WingsOfMercy("救援の行路", Skill.SkillType.B),
    Pass("すり抜け", Skill.SkillType.B),
    Obstruct("進軍阻止", Skill.SkillType.B),
    SealAtk("攻撃封じ", Skill.SkillType.B),
    SealSpd("速さ封じ", Skill.SkillType.B),
    SealDef("守備封じ", Skill.SkillType.B),
    SealRes("魔防封じ", Skill.SkillType.B),
    SealAtkSpd("攻撃速さ封じ", Skill.SkillType.B, maxLevel = 2),
    SealAtkDef("攻撃守備封じ", Skill.SkillType.B, maxLevel = 2),
    Windsweep("風薙ぎ", Skill.SkillType.B) {
        override fun effectedAttackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = windsweep(battleUnit, lv)
        override fun attackPlan(fightPlan: FightPlan, lv: Int): FightPlan = noFollowupAttack(fightPlan)
    },
    Watersweep("水薙ぎ", Skill.SkillType.B) {
        override fun effectedAttackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = watersweep(battleUnit, lv)
        override fun attackPlan(fightPlan: FightPlan, lv: Int): FightPlan = noFollowupAttack(fightPlan)
    },

    Guard("キャンセル", Skill.SkillType.B) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = antiAccelerateCooldown(battleUnit, lv)
    },
    ShieldPulse("盾の鼓動", Skill.SkillType.B),
    WrathfulStaff("神罰の杖", Skill.SkillType.B) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = wrathfulStaff(battleUnit, lv)
    },
    DazzlingStaff("幻惑の杖", Skill.SkillType.B) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = dazzling(battleUnit, lv)

    },
    CancelAffinity("相性相殺", Skill.SkillType.B) {
        override fun effectedAttackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit {
            //高いほうが適用されるのでとりあえず自分だけ消す
            battleUnit.colorAdvantageLevel = 0
            val colorAd = battleUnit.colorAdvantage()
            //2と3は負けてるときだけ発動。両者が持ってるときは両社とも激化倍率がなくなるので問題ない
            when (lv) {
                1 -> {
                    battleUnit.antiColorAdvantage = 0;battleUnit.enemy!!.antiColorAdvantage = 0
                }
                2 -> if (colorAd == -1) {
                    battleUnit.antiColorAdvantage = 0;battleUnit.enemy!!.antiColorAdvantage = 0
                }
                3 -> if (colorAd == -1) {
                    battleUnit.antiColorAdvantage = -1;battleUnit.enemy!!.antiColorAdvantage = -1
                }
            }
            return battleUnit
        }
    },
    Wrath("怒り", Skill.SkillType.B),
    FlierFormation("編隊飛行", Skill.SkillType.B),
    BlazeDance("業火の舞い", Skill.SkillType.B),
    GaleDance("疾風の舞い", Skill.SkillType.B),
    TorrentDance("静水の舞い", Skill.SkillType.B),
    GeyserDance("大地静水の舞い", Skill.SkillType.B, maxLevel = 2),
    KnockBack("叩き込み", Skill.SkillType.B, maxLevel = 0),
    DragBack("引き込み", Skill.SkillType.B, maxLevel = 0),
    Lunge("切り込み", Skill.SkillType.B, maxLevel = 0),
    HitAndRun("一撃離脱", Skill.SkillType.B, maxLevel = 0),
    FollowUpRing("追撃のリング", Skill.SkillType.B, maxLevel = 0) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = followupable(battleUnit, 5)
    },
    RecoverRing("リカバーリング", Skill.SkillType.B, maxLevel = 0),
    LiveForBounty("豊穣の喜び", Skill.SkillType.B, maxLevel = 0),
    LiveForHonor("栄誉の喜び", Skill.SkillType.B, maxLevel = 0),
    SacaesBlessing("サカの加護", Skill.SkillType.B) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = sacasBlessing(battleUnit, lv)

    },
    BeorcsBlessing("ベオクの加護", Skill.SkillType.B, maxLevel = 0) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = beorcsBlessing(battleUnit, lv)
    },
    CrusadersWard("聖騎士の加護", Skill.SkillType.B, maxLevel = 0) {
        override fun prevent(battleUnit: BattleUnit, damage: Int, results: List<AttackResult>, lv: Int): Int =
                if (battleUnit.enemy!!.effectiveRange == 2 && results.isNotEmpty() && results.last().side != battleUnit.side) damage - damage * 8 / 10 else damage
    },


    PoisonStrike("蛇毒", Skill.SkillType.B) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = attackPain(battleUnit, lv * 3 + 1)
    },


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

    override fun localeName(locale: Locale): String
            = when (locale) {
        Locale.JAPAN -> jp
        Locale.JAPANESE -> jp
        else -> value
    }

    companion object {
        fun spreadItems(): List<Skill> = values().fold(arrayListOf<Skill>(Skill.NONE), { list, e -> (1..e.maxLevel).forEach({ i -> list.add(e.lv(i)) });list })
        private val itemMap = mutableMapOf<String, SkillB>()

        fun valueOfOrNONE(key: String?): Skill = if (key == null) Skill.NONE
        else {
            try {
                if (itemMap.isEmpty()) {
                    values().forEach { e -> itemMap.put(e.jp, e) }
                    values().forEach { e -> itemMap.put(e.value, e) }
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