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
    val jp: SkillName get() = SkillName.NONE
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
     * 追加ダメージ関数。もうこうするしか…
     */
    val stateDamageEnemy: (BattleUnit) -> Int get() = { 0 }
    /**
     * 奥義が発動した場合に能力値を参照してダメージを増加させる関数
     */
    val stateDamage: (BattleUnit) -> Int get() = { 0 }
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

    val spType: SpType get() = SpType.NONE
    //デフォルトパラメータにすることでoverrideが機能する
    fun sp(lv: Int = level, s: SpType = spType) = s.sp(lv)

    /**
     * nullおぶじぇくと。そうかNoneからNone参照するときはthisでいいのか
     */
    class None : Skill {
        override val preSkill: Skill get() = this
        override fun toString(): String {
            return "NONE"
        }
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
    fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int = level): BattleUnit = battleUnit

    /**
     * 攻撃時の効果。基本的にunitの能力値を上下したり
     */
    fun attackEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int = level): BattleUnit = battleUnit

    /**
     * 反撃時の効果
     */
    fun counterEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int = level): BattleUnit = battleUnit

    /**
     * 戦闘時の効果。基本的にunitの能力値を上下したり
     */
    fun effectedFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int = level): BattleUnit = battleUnit

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
     * 能力値差による固定ダメージ。取り敢えず武器だけ見るので必要に応じて全部のスキルを通す
     */
    fun stateFlat(battleUnit: BattleUnit, enemy: BattleUnit): Int = 0

    /**
     * 装備時の能力値変化
     */
    fun equip(armedHero: ArmedHero, lv: Int = this.level): ArmedHero = armedHero

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

    /**
     * スキルによる能力値合計変動。
     */
    fun totalParam(n: Int): Int = n

