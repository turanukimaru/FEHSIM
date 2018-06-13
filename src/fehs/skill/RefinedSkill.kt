package jp.blogspot.turanukimaru.fehs.skill

import jp.blogspot.turanukimaru.fehs.*


/**
 * あーテキストが一意になるようにしないと保存できないか。これはうかつだったな。武器名で統一するか…？追加効果だから困るわけではないのだが。
 * 錬成武器
 */
enum class RefinedSkill(override val jp: Name, val hp: Int, val atk: Int, val spd: Int, val def: Int, val res: Int, val refinedSkillType: RefinedSkill.RefineType = RefinedSkill.RefineType.NONE, override val preSkill: Skill = Skill.NONE, override val level: Int = 0, override val type: SkillType = SkillType.REFINERY, override val effectiveAgainstMoveType: Array<MoveType> = arrayOf(), override val effectiveAgainstWeaponType: Array<WeaponType> = arrayOf()) : Skill {
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
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = wrathfulStaff(battleUnit, enemy, 3)
    },
    DazzlingStaff(Name.DazzlingStaff, 0, 0, 0, 0, 0, RefineType.Staff) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = dazzling(battleUnit, enemy, 3)
    },

    //武器特融能力
    SolKatti(Name.SolKatti, 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.SolKatti) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = brashAssault(battleUnit, enemy, 75)
        override fun attackPlan(fightPlan: FightPlan, lv: Int): FightPlan = desperation(fightPlan, lv)
    },
    Mystletainn(Name.Mystletainn, 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.Mystletainn) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = attackHpLoss(battleUnit, lv * 3)
    },
    Siegmund(Name.Pursuit, 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.Siegmund) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit {
            if (battleUnit.hp >= battleUnit.armedHero.maxHp * 9 / 10) {
                battleUnit.followupable = true
            }
            return battleUnit
        }
    },
    Hauteclere(Name.SpecialDamage, 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.Hauteclere) {
        override fun specialTriggered(battleUnit: BattleUnit, damage: Int): Int = damage + 10
    },
    FujinYumi(Name.Follow, 0, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.FujinYumi),
    DeathlyDagger2(Name.MagicSuppression, 0, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.DeathlyDagger) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit {
            if (enemy.armedHero.isMagicWeapon()) {
                enemy.cannotCcounter = true
            }
            return battleUnit
        }
    },
    Parthia2(Name.AntiRangedWeapon, 0, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.Parthia) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = blowAtk(battleUnit, if (enemy.armedHero.baseHero.weaponType.range == 2) 6 else 0)
    },
    Cymbeline(Name.BondFlyingAlly, 0, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.Cymbeline) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = if (battleUnit.adjacentUnits > 0) blowRes(blowAtk(battleUnit, 5), 5) else battleUnit
    },
    //特効武器はバフ無効を持つ
    Armorsmasher(Name.Nullify, 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.Armorsmasher2) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = antiBuffBonus(effectiveAgainst(MoveType.ARMORED, battleUnit, enemy), enemy)
    },
    SlayingSpear(Name.Nullify, 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.SlayingSpear2) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = antiBuffBonus(effectiveAgainst(MoveType.ARMORED, battleUnit, enemy), enemy)
    },
    SlayingHammer(Name.Nullify, 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.SlayingHammer2) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = antiBuffBonus(effectiveAgainst(MoveType.ARMORED, battleUnit, enemy), enemy)
    },
    Zanbato(Name.Nullify, 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.Zanbato2) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = antiBuffBonus(effectiveAgainst(MoveType.CAVALRY, battleUnit, enemy), enemy)
    },
    Ridersbane(Name.Nullify, 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.Ridersbane2) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = antiBuffBonus(effectiveAgainst(MoveType.CAVALRY, battleUnit, enemy), enemy)
    },
    KeenRauorwolf2(Name.Nullify, 0, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.KeenRauorwolf2) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = antiBuffBonus(effectiveAgainst(MoveType.CAVALRY, battleUnit, enemy), enemy)
    },
    KeenBlarwolf2(Name.Nullify, 0, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.KeenBlarwolf2) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = antiBuffBonus(effectiveAgainst(MoveType.CAVALRY, battleUnit, enemy), enemy)
    },
    KeenGronnwolf2(Name.Nullify, 0, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.KeenGronnwolf2) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = antiBuffBonus(effectiveAgainst(MoveType.CAVALRY, battleUnit, enemy), enemy)
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
    Rauorowl2(Name.Rauorowl2, 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.Rauorowl2, 10, SkillType.RTOME) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = allBonus(battleUnit, battleUnit.adjacentUnits * 2)
    },
    Blarowl2(Name.Blarowl2, 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.Blarowl2, 10, SkillType.BTOME) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = allBonus(battleUnit, battleUnit.adjacentUnits * 2)
    },
    Gronnowl2(Name.Gronnowl2, 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.Gronnowl2, 10, SkillType.GTOME) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = allBonus(battleUnit, battleUnit.adjacentUnits * 2)
    },

    SmokeDagger2(Name.SmokeDagger2, 0, 3, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.SmokeDagger2, 9, SkillType.DAGGER),
    RogueDagger2(Name.RogueDagger2, 0, 5, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.Gronnowl2, 6, SkillType.DAGGER),
    Flametongue2(Name.Flametongue2, 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.Flametongue2, 15, SkillType.PENETRATE_DRAGON),
    LightBreath2(Name.LightBreath2, 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.LightBreath2, 13, SkillType.PENETRATE_DRAGON),

    CarrotLance2(Name.CarrotLance2, 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.CarrotLance2, 13, SkillType.LANCE) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = attackHeal(battleUnit, 4)
    },
    CarrotAxe2(Name.CarrotAxe2, 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.CarrotAxe2, 13, SkillType.AXE) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = attackHeal(battleUnit, 4)
    },
    BlueEgg2(Name.BlueEgg2, 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.BlueEgg2, 11, SkillType.BTOME) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = attackHeal(battleUnit, 4)
    },
    GreenEgg2(Name.GreenEgg2, 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.GreenEgg2, 11, SkillType.GTOME) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = attackHeal(battleUnit, 4)
    },
    DancersFan2(Name.DancersFan2, 0, 2, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.DancersFan2, 10, SkillType.DAGGER),

    LightningBreath2(Name.LightningBreath2, 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.LightningBreath2, 11, SkillType.PENETRATE_DRAGON) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBlade(armedHero, lv)
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = counterAllRange(battleUnit)
    },
    DarkBreath2(Name.DarkBreath2, 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.DarkBreath2, 13, SkillType.PENETRATE_DRAGON),
    BerkutsLance2(Name.BerkutsLance2, 0, 1, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.BerkutsLance2, 16, SkillType.LANCE) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = blowRes(battleUnit, 4)
    },

    DeathlyDagger(Name.DeathlyDagger, 0, 3, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.DeathlyDagger, 11, SkillType.DAGGER) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = attackPain(battleUnit, enemy, 10)
    },
    Parthia(Name.Parthia, 0, 0, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.Parthia, 14, SkillType.BOW, effectiveAgainstMoveType = arrayOf(MoveType.FLIER)) {
        override fun prevent(battleUnit: BattleUnit, damage: Int, source: BattleUnit, results: List<AttackResult>, lv: Int): Int =
                if (source.armedHero.isMagicWeapon()
                        && (!results.any { r -> r.side != battleUnit.side })) damage - damage * 3 / 10 else damage
    },
    Yato(Name.Yato, 0, 0, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.Yato, 16, SkillType.SWORD) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = allBonus(battleUnit, 2)
    },

    FalchionM(Name.AtkSpdDefRes2ToAllies, 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.FalchionM) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = effectiveAgainst(WeaponType.DRAGON, battleUnit, enemy)
    },
    FalchionA(Name.doubleAttack, 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.FalchionA) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = if (battleUnit.hp == battleUnit.armedHero.maxHp) doubleAttack(battleUnit) else battleUnit
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = effectiveAgainst(WeaponType.DRAGON, battleUnit, enemy)
    },
    FalchionC(Name.AtkSpdDefRes4, 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.FalchionC) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = effectiveAgainst(WeaponType.DRAGON, if (battleUnit.adjacentUnits > 0) allBonus(battleUnit, 4) else battleUnit, enemy)
    },
    WingSword(Name.WingSword, 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.WingSword) {
        override fun effectedAttackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = flashingBlade(battleUnit, enemy, 1)
        override fun effectedCounterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = flashingBlade(battleUnit, enemy, 1)
    },
    HinokasSpear(Name.HinokasSpear, 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.HinokasSpear) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = if (battleUnit.adjacentUnits > 0) blowAtk(blowSpd(battleUnit, 4), 4) else battleUnit
    },
    Basilikos(Name.Basilikos, 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.Basilikos) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = lifeAndDeath(equipKiller(armedHero, lv), 5)
    },
    FeliciasPlate(Name.FeliciasBlade, 0, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.FeliciasPlate) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = feliciasBlade(battleUnit, enemy)
    },

    Sieglinde(Name.Sieglinde, 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.Sieglinde),
    WindsBrand(Name.Owl, 0, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.WindsBrand) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = allBonus(battleUnit, battleUnit.adjacentUnits * 2)
    },
    Brynhildr(Name.Brynhildr, 0, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.Brynhildr) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = antiFollowupRangedDef(battleUnit, enemy)
    },

    Forblaze(Name.DeathBlow, 0, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.Forblaze) {
        override fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = blowAtk(battleUnit, 6)
    },
    BindingBlade(Name.BindingBlade, 0, 0, 0, 0, 0, RefineType.ReplaceWeapon, Weapon.BindingBlade, 16, SkillType.SWORD, effectiveAgainstWeaponType = arrayOf(WeaponType.DRAGON)) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = blowDef(blowRes(battleUnit, 4), 4)
    },
    BindingBlade2(Name.QuickRiposte, 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.BindingBlade) {
        override fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = followupable(battleUnit, 5)
    },
    NamelessBlade(Name.SpecialDamage, 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.NamelessBlade) {
        override fun specialTriggered(battleUnit: BattleUnit, damage: Int): Int = damage + 10
    },
    Rhomphaia(Name.FlashingBlade, 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.Rhomphaia) {
        override fun effectedAttackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = flashingBlade(battleUnit, enemy, 1)
        override fun effectedCounterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = flashingBlade(battleUnit, enemy, 1)
    },
    CamillasAxe(Name.CamillasAxe, 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.CamillasAxe),
    Yato2(Name.Yato, 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.Yato),
    Aura(Name.RefinedAura, 0, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.Aura) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = if (battleUnit.adjacentUnits > 0) blowAtk(blowSpd(battleUnit, 5), 5) else battleUnit
    },
    Excalibur(Name.RefinedAura, 0, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.Excalibur) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = if (battleUnit.adjacentUnits > 0) blowAtk(blowSpd(battleUnit, 5), 5) else battleUnit
    },
    BreathOfFog(Name.RefinedBreathOfFog, 3, 0, 0, 0, 0, RefineType.DependWeapon, Weapon.BreathOfFog) {
        override fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit = if (battleUnit.adjacentUnits > 0) blowAtk(blowDef(battleUnit, 5), 5) else battleUnit
    },

    ;


    //装備効果がある武器に必要になるのか・・・しくじったかな？
    override fun equipBlade(armedHero: ArmedHero, lv: Int): ArmedHero {
        //println("$jp hp:$hp")
        equipHp(armedHero, hp)
        equipAtk(armedHero, atk)
        equipSpd(armedHero, spd)
        equipDef(armedHero, def)
        equipRes(armedHero, res)
        return super.equipBlade(armedHero, lv)
    }

    override fun equipKiller(armedHero: ArmedHero, lv: Int): ArmedHero {
        //println("$jp hp:$hp")
        equipHp(armedHero, hp)
        equipAtk(armedHero, atk)
        equipSpd(armedHero, spd)
        equipDef(armedHero, def)
        equipRes(armedHero, res)
        return super.equipKiller(armedHero, lv)
    }


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

    companion object {

        private val itemMap = mutableMapOf<String, Skill>()
        fun spreadItems(weapon: Skill, range: RefineType = (weapon as? Weapon)?.refinedSkillType
                ?: RefineType.NOT_WEAPON): List<Skill> = values().fold(arrayListOf<Skill>(Skill.NONE), { list, e -> if (e.refinedSkillType == range || (e.refinedSkillType == RefineType.DependWeapon && (e.preSkill == weapon || e.preSkill == weapon.preSkill))) list.add(e);list })

        fun valueOfWeapon(weapon: Skill) = values().find { e -> e.refinedSkillType == RefineType.ReplaceWeapon && e.preSkill == weapon }
        fun valueOfOrNONE(key: String?): Skill = if (key == null || key.isEmpty()) Skill.NONE else try {
            if (itemMap.isEmpty()) {
                values().forEach { e -> itemMap[e.value] = e;itemMap[e.jp.jp] = e; itemMap[e.jp.us] = e; itemMap[e.jp.tw] = e }
            }
            //println(key)
            itemMap[key] ?: valueOf(key)
        } catch (e: Exception) {
            Skill.NONE
        }
    }

    /**
     * 錬成タイプ。種類によって基本的なルールが異なる。でもこれ使い道の違うタイプが混ざってるんだよな分けたほうがいいかなあ
     */
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