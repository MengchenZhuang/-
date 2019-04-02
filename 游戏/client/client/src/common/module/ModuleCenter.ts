/**
* momo 
*/
module touch {
	/**
	 * 模块管理中心
	 */
	export class ModuleCenter {
		/**
		 * 模块字典
		 */
		private _modules: Laya.Dictionary = null;

		/**
		 * 构造函数
		 */
		constructor() {
			this._modules = new Laya.Dictionary();
		}

		/**
		 * 销毁
		 */
		public destroy(): void {
			this._modules.clear();
			this._modules = null;
		}

		/**
		 * 初始化
		 */
		public initialize(): void {
			this._modules.values.forEach(element => {
				element.initialize();
			});
		}

		/**
		 * 反初始化
		 */
		public uninitialize(): void {
			this._modules.values.forEach(element => {
				element.uninitialize();
			});
		}

		/**
		 * 获得指定类型的模块
		 * @param moduleClass 模块类
		 */
		public get<ModuleClass extends Module>(moduleClass: { new (): ModuleClass; }): ModuleClass {
			if (null == this._modules) {
				return null;
			}
			return this._modules.get(moduleClass);
		}

		/**
		 * 添加模块
		 * @param 模块类
		 * @param 管理器中心
		 */
		public add<ModuleClass extends Module>(moduleClass: { new (): ModuleClass; }): void {
			if (null == this._modules) {
				return;
			}

			if (this._modules.indexOf(moduleClass) != -1) {
				alert("重复添加模块：" + moduleClass.prototype.constructor.name);
				return;
			}

			this._modules.set(moduleClass, new moduleClass());
		}
	}
}