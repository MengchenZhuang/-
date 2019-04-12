/**
* momo 
*/
module touch {
	/**
	 * 场景层视图
	 */
	export class GameSceneLayerView extends MVCView {
		// 层级管理
		private _layerMgr: LayerManager = null

		/**
		 * 构造函数
		 */
		constructor() {
			super();
			this._layerMgr = new LayerManager()	
			this._layerMgr.addLayer(BackGroundLayer);
			this._layerMgr.addLayer(EntityLayer);
			this._layerMgr.addLayer(ForeGroundLayer);
		}

		/**
		 * 销毁函数
		 */
		public destroy(): void {
			if (this._layerMgr != null) {
				this._layerMgr.destroy()
				this._layerMgr = null
			}
			super.destroy();
		}

		/**
		 * 初始化
		 */
		public initialize(): void {
			super.initialize();
		}

		/**
		 * 反初始化
		 * @param 初始化参数
		 */
		public uninitialize(): void {
			super.uninitialize();
		}

		/**
		 * 获取层
		 * @param type 层类型
		 */
		public getLayer(type: EnumLayer): Layer {
			return this._layerMgr.getLayer(type)
		}
	}
}