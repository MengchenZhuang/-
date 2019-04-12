module npc{
    const ENEMY_IMG_SRC = 'enemy_png'
    const ENEMY_WIDTH   = 60
    const ENEMY_HEIGHT  = 60


    //let databus = new DataBus()

    function rnd(start, end){
        return Math.floor(Math.random() * (end - start) + start)
    }

    export class Enemy extends base.Animation {

        public speed;
        constructor() {
            super(ENEMY_IMG_SRC, ENEMY_WIDTH, ENEMY_HEIGHT);

            this.initExplosionAnimation();
        }

        public init(speed) {
            this.x = rnd(0, screenWidth - ENEMY_WIDTH);
            this.y = -this.height;

            this.speed = speed;

            this.visible = true;
        }

        // 预定义爆炸的帧动画
        private initExplosionAnimation() {
            let frames = []

            const EXPLO_IMG_PREFIX  = 'explosion';
            const EXPLO_FRAME_COUNT = 19;

            for ( let i = 0;i < EXPLO_FRAME_COUNT;i++ ) {
                frames.push(EXPLO_IMG_PREFIX + (i + 1) + '_png');
            }

            this.initFrames(frames);
        }

        // 每一帧更新子弹位置
        public update() {
            this.y += this.speed;

            // 对象回收
            if ( this.y > screenHeight + this.height )
            {
                this.texture =RES.getRes(ENEMY_IMG_SRC);
                DataBus.getInstance().removeEnemy(this);

            }

        }

        /**
         * 玩家射击操作
         * 射击时机由外部决定
         */
        public shoot() {
            let bullet = utils.Pool.getInstance().getItemByClass('enemybullet', player.Bullet);

            bullet.init(
            this.x + this.width / 2 - bullet.width / 2,
            this.y - 10,
            10
            );

            DataBus.getInstance().bullets.push(bullet);
        }
    }
}

