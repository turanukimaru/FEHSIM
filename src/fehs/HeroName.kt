package jp.blogspot.turanukimaru.fehs

/**
 * ロケールで使い分ける名前
 * Created by turanukimaru on 2017/12/23.
 * 注意！！NONE以外に空文字を設定するとなんかの拍子にそれが出てくる
 * Mapに突っ込むときにテストするかなあ
 *
 **/

enum class HeroName(val jp: String, val us: String, val tw: String) {
    NONE("", "", ""),
    アイク("アイク", "Ike", "艾克"),
    アイク__総選挙_("アイク（総選挙）", "Ike (Brave Heroes)", "艾克 (Brave Heroes)"),
    アイク__伝承英雄_("アイク（伝承英雄）", "Ike (Vanguard Legend)", "艾克 (Vanguard Legend)"),
    アイラ("アイラ", "Ayra", "艾伊拉"),
    アクア("アクア", "Azura", "阿庫婭"),
    アクア__舞踏祭_("アクア（舞踏祭）", "Azura (Performing Arts)", "阿庫婭 (Performing Arts)"),
    アサマ("アサマ", "Azama", "淺間"),
    アズール__舞踏祭_("アズール（舞踏祭）", "Inigo (Performing Arts)", "阿茲爾 (Performing Arts)"),
    アテナ("アテナ", "Athena", "雅典娜"),
    アベル("アベル", "Abel", "阿貝爾"),
    アメリア("アメリア", "Amelia", "亞美利雅"),
    アメリア2("アメリア＋", "Amelia+", "亞美利雅＋"),
    アメリア3("アメリア＋（錬成）", "Amelia+ (Refined)", "亞美利雅＋ (Refined)"),
    アルフォンス("アルフォンス", "Alfonse", "阿爾馮斯"),
    アルフォンス3("アルフォンス（錬成）", "Alfonse (Refined)", "阿爾馮斯 (Refined)"),
    アルム("アルム", "Alm", "阿雷武"),
    アルム3("アルム（錬成）", "Alm (Refined)", "阿雷武 (Refined)"),
    アルヴィス("アルヴィス", "Arvis", "阿爾維斯"),
    アンナ("アンナ", "Anna", "安娜"),
    アンナ3("アンナ（錬成）", "Anna (Refined)", "安娜 (Refined)"),
    アーダン("アーダン", "Arden", "亞丹"),
    ウェンディ("ウェンディ", "Gwendolyn", "溫蒂"),
    ウルスラ("ウルスラ", "Ursula", "烏爾斯拉"),
    エイリーク("エイリーク", "Eirika", "艾莉可"),
    エイリーク3("エイリーク（錬成）", "Eirika (Refined)", "艾莉可 (Refined)"),
    エスト("エスト", "Est", "愛絲特"),
    エスト2("エスト＋", "Est+", "愛絲特＋"),
    エスト3("エスト＋（錬成）", "Est+ (Refined)", "愛絲特＋ (Refined)"),
    エフィ("エフィ", "Faye", "艾菲"),
    エフラム("エフラム", "Ephraim", "艾夫拉姆"),
    エフラム3("エフラム（錬成）", "Ephraim (Refined)", "艾夫拉姆 (Refined)"),
    エリウッド("エリウッド", "Eliwood", "艾利烏德"),
    エリンシア("エリンシア", "Elincia", "艾琳西亞"),
    エリーゼ("エリーゼ", "Elise", "艾麗澤"),
    エリーゼ__夏_("エリーゼ（夏）", "Elise (Summer)", "艾麗澤 (Summer)"),
    エルトシャン("エルトシャン（錬成）", "Eldigan (Refined)", "艾爾多尚 (Refined)"),
    エルトシャン3("エルトシャン", "Eldigan", "艾爾多尚"),
    エルフィ("エルフィ", "Effie", "艾爾菲"),
    オグマ("オグマ", "Ogma", "奧古馬"),
    オグマ2("オグマ＋", "Ogma+", "奧古馬＋"),
    オグマ3("オグマ＋（錬成）", "Ogma+ (Refined)", "奧古馬＋ (Refined)"),
    オスカー("オスカー", "Oscar", "奧斯卡"),
    オボロ("オボロ", "Oboro", "朧"),
    オボロ2("オボロ＋", "Oboro+", "朧＋"),
    オボロ3("オボロ＋（錬成）", "Oboro+ (Refined)", "朧＋ (Refined)"),
    オリヴィエ("オリヴィエ", "Olivia", "奧利薇"),
    オリヴィエ__舞踏祭_("オリヴィエ（舞踏祭）", "Olivia (Performing Arts)", "奧利薇 (Performing Arts)"),
    オルエン("オルエン", "Olwen", "歐爾玟"),
    オーディン("オーディン", "Odin", "奧丁"),
    オーディン2("オーディン＋", "Odin+", "奧丁＋"),
    オーディン3("オーディン＋（錬成）", "Odin+ (Refined)", "奧丁＋ (Refined)"),
    カイン("カイン", "Cain", "凱因"),
    カゲロウ("カゲロウ", "Kagero", "陽炎"),
    カザハナ("カザハナ", "Hana", "風花"),
    カタリナ("カタリナ", "Katarina", "卡達麗娜"),
    カタリナ2("カタリナ＋", "Katarina+", "卡達麗娜＋"),
    カタリナ3("カタリナ＋（錬成）", "Katarina+ (Refined)", "卡達麗娜＋ (Refined)"),
    カチュア("カチュア", "Catria", "卡秋雅"),
    カチュア2("カチュア＋", "Catria+", "卡秋雅＋"),
    カチュア3("カチュア＋（錬成）", "Catria+ (Refined)", "卡秋雅＋ (Refined)"),
    カミュ("カミュ", "Camus", "卡謬"),
    カミラ("カミラ", "Camilla", "卡美拉"),
    カミラ2("カミラ＋", "Camilla+", "卡美拉＋"),
    カミラ3("カミラ＋（錬成）", "Camilla+ (Refined)", "卡美拉＋ (Refined)"),
    カミラ__春_("カミラ（春）", "Camilla (Spring)", "卡美拉 (Spring)"),
    カムイ__夏_("カムイ（夏）", "Corrin(F) (Summer)", "神威 (Summer)"),
    カムイ__女_("カムイ（女）", "Corrin(F)", "神威(F)"),
    カムイ__男_("カムイ（男）", "Corrin(M)", "神威(M)"),
    カムイ__男_3("カムイ（男）（錬成）", "Corrin(M) (Refined)", "神威(M) (Refined)"),

