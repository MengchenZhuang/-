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
     * 房子节点,坐标位于屏幕左下角
     */
    var HouseNode = /** @class */ (function (_super) {
        __extends(HouseNode, _super);
        /**
         * 构造
         */
        function HouseNode() {
            var _this = _super.call(this) || this;
            /** 背景图 */
            _this._bgImage = null;
            _this.assembleBackGround();
            return _this;
        }
        /**
         * 销毁
         */
        HouseNode.prototype.destory = function () {
            if (this._bgImage != null) {
                this._bgImage.removeSelf();
                this._bgImage.destroy();
            }
            this.destory();
        };
        Object.defineProperty(HouseNode.prototype, "houseWidth", {
            /**房间宽度 */
            get: function () { return this._bgImage.width; },
            enumerable: true,
            configurable: true
        });
        /**
         * 拼接背景
         */
        HouseNode.prototype.assembleBackGround = function () {
            this._bgImage = new Laya.Image("fight/House.png");
            this.addChild(this._bgImage);
            this._bgImage.pos(0, this._bgImage.height * -1);
        };
        return HouseNode;
    }(Laya.Sprite));
    touch.HouseNode = HouseNode;
})(touch || (touch = {}));
//# sourceMappingURL=HouseNode.js.map