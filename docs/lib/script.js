//何度も使うのでグローバル
var fehs = FEHSIM.jp.blogspot.turanukimaru.fehs

//全てのヒーローを取り出してソートする。toArray()でJSのArrayになる。
var allHeroes = fehs.StandardBaseHero.allItems().toArray().sort(function (a, b) {
    if (a.name > b.name) {
        return 1
    } else if (a.name < b.name) {
        return -1
    } else {
        return 0
    }
})
$(document).ready(function () {
    $(".BoonBane").append($("#BoonBane").contents().clone())
    $(".Buffs").append($("#Buffs").contents().clone()).hide()
    $(".Skills").append($("#Skills").contents().clone()).hide()
    $("#Buffs").hide()
    $("#Skills").hide()
    $("#heroes .delete").hide()

//とりあえず名前でソート。どうせフィルタかけるんだし
    var heroNames = allHeroes.map(function (e, i, a) {
        return $('<option>', {value: e.name, text: e.name})
    })

    var weapons = fehs.skill.Weapon.values().map(function (e, i, a) {
        return $('<option>', {value: e.name, text: e.jp})
    })

    var assists = fehs.skill.Assist.values().map(function (e, i, a) {
        return $('<option>', {value: e.name, text: e.jp})
    })
    var specials = fehs.skill.Special.values().map(function (e, i, a) {
        return $('<option>', {value: e.name, text: e.jp})
    })
    var skillAs = fehs.skill.SkillA.Companion.spreadItems().toArray().map(function (e, i, a) {
        return $('<option>', {value: e.value, text: e.jp + e.level})
    })
    var skillBs = fehs.skill.SkillB.Companion.spreadItems().toArray().map(function (e, i, a) {
        return $('<option>', {value: e.value, text: e.jp + e.level})
    })
    var skillCs = fehs.skill.SkillC.Companion.spreadItems().toArray().map(function (e, i, a) {
        return $('<option>', {value: e.value, text: e.jp + e.level})
    })
    var seals = fehs.skill.Seal.Companion.spreadItems().toArray().map(function (e, i, a) {
        return $('<option>', {value: e.value, text: e.jp + e.level})
    })

    $(".attacker").append(heroNames)
    $(".weapon").append($('<option>', {value: "", text: "武器"})).append(weapons)
    $(".assist").append($('<option>', {value: "", text: "補助スキル"})).append(assists)
    $(".special").append($('<option>', {value: "", text: "奥義"})).append(specials)
    $(".skillA").append($('<option>', {value: "", text: "A"})).append(skillAs)
    $(".skillB").append($('<option>', {value: "", text: "B"})).append(skillBs)
    $(".skillC").append($('<option>', {value: "", text: "C"})).append(skillCs)
    $(".seal").append($('<option>', {value: "", text: "聖印"})).append(seals)
//    $(".refine").append($('<option>', {value: "", text: "錬成"})).append(refines)

    calculateAll()
})

var readParams = function (target) {
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
        , refine: re ? fehs.skill.RefineSkill.valueOf_61zpoe$(re) : void 0
    }

}

var spreadRefines = function(weapon){return fehs.skill.RefineSkill.Companion.spreadItems_3o6c2a$(weapon).toArray().map(function (e, i, a) {
        return $('<option>', {value: e.name, text: e.jp})
})}

var paramSpan = function (hero) {
    var params = $("#Params").clone()
    params.find(".hp").text(hero.maxHp)
    params.find(".atk").text(hero.atk)
    params.find(".spd").text(hero.spd)
    params.find(".def").text(hero.def)
    params.find(".res").text(hero.res)
    return params
}
var calculateAll = function () {
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
        return $('<option>', {value: e.baseHero.name, text: e.baseHero.name})
    })
    $("#enemyAttacker").children().remove()
    $("#enemyAttacker").append($('<option>', {value: "", text: "敵選択"})).append(heroNames)
    if(enemyName){
        var target = enemies.filter(function (e, i, a) {
            //コンパニオンオブジェクトはあてにならない。ローカライズの命名ルール統一しておくんだったな・・・
            return e.baseHero.name == enemyName
        })
        if(target.length > 0){
            enemies = target
            $("#enemyAttacker").val(target[0].baseHero.name)
        }
    }

    var heroes = $("#heroes .attacker").map(function () {
            var base = fehs.StandardBaseHero.get_61zpoe$(this.value)
            var params = readParams($(this).closest("td"))
            var hero = new fehs.ArmedHero(base, "new hero", params.weapon ? params.weapon : base.weapon, params.refine, params.assist ? params.assist : base.assist, params.special ? params.special : base.special
                , params.skillA ? params.skillA : base.aSkill, params.skillB ? params.skillB : base.bSkill, params.skillC ? params.skillC : base.cSkill, params.seal, params.rarity, params.level, params.boon, params.bane, params.defensive, params.atkBuff, params.spdBuff, params.defBuff, params.resBuff, params.atkSpur, params.spdSpur, params.defSpur, params.resSpur)
            var para = $(this).closest("td").find(".Params")
            para.contents().remove()
            para.append(paramSpan(hero))

                 $(this).closest("td").find(".refine").children().remove()
                 $(this).closest("td").find(".refine").append($('<option>', {value: "", text: "錬成"})).append(spreadRefines(hero.baseWeapon))

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
                resultText += r.detailsShort_4ylgoe$(switched? fehs.SIDES.COUNTER:fehs.SIDES.ATTACKER, fehs.Locale.JAPAN)
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
        tr.append('<th><span class="name">' + e.baseHero.name + "<br /></th>")
        tr.find("th").append(paramSpan(e))
        body.append(tr)
    })
//    console.log(results)
}
var filterHeroes = function (v) {
    var params = $(v).closest("td")
    var weaponType = params.find(".weaponType").val()
    var moveType = params.find(".moveType").val()
//    console.log(weaponType)
//    console.log(moveType)
    var heroNames = allHeroes.filter(function (e, i, a) {
        //コンパニオンオブジェクトはあてにならない。ローカライズの命名ルール統一しておくんだったな・・・
        return (!weaponType || e.weaponType.name == weaponType) && (!moveType || e.moveType.name == moveType)
    }).map(function (e, i, a) {
        return $("<option>", {value: e.name, text: e.name})
    })
//    console.log(heroNames)
    params.find(".attacker").children().remove()
    params.find(".attacker").append(heroNames)

}
var cloneHero = function (v) {
    var td = $(v).closest("td")
    var clone = td.clone()
    clone.find(".attacker").val(td.find(".attacker").val())
//    clone.find(".add").hide()
    clone.find(".delete").show()

    td.after(clone)
    calculateAll()
}
var closeHero = function (v) {
    var td = $(v).closest("td")
    td.remove()
    calculateAll()
}
