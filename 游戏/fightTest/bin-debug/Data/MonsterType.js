var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**怪物类型 */
var MonsterType = (function () {
    function MonsterType() {
    }
    MonsterType.Monster1 = 1;
    MonsterType.Monster2 = 2;
    MonsterType.Monster3 = 3;
    MonsterType.Monster4 = 4;
    MonsterType.Monster5 = 5;
    MonsterType.Monster6 = 6;
    return MonsterType;
}());
__reflect(MonsterType.prototype, "MonsterType");
//# sourceMappingURL=MonsterType.js.map