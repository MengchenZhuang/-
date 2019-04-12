/**
 * jarekzha
 */
module touch {
    /**
     * 怪物节点
     */
    export class MonsterNode extends egret.Sprite {
        /** id */
        private _id: number = 0
        /** 属性 */
        private _attr: MonsterAttr = null
        /** 移动驱动 */
        private _move: MonsterMoveDriver = null

        /**
         * 构造
         */
        constructor(id: number, data: MonsterData) {
            super()

            if (Env.debug) {
                //this.graphics.drawCircle(0, -20, 20, "#888888")
            }

            this._id = id
            this._attr = new MonsterAttr(data)
            this._move = new MonsterMoveDriver(this)
        }

        /**
         * 销毁
         */
        public destroy() {
            if (this._move != null) {
                this._move.destory()
                this._move = null
            }
            this._attr = null
            
            // super.removeSelf()
            // super.destroy()
        }

        /**
         * 开始运行
         */
        public start() {
            this._move.start()
        }

        /** id */
        public get id(): number { return this._id }
        /** 属性 */
        public get attr(): MonsterAttr { return this._attr}
    }
}