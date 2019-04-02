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
     * 前景层
     */
    var ForeGroundLayer = /** @class */ (function (_super) {
        __extends(ForeGroundLayer, _super);
        /**
         * 构造函数
         */
        function ForeGroundLayer() {
            return _super.call(this, touch.EnumLayer.GameForeGround) || this;
        }
        /**
         * 销毁函数
         */
        ForeGroundLayer.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
        };
        return ForeGroundLayer;
    }(touch.Layer));
    touch.ForeGroundLayer = ForeGroundLayer;
})(touch || (touch = {}));
//# sourceMappingURL=ForeGroundLayer.js.map