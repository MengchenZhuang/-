/**
* momo 
*/
module touch {
	/**
	 * 向量
	 */
	export class Vector {
		/**
		 * x
		 */
		public x: number = 0;
		/**
		 * y
		 */
		public y: number = 0;

	
		/**
		 * 构造函数
		 * @param point 
		 */
		constructor(...args) {
			if (0 == args.length) {
				this.x = 0;
				this.y = 0;
			}
			else if (1 == args.length) {
				this.x = args[0].x;
				this.y = args[0].y;
			}
			//传入两个点
			else if (2 == args.length) {
				this.x = args[1].x - args[0].x;
				this.y = args[1].y - args[0].y;
			}
		}

		/**
		 * 获取向量大小
		 */
		public getMagnitude(): number {
			return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
		}

		/**
		 * 向量和
		 * @param vector 
		 */
		public add(vector: Vector) {
			var v = new Vector();
			v.x = this.x + vector.x;
			v.y = this.y + vector.y;
			return v;
		}

		/**
		 * 向量减
		 * @param vector 
		 */
		public subtract(vector: Vector): Vector {
			var v = new Vector();
			v.x = this.x - vector.x;
			v.y = this.y - vector.y;
			return v;
		}

		/**
		 * 向量点积
		 * @param vector 
		 */
		public dotProduct(vector: Vector): number {
			return this.x * vector.x + this.y * vector.y;
		}

		/**
		 * 由两点生成边
		 * @param vector 
		 */
		public edge(vector: Vector): Vector {
			return this.subtract(vector);
		}

		/**
		 * 垂直，即投影轴
		 */
		public perpendicular(): Vector {
			var v = new Vector();
			v.x = this.y;
			v.y = 0 - this.x;
			return v;
		}

		/**
		 * 归一化
		 */
		public normalize(): Vector {
			let v = new Vector(0, 0);
			let m = this.getMagnitude();

			if (m != 0) {
				v.x = this.x / m;
				v.y = this.y / m;
			}
			return v;
		}

		/**
		 * 投影轴的单位向量
		 */
		public normal(): Vector {
			var p = this.perpendicular();
			return p.normalize();
		}
	}
}