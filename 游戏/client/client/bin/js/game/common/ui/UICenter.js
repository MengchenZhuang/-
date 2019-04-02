/**
* momo
*/
var touch;
(function (touch) {
    /**
     * UI中心
     */
    var UICenter = /** @class */ (function () {
        /**
         * 构造函数
         */
        function UICenter() {
            /**
             * UI集合
             */
            this._uis = null;
            this._uis = new Laya.Dictionary();
        }
        /**
         * 销毁
         */
        UICenter.prototype.destroy = function () {
            if (this._uis != null) {
                for (var index = 0; index < this._uis.values.length; index++) {
                    var element = this._uis.values[index];
                    if (element != null) {
                        element.destroy();
                    }
                }
            }
        };
        /**
         * 打开UI
         * @param uiClass UI类
         */
        UICenter.prototype.openUI = function (uiClass) {
            var ui = this._uis.get(uiClass);
            if (null == ui) {
                ui = new uiClass();
                this._uis.set(uiClass, ui);
                ui.open();
            }
            else {
                console.log("UI已打开：" + uiClass.prototype.constructor.name);
            }
            return ui;
        };
        /**
         * 关闭UI
         * @param uiClass UI类
         */
        UICenter.prototype.closeUI = function (uiClass) {
            var ui = this._uis.get(uiClass);
            if (ui != null) {
                touch.UIModule.instance.event(touch.UIEvent.CLOSE, ui);
                ui.close();
                ui.destroy();
                this._uis.remove(uiClass);
            }
            else {
                console.log("要关闭的UI未打开：" + uiClass.prototype.constructor.name);
            }
        };
        /**
         * UI是否打开
         * @param uiClass UI类
         */
        UICenter.prototype.isOpen = function (uiClass) {
            return this._uis.indexOf(uiClass) != -1;
        };
        /**
         * 获取打开了的UI，未打开则返回null
         * @param uiClass UI类
         */
        UICenter.prototype.getUI = function (uiClass) {
            return this._uis.get(uiClass);
        };
        return UICenter;
    }());
    touch.UICenter = UICenter;
})(touch || (touch = {}));
//# sourceMappingURL=UICenter.js.map