/**
 * jarekzha
 */
module touch {
    /**
     * 图层管理器
     */
    export class LayerManager {
		/**
		 * 层字典
		 */
        private _layerDic:Dictionary = null;

        /**
         * 构造
         */
        constructor() {
            this._layerDic = new Dictionary();
        }

        /**
         * 销毁
         */
        public destroy() {
			for (let layer of this._layerDic.values) {
				if (layer != null) {
					layer.destroy();
					layer = null;
				}
			}
			this._layerDic.clear();
			this._layerDic = null;
        }

		/**
		 * 添加层
		 * @param layerClass 层类
		 */
		public addLayer<T extends Layer>(layerClass: { new (): T; }): void {
			let layer = new layerClass();
			fairygui.GRoot.inst.addChild(layer);
			this._layerDic.set(layer.type, layer);
		}

		/**
		 * 获取层
		 * @param type 层类型
		 */
		public getLayer(type: EnumLayer): Layer {
			return this._layerDic.get(type);
		}

		/**
		 * 获取所有层
		 */
		public get layers(): Layer[] {
			return this._layerDic.values
		}
    }
}