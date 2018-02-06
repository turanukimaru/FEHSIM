package jp.blogspot.turanukimaru.fehs.skill

import jp.blogspot.turanukimaru.fehs.*

/**
 * スキル。武器/補助/奥義
 */
enum class Special(override val jp: Name, override val type: SkillType, override val level: Int = 0, override val preSkill: Skill = Skill.NONE) : Skill {


    DayLight(Name.Daylight, SkillType.SPECIAL_A, 3) {
        override fun damage(battleUnit: BattleUnit, target: BattleUnit, results: List<AttackResult>, skill: Skill?): Pair<Int, Skill?> = super.damage(battleUnit, target, results, this)
        override fun absorb(battleUnit: BattleUnit, target: BattleUnit, damage: Int): Int {
            battleUnit.heal(damage * 3 / 10)
            return damage
        }
    },
    Noontime(Name.Noontime, SkillType.SPECIAL_A, 2) {
        override fun damage(battleUnit: BattleUnit, target: BattleUnit, results: List<AttackResult>, skill: Skill?): Pair<Int, Skill?> = super.damage(battleUnit, target, results, this)
        override fun absorb(battleUnit: BattleUnit, target: BattleUnit, damage: Int): Int {
            battleUnit.heal(damage * 3 / 10)
            return damage
        }
    },
    Sol(Name.Sol, SkillType.SPECIAL_A, 3) {
        override fun damage(battleUnit: BattleUnit, target: BattleUnit, results: List<AttackResult>, skill: Skill?): Pair<Int, Skill?> = super.damage(battleUnit, target, results, this)
        override fun absorb(battleUnit: BattleUnit, target: BattleUnit, damage: Int): Int {
            battleUnit.heal(damage * 5 / 10)
            return damage
        }
    },
    NightSky(Name.NightSky, SkillType.SPECIAL_A, 3) {
        override fun damage(battleUnit: BattleUnit, target: BattleUnit, results: List<AttackResult>, skill: Skill?): Pair<Int, Skill?>
                = Pair(super.damage(battleUnit, target, results, this).first * 15 / 10, this)

    },
    Glimmer(Name.Glimmer, SkillType.SPECIAL_A, 2) {
        override fun damage(battleUnit: BattleUnit, target: BattleUnit, results: List<AttackResult>, skill: Skill?): Pair<Int, Skill?>
                = Pair(super.damage(battleUnit, target, results, this).first * 15 / 10, this)

    },
    Astra(Name.Astra, SkillType.SPECIAL_A, 4) {
        override fun damage(battleUnit: BattleUnit, target: BattleUnit, results: List<AttackResult>, skill: Skill?): Pair<Int, Skill?>
                = Pair(super.damage(battleUnit, target, results, this).first * 25 / 10, this)

    },
    RegnalAstra(Name.RegnalAstra, SkillType.SPECIAL_A, 2) {
        override fun damage(battleUnit: BattleUnit, target: BattleUnit, results: List<AttackResult>, skill: Skill?): Pair<Int, Skill?>
                = Pair(battleUnit.halfByStaff(target.preventByDefResTerrain(battleUnit.colorAttack() + battleUnit.effectedSpd * 4 / 10, battleUnit.armedHero.baseHero.weapon.type))
                , this)
    },
    Miracle(Name.Miracle, SkillType.SPECIAL_B, 5) {
        override fun specialPrevent(battleUnit: BattleUnit, damage: Int, lv: Int): Pair<Int, Skill?>
                //試しに使ってみたけど慣れるまではむしろわかりにくそうな表記だ
                = if (battleUnit.hp in 2..damage) Pair(battleUnit.hp - 1, this) else super.specialPrevent(battleUnit, damage, lv)

    },
    DraconicAura(Name.DraconicAura, SkillType.SPECIAL_A, 3) {
        override fun damage(battleUnit: BattleUnit, target: BattleUnit, results: List<AttackResult>, skill: Skill?): Pair<Int, Skill?>
                = Pair(battleUnit.halfByStaff(target.preventByDefResTerrain(battleUnit.colorAttack() + battleUnit.effectedAtk * 3 / 10, battleUnit.armedHero.baseHero.weapon.type))
                , this)
    },
    DragonGaze(Name.DragonGaze, SkillType.SPECIAL_A, 4) {
        override fun damage(battleUnit: BattleUnit, target: BattleUnit, results: List<AttackResult>, skill: Skill?): Pair<Int, Skill?>
                = Pair(battleUnit.halfByStaff(target.preventByDefResTerrain(battleUnit.colorAttack() + battleUnit.effectedAtk * 3 / 10, battleUnit.armedHero.baseHero.weapon.type))
                , this)
    },
    DragonFang(Name.DragonFang, SkillType.SPECIAL_A, 4) {
        override fun damage(battleUnit: BattleUnit, target: BattleUnit, results: List<AttackResult>, skill: Skill?): Pair<Int, Skill?>
                = Pair(battleUnit.halfByStaff(target.preventByDefResTerrain(battleUnit.colorAttack() + battleUnit.effectedAtk * 5 / 10, battleUnit.armedHero.baseHero.weapon.type))
                , this)
    },
    GlowingEmber(Name.GlowingEmber, SkillType.SPECIAL_A, 4) {
        override fun damage(battleUnit: BattleUnit, target: BattleUnit, results: List<AttackResult>, skill: Skill?): Pair<Int, Skill?>
                = Pair(battleUnit.halfByStaff(target.preventByDefResTerrain(battleUnit.colorAttack() + battleUnit.effectedDef * 5 / 10, battleUnit.armedHero.baseHero.weapon.type))
                , this)
    },
    Bonfire(Name.Bonfire, SkillType.SPECIAL_A, 3) {
        override fun damage(battleUnit: BattleUnit, target: BattleUnit, results: List<AttackResult>, skill: Skill?): Pair<Int, Skill?>
                = Pair(battleUnit.halfByStaff(target.preventByDefResTerrain(battleUnit.colorAttack() + battleUnit.effectedDef * 5 / 10, battleUnit.armedHero.baseHero.weapon.type))
                , this)
    },
    Ignis(Name.Ignis, SkillType.SPECIAL_A, 4) {
        override fun damage(battleUnit: BattleUnit, target: BattleUnit, results: List<AttackResult>, skill: Skill?): Pair<Int, Skill?>
                = Pair(battleUnit.halfByStaff(target.preventByDefResTerrain(battleUnit.colorAttack() + battleUnit.effectedDef * 8 / 10, battleUnit.armedHero.baseHero.weapon.type))
                , this)
    },
    ChillingWind(Name.ChillingWind, SkillType.SPECIAL_A, 4) {
        override fun damage(battleUnit: BattleUnit, target: BattleUnit, results: List<AttackResult>, skill: Skill?): Pair<Int, Skill?>
                = Pair(battleUnit.halfByStaff(target.preventByDefResTerrain(battleUnit.colorAttack() + battleUnit.effectedRes * 5 / 10, battleUnit.armedHero.baseHero.weapon.type))
                , this)
    },
    Iceberg(Name.Iceberg, SkillType.SPECIAL_A, 3) {
        override fun damage(battleUnit: BattleUnit, target: BattleUnit, results: List<AttackResult>, skill: Skill?): Pair<Int, Skill?>
                = Pair(battleUnit.halfByStaff(target.preventByDefResTerrain(battleUnit.colorAttack() + battleUnit.effectedRes * 5 / 10, battleUnit.armedHero.baseHero.weapon.type))
                , this)
    },
    Glacies(Name.Glacies, SkillType.SPECIAL_A, 4) {
        override fun damage(battleUnit: BattleUnit, target: BattleUnit, results: List<AttackResult>, skill: Skill?): Pair<Int, Skill?>
                = Pair(battleUnit.halfByStaff(target.preventByDefResTerrain(battleUnit.colorAttack() + battleUnit.effectedRes * 8 / 10, battleUnit.armedHero.baseHero.weapon.type))
                , this)
    },

