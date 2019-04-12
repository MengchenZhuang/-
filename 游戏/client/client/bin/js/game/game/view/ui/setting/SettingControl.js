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
    /**设置界面控制器 */
    var SettingControl = /** @class */ (function (_super) {
        __extends(SettingControl, _super);
        /**构造函数 */
        function SettingControl() {
            return _super.call(this) || this;
        }
        /**销毁函数 */
        SettingControl.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
        };
        /**
         * 初始化
         */
        SettingControl.prototype.initialize = function () {
            _super.prototype.initialize.call(this);
            var ui = this.getView(touch.SettingView).ui;
            ui.btn_BackHome.clickHandler = Laya.Handler.create(this, this.onClickBackHome, null, false);
            ui.btn_country.clickHandler = Laya.Handler.create(this, this.onClickSetCountry, null, false);
            ui.btn_notic.clickHandler = Laya.Handler.create(this, this.onClickSetNotic, null, false);
            ui.btn_sound.clickHandler = Laya.Handler.create(this, this.onClickSound, null, false);
        };
        /**
         * 反初始化
         * @param 初始化参数
         */
        SettingControl.prototype.uninitialize = function () {
            var ui = this.getView(touch.SettingView).ui;
            if (ui.btn_BackHome.clickHandler != null) {
                ui.btn_BackHome.clickHandler.recover();
                ui.btn_BackHome.clickHandler = null;
            }
            if (ui.btn_country.clickHandler != null) {
                ui.btn_country.clickHandler.recover();
                ui.btn_country.clickHandler = null;
            }
            if (ui.btn_notic.clickHandler != null) {
                ui.btn_notic.clickHandler.recover();
                ui.btn_notic.clickHandler = null;
            }
            if (ui.btn_sound.clickHandler != null) {
                ui.btn_sound.clickHandler.recover();
                ui.btn_sound.clickHandler = null;
            }
            _super.prototype.uninitialize.call(this);
        };
        /**返回主页 */
        SettingControl.prototype.onClickBackHome = function () {
        };
        /**设置通知 */
        SettingControl.prototype.onClickSetNotic = function () {
        };
        /**设置国家 */
        SettingControl.prototype.onClickSetCountry = function () {
        };
        /**设置声音 */
        SettingControl.prototype.onClickSound = function () {
        };
        return SettingControl;
    }(touch.MVCControl));
    touch.SettingControl = SettingControl;
})(touch || (touch = {}));
//# sourceMappingURL=SettingControl.js.map