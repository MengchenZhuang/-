/**
 * jarekzha
 */
module touch {
    /**
     * 战斗实体层
     */
    export class FightEntityLayer extends Layer {
        /** 房子父节点 */
        private _houseParent:fairygui.GObject  = null
        /** 角色父节点 */
        private _roleParent: fairygui.GObject  = null

        /**
         * 构造
         */
        constructor() {
            super(EnumLayer.FightEntity)

            this._houseParent = new fairygui.GObject()
            this.addChild(this._houseParent)
            this._roleParent = new fairygui.GObject()
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
        public get house(): fairygui.GObject { return this._houseParent }
        /** 角色父节点 */
        public get role(): fairygui.GObject { return this._roleParent }
    }
}
