package jp.blogspot.turanukimaru.fehs.skill

import jp.blogspot.turanukimaru.fehs.*

/**
 * スキルA
 */
enum class SkillA(override val jp: SkillName, override val type: SkillType = SkillType.A, override val level: Int = 0, override val preSkill: Skill = Skill.NONE, override val maxLevel: Int = 3, override val spType: SpType = SpType.BASE50) : Skill {
    Hp(SkillName.Hp, spType = SpType.BASE40) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipHp(armedHero, lv + 2)
    },
    HpAtk(SkillName.HpAtk, maxLevel = 2, spType = SpType.BASE100) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipHp(equipAtk(armedHero, lv), lv + 2)
    },
    HpSpd(SkillName.HpSpd, maxLevel = 2, spType = SpType.BASE100) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipHp(equipSpd(armedHero, lv), lv + 2)
    },
    HpDef(SkillName.HpDef, maxLevel = 2, spType = SpType.BASE50) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipHp(equipDef(armedHero, lv), lv + 2)
    },
    HpRes(SkillName.HpRes, maxLevel = 2, spType = SpType.BASE100) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipHp(equipRes(armedHero, lv), lv + 2)
    },
    Attack(SkillName.Attack, spType = SpType.BASE30) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipAtk(armedHero, lv)
    },
    AtkSpd(SkillName.AtkSpd, maxLevel = 2, spType = SpType.BASE80) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipAtk(equipSpd(armedHero, lv), lv)
    },
    AtkDef(SkillName.AtkDef, maxLevel = 2, spType = SpType.BASE80) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipAtk(equipDef(armedHero, lv), lv)
    },
    AtkRes(SkillName.AtkRes, maxLevel = 2, spType = SpType.BASE80) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipAtk(equipRes(armedHero, lv), lv)
    },
    Speed(SkillName.Speed, spType = SpType.BASE30) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipSpd(armedHero, lv)
    },
    SpdDef(SkillName.SpdDef, maxLevel = 2, spType = SpType.BASE80) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipSpd(equipDef(armedHero, lv), lv)
    },
    SpdRes(SkillName.SpdRes, maxLevel = 2, spType = SpType.BASE80) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipSpd(equipRes(armedHero, lv), lv)
    },
    DefRes(SkillName.DefRes, maxLevel = 2, spType = SpType.BASE80) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipDef(equipRes(armedHero, lv), lv)
    },
    Defense(SkillName.Defense, spType = SpType.BASE30) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipDef(armedHero, lv)
    },
    Resistance(SkillName.Resistance, spType = SpType.BASE30) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipRes(armedHero, lv)
    },

    TriangleAdept(SkillName.TriangleAdept) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = colorAdvantage(battleUnit, enemy, lv, this)
    },
    LifeAndDeath(SkillName.LifeAndDeath) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = lifeAndDeath(armedHero, lv + 2)
    },
    Fury(SkillName.Fury, maxLevel = 4) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = fury(armedHero, lv)
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = fightHpLoss(battleUnit, lv * 2, this)
    },
    FortressDef(SkillName.FortressDef) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipAtk(equipDef(armedHero, lv + 2), -3)
    },
    FortressRes(SkillName.FortressRes) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipAtk(equipRes(armedHero, lv + 2), -3)
    },
    FortressDefRes(SkillName.FortDefRes) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipAtk(equipDef(equipRes(armedHero, if (lv == 3) 6 else lv + 2), if (lv == 3) 6 else lv + 2), if (lv == 3) -2 else -3)
    },

    HeavyBlade(SkillName.HeavyBlade, spType = SpType.BASE60) {
        override fun effectedFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = heavyBlade(battleUnit, enemy, 7 - lv * 2, this)
    },
    FlashingBlade(SkillName.FlashingBlade, spType = SpType.BASE60) {
        override fun effectedFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = flashingBlade(battleUnit, enemy, 7 - lv * 2, this)
    },

    DistantDef(SkillName.DistantDef, spType = SpType.BASE60) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = distantDef(battleUnit, enemy, lv * 2, this)
    },
    CloseDef(SkillName.CloseDef, spType = SpType.BASE60) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = closeDef(battleUnit, enemy, lv * 2, this)
    },

    CloseCounter(SkillName.CloseCounter, maxLevel = 0, spType = SpType.LEGEND_S) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = counterAllRange(battleUnit, this)
    },

    DistantCounter(SkillName.DistantCounter, maxLevel = 0, spType = SpType.LEGEND_S) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = counterAllRange(battleUnit, this)
    },
    RDuelFlying(SkillName.RDuelFlying, spType = SpType.BASE70) {
        override fun totalParam(n: Int): Int = 170

        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipHp(armedHero, lv + 2)
    },
    GDuelFlying(SkillName.GDuelFlying, spType = SpType.BASE70) {
        override fun totalParam(n: Int): Int = 170

        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipHp(armedHero, lv + 2)
    },
    BDuelFlying(SkillName.BDuelFlying, spType = SpType.BASE70) {
        override fun totalParam(n: Int): Int = 170
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipHp(armedHero, lv + 2)
    },
    GDuelInfantry(SkillName.GDuelInfantry, spType = SpType.BASE70) {
        override fun totalParam(n: Int): Int = 170
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipHp(armedHero, lv + 2)
    },
    CDuelInfantry(SkillName.GDuelInfantry, spType = SpType.BASE70) {
        override fun totalParam(n: Int): Int = 170
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipHp(armedHero, lv + 2)
    },
    DeathBlow(SkillName.DeathBlow, maxLevel = 4) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = atk(battleUnit, lv * 2, this)
    },
    DartingBlow(SkillName.DartingBlow) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = spd(battleUnit, lv * 2, this)
    },
    ArmoredBlow(SkillName.ArmoredBlow) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = def(battleUnit, lv * 2, this)
    },
    WardingBlow(SkillName.WardingBlow) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = res(battleUnit, lv * 2, this)
    },
    SwiftSparrow(SkillName.SwiftSparrow, maxLevel = 2, spType = SpType.BASE120) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = atkSpd(battleUnit, lv * 2, this)
    },
    SturdyBlow(SkillName.SturdyBlow, maxLevel = 2, spType = SpType.BASE120) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = atkDef(battleUnit, lv * 2, this)
    },
    MirrorStrike(SkillName.MirrorStrike, maxLevel = 2, spType = SpType.BASE120) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = atkRes(battleUnit, lv * 2, this)
    },
    SteadyBlow(SkillName.SteadyBlow, maxLevel = 2, spType = SpType.BASE120) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = spdDef(battleUnit, lv * 2, this)
    },
    SwiftStrike(SkillName.SwiftStrike, maxLevel = 2, spType = SpType.BASE120) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = spdRes(battleUnit, lv * 2, this)
    },
    BracingBlow(SkillName.BracingBlow, maxLevel = 2, spType = SpType.BASE120) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = defRes(battleUnit, lv * 2, this)
    },
    SturdyImpact(SkillName.SturdyImpact, maxLevel = 0, spType = SpType.SPECIAL_A) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = atk(def(antiFollowup(battleUnit, enemy, this), 10, this), 6, this)
    },
    FierceStance(SkillName.FierceStance) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = atk(battleUnit, lv * 2, this)
    },
    DartingStance(SkillName.DartingStance) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = spd(battleUnit, lv * 2, this)
    },
    SteadyStance(SkillName.SteadyStance, maxLevel = 4) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = def(if (lv == 4) antiAccelerateCooldown(battleUnit, enemy, 11, this) else battleUnit, lv * 2, this)

    },
    WardingStance(SkillName.WardingStance) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = res(battleUnit, lv * 2, this)
    },
    KestrelStance(SkillName.KestrelStance, maxLevel = 2, spType = SpType.BASE120) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = atkSpd(battleUnit, lv * 2, this)
    },
    SturdyStance(SkillName.SturdyStance, maxLevel = 2, spType = SpType.BASE120) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = atkDef(battleUnit, lv * 2, this)
    },
    MirrorStance(SkillName.MirrorStance, maxLevel = 2, spType = SpType.BASE120) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = atkRes(battleUnit, lv * 2, this)
    },
    SteadyPosture(SkillName.SteadyPosture, maxLevel = 2, spType = SpType.BASE120) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = spdDef(battleUnit, lv * 2, this)
    },
    SwiftStance(SkillName.SwiftStance, maxLevel = 2, spType = SpType.BASE120) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = spdRes(battleUnit, lv * 2, this)
    },
    BracingStance(SkillName.BracingStance, maxLevel = 2, spType = SpType.BASE120) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = defRes(battleUnit, lv * 2, this)
    },
    FierceBreath(SkillName.FierceBreath, maxLevel = 0, spType = SpType.BREATH) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = accelerateCooldown(atk(battleUnit, 4, this), 11, this)
    },
    WardingBreath(SkillName.WardingBreath, maxLevel = 0, spType = SpType.BREATH) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = accelerateCooldown(res(battleUnit, 4, this), 11, this)
    },
    SteadyBreath(SkillName.SteadyBreath, maxLevel = 0, spType = SpType.BREATH) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = accelerateCooldown(def(battleUnit, 4, this), 11, this)
    },
    AtkSpdBond(SkillName.AtkSpdBond, spType = SpType.BASE60) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = if (battleUnit.adjacentUnits > 0) atkSpd(battleUnit, lv + 2, this) else battleUnit
    },
    AtkDefBond(SkillName.AtkDefBond, spType = SpType.BASE60) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = if (battleUnit.adjacentUnits > 0) atkDef(battleUnit, lv + 2, this) else battleUnit
    },
    AtkResBond(SkillName.AtkResBond, spType = SpType.BASE60) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = if (battleUnit.adjacentUnits > 0) atkRes(battleUnit, lv + 2, this) else battleUnit
    },
    SpdDefBond(SkillName.SpdDefBond, spType = SpType.BASE60) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = if (battleUnit.adjacentUnits > 0) spdDef(battleUnit, lv + 2, this) else battleUnit
    },
    SpdResBond(SkillName.SpdResBond, spType = SpType.BASE60) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = if (battleUnit.adjacentUnits > 0) spdRes(battleUnit, lv + 2, this) else battleUnit
    },
    DefResBond(SkillName.DefResBond, spType = SpType.BASE60) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = if (battleUnit.adjacentUnits > 0) defRes(battleUnit, lv + 2, this) else battleUnit
    },

    BrazenAtkSpd(SkillName.BrazenAtkSpd, spType = SpType.BASE60) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = brazenAtkSpd(battleUnit, lv * 2 + 1, this)
    },
    BrazenAtkDef(SkillName.BrazenAtkDef, spType = SpType.BASE60) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = brazenAtkDef(battleUnit, lv * 2 + 1, this)
    },
    BrazenAtkRes(SkillName.BrazenAtkRes, spType = SpType.BASE60) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = brazenAtkRes(battleUnit, lv * 2 + 1, this)
    },
    BrazenDefRes(SkillName.BrazenAtkSpd, spType = SpType.BASE60) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = brazenDefRes(battleUnit, lv * 2 + 1, this)
    },

    AtkSpdPush(SkillName.AtkSpdPush) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = fullHpAtkSpdBonus(battleUnit, lv + 2, 1, this)
    },
    AtkDefPush(SkillName.AtkDefPush) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = fullHpAtkDefBonus(battleUnit, lv + 2, 1, this)
    },
    AtkSpdSolo(SkillName.AtkSpdSolo, spType = SpType.BASE60) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = if (battleUnit.adjacentUnits == 0) atkSpd(battleUnit, lv * 2, this) else battleUnit
    },
    AtkDefSolo(SkillName.AtkDefSolo, spType = SpType.BASE60) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = if (battleUnit.adjacentUnits == 0) atkDef(battleUnit, lv * 2, this) else battleUnit
    },
    AtkResSolo(SkillName.AtkResSolo, spType = SpType.BASE60) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = if (battleUnit.adjacentUnits == 0) atkRes(battleUnit, lv * 2, this) else battleUnit
    },
    DefResSolo(SkillName.AtkResSolo, spType = SpType.BASE60) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = if (battleUnit.adjacentUnits == 0) defRes(battleUnit, lv * 2, this) else battleUnit
    },

    DefiantAtk(SkillName.DefiantAtk, spType = SpType.BASE40) {
        override fun turnStart(battleUnit: BattleUnit, lv: Int): BattleUnit = defiantAtk(battleUnit, lv)
    },
    DefiantSpd(SkillName.DefiantSpd, spType = SpType.BASE40) {
        override fun turnStart(battleUnit: BattleUnit, lv: Int): BattleUnit = defiantSpd(battleUnit, lv)
    },
    DefiantDef(SkillName.DefiantDef, spType = SpType.BASE40) {
        override fun turnStart(battleUnit: BattleUnit, lv: Int): BattleUnit = defiantDef(battleUnit, lv)
    },
    DefiantRes(SkillName.DefiantRes, spType = SpType.BASE40) {
        override fun turnStart(battleUnit: BattleUnit, lv: Int): BattleUnit = defiantRes(battleUnit, lv)
    },
    FireBoost(SkillName.FireBoost) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = boostAtk(battleUnit, enemy, lv * 2, this)
    },
    WindBoost(SkillName.WindBoost) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = boostSpd(battleUnit, enemy, lv * 2, this)
    },
    EarthBoost(SkillName.EarthBoost) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = boostDef(battleUnit, enemy, lv * 2, this)
    },
    WaterBoost(SkillName.WaterBoost) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = boostRes(battleUnit, enemy, lv * 2, this)
    },
    SorceryBlade(SkillName.SorceryBlade) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = penetrate(battleUnit, lv, this)
    },

    OstianCounter(SkillName.OstianCounter, maxLevel = 0, spType = SpType.LEGEND_S) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = atkDef(counterAllRange(battleUnit, this), 4, this)
    },

    SvalinnShield(SkillName.SvalinnShield, maxLevel = 0, spType = SpType.SHIELD) {
        override fun effectedFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = antiEffectiveAgainst(battleUnit, enemy, EffectiveAgainst.ARMORED)
    },

    IotesShield(SkillName.IotesShield, maxLevel = 0, spType = SpType.SHIELD) {
        override fun effectedFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = antiEffectiveAgainst(battleUnit, enemy, EffectiveAgainst.FLIER)
    },

    Dragonskin(SkillName.Dragonskin, maxLevel = 0, spType = SpType.LEGEND_S) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = def(res(battleUnit, 4), 4)
        override fun effectedFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = antiEffectiveAgainst(battleUnit, enemy, EffectiveAgainst.FLIER)
    },

    GranisShield(SkillName.GranisShield, maxLevel = 0, spType = SpType.SHIELD) {
        override fun effectedFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = antiEffectiveAgainst(battleUnit, enemy, EffectiveAgainst.CAVALRY)
    },
    LawsOfSacae(SkillName.LawsOfSacae, maxLevel = 0) {
        //実際は2以上。これ比較対象をユニットに持たせなきゃだめだな
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = if (battleUnit.adjacentUnits > 0) allBonus(battleUnit, 4, this) else battleUnit
    },
    BonusDoubler(SkillName.BonusDoubler) {
        //新たな状態を作らないとダメか…
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit {
            battleUnit.bonusPow = 125 + lv * 25//他にも増えるか強化無効とぶつかったら1になるかしたらBattleUnitの関数にしよう…
            return battleUnit
        }
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
        fun spreadItems(none: Boolean = false): List<Skill> = values().fold(if (none) mutableListOf<Skill>(Skill.NONE) else mutableListOf()) { list, e ->
            if (e.maxLevel == 0) {
                list.add(e)
            } else (1..e.maxLevel).forEach { i -> list.add(e.lv(i)) };list
        }

        fun spreadMaxLvItems(none: Boolean = false): List<Skill> = values().fold(if (none) mutableListOf<Skill>(Skill.NONE) else mutableListOf()) { list, e ->
            when (e.maxLevel) {
                0 -> list.add(e)
                4 -> {
                    list.add(e.lv(3));list.add(e.lv(4))
                }
                else -> list.add(e.lv(e.maxLevel))
            }
            list
        }

        private val itemMap = mutableMapOf<String, SkillA>()

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