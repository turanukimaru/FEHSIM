package jp.blogspot.turanukimaru.fehs

import jp.blogspot.turanukimaru.fehs.skill.Skill

/**
 * ダメージを分離したもの
 */
class Damage(source: BattleUnit, val special: Skill, weaponType: SkillType, flat: Int, stateDamageEnemy: (BattleUnit) -> Int, staff: Int, results: List<AttackResult>) {
    val deal: (BattleUnit) -> DamageResult = {
        val damage = it.prevent(special.damage(source.colorAttack(it) + special.stateDamage(source) + stateDamageEnemy(it), it.preventByDefResTerrain(weaponType, special.penetrate)) / staff + source.stateFlat(it) + flat, source, results)

        val specialPrevented = it.specialPrevent(source, damage)
        it.damaged(damage, specialPrevented)
    }
}

data class DamageResult(val damage: Int, val preventSkill: Skill, val lossHp: Int, val overkill: Int?)