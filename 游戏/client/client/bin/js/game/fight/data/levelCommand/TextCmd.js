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
     * 显示文字
     */
    var TextCmd = /** @class */ (function (_super) {
        __extends(TextCmd, _super);
        /**
         * 构造
         * @param data
         */
        function TextCmd(data) {
            return _super.call(this, data) || this;
        }
        return TextCmd;
    }(touch.LevelCmd));
    touch.TextCmd = TextCmd;
})(touch || (touch = {}));
//# sourceMappingURL=TextCmd.js.map