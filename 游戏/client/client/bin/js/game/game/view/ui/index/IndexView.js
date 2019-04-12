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
     * 主页界面视图
     */
    var IndexView = /** @class */ (function (_super) {
        __extends(IndexView, _super);
        /**
         * 构造函数
         */
        function IndexView() {
            var _this = _super.call(this) || this;
            /**
             * 界面
             */
            _this._ui = null;
            return _this;
        }
        /**
         * 销毁函数
         */
        IndexView.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
        };
        /**
         * 初始化
         */
        IndexView.prototype.initialize = function () {
            _super.prototype.initialize.call(this);
            this._ui = new ui.IndexUI();
            Laya.stage.addChild(this._ui);
        };
        /**
         * 反初始化
         * @param 初始化参数
         */
        IndexView.prototype.uninitialize = function () {
            if (this._ui != null) {
                this._ui.removeSelf();
                this._ui.destroy();
                this._ui = null;
            }
            _super.prototype.uninitialize.call(this);
        };
        Object.defineProperty(IndexView.prototype, "ui", {
            /**
             * 获取界面
             */
            get: function () {
                return this._ui;
            },
            enumerable: true,
            configurable: true
        });
        return IndexView;
    }(touch.MVCView));
    touch.IndexView = IndexView;
})(touch || (touch = {}));
//# sourceMappingURL=IndexView.js.map