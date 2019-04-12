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
    var ShopUI = /** @class */ (function (_super) {
        __extends(ShopUI, _super);
        function ShopUI() {
            var _this = _super.call(this, touch.EUIType.VIEW) || this;
            _this.addView(touch.ShopView);
            // this.addData(ShopData)
            _this.addControl(touch.ShopControl);
            return _this;
        }
        return ShopUI;
    }(touch.UIable));
    touch.ShopUI = ShopUI;
})(touch || (touch = {}));
//# sourceMappingURL=ShopUI.js.map