    カレル("カレル", "Karel", "卡列爾"),
    カレル2("カレル＋", "Karel+", "卡列爾＋"),
    カレル3("カレル＋（錬成）", "Karel+ (Refined)", "卡列爾＋ (Refined)"),
    ガイア("ガイア", "Gaius", "蓋亞"),
    ガイア__夏_("ガイア（夏）", "Gaius (Summer)", "蓋亞 (Summer)"),
    ギュンター("ギュンター", "Gunter", "君特"),
    クライネ("クライネ", "Clarisse", "克萊涅"),
    クラリーネ("クラリーネ", "Clarine", "克拉莉涅"),
    クレア("クレア", "Clair", "克萊爾"),
    クレア2("クレア＋", "Clair+", "克萊爾＋"),
    クレア3("クレア＋（錬成）", "Clair+ (Refined)", "克萊爾＋ (Refined)"),
    クレイン("クレイン", "Klein", "克萊因"),
    クレイン2("クレイン＋", "Klein+", "克萊因＋"),
    クレイン3("クレイン＋（錬成）", "Klein+ (Refined)", "克萊因+ (Refined)"),
    クレーベ("クレーベ", "Clive", "克雷貝"),
    クロム("クロム", "Chrom", "庫洛武"),
    クロム3("クロム（錬成）", "Chrom (Refined)", "庫洛武 (Refined)"),
    クロム__冬_("クロム（冬）", "Chrom (Winter's Envoy)", "庫洛武 (Winter's Envoy)"),
    クロム__春_("クロム（春）", "Chrom (Spring)", "庫洛武 (Spring)"),
    グレイ("グレイ", "Gray", "格萊"),
    ゴードン("ゴードン", "Gordin", "哥頓"),
    サイゾウ("サイゾウ", "Saizo", "彩造"),
    サクラ("サクラ", "Sakura", "櫻"),
    サクラ__収穫祭_("サクラ（収穫祭）", "Sakura (Trick or Defeat)", "櫻 (Trick or Defeat)"),
    サナキ("サナキ", "Sanaki", "莎娜琪"),
    サナキ3("サナキ（錬成）", "Sanaki (Refined)", "莎娜琪 (Refined)"),
    サーリャ("サーリャ", "Tharja", "撒拉"),
    サーリャ2("サーリャ＋", "Tharja+ (Refined)", "撒拉＋ (Refined)"),
    サーリャ3("サーリャ＋（錬成）", "Tharja+", "撒拉＋"),
    サーリャ__冬_("サーリャ（冬）", "Tharja (Winter's Envoy)", "撒拉 (Winter's Envoy)"),
    シグルド("シグルド", "Sigurd", "西格爾特"),
    シグレ__舞踏祭_("シグレ（舞踏祭）", "Shigure (Performing Arts)", "詩格萊 (Performing Arts)"),
    シノノメ("シノノメ", "Shiro", "東雲"),
    シャニー("シャニー", "Shanna", "夏妮"),
    シャニー2("シャニー＋", "Shanna+", "夏妮＋"),
    シャニー3("シャニー＋（錬成）", "Shanna+ (Refined)", "夏妮＋ (Refined)"),
    シャラ("シャラ", "Rhajat", "夏拉"),
    シャロン("シャロン", "Sharena", "夏蓉"),
    シャロン3("シャロン（錬成）", "Sharena (Refined)", "夏蓉 (Refined)"),
    シャーロッテ__花嫁_("シャーロッテ（花嫁）", "Charlotte (Bride)", "夏洛特 (Bride)"),
    シーダ("シーダ", "Caeda", "希達"),
    シーダ2("シーダ＋", "Caeda+", "希達＋"),
    シーダ3("シーダ＋（錬成）", "Caeda+ (Refined)", "希達＋ (Refined)"),
    シーダ__花嫁_("シーダ（花嫁）", "Caeda (Bride)", "希達 (Bride)"),
    シーマ("シーマ", "Sheena", "希瑪"),
    ジェイガン("ジェイガン", "Jagen", "傑剛"),
    ジェニー("ジェニー", "Genny", "傑妮"),
    ジャファル("ジャファル", "Jaffar", "賈法爾"),
    ジャファル3("ジャファル（錬成）", "Jaffar (Refined)", "賈法爾 (Refined)"),
    ジョルジュ("ジョルジュ", "Jeorge", "喬爾裘"),
    ジョルジュ3("ジョルジュ（錬成）", "Jeorge (Refined)", "喬爾裘 (Refined)"),
    ジョーカー("ジョーカー", "Jakob", "喬克"),
    ジョーカー__収穫祭_("ジョーカー（収穫祭）", "Jakob (Trick or Defeat)", "喬克 (Trick or Defeat)"),
    ジークベルト("ジークベルト", "Siegbert", "齊格貝爾特"),
    セシリア("セシリア", "Cecilia", "瑟西莉亞"),
    セツナ("セツナ", "Setsuna", "剎那"),
    セツナ2("セツナ＋", "Setsuna+", "剎那＋"),
    セネリオ("セネリオ", "Soren", "賽涅里歐"),
    セネリオ2("セネリオ＋", "Soren+", "賽涅里歐＋"),
    セネリオ3("セネリオ＋（錬成）", "Soren+ (Refined)", "賽涅里歐＋ (Refined)"),
    セリカ("セリカ", "Celica", "賽莉卡"),
    セリカ3("セリカ（錬成）", "Celica (Refined)", "賽莉卡 (Refined)"),
    セリス("セリス", "Seliph", "賽列斯"),
    セリス2("セリス＋", "Seliph+", "賽列斯＋"),
    セリス3("セリス＋（錬成）", "Seliph+ (Refined)", "賽列斯＋ (Refined)"),
    セルジュ("セルジュ", "Cherche", "塞爾裘"),
    セルジュ2("セルジュ＋", "Cherche+", "塞爾裘＋"),
    セルジュ3("セルジュ＋（錬成）", "Cherche+ (Refined)", "塞爾裘＋ (Refined)"),
    セーバー("セーバー", "Saber", "賽巴"),
    セーバー2("セーバー＋", "Saber+", "賽巴＋"),
    セーバー3("セーバー＋（錬成）", "Saber+ (Refined)", "賽巴＋ (Refined)"),
    セーラ("セーラ", "Serra", "賽拉"),
    ゼト("ゼト", "Seth", "賽特"),
    ゼト2("ゼト＋", "Seth+", "賽特＋"),
    ゼト3("ゼト＋（錬成）", "Seth+ (Refined)", "賽特＋ (Refined)"),
    ゼフィール("ゼフィール", "Zephiel", "賽菲爾"),
    ゼフィール3("ゼフィール（錬成）", "Zephiel (Refined)", "賽菲爾 (Refined)"),
    ゼロ("ゼロ", "Niles", "零"),
    ゼロ2("ゼロ＋", "Niles+", "零＋"),
    ゼロ3("ゼロ＋（錬成）", "Niles+ (Refined)", "零＋ (Refined)"),
    ソニア("ソニア", "Sonya", "索尼婭"),
    ソニア3("ソニア（錬成）", "Sonya (Refined)", "索尼婭 (Refined)"),
    ソフィーヤ("ソフィーヤ", "Sophia", "蘇菲亞"),
    ソフィーヤ2("ソフィーヤ＋", "Sophia+", "蘇菲亞＋"),
    ソフィーヤ3("ソフィーヤ＋（錬成）", "Sophia+ (Refined)", "蘇菲亞＋ (Refined)"),
    ソレイユ("ソレイユ", "Soleil", "索雷優"),
    ソワレ("ソワレ", "Sully", "索瓦蕾"),
    ソール("ソール", "Stahl", "索爾"),

