var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var HeroState = (function () {
    function HeroState() {
    }
    /**英雄复活 无敌状态 */
    HeroState.HeroResurrection = "heroResurrection";
    /**正常状态*/
    HeroState.HeroCanBeHit = "heroCanBeHit";
    /**死亡状态*/
    HeroState.HeroDie = "heroDie";
    return HeroState;
}());
__reflect(HeroState.prototype, "HeroState");
//# sourceMappingURL=HeroState.js.map