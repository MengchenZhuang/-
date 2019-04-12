/**
* momo 
*/
module touch {
	/**
	 * MVC视图管理对象
	 */
	export class MVCViewManager implements IDestoryable {
		/**
		 * MVC主对象
		 */
		private _main: egret.EventDispatcher = null;
		/**
		 * 数据管理器
		 */
		private _dataMgr: MVCDataManager = null;
		/**
		 * 视图对象映射表
		 */
		private _viewMap: touch.Dictionary = null;

		/**
		 * 构造函数
		 */
		constructor(main: egret.EventDispatcher, dataMgr: MVCDataManager) {
			this._main = main;
			this._dataMgr = dataMgr;
			this._viewMap = new touch.Dictionary();
		}

		/**
		 * 析构函数
		 */
		public destroy(): void {
			this._main = null;
			this._dataMgr = null;

			if (this._viewMap != null) {
				for (var index = 0; index < this._viewMap.values.length; index++) {
					var element: MVCView = this._viewMap.values[index];
					if (element != null) {
						element.destroy();
					}
				}
				this._viewMap.clear();
				this._viewMap = null;
			}
		}

		/**
		 * 初始化
		 */
		public initialize(): void {
			if (this._viewMap != null) {
				for (var index = 0; index < this._viewMap.values.length; index++) {
					var element: MVCView = this._viewMap.values[index];
					if (element != null) {
						element.initialize();
					}
				}
			}
		}

		/**
		 * 反初始化
		 */
		public uninitialize(): void {
			if (this._viewMap != null) {
				for (var index = 0; index < this._viewMap.values.length; index++) {
					var element: MVCView = this._viewMap.values[index];
					if (element != null) {
						element.uninitialize();
					}
				}
			}
		}

		/**
		 * 获得视图对象
		 * @param 视图对象类型
		 * @returns 视图对象
		 */
		public get<T extends MVCView>(viewClass: { new (): T; }): T {
			if (null == this._viewMap) {
				return null;
			}

			return this._viewMap.get(viewClass);
		}

		/**
		 * 添加视图对象
		 * @param 视图对象类型
		 */
		public add<T extends MVCView>(viewClass: { new (): T; }): T {
			if (null == this._viewMap) {
				return null;
			}

			//查询是否已经存在数据对象
			if (this._viewMap.indexOf(viewClass) != -1) {
				return this._viewMap.get(viewClass);
			}

			//创建对象
			let dataImp: T = new viewClass();
			dataImp.assemble(this._main, this._dataMgr, this);
			this._viewMap.set(viewClass, dataImp);
			return dataImp;
		}
	}
}