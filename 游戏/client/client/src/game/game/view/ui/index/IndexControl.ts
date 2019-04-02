/**
* momo
*/
module touch {
	/**
	 * 主页界面控制器
	 */
	export class IndexControl extends MVCControl {
		/**
		 * 构造函数
		 */
		constructor() {
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

			let ui = this.getView(IndexView).ui;
			ui.btnStart.clickHandler = Laya.Handler.create(this, this.onStart, null, false);
			ui.btnTask.clickHandler = Laya.Handler.create(this, this.onTask, null, false);
			ui.btnShop.clickHandler = Laya.Handler.create(this, this.onShop, null, false);
			ui.btnSetting.clickHandler = Laya.Handler.create(this, this.onSetting, null, false);
			ui.btnSignIn.clickHandler = Laya.Handler.create(this, this.onSignIn, null, false);
		}

		/**
		 * 反初始化
		 * @param 初始化参数
		 */
		public uninitialize(): void {
			let ui = this.getView(IndexView).ui;
			if (ui.btnStart.clickHandler != null) {
				ui.btnStart.clickHandler.recover();
				ui.btnStart.clickHandler = null;
			}
			if (ui.btnTask.clickHandler != null) {
				ui.btnTask.clickHandler.recover();
				ui.btnTask.clickHandler = null;
			}
			if (ui.btnShop.clickHandler != null) {
				ui.btnShop.clickHandler.recover();
				ui.btnShop.clickHandler = null;
			}
			if (ui.btnSetting.clickHandler != null) {
				ui.btnSetting.clickHandler.recover();
				ui.btnSetting.clickHandler = null;
			}
			if (ui.btnSignIn.clickHandler != null) {
				ui.btnSignIn.clickHandler.recover();
				ui.btnSignIn.clickHandler = null;
			}
			super.uninitialize();
		}

		/**
		 * 开始游戏
		 */
		private onStart(): void {
			
		}

		/**
		 * 邀请任务
		 */
		private onTask(): void {
			FightModule.instance.start("R1E01")
		}

		/**
		 * 商店
		 */
		private onShop(): void {
			UIModule.instance.openUI(ShopUI);
		}

		/**
		 * 设置
		 */
		private onSetting(): void {
			UIModule.instance.openUI(SettingUI)
		}

		/**
		 * 签到
		 */
		private onSignIn(): void {

		}
	}
}