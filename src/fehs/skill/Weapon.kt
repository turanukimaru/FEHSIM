package jp.blogspot.turanukimaru.fehs.skill

import jp.blogspot.turanukimaru.fehs.*

/**
 * スキル。武器/補助/奥義
 */
enum class Weapon(override val jp: String, override val type: Skill.SkillType, override val level: Int = 0, override val preSkill: Skill = Skill.NONE, val refineSkillType: RefineSkill.RefineType = RefineSkill.RefineType.NONE) : Skill {


    IronSword("鉄の剣", Skill.SkillType.SWORD, 6),//本当はpreSkillにIronSwordを入れたいのだがまだNullなので入らない。実行時エラーになる。
    SteelSword("鋼の剣", Skill.SkillType.SWORD, 8, IronSword),
    SilverSword("銀の剣", Skill.SkillType.SWORD, 11, SteelSword),
    SilverSword2("銀の剣＋", Skill.SkillType.SWORD, 15, SilverSword, RefineSkill.RefineType.Range1),
    ArmorSlayer("アーマーキラー", Skill.SkillType.SWORD, 8, SteelSword) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = effectiveAgainst(MoveType.ARMORED, battleUnit)
    },
    ArmorSlayer2("アーマーキラー＋", Skill.SkillType.SWORD, 12, ArmorSlayer) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = effectiveAgainst(MoveType.ARMORED, battleUnit)
    },
    Armorsmasher2("アーマーキラー鍛＋", Skill.SkillType.SWORD, 14, ArmorSlayer2, RefineSkill.RefineType.Range1) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = effectiveAgainst(MoveType.ARMORED, battleUnit)
    },
    BraveSword("勇者の剣", Skill.SkillType.SWORD, 5, SteelSword) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBrave(armedHero, lv)
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = doubleAttack(battleUnit)
    },
    BraveSword2("勇者の剣＋", Skill.SkillType.SWORD, 8, BraveSword) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBrave(armedHero, lv)
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = doubleAttack(battleUnit)
    },
    RubySword("旭日の剣", Skill.SkillType.SWORD, 8, SteelSword) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = colorAdvantage(battleUnit, 3)
    },
    RubySword2("旭日の剣＋", Skill.SkillType.SWORD, 12, RubySword) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = colorAdvantage(battleUnit, 3)
    },
    KillingEdge("キルソード", Skill.SkillType.SWORD, 7, SteelSword) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero, lv)
    },
    KillingEdge2("キルソード＋", Skill.SkillType.SWORD, 11, KillingEdge) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero, lv)
    },
    WaoDao("倭刀", Skill.SkillType.SWORD, 9, SteelSword) {
        override fun specialTriggered(battleUnit: BattleUnit, damage: Int, lv: Int): Int = damage + 10
    },
    WaoDao2("倭刀＋", Skill.SkillType.SWORD, 13, WaoDao, RefineSkill.RefineType.Range1) {
        override fun specialTriggered(battleUnit: BattleUnit, damage: Int, lv: Int): Int = damage + 10
    },
    Zanbato("斬馬刀", Skill.SkillType.SWORD, 10, SteelSword) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = effectiveAgainst(MoveType.CAVALRY, battleUnit)
    },
    Zanbato2("斬馬刀＋", Skill.SkillType.SWORD, 14, Zanbato, RefineSkill.RefineType.Range1) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = effectiveAgainst(MoveType.CAVALRY, battleUnit)
    },
    SlayingEdge("キルソード鍛", Skill.SkillType.SWORD, 10, SteelSword) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBrave(armedHero, lv)
    },
    SlayingEdge2("キルソード鍛＋", Skill.SkillType.SWORD, 14, SlayingEdge, RefineSkill.RefineType.Range1) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBrave(armedHero, lv)
    },
    AyrasBlade("瞬閃アイラの剣", Skill.SkillType.SWORD, 16, SilverSword) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = super.equip(equipSpd(armedHero, 3), lv)
        override fun effectedAttackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = flashingBlade(battleUnit, 3)
        override fun effectedCounterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = flashingBlade(battleUnit, 3)
    },
    Folkvangr("フォルクヴァング", Skill.SkillType.SWORD, 16, SilverSword) {
        override fun turnStart(battleUnit: BattleUnit, lv: Int): BattleUnit = defiantAtk(battleUnit, 2)
    },
    Falchion("ファルシオン", Skill.SkillType.SWORD, 16, SilverSword) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = effectiveAgainst(WeaponType.DRAGON, battleUnit)
    },
    BindingBlade("封印の剣", Skill.SkillType.SWORD, 16, SilverSword) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = blowDef(blowRes(battleUnit, 2), 2)
    },
    Durandal("デュランダル", Skill.SkillType.SWORD, 16, SilverSword) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = blowAtk(battleUnit, 4)
    },
    SolKatti("ソール・カティ", Skill.SkillType.SWORD, 16, SilverSword, RefineSkill.RefineType.Range1) {
        override fun attackPlan(fightPlan: FightPlan, lv: Int): FightPlan = desperation(fightPlan, 2)
    },
    Yato("夜刀神", Skill.SkillType.SWORD, 16, SilverSword) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = blowSpd(battleUnit, 4)
    },
    Raijinto("雷神刀", Skill.SkillType.SWORD, 16, SilverSword) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = counterAllRange(battleUnit)
    },
    Sieglinde("ジークリンデ", Skill.SkillType.SWORD, 16, SilverSword),
    Tyrfing("ティルフィング", Skill.SkillType.SWORD, 16, SilverSword) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit {
            if (battleUnit.hp <= battleUnit.armedHero.maxHp / 2) {
                battleUnit.defEffect += 4
            }
            return battleUnit
        }
    },
    Mystletainn("ミストルティン", Skill.SkillType.SWORD, 16, SilverSword, RefineSkill.RefineType.Range1) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero, lv)
    },
    Eckesachs("エッケザックス", Skill.SkillType.SWORD, 16, SilverSword),
    Siegfried("ジークフリート", Skill.SkillType.SWORD, 16, SilverSword) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = counterAllRange(battleUnit)
    },
    Ragnell("ラグネル", Skill.SkillType.SWORD, 16, SilverSword) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = counterAllRange(battleUnit)
    },
    BlazingDurandal("烈剣デュランダル", Skill.SkillType.SWORD, 16, SilverSword) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = super.equip(equipAtk(armedHero, 3), lv)
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = heavyBlade(battleUnit, 3)
    },
    Amiti("アミーテ", Skill.SkillType.SWORD, 11, SilverSword) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBrave(equipSpd(armedHero, 3), lv)
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = doubleAttack(battleUnit)
    },
    Alondite("エタルド", Skill.SkillType.SWORD, 16, SilverSword) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = counterAllRange(battleUnit)
    },
    DivineTyrfing("聖剣ティルフィング", Skill.SkillType.SWORD, 16, SilverSword) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = super.equip(equipRes(armedHero, 3), lv)
        override fun prevent(battleUnit: BattleUnit, damage: Int, results: List<AttackResult>, lv: Int): Int =
                if (results.isEmpty() && battleUnit.enemy!!.armedHero.effectiveRange == 2 && battleUnit.enemy!!.armedHero.isMagicWeapon()) damage - damage / 2 else damage
    },
    RegalBlade("リガルブレイド", Skill.SkillType.SWORD, 16, SilverSword) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = enemyFullHpBonus(battleUnit, lv * 2)
    },
    ResoluteBlade("気鋭ワユの剣", Skill.SkillType.SWORD, 16, WaoDao) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = super.equip(equipAtk(armedHero, 3), lv)
        override fun specialTriggered(battleUnit: BattleUnit, damage: Int, lv: Int): Int = damage + 10
    },
    Audhulma("アウドムラ", Skill.SkillType.SWORD, 16, SilverSword) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(equipRes(armedHero, 5), lv)
    },
    DarkGreatsword("黒き血の大剣", Skill.SkillType.SWORD, 16, SilverSword) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = blowSpd(blowAtk(battleUnit, 4), 4)
    },
    FiresweepSword("火薙ぎの槍", Skill.SkillType.SWORD, 11, SteelSword) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = disableEachCounter(battleUnit, 0)
    },
    FiresweepSword2("火薙ぎの槍＋", Skill.SkillType.SWORD, 15, FiresweepSword) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = disableEachCounter(battleUnit, 0)
    },

    IronLance("鉄の槍", Skill.SkillType.LANCE, 6),
    SteelLance("鋼の槍", Skill.SkillType.LANCE, 8, IronLance),
    SilverLance("銀の槍", Skill.SkillType.LANCE, 11, SteelLance),
    SilverLance2("銀の槍＋", Skill.SkillType.LANCE, 15, SilverLance, RefineSkill.RefineType.Range1),
    KillerLance("キラーランス", Skill.SkillType.LANCE, 7, SteelLance) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero, lv)
    },
    KillerLance2("キラーランス＋", Skill.SkillType.LANCE, 11, KillerLance) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero, lv)
    },
    BraveLance("勇者の槍", Skill.SkillType.LANCE, 5, SteelLance) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBrave(armedHero, lv)
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = doubleAttack(battleUnit)
    },
    BraveLance2("勇者の槍＋", Skill.SkillType.LANCE, 8, BraveLance) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBrave(armedHero, lv)
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = doubleAttack(battleUnit)
    },
    SapphireLance("蒼海の槍", Skill.SkillType.LANCE, 8, SteelLance) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = colorAdvantage(battleUnit, 3)
    },
    SapphireLance2("蒼海の槍＋", Skill.SkillType.LANCE, 12, SapphireLance) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = colorAdvantage(battleUnit, 3)
    },
    HeavySpear("貫きの槍", Skill.SkillType.LANCE, 8, SteelLance) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = effectiveAgainst(MoveType.ARMORED, battleUnit)
    },
    HeavySpear2("貫きの槍＋", Skill.SkillType.LANCE, 12, HeavySpear) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = effectiveAgainst(MoveType.ARMORED, battleUnit)
    },
    SlayingSpear2("貫きの槍鍛＋", Skill.SkillType.LANCE, 14, HeavySpear2, RefineSkill.RefineType.Range1) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = effectiveAgainst(MoveType.ARMORED, battleUnit)
    },

    CarrotLance("ニンジンの槍", Skill.SkillType.LANCE, 9, SteelLance) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = attackHeal(battleUnit, 4)
    },
    CarrotLance2("ニンジンの槍＋", Skill.SkillType.LANCE, 13, CarrotLance, RefineSkill.RefineType.Range1) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = attackHeal(battleUnit, 4)
    },
    FirstBite("ファーストバイト", Skill.SkillType.LANCE, 10, SteelLance),
    FirstBite2("ファーストバイト＋", Skill.SkillType.LANCE, 14, FirstBite, RefineSkill.RefineType.Range1),
    FiresweepLance("火薙ぎの槍", Skill.SkillType.LANCE, 11, SteelLance) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = disableEachCounter(battleUnit, 0)
    },
    FiresweepLance2("火薙ぎの槍＋", Skill.SkillType.LANCE, 15, FiresweepLance) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = disableEachCounter(battleUnit, 0)
    },
    DeftHarpoon("魚を突いた銛", Skill.SkillType.LANCE, 10, SteelLance) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = fullHpBonus(battleUnit, 2)
    },
    DeftHarpoon2("魚を突いた銛＋", Skill.SkillType.LANCE, 14, DeftHarpoon, RefineSkill.RefineType.Range1) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = fullHpBonus(battleUnit, 2)
    },
    Ridersbane("ホースキラー", Skill.SkillType.LANCE, 10, SteelLance) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = effectiveAgainst(MoveType.CAVALRY, battleUnit)
    },
    Ridersbane2("ホースキラー＋", Skill.SkillType.LANCE, 14, Ridersbane, RefineSkill.RefineType.Range1) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = effectiveAgainst(MoveType.CAVALRY, battleUnit)
    },
    BerkutsLance("ベルクトの槍", Skill.SkillType.LANCE, 10, SteelLance) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = blowRes(battleUnit, 4)
    },
    BerkutsLance2("ベルクトの槍＋", Skill.SkillType.LANCE, 14, BerkutsLance, RefineSkill.RefineType.Range1) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = blowRes(battleUnit, 4)
    },
    SlayingLance("キラーランス鍛", Skill.SkillType.LANCE, 10, SteelLance) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero, lv)
    },
    SlayingLance2("キラーランス鍛＋", Skill.SkillType.LANCE, 14, SlayingLance, RefineSkill.RefineType.Range1) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero, lv)
    },
    Fensalir("フェンサリル", Skill.SkillType.LANCE, 16, SilverLance),
    Siegmund("ジークムント", Skill.SkillType.LANCE, 16, SilverLance, RefineSkill.RefineType.Range1),
    Gradivus("グラディウス", Skill.SkillType.LANCE, 16, SilverLance) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = counterAllRange(battleUnit)
    },
    Vidofinir("ヴィドフニル", Skill.SkillType.LANCE, 16, SilverLance) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit {
            val weapon = battleUnit.enemy!!.armedHero.baseHero.weaponType
            if (weapon == WeaponType.SWORD || weapon == WeaponType.LANCE || weapon == WeaponType.AXE) {
                battleUnit.defEffect += 7
            }
            return battleUnit
        }
    },
    CursedLance("魔性の槍", Skill.SkillType.LANCE, 16, SilverLance) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(equipAtk(equipSpd(armedHero, 2), 2), lv)
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = attackHpLoss(battleUnit, 4)
    },
    Geirskogul("ゲイルスケグル", Skill.SkillType.LANCE, 16, SilverLance) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = super.equip(equipDef(armedHero, 3), lv)
    },
    Leiptr("レイプト", Skill.SkillType.LANCE, 16, SilverLance) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = counterAllRange(battleUnit)
    },
    BrightNaginata("白き血の薙刀", Skill.SkillType.LANCE, 16, SilverLance) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = blowDef(blowAtk(battleUnit, 4), 4)
    },


    Tannenboom("聖樹", Skill.SkillType.LANCE, 10, SteelLance) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = allBonus(battleUnit, 2)
    },
    Tannenboom2("聖樹＋", Skill.SkillType.LANCE, 14, Tannenboom) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = allBonus(battleUnit, 2)
    },


    IronAxe("鉄の斧", Skill.SkillType.AXE, 6),
    SteelAxe("鋼の斧", Skill.SkillType.AXE, 8, IronAxe),
    SilverAxe("銀の斧", Skill.SkillType.AXE, 11, SteelAxe),
    SilverAxe2("銀の斧＋", Skill.SkillType.AXE, 15, SilverAxe, RefineSkill.RefineType.Range1),
    KillerAxe("キラーアクス", Skill.SkillType.AXE, 7, SteelAxe) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero, lv)
    },
    KillerAxe2("キラーアクス＋", Skill.SkillType.AXE, 11, KillerAxe) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero, lv)
    },
    BraveAxe("勇者の斧", Skill.SkillType.AXE, 5, SteelAxe) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBrave(armedHero, lv)
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = doubleAttack(battleUnit)
    },
    BraveAxe2("勇者の斧＋", Skill.SkillType.AXE, 8, BraveAxe) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBrave(armedHero, lv)
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = doubleAttack(battleUnit)
    },
    Hammer("ハンマー", Skill.SkillType.AXE, 8, SteelAxe) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = effectiveAgainst(MoveType.ARMORED, battleUnit)
    },
    Hammer2("ハンマー＋", Skill.SkillType.AXE, 12, Hammer) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = effectiveAgainst(MoveType.ARMORED, battleUnit)
    },
    SlayingHammer2("ハンマー鍛＋", Skill.SkillType.AXE, 14, Hammer2, RefineSkill.RefineType.Range1) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = effectiveAgainst(MoveType.ARMORED, battleUnit)
    },
    EmeraldAxe("深緑の斧", Skill.SkillType.AXE, 8, SteelAxe) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = colorAdvantage(battleUnit, 3)
    },
    EmeraldAxe2("深緑の斧＋", Skill.SkillType.AXE, 12, EmeraldAxe) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = colorAdvantage(battleUnit, 3)
    },
    SlayingAxe("キラーアクス鍛", Skill.SkillType.AXE, 10, SteelAxe) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero, lv)
    },
    SlayingAxe2("キラーアクス鍛＋", Skill.SkillType.AXE, 14, SlayingAxe, RefineSkill.RefineType.Range1) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero, lv)
    },

    CarrotAxe("ニンジンの斧", Skill.SkillType.AXE, 9, SteelAxe) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = attackHeal(battleUnit, 4)
    },
    CarrotAxe2("ニンジンの斧＋", Skill.SkillType.AXE, 13, CarrotAxe, RefineSkill.RefineType.Range1) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = attackHeal(battleUnit, 4)
    },
    LegionsAxe("ローローの斧", Skill.SkillType.AXE, 10, SteelAxe),
    LegionsAxe2("ローローの斧＋", Skill.SkillType.AXE, 14, LegionsAxe, RefineSkill.RefineType.Range1),
    MelonCrusher("スイカ割りの棍棒", Skill.SkillType.AXE, 10, SteelAxe) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = fullHpBonus(battleUnit, 2)
    },
    MelonCrusher2("スイカ割りの棍棒＋", Skill.SkillType.AXE, 14, MelonCrusher, RefineSkill.RefineType.Range1) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = fullHpBonus(battleUnit, 2)
    },
    LilithFloatie("リリスの浮き輪", Skill.SkillType.AXE, 10, SteelAxe),
    LilithFloatie2("リリスの浮き輪＋", Skill.SkillType.AXE, 14, LilithFloatie, RefineSkill.RefineType.Range1),
    Noatun("ノーアトゥーン", Skill.SkillType.AXE, 16, SilverAxe),
    Hauteclere("オートクレール", Skill.SkillType.AXE, 16, SilverAxe, RefineSkill.RefineType.Range1) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero, lv)
    },
    Armoads("アルマーズ", Skill.SkillType.AXE, 16, SilverAxe) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = followupable(battleUnit, 2)
    },
    Urvan("ウルヴァン", Skill.SkillType.AXE, 16, SilverAxe) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero, lv)
        override fun prevent(battleUnit: BattleUnit, damage: Int, results: List<AttackResult>, lv: Int): Int =
                if (results.isNotEmpty() && results.last().side != battleUnit.side) damage - damage * 8 / 10 else damage
    },
    Uror("ウルズ", Skill.SkillType.AXE, 16, SilverAxe),
    StoutTomahawk("剛斧トマホーク", Skill.SkillType.AXE, 16, SilverAxe) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = counterAllRange(battleUnit)
    },
    SackOGifts("プレゼント袋", Skill.SkillType.AXE, 10, SteelAxe) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = allBonus(battleUnit, 2)
    },
    SackOGifts2("プレゼント袋＋", Skill.SkillType.AXE, 14, SackOGifts) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = allBonus(battleUnit, 2)
    },

    Handbell("ハンドベル", Skill.SkillType.AXE, 10, SteelAxe) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = allBonus(battleUnit, 2)
    },
    Handbell2("ハンドベル＋", Skill.SkillType.AXE, 14, Handbell) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = allBonus(battleUnit, 2)
    },


    IronBow("鉄の弓", Skill.SkillType.BOW, 4),
    SteelBow("鋼の弓", Skill.SkillType.BOW, 6, IronBow),
    SilverBow("銀の弓", Skill.SkillType.BOW, 9, SteelBow),
    SilverBow2("銀の弓＋", Skill.SkillType.BOW, 13, SilverBow, RefineSkill.RefineType.Range2),
    BraveBow("勇者の弓", Skill.SkillType.BOW, 4, SteelBow) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBrave(armedHero, lv)
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = super.attackEffect(doubleAttack(battleUnit), lv)
    },
    BraveBow2("勇者の弓＋", Skill.SkillType.BOW, 7, BraveBow) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBrave(armedHero, lv)
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = super.attackEffect(doubleAttack(battleUnit), lv)
    },
    KillerBow("キラーボウ", Skill.SkillType.BOW, 5, SteelBow) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero, lv)
    },
    KillerBow2("キラーボウ＋", Skill.SkillType.BOW, 9, KillerBow) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero, lv)
    },
    AssassinsBow("暗器殺しの弓", Skill.SkillType.BOW, 7, SteelBow) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = super.bothEffect(weaponBreaker(battleUnit, WeaponType.DAGGER, lv), lv)
    },
    AssassinsBow2("暗器殺しの弓＋", Skill.SkillType.BOW, 11, AssassinsBow, RefineSkill.RefineType.Range2) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = super.bothEffect(weaponBreaker(battleUnit, WeaponType.DAGGER, lv), lv)
    },
    FiresweepBow("火薙ぎの弓", Skill.SkillType.BOW, 7, SteelBow) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = super.bothEffect(disableEachCounter(battleUnit, 0), lv)
    },
    FiresweepBow2("火薙ぎの弓＋", Skill.SkillType.BOW, 11, FiresweepBow) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = super.attackEffect(disableEachCounter(battleUnit, 0), lv)
    },
    CupidArrow("キューピッドの矢", Skill.SkillType.BOW, 8, SteelBow),
    CupidArrow2("キューピッドの矢＋", Skill.SkillType.BOW, 12, CupidArrow, RefineSkill.RefineType.Range2),
    RefreshingBolt("氷菓子の弓", Skill.SkillType.BOW, 8, SteelBow) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = super.attackEffect(fullHpBonus(battleUnit, 2), lv)
    },
    RefreshingBolt2("氷菓子の弓＋", Skill.SkillType.BOW, 12, RefreshingBolt, RefineSkill.RefineType.Range2) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = super.attackEffect(fullHpBonus(battleUnit, 2), lv)
    },
    ClarissesBow("クライネの弓", Skill.SkillType.BOW, 7, SteelBow),
    ClarissesBow2("クライネの弓＋", Skill.SkillType.BOW, 11, ClarissesBow, RefineSkill.RefineType.Range2),
    SlayingBow("キラーボウ鍛", Skill.SkillType.BOW, 10, SteelBow) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero, lv)
    },
    SlayingBow2("キラーボウ鍛＋", Skill.SkillType.BOW, 12, SlayingBow, RefineSkill.RefineType.Range2) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipKiller(armedHero, lv)
    },
    Parthia("パルティア", Skill.SkillType.BOW, 14, SilverBow) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = super.attackEffect(blowRes(battleUnit, 2), lv)
    },
    FujinYumi("風神弓", Skill.SkillType.BOW, 14, SilverBow, RefineSkill.RefineType.Range2),
    Nidhogg("ニーズヘッグ", Skill.SkillType.BOW, 14, SilverBow),
    Mulagir("ミュルグレ", Skill.SkillType.BOW, 14, SilverBow) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = super.equip(equipDef(armedHero, 3), lv)
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = super.bothEffect(antiBuffBonus(battleUnit), lv)
    },
    MonstrousBow("怪物の弓", Skill.SkillType.BOW, 8, SteelBow),
    MonstrousBow2("怪物の弓＋", Skill.SkillType.BOW, 12, MonstrousBow, RefineSkill.RefineType.Range2),


    IronDagger("鉄の暗器", Skill.SkillType.DAGGER, 3),
    SteelDagger("鋼の暗器", Skill.SkillType.DAGGER, 5, IronDagger),
    SilverDagger("銀の暗器", Skill.SkillType.DAGGER, 7, SteelDagger),
    SilverDagger2("銀の暗器＋", Skill.SkillType.DAGGER, 10, SilverDagger, RefineSkill.RefineType.Range2),
    RogueDagger("盗賊の暗器", Skill.SkillType.DAGGER, 4, SteelDagger),
    RogueDagger2("盗賊の暗器＋", Skill.SkillType.DAGGER, 7, RogueDagger, RefineSkill.RefineType.Range2),
    SmokeDagger("紫煙の暗器", Skill.SkillType.DAGGER, 6, SteelDagger),
    SmokeDagger2("紫煙の暗器＋", Skill.SkillType.DAGGER, 9, SmokeDagger, RefineSkill.RefineType.Range2),
    PoisonDagger("秘毒の暗器", Skill.SkillType.DAGGER, 2, SteelDagger) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = effectiveAgainst(MoveType.INFANTRY, battleUnit)
    },
    PoisonDagger2("秘毒の暗器＋", Skill.SkillType.DAGGER, 5, PoisonDagger) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = effectiveAgainst(MoveType.INFANTRY, battleUnit)
    },
    Seashell("貝殻", Skill.SkillType.DAGGER, 7, SteelDagger) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = fullHpBonus(battleUnit, 2)
    },
    Seashell2("貝殻＋", Skill.SkillType.DAGGER, 10, Seashell, RefineSkill.RefineType.Range2) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = fullHpBonus(battleUnit, 2)
    },
    DancersFan("舞踏祭の扇子", Skill.SkillType.DAGGER, 7, SteelDagger),
    DancersFan2("舞踏祭の扇子＋", Skill.SkillType.DAGGER, 10, DancersFan, RefineSkill.RefineType.Range2),
    DeathlyDagger("死神の暗器", Skill.SkillType.DAGGER, 11, SilverDagger, RefineSkill.RefineType.Range2) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = attackPain(battleUnit, 7)
    },
    KittyPaddle("猫の暗器", Skill.SkillType.DAGGER, 5, SteelDagger) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = effectiveAgainstMagic(battleUnit)
    },
    KittyPaddle2("猫の暗器＋", Skill.SkillType.DAGGER, 8, KittyPaddle) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = effectiveAgainstMagic(battleUnit)
    },

    Assault("アサルト", Skill.SkillType.STAFF, 10),
    Absorb("アブゾーブ", Skill.SkillType.STAFF, 4, Assault) {
        override fun absorb(battleUnit: BattleUnit, target: BattleUnit, damage: Int): Int = battleUnit.heal(damage * 5 / 10)
    },
    Absorb2("アブゾーブ＋", Skill.SkillType.STAFF, 7, Absorb, RefineSkill.RefineType.Staff) {
        override fun absorb(battleUnit: BattleUnit, target: BattleUnit, damage: Int): Int = battleUnit.heal(damage * 5 / 10)
    },
    Candlelight("キャンドルサービス", Skill.SkillType.STAFF, 7, Assault),
    Candlelight2("キャンドルサービス＋", Skill.SkillType.STAFF, 11, Assault, RefineSkill.RefineType.Staff),
    Gravity("グラビティ", Skill.SkillType.STAFF, 7, Assault),
    Gravity2("グラビティ＋", Skill.SkillType.STAFF, 10, Gravity, RefineSkill.RefineType.Staff),
    Fear("フィアー", Skill.SkillType.STAFF, 5, Assault),
    Fear2("フィアー＋", Skill.SkillType.STAFF, 12, Fear, RefineSkill.RefineType.Staff),
    Slow("スロウ", Skill.SkillType.STAFF, 5, Assault),
    Slow2("スロウ＋", Skill.SkillType.STAFF, 12, Slow, RefineSkill.RefineType.Staff),
    Panic("パニック", Skill.SkillType.STAFF, 6, Assault),
    Panic2("パニック＋", Skill.SkillType.STAFF, 11, Panic, RefineSkill.RefineType.Staff),
    Pain("ペイン", Skill.SkillType.STAFF, 3, Assault) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = attackPain(battleUnit, 10)
    },
    Pain2("ペイン＋", Skill.SkillType.STAFF, 10, Pain, RefineSkill.RefineType.Staff) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = attackPain(battleUnit, 10)
    },

    Flux("ミィル", Skill.SkillType.RTOME, 4),
    Fire("ファイアー", Skill.SkillType.RTOME, 4),
    Ruin("ルイン", Skill.SkillType.RTOME, 6, Flux),
    Elfire("エルファイアー", Skill.SkillType.RTOME, 6, Fire),
    Rauorwolf("ラウアウルフ", Skill.SkillType.RTOME, 6, Elfire) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = effectiveAgainst(MoveType.CAVALRY, battleUnit)
    },
    Rauorwolf2("ラウアウルフ＋", Skill.SkillType.RTOME, 10, Rauorwolf) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = effectiveAgainst(MoveType.CAVALRY, battleUnit)
    },
    KeenRauorwolf2("ラウアウルフ鍛＋", Skill.SkillType.RTOME, 12, Rauorwolf2, RefineSkill.RefineType.Range2) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = effectiveAgainst(MoveType.CAVALRY, battleUnit)
    },
    Rauorraven("ラウアレイヴン", Skill.SkillType.RTOME, 7, Elfire) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = equipRaven(battleUnit)
    },
    Rauorraven2("ラウアレイヴン＋", Skill.SkillType.RTOME, 11, Rauorraven) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = equipRaven(battleUnit)
    },
    Rauorblade("ラウアブレード", Skill.SkillType.RTOME, 9, Elfire) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBlade(armedHero, lv)
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = bladeEffect(battleUnit)
    },
    Rauorblade2("ラウアブレード＋", Skill.SkillType.RTOME, 13, Rauorblade) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBlade(armedHero, lv)
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = bladeEffect(battleUnit)
    },
    Rauorowl("ラウアアウル", Skill.SkillType.RTOME, 6, Elfire),
    Rauorowl2("ラウアアウル＋", Skill.SkillType.RTOME, 10, Rauorowl, RefineSkill.RefineType.Range2),
    Fenrir("ノスフェラート", Skill.SkillType.RTOME, 9, Elfire),
    Fenrir2("ノスフェラート＋", Skill.SkillType.RTOME, 14, Fenrir, RefineSkill.RefineType.Range2),
    Bolganone("ボルガノン", Skill.SkillType.RTOME, 9, Elfire),
    Bolganone2("ボルガノン＋", Skill.SkillType.RTOME, 14, Bolganone, RefineSkill.RefineType.Range2),
    TomatoTome("トマトの本", Skill.SkillType.RTOME, 8, Elfire),
    TomatoTome2("トマトの本＋", Skill.SkillType.RTOME, 12, TomatoTome, RefineSkill.RefineType.Range2),
    Brynhildr("ブリュンヒルデ", Skill.SkillType.RTOME, 14, Bolganone),
    Cymbeline("シムベリン", Skill.SkillType.RTOME, 14, Bolganone),
    Ragnarok("ライナロック", Skill.SkillType.RTOME, 14, Bolganone) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = fullHpAtkSpdBonus(battleUnit, 5)
    },
    Valflame("ファラフレイム", Skill.SkillType.RTOME, 14, Bolganone),
    Grimoire("グリモワール", Skill.SkillType.RTOME, 14, Bolganone),
    Candelabra("燭台", Skill.SkillType.RTOME, 8, Elfire) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = allBonus(battleUnit, 2)
    },
    Candelabra2("燭台＋", Skill.SkillType.RTOME, 12, Candelabra) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = allBonus(battleUnit, 2)
    },


    Thunder("サンダー", Skill.SkillType.BTOME, 4),
    Elthunder("エルサンダー", Skill.SkillType.BTOME, 6, Thunder),
    Blarwolf("ブラーウルフ", Skill.SkillType.BTOME, 6, Elthunder) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = effectiveAgainst(MoveType.CAVALRY, battleUnit)
    },
    Blarwolf2("ブラーウルフ＋", Skill.SkillType.BTOME, 10, Blarwolf) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = effectiveAgainst(MoveType.CAVALRY, battleUnit)
    },
    KeenBlarwolf2("ブラーウルフ鍛＋", Skill.SkillType.BTOME, 12, Blarwolf2, RefineSkill.RefineType.Range2) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = effectiveAgainst(MoveType.CAVALRY, battleUnit)
    },
    Blarraven("ブラーレイヴン", Skill.SkillType.BTOME, 7, Elthunder) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = equipRaven(battleUnit)
    },
    Blarraven2("ブラーレイヴン＋", Skill.SkillType.BTOME, 11, Blarraven) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = equipRaven(battleUnit)
    },
    Blarblade("ブラーブレード", Skill.SkillType.RTOME, 9, Elthunder) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBlade(armedHero, lv)
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = bladeEffect(battleUnit)
    },
    Blarblade2("ブラーブレード＋", Skill.SkillType.RTOME, 13, Blarblade) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBlade(armedHero, lv)
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = bladeEffect(battleUnit)
    },
    Blarowl("ブラーアウル", Skill.SkillType.BTOME, 6, Elthunder),
    Blarowl2("ブラーアウル＋", Skill.SkillType.BTOME, 10, Blarowl, RefineSkill.RefineType.Range2),
    Thoron("トロン", Skill.SkillType.BTOME, 9, Elthunder),
    Thoron2("トロン＋", Skill.SkillType.BTOME, 13, Thoron, RefineSkill.RefineType.Range2),
    BlueEgg("青の卵", Skill.SkillType.BTOME, 7, Elthunder),
    BlueEgg2("青の卵＋", Skill.SkillType.BTOME, 11, BlueEgg, RefineSkill.RefineType.Range2),
    BlessedBouquet("聖なるブーケ", Skill.SkillType.BTOME, 9, Elthunder),
    BlessedBouquet2("聖なるブーケ＋", Skill.SkillType.BTOME, 12, BlessedBouquet, RefineSkill.RefineType.Range2),
    SealifeTome("熱帯魚の本", Skill.SkillType.BTOME, 8, Elthunder),
    SealifeTome2("熱帯魚の本＋", Skill.SkillType.BTOME, 12, SealifeTome, RefineSkill.RefineType.Range2),
    DancersScore("舞踏祭の楽譜", Skill.SkillType.BTOME, 8, Elthunder),
    DancersScore2("舞踏祭の楽譜＋", Skill.SkillType.BTOME, 12, DancersScore, RefineSkill.RefineType.Range2),
    DarkAura("共鳴オーラ", Skill.SkillType.BTOME, 14, Thoron),
    Valaskjalf("ヴラスキャルヴ", Skill.SkillType.BTOME, 14, Thoron) {
        override fun counterPlan(fightPlan: FightPlan, lv: Int): FightPlan = vantage(fightPlan, 2)
    },
    Aura("オーラ", Skill.SkillType.BTOME, 14, Thoron),
    DireThunder("ダイムサンダ", Skill.SkillType.BTOME, 9, Thoron) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBrave(armedHero, lv)
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = doubleAttack(battleUnit)
    },
    WeirdingTome("奇異ルーテの書", Skill.SkillType.BTOME, 14, Thoron) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = super.equip(equipSpd(armedHero, 3), lv)
    },

    Wind("ウィンド", Skill.SkillType.GTOME, 4),
    Elwind("エルウィンド", Skill.SkillType.GTOME, 6, Wind),
    Rexcalibur("レクスカリバー", Skill.SkillType.GTOME, 9, Elwind),
    Rexcalibur2("レクスカリバー＋", Skill.SkillType.GTOME, 14, Rexcalibur, RefineSkill.RefineType.Range2),
    Gronnwolf("グルンウルフ", Skill.SkillType.GTOME, 6, Elwind) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = effectiveAgainst(MoveType.CAVALRY, battleUnit)
    },
    Gronnwolf2("グルンウルフ＋", Skill.SkillType.GTOME, 10, Gronnwolf) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = effectiveAgainst(MoveType.CAVALRY, battleUnit)
    },
    KeenGronnwolf2("グルンウルフ鍛＋", Skill.SkillType.GTOME, 12, Gronnwolf2, RefineSkill.RefineType.Range2) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = effectiveAgainst(MoveType.CAVALRY, battleUnit)
    },
    Gronnraven("グルンレイヴン", Skill.SkillType.GTOME, 7, Elwind) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = equipRaven(battleUnit)
    },
    Gronnraven2("グルンレイヴン＋", Skill.SkillType.GTOME, 11, Gronnraven) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = equipRaven(battleUnit)
    },
    Gronnblade("グルンブレード", Skill.SkillType.GTOME, 9, Elwind) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBlade(armedHero, lv)
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = bladeEffect(battleUnit)
    },
    Gronnblade2("グルンブレード＋", Skill.SkillType.GTOME, 13, Gronnblade) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBlade(armedHero, lv)
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = bladeEffect(battleUnit)
    },
    Gronnowl("グルンアウル", Skill.SkillType.GTOME, 6, Elwind),
    Gronnowl2("グルンアウル＋", Skill.SkillType.GTOME, 10, Gronnowl, RefineSkill.RefineType.Range2),
    GreenEgg("緑の卵", Skill.SkillType.GTOME, 7, Elwind) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = attackHeal(battleUnit, 4)
    },
    GreenEgg2("緑の卵＋", Skill.SkillType.GTOME, 11, GreenEgg, RefineSkill.RefineType.Range2) {
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = attackHeal(battleUnit, 4)
    },
    HibiscusTome("ハイビスカスの本", Skill.SkillType.GTOME, 8, Elwind),
    HibiscusTome2("ハイビスカスの本＋", Skill.SkillType.GTOME, 12, HibiscusTome, RefineSkill.RefineType.Range2),
    DancersRing("舞踏祭の輪", Skill.SkillType.GTOME, 8, Elwind),
    DancersRing2("舞踏祭の輪＋", Skill.SkillType.GTOME, 12, DancersRing, RefineSkill.RefineType.Range2),
    Elivagar("エリヴァーガル", Skill.SkillType.GTOME, 14, Rexcalibur),
    Excalibur("エクスカリバー", Skill.SkillType.GTOME, 14, Rexcalibur) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = effectiveAgainst(MoveType.FLIER, battleUnit)
    },
    Naga("ナーガ", Skill.SkillType.GTOME, 14, Rexcalibur) {
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = effectiveAgainst(WeaponType.DRAGON, blowDef(blowRes(battleUnit, 2), 2))
        override fun attackEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = effectiveAgainst(WeaponType.DRAGON, battleUnit)
    },
    DarkExcalibur("共鳴エクスカリバー", Skill.SkillType.GTOME, 14, Rexcalibur) {
        override fun specialTriggered(battleUnit: BattleUnit, damage: Int, lv: Int): Int = damage + 10
    },
    DivineNaga("聖書ナーガ", Skill.SkillType.GTOME, 14, Rexcalibur) {
        override fun bothEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = antiBuffBonus(effectiveAgainst(WeaponType.DRAGON, battleUnit))
    },
    SpectralTome("ゴーストの魔導書", Skill.SkillType.GTOME, 8, Elwind),
    SpectralTome2("ゴーストの魔導書+", Skill.SkillType.GTOME, 12, SpectralTome, RefineSkill.RefineType.Range2),

    FireBreath("火のブレス", Skill.SkillType.DRAGON, 6),
    FireBreath2("火炎のブレス", Skill.SkillType.DRAGON, 8, FireBreath),
    LightningBreath("雷のブレス", Skill.SkillType.DRAGON, 8, FireBreath2) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBlade(armedHero, lv)
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = counterAllRange(battleUnit)
    },
    LightningBreath2("雷のブレス＋", Skill.SkillType.DRAGON, 11, LightningBreath, RefineSkill.RefineType.Range1) {
        override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero = equipBlade(armedHero, lv)
        override fun counterEffect(battleUnit: BattleUnit, lv: Int): BattleUnit = counterAllRange(battleUnit)
    },
    Flametongue("灼熱のブレス", Skill.SkillType.DRAGON, 11, FireBreath2),
    Flametongue2("灼熱のブレス＋", Skill.SkillType.DRAGON, 15, Flametongue, RefineSkill.RefineType.Range1),
    LightBreath("光のブレス", Skill.SkillType.DRAGON, 9, FireBreath2),
    LightBreath2("光のブレス＋", Skill.SkillType.DRAGON, 13, LightBreath, RefineSkill.RefineType.Range1),
    DarkBreath("闇のブレス", Skill.SkillType.DRAGON, 9, FireBreath),
    DarkBreath2("闇のブレス＋", Skill.SkillType.DRAGON, 13, DarkBreath, RefineSkill.RefineType.Range1),

    ;

    /**
     * nameは誤動作するので共通処理としてはvalueを使う。もっといい名前があるか？
     * なお2を＋に置き換える。
     */
    override val value get() = name.replace("2", "+")

    override fun localeName(locale: Locale): String
            = when (locale) {
        Locale.JAPAN -> jp
        Locale.JAPANESE -> jp
        else -> value
    }

    companion object {
        private val itemMap = mutableMapOf<String, Skill>()
        fun spreadItems(): List<Skill> = values().fold(arrayListOf<Skill>(Skill.NONE), { list, e -> list.add(e);list })

        fun valueOfOrNONE(key: String?): Skill = if (key == null) Skill.NONE else try {
            if (itemMap.isEmpty()) {
                values().forEach { e -> itemMap.put(e.jp, e) }
                values().forEach { e -> itemMap.put(e.value, e) }
            }
            itemMap[key] ?: valueOf(key)
        } catch (e: Exception) {
            Skill.NONE
        }
    }
}