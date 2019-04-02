/**
* momo 
*/
module touch {
	/**
	 * MVC视图对象
	 */
	export class MVCView implements IDestoryable {
		/**
		 * MVC主对象
		 */
		private _main: Laya.EventDispatcher = null;
		/**
		 * 数据管理器
		 */
		private _dataMgr: MVCDataManager = null;
		/**
		 * 视图管理
		 */
		private _viewMgr: MVCViewManager = null

		/**
		 * 构造函数
		 */
		constructor() {
		}

		/**
		 * 销毁函数
		 */
		public destroy(): void {
			this._viewMgr = null
			this._dataMgr = null;
			this._main = null;
		}

		/**
		 * 部署对象
		 * @param MVC主对象
		 * @returns 数据管理器
		 */
		public assemble(main: Laya.EventDispatcher,
			dataMgr: MVCDataManager,
			viewMgr: MVCViewManager) {
			this._main = main;
			this._dataMgr = dataMgr;
			this._viewMgr = viewMgr
		}

		/**
		 * 初始化
		 */
		public initialize(): void {
		}

		/**
		 * 反初始化
		 * @param 初始化参数
		 */
		public uninitialize(): void {
		}

		/**
		 * 获得消息发送对象
		 * @returns 消息发送对象
		 */
		public get main(): Laya.EventDispatcher {
			return this._main;
		}

		/**
		 * 获得数据对象
		 * @param 数据对象类型
		 * @returns 数据对象
		 */
		protected getData<T extends MVCData>(dataClass: { new (): T; }): T {
			if (null == this._dataMgr) {
				return null;
			}

			return this._dataMgr.get<T>(dataClass);
		}

		/** 所有数据 */
		protected get datas(): MVCDataManager { return this._dataMgr }

		/**
		 * 获得视图对象
		 * @param 视图对象类型
		 * @returns 视图对象
		 */
		protected getView<T extends MVCView>(viewClass: { new (): T; }): T {
			if (null == this._viewMgr) {
				return null;
			}

			return this._viewMgr.get<T>(viewClass);
		}
	}
}