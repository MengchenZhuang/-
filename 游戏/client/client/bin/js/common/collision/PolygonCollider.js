var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
     * 多边形碰撞器
     */
    var PolygonCollider = /** @class */ (function (_super) {
        __extends(PolygonCollider, _super);
        /**
         * 顶点集合
         */
        // private points: Array<Point> = [];
        /**
         * 构造函数
         */
        function PolygonCollider() {
            return _super.call(this) || this;
        }
        /**
         * 获取投影
         * @param axis
         */
        PolygonCollider.prototype.project = function (axis) {
            var scalars = [];
            var v = new touch.Vector();
            this.points.forEach(function (element) {
                v.x = element.x;
                v.y = element.y;
                scalars.push(v.dotProduct(axis));
            });
            return new touch.Projection(Math.min.apply(Math, scalars), Math.max.apply(Math, scalars));
        };
        /**
         * 得到所有的投影轴
         */
        PolygonCollider.prototype.getAxes = function () {
            var v1 = new touch.Vector();
            var v2 = new touch.Vector();
            var axes = [];
            for (var i = 0, len = this.points.length - 1; i < len; i++) {
                v1.x = this.points[i].x;
                v1.y = this.points[i].y;
                v2.x = this.points[i + 1].x;
                v2.y = this.points[i + 1].y;
                axes.push(v1.edge(v2).normal());
            }
            v1.x = this.points[this.points.length - 1].x;
            v1.y = this.points[this.points.length - 1].y;
            v2.x = this.points[0].x;
            v2.y = this.points[0].y;
            axes.push(v1.edge(v2).normal());
            return axes;
        };
        /**
         * 移动
         * @param dx
         * @param dy
         */
        PolygonCollider.prototype.move = function (dx, dy) {
            var len = this.points.length;
            var point = null;
            for (var i = 0; i < len; i++) {
                point = this.points[i];
                point.x += dx;
                point.y += dy;
            }
        };
        /**
         * 添加顶点
         * @param x
         * @param y
         */
        PolygonCollider.prototype.addPoint = function (x, y) {
            this.points.push(new touch.Point(x, y));
        };
        /**
         * 检测点在碰撞体中
         */
        PolygonCollider.prototype.checkPointInside = function (x, y) {
            // 目前只实现四边形
            if (this.points.length != 4) {
                alert("PolygonCollider checkPointInside() not implemented");
                return false;
            }
            // 专门针对僵尸优化的函数
            // https://blog.csdn.net/oskytonight/article/details/78786119
            var A = this.points[0];
            var B = this.points[1];
            var C = this.points[2];
            var D = this.points[3];
            var a = (B.x - A.x) * (y - A.y) - (B.y - A.y) * (x - A.x);
            var b = (C.x - B.x) * (y - B.y) - (C.y - B.y) * (x - B.x);
            var c = (D.x - C.x) * (y - C.y) - (D.y - C.y) * (x - C.x);
            var d = (A.x - D.x) * (y - D.y) - (A.y - D.y) * (x - D.x);
            if ((a > 0 && b > 0 && c > 0 && d > 0) || (a < 0 && b < 0 && c < 0 && d < 0)) {
                return true;
            }
            return false;
        };
        return PolygonCollider;
    }(touch.Collider));
    touch.PolygonCollider = PolygonCollider;
})(touch || (touch = {}));
//# sourceMappingURL=PolygonCollider.js.map