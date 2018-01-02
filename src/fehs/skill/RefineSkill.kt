package jp.blogspot.turanukimaru.fehs.skill

import jp.blogspot.turanukimaru.fehs.*


/**
 * スキル。補助
 */
enum class RefineSkill(override val jp: Name, val hp: Int, val atk: Int, val spd: Int, val def: Int, val res: Int, val refineSkillType: RefineSkill.RefineType = RefineSkill.RefineType.NONE, override val preSkill: Skill = Skill.NONE, override val level: Int = 0, override val type: SkillType = SkillType.REFINERY) : Skill {
    //基本ルール
    Range1Atk(Name.Range1Atk, 5, 2, 0, 0, 0, RefineType.Range1),
    Range1Spd(Name.Range1Spd, 5, 0, 3, 0, 0, RefineType.Range1),
    Range1Def(Name.Range1Def, 5, 0, 0, 4, 0, RefineType.Range1),
    Range1Res(Name.Range1Res, 5, 0, 0, 0, 4, RefineType.Range1),


    Range2Atk(Name.Range2Atk, 2, 1, 0, 0, 0, RefineType.Range2),
    Range2Spd(Name.Range2Spd, 2, 0, 2, 0, 0, RefineType.Range2),
    Range2Def(Name.Range2Def, 2, 0, 0, 3, 0, RefineType.Range2),
    Range2Res(Name.Range2Res, 2, 0, 0, 0, 3, RefineType.Range2),

