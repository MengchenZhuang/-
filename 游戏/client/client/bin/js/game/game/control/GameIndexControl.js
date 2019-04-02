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
     * 游戏主页控制器
     */
    var GameIndexControl = /** @class */ (function (_super) {
        __extends(GameIndexControl, _super);
        /**
         * 构造函数
         */
        function GameIndexControl() {
            return _super.call(this) || this;
        }
        /**
         * 销毁函数
         */
        GameIndexControl.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
        };
        /**
         * 初始化
         */
        GameIndexControl.prototype.initialize = function () {
            _super.prototype.initialize.call(this);
            touch.UIModule.instance.openUI(touch.IndexUI);
        };
        /**
         * 反初始化
         * @param 初始化参数
         */
        GameIndexControl.prototype.uninitialize = function () {
            _super.prototype.uninitialize.call(this);
        };
        return GameIndexControl;
    }(touch.MVCControl));
    touch.GameIndexControl = GameIndexControl;
})(touch || (touch = {}));
//# sourceMappingURL=GameIndexControl.js.map