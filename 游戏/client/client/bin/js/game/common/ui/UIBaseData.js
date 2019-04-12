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
* momo
*/
var touch;
(function (touch) {
    /**
     * 界面基本数据
     */
    var UIBaseData = /** @class */ (function (_super) {
        __extends(UIBaseData, _super);
        function UIBaseData() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * 打开参数类
             */
            _this.openParamClass = null;
            /**
             * 是否打开
             */
            _this.isOpened = false;
            /**
             * 是否加载中
             */
            _this.isLoading = false;
            /**
             * 资源是否已经加载
             */
            _this.isLoaded = false;
            return _this;
        }
        return UIBaseData;
    }(touch.MVCData));
    touch.UIBaseData = UIBaseData;
})(touch || (touch = {}));
//# sourceMappingURL=UIBaseData.js.map