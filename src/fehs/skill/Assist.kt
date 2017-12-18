package jp.blogspot.turanukimaru.fehs.skill

import jp.blogspot.turanukimaru.fehs.Locale


/**
 * スキル。補助
 */
enum class Assist(override val jp: String, override val type: Skill.SkillType, override val level: Int = 0, override val preSkill: Skill = Skill.NONE) : Skill {


    RallyAttack("攻撃の応援", Skill.SkillType.ASSIST),
    RallySpeed("速さの応援", Skill.SkillType.ASSIST),
    RallyDefense("守備の応援", Skill.SkillType.ASSIST),
    RallyResistance("魔防の応援", Skill.SkillType.ASSIST),
    RallyAtkSpd("攻撃速さの応援", Skill.SkillType.ASSIST),
    RallyAtkDef("攻撃守備の応援", Skill.SkillType.ASSIST),
    RallyAtkRes("攻撃魔防の応援", Skill.SkillType.ASSIST),
    RallyDefRes("守備魔防の応援", Skill.SkillType.ASSIST),
    RallySpdDef("速さ守備の応援", Skill.SkillType.ASSIST),
    RallySpdRes("速さ魔防の応援", Skill.SkillType.ASSIST),
    Sing("歌う", Skill.SkillType.ASSIST),
    Dance("踊る", Skill.SkillType.ASSIST),
    ReciprocalAid("相互援助", Skill.SkillType.ASSIST),
    Heal("ライブ", Skill.SkillType.ASSIST),
    Reconcile("ヒール", Skill.SkillType.ASSIST),
    Rehabilitate("リバース", Skill.SkillType.ASSIST),
    Mend("リライブ", Skill.SkillType.ASSIST),
    Recover("リカバー", Skill.SkillType.ASSIST),
    Physic("リブロー", Skill.SkillType.ASSIST),
    Martyr("セインツ", Skill.SkillType.ASSIST),
    ArdentSacrifice("献身", Skill.SkillType.ASSIST),
    Swap("入れ替え", Skill.SkillType.ASSIST),
    Pivot("回り込み", Skill.SkillType.ASSIST),
    Reposition("引き戻し", Skill.SkillType.ASSIST),
    DrawBack("引き寄せ", Skill.SkillType.ASSIST),
    Shove("体当たり", Skill.SkillType.ASSIST),
    Smite("ぶちかまし", Skill.SkillType.ASSIST),
    HarshCommand("一喝", Skill.SkillType.ASSIST),
    ;

    /**
     * nameは誤動作するので共通処理としてはvalueを使う。もっといい名前があるか？
     * なお2を＋に置き換える。
     */
    override val value get() = name.replace("2", "+")

    override fun localeName(locale: Locale): String =
         when (locale) {
            Locale.JAPAN -> jp
            Locale.JAPANESE -> jp
            else -> value
        }

    companion object {
       private val itemMap = mutableMapOf<String, Skill>()
        fun spreadItems(): List<Skill> = values().fold(arrayListOf<Skill>(Skill.NONE), { list, e -> list.add(e);list })

        fun valueOfOrNONE(key: String?): Skill = if (key == null) Skill.NONE else try {
            if (itemMap.isEmpty()) {
                values().forEach { e -> itemMap.put(e.jp, e) }
                values().forEach { e -> itemMap.put(e.value, e) }
            }
            itemMap[key] ?: valueOf(key)
        } catch (e: Exception) {
            Skill.NONE
        }
    }
}
