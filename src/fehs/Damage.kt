package jp.blogspot.turanukimaru.fehs

import jp.blogspot.turanukimaru.fehs.skill.Skill

/**
 * これテスト死ぬほど大変だな…
 * Created by turanukimaru on 2018/02/20.
 */
class Damage(source: BattleUnit, val special: Skill, weaponType: SkillType, flat: Int, staff: Int, results: List<AttackResult>) {
    val deal: (BattleUnit) -> DamageResult = { target ->
        val damage = target.prevent(special.damage(source, target, target.preventByDefResTerrain(weaponType, special.penetrate)) * staff + flat, source, results)

        val specialPrevented = target.specialPrevent(source, damage)
        target.damaged(damage, specialPrevented)
    }

//    fun test(source: BattleUnit, weaponType: SkillType, flat: Int, staff: Int, results: List<AttackResult>): (BattleUnit) -> DamageResult {
//        return { target ->
//            target.damaged(special.damage(source, target.preventByDefResTerrain(weaponType, special.penetrate)) * staff + flat)
//        }
//    }
}

data class DamageResult(val damage: Int,val preventSkill: Skill,val lossHp:Int)
//等価
//fun damageCodeBlock(source: BattleUnit, special: Skill, weaponType: SkillType, flat: Int, staff: Int, results: List<AttackResult>): (BattleUnit) -> Pair<Int, Skill?> = { target ->
//    target.damaged(special.damage(source, target.preventByDefResTerrain(weaponType, special.penetrate)) * staff + flat)
//}

data class Hero(var hp: Int, var atk: Int, var spd: Int, var def: Int, var res: Int, var weapon: Weapon) {
    enum class Weapon(val selectPreventParam: (target: Hero) -> Int = { 0 }, val isRanged: Boolean = false) {
        FeliciasPlate({ target -> if (target.def < target.res) target.def else target.res }),
        RefinedBreath({ target -> if (target.weapon.isRanged && target.def < target.res) target.def else target.res }),
        MaterialWeapon({ target -> target.def }),
        MagicWeapon({ target -> target.res }),
    }

    fun attack(damage: Int, selectPreventParam: (target: Hero) -> Int) {
        val preventedDamage = damage - let(selectPreventParam)
    }

    fun attack(damageDealer: (target: Hero) -> Int) {
        val preventedDamage = let(damageDealer)
    }

    fun attack(damage: Int, weapon: Weapon) {
        val preventedDamage = damage(damage, weapon)
    }

    fun damageDealer(damage: Int, weapon: Weapon): (Hero) -> Int = { target -> damage - target.let(weapon.selectPreventParam) }
    fun damage(damage: Int, weapon: Weapon): Int = damage - let(weapon.selectPreventParam)
    val wpn = Weapon.FeliciasPlate
    val damage: Int = 10//攻撃側のダメージを計算し↓コードブロックのdamageにバインドする
    val damageDealer: (Hero) -> Int = { target -> damage - target.let(wpn.selectPreventParam) }

}
