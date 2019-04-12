/**
*  
*/
module touch {
	/**
	 * 工具类
	 */
	export class Util {

		/**
		 * 区间随机整数
		 * @param min 
		 * @param max 
		 */
		public static randomInt(min: number, max: number): number {
			var d = max - min + 1;
			return Math.floor(min + Math.random() * d);
		}

		/**
		 * 获取符号
		 * @param value 1或者-1 
		 */
		public static getSign(value: number): number {
			return value > 0 ? 1 : -1;
		}
	}
}