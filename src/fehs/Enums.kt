package jp.blogspot.turanukimaru.fehs

/**
 * 武器種類
 */
enum class WeaponType(val range: Int, val isMaterial: Boolean, val sortOrder: Int) {
    SWORD(1, true, 0),
    LANCE(1, true, 0),
    AXE(1, true, 0),
    DRAGON(1, false, 1),
    RTOME(2, false, 2),
    BTOME(2, false, 2),
    GTOME(2, false, 2),
    BOW(2, true, 3),

    DAGGER(2, true, 4),
    STAFF(2, false, 5),
//    NONE(0, true, Skill.SkillType.NONE, 6),
    ;

    companion object {
        val weaponTypeMap = mapOf("剣" to WeaponType.SWORD, "槍" to WeaponType.LANCE, "斧" to WeaponType.AXE, "弓" to WeaponType.BOW, "暗器" to WeaponType.DAGGER, "赤魔" to WeaponType.RTOME, "緑魔" to WeaponType.GTOME, "青魔" to WeaponType.BTOME, "杖" to WeaponType.STAFF, "竜" to DRAGON)
        /**
         * 日本語の武器名を変換する。ここにあるべきかは疑問だが将来画面とのやり取り以外にも使うかもしれない
         */
        fun weaponTypeOf(key: String) = when {
            weaponTypeMap.containsKey(key) -> weaponTypeMap[key]
            WeaponType.values().any { e -> e.name == key } -> WeaponType.valueOf(key)
            else -> null
        }

    }

}
/**
 * 移動タイプ
 */
enum class MoveType(val steps: Int) {
    INFANTRY(2),
    CAVALRY(3),
    FLIER(2),
    ARMORED(1)
    ;

    companion object {
        val moveTypeMap = mapOf("歩行" to MoveType.INFANTRY, "飛行" to MoveType.FLIER, "騎馬" to MoveType.CAVALRY, "重装" to MoveType.ARMORED)
        fun moveTypeOf(key: String) = when {
            moveTypeMap.containsKey(key) -> moveTypeMap[key]
            MoveType.values().any { e -> e.name == key } -> MoveType.valueOf(key)
            else -> null
        }

    }
}

enum class BoonType(val jp: String) {
    NONE("-"),
    HP("HP"),
    ATK("攻撃"),
    SPD("速さ"),
    DEF("守備"),
    RES("魔防")
    ;

    fun localeName(locale: Locale): CharSequence =
            when (locale) {
                Locale.JAPANESE -> jp
                else -> name

            }

    companion object {
        val boonTypeMap = mapOf("HP" to BoonType.HP, "攻撃" to BoonType.ATK, "速さ" to BoonType.SPD, "守備" to BoonType.DEF, "魔防" to BoonType.RES)
        fun boonTypeOf(key: String) = when {
            boonTypeMap.containsKey(key) -> boonTypeMap[key]!!
            BoonType.values().any { e -> e.name == key } -> BoonType.valueOf(key)
            else -> BoonType.NONE
        }
    }

}

/**
 * 戦闘時に攻撃側か受け側か
 */
enum class SIDES {
    NONE,
    ATTACKER,
    COUNTER
}

/**
 * 特効の種類。移動か武器かどちらかだったら楽だったのに
 */
enum class EffectiveAgainst {
    NONE,
    ARMORED,
    FLIER,
    MAGIC,
    CAVALRY,
    DRAGON
    ;

    companion object {
        fun valueOfMoveType(moveType: MoveType): EffectiveAgainst = when (moveType) {
            MoveType.ARMORED -> ARMORED
            MoveType.FLIER -> FLIER
            MoveType.CAVALRY -> CAVALRY
            else -> NONE
        }

        fun valueOfWeaponType(weaponType: WeaponType): EffectiveAgainst = when (weaponType) {
            WeaponType.RTOME -> MAGIC
            WeaponType.GTOME -> MAGIC
            WeaponType.BTOME -> MAGIC
            WeaponType.DRAGON -> DRAGON
            else -> NONE
        }
    }
}

object PreventType{
    val materialPrevent:(BattleUnit) -> Int= {battleUnit->battleUnit.effectedDef}
    val magicPrevent:(BattleUnit) -> Int= {battleUnit->battleUnit.effectedRes}
    val dragonPrevent:(BattleUnit) -> Int= {battleUnit->if(battleUnit.effectiveRange != 2) battleUnit.effectedRes else if(battleUnit.effectedDef < battleUnit.effectedRes) battleUnit.effectedDef else battleUnit.effectedRes}
    val feliciaPrevent:(BattleUnit) -> Int= {battleUnit->if(battleUnit.effectedDef < battleUnit.effectedRes) battleUnit.effectedDef else battleUnit.effectedRes}
}

enum class SkillType(val jp: String, val weaponType: WeaponType? = null,val prevent:(BattleUnit) -> Int=PreventType.materialPrevent) {
    NONE(""),
    A(""),
    B(""),
    C(""),
    SWORD("剣", WeaponType.SWORD),
    LANCE("槍", WeaponType.LANCE),
    AXE("斧", WeaponType.AXE),
    DRAGON("竜", WeaponType.DRAGON),
    PENETRATE_DRAGON("竜", WeaponType.DRAGON, PreventType.dragonPrevent),
    PENETRATE_DAGGER("竜", WeaponType.DRAGON, PreventType.feliciaPrevent),
    RTOME("赤魔", WeaponType.RTOME,PreventType.magicPrevent),
    BTOME("青魔", WeaponType.BTOME,PreventType.magicPrevent),
    GTOME("緑魔", WeaponType.GTOME,PreventType.magicPrevent),
    BOW("弓", WeaponType.BOW),
    DAGGER("暗器", WeaponType.DAGGER),
    STAFF("杖", WeaponType.STAFF,PreventType.magicPrevent),
    ASSIST(""),
    SPECIAL_A(""),
    SPECIAL_B(""),
    SPECIAL_C(""),
    SPECIAL_D(""),
    SEAL(""),
    REFINERY("")
    ;
    val isWeapon get() = weaponType != null
}