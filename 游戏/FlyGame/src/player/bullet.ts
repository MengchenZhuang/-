

module player{
        // TypeScript file
    const BULLET_IMG_SRC = 'bullet_png';
    const BULLET_WIDTH   = 16;
    const BULLET_HEIGHT  = 30;


    //let databus = new DataBus()
    export class Bullet extends base.Sprite {

        private speed;
        constructor() {
            super(BULLET_IMG_SRC, BULLET_WIDTH, BULLET_HEIGHT,0,0);
        }

        public init(x, y, speed) {
            this.x = x;
            this.y = y;

            this.speed = speed;

            this.visible = true;
        }

        // 每一帧更新子弹位置
        public update() {
            this.y -= this.speed;

            // 超出屏幕外回收自身
            if ( this.y < -this.height )
                DataBus.getInstance().removeBullets(this);
        }
    }
}