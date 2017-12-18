package jp.blogspot.turanukimaru.fehs.skill

import jp.blogspot.turanukimaru.fehs.Locale

/**
 * スキル。C
 */
enum class SkillC(override val jp: String, override val type: Skill.SkillType, override val level: Int = 0, override val preSkill: Skill = Skill.Companion.NONE, override val maxLevel: Int = 3) : Skill {


    SpurAtk("攻撃の紋章", Skill.SkillType.C),
    SpurSpd("速さの紋章", Skill.SkillType.C),
    SpurDef("守備の紋章", Skill.SkillType.C),
    SpurRes("魔防の紋章", Skill.SkillType.C),
    SpurDefRes("守備魔防の紋章", Skill.SkillType.C, maxLevel = 2),
    SpurSpdDef("速さ守備の紋章", Skill.SkillType.C, maxLevel = 2),
    ThreatenAtk("攻撃の威嚇", Skill.SkillType.C),
    ThreatenSpd("速さの威嚇", Skill.SkillType.C),
    ThreatenDef("守備の威嚇", Skill.SkillType.C),
    ThreatenRes("魔防の威嚇", Skill.SkillType.C),
    FortifyDef("守備の鼓舞", Skill.SkillType.C),
    FortifyRes("魔防の鼓舞", Skill.SkillType.C),
    FortifyArmor("重盾の鼓舞", Skill.SkillType.C, maxLevel = 0),
    FortifyCavalry("騎盾の鼓舞", Skill.SkillType.C, maxLevel = 0),
    FortifyFliers("飛盾の鼓舞", Skill.SkillType.C, maxLevel = 0),
    FortifyDragons("竜盾の鼓舞", Skill.SkillType.C, maxLevel = 0),
    HoneAtk("攻撃の鼓舞", Skill.SkillType.C),
    HoneSpd("速さの鼓舞", Skill.SkillType.C),
    DriveAtk("攻撃の大紋章", Skill.SkillType.C, maxLevel = 2),
    DriveDef("守備の大紋章", Skill.SkillType.C, maxLevel = 2),
    DriveSpd("速さの大紋章", Skill.SkillType.C, maxLevel = 2),
    DriveRes("魔防の大紋章", Skill.SkillType.C, maxLevel = 2),
    HoneArmor("重刃の鼓舞", Skill.SkillType.C, maxLevel = 0),
    HoneCavalry("騎刃の鼓舞", Skill.SkillType.C, maxLevel = 0),
    HoneFliers("飛刃の鼓舞", Skill.SkillType.C, maxLevel = 0),
    GoadArmor("重刃の紋章", Skill.SkillType.C, maxLevel = 0),
    GoadCavalry("騎刃の紋章", Skill.SkillType.C, maxLevel = 0),
    GoadFliers("飛刃の紋章", Skill.SkillType.C, maxLevel = 0),
    WardArmor("重盾の紋章", Skill.SkillType.C, maxLevel = 0),
    WardCavalry("騎盾の紋章", Skill.SkillType.C, maxLevel = 0),
    WardFliers("飛盾の紋章", Skill.SkillType.C, maxLevel = 0),
    SavageBlow("死の吐息", Skill.SkillType.C),
    BreathOfLife("生の息吹", Skill.SkillType.C),
    SwordExperience("剣の経験", Skill.SkillType.C),
    AxeExperience("斧の経験", Skill.SkillType.C),
    BowExperience("弓の経験", Skill.SkillType.C),
    BTomeExperience("青魔の経験", Skill.SkillType.C),
    SwordValor("剣の技量", Skill.SkillType.C),
    LanceValor("槍の技量", Skill.SkillType.C),
    AxeValor("斧の技量", Skill.SkillType.C),
    DaggerValor("暗器の技量", Skill.SkillType.C),
    RTomeValor("赤魔の技量", Skill.SkillType.C),
    BTomeValor("青魔の技量", Skill.SkillType.C),
    GTomeValor("緑魔の技量", Skill.SkillType.C),
    PanicPloy("恐慌の奇策", Skill.SkillType.C),
    AtkPloy("攻撃の謀策", Skill.SkillType.C),
    SpdPloy("速さの謀策", Skill.SkillType.C),
    DefPloy("守備の謀策", Skill.SkillType.C),
    ResPloy("魔防の謀策", Skill.SkillType.C),
    InfantryPulse("歩行の鼓動", Skill.SkillType.C),
    AtkSmoke("攻撃の紫煙", Skill.SkillType.C),
    SpdSmoke("速さの紫煙", Skill.SkillType.C),
    ArmorMarch("重装の行軍", Skill.SkillType.C),
    Guidance("空からの先導", Skill.SkillType.C),
    AtkTactic("攻撃の指揮", Skill.SkillType.C),
    DefTactic("守備の指揮", Skill.SkillType.C),

    ;

    /**
     * 同じスキルの別レベルを作成する。レベルがそのままなら自分自身のまま。
     * レベルのないスキル、武器や奥義は攻撃力やクールダウンが入っているので注意
     */
    fun lv(lv: Int) = if (level == lv) this else LappedSkill(this, lv)

    /**
     * nameは誤動作するので共通処理としてはvalueを使う。もっといい名前があるか？
     */
    override val value get() = name

    override fun localeName(locale: Locale): String =
            when (locale) {
                Locale.JAPAN -> jp
                Locale.JAPANESE -> jp
                else -> value

            }

    companion object {
        fun spreadItems(): List<Skill> = values().fold(arrayListOf<Skill>(Skill.NONE), { list, e -> (1..e.maxLevel).forEach({ i -> list.add(e.lv(i)) });list })
        private val itemMap = mutableMapOf<String, SkillC>()

        fun valueOfOrNONE(key: String?): Skill = if (key == null) Skill.NONE
        else {
            try {
                if (itemMap.isEmpty()) {
                    values().forEach { e -> itemMap.put(e.jp, e) }
                    values().forEach { e -> itemMap.put(e.value, e) }
                }
                val regex = " \\d".toRegex()

                val lv = regex.find(key)
                if (lv != null) {
                    val skill = regex.replaceFirst(key, "")

                    (itemMap[skill] ?: valueOf(skill)).lv(lv.value.trim().toInt())
                } else itemMap[key] ?: valueOf(key)
            } catch (e: Exception) {
                println(e)
                Skill.NONE
            }
        }
    }

}