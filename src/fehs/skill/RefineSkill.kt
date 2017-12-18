package jp.blogspot.turanukimaru.fehs.skill

import jp.blogspot.turanukimaru.fehs.*


//enumで使う文字列が宣言できない…Javaもこうだっけ？
val nullifiesUs = "Nullifies foe's bonuses"
val nullifiesJp = "特効対象の強化の+を無効にする"

/**
 * スキル。補助
 */
enum class RefineSkill(val us: String = "", override val jp: String, val hp: Int, val atk: Int, val spd: Int, val def: Int, val res: Int, val refineSkillType: RefineSkill.RefineType = RefineSkill.RefineType.NONE, override val preSkill: Skill = Skill.NONE, override val level: Int = 0, override val type: Skill.SkillType = Skill.SkillType.REFINERY) : Skill {
    //基本ルール
    Range1Atk("Atk(melee)", "攻撃(近)", 5, 2, 0, 0, 0, RefineType.Range1),
    Range1Spd("Spd(melee)", "速さ(近)", 5, 0, 3, 0, 0, RefineType.Range1),
    Range1Def("Def(melee)", "守備(近)", 5, 0, 0, 4, 0, RefineType.Range1),
    Range1Res("Res(melee)", "魔防(近)", 5, 0, 0, 0, 4, RefineType.Range1),


    Range2Atk("Atk(Ranged)", "攻撃(遠)", 2, 1, 0, 0, 0, RefineType.Range2),
    Range2Spd("Spd(Ranged)", "速さ(遠)", 2, 0, 2, 0, 0, RefineType.Range2),
    Range2Def("Def(Ranged)", "守備(遠)", 2, 0, 0, 3, 0, RefineType.Range2),
    Range2Res("Res(Ranged)", "魔防(遠)", 2, 0, 0, 0, 3, RefineType.Range2),

