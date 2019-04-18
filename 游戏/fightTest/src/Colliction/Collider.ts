/**
* momo 
*/
module touch {
	/**
	 * 碰撞器
	 */
	export class Collider {

		/**
		 * 顶点集合
		 */
		public points: Array<Point> = [];
		/**
		 * 构造函数
		 */
		constructor() {

		}

		/**
		 * 检测碰撞
		 * @param collider 
		 */
		public collidesWith(collider: Collider): boolean {
			var axes = this.getAxes().concat(collider.getAxes());
			return !this.separationOnAxes(axes, collider);
		}

		/**
		 * 检测在投影轴上投影是否有分离
		 * @param axes 
		 * @param shape 
		 */
		public separationOnAxes(axes: Array<Vector>, collider: Collider): boolean {
			for (var i = 0, len = axes.length; i < len; i++) {
				let axis = axes[i];
				if (!axis) {
					continue;
				}
				//得到形状在当前投影轴上的投影
				let projection1 = collider.project(axis);
				//得到当前拖拽形状在当前投影轴上的投影
				let projection2 = this.project(axis);
				//检测两个投影在当前投影轴上是否重叠,分离返回false
				if (!projection1.overlaps(projection2)) {
					return true;//在当前投影轴上分离返回true,表示两个形状肯定没有碰撞，不需在检测后面的投影轴了
				}
			}
			//检测完全部的投影轴上的投影没和一个分离的，返回false
			return false;
		}

		/**
		 * 获取投影
		 * @param axis 
		 */
		public project(axis): Projection {
			alert("project(axis) not implemented");
			return null;
		}

		/**
		 * 得到所有的投影轴
		 */
		public getAxes(): Array<Vector> {
			alert("getAxes() not implemented");
			return null;
		}

		/**
		 * 移动
		 * @param dx 
		 * @param dy 
		 */
		public move(dx, dy): void {
			alert("move(dx, dy) not implemented");
		}

		public getPoints(): Array<Point> {
			return this.points;
		}

		/**
		 * 检测点是否在此碰撞体中
		 */
		public checkPointInside(x: number, y: number): boolean {
			alert("checkPointInside() not implemented");
			return false
		}
	}
}