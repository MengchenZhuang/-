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
 * jarekzha
 */
var touch;
(function (touch) {
    /**
     * 关卡命令
     */
    var LevelCmd = /** @class */ (function (_super) {
        __extends(LevelCmd, _super);
        /**
         * 构造
         */
        function LevelCmd(data) {
            var _this = _super.call(this) || this;
            /** 数据 */
            _this._data = null;
            _this._data = data;
            return _this;
        }
        Object.defineProperty(LevelCmd.prototype, "name", {
            /**
             * 获取名字
             */
            get: function () {
                return this._data.name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(LevelCmd.prototype, "data", {
            /** 命令配置数据 */
            get: function () { return this._data; },
            enumerable: true,
            configurable: true
        });
        return LevelCmd;
    }(touch.Command));
    touch.LevelCmd = LevelCmd;
})(touch || (touch = {}));
//# sourceMappingURL=LevelCmd.js.map