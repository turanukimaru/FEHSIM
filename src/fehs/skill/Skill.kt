package jp.blogspot.turanukimaru.fehs.skill

import jp.blogspot.turanukimaru.fehs.*

/**
 * スキルのインタフェースと武器・スキルで共通に使われる効果
 */
interface Skill {
    /**
     * レベル
     */
    val level: Int get() = 0
    /**
     * スキルタイプ。錬成武器とかは別タイプになるので結構細かい
     */
    val type: SkillType get() = SkillType.NONE
    /**
     * Nameとほぼ同じ。昔は英語直だったけど今はNameクラスがあるからこれもう要らないか…？
     */
    val value: String get() = ""
    /**
     * ローカル名
     */
    val jp: Name get() = Name.NONE
    /**
     * 最大レベル。スキル一覧を作る際に参照する
     */
    val maxLevel: Int get() = 0
    /**
     * 貫通効果
     */
    val mitMod: Int get() = 0
    /**
     * 固定値だけど他の値を取ることは今のところない
     */
    val offMlt: Int get() = 10
    /**
     * 守備魔防を減少させる％
     */
    val penetrate: Int get() = 0
    /**
     * 奥義が発動した場合に能力値を参照してダメージを増加させる関数
     */
    val stateDamage: (BattleUnit) -> Int get() = { _ -> 0 }
    /**
     * 奥義が発動した場合にHPが回復する％。名前が悪いな。
     */
    val heal: Int get() = 0
    /**
     * 前提条件となるひとつ前のスキル。
     */
    val preSkill: Skill get() = Skill.NONE

    val effectiveAgainstMoveType: Array<MoveType> get() = arrayOf()
    val effectiveAgainstWeaponType: Array<WeaponType> get() = arrayOf()

    /**
     * nullおぶじぇくと。そうかNoneからNone参照するときはthisでいいのか
     */
    class None : Skill {
        override val preSkill: Skill get() = this
    }

    companion object {
        /**
         * nullおぶじぇくと
         */
        val NONE = None()
    }

    /**
     * 名称
     */
    fun localeName(locale: Locale): String = jp.localeName(locale)

