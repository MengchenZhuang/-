/**怪物 */
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
var Monster = (function (_super) {
    __extends(Monster, _super);
    function Monster(x, y, speed, radio, color) {
        return _super.call(this, x, y, speed, radio, color) || this;
    }
    return Monster;
}(Npc));
__reflect(Monster.prototype, "Monster");
//# sourceMappingURL=Monster.js.map