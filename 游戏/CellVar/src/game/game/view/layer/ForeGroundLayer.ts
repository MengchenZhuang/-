/**
* momo 
*/
module touch {
	/**
	 * 前景层
	 */
	export class ForeGroundLayer extends Layer {
		/**
		 * 构造函数
		 */
		constructor() {
			super(EnumLayer.GameForeGround);
		}

		/**
		 * 销毁函数
		 */
		public destroy(): void {
			super.destroy();
		}
	}
}