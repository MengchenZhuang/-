/**
* momo 
*/
module touch {
	/**
	 * 碰撞工具
	 */
	export class CollisionUtil {
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
		public static getPolygonPointClosestToCircle(polygon, circle) {
			let min = Number.MAX_VALUE;
			let length = 0;
			let testPoint: Point = null;
			let closestPoint: Point = null;

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
		}

		/**
		 * 多边形与圆形碰撞检测
		 * @param polygon 
		 * @param circle 
		 */
		public static polygonCollidesWithCircle(polygon, circle) {
			let axes = polygon.getAxes();
			let closestPoint = CollisionUtil.getPolygonPointClosestToCircle(polygon, circle)
			let v1: Vector = new Vector(new Point(circle.x, circle.y))
			let v2: Vector = new Vector(new Point(closestPoint.x, closestPoint.y))
			axes.push(v1.subtract(v2).normalize())
			return !polygon.separationOnAxes(axes, circle);
		}
	}
}