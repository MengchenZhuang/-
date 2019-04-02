/**
 * jarekzha
 */
var touch;
(function (touch) {
    /**
     * 直线一般公式
     */
    var LineEquation = /** @class */ (function () {
        function LineEquation(a, b, c) {
            this.a = 0;
            this.b = 0;
            this.c = 0;
            this.a = a;
            this.b = b;
            this.c = c;
        }
        return LineEquation;
    }());
    touch.LineEquation = LineEquation;
    /**
     * 线段
     */
    var Segment = /** @class */ (function () {
        function Segment(start, stop) {
            this.start = null;
            this.stop = null;
            this.start = start;
            this.stop = stop;
        }
        Object.defineProperty(Segment.prototype, "line", {
            /**
             * 所在直线
             */
            get: function () {
                return new LineEquation(this.stop.y - this.start.y, this.start.x - this.stop.x, this.stop.x * this.start.y - this.start.x * this.stop.y);
            },
            enumerable: true,
            configurable: true
        });
        return Segment;
    }());
    touch.Segment = Segment;
    /**
     * 射线
     */
    var Ray = /** @class */ (function () {
        function Ray(start, vector) {
            this.start = null;
            this.vector = null;
            this.start = start;
            this.vector = vector;
        }
        Object.defineProperty(Ray.prototype, "line", {
            /**
             * 所在直线
             */
            get: function () {
                var stop = Laya.Point.TEMP;
                stop.x = this.start.x + this.vector.x;
                stop.y = this.start.y + this.vector.y;
                return new LineEquation(stop.y - this.start.y, this.start.x - stop.x, stop.x * this.start.y - this.start.x * stop.y);
            },
            enumerable: true,
            configurable: true
        });
        return Ray;
    }());
    touch.Ray = Ray;
    /**
     * 线交点查询工具
     * refer: https://www.cnblogs.com/DHUtoBUAA/p/8057056.html
     */
    var LineIntersectionTool = /** @class */ (function () {
        function LineIntersectionTool() {
        }
        /**
         * 射线和线段
         */
        LineIntersectionTool.ray2Segment = function (ray, segment) {
            var rayLine = ray.line;
            var segmentLine = segment.line;
            var p = this.line2Line(rayLine, segmentLine);
            if (p == null) {
                return null;
            }
            if ((p.x - ray.start.x) * ray.vector.x <= 0) {
                return null; // 点不在射线范围内
            }
            if ((p.x < segment.start.x && p.x < segment.stop.x)
                || (p.x > segment.start.x && p.x > segment.stop.x)) {
                return null; // 点不在线段范围内
            }
            return p;
        };
        /**
         * 线段和线段
         */
        LineIntersectionTool.segment2Segment = function (s1, s2) {
            var p = this.line2Line(s1.line, s2.line);
            if (p == null) {
                return null;
            }
            if ((p.x < s1.start.x - this.floatEqual && p.x < s1.stop.x - this.floatEqual)
                || (p.x > s1.start.x + this.floatEqual && p.x > s1.stop.x + this.floatEqual)) {
                return null; // 点不在线段范围内
            }
            if ((p.y < s1.start.y - this.floatEqual && p.y < s1.stop.y - this.floatEqual)
                || (p.y > s1.start.y + this.floatEqual && p.y > s1.stop.y + this.floatEqual)) {
                return null; // 点不在线段范围内
            }
            if ((p.x < s2.start.x - this.floatEqual && p.x < s2.stop.x - this.floatEqual)
                || (p.x > s2.start.x + this.floatEqual && p.x > s2.stop.x + this.floatEqual)) {
                return null; // 点不在线段范围内
            }
            if ((p.y < s2.start.y - this.floatEqual && p.y < s2.stop.y - this.floatEqual)
                || (p.y > s2.start.y + this.floatEqual && p.y > s2.stop.y + this.floatEqual)) {
                return null; // 点不在线段范围内
            }
            return p;
        };
        /**
         * 直线和直线的交点
         */
        LineIntersectionTool.line2Line = function (line1, line2) {
            var m = line1.a * line2.b - line2.a * line1.b;
            if (m == 0) {
                return null;
            }
            var p = new Laya.Point();
            p.x = (line2.c * line1.b - line1.c * line2.b) / m;
            p.y = (line1.c * line2.a - line2.c * line1.a) / m;
            return p;
        };
        /**
         * 浮点数相等判定
         */
        LineIntersectionTool.floatEqual = 0.1;
        return LineIntersectionTool;
    }());
    touch.LineIntersectionTool = LineIntersectionTool;
})(touch || (touch = {}));
//# sourceMappingURL=LineIntersectionTool.js.map