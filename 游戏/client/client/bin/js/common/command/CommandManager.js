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
     * 命令管理器
     */
    var CommandManager = /** @class */ (function (_super) {
        __extends(CommandManager, _super);
        /**
         * 构造函数
         */
        function CommandManager(usePool) {
            if (usePool === void 0) { usePool = false; }
            var _this = _super.call(this) || this;
            /**
             * 命令集合
             */
            _this._commands = null;
            /**
             * 是否正在执行命令
             */
            _this._isRunning = false;
            /**
             * 是否用对象池
             */
            _this._usePool = false;
            _this._commands = new Array();
            _this._isRunning = false;
            _this._usePool = usePool;
            return _this;
        }
        /**
         * 销毁函数
         */
        CommandManager.prototype.destroy = function () {
            this.clear();
            this._commands = null;
        };
        /**
         * 清理
         */
        CommandManager.prototype.clear = function () {
            this._isRunning = false;
            if (this._usePool) {
                this._commands.forEach(function (element) {
                    touch.Pool.recover(element.name, element);
                });
            }
            else {
                this._commands.forEach(function (element) {
                    element.destroy();
                });
            }
            this._commands.splice(0, this._commands.length);
        };
        /**
         * 执行命令
         * @param command 命令
         */
        CommandManager.prototype.run = function (command) {
            if (this._commands != null && command != null) {
                this._commands.push(command);
                if (!this._isRunning) {
                    this.runCommand();
                }
            }
        };
        Object.defineProperty(CommandManager.prototype, "isFree", {
            /**
             * 是否空闲
             */
            get: function () {
                return !this._isRunning && (0 == this._commands.length);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 执行命令
         */
        CommandManager.prototype.runCommand = function () {
            if (this._commands.length > 0) {
                this._isRunning = true;
                var command = this._commands[0];
                command.once(Laya.Event.COMPLETE, this, this.onCommandRunOver);
                console.log("command run: " + command.name + " time " + Laya.timer.currTimer);
                command.run();
            }
            else {
                this.event(Laya.Event.COMPLETE);
            }
        };
        /**
         * 命令执行完毕
         */
        CommandManager.prototype.onCommandRunOver = function () {
            this._isRunning = false;
            var commands = this._commands.splice(0, 1);
            if (this._usePool) {
                touch.Pool.recover(commands[0].name, commands[0]);
            }
            else {
                commands[0].destroy();
            }
            this.runCommand();
        };
        return CommandManager;
    }(Laya.EventDispatcher));
    touch.CommandManager = CommandManager;
})(touch || (touch = {}));
//# sourceMappingURL=CommandManager.js.map