//----------------------------------------------------------------------------------------------------------------
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
    fun atk(battleUnit: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        battleUnit.addSkillText(SkillText(s, SkillBaseText.Atk, lv.toString()))
        battleUnit.atkEffect += lv
        return battleUnit
    }

    /**
     *  戦闘時のみ上昇。
     */
    fun atkSpd(battleUnit: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        battleUnit.addSkillText(SkillText(s, SkillBaseText.AtkSpd, lv.toString()))
        battleUnit.atkEffect += lv
        battleUnit.spdEffect += lv
        return battleUnit
    }

    /**
     *  戦闘時のみ上昇。
     */
    fun atkDef(battleUnit: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        battleUnit.addSkillText(SkillText(s, SkillBaseText.AtkDef, lv.toString()))
        battleUnit.atkEffect += lv
        battleUnit.defEffect += lv
        return battleUnit
    }

    /**
     *  戦闘時のみ上昇。
     */
    fun atkRes(battleUnit: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        battleUnit.addSkillText(SkillText(s, SkillBaseText.AtkRes, lv.toString()))
        battleUnit.atkEffect += lv
        battleUnit.resEffect += lv
        return battleUnit
    }

    /**
     *  戦闘時のみ上昇。
     */
    fun spd(battleUnit: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        battleUnit.addSkillText(SkillText(s, SkillBaseText.Spd, lv.toString()))
        battleUnit.spdEffect += lv
        return battleUnit
    }

    /**
     *  戦闘時のみ上昇。
     */
    fun spdDef(battleUnit: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        battleUnit.addSkillText(SkillText(s, SkillBaseText.SpdDef, lv.toString()))
        battleUnit.spdEffect += lv
        battleUnit.defEffect += lv
        return battleUnit
    }

    /**
     *  戦闘時のみ上昇。
     */
    fun spdRes(battleUnit: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        battleUnit.addSkillText(SkillText(s, SkillBaseText.SpdRes, lv.toString()))
        battleUnit.spdEffect += lv
        battleUnit.resEffect += lv
        return battleUnit
    }

    /**
     *  戦闘時のみ上昇。
     */
    fun def(battleUnit: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        battleUnit.addSkillText(SkillText(s, SkillBaseText.Def, lv.toString()))
        battleUnit.defEffect += lv
        return battleUnit
    }

    /**
     *  戦闘時のみ上昇。
     */
    fun defRes(battleUnit: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        battleUnit.addSkillText(SkillText(s, SkillBaseText.DefRes, lv.toString()))
        battleUnit.defEffect += lv
        battleUnit.resEffect += lv
        return battleUnit
    }

    /**
     *  戦闘時のみ上昇。
     */
    fun res(battleUnit: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        battleUnit.addSkillText(SkillText(s, SkillBaseText.Res, lv.toString()))
        battleUnit.resEffect += lv
        return battleUnit
    }

    /**
     *  近距離防御
     */
    fun closeDef(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        if (enemy.armedHero.baseHero.weaponType.range == 1) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.DefRes, lv.toString()))
            battleUnit.defEffect += lv
            battleUnit.resEffect += lv
        }
        return battleUnit
    }

    /**
     *  近距離全強化
     */
    fun closeAllBonus(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        if (enemy.armedHero.baseHero.weaponType.range == 1) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.DefRes, lv.toString()))
            battleUnit.atkEffect += lv
            battleUnit.spdEffect += lv
            battleUnit.defEffect += lv
            battleUnit.resEffect += lv
        }
        return battleUnit
    }

    /**
     * 遠距離防御
     */
    fun distantDef(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        if (enemy.armedHero.baseHero.weaponType.range == 2) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.DefRes, lv.toString()))
            battleUnit.defEffect += lv
            battleUnit.resEffect += lv
        }
        return battleUnit
    }

    /**
     * 殺し
     */
    fun weaponBreaker(battleUnit: BattleUnit, enemy: BattleUnit, weapon: WeaponType, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        log("HP:${battleUnit.hp}")
        log("threashold:${battleUnit.armedHero.maxHp * (lv * 20 - 10) / 100}")
        if ((battleUnit.hp >= battleUnit.armedHero.maxHp * (lv * 20 - 10) / 100) && enemy.armedHero.baseHero.weaponType == weapon) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.Breaker))
            battleUnit.followupable += 1
            enemy.antiFollowup += 1
        }
        return battleUnit
    }

    /**
     * 色固定殺し
     */
    fun weaponBreaker(battleUnit: BattleUnit, enemy: BattleUnit, weapon: WeaponType, lv: Int, color: Int, s: Skill = Skill.NONE): BattleUnit {
        log("HP:${battleUnit.hp}")
        log("threashold:${battleUnit.armedHero.maxHp * (lv * 20 - 10) / 100}")
        if ((battleUnit.hp >= battleUnit.armedHero.maxHp * (lv * 20 - 10) / 100) && enemy.armedHero.baseHero.weaponType == weapon && enemy.armedHero.baseHero.color == color) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.DefRes))
            battleUnit.followupable += 1
            enemy.antiFollowup += 1
        }
        return battleUnit
    }

    /**
     * 生命の
     */
    fun boostAtk(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        if (battleUnit.hp - enemy.hp >= 3) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.Atk, lv.toString()))
            battleUnit.atkEffect += lv
        }
        return battleUnit
    }

    /**
     * 生命の
     */
    fun boostSpd(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        if (battleUnit.hp - enemy.hp >= 3) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.Spd, lv.toString()))
            battleUnit.spdEffect += lv
        }
        return battleUnit
    }

    /**
     * 生命の
     */
    fun boostDef(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        if (battleUnit.hp - enemy.hp >= 3) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.Def, lv.toString()))
            battleUnit.defEffect += lv
        }
        return battleUnit
    }

    /**
     * 生命の
     */
    fun boostRes(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        if (battleUnit.hp - enemy.hp >= 3) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.Res, lv.toString()))
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
    fun equipKiller(armedHero: ArmedHero): ArmedHero {
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
    fun effectiveAgainst(moveType: MoveType, battleUnit: BattleUnit, enemy: BattleUnit, s: Skill = Skill.NONE): BattleUnit {
        if (enemy.armedHero.baseHero.moveType == moveType) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.EffectiveAgainst))
            battleUnit.effectiveAgainst = EffectiveAgainst.valueOfMoveType(moveType)
        }
        return battleUnit
    }

    /**
     * 特効
     */
    fun effectiveAgainst(weaponType: WeaponType, battleUnit: BattleUnit, enemy: BattleUnit, s: Skill = Skill.NONE): BattleUnit {
        if (enemy.armedHero.baseHero.weaponType == weaponType) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.EffectiveAgainst))
            battleUnit.effectiveAgainst = EffectiveAgainst.valueOfWeaponType(weaponType)
        }
        return battleUnit
    }

    /**
     * 魔法特効
     */
    fun effectiveAgainstMagic(battleUnit: BattleUnit, enemy: BattleUnit, s: Skill = Skill.NONE): BattleUnit {
        if (enemy.armedHero.isMagicWeapon()) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.EffectiveAgainst))
            battleUnit.effectiveAgainst = EffectiveAgainst.valueOfWeaponType(enemy.armedHero.baseHero.weaponType)
        }
        return battleUnit
    }

    /**
     * 2回攻撃
     */
    fun doubleAttack(battleUnit: BattleUnit, s: Skill = Skill.NONE): BattleUnit {
        battleUnit.addSkillText(SkillText(s, SkillBaseText.DoubleAttack))
        battleUnit.doubleAttack = true
        return battleUnit
    }

    /**
     * 相性激化
     */
    fun colorAdvantage(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        battleUnit.addSkillText(SkillText(s, SkillBaseText.TriangleAdept, (20 + lv * 5 + 5).toString() + "%"))
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
    fun followupable(battleUnit: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        if (battleUnit.hp >= battleUnit.armedHero.maxHp * (100 - 10 * lv) / 100) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.FollowupAttack))
            battleUnit.followupable += 1
        }
        return battleUnit
    }

    /**
     * お互いに追撃不可
     */
    fun eachNofollowupable(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        if (battleUnit.hp >= battleUnit.armedHero.maxHp * (110 - 20 * lv) / 100) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.NoFollowupAttackEach))
            battleUnit.antiFollowup += 1
            enemy.antiFollowup += 1
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
     * フォルセティ
     */
    fun forseti(fightPlan: FightPlan, lv: Int): FightPlan {
        if (fightPlan.attacker.hp >= fightPlan.attacker.armedHero.maxHp * (100 - 25 * lv) / 100 && fightPlan.plan.contains(fightPlan.secondAttack)) {
            fightPlan.plan.remove(fightPlan.secondAttack)
            fightPlan.plan.add(fightPlan.plan.indexOf(fightPlan.firstAttack) + 1, fightPlan.secondAttack)
        }
        return fightPlan
    }

    /**
     * 刺し違え
     */
    fun brashAssault(battleUnit: BattleUnit, enemy: BattleUnit, percentage: Int, s: Skill = Skill.NONE): BattleUnit {
        if ((battleUnit.armedHero.baseHero.weaponType.range == enemy.armedHero.baseHero.weaponType.range || enemy.counterAllRange)
                && !enemy.cannotCounter
                && (battleUnit.hp <= battleUnit.armedHero.maxHp * percentage / 100)) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.FollowupAttack))
            battleUnit.followupable += 1
        }
        return battleUnit
    }

    /**
     * 風薙ぎ
     */
    fun windsweep(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        battleUnit.addSkillText(SkillText(s, SkillBaseText.SweepA))
        if (enemy.armedHero.baseHero.weaponType.isMaterial
                && (battleUnit.effectedPhantomSpd - enemy.effectedPhantomSpd >= 7 - lv * 2)) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.SweepB))
            enemy.cannotCounter = true
        }
        return battleUnit
    }

    /**
     * 水薙ぎ
     */
    fun watersweep(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        battleUnit.addSkillText(SkillText(s, SkillBaseText.SweepA))
        if (!enemy.armedHero.baseHero.weaponType.isMaterial
                && (battleUnit.effectedPhantomSpd - enemy.effectedPhantomSpd >= 7 - lv * 2)) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.SweepB))
            enemy.cannotCounter = true
        }
        return battleUnit
    }

    /**
     * 幻惑
     */
    fun dazzling(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        if (battleUnit.hp >= battleUnit.armedHero.maxHp * (150 - lv * 50)) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.Dazzling))
            enemy.cannotCounter = true
        }
        return battleUnit
    }

    /**
     * 天罰
     */
    fun wrathfulStaff(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        if (battleUnit.hp >= battleUnit.armedHero.maxHp * (150 - lv * 50)) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.WrathfulStaff))
            battleUnit.wrathfulStaff = true
        }
        return battleUnit
    }

    /**
     * 全距離反撃
     */
    fun counterAllRange(battleUnit: BattleUnit, s: Skill = Skill.NONE): BattleUnit {
        battleUnit.addSkillText(SkillText(s, SkillBaseText.CounterAllRange))
        battleUnit.counterAllRange = true
        return battleUnit
    }

    /**
     * 火薙ぎ
     */
    fun disableEachCounter(battleUnit: BattleUnit, enemy: BattleUnit, s: Skill = Skill.NONE): BattleUnit {
        battleUnit.addSkillText(SkillText(s, SkillBaseText.FireSweep))
        battleUnit.cannotCounter = true
        enemy.cannotCounter = true
        return battleUnit
    }

    /**
     * ミルラのブレス
     */
    fun antiFollowupDef(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        if (battleUnit.def - lv >= enemy.def) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.AntiFollowupAttack))
            enemy.antiFollowup += 1
        }
        return battleUnit
    }

    /**
     * ミルラのブレス
     */
    fun followupDef(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        if (battleUnit.def - lv >= enemy.def) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.FollowupAttack))
            battleUnit.followupable += 1
        }
        return battleUnit
    }

    /**
     * 単に追撃不可
     */
    fun antiFollowup(battleUnit: BattleUnit, enemy: BattleUnit, s: Skill = Skill.NONE): BattleUnit {
        battleUnit.addSkillText(SkillText(s, SkillBaseText.AntiFollowupAttack))
        enemy.antiFollowup += 1
        return battleUnit
    }

    /**
     * 天雷アルマーズ
     */
    fun antiFollowupAdjacet(battleUnit: BattleUnit, enemy: BattleUnit, s: Skill = Skill.NONE): BattleUnit {
        if (battleUnit.adjacentUnits > 0) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.AntiFollowupAttack))
            enemy.antiFollowup += 1
        }
        return battleUnit
    }

    /**
     * ブリュンヒルデ
     */
    fun antiFollowupRangedDef(battleUnit: BattleUnit, enemy: BattleUnit, s: Skill = Skill.NONE): BattleUnit {
        if (enemy.armedHero.effectiveRange == 2 && battleUnit.def > enemy.def) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.AntiFollowupAttack))
            enemy.antiFollowup += 1
        }
        return battleUnit
    }

    /**
     * さかの加護
     */
    fun sacasBlessing(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        val enemyType = enemy.armedHero.baseHero.weaponType
        if (enemyType == WeaponType.SWORD || enemyType == WeaponType.LANCE || enemyType == WeaponType.AXE) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.Dazzling))
            enemy.cannotCounter = true
        }
        return battleUnit
    }

    /**
     * ベオクの加護
     */
    fun beorcsBlessing(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        val enemyType = enemy.armedHero.baseHero.moveType
        if (enemyType == MoveType.CAVALRY || enemyType == MoveType.FLIER) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.NeutralizeBuffBonus))
            enemy.neutralizeBuffBonus = true
        }
        return battleUnit
    }

