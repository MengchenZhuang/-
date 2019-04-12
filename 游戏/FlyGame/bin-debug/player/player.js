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
    // const screenWidth    = window.innerWidth;
    // const screenHeight   = window.innerHeight;
    // 玩家相关常量设置
    var PLAYER_IMG_SRC = 'hero_png';
    var PLAYER_WIDTH = 80;
    var PLAYER_HEIGHT = 80;
    //let databus = new DataBus();
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player() {
            var _this = _super.call(this, PLAYER_IMG_SRC, PLAYER_WIDTH, PLAYER_HEIGHT) || this;
            // 玩家默认处于屏幕底部居中位置
            _this.touched = false;
            _this.x = screenWidth / 2 - _this.width / 2;
            _this.y = screenHeight - _this.height - 30;
            return _this;
            //this.initEvent();
        }
        return Player;
    }(base.Sprite));
    player.Player = Player;
    __reflect(Player.prototype, "player.Player");
})(player || (player = {}));
//# sourceMappingURL=player.js.map