    タクミ("タクミ", "Takumi", "拓海"),
    タクミ3("タクミ（錬成）", "Takumi (Refined)", "拓海 (Refined)"),
    ターナ("ターナ", "Tana", "塔娜"),
    ターナ3("ターナ（錬成）", "Tana (Refined)", "塔娜 (Refined)"),
    チキ__夏_("チキ（夏）", "Tiki(A) (Summer)", "琪姬(A) (Summer)"),
    チキ__大人_("チキ（大人）", "Tiki(A)", "琪姬(A)"),
    チキ__大人_2("チキ（大人）＋", "Tiki(A)+", "琪姬(A)＋"),
    チキ__大人_3("チキ（大人）＋（錬成）", "Tiki(A)+ (Refined)", "琪姬(A)＋ (Refined)"),
    チキ__幼_("チキ（幼）", "Tiki(Y)", "琪姬(Y)"),
    チキ__幼_2("チキ（幼）＋", "Tiki(Y)+", "琪姬(Y)＋"),
    チキ__幼_3("チキ（幼）＋（錬成）", "Tiki(Y)+ (Refined)", "琪姬(Y)＋ (Refined)"),
    チキ__幼夏_("チキ（幼夏）", "Tiki(Y) (Summer)", "琪姬(Y) (Summer)"),
    チキ__伝承英雄_("チキ（伝承英雄）", "Tiki(Y) (Vanguard Legend)", "琪姬(Y) (Vanguard Legend)"),
    タクミ__夏_("タクミ（夏）", "Takumi (Summer)", "拓海 (Summer)"),
    リンダ__夏_("リンダ（夏）", "Linde (Summer)", "琳達 (Summer)"),
    カミラ__夏_("カミラ（夏）", "Camilla (Summer)", "卡美拉 (Summer)"),

