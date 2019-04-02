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
     * 空命令
     */
    var LevelNullCmd = /** @class */ (function (_super) {
        __extends(LevelNullCmd, _super);
        function LevelNullCmd() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return LevelNullCmd;
    }(touch.LevelCmd));
    touch.LevelNullCmd = LevelNullCmd;
})(touch || (touch = {}));
//# sourceMappingURL=NullCmd.js.map