/**
* momo
*/
var touch;
(function (touch) {
    /**
     * 工具类
     */
    var Util = /** @class */ (function () {
        function Util() {
        }
        /**
         * 区间随机整数
         * @param min
         * @param max
         */
        Util.randomInt = function (min, max) {
            var d = max - min + 1;
            return Math.floor(min + Math.random() * d);
        };
        /**
         * 获取符号
         * @param value 1或者-1
         */
        Util.getSign = function (value) {
            return value > 0 ? 1 : -1;
        };
        /**
         * 震屏
         * @param root
         * @param shakeX
         * @param shakeY
         */
        Util.shakeScreen = function (root, shakeX, shakeY) {
            if (this._timeLine) {
                return;
            }
            var shakeToX = root.x + shakeX;
            var shakeToY = root.y + shakeY;
            var shakeFromX = root.x - shakeX;
            var shakeFromY = root.y - shakeY;
            this._timeLine = new Laya.TimeLine();
            this._timeLine.to(root, { x: shakeToX, y: shakeToY }, 50, Laya.Ease.backOut, 0).to(root, { x: shakeFromX, y: shakeFromY }, 50, Laya.Ease.bounceIn, 0).to(root, { x: shakeToX, y: shakeToY }, 50, Laya.Ease.bounceOut, 0).to(root, { x: shakeFromX, y: shakeFromY }, 50, Laya.Ease.bounceIn, 0).to(root, { x: shakeToX, y: shakeToY }, 50, Laya.Ease.bounceOut, 0).to(root, { x: root.x, y: root.y }, 50, Laya.Ease.bounceIn, 0);
            this._timeLine.on(Laya.Event.COMPLETE, this, this.onShakeOver);
            this._timeLine.play();
        };
        /**
         * 震屏结束
         */
        Util.onShakeOver = function () {
            this._timeLine.reset();
            this._timeLine.destroy();
            this._timeLine = null;
        };
        return Util;
    }());
    touch.Util = Util;
})(touch || (touch = {}));
//# sourceMappingURL=Util.js.map