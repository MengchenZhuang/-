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
var base;
(function (base) {
    var Sprite = (function (_super) {
        __extends(Sprite, _super);
        function Sprite(imgSrc, width, height, x, y) {
            if (imgSrc === void 0) { imgSrc = ""; }
            if (width === void 0) { width = 0; }
            if (height === void 0) { height = 0; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var _this = _super.call(this) || this;
            _this.texture = RES.getRes(imgSrc);
            _this.width = width;
            _this.height = height;
            _this.x = x;
            _this.y = y;
            _this.visible = true;
            return _this;
        }
        /**碰撞检测 */
        Sprite.prototype.isCollideWith = function (sp) {
            var spX = sp.x + sp.width / 2;
            var spY = sp.y + sp.height / 2;
            if (!this.visible || !sp.visible) {
                return false;
            }
            return !!(spX >= this.x && spX <= this.x + this.width && spY >= this.y && spY <= this.y + this.height);
        };
        return Sprite;
    }(egret.Bitmap));
    base.Sprite = Sprite;
    __reflect(Sprite.prototype, "base.Sprite");
})(base || (base = {}));
//# sourceMappingURL=sprite.js.map