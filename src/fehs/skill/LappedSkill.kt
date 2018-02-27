package jp.blogspot.turanukimaru.fehs.skill

import jp.blogspot.turanukimaru.fehs.Locale

class LappedSkill(val skill: Skill, override val level: Int) : Skill by skill {

    override fun localeName(locale: Locale): String = skill.jp.localeName(locale) + if (level > 0) " " + level else ""

    /**
     * スキル名
     */
    override val value: String get() = skill.value + if (level > 0) " " + level else ""

    /**
     * スキル名＋あればレベル
     */
    override fun toString(): String = value

    /**
     * スキルとレベルが等しいときはequal.Skills側でガードはしているがついで。
     */
    override fun equals(other: Any?): Boolean = when (other) {
        is Skill -> other == skill && other.level == level
        is LappedSkill -> other.skill == skill && other.level == level
        else -> false
    }

    /**
     * ハッシュコードは単純にレベルが0でないときはレベルのハッシュを足す。レベルが0の時は元のスキル（デフォルトでレベル0）と同じだから
     */
    override fun hashCode(): Int = if (level == 0) skill.hashCode() else skill.hashCode() + level.hashCode()
}