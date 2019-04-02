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
     * 等待命令
     * wait <health percent> OR objects OR all
        - waits until all monsters have certain percentage of health left
        - set it to 0% to wait for all monsters to die
        - Example: wait 10% - wait for monsters to get to 10% health
        - Example: wait objects - wait until all the objects (not including monsters) are gone
        - Example: wait all - wait for all monsters and objects to finish
     */
    var WaitCmd = /** @class */ (function (_super) {
        __extends(WaitCmd, _super);
        /**
         * 构造
         */
        function WaitCmd(data) {
            return _super.call(this, data) || this;
        }
        /**
         * 执行
         */
        WaitCmd.prototype.run = function () {
            this.onRunOver();
        };
        return WaitCmd;
    }(touch.LevelCmd));
    touch.WaitCmd = WaitCmd;
})(touch || (touch = {}));
//# sourceMappingURL=WaitCmd.js.map