package jp.blogspot.turanukimaru.fehs

import jp.blogspot.turanukimaru.fehs.skill.Skill

/**
 * ダメージを分離したもの
 */
class Damage(source: BattleUnit, val special: Skill, weaponType: SkillType, flat: Int, staff: Int, results: List<AttackResult>) {
    val deal: (BattleUnit) -> DamageResult = {
        val damage = it.prevent(special.damage(source.colorAttack(it) + special.stateDamage(source), it.preventByDefResTerrain(weaponType, special.penetrate)) * staff + flat, source, results)

        val specialPrevented = it.specialPrevent(source, damage)
        it.damaged(damage, specialPrevented)
    }

//    fun test(source: BattleUnit, weaponType: SkillType, flat: Int, staff: Int, results: List<AttackResult>): (BattleUnit) -> DamageResult {
//        return { target ->
//            target.damaged(special.damage(source, target.preventByDefResTerrain(weaponType, special.penetrate)) * staff + flat)
//        }
//    }
}

data class DamageResult(val damage: Int, val preventSkill: Skill, val lossHp: Int, val overkill: Int?)
////等価
////fun damageCodeBlock(source: BattleUnit, special: Skill, weaponType: SkillType, flat: Int, staff: Int, results: List<AttackResult>): (BattleUnit) -> Pair<Int, Skill?> = { target ->
////    target.damaged(special.damage(source, target.preventByDefResTerrain(weaponType, special.penetrate)) * staff + flat)
////}
//
//data class Hero(var hp: Int, var atk: Int, var spd: Int, var def: Int, var res: Int, var weapon: Weapon, var special: Special) {
//    interface BaseSpecial {
//        fun damage(source: Hero, atkEffAdv: Int, mit: Int, offFlat: Int) = atkEffAdv - mit + offFlat
//    }
//
//    enum class Special(val spcStatSpcMod: (Hero) -> Int = { _ -> 0 }, val mitMod: Float = 0f, val offMult: Float = 0f) : BaseSpecial {
//        通常攻撃,
//        緋炎(spcStatSpcMod = { hero: Hero -> hero.def / 2 }),
//        月光(mitMod = -0.5f),
//        流星(offMult = 1.5f)
//        ;
//
//        override fun damage(source: Hero, atkEffAdv: Int, mit: Int, offFlat: Int) = ((atkEffAdv + spcStatSpcMod(source) - mit - mit * mitMod) * offMult).toInt()
//    }
//
//    enum class Weapon(val selectPreventParam: (target: Hero) -> Int = { 0 }, val isRanged: Boolean = false) {
//        FeliciasPlate({ target -> if (target.def < target.res) target.def else target.res }),
//        RefinedBreath({ target -> if (target.weapon.isRanged && target.def < target.res) target.def else target.res }),
//        MaterialWeapon({ target -> target.def }),
//        MagicWeapon({ target -> target.res }),
//    }
//
//    class Damage(private val source: Hero, private val offFlat: Int) {
//        fun dealValue(target: Hero): Int = source.special.damage(source, source.atkEffAdv(target), source.weapon.selectPreventParam(target), offFlat)
//    }
//
//    fun attack(target: Hero) {
//        val damage = Damage(this, offFlat())//
//        target.damage(damage)
//    }
//
//    fun damage(damage: Damage) {
//        val dealed = damage.dealValue(this)
//        val preventedDamage = prevent(dealed)
//        hp = if (hp > preventedDamage) hp - preventedDamage else 0
//    }
//
//    //メソッドの場合
//    fun atkEffAdv(target: Hero) = atk * eff(target) + atk * eff(target) * adv(target)
//
//    //コードブロックの場合
//    val atkEffAdvFnc: (Hero) -> Int = { target -> atk * eff(target) + atk * eff(target) * adv(target) }
//
//    //特効・色によるダメージ・スキルのダメージ軽減は省略
//    fun eff(target: Hero) = 0
//
//    fun adv(target: Hero) = 0
//    fun prevent(damage: Int) = 0
//    fun offFlat() = 0
//}
//
//class A(var x: Int) {
//    fun incX() = x++
//    val incX: (A) -> Int = { a -> a.x++ }
//}
