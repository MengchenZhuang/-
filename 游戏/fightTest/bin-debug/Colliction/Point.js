var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**点 */
var Point = (function () {
    /**
     * 构造函数
     * @param x
     * @param y
     */
    function Point(x, y) {
        /**
         * x
         */
        this.x = 0;
        /**
         * y
         */
        this.y = 0;
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(Point.prototype, "egretPoint", {
        get: function () { return new egret.Point(this.x, this.y); },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
__reflect(Point.prototype, "Point");
//# sourceMappingURL=Point.js.map