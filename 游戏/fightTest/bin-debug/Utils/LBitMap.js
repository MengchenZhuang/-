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
var LBitmap = (function (_super) {
    __extends(LBitmap, _super);
    function LBitmap(imgSrc, width, height, x, y) {
        if (imgSrc === void 0) { imgSrc = ""; }
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        var _this = _super.call(this) || this;
        _this.texture = RES.getRes(imgSrc);
        _this.width = width;
        _this.height = height;
        _this.anchorOffsetX = width / 2;
        _this.anchorOffsetY = height / 2;
        _this.x = x;
        _this.y = y;
        _this.visible = true;
        return _this;
    }
    return LBitmap;
}(egret.Bitmap));
__reflect(LBitmap.prototype, "LBitmap");
//# sourceMappingURL=LBitMap.js.map