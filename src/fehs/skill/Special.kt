package jp.blogspot.turanukimaru.fehs.skill

import jp.blogspot.turanukimaru.fehs.*

/**
 * スキル。奥義
 */
enum class Special(override val jp: SkillName, override val type: SkillType, override val level: Int = 0, override val preSkill: Skill = Skill.NONE, override val mitMod: Int = 0, override val penetrate: Int = 0, override val heal: Int = 0, override val offMlt: Int = 10, override val stateDamage: (BattleUnit) -> Int = { _ -> 0 }, override val spType: SpType = SpType.SPECIAL4) : Skill {
    DayLight(SkillName.Daylight, SkillType.SPECIAL_A, 3, heal = 30, spType = SpType.SPECIAL3),
    Noontime(SkillName.Noontime, SkillType.SPECIAL_A, 2, heal = 30),
    Sol(SkillName.Sol, SkillType.SPECIAL_A, 3, heal = 50),
    NightSky(SkillName.NightSky, SkillType.SPECIAL_A, 3, offMlt = 15, spType = SpType.SPECIAL3),
    Glimmer(SkillName.Glimmer, SkillType.SPECIAL_A, 2, offMlt = 15),
    Astra(SkillName.Astra, SkillType.SPECIAL_A, 4, offMlt = 25),
    RegnalAstra(SkillName.RegnalAstra, SkillType.SPECIAL_A, 2, stateDamage = { source -> source.effectedSpd * 4 / 10 }, spType = SpType.SPECIAL5),
    FireEmblem(SkillName.FireEmblem, SkillType.SPECIAL_A, 2, stateDamage = { source -> source.effectedSpd * 3 / 10 }, spType = SpType.SPECIAL5),
    DragonGaze(SkillName.DragonGaze, SkillType.SPECIAL_A, 4, stateDamage = { source -> source.effectedAtk * 3 / 10 }, spType = SpType.SPECIAL3),
    DraconicAura(SkillName.DraconicAura, SkillType.SPECIAL_A, 3, stateDamage = { source -> source.effectedAtk * 3 / 10 }),
    DragonFang(SkillName.DragonFang, SkillType.SPECIAL_A, 4, stateDamage = { source -> source.effectedAtk * 5 / 10 }),
    GlowingEmber(SkillName.GlowingEmber, SkillType.SPECIAL_A, 4, stateDamage = { source -> source.effectedDef * 5 / 10 }, spType = SpType.SPECIAL3),
    Bonfire(SkillName.Bonfire, SkillType.SPECIAL_A, 3, stateDamage = { source -> source.effectedDef * 5 / 10 }),
    Ignis(SkillName.Ignis, SkillType.SPECIAL_A, 4, stateDamage = { source -> source.effectedDef * 8 / 10 }),
    ChillingWind(SkillName.ChillingWind, SkillType.SPECIAL_A, 4, stateDamage = { source -> source.effectedRes * 5 / 10 }, spType = SpType.SPECIAL3),
    Iceberg(SkillName.Iceberg, SkillType.SPECIAL_A, 3, stateDamage = { source -> source.effectedRes * 5 / 10 }),
    Glacies(SkillName.Glacies, SkillType.SPECIAL_A, 4, stateDamage = { source -> source.effectedRes * 8 / 10 }),
    Aether(SkillName.Aether, SkillType.SPECIAL_A, 5, penetrate = 50, heal = 50, spType = SpType.SPECIAL5),
    RadiantAether(SkillName.RadiantAether, SkillType.SPECIAL_A, 4, penetrate = 50, heal = 50, spType = SpType.SPECIAL5),
    NewMoon(SkillName.NewMoon, SkillType.SPECIAL_A, 3, penetrate = 30, spType = SpType.SPECIAL3),
    Moonbow(SkillName.Moonbow, SkillType.SPECIAL_A, 2, penetrate = 30),
    Luna(SkillName.Luna, SkillType.SPECIAL_A, 3, penetrate = 50),
    BlackLuna(SkillName.BlackLuna, SkillType.SPECIAL_A, 3, penetrate = 80, spType = SpType.SPECIAL5),
    Retribution(SkillName.Retribution, SkillType.SPECIAL_A, 3, stateDamage = { source -> (source.armedHero.maxHp - source.hp) * 3 / 10 }, spType = SpType.SPECIAL3),
    Reprisal(SkillName.Reprisal, SkillType.SPECIAL_A, 2, stateDamage = { source -> (source.armedHero.maxHp - source.hp) * 3 / 10 }),
    Vengeance(SkillName.Vengeance, SkillType.SPECIAL_A, 3, stateDamage = { source -> (source.armedHero.maxHp - source.hp) * 5 / 10 }),
    BlueFlame(SkillName.BlueFlame, SkillType.SPECIAL_A, 3, stateDamage = { source -> 10 + if (source.adjacentUnits > 0) 15 else 0 }),

