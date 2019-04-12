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
* xlc
*/
var touch;
(function (touch) {
    /**
     * 商店
     */
    var ShopView = /** @class */ (function (_super) {
        __extends(ShopView, _super);
        function ShopView() {
            return _super.call(this) || this;
        }
        /**
         * 销毁函数
         */
        ShopView.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
        };
        /**
         * 初始化
         */
        ShopView.prototype.initialize = function () {
            _super.prototype.initialize.call(this);
            this._ui = new ui.ShopUI;
            Laya.stage.addChild(this._ui);
        };
        /**
         * 反初始化
         * @param 初始化参数
         */
        ShopView.prototype.uninitialize = function () {
            if (this._ui != null) {
                this._ui.removeSelf();
                this._ui.destroy();
                this._ui = null;
            }
            _super.prototype.uninitialize.call(this);
        };
        Object.defineProperty(ShopView.prototype, "ui", {
            /**
             * 获取界面
             */
            get: function () {
                return this._ui;
            },
            enumerable: true,
            configurable: true
        });
        return ShopView;
    }(touch.MVCView));
    touch.ShopView = ShopView;
})(touch || (touch = {}));
//# sourceMappingURL=ShopView.js.map