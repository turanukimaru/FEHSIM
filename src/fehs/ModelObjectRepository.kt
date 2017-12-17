package jp.blogspot.turanukimaru.fehs

/**
 * Created by turanukimaru on 2017/09/28.
 */
interface ModelObjectRepository<T> {
    /**
     * リスト読み込み。日付指定入れたけどkotlinはnull使うべきじゃないしどうすべきか
     */
    fun find(item: T): T?

    /**
     * 新規OR更新
     */
    fun createOrUpdate(item: T): T

    /**
     * 削除
     */
    fun delete(item: T): Int

    fun deleteById(id: String): Int

    /**
     * 条件付き検索
     */
    fun complexQuery(item: T): List<T>

    fun allItems(): List<T>

    fun getById(id: String): T?
}