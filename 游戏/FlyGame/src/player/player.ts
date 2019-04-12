
module player{
    // const screenWidth    = window.innerWidth;
    // const screenHeight   = window.innerHeight;

    // 玩家相关常量设置
    const PLAYER_IMG_SRC = 'hero_png';
    const PLAYER_WIDTH   = 80;
    const PLAYER_HEIGHT  = 80;

    //let databus = new DataBus();

    export class Player extends base.Sprite {

        public touched:boolean;

        constructor() {
            super(PLAYER_IMG_SRC, PLAYER_WIDTH, PLAYER_HEIGHT);

            // 玩家默认处于屏幕底部居中位置

            this.touched = false;
            this.x = screenWidth / 2 - this.width / 2;
            this.y = screenHeight - this.height - 30;

            //this.initEvent();


        }

        

       
    }
}