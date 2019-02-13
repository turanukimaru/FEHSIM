package jp.blogspot.turanukimaru.fehs.skill

import jp.blogspot.turanukimaru.fehs.ArmedHero
import jp.blogspot.turanukimaru.fehs.BattleUnit

/**
 * スキル。武器
 */
interface Weapon : Skill {
    val refinedWeaponType: RefinedWeapon.RefineType get() = RefinedWeapon.RefineType.NONE
    /**
     * 戦闘時の効果。基本的にunitの能力値を上下したり
     */
    fun localFightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int = level): BattleUnit = battleUnit

    fun localEquip(armedHero: ArmedHero, lv: Int): ArmedHero = armedHero

    override fun equip(armedHero: ArmedHero, lv: Int): ArmedHero {
        armedHero.atkEqp += lv
        return localEquip(armedHero, lv)
    }

    /**
     * 戦闘時の効果。特効共通処理して武器固有能力を起動
     */
    override fun fightEffect(battleUnit: BattleUnit, enemy: BattleUnit, lv: Int): BattleUnit {
        //無効化回避能力は移動系に対する楯しかないので武器特効を上位にすればいいはず。竜特効無効とか出たらやだなあ。出たわ。移植不能な武器だからまだなんとかなるけど。
        val effectiveAgainstMoved = effectiveAgainstMoveType.fold(battleUnit) { bu, mv -> effectiveAgainst(mv, bu, enemy, this) }
        val effectiveAgainstWeapon = effectiveAgainstWeaponType.fold(effectiveAgainstMoved) { bu, wp -> effectiveAgainst(wp, bu, enemy, this) }
        return localFightEffect(effectiveAgainstWeapon, enemy, lv)
    }

    companion object {
        private val allWeapons: List<Weapon> get() = mutableListOf<Weapon>().plus(Sword.values()).plus(Lance.values()).plus(Axe.values()).plus(Bow.values()).plus(Dagger.values()).plus(Staff.values()).plus(Rtome.values()).plus(Btome.values()).plus(Gtome.values()).plus(Breath.values())
        private val itemMap = mutableMapOf<String, Skill>()
        fun spreadItems(none: Boolean = false): List<Skill> = (if (none) mutableListOf<Skill>(Skill.NONE) else mutableListOf()).plus(allWeapons)
        fun valueOfOrNONE(key: String?): Skill = if (key == null) Skill.NONE else try {
            if (itemMap.isEmpty()) {
                allWeapons.forEach { e -> itemMap[e.jp.jp] = e;itemMap[e.value] = e;itemMap[e.jp.us] = e;itemMap[e.jp.tw] = e; }
            }
            itemMap[key] ?: Sword.valueOf(key) ?: Lance.valueOf(key) ?: Axe.valueOf(key)
            ?: Bow.valueOf(key) ?: Dagger.valueOf(key) ?: Staff.valueOf(key) ?: Rtome.valueOf(key)
            ?: Btome.valueOf(key) ?: Gtome.valueOf(key) ?: Breath.valueOf(key)
        } catch (e: Exception) {
            Skill.NONE
        }
    }
}