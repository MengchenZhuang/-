var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
* momo
*/
var touch;
(function (touch) {
    /**
     * 圆形碰撞器
     */
    var CircleCollider = /** @class */ (function (_super) {
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
            var point = new touch.Point(this.x, this.y);
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
})(touch || (touch = {}));
//# sourceMappingURL=CircleCollider.js.map