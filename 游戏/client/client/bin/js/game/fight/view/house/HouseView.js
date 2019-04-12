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
     * 房子视图
     */
    var HouseView = /** @class */ (function (_super) {
        __extends(HouseView, _super);
        function HouseView() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** 父节点 */
            _this._parent = null;
            /** 房子节点 */
            _this._houseNode = null;
            /** 边界,一条从上到下的直线 */
            _this._border = null;
            return _this;
        }
        /**
         * 初始化
         */
        HouseView.prototype.initialize = function () {
            var layerView = this.getView(touch.FightSceneLayerView);
            var layer = layerView.getLayer(touch.EnumLayer.FightEntity);
            this._parent = layer.house;
            this.assembleHouse();
            this.calcBorder();
        };
        /**
         * 反初始化
         * @param 初始化参数
         */
        HouseView.prototype.uninitialize = function () {
            if (this._houseNode != null) {
                this._houseNode.removeSelf();
                this._houseNode.destory();
            }
        };
        Object.defineProperty(HouseView.prototype, "border", {
            /**房子边界 */
            get: function () { return this._border; },
            enumerable: true,
            configurable: true
        });
        /**
         * 装配房子
         */
        HouseView.prototype.assembleHouse = function () {
            this._houseNode = new touch.HouseNode();
            this._houseNode.pos(0, Laya.stage.height + 20);
            this._parent.addChild(this._houseNode);
        };
        /**
         * 计算边界
         */
        HouseView.prototype.calcBorder = function () {
            var x = this._houseNode.houseWidth;
            var startPoint = new Laya.Point(x, -100); // 100确认超出屏幕
            var endPoint = new Laya.Point(x, Laya.stage.height + 100);
            this._border = new touch.Segment(startPoint, endPoint);
        };
        return HouseView;
    }(touch.MVCView));
    touch.HouseView = HouseView;
})(touch || (touch = {}));
//# sourceMappingURL=HouseView.js.map