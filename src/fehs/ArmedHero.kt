package jp.blogspot.turanukimaru.fehs

import jp.blogspot.turanukimaru.fehs.skill.RefinedWeapon
import jp.blogspot.turanukimaru.fehs.skill.Skill

/**
 * 装備状態のユニット。バフや紋章は保存用に残しているが使っているのはBattleUnitの方
 */
data class ArmedHero(
        val baseHero: BaseHero,
        val name: String = "",
        var baseWeapon: Skill = Skill.NONE,
        var refinedWeapon: Skill = Skill.NONE,
        var assist: Skill = Skill.NONE,
        var special: Skill = Skill.NONE,
        var aSkill: Skill = Skill.NONE,
        var bSkill: Skill = Skill.NONE,
        var cSkill: Skill = Skill.NONE,
        var seal: Skill = Skill.NONE,
        var baseRarity: Int = 5,
        var rarity: Int = 5,
        var levelBoost: Int = 0,
        var boon: BoonType = BoonType.NONE,
        var bane: BoonType = BoonType.NONE,
        val defensiveTerrain: Boolean = false,
        var atkBuff: Int = 0,
        var spdBuff: Int = 0,
        var defBuff: Int = 0,
        var resBuff: Int = 0,
        var atkSpur: Int = 0,
        var spdSpur: Int = 0,
        var defSpur: Int = 0,
        var resSpur: Int = 0,
        var adjacentUnits: Int = 0,
        var buffDebuffTrigger: Boolean = false
        //やんなきゃいけないんだけどあまりやりたくないなあ
//        var adjustHeroes: Int = 0,
//        var adjustEnemies: Int = 0
) {
    /**
     * 武器。錬成してるときは錬成武器
     */
    val weapon
        get() = if (refinedWeapon != Skill.NONE) RefinedWeapon.valueOfWeapon(baseWeapon)
                ?: baseWeapon else baseWeapon
    /**
     * スキルのリスト。戦闘時などにすべてのスキルをなめるのに使う。読み取り専用プロパティにすることで毎回その時のプロパティからリストを作れるはず
     * 個体が編集されているときは編集後のスキルを使う
     */
    val skills get() = listOfNotNull(weapon, refinedWeapon, assist, special, aSkill, bSkill, cSkill, seal)

    /**
     * 移動力。直接見てもいいか？いやアイテムやスキルの効果で変動するか。
     */
    val movableSteps: Int get() = baseHero.movableSteps

    /**
     * 攻撃可能範囲。直接見てもいいか？今のところは変動しないし。
     */
    val effectiveRange: Int get() = baseHero.effectiveRange

    /**
     * killer系武器での加速
     */
    var reduceSpecialCooldown = 0

    val growthHp get() = growths[rarity - 1][baseHero.hpGrowth + boonHp]
    val growthAtk get() = growths[rarity - 1][baseHero.atkGrowth + boonAtk]
    val growthSpd get() = growths[rarity - 1][baseHero.spdGrowth + boonSpd]
    val growthDef get() = growths[rarity - 1][baseHero.defGrowth + boonDef]
    val growthRes get() = growths[rarity - 1][baseHero.resGrowth + boonRes]

    /**
     * 能力値。下にあるのは計算用
     */
    val maxHp: Int get() = boonedHp + hpEqp + hpBoost + growthHp
    val atk: Int get() = boonedAtk + atkEqp + atkBoost + growthAtk
    val spd: Int get() = boonedSpd + spdEqp + spdBoost + growthSpd
    val def: Int get() = boonedDef + defEqp + defBoost + growthDef
    val res: Int get() = boonedRes + resEqp + resBoost + growthRes

    //装備で上昇した能力値
    var hpEqp: Int = 0
    var atkEqp: Int = 0
    var spdEqp: Int = 0
    var defEqp: Int = 0
    var resEqp: Int = 0

    //凸で上昇した能力値
    private var hpBoost: Int = 0
    private var atkBoost: Int = 0
    private var spdBoost: Int = 0
    private var defBoost: Int = 0
    private var resBoost: Int = 0
    /**
     * Score計算用のスキルとか抜きのパラメータ合計
     */
    val totalParam get() = boonedHp + boonedAtk + boonedSpd + boonedDef + boonedRes + growthHp + growthAtk + growthSpd + growthDef + growthRes
    val boonHp
        get() = when {
            boon == BoonType.HP -> 1; bane == BoonType.HP -> -1;else -> 0
        }
    val boonAtk
        get() = when {
            boon == BoonType.ATK -> 1; bane == BoonType.ATK -> -1;else -> 0
        }
    val boonSpd
        get() = when {
            boon == BoonType.SPD -> 1; bane == BoonType.SPD -> -1;else -> 0
        }
    val boonDef
        get() = when {
            boon == BoonType.DEF -> 1; bane == BoonType.DEF -> -1;else -> 0
        }
    val boonRes
        get() = when {
            boon == BoonType.RES -> 1; bane == BoonType.RES -> -1;else -> 0
        }

    private val boonedHp
        get() = baseHero.hitPoint + boonHp
    private val boonedAtk
        get() = baseHero.attack + boonAtk
    private val boonedSpd
        get() = baseHero.speed + boonSpd
    private val boonedDef
        get() = baseHero.defense + boonDef
    private val boonedRes
        get() = baseHero.resistance + boonRes
    /**
     * 得意不得意の能力値。最大が0なのはダミーデータ。アーダンの能力値↑は設定限界を超えるため
     */
    private val growths = baseHero.growths
    val specialCoolDownTime: Int get() = special.level - reduceSpecialCooldown
    val statusText: String get() = "H" + maxHp + " A" + atk + " S" + spd + " D" + def + " R" + res

    init {
        //名前が無いときは変更なしとして扱い、ベースになるクラスの装備を使う
        if (name.isEmpty()) {
            baseWeapon = baseHero.weapon
            assist = baseHero.assist
            special = baseHero.special
            aSkill = baseHero.aSkill
            bSkill = baseHero.bSkill
            cSkill = baseHero.cSkill
            refinedWeapon = baseHero.refinedWeapon
        }
        equip()
    }

    override fun toString(): String = "$name MaxHP:$maxHp , totalAtk:$atk , spd:$spd , def:$def , spd:$res ,weapon:$weapon, refinedWeapon:$refinedWeapon, assist:$assist, special:$special, skillA,$aSkill, skillB:$bSkill, skillC:$cSkill, seal:$seal, hpEqp:$hpEqp , atkEqp:$atkEqp , spdEqp:$spdEqp , defEqp:$defEqp , resEqp:$resEqp"

    val totalSp get() = skills.fold(0) { point, skill -> point + skill.sp() }
    //合計能力値はASkillだけだろうしこれでいいだろ
    val score get() = ((totalSp / 100) + aSkill.totalParam(totalParam) / 5 + levelBoost * 2 + rarity * rarity + 45 + 78 + 150) * 2//LV40固定でいいか

    /**
     * 戦闘効果。スキルの攻撃効果を再帰でなめて攻撃時効果を計算する。主に能力値変化
     */
    fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit): BattleUnit =
            skills.fold(battleUnit) { b, skill -> skill.fightEffect(b, enemy) }

    /**
     * 攻撃側戦闘効果。スキルの攻撃効果を再帰でなめて攻撃時効果を計算する。主に能力値変化
     */
    fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit): BattleUnit = skills.fold(battleUnit) { b, skill -> skill.attackEffect(b, enemy) }

    /**
     * 受け側戦闘効果。スキルの反撃効果を再帰でなめて受け時効果を計算する。主に能力値変化
     */
    fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit): BattleUnit = skills.fold(battleUnit) { b, skill -> skill.counterEffect(b, enemy) }

    /**
     * 能力値計算後に適応する必要のある攻撃側戦闘効果。
     */
    fun effectedAttackEffect(battleUnit: BattleUnit, enemy: BattleUnit): BattleUnit = skills.fold(battleUnit) { b, skill -> skill.effectedAttackEffect(b, enemy) }

    /**
     * 能力値計算後に適応する必要のある受け側戦闘効果
     */
    fun effectedCounterEffect(battleUnit: BattleUnit, enemy: BattleUnit): BattleUnit = skills.fold(battleUnit) { b, skill -> skill.effectedCounterEffect(b, enemy) }

    /**
     * 攻撃側戦闘プラン。スキルの攻撃プランを再帰でなめて攻撃時効果を計算する。主に行動順の制御
     */
    fun attackPlan(fightPlan: FightPlan): FightPlan = skills.fold(fightPlan) { fP, skill -> skill.attackPlan(fP) }

    /**
     * 受け側戦闘プラン。スキルの反撃プランを再帰でなめて受け時効果を計算する。主に行動順の制御
     */
    fun counterPlan(fightPlan: FightPlan): FightPlan = skills.fold(fightPlan) { fP, skill -> skill.counterPlan(fP) }

    /**
     * 攻撃側戦闘効果。スキルの攻撃効果を再帰でなめて攻撃時効果を計算する。主に能力値変化
     */
    fun afterFightEffect(battleUnit: BattleUnit): BattleUnit = skills.fold(battleUnit) { b, skill -> skill.afterFightEffect(b) }

    /**
     * スキルにより減少したダメージ。
     */
    fun reducedDamage(battleUnit: BattleUnit, damage: Int): BattleUnit = skills.fold(battleUnit) { b, skill -> skill.preventedDamage(b, damage) }

    /**
     * 攻撃が魔法か。魔法特効って杖にも効くのかな？
     */
    fun isMagicWeapon(): Boolean = baseHero.isMagicWeapon()

    /**
     * 武器と移動タイプが両方同じか。nullのときは無視する
     */
    fun have(weaponType: WeaponType?, moveType: MoveType?): Boolean = (weaponType == null || baseHero.weaponType == weaponType) && (moveType == null || baseHero.moveType == moveType)

    /**
     * レベル40＋Xのときの能力値計算
     */
    private fun lvUpStatus() {
        hpBoost = 0
        atkBoost = 0
        spdBoost = 0
        defBoost = 0
        resBoost = 0
        if (rarity < 5) {
            val sortedRarityBonus = listOf(Pair(baseHero.attack + 0.4f, BoonType.ATK), Pair(baseHero.speed + 0.3f, BoonType.SPD), Pair(baseHero.defense + 0.2f, BoonType.DEF), Pair(baseHero.resistance + 0.1f, BoonType.RES)).sortedBy { pair -> -pair.first }.plus(Pair(baseHero.hitPoint + 0.5f, BoonType.HP))
            (0 until (rarity - 1) * 5 / 2).forEach { i ->
                when (sortedRarityBonus[i % 5].second) {
                    BoonType.HP -> hpBoost++
                    BoonType.ATK -> atkBoost++
                    BoonType.SPD -> spdBoost++
                    BoonType.DEF -> defBoost++
                    BoonType.RES -> resBoost++
                    BoonType.NONE -> {
                    }
                }
            }
            hpBoost -= 2
            atkBoost -= 2
            spdBoost -= 2
            defBoost -= 2
            resBoost -= 2
        }
        val priority = listOf(Pair(baseHero.hitPoint + boonHp + 0.5f, BoonType.HP), Pair(baseHero.attack + boonAtk + 0.4f, BoonType.ATK), Pair(baseHero.speed + boonSpd + 0.3f, BoonType.SPD), Pair(baseHero.defense + boonDef + 0.2f, BoonType.DEF), Pair(baseHero.resistance + boonRes + 0.1f, BoonType.RES)).sortedBy { pair -> -pair.first }
        (0 until levelBoost * 2).forEach { i ->
            when (priority[i % 5].second) {
                BoonType.HP -> hpBoost++
                BoonType.ATK -> atkBoost++
                BoonType.SPD -> spdBoost++
                BoonType.DEF -> defBoost++
                BoonType.RES -> resBoost++
                BoonType.NONE -> {
                }
            }
        }
    }

    /**
     * 装備計算。レベル計算も含む
     */
    fun equip() {
        hpEqp = 0
        atkEqp = 0
        spdEqp = 0
        defEqp = 0
        resEqp = 0
        reduceSpecialCooldown = 0//ビルドが失敗してこの行だけ反映されないことがある。デバッガで確認すると０が入らないので加速する一方…
        lvUpStatus()
        skills.fold(this) { bc, skill -> skill.equip(bc) }
    }

    /**
     * LV1の時の能力値計算。武器以外装備してない・杖は武器も装備してないのでABCスキルは計算しない.デフォ武器違ったわ…
     */
    fun lv1equip(): BattleParam {
//        println("base:$baseRarity")
//        println("rarity:$rarity")
        //元のレアリティ保存
        val old = rarity
        rarity = if (baseRarity != 0) baseRarity else rarity
        hpEqp = 0
        atkEqp = 0
        spdEqp = 0
        defEqp = 0
        resEqp = 0
        reduceSpecialCooldown = 0
        //☆が5でないときは初期武器をさかのぼる。杖は最初武器を装備していない
        lvUpStatus()
        if (baseHero.weaponType == WeaponType.STAFF) Skill.NONE else (0 until (6 - rarity) / 2).fold(weapon) { w, _ -> w.preSkill.preSkill }.equip(this)
//        println("rarity:$rarity")
//        println("atkEqp:$atkEqp")
        val result = BattleParam(
                boonedHp + hpEqp + hpBoost,
                boonedAtk + atkEqp + atkBoost,
                boonedSpd + spdEqp + spdBoost,
                boonedDef + defEqp + defBoost,
                boonedRes + resEqp + resBoost
        )
        //計算しなおし
        rarity = old
//        println("result:$result")
        equip()
//        println("result:$result")
        return result
    }

    /**
     * 得意は1不得意は-1他は0にした能力値
     */
    fun goodStatus(): BattleParam =
            BattleParam(growths[rarity - 1][baseHero.hpGrowth + 1] + growths[rarity - 1][baseHero.hpGrowth - 1] - growths[rarity - 1][baseHero.hpGrowth] * 2,
                    growths[rarity - 1][baseHero.atkGrowth + 1] + growths[rarity - 1][baseHero.atkGrowth - 1] - growths[rarity - 1][baseHero.atkGrowth] * 2,
                    growths[rarity - 1][baseHero.spdGrowth + 1] + growths[rarity - 1][baseHero.spdGrowth - 1] - growths[rarity - 1][baseHero.spdGrowth] * 2,
                    growths[rarity - 1][baseHero.defGrowth + 1] + growths[rarity - 1][baseHero.defGrowth - 1] - growths[rarity - 1][baseHero.defGrowth] * 2,
                    growths[rarity - 1][baseHero.resGrowth + 1] + growths[rarity - 1][baseHero.resGrowth - 1] - growths[rarity - 1][baseHero.resGrowth] * 2)

    /**
     * 名称。DB保存名かロケールの名前
     */
    fun localeName(locale: Locale): String = if (name.isNotEmpty()) name else baseHero.heroName.localeName(locale)

    /**
     * 簡易ステータス。ロケールの扱いは本当に困るな.
     */
    fun statusSkillText(locale: Locale) = "HP" + maxHp + " A" + atk + " S" + spd + " D" + def + " R" + res + skills.fold(" ") { string, e -> string + e.localeName(locale) + " " }

    fun skillText(locale: Locale) = skills.fold("") { string, e -> string + e.localeName(locale) + " " }

}