    ツバキ("ツバキ", "Subaki", "椿"),
    ティアマト("ティアマト", "Titania", "狄亞馬特"),
    ティアマト2("ティアマト＋", "Titania+", "狄亞馬特＋"),
    ティアマト3("ティアマト＋（錬成）", "Titania+ (Refined)", "狄亞馬特＋ (Refined)"),
    ティアモ("ティアモ", "Cordelia", "蒂亞莫"),
    ティアモ__花嫁_("ティアモ（花嫁）", "Cordelia (Bride)", "蒂亞莫 (Bride)"),
    ティルテュ("ティルテュ", "Tailtiu", "提爾透"),
    ティルテュ2("ティルテュ＋", "Tailtiu+", "提爾透+"),
    ティルテュ3("ティルテュ＋（錬成）", "Tailtiu+ (Refined)", "提爾透+ (Refined)"),
    ディアドラ("ディアドラ", "Deirdre", "迪雅朵拉"),
    ディアドラ3("ディアドラ（錬成）", "Deirdre (Refined)", "迪雅朵拉 (Refined)"),
    デューテ("デューテ", "Delthea", "迪優特"),
    デューテ3("デューテ（錬成）", "Delthea (Refined)", "迪優特 (Refined)"),
    ドニ("ドニ", "Donnel", "多尼"),
    ドルカス("ドルカス", "Dorcas", "多爾卡斯"),
    ドーガ("ドーガ", "Draug", "多加"),
    ナバール("ナバール", "Navarre", "拿巴爾"),
    ナバール2("ナバール＋", "Navarre+", "拿巴爾＋"),
    ナバール3("ナバール＋（錬成）", "Navarre+ (Refined)", "拿巴爾＋ (Refined)"),
    ナーシェン("ナーシェン", "Narcian", "拿榭恩"),
    ニニアン("ニニアン", "Ninian", "尼尼安"),
    ニノ("ニノ", "Nino", "妮諾"),
    ニノ2("ニノ＋", "Nino+", "妮諾＋"),
    ニノ3("ニノ＋（錬成）", "Nino+ (Refined)", "妮諾＋ (Refined)"),
    ネフェニー("ネフェニー", "Nephenee", "涅菲妮"),
    ネフェニー2("ネフェニー＋", "Nephenee+", "涅菲妮＋"),
    ネフェニー3("ネフェニー＋（錬成）", "Nephenee+ (Refined)", "涅菲妮＋ (Refined)"),
    ノノ("ノノ", "Nowi", "儂儂"),
    ノノ__収穫祭_("ノノ（収穫祭）", "Nowi (Trick or Defeat)", "儂儂 (Trick or Defeat)"),
    ハロルド("ハロルド", "Arthur", "哈洛德"),
    バアトル("バアトル", "Bartre", "巴多爾"),
    バアトル2("バアトル＋", "Bartre+", "巴多爾＋"),
    バアトル3("バアトル＋（錬成）", "Bartre+ (Refined)", "巴多爾＋ (Refined)"),
    バーツ("バーツ", "Barst", "巴茲"),
    パオラ("パオラ", "Palla", "帕奧拉"),
    パオラ2("パオラ＋", "Palla+", "帕奧拉＋"),
    パオラ3("パオラ＋（錬成）", "Palla+ (Refined)", "帕奧拉＋ (Refined)"),
    ヒナタ("ヒナタ", "Hinata", "日向"),
    ヒナタ2("ヒナタ＋", "Hinata+", "日向＋"),
    ヒナタ3("ヒナタ＋（錬成）", "Hinata+ (Refined)", "日向＋ (Refined)"),
    ヒノカ("ヒノカ", "Hinoka", "火乃香"),
    ヒノカ2("ヒノカ＋", "Hinoka+", "火乃香＋"),
    ヒノカ3("ヒノカ＋（錬成）", "Hinoka+ (Refined)", "火乃香＋ (Refined)"),
    ヒーニアス("ヒーニアス", "Innes", "西尼亞斯"),
    ヒーニアス3("ヒーニアス（錬成）", "Innes (Refined)", "西尼亞斯 (Refined)"),
    ピエリ("ピエリ", "Peri", "皮艾莉"),
    ファ("ファ", "Fae", "法"),
    フィヨルム("フィヨルム", "Fjorm", "菲約爾姆"),
    フィル("フィル", "Fir", "菲爾"),
    フィル2("フィル＋", "Fir+", "菲爾＋"),
    フィル3("フィル＋（錬成）", "Fir+ (Refined)", "菲爾＋ (Refined)"),
    フェリシア("フェリシア", "Felicia", "菲利西亞"),
    フェリシア2("フェリシア＋", "Felicia+", "菲利西亞＋"),
    フェリシア3("フェリシア＋（錬成）", "Felicia+ (Refined)", "菲利西亞＋ (Refined)"),
    フレデリク("フレデリク", "Frederick", "弗雷德里克"),
    フレデリク__夏_("フレデリク（夏）", "Frederick (Summer)", "弗雷德里克 (Summer)"),
    フロリーナ("フロリーナ", "Florina", "芙羅利娜"),
    フロリーナ2("フロリーナ＋", "Florina+", "芙羅利娜＋"),
    フロリーナ3("フロリーナ＋（錬成）", "Florina+ (Refined)", "芙羅利娜＋ (Refined)"),
    プリシラ("プリシラ", "Priscilla", "普莉西亞"),
    ヘクトル("ヘクトル", "Hector", "海克托爾"),
    ヘンリー("ヘンリー", "Henry", "亨利"),
    ヘンリー__収穫祭_("ヘンリー（収穫祭）", "Henry (Trick or Defeat)", "亨利 (Trick or Defeat)"),
    ベルカ("ベルカ", "Beruka", "貝爾卡"),
    ベルクト("ベルクト", "Berkut", "貝爾克特"),
    ホークアイ("ホークアイ", "Hawkeye", "霍克艾"),
    ボーイ("ボーイ", "Boey", "波伊"),
    マシュー("マシュー", "Matthew", "馬修"),
    マチルダ("マチルダ", "Mathilda", "瑪蒂爾達"),
    マリア("マリア", "Maria", "瑪莉亞"),
    マリク("マリク", "Merric", "馬利克"),
    マリク3("マリク（錬成）", "Merric (Refined)", "馬利克 (Refined)"),
    マルス("マルス", "Marth", "馬爾斯"),
    マルス__仮面_("マルス（仮面）", "Marth (Masked)", "馬爾斯 (Masked)"),
    マークス("マークス", "Xander", "馬克斯"),
    マークス__夏_("マークス（夏）", "Xander (Summer)", "馬克斯 (Summer)"),
    マークス__春_("マークス（春）", "Xander (Spring)", "馬克斯 (Spring)"),
    ミシェイル("ミシェイル", "Michalis (Refined)", "米謝爾 (Refined)"),
    ミシェイル3("ミシェイル（錬成）", "Michalis", "米謝爾"),
    ミスト("ミスト", "Mist", "密絲特"),
    ミネルバ("ミネルバ", "Minerva", "米奈娃"),
    ミネルバ3("ミネルバ（錬成）", "Minerva (Refined)", "米奈娃 (Refined)"),
    メイ("メイ", "Mae", "梅伊"),
    ユリア("ユリア", "Julia", "尤莉亞"),
    ユリア3("ユリア（錬成）", "Julia (Refined)", "尤莉亞 (Refined)"),
    ヨシュア("ヨシュア", "Joshua", "約書亞"),
    ラインハルト("ラインハルト", "Reinhardt", "萊茵哈特"),
    ラケシス("ラケシス", "Lachesis", "拉克西絲"),
    ラズワルド("ラズワルド", "Laslow", "拉茲沃德"),
    リズ("リズ", "Lissa", "莉茲"),
    リズ__冬_("リズ（冬）", "Lissa (Winter's Envoy)", "莉茲 (Winter's Envoy)"),
    リフ("リフ", "Wrys", "利夫"),
    リョウマ("リョウマ", "Ryoma", "龍馬"),
    リリーナ("リリーナ", "Lilina", "莉莉娜"),
    リリーナ2("リリーナ＋", "Lilina+", "莉莉娜＋"),
    リリーナ3("リリーナ＋（錬成）", "Lilina+ (Refined)", "莉莉娜＋ (Refined)"),
    リン("リン", "Lyn", "琳"),
    リン3("リン（錬成）", "Lyn (Refined)", "琳 (Refined)"),
    リンダ("リンダ", "Linde", "琳達"),
    リンダ3("リンダ（錬成）", "Linde (Refined)", "琳達 (Refined)"),
    リン__総選挙_("リン（総選挙）", "Lyn (Brave Heroes)", "琳 (Brave Heroes)"),
    リン__花嫁_("リン（花嫁）", "Lyn (Bride)", "琳 (Bride)"),
    ルカ("ルカ", "Lukas", "盧卡"),
    ルキナ("ルキナ", "Lucina", "露琪娜"),
    ルキナ3("ルキナ（錬成）", "Lucina (Refined)", "露琪娜 (Refined)"),
    ルキナ__春_("ルキナ（春）", "Lucina (Spring)", "露琪娜"),
    ルキナ__総選挙_("ルキナ（総選挙）", "Lucina (Brave Heroes)", "露琪娜 (Brave Heroes)"),
    ルセア("ルセア", "Lucius", "魯賽亞"),
    ルキナ__伝承英雄_("ルキナ（伝承英雄）", "Lucina (Vanguard Legend)", "露琪娜 (Vanguard Legend)"),
    ルフレ__冬_("ルフレ（冬）", "Robin (M) (Winter's Envoy)", "魯弗萊 (Winter's Envoy)"),
    ルフレ__夏_("ルフレ（夏）", "Robin(F) (Summer)", "魯弗萊 (Summer)"),
    ルフレ__女_("ルフレ（女）", "Robin(F)", "魯弗萊(F)"),
    ルフレ__女_2("ルフレ（女）＋", "Robin(F)+", "魯弗萊(F)＋"),
    ルフレ__女_3("ルフレ（女）＋（錬成）", "Robin(F)+ (Refined)", "魯弗萊(F)＋ (Refined)"),
    ルフレ__男_("ルフレ（男）", "Robin(M)", "魯弗萊(M)"),
    ルフレ__男_2("ルフレ（男）＋", "Robin(M)+", "魯弗萊(M)＋"),
    ルフレ__男_3("ルフレ（男）＋（錬成）", "Robin(M)+ (Refined)", "魯弗萊(M)＋ (Refined)"),
    ルーク("ルーク", "Luke", "路克"),
    ルーテ("ルーテ", "Lute", "盧特"),
    ルーナ("ルーナ", "Selena", "露娜"),
    レイ("レイ", "Raigh", "雷伊"),
    レイヴァン("レイヴァン", "Raven", "瑞文"),
    レイヴァン2("レイヴァン＋", "Raven+", "瑞文＋"),
    レイヴァン3("レイヴァン＋（錬成）", "Raven+ (Refined)", "瑞文＋ (Refined)"),
    レオ("レオ", "Leon", "雷歐"),
    レオン("レオン", "Leo", "里昂"),
    レオン3("レオン（錬成）", "Leo (Refined)", "里昂 (Refined)"),
    レオン__夏_("レオン（夏）", "Leo (Summer)", "里昂 (Summer)"),
    レベッカ("レベッカ", "Rebecca", "蕾貝卡"),
    ロイ("ロイ", "Roy", "羅伊"),
    ロイ3("ロイ（錬成）", "Roy (Refined)", "羅伊 (Refined)"),
    ロイド("ロイド", "Lloyd", "洛伊德"),
    ロイド3("ロイド（錬成）", "Lloyd (Refined)", "洛伊德 (Refined)"),
    ロイ__総選挙_("ロイ（総選挙）", "Roy (Brave Heroes)", "羅伊 (Brave Heroes)"),
    ロイ__伝承英雄_("ロイ（伝承英雄）", "Roy (Vanguard Legend)", "羅伊 (Vanguard Legend)"),
    ロディ("ロディ", "Roderick", "羅迪"),
    ロビン("ロビン", "Tobin", "羅賓"),
    ロンクー("ロンクー", "Lonqu", "隆克"),
    ロンクー2("ロンクー＋", "Lonqu+", "隆克＋"),
    ロンクー3("ロンクー＋（錬成）", "Lonqu+ (Refined)", "隆克＋ (Refined)"),
    ローロー("ローロー", "Legion", "羅羅"),
    ワユ("ワユ", "Mia", "瓦育"),
    ヴァルター("ヴァルター", "Valter", "瓦爾達"),
    ヴィオール("ヴィオール", "Virion", "維沃爾"),
    漆黒の騎士("漆黒の騎士", "Black Knight", "漆黑騎士"),

