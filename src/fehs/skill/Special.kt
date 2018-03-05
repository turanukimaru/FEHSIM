package jp.blogspot.turanukimaru.fehs.skill

import jp.blogspot.turanukimaru.fehs.BattleUnit
import jp.blogspot.turanukimaru.fehs.Name
import jp.blogspot.turanukimaru.fehs.SkillType
import jp.blogspot.turanukimaru.fehs.HandmaidMath

/**
 * スキル。武器/補助/奥義
 */
enum class Special(override val jp: Name, override val type: SkillType, override val level: Int = 0, override val preSkill: Skill = Skill.NONE) : Skill {


    DayLight(Name.Daylight, SkillType.SPECIAL_A, 3) {
        override fun absorb(battleUnit: BattleUnit, target: BattleUnit, damage: Int): Int {
            battleUnit.heal(damage * 3 / 10)
            return damage
        }
    },
    Noontime(Name.Noontime, SkillType.SPECIAL_A, 2) {
        override fun absorb(battleUnit: BattleUnit, target: BattleUnit, damage: Int): Int {
            battleUnit.heal(damage * 3 / 10)
            return damage
        }
    },
    Sol(Name.Sol, SkillType.SPECIAL_A, 3) {
        override fun absorb(battleUnit: BattleUnit, target: BattleUnit, damage: Int): Int {
            battleUnit.heal(damage * 5 / 10)
            return damage
        }
    },
    NightSky(Name.NightSky, SkillType.SPECIAL_A, 3) {
        override fun damage(source: BattleUnit, target: BattleUnit, prevent: Int): Int = super.damage(source, target, prevent) * 15 / 10

    },
    Glimmer(Name.Glimmer, SkillType.SPECIAL_A, 2) {
        override fun damage(source: BattleUnit, target: BattleUnit, prevent: Int): Int = super.damage(source, target, prevent) * 15 / 10

    },
    Astra(Name.Astra, SkillType.SPECIAL_A, 4) {
        override fun damage(source: BattleUnit, target: BattleUnit, prevent: Int): Int = super.damage(source, target, prevent) * 25 / 10

    },
    RegnalAstra(Name.RegnalAstra, SkillType.SPECIAL_A, 2) {
        override fun baseDamage(source: BattleUnit, target: BattleUnit): Int = source.colorAttack(target) + source.effectedSpd * 4 / 10
    },
    DraconicAura(Name.DraconicAura, SkillType.SPECIAL_A, 3) {
        override fun baseDamage(source: BattleUnit, target: BattleUnit): Int = source.colorAttack(target) + source.effectedAtk * 3 / 10
    },
    DragonGaze(Name.DragonGaze, SkillType.SPECIAL_A, 4) {
        override fun baseDamage(source: BattleUnit, target: BattleUnit): Int = source.colorAttack(target) + source.effectedAtk * 3 / 10
    },
    DragonFang(Name.DragonFang, SkillType.SPECIAL_A, 4) {
        override fun baseDamage(source: BattleUnit, target: BattleUnit): Int = source.colorAttack(target) + source.effectedAtk * 5 / 10
    },
    GlowingEmber(Name.GlowingEmber, SkillType.SPECIAL_A, 4) {
        override fun baseDamage(source: BattleUnit, target: BattleUnit): Int = source.colorAttack(target) + source.effectedDef * 5 / 10
    },
    Bonfire(Name.Bonfire, SkillType.SPECIAL_A, 3) {
        override fun baseDamage(source: BattleUnit, target: BattleUnit): Int = source.colorAttack(target) + source.effectedDef * 5 / 10
    },
    Ignis(Name.Ignis, SkillType.SPECIAL_A, 4) {
        override fun baseDamage(source: BattleUnit, target: BattleUnit): Int = source.colorAttack(target) + source.effectedDef * 8 / 10
    },
    ChillingWind(Name.ChillingWind, SkillType.SPECIAL_A, 4) {
        override fun baseDamage(source: BattleUnit, target: BattleUnit): Int = source.colorAttack(target) + source.effectedRes * 5 / 10
    },
    Iceberg(Name.Iceberg, SkillType.SPECIAL_A, 3) {
        override fun baseDamage(source: BattleUnit, target: BattleUnit): Int = source.colorAttack(target) + source.effectedRes * 5 / 10
    },
    Glacies(Name.Glacies, SkillType.SPECIAL_A, 4) {
        override fun baseDamage(source: BattleUnit, target: BattleUnit): Int = source.colorAttack(target) + source.effectedRes * 8 / 10
    },

