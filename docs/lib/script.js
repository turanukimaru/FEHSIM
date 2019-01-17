//何度も使うのでグローバル
var fehs = FEHSIM.jp.blogspot.turanukimaru.fehs
var i = 0
//全てのヒーローを取り出してソートする。toArray()でJSのArrayになる。
console.log(0)
var allHeroes = fehs.StandardBaseHero.allItems().toArray().sort(function (a, b) {
    if (a.heroName > b.heroName) {
        return 1
    } else if (a.heroName < b.heroName) {
        return -1
    } else {
        return 0
    }
})
var locale = fehs.Locale.JAPANESE
console.log(1)

var changeLanguage = function(){
console.log("changeLanguage")
console.log("")
var val =$('input[name=language]:checked').val()
locale=fehs.Locale.valueOf_61zpoe$(val)

    var heroNames = allHeroes.map(function (e, i, a) {
        return $('<option>', {value: e.name, text: e.heroName.localeName_miixs2$(locale)})
    })

    var weapons = fehs.skill.Weapon.Companion.allWeapons_0.toArray().map(function (e, i, a) {
        return $('<option>', {value: e.name, text: e.localeName_miixs2$(locale)})
    })

    var assists = fehs.skill.Assist.values().map(function (e, i, a) {
        return $('<option>', {value: e.name, text: e.localeName_miixs2$(locale)})
    })
    var specials = fehs.skill.Special.values().map(function (e, i, a) {
        return $('<option>', {value: e.name, text: e.localeName_miixs2$(locale)})
    })
    var skillAs = fehs.skill.SkillA.Companion.spreadItems_6taknv$().toArray().map(function (e, i, a) {
        return $('<option>', {value: e.value, text: e.localeName_miixs2$(locale)})
    })
    var skillBs = fehs.skill.SkillB.Companion.spreadItems_6taknv$().toArray().map(function (e, i, a) {
        return $('<option>', {value: e.value, text: e.localeName_miixs2$(locale)})
    })
    var skillCs = fehs.skill.SkillC.Companion.spreadItems_6taknv$().toArray().map(function (e, i, a) {
        return $('<option>', {value: e.value, text: e.localeName_miixs2$(locale)})
    })
    var seals = fehs.skill.Seal.Companion.spreadItems_6taknv$().toArray().map(function (e, i, a) {
        return $('<option>', {value: e.value, text: e.localeName_miixs2$(locale)})
    })

    $(".attacker").children().remove()
    $(".weapon").children().remove()
    $(".assist").children().remove()
    $(".special").children().remove()
    $(".skillA").children().remove()
    $(".skillB").children().remove()
    $(".skillC").children().remove()
    $(".seal").children().remove()
$(".BoonBane").children().remove()
$(".Buffs").children().remove()
$(".Skills").children().remove()

    $(".attacker").append(heroNames)
    $(".weapon").append($('<option>', {value: "", text: "武器"})).append(weapons)
    $(".assist").append($('<option>', {value: "", text: "補助スキル"})).append(assists)
    $(".special").append($('<option>', {value: "", text: "奥義"})).append(specials)
    $(".skillA").append($('<option>', {value: "", text: "A"})).append(skillAs)
    $(".skillB").append($('<option>', {value: "", text: "B"})).append(skillBs)
    $(".skillC").append($('<option>', {value: "", text: "C"})).append(skillCs)
    $(".seal").append($('<option>', {value: "", text: "聖印"})).append(seals)
//    $(".refine").append($('<option>', {value: "", text: "錬成"})).append(refines)
    $(".BoonBane").append($("#BoonBane").contents().clone())
    $(".Buffs").append($("#Buffs").contents().clone()).hide()
    $(".Skills").append($("#Skills").contents().clone()).hide()
    $("#Buffs").hide()
    $("#Skills").hide()
    $("#heroes .delete").hide()
$("#showSkillOptions").prop("checked",false)
    calculateAll()
}
$(document).ready(function(){changeLanguage()})
console.log(2)

