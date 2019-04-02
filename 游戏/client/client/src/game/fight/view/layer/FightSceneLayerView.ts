/**
* jarekzha 
*/
module touch {
	/**
	 * 战斗场景层视图
	 */
	export class FightSceneLayerView extends MVCView {
		/** 层级管理 */
		private _layerMgr: LayerManager = null

		/**
		 * 构造函数
		 */
		constructor() {
			super();
			this._layerMgr = new LayerManager()
			this._layerMgr.addLayer(FightBackGroundLayer)
			this._layerMgr.addLayer(FightEntityLayer)
			this._layerMgr.addLayer(FightForGroundLayer)
			this._layerMgr.addLayer(FightUILayer)
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
			for (let layer of this._layerMgr.layers) {
				layer.initialize(this.datas)
			}
		}

		/**
		 * 反初始化
		 * @param 初始化参数
		 */
		public uninitialize(): void {
			for (let layer of this._layerMgr.layers) {
				layer.uninitialize(this.datas)
			}
			super.uninitialize();
		}

		/**
		 * 获取场景层
		 */
		public getLayer(type: EnumLayer): Layer {
			return this._layerMgr.getLayer(type)
		}
	}
}