    Aether(Name.Aether, SkillType.SPECIAL_A, 5) {
        override val penetrate: Int get() = 50

        override fun absorb(battleUnit: BattleUnit, target: BattleUnit, damage: Int): Int {
            battleUnit.heal(damage * 5 / 10)
            return damage
        }
    },
    RadiantAether(Name.RadiantAether, SkillType.SPECIAL_A, 4) {
        override val penetrate: Int get() = 50

        override fun absorb(battleUnit: BattleUnit, target: BattleUnit, damage: Int): Int {
            battleUnit.heal(damage * 5 / 10)
            return damage
        }
    },
    NewMoon(Name.NewMoon, SkillType.SPECIAL_A, 3) {
        override val penetrate: Int get() = 30
    },
    Moonbow(Name.Moonbow, SkillType.SPECIAL_A, 2) {
        override val penetrate: Int get() = 30
    },
    Luna(Name.Luna, SkillType.SPECIAL_A, 3) {
        override val penetrate: Int get() = 50
    },
    BlackLuna(Name.BlackLuna, SkillType.SPECIAL_A, 3) {
        override val penetrate: Int get() = 80
    },

    Retribution(Name.Retribution, SkillType.SPECIAL_A, 3) {
        override fun baseDamage(source: BattleUnit, target: BattleUnit): Int = source.colorAttack(target) + (source.armedHero.maxHp - source.hp) * 3 / 10
    },
    Reprisal(Name.Reprisal, SkillType.SPECIAL_A, 2) {
        override fun baseDamage(source: BattleUnit, target: BattleUnit): Int = source.colorAttack(target) + (source.armedHero.maxHp - source.hp) * 3 / 10
    },
    Vengeance(Name.Vengeance, SkillType.SPECIAL_A, 3) {
        override fun baseDamage(source: BattleUnit, target: BattleUnit): Int = source.colorAttack(target) + (source.armedHero.maxHp - source.hp) * 5 / 10
    },

    Miracle(Name.Miracle, SkillType.SPECIAL_C, 5) {
        override fun specialPrevent(battleUnit: BattleUnit, damage: Int, source: BattleUnit, lv: Int): Pair<Int, Skill> = if (battleUnit.hp in 2..damage) Pair(battleUnit.hp - 1, this) else super.specialPrevent(battleUnit, damage, source, lv)
    },
    HolyVestments(Name.HolyVestments, SkillType.SPECIAL_C, 3) {
        override fun specialPrevent(battleUnit: BattleUnit, damage: Int, source: BattleUnit, lv: Int): Pair<Int, Skill> = if (source.armedHero.baseHero.weapon.type.weaponType!!.range == 2) Pair(HandmaidMath.max(0, damage - damage * 3 / 10+lv), this) else super.specialPrevent(battleUnit, damage, source, lv)
    },
    SacredCowl(Name.SacredCowl, SkillType.SPECIAL_C, 2) {
        override fun specialPrevent(battleUnit: BattleUnit, damage: Int, source: BattleUnit, lv: Int): Pair<Int, Skill> = if (source.armedHero.baseHero.weapon.type.weaponType!!.range == 2) Pair(HandmaidMath.max(0, damage - damage * 3 / 10+lv), this) else super.specialPrevent(battleUnit, damage, source, lv)
    },
    IceMirror(Name.IceMirror, SkillType.SPECIAL_C, 2) {
        override fun specialPrevent(battleUnit: BattleUnit, damage: Int, source: BattleUnit, lv: Int): Pair<Int, Skill> = if (source.armedHero.baseHero.weapon.type.weaponType!!.range == 2) Pair(HandmaidMath.max(0, damage - damage * 3 / 10+lv), this) else super.specialPrevent(battleUnit, damage, source, lv)

        override fun preventedDamage(battleUnit: BattleUnit, damage: Int, lv: Int): BattleUnit {
            battleUnit.oneTimeOnlyAdditionalDamage = damage
            return battleUnit
        }

    },
    Aegis(Name.Aegis, SkillType.SPECIAL_C, 3) {
        override fun specialPrevent(battleUnit: BattleUnit, damage: Int, source: BattleUnit, lv: Int): Pair<Int, Skill> = if (source.armedHero.baseHero.weapon.type.weaponType!!.range == 2) Pair(HandmaidMath.max(0, damage - damage * 5 / 10+lv), this) else super.specialPrevent(battleUnit, damage, source, lv)
    },
    Buckler(Name.Buckler, SkillType.SPECIAL_C, 3) {
        override fun specialPrevent(battleUnit: BattleUnit, damage: Int, source: BattleUnit, lv: Int): Pair<Int, Skill> = if (source.armedHero.baseHero.weapon.type.weaponType!!.range == 1) Pair(HandmaidMath.max(0, damage - damage * 3 / 10+lv), this) else super.specialPrevent(battleUnit, damage, source, lv)
    },
    Escutcheon(Name.Escutcheon, SkillType.SPECIAL_C, 2) {
        override fun specialPrevent(battleUnit: BattleUnit, damage: Int, source: BattleUnit, lv: Int): Pair<Int, Skill> = if (source.armedHero.baseHero.weapon.type.weaponType!!.range == 1) Pair(HandmaidMath.max(0, damage - damage * 3 / 10+lv), this) else super.specialPrevent(battleUnit, damage, source, lv)
    },
    Pavise(Name.Pavise, SkillType.SPECIAL_C, 3) {
        override fun specialPrevent(battleUnit: BattleUnit, damage: Int, source: BattleUnit, lv: Int): Pair<Int, Skill> = if (source.armedHero.baseHero.weapon.type.weaponType!!.range == 1) Pair(HandmaidMath.max(0, damage - damage * 5 / 10+lv), this) else super.specialPrevent(battleUnit, damage, source, lv)
    },
    Galeforce(Name.Galeforce, SkillType.SPECIAL_D, 5),
    Imbue(Name.Imbue, SkillType.SPECIAL_D, 1),
    HeavenlyLight(Name.HeavenlyLight, SkillType.SPECIAL_D, 2),
    SolidEarthBalm(Name.SolidEarthBalm, SkillType.SPECIAL_D, 1),
    SwiftWindsBalm(Name.SwiftWindsBalm, SkillType.SPECIAL_D, 1),
    KindledFireBalm(Name.KindledFireBalm, SkillType.SPECIAL_D, 1),
    StillWaterBalm(Name.StillWaterBalm, SkillType.SPECIAL_D, 1),