var readParams = function (target) {
console.log("readParams")
    var wp = target.find(".weapon").val()
    var as = target.find(".assist").val()
    var sp = target.find(".special").val()
    var sa = target.find(".skillA").val()
    var sb = target.find(".skillB").val()
    var sc = target.find(".skillC").val()
    var sl = target.find(".seal").val()
    var re = target.find(".refine").val()
    var bn = target.find(".boon").val()
    var be = target.find(".bane").val()

    return {
        rarity: target.find(".rarity").val()
        , level: target.find(".level").val()
        , defensive: !!target.find(".defensive:checked").val()
        , atkBuff: target.find(".atkBuff").val()-0
        , spdBuff: target.find(".spdBuff").val()-0
        , defBuff: target.find(".defBuff").val()-0
        , resBuff: target.find(".resBuff").val()-0
        , atkDebuff: target.find(".atkDebuff").val()-0
        , spdDebuff: target.find(".spdDebuff").val()-0
        , defDebuff: target.find(".defDebuff").val()-0
        , resDebuff: target.find(".resDebuff").val()-0
        , atkSpur: target.find(".atkSpur").val()-0
        , spdSpur: target.find(".spdSpur").val()-0
        , defSpur: target.find(".defSpur").val()-0
        , resSpur: target.find(".resSpur").val()-0
        , boon: bn ? fehs.BoonType.valueOf_61zpoe$(bn) : void 0
        , bane: be ? fehs.BoonType.valueOf_61zpoe$(be) : void 0
        , weapon: wp ? fehs.skill.Weapon.valueOf_61zpoe$(wp) : void 0
        , assist: as ? fehs.skill.Assist.valueOf_61zpoe$(as) : void 0
        , special: sp ? fehs.skill.Special.valueOf_61zpoe$(sp) : void 0
        , skillA: sa ? fehs.skill.SkillA.Companion.valueOfOrNONE_pdl1vj$(sa) : void 0
        , skillB: sb ? fehs.skill.SkillB.Companion.valueOfOrNONE_pdl1vj$(sb) : void 0
        , skillC: sc ? fehs.skill.SkillC.Companion.valueOfOrNONE_pdl1vj$(sc) : void 0
        , seal: sl ? fehs.skill.Seal.Companion.valueOfOrNONE_pdl1vj$(sl) : void 0
        , refine: re ? fehs.skill.RefinedSkill.valueOf_61zpoe$(re) : void 0
    }

}
console.log(3)

var spreadRefines = function(weapon){return fehs.skill.RefinedSkill.Companion.spreadItems_lzlt1e$(weapon).toArray().map(function (e, i, a) {
console.log("spreadRefines")
        return $('<option>', {value: e.name, text: e.jp.localeName_miixs2$(locale)})
})}
console.log(4)
var spreadWeapons = function(weaponType){
console.log("spreadWeapons")
    if(weaponType){
        return fehs.skill.Weapon.Companion.allWeapons_0.toArray().filter(function (e, i, a){
//        console.log(e.type.name+"/"+weaponType)
          return e.type.name == weaponType}).map(function (e, i, a) {return $('<option>', {value: e.name, text: e.jp.localeName_miixs2$(locale)})
    })
    }
    return fehs.skill.Weapon.Companion.allWeapons_0.toArray().map(function (e, i, a) {
        return $('<option>', {value: e.name, text: e.localeName_miixs2$(locale)})})
}

