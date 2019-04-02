/**
* momo 
*/
module touch {
	/**
	 * UI中心
	 */
	export class UICenter implements IDestoryable {
		/**
		 * UI集合
		 */
		private _uis: Laya.Dictionary = null;

		/**
		 * 构造函数
		 */
		constructor() {
			this._uis = new Laya.Dictionary();
		}

		/**
		 * 销毁
		 */
		public destroy(): void {
			if (this._uis != null) {
				for (var index = 0; index < this._uis.values.length; index++) {
					var element: UIable = this._uis.values[index];
					if (element != null) {
						element.destroy();
					}
				}
			}
		}

		/**
		 * 打开UI
		 * @param uiClass UI类
		 */
		public openUI<T extends UIable>(uiClass: { new (): T; }): UIable {
			let ui: UIable = this._uis.get(uiClass);
			if (null == ui) {
				ui = new uiClass();
				this._uis.set(uiClass, ui);
				ui.open();
			}
			else {
				console.log("UI已打开：" + uiClass.prototype.constructor.name);
			}

			return ui;
		}

		/**
		 * 关闭UI
		 * @param uiClass UI类
		 */
		public closeUI<T extends UIable>(uiClass: { new (): T; }): void {
			let ui: UIable = this._uis.get(uiClass);
			if (ui != null) {
				UIModule.instance.event(UIEvent.CLOSE, ui);
				ui.close();
				ui.destroy();
				this._uis.remove(uiClass);
			}
			else {
				console.log("要关闭的UI未打开：" + uiClass.prototype.constructor.name);
			}
		}

		/**
		 * UI是否打开
		 * @param uiClass UI类
		 */
		public isOpen<T extends UIable>(uiClass: { new (): T; }): boolean {
			return this._uis.indexOf(uiClass) != -1;
		}

		/**
		 * 获取打开了的UI，未打开则返回null
		 * @param uiClass UI类
		 */
		public getUI<T extends UIable>(uiClass: { new (): T; }): T {
			return this._uis.get(uiClass);
		}
	}
}