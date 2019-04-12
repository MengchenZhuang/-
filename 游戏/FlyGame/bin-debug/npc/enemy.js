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
var npc;
(function (npc) {
    var ENEMY_IMG_SRC = 'enemy_png';
    var ENEMY_WIDTH = 60;
    var ENEMY_HEIGHT = 60;
    //let databus = new DataBus()
    function rnd(start, end) {
        return Math.floor(Math.random() * (end - start) + start);
    }
    var Enemy = (function (_super) {
        __extends(Enemy, _super);
        function Enemy() {
            var _this = _super.call(this, ENEMY_IMG_SRC, ENEMY_WIDTH, ENEMY_HEIGHT) || this;
            _this.initExplosionAnimation();
            return _this;
        }
        Enemy.prototype.init = function (speed) {
            this.x = rnd(0, screenWidth - ENEMY_WIDTH);
            this.y = -this.height;
            this.speed = speed;
            this.visible = true;
        };
        // 预定义爆炸的帧动画
        Enemy.prototype.initExplosionAnimation = function () {
            var frames = [];
            var EXPLO_IMG_PREFIX = 'explosion';
            var EXPLO_FRAME_COUNT = 19;
            for (var i = 0; i < EXPLO_FRAME_COUNT; i++) {
                frames.push(EXPLO_IMG_PREFIX + (i + 1) + '_png');
            }
            this.initFrames(frames);
        };
        // 每一帧更新子弹位置
        Enemy.prototype.update = function () {
            this.y += this.speed;
            // 对象回收
            if (this.y > screenHeight + this.height) {
                this.texture = RES.getRes(ENEMY_IMG_SRC);
                DataBus.getInstance().removeEnemy(this);
            }
        };
        /**
         * 玩家射击操作
         * 射击时机由外部决定
         */
        Enemy.prototype.shoot = function () {
            var bullet = utils.Pool.getInstance().getItemByClass('enemybullet', player.Bullet);
            bullet.init(this.x + this.width / 2 - bullet.width / 2, this.y - 10, 10);
            DataBus.getInstance().bullets.push(bullet);
        };
        return Enemy;
    }(base.Animation));
    npc.Enemy = Enemy;
    __reflect(Enemy.prototype, "npc.Enemy");
})(npc || (npc = {}));
//# sourceMappingURL=enemy.js.map