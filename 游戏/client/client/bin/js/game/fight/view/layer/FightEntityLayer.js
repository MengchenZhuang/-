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
     * 战斗实体层
     */
    var FightEntityLayer = /** @class */ (function (_super) {
        __extends(FightEntityLayer, _super);
        /**
         * 构造
         */
        function FightEntityLayer() {
            var _this = _super.call(this, touch.EnumLayer.FightEntity) || this;
            /** 房子父节点 */
            _this._houseParent = null;
            /** 角色父节点 */
            _this._roleParent = null;
            _this._houseParent = new Laya.Sprite();
            _this.addChild(_this._houseParent);
            _this._roleParent = new Laya.Sprite();
            _this.addChild(_this._roleParent);
            return _this;
        }
        /**
         * 初始化
         */
        FightEntityLayer.prototype.initialize = function (datas) {
        };
        /**
         * 反初始化
         * @param 初始化参数
         */
        FightEntityLayer.prototype.uninitialize = function (datas) {
        };
        Object.defineProperty(FightEntityLayer.prototype, "house", {
            /** 房子 */
            get: function () { return this._houseParent; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FightEntityLayer.prototype, "role", {
            /** 角色父节点 */
            get: function () { return this._roleParent; },
            enumerable: true,
            configurable: true
        });
        return FightEntityLayer;
    }(touch.Layer));
    touch.FightEntityLayer = FightEntityLayer;
})(touch || (touch = {}));
//# sourceMappingURL=FightEntityLayer.js.map