    WrathfulStaff("WrathfulStaff", "神罰", 0, 0, 0, 0, 0, RefineType.Staff) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = wrathfulStaff(battleUnit, 3)
    },
    DazzlingStaff("DazzlingStaff", "幻惑", 0, 0, 0, 0, 0, RefineType.Staff) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = dazzling(battleUnit, 3)
    },

    //武器特融能力
    SolKatti("BrashAssault", "差し違え", 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.SolKatti) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = brashAssault(battleUnit, 75)
        override fun attackPlan(fightPlan: FightPlan, lv: Int): FightPlan = desperation(fightPlan, lv)
    },
    Mystletainn("Furry", "獅子奮迅", 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.Mystletainn) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = attackHpLoss(battleUnit, lv * 3)
    },
    Siegmund("Pursuit", "追撃", 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.Siegmund) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit {
            if (battleUnit.hp >= battleUnit.armedHero.maxHp * 9 / 10) {
                battleUnit.followupable = true
            }
            return battleUnit
        }
    },
    Hauteclere("SpecialDamage", "奥義ダメージ追加", 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.Hauteclere) {
        override fun specialTriggered(battleUnit: BattleUnit, damage: Int, lv: Int): Int = damage + 10
    },
    FujinYumi("Follow", "追従", 0, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.FujinYumi),
    DeathlyDagger2("MagicSuppression", "魔法は反撃不能", 0, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.DeathlyDagger) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit {
            if (battleUnit.enemy!!.armedHero.isMagicWeapon()) {
                battleUnit.enemy!!.cannotCcounter = true
            }
            return battleUnit
        }
    },
    //特効武器はバフ無効を持つ
    Armorsmasher(nullifiesUs, nullifiesJp, 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.Armorsmasher2) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = antiBuffBonus(effectiveAgainst(MoveType.ARMORED, battleUnit))
    },
    SlayingSpear(nullifiesUs, nullifiesJp, 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.SlayingSpear2) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = antiBuffBonus(effectiveAgainst(MoveType.ARMORED, battleUnit))
    },
    SlayingHammer(nullifiesUs, nullifiesJp, 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.SlayingHammer2) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = antiBuffBonus(effectiveAgainst(MoveType.ARMORED, battleUnit))
    },
    Zanbato(nullifiesUs, nullifiesJp, 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.Zanbato2) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = antiBuffBonus(effectiveAgainst(MoveType.CAVALRY, battleUnit))
    },
    Ridersbane(nullifiesUs, nullifiesJp, 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.Ridersbane2) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = antiBuffBonus(effectiveAgainst(MoveType.CAVALRY, battleUnit))
    },
    KeenRauorwolf2(nullifiesUs, nullifiesJp, 0, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.KeenRauorwolf2) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = antiBuffBonus(effectiveAgainst(MoveType.CAVALRY, battleUnit))
    },
    KeenBlarwolf2(nullifiesUs, nullifiesJp, 0, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.KeenBlarwolf2) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = antiBuffBonus(effectiveAgainst(MoveType.CAVALRY, battleUnit))
    },
    KeenGronnwolf2(nullifiesUs, nullifiesJp, 0, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.KeenGronnwolf2) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = antiBuffBonus(effectiveAgainst(MoveType.CAVALRY, battleUnit))
    },

    //武器自体を置き換えるもの
    SilverSword2("SilverSword+", "銀の剣＋", 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.SilverSword2, 15, Skill.SkillType.SWORD),
    SilverLance2("SilverLance+", "銀の槍＋", 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.SilverLance2, 15, Skill.SkillType.LANCE),
    SilverAxe2("SilverAxe+", "銀の斧＋", 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.SilverAxe2, 15, Skill.SkillType.AXE),
    SilverBow2("SilverBow+", "銀の弓＋", 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.SilverBow2, 14, Skill.SkillType.BOW),
    SilverDagger2("SilverDagger+", "銀の暗器＋", 0, 4, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.SilverDagger2, 10, Skill.SkillType.DAGGER),
    Bolganone2("Bolganone+", "ボルガノン＋", 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.Bolganone2, 14, Skill.SkillType.RTOME),
    Fenrir2("Fenrir+", "ノスフェラート＋", 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.Fenrir2, 14, Skill.SkillType.RTOME),
    Thoron2("Thoron+", "トロン＋", 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.Thoron2, 14, Skill.SkillType.BTOME),
    Rexcalibur2("Rexcalibur+", "レクスカリバー＋", 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.Rexcalibur2, 14, Skill.SkillType.GTOME),
    Rauorowl2("Rauorowl+", "ラウアアウル＋", 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.Rauorowl2, 10, Skill.SkillType.RTOME),
    Blarowl2("Blarowl+", "ブラーアウル＋", 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.Blarowl2, 10, Skill.SkillType.BTOME),
    Gronnowl2("Gronnowl+", "グルンアウル＋", 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.Gronnowl2, 10, Skill.SkillType.GTOME),
    SmokeDagger2("SmokeDagger+", "紫煙の暗器＋", 0, 3, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.SmokeDagger2, 9, Skill.SkillType.DAGGER),
    RogueDagger2("RogueDagger+", "盗賊の暗器＋", 0, 5, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.Gronnowl2, 6, Skill.SkillType.DAGGER),
    Flametongue2("Flametongue+", "灼熱のブレス＋", 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.Flametongue2, 15, Skill.SkillType.REFINED_DRAGON),
    LightBreath2("LightBreath+", "光のブレス＋", 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.LightBreath2, 13, Skill.SkillType.REFINED_DRAGON),

    CarrotLance2("CarrotLance", "ニンジンの槍＋", 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.CarrotLance2, 13, Skill.SkillType.LANCE) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = attackHeal(battleUnit, 4)
    },
    CarrotAxe2("CarrotAxe+", "ニンジンの斧＋", 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.CarrotAxe2, 13, Skill.SkillType.AXE) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = attackHeal(battleUnit, 4)
    },
    BlueEgg2("BlueEgg+", "青の卵＋", 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.BlueEgg2, 11, Skill.SkillType.BTOME) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = attackHeal(battleUnit, 4)
    },
    GreenEgg2("GreenEgg+", "緑の卵＋", 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.GreenEgg2, 11, Skill.SkillType.GTOME) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = attackHeal(battleUnit, 4)
    },
    DancersFan2("DancersFan+", "舞踏祭の扇子＋", 0, 2, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.DancersFan2, 10, Skill.SkillType.DAGGER),

    LightningBreath2("LightningBreath+", "雷のブレス＋", 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.LightningBreath2, 11, Skill.SkillType.REFINED_DRAGON) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBlade(armedHero, lv)
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = counterAllRange(battleUnit)
    },
    DarkBreath2("DarkBreath+", "闇のブレス＋", 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.DarkBreath2, 13, Skill.SkillType.REFINED_DRAGON),
    BerkutsLance2("BerkutsLance+", "ベルクトの槍＋", 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.BerkutsLance2, 16, Skill.SkillType.LANCE) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = blowRes(battleUnit, 4)
    },
    GuardBow2("GuardBow+", "遠距離防御の弓＋", 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.AssassinsBow2, 11, Skill.SkillType.BOW) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = distantDef(battleUnit, 6)
    },
    DeathlyDagger("DeathlyDagger", "死神の暗器", 0, 3, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.DeathlyDagger, 11, Skill.SkillType.DAGGER) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = attackPain(battleUnit, 10)
    },
    ;

    override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero {
        //println("$jp hp:$hp")
        equipHp(armedHero, hp)
        equipAtk(armedHero, atk)
        equipSpd(armedHero, spd)
        equipDef(armedHero, def)
        equipRes(armedHero, res)
        return super.equip(armedHero, lv)
    }

    /**
     * nameは誤動作するので共通処理としてはvalueを使う。ただしこのスキルに限りスキル名はそのままは使わない
     */
    override val value get() = name
    //private val paramString = "${if (hp > 0) "HP+$hp " else ""}${if (spd > 0) "速さ+$spd " else ""}${if (def > 0) "守備+$def " else ""}${if (res > 0) "魔防+$res " else ""}"
    //val paramStringJp = paramString + jp
    //val paramStringUs = paramString + us
    /**
     * 武器名は使えないのでUSを格納してそれを使う
     */
    override fun localeName(locale: Locale): String
            = when (locale) {
        Locale.JAPAN -> jp
        Locale.JAPANESE -> jp
        else -> us
    }

