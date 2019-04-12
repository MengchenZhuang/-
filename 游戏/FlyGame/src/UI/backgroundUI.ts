
    // const screenWidth  = window.innerWidth;
    // const screenHeight = window.innerHeight;

    const BG_IMG_SRC   = 'bg2_jpg'
    const BG_WIDTH     = 512
    const BG_HEIGHT    = 512

    /**
     * 游戏背景类
     */
    class BackGround extends egret.Sprite {
        private top;
        private Img1:egret.Bitmap;
        private Img2:egret.Bitmap;
        constructor() {
            super();
            this.top = 0
            this.Img1 = utils.Utils.CreatImage(
                BG_IMG_SRC,
                0,
                -screenHeight + this.top,
                screenWidth,
                screenHeight
                );

            this.Img2 = utils.Utils.CreatImage(
                BG_IMG_SRC,
                0,
                this.top,
                screenWidth,
                screenHeight
                );

            this.addChild(this.Img1);
            this.addChild(this.Img2);
            console.log(screenWidth,screenHeight)

            //this.render();
        }

        /**更新地图位置 */

        public update() {
            this.top += 2

            if ( this.top >= screenHeight )
                 this.top = 0;
        }

        /**
         * 背景图重绘函数
         * 绘制两张图片，两张图片大小和屏幕一致
         * 第一张漏出高度为top部分，其余的隐藏在屏幕上面
         * 第二张补全除了top高度之外的部分，其余的隐藏在屏幕下面
         */
        public render() {
            this.Img1.y = -screenHeight + this.top;
            this.Img2.y = this.top;
 
        }
    }


