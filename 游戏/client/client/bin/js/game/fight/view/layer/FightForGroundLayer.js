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
 * jarekzha
 */
var touch;
(function (touch) {
    /**
     * 战斗前景层
     */
    var FightForGroundLayer = /** @class */ (function (_super) {
        __extends(FightForGroundLayer, _super);
        /**
         * 构造
         */
        function FightForGroundLayer() {
            return _super.call(this, touch.EnumLayer.FightForeGround) || this;
        }
        /**
         * 初始化
         */
        FightForGroundLayer.prototype.initialize = function (datas) {
        };
        /**
         * 反初始化
         * @param 初始化参数
         */
        FightForGroundLayer.prototype.uninitialize = function (datas) {
        };
        return FightForGroundLayer;
    }(touch.Layer));
    touch.FightForGroundLayer = FightForGroundLayer;
})(touch || (touch = {}));
//# sourceMappingURL=FightForGroundLayer.js.map