    RisingFlame(Name.RisingFlame, SkillType.SPECIAL_B, 4),
    BlazingFlame(Name.BlazingFlame, SkillType.SPECIAL_B, 4),
    GrowingFlame(Name.GrowingFlame, SkillType.SPECIAL_B, 4),
    RisingLight(Name.RisingLight, SkillType.SPECIAL_B, 4),
    BlazingLight(Name.BlazingLight, SkillType.SPECIAL_B, 4),
    GrowingLight(Name.GrowingLight, SkillType.SPECIAL_B, 4),
    RisingWind(Name.RisingWind, SkillType.SPECIAL_B, 4),
    BlazingWind(Name.BlazingWind, SkillType.SPECIAL_B, 4),
    GrowingWind(Name.GrowingWind, SkillType.SPECIAL_B, 4),
    RisingThunder(Name.RisingThunder, SkillType.SPECIAL_B, 4),
    BlazingThunder(Name.BlazingThunder, SkillType.SPECIAL_B, 4),
    GrowingThunder(Name.GrowingThunder, SkillType.SPECIAL_B, 4),

    ;

    /**
     * nameは誤動作するので共通処理としてはvalueを使う。もっといい名前があるか？
     * なお2を＋に置き換える。
     */
    override val value get() = name.replace("2", "+")

    //  override fun localeName(locale: Locale): String =jp.localeName(locale)

    companion object {
        private val itemMap = mutableMapOf<String, Skill>()
        fun spreadItems(none: Boolean = false): List<Skill> = values().fold(if (none) arrayListOf<Skill>(Skill.NONE) else arrayListOf(), { list, e -> list.add(e);list })

        fun valueOfOrNONE(key: String?): Skill = if (key == null) Skill.NONE else try {
            if (itemMap.isEmpty()) {
                values().forEach { e -> itemMap.put(e.jp.jp, e);itemMap.put(e.value, e);itemMap.put(e.jp.us, e);itemMap.put(e.jp.tw, e) }
            }
            itemMap[key] ?: valueOf(key)
        } catch (e: Exception) {
            Skill.NONE
        }
    }
}