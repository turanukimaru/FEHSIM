package jp.blogspot.turanukimaru.fehs

import jp.blogspot.turanukimaru.fehs.skill.Skill


/**
 * ユニットの持つスキルやレベル・能力値。DBに保存したり、レベルアップや装備の変更をしない限り変わらない部分。
 * これもうDataClassでいい気がしてきた
 */
class BaseHero(val color: Int = 0, val weaponType: WeaponType = WeaponType.SWORD, val moveType: MoveType = MoveType.INFANTRY, val minRarity: Int = 5, val name: Name = Name.NONE, val hitPoint: Int = 0, val attack: Int = 0, val speed: Int = 0, val defense: Int = 0, val resistance: Int = 0, val hpGrowth: Int = 0, val atkGrowth: Int = 0, val spdGrowth: Int = 0, val defGrowth: Int = 0, val resGrowth: Int = 0, val weapon: Skill = Skill.NONE, val assist: Skill = Skill.NONE, val special: Skill = Skill.NONE, val aSkill: Skill = Skill.NONE, val bSkill: Skill = Skill.NONE, val cSkill: Skill = Skill.NONE, val seal: Skill = Skill.NONE) {

    /**
     * 移動力。直接見てもいいか？いやアイテムやスキルの効果で変動するか。
     */
    val movableSteps: Int
        get() = moveType.steps

    /**
     * 攻撃可能範囲。直接見てもいいか？今のところは変動しないし。
     */
    val effectiveRange: Int
        get() = weaponType.range
    /**
     * 得意不得意の能力値。最大が0なのはダミーデータ。アーダンの能力値↑は設定限界を超えるため
     */
    val growths = listOf(listOf(6, 8, 9, 11, 13, 14, 16, 18, 19, 21, 23, 24, 26, 0),
            listOf(7, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 26, 28, 0),
            listOf(7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 0),
            listOf(8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 31, 33, 35, 0),
            listOf(8, 10, 13, 15, 17, 19, 22, 24, 26, 28, 30, 33, 35, 37, 0))


    /**
     * 攻撃が魔法か。魔法特効って杖にも効くのかな？
     */
    fun isMagicWeapon(): Boolean = weaponType == WeaponType.RTOME || weaponType == WeaponType.GTOME || weaponType == WeaponType.BTOME// || weaponType == WeaponType.STAFF

    /**
     * 攻撃が魔法か。魔法特効って杖にも効くのかな？
     */
//    fun isMeleeWeapon(): Boolean = weaponType == WeaponType.SWORD || weaponType == WeaponType.LANCE || weaponType == WeaponType.AXE

    /**
     * 攻撃が魔法か。魔法特効って杖にも効くのかな？
     */
//    fun isMissileWeapon(): Boolean =weaponType == WeaponType.BOW || weaponType == WeaponType.DAGGER

//    fun have(weaponType: WeaponType?, moveType: MoveType?): Boolean = (weaponType == null || this.weaponType == weaponType) && (moveType == null || this.moveType == moveType)

    fun clone(): BaseHero = BaseHero(
            color, weaponType, moveType, minRarity, name, hitPoint, attack, speed, defense, resistance, hpGrowth, atkGrowth, spdGrowth, defGrowth, resGrowth, weapon, assist, special, aSkill, bSkill, cSkill, seal
    )
}