    スリーズ("スリーズ", "Gunnthrá", "斯利茲"),
    アクア__正月_("アクア（正月）", "Azura (Happy New Year!)", "阿庫婭 (Happy New Year!)"),
    カミラ__正月_("カミラ（正月）", "Camilla (Happy New Year!)", "卡美拉 (Happy New Year!)"),
    タクミ__正月_("タクミ（正月）", "Takumi (Happy New Year!)", "拓海 (Happy New Year!)"),
    カムイ__正月_("カムイ（正月）", "Corrin (Happy New Year!)", "神威 (Happy New Year!)"),

    エイリーク__追憶_("エイリーク（追憶）", "Eirika (Sacred Memories)", "艾莉可 (Sacred Memories)"),

    ラーチェル("ラーチェル", "L'Arachel", "拉切爾"),

    ミルラ("ミルラ", "Myrrh", "梅爾"),

    リオン("リオン", "Lyon", "利昂"),


    ヘクトル__バレンタイン_("ヘクトル（バレンタイン）", "Hector (Love Abounds)", "海克托爾 (Love Abounds)"),
    リリーナ__バレンタイン_("リリーナ（バレンタイン）", "Lilina (Love Abounds)", "莉莉娜 (Love Abounds)"),
    リン__バレンタイン_("リン（バレンタイン）", "Lyn (Love Abounds)", "琳 (Love Abounds)"),
    ロイ__バレンタイン_("ロイ（バレンタイン）", "Roy (Love Abounds)", "羅伊 (Love Abounds)"),
    エリウッド__バレンタイン_("エリウッド（バレンタイン）", "Eliwood (Love Abounds)", "艾利烏德 (Love Abounds)"),

