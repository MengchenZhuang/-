/**
* momo 
*/
module touch {
	/**
	 * 游戏模块
	 */
	export class GameModule extends MVCable implements Module {
		/**
		 * 构造函数
		 */
		constructor() {
			super();
			this.addControl(GameIndexControl)
			this.addView(GameSceneLayerView)
		}

		/**
		 * 销毁
		 */
		public destroy(): void {
			super.destroy();
		}

		/**
		 * 获取实例
		 */
		public static get instance(): GameModule {
			return GameCenter.instance.get(GameModule);
		}

		/**
		 * 初始化
		 */
		public initialize(): void {
			super.initialize()
		}

		/**
		 * 反初始化
		 */
		public uninitialize(): void {
			super.uninitialize()
		}

		/**
         * 更新 
         */
		public update(): void {
		}
	}
}