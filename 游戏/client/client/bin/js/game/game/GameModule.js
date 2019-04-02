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
     * 游戏模块
     */
    var GameModule = /** @class */ (function (_super) {
        __extends(GameModule, _super);
        /**
         * 构造函数
         */
        function GameModule() {
            var _this = _super.call(this) || this;
            _this.addControl(touch.GameIndexControl);
            _this.addView(touch.GameSceneLayerView);
            return _this;
        }
        /**
         * 销毁
         */
        GameModule.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
        };
        Object.defineProperty(GameModule, "instance", {
            /**
             * 获取实例
             */
            get: function () {
                return touch.GameCenter.instance.get(GameModule);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 初始化
         */
        GameModule.prototype.initialize = function () {
            _super.prototype.initialize.call(this);
        };
        /**
         * 反初始化
         */
        GameModule.prototype.uninitialize = function () {
            _super.prototype.uninitialize.call(this);
        };
        /**
         * 更新
         */
        GameModule.prototype.update = function () {
        };
        return GameModule;
    }(touch.MVCable));
    touch.GameModule = GameModule;
})(touch || (touch = {}));
//# sourceMappingURL=GameModule.js.map