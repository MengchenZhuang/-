/**
* momo 
*/
module touch {
	/**
	 * 圆形碰撞器
	 */
	export class CircleCollider extends Collider {
		/**
		 * x
		 */
		public x: number = 0;
		/**
		 * y
		 */
		public y: number = 0;
		/**
		 * 半径
		 */
		public radius: number = 0;

		/**
		 * 构造函数
		 * @param x 
		 * @param y 
		 * @param radius 
		 */
		constructor(x: number, y: number, radius: number) {
			super();

			this.x = x;
			this.y = y;
			this.radius = radius;
		}

		/**
		 * 检测碰撞
		 * @param collider 
		 */
		public collidesWith(collider: Collider): boolean {
			let point;
			let length;
			let min = Number.MAX_VALUE;
			let v1;
			let v2;
			let edge;
			let perpendicular
			let normal;
			let axes = collider.getAxes();
			let distance;

			if (undefined == axes) {
				// 圆形与圆形碰撞
				let circle = collider as CircleCollider;
				distance = Math.sqrt(Math.pow(circle.x - this.x, 2) +
					Math.pow(circle.y - this.y, 2));

				return distance < Math.abs(this.radius + circle.radius);
			}
			else {
				return CollisionUtil.polygonCollidesWithCircle(collider, this);
			}
		}

		/**
		 * 得到所有的投影轴
		 */
		public getAxes(): Array<Vector> {
			return undefined;
		}

		/**
		 * 获取投影
		 * @param axis 
		 */
		public project(axis: Vector): Projection {
			let scalars = [];
			let point = new Point(this.x, this.y);
			let dotProduct = new Vector(point).dotProduct(axis);

			scalars.push(dotProduct);
			scalars.push(dotProduct + this.radius);
			scalars.push(dotProduct - this.radius);
			return new Projection(Math.min.apply(Math, scalars),
				Math.max.apply(Math, scalars));
		}

		/**
		 * 移动
		 * @param dx 
		 * @param dy 
		 */
		public move(dx, dy): void {
			this.x += dx;
			this.y += dy;
		}

		/**
		 * 检测点在碰撞体中
		 */
		public checkPointInside(x: number, y: number): boolean {
			let distance = Math.sqrt(Math.pow(x - this.x, 2) +
				Math.pow(y - this.y, 2));
			return distance <= this.radius
		}
	}
}