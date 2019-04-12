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
var atlas = 'Common_png';
//游戏结束界面
var GameOverUI = (function (_super) {
    __extends(GameOverUI, _super);
    function GameOverUI() {
        var _this = _super.call(this) || this;
        _this.btnArea = {
            startX: screenWidth / 2 - 100,
            startY: screenHeight / 2 - 100 + 180,
            endX: screenWidth / 2 + 100,
            endY: screenHeight / 2 - 100 + 180 + 120
        };
        var Img1 = utils.Utils.CreatSImage(atlas, screenWidth / 2 - 175, screenHeight / 2 - 125, 350, 350, 0, 0, 119, 108);
        _this.addChild(Img1);
        var lable1 = utils.Utils.CreatText("游戏结束", 40, 0xffffff, screenWidth / 2 - 80, screenHeight / 2 - 100 + 30);
        _this.addChild(lable1);
        var Img2 = utils.Utils.CreatSImage(atlas, screenWidth / 2 - 100, screenHeight / 2 - 100 + 180, 200, 80, 120, 6, 39, 24);
        _this.addChild(Img2);
        var lable2 = utils.Utils.CreatText("重新开始", 40, 0xffffff, screenWidth / 2 - 80, screenHeight / 2 - 100 + 205);
        _this.addChild(lable2);
        _this.score = utils.Utils.CreatText('得分: ' + 0, 40, 0xffffff, screenWidth / 2 - 20, screenHeight / 2 - 100 + 130);
        _this.addChild(_this.score);
        return _this;
    }
    GameOverUI.prototype.createUI = function (score) {
        this.score.text = score + "";
    };
    return GameOverUI;
}(egret.Sprite));
__reflect(GameOverUI.prototype, "GameOverUI");
//# sourceMappingURL=GameOverUI.js.map