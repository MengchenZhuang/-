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
     * 战斗场景层视图
     */
    var FightSceneLayerView = /** @class */ (function (_super) {
        __extends(FightSceneLayerView, _super);
        /**
         * 构造函数
         */
        function FightSceneLayerView() {
            var _this = _super.call(this) || this;
            /** 层级管理 */
            _this._layerMgr = null;
            _this._layerMgr = new touch.LayerManager();
            _this._layerMgr.addLayer(touch.FightBackGroundLayer);
            _this._layerMgr.addLayer(touch.FightEntityLayer);
            _this._layerMgr.addLayer(touch.FightForGroundLayer);
            _this._layerMgr.addLayer(touch.FightUILayer);
            return _this;
        }
        /**
         * 销毁函数
         */
        FightSceneLayerView.prototype.destroy = function () {
            if (this._layerMgr != null) {
                this._layerMgr.destroy();
                this._layerMgr = null;
            }
            _super.prototype.destroy.call(this);
        };
        /**
         * 初始化
         */
        FightSceneLayerView.prototype.initialize = function () {
            _super.prototype.initialize.call(this);
            for (var _i = 0, _a = this._layerMgr.layers; _i < _a.length; _i++) {
                var layer = _a[_i];
                layer.initialize(this.datas);
            }
        };
        /**
         * 反初始化
         * @param 初始化参数
         */
        FightSceneLayerView.prototype.uninitialize = function () {
            for (var _i = 0, _a = this._layerMgr.layers; _i < _a.length; _i++) {
                var layer = _a[_i];
                layer.uninitialize(this.datas);
            }
            _super.prototype.uninitialize.call(this);
        };
        /**
         * 获取场景层
         */
        FightSceneLayerView.prototype.getLayer = function (type) {
            return this._layerMgr.getLayer(type);
        };
        return FightSceneLayerView;
    }(touch.MVCView));
    touch.FightSceneLayerView = FightSceneLayerView;
})(touch || (touch = {}));
//# sourceMappingURL=FightSceneLayerView.js.map