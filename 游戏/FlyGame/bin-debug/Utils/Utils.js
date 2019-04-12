var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var utils;
(function (utils) {
    var Utils = (function () {
        function Utils() {
        }
        Utils.CreatImage = function (imgSrc, x, y, width, height) {
            if (imgSrc === void 0) { imgSrc = ""; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (width === void 0) { width = 0; }
            if (height === void 0) { height = 0; }
            var Img = new egret.Bitmap();
            var texture = RES.getRes(imgSrc);
            Img.texture = texture;
            Img.x = x;
            Img.y = y;
            Img.width = width;
            Img.height = height;
            //this.addChild(Img);
            return Img;
        };
        Utils.CreatSImage = function (imgSrc, x, y, width, height, sx, sy, sw, sh) {
            if (imgSrc === void 0) { imgSrc = ""; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (width === void 0) { width = 0; }
            if (height === void 0) { height = 0; }
            if (sx === void 0) { sx = 0; }
            if (sy === void 0) { sy = 0; }
            if (sw === void 0) { sw = 0; }
            if (sh === void 0) { sh = 0; }
            var Img = new egret.Bitmap();
            var texture = RES.getRes(imgSrc);
            Img.texture = texture;
            var renderTexture = new egret.RenderTexture();
            renderTexture.drawToTexture(Img, new egret.Rectangle(sx, sy, sw, sh));
            var Img1 = new egret.Bitmap();
            Img1.texture = renderTexture;
            Img1.x = x;
            Img1.y = y;
            Img1.width = width;
            Img1.height = height;
            //this.addChild(Img1);
            return Img1;
        };
        Utils.CreatText = function (text, size, color, x, y) {
            if (text === void 0) { text = ""; }
            if (size === void 0) { size = 0; }
            if (color === void 0) { color = 0; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            var Lable = new egret.TextField();
            Lable.textColor = color;
            Lable.size = size;
            Lable.x = x;
            Lable.y = y;
            Lable.text = text;
            //this.addChild(Lable);
            return Lable;
        };
        return Utils;
    }());
    utils.Utils = Utils;
    __reflect(Utils.prototype, "utils.Utils");
})(utils || (utils = {}));
//# sourceMappingURL=Utils.js.map