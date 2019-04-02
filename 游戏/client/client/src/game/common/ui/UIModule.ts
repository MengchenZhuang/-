/**
* momo 
*/
module touch {
	/**
	 * UI模块
	 */
	export class UIModule extends Laya.EventDispatcher implements Module {
		/**
		 * UI中心
		 */
		private _uiCenter: UICenter = null;

		/**
		 * 构造函数
		 */
		constructor() {
			super()
			//点击对话框遮罩区域不关闭界面
			UIConfig.closeDialogOnSide = false;
			UIConfig.popupBgAlpha = 0.8;
			this._uiCenter = new UICenter();
		}

		/**
		 * 销毁
		 */
		public destroy(): void {
			this._uiCenter.destroy();
			this._uiCenter = null;
		}

		/**
		 * 获取实例
		 */
		public static get instance(): UIModule {
			return GameCenter.instance.get(UIModule);
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
         * 更新 
         */
		public update(): void {

		}

		/**
		 * 打开UI
		 * @param uiClass UI类
		 */
		public openUI<T extends UIable>(uiClass: { new (): T; }): UIable {
			return this._uiCenter.openUI(uiClass);
		}

		/**
		 * 关闭UI
		 * @param uiClass UI类
		 */
		public closeUI<T extends UIable>(uiClass: { new (): T; }): void {
			this._uiCenter.closeUI(uiClass);
		}

		/**
		 * UI是否打开
		 * @param uiClass UI类
		 */
		public isOpen<T extends UIable>(uiClass: { new (): T; }): boolean {
			return this._uiCenter.isOpen(uiClass);
		}

		/**
		 * 获取打开了的UI，未打开则返回null
		 * @param uiClass UI类
		 */
		public getUI<T extends UIable>(uiClass: { new (): T; }): T {
			return this._uiCenter.getUI(uiClass);
		}
	}
}