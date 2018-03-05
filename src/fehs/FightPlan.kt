package jp.blogspot.turanukimaru.fehs

/**
 * 戦闘処理。スキルの効果などを保持する。関数型プログラミング的に書くときはこの中に戦闘時効果も格納して、スキルがFightPlanを返すときの戻り値を都度生成すればいいはず
 */
class FightPlan(val attacker: BattleUnit, val target: BattleUnit) {
    /**
     * 攻撃
     */
    val firstAttack = { pair: Pair<BattleUnit, BattleUnit>, results: List<AttackResult> ->
        pair.first.attack(pair.second, results)
    }
    /**
     * 反撃
     */
    val firstCounter = { pair: Pair<BattleUnit, BattleUnit>, results: List<AttackResult> ->
        pair.second.attack(pair.first, results).flip()
    }
    /**
     * 攻撃側追撃
     */
    val secondAttack = { pair: Pair<BattleUnit, BattleUnit>, results: List<AttackResult> ->
        pair.first.attack(pair.second, results)
    }
    /**
     * 反撃側追撃
     */
    val secondCounter = { pair: Pair<BattleUnit, BattleUnit>, results: List<AttackResult> ->
        pair.second.attack(pair.first, results).flip()
    }
    /**
     * 攻撃順
     */
    val plan = arrayListOf(firstAttack, firstCounter, secondAttack, secondCounter)
    /**
     * 戦闘結果のリスト。攻撃ごとにHPが減ったりダメージを表示するために途中経過も含む
     */
    val resultList = arrayListOf<AttackResult>()

    fun planning(): FightPlan {
        attacker.attackPlan(this)
        target.counterPlan(this)
        return this
    }

    /**
     * 戦闘
     */
    fun fight(): List<AttackResult> {
        buildFightPlan(attacker, target)
        var last = AttackResult(attacker, target, 0, null, null)
        //foldに書き直すべきかなあ
        for (fight in plan) {
            val s = last.source.copy()
            val t = last.target.copy()
            val result = fight(Pair(s, t), resultList)
            resultList.add(result)

            if (result.source.hp == 0 || result.target.hp == 0) {
                return resultList
            }
            last = result
        }
        return resultList
    }

    /**
     * 戦闘順序の最終調整。追撃の可否など
     */
    private fun buildFightPlan(attacker: BattleUnit, target: BattleUnit) {
        attacker.side = SIDES.ATTACKER
        target.side = SIDES.COUNTER
        //速度が足りないか追撃不可の時は追撃梨
//        log("attack")
//        log(attacker.armedHero.baseHero)
//        log(attacker)
//        log(attacker.effectedSpd)
        if ((attacker.followupable == attacker.antiFollowup && attacker.effectedSpd - target.effectedSpd < 5) || (!attacker.followupable && attacker.antiFollowup)) {

            plan.remove(secondAttack)
        }
//        log(target.armedHero.baseHero)
//        log(target)
//        log(target.effectedSpd)
        if ((target.followupable == target.antiFollowup && target.effectedSpd - attacker.effectedSpd < 5) || (!target.followupable && target.antiFollowup)) {

            plan.remove(secondCounter)
        }

        //射程外の時は全ての反撃を抜く
        if (attacker.armedHero.baseHero.weaponType.range != target.armedHero.baseHero.weaponType.range && !target.counterAllRange) {
            plan.remove(firstCounter)
            plan.remove(secondCounter)
        }
        //薙ぎもカウンターを抜く
        if (target.cannotCcounter) {
            plan.remove(firstCounter)
            plan.remove(secondCounter)
        }
        //勇者の時は2回攻撃
        if (attacker.doubleAttack) {

            plan.add(plan.indexOf(firstAttack), firstAttack)
            if (plan.indexOf(secondAttack) > 0) {
                plan.add(plan.indexOf(secondAttack), secondAttack)
            }
        }
    }
//
//    /**
//     * androidじゃないからLogは使えないわ・・・なんか用意しないと
//     */
//    fun log(text: Any) {
////        println(text)
//    }
}

