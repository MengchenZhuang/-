/**
 * jarekzha
 */
module touch {
    /**
     * 直线一般公式
     */
    export class LineEquation {
        public a: number = 0
        public b: number = 0
        public c: number = 0

        constructor(a: number, b: number, c: number) {
            this.a = a
            this.b = b
            this.c = c
        }
    }

    /**
     * 线段
     */
    export class Segment {
        public start: Laya.Point = null
        public stop: Laya.Point = null

        constructor(start: Laya.Point, stop: Laya.Point) {
            this.start = start
            this.stop = stop
        }

        /**
         * 所在直线
         */
        public get line(): LineEquation {
            return new LineEquation(this.stop.y - this.start.y,
                this.start.x - this.stop.x,
                this.stop.x * this.start.y - this.start.x * this.stop.y)
        }
    }

    /**
     * 射线
     */
    export class Ray {
        public start: Laya.Point = null
        public vector: Laya.Point = null

        constructor(start: Laya.Point, vector: Laya.Point) {
            this.start = start
            this.vector = vector
        }

        /**
         * 所在直线
         */
        public get line(): LineEquation {
            let stop = Laya.Point.TEMP
            stop.x = this.start.x + this.vector.x
            stop.y = this.start.y + this.vector.y
            return new LineEquation(stop.y - this.start.y,
                this.start.x - stop.x,
                stop.x * this.start.y - this.start.x * stop.y)
        }
    }

    /**
     * 线交点查询工具 
     * refer: https://www.cnblogs.com/DHUtoBUAA/p/8057056.html
     */
    export class LineIntersectionTool {
        /**
         * 浮点数相等判定
         */
        private static floatEqual = 0.1
        /**
         * 射线和线段
         */
        public static ray2Segment(ray: Ray, segment: Segment): Laya.Point {
            let rayLine = ray.line
            let segmentLine = segment.line
            let p = this.line2Line(rayLine, segmentLine)
            if (p == null) {
                return null
            }

            if ((p.x - ray.start.x) * ray.vector.x <= 0) {
                return null // 点不在射线范围内
            }
            if ((p.x < segment.start.x && p.x < segment.stop.x)
                || (p.x > segment.start.x && p.x > segment.stop.x)) {
                return null // 点不在线段范围内
            }
            return p
        }

        /**
         * 线段和线段
         */
        public static segment2Segment(s1: Segment, s2: Segment): Laya.Point {
            let p = this.line2Line(s1.line, s2.line)
            if (p == null) {
                return null
            }
            if ((p.x < s1.start.x - this.floatEqual && p.x < s1.stop.x - this.floatEqual)
                || (p.x > s1.start.x + this.floatEqual && p.x > s1.stop.x + this.floatEqual)) {
                return null // 点不在线段范围内
            }
            if ((p.y < s1.start.y - this.floatEqual && p.y < s1.stop.y - this.floatEqual)
                || (p.y > s1.start.y + this.floatEqual && p.y > s1.stop.y + this.floatEqual)) {
                return null // 点不在线段范围内
            }
            if ((p.x < s2.start.x - this.floatEqual && p.x < s2.stop.x - this.floatEqual)
                || (p.x > s2.start.x + this.floatEqual && p.x > s2.stop.x + this.floatEqual)) {
                return null // 点不在线段范围内
            }
            if ((p.y < s2.start.y - this.floatEqual && p.y < s2.stop.y - this.floatEqual)
                || (p.y > s2.start.y + this.floatEqual && p.y > s2.stop.y + this.floatEqual)) {
                return null // 点不在线段范围内
            }

            return p
        }

        /**
         * 直线和直线的交点
         */
        public static line2Line(line1: LineEquation, line2: LineEquation): Laya.Point {
            let m = line1.a * line2.b - line2.a * line1.b
            if (m == 0) {
                return null
            }

            let p = new Laya.Point()
            p.x = (line2.c * line1.b - line1.c * line2.b) / m
            p.y = (line1.c * line2.a - line2.c * line1.a) / m
            return p
        }
    }
}