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
 * jarekzha
 */
var touch;
(function (touch) {
    /**
     * 暂停等待命令
     */
    var PauseCmd = /** @class */ (function (_super) {
        __extends(PauseCmd, _super);
        /**
         * 构造
         */
        function PauseCmd(data) {
            var _this = _super.call(this, data) || this;
            /** 暂停毫秒 */
            _this._pauseMs = 0;
            _this._pauseMs = Number(_this.data.param[0]);
            return _this;
        }
        /**
         * 构造
         */
        PauseCmd.prototype.run = function () {
            Laya.timer.once(this._pauseMs * 1000, this, this.onRunOver);
        };
        return PauseCmd;
    }(touch.LevelCmd));
    touch.PauseCmd = PauseCmd;
})(touch || (touch = {}));
//# sourceMappingURL=PauseCmd.js.map