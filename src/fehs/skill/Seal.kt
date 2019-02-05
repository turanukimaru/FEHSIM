package jp.blogspot.turanukimaru.fehs.skill

import jp.blogspot.turanukimaru.fehs.*

/**
 * 聖印
 */
enum class Seal(override val jp: SkillName, override val type: SkillType = SkillType.SEAL, override val level: Int = 0, override val preSkill: Skill = Skill.NONE, override val maxLevel: Int = 3, override val spType: SpType = SpType.BASE50) : Skill {
    Hp(SkillName.Hp) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipHp(armedHero, lv + 2)
    },
    HpRes(SkillName.HpRes, maxLevel = 2, spType = SpType.BASE100) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipHp(equipRes(armedHero, lv), lv + 2)
    },
    Attack(SkillName.Attack) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipAtk(armedHero, lv)
    },
    AtkDef(SkillName.AtkDef, SkillType.A, maxLevel = 2, spType = SpType.BASE80) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipAtk(equipDef(armedHero, lv), lv)
    },
    Speed(SkillName.Speed) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipSpd(armedHero, lv)
    },
    Defense(SkillName.Defense) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipDef(armedHero, lv)
    },
    Resistance(SkillName.Resistance) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipRes(armedHero, lv)
    },
    SquadAceA(SkillName.SquadAceA) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipHp(armedHero, lv + 2)
    },
    SquadAceB(SkillName.SquadAceB) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipDef(armedHero, lv)
    },
    SquadAceC(SkillName.SquadAceC) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipRes(armedHero, lv)
    },
    SquadAceD(SkillName.SquadAceD) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipSpd(armedHero, lv)
    },
    SquadAceE(SkillName.SquadAceC) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipAtk(armedHero, lv)
    },
    SquadAceF(SkillName.SquadAceC) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipHp(armedHero, lv + 2)
    },
    CloseDef(SkillName.CloseDef, spType = SpType.BASE60) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = closeDef(battleUnit, enemy, lv * 2)
    },
    DistantDef(SkillName.DistantDef, spType = SpType.BASE60) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = distantDef(battleUnit, enemy, lv * 2)
    },
    FortressDef(SkillName.FortressDef, spType = SpType.BASE40) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipAtk(equipDef(armedHero, lv + 2), -3)
    },
    FortressRes(SkillName.FortressRes, spType = SpType.BASE40) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipAtk(equipRes(armedHero, lv + 2), -3)
    },
    BrashAssault(SkillName.BrashAssault) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = brashAssault(battleUnit, enemy, lv)
    },
    HardyBearing(SkillName.HardyBearing) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit {
            battleUnit.disableChangePlan = true
            if (battleUnit.hp >= battleUnit.armedHero.maxHp * (150 - lv * 50) / 100) {
                enemy.disableChangePlan = true
            }
            return super.fightEffect(battleUnit, enemy, lv)
        }

    },
    HeavyBlade(SkillName.BrashAssault, SkillType.B, spType = SpType.BASE60) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = heavyBlade(battleUnit, enemy, lv)
    },
    FlashingBlade(SkillName.FlashingBlade, spType = SpType.BASE60) {
        override fun effectedAttackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = flashingBlade(battleUnit, enemy, 7 - lv * 2)
        override fun effectedCounterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = flashingBlade(battleUnit, enemy, 7 - lv * 2)
    },
    PhantomSpeed(SkillName.PhantomSpeed) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit {
            battleUnit.phantomSpeed = when (lv) {
                1 -> 5
                2 -> 8
                3 -> 10
                else -> 0
            }
            return super.fightEffect(battleUnit, enemy, lv)
        }
    },
    PoisonStrike(SkillName.PoisonStrike, spType = SpType.BASE60) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = attackPain(battleUnit, enemy, lv * 3 + 1)
    },
    QuickRiposte(SkillName.QuickRiposte, spType = SpType.BASE60) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = followupable(battleUnit, lv)
    },
    /**
     * 連撃防御。武器の種類はなんか定数に定数を持たせるべきか…
     */
    DeflectMagic(SkillName.DeflectMagic) {
        override fun prevent(battleUnit: BattleUnit, damage: Int, source: BattleUnit, results: List<AttackResult>, lv: Int): Int = if (results.isNotEmpty() && results.last().side != battleUnit.side && source.armedHero.isMagicWeapon()) damage - damage * when (lv) {
            1 -> 3
            2 -> 5
            3 -> 8
            else -> 0
        } / 10 else damage
    },
    DeflectMelee(SkillName.DeflectMelee) {
        override fun prevent(battleUnit: BattleUnit, damage: Int, source: BattleUnit, results: List<AttackResult>, lv: Int): Int = if (results.isNotEmpty() && results.last().side != battleUnit.side && source.armedHero.isMagicWeapon()) damage - damage * when (lv) {
            1 -> 3
            2 -> 5
            3 -> 8
            else -> 0
        } / 10 else damage
    },
    DeflectMissile(SkillName.DeflectMissile) {
        override fun prevent(battleUnit: BattleUnit, damage: Int, source: BattleUnit, results: List<AttackResult>, lv: Int): Int = if (results.isNotEmpty() && results.last().side != battleUnit.side && source.armedHero.isMagicWeapon()) damage - damage * when (lv) {
            1 -> 3
            2 -> 5
            3 -> 8
            else -> 0
        } / 10 else damage
    },
    AtkDefBond(SkillName.AtkDefBond, spType = SpType.BASE60) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = if (battleUnit.adjacentUnits > 0) atk(def(battleUnit, lv + 2), lv + 2) else battleUnit
    },
    BrazenAtkRes(SkillName.BrazenAtkRes, spType = SpType.BASE60) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = brazenAtkRes(battleUnit, lv * 2 + 1)
    },
    DartingStance(SkillName.DartingStance) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = spd(battleUnit, lv * 2)
    },
    SpdDef(SkillName.SpdDef, maxLevel = 2, spType = SpType.BASE80) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipSpd(equipDef(armedHero, lv), lv)
    },
    WaterBoost(SkillName.WaterBoost) {
        override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = boostRes(battleUnit, enemy, lv * 2)
    },

    ArmoredBoots(SkillName.ArmoredBoots, maxLevel = 0, spType = SpType.STEEL),
    BreathOfLife(SkillName.BreathOfLife),
    FlierFormation(SkillName.FlierFormation, spType = SpType.BASE60),
    Guidance(SkillName.Guidance, spType = SpType.BASE60),

    IotesShield(SkillName.IotesShield, maxLevel = 0, spType = SpType.SHIELD) {
        override fun effectedAttackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = antiEffectiveAgainst(battleUnit, enemy, EffectiveAgainst.FLIER)
        override fun effectedCounterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = antiEffectiveAgainst(battleUnit, enemy, EffectiveAgainst.FLIER)
    },
    LiveToServe(SkillName.LiveToServe, spType = SpType.BASE40),
    Obstruct(SkillName.Obstruct),
    QuickenedPulse(SkillName.QuickenedPulse, maxLevel = 0),
    SavageBlow(SkillName.SavageBlow),

    BlazeDance(SkillName.BlazeDance),
    //    GaleDance(SkillName.GaleDance),
    EarthDance(SkillName.EarthDance),
    //    TorrentDance(SkillName.TorrentDance),
    SpurAtk(SkillName.SpurAtk),
    SpurSpd(SkillName.SpurSpd),
    SpurDef(SkillName.SpurDef),
    SpurRes(SkillName.SpurRes),
    PanicPloy(SkillName.PanicPloy, spType = SpType.BASE60),
    AtkPloy(SkillName.AtkPloy, spType = SpType.BASE60),
    SpdPloy(SkillName.SpdPloy, spType = SpType.BASE60),
    DefPloy(SkillName.DefPloy, spType = SpType.BASE60),
    ResPloy(SkillName.ResPloy, spType = SpType.BASE60),
    DriveAtk(SkillName.DriveAtk, maxLevel = 2, spType = SpType.BASE60),
    DriveDef(SkillName.DriveDef, maxLevel = 2, spType = SpType.BASE60),
    DriveSpd(SkillName.DriveSpd, maxLevel = 2, spType = SpType.BASE60),
    //    DriveRes(SkillName.DriveRes, maxLevel = 2, spType = SpType.BASE60),
    DefTactic(SkillName.DefTactic, spType = SpType.BASE60),
    ResTactic(SkillName.ResTactic, spType = SpType.BASE60),
    AttackSmoke(SkillName.AtkSmoke, spType = SpType.BASE60),
    SpdSmoke(SkillName.SpdSmoke, spType = SpType.BASE60),
    FortifyDef(SkillName.FortifyDef),
    FortifyRes(SkillName.FortifyRes),
    HoneAtk(SkillName.HoneAtk),
    HoneSpd(SkillName.HoneSpd),
    SealAtk(SkillName.SealAtk, spType = SpType.BASE40),
    SealSpd(SkillName.SealSpd, spType = SpType.BASE40),
    ThreatenAtk(SkillName.ThreatenAtk),
    ThreatenSpd(SkillName.ThreatenSpd),
    ThreatenDef(SkillName.ThreatenDef),
//    ThreatenRes(SkillName.ThreatenRes),
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

        private val itemMap = mutableMapOf<String, Seal>()

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