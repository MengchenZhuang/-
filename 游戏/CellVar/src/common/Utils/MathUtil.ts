/**
*  
*/
module touch {
	/**
	 * 数学工具
	 */
	export class MathUtil {
		/**
		 * 区间随机整数[min, max]
		 * @param min 
		 * @param max 
		 */
		public static randomInt(min: number, max: number): number {
			var d = max - min + 1;
			return Math.floor(min + Math.random() * d);
		}

		/**
		 * 从范围内随机
		 */
		public static randomRange(range: number[]): number {
			return this.randomInt(range[0], range[1])
		}

		/**
		 * 随机选取
		 */
		public static randomSelect(pool: any[]): any {
			let index = this.randomInt(0, pool.length - 1)
			return pool[index]
		}
	}
}