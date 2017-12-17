package jp.blogspot.turanukimaru.fehs

/**
 * キャラを格納する場所。デフォルトキャラをDBとは別に管理してみたかったのでこんな構成になっているが
 * 正直DBに初期値を放り込むのでよいと思う。
 */
object ArmedHeroRepository {
    var repo: ModelObjectRepository<ArmedHero>? = null

    fun getById(id: String): ArmedHero? = if (StandardBaseHero.containsKey(id)) ArmedHero(StandardBaseHero.get(id)!!) else repo!!.getById(id)
    fun allItems(includeDb: Boolean = false): List<ArmedHero> = if (includeDb) StandardBaseHero.allItems().map { e -> ArmedHero(e) }.union(repo!!.allItems()).toList() else StandardBaseHero.allItems().map { e -> ArmedHero(e) }
    fun isStandardBattleClass(id: String): Boolean = StandardBaseHero.containsKey(id)
    fun createItem(battleHero: ArmedHero) = repo!!.createOrUpdate(battleHero)

}