    ゼルギウス("ゼルギウス", "Zelgius", "塞爾吉烏斯"),
    ミカヤ("ミカヤ", "Micaiah", "米卡雅"),
    サザ("サザ", "Sothe", "薩札"),
    セリカ__闇_("セリカ（闇）", "Celica (Fallen Heroes)", "賽莉卡 (Fallen Heroes)"),
    ハーディン__闇_("ハーディン（闇）", "Hardin (Fallen Heroes)", "Hardin"),
    ルフレ__闇_("ルフレ（男闇）", "Robin (M) (Fallen Heroes)", "魯弗萊(M) (Fallen Heroes)"),
    タクミ__闇_("タクミ（闇）", "Takumi (Fallen Heroes)", "拓海 (Fallen Heroes)"),
    エフラム__伝承英雄_("エフラム（伝承英雄）", "Ephraim (Legendary Lord)", "艾夫拉姆 (Legendary Lord)"),
    クロム__聖痕_("クロム（聖痕）", "Chrom (The Branded King)", "庫洛武(The Branded King)"),

    マーク__男_("マーク（男）", "Morgan (M)", "Morgan (M)"),

    マーク__女_("マーク（女）", "Morgan (F)", "Morgan (F)"),
    カゲロウ__春_("カゲロウ（春）", "Kagero (Hares at the Fair)", "陽炎 (Spring)"),
    シャロン__春_("シャロン（春）", "Sharena (Hares at the Fair)", "夏蓉 (Spring)"),
    カチュア__春_("カチュア（春）", "Catria (Hares at the Fair)", "卡秋雅 (Spring)"),
    アルフォンス__春_("アルフォンス（春）", "Alfonse (Hares at the Fair)", "阿爾馮斯 (Spring)"),
    ジェローム("ジェローム", "Gerome", "Gerome"),
    ルフレ__女闇_("ルフレ（女闇）", "Robin(F)(Fell Vessel)", "魯弗萊(F)(Fell Vessel)"),
    リーフ("リーフ", "Leif", "里弗"),
    ナンナ("ナンナ", "Nanna", "南娜"),
    ラインハルト__トラキア_("ラインハルト（トラキア）", "Reinhardt (World of Thracia)", "萊茵哈特 (World of Thracia)"),
    オルエン__トラキア_("オルエン（トラキア）", "Olwen (World of Thracia)", "歐爾玟 (World of Thracia)"),
    フィン("フィン", "Finn", "Finn"),
    サイアス("サイアス", "Saias", "Saias"),
    ヒノカ__白き翼_("ヒノカ（白き翼）", "Hinoka (Wing of Fate)", "火乃香 (Wing of Fate)"),
    シグレ__白き翼_("シグレ（白き翼）", "Shigure (Wing of Fate)", "詩格萊 (Wing of Fate)"),
    カンナ__女_("カンナ（女）", "Kana (F)", "神流 (F)"),
    リン__伝承英雄_("リン（伝承英雄）", "Lyn (Legendary Lord)", "琳 (Legendary Lord)"),
    スズカゼ("スズカゼ", "Kaze", "涼風"),
    カンナ__男_("カンナ（男）", "Kana (M)", "神流 (M)"),
    アレス("アレス", "Ares", "阿瑞斯"),
    リーン("リーン", "Lene", "琳恩"),
    イシュタル("イシュタル", "Ishtar", "伊修達爾"),
    ユリウス("ユリウス", "Julius", "尤利烏斯"),
    マルス__花婿_("マルス（花婿）", "Marth (Bridal Bloom)", "馬爾斯 (Bridal Bloom)"),
    サナキ__花嫁_("サナキ（花嫁）", "Sanaki (Bridal Bloom)", "莎娜琪 (Bridal Bloom)"),
    サーリャ__花嫁_("サーリャ（花嫁）", "Tharja (Bridal Bloom)", "撒拉 (Bridal Bloom)"),
    ニニアン__花嫁_("ニニアン（花嫁）", "Ninian (Bridal Bloom)", "尼尼安 (Bridal Bloom)"),
    リョウマ__伝承英雄_("リョウマ（伝承英雄）", "Ryoma (Vanguard Legend)", "龍馬 (Vanguard Legend)"),
    カアラ("カアラ", "Karla", "卡菈"),
    ニノ__失われし牙_("ニノ（失われし牙）", "Nino (Scattered Fangs)", "妮諾 (Scattered Fangs)"),
    ラガルト("ラガルト", "Legault", "拉加爾托"),
    ライナス("ライナス", "Linus", "莢納斯"),
    ターナ__夏_("ターナ（夏）", "Tana (Summer)", "塔娜 (Summer)"),
    ティアモ__夏_("ティアモ（夏）", "Cordelia (Summer)", "蒂亞莫 (Summer)"),
    ヒーニアス__夏_("ヒーニアス（夏）", "Innes (Summer)", "西尼亞斯 (Summer)"),
    ノワール__夏_("ノワール（夏）", "Noire (Summer)", "諾瓦爾 (Summer)"),
    ヘクトル__伝承英雄_("ヘクトル（伝承英雄）", "Hector (Vanguard Legend)", "海克托爾 (Vanguard Legend)"),
    スミア("スミア", "Sumia", "絲米亞"),
    マリアベル("マリアベル", "Maribelle", "瑪利亞貝爾"),
    オリヴィエ__聖王国_("オリヴィエ（聖王国）", "Olivia (Ylissean Travelers)", "奧利薇 (Ylissean Travelers)"),
    リベラ("リベラ", "Libra", "利貝拉"),
    エリンシア__夏祭り_("エリンシア（夏祭り）", "Elincia (Hoshido)", "艾琳西亞 (Hoshido)"),
    リョウマ__夏祭り_("リョウマ（夏祭り）", "Ryoma (Hoshido)", "龍馬 (Hoshido)"),
    マークス__夏祭り_("マークス（夏祭り）", "Xander (Hoshido)", "馬克斯 (Hoshido)"),
    ミカヤ__夏祭り_("ミカヤ（夏祭り）", "Micaiah (Hoshido)", "米卡雅 (Hoshido)"),
    エフラム__総選挙_("エフラム（総選挙）", "Ephraim (Brave)", "艾夫拉姆 (Brave)"),
    ヘクトル__総選挙_("ヘクトル（総選挙）", "Hector (Brave)", "海克托爾 (Brave)"),
    セリカ__総選挙_("セリカ（総選挙）", "Celica (Brave)", "賽莉卡 (Brave)"),
    ヴェロニカ__総選挙_("ヴェロニカ（総選挙）", "Veronica (Brave)", "維洛妮卡 (Brave)"),
    マルス__伝承英雄_("マルス（伝承英雄）", "Marth (Vanguard Legend)", "馬爾斯 (Vanguard Legend)"),
    シルヴィア("シルヴィア", "Silvia", "希薇雅"),
    キュアン("キュアン", "Quan", "喬安"),
    レヴィン("レヴィン", "Lewyn", "雷文"),
    ジャムカ("ジャムカ", "Jamke", "嘉姆卡"),
    フローラ("フローラ", "Flora", "芙洛拉"),
    オフェリア("オフェリア", "Ophelia", "歐菲莉亞"),
    エポニーヌ("エポニーヌ", "Nina", "艾波寧"),
    ガロン("ガロン", "Garon", "加隆"),
    サイラス("サイラス", "Silas", "賽萊斯"),
    ヴェロニカ("ヴェロニカ", "Veronica", "維洛妮卡"),
    ザカリア("？？？", "???", "？？？"),
    レーヴァテイン("レーヴァテイン", "Laevatein", "瑞瓦提恩"),
    ヘルビンディ("ヘルビンディ", "Helbindi", "赫爾賓迪"),
    ロキ("ロキ", "Loki", "洛基"),
    レーギャルン("レーギャルン", "Laegjarn", "瑞瓦伽倫"),
    スルト("スルト", "Surtr", "斯爾特"),
    ワユ__収穫祭_("ワユ（大地の恵みに）", "Mia (The Land's Bounty)", "瓦育 (The Land's Bounty)"),
    ミルラ__収穫祭_("ミルラ（大地の恵みに）", "Myrrh (The Land's Bounty)", "梅爾 (The Land's Bounty)"),
    ゼロ__収穫祭_("ゼロ（大地の恵みに）", "Niles (The Land's Bounty)", "零 (The Land's Bounty)"),
    カゲロウ__収穫祭_("カゲロウ（大地の恵みに）", "Kagero (The Land's Bounty)", "陽炎 (The Land's Bounty)"),
    クリフ("クリフ", "Kliff", "克里夫"),
    ウード("ウード", "Owain", "伍德"),
    インバース("インバース", "Aversa", "茵巴絲"),
    エイリーク__伝承英雄_("エイリーク（伝承英雄）", "Eirika (Vanguard Legend)", "艾莉可 (Vanguard Legend)"),
    カミラ__夢_("カミラ（浮雲、朝霧）", "Camilla (Adrift)", "卡美拉 (Adrift)"),
    カムイ__女夢_("カムイ（女浮雲、朝霧）", "Corrin (F)(Adrift)", "神威 (F)(Adrift)"),
    カムイ__男夢_("カムイ（男浮雲、朝霧）", "Corrin (M)(Adrift)", "神威 (M)(Adrift)"),
    ミコト__夢_("ミコト（浮雲、朝霧）", "Mikoto(Adrift)", "水琴(Adrift)"),
    アクア__夢_("アクア（浮雲、朝霧）", "Azura (Adrift)", "阿庫婭 (Adrift)"),
    ユルグ("ユルグ", "Ylgr", "優爾格"),
    ガーネフ("ガーネフ", "Gharnef", "加內夫"),
    フリーズ("フリーズ", "Hríd", "佛利茲"),
    エイル("エイル", "Eir", "埃爾"),
    エフラム__冬_("エフラム（冬）", "Ephraim (Winter)", "艾夫拉姆 (Winter)"),
    エイリーク__冬_("エイリーク（冬）", "Eirika (Winter)", "艾莉可 (Winter)"),
    ファ__冬_("ファ（冬）", "Fae (Winter)", "法 (Winter)"),
    セシリア__冬_("セシリア（冬）", "Cecilia (Winter)", "瑟西莉亞 (Winter)"),
    アクア__伝承英雄_("アクア（伝承英雄）", "Azura (Vanguard Legend)", "阿庫婭 (Vanguard Legend)"),
    フィヨルム__正月_("フィヨルム（正月）", "Fjorm (New Year)", "菲約爾姆 (New Year)"),
    レーヴァテイン__正月_("レーヴァテイン（正月）", "Laevatein (New Year)", "瑞瓦提恩 (New Year)"),
    レーギャルン__正月_("レーギャルン（正月）", "Laegjarn (New Year)", "瑞瓦伽倫 (New Year)"),
    フリーズ__正月_("フリーズ（正月）", "Hríd (New Year)", "佛利茲 (New Year)"),
    スリーズ__正月_("スリーズ（正月）", "Gunnthrá (New Year)", "斯利茲 (New Year)"),

