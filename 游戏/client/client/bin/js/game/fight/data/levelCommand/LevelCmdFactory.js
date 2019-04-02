/**
 * jarekzha
 */
var touch;
(function (touch) {
    /**
     * 关卡命令工厂
     */
    var LevelCmdFactory = /** @class */ (function () {
        /**
         * 构造
         */
        function LevelCmdFactory() {
            /** 创建器 */
            this._creatorDic = null;
            this._creatorDic = new Laya.Dictionary();
            this.register("unlocked", touch.LevelNullCmd);
            this.register("text", touch.TextCmd);
            this.register("pause", touch.PauseCmd);
            this.register("wait", touch.WaitCmd);
            this.register("wait-h", touch.WaitCmd);
            this.register("spawn", touch.SpawnCmd);
            this.register("spawnk", touch.SpawnCmd);
        }
        Object.defineProperty(LevelCmdFactory, "I", {
            /** 单例 */
            get: function () {
                if (this._instance == null) {
                    this._instance = new LevelCmdFactory();
                }
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 创建命令
         */
        LevelCmdFactory.prototype.create = function (data) {
            var creator = this._creatorDic.get(data.name);
            if (creator == undefined || creator == null) {
                return null;
            }
            return creator(data);
        };
        /**
         * 注册
         */
        LevelCmdFactory.prototype.register = function (name, cmdClass) {
            this._creatorDic.set(name, function (data) {
                return new cmdClass(data);
            });
        };
        /** 实例 */
        LevelCmdFactory._instance = null;
        return LevelCmdFactory;
    }());
    touch.LevelCmdFactory = LevelCmdFactory;
})(touch || (touch = {}));
//# sourceMappingURL=LevelCmdFactory.js.map