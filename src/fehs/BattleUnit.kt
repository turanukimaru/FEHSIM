package jp.blogspot.turanukimaru.fehs

import jp.blogspot.turanukimaru.fehs.skill.Skill

/**
 * ユニット（戦闘単位）。主にステータスを保持する
 */
data class BattleUnit(val armedHero: ArmedHero
                      , var hp: Int = 0
                      , var specialCount: Int = 0
                      , var atkBuff: Int = 0
                      , var spdBuff: Int = 0
                      , var defBuff: Int = 0
                      , var resBuff: Int = 0
                      , var atkDebuff: Int = 0
                      , var spdDebuff: Int = 0
                      , var defDebuff: Int = 0
                      , var resDebuff: Int = 0
        //Effectは紋章やスキルによる強化。これは合計していく.戦闘中と戦闘前って分けたほうが良いかなあ
                      , var atkEffect: Int = 0
                      , var spdEffect: Int = 0
                      , var defEffect: Int = 0
                      , var resEffect: Int = 0
                      , var side: SIDES = SIDES.NONE
//虚勢どうすんだこれ…
                      , var phantomSpeed: Int = 0


        //スキルの効果
        /**
         * 攻撃時スペシャル変動量＋
         */
                      , var accelerateAttackCooldown: Int = 0
        /**
         * ダメージを受けたときのスペシャル変動量＋
         */
                      , var accelerateTargetCooldown: Int = 0
        /**
         * スペシャル変動量-
         */
                      , var InflictCooldown: Int = 0

        /**
         * 速さを無視して追撃可能か
         */
                      , var followupable: Boolean = false
        /**
         * 速さを無視して追撃不可能か
         */
                      , var antiFollowup: Boolean = false
        /**
         * 勇者武器などで2回攻撃可能か
         */
                      , var doubleAttack: Boolean = false
        /**
         * 無色に対する相性補正があるか
         */
                      , var colorlessAdvantage: Boolean = false
        /**
         * 激化による相性計算。倍率
         */
                      , var colorAdvantageLevel: Int = 0
        /**
         * 激化無効化レベル 普通/無効/反転/1/0/-1
         */
                      , var antiColorAdvantage: Int = 1
        /**
         * 特効
         */
                      , var effectiveAgainst: EffectiveAgainst = EffectiveAgainst.NONE

        /**
         * 距離に関係なく反撃できるか
         */
                      , var counterAllRange: Boolean = false

        /**
         * 火凪などで反撃が封じられているか
         */
                      , var cannotCcounter: Boolean = false
        /**
         * buffが無効化されているか
         */
                      , var antiBuffBonus: Boolean = false
        /**
         * 戦闘後のHP減少
         */
                      , var hpLossAtEndOfFight: Int = 0

        /**
         * ブレードか
         */
                      , var blade: Boolean = false

        /**
         * 防御地形か
         */
                      , var defensiveTerrain: Boolean = false

        /**
         * 攻撃順変更スキルが無効か
         */
                      , var disableChangePlan: Boolean = false
        /**
         * 神罰が発動しているか
         */
                      , var wrathfulStaff: Boolean = false
        /**
         * 一回だけダメージを追加する。今のところ氷の聖鏡専用。
         */
                      , var oneTimeOnlyAdditionalDamage: Int = 0
        /**
         * debuffで強化されるダメージ量。今のところブリザード専用
         */
                      , var debuffBonus: Int = 0


) {
    /**
     * 戦闘時に相手をしている敵。お互いが入っている
     * ※DataClassがDataClassを参照するとtoStringが無限ループする！
     */
    var enemy: BattleUnit? = null
    //射程はともかく移動距離は制限を受ける可能性がある。いやそれを言うなら全てのステータスがそうであるが・・・これDelegateでできれば楽だと思ったけどBuff考えるとできないな
    val movableSteps: Int get() = armedHero.movableSteps
    val effectiveRange: Int get() = armedHero.effectiveRange
    val atk: Int get() = armedHero.atk + atkDebuff + if (!antiBuffBonus) atkBuff else 0
    val spd: Int get() = armedHero.spd + spdDebuff + if (!antiBuffBonus) spdBuff else 0
    val def: Int get() = armedHero.def + defDebuff + if (!antiBuffBonus) defBuff else 0
    val res: Int get() = armedHero.res + resDebuff + if (!antiBuffBonus) resBuff else 0
    // 他人や自分のスキルにより戦闘中のみ変化する能力値
    val effectedAtk: Int get() = atk + atkEffect
    val effectedSpd: Int get() = spd + spdEffect
    val effectedDef: Int get() = def + defEffect
    val effectedRes: Int get() = res + resEffect
    val effectedBladeAtk: Int get() = effectedAtk + if (blade && !antiBuffBonus) atkBuff + spdBuff + defBuff + resBuff else 0 + debuffBonus
    val effectedPhantomSpd: Int get() = effectedSpd + phantomSpeed

    /** マップ上で戦う際には必要になると思われる*/
    fun clearEffect() {
        atkEffect = 0
        spdEffect = 0
        defEffect = 0
        resEffect = 0
    }


    /**
     * コピー。data classなら書く必要はないのでいずれdata classにしてこれは削除したほうが良いかも
     */
//    fun clone(): BattleUnit {
//        return BattleUnit(armedHero, hitPoint, specialCount, atkBuff, spdBuff, defBuff, resBuff, atkDebuff, spdDebuff, defDebuff, resDebuff, atkEffect, spdEffect, defEffect, resEffect, side)
//    }

    fun buffAtk(buff: Int) {
        atkBuff = if (buff > atkBuff) buff else atkBuff
    }

    fun buffSpd(buff: Int) {
        spdBuff = if (buff > spdBuff) buff else spdBuff
    }

    fun buffDef(buff: Int) {
        defBuff = if (buff > defBuff) buff else defBuff
    }

    fun buffRes(buff: Int) {
        resBuff = if (buff > resBuff) buff else resBuff
    }


    /**
     * 戦闘効果。スキルの攻撃効果を再帰でなめて攻撃時効果を計算する。主に能力値変化
     */
    fun bothEffect(): BattleUnit = armedHero.bothEffect(this)

    /**
     * 攻撃側戦闘効果。スキルの攻撃効果を再帰でなめて攻撃時効果を計算する。主に能力値変化
     */
    fun attackEffect(): BattleUnit = armedHero.attackEffect(this)

    /**
     * 受け側戦闘効果。スキルの反撃効果を再帰でなめて受け時効果を計算する。主に能力値変化
     */
    fun counterEffect(): BattleUnit = armedHero.counterEffect(this)

    /**
     * 能力値計算後に適応する必要のある攻撃側戦闘効果。
     */
    fun effectedAttackEffect(): BattleUnit = armedHero.effectedAttackEffect(this)

    /**
     * 能力値計算後に適応する必要のある受け側戦闘効果
     */
    fun effectedCcounterEffect(): BattleUnit = armedHero.effectedCcounterEffect(this)

    fun afterFightEffect() {
        lossHp(hpLossAtEndOfFight)
        armedHero.afterFightEffect(this)
    }

    fun reducedDamage(damage: Int) {
        //初期化
        oneTimeOnlyAdditionalDamage = 0
        armedHero.reducedDamage(this, damage)
    }


    /**
     * 戦闘。スキルで戦闘時効果を計算したうえで実行しその結果を返す
     */
    fun fight(targetUnit: BattleUnit): List<AttackResult> {
        val source = this.copy()
        val target = targetUnit.copy()
        source.enemy = target
        target.enemy = source
        val fightPlan = fightPlan(source, target)
        return fightPlan.fight()
    }

    /**
     * 戦闘プラン.
     */
    fun fightPlan(battleUnit: BattleUnit, targetUnit: BattleUnit): FightPlan {
        //スキルのattackplan内で能力値の再計算すりゃいいか
        val effectedAttacker = battleUnit.bothEffect().attackEffect()
        val effectedTarget = targetUnit.bothEffect().counterEffect()
        return FightPlan(effectedAttacker.effectedAttackEffect(), effectedTarget.effectedCcounterEffect()).planning()
    }


    /**
     * 攻撃側戦闘プラン。スキルの攻撃プランを再帰でなめて攻撃時効果を計算する。主に行動順の制御
     */
    fun attackPlan(fightPlan: FightPlan): FightPlan = if (disableChangePlan) fightPlan else armedHero.attackPlan(fightPlan)

    /**
     * 受け側戦闘プラン。スキルの反撃プランを再帰でなめて受け時効果を計算する。主に行動順の制御
     */
    fun counterPlan(fightPlan: FightPlan): FightPlan = if (disableChangePlan) fightPlan else armedHero.counterPlan(fightPlan)

    fun fightAndAfterEffect(targetUnit: BattleUnit): List<AttackResult> {
        val result = fight(targetUnit)
        result.last().source.afterFightEffect()
        result.last().target.afterFightEffect()
        return result
    }
//    fun fightTest(target: BattleUnit): AttackResult {
//        val testUnit = this.clone()
//        val fightPlan = armedHero.fightPlan(testUnit, target)
//        //planで能力値は計算済みだからここは簡略化してもいいかなあ。でもウルヴァンで奥義関係なくダメージ減少してるんだよなあ
//        val dealDamage = Skill.NONE.damage(testUnit, target, 1)
//        val counterDamage = Skill.NONE.damage(target, testUnit, 1)
//        //試算はあとでいいか・・・
//        return
//
//    }

    /**
     * 攻撃。
     */
    fun attack(target: BattleUnit, results: List<AttackResult>): AttackResult {
        //planで能力値は計算済みだからここは簡略化してもいいかなあ。でもウルヴァンで奥義関係なくダメージ減少してるんだよなあ
        val damage = damage(target, results)

        //damageと一緒に奥義を飛ばせば効果も計算できるか？
        val preventedDamage = target.preventBySkill(damage.first, results)

        //氷鏡のによる追加。簡単に済んで良かった。
        target.reducedDamage(damage.first - preventedDamage.first)
        //スキルが発動していたら吸収効果を発動する。九州のないスキルは何も起こらない
        damage.second?.absorb(this, target, if (target.hp > preventedDamage.first) preventedDamage.first else target.hp)
        target.hp = if (target.hp > preventedDamage.first) {
            target.hp - preventedDamage.first
        } else {
            0
        }
        return AttackResult(this, target, preventedDamage.first, damage.second, preventedDamage.second)

    }

    fun damage(target: BattleUnit, results: List<AttackResult>): Pair<Int, Skill?> {
        //println("level / cooldown ${armedHero.special.level}  ${armedHero.reduceSpecialCooldown}")
        if (specialCount == armedHero.specialCoolDownTime) {
            val damage = armedHero.special.damage(this, target, results)
            specialCount = if (damage.second != null) 0 else specialCount
            return if (damage.second != null) Pair(damage.first + armedHero.skills.fold(0, { d, skill -> skill.specialTriggered(this, d) }), damage.second) else damage
        }
        //println("level / cooldown ${armedHero.special.level}  ${armedHero.reduceSpecialCooldown}")
        specialCount += if (accelerateAttackCooldown + 1 > InflictCooldown) accelerateAttackCooldown + 1 - InflictCooldown else 0
        specialCount = if (specialCount > armedHero.specialCoolDownTime) armedHero.specialCoolDownTime else specialCount
        //ここにレイプトがかかってくるのか・・・どうすっかなあこれ。
        return Skill.NONE.damage(this, target, results, null)
    }

    fun effectedPrevent(weaponType: SkillType) = if (weaponType == SkillType.REFINED_DRAGON && armedHero.baseHero.weaponType.range == 2) if (effectedDef < effectedRes) effectedDef else effectedRes
    else if (weaponType.weaponType!!.isMaterial) effectedDef else effectedRes

    fun halfByStaff(damage: Int): Int = damage - if (armedHero.baseHero.weaponType == WeaponType.STAFF && !wrathfulStaff) damage / 2 else 0
    /**
     * スキル・奥義によるダメージ減少.
     */
    fun preventByDefResTerrain(damage: Int, weaponType: SkillType, mitModPercent: Int = 0): Int =
            damage - effectedPrevent(weaponType) * (if (defensiveTerrain) 130 else 100) / 100 + (effectedPrevent(weaponType) * mitModPercent) / 100

    /**
     * スキル・奥義によるダメージ減少.
     */
    fun preventBySkill(damage: Int, results: List<AttackResult>): Pair<Int, Skill?> {
        val prevented = armedHero.skills.fold(damage, { d, skill -> skill.prevent(this, d, results) })

        if (specialCount == armedHero.specialCoolDownTime) {

            val specialPrevented = armedHero.special.specialPrevent(this, prevented)
            specialCount = if (specialPrevented.second != null) 0 else specialCount
            return specialPrevented
        }
        specialCount += if (accelerateTargetCooldown + 1 > InflictCooldown) accelerateTargetCooldown + 1 - InflictCooldown else 0
        specialCount = if (specialCount > armedHero.specialCoolDownTime) armedHero.specialCoolDownTime else specialCount
        return Pair(prevented, null)
    }

    /**
     * 通常攻撃。奥義や連撃防御が発動しないときの数字。
     */
    //   fun normalAttack(damage: Int, preventBySkill: Int, target: BattleUnit, results: List<AttackResult>): Pair<Int, String> {
    //       return Skill.NONE.damage(this, target, results, 0)
    //   }
    /**
     * 色の倍率と特効が乗った攻撃。
     */
    fun colorAdvantage(): Int {
        val colorDiff = enemy!!.armedHero.baseHero.color - armedHero.baseHero.color

        return if (colorlessAdvantage && enemy!!.armedHero.baseHero.color == 0) 1
        else if (enemy!!.colorlessAdvantage && armedHero.baseHero.color == 0) -1
        else if (enemy!!.armedHero.baseHero.color == 0 || armedHero.baseHero.color == 0 || colorDiff == 0) 0
        else if (colorDiff == -1 || colorDiff == 2) 1
        else if (colorDiff == 1 || colorDiff == -2) -1 else 0
    }

    fun colorAttack(): Int {
        val advantageLevel = if (colorAdvantageLevel >= enemy!!.colorAdvantageLevel) colorAdvantageLevel else enemy!!.colorAdvantageLevel
        val colorAd = colorAdvantage()
        val colorPow = (if (advantageLevel == 0) 20 else (advantageLevel * 5 + 5) * antiColorAdvantage + 20) * colorAd


        //何らかの特効があったら
        val effectiveDamage = (effectedBladeAtk * if (effectiveAgainst != EffectiveAgainst.NONE) 15 else 10) / 10

        return effectiveDamage + effectiveDamage * colorPow / 100
    }

    fun heal(life: Int): Int {
        hp += life
        if (hp > armedHero.maxHp) {
            hp = armedHero.maxHp
        }
        return life
    }

    fun lossHp(damage: Int): Int {
        hp = when {
            hp <= 0 -> 0
            hp in 1..damage -> 1
            else -> hp - damage
        }
        return damage
    }


}
