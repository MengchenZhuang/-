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
     * 主页界面
     */
    var IndexUI = /** @class */ (function (_super) {
        __extends(IndexUI, _super);
        /**
         * 构造函数
         */
        function IndexUI() {
            var _this = _super.call(this, touch.EUIType.VIEW) || this;
            _this.addView(touch.IndexView);
            _this.addControl(touch.IndexControl);
            return _this;
        }
        return IndexUI;
    }(touch.UIable));
    touch.IndexUI = IndexUI;
})(touch || (touch = {}));
//# sourceMappingURL=IndexUI.js.map