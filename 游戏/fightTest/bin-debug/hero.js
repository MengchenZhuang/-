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
/**英雄 */
var Hero = (function (_super) {
    __extends(Hero, _super);
    function Hero(x, y, speed, radio, color) {
        return _super.call(this, x, y, speed, radio, color) || this;
    }
    return Hero;
}(Npc));
__reflect(Hero.prototype, "Hero");
//# sourceMappingURL=hero.js.map