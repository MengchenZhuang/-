/**
* momo 
*/
module touch {
	/**
	 * MVC控制器对象
	 */
	export class MVCControl implements IDestoryable{
		/**
		 * MVC主对象
		 */
		private _main: egret.EventDispatcher = null;
		/**
		 * 数据管理器
		 */
		private _dataMgr: MVCDataManager = null;
		/**
		 * 视图管理器
		 */
		private _viewMgr: MVCViewManager = null;

		/**
		 * 构造函数
		 */
		constructor() {
		}

		/**
		 * 销毁函数
		 */
		public destroy(): void {
			//视图管理器
			this._viewMgr = null;
			//数据管理器
			this._dataMgr = null;
			//MVC主对象
			this._main = null;
		}

		/**
		 * 部署对象
		 * @param MVC主对象
		 * @param 数据管理器
		 * @param 视图管理器
		 */
		public assemble(main: egret.EventDispatcher, dataMgr: MVCDataManager, viewMgr: MVCViewManager): void {
			this._main = main;
			this._dataMgr = dataMgr;
			this._viewMgr = viewMgr;
		}

		/**
		 * 初始化
		 */
		public initialize(): void {
		}

		/**
		 * 反初始化
		 */
		public uninitialize(): void {
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

		/**
		 * 获得消息发送对象
		 * @returns 消息发送对象
		 */
		protected get main(): egret.EventDispatcher {
			return this._main;
		}
	}
}