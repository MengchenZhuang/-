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
var LBitMap = (function (_super) {
    __extends(LBitMap, _super);
    function LBitMap() {
        var _this = _super.call(this) || this;
        _this._bitmap = new egret.Bitmap();
        _this._bitmap.x = 0;
        _this._bitmap.y = 0;
        return _this;
    }
    Object.defineProperty(LBitMap.prototype, "bitmap", {
        get: function () {
            return this._bitmap;
        },
        set: function (pic) {
            this._bitmap = pic;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LBitMap.prototype, "x", {
        get: function () {
            return this._bitmap.x;
        },
        set: function (x) {
            this._bitmap.x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LBitMap.prototype, "y", {
        get: function () {
            return this._bitmap.y;
        },
        set: function (y) {
            this._bitmap.y = y;
        },
        enumerable: true,
        configurable: true
    });
    return LBitMap;
}(egret.Sprite));
__reflect(LBitMap.prototype, "LBitMap");
//# sourceMappingURL=LBitMap.js.map