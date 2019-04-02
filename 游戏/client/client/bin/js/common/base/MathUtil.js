/**
* momo
*/
var touch;
(function (touch) {
    /**
     * 数学工具
     */
    var MathUtil = /** @class */ (function () {
        function MathUtil() {
        }
        /**
         * 区间随机整数[min, max]
         * @param min
         * @param max
         */
        MathUtil.randomInt = function (min, max) {
            var d = max - min + 1;
            return Math.floor(min + Math.random() * d);
        };
        /**
         * 从范围内随机
         */
        MathUtil.randomRange = function (range) {
            return this.randomInt(range[0], range[1]);
        };
        /**
         * 随机选取
         */
        MathUtil.randomSelect = function (pool) {
            var index = this.randomInt(0, pool.length - 1);
            return pool[index];
        };
        return MathUtil;
    }());
    touch.MathUtil = MathUtil;
})(touch || (touch = {}));
//# sourceMappingURL=MathUtil.js.map