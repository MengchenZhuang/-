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
     * 场景层视图
     */
    var GameSceneLayerView = /** @class */ (function (_super) {
        __extends(GameSceneLayerView, _super);
        /**
         * 构造函数
         */
        function GameSceneLayerView() {
            var _this = _super.call(this) || this;
            // 层级管理
            _this._layerMgr = null;
            _this._layerMgr = new touch.LayerManager();
            _this._layerMgr.addLayer(touch.BackGroundLayer);
            _this._layerMgr.addLayer(touch.EntityLayer);
            _this._layerMgr.addLayer(touch.ForeGroundLayer);
            return _this;
        }
        /**
         * 销毁函数
         */
        GameSceneLayerView.prototype.destroy = function () {
            if (this._layerMgr != null) {
                this._layerMgr.destroy();
                this._layerMgr = null;
            }
            _super.prototype.destroy.call(this);
        };
        /**
         * 初始化
         */
        GameSceneLayerView.prototype.initialize = function () {
            _super.prototype.initialize.call(this);
        };
        /**
         * 反初始化
         * @param 初始化参数
         */
        GameSceneLayerView.prototype.uninitialize = function () {
            _super.prototype.uninitialize.call(this);
        };
        /**
         * 获取层
         * @param type 层类型
         */
        GameSceneLayerView.prototype.getLayer = function (type) {
            return this._layerMgr.getLayer(type);
        };
        return GameSceneLayerView;
    }(touch.MVCView));
    touch.GameSceneLayerView = GameSceneLayerView;
})(touch || (touch = {}));
//# sourceMappingURL=GameSceneLayerView.js.map