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
     * 战斗区域，用于记录一些战斗相关的关键坐标范围
     */
    var FightArea = /** @class */ (function (_super) {
        __extends(FightArea, _super);
        function FightArea() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**地板的上边缘y */
            _this._floorTopY = 0;
            /**地板的下边缘y */
            _this._floorBottomY = 0;
            /**怪物出生点x */
            _this._monsterBornX = 0;
            return _this;
        }
        /**
         * 初始化
         */
        FightArea.prototype.initialize = function () {
            this._floorTopY = Laya.stage.height - touch.FightAreaResData.FloorTopY;
            this._floorBottomY = Laya.stage.height - touch.FightAreaResData.FloorBottomY;
            this._monsterBornX = Laya.stage.width + touch.FightAreaResData.MonsterBornX;
        };
        Object.defineProperty(FightArea.prototype, "monsterBornX", {
            /**怪物出生点x */
            get: function () { return this._monsterBornX; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FightArea.prototype, "floorTopY", {
            /**地板的上边缘y */
            get: function () { return this._floorTopY; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FightArea.prototype, "floorBottomY", {
            /**地板的下边缘y */
            get: function () { return this._floorBottomY; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FightArea.prototype, "randomYInFloor", {
            /**随机一个在地板上的y值 */
            get: function () {
                return touch.MathUtil.randomInt(this._floorTopY, this._floorBottomY);
            },
            enumerable: true,
            configurable: true
        });
        return FightArea;
    }(touch.MVCData));
    touch.FightArea = FightArea;
})(touch || (touch = {}));
//# sourceMappingURL=FightArea.js.map