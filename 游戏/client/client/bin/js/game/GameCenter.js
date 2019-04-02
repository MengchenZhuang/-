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
     * 游戏中心
     */
    var GameCenter = /** @class */ (function (_super) {
        __extends(GameCenter, _super);
        /**
         * 构造函数
         */
        function GameCenter() {
            var _this = _super.call(this) || this;
            _this.add(touch.UIModule);
            _this.add(touch.GameModule);
            _this.add(touch.FightModule);
            return _this;
        }
        Object.defineProperty(GameCenter, "instance", {
            /**
             * 获取单例
             */
            get: function () {
                GameCenter.create();
                return GameCenter._instance;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 创建
         */
        GameCenter.create = function () {
            if (null == GameCenter._instance) {
                GameCenter._instance = new GameCenter();
            }
        };
        /**
         * 单例
         */
        GameCenter._instance = null;
        return GameCenter;
    }(touch.ModuleCenter));
    touch.GameCenter = GameCenter;
})(touch || (touch = {}));
//# sourceMappingURL=GameCenter.js.map