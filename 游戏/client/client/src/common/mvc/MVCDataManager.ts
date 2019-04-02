/**
* momo 
*/
module touch {
	/**
	 * MVC数据管理对象
	 */
	export class MVCDataManager implements IDestoryable {
		/**
		 * MVC主对象
		 */
		private _main: Laya.EventDispatcher = null;
		/**
		 * 数据对象映射表
		 */
		private _dataMap: Laya.Dictionary = null;

		/**
		 * 构造函数
		 * @param main MVC主对象
		 */
		constructor(main: Laya.EventDispatcher) {
			this._main = main;
			this._dataMap = new Laya.Dictionary();
		}

		/**
		 * 析构函数
		 */
		public destroy(): void {
			this._main = null;

			if (this._dataMap != null) {
				for (var index = 0; index < this._dataMap.values.length; index++) {
					var element: MVCData = this._dataMap.values[index];
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
			if (this._dataMap != null) {
				for (var index = 0; index < this._dataMap.values.length; index++) {
					var element: MVCData = this._dataMap.values[index];
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
			if (this._dataMap != null) {
				for (var index = 0; index < this._dataMap.values.length; index++) {
					var element: MVCData = this._dataMap.values[index];
					if (element != null) {
						element.uninitialize();
					}
				}
			}
		}

		/**
		 * 获得数据对象
		 * @param 数据对象类型
		 * @returns 数据对象
		 */
		public get<T extends MVCData>(dataClass: { new (): T; }): T {
			if (null == this._dataMap) {
				return null;
			}
			return this._dataMap.get(dataClass);
		}

		/**
		 * 添加数据对象
		 * @param 数据对象类型
		 */
		public add<T extends MVCData>(dataClass: { new (): T; }): T {
			if (null == this._dataMap) {
				return null;
			}

			//查询是否已经存在数据对象
			if (this._dataMap.indexOf(dataClass) != -1) {
				return this._dataMap.get(dataClass);
			}

			//创建对象
			let dataImp: T = new dataClass();
			dataImp.assemble(this._main);
			this._dataMap.set(dataClass, dataImp);
			return dataImp;
		}
	}
}