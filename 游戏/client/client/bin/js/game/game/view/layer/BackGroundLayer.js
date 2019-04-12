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
     * 背景层
     */
    var BackGroundLayer = /** @class */ (function (_super) {
        __extends(BackGroundLayer, _super);
        /**
         * 构造函数
         */
        function BackGroundLayer() {
            return _super.call(this, touch.EnumLayer.GameBackGround) || this;
        }
        /**
         * 销毁函数
         */
        BackGroundLayer.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
        };
        return BackGroundLayer;
    }(touch.Layer));
    touch.BackGroundLayer = BackGroundLayer;
})(touch || (touch = {}));
//# sourceMappingURL=BackGroundLayer.js.map