package jp.blogspot.turanukimaru.fehs.skill

import jp.blogspot.turanukimaru.fehs.Name
import jp.blogspot.turanukimaru.fehs.SkillType


/**
 * スキル。補助
 */
enum class Assist(override val jp: Name, override val type: SkillType, override val level: Int = 0, override val preSkill: Skill = Skill.NONE) : Skill {


    RallyAttack(Name.RallyAttack, SkillType.ASSIST),
    RallySpeed(Name.RallySpeed, SkillType.ASSIST),
    RallyDefense(Name.RallyDefense, SkillType.ASSIST),
    RallyResistance(Name.RallyResistance, SkillType.ASSIST),
    RallyAtkSpd(Name.RallyAtkSpd, SkillType.ASSIST),
    RallyAtkDef(Name.RallyAtkDef, SkillType.ASSIST),
    RallyAtkRes(Name.RallyAtkRes, SkillType.ASSIST),
    RallyDefRes(Name.RallyDefRes, SkillType.ASSIST),
    RallySpdDef(Name.RallySpdDef, SkillType.ASSIST),
    RallySpdRes(Name.RallySpdRes, SkillType.ASSIST),
    Sing(Name.Sing, SkillType.ASSIST),
    Dance(Name.Dance, SkillType.ASSIST),
    ReciprocalAid(Name.ReciprocalAid, SkillType.ASSIST),
    Heal(Name.Heal, SkillType.ASSIST),
    Reconcile(Name.Reconcile, SkillType.ASSIST),
    Rehabilitate(Name.Rehabilitate, SkillType.ASSIST),
    Mend(Name.Mend, SkillType.ASSIST),
    Recover(Name.Recover, SkillType.ASSIST),
    Physic(Name.Physic, SkillType.ASSIST),
    Martyr(Name.Martyr, SkillType.ASSIST),
    ArdentSacrifice(Name.ArdentSacrifice, SkillType.ASSIST),
    Swap(Name.Swap, SkillType.ASSIST),
    Pivot(Name.Pivot, SkillType.ASSIST),
    Reposition(Name.Reposition, SkillType.ASSIST),
    DrawBack(Name.DrawBack, SkillType.ASSIST),
    Sacrifice(Name.Shove, SkillType.ASSIST),
    Shove(Name.Shove, SkillType.ASSIST),
    Smite(Name.Smite, SkillType.ASSIST),
    HarshCommand(Name.HarshCommand, SkillType.ASSIST),
    ;

    /**
     * nameは誤動作するので共通処理としてはvalueを使う。もっといい名前があるか？
     * なお2を＋に置き換える。
     */
    override val value get() = name.replace("2", "+")

    //  override fun localeName(locale: Locale): String =jp.localeName(locale)

    companion object {
        private val itemMap = mutableMapOf<String, Skill>()
        fun spreadItems(none: Boolean = false): List<Skill> = values().fold(if (none) arrayListOf<Skill>(Skill.NONE) else arrayListOf(), { list, e -> list.add(e);list })

        fun valueOfOrNONE(key: String?): Skill = if (key == null) Skill.NONE else try {
            if (itemMap.isEmpty()) {
                values().forEach { e -> itemMap.put(e.value, e);itemMap.put(e.jp.jp, e);itemMap.put(e.jp.us, e);itemMap.put(e.jp.tw, e) }
            }
            itemMap[key] ?: valueOf(key)
        } catch (e: Exception) {
            Skill.NONE
        }
    }
}
