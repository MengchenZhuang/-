
/**
* momo 
*/
module touch {
	/**
	 * 战斗模块
	 */
	export class FightModule extends Laya.EventDispatcher implements Module {
		// 当前战斗
		private _curFight: Fight = null

		/**
		 * 构造函数
		 */
		constructor() {
			super();
		}

		/**
		 * 销毁
		 */
		public destroy(): void {
			if (this._curFight != null) {
				this._curFight.uninitialize()
				this._curFight.destroy()
				this._curFight = null
			}
		}
		
		/**
		 * 初始化
		 */
		public initialize(): void { }

		/**
		 * 反初始化
		 */
		public uninitialize(): void { }

		/**
         * 更新 
         */
		public update(): void { }

		/**
		 * 获取实例
		 */
		public static get instance(): FightModule {
			return GameCenter.instance.get(FightModule);
		}

		/**
		 * 开始关卡
		 */
		public start(levelId: string): void {
			this.stop()

			this._curFight = new Fight(levelId)
			this._curFight.initialize()
		}

		/**
		 * 结束关卡
		 */
		public stop(): void {
			if (this._curFight != null) {
				this._curFight.uninitialize()
				this._curFight.destroy()
				this._curFight = null
			}
		}
	}
}