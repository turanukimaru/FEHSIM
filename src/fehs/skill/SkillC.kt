package jp.blogspot.turanukimaru.fehs.skill

import jp.blogspot.turanukimaru.fehs.SkillName
import jp.blogspot.turanukimaru.fehs.SkillType
import jp.blogspot.turanukimaru.fehs.SpType

/**
 * スキル。C
 */
enum class SkillC(override val jp: SkillName, override val type: SkillType = SkillType.C, override val level: Int = 0, override val preSkill: Skill = Skill.NONE, override val maxLevel: Int = 3, override val spType: SpType = SpType.BASE50) : Skill {


    SpurAtk(SkillName.SpurAtk),
    SpurSpd(SkillName.SpurSpd),
    SpurDef(SkillName.SpurDef),
    SpurRes(SkillName.SpurRes),
    SpurSpdDef(SkillName.SpurSpdDef, maxLevel = 2, spType = SpType.BASE60),
    SpurSpdRes(SkillName.SpurSpdRes, maxLevel = 2, spType = SpType.BASE60),
    SpurDefRes(SkillName.SpurDefRes, maxLevel = 2, spType = SpType.BASE60),
    SpurAtkSpd(SkillName.SpurAtkSpd, maxLevel = 2, spType = SpType.BASE60),
    SpurAtkDef(SkillName.SpurAtkDef, maxLevel = 2, spType = SpType.BASE60),
    SpurAtkRes(SkillName.SpurAtkRes, maxLevel = 2, spType = SpType.BASE60),
    ThreatenAtk(SkillName.ThreatenAtk),
    ThreatenSpd(SkillName.ThreatenSpd),
    ThreatenDef(SkillName.ThreatenDef),
    ThreatenRes(SkillName.ThreatenRes),
    FortifyDef(SkillName.FortifyDef),
    FortifyRes(SkillName.FortifyRes),
    FortifyBeasts(SkillName.FortifyBeasts, maxLevel = 0, spType = SpType.SHIELD),
    FortifyArmor(SkillName.FortifyArmor, maxLevel = 0, spType = SpType.SHIELD),
    FortifyCavalry(SkillName.FortifyCavalry, maxLevel = 0, spType = SpType.SHIELD),
    FortifyFliers(SkillName.FortifyFliers, maxLevel = 0, spType = SpType.SHIELD),
    FortifyDragons(SkillName.FortifyDragons, maxLevel = 0, spType = SpType.SHIELD),
    HoneAtk(SkillName.HoneAtk, maxLevel = 4),
    HoneSpd(SkillName.HoneSpd, maxLevel = 4),
    JointHoneSpd(SkillName.JointHoneSpd, maxLevel = 0, spType = SpType.LEGEND_S),
    DriveAtk(SkillName.DriveAtk, maxLevel = 2, spType = SpType.BASE60),
    DriveDef(SkillName.DriveDef, maxLevel = 2, spType = SpType.BASE60),
    DriveSpd(SkillName.DriveSpd, maxLevel = 2, spType = SpType.BASE60),
    DriveRes(SkillName.DriveRes, maxLevel = 2, spType = SpType.BASE60),
    HoneBeasts(SkillName.HoneBeasts, maxLevel = 0, spType = SpType.SHIELD),
    HoneArmor(SkillName.HoneArmor, maxLevel = 0, spType = SpType.SHIELD),
    HoneCavalry(SkillName.HoneCavalry, maxLevel = 0, spType = SpType.SHIELD),
    HoneDragons(SkillName.HoneDragons, maxLevel = 0, spType = SpType.SHIELD),
    HoneFliers(SkillName.HoneFliers, maxLevel = 0, spType = SpType.SHIELD),
    GoadArmor(SkillName.GoadArmor, maxLevel = 0, spType = SpType.SHIELD),
    GoadCavalry(SkillName.GoadCavalry, maxLevel = 0, spType = SpType.SHIELD),
    GoadDragons(SkillName.GoadDragons, maxLevel = 0, spType = SpType.SHIELD),
    GoadFliers(SkillName.GoadFliers, maxLevel = 0, spType = SpType.SHIELD),
    GoadBeasts(SkillName.GoadBeasts, maxLevel = 0, spType = SpType.SHIELD),
    WardArmor(SkillName.WardArmor, maxLevel = 0, spType = SpType.SHIELD),
    WardCavalry(SkillName.WardCavalry, maxLevel = 0, spType = SpType.SHIELD),
    WardDragons(SkillName.WardDragons, maxLevel = 0, spType = SpType.SHIELD),
    WardFliers(SkillName.WardFliers, maxLevel = 0, spType = SpType.SHIELD),
    WardBeasts(SkillName.WardBeasts, maxLevel = 0, spType = SpType.SHIELD),
    SavageBlow(SkillName.SavageBlow),
    BreathOfLife(SkillName.BreathOfLife),
    SwordExperience(SkillName.SwordExperience, spType = SpType.BASE30),
    SwordValor(SkillName.SwordValor, spType = SpType.BASE30),
    AxeExperience(SkillName.AxeExperience, spType = SpType.BASE30),
    AxeValor(SkillName.AxeValor, spType = SpType.BASE30),
    BowExperience(SkillName.BowExperience, spType = SpType.BASE30),
    LanceValor(SkillName.LanceValor, spType = SpType.BASE30),
    BowValor(SkillName.BowValor, spType = SpType.BASE30),
    DaggerValor(SkillName.DaggerValor, spType = SpType.BASE30),
    RTomeExperience(SkillName.RTomeExperience, spType = SpType.BASE30),
    RTomeValor(SkillName.RTomeValor, spType = SpType.BASE30),
    BTomeExperience(SkillName.BTomeExperience, spType = SpType.BASE30),
    BTomeValor(SkillName.BTomeValor, spType = SpType.BASE30),
    GTomeExperience(SkillName.GTomeExperience, spType = SpType.BASE30),
    GTomeValor(SkillName.GTomeValor, spType = SpType.BASE30),
    DragonValor(SkillName.DragonValor, spType = SpType.BASE30),
    StaffValor(SkillName.StaffValor, spType = SpType.BASE30),
    BeastValor(SkillName.BeastValor, spType = SpType.BASE30),
    PanicPloy(SkillName.PanicPloy, spType = SpType.BASE60),
    AtkPloy(SkillName.AtkPloy, spType = SpType.BASE60),
    SpdPloy(SkillName.SpdPloy, spType = SpType.BASE60),
    DefPloy(SkillName.DefPloy, spType = SpType.BASE60),
    ResPloy(SkillName.ResPloy, spType = SpType.BASE60),
    InfantryPulse(SkillName.InfantryPulse, spType = SpType.BASE60),
    AtkSmoke(SkillName.AtkSmoke, spType = SpType.BASE60),
    SpdSmoke(SkillName.SpdSmoke, spType = SpType.BASE60),
    DefSmoke(SkillName.DefSmoke, spType = SpType.BASE60),
    ResSmoke(SkillName.ResSmoke, spType = SpType.BASE60),
    ArmorMarch(SkillName.ArmorMarch, spType = SpType.BASE60),
    Guidance(SkillName.Guidance, spType = SpType.BASE60),
    AtkTactic(SkillName.AtkTactic, spType = SpType.BASE60),
    SpdTactic(SkillName.SpdTactic, spType = SpType.BASE60),
    DefTactic(SkillName.DefTactic, spType = SpType.BASE60),
    ResTactic(SkillName.ResTactic, spType = SpType.BASE60),
    FlierGuidance(SkillName.FlierGuidance, spType = SpType.BASE60),
    OddAtkWave(SkillName.OddAtkWave, spType = SpType.BASE60),
    OddSpdWave(SkillName.OddSpdWave, spType = SpType.BASE60),
    OddDefWave(SkillName.OddDefWave, spType = SpType.BASE60),
    OddResWave(SkillName.OddResWave, spType = SpType.BASE60),
    EvenAtkWave(SkillName.EvenAtkWave, spType = SpType.BASE60),
    EvenSpdWave(SkillName.EvenSpdWave, spType = SpType.BASE60),
    EvenDefWave(SkillName.EvenDefWave, spType = SpType.BASE60),
    EvenResWave(SkillName.EvenResWave, spType = SpType.BASE60),
    InfantryRush(SkillName.InfantryRush, spType = SpType.BASE60),
    DistantGuard(SkillName.DistantGuard, spType = SpType.BASE60),
    CloseGuard(SkillName.CloseGuard, spType = SpType.BASE60),
    InfantryFlash(SkillName.InfantryFlash, spType = SpType.BASE60),
    OstiasPulse(SkillName.OstiasPulse, maxLevel = 0, spType = SpType.LEGEND_S),
    WithEveryone(SkillName.WithEveryone, maxLevel = 0, spType = SpType.LEGEND_S),
    SurtrsMenace(SkillName.SurtrsMenace, maxLevel = 0, spType = SpType.LEGEND_S),
    SparklingBoost(SkillName.SparklingBoost, maxLevel = 0, spType = SpType.LEGEND_S),
    AtkOpening(SkillName.AtkOpening, spType = SpType.BASE60),
    SpdOpening(SkillName.SpdOpening, spType = SpType.BASE60),
    DefOpening(SkillName.DefOpening, spType = SpType.BASE60),
    ResOpening(SkillName.ResOpening, spType = SpType.BASE60),
    Glare(SkillName.Glare, maxLevel = 0, spType = SpType.LEGEND_S),
    AirOrders(SkillName.AirOrders, spType = SpType.BASE60),
    Upheaval(SkillName.Upheaval, maxLevel = 0, spType = SpType.LEGEND_S),
    HumanVirtue(SkillName.HumanVirtue, maxLevel = 0, spType = SpType.LEGEND_S),
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
        fun spreadItems(none: Boolean = false): List<Skill> = values().fold(if (none) mutableListOf<Skill>(Skill.NONE) else mutableListOf()) { list, e ->
            if (e.maxLevel == 0) {
                list.add(e)
            } else (1..e.maxLevel).forEach { i -> list.add(e.lv(i)) };list
        }

        fun spreadMaxLvItems(none: Boolean = false): List<Skill> = values().fold(if (none) mutableListOf<Skill>(Skill.NONE) else mutableListOf()) { list, e ->
            if (e.maxLevel == 0) {
                list.add(e)
            } else list.add(e.lv(e.maxLevel));list
        }

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