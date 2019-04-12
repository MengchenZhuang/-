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
     * 战斗背景层
     */
    var FightBackGroundLayer = /** @class */ (function (_super) {
        __extends(FightBackGroundLayer, _super);
        /**
         * 构造
         */
        function FightBackGroundLayer() {
            var _this = _super.call(this, touch.EnumLayer.FightBackGround) || this;
            /** 背景图 */
            _this._bgImage = null;
            return _this;
        }
        /**
         * 初始化
         */
        FightBackGroundLayer.prototype.initialize = function (datas) {
            var progress = datas.get(touch.FightProgress);
            var levelId = progress.data.id;
            this.assembleBGImage(levelId);
        };
        /**
         * 反初始化
         * @param 初始化参数
         */
        FightBackGroundLayer.prototype.uninitialize = function (datas) {
            if (this._bgImage != null) {
                this._bgImage.removeSelf();
                this._bgImage.destroy();
            }
        };
        /**
         * 背景图
         */
        FightBackGroundLayer.prototype.assembleBGImage = function (levelId) {
            var imageUrl = touch.FightResData.getLevelBGUrl(levelId);
            this._bgImage = new Laya.Image();
            this._bgImage.loadImage(imageUrl, 0, 0, 0, 0, Laya.Handler.create(this, this.onBGImageLoadOver));
        };
        /**
         * 背景图加载完成
         */
        FightBackGroundLayer.prototype.onBGImageLoadOver = function () {
            var scale = Laya.stage.width / this._bgImage.width;
            this._bgImage.scale(scale, scale);
            this._bgImage.pos(0, Laya.stage.height);
            this._bgImage.anchorY = 1;
            this.addChild(this._bgImage);
        };
        return FightBackGroundLayer;
    }(touch.Layer));
    touch.FightBackGroundLayer = FightBackGroundLayer;
})(touch || (touch = {}));
//# sourceMappingURL=FightBackGroundLayer.js.map