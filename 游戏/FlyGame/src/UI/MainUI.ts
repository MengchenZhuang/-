class MainUI extends egret.Sprite {

    private aniId:number;
    private bg:BackGround;
    private player:player.Player;
    private gameoverUI:GameOverUI;
    private scoreUI:ScoreUI;
    private bindLoop;

    private _distance:egret.Point = new egret.Point();
    // private hasEventBind:boolean;

    private touched:boolean;
    //private touchHandler = ()=>{} ;

    constructor() {
        super();
        this.aniId = 0;
        this.restart();
        //this.createView();
        this.touched = false;
        
    }

    private textField: egret.TextField;

    private createView(): void {
        this.addChild(this.bg);
        this.addChild(this.scoreUI);
        this.addChild(this.player);
        this.initEvent();

    }


    public restart(){
        //删除所有
        this.removeChildren();
        DataBus.getInstance().reset();

        //this.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touchHandler,this);

        this.bg       = new BackGround();
        this.player   = new player.Player();
        this.gameoverUI = new GameOverUI();
        this.scoreUI = new ScoreUI();

        this.player.touchEnabled = true;

        this.bindLoop     = this.loop.bind(this)
        //this.hasEventBind = false;

        window.cancelAnimationFrame(this.aniId);

        this.aniId = window.requestAnimationFrame(this.bindLoop);
        this.createView();
    }

    private enemyGenerate(){
        if(DataBus.getInstance().frame %30 == 0){
            let enemy:npc.Enemy = utils.Pool.getInstance().getItemByClass("enemy",npc.Enemy);
            enemy.init(6);
            this.addChild(enemy);
            DataBus.getInstance().enemys.push(enemy);
        }
    }

    private collisionDetection(){
        DataBus.getInstance().bullets.forEach((bullet:player.Bullet)=>{
            for(let i = 0,il = DataBus.getInstance().enemys.length;i<il;i++){
                let enemy:npc.Enemy = DataBus.getInstance().enemys[i];
                if(!enemy.isPlaying && enemy.isCollideWith(bullet)){
                    //enemy.speed = 0;
                    enemy.playAnimation();
                    music.Music.getInstance().playExplosion();
                    bullet.visible = false;
                    DataBus.getInstance().score +=1;
                    break;
                }
            }
            for ( let i = 0, il = DataBus.getInstance().enemys.length; i < il;i++ ) {
                let enemy = DataBus.getInstance().enemys[i];

                if ( this.player.isCollideWith(enemy) ) {
                    DataBus.getInstance().gameOver = true;

                    break;
                }
            }

        })
    }

    private touchEventHandler(e:egret.TouchEvent){

        let x = e.stageX;
        let y = e.stageY;
        let area = this.gameoverUI.btnArea;

        if(x>=area.startX && x<=area.endX && y>= area.startY && y<= area.endY){
            this.gameoverUI.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touchEventHandler,this);
            this.removeChild(this.gameoverUI);
            this.restart();
            
            
            // this.removeChildren();
        }
    }
    /**
     * 重绘
     */

    private render(){
        this.bg.render();

        //this.player.
        DataBus.getInstance().animations.forEach((ani)=>{
            if ( ani.isPlaying ) {
                ani.aniRender();
            }
        });

        this.scoreUI.renderGameScore(DataBus.getInstance().score);

        if(DataBus.getInstance().gameOver){
            //显示游戏结束界面
            this.player.touchEnabled = false;
            this.gameoverUI.createUI(DataBus.getInstance().score);
            this.addChild(this.gameoverUI);
            this.gameoverUI.touchEnabled = true;
            this.gameoverUI.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touchEventHandler,this);

        }
    }

      // 游戏逻辑更新主函数
    public update() {
        if ( DataBus.getInstance().gameOver )
            return;

        this.bg.update();

        DataBus.getInstance().bullets.forEach((item:player.Bullet)=>{
            item.update();
        });
        DataBus.getInstance().enemys.forEach((item:npc.Enemy)=>{
            item.update();
        });

        this.enemyGenerate();

        this.collisionDetection();

        if ( DataBus.getInstance().frame % 20 === 0 ) {
            this.shoot();
            music.Music.getInstance().playShoot();
        }
    }

     /**
     * 玩家射击操作
     * 射击时机由外部决定
     */
    public shoot() {
        let bullet:player.Bullet = utils.Pool.getInstance().getItemByClass('herobullet', player.Bullet);
        bullet.init(
        this.player.x + this.player.width / 2 - bullet.width / 2,
        this.player.y - 10,
        10
        );
        this.addChild(bullet);

        DataBus.getInstance().bullets.push(bullet);
    }

    // 实现游戏帧循环
    public loop() {
        DataBus.getInstance().frame++;

        this.update();
        this.render();

        this.aniId = window.requestAnimationFrame(
        this.bindLoop
        )
    }



    // /**
    //  * 当手指触摸屏幕的时候
    //  * 判断手指是否在飞机上
    //  * @param {Number} x: 手指的X轴坐标
    //  * @param {Number} y: 手指的Y轴坐标
    //  * @return {Boolean}: 用于标识手指是否在飞机上的布尔值
    //  */
    public checkIsFingerOnAir(x, y) {
        const deviation = 30

        return !!(   x >= this.player.x - deviation
                && y >= this.player.y - deviation
                && x <= this.player.x + this.player.width + deviation
                && y <= this.player.y + this.player.height + deviation  )
    }

    // /**
    //  * 根据手指的位置设置飞机的位置
    //  * 保证手指处于飞机中间
    //  * 同时限定飞机的活动范围限制在屏幕中
    //  */
    public setAirPosAcrossFingerPosZ(x, y) {
        let disX = x - this.player.width / 2;
        let disY = y - this.player.height / 2;

        if ( disX < 0 )
        disX = 0;

        else if ( disX > screenWidth - this.width )
        disX = screenWidth - this.player.width;

        if ( disY <= 0 )
        disY = 0;

        else if ( disY > screenHeight - this.player.height )
        disY = screenHeight - this.player.height;

        this.player.x = disX;
        this.player.y = disY;
    }

    // /**
    //  * 玩家响应手指的触摸事件
    //  * 改变战机的位置
    //  */
    public initEvent() {
        this.player.addEventListener( egret.TouchEvent.TOUCH_BEGIN,this.mouseDown,this);

        this.player.addEventListener(egret. TouchEvent.TOUCH_END,this.mouseUp,this);
    }


    private mouseDown(e:egret.TouchEvent){
        //console.log("Mouse Down.");
        this.touched = true;
        this._distance.x = e.stageX - this.player.x;
        this._distance.y = e.stageY - this.player.y;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    }

    private mouseMove(e:egret.TouchEvent){

        if( this.touched )
        {
            //console.log("moving now ! Mouse: [X:"+e.stageX+",Y:"+e.stageY+"]");
            this.player.x = e.stageX - this._distance.x;
            this.player.y = e.stageY - this._distance.y;
        }
    }

    private mouseUp(e:egret.TouchEvent){
        this.touched = false;
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    }

}
