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
     * 场景层
     */
    var Layer = /** @class */ (function (_super) {
        __extends(Layer, _super);
        /**
         * 构造函数
         */
        function Layer(type) {
            var _this = _super.call(this) || this;
            /**
             * 层类型
             */
            _this._layerType = touch.EnumLayer.GameForeGround;
            _this._layerType = type;
            return _this;
        }
        /**
         * 销毁函数
         */
        Layer.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
        };
        Object.defineProperty(Layer.prototype, "type", {
            /**
             * 获取层类型
             */
            get: function () {
                return this._layerType;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 初始化
         */
        Layer.prototype.initialize = function (datas) {
        };
        /**
         * 反初始化
         * @param 初始化参数
         */
        Layer.prototype.uninitialize = function (datas) {
        };
        return Layer;
    }(Laya.Sprite));
    touch.Layer = Layer;
})(touch || (touch = {}));
//# sourceMappingURL=Layer.js.map