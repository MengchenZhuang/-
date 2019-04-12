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
* name
*/
var touch;
(function (touch) {
    var ShopData = /** @class */ (function (_super) {
        __extends(ShopData, _super);
        /**
         * 构造函数
         */
        function ShopData() {
            return _super.call(this) || this;
        }
        /**
         * 销毁
         */
        ShopData.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
        };
        /**
         * 清理数据
         */
        ShopData.prototype.clear = function () {
            _super.prototype.clear.call(this);
        };
        /**
         * 初始化
         */
        ShopData.prototype.initialize = function () {
            this._weaponDic = new Laya.Dictionary();
            this._explosiveDic = new Laya.Dictionary();
            this._defenseDic = new Laya.Dictionary();
            this._specialDic = new Laya.Dictionary();
        };
        /**
         * 反初始化
         */
        ShopData.prototype.uninitialize = function () {
            if (null != this._weaponDic) {
                this._weaponDic.clear();
                this._weaponDic = null;
            }
            if (null != this._explosiveDic) {
                this._explosiveDic.clear();
                this._explosiveDic = null;
            }
            if (null != this._defenseDic) {
                this._defenseDic.clear();
                this._defenseDic = null;
            }
            if (null != this._specialDic) {
                this._specialDic.clear();
                this._specialDic = null;
            }
        };
        return ShopData;
    }(touch.MVCData));
    touch.ShopData = ShopData;
})(touch || (touch = {}));
//# sourceMappingURL=ShopData.js.map