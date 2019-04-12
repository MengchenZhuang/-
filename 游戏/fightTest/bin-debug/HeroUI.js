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
var HeroUI = (function (_super) {
    __extends(HeroUI, _super);
    function HeroUI() {
        var _this = _super.call(this) || this;
        _this.warea = { x: 200, y: 200 };
        _this.heroShape = new egret.Shape();
        _this.shape = new egret.Shape();
        _this.hero = new Hero(_this.warea.x, _this.warea.y, 0, 10, 0xff0000);
        _this.addChild(_this.hero);
        _this.hero.shape.touchEnabled = true;
        _this.hero.shape.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.onBeginHandler, _this);
        return _this;
    }
    //private drapShape:egret.Shape;
    HeroUI.prototype.onBeginHandler = function (e) {
        e.stopImmediatePropagation();
        //this.drapShape = <egret.Shape>e.currentTarget;
        this.hero.shape.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBeginHandler, this);
        this.hero.shape.touchEnabled = false;
        console.log("----------this.heroShape.x, this.heroShape.x", this.hero.shape.x, this.hero.shape.x);
        console.log("----------e.stageX, e.stageY", e.stageX, e.stageY);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMoveHandler, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onEndHandler, this);
    };
    HeroUI.prototype.onMoveHandler = function (e) {
        this.hero.shape.x = e.stageX;
        this.hero.shape.y = e.stageY;
    };
    HeroUI.prototype.onEndHandler = function (e) {
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMoveHandler, this);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onEndHandler, this);
        this.hero.shape.touchEnabled = true;
        ;
        this.hero.shape.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBeginHandler, this);
        console.log("this.heroShape.x, this.heroShape.x", this.hero.shape.x, this.hero.shape.x);
        console.log("e.stageX, e.stageY", e.stageX, e.stageY);
    };
    return HeroUI;
}(egret.Sprite));
__reflect(HeroUI.prototype, "HeroUI");
//# sourceMappingURL=HeroUI.js.map