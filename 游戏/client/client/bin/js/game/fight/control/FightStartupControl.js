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
     * 战斗启动控制器
     */
    var FightStartupControl = /** @class */ (function (_super) {
        __extends(FightStartupControl, _super);
        function FightStartupControl() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * 开始
         */
        FightStartupControl.prototype.start = function () {
            var progress = this.getData(touch.FightProgress);
            progress.start();
        };
        return FightStartupControl;
    }(touch.MVCControl));
    touch.FightStartupControl = FightStartupControl;
})(touch || (touch = {}));
//# sourceMappingURL=FightStartupControl.js.map