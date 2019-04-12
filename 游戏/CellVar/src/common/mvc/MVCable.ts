/**
* momo 
*/
module touch {
	/**
	 * 可作为MVC的对象
	 */
	export class MVCable extends egret.EventDispatcher implements IObjectable {
		/**
		 * 数据管理器
		 */
		protected _dataMgr: MVCDataManager = null;
		/**
		 * 视图管理器
		 */
		protected _viewMgr: MVCViewManager = null;
		/**
		 * 控制器管理器
		 */
		protected _controlMgr: MVCControlManager = null;

		/**
		 * 构造函数
		 */
		public constructor() {
			super();

			//数据管理器
			this._dataMgr = new MVCDataManager(this);
			//视图管理器
			this._viewMgr = new MVCViewManager(this, this._dataMgr);
			//控制器管理器
			this._controlMgr = new MVCControlManager(this, this._dataMgr, this._viewMgr);
		}

		/**
		 * 销毁
		 */
		public destroy(): void {
			if (this._controlMgr != null) {
				this._controlMgr.destroy();
				this._controlMgr = null;
			}

			if (this._viewMgr != null) {
				this._viewMgr.destroy();
				this._viewMgr = null;
			}

			if (this._dataMgr != null) {
				this._dataMgr.destroy();
				this._dataMgr = null;
			}
		}

		/**
		 * 清理
		 */
		public clear(): void {

		}

		/**
		 * 初始化
		 */
		public initialize(): void {
			if (this._dataMgr != null) {
				this._dataMgr.initialize();
			}

			if (this._viewMgr != null) {
				this._viewMgr.initialize();
			}

			if (this._controlMgr != null) {
				this._controlMgr.initialize();
			}
		}

		/**
		 * 反初始化
		 */
		public uninitialize(): void {
			if (this._controlMgr != null) {
				this._controlMgr.uninitialize();
			}

			if (this._viewMgr != null) {
				this._viewMgr.uninitialize();
			}

			if (this._dataMgr != null) {
				this._dataMgr.uninitialize();
			}
		}

		/**
		 * 获得数据对象
		 * @param dataClass 数据类型
		 * @returns 数据对象
		 */
		public getData<T extends MVCData>(dataClass: { new (): T; }): T {
			if (null == this._dataMgr) {
				return null;
			}

			return this._dataMgr.get(dataClass);
		}

		/**
		 * 添加数据对象
		 * @param dataClass 数据类型
		 * @returns 数据对象
		 */
		protected addData<T extends MVCData>(dataClass: { new (): T; }): T {
			if (null == this._dataMgr) {
				return null;
			}

			return this._dataMgr.add(dataClass);
		}

		/**
		 * 获得视图对象
		 * @param viewClass 视图类型
		 * @returns 视图对象
		 */
		public getView<T extends MVCView>(viewClass: { new (): T; }): T {
			if (null == this._viewMgr) {
				return null;
			}

			return this._viewMgr.get(viewClass);
		}

		/**
		 * 添加视图对象
		 * @param viewClass 视图类型
		 * @returns 视图对象
		 */
		protected addView<T extends MVCView>(viewClass: { new (): T; }): T {
			if (null == this._viewMgr) {
				return null;
			}

			return this._viewMgr.add(viewClass);
		}

		/**
		 * 获得控制器对象
		 * @param 控制器对象类型
		 * @returns 控制器对象
		 */
		public getControl<T extends MVCControl>(controlClass: { new (): T; }): T {
			if (null == this._controlMgr) {
				return null;
			}

			return this._controlMgr.get(controlClass);
		}

		/**
		 * 添加控制器对象
		 * @param 控制器对象类型
		 * @returns 控制器对象
		 */
		protected addControl<T extends MVCControl>(controlClass: { new (): T; }): T {
			if (null == this._controlMgr) {
				return null;
			}

			return this._controlMgr.add(controlClass);
		}
	}
}