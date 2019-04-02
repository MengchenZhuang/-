/**
 * jarekzha
 */
module touch {
    /**
     * 房子视图
     */
    export class HouseView extends MVCView {
        /** 父节点 */
        private _parent: Laya.Sprite = null
        /** 房子节点 */
        private _houseNode: HouseNode = null
        /** 边界,一条从上到下的直线 */
        private _border: Segment = null

		/**
		 * 初始化
		 */
        public initialize(): void {
            let layerView = this.getView(FightSceneLayerView)
            let layer = layerView.getLayer(EnumLayer.FightEntity) as FightEntityLayer
            this._parent = layer.house

            this.assembleHouse()
            this.calcBorder()
        }

		/**
		 * 反初始化
		 * @param 初始化参数
		 */
        public uninitialize(): void {
            if (this._houseNode != null) {
                this._houseNode.removeSelf()
                this._houseNode.destory()
            }
        }

        /**房子边界 */
        public get border(): Segment { return this._border}

        /**
         * 装配房子
         */
        private assembleHouse(): void {
            this._houseNode = new HouseNode()
            this._houseNode.pos(0, Laya.stage.height + 20)
            this._parent.addChild(this._houseNode)
        }

        /**
         * 计算边界
         */
        private calcBorder(): void {
            let x = this._houseNode.houseWidth
            let startPoint = new Laya.Point(x, -100)    // 100确认超出屏幕
            let endPoint = new Laya.Point(x, Laya.stage.height + 100)
            this._border = new Segment(startPoint, endPoint)
        }
    }
}