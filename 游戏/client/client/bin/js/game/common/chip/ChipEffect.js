var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
     * 碎片特效
     */
    var ChipEffect = /** @class */ (function (_super) {
        __extends(ChipEffect, _super);
        /**
         * 构造函数
         */
        function ChipEffect() {
            var _this = _super.call(this) || this;
            /**
             * 碎片集合
             */
            _this._chips = null;
            _this._chips = new Array();
            Laya.timer.frameLoop(1, _this, _this.onLoop);
            return _this;
        }
        /**
         * 销毁函数
         */
        ChipEffect.prototype.destroy = function () {
            Laya.timer.clear(this, this.onLoop);
            this._chips.forEach(function (element) {
                touch.Pool.recover("Chip", element);
            });
            this._chips.splice(0, this._chips.length);
            this._chips = null;
            _super.prototype.destroy.call(this);
        };
        /**
         * 循环
         */
        ChipEffect.prototype.onLoop = function () {
            for (var index = 0; index < this._chips.length;) {
                var chip = this._chips[index];
                if (null == chip) {
                    this._chips.splice(index, 1);
                    continue;
                }
                chip.x += Math.cos(chip.radian) * chip.speedX;
                chip.y += Math.sin(chip.radian) * chip.speedY;
                chip.life--;
                if (chip.life <= 0) {
                    touch.Pool.recover("Chip", chip);
                    this._chips.splice(index, 1);
                }
                else {
                    index++;
                }
            }
        };
        /**
         * 添加圆
         * @param x
         * @param y
         * @param radius
         * @param type
         */
        ChipEffect.prototype.addCircle = function (x, y, radius, type) {
            for (var radians = 0; radians <= Math.PI * 2; radians += Math.PI / 5) {
                var chip = this.createChip();
                chip.x = x + radius * Math.cos(radians);
                chip.y = y + radius * Math.sin(radians);
                chip.setData(type);
                this.addChild(chip);
                this._chips.push(chip);
            }
        };
        /**
         * 创建碎片
         */
        ChipEffect.prototype.createChip = function () {
            if (this._chips.length >= ChipEffect.MAX_CHIP) {
                var chip = this._chips.splice(0, 1)[0];
                chip.clear();
                return chip;
            }
            else {
                return touch.Pool.get("Chip", touch.Chip);
            }
        };
        /**
         * 最大碎片数量
         */
        ChipEffect.MAX_CHIP = 80;
        return ChipEffect;
    }(Laya.Sprite));
    touch.ChipEffect = ChipEffect;
})(touch || (touch = {}));
//# sourceMappingURL=ChipEffect.js.map