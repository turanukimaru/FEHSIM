package jp.blogspot.turanukimaru.fehs.skill

import jp.blogspot.turanukimaru.fehs.SkillName
import jp.blogspot.turanukimaru.fehs.SkillType
import jp.blogspot.turanukimaru.fehs.SpType


/**
 * スキル。補助
 */
enum class Assist(override val jp: SkillName, override val type: SkillType, override val level: Int = 0, override val preSkill: Skill = Skill.NONE, override val spType: SpType = SpType.ASSIST) : Skill {
    RallyAttack(SkillName.RallyAttack, SkillType.ASSIST),
    RallySpeed(SkillName.RallySpeed, SkillType.ASSIST),
    RallyDefense(SkillName.RallyDefense, SkillType.ASSIST),
    RallyResistance(SkillName.RallyResistance, SkillType.ASSIST),
    RallyAtkSpd(SkillName.RallyAtkSpd, SkillType.ASSIST, spType = SpType.ASSIST2),
    RallyAtkDef(SkillName.RallyAtkDef, SkillType.ASSIST, spType = SpType.ASSIST2),
    RallyAtkRes(SkillName.RallyAtkRes, SkillType.ASSIST, spType = SpType.ASSIST2),
    RallyDefRes(SkillName.RallyDefRes, SkillType.ASSIST, spType = SpType.ASSIST2),
    RallySpdDef(SkillName.RallySpdDef, SkillType.ASSIST, spType = SpType.ASSIST2),
    RallySpdRes(SkillName.RallySpdRes, SkillType.ASSIST, spType = SpType.ASSIST2),
    RallyUpAtk(SkillName.RallyUpAtk, SkillType.ASSIST, spType = SpType.ASSIST2),
    RallyUpAtk2(SkillName.RallyUpAtk2, SkillType.ASSIST, spType = SpType.ASSIST3),
    RallySpdDef2(SkillName.RallySpdDef2, SkillType.ASSIST, spType = SpType.ASSIST3),
    RallyAtkSpd2(SkillName.RallyAtkSpd2, SkillType.ASSIST, spType = SpType.ASSIST3),
    RallyDefRes2(SkillName.RallyDefRes2, SkillType.ASSIST, spType = SpType.ASSIST3),
    Sing(SkillName.Sing, SkillType.ASSIST),
    Dance(SkillName.Dance, SkillType.ASSIST),
    GrayWaves(SkillName.GrayWaves, SkillType.ASSIST, spType = SpType.LEGEND_W),
    ReciprocalAid(SkillName.ReciprocalAid, SkillType.ASSIST),
    ArdentSacrifice(SkillName.ArdentSacrifice, SkillType.ASSIST),
    Swap(SkillName.Swap, SkillType.ASSIST),
    Pivot(SkillName.Pivot, SkillType.ASSIST),
    Reposition(SkillName.Reposition, SkillType.ASSIST),
    DrawBack(SkillName.DrawBack, SkillType.ASSIST),
    Sacrifice(SkillName.Shove, SkillType.ASSIST),
    Shove(SkillName.Shove, SkillType.ASSIST),
    Smite(SkillName.Smite, SkillType.ASSIST),
    HarshCommand(SkillName.HarshCommand, SkillType.ASSIST),
    FutureVision(SkillName.FutureVision, SkillType.ASSIST, spType = SpType.LEGEND_W),
    //杖の＋どうするかな。実装のメリットあんましないよなあ.でもSP計算に要るのか…
    Heal(SkillName.Heal, SkillType.ASSIST),
    Reconcile(SkillName.Reconcile, SkillType.ASSIST),
    Rehabilitate(SkillName.Rehabilitate, SkillType.ASSIST),
    Rehabilitate2(SkillName.Rehabilitate2, SkillType.ASSIST),
    Mend(SkillName.Mend, SkillType.ASSIST),
    Recover(SkillName.Recover, SkillType.ASSIST),
    Recover2(SkillName.Recover2, SkillType.ASSIST),
    Restore(SkillName.Restore, SkillType.ASSIST),
    Restore2(SkillName.Restore2, SkillType.ASSIST),
    Physic(SkillName.Physic, SkillType.ASSIST),
    Physic2(SkillName.Physic2, SkillType.ASSIST),
    Martyr(SkillName.Martyr, SkillType.ASSIST),
    Martyr2(SkillName.Martyr2, SkillType.ASSIST),
    ;

    /**
     * nameは誤動作するので共通処理としてはvalueを使う。もっといい名前があるか？
     */
    override val value get() = name

    companion object {
        private val itemMap = mutableMapOf<String, Skill>()
        fun spreadItems(none: Boolean = false): List<Skill> = values().fold(if (none) mutableListOf<Skill>(Skill.NONE) else mutableListOf()) { list, e -> list.add(e);list }

        fun valueOfOrNONE(key: String?): Skill = if (key == null) Skill.NONE else try {
            if (itemMap.isEmpty()) {
                values().forEach { e -> itemMap[e.value] = e;itemMap[e.jp.jp] = e;itemMap[e.jp.us] = e;itemMap[e.jp.tw] = e }
            }
            itemMap[key] ?: valueOf(key)
        } catch (e: Exception) {
            Skill.NONE
        }
    }
}