    WrathfulStaff(Name.WrathfulStaff, 0, 0, 0, 0, 0, RefineType.Staff) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = wrathfulStaff(battleUnit, 3)
    },
    DazzlingStaff(Name.DazzlingStaff, 0, 0, 0, 0, 0, RefineType.Staff) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = dazzling(battleUnit, 3)
    },

    //武器特融能力
    SolKatti(Name.SolKatti, 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.SolKatti) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = brashAssault(battleUnit, 75)
        override fun attackPlan(fightPlan: FightPlan, lv: Int): FightPlan = desperation(fightPlan, lv)
    },
    Mystletainn(Name.Mystletainn, 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.Mystletainn) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = attackHpLoss(battleUnit, lv * 3)
    },
    Siegmund(Name.Pursuit, 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.Siegmund) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit {
            if (battleUnit.hp >= battleUnit.armedHero.maxHp * 9 / 10) {
                battleUnit.followupable = true
            }
            return battleUnit
        }
    },
    Hauteclere(Name.SpecialDamage, 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.Hauteclere) {
        override fun specialTriggered(battleUnit: BattleUnit, damage: Int, lv: Int): Int = damage + 10
    },
    FujinYumi(Name.Follow, 0, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.FujinYumi),
    DeathlyDagger2(Name.MagicSuppression, 0, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.DeathlyDagger) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit {
            if (battleUnit.enemy!!.armedHero.isMagicWeapon()) {
                battleUnit.enemy!!.cannotCcounter = true
            }
            return battleUnit
        }
    },
    //特効武器はバフ無効を持つ
    Armorsmasher(Name.Nullify, 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.Armorsmasher2) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = antiBuffBonus(effectiveAgainst(MoveType.ARMORED, battleUnit))
    },
    SlayingSpear(Name.Nullify, 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.SlayingSpear2) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = antiBuffBonus(effectiveAgainst(MoveType.ARMORED, battleUnit))
    },
    SlayingHammer(Name.Nullify, 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.SlayingHammer2) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = antiBuffBonus(effectiveAgainst(MoveType.ARMORED, battleUnit))
    },
    Zanbato(Name.Nullify, 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.Zanbato2) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = antiBuffBonus(effectiveAgainst(MoveType.CAVALRY, battleUnit))
    },
    Ridersbane(Name.Nullify, 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.Ridersbane2) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = antiBuffBonus(effectiveAgainst(MoveType.CAVALRY, battleUnit))
    },
    KeenRauorwolf2(Name.Nullify, 0, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.KeenRauorwolf2) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = antiBuffBonus(effectiveAgainst(MoveType.CAVALRY, battleUnit))
    },
    KeenBlarwolf2(Name.Nullify, 0, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.KeenBlarwolf2) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = antiBuffBonus(effectiveAgainst(MoveType.CAVALRY, battleUnit))
    },
    KeenGronnwolf2(Name.Nullify, 0, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.KeenGronnwolf2) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = antiBuffBonus(effectiveAgainst(MoveType.CAVALRY, battleUnit))
    },

    //武器自体を置き換えるもの
    SilverSword2(Name.SilverSword2, 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.SilverSword2, 15, SkillType.SWORD),
    SilverLance2(Name.SilverLance2, 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.SilverLance2, 15, SkillType.LANCE),
    SilverAxe2(Name.SilverAxe2, 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.SilverAxe2, 15, SkillType.AXE),
    SilverBow2(Name.SilverBow2, 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.SilverBow2, 14, SkillType.BOW),
    SilverDagger2(Name.SilverDagger2, 0, 4, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.SilverDagger2, 10, SkillType.DAGGER),
    Bolganone2(Name.Bolganone2, 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.Bolganone2, 14, SkillType.RTOME),
    Fenrir2(Name.Fenrir2, 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.Fenrir2, 14, SkillType.RTOME),
    Thoron2(Name.Thoron2, 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.Thoron2, 14, SkillType.BTOME),
    Rexcalibur2(Name.Rexcalibur2, 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.Rexcalibur2, 14, SkillType.GTOME),
    Rauorowl2(Name.Rauorowl2, 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.Rauorowl2, 10, SkillType.RTOME),
    Blarowl2(Name.Blarowl2, 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.Blarowl2, 10, SkillType.BTOME),
    Gronnowl2(Name.Gronnowl2, 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.Gronnowl2, 10, SkillType.GTOME),
    SmokeDagger2(Name.SmokeDagger2, 0, 3, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.SmokeDagger2, 9, SkillType.DAGGER),
    RogueDagger2(Name.RogueDagger2, 0, 5, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.Gronnowl2, 6, SkillType.DAGGER),
    Flametongue2(Name.Flametongue2, 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.Flametongue2, 15, SkillType.REFINED_DRAGON),
    LightBreath2(Name.LightBreath2, 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.LightBreath2, 13, SkillType.REFINED_DRAGON),

    CarrotLance2(Name.CarrotLance2, 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.CarrotLance2, 13, SkillType.LANCE) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = attackHeal(battleUnit, 4)
    },
    CarrotAxe2(Name.CarrotAxe2, 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.CarrotAxe2, 13, SkillType.AXE) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = attackHeal(battleUnit, 4)
    },
    BlueEgg2(Name.BlueEgg2, 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.BlueEgg2, 11, SkillType.BTOME) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = attackHeal(battleUnit, 4)
    },
    GreenEgg2(Name.GreenEgg2, 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.GreenEgg2, 11, SkillType.GTOME) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = attackHeal(battleUnit, 4)
    },
    DancersFan2(Name.DancersFan2, 0, 2, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.DancersFan2, 10, SkillType.DAGGER),

    LightningBreath2(Name.LightningBreath2, 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.LightningBreath2, 11, SkillType.REFINED_DRAGON) {
        override fun equip(armedHero: ArmedHero, level: Int): ArmedHero = equipBlade(armedHero, level)
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = counterAllRange(battleUnit)
    },
    DarkBreath2(Name.DarkBreath2, 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.DarkBreath2, 13, SkillType.REFINED_DRAGON),
    BerkutsLance2(Name.BerkutsLance2, 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.BerkutsLance2, 16, SkillType.LANCE) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = blowRes(battleUnit, 4)
    },
    GuardBow2(Name.GuardBow2, 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.AssassinsBow2, 11, SkillType.BOW) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = distantDef(battleUnit, 6)
    },
    DeathlyDagger(Name.DeathlyDagger, 0, 3, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.DeathlyDagger, 11, SkillType.DAGGER) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = attackPain(battleUnit, 10)
    },
    ;

    //装備効果がある武器に必要になるのか・・・しくじったかな？
    override fun equipBlade(armedHero: ArmedHero, level: Int): ArmedHero {
        //println("$jp hp:$hp")
        equipHp(armedHero, hp)
        equipAtk(armedHero, atk)
        equipSpd(armedHero, spd)
        equipDef(armedHero, def)
        equipRes(armedHero, res)
        return super.equipBlade(armedHero, level)
    }

    override fun equip(armedHero: ArmedHero, level: Int): ArmedHero {
        //println("$jp hp:$hp")
        equipHp(armedHero, hp)
        equipAtk(armedHero, atk)
        equipSpd(armedHero, spd)
        equipDef(armedHero, def)
        equipRes(armedHero, res)
        return super.equip(armedHero, level)
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
   // override fun localeName(locale: Locale): String = jp.localeName(locale)

//    fun totalAtk(weapon: Skill): String = "威力" + (weapon.level  + atk).toString() + " "

    companion object {

        private val itemMap = mutableMapOf<String, Skill>()
        fun spreadItems(weapon: Skill, range: RefineType = (weapon as? Weapon)?.refineSkillType ?: RefineType.NOT_WEAPON): List<Skill>
                = values().fold(arrayListOf<Skill>(Skill.NONE), { list, e -> if (e.refineSkillType == range || (e.refineSkillType == RefineType.DependWeapon && (e.preSkill == weapon || e.preSkill == weapon.preSkill))) list.add(e);list })

        fun valueOfWeapon(weapon: Skill) = values().find { e -> e.refineSkillType == RefineType.ReplaceWeapon && e.preSkill == weapon }
        fun valueOfOrNONE(key: String?): Skill = if (key == null || key.isEmpty()) Skill.NONE else try {
            if (itemMap.isEmpty()) {
                values().forEach { e -> itemMap.put(e.value, e);itemMap.put(e.jp.jp, e); itemMap.put(e.jp.us, e); itemMap.put(e.jp.tw, e) }
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