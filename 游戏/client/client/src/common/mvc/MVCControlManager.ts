/**
* momo 
*/
module touch {
	/**
	 * MVC控制器管理对象
	 */
	export class MVCControlManager implements IDestoryable {
		/**
		 * MVC主对象
		 */
		private _main: Laya.EventDispatcher = null;
		/**
		 * 数据管理器
		 */
		private _dataMgr: MVCDataManager = null;
		/**
		 * 视图管理器
		 */
		private _viewMgr: MVCViewManager = null;
		/**
		 * 控制器管理器
		 */
		private _controlMgr: MVCControlManager = null;

		/**
		 * 控制器对象映射表
		 */
		private _controlMap: Laya.Dictionary = null;

		/**
		 * 构造函数
		 */
		public constructor(main: Laya.EventDispatcher, dataMgr: MVCDataManager, viewMgr: MVCViewManager) {
			//MVC主对象
			this._main = main;
			//数据管理器
			this._dataMgr = dataMgr;
			//视图管理器
			this._viewMgr = viewMgr;
			//控制器对象映射表
			this._controlMap = new Laya.Dictionary();
		}

		/**
		 * 销毁函数
		 */
		public destroy(): void {
			//MVC主对象
			this._main = null;
			//数据管理器
			this._dataMgr = null;
			//视图管理器
			this._viewMgr = null;

			if (this._controlMap != null) {
				for (var index = 0; index < this._controlMap.values.length; index++) {
					var element: MVCControl = this._controlMap.values[index];
					if (element != null) {
						element.destroy();
					}
				}
			}
		}

		/**
		 * 初始化
		 */
		public initialize(): void {
			if (this._controlMap != null) {
				for (var index = 0; index < this._controlMap.values.length; index++) {
					var element: MVCControl = this._controlMap.values[index];
					if (element != null) {
						element.initialize();
					}
				}
			}
		}

		/**
		 * 反初始化
		 * @param 初始化参数
		 */
		public uninitialize(): void {
			if (this._controlMap != null) {
				for (var index = 0; index < this._controlMap.values.length; index++) {
					var element = this._controlMap.values[index];
					if (element != null) {
						element.uninitialize();
					}
				}
			}
		}

		/**
		 * 获得控制器对象
		 * @param 控制器对象类型
		 * @returns 控制器对象
		 */
		public get<T extends MVCControl>(controlClass: { new (): T; }): T {
			if (null == this._controlMap) {
				return null;
			}

			return this._controlMap.get(controlClass);
		}

		/**
		 * 添加控制器对象
		 * @param 控制器对象类型
		 * @returns 控制器对象
		 */
		public add<T extends MVCControl>(controlClass: { new (): T; }): T {
			if (null == this._controlMap) {
				return null;
			}

			//查询是否已经存在
			if (this._controlMap.indexOf(controlClass) != -1) {
				return this._controlMap.get(controlClass);
			}

			//创建对象
			let controlImp: T = new controlClass();
			controlImp.assemble(this._main, this._dataMgr, this._viewMgr);
			this._controlMap.set(controlClass, controlImp);
			return controlImp;
		}
	}
}