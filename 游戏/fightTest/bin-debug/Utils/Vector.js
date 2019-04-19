var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
* momo
*/
var touch;
(function (touch) {
    /**
     * 向量
     */
    var Vector = (function () {
        /**
         * 构造函数
         * @param point
         */
        function Vector() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            /**
             * x
             */
            this.x = 0;
            /**
             * y
             */
            this.y = 0;
            if (0 == args.length) {
                this.x = 0;
                this.y = 0;
            }
            else if (1 == args.length) {
                this.x = args[0].x;
                this.y = args[0].y;
            }
            else if (2 == args.length) {
                this.x = args[1].x - args[0].x;
                this.y = args[1].y - args[0].y;
            }
        }
        /**
         * 获取向量大小
         */
        Vector.prototype.getMagnitude = function () {
            return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        };
        /**
         * 向量和
         * @param vector
         */
        Vector.prototype.add = function (vector) {
            var v = new Vector();
            v.x = this.x + vector.x;
            v.y = this.y + vector.y;
            return v;
        };
        /**
         * 向量减
         * @param vector
         */
        Vector.prototype.subtract = function (vector) {
            var v = new Vector();
            v.x = this.x - vector.x;
            v.y = this.y - vector.y;
            return v;
        };
        /**
         * 向量点积
         * @param vector
         */
        Vector.prototype.dotProduct = function (vector) {
            return this.x * vector.x + this.y * vector.y;
        };
        /**
         * 由两点生成边
         * @param vector
         */
        Vector.prototype.edge = function (vector) {
            return this.subtract(vector);
        };
        /**
         * 垂直，即投影轴
         */
        Vector.prototype.perpendicular = function () {
            var v = new Vector();
            v.x = this.y;
            v.y = 0 - this.x;
            return v;
        };
        /**
         * 归一化
         */
        Vector.prototype.normalize = function () {
            var v = new Vector(0, 0);
            var m = this.getMagnitude();
            if (m != 0) {
                v.x = this.x / m;
                v.y = this.y / m;
            }
            return v;
        };
        /**
         * 投影轴的单位向量
         */
        Vector.prototype.normal = function () {
            var p = this.perpendicular();
            return p.normalize();
        };
        return Vector;
    }());
    touch.Vector = Vector;
    __reflect(Vector.prototype, "touch.Vector");
})(touch || (touch = {}));
//# sourceMappingURL=Vector.js.map