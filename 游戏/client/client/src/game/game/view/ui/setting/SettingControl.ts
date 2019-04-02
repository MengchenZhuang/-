/**
* name 
*/
module touch{
	/**设置界面控制器 */
	export class SettingControl extends MVCControl{
		/**构造函数 */
		constructor(){
			super();
		}

		/**销毁函数 */
		public destroy():void
		{
			super.destroy();
		}

		/**
		 * 初始化
		 */
		public initialize(): void {
			super.initialize();
			let ui = this.getView(SettingView).ui;
			ui.btn_BackHome.clickHandler = Laya.Handler.create(this, this.onClickBackHome, null, false);
			ui.btn_country.clickHandler = Laya.Handler.create(this, this.onClickSetCountry, null, false);
			ui.btn_notic.clickHandler = Laya.Handler.create(this, this.onClickSetNotic, null, false);
			ui.btn_sound.clickHandler = Laya.Handler.create(this, this.onClickSound, null, false);
		}
		/**
		 * 反初始化
		 * @param 初始化参数
		 */
		public uninitialize(): void {
			let ui = this.getView(SettingView).ui;
			if (ui.btn_BackHome.clickHandler != null) {
				ui.btn_BackHome.clickHandler.recover();
				ui.btn_BackHome.clickHandler = null;
			}
			if (ui.btn_country.clickHandler != null) {
				ui.btn_country.clickHandler.recover();
				ui.btn_country.clickHandler = null;
			}
			if (ui.btn_notic.clickHandler != null) {
				ui.btn_notic.clickHandler.recover();
				ui.btn_notic.clickHandler = null;
			}
			if (ui.btn_sound.clickHandler != null) {
				ui.btn_sound.clickHandler.recover();
				ui.btn_sound.clickHandler = null;
			}
			super.uninitialize();
		}

		/**返回主页 */
		private onClickBackHome():void
		{

		}

		/**设置通知 */
		private onClickSetNotic():void
		{

		}

		/**设置国家 */
		private onClickSetCountry():void
		{

		}

		/**设置声音 */
		private onClickSound():void
		{

		}

	}
}