package jp.blogspot.turanukimaru.fehs.skill

import jp.blogspot.turanukimaru.fehs.ArmedHero
import jp.blogspot.turanukimaru.fehs.BattleUnit
import jp.blogspot.turanukimaru.fehs.EffectiveAgainst
import jp.blogspot.turanukimaru.fehs.Locale

/**
 * スキル。A/B/C/聖印。聖印は未実装
 */
enum class SkillA(override val jp: String, override val type: Skill.SkillType, override val level: Int = 0, override val preSkill: Skill = Skill.Companion.NONE, override val maxLevel: Int = 3) : Skill {
    Hp("HP", Skill.SkillType.A) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipHp(armedHero, lv + 2)
    },
    HpSpd("HP速さ", Skill.SkillType.A, maxLevel = 2) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipSpd(equipHp(armedHero, lv + 2), lv)
    },
    HpRes("HP魔防", Skill.SkillType.A, maxLevel = 2) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipRes(equipHp(armedHero, lv + 2), lv)
    },
    Attack("攻撃", Skill.SkillType.A) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipAtk(armedHero, lv)
    },
    AtkSpd("攻撃速さ", Skill.SkillType.A, maxLevel = 2) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipSpd(equipAtk(armedHero, lv), lv)
    },
    AtkRes("攻撃魔防", Skill.SkillType.A, maxLevel = 2) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipRes(equipAtk(armedHero, lv), lv)
    },
    Speed("速さ", Skill.SkillType.A) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipSpd(armedHero, lv)
    },
    SpdRes("速さ魔防", Skill.SkillType.A, maxLevel = 2) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipRes(equipSpd(armedHero, lv), lv)
    },
    SpdDef("速さ守備", Skill.SkillType.A, maxLevel = 2) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipDef(equipSpd(armedHero, lv), lv)
    },
    Defense("守備", Skill.SkillType.A) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipDef(armedHero, lv)
    },
    AtkDef("攻撃守備", Skill.SkillType.A, maxLevel = 2) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipDef(equipAtk(armedHero, lv), lv)
    },
    HpDef("HP守備", Skill.SkillType.A, maxLevel = 2) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipDef(equipHp(armedHero, lv + 2), lv)
    },
    Resistance("魔防", Skill.SkillType.A) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipRes(armedHero, lv)
    },

    DefiantAtk("攻撃の覚醒", Skill.SkillType.A) {
        override fun turnStart(battleUnit: BattleUnit, lv: Int): BattleUnit = defiantAtk(battleUnit, lv)
    },
    DefiantSpd("速さの覚醒", Skill.SkillType.A) {
        override fun turnStart(battleUnit: BattleUnit, lv: Int): BattleUnit = defiantSpd(battleUnit, lv)
    },
    DefiantDef("守備の覚醒", Skill.SkillType.A) {
        override fun turnStart(battleUnit: BattleUnit, lv: Int): BattleUnit = defiantDef(battleUnit, lv)
    },
    DefiantRes("魔防の覚醒", Skill.SkillType.A) {
        override fun turnStart(battleUnit: BattleUnit, lv: Int): BattleUnit = defiantRes(battleUnit, lv)
    },

    TriangleAdept("相性激化", Skill.SkillType.A) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = colorAdvantage(battleUnit, lv)
    },
    LifeAndDeath("死線", Skill.SkillType.A) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = lifeAndDeath(armedHero, lv + 2)
    },
    Furry("獅子奮迅", Skill.SkillType.A) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = furry(armedHero, lv)
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = attackHpLoss(battleUnit, lv * 2)
    },
    FortressDef("守備の城塞", Skill.SkillType.A) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipAtk(equipDef(armedHero, lv + 2), -3)
    },
    FortressRes("魔防の城塞", Skill.SkillType.A) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipAtk(equipRes(armedHero, lv + 2), -3)
    },
    ArmoredBlow("金剛の一撃", Skill.SkillType.A) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = blowDef(battleUnit, lv * 2)
    },
    WardingBlow("明鏡の一撃", Skill.SkillType.A) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = blowRes(battleUnit, lv * 2)
    },
    DeathBlow("鬼神の一撃", Skill.SkillType.A) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = blowAtk(battleUnit, lv * 2)
    },
    DartingBlow("飛燕の一撃", Skill.SkillType.A) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = blowSpd(battleUnit, lv * 2)
    },
    SwiftSparrow("鬼神飛燕の一撃", Skill.SkillType.A, maxLevel = 2) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = blowAtk(blowSpd(battleUnit, lv * 2), lv * 2)
    },
    SturdyBlow("鬼神金剛の一撃", Skill.SkillType.A, maxLevel = 2) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = blowAtk(blowDef(battleUnit, lv * 2), lv * 2)
    },
    SteadyBlow("飛燕金剛の一撃", Skill.SkillType.A, maxLevel = 2) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = blowSpd(blowDef(battleUnit, lv * 2), lv * 2)
    },
    MirrorStrike("鬼神明鏡の一撃", Skill.SkillType.A, maxLevel = 2) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = blowAtk(blowRes(battleUnit, lv * 2), lv * 2)
    },
    BracingBlow("金剛明鏡の一撃", Skill.SkillType.A, maxLevel = 2) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = blowRes(blowDef(battleUnit, lv * 2), lv * 2)
    },
    SwiftStrike("飛燕明鏡の一撃", Skill.SkillType.A, maxLevel = 2) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = blowRes(blowSpd(battleUnit, lv * 2), lv * 2)
    },

    DistantDef("遠距離防御", Skill.SkillType.A) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = distantDef(battleUnit, lv * 2)
    },

    CloseDef("近距離防御", Skill.SkillType.A) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = closeDef(battleUnit, lv * 2)
    },

    FierceStance("鬼神の構え", Skill.SkillType.A) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = steadyAtk(battleUnit, lv * 2)
    },
    SteadyStance("金剛の構え", Skill.SkillType.A) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = steadyDef(battleUnit, lv * 2)
    },
    WardingStance("明鏡の構え", Skill.SkillType.A) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = steadyRes(battleUnit, lv * 2)
    },
    SteadyBreath("金剛の呼吸", Skill.SkillType.A, maxLevel = 0) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit {
            battleUnit.accelerateAttackCooldown = 1
            return steadyDef(battleUnit, 2)
        }

    },

    EarthBoost("生命の大地", Skill.SkillType.A) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = boostDef(battleUnit, lv * 2)
    },
    WindBoost("生命の疾風", Skill.SkillType.A) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = boostSpd(battleUnit, lv * 2)
    },
    FireBoost("生命の業火", Skill.SkillType.A) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = boostAtk(battleUnit, lv * 2)
    },
    WaterBoost("生命の静水", Skill.SkillType.A) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = boostRes(battleUnit, lv * 2)
    },

    HeavyBlade("剛剣", Skill.SkillType.A) {
        override fun effectedAttackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = heavyBlade(battleUnit, 7 - lv * 2)
        override fun effectedCounterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = heavyBlade(battleUnit, 7 - lv * 2)
    },
    FlashingBlade("柔剣", Skill.SkillType.A) {
        override fun effectedAttackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = flashingBlade(battleUnit, 7 - lv * 2)
        override fun effectedCounterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = flashingBlade(battleUnit, 7 - lv * 2)
    },

    CloseCounter("近距離反撃", Skill.SkillType.A, maxLevel = 0) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = counterAllRange(battleUnit)
    },

    DistantCounter("遠距離反撃", Skill.SkillType.A, maxLevel = 0) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = counterAllRange(battleUnit)
    },

    SvalinnShield("スヴェルの盾", Skill.SkillType.A, maxLevel = 0) {
        override fun effectedAttackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = antiEffectiveAgainst(battleUnit, EffectiveAgainst.ARMORED)
        override fun effectedCounterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = antiEffectiveAgainst(battleUnit, EffectiveAgainst.ARMORED)
    },

    IotesShield("アイオテの盾", Skill.SkillType.A, maxLevel = 0) {
        override fun effectedAttackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = antiEffectiveAgainst(battleUnit, EffectiveAgainst.FLIER)
        override fun effectedCounterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = antiEffectiveAgainst(battleUnit, EffectiveAgainst.FLIER)
    },

    GranisShield("グラニの盾", Skill.SkillType.A, maxLevel = 0) {
        override fun effectedAttackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = antiEffectiveAgainst(battleUnit, EffectiveAgainst.CAVALRY)
        override fun effectedCounterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = antiEffectiveAgainst(battleUnit, EffectiveAgainst.CAVALRY)
    },
    AtkDefBond("攻撃守備の絆", Skill.SkillType.A, maxLevel = 3),
    AtkResBond("攻撃魔防の絆", Skill.SkillType.A, maxLevel = 3),

    BrazenAtkDef("攻撃守備の大覚醒3", Skill.SkillType.A) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = brazenDef(brazenAtk(battleUnit, lv * 2 + 1), lv * 2 + 1)
    },
    BrazenAtkSpd("攻撃速さの大覚醒3", Skill.SkillType.A) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = brazenSpd(brazenAtk(battleUnit, lv * 2 + 1), lv * 2 + 1)
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

    override fun localeName(locale: Locale): String =
            when (locale) {
                Locale.JAPAN -> jp
                Locale.JAPANESE -> jp
                else -> value
            }

    companion object {
        fun spreadItems(): List<Skill> = values().fold(arrayListOf<Skill>(Skill.NONE), { list, e -> (1..e.maxLevel).forEach({ i -> list.add(e.lv(i)) });list })
        private val itemMap = mutableMapOf<String, SkillA>()

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