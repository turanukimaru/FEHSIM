package jp.blogspot.turanukimaru.fehs

import jp.blogspot.turanukimaru.fehs.skill.*

/**
 *　キャラとその基準値
 */
object StandardBaseHero {
    //initブロックと同じ優先順位、つまりinitの前に書かないと作成されない
    private val ITEMS = ArrayList<BaseHero>()
    private val ITEMMAP = HashMap<String, BaseHero>()
    fun get(id: String): BaseHero? = ITEMMAP[id]?.clone()
    fun get(id: Int): BaseHero? = ITEMS[id].clone()
    fun containsKey(id: String): Boolean = ITEMMAP.containsKey(id)
    fun allItems(): MutableList<BaseHero> = ITEMS.fold(mutableListOf(), { list, e -> list.add(e);list })

    init {
        creates()
    }

    fun creates() {
        // Add a person
        createItem("アイク", 1, WeaponType.SWORD, MoveType.INFANTRY, "Ike", 5, 18, 9, 7, 8, 5, 7, 8, 7, 7, 2,
                Weapon.Ragnell, null, Special.Aether, SkillA.HeavyBlade.lv(3), SkillB.SwordBreaker.lv(3), Skill.NONE)
        createItem("アイラ", 1, WeaponType.SWORD, MoveType.INFANTRY, "Ayra", 4, 19, 7, 11, 7, 4, 6, 8, 8, 7, 4,
                Weapon.AyrasBlade, null, Special.RegnalAstra, SkillA.SwiftSparrow.lv(2), SkillB.Desperation.lv(3), Skill.NONE)
        createItem("アーダン", 1, WeaponType.SWORD, MoveType.ARMORED, "Arden", 4, 25, 10, 3, 13, 3, 12, 8, 2, 9, 2,
                Weapon.BraveSword2, null, Special.Pavise, SkillB.FollowUpRing, SkillC.DriveDef.lv(2))
        createItem("アテナ", 1, WeaponType.SWORD, MoveType.INFANTRY, "Athena", 4, 17, 7, 10, 8, 5, 5, 7, 9, 5, 5,
                Weapon.WaoDao2, null, Special.Moonbow, SkillA.SturdyBlow.lv(2), Skill.NONE, SkillC.SwordExperience.lv(3))
        createItem("アルフォンス", 1, WeaponType.SWORD, MoveType.INFANTRY, "Alfonse", 2, 19, 9, 6, 8, 5, 7, 8, 5, 7, 4,
                Weapon.Folkvangr, null, Special.Sol, SkillA.DeathBlow.lv(3), Skill.NONE, SkillC.SpurAtk.lv(3))
        createItem("アルム", 1, WeaponType.SWORD, MoveType.INFANTRY, "Alm", 5, 21, 9, 6, 6, 5, 7, 7, 7, 6, 4,
                Weapon.Falchion, null, Special.DragonGaze, SkillA.Attack.lv(3), SkillB.Windsweep.lv(3), Skill.NONE)
        createItem("エイリーク", 1, WeaponType.SWORD, MoveType.INFANTRY, "Eirika", 4, 18, 7, 9, 7, 6, 7, 5, 8, 5, 6,
                Weapon.Sieglinde, Assist.Pivot, null, Skill.NONE, SkillB.DragBack, SkillC.HoneSpd.lv(3))
        createItem("エリウッド", 1, WeaponType.SWORD, MoveType.CAVALRY, "Eliwood", 3, 17, 7, 8, 6, 8, 6, 7, 6, 4, 7,
                Weapon.Durandal, null, Special.SacredCowl, Skill.NONE, SkillB.AxeBreaker.lv(3), SkillC.WardCavalry)
        createItem("エリンシア", 1, WeaponType.SWORD, MoveType.FLIER, "Elincia", 5, 16, 8, 10, 5, 8, 5, 8, 8, 5, 5,
                Weapon.Amiti, Assist.ArdentSacrifice, null, SkillA.DeathBlow.lv(3), SkillB.FlierFormation.lv(3))
        createItem("エルトシャン", 1, WeaponType.SWORD, MoveType.CAVALRY, "Eldigan", 5, 19, 8, 5, 8, 6, 8, 7, 5, 8, 2,
                Weapon.Mystletainn, null, Special.GrowingLight, SkillA.Furry.lv(3), SkillB.Lunge, Skill.NONE)
        createItem("オグマ", 1, WeaponType.SWORD, MoveType.INFANTRY, "Ogma", 4, 21, 7, 10, 6, 3, 8, 9, 7, 6, 1,
                Weapon.BraveSword2, null, Special.Noontime, SkillA.DefiantAtk.lv(3), Skill.NONE, SkillC.SpurAtk.lv(3))
        createItem("オリヴィエ", 1, WeaponType.SWORD, MoveType.INFANTRY, "Olivia", 3, 17, 6, 7, 5, 4, 5, 6, 8, 6, 6,
                Weapon.SilverSword2, Assist.Dance, null, Skill.NONE, SkillB.KnockBack, SkillC.HoneAtk.lv(3))
        createItem("カイン", 1, WeaponType.SWORD, MoveType.CAVALRY, "Cain", 4, 18, 8, 6, 8, 6, 7, 7, 8, 5, 3,
                Weapon.BraveSword2, null, Special.Escutcheon, Skill.NONE, SkillB.WingsOfMercy.lv(3), SkillC.ThreatenAtk.lv(3))
        createItem("カザハナ", 1, WeaponType.SWORD, MoveType.INFANTRY, "Hana", 3, 18, 9, 10, 6, 4, 5, 8, 8, 4, 6,
                Weapon.ArmorSlayer2, Assist.RallyAttack, null, SkillA.LifeAndDeath.lv(3), SkillB.Obstruct.lv(3), Skill.NONE)
        createItem("カムイ（男）", 1, WeaponType.SWORD, MoveType.INFANTRY, "Corrin(M)", 4, 20, 8, 8, 6, 5, 6, 7, 7, 6, 5,
                Weapon.Yato, null, Special.DragonFang, SkillA.Defense.lv(3), SkillB.Obstruct.lv(3), Skill.NONE)
        createItem("カレル", 1, WeaponType.SWORD, MoveType.INFANTRY, "Karel", 5, 19, 8, 9, 6, 5, 9, 6, 8, 5, 3,
                Weapon.WaoDao2, null, Special.Reprisal, SkillA.DefiantAtk.lv(3), SkillB.Desperation.lv(3), Skill.NONE)
        createItem("グレイ", 1, WeaponType.SWORD, MoveType.INFANTRY, "Gray", 5, 17, 7, 6, 6, 3, 8, 9, 8, 7, 5,
                Weapon.Zanbato2, Assist.Swap, null, SkillA.WindBoost.lv(3), Skill.NONE, SkillC.SwordValor.lv(3))
        createItem("クロム", 1, WeaponType.SWORD, MoveType.INFANTRY, "Chrom", 4, 21, 9, 6, 7, 4, 8, 9, 5, 7, 2,
                Weapon.Falchion, null, Special.Aether, SkillA.DefiantDef.lv(3), Skill.NONE, SkillC.SpurDef.lv(3))
        createItem("シーダ", 1, WeaponType.SWORD, MoveType.FLIER, "Caeda", 4, 17, 6, 9, 5, 10, 5, 5, 9, 5, 7,
                Weapon.ArmorSlayer2, Assist.RallySpeed, null, SkillA.DartingBlow.lv(3), Skill.NONE, SkillC.FortifyFliers)
        createItem("シグルド", 1, WeaponType.SWORD, MoveType.CAVALRY, "Sigurd", 5, 19, 9, 8, 6, 4, 6, 8, 7, 9, 2,
                Weapon.DivineTyrfing, null, Special.Miracle, SkillA.CloseDef.lv(3), SkillB.CrusadersWard, SkillC.SpdSmoke.lv(3))
        createItem("漆黒の騎士", 1, WeaponType.SWORD, MoveType.ARMORED, "Black Knight", 4, 22, 10, 8, 9, 5, 8, 7, 8, 8, 2,
                Weapon.Alondite, null, Special.BlackLuna, SkillA.SteadyStance.lv(3), SkillB.WingsOfMercy.lv(3), Skill.NONE)
        createItem("セーバー", 1, WeaponType.SWORD, MoveType.INFANTRY, "Saber", 5, 18, 7, 9, 8, 5, 6, 7, 7, 7, 4,
                Weapon.SlayingEdge2, null, Special.Aegis, SkillA.HpSpd.lv(2), SkillB.ShieldPulse.lv(3), Skill.NONE)
        createItem("ゼト", 1, WeaponType.SWORD, MoveType.CAVALRY, "Seth", 5, 18, 8, 7, 8, 5, 5, 7, 7, 7, 4,
                Weapon.RubySword2, Assist.Swap, null, SkillA.FortressDef.lv(3), SkillB.SealAtkDef.lv(2), Skill.NONE)
        createItem("ゼフィール", 1, WeaponType.SWORD, MoveType.ARMORED, "Zephiel", 3, 25, 9, 3, 12, 5, 10, 8, 2, 8, 5,
                Weapon.Eckesachs, null, Special.Reprisal, SkillA.LifeAndDeath.lv(3), SkillB.WaryFighter.lv(3), Skill.NONE)
        createItem("セリス", 1, WeaponType.SWORD, MoveType.INFANTRY, "Seliph", 4, 19, 8, 7, 8, 5, 9, 8, 4, 6, 4,
                Weapon.Tyrfing, Assist.RallySpeed, null, SkillA.Hp.lv(3), SkillB.BrashAssault.lv(3), Skill.NONE)
        createItem("ソール", 1, WeaponType.SWORD, MoveType.CAVALRY, "Stahl", 3, 19, 7, 7, 8, 5, 8, 7, 5, 6, 4,
                Weapon.RubySword2, Assist.Swap, null, SkillA.Defense.lv(3), SkillB.Obstruct.lv(3), Skill.NONE)
        createItem("ドーガ", 1, WeaponType.SWORD, MoveType.ARMORED, "Draug", 2, 24, 8, 6, 13, 3, 8, 6, 8, 8, 3,
                Weapon.BraveSword2, null, Special.Pavise, Skill.NONE, SkillB.Lunge, SkillC.WardArmor)
        createItem("ナバール", 1, WeaponType.SWORD, MoveType.INFANTRY, "Navarre", 3, 18, 7, 11, 6, 5, 7, 7, 8, 4, 5,
                Weapon.KillingEdge2, null, Special.BlazingWind, Skill.NONE, SkillB.Desperation.lv(3), SkillC.ThreatenSpd.lv(3))
        createItem("パオラ", 1, WeaponType.SWORD, MoveType.FLIER, "Palla", 3, 18, 7, 9, 6, 7, 7, 7, 6, 6, 5,
                Weapon.RubySword2, null, Special.Moonbow, Skill.NONE, SkillB.WingsOfMercy.lv(3), SkillC.GoadFliers)
        createItem("ヒナタ", 1, WeaponType.SWORD, MoveType.INFANTRY, "Hinata", 3, 21, 8, 5, 10, 3, 8, 7, 5, 8, 3,
                Weapon.RubySword2, null, Special.Pavise, SkillA.Furry.lv(3), SkillB.BrashAssault.lv(3), Skill.NONE)
        createItem("フィル", 1, WeaponType.SWORD, MoveType.INFANTRY, "Fir", 3, 19, 6, 10, 5, 7, 6, 5, 8, 5, 7,
                Weapon.KillingEdge2, null, Special.Glacies, SkillA.Speed.lv(3), SkillB.Pass.lv(3), Skill.NONE)
        createItem("マルス", 1, WeaponType.SWORD, MoveType.INFANTRY, "Marth", 4, 19, 7, 8, 7, 6, 6, 7, 8, 6, 4,
                Weapon.Falchion, Assist.Pivot, null, Skill.NONE, SkillB.EscapeRoute.lv(3), SkillC.SpurSpd.lv(3))
        createItem("マルス（仮面）", 1, WeaponType.SWORD, MoveType.INFANTRY, "Marth (Masked)", 4, 19, 8, 10, 6, 4, 7, 8, 8, 5, 3,
                Weapon.Falchion, null, null, Skill.NONE, Skill.NONE, Skill.NONE)
        createItem("マークス", 1, WeaponType.SWORD, MoveType.CAVALRY, "Xander", 3, 20, 8, 5, 9, 4, 7, 7, 5, 9, 2,
                Weapon.Siegfried, null, Special.BlazingLight, SkillA.ArmoredBlow.lv(3), Skill.NONE, SkillC.SpurDef.lv(3))
        createItem("ラズワルド", 1, WeaponType.SWORD, MoveType.INFANTRY, "Laslow", 3, 20, 9, 7, 6, 5, 7, 8, 5, 7, 4,
                Weapon.SilverSword2, null, Special.Noontime, Skill.NONE, SkillB.AxeBreaker.lv(3), SkillC.HoneSpd.lv(3))
        createItem("リョウマ", 1, WeaponType.SWORD, MoveType.INFANTRY, "Ryoma", 5, 19, 8, 11, 5, 4, 6, 8, 7, 6, 4,
                Weapon.Raijinto, null, Special.Astra, SkillA.DefiantAtk.lv(3), Skill.NONE, SkillC.HoneSpd.lv(3))
        createItem("リン", 1, WeaponType.SWORD, MoveType.INFANTRY, "Lyn", 5, 18, 6, 11, 7, 5, 5, 6, 8, 5, 7,
                Weapon.SolKatti, null, Special.Galeforce, SkillA.DefiantAtk.lv(3), Skill.NONE, SkillC.SpurSpd.lv(3))
        createItem("ルーク", 1, WeaponType.SWORD, MoveType.CAVALRY, "Luke", 5, 19, 8, 6, 8, 5, 7, 8, 6, 6, 3,
                Weapon.BraveSword2, null, Special.Bonfire, SkillA.FireBoost.lv(3), Skill.NONE, SkillC.PanicPloy.lv(3))
        createItem("ルーナ", 1, WeaponType.SWORD, MoveType.INFANTRY, "Selena", 3, 18, 6, 9, 8, 6, 5, 5, 8, 7, 6,
                Weapon.ArmorSlayer2, Assist.Reposition, null, SkillA.TriangleAdept.lv(3), Skill.NONE, SkillC.ThreatenSpd.lv(3))
        createItem("ルキナ", 1, WeaponType.SWORD, MoveType.INFANTRY, "Lucina", 5, 19, 8, 10, 6, 4, 7, 8, 8, 5, 3,
                Weapon.Falchion, null, Special.Aether, SkillA.DefiantSpd.lv(3), Skill.NONE, SkillC.SpurAtk.lv(3))
        createItem("ロイ", 1, WeaponType.SWORD, MoveType.INFANTRY, "Roy", 4, 20, 8, 9, 6, 4, 7, 6, 6, 5, 7,
                Weapon.BindingBlade, Assist.Shove, null, SkillA.TriangleAdept.lv(3), SkillB.SealDef.lv(3), Skill.NONE)
        createItem("ロイ（総選挙）", 1, WeaponType.SWORD, MoveType.CAVALRY, "Roy (Brave Heroes)", 5, 16, 8, 8, 7, 7, 6, 7, 8, 5, 4,
                Weapon.BlazingDurandal, null, Special.Galeforce, SkillA.SteadyBlow.lv(2), SkillB.Desperation.lv(3), Skill.NONE)
        createItem("ロイド", 1, WeaponType.SWORD, MoveType.INFANTRY, "Lloyd", 3, 17, 8, 9, 5, 8, 7, 7, 8, 3, 6,
                Weapon.RegalBlade, null, Special.Iceberg, Skill.NONE, SkillB.Pass.lv(3), SkillC.ThreatenAtk.lv(3))
        createItem("ロビン", 1, WeaponType.SWORD, MoveType.INFANTRY, "Tobin", 4, 18, 7, 5, 5, 4, 9, 7, 6, 9, 6,
                Weapon.ArmorSlayer2, Assist.Pivot, null, SkillA.Attack.lv(3), SkillB.SealSpd.lv(3), Skill.NONE)
        createItem("ロンクー", 1, WeaponType.SWORD, MoveType.INFANTRY, "Lonqu", 3, 19, 7, 11, 5, 5, 8, 6, 9, 4, 4,
                Weapon.KillingEdge2, null, Special.Glimmer, SkillA.Speed.lv(3), SkillB.Vantage.lv(3), Skill.NONE)
        createItem("アルヴィス", 1, WeaponType.RTOME, MoveType.INFANTRY, "Arvis", 3, 18, 8, 7, 4, 7, 3, 8, 7, 2, 8,
                Weapon.Valflame, null, Special.GrowingFlame, Skill.NONE, SkillB.RecoverRing, SkillC.DefPloy.lv(3))
        createItem("カタリナ", 1, WeaponType.RTOME, MoveType.INFANTRY, "Katarina", 5, 17, 6, 8, 5, 8, 4, 8, 8, 1, 7,
                Weapon.Rauorowl2, null, Special.Glacies, SkillA.SwiftSparrow.lv(2), Skill.NONE, SkillC.AtkPloy.lv(3))
        createItem("サーリャ", 1, WeaponType.RTOME, MoveType.INFANTRY, "Tharja", 4, 17, 8, 8, 6, 5, 6, 7, 8, 4, 3,
                Weapon.Rauorblade2, null, Special.Vengeance, SkillA.DartingBlow.lv(3), Skill.NONE, SkillC.SpurRes.lv(3))
        createItem("サナキ", 1, WeaponType.RTOME, MoveType.INFANTRY, "Sanaki", 5, 16, 9, 7, 4, 8, 4, 9, 5, 2, 8,
                Weapon.Cymbeline, Assist.HarshCommand, null, SkillA.TriangleAdept.lv(3), Skill.NONE, SkillC.HoneAtk.lv(3))
        createItem("セリカ", 1, WeaponType.RTOME, MoveType.INFANTRY, "Celica", 5, 17, 8, 7, 5, 7, 6, 7, 8, 4, 3,
                Weapon.Ragnarok, null, Special.BlazingLight, SkillA.DistantDef.lv(3), Skill.NONE, SkillC.SpurDef.lv(3))
        createItem("ソフィーヤ", 1, WeaponType.RTOME, MoveType.INFANTRY, "Sophia", 3, 18, 9, 4, 6, 7, 6, 7, 3, 6, 6,
                Weapon.Fenrir2, null, Special.DragonFang, SkillA.WardingBlow.lv(3), Skill.NONE, SkillC.FortifyRes.lv(3))
        createItem("ヘンリー", 1, WeaponType.RTOME, MoveType.INFANTRY, "Henry", 3, 19, 6, 5, 8, 6, 8, 4, 4, 7, 5,
                Weapon.Rauorraven2, null, Special.Ignis, SkillA.DefiantDef.lv(3), SkillB.GTomeBreaker.lv(3), Skill.NONE)
        createItem("リリーナ", 1, WeaponType.RTOME, MoveType.INFANTRY, "Lilina", 4, 16, 9, 6, 4, 9, 5, 9, 5, 3, 6,
                Weapon.Bolganone2, null, Special.GrowingFlame, SkillA.Attack.lv(3), Skill.NONE, SkillC.SpurAtk.lv(3))
        createItem("レイ", 1, WeaponType.RTOME, MoveType.INFANTRY, "Raigh", 3, 17, 8, 7, 5, 7, 5, 7, 6, 4, 6,
                Weapon.Rauorwolf2, Assist.RallyAttack, null, SkillA.Hp.lv(3), SkillB.SealRes.lv(3), Skill.NONE)
        createItem("レオン", 1, WeaponType.RTOME, MoveType.CAVALRY, "Leo", 5, 17, 7, 5, 6, 8, 6, 6, 4, 5, 6,
                Weapon.Brynhildr, null, Special.BlazingLight, Skill.NONE, SkillB.QuickRiposte.lv(3), SkillC.SavageBlow.lv(3))
        createItem("レオン（夏）", 1, WeaponType.RTOME, MoveType.INFANTRY, "Leo (Summer)", 5, 18, 8, 5, 6, 7, 5, 7, 6, 1, 9,
                Weapon.TomatoTome2, null, Special.Iceberg, Skill.NONE, SkillB.SealRes.lv(3), SkillC.AtkPloy.lv(3))
        createItem("チキ（大人）", 1, WeaponType.DRAGON, MoveType.INFANTRY, "Tiki(A)", 3, 18, 7, 6, 9, 7, 6, 9, 4, 8, 4,
                Weapon.LightningBreath2, null, Special.Bonfire, SkillA.DefiantAtk.lv(3), Skill.NONE, SkillC.SpurRes.lv(3))
        createItem("チキ（幼）", 1, WeaponType.DRAGON, MoveType.INFANTRY, "Tiki(Y)", 5, 15, 5, 4, 8, 7, 8, 8, 8, 7, 6,
                Weapon.Flametongue2, null, Special.GrowingFlame, SkillA.ArmoredBlow.lv(3), Skill.NONE, SkillC.BreathOfLife.lv(3))
        createItem("アクア", 2, WeaponType.LANCE, MoveType.INFANTRY, "Azura", 5, 17, 5, 7, 4, 6, 5, 8, 8, 4, 6,
                Weapon.SapphireLance2, Assist.Sing, null, SkillA.Speed.lv(3), Skill.NONE, SkillC.FortifyRes.lv(3))
        createItem("アベル", 2, WeaponType.LANCE, MoveType.CAVALRY, "Abel", 4, 17, 7, 8, 8, 6, 6, 8, 7, 4, 5,
                Weapon.BraveLance2, null, Special.Aegis, SkillA.Hp.lv(3), SkillB.SwordBreaker.lv(3), Skill.NONE)
        createItem("ヴァルター", 2, WeaponType.LANCE, MoveType.FLIER, "Valter", 3, 18, 8, 9, 8, 4, 7, 7, 6, 8, 3,
                Weapon.CursedLance, null, Special.Luna, SkillA.DartingBlow.lv(3), Skill.NONE, SkillC.PanicPloy.lv(3))
        createItem("ウェンディ", 2, WeaponType.LANCE, MoveType.ARMORED, "Gwendolyn", 3, 23, 8, 5, 12, 6, 8, 6, 5, 8, 6,
                Weapon.KillerLance2, null, Special.Escutcheon, Skill.NONE, SkillB.DragBack, SkillC.HoneArmor)
        createItem("エスト", 2, WeaponType.LANCE, MoveType.FLIER, "Est", 3, 17, 9, 8, 5, 8, 5, 8, 6, 5, 7,
                Weapon.HeavySpear2, Assist.Shove, null, SkillA.DefiantRes.lv(3), SkillB.SealSpd.lv(3), Skill.NONE)
        createItem("エフラム", 2, WeaponType.LANCE, MoveType.INFANTRY, "Ephraim", 5, 19, 9, 6, 8, 5, 8, 8, 5, 7, 3,
                Weapon.Siegmund, null, Special.Moonbow, Skill.NONE, SkillB.SealDef.lv(3), SkillC.ThreatenDef.lv(3))
        createItem("エルフィ", 2, WeaponType.LANCE, MoveType.ARMORED, "Effie", 4, 22, 12, 5, 11, 4, 9, 9, 4, 6, 5,
                Weapon.SilverLance2, Assist.Smite, null, SkillA.DeathBlow.lv(3), SkillB.WaryFighter.lv(3), Skill.NONE)
        createItem("オスカー", 2, WeaponType.LANCE, MoveType.CAVALRY, "Oscar", 5, 18, 7, 8, 7, 6, 6, 8, 8, 5, 3,
                Weapon.SapphireLance2, Assist.RallySpdDef, null, Skill.NONE, SkillB.LanceBreaker.lv(3), SkillC.SpurSpdDef.lv(2))
        createItem("オボロ", 2, WeaponType.LANCE, MoveType.INFANTRY, "Oboro", 3, 18, 8, 7, 9, 5, 6, 7, 5, 8, 5,
                Weapon.HeavySpear2, Assist.RallyDefense, null, Skill.NONE, SkillB.SealDef.lv(3), SkillC.ThreatenRes.lv(3))
        createItem("カチュア", 2, WeaponType.LANCE, MoveType.FLIER, "Catria", 4, 17, 7, 10, 7, 6, 6, 7, 7, 6, 5,
                Weapon.KillerLance2, null, Special.Luna, SkillA.ArmoredBlow.lv(3), SkillB.SealAtk.lv(3), Skill.NONE)
        createItem("カミュ", 2, WeaponType.LANCE, MoveType.CAVALRY, "Camus", 3, 18, 8, 9, 7, 4, 7, 7, 7, 7, 2,
                Weapon.Gradivus, null, Special.GrowingThunder, SkillA.GranisShield, Skill.NONE, SkillC.GoadCavalry)
        createItem("カムイ（女）", 2, WeaponType.DRAGON, MoveType.INFANTRY, "Corrin(F)", 3, 19, 8, 6, 8, 6, 6, 5, 9, 8, 3,
                Weapon.DarkBreath2, null, Special.DragonGaze, Skill.NONE, SkillB.SealRes.lv(3), SkillC.HoneAtk.lv(3))
        createItem("クレア", 2, WeaponType.LANCE, MoveType.FLIER, "Clair", 5, 18, 7, 8, 5, 9, 5, 5, 9, 5, 7,
                Weapon.SilverLance2, Assist.HarshCommand, null, Skill.NONE, SkillB.HitAndRun, SkillC.SpurSpd.lv(3))
        createItem("クレーベ", 2, WeaponType.LANCE, MoveType.CAVALRY, "Clive", 4, 19, 9, 6, 8, 4, 8, 7, 5, 7, 3,
                Weapon.SilverLance2, null, Special.Escutcheon, SkillA.Defense.lv(3), SkillB.HitAndRun, Skill.NONE)
        createItem("シーダ（花嫁）", 2, WeaponType.BTOME, MoveType.INFANTRY, "Caeda (Bride)", 5, 16, 7, 9, 4, 8, 4, 6, 9, 3, 6,
                Weapon.BlessedBouquet2, null, Special.Iceberg, SkillA.AtkRes.lv(2), Skill.NONE, SkillC.HoneSpd.lv(3))
        createItem("ジェイガン", 2, WeaponType.LANCE, MoveType.CAVALRY, "Jagen", 3, 20, 8, 7, 8, 11, 4, 5, 4, 4, 7,
                Weapon.SilverLance2, null, Special.Aegis, SkillA.Furry.lv(3), Skill.NONE, SkillC.FortifyCavalry)
        createItem("シャーロッテ（花嫁）", 2, WeaponType.LANCE, MoveType.INFANTRY, "Charlotte (Bride)", 5, 20, 10, 8, 5, 4, 8, 8, 7, 5, 3,
                Weapon.FirstBite2, Assist.Smite, null, SkillA.WindBoost.lv(3), Skill.NONE, SkillC.ThreatenAtk.lv(3))
        createItem("シャニー", 2, WeaponType.LANCE, MoveType.FLIER, "Shanna", 3, 17, 8, 9, 6, 7, 6, 6, 8, 5, 6,
                Weapon.KillerLance2, null, Special.Iceberg, Skill.NONE, SkillB.Desperation.lv(3), SkillC.ThreatenSpd.lv(3))
        createItem("シャロン", 2, WeaponType.LANCE, MoveType.INFANTRY, "Sharena", 2, 19, 8, 8, 7, 5, 7, 7, 7, 6, 4,
                Weapon.Fensalir, Assist.RallyAttack, null, SkillA.Speed.lv(3), Skill.NONE, SkillC.FortifyDef.lv(3))
        createItem("ソワレ", 2, WeaponType.LANCE, MoveType.CAVALRY, "Sully", 3, 18, 7, 8, 7, 6, 7, 5, 8, 4, 6,
                Weapon.SapphireLance2, Assist.DrawBack, null, Skill.NONE, SkillB.SwordBreaker.lv(3), SkillC.SpurDef.lv(3))
        createItem("ターナ", 2, WeaponType.LANCE, MoveType.FLIER, "Tana", 5, 17, 8, 10, 6, 6, 5, 8, 8, 5, 5,
                Weapon.Vidofinir, null, Special.Moonbow, SkillA.SpdDef.lv(2), Skill.NONE, SkillC.Guidance.lv(3))
        createItem("ツバキ", 2, WeaponType.LANCE, MoveType.FLIER, "Subaki", 3, 18, 6, 9, 9, 5, 6, 5, 8, 8, 4,
                Weapon.SapphireLance2, Assist.Swap, null, SkillA.Resistance.lv(3), SkillB.QuickRiposte.lv(3), Skill.NONE)
        createItem("ティアモ", 2, WeaponType.LANCE, MoveType.FLIER, "Cordelia", 4, 18, 9, 9, 5, 6, 6, 8, 8, 4, 5,
                Weapon.BraveLance2, null, Special.Galeforce, SkillA.TriangleAdept.lv(3), SkillB.Pass.lv(3), Skill.NONE)
        createItem("ドニ", 2, WeaponType.LANCE, MoveType.INFANTRY, "Donnel", 3, 17, 7, 5, 6, 4, 8, 9, 7, 8, 5,
                Weapon.BraveLance2, Assist.ReciprocalAid, null, SkillA.Hp.lv(3), SkillB.DragBack, Skill.NONE)
        createItem("ネフェニー", 2, WeaponType.LANCE, MoveType.INFANTRY, "Nephenee", 5, 18, 7, 9, 8, 5, 5, 7, 8, 8, 3,
                Weapon.SlayingLance2, null, Special.Moonbow, SkillA.AtkSpd.lv(2), SkillB.Wrath.lv(3), Skill.NONE)
        createItem("ピエリ", 2, WeaponType.LANCE, MoveType.CAVALRY, "Peri", 4, 16, 9, 9, 6, 6, 5, 7, 7, 4, 7,
                Weapon.KillerLance2, null, Special.Glimmer, SkillA.Resistance.lv(3), Skill.NONE, SkillC.ThreatenDef.lv(3))
        createItem("ヒノカ", 2, WeaponType.LANCE, MoveType.FLIER, "Hinoka", 5, 19, 7, 8, 6, 7, 6, 9, 7, 5, 4,
                Weapon.BraveLance2, null, Special.BlazingWind, SkillA.DefiantDef.lv(3), Skill.NONE, SkillC.HoneFliers)
        createItem("フロリーナ", 2, WeaponType.LANCE, MoveType.FLIER, "Florina", 3, 18, 7, 8, 6, 8, 7, 6, 5, 5, 8,
                Weapon.HeavySpear2, Assist.ArdentSacrifice, null, SkillA.DartingBlow.lv(3), Skill.NONE, SkillC.BreathOfLife.lv(3))
        createItem("ベルクト", 2, WeaponType.LANCE, MoveType.CAVALRY, "Berkut", 3, 19, 8, 5, 7, 7, 7, 8, 4, 7, 4,
                Weapon.BerkutsLance2, null, Special.BlazingFlame, SkillA.WaterBoost.lv(3), Skill.NONE, SkillC.WardCavalry)
        createItem("マークス（春）", 2, WeaponType.LANCE, MoveType.CAVALRY, "Xander (Spring)", 5, 18, 6, 6, 9, 7, 6, 5, 6, 8, 5,
                Weapon.CarrotLance2, Assist.Swap, null, Skill.NONE, SkillB.LiveForHonor, SkillC.FortifyDef.lv(3))
        createItem("マチルダ", 2, WeaponType.LANCE, MoveType.CAVALRY, "Mathilda", 5, 16, 7, 8, 7, 8, 5, 6, 7, 4, 8,
                Weapon.Ridersbane2, Assist.RallyResistance, null, Skill.NONE, SkillB.CancelAffinity.lv(3), SkillC.HoneAtk.lv(3))
        createItem("ルカ", 2, WeaponType.LANCE, MoveType.INFANTRY, "Lukas", 5, 19, 9, 5, 10, 4, 8, 8, 4, 9, 2,
                Weapon.KillerLance2, null, Special.SacredCowl, SkillA.FortressDef.lv(3), SkillB.Obstruct.lv(3), Skill.NONE)
        createItem("ルキナ（春）", 2, WeaponType.BTOME, MoveType.INFANTRY, "Lucina (Spring)", 5, 16, 7, 10, 5, 6, 5, 6, 8, 4, 5,
                Weapon.BlueEgg2, Assist.RallySpeed, null, SkillA.SwiftSparrow.lv(2), SkillB.SealRes.lv(3), Skill.NONE)
        createItem("ルキナ（総選挙）", 2, WeaponType.LANCE, MoveType.INFANTRY, "Lucina (Brave Heroes)", 5, 17, 8, 10, 8, 4, 7, 8, 8, 5, 3,
                Weapon.Geirskogul, null, Special.Aether, SkillA.SturdyBlow.lv(2), Skill.NONE, SkillC.DriveSpd.lv(2))
        createItem("ルフレ（夏）", 2, WeaponType.LANCE, MoveType.INFANTRY, "Robin(F) (Summer)", 5, 18, 8, 8, 6, 7, 4, 7, 8, 6, 6,
                Weapon.DeftHarpoon2, Assist.Reposition, null, SkillA.HpDef.lv(2), Skill.NONE, SkillC.LanceValor.lv(3))
        createItem("ロディ", 2, WeaponType.LANCE, MoveType.CAVALRY, "Roderick", 5, 18, 7, 8, 6, 7, 6, 7, 8, 5, 4,
                Weapon.FiresweepLance2, Assist.RallyDefRes, null, Skill.NONE, SkillB.DragBack, SkillC.DriveDef.lv(2))
        createItem("ウルスラ", 2, WeaponType.BTOME, MoveType.CAVALRY, "Ursula", 3, 16, 7, 8, 4, 8, 5, 6, 7, 3, 6,
                Weapon.Blarwolf2, null, Special.GrowingThunder, SkillA.DeathBlow.lv(3), Skill.NONE, SkillC.ThreatenRes.lv(3))
        createItem("オーディン", 2, WeaponType.BTOME, MoveType.INFANTRY, "Odin", 3, 19, 5, 8, 6, 6, 7, 4, 7, 5, 5,
                Weapon.Blarblade2, null, Special.Moonbow, SkillA.DefiantAtk.lv(3), SkillB.RTomeBreaker.lv(3), Skill.NONE)
        createItem("オルエン", 2, WeaponType.BTOME, MoveType.CAVALRY, "Olwen", 5, 17, 7, 8, 5, 6, 4, 5, 8, 3, 7,
                Weapon.DireThunder, Assist.Reposition, null, SkillA.WardingBlow.lv(3), Skill.NONE, SkillC.WardCavalry)
        createItem("カムイ（夏）", 2, WeaponType.BTOME, MoveType.FLIER, "Corrin(F) (Summer)", 5, 17, 7, 8, 5, 7, 4, 7, 8, 4, 5,
                Weapon.SealifeTome2, null, Special.DragonFang, SkillA.SwiftStrike.lv(2), Skill.NONE, SkillC.FortifyFliers)
        createItem("シグレ（舞踏祭）", 2, WeaponType.BTOME, MoveType.INFANTRY, "Shigure (Performing Arts)", 5, 15, 7, 5, 4, 5, 5, 7, 7, 4, 5,
                Weapon.DancersScore2, Assist.Sing, null, Skill.NONE, SkillB.GeyserDance.lv(2), SkillC.BTomeValor.lv(3))
        createItem("ティルテュ", 2, WeaponType.BTOME, MoveType.INFANTRY, "Tailtiu", 5, 17, 8, 9, 4, 6, 6, 7, 8, 2, 5,
                Weapon.Blarblade2, Assist.RallySpdRes, null, SkillA.AtkRes.lv(2), Skill.NONE, SkillC.DriveSpd.lv(2))
        createItem("デューテ", 2, WeaponType.BTOME, MoveType.INFANTRY, "Delthea", 5, 16, 10, 8, 3, 7, 4, 8, 8, 1, 7,
                Weapon.DarkAura, null, Special.Miracle, SkillA.DeathBlow.lv(3), Skill.NONE, SkillC.DriveAtk.lv(2))
        createItem("メイ", 2, WeaponType.BTOME, MoveType.INFANTRY, "Mae", 5, 16, 10, 7, 3, 8, 5, 8, 7, 2, 6,
                Weapon.Blarowl2, Assist.DrawBack, null, Skill.NONE, SkillB.Desperation.lv(3), SkillC.BTomeExperience.lv(3))
        createItem("ラインハルト", 2, WeaponType.BTOME, MoveType.CAVALRY, "Reinhardt", 4, 16, 8, 6, 5, 8, 6, 7, 4, 6, 4,
                Weapon.DireThunder, null, Special.BlazingThunder, Skill.NONE, SkillB.Vantage.lv(3), SkillC.GoadCavalry)
        createItem("リンダ", 2, WeaponType.BTOME, MoveType.INFANTRY, "Linde", 5, 16, 9, 10, 4, 5, 5, 8, 8, 1, 6,
                Weapon.Aura, Assist.ArdentSacrifice, null, SkillA.Speed.lv(3), Skill.NONE, SkillC.FortifyRes.lv(3))
        createItem("ルフレ（男）", 2, WeaponType.BTOME, MoveType.INFANTRY, "Robin(M)", 3, 18, 7, 7, 7, 5, 6, 6, 6, 6, 4,
                Weapon.Blarraven2, null, Special.Bonfire, SkillA.DefiantSpd.lv(3), Skill.NONE, SkillC.SpurDef.lv(3))
        createItem("ニニアン", 2, WeaponType.DRAGON, MoveType.INFANTRY, "Ninian", 5, 16, 5, 7, 6, 5, 8, 5, 8, 4, 6,
                Weapon.LightBreath2, Assist.Dance, null, Skill.NONE, SkillB.EscapeRoute.lv(3), SkillC.FortifyDragons)
        createItem("ノノ", 2, WeaponType.DRAGON, MoveType.INFANTRY, "Nowi", 4, 17, 6, 5, 6, 5, 9, 9, 6, 7, 6,
                Weapon.LightningBreath2, Assist.RallyDefense, null, SkillA.Defense.lv(3), Skill.NONE, SkillC.ThreatenRes.lv(3))
        createItem("アイク（総選挙）", 3, WeaponType.AXE, MoveType.INFANTRY, "Ike (Brave Heroes)", 5, 17, 10, 6, 9, 5, 8, 8, 6, 8, 3,
                Weapon.Urvan, null, Special.Aether, SkillA.SteadyBreath, SkillB.BeorcsBlessing, SkillC.ThreatenDef.lv(3))
        createItem("アクア（舞踏祭）", 3, WeaponType.AXE, MoveType.INFANTRY, "Azura (Performing Arts)", 5, 16, 6, 8, 3, 6, 5, 8, 8, 4, 6,
                Weapon.Uror, Assist.Sing, null, SkillA.TriangleAdept.lv(3), Skill.NONE, SkillC.DriveRes.lv(2))
        createItem("アメリア", 3, WeaponType.AXE, MoveType.ARMORED, "Amelia", 5, 19, 6, 8, 9, 4, 9, 9, 8, 8, 5,
                Weapon.SlayingAxe2, null, Special.HolyVestments, SkillA.EarthBoost.lv(3), Skill.NONE, SkillC.ArmorMarch.lv(3))
        createItem("アンナ", 3, WeaponType.AXE, MoveType.INFANTRY, "Anna", 2, 19, 7, 10, 5, 6, 6, 6, 9, 4, 6,
                Weapon.Noatun, null, Special.Astra, Skill.NONE, SkillB.Vantage.lv(3), SkillC.SpurRes.lv(3))
        createItem("カミラ", 3, WeaponType.AXE, MoveType.FLIER, "Camilla", 4, 18, 8, 8, 6, 7, 5, 6, 7, 6, 7,
                Weapon.BraveAxe2, null, Special.DragonGaze, SkillA.DartingBlow.lv(3), Skill.NONE, SkillC.SavageBlow.lv(3))
        createItem("ギュンター", 3, WeaponType.AXE, MoveType.CAVALRY, "Gunter", 3, 21, 10, 7, 11, 5, 6, 6, 4, 6, 2,
                Weapon.SilverAxe2, Assist.HarshCommand, null, SkillA.ArmoredBlow.lv(3), Skill.NONE, SkillC.HoneCavalry)
        createItem("クロム（春）", 3, WeaponType.AXE, MoveType.INFANTRY, "Chrom (Spring)", 5, 19, 9, 8, 6, 5, 7, 8, 7, 6, 3,
                Weapon.CarrotAxe2, Assist.Shove, null, SkillA.AtkDef.lv(2), Skill.NONE, SkillC.AxeExperience.lv(3))
        createItem("シーマ", 3, WeaponType.AXE, MoveType.ARMORED, "Sheena", 4, 21, 8, 6, 12, 7, 7, 6, 5, 7, 8,
                Weapon.KillerAxe2, null, Special.Escutcheon, SkillA.SvalinnShield, Skill.NONE, SkillC.FortifyArmor)
        createItem("セルジュ", 3, WeaponType.AXE, MoveType.FLIER, "Cherche", 3, 20, 10, 6, 8, 3, 8, 9, 5, 7, 2,
                Weapon.Hammer2, Assist.Pivot, null, SkillA.Attack.lv(3), Skill.NONE, SkillC.FortifyDef.lv(3))
        createItem("チキ（夏）", 3, WeaponType.AXE, MoveType.INFANTRY, "Tiki(A) (Summer)", 5, 18, 8, 6, 8, 7, 4, 9, 7, 7, 4,
                Weapon.MelonCrusher2, null, Special.Sol, SkillA.CloseDef.lv(3), Skill.NONE, SkillC.AxeValor.lv(3))
        createItem("ティアマト", 3, WeaponType.AXE, MoveType.CAVALRY, "Titania", 5, 18, 6, 8, 6, 8, 5, 6, 8, 5, 6,
                Weapon.EmeraldAxe2, Assist.ReciprocalAid, null, SkillA.ArmoredBlow.lv(3), SkillB.Guard.lv(3), Skill.NONE)
        createItem("ナーシェン", 3, WeaponType.AXE, MoveType.FLIER, "Narcian", 2, 18, 7, 7, 8, 7, 7, 6, 6, 7, 5,
                Weapon.EmeraldAxe2, null, Special.Vengeance, Skill.NONE, SkillB.LanceBreaker.lv(3), SkillC.SavageBlow.lv(3))
        createItem("ニノ", 3, WeaponType.GTOME, MoveType.INFANTRY, "Nino", 3, 16, 7, 10, 4, 7, 4, 8, 8, 3, 5,
                Weapon.Gronnblade2, Assist.DrawBack, null, SkillA.Resistance.lv(3), Skill.NONE, SkillC.HoneAtk.lv(3))
        createItem("バーツ", 3, WeaponType.AXE, MoveType.INFANTRY, "Barst", 3, 20, 9, 8, 6, 4, 8, 7, 7, 7, 2,
                Weapon.BraveAxe2, Assist.Reposition, null, Skill.NONE, SkillB.KnockBack, SkillC.SpurAtk.lv(3))
        createItem("バアトル", 3, WeaponType.AXE, MoveType.INFANTRY, "Bartre", 3, 21, 10, 6, 7, 3, 9, 8, 5, 8, 1,
                Weapon.Hammer2, Assist.Smite, null, SkillA.Furry.lv(3), SkillB.BrashAssault.lv(3), Skill.NONE)
        createItem("ハロルド", 3, WeaponType.AXE, MoveType.INFANTRY, "Arthur", 3, 19, 8, 7, 8, 5, 7, 7, 6, 6, 5,
                Weapon.EmeraldAxe2, Assist.Swap, null, SkillA.Hp.lv(3), SkillB.LanceBreaker.lv(3), Skill.NONE)
        createItem("ファ", 3, WeaponType.DRAGON, MoveType.INFANTRY, "Fae", 4, 16, 5, 4, 6, 8, 10, 9, 7, 5, 6,
                Weapon.LightBreath2, Assist.DrawBack, null, Skill.NONE, SkillB.Renewal.lv(3), SkillC.ThreatenAtk.lv(3))
        createItem("フレデリク", 3, WeaponType.AXE, MoveType.CAVALRY, "Frederick", 3, 19, 9, 6, 8, 4, 7, 8, 5, 9, 1,
                Weapon.Hammer2, null, Special.Luna, Skill.NONE, SkillB.WingsOfMercy.lv(3), SkillC.FortifyDef.lv(3))
        createItem("ヘクトル", 3, WeaponType.AXE, MoveType.ARMORED, "Hector", 5, 24, 10, 5, 11, 4, 9, 8, 5, 8, 3,
                Weapon.Armoads, null, Special.Pavise, SkillA.DistantCounter, Skill.NONE, SkillC.GoadArmor)
        createItem("ベルカ", 3, WeaponType.AXE, MoveType.FLIER, "Beruka", 3, 20, 7, 6, 9, 5, 8, 6, 4, 9, 4,
                Weapon.KillerAxe2, null, Special.Glimmer, SkillA.DefiantDef.lv(3), SkillB.Lunge, Skill.NONE)
        createItem("ホークアイ", 3, WeaponType.AXE, MoveType.INFANTRY, "Hawkeye", 4, 21, 9, 5, 6, 6, 7, 7, 4, 6, 7,
                Weapon.KillerAxe2, null, Special.GrowingLight, SkillA.DeathBlow.lv(3), Skill.NONE, SkillC.ThreatenAtk.lv(3))
        createItem("マークス（夏）", 3, WeaponType.AXE, MoveType.INFANTRY, "Xander (Summer)", 5, 19, 8, 6, 8, 6, 7, 7, 7, 9, 1,
                Weapon.LilithFloatie2, null, Special.Bonfire, SkillA.FireBoost.lv(3), Skill.NONE, SkillC.InfantryPulse.lv(3))
        createItem("ミシェイル", 3, WeaponType.AXE, MoveType.FLIER, "Michalis", 3, 19, 8, 7, 9, 4, 7, 8, 5, 8, 3,
                Weapon.Hauteclere, null, Special.BlazingThunder, SkillA.IotesShield, Skill.NONE, SkillC.ThreatenDef.lv(3))
        createItem("ミネルバ", 3, WeaponType.AXE, MoveType.FLIER, "Minerva", 5, 18, 7, 9, 8, 5, 6, 7, 7, 7, 4,
                Weapon.Hauteclere, null, Special.SacredCowl, SkillA.LifeAndDeath.lv(3), Skill.NONE, SkillC.WardFliers)
        createItem("レイヴァン", 3, WeaponType.AXE, MoveType.INFANTRY, "Raven", 4, 19, 8, 9, 6, 5, 6, 8, 8, 5, 4,
                Weapon.BraveAxe2, null, Special.Sol, SkillA.DefiantSpd.lv(3), Skill.NONE, SkillC.ThreatenDef.lv(3))
        createItem("ローロー", 3, WeaponType.AXE, MoveType.INFANTRY, "Legion", 3, 20, 10, 9, 5, 3, 8, 8, 8, 4, 3,
                Weapon.LegionsAxe2, null, Special.Reprisal, SkillA.Furry.lv(3), SkillB.Obstruct.lv(3), Skill.NONE)
        createItem("アズール（舞踏祭）", 3, WeaponType.GTOME, MoveType.INFANTRY, "Inigo (Performing Arts)", 5, 15, 6, 7, 5, 3, 6, 6, 8, 4, 4,
                Weapon.DancersRing2, Assist.Dance, null, Skill.NONE, SkillB.GaleDance.lv(3), SkillC.HoneAtk.lv(3))
        createItem("エリーゼ（夏）", 3, WeaponType.GTOME, MoveType.INFANTRY, "Elise (Summer)", 5, 17, 10, 8, 3, 6, 4, 8, 8, 3, 5,
                Weapon.HibiscusTome2, Assist.RallyAtkRes, null, SkillA.SpdRes.lv(2), Skill.NONE, SkillC.GTomeValor.lv(3))
        createItem("カミラ（春）", 3, WeaponType.GTOME, MoveType.FLIER, "Camilla (Spring)", 5, 17, 9, 6, 8, 4, 6, 8, 5, 6, 3,
                Weapon.GreenEgg2, Assist.RallyAttack, null, SkillA.DefiantSpd.lv(3), SkillB.LiveForBounty, Skill.NONE)
        createItem("セシリア", 3, WeaponType.GTOME, MoveType.CAVALRY, "Cecilia", 3, 17, 8, 6, 5, 7, 5, 7, 5, 4, 6,
                Weapon.Gronnraven2, Assist.RallyResistance, null, SkillA.Attack.lv(3), SkillB.EscapeRoute.lv(3), Skill.NONE)
        createItem("セネリオ", 3, WeaponType.GTOME, MoveType.INFANTRY, "Soren", 5, 17, 7, 9, 4, 7, 5, 8, 7, 2, 6,
                Weapon.Rexcalibur2, null, Special.GrowingWind, Skill.NONE, SkillB.Watersweep.lv(3), SkillC.FortifyRes.lv(3))
        createItem("ソニア", 3, WeaponType.GTOME, MoveType.INFANTRY, "Sonya", 5, 17, 7, 7, 5, 8, 5, 8, 7, 1, 7,
                Weapon.DarkExcalibur, null, Special.Moonbow, SkillA.DeathBlow.lv(3), Skill.NONE, SkillC.ResPloy.lv(3))
        createItem("ディアドラ", 3, WeaponType.GTOME, MoveType.INFANTRY, "Deirdre", 5, 17, 9, 6, 3, 9, 5, 7, 6, 2, 8,
                Weapon.DivineNaga, Assist.ArdentSacrifice, null, Skill.NONE, SkillB.QuickRiposte.lv(3), SkillC.SpdPloy.lv(3))
        createItem("ボーイ", 3, WeaponType.GTOME, MoveType.INFANTRY, "Boey", 5, 19, 7, 5, 8, 5, 7, 6, 6, 7, 2,
                Weapon.Gronnowl2, null, Special.Ignis, SkillA.EarthBoost.lv(3), SkillB.Renewal.lv(3), Skill.NONE)
        createItem("マリク", 3, WeaponType.GTOME, MoveType.INFANTRY, "Merric", 4, 19, 7, 8, 6, 4, 7, 5, 7, 6, 3,
                Weapon.Excalibur, null, Special.GrowingWind, SkillA.Hp.lv(3), Skill.NONE, SkillC.SpurRes.lv(3))
        createItem("ユリア", 3, WeaponType.GTOME, MoveType.INFANTRY, "Julia", 5, 16, 9, 7, 4, 8, 6, 8, 5, 2, 7,
                Weapon.Naga, null, Special.DragonFang, SkillA.Resistance.lv(3), Skill.NONE, SkillC.BreathOfLife.lv(3))
        createItem("ルフレ（女）", 3, WeaponType.GTOME, MoveType.INFANTRY, "Robin(F)", 2, 18, 7, 7, 7, 5, 6, 6, 6, 6, 4,
                Weapon.Gronnwolf2, null, Special.Ignis, SkillA.DefiantRes.lv(3), SkillB.BTomeBreaker.lv(3), Skill.NONE)
        createItem("アサマ", 0, WeaponType.STAFF, MoveType.INFANTRY, "Azama", 3, 19, 4, 7, 8, 6, 7, 4, 5, 7, 5,
                Weapon.Pain, Assist.Martyr, Special.SolidEarthBalm, Skill.NONE, Skill.NONE, SkillC.ThreatenAtk.lv(3))
        createItem("ヴィオール", 0, WeaponType.BOW, MoveType.INFANTRY, "Virion", 3, 20, 7, 7, 7, 3, 8, 7, 7, 5, 1,
                Weapon.SilverBow2, null, Special.Astra, SkillA.DefiantRes.lv(3), SkillB.SealSpd.lv(3), Skill.NONE)
        createItem("エフィ", 0, WeaponType.BOW, MoveType.INFANTRY, "Faye", 5, 16, 6, 3, 4, 7, 8, 7, 6, 6, 7,
                Weapon.FiresweepBow2, null, Special.Noontime, Skill.NONE, SkillB.WingsOfMercy.lv(3), SkillC.BowExperience.lv(3))
        createItem("エリーゼ", 0, WeaponType.STAFF, MoveType.CAVALRY, "Elise", 5, 15, 8, 8, 4, 8, 3, 7, 7, 3, 7,
                Weapon.Gravity, Assist.Recover, Special.KindledFireBalm, Skill.NONE, SkillB.LiveToServe.lv(3), Skill.NONE)
        createItem("オリヴィエ（舞踏祭）", 0, WeaponType.DAGGER, MoveType.INFANTRY, "Olivia (Performing Arts)", 5, 15, 6, 8, 3, 4, 5, 6, 8, 2, 7,
                Weapon.DancersFan2, Assist.Dance, null, SkillA.DistantDef.lv(3), SkillB.BlazeDance.lv(3), Skill.NONE)
        createItem("ガイア", 0, WeaponType.DAGGER, MoveType.INFANTRY, "Gaius", 3, 18, 7, 10, 5, 4, 7, 6, 8, 4, 3,
                Weapon.RogueDagger2, Assist.RallySpeed, null, SkillA.DefiantAtk.lv(3), SkillB.Pass.lv(3), Skill.NONE)
        createItem("ガイア（夏）", 0, WeaponType.BOW, MoveType.INFANTRY, "Gaius (Summer)", 5, 17, 8, 9, 4, 6, 4, 6, 9, 3, 6,
                Weapon.RefreshingBolt2, null, Special.Astra, Skill.NONE, SkillB.Vantage.lv(3), SkillC.DefPloy.lv(3))
        createItem("カゲロウ", 0, WeaponType.DAGGER, MoveType.INFANTRY, "Kagero", 4, 16, 9, 8, 5, 6, 3, 8, 7, 4, 6,
                Weapon.PoisonDagger2, null, Special.Reprisal, SkillA.WardingBlow.lv(3), SkillB.DaggerBreaker.lv(3), Skill.NONE)
        createItem("クライネ", 0, WeaponType.BOW, MoveType.INFANTRY, "Clarisse", 5, 18, 7, 8, 6, 5, 5, 7, 8, 5, 3,
                Weapon.ClarissesBow2, null, Special.Glimmer, Skill.NONE, SkillB.PoisonStrike.lv(3), SkillC.ThreatenDef.lv(3))
        createItem("クラリーネ", 0, WeaponType.STAFF, MoveType.CAVALRY, "Clarine", 3, 16, 6, 9, 5, 7, 5, 5, 7, 4, 6,
                Weapon.Fear, Assist.Martyr, Special.SwiftWindsBalm, SkillA.Resistance.lv(3), Skill.NONE, Skill.NONE)
        createItem("クレイン", 0, WeaponType.BOW, MoveType.INFANTRY, "Klein", 4, 18, 9, 7, 5, 5, 6, 6, 8, 3, 5,
                Weapon.BraveBow2, null, Special.Glacies, SkillA.DeathBlow.lv(3), SkillB.QuickRiposte.lv(3), Skill.NONE)
        createItem("ゴードン", 0, WeaponType.BOW, MoveType.INFANTRY, "Gordin", 3, 19, 7, 6, 8, 4, 7, 7, 5, 7, 2,
                Weapon.BraveBow2, Assist.Shove, null, SkillA.Attack.lv(3), SkillB.Vantage.lv(3), Skill.NONE)
        createItem("サイゾウ", 0, WeaponType.DAGGER, MoveType.INFANTRY, "Saizo", 3, 17, 7, 8, 9, 3, 5, 6, 8, 7, 2,
                Weapon.SmokeDagger2, Assist.HarshCommand, null, Skill.NONE, SkillB.PoisonStrike.lv(3), SkillC.SpurSpd.lv(3))
        createItem("サクラ", 0, WeaponType.STAFF, MoveType.INFANTRY, "Sakura", 4, 17, 6, 8, 5, 8, 5, 6, 6, 5, 6,
                Weapon.Fear, Assist.Physic, Special.StillWaterBalm, Skill.NONE, Skill.NONE, SkillC.FortifyDef.lv(3))
        createItem("ジェニー", 0, WeaponType.STAFF, MoveType.INFANTRY, "Genny", 5, 17, 9, 6, 4, 8, 3, 8, 5, 4, 8,
                Weapon.Gravity, Assist.Physic, Special.HeavenlyLight, Skill.NONE, SkillB.WrathfulStaff.lv(3), Skill.NONE)
        createItem("ジャファル", 0, WeaponType.DAGGER, MoveType.INFANTRY, "Jaffar", 5, 17, 7, 9, 6, 5, 7, 5, 7, 5, 4,
                Weapon.DeathlyDagger, null, Special.Glimmer, SkillA.LifeAndDeath.lv(3), Skill.NONE, SkillC.ThreatenSpd.lv(3))
        createItem("ジョーカー", 0, WeaponType.DAGGER, MoveType.INFANTRY, "Jakob", 4, 17, 7, 9, 6, 5, 6, 6, 6, 5, 5,
                Weapon.SilverDagger2, Assist.RallyResistance, null, SkillA.Defense.lv(3), SkillB.Renewal.lv(3), Skill.NONE)
        createItem("ジョルジュ", 0, WeaponType.BOW, MoveType.INFANTRY, "Jeorge", 4, 18, 8, 8, 5, 5, 5, 7, 7, 5, 4,
                Weapon.Parthia, null, Special.BlazingFlame, Skill.NONE, SkillB.SealAtk.lv(3), SkillC.SpurSpd.lv(3))
        createItem("セーラ", 0, WeaponType.STAFF, MoveType.INFANTRY, "Serra", 3, 16, 6, 9, 4, 9, 4, 7, 6, 4, 7,
                Weapon.Absorb, Assist.Recover, Special.SwiftWindsBalm, Skill.NONE, Skill.NONE, SkillC.HoneAtk.lv(3))
        createItem("セツナ", 0, WeaponType.BOW, MoveType.INFANTRY, "Setsuna", 3, 18, 6, 9, 5, 6, 5, 6, 9, 4, 4,
                Weapon.AssassinsBow2, Assist.ReciprocalAid, null, SkillA.Hp.lv(3), SkillB.BowBreaker.lv(3), Skill.NONE)
        createItem("ゼロ", 0, WeaponType.BOW, MoveType.INFANTRY, "Niles", 3, 18, 6, 8, 4, 8, 5, 5, 8, 2, 8,
                Weapon.KillerBow2, null, Special.Iceberg, SkillA.WardingBlow.lv(3), Skill.NONE, SkillC.SpurRes.lv(3))
        createItem("タクミ", 0, WeaponType.BOW, MoveType.INFANTRY, "Takumi", 5, 18, 8, 7, 6, 5, 6, 7, 8, 5, 2,
                Weapon.FujinYumi, null, Special.Vengeance, SkillA.CloseCounter, Skill.NONE, SkillC.ThreatenSpd.lv(3))
        createItem("ティアモ（花嫁）", 0, WeaponType.BOW, MoveType.INFANTRY, "Cordelia (Bride)", 5, 17, 9, 9, 4, 5, 5, 8, 8, 3, 4,
                Weapon.CupidArrow2, Assist.RallyAtkSpd, null, Skill.NONE, SkillB.EscapeRoute.lv(3), SkillC.BreathOfLife.lv(3))
        createItem("ヒーニアス", 0, WeaponType.BOW, MoveType.INFANTRY, "Innes", 5, 16, 9, 8, 4, 7, 5, 7, 8, 1, 7,
                Weapon.Nidhogg, null, Special.Iceberg, SkillA.FortressRes.lv(3), SkillB.CancelAffinity.lv(3), Skill.NONE)
        createItem("フェリシア", 0, WeaponType.DAGGER, MoveType.INFANTRY, "Felicia", 3, 15, 6, 11, 3, 9, 5, 4, 8, 3, 8,
                Weapon.SilverDagger2, null, Special.Glacies, SkillA.Resistance.lv(3), Skill.NONE, SkillC.BreathOfLife.lv(3))
        createItem("プリシラ", 0, WeaponType.STAFF, MoveType.CAVALRY, "Priscilla", 4, 17, 7, 7, 4, 8, 5, 6, 6, 3, 7,
                Weapon.Panic, Assist.Rehabilitate, Special.StillWaterBalm, Skill.NONE, Skill.NONE, SkillC.SpurDef.lv(3))
        createItem("フレデリク（夏）", 0, WeaponType.DAGGER, MoveType.INFANTRY, "Frederick (Summer)", 5, 18, 8, 7, 6, 5, 6, 7, 7, 6, 2,
                Weapon.Seashell2, Assist.ArdentSacrifice, null, SkillA.ArmoredBlow.lv(3), SkillB.SealAtkSpd.lv(2), Skill.NONE)
        createItem("マシュー", 0, WeaponType.DAGGER, MoveType.INFANTRY, "Matthew", 3, 17, 6, 10, 6, 5, 7, 5, 7, 7, 2,
                Weapon.RogueDagger2, Assist.ReciprocalAid, null, Skill.NONE, SkillB.PoisonStrike.lv(3), SkillC.HoneSpd.lv(3))
        createItem("マリア", 0, WeaponType.STAFF, MoveType.INFANTRY, "Maria", 4, 17, 5, 8, 4, 10, 5, 6, 8, 3, 6,
                Weapon.Panic, Assist.Physic, Special.Miracle, Skill.NONE, Skill.NONE, SkillC.FortifyRes.lv(3))
        createItem("ミスト", 0, WeaponType.STAFF, MoveType.INFANTRY, "Mist", 5, 17, 8, 6, 5, 8, 6, 5, 6, 3, 8,
                Weapon.Slow, Assist.Recover, Special.Miracle, Skill.NONE, Skill.NONE, SkillC.SpurDefRes.lv(2))
        createItem("ラケシス", 0, WeaponType.STAFF, MoveType.INFANTRY, "Lachesis", 4, 17, 6, 8, 5, 8, 6, 8, 4, 4, 6,
                Weapon.Absorb, Assist.Physic, Special.SolidEarthBalm, Skill.NONE, Skill.NONE, SkillC.SpurRes.lv(3))
        createItem("リズ", 0, WeaponType.STAFF, MoveType.INFANTRY, "Lissa", 3, 17, 7, 6, 6, 8, 6, 5, 5, 6, 6,
                Weapon.Gravity, Assist.Rehabilitate, Special.KindledFireBalm, Skill.NONE, SkillB.Renewal.lv(3), Skill.NONE)
        createItem("リフ", 0, WeaponType.STAFF, MoveType.INFANTRY, "Wrys", 3, 18, 5, 6, 5, 10, 7, 5, 4, 4, 8,
                Weapon.Slow, Assist.Rehabilitate, Special.HeavenlyLight, Skill.NONE, SkillB.LiveToServe.lv(3), Skill.NONE)
        createItem("リン（花嫁）", 0, WeaponType.STAFF, MoveType.INFANTRY, "Lyn (Bride)", 5, 17, 6, 10, 6, 5, 6, 6, 7, 4, 5,
                Weapon.Candlelight, Assist.Rehabilitate, Special.SwiftWindsBalm, Skill.NONE, SkillB.DazzlingStaff.lv(3), Skill.NONE)
        createItem("リン（総選挙）", 0, WeaponType.BOW, MoveType.CAVALRY, "Lyn (Brave Heroes)", 5, 16, 7, 9, 5, 6, 5, 8, 8, 2, 6,
                Weapon.Mulagir, null, Special.DragonGaze, SkillA.SwiftSparrow.lv(2), SkillB.SacaesBlessing, SkillC.AtkSmoke.lv(3))
        createItem("ルセア", 0, WeaponType.STAFF, MoveType.INFANTRY, "Lucius", 4, 18, 6, 8, 3, 9, 5, 8, 6, 1, 8,
                Weapon.Pain, Assist.Martyr, Special.Miracle, SkillA.Hp.lv(3), Skill.NONE, Skill.NONE)
        createItem("レオ", 0, WeaponType.BOW, MoveType.INFANTRY, "Leon", 5, 17, 8, 6, 8, 5, 6, 8, 7, 6, 1,
                Weapon.SlayingBow2, null, Special.Ignis, SkillA.Speed.lv(3), SkillB.Guard.lv(3), Skill.NONE)
        createItem("レベッカ", 0, WeaponType.BOW, MoveType.INFANTRY, "Rebecca", 4, 18, 7, 8, 6, 5, 5, 6, 8, 3, 6,
                Weapon.SilverBow2, Assist.ArdentSacrifice, null, SkillA.DartingBlow.lv(3), SkillB.SealAtk.lv(3), Skill.NONE)

        createItem("ヘンリー（収穫祭）", 3, WeaponType.GTOME, MoveType.INFANTRY, "Henry (Trick or Defeat)", 5, 17, 9, 10, 4, 12, 5, 7, 7, 6, 7,
                Weapon.SpectralTome2, null, Special.Reprisal, Skill.NONE, SkillB.LiveForHonor, SkillC.ArmorMarch.lv(3))
        createItem("ジョーカー（収穫祭）", 0, WeaponType.BOW, MoveType.ARMORED, "Jakob (Trick or Defeat)", 5, 20, 9, 6, 9, 8, 6, 8, 4, 7, 7,
                Weapon.MonstrousBow2, null, null, SkillA.BracingBlow.lv(2), SkillB.WaryFighter.lv(3), Skill.NONE)
        createItem("ノノ（収穫祭）", 1, WeaponType.RTOME, MoveType.FLIER, "Nowi (Trick or Defeat)", 5, 17, 8, 6, 5, 8, 4, 8, 8, 3, 5,
                Weapon.Grimoire, Assist.Reposition, null, SkillA.AtkResBond.lv(3), SkillB.LiveForBounty, SkillC.HoneAtk.lv(3))
        createItem("サクラ（収穫祭）", 0, WeaponType.DAGGER, MoveType.INFANTRY, "Sakura (Trick or Defeat)", 5, 16, 8, 8, 4, 8, 4, 7, 8, 1, 8,
                Weapon.KittyPaddle2, null, Special.Glacies, SkillA.WardingStance.lv(3), SkillB.Guard.lv(3), SkillC.DaggerValor.lv(3))

        createItem("ドルカス", 3, WeaponType.AXE, MoveType.INFANTRY, "Dorcas", 5, 19, 9, 6, 9, 5, 8, 8, 4, 8, 5,
                Weapon.StoutTomahawk, null, Special.DragonGaze, SkillA.FierceStance.lv(3), SkillB.QuickRiposte.lv(3), SkillC.InfantryPulse.lv(3))
        createItem("ルーテ", 2, WeaponType.BTOME, MoveType.INFANTRY, "Lute", 5, 16, 10, 8, 3, 8, 4, 8, 7, 2, 8,
                Weapon.WeirdingTome, Assist.RallyAtkRes, null, SkillA.HpRes.lv(2), Skill.NONE, SkillC.ResPloy.lv(3))
        createItem("ワユ", 1, WeaponType.SWORD, MoveType.INFANTRY, "Mia", 5, 16, 8, 12, 6, 6, 6, 7, 9, 6, 5,
                Weapon.ResoluteBlade, null, Special.Luna, SkillA.FlashingBlade.lv(3), SkillB.Vantage.lv(3), Skill.NONE)

        createItem("ヨシュア", 1, WeaponType.SWORD, MoveType.INFANTRY, "Joshua", 5, 18, 7, 9, 8, 6, 6, 7, 8, 6, 6,
                Weapon.Audhulma, null, Special.Moonbow, SkillA.CloseDef.lv(3), SkillB.Windsweep.lv(3), Skill.NONE)
        createItem("フィヨルム", 2, WeaponType.LANCE, MoveType.INFANTRY, "Fjorm", 5, 17, 8, 7, 8, 8, 6, 6, 7, 6, 8,
                Weapon.Leiptr, null, Special.IceMirror, SkillA.AtkResBond, SkillB.ShieldPulse.lv(3), SkillC.DriveAtk.lv(2))
        createItem("シャラ", 3, WeaponType.GTOME, MoveType.INFANTRY, "Rhajat", 5, 17, 9, 8, 4, 7, 5, 8, 8, 4, 4,
                Weapon.KeenGronnwolf2, Assist.RallyAtkDef, null, SkillA.DistantDef, Skill.NONE, SkillC.SavageBlow.lv(3))
        createItem("シノノメ", 2, WeaponType.LANCE, MoveType.INFANTRY, "Shiro", 5, 19, 9, 6, 9, 5, 6, 8, 7, 8, 4,
                Weapon.BrightNaginata, Assist.Swap, null, SkillA.SteadyStance.lv(3), Skill.NONE, SkillC.DefTactic.lv(3))
        createItem("ジークベルト", 1, WeaponType.SWORD, MoveType.CAVALRY, "Siegbert", 5, 19, 8, 9, 7, 3, 6, 8, 8, 7, 2,
                Weapon.DarkGreatsword, null, Special.DragonFang, SkillA.DeathBlow.lv(3), Skill.NONE, SkillC.AtkTactic.lv(3))
        createItem("ソレイユ", 1, WeaponType.SWORD, MoveType.INFANTRY, "Soleil", 5, 18, 10, 9, 6, 5, 5, 9, 8, 6, 5,
                Weapon.FiresweepSword2, null, Special.BlazingWind, SkillA.DartingBlow.lv(3), Skill.NONE, SkillC.DriveRes.lv(2))

        createItem("クロム（冬）", 3, WeaponType.AXE, MoveType.ARMORED, "Chrom (Winter's Envoy)", 5, 25, 12, 4, 9, 5, 8, 9, 3, 8, 7,
                Weapon.SackOGifts2, Assist.Pivot, null, SkillA.BrazenAtkDef.lv(3), SkillB.WaryFighter.lv(3), Skill.NONE)
        createItem("リズ（冬）", 3, WeaponType.AXE, MoveType.ARMORED, "Lissa (Winter's Envoy)", 5, 21, 9, 8, 9, 8, 6, 7, 6, 8, 8,
                Weapon.Handbell2, null, Special.Bonfire, Skill.NONE, SkillB.BoldFighter, SkillC.FortifyArmor)
        createItem("ルフレ（冬）", 2, WeaponType.LANCE, MoveType.ARMORED, "Robin (M) (Winter's Envoy)", 5, 23, 9, 8, 9, 6, 6, 8, 8, 8, 5,
                Weapon.Tannenboom2, Assist.ReciprocalAid, Special.BlazingWind, SkillA.BrazenAtkSpd.lv(3), Skill.NONE, SkillC.ArmorMarch.lv(3))
        createItem("サーリャ（冬）", 1, WeaponType.RTOME, MoveType.ARMORED, "Tharja (Winter's Envoy)", 5, 19, 10, 5, 8, 10, 7, 7, 2, 8, 8,
                Weapon.Candelabra2, null, Special.Iceberg, SkillA.CloseCounter, SkillB.VengefulFighter.lv(3), SkillC.RTomeValor.lv(3))
    }

