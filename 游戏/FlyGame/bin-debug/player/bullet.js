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
var player;
(function (player) {
    // TypeScript file
    var BULLET_IMG_SRC = 'bullet_png';
    var BULLET_WIDTH = 16;
    var BULLET_HEIGHT = 30;
    //let databus = new DataBus()
    var Bullet = (function (_super) {
        __extends(Bullet, _super);
        function Bullet() {
            return _super.call(this, BULLET_IMG_SRC, BULLET_WIDTH, BULLET_HEIGHT, 0, 0) || this;
        }
        Bullet.prototype.init = function (x, y, speed) {
            this.x = x;
            this.y = y;
            this.speed = speed;
            this.visible = true;
        };
        // 每一帧更新子弹位置
        Bullet.prototype.update = function () {
            this.y -= this.speed;
            // 超出屏幕外回收自身
            if (this.y < -this.height)
                DataBus.getInstance().removeBullets(this);
        };
        return Bullet;
    }(base.Sprite));
    player.Bullet = Bullet;
    __reflect(Bullet.prototype, "player.Bullet");
})(player || (player = {}));
//# sourceMappingURL=bullet.js.map