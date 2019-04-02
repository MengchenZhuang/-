/**
* momo 
*/
module touch {
	/**
	 * 背景层
	 */
	export class BackGroundLayer extends Layer {
		/**
		 * 构造函数
		 */
		constructor() {
			super(EnumLayer.GameBackGround);
		}

		/**
		 * 销毁函数
		 */
		public destroy(): void {
			super.destroy();
		}
	}
}