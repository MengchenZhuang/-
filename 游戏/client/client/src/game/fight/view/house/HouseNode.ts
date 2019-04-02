/**
 * jarekzha
 */
module touch {
    /**
     * 房子节点,坐标位于屏幕左下角
     */
    export class HouseNode extends Laya.Sprite {
        /** 背景图 */
        private _bgImage: Laya.Image = null
        /**
         * 构造
         */
        constructor() {
            super()
            this.assembleBackGround()
        }

        /**
         * 销毁
         */
        public destory() {
            if (this._bgImage != null) {
                this._bgImage.removeSelf()
                this._bgImage.destroy()
            }

            this.destory()
        }

        /**房间宽度 */
        public get houseWidth(): number { return this._bgImage.width }

        /**
         * 拼接背景
         */
        private assembleBackGround() {
            this._bgImage = new Laya.Image("fight/House.png")
            this.addChild(this._bgImage)
            this._bgImage.pos(0, this._bgImage.height * -1)
        }
    }
}