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
     * 单场战斗
     */
    var Fight = /** @class */ (function (_super) {
        __extends(Fight, _super);
        /**
         * 构造
         */
        function Fight(levelId) {
            var _this = _super.call(this) || this;
            /** 关卡id */
            _this._levelId = "";
            touch.FightContext.progress = _this.addData(touch.FightProgress);
            touch.FightContext.area = _this.addData(touch.FightArea);
            touch.FightContext.sceneView = _this.addView(touch.FightSceneLayerView);
            touch.FightContext.houseView = _this.addView(touch.HouseView);
            touch.FightContext.monsterView = _this.addView(touch.MonsterView);
            _this.addControl(touch.FightStartupControl);
            touch.FightContext.progress.setData(levelId);
            return _this;
        }
        /**
         * 初始化
         */
        Fight.prototype.initialize = function () {
            _super.prototype.initialize.call(this);
            this.getControl(touch.FightStartupControl).start();
        };
        /**
         * 反初始化
         */
        Fight.prototype.uninitialize = function () {
            _super.prototype.uninitialize.call(this);
        };
        /**
         * 销毁
         */
        Fight.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            touch.FightContext.clear();
        };
        return Fight;
    }(touch.MVCable));
    touch.Fight = Fight;
})(touch || (touch = {}));
//# sourceMappingURL=Fight.js.map