    /**
     * 戦闘時の効果。基本的にunitの能力値を上下したり
     */
    fun bothEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int = level): BattleUnit = battleUnit

    /**
     * 攻撃時の効果。基本的にunitの能力値を上下したり
     */
    fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int = level): BattleUnit = battleUnit

    /**
     * 反撃時の効果
     */
    fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int = level): BattleUnit = battleUnit

    /**
     * 攻撃時の効果。基本的にunitの能力値が上下した後参照したいとき
     */
    fun effectedAttackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int = level): BattleUnit = battleUnit

    /**
     * 反撃時の効果。基本的にunitの能力値が上下した後参照したいとき
     */
    fun effectedCounterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int = level): BattleUnit = battleUnit

    /**
     * 攻撃時の効果。基本的にunitの能力値を上下したり攻撃の順番を変える
     */
    fun attackPlan(fightPlan: FightPlan, lv: Int = level): FightPlan = fightPlan

    /**
     * 反撃時の効果として用意したけどuni内に攻撃側かどうかが入ってるので削除するべきか
     */
    fun counterPlan(fightPlan: FightPlan, lv: Int = level): FightPlan = fightPlan

    /**
     * ダメージ減少。連撃防御
     */
    fun prevent(battleUnit: BattleUnit, damage: Int, source: BattleUnit, results: List<AttackResult>, lv: Int = level): Int = damage

    /**
     * ダメージ減少。奥義や連撃防御.奥義が2回発動するようなことになりませんように・・・
     */
    fun specialPrevent(battleUnit: BattleUnit, damage: Int, source: BattleUnit, lv: Int = level): Pair<Int, Skill> = Pair(damage, Skill.NONE)

    /**
     * 奥義発動時の追加効果。ほぼダメージ＋１０のスキル用
     */
    fun specialTriggered(battleUnit: BattleUnit, damage: Int): Int = damage

    /**
     * 軽減奥義発動時の追加効果。楯の鼓動用。↑と分けたのは軽減奥義＋わとうの時にダメージが増えてしまうから…
     */
    fun specialPreventTriggered(battleUnit: BattleUnit, damage: Int): Int = damage

    /**
     * ほぼ奥義専用。攻撃時のダメージ計算。デフォルトで奥義なしのダメージ
     */
    fun damage(damage: Int, prevent: Int): Int = HandmaidMath.max(damage - prevent, 0) * offMlt / 10

    /**
     * ほぼ奥義専用だったがダメージ吸収量計算。ただ太陽の腕輪がいつ切り捨てるかが違いそうな気がするな…持ってないからわからないけど…
     */
    fun absorb(battleUnit: BattleUnit, target: BattleUnit, damage: Int) = battleUnit.heal(damage * heal / 100)

    /**
     * 装備時の能力値変化
     */
    fun equip(armedHero: ArmedHero, lv: Int = this.level): ArmedHero {
        if (type.isWeapon) {
            armedHero.atkEqp += lv
        }
        return armedHero
    }

    /**
     * ターン開始時。鼓舞や自己バフ
     */
    fun turnStart(battleUnit: BattleUnit, lv: Int = level): BattleUnit = battleUnit

    /**
     * 先頭終了後のダメージとかバフとか。画面にエフェクトを出す処理を追加する必要があるな
     */
    fun afterFightEffect(battleUnit: BattleUnit, lv: Int = level): BattleUnit = battleUnit

    /**
     * スキルによるダメージ軽減のあとそれをどうするか。氷鏡専用
     */
    fun preventedDamage(battleUnit: BattleUnit, damage: Int = 0, lv: Int = level): BattleUnit = battleUnit

    //ここからスキル効果
    /**
     *  覚醒。   試しに作ったけど〇〇の覚醒ってターン開始時効果だから今は要らなかったんじゃ・・・？
     */
    fun defiantAtk(battleUnit: BattleUnit, lv: Int): BattleUnit {
        if (battleUnit.hp <= battleUnit.armedHero.maxHp / 2) battleUnit.buffAtk(lv * 2 + 1)
        return battleUnit
    }

    /**
     *  覚醒。
     */
    fun defiantSpd(battleUnit: BattleUnit, lv: Int): BattleUnit {
        if (battleUnit.hp <= battleUnit.armedHero.maxHp / 2) battleUnit.buffSpd(lv * 2 + 1)
        return battleUnit
    }

    /**
     *  覚醒。
     */
    fun defiantDef(battleUnit: BattleUnit, lv: Int): BattleUnit {
        if (battleUnit.hp <= battleUnit.armedHero.maxHp / 2) battleUnit.buffDef(lv * 2 + 1)
        return battleUnit
    }

    /**
     *  覚醒。
     */
    fun defiantRes(battleUnit: BattleUnit, lv: Int): BattleUnit {
        if (battleUnit.hp <= battleUnit.armedHero.maxHp / 2) battleUnit.buffRes(lv * 2 + 1)
        return battleUnit
    }

    /**
     *  戦闘時のみ上昇。
     */
    fun blowAtk(battleUnit: BattleUnit, lv: Int): BattleUnit {
        battleUnit.atkEffect += lv
        return battleUnit
    }

    /**
     *  戦闘時のみ上昇。
     */
    fun blowSpd(battleUnit: BattleUnit, lv: Int): BattleUnit {
        battleUnit.spdEffect += lv
        return battleUnit
    }

    /**
     *  戦闘時のみ上昇。
     */
    fun blowDef(battleUnit: BattleUnit, lv: Int): BattleUnit {
        battleUnit.defEffect += lv
        return battleUnit
    }

    /**
     *  戦闘時のみ上昇。
     */
    fun blowRes(battleUnit: BattleUnit, lv: Int): BattleUnit {
        battleUnit.resEffect += lv
        return battleUnit
    }

    /**
     *  近距離防御
     */
    fun closeDef(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit {
        if (enemy.armedHero.baseHero.weaponType.range == 1) {
            battleUnit.defEffect += lv
            battleUnit.resEffect += lv
        }
        return battleUnit
    }

    /**
     * 遠距離防御
     */
    fun distantDef(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit {
        if (enemy.armedHero.baseHero.weaponType.range == 2) {
            battleUnit.defEffect += lv
            battleUnit.resEffect += lv
        }
        return battleUnit
    }

    /**
     * 殺し
     */
    fun weaponBreaker(battleUnit: BattleUnit, enemy: BattleUnit, weapon: WeaponType, lv: Int): BattleUnit {
        log("HP:${battleUnit.hp}")
        log("threashold:${battleUnit.armedHero.maxHp * (lv * 20 - 10) / 100}")
        if ((battleUnit.hp >= battleUnit.armedHero.maxHp * (lv * 20 - 10) / 100) && enemy.armedHero.baseHero.weaponType == weapon) {
            battleUnit.followupable = true
            enemy.antiFollowup = true
        }
        return battleUnit
    }

    /**
     * 色固定殺し
     */
    fun weaponBreaker(battleUnit: BattleUnit, enemy: BattleUnit, weapon: WeaponType, lv: Int, color:Int): BattleUnit {
        log("HP:${battleUnit.hp}")
        log("threashold:${battleUnit.armedHero.maxHp * (lv * 20 - 10) / 100}")
        if ((battleUnit.hp >= battleUnit.armedHero.maxHp * (lv * 20 - 10) / 100) && enemy.armedHero.baseHero.weaponType == weapon && enemy.armedHero.baseHero.color == color) {
            battleUnit.followupable = true
            enemy.antiFollowup = true
        }
        return battleUnit
    }

    /**
     * 生命の
     */
    fun boostDef(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit {
        if (battleUnit.hp - enemy.hp >= 3) {
            battleUnit.defEffect += lv
        }
        return battleUnit
    }

    /**
     * 生命の
     */
    fun boostSpd(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit {
        if (battleUnit.hp - enemy.hp >= 3) {
            battleUnit.spdEffect += lv
        }
        return battleUnit
    }

    /**
     * 生命の
     */
    fun boostAtk(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit {
        if (battleUnit.hp - enemy.hp >= 3) {
            battleUnit.atkEffect += lv
        }
        return battleUnit
    }

    /**
     * 生命の
     */
    fun boostRes(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit {
        if (battleUnit.hp - enemy.hp >= 3) {
            battleUnit.resEffect += lv
        }
        return battleUnit
    }

    /**
     * 獅子奮迅
     */
    fun fury(armedHero: ArmedHero, lv: Int): ArmedHero {
        armedHero.atkEqp += lv
        armedHero.spdEqp += lv
        armedHero.defEqp += lv
        armedHero.resEqp += lv
        return armedHero
    }

    /**
     * 死線
     */
    fun lifeAndDeath(armedHero: ArmedHero, lv: Int): ArmedHero {
        armedHero.atkEqp += lv
        armedHero.spdEqp += lv
        armedHero.defEqp -= lv
        armedHero.resEqp -= lv
        return armedHero
    }

    /**
     * ログ出力。普段はコメントアウトされてて何もしないけど。
     */
    fun log(s: Any) {
//        println(s)
    }

    /**
     * 能力値上昇
     */
    fun equipHp(armedHero: ArmedHero, lv: Int): ArmedHero {
        armedHero.hpEqp += lv
        return armedHero
    }

    /**
     * 能力値上昇
     */
    fun equipAtk(armedHero: ArmedHero, lv: Int): ArmedHero {
        armedHero.atkEqp += lv
        return armedHero
    }

    /**
     * キラー系カウント-1
     */
    fun equipKiller(armedHero: ArmedHero, lv: Int): ArmedHero {
        armedHero.atkEqp += lv
        armedHero.reduceSpecialCooldown += 1
        return armedHero
    }

    /**
     * 能力値上昇
     */
    fun equipSpd(armedHero: ArmedHero, lv: Int): ArmedHero {
        armedHero.spdEqp += lv
        return armedHero
    }

    /**
     * 能力値上昇
     */
    fun equipDef(armedHero: ArmedHero, lv: Int): ArmedHero {
        armedHero.defEqp += lv
        return armedHero
    }

    /**
     * 能力値上昇
     */
    fun equipRes(armedHero: ArmedHero, lv: Int): ArmedHero {
        armedHero.resEqp += lv
        return armedHero
    }

    /**
     * 特効
     */
    fun effectiveAgainst(moveType: MoveType, battleUnit: BattleUnit, enemy: BattleUnit): BattleUnit {
        if (enemy.armedHero.baseHero.moveType == moveType) {
            battleUnit.effectiveAgainst = EffectiveAgainst.valueOfMoveType(moveType)
        }
        return battleUnit
    }

    /**
     * 特効
     */
    fun effectiveAgainst(weaponType: WeaponType, battleUnit: BattleUnit, enemy: BattleUnit): BattleUnit {
        if (enemy.armedHero.baseHero.weaponType == weaponType) {
            battleUnit.effectiveAgainst = EffectiveAgainst.valueOfWeaponType(weaponType)
        }
        return battleUnit
    }

    /**
     * 魔法特効
     */
    fun effectiveAgainstMagic(battleUnit: BattleUnit, enemy: BattleUnit): BattleUnit {
        if (enemy.armedHero.isMagicWeapon()) {
            battleUnit.effectiveAgainst = EffectiveAgainst.valueOfWeaponType(enemy.armedHero.baseHero.weaponType)
        }
        return battleUnit
    }

    /**
     * 2回攻撃
     */
    fun doubleAttack(battleUnit: BattleUnit): BattleUnit {
        battleUnit.doubleAttack = true
        return battleUnit
    }

    /**
     * 相性激化
     */
    fun colorAdvantage(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit {
        battleUnit.colorAdvantageLevel = lv
        return battleUnit
    }

    /**
     * 待ち伏せ
     */
    fun vantage(fightPlan: FightPlan, lv: Int): FightPlan {
        if (fightPlan.target.hp <= fightPlan.target.armedHero.maxHp * (25 * lv) / 100) {
            fightPlan.plan.remove(fightPlan.firstCounter)
            fightPlan.plan.add(0, fightPlan.firstCounter)
        }
        return fightPlan
    }

    /**
     * 追撃不可.薙ぎとかで自分の追撃を消す用。殺し持ってても追撃が出ないという事でいいのかな？同時には持てないか？
     */
    fun noFollowupAttack(fightPlan: FightPlan): FightPlan {
        fightPlan.plan.remove(fightPlan.secondAttack)
        return fightPlan
    }

    /**
     * 追撃
     */
    fun followupable(battleUnit: BattleUnit, lv: Int): BattleUnit {
        if (battleUnit.hp >= battleUnit.armedHero.maxHp * (100 - 10 * lv) / 100) {
            log(battleUnit.armedHero.name + " followapable")
            battleUnit.followupable = true
        }
        return battleUnit
    }

    /**
     * お互いに追撃不可
     */
    fun eachNofollowupable(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit {
        if (battleUnit.hp >= battleUnit.armedHero.maxHp * (110 - 20 * lv) / 100) {
            log(battleUnit.armedHero.name + " followapable")
            battleUnit.antiFollowup = true
            enemy.antiFollowup = true
        }
        return battleUnit
    }

    /**
     * 攻めたて
     */
    fun desperation(fightPlan: FightPlan, lv: Int): FightPlan {
        if (fightPlan.attacker.hp <= fightPlan.attacker.armedHero.maxHp * (25 * lv) / 100 && fightPlan.plan.contains(fightPlan.secondAttack)) {
            fightPlan.plan.remove(fightPlan.secondAttack)
            fightPlan.plan.add(fightPlan.plan.indexOf(fightPlan.firstAttack) + 1, fightPlan.secondAttack)
        }
        return fightPlan
    }

    /**
     * 刺し違え
     */
    fun brashAssault(battleUnit: BattleUnit, enemy: BattleUnit, percentile: Int): BattleUnit {
        if ((battleUnit.armedHero.baseHero.weaponType.range == enemy.armedHero.baseHero.weaponType.range || enemy.counterAllRange)
                && !enemy.cannotCcounter
                && (battleUnit.hp <= battleUnit.armedHero.maxHp * percentile / 100)) {
            battleUnit.followupable = true
        }
        return battleUnit
    }

    /**
     * 風薙ぎ
     */
    fun windsweep(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit {
        if (enemy.armedHero.baseHero.weaponType.isMaterial
                && (battleUnit.effectedPhantomSpd - enemy.effectedPhantomSpd >= 7 - lv * 2)) {
            enemy.cannotCcounter = true
        }
        return battleUnit
    }

    /**
     * 水薙ぎ
     */
    fun watersweep(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit {
        if (!enemy.armedHero.baseHero.weaponType.isMaterial
                && (battleUnit.effectedPhantomSpd - enemy.effectedPhantomSpd >= 7 - lv * 2)) {
            enemy.cannotCcounter = true
        }
        return battleUnit
    }

    /**
     * 幻惑
     */
    fun dazzling(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit {
        if (battleUnit.hp >= battleUnit.armedHero.maxHp * (150 - lv * 50)) {
            enemy.cannotCcounter = true
        }
        return battleUnit
    }

    /**
     * 天罰
     */
    fun wrathfulStaff(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit {
        if (battleUnit.hp >= battleUnit.armedHero.maxHp * (150 - lv * 50)) {
            battleUnit.wrathfulStaff = true
        }
        return battleUnit
    }

    /**
     * 全距離反撃
     */
    fun counterAllRange(battleUnit: BattleUnit): BattleUnit {
        battleUnit.counterAllRange = true
        return battleUnit
    }

    /**
     * 火薙ぎ
     */
    fun disableEachCounter(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit {
        battleUnit.cannotCcounter = true
        enemy.cannotCcounter = true
        return battleUnit
    }

    /**
     * ミルラのブレス
     */
    fun antiFollowupDef(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit {
        if (battleUnit.def - lv >= enemy.def) {
            enemy.antiFollowup = true
        }
        return battleUnit
    }

    /**
     * ブリュンヒルデ
     */
    fun antiFollowupRangedDef(battleUnit: BattleUnit, enemy: BattleUnit): BattleUnit {
        if (enemy.armedHero.effectiveRange == 2 && battleUnit.def > enemy.def) {
            enemy.antiFollowup = true
        }
        return battleUnit
    }

    /**
     * さかの加護
     */
    fun sacasBlessing(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit {
        val enemyType = enemy.armedHero.baseHero.weaponType
        if (enemyType == WeaponType.SWORD || enemyType == WeaponType.LANCE || enemyType == WeaponType.AXE) {
            enemy.cannotCcounter = true
        }
        return battleUnit
    }

    /**
     * ベオクの加護
     */
    fun beorcsBlessing(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit {
        val enemyType = enemy.armedHero.baseHero.moveType
        if (enemyType == MoveType.CAVALRY || enemyType == MoveType.FLIER) {
            enemy.antiBuffBonus = true
        }
        return battleUnit
    }

    /**
     * 2射程武器反撃不可
     */
    fun dullRanged(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit {
        val enemyType = enemy.armedHero.baseHero.weaponType
        if (enemyType == WeaponType.RTOME || enemyType == WeaponType.BTOME || enemyType == WeaponType.GTOME || enemyType == WeaponType.BOW || enemyType == WeaponType.DAGGER || enemyType == WeaponType.STAFF) {
            enemy.cannotCcounter = true
        }
        return battleUnit
    }

    /**
     * 装備の基本。武器の時はLevelを攻撃力に追加するので必ずSuperは呼ぶこと。…別建てにするかなあ
     */
    fun equip(armedHero: ArmedHero, type: SkillType): ArmedHero {
        if (type.isWeapon) {
            armedHero.atkEqp += level
        }
        return armedHero
    }

    /**
     * HP満タン時ボーナス
     */
    fun fullHpBonus(battleUnit: BattleUnit, i: Int): BattleUnit {
        if (battleUnit.hp == battleUnit.armedHero.maxHp) {
            battleUnit.atkEffect += 2
            battleUnit.spdEffect += 2
            battleUnit.defEffect += 2
            battleUnit.resEffect += 2
            if (battleUnit.side == SIDES.ATTACKER) {
                battleUnit.hpLossAtEndOfFight += 2
            }
        }
        return battleUnit
    }

    /**
     * すべてにボーナス。粉塵とか
     */
    fun allBonus(battleUnit: BattleUnit, i: Int): BattleUnit {
        battleUnit.atkEffect += i
        battleUnit.spdEffect += i
        battleUnit.defEffect += i
        battleUnit.resEffect += i
        return battleUnit
    }

    /**
     * 敵がHP満タンのときにボーナス
     */
    fun enemyFullHpBonus(battleUnit: BattleUnit, enemy: BattleUnit, i: Int): BattleUnit {
        if (enemy.hp == enemy.armedHero.maxHp) {
            battleUnit.atkEffect += i
            battleUnit.spdEffect += i
        }
        return battleUnit
    }

    /**
     * 勇者装備。攻撃＋と同時に速さ-5
     */
    fun equipBrave(armedHero: ArmedHero, lv: Int): ArmedHero {
        armedHero.atkEqp += lv
        armedHero.spdEqp -= 5
        return armedHero
    }

    /**
     * ブレード装備。攻撃＋と同時に奥義カウント＋１
     */
    fun equipBlade(armedHero: ArmedHero, lv: Int): ArmedHero {
        armedHero.atkEqp += lv
        armedHero.reduceSpecialCooldown -= 1
        return armedHero
    }

    /**
     * レイブン装備
     */
    fun equipRaven(battleUnit: BattleUnit): BattleUnit {
        battleUnit.colorlessAdvantage = true
        return battleUnit
    }

    /**
     * 戦闘時のブレードの効果。これEquipに統合してもいいか…
     */
    fun bladeEffect(battleUnit: BattleUnit): BattleUnit {
        battleUnit.blade = true
        return battleUnit
    }

    /**
     * HP満タン時に攻撃と速さボーナス
     */
    fun fullHpAtkSpdBonus(battleUnit: BattleUnit, i: Int): BattleUnit {
        if (battleUnit.hp == battleUnit.armedHero.maxHp) {
            battleUnit.atkEffect += 5
            battleUnit.spdEffect += 5
            if (battleUnit.side == SIDES.ATTACKER) {
                battleUnit.hpLossAtEndOfFight += 5
            }

        }
        return battleUnit
    }

    /**
     * HP満タン時にすべてにボーナス
     */
    fun fullHpAllBonus(battleUnit: BattleUnit, i: Int): BattleUnit {
        if (battleUnit.hp == battleUnit.armedHero.maxHp) {
            battleUnit.atkEffect += i
            battleUnit.spdEffect += i
            battleUnit.defEffect += i
            battleUnit.resEffect += i
            if (battleUnit.side == SIDES.ATTACKER) {
                battleUnit.hpLossAtEndOfFight += i
            }

        }
        return battleUnit
    }

    /**
     * HPが減っているときにすべてにボーナス
     */
    fun notFullHpAllBonus(battleUnit: BattleUnit, i: Int): BattleUnit {
        if (battleUnit.hp < battleUnit.armedHero.maxHp) {
            battleUnit.atkEffect += i
            battleUnit.spdEffect += i
            battleUnit.defEffect += i
            battleUnit.resEffect += i
        }
        return battleUnit
    }

    fun defHigherThanResBonus(battleUnit: BattleUnit, enemy: BattleUnit): BattleUnit {
        if (enemy.def - 5 >= enemy.res) battleUnit.atkEffect += 7
        return battleUnit
    }

    /**
     * 相手のデバフ分攻撃に追加。デバフボーナスに変数用意してるけどエフェクトに統合すべきかなあ
     */
    fun debuffBonus(battleUnit: BattleUnit, enemy: BattleUnit): BattleUnit {
        battleUnit.debuffBonus = enemy.atkDebuff + enemy.spdDebuff + enemy.defBuff + enemy.resDebuff
        return battleUnit
    }

    /**
     * 相手のバフ無効化
     */
    fun antiBuffBonus(battleUnit: BattleUnit, enemy: BattleUnit): BattleUnit {
        enemy.antiBuffBonus = true
        return battleUnit
    }

    /**
     * 相手が魔法の時にバフ無効か
     */
    fun antiMagicBuffBonus(battleUnit: BattleUnit, enemy: BattleUnit): BattleUnit {
        if (enemy.armedHero.baseHero.isMagicWeapon()) {
            enemy.antiBuffBonus = true
        }
        return battleUnit
    }

    /**
     * 相手が2射程武器の時バフ無効か
     */
    fun antiRangedWeaponBuffBonus(battleUnit: BattleUnit, enemy: BattleUnit): BattleUnit {
        if (enemy.armedHero.baseHero.weaponType.range == 2) {
            enemy.antiBuffBonus = true
        }
        return battleUnit
    }

    /**
     * 剛剣
     */
    fun heavyBlade(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit {
        if (battleUnit.effectedAtk - enemy.effectedAtk > lv) {
            battleUnit.accelerateAttackCooldown = 1
        }
        return battleUnit
    }

    /**
     * 柔剣
     */
    fun flashingBlade(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit {
        if (battleUnit.effectedPhantomSpd - enemy.effectedPhantomSpd > lv) {
            battleUnit.accelerateAttackCooldown = 1
        }
        return battleUnit
    }

    /**
     * フェリシアの氷皿の相手が魔法の時カウント追加
     */
    fun feliciasBlade(battleUnit: BattleUnit, enemy: BattleUnit): BattleUnit {
        if (enemy.armedHero.isMagicWeapon()) {
            //攻撃で儲けでも加速
            battleUnit.accelerateAttackCooldown = 1
            battleUnit.accelerateTargetCooldown = 1
        }
        return battleUnit
    }

    /**
     * 攻撃時カウント追加
     */
    fun accelerateAttackCooldown(battleUnit: BattleUnit, lv: Int): BattleUnit {
        if (battleUnit.hp * 10 >= battleUnit.armedHero.maxHp * (11 - lv)) {

            battleUnit.accelerateAttackCooldown = 1
        }
        return battleUnit
    }

    /**
     * 特効無効化
     */
    fun antiEffectiveAgainst(battleUnit: BattleUnit, enemy: BattleUnit, type: EffectiveAgainst): BattleUnit {
        if (enemy.effectiveAgainst == type) {
            enemy.effectiveAgainst = EffectiveAgainst.NONE
        }
        return battleUnit

    }

    /**
     * キャンセル
     */
    fun antiAccelerateCooldown(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit {
        if (battleUnit.hp * 10 >= battleUnit.armedHero.maxHp * (11 - lv)) {
            enemy.InflictCooldown = 1
        }
        return battleUnit
    }

    /**
     * ペイン.でも攻撃時効果は別に作るべきかなあ。攻撃時と参加時別だし死んだときに効果あるかどうかも別なんだよな
     */
    fun attackPain(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit {
        enemy.hpLossAtEndOfFight += lv
        return battleUnit
    }

    /**
     * 攻撃時のHP減少
     */
    fun attackHpLoss(battleUnit: BattleUnit, lv: Int): BattleUnit {
        battleUnit.hpLossAtEndOfFight += lv
        return battleUnit
    }

    /**
     * 攻撃時のHP回復
     */
    fun attackHeal(battleUnit: BattleUnit, lv: Int): BattleUnit {
        battleUnit.hpLossAtEndOfFight -= lv
        return battleUnit
    }

    /**
     * 大覚醒
     */
    fun brazenAtk(battleUnit: BattleUnit, lv: Int): BattleUnit {
        if (battleUnit.hp * 10 <= battleUnit.armedHero.maxHp * 8) {
            battleUnit.atkEffect += lv
        }
        return battleUnit
    }

    /**
     * 大覚醒
     */
    fun brazenSpd(battleUnit: BattleUnit, lv: Int): BattleUnit {
        if (battleUnit.hp * 10 <= battleUnit.armedHero.maxHp * 8) {
            battleUnit.spdEffect += lv
        }
        return battleUnit
    }

    /**
     * 大覚醒
     */
    fun brazenDef(battleUnit: BattleUnit, lv: Int): BattleUnit {
        if (battleUnit.hp * 10 <= battleUnit.armedHero.maxHp * 8) {
            battleUnit.defEffect += lv
        }
        return battleUnit
    }

    /**
     * 大覚醒
     */
    fun brazenRes(battleUnit: BattleUnit, lv: Int): BattleUnit {
        if (battleUnit.hp * 10 <= battleUnit.armedHero.maxHp * 8) {
            battleUnit.resEffect += lv
        }
        return battleUnit
    }

    /**
     * 怒り
     */
    fun wrath(battleUnit: BattleUnit, damage: Int, percentile: Int): Int = if (battleUnit.hp * 100 <= battleUnit.armedHero.maxHp * percentile) damage + 10 else damage

}