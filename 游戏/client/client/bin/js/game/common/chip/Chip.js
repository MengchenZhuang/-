var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
* momo
*/
var touch;
(function (touch) {
    /**
     * 碎片
     */
    var Chip = /** @class */ (function (_super) {
        __extends(Chip, _super);
        /**
         * 构造函数
         */
        function Chip() {
            var _this = _super.call(this) || this;
            /**
             * 移动角度
             */
            _this.radian = 0;
            /**
             * x方向速度
             */
            _this.speedX = 0;
            /**
             * y方向速度
             */
            _this.speedY = 0;
            /**
             * 生命
             */
            _this.life = 0;
            return _this;
        }
        /**
         * 销毁函数
         */
        Chip.prototype.destroy = function () {
            this.clear();
            _super.prototype.destroy.call(this);
        };
        /**
         * 清理函数
         */
        Chip.prototype.clear = function () {
            this.removeSelf();
        };
        /**
         * 设置数据
         */
        Chip.prototype.setData = function (skinIndex) {
            this.skin = "game/chip" + skinIndex + ".png";
            this.speedX = Math.random() * 10;
            this.speedY = Math.random() * 10;
            this.radian = Math.random() * Math.PI * 2;
            this.life = touch.Util.randomInt(120, 600);
        };
        return Chip;
    }(Laya.Image));
    touch.Chip = Chip;
})(touch || (touch = {}));
//# sourceMappingURL=Chip.js.map