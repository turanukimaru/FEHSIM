package jp.blogspot.turanukimaru.fehs.skill

import jp.blogspot.turanukimaru.fehs.*

/**
 * 聖印
 */
enum class Seal(override val jp: Name, override val type: SkillType, override val level: Int = 0, override val preSkill: Skill = Skill.NONE, override val maxLevel: Int = 3) : Skill {

    Hp(Name. Hp  , SkillType.A) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipHp(armedHero, lv)
    },
    SquadAceA( Name.SquadAceA  , SkillType.A) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipHp(armedHero, lv)
    },
    Attack( Name. Attack , SkillType.A) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipAtk(armedHero, lv)
    },
    Speed( Name.Speed  , SkillType.A) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipSpd(armedHero, lv)
    },
    SquadAceD( Name.SquadAceD  , SkillType.A) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipSpd(armedHero, lv)
    },
    Defense( Name.Defense  , SkillType.A) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipDef(armedHero, lv)
    },
    SquadAceB( Name.SquadAceB  , SkillType.A) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipDef(armedHero, lv)
    },
    Resistance(Name. Resistance  , SkillType.A) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipRes(armedHero, lv)
    },
    SquadAceC(Name.SquadAceC   , SkillType.A) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipRes(armedHero, lv)
    },
    DistantDef( Name.DistantDef  , SkillType.A) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = distantDef(battleUnit, lv * 2)
    },
    BrashAssault( Name.BrashAssault  , SkillType.B) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = brashAssault(battleUnit, lv)
    },
    SpurAtk( Name. SpurAtk , SkillType.SEAL),
    SpurSpd( Name. SpurSpd , SkillType.SEAL),
    SpurDef( Name.SpurDef  , SkillType.SEAL),
    SpurRes( Name. SpurRes , SkillType.SEAL),
    FortifyDef(Name.FortifyDef   , SkillType.SEAL),
    FortifyRes( Name.FortifyRes  , SkillType.SEAL),
    BreathOfLife(Name. BreathOfLife  , SkillType.SEAL),
    Guidance(Name. Guidance  , SkillType.SEAL),
    AttackSmoke( Name.AtkSmoke  , SkillType.SEAL),
    AttackPloy( Name. AtkPloy , SkillType.SEAL),

    PanicPloy(  Name.PanicPloy , SkillType.SEAL),
    HardyBearing( Name. HardyBearing , SkillType.SEAL) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit {
            battleUnit.disableChangePlan = true
            if (battleUnit.hp >= battleUnit.armedHero.maxHp * (150 - lv * 50) / 100) {
                battleUnit.enemy!!.disableChangePlan = true
            }
            return super.bothEffect(battleUnit, lv)
        }

    },
    PhantomSpeed(  Name. PhantomSpeed, SkillType.SEAL) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit {
            battleUnit.phantomSpeed = when (lv) {1 -> 5
                2 -> 8
                3 -> 10
                else -> 0
            }
            return super.bothEffect(battleUnit, lv)
        }
    },
    QuickenedPulse( Name.QuickenedPulse  , SkillType.SEAL, maxLevel = 0),

    /**
     * 連撃防御。武器の種類はなんか定数に定数を持たせるべきか…
     */
    DeflectMagic( Name.DeflectMagic  , SkillType.SEAL) {
        override fun prevent(battleUnit: BattleUnit, damage: Int, results: List<AttackResult>, lv: Int): Int
                = if (results.isNotEmpty() && results.last().side != battleUnit.side && battleUnit.enemy!!.armedHero.isMagicWeapon()) damage - damage * when (lv) {
            1 -> 3
            2 -> 5
            3 -> 8
            else -> 0
        } / 10 else damage
    },

    DeflectMelee(Name. DeflectMelee  , SkillType.SEAL) {
        override fun prevent(battleUnit: BattleUnit, damage: Int, results: List<AttackResult>, lv: Int): Int
                = if (results.isNotEmpty() && results.last().side != battleUnit.side && battleUnit.enemy!!.armedHero.isMagicWeapon()) damage - damage * when (lv) {
            1 -> 3
            2 -> 5
            3 -> 8
            else -> 0
        } / 10 else damage
    },
    DeflectMissile( Name. DeflectMissile , SkillType.SEAL) {
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

  //  override fun localeName(locale: Locale): String = jp.localeName (locale)

    companion object {
        fun spreadItems(none:Boolean = false): List<Skill> = values().fold(if(none) arrayListOf<Skill>(Skill.NONE) else arrayListOf(), { list, e -> (1..e.maxLevel).forEach({ i -> list.add(e.lv(i)) });list })
        private val itemMap = mutableMapOf<String, Seal>()

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