/**
* momo
*/
var touch;
(function (touch) {
    /**
     * 碰撞工具
     */
    var CollisionUtil = /** @class */ (function () {
        function CollisionUtil() {
        }
        /*
         * 圆与多边形碰撞的原理：圆可以近似的看成一个有无数条边的正多边形，而我们不可能按照这些边一一进行投影测试，
         * 我们只需要将圆形投射到一条投影轴上即可，
         * 这条轴就是圆心与距其最近的多边形顶点之前的连线。
         * */
        /**
         * 得到多边形距离圆形最近点
         * @param polygon
         * @param circle
         */
        CollisionUtil.getPolygonPointClosestToCircle = function (polygon, circle) {
            var min = Number.MAX_VALUE;
            var length = 0;
            var testPoint = null;
            var closestPoint = null;
            for (var i = 0, len = polygon.points.length; i < len; i++) {
                testPoint = polygon.points[i];
                length = Math.sqrt(Math.pow(testPoint.x - circle.x, 2) +
                    Math.pow(testPoint.y - circle.y, 2));
                if (length < min) {
                    min = length;
                    closestPoint = testPoint;
                }
            }
            return closestPoint;
        };
        /**
         * 多边形与圆形碰撞检测
         * @param polygon
         * @param circle
         */
        CollisionUtil.polygonCollidesWithCircle = function (polygon, circle) {
            var axes = polygon.getAxes();
            var closestPoint = CollisionUtil.getPolygonPointClosestToCircle(polygon, circle);
            var v1 = new touch.Vector(new touch.Point(circle.x, circle.y));
            var v2 = new touch.Vector(new touch.Point(closestPoint.x, closestPoint.y));
            axes.push(v1.subtract(v2).normalize());
            return !polygon.separationOnAxes(axes, circle);
        };
        return CollisionUtil;
    }());
    touch.CollisionUtil = CollisionUtil;
})(touch || (touch = {}));
//# sourceMappingURL=CollisionUtil.js.map