    Aether(Name.Aether, SkillType.SPECIAL_A, 5) {
        override fun damage(battleUnit: BattleUnit, target: BattleUnit, results: List<AttackResult>, skill: Skill?): Pair<Int, Skill?>
                = Pair(battleUnit.halfByStaff(target.preventByDefResTerrain(battleUnit.colorAttack(), battleUnit.armedHero.baseHero.weapon.type, 50))
                , this)

        override fun absorb(battleUnit: BattleUnit, target: BattleUnit, damage: Int): Int {
            battleUnit.heal(damage * 5 / 10)
            return damage
        }
    },
    RadiantAether(Name.RadiantAether, SkillType.SPECIAL_A, 4) {
        override fun damage(battleUnit: BattleUnit, target: BattleUnit, results: List<AttackResult>, skill: Skill?): Pair<Int, Skill?>
                = Pair(battleUnit.halfByStaff(target.preventByDefResTerrain(battleUnit.colorAttack(), battleUnit.armedHero.baseHero.weapon.type, 50))
                , this)

        override fun absorb(battleUnit: BattleUnit, target: BattleUnit, damage: Int): Int {
            battleUnit.heal(damage * 5 / 10)
            return damage
        }
    },
    NewMoon(Name.NewMoon, SkillType.SPECIAL_A, 3) {
        override fun damage(battleUnit: BattleUnit, target: BattleUnit, results: List<AttackResult>, skill: Skill?): Pair<Int, Skill?>
                = Pair(battleUnit.halfByStaff(target.preventByDefResTerrain(battleUnit.colorAttack(), battleUnit.armedHero.baseHero.weapon.type, 30))
                , this)
    },
    Moonbow(Name.Moonbow, SkillType.SPECIAL_A, 2) {
        override fun damage(battleUnit: BattleUnit, target: BattleUnit, results: List<AttackResult>, skill: Skill?): Pair<Int, Skill?>
                = Pair(battleUnit.halfByStaff(target.preventByDefResTerrain(battleUnit.colorAttack(), battleUnit.armedHero.baseHero.weapon.type, 30))
                , this)
    },
    Luna(Name.Luna, SkillType.SPECIAL_A, 3) {
        override fun damage(battleUnit: BattleUnit, target: BattleUnit, results: List<AttackResult>, skill: Skill?): Pair<Int, Skill?>
                = Pair(battleUnit.halfByStaff(battleUnit.halfByStaff(target.preventByDefResTerrain(battleUnit.colorAttack(), battleUnit.armedHero.baseHero.weapon.type, 50)))
                , this)
    },
    BlackLuna(Name.BlackLuna, SkillType.SPECIAL_A, 3) {
        override fun damage(battleUnit: BattleUnit, target: BattleUnit, results: List<AttackResult>, skill: Skill?): Pair<Int, Skill?>
                = Pair(battleUnit.halfByStaff(target.preventByDefResTerrain(battleUnit.colorAttack(), battleUnit.armedHero.baseHero.weapon.type, 80))
                , this)
    },

