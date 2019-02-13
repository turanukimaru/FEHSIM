package jp.blogspot.turanukimaru.fehs

import jp.blogspot.turanukimaru.fehs.skill.Skill

/**
 * スキル効果。これ時間かかるし台湾語は流石に書けないな…追撃・追撃不可のデータ対応先にするべきかなあ
 */
enum class SkillBaseText(val jp: String, val us: String) {
    NONE("", ""),
    //まずは条件ではなく効果だけあればいいか
    TriangleAdept("相性効果", "weapon advantage"),
    AntiTriangleAdept("不利な相性効果相殺", "reverses negative weapon advantage "),
    Breaker("絶対追撃、相手は追撃不可", "makes a guaranteed follow-up attack and foe cannot follow-up attack"),
    Cancel("相手はカウント減少 - 1", "inflicts foe's cooldown charge -1"),//妨害系はgets使えないから平文にするしかないか
    AntiEffectiveAgainst("特効無効化", "neutralizes effective against bonus"),
    EffectiveAgainst("特効", "gets effective against bonus"),
    DoubleAttack("二回攻撃", "attacks twice"),
    FollowupAttack("追撃", "makes follow-up attack"),
    SweepA("追撃不可", "makes cannot follow-up attack"),
    SweepB("相手は反撃不能", " and foe cannot counter attack"),
    FireSweep("どちらも反撃不能", "prevents counterattack"),
    NeutralizeBuffBonus("相手の強化を無効化", "neutralizes foe's bonuses "),
    Blade("攻撃に強化を加算", "adds total bonuses on unit to damage dealt"),
    Dazzling("相手は反撃不能", "prevents foe's counterattack"),
    WrathfulStaff("杖も通常のダメージ", "calculates damage from staff like other weapons"),
    NoFollowupAttackEach("どちらも追撃不可", "prevents follow-up attack"),
    NullFollowupAttack("追撃を無効化", "disables foe's skills that guarantee/prevent follow-up attack"),
    NullCDisrupt("反撃不可を無効化", "disables skills that prevent counterattacks"),
    AntiFollowupAttack("相手は追撃不可", " prevents foe's follow-up attack"),
    HpLoss("戦闘後HP減少 -", "deals damage to unit after combat "),
    HpGain("戦闘後HP回復 +", "restores HP after combat "),
    Pain("相手は戦闘後HP減少", "deals damage to foe after combat "),
    HeavyBlade("攻撃時カウント減少 + ", "special cooldown charge per unit's attack"),
    Breath("攻撃対象時に奥義カウント", "special cooldown charge per foe's attack"),
    HeavyPlate("カウント減少 + ", "special cooldown charge"),
    CounterAllRange("距離に関係なく反撃", "can counterattack regardless of foe's range"),
    DisableChangePlan("攻撃順の変更を無効化", "disables skills that change attack priority"),
    Damage("ダメージ + ", "damage"),//これどうすっかなあ。攻撃についてるから2回呼ばれるんだけど…表示用と計算と別々に作ろうかなあ。flatは単なる関数なんだからBattleEffectで出すか
    Atk("攻撃 + ", "Atk"),
    Spd("速さ + ", "Spd"),
    Def("守備 + ", "Def"),
    Res("魔防 + ", "Res"),
    AtkSpd("攻撃速さ + ", "Atk/Spd"),
    AtkDef("攻撃守備 + ", "Atk/Def"),
    AtkRes("攻撃魔防 + ", "Atk/Res"),
    SpdDef("速さ守備 + ", "Spd/Def"),
    SpdRes("速さ魔防 + ", "Spd/Res"),
    DefRes("守備魔防 + ", "Def/Res"),
    AtkReduce6("相手の攻撃 - ", "reduces foe's Atk by 6"),
    AtkSpdDefRes("攻撃速さ守備魔防 + ", "Atk/Spd/Def/Res"),
    AtkSpdDefResReduce4("相手の攻撃速さ守備魔防 - ", "reduces foe's Atk/Spd/Def/Res by 4"),
    Penetrate("守備と魔防の低いほうを適用", "calculates damage using the lower of foe's Def or Res"),
    AntiPenetrate("守備と魔防の低いほう適用を無効", "disables foe's \"calculates damage using the lower of foe's Def or Res\" skill"),
    ;

    /**
     * ロケールから対応する文字列を出す
     */
    fun localeText(l: Locale): String =
            when (l) {
                Locale.JAPANESE -> jp
//                Locale.TAIWAN -> tw
                else -> us
            }
}

class SkillText(val name: Skill, val text: SkillBaseText, var value: String = "", var next: SkillText? = null) {
    private fun localeText(l: Locale): String = when (l) {
        Locale.JAPANESE -> text.localeText(l) + value + (if (next != null) " , " else "") + (next?.localeText(l)
                ?: "")
        else -> if (value.isNotEmpty()) "gets +" + value + " " + text.localeText(l) + (if (next != null) " and " else "") + (next?.localeText(l)
                ?: "")
        else text.localeText(l) + value + (if (next != null) " and " else "") + (next?.localeText(l)
                ?: "")
    }

    fun toText(l: Locale): String = when (l) {
        Locale.JAPANESE -> localeText(l) + (if (name != Skill.NONE) " ( " + name.localeName(l) + " ) " else "") + ". "
        else -> localeText(l) + (if (name != Skill.NONE) " ( " + name.localeName(l) + " ) " else "") + ". "
    }

    fun add(next: SkillText) {
        if (this.next == next || next.next != null) throw RuntimeException("同じSkillTextを追加しようとしています$name/$text")
        if (this.next != null) this.next?.add(next) else this.next = next
    }
}