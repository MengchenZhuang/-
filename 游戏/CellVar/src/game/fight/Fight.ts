/**
 * jarekzha
 */
namespace touch {
    /**
     * 单场战斗
     */
    export class Fight extends MVCable {
        /** 关卡id */
        private _levelId: string = ""

        /**
         * 构造
         */
        constructor(levelId: string) {
            super()
            FightContext.progress = this.addData(FightProgress)
            FightContext.area = this.addData(FightArea)
            FightContext.sceneView = this.addView(FightSceneLayerView)
            FightContext.monsterView = this.addView(MonsterView)
            this.addControl(FightStartupControl)

            FightContext.progress.setData(levelId)
        }

		/**
		 * 初始化
		 */
        public initialize(): void {
            super.initialize()
            this.getControl(FightStartupControl).start()
        }

		/**
		 * 反初始化
		 */
        public uninitialize(): void {
            super.uninitialize()
        }

        /**
         * 销毁
         */
        public destroy() {
            super.destroy()
            FightContext.clear()
        }
    }
}