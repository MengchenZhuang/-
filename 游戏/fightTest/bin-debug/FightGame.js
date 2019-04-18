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
/**
 * 战斗
 * 进行碰撞检测 角色添加删除
 */
var FightGame = (function (_super) {
    __extends(FightGame, _super);
    function FightGame() {
        var _this = _super.call(this) || this;
        _this.quadtree = new QuadTree(0, new Rect(0, 0, 100, 500));
        return _this;
    }
    /**注册事件 */
    FightGame.prototype.initEvents = function () {
    };
    /**添加病毒 */
    FightGame.prototype.addDiren = function () {
    };
    /**添加敌人 */
    FightGame.prototype.addPlayer = function () {
    };
    /**添加技能 */
    FightGame.prototype.addSkill = function () {
    };
    /**添加特效 */
    FightGame.prototype.addActive = function () {
    };
    /**刷新 */
    FightGame.prototype.update = function () {
        this.quadtree.clear();
    };
    return FightGame;
}(egret.EventDispatcher));
__reflect(FightGame.prototype, "FightGame");
//# sourceMappingURL=FightGame.js.map