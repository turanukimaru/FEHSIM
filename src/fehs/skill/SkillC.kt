package jp.blogspot.turanukimaru.fehs.skill

import jp.blogspot.turanukimaru.fehs.Name
import jp.blogspot.turanukimaru.fehs.SkillType

/**
 * スキル。C
 */
enum class SkillC(override val jp: Name, override val type: SkillType, override val level: Int = 0, override val preSkill: Skill = Skill.Companion.NONE, override val maxLevel: Int = 3) : Skill {


    SpurAtk(Name.SpurAtk, SkillType.C),
    SpurSpd(Name.SpurSpd, SkillType.C),
    SpurDef(Name.SpurDef, SkillType.C),
    SpurRes(Name.SpurRes, SkillType.C),
    SpurDefRes(Name.SpurDefRes, SkillType.C, maxLevel = 2),
    SpurSpdDef(Name.SpurSpdDef, SkillType.C, maxLevel = 2),
    SpurAtkSpd(Name.SpurAtkSpd, SkillType.C, maxLevel = 2),
    SpurAtkDef(Name.SpurAtkDef, SkillType.C, maxLevel = 2),
    ThreatenAtk(Name.ThreatenAtk, SkillType.C),
    ThreatenSpd(Name.ThreatenSpd, SkillType.C),
    ThreatenDef(Name.ThreatenDef, SkillType.C),
    ThreatenRes(Name.ThreatenRes, SkillType.C),
    FortifyDef(Name.FortifyDef, SkillType.C),
    FortifyRes(Name.FortifyRes, SkillType.C),
    FortifyArmor(Name.FortifyArmor, SkillType.C, maxLevel = 0),
    FortifyCavalry(Name.FortifyCavalry, SkillType.C, maxLevel = 0),
    FortifyFliers(Name.FortifyFliers, SkillType.C, maxLevel = 0),
    FortifyDragons(Name.FortifyDragons, SkillType.C, maxLevel = 0),
    HoneAtk(Name.HoneAtk, SkillType.C),
    HoneSpd(Name.HoneSpd, SkillType.C),
    DriveAtk(Name.DriveAtk, SkillType.C, maxLevel = 2),
    DriveDef(Name.DriveDef, SkillType.C, maxLevel = 2),
    DriveSpd(Name.DriveSpd, SkillType.C, maxLevel = 2),
    DriveRes(Name.DriveRes, SkillType.C, maxLevel = 2),
    HoneArmor(Name.HoneArmor, SkillType.C, maxLevel = 0),
    HoneCavalry(Name.HoneCavalry, SkillType.C, maxLevel = 0),
    HoneDragons(Name.HoneDragons, SkillType.C, maxLevel = 0),
    HoneFliers(Name.HoneFliers, SkillType.C, maxLevel = 0),
    GoadArmor(Name.GoadArmor, SkillType.C, maxLevel = 0),
    GoadCavalry(Name.GoadCavalry, SkillType.C, maxLevel = 0),
    GoadDragons(Name.GoadDragons, SkillType.C, maxLevel = 0),
    GoadFliers(Name.GoadFliers, SkillType.C, maxLevel = 0),
    WardArmor(Name.WardArmor, SkillType.C, maxLevel = 0),
    WardCavalry(Name.WardCavalry, SkillType.C, maxLevel = 0),
    WardDragons(Name.WardDragons, SkillType.C, maxLevel = 0),
    WardFliers(Name.WardFliers, SkillType.C, maxLevel = 0),
    SavageBlow(Name.SavageBlow, SkillType.C),
    BreathOfLife(Name.BreathOfLife, SkillType.C),
    SwordExperience(Name.SwordExperience, SkillType.C),
    AxeExperience(Name.AxeExperience, SkillType.C),
    BowExperience(Name.BowExperience, SkillType.C),
    BTomeExperience(Name.BTomeExperience, SkillType.C),
    SwordValor(Name.SwordValor, SkillType.C),
    LanceValor(Name.LanceValor, SkillType.C),
    AxeValor(Name.AxeValor, SkillType.C),
    BowValor(Name.BowValor, SkillType.C),
    DaggerValor(Name.DaggerValor, SkillType.C),
    RTomeValor(Name.RTomeValor, SkillType.C),
    RTomeExperience(Name.RTomeExperience, SkillType.C),
    BTomeValor(Name.BTomeValor, SkillType.C),
    GTomeValor(Name.GTomeValor, SkillType.C),
    GTomeExperience(Name.GTomeExperience, SkillType.C),
    PanicPloy(Name.PanicPloy, SkillType.C),
    AtkPloy(Name.AtkPloy, SkillType.C),
    SpdPloy(Name.SpdPloy, SkillType.C),
    DefPloy(Name.DefPloy, SkillType.C),
    ResPloy(Name.ResPloy, SkillType.C),
    InfantryPulse(Name.InfantryPulse, SkillType.C),
    AtkSmoke(Name.AtkSmoke, SkillType.C),
    SpdSmoke(Name.SpdSmoke, SkillType.C),
    DefSmoke(Name.DefSmoke, SkillType.C),
    ResSmoke(Name.ResSmoke, SkillType.C),
    ArmorMarch(Name.ArmorMarch, SkillType.C),
    Guidance(Name.Guidance, SkillType.C),
    AtkTactic(Name.AtkTactic, SkillType.C),
    SpdTactic(Name.SpdTactic, SkillType.C),
    DefTactic(Name.DefTactic, SkillType.C),
    ResTactic(Name.ResTactic, SkillType.C),
    FlierGuidance(Name.FlierGuidance, SkillType.C),
    OddAtkWave(Name.OddAtkWave, SkillType.C),
    EvenSpdWave(Name.EvenSpdWave, SkillType.C),
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

    //   override fun localeName(locale: Locale): String =jp.localeName(locale)

    companion object {
        fun spreadItems(none: Boolean = false): List<Skill> = values().fold(if (none) arrayListOf<Skill>(Skill.NONE) else arrayListOf(), { list, e ->
            if (e.maxLevel == 0) {
                list.add(e)
            } else (1..e.maxLevel).forEach({ i -> list.add(e.lv(i)) });list
        })

        private val itemMap = mutableMapOf<String, SkillC>()

        fun valueOfOrNONE(key: String?): Skill = if (key == null) Skill.NONE
        else {
            try {
                if (itemMap.isEmpty()) {
                    values().forEach { e -> itemMap[e.value] = e;itemMap[e.jp.jp] = e;itemMap[e.jp.us] = e;itemMap[e.jp.tw] = e }
                }
                val regex = " \\d".toRegex()

                val lv = regex.find(key)
                if (lv != null) {
                    val skill = regex.replaceFirst(key, "")

                    (itemMap[skill] ?: valueOf(skill)).lv(lv.value.trim().toInt())
                } else itemMap[key] ?: valueOf(key)
            } catch (e: Exception) {
//                println(e)
                Skill.NONE
            }
        }
    }

}