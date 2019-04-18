/**
* momo 
*/
module touch {
	/**
	 * 投影对象
	 */
	export class Projection {
		/**
		 * 最小值
		 */
		public min: number = 0;
		/**
		 * 最大值
		 */
		public max: number = 0;

		/**
		 * 构造函数
		 * @param min 
		 * @param max 
		 */
		constructor(min: number, max: number) {
			this.min = min;
			this.max = max;
		}

		/**
		 * 是否有重叠,重叠返回true
		 * @param projection 
		 */
		public overlaps(projection: Projection): boolean {
			return this.max > projection.min && projection.max > this.min;
		}
	}
}