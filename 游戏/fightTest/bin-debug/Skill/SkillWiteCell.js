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
/**白细胞小弟 */
var SkillWiteCell = (function (_super) {
    __extends(SkillWiteCell, _super);
    function SkillWiteCell() {
        var _this = 
        //TODO:假数据试验
        _super.call(this, 1, 2, 3) || this;
        _this.init();
        _this.initHitArea();
        return _this;
        //this.visible = true;
    }
    /**初始化图片将图片添加到地图上 */
    SkillWiteCell.prototype.init = function () {
        var pic = new LBitmap("skill_" + this.type + "_png", 60, 60);
        // pic.x = 0;
        // pic.y = 0;
        // pic.bitmap.texture = RES.getRes("skill_"+this.type+"_png");
        this.picBox.push(pic);
        for (var i = 0; i < this.picBox.length; i++) {
            this.addChild(this.picBox[i]);
        }
    };
    /**设置碰撞区域 */
    SkillWiteCell.prototype.initHitArea = function () {
        for (var i = 0; i < this.picBox.length; i++) {
            var hitArea = new HitArea(HitArea.CIRCLE, "Skill" + this.type);
            hitArea.setCircle(this.picBox[i].x, this.picBox[i].y, this.size);
            this.addHitArea(hitArea);
        }
    };
    /**技能移动 */
    SkillWiteCell.prototype.move = function () {
    };
    return SkillWiteCell;
}(Skill));
__reflect(SkillWiteCell.prototype, "SkillWiteCell");
//# sourceMappingURL=SkillWiteCell.js.map