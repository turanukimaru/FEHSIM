package jp.blogspot.turanukimaru.fehs.skill

import jp.blogspot.turanukimaru.fehs.Locale

class LappedSkill(val skill: Skill, override val level: Int) : Skill by skill {

    override fun localeName(locale: Locale): String =
            when (locale) {
                Locale.JAPAN -> skill.jp + if (level > 0) " " + level else ""
                Locale.JAPANESE -> skill.jp + if (level > 0) " " + level else ""
                else -> skill.value + if (level > 0) " " + level else ""

            }

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
}