/**
 * jarekzha
 */
module touch {
    /**
     * 战斗ui层
     */
    export class FightUILayer extends Layer {
        /**
         * 构造
         */
        constructor() {
            super(EnumLayer.FightUI)
        }

		/**
		 * 初始化
		 */
		public initialize(datas: MVCDataManager): void {
		}

		/**
		 * 反初始化
		 * @param 初始化参数
		 */
		public uninitialize(datas: MVCDataManager): void {
		}
    }
}