/**
* momo 
*/
module touch {
	/**
	 * 多边形碰撞器
	 */
	export class PolygonCollider extends Collider {
		/**
		 * 顶点集合
		 */
		// private points: Array<Point> = [];

		/**
		 * 构造函数
		 */
		constructor() {
			super();
		}

		/**
		 * 获取投影
		 * @param axis 
		 */
		public project(axis): Projection {
			let scalars = [];
			let v = new Vector();

			this.points.forEach(element => {
				v.x = element.x;
				v.y = element.y;
				scalars.push(v.dotProduct(axis))
			});

			return new Projection(Math.min.apply(Math, scalars),
				Math.max.apply(Math, scalars));
		}

		/**
		 * 得到所有的投影轴
		 */
		public getAxes(): Array<Vector> {
			let v1 = new Vector();
			let v2 = new Vector();
			let axes = [];

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
		}

		/**
		 * 移动
		 * @param dx 
		 * @param dy 
		 */
		public move(dx, dy): void {
			let len = this.points.length;
			let point: Point = null;
			for (let i = 0; i < len; i++) {
				point = this.points[i];
				point.x -= dx;
				point.y -= dy;
			}
		}

		/**
		 * 添加顶点
		 * @param x 
		 * @param y 
		 */
		public addPoint(x: number, y: number): void {
			this.points.push(new Point(x, y));
		}

		/**
		 * 检测点在碰撞体中
		 */
		public checkPointInside(x: number, y: number): boolean {
			// 目前只实现四边形
			if (this.points.length != 4) {
				alert("PolygonCollider checkPointInside() not implemented");
				return false
			}

			// 专门针对僵尸优化的函数
			// https://blog.csdn.net/oskytonight/article/details/78786119
			let A = this.points[0]
			let B = this.points[1]
			let C = this.points[2]
			let D = this.points[3]
			let a = (B.x - A.x) * (y - A.y) - (B.y - A.y) * (x - A.x);
			let b = (C.x - B.x) * (y - B.y) - (C.y - B.y) * (x - B.x);
			let c = (D.x - C.x) * (y - C.y) - (D.y - C.y) * (x - C.x);
			let d = (A.x - D.x) * (y - D.y) - (A.y - D.y) * (x - D.x);
			if ((a > 0 && b > 0 && c > 0 && d > 0) || (a < 0 && b < 0 && c < 0 && d < 0)) {
				return true;
			}

			return false;
		}
	}
}