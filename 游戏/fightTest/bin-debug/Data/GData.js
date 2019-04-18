var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GData = (function () {
    function GData() {
    }
    /**怪物速度控制 */
    GData.MonsterSpeedfactor = 0.01;
    return GData;
}());
__reflect(GData.prototype, "GData");
//# sourceMappingURL=GData.js.map