    Miracle(SkillName.Miracle, SkillType.SPECIAL_C, 5, spType = SpType.SPECIAL5) {
        override fun specialPrevent(battleUnit: BattleUnit, damage: Int, source: BattleUnit, lv: Int): Pair<Int, Skill> = if (battleUnit.hp in 2..damage) Pair(battleUnit.hp - 1, this) else super.specialPrevent(battleUnit, damage, source, lv)
    },
    HolyVestments(SkillName.HolyVestments, SkillType.SPECIAL_C, 3) {
        override fun specialPrevent(battleUnit: BattleUnit, damage: Int, source: BattleUnit, lv: Int): Pair<Int, Skill> = if (source.armedHero.baseHero.weapon.type.weaponType!!.range == 2) Pair(HandmaidMath.max(0, damage - damage * 3 / 10 + lv), this) else super.specialPrevent(battleUnit, damage, source, lv)
    },
    SacredCowl(SkillName.SacredCowl, SkillType.SPECIAL_C, 2) {
        override fun specialPrevent(battleUnit: BattleUnit, damage: Int, source: BattleUnit, lv: Int): Pair<Int, Skill> = if (source.armedHero.baseHero.weapon.type.weaponType!!.range == 2) Pair(HandmaidMath.max(0, damage - damage * 3 / 10 + lv), this) else super.specialPrevent(battleUnit, damage, source, lv)
    },
    IceMirror(SkillName.IceMirror, SkillType.SPECIAL_C, 2, spType = SpType.SPECIAL5) {
        override fun specialPrevent(battleUnit: BattleUnit, damage: Int, source: BattleUnit, lv: Int): Pair<Int, Skill> = if (source.armedHero.baseHero.weapon.type.weaponType!!.range == 2) Pair(HandmaidMath.max(0, damage - damage * 3 / 10 + lv), this) else super.specialPrevent(battleUnit, damage, source, lv)

        override fun preventedDamage(battleUnit: BattleUnit, damage: Int, lv: Int): BattleUnit {
            battleUnit.oneTimeOnlyAdditionalDamage = damage
            return battleUnit
        }

    },
    Aegis(SkillName.Aegis, SkillType.SPECIAL_C, 3) {
        override fun specialPrevent(battleUnit: BattleUnit, damage: Int, source: BattleUnit, lv: Int): Pair<Int, Skill> = if (source.armedHero.baseHero.weapon.type.weaponType!!.range == 2) Pair(HandmaidMath.max(0, damage - damage * 5 / 10 + lv), this) else super.specialPrevent(battleUnit, damage, source, lv)
    },
    Buckler(SkillName.Buckler, SkillType.SPECIAL_C, 3) {
        override fun specialPrevent(battleUnit: BattleUnit, damage: Int, source: BattleUnit, lv: Int): Pair<Int, Skill> = if (source.armedHero.baseHero.weapon.type.weaponType!!.range == 1) Pair(HandmaidMath.max(0, damage - damage * 3 / 10 + lv), this) else super.specialPrevent(battleUnit, damage, source, lv)
    },
    Escutcheon(SkillName.Escutcheon, SkillType.SPECIAL_C, 2) {
        override fun specialPrevent(battleUnit: BattleUnit, damage: Int, source: BattleUnit, lv: Int): Pair<Int, Skill> = if (source.armedHero.baseHero.weapon.type.weaponType!!.range == 1) Pair(HandmaidMath.max(0, damage - damage * 3 / 10 + lv), this) else super.specialPrevent(battleUnit, damage, source, lv)
    },
    Pavise(SkillName.Pavise, SkillType.SPECIAL_C, 3) {
        override fun specialPrevent(battleUnit: BattleUnit, damage: Int, source: BattleUnit, lv: Int): Pair<Int, Skill> = if (source.armedHero.baseHero.weapon.type.weaponType!!.range == 1) Pair(HandmaidMath.max(0, damage - damage * 5 / 10 + lv), this) else super.specialPrevent(battleUnit, damage, source, lv)
    },
    Galeforce(SkillName.Galeforce, SkillType.SPECIAL_D, 5, spType = SpType.SPECIAL5),
    Imbue(SkillName.Imbue, SkillType.SPECIAL_D, 1),
    HeavenlyLight(SkillName.HeavenlyLight, SkillType.SPECIAL_D, 2),
    SolidEarthBalm(SkillName.SolidEarthBalm, SkillType.SPECIAL_D, 1),
    EarthwaterBalm(SkillName.EarthwaterBalm, SkillType.SPECIAL_D, 1),
    EarthwaterBalm2(SkillName.EarthwaterBalm2, SkillType.SPECIAL_D, 1),
    EarthfireBalm(SkillName.EarthfireBalm, SkillType.SPECIAL_D, 1),
    EarthfireBalm2(SkillName.EarthfireBalm2, SkillType.SPECIAL_D, 1),
    SwiftWindsBalm(SkillName.SwiftWindsBalm, SkillType.SPECIAL_D, 1),
    KindledFireBalm(SkillName.KindledFireBalm, SkillType.SPECIAL_D, 1),
    StillWaterBalm(SkillName.StillWaterBalm, SkillType.SPECIAL_D, 1),
    WindfireBalm2(SkillName.WindfireBalm2, SkillType.SPECIAL_D, 1),
    RisingFlame(SkillName.RisingFlame, SkillType.SPECIAL_B, 4),
    BlazingFlame(SkillName.BlazingFlame, SkillType.SPECIAL_B, 4, spType = SpType.SPECIAL_A),
    GrowingFlame(SkillName.GrowingFlame, SkillType.SPECIAL_B, 4, spType = SpType.SPECIAL_A),
    RisingLight(SkillName.RisingLight, SkillType.SPECIAL_B, 4),
    BlazingLight(SkillName.BlazingLight, SkillType.SPECIAL_B, 4, spType = SpType.SPECIAL_A),
    GrowingLight(SkillName.GrowingLight, SkillType.SPECIAL_B, 4, spType = SpType.SPECIAL_A),
    RisingWind(SkillName.RisingWind, SkillType.SPECIAL_B, 4),
    BlazingWind(SkillName.BlazingWind, SkillType.SPECIAL_B, 4, spType = SpType.SPECIAL_A),
    GrowingWind(SkillName.GrowingWind, SkillType.SPECIAL_B, 4, spType = SpType.SPECIAL_A),
    RisingThunder(SkillName.RisingThunder, SkillType.SPECIAL_B, 4),
    BlazingThunder(SkillName.BlazingThunder, SkillType.SPECIAL_B, 4, spType = SpType.SPECIAL_A),
    GrowingThunder(SkillName.GrowingThunder, SkillType.SPECIAL_B, 4, spType = SpType.SPECIAL_A),
    ;

    /**
     * nameは誤動作するので共通処理としてはvalueを使う。もっといい名前があるか？
     * なお2を＋に置き換える。...けどこれもう要らないか？多言語対応したし
     */
    override val value get() = name

    companion object {
        private val itemMap = mutableMapOf<String, Skill>()

        fun spreadItems(none: Boolean = false): List<Skill> = values().fold(if (none) mutableListOf<Skill>(Skill.NONE) else mutableListOf()) { list, e -> list.add(e);list }

        fun valueOfOrNONE(key: String?): Skill = if (key == null) Skill.NONE else try {
            if (itemMap.isEmpty()) {
                values().forEach { e -> itemMap[e.jp.jp] = e;itemMap[e.value] = e;itemMap[e.jp.us] = e;itemMap[e.jp.tw] = e }
            }
            itemMap[key] ?: valueOf(key)
        } catch (e: Exception) {
            Skill.NONE
        }
    }
}