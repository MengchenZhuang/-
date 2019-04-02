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
     * 主页界面控制器
     */
    var IndexControl = /** @class */ (function (_super) {
        __extends(IndexControl, _super);
        /**
         * 构造函数
         */
        function IndexControl() {
            return _super.call(this) || this;
        }
        /**
         * 销毁函数
         */
        IndexControl.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
        };
        /**
         * 初始化
         */
        IndexControl.prototype.initialize = function () {
            _super.prototype.initialize.call(this);
            var ui = this.getView(touch.IndexView).ui;
            ui.btnStart.clickHandler = Laya.Handler.create(this, this.onStart, null, false);
            ui.btnTask.clickHandler = Laya.Handler.create(this, this.onTask, null, false);
            ui.btnShop.clickHandler = Laya.Handler.create(this, this.onShop, null, false);
            ui.btnSetting.clickHandler = Laya.Handler.create(this, this.onSetting, null, false);
            ui.btnSignIn.clickHandler = Laya.Handler.create(this, this.onSignIn, null, false);
        };
        /**
         * 反初始化
         * @param 初始化参数
         */
        IndexControl.prototype.uninitialize = function () {
            var ui = this.getView(touch.IndexView).ui;
            if (ui.btnStart.clickHandler != null) {
                ui.btnStart.clickHandler.recover();
                ui.btnStart.clickHandler = null;
            }
            if (ui.btnTask.clickHandler != null) {
                ui.btnTask.clickHandler.recover();
                ui.btnTask.clickHandler = null;
            }
            if (ui.btnShop.clickHandler != null) {
                ui.btnShop.clickHandler.recover();
                ui.btnShop.clickHandler = null;
            }
            if (ui.btnSetting.clickHandler != null) {
                ui.btnSetting.clickHandler.recover();
                ui.btnSetting.clickHandler = null;
            }
            if (ui.btnSignIn.clickHandler != null) {
                ui.btnSignIn.clickHandler.recover();
                ui.btnSignIn.clickHandler = null;
            }
            _super.prototype.uninitialize.call(this);
        };
        /**
         * 开始游戏
         */
        IndexControl.prototype.onStart = function () {
        };
        /**
         * 邀请任务
         */
        IndexControl.prototype.onTask = function () {
            touch.FightModule.instance.start("R1E01");
        };
        /**
         * 商店
         */
        IndexControl.prototype.onShop = function () {
            touch.UIModule.instance.openUI(touch.ShopUI);
        };
        /**
         * 设置
         */
        IndexControl.prototype.onSetting = function () {
            touch.UIModule.instance.openUI(touch.SettingUI);
        };
        /**
         * 签到
         */
        IndexControl.prototype.onSignIn = function () {
        };
        return IndexControl;
    }(touch.MVCControl));
    touch.IndexControl = IndexControl;
})(touch || (touch = {}));
//# sourceMappingURL=IndexControl.js.map