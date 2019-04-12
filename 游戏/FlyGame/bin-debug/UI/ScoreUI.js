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
//分数界面
var ScoreUI = (function (_super) {
    __extends(ScoreUI, _super);
    function ScoreUI() {
        var _this = _super.call(this) || this;
        _this.utils = new utils.Utils();
        _this.lable = utils.Utils.CreatText("0", 40, 0xffffff, 10, 30);
        _this.addChild(_this.lable);
        return _this;
    }
    ScoreUI.prototype.renderGameScore = function (score) {
        this.lable.text = score + "";
    };
    return ScoreUI;
}(egret.Sprite));
__reflect(ScoreUI.prototype, "ScoreUI");
//# sourceMappingURL=ScoreUI.js.map