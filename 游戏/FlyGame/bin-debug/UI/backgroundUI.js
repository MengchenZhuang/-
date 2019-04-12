// const screenWidth  = window.innerWidth;
// const screenHeight = window.innerHeight;
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
var BG_IMG_SRC = 'bg2_jpg';
var BG_WIDTH = 512;
var BG_HEIGHT = 512;
/**
 * 游戏背景类
 */
var BackGround = (function (_super) {
    __extends(BackGround, _super);
    function BackGround() {
        var _this = _super.call(this) || this;
        _this.top = 0;
        _this.Img1 = utils.Utils.CreatImage(BG_IMG_SRC, 0, -screenHeight + _this.top, screenWidth, screenHeight);
        _this.Img2 = utils.Utils.CreatImage(BG_IMG_SRC, 0, _this.top, screenWidth, screenHeight);
        _this.addChild(_this.Img1);
        _this.addChild(_this.Img2);
        console.log(screenWidth, screenHeight);
        return _this;
        //this.render();
    }
    /**更新地图位置 */
    BackGround.prototype.update = function () {
        this.top += 2;
        if (this.top >= screenHeight)
            this.top = 0;
    };
    /**
     * 背景图重绘函数
     * 绘制两张图片，两张图片大小和屏幕一致
     * 第一张漏出高度为top部分，其余的隐藏在屏幕上面
     * 第二张补全除了top高度之外的部分，其余的隐藏在屏幕下面
     */
    BackGround.prototype.render = function () {
        this.Img1.y = -screenHeight + this.top;
        this.Img2.y = this.top;
    };
    return BackGround;
}(egret.Sprite));
__reflect(BackGround.prototype, "BackGround");
//# sourceMappingURL=backgroundUI.js.map