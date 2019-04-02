/**
* momo
*/
var touch;
(function (touch) {
    /**
     * 点
     */
    var Point = /** @class */ (function () {
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
        Object.defineProperty(Point.prototype, "layaPoint", {
            get: function () { return new Laya.Point(this.x, this.y); },
            enumerable: true,
            configurable: true
        });
        return Point;
    }());
    touch.Point = Point;
})(touch || (touch = {}));
//# sourceMappingURL=Point.js.map