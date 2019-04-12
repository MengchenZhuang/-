
module base{
    //let databus = new DataBus();
    export class Animation extends base.Sprite{

        public isPlaying:boolean;
        private loop:boolean;
        private interval:number;
        private timer = null;
        // 当前播放的帧
        private index = -1

        // 总帧数
        private count = 0

        // 帧图片集合
        public imgList = []
        constructor(imgSrc,width,height){
            super(imgSrc,width,height);
                // 当前动画是否播放中
            this.isPlaying = false

            // 动画是否需要循环播放
            this.loop = false

            // 每一帧的时间间隔
            this.interval = 1000 / 60

            // 帧定时器
            this.timer = null

            // 当前播放的帧
            this.index = -1

            // 总帧数
            this.count = 0

            // 帧图片集合
            this.imgList = []

            /**
             * 推入到全局动画池里面
             * 便于全局绘图的时候遍历和绘制当前动画帧
             */
            DataBus.getInstance().animations.push(this);

        }
        /**
         * 初始化帧动画的所有帧
         * 为了简单，只支持一个帧动画
         */
        public initFrames(imgList){
            imgList.forEach((imgSrc)=>{
                this.imgList.push(imgSrc);
            });
            this.count = imgList.length;
        }

          // 将播放中的帧绘制到canvas上
        public aniRender() {
            this.texture = RES.getRes(this.imgList[this.index]);
        }
        // 播放预定的帧动画
        public playAnimation(index = 0, loop = false) {
            this.isPlaying = true;
            this.loop      = loop;

            this.index     = index;

            if ( this.interval > 0 && this.count ) {
                this.timer = setInterval(
                    this.frameLoop.bind(this),
                    this.interval
                );
            }
        }
        
        // 帧遍历
        public frameLoop() {
            this.index++

            if ( this.index > this.count - 1 ) {
                if ( this.loop ) {
                    this.index = 0
                }

                else {
                    this.index--
                    this.stop()
                }
            }
        }

        public stop(){

            this.isPlaying = false;
            this.visible = false;

            if ( this.timer)
            clearInterval(this.timer); 
        }
    }
}