    ティバーン("ティバーン", "Tibarn", "ティバーン"),
    ニケ("ニケ", "Nailah", "妮凱"),
    リュシオン("リュシオン", "Reyson", "琉希昂"),
    リアーネ("リアーネ", "Leanne", "莉婭妮"),
    ネサラ("ネサラ", "Naesala", "涅沙羅"),

    リョウマ__温泉_("リョウマ（温泉）", "Ryoma (Hostile Springs)", "龍馬 (Hostile Springs)"),
    エリーゼ__温泉_("エリーゼ（温泉）", "Elise (Hostile Springs)", "艾麗澤 (Hostile Springs)"),
    サクラ__温泉_("サクラ（温泉）", "Sakura (Hostile Springs)", "櫻 (Hostile Springs)"),
    ヒノカ__温泉_("ヒノカ（温泉）", "Hinoka (Hostile Springs)", "火乃香 (Hostile Springs)"),
    カミラ__温泉_("カミラ（温泉）", "Camilla (Hostile Springs)", "卡美拉 (Hostile Springs)"),
    ドーマ("ドーマ", "Duma", "多瑪"),
    アイク__傭兵団_("アイク（傭兵団）", "Ike (Greil's Devoted)", "艾克 (Greil's Devoted)"),
    セネリオ__傭兵団_("セネリオ（傭兵団）", "Soren (Greil's Devoted)", "賽涅里歐 (Greil's Devoted)"),
    グレイル__傭兵団_("グレイル（傭兵団）", "Greil (Greil's Devoted)", " (Greil's Devoted)"),
    ミスト__傭兵団_("ミスト（傭兵団）", "Mist (Greil's Devoted)", "密絲特 (Greil's Devoted)"),
    ティアマト__傭兵団_("ティアマト（傭兵団）", "Titania (Greil's Devoted)", "狄亞馬特 (Greil's Devoted)"),
    ニシキ("ニシキ","Kaden","錦"),
    キヌ("キヌ","Selkie","絹"),
    フランネル("フランネル","Keaton","弗朗諾"),
    ベロア("ベロア","Velouria","蓓羅亞"),
    ルトガー("ルトガー","Rutger","路特加"),
    イドゥン("イドゥン","Idunn","伊敦"),
    ルゥ("ルゥ","Lugh","魯格"),
    ティト("ティト","Thea","蒂特"),
    スー("スー","Sue","蘇"),


    パオラ__春_("パオラ（春）", "Palla (Spring)", "帕奧拉 (Spring)"),
    マリカ("マリカ", "Marisa", "瑪莉卡"),
    マリカ__春_("マリカ（春）", "Marisa (Spring)", "瑪莉卡 (Spring)"),
    ブルーノ__春_("ブルーノ （春）", "Bruno (Spring)", "布魯諾 (Spring)"),
    ヴェロニカ__春_("ヴェロニカ（春）", "Veronica (Spring)", "維洛妮卡 (Spring)"),
    ロキ__春_("ロキ（春）", "Loki (Spring)", "洛基 (Spring)"),
    ;

    /**
     * ロケールから対応する文字列を出す
     */
    fun localeName(l: Locale): String =
            when (l) {
                Locale.JAPANESE -> jp
                Locale.TAIWAN -> tw
                else -> us
            }

    override fun toString(): String = jp
}