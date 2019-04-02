/**
* momo
*/
var touch;
(function (touch) {
    /**
     * 投影对象
     */
    var Projection = /** @class */ (function () {
        /**
         * 构造函数
         * @param min
         * @param max
         */
        function Projection(min, max) {
            /**
             * 最小值
             */
            this.min = 0;
            /**
             * 最大值
             */
            this.max = 0;
            this.min = min;
            this.max = max;
        }
        /**
         * 是否有重叠,重叠返回true
         * @param projection
         */
        Projection.prototype.overlaps = function (projection) {
            return this.max > projection.min && projection.max > this.min;
        };
        return Projection;
    }());
    touch.Projection = Projection;
})(touch || (touch = {}));
//# sourceMappingURL=Projection.js.map