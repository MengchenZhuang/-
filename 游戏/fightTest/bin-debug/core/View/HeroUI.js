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
        _this.width = 60;
        _this.height = 60;
        _this.hero = new Hero("hero", _this.warea.x, _this.warea.y, 0, 1, 3);
        _this.addChild(_this.hero);
        RoleManager.instance.addNPC(_this.hero, _this.hero.x, _this.hero.y);
        _this.hero.touchEnabled = true;
        _this.hero.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.onBeginHandler, _this);
        return _this;
    }
    //private drapShape:egret.Shape;
    HeroUI.prototype.onBeginHandler = function (e) {
        e.stopImmediatePropagation();
        //this.drapShape = <egret.Shape>e.currentTarget;
        this.hero.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBeginHandler, this);
        this.hero.touchEnabled = false;
        //console.log("----------this.hero.x, this.hero.x", this.hero.x, this.hero.x);
        //console.log("----------e.stageX, e.stageY", e.stageX, e.stageY);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMoveHandler, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onEndHandler, this);
    };
    HeroUI.prototype.onMoveHandler = function (e) {
        this.hero.x = e.stageX;
        this.hero.y = e.stageY;
    };
    HeroUI.prototype.onEndHandler = function (e) {
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMoveHandler, this);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onEndHandler, this);
        this.hero.touchEnabled = true;
        ;
        this.hero.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBeginHandler, this);
        //console.log("this.heroShape.x, this.heroShape.x", this.hero.x, this.hero.x);
        //console.log("e.stageX, e.stageY", e.stageX, e.stageY);
    };
    return HeroUI;
}(egret.Sprite));
__reflect(HeroUI.prototype, "HeroUI");
//# sourceMappingURL=HeroUI.js.map