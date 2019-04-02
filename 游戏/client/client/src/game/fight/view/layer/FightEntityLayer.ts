/**
 * jarekzha
 */
module touch {
    /**
     * 战斗实体层
     */
    export class FightEntityLayer extends Layer {
        /** 房子父节点 */
        private _houseParent: Laya.Sprite = null
        /** 角色父节点 */
        private _roleParent: Laya.Sprite = null

        /**
         * 构造
         */
        constructor() {
            super(EnumLayer.FightEntity)

            this._houseParent = new Laya.Sprite()
            this.addChild(this._houseParent)
            this._roleParent = new Laya.Sprite()
            this.addChild(this._roleParent)
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

        /** 房子 */
        public get house(): Laya.Sprite { return this._houseParent }
        /** 角色父节点 */
        public get role(): Laya.Sprite { return this._roleParent }
    }
}