    Retribution(Name.Retribution, SkillType.SPECIAL_A, 3) {
        override fun damage(battleUnit: BattleUnit, target: BattleUnit, results: List<AttackResult>, skill: Skill?): Pair<Int, Skill?>
                = Pair(battleUnit.halfByStaff(target.preventByDefResTerrain(battleUnit.colorAttack() + (battleUnit.armedHero.maxHp - battleUnit.hp) * 3 / 10, battleUnit.armedHero.baseHero.weapon.type))
                , this)
    },
    Reprisal(Name.Reprisal, SkillType.SPECIAL_A, 2) {
        override fun damage(battleUnit: BattleUnit, target: BattleUnit, results: List<AttackResult>, skill: Skill?): Pair<Int, Skill?>
                = Pair(battleUnit.halfByStaff(target.preventByDefResTerrain(battleUnit.colorAttack() + (battleUnit.armedHero.maxHp - battleUnit.hp) * 3 / 10, battleUnit.armedHero.baseHero.weapon.type))
                , this)
    },
    Vengeance(Name.Vengeance, SkillType.SPECIAL_A, 3) {
        override fun damage(battleUnit: BattleUnit, target: BattleUnit, results: List<AttackResult>, skill: Skill?): Pair<Int, Skill?>
                = Pair(battleUnit.halfByStaff(target.preventByDefResTerrain(battleUnit.colorAttack() + (battleUnit.armedHero.maxHp - battleUnit.hp) * 5 / 10, battleUnit.armedHero.baseHero.weapon.type))
                , this)
    },
    HolyVestments(Name.HolyVestments, SkillType.SPECIAL_C, 3) {
        override fun specialPrevent(battleUnit: BattleUnit, damage: Int, lv: Int): Pair<Int, Skill?>
                = if (battleUnit.armedHero.baseHero.weapon.type.weaponType!!.range == 2) Pair(damage - damage * 3 / 10, this) else super.specialPrevent(battleUnit, damage, lv)
    },
    SacredCowl(Name.SacredCowl, SkillType.SPECIAL_C, 2) {
        override fun specialPrevent(battleUnit: BattleUnit, damage: Int, lv: Int): Pair<Int, Skill?>
                = if (battleUnit.armedHero.baseHero.weapon.type.weaponType!!.range == 2) Pair(damage - damage * 3 / 10, this) else super.specialPrevent(battleUnit, damage, lv)
    },
    IceMirror(Name.IceMirror, SkillType.SPECIAL_C, 2) {
        override fun specialPrevent(battleUnit: BattleUnit, damage: Int, lv: Int): Pair<Int, Skill?>
                = if (battleUnit.armedHero.baseHero.weapon.type.weaponType!!.range == 2) Pair(damage - damage * 3 / 10, this) else super.specialPrevent(battleUnit, damage, lv)

        override fun reducedDamage(battleUnit: BattleUnit, damage: Int, lv: Int): BattleUnit {
            battleUnit.oneTimeOnlyAdditionalDamage = damage
            return battleUnit
        }

    },
    Aegis(Name.Aegis, SkillType.SPECIAL_C, 3) {
        override fun specialPrevent(battleUnit: BattleUnit, damage: Int, lv: Int): Pair<Int, Skill?>
                = if (battleUnit.armedHero.baseHero.weapon.type.weaponType!!.range == 2) Pair(damage - damage * 5 / 10, this) else super.specialPrevent(battleUnit, damage, lv)
    },
    Buckler(Name.Buckler, SkillType.SPECIAL_A, 3) {
        override fun specialPrevent(battleUnit: BattleUnit, damage: Int, lv: Int): Pair<Int, Skill?>
                = if (battleUnit.armedHero.baseHero.weapon.type.weaponType!!.range == 1) Pair(damage - damage * 3 / 10, this) else super.specialPrevent(battleUnit, damage, lv)
    },
    Escutcheon(Name.Escutcheon, SkillType.SPECIAL_A, 2) {
        override fun specialPrevent(battleUnit: BattleUnit, damage: Int, lv: Int): Pair<Int, Skill?>
//            log(battleUnit.enemy!!.armedHero.baseHero.weapon.type.weaponType!!.range)
                = if (battleUnit.enemy!!.armedHero.baseHero.weapon.type.weaponType!!.range == 1) Pair(damage - damage * 3 / 10, this) else super.specialPrevent(battleUnit, damage, lv)
    },
    Pavise(Name.Pavise, SkillType.SPECIAL_A, 3) {
        override fun specialPrevent(battleUnit: BattleUnit, damage: Int, lv: Int): Pair<Int, Skill?>
                = if (battleUnit.armedHero.baseHero.weapon.type.weaponType!!.range == 1) Pair(damage - damage * 5 / 10, this) else super.specialPrevent(battleUnit, damage, lv)
    },
    Galeforce(Name.Galeforce, SkillType.SPECIAL_A, 5),
    Imbue(Name.Imbue, SkillType.SPECIAL_A, 1),
    HeavenlyLight(Name.HeavenlyLight, SkillType.SPECIAL_A, 2),
    SolidEarthBalm(Name.SolidEarthBalm, SkillType.SPECIAL_A, 1),
    SwiftWindsBalm(Name.SwiftWindsBalm, SkillType.SPECIAL_A, 1),
    KindledFireBalm(Name.KindledFireBalm, SkillType.SPECIAL_A, 1),
    StillWaterBalm(Name.StillWaterBalm, SkillType.SPECIAL_A, 1),