    fun createItem(
            name: String = "",
            color: Int = 0,
            weaponType: WeaponType = WeaponType.SWORD,
            moveType: MoveType = MoveType.INFANTRY,
            usName: String = "",
            minRarity: Int = 0,
            hp: Int = 0,
            atk: Int = 0,
            spd: Int = 0,
            def: Int = 0,
            res: Int = 0,
            hpgrowth: Int = 0,
            atkgrowth: Int = 0,
            spdgrowth: Int = 0,
            defgrowth: Int = 0,
            resgrowth: Int = 0,
            weapon: Weapon? = null,
            assist: Assist? = null,
            special: Special? = null,
            //本当はSkill分けたいのだがNONEやLappedSkillをうまく扱えない。いっそSkillsに戻すか？
            aSkill: Skill = Skill.NONE,
            bSkill: Skill = Skill.NONE,
            cSkill: Skill = Skill.NONE
    ) {
        val item = BaseHero(color, weaponType, moveType, minRarity, name, usName, hp, atk, spd, def, res, hpgrowth, atkgrowth, spdgrowth, defgrowth, resgrowth, weapon ?: Skill.NONE, assist ?: Skill.NONE, special ?: Skill.NONE, aSkill, bSkill, cSkill)
        ITEMS.add(item)
        ITEMMAP.put(item.name, item)
        ITEMMAP.put(item.usName, item)
    }

}