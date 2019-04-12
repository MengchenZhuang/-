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
     * UI模块
     */
    var UIModule = /** @class */ (function (_super) {
        __extends(UIModule, _super);
        /**
         * 构造函数
         */
        function UIModule() {
            var _this = _super.call(this) || this;
            /**
             * UI中心
             */
            _this._uiCenter = null;
            //点击对话框遮罩区域不关闭界面
            UIConfig.closeDialogOnSide = false;
            UIConfig.popupBgAlpha = 0.8;
            _this._uiCenter = new touch.UICenter();
            return _this;
        }
        /**
         * 销毁
         */
        UIModule.prototype.destroy = function () {
            this._uiCenter.destroy();
            this._uiCenter = null;
        };
        Object.defineProperty(UIModule, "instance", {
            /**
             * 获取实例
             */
            get: function () {
                return touch.GameCenter.instance.get(UIModule);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 初始化
         */
        UIModule.prototype.initialize = function () {
        };
        /**
         * 反初始化
         */
        UIModule.prototype.uninitialize = function () {
        };
        /**
         * 更新
         */
        UIModule.prototype.update = function () {
        };
        /**
         * 打开UI
         * @param uiClass UI类
         */
        UIModule.prototype.openUI = function (uiClass) {
            return this._uiCenter.openUI(uiClass);
        };
        /**
         * 关闭UI
         * @param uiClass UI类
         */
        UIModule.prototype.closeUI = function (uiClass) {
            this._uiCenter.closeUI(uiClass);
        };
        /**
         * UI是否打开
         * @param uiClass UI类
         */
        UIModule.prototype.isOpen = function (uiClass) {
            return this._uiCenter.isOpen(uiClass);
        };
        /**
         * 获取打开了的UI，未打开则返回null
         * @param uiClass UI类
         */
        UIModule.prototype.getUI = function (uiClass) {
            return this._uiCenter.getUI(uiClass);
        };
        return UIModule;
    }(Laya.EventDispatcher));
    touch.UIModule = UIModule;
})(touch || (touch = {}));
//# sourceMappingURL=UIModule.js.map