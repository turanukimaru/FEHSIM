package jp.blogspot.turanukimaru.fehs

import jp.blogspot.turanukimaru.fehs.skill.*

/**
 *　キャラとその基準値
 */
object StandardBaseHero {
    //initブロックと同じ優先順位、つまりinitの前に書かないと作成されない
    private val ITEMS = ArrayList<BaseHero>()
    private val ITEM_MAP = HashMap<String, BaseHero>()
    fun get(id: String): BaseHero? = ITEM_MAP[id]?.clone()
    fun get(id: Int): BaseHero? = ITEMS[id].clone()
    fun containsKey(id: String): Boolean = ITEM_MAP.containsKey(id)
    fun allItems(): MutableList<BaseHero> = ITEMS.fold(mutableListOf(), { list, e -> list.add(e);list })

    init {
        creates()
    }

    private fun creates() {
        createItem(Name.アイク, 1, WeaponType.SWORD, MoveType.INFANTRY, 5, 18, 9, 7, 8, 5, 7, 8, 7, 7, 2,
                Weapon.Ragnell, null, Special.Aether, SkillA.HeavyBlade.lv(3), SkillB.SwordBreaker.lv(3), null)
        createItem(Name.アイラ, 1, WeaponType.SWORD, MoveType.INFANTRY, 4, 19, 7, 11, 7, 4, 6, 8, 8, 7, 4,
                Weapon.AyrasBlade, null, Special.RegnalAstra, SkillA.SwiftSparrow.lv(2), SkillB.Desperation.lv(3), null)
        createItem(Name.アーダン, 1, WeaponType.SWORD, MoveType.ARMORED, 4, 25, 10, 3, 13, 3, 12, 8, 2, 9, 2,
                Weapon.BraveSword2, null, Special.Pavise, SkillB.FollowUpRing, SkillC.DriveDef.lv(2))
        createItem(Name.アテナ, 1, WeaponType.SWORD, MoveType.INFANTRY, 4, 17, 7, 10, 8, 5, 5, 7, 9, 5, 5,
                Weapon.WaoDao2, null, Special.Moonbow, SkillA.SturdyBlow.lv(2), null, SkillC.SwordExperience.lv(3))
        createItem(Name.アルフォンス, 1, WeaponType.SWORD, MoveType.INFANTRY, 2, 19, 9, 6, 8, 5, 7, 8, 5, 7, 4,
                Weapon.Folkvangr, null, Special.Sol, SkillA.DeathBlow.lv(3), null, SkillC.SpurAtk.lv(3))
        createItem(Name.アルム, 1, WeaponType.SWORD, MoveType.INFANTRY, 5, 21, 9, 6, 6, 5, 7, 7, 7, 6, 4,
                Weapon.FalchionA, null, Special.DraconicAura, SkillA.Attack.lv(3), SkillB.Windsweep.lv(3), null)
        createItem(Name.エイリーク, 1, WeaponType.SWORD, MoveType.INFANTRY, 4, 18, 7, 9, 7, 6, 7, 5, 8, 5, 6,
                Weapon.Sieglinde, Assist.Pivot, null, null, SkillB.DragBack, SkillC.HoneSpd.lv(3))
        createItem(Name.エリウッド, 1, WeaponType.SWORD, MoveType.CAVALRY, 3, 17, 7, 8, 6, 8, 6, 7, 6, 4, 7,
                Weapon.Durandal, null, Special.SacredCowl, null, SkillB.AxeBreaker.lv(3), SkillC.WardCavalry)
        createItem(Name.エリンシア, 1, WeaponType.SWORD, MoveType.FLIER, 5, 16, 8, 10, 5, 8, 5, 8, 8, 5, 5,
                Weapon.Amiti, Assist.ArdentSacrifice, null, SkillA.DeathBlow.lv(3), SkillB.FlierFormation.lv(3))
        createItem(Name.エルトシャン, 1, WeaponType.SWORD, MoveType.CAVALRY, 5, 19, 8, 5, 8, 6, 8, 7, 5, 8, 2,
                Weapon.Mystletainn, null, Special.GrowingLight, SkillA.Fury.lv(3), SkillB.Lunge, null)
        createItem(Name.オグマ, 1, WeaponType.SWORD, MoveType.INFANTRY, 4, 21, 7, 10, 6, 3, 8, 9, 7, 6, 1,
                Weapon.BraveSword2, null, Special.Noontime, SkillA.DefiantAtk.lv(3), null, SkillC.SpurAtk.lv(3))
        createItem(Name.オリヴィエ, 1, WeaponType.SWORD, MoveType.INFANTRY, 3, 17, 6, 7, 5, 4, 5, 6, 8, 6, 6,
                Weapon.SilverSword2, Assist.Dance, null, null, SkillB.KnockBack, SkillC.HoneAtk.lv(3))
        createItem(Name.カイン, 1, WeaponType.SWORD, MoveType.CAVALRY, 4, 18, 8, 6, 8, 6, 7, 7, 8, 5, 3,
                Weapon.BraveSword2, null, Special.Escutcheon, null, SkillB.WingsOfMercy.lv(3), SkillC.ThreatenAtk.lv(3))
        createItem(Name.カザハナ, 1, WeaponType.SWORD, MoveType.INFANTRY, 3, 18, 9, 10, 6, 4, 5, 8, 8, 4, 6,
                Weapon.ArmorSlayer2, Assist.RallyAttack, null, SkillA.LifeAndDeath.lv(3), SkillB.Obstruct.lv(3), null)
        createItem(Name.カムイ__男_, 1, WeaponType.SWORD, MoveType.INFANTRY, 4, 20, 8, 8, 6, 5, 6, 7, 7, 6, 5,
                Weapon.Yato, null, Special.DragonFang, SkillA.Defense.lv(3), SkillB.Obstruct.lv(3), null)
        createItem(Name.カレル, 1, WeaponType.SWORD, MoveType.INFANTRY, 5, 19, 8, 9, 6, 5, 9, 6, 8, 5, 3,
                Weapon.WaoDao2, null, Special.Reprisal, SkillA.DefiantAtk.lv(3), SkillB.Desperation.lv(3), null)
        createItem(Name.カレル2, 1, WeaponType.SWORD, MoveType.INFANTRY, 5, 19, 8, 9, 6, 5, 9, 6, 8, 5, 3,
                Weapon.NamelessBlade, null, Special.Reprisal, SkillA.DefiantAtk.lv(3), SkillB.Desperation.lv(3), null)
        createItem(Name.グレイ, 1, WeaponType.SWORD, MoveType.INFANTRY, 5, 17, 7, 6, 6, 3, 8, 9, 8, 7, 5,
                Weapon.Zanbato2, Assist.Swap, null, SkillA.WindBoost.lv(3), null, SkillC.SwordValor.lv(3))
        createItem(Name.クロム, 1, WeaponType.SWORD, MoveType.INFANTRY, 4, 21, 9, 6, 7, 4, 8, 9, 5, 7, 2,
                Weapon.FalchionC, null, Special.Aether, SkillA.DefiantDef.lv(3), null, SkillC.SpurDef.lv(3))
        createItem(Name.シーダ, 1, WeaponType.SWORD, MoveType.FLIER, 4, 17, 6, 9, 5, 10, 5, 5, 9, 5, 7,
                Weapon.ArmorSlayer2, Assist.RallySpeed, null, SkillA.DartingBlow.lv(3), null, SkillC.FortifyFliers)
        createItem(Name.シグルド, 1, WeaponType.SWORD, MoveType.CAVALRY, 5, 19, 9, 8, 6, 4, 6, 8, 7, 9, 2,
                Weapon.DivineTyrfing, null, Special.Miracle, SkillA.CloseDef.lv(3), SkillB.CrusadersWard, SkillC.SpdSmoke.lv(3))
        createItem(Name.漆黒の騎士, 1, WeaponType.SWORD, MoveType.ARMORED, 4, 22, 10, 8, 9, 5, 8, 7, 8, 8, 2,
                Weapon.Alondite, null, Special.BlackLuna, SkillA.SteadyStance.lv(3), SkillB.WingsOfMercy.lv(3), null)
        createItem(Name.セーバー, 1, WeaponType.SWORD, MoveType.INFANTRY, 5, 18, 7, 9, 8, 5, 6, 7, 7, 7, 4,
                Weapon.SlayingEdge2, null, Special.Aegis, SkillA.HpSpd.lv(2), SkillB.ShieldPulse.lv(3), null)
        createItem(Name.ゼト, 1, WeaponType.SWORD, MoveType.CAVALRY, 5, 18, 8, 7, 8, 5, 5, 7, 7, 7, 4,
                Weapon.RubySword2, Assist.Swap, null, SkillA.FortressDef.lv(3), SkillB.SealAtkDef.lv(2), null)
        createItem(Name.ゼフィール, 1, WeaponType.SWORD, MoveType.ARMORED, 3, 25, 9, 3, 12, 5, 10, 8, 2, 8, 5,
                Weapon.Eckesachs, null, Special.Reprisal, SkillA.LifeAndDeath.lv(3), SkillB.WaryFighter.lv(3), null)
        createItem(Name.セリス, 1, WeaponType.SWORD, MoveType.INFANTRY, 4, 19, 8, 7, 8, 5, 9, 8, 4, 6, 4,
                Weapon.Tyrfing, Assist.RallySpeed, null, SkillA.Hp.lv(3), SkillB.BrashAssault.lv(3), null)
        createItem(Name.ソール, 1, WeaponType.SWORD, MoveType.CAVALRY, 3, 19, 7, 7, 8, 5, 8, 7, 5, 6, 4,
                Weapon.RubySword2, Assist.Swap, null, SkillA.Defense.lv(3), SkillB.Obstruct.lv(3), null)
        createItem(Name.ドーガ, 1, WeaponType.SWORD, MoveType.ARMORED, 2, 24, 8, 6, 13, 3, 8, 6, 8, 8, 3,
                Weapon.BraveSword2, null, Special.Pavise, null, SkillB.Lunge, SkillC.WardArmor)
        createItem(Name.ナバール, 1, WeaponType.SWORD, MoveType.INFANTRY, 3, 18, 7, 11, 6, 5, 7, 7, 8, 4, 5,
                Weapon.KillingEdge2, null, Special.BlazingWind, null, SkillB.Desperation.lv(3), SkillC.ThreatenSpd.lv(3))
        createItem(Name.パオラ, 1, WeaponType.SWORD, MoveType.FLIER, 3, 18, 7, 9, 6, 7, 7, 7, 6, 6, 5,
                Weapon.RubySword2, null, Special.Moonbow, null, SkillB.WingsOfMercy.lv(3), SkillC.GoadFliers)
        createItem(Name.ヒナタ, 1, WeaponType.SWORD, MoveType.INFANTRY, 3, 21, 8, 5, 10, 3, 8, 7, 5, 8, 3,
                Weapon.RubySword2, null, Special.Pavise, SkillA.Fury.lv(3), SkillB.BrashAssault.lv(3), null)
        createItem(Name.フィル, 1, WeaponType.SWORD, MoveType.INFANTRY, 3, 19, 6, 10, 5, 7, 6, 5, 8, 5, 7,
                Weapon.KillingEdge2, null, Special.Glacies, SkillA.Speed.lv(3), SkillB.Pass.lv(3), null)
        createItem(Name.フィル2, 1, WeaponType.SWORD, MoveType.INFANTRY, 3, 19, 6, 10, 5, 7, 6, 5, 8, 5, 7,
                Weapon.NamelessBlade, null, Special.Glacies, SkillA.Speed.lv(3), SkillB.Pass.lv(3), null)
        createItem(Name.マルス, 1, WeaponType.SWORD, MoveType.INFANTRY, 4, 19, 7, 8, 7, 6, 6, 7, 8, 6, 4,
                Weapon.FalchionM, Assist.Pivot, null, null, SkillB.EscapeRoute.lv(3), SkillC.SpurSpd.lv(3))
        createItem(Name.マルス__仮面_, 1, WeaponType.SWORD, MoveType.INFANTRY, 4, 19, 8, 10, 6, 4, 7, 8, 8, 5, 3,
                Weapon.FalchionC, null, null, null, null, null)
        createItem(Name.マークス, 1, WeaponType.SWORD, MoveType.CAVALRY, 3, 20, 8, 5, 9, 4, 7, 7, 5, 9, 2,
                Weapon.Siegfried, null, Special.BlazingLight, SkillA.ArmoredBlow.lv(3), null, SkillC.SpurDef.lv(3))
        createItem(Name.ラズワルド, 1, WeaponType.SWORD, MoveType.INFANTRY, 3, 20, 9, 7, 6, 5, 7, 8, 5, 7, 4,
                Weapon.SilverSword2, null, Special.Noontime, null, SkillB.AxeBreaker.lv(3), SkillC.HoneSpd.lv(3))
        createItem(Name.リョウマ, 1, WeaponType.SWORD, MoveType.INFANTRY, 5, 19, 8, 11, 5, 4, 6, 8, 7, 6, 4,
                Weapon.Raijinto, null, Special.Astra, SkillA.DefiantAtk.lv(3), null, SkillC.HoneSpd.lv(3))
        createItem(Name.リン, 1, WeaponType.SWORD, MoveType.INFANTRY, 5, 18, 6, 11, 7, 5, 5, 6, 8, 5, 7,
                Weapon.SolKatti, null, Special.Galeforce, SkillA.DefiantAtk.lv(3), null, SkillC.SpurSpd.lv(3))
        createItem(Name.ルーク, 1, WeaponType.SWORD, MoveType.CAVALRY, 5, 19, 8, 6, 8, 5, 7, 8, 6, 6, 3,
                Weapon.BraveSword2, null, Special.Bonfire, SkillA.FireBoost.lv(3), null, SkillC.PanicPloy.lv(3))
        createItem(Name.ルーナ, 1, WeaponType.SWORD, MoveType.INFANTRY, 3, 18, 6, 9, 8, 6, 5, 5, 8, 7, 6,
                Weapon.ArmorSlayer2, Assist.Reposition, null, SkillA.TriangleAdept.lv(3), null, SkillC.ThreatenSpd.lv(3))
        createItem(Name.ルキナ, 1, WeaponType.SWORD, MoveType.INFANTRY, 5, 19, 8, 10, 6, 4, 7, 8, 8, 5, 3,
                Weapon.FalchionC, null, Special.Aether, SkillA.DefiantSpd.lv(3), null, SkillC.SpurAtk.lv(3))
        createItem(Name.ロイ, 1, WeaponType.SWORD, MoveType.INFANTRY, 4, 20, 8, 9, 6, 4, 7, 6, 6, 5, 7,
                Weapon.BindingBlade, Assist.Shove, null, SkillA.TriangleAdept.lv(3), SkillB.SealDef.lv(3), null)
        createItem(Name.ロイ__総選挙_, 1, WeaponType.SWORD, MoveType.CAVALRY, 5, 16, 8, 8, 7, 7, 6, 7, 8, 5, 4,
                Weapon.BlazingDurandal, null, Special.Galeforce, SkillA.SteadyBlow.lv(2), SkillB.Desperation.lv(3), null)
        createItem(Name.ロイド, 1, WeaponType.SWORD, MoveType.INFANTRY, 3, 17, 8, 9, 5, 8, 7, 7, 8, 3, 6,
                Weapon.RegalBlade, null, Special.Iceberg, null, SkillB.Pass.lv(3), SkillC.ThreatenAtk.lv(3))
        createItem(Name.ロビン, 1, WeaponType.SWORD, MoveType.INFANTRY, 4, 18, 7, 5, 5, 4, 9, 7, 6, 9, 6,
                Weapon.ArmorSlayer2, Assist.Pivot, null, SkillA.Attack.lv(3), SkillB.SealSpd.lv(3), null)
        createItem(Name.ロンクー, 1, WeaponType.SWORD, MoveType.INFANTRY, 3, 19, 7, 11, 5, 5, 8, 6, 9, 4, 4,
                Weapon.KillingEdge2, null, Special.Glimmer, SkillA.Speed.lv(3), SkillB.Vantage.lv(3), null)
        createItem(Name.アルヴィス, 1, WeaponType.RTOME, MoveType.INFANTRY, 3, 18, 8, 7, 4, 7, 3, 8, 7, 2, 8,
                Weapon.Valflame, null, Special.GrowingFlame, null, SkillB.RecoverRing, SkillC.DefPloy.lv(3))
        createItem(Name.カタリナ, 1, WeaponType.RTOME, MoveType.INFANTRY, 5, 17, 6, 8, 5, 8, 4, 8, 8, 1, 7,
                Weapon.Rauorowl2, null, Special.Glacies, SkillA.SwiftSparrow.lv(2), null, SkillC.AtkPloy.lv(3))
        createItem(Name.サーリャ, 1, WeaponType.RTOME, MoveType.INFANTRY, 4, 17, 8, 8, 6, 5, 6, 7, 8, 4, 3,
                Weapon.Rauorblade2, null, Special.Vengeance, SkillA.DartingBlow.lv(3), null, SkillC.SpurRes.lv(3))
        createItem(Name.サナキ, 1, WeaponType.RTOME, MoveType.INFANTRY, 5, 16, 9, 7, 4, 8, 4, 9, 5, 2, 8,
                Weapon.Cymbeline, Assist.HarshCommand, null, SkillA.TriangleAdept.lv(3), null, SkillC.HoneAtk.lv(3))
        createItem(Name.セリカ, 1, WeaponType.RTOME, MoveType.INFANTRY, 5, 17, 8, 7, 5, 7, 6, 7, 8, 4, 3,
                Weapon.Ragnarok, null, Special.BlazingLight, SkillA.DistantDef.lv(3), null, SkillC.SpurDef.lv(3))
        createItem(Name.ソフィーヤ, 1, WeaponType.RTOME, MoveType.INFANTRY, 3, 18, 9, 4, 6, 7, 6, 7, 3, 6, 6,
                Weapon.Fenrir2, null, Special.DragonFang, SkillA.WardingBlow.lv(3), null, SkillC.FortifyRes.lv(3))
        createItem(Name.ヘンリー, 1, WeaponType.RTOME, MoveType.INFANTRY, 3, 19, 6, 5, 8, 6, 8, 4, 4, 7, 5,
                Weapon.Rauorraven2, null, Special.Ignis, SkillA.DefiantDef.lv(3), SkillB.GTomeBreaker.lv(3), null)
        createItem(Name.リリーナ, 1, WeaponType.RTOME, MoveType.INFANTRY, 4, 16, 9, 6, 4, 9, 5, 9, 5, 3, 6,
                Weapon.Bolganone2, null, Special.GrowingFlame, SkillA.Attack.lv(3), null, SkillC.SpurAtk.lv(3))
        createItem(Name.リリーナ2, 1, WeaponType.RTOME, MoveType.INFANTRY, 4, 16, 9, 6, 4, 9, 5, 9, 5, 3, 6,
                Weapon.Forblaze, null, Special.GrowingFlame, SkillA.Attack.lv(3), null, SkillC.SpurAtk.lv(3))
        createItem(Name.レイ, 1, WeaponType.RTOME, MoveType.INFANTRY, 3, 17, 8, 7, 5, 7, 5, 7, 6, 4, 6,
                Weapon.Rauorwolf2, Assist.RallyAttack, null, SkillA.Hp.lv(3), SkillB.SealRes.lv(3), null)
        createItem(Name.レオン, 1, WeaponType.RTOME, MoveType.CAVALRY, 5, 17, 7, 5, 6, 8, 6, 6, 4, 5, 6,
                Weapon.Brynhildr, null, Special.BlazingLight, null, SkillB.QuickRiposte.lv(3), SkillC.SavageBlow.lv(3))
        createItem(Name.レオン__夏_, 1, WeaponType.RTOME, MoveType.INFANTRY, 5, 18, 8, 5, 6, 7, 5, 7, 6, 1, 9,
                Weapon.TomatoTome2, null, Special.Iceberg, null, SkillB.SealRes.lv(3), SkillC.AtkPloy.lv(3))
        createItem(Name.チキ__大人_, 1, WeaponType.DRAGON, MoveType.INFANTRY, 3, 18, 7, 6, 9, 7, 6, 9, 4, 8, 4,
                Weapon.LightningBreath2, null, Special.Bonfire, SkillA.DefiantAtk.lv(3), null, SkillC.SpurRes.lv(3))
        createItem(Name.チキ__幼_, 1, WeaponType.DRAGON, MoveType.INFANTRY, 5, 15, 5, 4, 8, 7, 8, 8, 8, 7, 6,
                Weapon.Flametongue2, null, Special.GrowingFlame, SkillA.ArmoredBlow.lv(3), null, SkillC.BreathOfLife.lv(3))
        createItem(Name.アクア, 2, WeaponType.LANCE, MoveType.INFANTRY, 5, 17, 5, 7, 4, 6, 5, 8, 8, 4, 6,
                Weapon.SapphireLance2, Assist.Sing, null, SkillA.Speed.lv(3), null, SkillC.FortifyRes.lv(3))
        createItem(Name.アベル, 2, WeaponType.LANCE, MoveType.CAVALRY, 4, 17, 7, 8, 8, 6, 6, 8, 7, 4, 5,
                Weapon.BraveLance2, null, Special.Aegis, SkillA.Hp.lv(3), SkillB.SwordBreaker.lv(3), null)
        createItem(Name.ヴァルター, 2, WeaponType.LANCE, MoveType.FLIER, 3, 18, 8, 9, 8, 4, 7, 7, 6, 8, 3,
                Weapon.CursedLance, null, Special.Luna, SkillA.DartingBlow.lv(3), null, SkillC.PanicPloy.lv(3))
        createItem(Name.ウェンディ, 2, WeaponType.LANCE, MoveType.ARMORED, 3, 23, 8, 5, 12, 6, 8, 6, 5, 8, 6,
                Weapon.KillerLance2, null, Special.Escutcheon, null, SkillB.DragBack, SkillC.HoneArmor)
        createItem(Name.エスト, 2, WeaponType.LANCE, MoveType.FLIER, 3, 17, 9, 8, 5, 8, 5, 8, 6, 5, 7,
                Weapon.HeavySpear2, Assist.Shove, null, SkillA.DefiantRes.lv(3), SkillB.SealSpd.lv(3), null)
        createItem(Name.エフラム, 2, WeaponType.LANCE, MoveType.INFANTRY, 5, 19, 9, 6, 8, 5, 8, 8, 5, 7, 3,
                Weapon.Siegmund, null, Special.Moonbow, null, SkillB.SealDef.lv(3), SkillC.ThreatenDef.lv(3))
        createItem(Name.エルフィ, 2, WeaponType.LANCE, MoveType.ARMORED, 4, 22, 12, 5, 11, 4, 9, 9, 4, 6, 5,
                Weapon.SilverLance2, Assist.Smite, null, SkillA.DeathBlow.lv(3), SkillB.WaryFighter.lv(3), null)
        createItem(Name.オスカー, 2, WeaponType.LANCE, MoveType.CAVALRY, 5, 18, 7, 8, 7, 6, 6, 8, 8, 5, 3,
                Weapon.SapphireLance2, Assist.RallySpdDef, null, null, SkillB.LanceBreaker.lv(3), SkillC.SpurSpdDef.lv(2))
        createItem(Name.オボロ, 2, WeaponType.LANCE, MoveType.INFANTRY, 3, 18, 8, 7, 9, 5, 6, 7, 5, 8, 5,
                Weapon.HeavySpear2, Assist.RallyDefense, null, null, SkillB.SealDef.lv(3), SkillC.ThreatenRes.lv(3))
        createItem(Name.カチュア, 2, WeaponType.LANCE, MoveType.FLIER, 4, 17, 7, 10, 7, 6, 6, 7, 7, 6, 5,
                Weapon.KillerLance2, null, Special.Luna, SkillA.ArmoredBlow.lv(3), SkillB.SealAtk.lv(3), null)
        createItem(Name.カミュ, 2, WeaponType.LANCE, MoveType.CAVALRY, 3, 18, 8, 9, 7, 4, 7, 7, 7, 7, 2,
                Weapon.Gradivus, null, Special.GrowingThunder, SkillA.GranisShield, null, SkillC.GoadCavalry)
        createItem(Name.カムイ__女_, 2, WeaponType.DRAGON, MoveType.INFANTRY, 3, 19, 8, 6, 8, 6, 6, 5, 9, 8, 3,
                Weapon.DarkBreath2, null, Special.DraconicAura, null, SkillB.SealRes.lv(3), SkillC.HoneAtk.lv(3))
        createItem(Name.クレア, 2, WeaponType.LANCE, MoveType.FLIER, 5, 18, 7, 8, 5, 9, 5, 5, 9, 5, 7,
                Weapon.SilverLance2, Assist.HarshCommand, null, null, SkillB.HitAndRun, SkillC.SpurSpd.lv(3))
        createItem(Name.クレア2, 2, WeaponType.LANCE, MoveType.FLIER, 5, 18, 7, 8, 5, 9, 5, 5, 9, 5, 7,
                Weapon.Rhomphaia, Assist.HarshCommand, null, null, SkillB.HitAndRun, SkillC.SpurSpd.lv(3))
        createItem(Name.クレーベ, 2, WeaponType.LANCE, MoveType.CAVALRY, 4, 19, 9, 6, 8, 4, 8, 7, 5, 7, 3,
                Weapon.SilverLance2, null, Special.Escutcheon, SkillA.Defense.lv(3), SkillB.HitAndRun, null)
        createItem(Name.シーダ__花嫁_, 2, WeaponType.BTOME, MoveType.INFANTRY, 5, 16, 7, 9, 4, 8, 4, 6, 9, 3, 6,
                Weapon.BlessedBouquet2, null, Special.Iceberg, SkillA.AtkRes.lv(2), null, SkillC.HoneSpd.lv(3))
        createItem(Name.ジェイガン, 2, WeaponType.LANCE, MoveType.CAVALRY, 3, 20, 8, 7, 8, 11, 4, 5, 4, 4, 7,
                Weapon.SilverLance2, null, Special.Aegis, SkillA.Fury.lv(3), null, SkillC.FortifyCavalry)
        createItem(Name.シャーロッテ__花嫁_, 2, WeaponType.LANCE, MoveType.INFANTRY, 5, 20, 10, 8, 5, 4, 8, 8, 7, 5, 3,
                Weapon.FirstBite2, Assist.Smite, null, SkillA.WindBoost.lv(3), null, SkillC.ThreatenAtk.lv(3))
        createItem(Name.シャニー, 2, WeaponType.LANCE, MoveType.FLIER, 3, 17, 8, 9, 6, 7, 6, 6, 8, 5, 6,
                Weapon.KillerLance2, null, Special.Iceberg, null, SkillB.Desperation.lv(3), SkillC.ThreatenSpd.lv(3))
        createItem(Name.シャロン, 2, WeaponType.LANCE, MoveType.INFANTRY, 2, 19, 8, 8, 7, 5, 7, 7, 7, 6, 4,
                Weapon.Fensalir, Assist.RallyAttack, null, SkillA.Speed.lv(3), null, SkillC.FortifyDef.lv(3))
        createItem(Name.ソワレ, 2, WeaponType.LANCE, MoveType.CAVALRY, 3, 18, 7, 8, 7, 6, 7, 5, 8, 4, 6,
                Weapon.SapphireLance2, Assist.DrawBack, null, null, SkillB.SwordBreaker.lv(3), SkillC.SpurDef.lv(3))
        createItem(Name.ターナ, 2, WeaponType.LANCE, MoveType.FLIER, 5, 17, 8, 10, 6, 6, 5, 8, 8, 5, 5,
                Weapon.Vidofinir, null, Special.Moonbow, SkillA.SpdDef.lv(2), null, SkillC.Guidance.lv(3))
        createItem(Name.ツバキ, 2, WeaponType.LANCE, MoveType.FLIER, 3, 18, 6, 9, 9, 5, 6, 5, 8, 8, 4,
                Weapon.SapphireLance2, Assist.Swap, null, SkillA.Resistance.lv(3), SkillB.QuickRiposte.lv(3), null)
        createItem(Name.ティアモ, 2, WeaponType.LANCE, MoveType.FLIER, 4, 18, 9, 9, 5, 6, 6, 8, 8, 4, 5,
                Weapon.BraveLance2, null, Special.Galeforce, SkillA.TriangleAdept.lv(3), SkillB.Pass.lv(3), null)
        createItem(Name.ドニ, 2, WeaponType.LANCE, MoveType.INFANTRY, 3, 17, 7, 5, 6, 4, 8, 9, 7, 8, 5,
                Weapon.BraveLance2, Assist.ReciprocalAid, null, SkillA.Hp.lv(3), SkillB.DragBack, null)
        createItem(Name.ネフェニー, 2, WeaponType.LANCE, MoveType.INFANTRY, 5, 18, 7, 9, 8, 5, 5, 7, 8, 8, 3,
                Weapon.SlayingLance2, null, Special.Moonbow, SkillA.AtkSpd.lv(2), SkillB.Wrath.lv(3), null)
        createItem(Name.ピエリ, 2, WeaponType.LANCE, MoveType.CAVALRY, 4, 16, 9, 9, 6, 6, 5, 7, 7, 4, 7,
                Weapon.KillerLance2, null, Special.Glimmer, SkillA.Resistance.lv(3), null, SkillC.ThreatenDef.lv(3))
        createItem(Name.ヒノカ, 2, WeaponType.LANCE, MoveType.FLIER, 5, 19, 7, 8, 6, 7, 6, 9, 7, 5, 4,
                Weapon.BraveLance2, null, Special.BlazingWind, SkillA.DefiantDef.lv(3), null, SkillC.HoneFliers)
        createItem(Name.フロリーナ, 2, WeaponType.LANCE, MoveType.FLIER, 3, 18, 7, 8, 6, 8, 7, 6, 5, 5, 8,
                Weapon.HeavySpear2, Assist.ArdentSacrifice, null, SkillA.DartingBlow.lv(3), null, SkillC.BreathOfLife.lv(3))
        createItem(Name.ベルクト, 2, WeaponType.LANCE, MoveType.CAVALRY, 3, 19, 8, 5, 7, 7, 7, 8, 4, 7, 4,
                Weapon.BerkutsLance2, null, Special.BlazingFlame, SkillA.WaterBoost.lv(3), null, SkillC.WardCavalry)
        createItem(Name.マークス__春_, 2, WeaponType.LANCE, MoveType.CAVALRY, 5, 18, 6, 6, 9, 7, 6, 5, 6, 8, 5,
                Weapon.CarrotLance2, Assist.Swap, null, null, SkillB.LiveForHonor, SkillC.FortifyDef.lv(3))
        createItem(Name.マチルダ, 2, WeaponType.LANCE, MoveType.CAVALRY, 5, 16, 7, 8, 7, 8, 5, 6, 7, 4, 8,
                Weapon.Ridersbane2, Assist.RallyResistance, null, null, SkillB.CancelAffinity.lv(3), SkillC.HoneAtk.lv(3))
        createItem(Name.ルカ, 2, WeaponType.LANCE, MoveType.INFANTRY, 5, 19, 9, 5, 10, 4, 8, 8, 4, 9, 2,
                Weapon.KillerLance2, null, Special.SacredCowl, SkillA.FortressDef.lv(3), SkillB.Obstruct.lv(3), null)
        createItem(Name.ルキナ__春_, 2, WeaponType.BTOME, MoveType.INFANTRY, 5, 16, 7, 10, 5, 6, 5, 6, 8, 4, 5,
                Weapon.BlueEgg2, Assist.RallySpeed, null, SkillA.SwiftSparrow.lv(2), SkillB.SealRes.lv(3), null)
        createItem(Name.ルキナ__総選挙_, 2, WeaponType.LANCE, MoveType.INFANTRY, 5, 17, 8, 10, 8, 4, 7, 8, 8, 5, 3,
                Weapon.Geirskogul, null, Special.Aether, SkillA.SturdyBlow.lv(2), null, SkillC.DriveSpd.lv(2))
        createItem(Name.ルフレ__夏_, 2, WeaponType.LANCE, MoveType.INFANTRY, 5, 18, 8, 8, 6, 7, 4, 7, 8, 6, 6,
                Weapon.DeftHarpoon2, Assist.Reposition, null, SkillA.HpDef.lv(2), null, SkillC.LanceValor.lv(3))
        createItem(Name.ロディ, 2, WeaponType.LANCE, MoveType.CAVALRY, 5, 18, 7, 8, 6, 7, 6, 7, 8, 5, 4,
                Weapon.FiresweepLance2, Assist.RallyDefRes, null, null, SkillB.DragBack, SkillC.DriveDef.lv(2))
        createItem(Name.ウルスラ, 2, WeaponType.BTOME, MoveType.CAVALRY, 3, 16, 7, 8, 4, 8, 5, 6, 7, 3, 6,
                Weapon.Blarwolf2, null, Special.GrowingThunder, SkillA.DeathBlow.lv(3), null, SkillC.ThreatenRes.lv(3))
        createItem(Name.オーディン, 2, WeaponType.BTOME, MoveType.INFANTRY, 3, 19, 5, 8, 6, 6, 7, 4, 7, 5, 5,
                Weapon.Blarblade2, null, Special.Moonbow, SkillA.DefiantAtk.lv(3), SkillB.RTomeBreaker.lv(3), null)
        createItem(Name.オルエン, 2, WeaponType.BTOME, MoveType.CAVALRY, 5, 17, 7, 8, 5, 6, 4, 5, 8, 3, 7,
                Weapon.DireThunder, Assist.Reposition, null, SkillA.WardingBlow.lv(3), null, SkillC.WardCavalry)
        createItem(Name.カムイ__夏_, 2, WeaponType.BTOME, MoveType.FLIER, 5, 17, 7, 8, 5, 7, 4, 7, 8, 4, 5,
                Weapon.SealifeTome2, null, Special.DragonFang, SkillA.SwiftStrike.lv(2), null, SkillC.FortifyFliers)
        createItem(Name.シグレ__舞踏祭_, 2, WeaponType.BTOME, MoveType.INFANTRY, 5, 15, 7, 5, 4, 5, 5, 7, 7, 4, 5,
                Weapon.DancersScore2, Assist.Sing, null, null, SkillB.GeyserDance.lv(2), SkillC.BTomeValor.lv(3))
        createItem(Name.ティルテュ, 2, WeaponType.BTOME, MoveType.INFANTRY, 5, 17, 8, 9, 4, 6, 6, 7, 8, 2, 5,
                Weapon.Blarblade2, Assist.RallySpdRes, null, SkillA.AtkRes.lv(2), null, SkillC.DriveSpd.lv(2))
        createItem(Name.デューテ, 2, WeaponType.BTOME, MoveType.INFANTRY, 5, 16, 10, 8, 3, 7, 4, 8, 8, 1, 7,
                Weapon.DarkAura, null, Special.Miracle, SkillA.DeathBlow.lv(3), null, SkillC.DriveAtk.lv(2))
        createItem(Name.メイ, 2, WeaponType.BTOME, MoveType.INFANTRY, 5, 16, 10, 7, 3, 8, 5, 8, 7, 2, 6,
                Weapon.Blarowl2, Assist.DrawBack, null, null, SkillB.Desperation.lv(3), SkillC.BTomeExperience.lv(3))
        createItem(Name.ラインハルト, 2, WeaponType.BTOME, MoveType.CAVALRY, 4, 16, 8, 6, 5, 8, 6, 7, 4, 6, 4,
                Weapon.DireThunder, null, Special.BlazingThunder, null, SkillB.Vantage.lv(3), SkillC.GoadCavalry)
        createItem(Name.リンダ, 2, WeaponType.BTOME, MoveType.INFANTRY, 5, 16, 9, 10, 4, 5, 5, 8, 8, 1, 6,
                Weapon.Aura, Assist.ArdentSacrifice, null, SkillA.Speed.lv(3), null, SkillC.FortifyRes.lv(3))
        createItem(Name.ルフレ__男_, 2, WeaponType.BTOME, MoveType.INFANTRY, 3, 18, 7, 7, 7, 5, 6, 6, 6, 6, 4,
                Weapon.Blarraven2, null, Special.Bonfire, SkillA.DefiantSpd.lv(3), null, SkillC.SpurDef.lv(3))
        createItem(Name.ニニアン, 2, WeaponType.DRAGON, MoveType.INFANTRY, 5, 16, 5, 7, 6, 5, 8, 5, 8, 4, 6,
                Weapon.LightBreath2, Assist.Dance, null, null, SkillB.EscapeRoute.lv(3), SkillC.FortifyDragons)
        createItem(Name.ノノ, 2, WeaponType.DRAGON, MoveType.INFANTRY, 4, 17, 6, 5, 6, 5, 9, 9, 6, 7, 6,
                Weapon.LightningBreath2, Assist.RallyDefense, null, SkillA.Defense.lv(3), null, SkillC.ThreatenRes.lv(3))
        createItem(Name.アイク__総選挙_, 3, WeaponType.AXE, MoveType.INFANTRY, 5, 17, 10, 6, 9, 5, 8, 8, 6, 8, 3,
                Weapon.Urvan, null, Special.Aether, SkillA.SteadyBreath, SkillB.BeorcsBlessing, SkillC.ThreatenDef.lv(3))
        createItem(Name.アクア__舞踏祭_, 3, WeaponType.AXE, MoveType.INFANTRY, 5, 16, 6, 8, 3, 6, 5, 8, 8, 4, 6,
                Weapon.Uror, Assist.Sing, null, SkillA.TriangleAdept.lv(3), null, SkillC.DriveRes.lv(2))
        createItem(Name.アメリア, 3, WeaponType.AXE, MoveType.ARMORED, 5, 19, 6, 8, 9, 4, 9, 9, 8, 8, 5,
                Weapon.SlayingAxe2, null, Special.HolyVestments, SkillA.EarthBoost.lv(3), null, SkillC.ArmorMarch.lv(3))
        createItem(Name.アンナ, 3, WeaponType.AXE, MoveType.INFANTRY, 2, 19, 7, 10, 5, 6, 6, 6, 9, 4, 6,
                Weapon.Noatun, null, Special.Astra, null, SkillB.Vantage.lv(3), SkillC.SpurRes.lv(3))
        createItem(Name.カミラ, 3, WeaponType.AXE, MoveType.FLIER, 4, 18, 8, 8, 6, 7, 5, 6, 7, 6, 7,
                Weapon.BraveAxe2, null, Special.DraconicAura, SkillA.DartingBlow.lv(3), null, SkillC.SavageBlow.lv(3))
        createItem(Name.ギュンター, 3, WeaponType.AXE, MoveType.CAVALRY, 3, 21, 10, 7, 11, 5, 6, 6, 4, 6, 2,
                Weapon.SilverAxe2, Assist.HarshCommand, null, SkillA.ArmoredBlow.lv(3), null, SkillC.HoneCavalry)
        createItem(Name.クロム__春_, 3, WeaponType.AXE, MoveType.INFANTRY, 5, 19, 9, 8, 6, 5, 7, 8, 7, 6, 3,
                Weapon.CarrotAxe2, Assist.Shove, null, SkillA.AtkDef.lv(2), null, SkillC.AxeExperience.lv(3))
        createItem(Name.シーマ, 3, WeaponType.AXE, MoveType.ARMORED, 4, 21, 8, 6, 12, 7, 7, 6, 5, 7, 8,
                Weapon.KillerAxe2, null, Special.Escutcheon, SkillA.SvalinnShield, null, SkillC.FortifyArmor)
        createItem(Name.セルジュ, 3, WeaponType.AXE, MoveType.FLIER, 3, 20, 10, 6, 8, 3, 8, 9, 5, 7, 2,
                Weapon.Hammer2, Assist.Pivot, null, SkillA.Attack.lv(3), null, SkillC.FortifyDef.lv(3))
        createItem(Name.チキ__夏_, 3, WeaponType.AXE, MoveType.INFANTRY, 5, 18, 8, 6, 8, 7, 4, 9, 7, 7, 4,
                Weapon.MelonCrusher2, null, Special.Sol, SkillA.CloseDef.lv(3), null, SkillC.AxeValor.lv(3))
        createItem(Name.ティアマト, 3, WeaponType.AXE, MoveType.CAVALRY, 5, 18, 6, 8, 6, 8, 5, 6, 8, 5, 6,
                Weapon.EmeraldAxe2, Assist.ReciprocalAid, null, SkillA.ArmoredBlow.lv(3), SkillB.Guard.lv(3), null)
        createItem(Name.ナーシェン, 3, WeaponType.AXE, MoveType.FLIER, 2, 18, 7, 7, 8, 7, 7, 6, 6, 7, 5,
                Weapon.EmeraldAxe2, null, Special.Vengeance, null, SkillB.LanceBreaker.lv(3), SkillC.SavageBlow.lv(3))
        createItem(Name.ニノ, 3, WeaponType.GTOME, MoveType.INFANTRY, 3, 16, 7, 10, 4, 7, 4, 8, 8, 3, 5,
                Weapon.Gronnblade2, Assist.DrawBack, null, SkillA.Resistance.lv(3), null, SkillC.HoneAtk.lv(3))
        createItem(Name.バーツ, 3, WeaponType.AXE, MoveType.INFANTRY, 3, 20, 9, 8, 6, 4, 8, 7, 7, 7, 2,
                Weapon.BraveAxe2, Assist.Reposition, null, null, SkillB.KnockBack, SkillC.SpurAtk.lv(3))
        createItem(Name.バアトル, 3, WeaponType.AXE, MoveType.INFANTRY, 3, 21, 10, 6, 7, 3, 9, 8, 5, 8, 1,
                Weapon.Hammer2, Assist.Smite, null, SkillA.Fury.lv(3), SkillB.BrashAssault.lv(3), null)
        createItem(Name.ハロルド, 3, WeaponType.AXE, MoveType.INFANTRY, 3, 19, 8, 7, 8, 5, 7, 7, 6, 6, 5,
                Weapon.EmeraldAxe2, Assist.Swap, null, SkillA.Hp.lv(3), SkillB.LanceBreaker.lv(3), null)
        createItem(Name.ファ, 3, WeaponType.DRAGON, MoveType.INFANTRY, 4, 16, 5, 4, 6, 8, 10, 9, 7, 5, 6,
                Weapon.LightBreath2, Assist.DrawBack, null, null, SkillB.Renewal.lv(3), SkillC.ThreatenAtk.lv(3))
        createItem(Name.フレデリク, 3, WeaponType.AXE, MoveType.CAVALRY, 3, 19, 9, 6, 8, 4, 7, 8, 5, 9, 1,
                Weapon.Hammer2, null, Special.Luna, null, SkillB.WingsOfMercy.lv(3), SkillC.FortifyDef.lv(3))
        createItem(Name.ヘクトル, 3, WeaponType.AXE, MoveType.ARMORED, 5, 24, 10, 5, 11, 4, 9, 8, 5, 8, 3,
                Weapon.Armoads, null, Special.Pavise, SkillA.DistantCounter, null, SkillC.GoadArmor)
        createItem(Name.ベルカ, 3, WeaponType.AXE, MoveType.FLIER, 3, 20, 7, 6, 9, 5, 8, 6, 4, 9, 4,
                Weapon.KillerAxe2, null, Special.Glimmer, SkillA.DefiantDef.lv(3), SkillB.Lunge, null)
        createItem(Name.ホークアイ, 3, WeaponType.AXE, MoveType.INFANTRY, 4, 21, 9, 5, 6, 6, 7, 7, 4, 6, 7,
                Weapon.KillerAxe2, null, Special.GrowingLight, SkillA.DeathBlow.lv(3), null, SkillC.ThreatenAtk.lv(3))
        createItem(Name.マークス__夏_, 3, WeaponType.AXE, MoveType.INFANTRY, 5, 19, 8, 6, 8, 6, 7, 7, 7, 9, 1,
                Weapon.LilithFloatie2, null, Special.Bonfire, SkillA.FireBoost.lv(3), null, SkillC.InfantryPulse.lv(3))
        createItem(Name.ミシェイル, 3, WeaponType.AXE, MoveType.FLIER, 3, 19, 8, 7, 9, 4, 7, 8, 5, 8, 3,
                Weapon.Hauteclere, null, Special.BlazingThunder, SkillA.IotesShield, null, SkillC.ThreatenDef.lv(3))
        createItem(Name.ミネルバ, 3, WeaponType.AXE, MoveType.FLIER, 5, 18, 7, 9, 8, 5, 6, 7, 7, 7, 4,
                Weapon.Hauteclere, null, Special.SacredCowl, SkillA.LifeAndDeath.lv(3), null, SkillC.WardFliers)
        createItem(Name.レイヴァン, 3, WeaponType.AXE, MoveType.INFANTRY, 4, 19, 8, 9, 6, 5, 6, 8, 8, 5, 4,
                Weapon.BraveAxe2, null, Special.Sol, SkillA.DefiantSpd.lv(3), null, SkillC.ThreatenDef.lv(3))
        createItem(Name.レイヴァン2, 3, WeaponType.AXE, MoveType.INFANTRY, 4, 19, 8, 9, 6, 5, 6, 8, 8, 5, 4,
                Weapon.Basilikos, null, Special.Sol, SkillA.DefiantSpd.lv(3), null, SkillC.ThreatenDef.lv(3))
        createItem(Name.ローロー, 3, WeaponType.AXE, MoveType.INFANTRY, 3, 20, 10, 9, 5, 3, 8, 8, 8, 4, 3,
                Weapon.LegionsAxe2, null, Special.Reprisal, SkillA.Fury.lv(3), SkillB.Obstruct.lv(3), null)
        createItem(Name.アズール__舞踏祭_, 3, WeaponType.GTOME, MoveType.INFANTRY, 5, 15, 6, 7, 5, 3, 6, 6, 8, 4, 4,
                Weapon.DancersRing2, Assist.Dance, null, null, SkillB.GaleDance.lv(3), SkillC.HoneAtk.lv(3))
        createItem(Name.エリーゼ__夏_, 3, WeaponType.GTOME, MoveType.INFANTRY, 5, 17, 10, 8, 3, 6, 4, 8, 8, 3, 5,
                Weapon.HibiscusTome2, Assist.RallyAtkRes, null, SkillA.SpdRes.lv(2), null, SkillC.GTomeValor.lv(3))
        createItem(Name.カミラ__春_, 3, WeaponType.GTOME, MoveType.FLIER, 5, 17, 9, 6, 8, 4, 6, 8, 5, 6, 3,
                Weapon.GreenEgg2, Assist.RallyAttack, null, SkillA.DefiantSpd.lv(3), SkillB.LiveForBounty, null)
        createItem(Name.セシリア, 3, WeaponType.GTOME, MoveType.CAVALRY, 3, 17, 8, 6, 5, 7, 5, 7, 5, 4, 6,
                Weapon.Gronnraven2, Assist.RallyResistance, null, SkillA.Attack.lv(3), SkillB.EscapeRoute.lv(3), null)
        createItem(Name.セネリオ, 3, WeaponType.GTOME, MoveType.INFANTRY, 5, 17, 7, 9, 4, 7, 5, 8, 7, 2, 6,
                Weapon.Rexcalibur2, null, Special.GrowingWind, null, SkillB.Watersweep.lv(3), SkillC.FortifyRes.lv(3))
        createItem(Name.ソニア, 3, WeaponType.GTOME, MoveType.INFANTRY, 5, 17, 7, 7, 5, 8, 5, 8, 7, 1, 7,
                Weapon.DarkExcalibur, null, Special.Moonbow, SkillA.DeathBlow.lv(3), null, SkillC.ResPloy.lv(3))
        createItem(Name.ディアドラ, 3, WeaponType.GTOME, MoveType.INFANTRY, 5, 17, 9, 6, 3, 9, 5, 7, 6, 2, 8,
                Weapon.DivineNaga, Assist.ArdentSacrifice, null, null, SkillB.QuickRiposte.lv(3), SkillC.SpdPloy.lv(3))
        createItem(Name.ボーイ, 3, WeaponType.GTOME, MoveType.INFANTRY, 5, 19, 7, 5, 8, 5, 7, 6, 6, 7, 2,
                Weapon.Gronnowl2, null, Special.Ignis, SkillA.EarthBoost.lv(3), SkillB.Renewal.lv(3), null)
        createItem(Name.マリク, 3, WeaponType.GTOME, MoveType.INFANTRY, 4, 19, 7, 8, 6, 4, 7, 5, 7, 6, 3,
                Weapon.Excalibur, null, Special.GrowingWind, SkillA.Hp.lv(3), null, SkillC.SpurRes.lv(3))
        createItem(Name.ユリア, 3, WeaponType.GTOME, MoveType.INFANTRY, 5, 16, 9, 7, 4, 8, 6, 8, 5, 2, 7,
                Weapon.Naga, null, Special.DragonFang, SkillA.Resistance.lv(3), null, SkillC.BreathOfLife.lv(3))
        createItem(Name.ルフレ__女_, 3, WeaponType.GTOME, MoveType.INFANTRY, 2, 18, 7, 7, 7, 5, 6, 6, 6, 6, 4,
                Weapon.Gronnwolf2, null, Special.Ignis, SkillA.DefiantRes.lv(3), SkillB.BTomeBreaker.lv(3), null)
        createItem(Name.アサマ, 0, WeaponType.STAFF, MoveType.INFANTRY, 3, 19, 4, 7, 8, 6, 7, 4, 5, 7, 5,
                Weapon.Pain, Assist.Martyr, Special.SolidEarthBalm, null, null, SkillC.ThreatenAtk.lv(3))
        createItem(Name.ヴィオール, 0, WeaponType.BOW, MoveType.INFANTRY, 3, 20, 7, 7, 7, 3, 8, 7, 7, 5, 1,
                Weapon.SilverBow2, null, Special.Astra, SkillA.DefiantRes.lv(3), SkillB.SealSpd.lv(3), null)
        createItem(Name.エフィ, 0, WeaponType.BOW, MoveType.INFANTRY, 5, 16, 6, 3, 4, 7, 8, 7, 6, 6, 7,
                Weapon.FiresweepBow2, null, Special.Noontime, null, SkillB.WingsOfMercy.lv(3), SkillC.BowExperience.lv(3))
        createItem(Name.エリーゼ, 0, WeaponType.STAFF, MoveType.CAVALRY, 5, 15, 8, 8, 4, 8, 3, 7, 7, 3, 7,
                Weapon.Gravity, Assist.Recover, Special.KindledFireBalm, null, SkillB.LiveToServe.lv(3), null)
        createItem(Name.オリヴィエ__舞踏祭_, 0, WeaponType.DAGGER, MoveType.INFANTRY, 5, 15, 6, 8, 3, 4, 5, 6, 8, 2, 7,
                Weapon.DancersFan2, Assist.Dance, null, SkillA.DistantDef.lv(3), SkillB.BlazeDance.lv(3), null)
        createItem(Name.ガイア, 0, WeaponType.DAGGER, MoveType.INFANTRY, 3, 18, 7, 10, 5, 4, 7, 6, 8, 4, 3,
                Weapon.RogueDagger2, Assist.RallySpeed, null, SkillA.DefiantAtk.lv(3), SkillB.Pass.lv(3), null)
        createItem(Name.ガイア__夏_, 0, WeaponType.BOW, MoveType.INFANTRY, 5, 17, 8, 9, 4, 6, 4, 6, 9, 3, 6,
                Weapon.RefreshingBolt2, null, Special.Astra, null, SkillB.Vantage.lv(3), SkillC.DefPloy.lv(3))
        createItem(Name.カゲロウ, 0, WeaponType.DAGGER, MoveType.INFANTRY, 4, 16, 9, 8, 5, 6, 3, 8, 7, 4, 6,
                Weapon.PoisonDagger2, null, Special.Reprisal, SkillA.WardingBlow.lv(3), SkillB.DaggerBreaker.lv(3), null)
        createItem(Name.クライネ, 0, WeaponType.BOW, MoveType.INFANTRY, 5, 18, 7, 8, 6, 5, 5, 7, 8, 5, 3,
                Weapon.ClarissesBow2, null, Special.Glimmer, null, SkillB.PoisonStrike.lv(3), SkillC.ThreatenDef.lv(3))
        createItem(Name.クラリーネ, 0, WeaponType.STAFF, MoveType.CAVALRY, 3, 16, 6, 9, 5, 7, 5, 5, 7, 4, 6,
                Weapon.Fear, Assist.Martyr, Special.SwiftWindsBalm, SkillA.Resistance.lv(3), null, null)
        createItem(Name.クレイン, 0, WeaponType.BOW, MoveType.INFANTRY, 4, 18, 9, 7, 5, 5, 6, 6, 8, 3, 5,
                Weapon.BraveBow2, null, Special.Glacies, SkillA.DeathBlow.lv(3), SkillB.QuickRiposte.lv(3), null)
        createItem(Name.ゴードン, 0, WeaponType.BOW, MoveType.INFANTRY, 3, 19, 7, 6, 8, 4, 7, 7, 5, 7, 2,
                Weapon.BraveBow2, Assist.Shove, null, SkillA.Attack.lv(3), SkillB.Vantage.lv(3), null)
        createItem(Name.サイゾウ, 0, WeaponType.DAGGER, MoveType.INFANTRY, 3, 17, 7, 8, 9, 3, 5, 6, 8, 7, 2,
                Weapon.SmokeDagger2, Assist.HarshCommand, null, null, SkillB.PoisonStrike.lv(3), SkillC.SpurSpd.lv(3))
        createItem(Name.サクラ, 0, WeaponType.STAFF, MoveType.INFANTRY, 4, 17, 6, 8, 5, 8, 5, 6, 6, 5, 6,
                Weapon.Fear, Assist.Physic, Special.StillWaterBalm, null, null, SkillC.FortifyDef.lv(3))
        createItem(Name.ジェニー, 0, WeaponType.STAFF, MoveType.INFANTRY, 5, 17, 9, 6, 4, 8, 3, 8, 5, 4, 8,
                Weapon.Gravity, Assist.Physic, Special.HeavenlyLight, null, SkillB.WrathfulStaff.lv(3), null)
        createItem(Name.ジャファル, 0, WeaponType.DAGGER, MoveType.INFANTRY, 5, 17, 7, 9, 6, 5, 7, 5, 7, 5, 4,
                Weapon.DeathlyDagger, null, Special.Glimmer, SkillA.LifeAndDeath.lv(3), null, SkillC.ThreatenSpd.lv(3))
        createItem(Name.ジョーカー, 0, WeaponType.DAGGER, MoveType.INFANTRY, 4, 17, 7, 9, 6, 5, 6, 6, 6, 5, 5,
                Weapon.SilverDagger2, Assist.RallyResistance, null, SkillA.Defense.lv(3), SkillB.Renewal.lv(3), null)
        createItem(Name.ジョルジュ, 0, WeaponType.BOW, MoveType.INFANTRY, 4, 18, 8, 8, 5, 5, 5, 7, 7, 5, 4,
                Weapon.Parthia, null, Special.BlazingFlame, null, SkillB.SealAtk.lv(3), SkillC.SpurSpd.lv(3))
        createItem(Name.セーラ, 0, WeaponType.STAFF, MoveType.INFANTRY, 3, 16, 6, 9, 4, 9, 4, 7, 6, 4, 7,
                Weapon.Absorb, Assist.Recover, Special.SwiftWindsBalm, null, null, SkillC.HoneAtk.lv(3))
        createItem(Name.セツナ, 0, WeaponType.BOW, MoveType.INFANTRY, 3, 18, 6, 9, 5, 6, 5, 6, 9, 4, 4,
                Weapon.AssassinsBow2, Assist.ReciprocalAid, null, SkillA.Hp.lv(3), SkillB.BowBreaker.lv(3), null)
        createItem(Name.ゼロ, 0, WeaponType.BOW, MoveType.INFANTRY, 3, 18, 6, 8, 4, 8, 5, 5, 8, 2, 8,
                Weapon.KillerBow2, null, Special.Iceberg, SkillA.WardingBlow.lv(3), null, SkillC.SpurRes.lv(3))
        createItem(Name.タクミ, 0, WeaponType.BOW, MoveType.INFANTRY, 5, 18, 8, 7, 6, 5, 6, 7, 8, 5, 2,
                Weapon.FujinYumi, null, Special.Vengeance, SkillA.CloseCounter, null, SkillC.ThreatenSpd.lv(3))
        createItem(Name.ティアモ__花嫁_, 0, WeaponType.BOW, MoveType.INFANTRY, 5, 17, 9, 9, 4, 5, 5, 8, 8, 3, 4,
                Weapon.CupidArrow2, Assist.RallyAtkSpd, null, null, SkillB.EscapeRoute.lv(3), SkillC.BreathOfLife.lv(3))
        createItem(Name.ヒーニアス, 0, WeaponType.BOW, MoveType.INFANTRY, 5, 16, 9, 8, 4, 7, 5, 7, 8, 1, 7,
                Weapon.Nidhogg, null, Special.Iceberg, SkillA.FortressRes.lv(3), SkillB.CancelAffinity.lv(3), null)
        createItem(Name.フェリシア, 0, WeaponType.DAGGER, MoveType.INFANTRY, 3, 15, 6, 11, 3, 9, 5, 4, 8, 3, 8,
                Weapon.SilverDagger2, null, Special.Glacies, SkillA.Resistance.lv(3), null, SkillC.BreathOfLife.lv(3))
        createItem(Name.プリシラ, 0, WeaponType.STAFF, MoveType.CAVALRY, 4, 17, 7, 7, 4, 8, 5, 6, 6, 3, 7,
                Weapon.Panic, Assist.Rehabilitate, Special.StillWaterBalm, null, null, SkillC.SpurDef.lv(3))
        createItem(Name.フレデリク__夏_, 0, WeaponType.DAGGER, MoveType.INFANTRY, 5, 18, 8, 7, 6, 5, 6, 7, 7, 6, 2,
                Weapon.Seashell2, Assist.ArdentSacrifice, null, SkillA.ArmoredBlow.lv(3), SkillB.SealAtkSpd.lv(2), null)
        createItem(Name.マシュー, 0, WeaponType.DAGGER, MoveType.INFANTRY, 3, 17, 6, 10, 6, 5, 7, 5, 7, 7, 2,
                Weapon.RogueDagger2, Assist.ReciprocalAid, null, null, SkillB.PoisonStrike.lv(3), SkillC.HoneSpd.lv(3))
        createItem(Name.マリア, 0, WeaponType.STAFF, MoveType.INFANTRY, 4, 17, 5, 8, 4, 10, 5, 6, 8, 3, 6,
                Weapon.Panic, Assist.Physic, Special.Miracle, null, null, SkillC.FortifyRes.lv(3))
        createItem(Name.ミスト, 0, WeaponType.STAFF, MoveType.INFANTRY, 5, 17, 8, 6, 5, 8, 6, 5, 6, 3, 8,
                Weapon.Slow, Assist.Recover, Special.Miracle, null, null, SkillC.SpurDefRes.lv(2))
        createItem(Name.ラケシス, 0, WeaponType.STAFF, MoveType.INFANTRY, 4, 17, 6, 8, 5, 8, 6, 8, 4, 4, 6,
                Weapon.Absorb, Assist.Physic, Special.SolidEarthBalm, null, null, SkillC.SpurRes.lv(3))
        createItem(Name.リズ, 0, WeaponType.STAFF, MoveType.INFANTRY, 3, 17, 7, 6, 6, 8, 6, 5, 5, 6, 6,
                Weapon.Gravity, Assist.Rehabilitate, Special.KindledFireBalm, null, SkillB.Renewal.lv(3), null)
        createItem(Name.リフ, 0, WeaponType.STAFF, MoveType.INFANTRY, 3, 18, 5, 6, 5, 10, 7, 5, 4, 4, 8,
                Weapon.Slow, Assist.Rehabilitate, Special.HeavenlyLight, null, SkillB.LiveToServe.lv(3), null)
        createItem(Name.リン__花嫁_, 0, WeaponType.STAFF, MoveType.INFANTRY, 5, 17, 6, 10, 6, 5, 6, 6, 7, 4, 5,
                Weapon.Candlelight, Assist.Rehabilitate, Special.SwiftWindsBalm, null, SkillB.DazzlingStaff.lv(3), null)
        createItem(Name.リン__総選挙_, 0, WeaponType.BOW, MoveType.CAVALRY, 5, 16, 7, 9, 5, 6, 5, 8, 8, 2, 6,
                Weapon.Mulagir, null, Special.DraconicAura, SkillA.SwiftSparrow.lv(2), SkillB.SacaesBlessing, SkillC.AtkSmoke.lv(3))
        createItem(Name.ルセア, 0, WeaponType.STAFF, MoveType.INFANTRY, 4, 18, 6, 8, 3, 9, 5, 8, 6, 1, 8,
                Weapon.Pain, Assist.Martyr, Special.Miracle, SkillA.Hp.lv(3), null, null)
        createItem(Name.レオ, 0, WeaponType.BOW, MoveType.INFANTRY, 4, 17, 8, 6, 8, 5, 6, 8, 7, 6, 1,
                Weapon.SlayingBow2, null, Special.Ignis, SkillA.Speed.lv(3), SkillB.Guard.lv(3), null)
        createItem(Name.レベッカ, 0, WeaponType.BOW, MoveType.INFANTRY, 4, 18, 7, 8, 6, 5, 5, 6, 8, 3, 6,
                Weapon.SilverBow2, Assist.ArdentSacrifice, null, SkillA.DartingBlow.lv(3), SkillB.SealAtk.lv(3), null)

        createItem(Name.ヘンリー__収穫祭_, 3, WeaponType.GTOME, MoveType.INFANTRY, 5, 17, 9, 10, 4, 12, 5, 7, 7, 6, 7,
                Weapon.SpectralTome2, null, Special.Reprisal, null, SkillB.LiveForHonor, SkillC.ArmorMarch.lv(3))
        createItem(Name.ジョーカー__収穫祭_, 0, WeaponType.BOW, MoveType.ARMORED, 5, 20, 9, 6, 9, 8, 6, 8, 4, 7, 7,
                Weapon.MonstrousBow2, null, null, SkillA.BracingBlow.lv(2), SkillB.WaryFighter.lv(3), null)
        createItem(Name.ノノ__収穫祭_, 1, WeaponType.RTOME, MoveType.FLIER, 5, 17, 8, 6, 5, 8, 4, 8, 8, 3, 5,
                Weapon.Grimoire, Assist.Reposition, null, SkillA.AtkResBond.lv(3), SkillB.LiveForBounty, SkillC.HoneAtk.lv(3))
        createItem(Name.サクラ__収穫祭_, 0, WeaponType.DAGGER, MoveType.INFANTRY, 5, 16, 8, 8, 4, 8, 4, 7, 8, 1, 8,
                Weapon.KittyPaddle2, null, Special.Glacies, SkillA.WardingStance.lv(3), SkillB.Guard.lv(3), SkillC.DaggerValor.lv(3))

        createItem(Name.ドルカス, 3, WeaponType.AXE, MoveType.INFANTRY, 5, 19, 9, 6, 9, 5, 8, 8, 4, 8, 5,
                Weapon.StoutTomahawk, null, Special.DraconicAura, SkillA.FierceStance.lv(3), SkillB.QuickRiposte.lv(3), SkillC.InfantryPulse.lv(3))
        createItem(Name.ルーテ, 2, WeaponType.BTOME, MoveType.INFANTRY, 5, 16, 10, 8, 3, 8, 4, 8, 7, 2, 8,
                Weapon.WeirdingTome, Assist.RallyAtkRes, null, SkillA.HpRes.lv(2), null, SkillC.ResPloy.lv(3))
        createItem(Name.ワユ, 1, WeaponType.SWORD, MoveType.INFANTRY, 5, 16, 8, 12, 6, 6, 6, 7, 9, 6, 5,
                Weapon.ResoluteBlade, null, Special.Luna, SkillA.FlashingBlade.lv(3), SkillB.Vantage.lv(3), null)

        createItem(Name.ヨシュア, 1, WeaponType.SWORD, MoveType.INFANTRY, 4, 18, 7, 9, 8, 6, 6, 7, 8, 6, 6,
                Weapon.Audhulma, null, Special.Moonbow, SkillA.CloseDef.lv(3), SkillB.Windsweep.lv(3), null)
        createItem(Name.フィヨルム, 2, WeaponType.LANCE, MoveType.INFANTRY, 5, 17, 8, 7, 8, 8, 6, 6, 7, 6, 8,
                Weapon.Leiptr, null, Special.IceMirror, SkillA.AtkResBond, SkillB.ShieldPulse.lv(3), SkillC.DriveAtk.lv(2))
        createItem(Name.シャラ, 3, WeaponType.GTOME, MoveType.INFANTRY, 5, 17, 9, 8, 4, 7, 5, 8, 8, 4, 4,
                Weapon.KeenGronnwolf2, Assist.RallyAtkDef, null, SkillA.DistantDef, null, SkillC.SavageBlow.lv(3))
        createItem(Name.シノノメ, 2, WeaponType.LANCE, MoveType.INFANTRY, 5, 19, 9, 6, 9, 5, 6, 8, 7, 8, 4,
                Weapon.BrightNaginata, Assist.Swap, null, SkillA.SteadyStance.lv(3), null, SkillC.DefTactic.lv(3))
        createItem(Name.ジークベルト, 1, WeaponType.SWORD, MoveType.CAVALRY, 5, 19, 8, 9, 7, 3, 6, 8, 8, 7, 2,
                Weapon.DarkGreatsword, null, Special.DragonFang, SkillA.DeathBlow.lv(3), null, SkillC.AtkTactic.lv(3))
        createItem(Name.ソレイユ, 1, WeaponType.SWORD, MoveType.INFANTRY, 4, 18, 10, 9, 6, 5, 5, 9, 8, 6, 5,
                Weapon.FiresweepSword2, null, Special.BlazingWind, SkillA.DartingBlow.lv(3), null, SkillC.DriveRes.lv(2))

        createItem(Name.クロム__冬_, 3, WeaponType.AXE, MoveType.ARMORED, 5, 25, 12, 4, 9, 5, 8, 9, 3, 8, 7,
                Weapon.SackOGifts2, Assist.Pivot, null, SkillA.BrazenAtkDef.lv(3), SkillB.WaryFighter.lv(3), null)
        createItem(Name.リズ__冬_, 3, WeaponType.AXE, MoveType.ARMORED, 5, 21, 9, 8, 9, 8, 6, 7, 6, 8, 8,
                Weapon.Handbell2, null, Special.Bonfire, null, SkillB.BoldFighter, SkillC.FortifyArmor)
        createItem(Name.ルフレ__冬_, 2, WeaponType.LANCE, MoveType.ARMORED, 5, 23, 9, 8, 9, 6, 6, 8, 8, 8, 5,
                Weapon.Tannenboom2, Assist.ReciprocalAid, Special.BlazingWind, SkillA.BrazenAtkSpd.lv(3), null, SkillC.ArmorMarch.lv(3))
        createItem(Name.サーリャ__冬_, 1, WeaponType.RTOME, MoveType.ARMORED, 5, 19, 10, 5, 8, 10, 7, 7, 2, 8, 8,
                Weapon.Candelabra2, null, Special.Iceberg, SkillA.CloseCounter, SkillB.VengefulFighter.lv(3), SkillC.RTomeValor.lv(3))

        createItem(Name.スリーズ, 3, WeaponType.GTOME, MoveType.CAVALRY, 5, 15, 7, 9, 6, 6, 6, 7, 7, 2, 5,
                Weapon.Blizzard, null, Special.Glacies, SkillA.FortressRes.lv(3), SkillB.ChillingSeal, SkillC.ResPloy.lv(3))
        createItem(Name.アクア__正月_, 3, WeaponType.AXE, MoveType.FLIER, 5, 15, 6, 9, 5, 4, 6, 7, 8, 4, 6,
                Weapon.Hagoita2, Assist.Sing, null, null, SkillB.EarthDance.lv(3), SkillC.HoneFliers)
        createItem(Name.カミラ__正月_, 1, WeaponType.SWORD, MoveType.FLIER, 5, 18, 9, 9, 7, 4, 6, 7, 8, 7, 5,
                Weapon.Kadomatsu2, null, Special.DraconicAura, SkillA.SpdDefBond.lv(3), null, SkillC.WardFliers)
        createItem(Name.タクミ__正月_, 0, WeaponType.DAGGER, MoveType.INFANTRY, 4, 18, 8, 10, 4, 5, 6, 8, 7, 2, 6,
                Weapon.KagamiMochi2, null, Special.Moonbow, SkillA.AtkResBond.lv(3), SkillB.BowBreaker.lv(3), null)
        createItem(Name.カムイ__正月_, 0, WeaponType.BOW, MoveType.INFANTRY, 5, 18, 8, 8, 6, 5, 5, 7, 6, 9, 2,
                Weapon.HamaYa2, Assist.RallyDefRes, null, SkillA.AtkDef.lv(2), null, SkillC.SpurDefRes.lv(2))

        createItem(Name.エイリーク__追憶_, 1, WeaponType.RTOME, MoveType.CAVALRY, 5, 17, 7, 9, 5, 5, 5, 7, 8, 3, 4,
                Weapon.Gleipnir, Assist.RallyAtkSpd, null, SkillA.SwiftSparrow.lv(2), SkillB.Desperation.lv(3), SkillC.RTomeValor.lv(2))
        createItem(Name.ラーチェル, 2, WeaponType.BTOME, MoveType.CAVALRY, 5, 16, 9, 7, 4, 7, 4, 7, 7, 2, 7,
                Weapon.Ivaldi, null, Special.GrowingLight, null, SkillB.Renewal.lv(3), SkillC.ResTactic.lv(3))
        createItem(Name.ミルラ, 3, WeaponType.DRAGON, MoveType.FLIER, 5, 16, 7, 6, 3, 7, 8, 8, 5, 11, 7,
                Weapon.GreatFlame, null, Special.Bonfire, SkillA.Fury.lv(3), null, SkillC.HoneDragons)
        createItem(Name.リオン, 1, WeaponType.RTOME, MoveType.INFANTRY, 3, 19, 10, 4, 4, 8, 6, 7, 4, 6, 6,
                Weapon.Naglfar, null, Special.Retribution, SkillA.AtkRes.lv(2), null, SkillC.DriveRes.lv(2))

        createItem(Name.アイク__伝承英雄_, 1, WeaponType.SWORD, MoveType.INFANTRY, 5, 19, 10, 6, 9, 4, 6, 8, 7, 8, 4,
                Weapon.Ragnell, null, Special.RadiantAether, SkillA.WardingBreath, SkillB.SealAtkDef.lv(2), SkillC.DefTactic.lv(3))

        createItem(Name.ヘクトル__バレンタイン_, 3, WeaponType.AXE, MoveType.ARMORED, 5, 24, 8, 4, 12, 7, 8, 10, 4, 9, 4,
                Weapon.BerserkArmads, null, Special.Glimmer, SkillA.DistantCounter, SkillB.WaryFighter.lv(3), null)
        createItem(Name.リリーナ__バレンタイン_, 3, WeaponType.GTOME, MoveType.CAVALRY, 5, 17, 9, 8, 5, 4, 4, 8, 6, 3, 6,
                Weapon.GreenGift2, null, Special.BlazingFlame, SkillA.HpAtk.lv(2), null, SkillC.AtkTactic.lv(3))
        createItem(Name.リン__バレンタイン_, 2, WeaponType.BTOME, MoveType.ARMORED, 5, 18, 9, 10, 5, 10, 5, 6, 8, 6, 7,
                Weapon.BlueGift2, Assist.ArdentSacrifice, null, SkillA.AtkSpdBond.lv(3), SkillB.Guard.lv(3), SkillC.ArmorMarch.lv(3))
        createItem(Name.ロイ__バレンタイン_, 0, WeaponType.BOW, MoveType.CAVALRY, 5, 17, 9, 6, 5, 6, 4, 8, 2, 6, 7,
                Weapon.Gratia2, Assist.ReciprocalAid, null, SkillA.DeathBlow.lv(3), null, SkillC.BowValor.lv(3))
        createItem(Name.エリウッド__バレンタイン_, 2, WeaponType.LANCE, MoveType.ARMORED, 4, 23, 10, 8, 7, 7, 7, 9, 7, 6, 6,
                Weapon.CasaBlanca2, Assist.RallyAtkDef, null, SkillA.FireBoost.lv(3), null, SkillC.GoadArmor)

        createItem(Name.ゼルギウス, 1, WeaponType.SWORD, MoveType.ARMORED, 5, 22, 10, 7, 10, 6, 7, 8, 8, 9, 3,
                Weapon.Alondite, null, Special.BlackLuna, SkillA.FierceStance.lv(3), SkillB.WarpPowder, SkillC.PanicPloy.lv(3))
        createItem(Name.ミカヤ, 2, WeaponType.BTOME, MoveType.INFANTRY, 5, 16, 9, 6, 5, 9, 5, 8, 6, 2, 8,
                Weapon.Thani, Assist.Sacrifice, null, SkillA.DistantDef.lv(3), SkillB.Guard.lv(3), SkillC.DriveAtk.lv(2))
        createItem(Name.サザ, 0, WeaponType.DAGGER, MoveType.INFANTRY, 4, 17, 10, 9, 5, 4, 6, 8, 7, 4, 4,
                Weapon.Peshkatz, null, Special.Glimmer, SkillA.LifeAndDeath.lv(3), null, SkillC.SpurAtkSpd.lv(2))

        createItem(Name.セリカ__闇_, 1, WeaponType.SWORD, MoveType.INFANTRY, 5, 18, 9, 9, 5, 7, 6, 8, 8, 6, 5,
                Weapon.BelovedZofia, null, Special.Luna, null, SkillB.ChillSpd.lv(3), SkillC.HoneAtk.lv(3))
        createItem(Name.ハーディン__闇_, 2, WeaponType.LANCE, MoveType.ARMORED, 5, 23, 8, 6, 10, 8, 6, 8, 6, 8, 7,
                Weapon.Gradivus, null, Special.Vengeance, SkillA.BrazenDefRes.lv(3), SkillB.BoldFighter.lv(3), null)
        createItem(Name.ルフレ__闇_, 3, WeaponType.DRAGON, MoveType.ARMORED, 5, 24, 10, 7, 9, 5, 7, 10, 4, 8, 6,
                Weapon.Expiration, null, Special.Ignis, null, SkillB.VengefulFighter.lv(3), SkillC.WardDragons)

        createItem(Name.タクミ__闇_, 0, WeaponType.BOW, MoveType.INFANTRY, 3, 15, 9, 10, 6, 5, 6, 6, 7, 5, 5,
                Weapon.Skadi, null, Special.Vengeance, SkillA.Fury.lv(3), null, SkillC.SpdSmoke.lv(3))
        createItem(Name.エフラム__伝承英雄_, 2, WeaponType.LANCE, MoveType.CAVALRY, 5, 19, 10, 5, 9, 3, 7, 8, 6, 7, 3,
                Weapon.FlameSiegmund, null, Special.Sol, SkillA.SturdyStance.lv(2), SkillB.SolarBrace, SkillC.FortifyDef.lv(3))

        createItem(Name.クロム__聖痕_, 1, WeaponType.SWORD, MoveType.CAVALRY, 5, 19, 9, 6, 8, 4, 6, 9, 6, 8, 2,
                Weapon.SealedFalchion, null, Special.Aether, SkillA.Fury.lv(3), SkillB.ChillDef.lv(3), SkillC.SwordValor.lv(3))
        createItem(Name.マーク__男_, 1, WeaponType.RTOME, MoveType.INFANTRY, 4, 18, 7, 8, 5, 7, 5, 8, 8, 3, 5,
                Weapon.GrimasTruth, null, Special.DragonFang, null, SkillB.DullRanged.lv(3), SkillC.SpurDefRes.lv(2))
        createItem(Name.マーク__女_, 2, WeaponType.BTOME, MoveType.FLIER, 5, 18, 8, 6, 3, 9, 5, 8, 7, 2, 7,
                Weapon.Blarserpent2, null, Special.Iceberg, SkillA.MirrorStance.lv(2), SkillB.Guard.lv(3), SkillC.AtkPloy.lv(3))

        createItem(Name.セツナ2, 0, WeaponType.BOW, MoveType.INFANTRY, 3, 18, 6, 9, 5, 6, 5, 6, 9, 4, 4,
                Weapon.GuardBow2, Assist.ReciprocalAid, null, SkillA.Hp.lv(3), SkillB.BowBreaker.lv(3), null)
        createItem(Name.ヒノカ2, 2, WeaponType.LANCE, MoveType.FLIER, 5, 19, 7, 8, 6, 7, 6, 9, 7, 5, 4,
                Weapon.HinokasSpear, null, Special.BlazingWind, SkillA.DefiantDef.lv(3), null, SkillC.HoneFliers)
        createItem(Name.シーダ2, 1, WeaponType.SWORD, MoveType.FLIER, 4, 17, 6, 9, 5, 10, 5, 5, 9, 5, 7,
                Weapon.WingSword, Assist.RallySpeed, null, SkillA.DartingBlow.lv(3), null, SkillC.FortifyFliers)
        createItem(Name.フェリシア2, 0, WeaponType.DAGGER, MoveType.INFANTRY, 3, 15, 6, 11, 3, 9, 5, 4, 8, 3, 8,
                Weapon.FeliciasPlate, null, Special.Glacies, SkillA.Resistance.lv(3), null, SkillC.BreathOfLife.lv(3))
        createItem(Name.セネリオ2, 3, WeaponType.GTOME, MoveType.INFANTRY, 5, 17, 7, 9, 4, 7, 5, 8, 7, 2, 6,
                Weapon.Rexcalibur2, null, Special.GrowingWind, null, SkillB.Watersweep.lv(3), SkillC.FortifyRes.lv(3))

        createItem(Name.カチュア__春_, 2, WeaponType.BTOME, MoveType.CAVALRY, 5, 17, 6, 9, 5, 6, 5, 8, 8, 2, 4,
                Weapon.HuginnsEgg, Assist.DrawBack, null, null, SkillB.ChillRes.lv(3), SkillC.DriveSpd.lv(3))
        createItem(Name.アルフォンス__春_, 3, WeaponType.AXE, MoveType.CAVALRY, 5, 19, 9, 7, 6, 5, 6, 8, 8, 7, 2,
                Weapon.GiantSpoon2, null, Special.Noontime, SkillA.SturdyBlow.lv(2), null, SkillC.DefSmoke.lv(3))

        createItem(Name.シャロン__春_, 3, WeaponType.GTOME, MoveType.INFANTRY, 5, 18, 8, 10, 3, 6, 5, 7, 8, 2, 7,
                Weapon.MuninnsEgg, Assist.RallyAtkSpd, null, SkillA.SwiftStance.lv(2), SkillB.LiveForBounty, SkillC.ResTactic.lv(3))

        createItem(Name.カゲロウ__春_, 0, WeaponType.DAGGER, MoveType.FLIER, 5, 17, 9, 8, 5, 5, 5, 8, 8, 2, 6,
                Weapon.LethalCarrot2, null, Special.Glimmer, SkillA.SpdResBond.lv(3), SkillB.LiveForHonor, SkillC.GoadFliers)


        createItem(Name.ジェローム, 3, WeaponType.AXE, MoveType.FLIER, 4, 19, 10, 6, 8, 4, 8, 9, 5, 8, 3,
                Weapon.Poleaxe2, Assist.RallyAtkDef, null, SkillA.FortressDef.lv(3), SkillB.HitAndRun, null)
        createItem(Name.ルフレ__女闇_, 0, WeaponType.DRAGON, MoveType.FLIER, 5, 16, 8, 9, 8, 6, 7, 7, 8, 6, 5,
                Weapon.Expiration, null, Special.Bonfire, SkillA.Dragonskin, SkillB.CancelAffinity.lv(3), SkillC.ResSmoke.lv(3))

        createItem(Name.リーフ, 1, WeaponType.SWORD, MoveType.INFANTRY, 5, 18, 6, 10, 8, 6, 6, 8, 9, 6, 4,
                Weapon.LightBrand, null, Special.BlazingLight, SkillA.SteadyBlow.lv(2), SkillB.SDrink, SkillC.DriveAtk.lv(2))
        createItem(Name.ナンナ, 0, WeaponType.STAFF, MoveType.CAVALRY, 4, 17, 5, 8, 6, 7, 5, 6, 8, 3, 5,
                Weapon.Absorb2, Assist.Restore, Special.HeavenlyLight, SkillA.SpdRes.lv(2), null, SkillC.DriveDef.lv(2))
        createItem(Name.ラインハルト__トラキア_, 1, WeaponType.SWORD, MoveType.CAVALRY, 5, 18, 9, 6, 7, 6, 6, 8, 4, 7, 6,
                Weapon.Meisterschwert, null, Special.Pavise, SkillA.DeathBlow.lv(3), SkillB.Vantage.lv(3), SkillC.SpurAtkSpd.lv(2))
        createItem(Name.オルエン__トラキア_, 3, WeaponType.GTOME, MoveType.CAVALRY, 5, 17, 8, 9, 4, 5, 4, 6, 8, 3, 6,
                Weapon.Thunderhead, null, Special.BlazingWind, SkillA.SwiftSparrow.lv(2), SkillB.Renewal.lv(3), SkillC.GTomeValor.lv(3))
        createItem(Name.フィン, 2, WeaponType.LANCE, MoveType.CAVALRY, 4, 18, 8, 9, 8, 3, 6, 8, 7, 7, 3,
                Weapon.BraveLance2, null, Special.Miracle, SkillA.AtkDef.lv(2), null, SkillC.GoadCavalry)
        createItem(Name.サイアス, 2, WeaponType.BTOME, MoveType.INFANTRY, 5, 17, 7, 8, 5, 8, 5, 8, 6, 2, 8,
                Weapon.WargodsTome, null, Special.Glacies, null, SkillB.EscapeRoute.lv(3), SkillC.SpdPloy.lv(3))

        createItem(Name.ヒノカ__白き翼_, 0, WeaponType.BOW, MoveType.FLIER, 5, 18, 6, 9, 4, 7, 5, 8, 8, 2, 6,
                Weapon.WarriorPrincess, null, Special.Luna, SkillA.AtkSpdBond.lv(3), SkillB.FlierFormation.lv(3), SkillC.FlierGuidance.lv(3))
        createItem(Name.シグレ__白き翼_, 2, WeaponType.LANCE, MoveType.FLIER, 4, 18, 7, 9, 5, 8, 6, 8, 9, 6, 4,
                Weapon.HarmonicLance2, null, Special.Noontime, SkillA.DartingStance.lv(3), null, SkillC.WardFliers)
        createItem(Name.カンナ__女_, 3, WeaponType.DRAGON, MoveType.INFANTRY, 5, 18, 8, 8, 7, 7, 6, 6, 8, 8, 5,
                Weapon.WaterBreath2, null, Special.DraconicAura, SkillA.FierceStance.lv(3), null, SkillC.GoadDragons)
        createItem(Name.リン__伝承英雄_, 3, WeaponType.BOW, MoveType.INFANTRY, 5, 17, 9, 10, 4, 5, 5, 6, 8, 4, 6,
                Weapon.SwiftMulagir, Assist.RallyDefRes, null, SkillA.LawsOfSacae, SkillB.Desperation.lv(3), SkillC.SpdTactic.lv(3))
        createItem(Name.スズカゼ, 0, WeaponType.DAGGER, MoveType.INFANTRY, 3, 17, 6, 10, 4, 8, 4, 7, 8, 2, 8,
                Weapon.BarbShuriken2, null, Special.Iceberg, null, SkillB.PoisonStrike.lv(3), SkillC.AtkSmoke.lv(3))
        createItem(Name.カンナ__男_, 2, WeaponType.DRAGON, MoveType.INFANTRY, 3, 18, 9, 7, 7, 7, 6, 6, 8, 7, 6,
                Weapon.WaterBreath2, null, Special.DragonFang, SkillA.BrazenDefRes.lv(3), null, SkillC.FortifyDragons)
        createItem(Name.アレス, 1, WeaponType.SWORD, MoveType.CAVALRY, 5, 18, 8, 8, 7, 5, 6, 9, 6, 8, 2,
                Weapon.DarkMystletainn, null, Special.DraconicAura, SkillA.BrazenAtkDef.lv(3), SkillB.SealDefRes.lv(3), null)
        createItem(Name.リーン, 1, WeaponType.SWORD, MoveType.INFANTRY, 5, 16, 6, 7, 4, 6, 5, 6, 9, 5, 6,
                Weapon.Safeguard2, Assist.Dance, null, null, SkillB.FirestormDance.lv(2), SkillC.SwordValor.lv(3))
        createItem(Name.イシュタル, 2, WeaponType.BTOME, MoveType.INFANTRY, 5, 16, 8, 10, 4, 7, 6, 8, 8, 2, 5,
                Weapon.Mjolnir, null, Special.Moonbow, SkillA.SwiftSparrow.lv(2), SkillB.Vantage.lv(3), SkillC.OddAtkWave.lv(3))
        createItem(Name.ユリウス, 1, WeaponType.RTOME, MoveType.INFANTRY, 3, 16, 9, 8, 3, 9, 6, 8, 5, 2, 8,
                Weapon.Loptous, null, Special.DraconicAura, null, SkillB.Guard.lv(3), SkillC.AtkPloy.lv(3))

        createItem(Name.サーリャ__花嫁_, 1, WeaponType.RTOME, MoveType.INFANTRY,  5, 17, 9, 9, 6, 4, 6, 8, 8, 3, 4,
                Weapon.MuspellFireposy, Assist.RallyAtkSpd, null, SkillA.AtkSpdBond.lv(3), SkillB.SpdFeint.lv(3), null)
        createItem(Name.ニニアン__花嫁_, 2, WeaponType.BTOME, MoveType.FLIER,  5, 15, 6, 7, 3, 5, 5, 6, 8, 3, 6,
                Weapon.FreshBouquet2, Assist.Dance, null, null, SkillB.ChillAtk.lv(3), SkillC.DriveSpd.lv(2))
        createItem(Name.サナキ__花嫁_, 3, WeaponType.GTOME, MoveType.FLIER,  5, 16, 10, 8, 3, 7, 5, 8, 6, 2, 8,
                Weapon.NiflFrostflowers, Assist.DrawBack, null, SkillA.AtkResBond.lv(3), SkillB.DefResLink.lv(3), null)
        createItem(Name.マルス__花婿_, 3, WeaponType.AXE, MoveType.CAVALRY,  4, 18, 7, 10, 6, 5, 6, 7, 8, 7, 3,
                Weapon.ArdentService2, Assist.RallySpdDef, null, null, SkillB.WingsOfMercy.lv(3), SkillC.DriveAtk.lv(2))

        createItem(Name.リョウマ__伝承英雄_, 1, WeaponType.SWORD, MoveType.FLIER, 5, 17, 8, 11, 6, 5, 7, 8, 9, 6, 3,
                Weapon.Raijinto, null, Special.Glimmer, SkillA.KestrelStance.lv(2), SkillB.Bushido, SkillC.Guidance.lv(3))

//        createItem(Name., 1, WeaponType., MoveType.,  5, , , , , , , , , , ,
//                Weapon., Assist., Special., SkillA..lv(), SkillB..lv(), SkillC..lv())
    }

