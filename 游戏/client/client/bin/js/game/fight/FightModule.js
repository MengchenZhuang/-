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
     * 战斗模块
     */
    var FightModule = /** @class */ (function (_super) {
        __extends(FightModule, _super);
        /**
         * 构造函数
         */
        function FightModule() {
            var _this = _super.call(this) || this;
            // 当前战斗
            _this._curFight = null;
            return _this;
        }
        /**
         * 销毁
         */
        FightModule.prototype.destroy = function () {
            if (this._curFight != null) {
                this._curFight.uninitialize();
                this._curFight.destroy();
                this._curFight = null;
            }
        };
        /**
         * 初始化
         */
        FightModule.prototype.initialize = function () { };
        /**
         * 反初始化
         */
        FightModule.prototype.uninitialize = function () { };
        /**
         * 更新
         */
        FightModule.prototype.update = function () { };
        Object.defineProperty(FightModule, "instance", {
            /**
             * 获取实例
             */
            get: function () {
                return touch.GameCenter.instance.get(FightModule);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 开始关卡
         */
        FightModule.prototype.start = function (levelId) {
            this.stop();
            this._curFight = new touch.Fight(levelId);
            this._curFight.initialize();
        };
        /**
         * 结束关卡
         */
        FightModule.prototype.stop = function () {
            if (this._curFight != null) {
                this._curFight.uninitialize();
                this._curFight.destroy();
                this._curFight = null;
            }
        };
        return FightModule;
    }(Laya.EventDispatcher));
    touch.FightModule = FightModule;
})(touch || (touch = {}));
//# sourceMappingURL=FightModule.js.map