console.log(5)
var paramSpan = function (hero) {
console.log("paramSpan")
console.log(hero)
console.log(hero.maxHp)
console.log(hero.atk)
    var params = $("#Params").clone()
    params.find(".hp").text(hero.maxHp)
    params.find(".atk").text(hero.atk)
    params.find(".spd").text(hero.spd)
    params.find(".def").text(hero.def)
    params.find(".res").text(hero.res)
console.log("paramSpan ok")
    return params
}
console.log(6)
var calculateAll = function () {
console.log("calculateAll")

    var switched = !!$("#switch:checked").val()
    var enemyWeaponType = $("#enemyWeaponType").val()
    var enemyMoveType = $("#enemyMoveType").val()
    var enemyName = $("#enemyAttacker").val()
    var body = $("#heroes tbody")
    body.children().remove()
//    console.log(enemyWeaponType)
//    console.log(enemyMoveType)

    var params = readParams($("#CustomParams"))
    var enemies = allHeroes.filter(function (e, i, a) {
        //コンパニオンオブジェクトはあてにならない。ローカライズの命名ルール統一しておくんだったな・・・
        return (!enemyWeaponType || e.weaponType.name == enemyWeaponType) && (!enemyMoveType || e.moveType.name == enemyMoveType)
    }).map(function (base) {
        //ここでパラメータ設定かな
        return new fehs.ArmedHero(base, "new hero", params.weapon ? params.weapon : base.weapon, params.refine, params.assist ? params.assist : base.assist, params.special ? params.special : base.special
            , params.skillA ? params.skillA : base.aSkill, params.skillB ? params.skillB : base.bSkill, params.skillC ? params.skillC : base.cSkill, params.seal, params.rarity, params.level, params.boon, params.bane, params.defensive, params.atkBuff, params.spdBuff, params.defBuff, params.resBuff, params.atkSpur, params.spdSpur, params.defSpur, params.resSpur)
    })
    var heroNames = enemies.map(function (e, i, a) {
        return $('<option>', {value: e.baseHero.name, text: e.baseHero.heroName.localeName_miixs2$(locale)})
    })
    $("#enemyAttacker").children().remove()
    $("#enemyAttacker").append($('<option>', {value: "", text: "敵選択"})).append(heroNames)
    if(enemyName){
        var target = enemies.filter(function (e, i, a) {
            //コンパニオンオブジェクトはあてにならない。ローカライズの命名ルール統一しておくんだったな・・・
            return e.baseHero.heroName == enemyName
        })
        if(target.length > 0){
            enemies = target
            $("#enemyAttacker").val(target[0].baseHero.heroName.localeName_miixs2$(locale))
        }
    }

    var heroes = $("#heroes .attacker").map(function () {
            var base = fehs.StandardBaseHero.get_61zpoe$(this.value)
            var params = readParams($(this).closest("td"))
            var hero = new fehs.ArmedHero(base, "new hero", params.weapon ? params.weapon : base.weapon, params.refine, params.assist ? params.assist : base.assist, params.special ? params.special : base.special
                , params.skillA ? params.skillA : base.aSkill, params.skillB ? params.skillB : base.bSkill, params.skillC ? params.skillC : base.cSkill, params.seal, params.rarity, params.level, params.boon, params.bane
                , params.defensive, params.atkBuff, params.spdBuff, params.defBuff, params.resBuff, params.atkSpur, params.spdSpur, params.defSpur, params.resSpur, 0, false)
            var para = $(this).closest("td").find(".Params")
            para.contents().remove()
            console.log(hero)
            para.append(paramSpan(hero))

            var weaponSelector=$(this).closest("td").find(".weapon")
            var weapon = weaponSelector.val()
            weaponSelector.children().remove()
            weaponSelector.append($('<option>', {value: "", text: "武器"})).append(spreadWeapons(hero.baseHero.weaponType))
            weaponSelector.val(weapon)

            var refineSelector=$(this).closest("td").find(".refine")
            var refined = refineSelector.val()
            refineSelector.children().remove()
            refineSelector.append($('<option>', {value: "", text: "錬成"})).append(spreadRefines(hero.baseWeapon))
            refineSelector.val(refined)

            return hero
        }
    ).get()
//    console.log(heroes)
    var results = []
    enemies.forEach(function (e) {
        var tr = $("<tr>")
        heroes.forEach(function (h) {
            var hero = new fehs.BattleUnit(h, h.maxHp,0,h.atkBuff,h.spdBuff,h.defBuff,h.resBuff,0,0,0,0,h.atkSpur,h.spdSpur,h.defSpur,h.resSpur)
            hero.defensiveTerrain = h.defensiveTerrain
            var enemy = new fehs.BattleUnit(e, e.maxHp,0,e.atkBuff,e.spdBuff,e.defBuff,e.resBuff,0,0,0,0,e.atkSpur,e.spdSpur,e.defSpur,e.resSpur)
            enemy.defensiveTerrain = e.defensiveTerrain
            var fightResults = (switched ? enemy.fightAndAfterEffect_trfvk0$(hero):hero.fightAndAfterEffect_trfvk0$(enemy)).toArray()

            var resultText = ""
            fightResults.forEach(function (r) {
                resultText += r.detailsShort_4ylgoe$(switched? fehs.SIDES.COUNTER:fehs.SIDES.ATTACKER, locale)
            })
            var last = fightResults[fightResults.length - 1]
            if(switched ){
            var result = last.source.hp ? (last.target.hp ? "even" :"lose") : "win"
            tr.append('<td class="' + result+'"><span class="myHp">'+last.target.hp + '</span> - <span class="enemyHp">' + last.source.hp + "</span><br />" + resultText + "</td>")
            }
            else {
            var result = last.source.hp ? (last.target.hp ? "even" :"win") : "lose"
                tr.append('<td class="' + result+'"><span class="myHp">' + last.source.hp + '</span> - <span class="enemyHp">' + last.target.hp + "</span><br />"  + resultText + "</td>")
            }
//            results.push(fightResults)
        })
        tr.append('<th><span class="name">' + e.baseHero.heroName.localeName_miixs2$(locale)+ "<br /></th>")
        tr.find("th").append(paramSpan(e))
        body.append(tr)
    })
//    console.log(results)
}
console.log(8)
var filterHeroes = function (v) {
console.log("filterHeroes")
    var params = $(v).closest("td")
    var weaponType = params.find(".weaponType").val()
    var moveType = params.find(".moveType").val()
//    console.log(weaponType)
//    console.log(moveType)
    var heroNames = allHeroes.filter(function (e, i, a) {
        //コンパニオンオブジェクトはあてにならない。ローカライズの命名ルール統一しておくんだったな・・・
        return (!weaponType || e.weaponType.name == weaponType) && (!moveType || e.moveType.name == moveType)
    }).map(function (e, i, a) {
        return $("<option>", {value: e.heroName, text: e.heroName})
    })
//    console.log(heroNames)
    params.find(".attacker").children().remove()
    params.find(".attacker").append(heroNames)

}
console.log(9)
var cloneHero = function (v) {
console.log("cloneHero")
    var td = $(v).closest("td")
    var clone = td.clone()
    clone.find(".attacker").val(td.find(".attacker").val())
//    clone.find(".add").hide()
    clone.find(".delete").show()

    td.after(clone)
    calculateAll()
}
console.log(10)
var closeHero = function (v) {
console.log("closeHero")
    var td = $(v).closest("td")
    td.remove()
    calculateAll()
}
console.log(11)
