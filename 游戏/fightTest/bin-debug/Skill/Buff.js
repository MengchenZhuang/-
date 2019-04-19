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
/**地图上随机产生的技能 */
/**
 * 与英雄发生碰撞产生不同效果
 * skillFactory.createSkill(Buff.type);
 *
 */
var Buff = (function (_super) {
    __extends(Buff, _super);
    /**位置 */
    //private Position:point;
    /**类型 */
    /**图片资源 */
    function Buff(type, x, y, speed, size) {
        var _this = 
        //TODO:暂时写这个
        _super.call(this, 1, 1) || this;
        _this.type = type;
        _this.init();
        _this.initHitArea();
        return _this;
        //this.visible = true;
    }
    /**初始化图片将图片添加到地图上 */
    Buff.prototype.init = function () {
        var pic = new LBitmap("buff_" + this.type + "_png", 60, 60);
        // pic.x = 0;
        // pic.y = 0;
        // pic.bitmap.texture = RES.getRes("buff_"+this.type+"_png");
        this.picBox.push(pic);
        for (var i = 0; i < this.picBox.length; i++) {
            this.addChild(this.picBox[i]);
        }
    };
    /**设置碰撞区域 */
    Buff.prototype.initHitArea = function () {
        for (var i = 0; i < this.picBox.length; i++) {
            var hitArea = new HitArea(HitArea.CIRCLE, "Buff" + this.type);
            hitArea.setCircle(this.picBox[i].x, this.picBox[i].y, this.size);
            this.addHitArea(hitArea);
        }
    };
    /**碰撞检测 */
    /**TODO:检测碰撞 */
    Buff.prototype.checkingCollision = function (obj) {
    };
    /**
     * 发生碰撞
     * TODO:子类复写，监听碰撞
     * */
    Buff.prototype.collisionIn = function (obj, part) {
    };
    return Buff;
}(Npc));
__reflect(Buff.prototype, "Buff");
//# sourceMappingURL=Buff.js.map