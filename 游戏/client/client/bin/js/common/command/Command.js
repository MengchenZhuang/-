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
     * 命令基类
     */
    var Command = /** @class */ (function (_super) {
        __extends(Command, _super);
        function Command() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(Command.prototype, "name", {
            /**
             * 获取名字
             */
            get: function () {
                alert("必须继承");
                return "Command";
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 销毁函数
         */
        Command.prototype.destroy = function () {
            this.clear();
        };
        /**
         * 清理
         */
        Command.prototype.clear = function () {
        };
        /**
         * 执行
         */
        Command.prototype.run = function () {
            this.onRunOver();
        };
        /**
         * 执行完毕
         */
        Command.prototype.onRunOver = function () {
            this.event(Laya.Event.COMPLETE);
        };
        return Command;
    }(Laya.EventDispatcher));
    touch.Command = Command;
})(touch || (touch = {}));
//# sourceMappingURL=Command.js.map