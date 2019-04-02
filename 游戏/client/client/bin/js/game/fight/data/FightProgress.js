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
     * 战斗进度
     */
    var FightProgress = /** @class */ (function (_super) {
        __extends(FightProgress, _super);
        function FightProgress() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** 关卡id */
            _this._levelId = "";
            /** 关卡配置 */
            _this._data = null;
            /** 当前命令索引 */
            _this._curCmdIndex = -1;
            /** 关卡命令 */
            _this._cmdMgr = null;
            return _this;
        }
        /**
         * 设置数据
         */
        FightProgress.prototype.setData = function (levelId) {
            this._levelId = levelId;
        };
        /**
         * 开始
         */
        FightProgress.prototype.start = function () {
            return this.runNextCommand();
        };
        Object.defineProperty(FightProgress.prototype, "data", {
            /** 关卡配置数据 */
            get: function () { return this._data; },
            enumerable: true,
            configurable: true
        });
        /**
         * 初始化
         */
        FightProgress.prototype.initialize = function () {
            this._data = touch.LevelData.getById(this._levelId);
            this._cmdMgr = new touch.CommandManager(false);
            this._cmdMgr.on(Laya.Event.COMPLETE, this, this.onCommandComplete);
        };
        /**
         * 反初始化
         */
        FightProgress.prototype.uninitialize = function () {
            if (this._cmdMgr != null) {
                this._cmdMgr.off(Laya.Event.COMPLETE, this, this.onCommandComplete);
                this._cmdMgr.destroy();
                this._cmdMgr = null;
            }
            this._data = null;
        };
        /**
         * 命令执行结束
         */
        FightProgress.prototype.onCommandComplete = function () {
            if (this.runNextCommand()) {
                return;
            }
            // TODO:命令结束后的处理
        };
        /**
         * 执行下一个命令
         */
        FightProgress.prototype.runNextCommand = function () {
            this._curCmdIndex++;
            if (this._curCmdIndex >= this._data.cmds.length) {
                // 命令结束
                return false;
            }
            var cmdData = this._data.cmds[this._curCmdIndex];
            var cmd = touch.LevelCmdFactory.I.create(cmdData);
            if (cmd == null) {
                // 当前命令为空继续执行
                return this.runNextCommand();
            }
            // 执行命令
            this._cmdMgr.run(cmd);
            return true;
        };
        return FightProgress;
    }(touch.MVCData));
    touch.FightProgress = FightProgress;
})(touch || (touch = {}));
//# sourceMappingURL=FightProgress.js.map