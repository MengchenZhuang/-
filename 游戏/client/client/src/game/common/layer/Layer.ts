/**
 * momo 
 */
module touch {
	/**
	 * 场景层
	 */
	export class Layer extends Laya.Sprite {
		/**
		 * 层类型
		 */
		protected _layerType: EnumLayer = EnumLayer.GameForeGround;

		/**
		 * 构造函数
		 */
		constructor(type: EnumLayer) {
			super();
			this._layerType = type;
		}

		/**
		 * 销毁函数
		 */
		public destroy(): void {
			super.destroy();
		}

		/**
		 * 获取层类型
		 */
		public get type(): EnumLayer {
			return this._layerType;
		}

		/**
		 * 初始化
		 */
		public initialize(datas: MVCDataManager): void {
		}

		/**
		 * 反初始化
		 * @param 初始化参数
		 */
		public uninitialize(datas: MVCDataManager): void {
		}
	}
}