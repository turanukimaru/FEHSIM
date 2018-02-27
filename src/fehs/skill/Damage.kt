package jp.blogspot.turanukimaru.fehs.skill

import jp.blogspot.turanukimaru.fehs.AttackResult
import jp.blogspot.turanukimaru.fehs.BattleUnit
import jp.blogspot.turanukimaru.fehs.SkillType

/**
 * これテスト死ぬほど大変だな…
 * Created by turanukimaru on 2018/02/20.
 */
class Damage(source: BattleUnit, val special: Skill, weaponType: SkillType, flat: Int, staff: Int, results: List<AttackResult>) {
    val deal: (BattleUnit) -> Pair<Int, Skill?> = { target ->
        target.damaged(special.damage(source, target.preventByDefResTerrain(weaponType, special.penetrate)) * staff + flat, results)
    }

    fun test(source: BattleUnit, weaponType: SkillType, flat: Int, staff: Int, results: List<AttackResult>): (BattleUnit) -> Pair<Int, Skill?> {
        return { target ->
            target.damaged(special.damage(source, target.preventByDefResTerrain(weaponType, special.penetrate)) * staff + flat, results)
        }
    }
}

////等価
//fun damageCodeBlock(source: BattleUnit, special: Skill, weaponType: SkillType, flat: Int, staff: Int, results: List<AttackResult>): (BattleUnit) -> Pair<Int, Skill?> = { target ->
//    target.damaged(special.damage(source, target.preventByDefResTerrain(weaponType, special.penetrate)) * staff + flat, results)
//}
//
//data class Hero(var hp: Int, var atk: Int, var spd: Int, var def: Int, var res: Int, var weapon: Weapon) {
//    enum class Weapon(val selectPreventParam: (target: Hero) -> Int = { 0 }, val isRanged:Boolean = false) {
//        FeliciasPlate({ target -> if (target.def < target.res) target.def else target.res }),
//        RefinedBreath({ target -> if (target.weapon.isRanged && target.def < target.res) target.def else target.res }),
//        MaterialWeapon({ target -> target.def}),
//        MagicWeapon({ target -> target.res}),
//    }
//
//    fun attack(damage: Int, selectPreventParam: (target: Hero) -> Int) {
//        val preventedDamage = damage - let(selectPreventParam)
//    }
//    fun attack(damageDealer: (target: Hero) -> Int) {
//        val preventedDamage = let(damageDealer)
//    }
//    fun attack(damage:Int, weapon:Weapon) {
//        val preventedDamage = damage(damage,weapon)
//    }
//    fun damageDealer(damage:Int, weapon:Weapon):(Hero)->Int = {target-> damage - target.let(weapon.selectPreventParam)}
//    fun damage(damage:Int, weapon:Weapon):Int = damage - let(weapon.selectPreventParam)
//    val wpn = Weapon.FeliciasPlate
//    val damage : Int = 10//攻撃側のダメージを計算し↓コードブロックのdamageにバインドする
//    val damageDealer:(Hero)->Int = {target->damage - target.let(wpn.selectPreventParam)}
//
//}