    private fun createItem(
            name: Name = Name.NONE,
            color: Int = 0,
            weaponType: WeaponType = WeaponType.SWORD,
            moveType: MoveType = MoveType.INFANTRY,
            minRarity: Int = 0,
            hp: Int = 0,
            atk: Int = 0,
            spd: Int = 0,
            def: Int = 0,
            res: Int = 0,
            hpGrowth: Int = 0,
            atkGrowth: Int = 0,
            spdGrowth: Int = 0,
            defGrowth: Int = 0,
            resGrowth: Int = 0,
            weapon: Weapon? = null,
            assist: Assist? = null,
            special: Special? = null,
            //本当はSkill分けたいのだがNONEやLappedSkillをうまく扱えない。いっそSkillsに戻すか？
            aSkill: Skill? = null,
            bSkill: Skill? = null,
            cSkill: Skill? = null
    ) {
        val item = BaseHero(color, weaponType, moveType, minRarity, name, hp, atk, spd, def, res, hpGrowth, atkGrowth, spdGrowth, defGrowth, resGrowth, weapon
                ?: Skill.NONE, assist ?: Skill.NONE, special ?: Skill.NONE, aSkill
                ?: Skill.NONE, bSkill ?: Skill.NONE, cSkill ?: Skill.NONE)
        ITEMS.add(item)
        ITEM_MAP[item.name.jp] = item
        ITEM_MAP[item.name.tw] = item
        ITEM_MAP[item.name.us] = item
    }

}