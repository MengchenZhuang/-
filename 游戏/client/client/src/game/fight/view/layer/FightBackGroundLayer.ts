/**
 * jarekzha
 */
module touch {
    /**
     * 战斗背景层
     */
    export class FightBackGroundLayer extends Layer {
        /** 背景图 */
        private _bgImage: Laya.Image = null
        /**
         * 构造
         */
        constructor() {
            super(EnumLayer.FightBackGround)
        }

		/**
		 * 初始化
		 */
        public initialize(datas: MVCDataManager): void {
            let progress = datas.get(FightProgress)
            let levelId = progress.data.id

            this.assembleBGImage(levelId)
        }

		/**
		 * 反初始化
		 * @param 初始化参数
		 */
        public uninitialize(datas: MVCDataManager): void {
            if (this._bgImage != null) {
                this._bgImage.removeSelf()
                this._bgImage.destroy()
            }
        }

        /**
         * 背景图
         */
        private assembleBGImage(levelId: string) {
            let imageUrl = FightResData.getLevelBGUrl(levelId)
            this._bgImage = new Laya.Image()
            this._bgImage.loadImage(imageUrl, 0, 0, 0, 0, Laya.Handler.create(this, this.onBGImageLoadOver))
        }

        /**
         * 背景图加载完成
         */
        private onBGImageLoadOver() {
            let scale = Laya.stage.width / this._bgImage.width
            this._bgImage.scale(scale, scale)
            this._bgImage.pos(0, Laya.stage.height)
            this._bgImage.anchorY = 1
            this.addChild(this._bgImage)
        }
    }
}
