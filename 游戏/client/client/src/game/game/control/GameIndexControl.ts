/**
* momo 
*/
module touch {
	/**
	 * 游戏主页控制器
	 */
	export class GameIndexControl extends MVCControl {
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

			UIModule.instance.openUI(IndexUI);
		}

		/**
		 * 反初始化
		 * @param 初始化参数
		 */
		public uninitialize(): void {
			super.uninitialize();
		}
	}
}