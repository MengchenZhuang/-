/**
* momo 
*/
module touch {
	/**
	 * 物件层
	 */
	export class EntityLayer extends Layer {
		/**
		 * 构造函数
		 */
		constructor() {
			super(EnumLayer.GameEntity);
		}

		/**
		 * 销毁函数
		 */
		public destroy(): void {
			super.destroy();
		}
	}
}