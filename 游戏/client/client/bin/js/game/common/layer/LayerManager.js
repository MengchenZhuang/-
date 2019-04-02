/**
 * jarekzha
 */
var touch;
(function (touch) {
    /**
     * 图层管理器
     */
    var LayerManager = /** @class */ (function () {
        /**
         * 构造
         */
        function LayerManager() {
            /**
             * 层字典
             */
            this._layerDic = null;
            this._layerDic = new Laya.Dictionary();
        }
        /**
         * 销毁
         */
        LayerManager.prototype.destroy = function () {
            for (var _i = 0, _a = this._layerDic.values; _i < _a.length; _i++) {
                var layer = _a[_i];
                if (layer != null) {
                    layer.destroy();
                    layer = null;
                }
            }
            this._layerDic.clear();
            this._layerDic = null;
        };
        /**
         * 添加层
         * @param layerClass 层类
         */
        LayerManager.prototype.addLayer = function (layerClass) {
            var layer = new layerClass();
            Laya.stage.addChild(layer);
            this._layerDic.set(layer.type, layer);
        };
        /**
         * 获取层
         * @param type 层类型
         */
        LayerManager.prototype.getLayer = function (type) {
            return this._layerDic.get(type);
        };
        Object.defineProperty(LayerManager.prototype, "layers", {
            /**
             * 获取所有层
             */
            get: function () {
                return this._layerDic.values;
            },
            enumerable: true,
            configurable: true
        });
        return LayerManager;
    }());
    touch.LayerManager = LayerManager;
})(touch || (touch = {}));
//# sourceMappingURL=LayerManager.js.map