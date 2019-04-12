/**
 * jarekzha
 */
module touch {
    /**
     * 战斗背景层
     */
    export class FightBackGroundLayer extends Layer {
        /** 背景图 */
        private _bgImage: fairygui.GImage = null
        /**
         * 构造
         */
        constructor() {
            super(EnumLayer.FightBackGround);
        }

		/**
		 * 初始化
		 */
        public initialize(datas: MVCDataManager): void {
            let progress = datas.get(FightProgress);
            let levelId = progress.data.id;

            this.assembleBGImage(levelId);
        }

		/**
		 * 反初始化
		 * @param 初始化参数
		 */
        public uninitialize(datas: MVCDataManager): void {
            if (this._bgImage != null) {
                this._bgImage.removeFromParent();
                this._bgImage.dispose();
            }
        }

        /**
         * 背景图
         */
        private assembleBGImage(levelId: string) {
            let imageUrl = FightResData.getLevelBGUrl(levelId);
            this._bgImage = new fairygui.GImage();
            this._bgImage.texture = RES.getRes(imageUrl);
            //this._bgImage.loadImage(imageUrl, 0, 0, 0, 0, Handler.create(this, this.onBGImageLoadOver))
            this.onBGImageLoadOver();
        }

        /**
         * 背景图加载完成
         */
        private onBGImageLoadOver() {
            let scale =  GameData.stage.stageWidth/ this._bgImage.width;
            this._bgImage.setScale(scale, scale);
            this._bgImage.setXY(0, GameData.stage.height);
            // this._bgImage.= 1
            this.addChild(this._bgImage);
        }
    }
}
