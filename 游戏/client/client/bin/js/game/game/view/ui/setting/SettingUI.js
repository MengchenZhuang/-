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
* name
*/
var touch;
(function (touch) {
    var SettingUI = /** @class */ (function (_super) {
        __extends(SettingUI, _super);
        function SettingUI() {
            var _this = _super.call(this, touch.EUIType.VIEW) || this;
            _this.addView(touch.SettingView);
            _this.addControl(touch.SettingControl);
            return _this;
        }
        return SettingUI;
    }(touch.UIable));
    touch.SettingUI = SettingUI;
})(touch || (touch = {}));
//# sourceMappingURL=SettingUI.js.map