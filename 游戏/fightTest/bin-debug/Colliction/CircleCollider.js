var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
* momo
*/
var touch;
(function (touch) {
    /**
     * 圆形碰撞器
     */
    var CircleCollider = (function (_super) {
        __extends(CircleCollider, _super);
        /**
         * 构造函数
         * @param x
         * @param y
         * @param radius
         */
        function CircleCollider(x, y, radius) {
            var _this = _super.call(this) || this;
            /**
             * x
             */
            _this.x = 0;
            /**
             * y
             */
            _this.y = 0;
            /**
             * 半径
             */
            _this.radius = 0;
            _this.x = x;
            _this.y = y;
            _this.radius = radius;
            return _this;
        }
        /**
         * 检测碰撞
         * @param collider
         */
        CircleCollider.prototype.collidesWith = function (collider) {
            var point;
            var length;
            var min = Number.MAX_VALUE;
            var v1;
            var v2;
            var edge;
            var perpendicular;
            var normal;
            var axes = collider.getAxes();
            var distance;
            if (undefined == axes) {
                // 圆形与圆形碰撞
                var circle = collider;
                distance = Math.sqrt(Math.pow(circle.x - this.x, 2) +
                    Math.pow(circle.y - this.y, 2));
                return distance < Math.abs(this.radius + circle.radius);
            }
            else {
                return touch.CollisionUtil.polygonCollidesWithCircle(collider, this);
            }
        };
        /**
         * 得到所有的投影轴
         */
        CircleCollider.prototype.getAxes = function () {
            return undefined;
        };
        /**
         * 获取投影
         * @param axis
         */
        CircleCollider.prototype.project = function (axis) {
            var scalars = [];
            var point = new Point(this.x, this.y);
            var dotProduct = new touch.Vector(point).dotProduct(axis);
            scalars.push(dotProduct);
            scalars.push(dotProduct + this.radius);
            scalars.push(dotProduct - this.radius);
            return new touch.Projection(Math.min.apply(Math, scalars), Math.max.apply(Math, scalars));
        };
        /**
         * 移动
         * @param dx
         * @param dy
         */
        CircleCollider.prototype.move = function (dx, dy) {
            this.x += dx;
            this.y += dy;
        };
        /**
         * 检测点在碰撞体中
         */
        CircleCollider.prototype.checkPointInside = function (x, y) {
            var distance = Math.sqrt(Math.pow(x - this.x, 2) +
                Math.pow(y - this.y, 2));
            return distance <= this.radius;
        };
        return CircleCollider;
    }(touch.Collider));
    touch.CircleCollider = CircleCollider;
    __reflect(CircleCollider.prototype, "touch.CircleCollider");
})(touch || (touch = {}));
//# sourceMappingURL=CircleCollider.js.map