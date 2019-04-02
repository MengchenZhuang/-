/**
* momo 
*/
module touch {
	/**
	 * 游戏中心
	 */
	export class GameCenter extends ModuleCenter {
		/**
         * 单例
         */
		private static _instance: GameCenter = null;

		/**
		 * 构造函数
		 */
		constructor() {
			super();
			this.add(UIModule);
			this.add(GameModule);
			this.add(FightModule)
		}

        /**
		 * 获取单例
		 */
		public static get instance(): GameCenter {
			GameCenter.create();
			return GameCenter._instance;
		}

        /**
		 * 创建
		 */
		public static create(): void {
			if (null == GameCenter._instance) {
				GameCenter._instance = new GameCenter();
			}
		}
	}
}