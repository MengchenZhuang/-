/**
* xlc 
*/
module touch{
	/**设置界面 */
	export class SettingView extends MVCView{

		/**界面 */
		private _ui:ui.OptionsUI;

		/**构造函数 */
		constructor(){
			super();
		}
	
		/**
		 * 销毁函数
		 */
		public destroy(): void {
			super.destroy();
		}

		/**
		 * 初始化
		 */
		public initialize(): void {
			super.initialize();
			this._ui = new ui.OptionsUI;
			Laya.stage.addChild(this._ui);
		}

		/**
		 * 反初始化
		 * @param 初始化参数
		 */
		public uninitialize(): void {
			if (this._ui != null) {
				this._ui.removeSelf();
				this._ui.destroy();
				this._ui = null;
			}
			super.uninitialize();
		}

		/**
		 * 获取界面
		 */
		public get ui(): ui.OptionsUI {
			return this._ui;
		}
	}
}