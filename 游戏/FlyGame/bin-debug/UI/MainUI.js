var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var MainUI = (function (_super) {
    __extends(MainUI, _super);
    //private touchHandler = ()=>{} ;
    function MainUI() {
        var _this = _super.call(this) || this;
        _this._distance = new egret.Point();
        _this.aniId = 0;
        _this.restart();
        //this.createView();
        _this.touched = false;
        return _this;
    }
    MainUI.prototype.createView = function () {
        this.addChild(this.bg);
        this.addChild(this.scoreUI);
        this.addChild(this.player);
        this.initEvent();
    };
    MainUI.prototype.restart = function () {
        //删除所有
        this.removeChildren();
        DataBus.getInstance().reset();
        //this.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.touchHandler,this);
        this.bg = new BackGround();
        this.player = new player.Player();
        this.gameoverUI = new GameOverUI();
        this.scoreUI = new ScoreUI();
        this.player.touchEnabled = true;
        this.bindLoop = this.loop.bind(this);
        //this.hasEventBind = false;
        window.cancelAnimationFrame(this.aniId);
        this.aniId = window.requestAnimationFrame(this.bindLoop);
        this.createView();
    };
    MainUI.prototype.enemyGenerate = function () {
        if (DataBus.getInstance().frame % 30 == 0) {
            var enemy = utils.Pool.getInstance().getItemByClass("enemy", npc.Enemy);
            enemy.init(6);
            this.addChild(enemy);
            DataBus.getInstance().enemys.push(enemy);
        }
    };
    MainUI.prototype.collisionDetection = function () {
        var _this = this;
        DataBus.getInstance().bullets.forEach(function (bullet) {
            for (var i = 0, il = DataBus.getInstance().enemys.length; i < il; i++) {
                var enemy = DataBus.getInstance().enemys[i];
                if (!enemy.isPlaying && enemy.isCollideWith(bullet)) {
                    //enemy.speed = 0;
                    enemy.playAnimation();
                    music.Music.getInstance().playExplosion();
                    bullet.visible = false;
                    DataBus.getInstance().score += 1;
                    break;
                }
            }
            for (var i = 0, il = DataBus.getInstance().enemys.length; i < il; i++) {
                var enemy = DataBus.getInstance().enemys[i];
                if (_this.player.isCollideWith(enemy)) {
                    DataBus.getInstance().gameOver = true;
                    break;
                }
            }
        });
    };
    MainUI.prototype.touchEventHandler = function (e) {
        var x = e.stageX;
        var y = e.stageY;
        var area = this.gameoverUI.btnArea;
        if (x >= area.startX && x <= area.endX && y >= area.startY && y <= area.endY) {
            this.gameoverUI.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchEventHandler, this);
            this.removeChild(this.gameoverUI);
            this.restart();
            // this.removeChildren();
        }
    };
    /**
     * 重绘
     */
    MainUI.prototype.render = function () {
        this.bg.render();
        //this.player.
        DataBus.getInstance().animations.forEach(function (ani) {
            if (ani.isPlaying) {
                ani.aniRender();
            }
        });
        this.scoreUI.renderGameScore(DataBus.getInstance().score);
        if (DataBus.getInstance().gameOver) {
            //显示游戏结束界面
            this.player.touchEnabled = false;
            this.gameoverUI.createUI(DataBus.getInstance().score);
            this.addChild(this.gameoverUI);
            this.gameoverUI.touchEnabled = true;
            this.gameoverUI.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchEventHandler, this);
        }
    };
    // 游戏逻辑更新主函数
    MainUI.prototype.update = function () {
        if (DataBus.getInstance().gameOver)
            return;
        this.bg.update();
        DataBus.getInstance().bullets.forEach(function (item) {
            item.update();
        });
        DataBus.getInstance().enemys.forEach(function (item) {
            item.update();
        });
        this.enemyGenerate();
        this.collisionDetection();
        if (DataBus.getInstance().frame % 20 === 0) {
            this.shoot();
            music.Music.getInstance().playShoot();
        }
    };
    /**
    * 玩家射击操作
    * 射击时机由外部决定
    */
    MainUI.prototype.shoot = function () {
        var bullet = utils.Pool.getInstance().getItemByClass('herobullet', player.Bullet);
        bullet.init(this.player.x + this.player.width / 2 - bullet.width / 2, this.player.y - 10, 10);
        this.addChild(bullet);
        DataBus.getInstance().bullets.push(bullet);
    };
    // 实现游戏帧循环
    MainUI.prototype.loop = function () {
        DataBus.getInstance().frame++;
        this.update();
        this.render();
        this.aniId = window.requestAnimationFrame(this.bindLoop);
    };
    // /**
    //  * 当手指触摸屏幕的时候
    //  * 判断手指是否在飞机上
    //  * @param {Number} x: 手指的X轴坐标
    //  * @param {Number} y: 手指的Y轴坐标
    //  * @return {Boolean}: 用于标识手指是否在飞机上的布尔值
    //  */
    MainUI.prototype.checkIsFingerOnAir = function (x, y) {
        var deviation = 30;
        return !!(x >= this.player.x - deviation
            && y >= this.player.y - deviation
            && x <= this.player.x + this.player.width + deviation
            && y <= this.player.y + this.player.height + deviation);
    };
    // /**
    //  * 根据手指的位置设置飞机的位置
    //  * 保证手指处于飞机中间
    //  * 同时限定飞机的活动范围限制在屏幕中
    //  */
    MainUI.prototype.setAirPosAcrossFingerPosZ = function (x, y) {
        var disX = x - this.player.width / 2;
        var disY = y - this.player.height / 2;
        if (disX < 0)
            disX = 0;
        else if (disX > screenWidth - this.width)
            disX = screenWidth - this.player.width;
        if (disY <= 0)
            disY = 0;
        else if (disY > screenHeight - this.player.height)
            disY = screenHeight - this.player.height;
        this.player.x = disX;
        this.player.y = disY;
    };
    // /**
    //  * 玩家响应手指的触摸事件
    //  * 改变战机的位置
    //  */
    MainUI.prototype.initEvent = function () {
        this.player.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
        this.player.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
    };
    MainUI.prototype.mouseDown = function (e) {
        //console.log("Mouse Down.");
        this.touched = true;
        this._distance.x = e.stageX - this.player.x;
        this._distance.y = e.stageY - this.player.y;
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    };
    MainUI.prototype.mouseMove = function (e) {
        if (this.touched) {
            //console.log("moving now ! Mouse: [X:"+e.stageX+",Y:"+e.stageY+"]");
            this.player.x = e.stageX - this._distance.x;
            this.player.y = e.stageY - this._distance.y;
        }
    };
    MainUI.prototype.mouseUp = function (e) {
        this.touched = false;
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
    };
    return MainUI;
}(egret.Sprite));
__reflect(MainUI.prototype, "MainUI");
//# sourceMappingURL=MainUI.js.map