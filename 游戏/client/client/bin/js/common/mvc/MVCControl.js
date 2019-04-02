/**
* momo
*/
var touch;
(function (touch) {
    /**
     * MVC控制器对象
     */
    var MVCControl = /** @class */ (function () {
        /**
         * 构造函数
         */
        function MVCControl() {
            /**
             * MVC主对象
             */
            this._main = null;
            /**
             * 数据管理器
             */
            this._dataMgr = null;
            /**
             * 视图管理器
             */
            this._viewMgr = null;
        }
        /**
         * 销毁函数
         */
        MVCControl.prototype.destroy = function () {
            //视图管理器
            this._viewMgr = null;
            //数据管理器
            this._dataMgr = null;
            //MVC主对象
            this._main = null;
        };
        /**
         * 部署对象
         * @param MVC主对象
         * @param 数据管理器
         * @param 视图管理器
         */
        MVCControl.prototype.assemble = function (main, dataMgr, viewMgr) {
            this._main = main;
            this._dataMgr = dataMgr;
            this._viewMgr = viewMgr;
        };
        /**
         * 初始化
         */
        MVCControl.prototype.initialize = function () {
        };
        /**
         * 反初始化
         */
        MVCControl.prototype.uninitialize = function () {
        };
        /**
         * 获得数据对象
         * @param 数据对象类型
         * @returns 数据对象
         */
        MVCControl.prototype.getData = function (dataClass) {
            if (null == this._dataMgr) {
                return null;
            }
            return this._dataMgr.get(dataClass);
        };
        /**
         * 获得视图对象
         * @param 视图对象类型
         * @returns 视图对象
         */
        MVCControl.prototype.getView = function (viewClass) {
            if (null == this._viewMgr) {
                return null;
            }
            return this._viewMgr.get(viewClass);
        };
        Object.defineProperty(MVCControl.prototype, "main", {
            /**
             * 获得消息发送对象
             * @returns 消息发送对象
             */
            get: function () {
                return this._main;
            },
            enumerable: true,
            configurable: true
        });
        return MVCControl;
    }());
    touch.MVCControl = MVCControl;
})(touch || (touch = {}));
//# sourceMappingURL=MVCControl.js.map