//    /**
//     * 2射程武器反撃不可。バフ無効を勘違いして反撃不可にしてしまっていた…
//     */
//    fun antiRanged(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
//        val enemyType = enemy.armedHero.baseHero.weaponType
//        if (enemyType == WeaponType.RTOME || enemyType == WeaponType.BTOME || enemyType == WeaponType.GTOME || enemyType == WeaponType.BOW || enemyType == WeaponType.DAGGER || enemyType == WeaponType.STAFF) {
//            enemy.cannotCounter = true
//        }
//        return battleUnit
//    }

    /**
     * HP満タン時ボーナス
     */
    fun fullHpBonus(battleUnit: BattleUnit, i: Int, s: Skill = Skill.NONE): BattleUnit {
        if (battleUnit.hp == battleUnit.armedHero.maxHp) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.AtkSpdDefRes, 2.toString()))
            battleUnit.addSkillText(SkillText(s, SkillBaseText.HpLoss, 2.toString()))
            battleUnit.atkEffect += 2
            battleUnit.spdEffect += 2
            battleUnit.defEffect += 2
            battleUnit.resEffect += 2
            battleUnit.attackedHpLossAtEndOfFight += 2
        }
        return battleUnit
    }

    /**
     * すべてにボーナス。オウルとか。粉塵はステータスが変化するので違う
     */
    fun allBonus(battleUnit: BattleUnit, i: Int, s: Skill = Skill.NONE): BattleUnit {
        battleUnit.addSkillText(SkillText(s, SkillBaseText.AtkSpdDefRes, i.toString()))
        battleUnit.atkEffect += i
        battleUnit.spdEffect += i
        battleUnit.defEffect += i
        battleUnit.resEffect += i
        return battleUnit
    }

    /**
     * 敵がHP満タンのときにボーナス
     */
    fun enemyFullHpBonus(battleUnit: BattleUnit, enemy: BattleUnit, i: Int, s: Skill = Skill.NONE): BattleUnit {
        if (enemy.hp == enemy.armedHero.maxHp) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.AtkSpd, i.toString()))
            battleUnit.atkEffect += i
            battleUnit.spdEffect += i
        }
        return battleUnit
    }

    /**
     * 勇者装備。速さ-5
     */
    fun equipBrave(armedHero: ArmedHero, lv: Int): ArmedHero {
        armedHero.spdEqp -= 5
        return armedHero
    }

    /**
     * ブレード装備。攻撃＋と同時に奥義カウント＋１
     */
    fun equipBlade(armedHero: ArmedHero, lv: Int): ArmedHero {
        armedHero.reduceSpecialCooldown -= 1
        return armedHero
    }

    /**
     * レイブン装備
     */
    fun equipRaven(battleUnit: BattleUnit, s: Skill = Skill.NONE): BattleUnit {
        battleUnit.colorlessAdvantage = true
        return battleUnit
    }

    /**
     * 戦闘時のブレードの効果。これEquipに統合してもいいか…
     */
    fun bladeEffect(battleUnit: BattleUnit, s: Skill = Skill.NONE): BattleUnit {
        battleUnit.addSkillText(SkillText(s, SkillBaseText.Blade, battleUnit.totalBuff.toString()))
        battleUnit.blade = true
        return battleUnit
    }

    /**
     * HP満タン時に攻撃と速さボーナス
     */
    fun fullHpAtkSpdBonus(battleUnit: BattleUnit, i: Int, d: Int, s: Skill = Skill.NONE): BattleUnit {
        if (battleUnit.hp == battleUnit.armedHero.maxHp) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.AtkSpd, i.toString()))
            battleUnit.addSkillText(SkillText(s, SkillBaseText.HpLoss, d.toString()))
            battleUnit.atkEffect += i
            battleUnit.spdEffect += i
            battleUnit.attackedHpLossAtEndOfFight += d
        }
        return battleUnit
    }

    /**
     * HP満タン時に2回攻撃
     */
    fun fullHpDoubleAttack(battleUnit: BattleUnit, d: Int, s: Skill = Skill.NONE): BattleUnit {
        if (battleUnit.hp == battleUnit.armedHero.maxHp) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.DoubleAttack))
            battleUnit.addSkillText(SkillText(s, SkillBaseText.HpLoss, d.toString()))
            battleUnit.doubleAttack = true
            battleUnit.attackedHpLossAtEndOfFight += d
        }
        return battleUnit
    }

    /**
     * HP満タン時にすべてにボーナス
     */
    fun fullHpAllBonus(battleUnit: BattleUnit, i: Int, s: Skill = Skill.NONE): BattleUnit {
        if (battleUnit.hp == battleUnit.armedHero.maxHp) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.AtkSpdDefRes, i.toString()))
            battleUnit.addSkillText(SkillText(s, SkillBaseText.HpLoss, i.toString()))
            battleUnit.atkEffect += i
            battleUnit.spdEffect += i
            battleUnit.defEffect += i
            battleUnit.resEffect += i
            battleUnit.attackedHpLossAtEndOfFight += i

        }
        return battleUnit
    }

    /**
     * HPが減っているときにすべてにボーナス
     */
    fun notFullHpAllBonus(battleUnit: BattleUnit, i: Int, s: Skill = Skill.NONE): BattleUnit {
        if (battleUnit.hp < battleUnit.armedHero.maxHp) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.AtkSpdDefRes, i.toString()))
            battleUnit.atkEffect += i
            battleUnit.spdEffect += i
            battleUnit.defEffect += i
            battleUnit.resEffect += i
        }
        return battleUnit
    }

    fun defHigherThanResBonus(battleUnit: BattleUnit, enemy: BattleUnit, s: Skill = Skill.NONE): BattleUnit {
        if (enemy.def - 5 >= enemy.res) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.Atk, 7.toString()))
            battleUnit.atkEffect += 7
        }
        return battleUnit
    }

    /**
     * 相手のバフ分攻撃に追加。
     */
    fun debuffBonus(battleUnit: BattleUnit, enemy: BattleUnit, s: Skill = Skill.NONE): BattleUnit {
        battleUnit.addSkillText(SkillText(s, SkillBaseText.Damage, (enemy.atkBuff + enemy.spdBuff + enemy.defBuff + enemy.resBuff).toString()))
        battleUnit.debuffBonus = enemy.atkBuff + enemy.spdBuff + enemy.defBuff + enemy.resBuff
        return battleUnit
    }

    /**
     * 相手のバフ無効化
     */
    fun neutralizeBuffBonus(battleUnit: BattleUnit, enemy: BattleUnit, s: Skill = Skill.NONE): BattleUnit {
        battleUnit.addSkillText(SkillText(s, SkillBaseText.NeutralizeBuffBonus))
        enemy.neutralizeBuffBonus = true
        return battleUnit
    }

    /**
     * 相手が魔法の時にバフ無効か
     */
    fun antiMagicBuffBonus(battleUnit: BattleUnit, enemy: BattleUnit, s: Skill = Skill.NONE): BattleUnit {
        if (enemy.armedHero.baseHero.isMagicWeapon()) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.NeutralizeBuffBonus))
            enemy.neutralizeBuffBonus = true
        }
        return battleUnit
    }

    /**
     * 相手が1射程武器の時バフ無効か
     */
    fun antiMeleeWeaponBuffBonus(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int = 3, s: Skill = Skill.NONE): BattleUnit {
        if (enemy.armedHero.baseHero.weaponType.range == 1 && battleUnit.hp * 100 >= battleUnit.armedHero.maxHp * (150 - lv * 50)) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.NeutralizeBuffBonus))
            enemy.neutralizeBuffBonus = true
        }
        return battleUnit
    }

    /**
     * 相手が2射程武器の時バフ無効か
     */
    fun antiRangedWeaponBuffBonus(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int = 3, s: Skill = Skill.NONE): BattleUnit {
        if (enemy.armedHero.baseHero.weaponType.range == 2 && battleUnit.hp * 100 >= battleUnit.armedHero.maxHp * (150 - lv * 50)) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.NeutralizeBuffBonus))
            enemy.neutralizeBuffBonus = true
        }
        return battleUnit
    }

    /**
     * 剛剣
     */
    fun heavyBlade(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        if (battleUnit.effectedAtk - enemy.effectedAtk > lv) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.HeavyBlade, 1.toString()))
            battleUnit.accelerateAttackCooldown = 1
        }
        return battleUnit
    }

    /**
     * 柔剣
     */
    fun flashingBlade(battleUnit: BattleUnit, enemy: BattleUnit, gt: Int, s: Skill = Skill.NONE): BattleUnit {
        if (battleUnit.effectedPhantomSpd - enemy.effectedPhantomSpd > gt) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.HeavyBlade, 1.toString()))
            battleUnit.accelerateAttackCooldown = 1
        }
        return battleUnit
    }

    /**
     * フェリシアの氷皿の相手が魔法の時カウント追加
     */
    fun feliciasBlade(battleUnit: BattleUnit, enemy: BattleUnit, s: Skill = Skill.NONE): BattleUnit {
        if (enemy.armedHero.isMagicWeapon()) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.HeavyPlate, 1.toString()))
            //攻撃で儲けでも加速
            battleUnit.accelerateAttackCooldown = 1
            battleUnit.accelerateTargetCooldown = 1
        }
        return battleUnit
    }

    /**
     * 守備と魔防のうち低いほうを適用
     */
    fun penetrate(battleUnit: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        if (battleUnit.adjacentUnits > 0 && battleUnit.hp >= battleUnit.armedHero.maxHp * (150 - lv * 50)) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.Penetrate))
            battleUnit.overrideDamageType = SkillType.SORCERY_DAGGER
        }
        return battleUnit
    }

    /**
     * カウント追加
     */
    fun accelerateCooldown(battleUnit: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        if (battleUnit.hp * 10 >= battleUnit.armedHero.maxHp * (11 - lv)) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.HeavyBlade, 1.toString()))
            battleUnit.accelerateAttackCooldown = 1
            battleUnit.accelerateTargetCooldown = 1
        }
        return battleUnit
    }

    /**
     * 攻撃時カウント追加
     */
    fun accelerateAttackCooldown(battleUnit: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        if (battleUnit.hp * 10 >= battleUnit.armedHero.maxHp * (11 - lv)) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.HeavyBlade, 1.toString()))
            battleUnit.accelerateAttackCooldown = 1
        }
        return battleUnit
    }

    /**
     * 味方ユニットがいるときに攻撃時カウント追加
     */
    fun accelerateAttackCooldownWithAlly(battleUnit: BattleUnit, s: Skill = Skill.NONE): BattleUnit {
        if (battleUnit.adjacentUnits > 0) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.HeavyBlade, 1.toString()))
            battleUnit.accelerateAttackCooldown = 1
        }
        return battleUnit
    }

    /**
     * 特効無効化
     */
    fun antiEffectiveAgainst(battleUnit: BattleUnit, enemy: BattleUnit, type: EffectiveAgainst, s: Skill = Skill.NONE): BattleUnit {
        if (enemy.effectiveAgainst == type) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.AntiEffectiveAgainst))
            enemy.effectiveAgainst = EffectiveAgainst.NONE
        }
        return battleUnit

    }

    /**
     * キャンセル
     */
    fun antiAccelerateCooldown(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        if (battleUnit.hp * 10 >= battleUnit.armedHero.maxHp * (11 - lv)) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.Cancel))
            enemy.InflictAttackCooldown = 1
            enemy.InflictTargetCooldown = 1
        }
        return battleUnit
    }

    /**
     * ペイン.でも攻撃時効果は別に作るべきかなあ。攻撃時と参加時別だし死んだときに効果あるかどうかも別なんだよな
     */
    fun attackPain(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        battleUnit.addSkillText(SkillText(s, SkillBaseText.Pain, lv.toString()))
        enemy.hpLossAtEndOfFight += lv
        return battleUnit
    }

    /**
     * 戦闘後のHP回復
     */
    fun fightHpLoss(battleUnit: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        battleUnit.addSkillText(SkillText(s, SkillBaseText.HpLoss, lv.toString()))
        battleUnit.hpLossAtEndOfFight += lv
        return battleUnit
    }

    /**
     * 攻撃時のHP減少
     */
    fun attackHpLoss(battleUnit: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        battleUnit.addSkillText(SkillText(s, SkillBaseText.HpLoss, lv.toString()))
        battleUnit.attackedHpLossAtEndOfFight += lv
        return battleUnit
    }

    /**
     * 戦闘時のHP回復
     */
    fun attackHeal(battleUnit: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        battleUnit.addSkillText(SkillText(s, SkillBaseText.HpGain, lv.toString()))
        battleUnit.hpLossAtEndOfFight -= lv
        return battleUnit
    }

    /**
     * 大覚醒
     */
    fun brazenAtkSpd(battleUnit: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        if (battleUnit.hp * 10 <= battleUnit.armedHero.maxHp * 8) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.AtkSpd, lv.toString()))
            battleUnit.atkEffect += lv
            battleUnit.spdEffect += lv
        }
        return battleUnit
    }

    /**
     * 大覚醒
     */
    fun brazenAtkDef(battleUnit: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        if (battleUnit.hp * 10 <= battleUnit.armedHero.maxHp * 8) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.AtkDef, lv.toString()))
            battleUnit.atkEffect += lv
            battleUnit.defEffect += lv
        }
        return battleUnit
    }

    /**
     * 大覚醒
     */
    fun brazenAtkRes(battleUnit: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        if (battleUnit.hp * 10 <= battleUnit.armedHero.maxHp * 8) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.AtkRes, lv.toString()))
            battleUnit.atkEffect += lv
            battleUnit.resEffect += lv
        }
        return battleUnit
    }

    /**
     * 大覚醒
     */
    fun brazenSpdRes(battleUnit: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        if (battleUnit.hp * 10 <= battleUnit.armedHero.maxHp * 8) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.SpdRes, lv.toString()))
            battleUnit.spdEffect += lv
            battleUnit.resEffect += lv
        }
        return battleUnit
    }

    /**
     * 大覚醒
     */
    fun brazenDefRes(battleUnit: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        if (battleUnit.hp * 10 <= battleUnit.armedHero.maxHp * 8) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.DefRes, lv.toString()))
            battleUnit.defEffect += lv
            battleUnit.resEffect += lv
        }
        return battleUnit
    }

    /**
     * 大覚醒
     */
    fun brazenRes(battleUnit: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        if (battleUnit.hp * 10 <= battleUnit.armedHero.maxHp * 8) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.Res, lv.toString()))
            battleUnit.resEffect += lv
        }
        return battleUnit
    }

    /**
     * 怒り
     */
    fun wrath(battleUnit: BattleUnit, damage: Int, percentage: Int, s: Skill = Skill.NONE): Int = if (battleUnit.hp * 100 <= battleUnit.armedHero.maxHp * percentage) {
        battleUnit.addSkillText(SkillText(s, SkillBaseText.Damage, 10.toString()))
        damage + 10
    } else damage

    fun spdFlat(battleUnit: BattleUnit, enemy: BattleUnit): Int = if (battleUnit.effectedPhantomSpd > enemy.effectedPhantomSpd) {
        val d = HandmaidMath.min((battleUnit.effectedPhantomSpd - enemy.effectedPhantomSpd) * 7 / 10, 7)
        d
    } else 0

    fun hardyBearing(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        battleUnit.addSkillText(SkillText(s, SkillBaseText.DisableChangePlan))
        battleUnit.disableChangePlan = true
        if (battleUnit.hp >= battleUnit.armedHero.maxHp * (150 - lv * 50) / 100) {
            enemy.disableChangePlan = true
        }
        return battleUnit
    }

    //バフ分攻撃に追加。ただこれFlat扱いだったような
    fun addBuffToAttack(battleUnit: BattleUnit, s: Skill = Skill.NONE): BattleUnit {
        battleUnit.addSkillText(SkillText(s, SkillBaseText.Damage, (battleUnit.atkBuff + battleUnit.spdBuff + battleUnit.defBuff + battleUnit.resBuff).toString()))
        battleUnit.atkEffect += battleUnit.atkBuff + battleUnit.spdBuff + battleUnit.defBuff + battleUnit.resBuff
        return battleUnit
    }

    fun nullFollowUp(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        if (battleUnit.hp >= battleUnit.armedHero.maxHp * (150 - lv * 50) / 100) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.NullFollowupAttack))
            battleUnit.antiFollowup = 0
            enemy.followupable = 0
        }
        return battleUnit
    }

    fun nullCDisrupt(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        if (battleUnit.hp >= battleUnit.armedHero.maxHp * (150 - lv * 50) / 100) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.NullCDisrupt))
            battleUnit.cannotCounter = false
            enemy.cannotCounter = false
        }
        return battleUnit
    }

    fun mysticBoost(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        enemy.wrathfulStaff = false
        //貫通タイプを元に戻す。武器に元と貫通タイプと持たせてもいいがそっちは修正量大きいんだよなあ
        battleUnit.addSkillText(SkillText(s, SkillBaseText.AntiPenetrate))
        enemy.overrideDamageType = when (enemy.armedHero.weapon.type) {
            SkillType.PENETRATE_DAGGER -> SkillType.DAGGER
            SkillType.PENETRATE_DRAGON -> SkillType.DRAGON
            else -> SkillType.NONE
        }
        return battleUnit
    }

    fun antiPenetrate(battleUnit: BattleUnit, enemy: BattleUnit, s: Skill = Skill.NONE): BattleUnit {
        //貫通タイプを元に戻す。武器に元と貫通タイプと持たせてもいいがそっちは修正量大きいんだよなあ
        battleUnit.addSkillText(SkillText(s, SkillBaseText.AntiPenetrate))
        enemy.overrideDamageType = when (enemy.armedHero.weapon.type) {
            SkillType.PENETRATE_DAGGER -> SkillType.DAGGER
            SkillType.PENETRATE_DRAGON -> SkillType.DRAGON
            else -> SkillType.NONE
        }
        return battleUnit
    }

    fun sylgr(battleUnit: BattleUnit, enemy: BattleUnit, s: Skill = Skill.NONE): BattleUnit {
        //飛燕とか計算した後なのかなあ.一回ちゃんと調べるか
        if (battleUnit.effectedSpd > enemy.effectedSpd) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.AtkSpd, 4.toString()))
            battleUnit.atkEffect += 4
            battleUnit.spdEffect += 4
        }
        return battleUnit
    }

    fun adjacentDebuff(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int, s: Skill = Skill.NONE): BattleUnit {
        if (battleUnit.adjacentUnits > 0) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.AtkSpdDefResReduce4, lv.toString()))
            enemy.atkEffect -= lv
            enemy.spdEffect -= lv
            enemy.defEffect -= lv
            enemy.resEffect -= lv
        }
        return battleUnit
    }

    fun triangleEffect(battleUnit: BattleUnit, enemy: BattleUnit, s: Skill = Skill.NONE): BattleUnit {
        if (battleUnit.adjacentUnits >= 2) {
            battleUnit.addSkillText(SkillText(s, SkillBaseText.AtkSpdDefRes, 3.toString()))
            battleUnit.atkEffect += 3
            battleUnit.spdEffect += 3
            battleUnit.defEffect += 3
            battleUnit.resEffect += 3
            battleUnit.followupable += 1
        }
        return battleUnit
    }

    fun triangleAttack(battleUnit: BattleUnit, s: Skill = Skill.NONE): BattleUnit = if (battleUnit.adjacentUnits >= 2) doubleAttack(battleUnit, s) else battleUnit

}