    RisingFlame(Name.RisingFlame, SkillType.SPECIAL_A, 4),
    BlazingFlame(Name.BlazingFlame, SkillType.SPECIAL_A, 4),
    GrowingFlame(Name.GrowingFlame, SkillType.SPECIAL_A, 4),
    RisingLight(Name.RisingLight, SkillType.SPECIAL_A, 4),
    BlazingLight(Name.BlazingLight, SkillType.SPECIAL_A, 4),
    GrowingLight(Name.GrowingLight, SkillType.SPECIAL_A, 4),
    RisingWind(Name.RisingWind, SkillType.SPECIAL_A, 4),
    BlazingWind(Name.BlazingWind, SkillType.SPECIAL_A, 4),
    GrowingWind(Name.GrowingWind, SkillType.SPECIAL_A, 4),
    RisingThunder(Name.RisingThunder, SkillType.SPECIAL_A, 4),
    BlazingThunder(Name.BlazingThunder, SkillType.SPECIAL_A, 4),
    GrowingThunder(Name.GrowingThunder, SkillType.SPECIAL_A, 4),

    ;

    /**
     * nameは誤動作するので共通処理としてはvalueを使う。もっといい名前があるか？
     * なお2を＋に置き換える。
     */
    override val value get() = name.replace("2", "+")

  //  override fun localeName(locale: Locale): String =jp.localeName(locale)

    companion object {
        private val itemMap = mutableMapOf<String, Skill>()
        fun spreadItems(none:Boolean = false): List<Skill> = values().fold(if(none) arrayListOf<Skill>(Skill.NONE) else arrayListOf(), { list, e -> list.add(e);list })

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