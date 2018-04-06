package jp.blogspot.turanukimaru.fehs

/**
 * Javascriptに変換する際にMath使えないので必要な分だけ手作り
 * Created by turanukimaru on 2018/02/28.
 */
object HandmaidMath {
    /**
     * Math.max
     */
    fun max(x: Int, y: Int) = if (x > y) x else y

    /**
     * Math.min
     */
    fun min(x: Int, y: Int) = if (x > y) y else x
}