//    fun totalAtk(weapon: Skill): String = "威力" + (weapon.level  + atk).toString() + " "

    companion object {

        private val itemMap = mutableMapOf<String, Skill>()
        fun spreadItems(weapon: Skill, range: RefineType = (weapon as? Weapon)?.refineSkillType ?: RefineType.NOT_WEAPON): List<Skill>
                = values().fold(arrayListOf<Skill>(Skill.NONE), { list, e -> if (e.refineSkillType == range || (e.refineSkillType == RefineType.DependWeapon && (e.preSkill == weapon || e.preSkill == weapon.preSkill))) list.add(e);list })

        fun valueOfWeapon(weapon: Skill) = values().find { e -> e.refineSkillType == RefineType.ReplaceWeapon && e.preSkill == weapon }
        fun valueOfOrNONE(key: String?): Skill = if (key == null || key.isEmpty()) Skill.NONE else try {
            if (itemMap.isEmpty()) {
                values().forEach { e -> itemMap.put(e.jp, e); itemMap.put(e.us, e);itemMap.put(e.value, e) }
            }
            //println(key)
            itemMap[key] ?: valueOf(key)
        } catch (e: Exception) {
            Skill.NONE
        }
    }

    enum class RefineType {
        NONE,
        Range1,
        Range2,
        Staff,
        DependWeapon,
        ReplaceWeapon,
        NOT_WEAPON,
    }
}