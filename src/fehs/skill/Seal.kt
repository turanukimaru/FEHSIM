package jp.blogspot.turanukimaru.fehs.skill

import jp.blogspot.turanukimaru.fehs.ArmedHero
import jp.blogspot.turanukimaru.fehs.AttackResult
import jp.blogspot.turanukimaru.fehs.BattleUnit
import jp.blogspot.turanukimaru.fehs.Locale

/**
 * 聖印
 */
enum class Seal(override val jp: String, override val type: Skill.SkillType, override val level: Int = 0, override val preSkill: Skill = Skill.NONE, override val maxLevel: Int = 3) : Skill {

    Hp("HP", Skill.SkillType.A) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipHp(armedHero, lv)
    },
    SquadAceA("第1迷宮の覇者", Skill.SkillType.A) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipHp(armedHero, lv)
    },
    Attack("攻撃", Skill.SkillType.A) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipAtk(armedHero, lv)
    },
    Speed("速さ", Skill.SkillType.A) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipSpd(armedHero, lv)
    },
    SquadAceD("第4迷宮の覇者", Skill.SkillType.A) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipSpd(armedHero, lv)
    },
    Defense("守備", Skill.SkillType.A) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipDef(armedHero, lv)
    },
    SquadAceB("第3迷宮の覇者", Skill.SkillType.A) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipDef(armedHero, lv)
    },
    Resistance("魔防", Skill.SkillType.A) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipRes(armedHero, lv)
    },
    SquadAceC("第3迷宮の覇者", Skill.SkillType.A) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipRes(armedHero, lv)
    },
    DistantDef("遠距離防御", Skill.SkillType.A) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = distantDef(battleUnit, lv * 2)
    },
    BrashAssault("差し違え", Skill.SkillType.B) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = brashAssault(battleUnit, lv)
    },
    SpurAtk("攻撃の紋章", Skill.SkillType.SEAL),
    SpurSpd("速さの紋章", Skill.SkillType.SEAL),
    SpurDef("守備の紋章", Skill.SkillType.SEAL),
    SpurRes("魔防の紋章", Skill.SkillType.SEAL),
    FortifyDef("守備の鼓舞", Skill.SkillType.SEAL),
    FortifyRes("魔防の鼓舞", Skill.SkillType.SEAL),
    BreathOfLife("生命の息吹", Skill.SkillType.SEAL),
    Guidance("空からの先導", Skill.SkillType.SEAL),
    AttackSmoke("攻撃の紫煙", Skill.SkillType.SEAL),
    AttackPloy("攻撃の謀策", Skill.SkillType.SEAL),

    PanicPloy("恐慌の奇策", Skill.SkillType.SEAL),
    HardyBearing("不動の姿勢", Skill.SkillType.SEAL) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit {
            battleUnit.disableChangePlan = true
            if (battleUnit.hp >= battleUnit.armedHero.maxHp * (150 - lv * 50) / 100) {
                battleUnit.enemy!!.disableChangePlan = true
            }
            return super.bothEffect(battleUnit, lv)
        }

    },
    PhantomSpeed("速さの虚勢", Skill.SkillType.SEAL) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit {
            battleUnit.phantomSpeed = when (lv) {1 -> 5
                2 -> 8
                3 -> 10
                else -> 0
            }
            return super.bothEffect(battleUnit, lv)
        }
    },
    QuickenedPulse("奥義の鼓動", Skill.SkillType.SEAL, maxLevel = 0),

    /**
     * 連撃防御。武器の種類はなんか定数に定数を持たせるべきか…
     */
    DeflectMagic("連撃防御・魔", Skill.SkillType.SEAL) {
        override fun prevent(battleUnit: BattleUnit, damage: Int, results: List<AttackResult>, lv: Int): Int
                = if (results.isNotEmpty() && results.last().side != battleUnit.side && battleUnit.enemy!!.armedHero.isMagicWeapon()) damage - damage * when (lv) {
            1 -> 3
            2 -> 5
            3 -> 8
            else -> 0
        } / 10 else damage
    },

    DeflectMelee("連撃防御・剣槍斧", Skill.SkillType.SEAL) {
        override fun prevent(battleUnit: BattleUnit, damage: Int, results: List<AttackResult>, lv: Int): Int
                = if (results.isNotEmpty() && results.last().side != battleUnit.side && battleUnit.enemy!!.armedHero.isMagicWeapon()) damage - damage * when (lv) {
            1 -> 3
            2 -> 5
            3 -> 8
            else -> 0
        } / 10 else damage
    },
    DeflectMissile("連撃防御・弓暗器", Skill.SkillType.SEAL) {
        override fun prevent(battleUnit: BattleUnit, damage: Int, results: List<AttackResult>, lv: Int): Int
                = if (results.isNotEmpty() && results.last().side != battleUnit.side && battleUnit.enemy!!.armedHero.isMagicWeapon()) damage - damage * when (lv) {
            1 -> 3
            2 -> 5
            3 -> 8
            else -> 0
        } / 10 else damage
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
        private val itemMap = mutableMapOf<String, Seal>()

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