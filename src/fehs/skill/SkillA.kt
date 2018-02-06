package jp.blogspot.turanukimaru.fehs.skill

import jp.blogspot.turanukimaru.fehs.*

/**
 * スキル。A/B/C/聖印。聖印は未実装
 */
enum class SkillA(override val jp: Name, override val type: SkillType, override val level: Int = 0, override val preSkill: Skill = Skill.Companion.NONE, override val maxLevel: Int = 3) : Skill {
    Hp(Name.Hp, SkillType.A) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipHp(armedHero, lv + 2)
    },
    HpSpd(Name.HpSpd, SkillType.A, maxLevel = 2) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipSpd(equipHp(armedHero, lv + 2), lv)
    },
    HpRes(Name.HpRes, SkillType.A, maxLevel = 2) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipRes(equipHp(armedHero, lv + 2), lv)
    },
    Attack(Name.Attack, SkillType.A) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipAtk(armedHero, lv)
    },
    AtkSpd(Name.AtkSpd, SkillType.A, maxLevel = 2) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipSpd(equipAtk(armedHero, lv), lv)
    },
    AtkRes(Name.AtkRes, SkillType.A, maxLevel = 2) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipRes(equipAtk(armedHero, lv), lv)
    },
    Speed(Name.Speed, SkillType.A) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipSpd(armedHero, lv)
    },
    SpdRes(Name.SpdRes, SkillType.A, maxLevel = 2) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipRes(equipSpd(armedHero, lv), lv)
    },
    SpdDef(Name.SpdDef, SkillType.A, maxLevel = 2) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipDef(equipSpd(armedHero, lv), lv)
    },
    Defense(Name.Defense, SkillType.A) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipDef(armedHero, lv)
    },
    AtkDef(Name.AtkDef, SkillType.A, maxLevel = 2) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipDef(equipAtk(armedHero, lv), lv)
    },
    HpDef(Name.HpDef, SkillType.A, maxLevel = 2) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipDef(equipHp(armedHero, lv + 2), lv)
    },
    Resistance(Name.Resistance, SkillType.A) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipRes(armedHero, lv)
    },

    DefiantAtk(Name.DefiantAtk, SkillType.A) {
        override fun turnStart(battleUnit: BattleUnit, lv: Int): BattleUnit = defiantAtk(battleUnit, lv)
    },
    DefiantSpd(Name.DefiantSpd, SkillType.A) {
        override fun turnStart(battleUnit: BattleUnit, lv: Int): BattleUnit = defiantSpd(battleUnit, lv)
    },
    DefiantDef(Name.DefiantDef, SkillType.A) {
        override fun turnStart(battleUnit: BattleUnit, lv: Int): BattleUnit = defiantDef(battleUnit, lv)
    },
    DefiantRes(Name.DefiantRes, SkillType.A) {
        override fun turnStart(battleUnit: BattleUnit, lv: Int): BattleUnit = defiantRes(battleUnit, lv)
    },

    TriangleAdept(Name.TriangleAdept, SkillType.A) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = colorAdvantage(battleUnit, lv)
    },
    LifeAndDeath(Name.LifeAndDeath, SkillType.A) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = lifeAndDeath(armedHero, lv + 2)
    },
    Furry(Name.Furry, SkillType.A) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = furry(armedHero, lv)
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = attackHpLoss(battleUnit, lv * 2)
    },
    FortressDef(Name.FortressDef, SkillType.A) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipAtk(equipDef(armedHero, lv + 2), -3)
    },
    FortressRes(Name.FortressRes, SkillType.A) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipAtk(equipRes(armedHero, lv + 2), -3)
    },
    ArmoredBlow(Name.ArmoredBlow, SkillType.A) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = blowDef(battleUnit, lv * 2)
    },
    WardingBlow(Name.WardingBlow, SkillType.A) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = blowRes(battleUnit, lv * 2)
    },
    DeathBlow(Name.DeathBlow, SkillType.A) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = blowAtk(battleUnit, lv * 2)
    },
    DartingBlow(Name.DartingBlow, SkillType.A) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = blowSpd(battleUnit, lv * 2)
    },
    SwiftSparrow(Name.SwiftSparrow, SkillType.A, maxLevel = 2) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = blowAtk(blowSpd(battleUnit, lv * 2), lv * 2)
    },
    SturdyBlow(Name.SturdyBlow, SkillType.A, maxLevel = 2) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = blowAtk(blowDef(battleUnit, lv * 2), lv * 2)
    },
    SteadyBlow(Name.SteadyBlow, SkillType.A, maxLevel = 2) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = blowSpd(blowDef(battleUnit, lv * 2), lv * 2)
    },
    MirrorStrike(Name.MirrorStrike, SkillType.A, maxLevel = 2) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = blowAtk(blowRes(battleUnit, lv * 2), lv * 2)
    },
    BracingBlow(Name.BracingBlow, SkillType.A, maxLevel = 2) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = blowRes(blowDef(battleUnit, lv * 2), lv * 2)
    },
    SwiftStrike(Name.SwiftStrike, SkillType.A, maxLevel = 2) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = blowRes(blowSpd(battleUnit, lv * 2), lv * 2)
    },

    DistantDef(Name.DistantDef, SkillType.A) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = distantDef(battleUnit, lv * 2)
    },

    CloseDef(Name.CloseDef, SkillType.A) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = closeDef(battleUnit, lv * 2)
    },

    FierceStance(Name.FierceStance, SkillType.A) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = blowAtk(battleUnit, lv * 2)
    },
    SteadyStance(Name.SteadyStance, SkillType.A) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = blowDef(battleUnit, lv * 2)
    },
    WardingStance(Name.WardingStance, SkillType.A) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = blowRes(battleUnit, lv * 2)
    },
    WardingBreath(Name.WardingBreath, SkillType.A, maxLevel = 0) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit {
            battleUnit.accelerateAttackCooldown = 1
            return blowRes(battleUnit, 4)
        }
    },
    SteadyBreath(Name.SteadyBreath, SkillType.A, maxLevel = 0) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit {
            battleUnit.accelerateAttackCooldown = 1
            return blowDef(battleUnit, 4)
        }
    },

    EarthBoost(Name.EarthBoost, SkillType.A) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = boostDef(battleUnit, lv * 2)
    },
    WindBoost(Name.WindBoost, SkillType.A) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = boostSpd(battleUnit, lv * 2)
    },
    FireBoost(Name.FireBoost, SkillType.A) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = boostAtk(battleUnit, lv * 2)
    },
    WaterBoost(Name.WaterBoost, SkillType.A) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = boostRes(battleUnit, lv * 2)
    },

    HeavyBlade(Name.HeavyBlade, SkillType.A) {
        override fun effectedAttackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = heavyBlade(battleUnit, 7 - lv * 2)
        override fun effectedCounterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = heavyBlade(battleUnit, 7 - lv * 2)
    },
    FlashingBlade(Name.FlashingBlade, SkillType.A) {
        override fun effectedAttackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = flashingBlade(battleUnit, 7 - lv * 2)
        override fun effectedCounterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = flashingBlade(battleUnit, 7 - lv * 2)
    },

    CloseCounter(Name.CloseCounter, SkillType.A, maxLevel = 0) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = counterAllRange(battleUnit)
    },

    DistantCounter(Name.DistantCounter, SkillType.A, maxLevel = 0) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = counterAllRange(battleUnit)
    },

    SvalinnShield(Name.SvalinnShield, SkillType.A, maxLevel = 0) {
        override fun effectedAttackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = antiEffectiveAgainst(battleUnit, EffectiveAgainst.ARMORED)
        override fun effectedCounterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = antiEffectiveAgainst(battleUnit, EffectiveAgainst.ARMORED)
    },

    IotesShield(Name.IotesShield, SkillType.A, maxLevel = 0) {
        override fun effectedAttackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = antiEffectiveAgainst(battleUnit, EffectiveAgainst.FLIER)
        override fun effectedCounterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = antiEffectiveAgainst(battleUnit, EffectiveAgainst.FLIER)
    },

    GranisShield(Name.GranisShield, SkillType.A, maxLevel = 0) {
        override fun effectedAttackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = antiEffectiveAgainst(battleUnit, EffectiveAgainst.CAVALRY)
        override fun effectedCounterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = antiEffectiveAgainst(battleUnit, EffectiveAgainst.CAVALRY)
    },
    AtkDefBond(Name.AtkDefBond, SkillType.A) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = if (battleUnit.adjacentUnits > 0) blowAtk(blowDef(battleUnit, lv + 2), lv + 2) else battleUnit
    },
    AtkResBond(Name.AtkResBond, SkillType.A) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = if (battleUnit.adjacentUnits > 0) blowAtk(blowRes(battleUnit, lv + 2), lv + 2) else battleUnit
    },
    SpdDefBond(Name.SpdDefBond, SkillType.A) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = if (battleUnit.adjacentUnits > 0) blowSpd(blowDef(battleUnit, lv + 2), lv + 2) else battleUnit
    },

    BrazenAtkDef(Name.BrazenAtkDef, SkillType.A) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = brazenDef(brazenAtk(battleUnit, lv * 2 + 1), lv * 2 + 1)
    },
    BrazenAtkSpd(Name.BrazenAtkSpd, SkillType.A) {
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

    // override fun localeName(locale: Locale): String = jp.localeName(locale)

    companion object {
        fun spreadItems(none: Boolean = false): List<Skill> = values().fold(if (none) arrayListOf<Skill>(Skill.NONE) else arrayListOf(), { list, e ->
            if (e.maxLevel == 0) {
                list.add(e)
            } else (1..e.maxLevel).forEach({ i -> list.add(e.lv(i)) });list
        })

        private val itemMap = mutableMapOf<String, SkillA>()

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