/**
* momo
*/
var touch;
(function (touch) {
    /**
     * MVC视图对象
     */
    var MVCView = /** @class */ (function () {
        /**
         * 构造函数
         */
        function MVCView() {
            /**
             * MVC主对象
             */
            this._main = null;
            /**
             * 数据管理器
             */
            this._dataMgr = null;
            /**
             * 视图管理
             */
            this._viewMgr = null;
        }
        /**
         * 销毁函数
         */
        MVCView.prototype.destroy = function () {
            this._viewMgr = null;
            this._dataMgr = null;
            this._main = null;
        };
        /**
         * 部署对象
         * @param MVC主对象
         * @returns 数据管理器
         */
        MVCView.prototype.assemble = function (main, dataMgr, viewMgr) {
            this._main = main;
            this._dataMgr = dataMgr;
            this._viewMgr = viewMgr;
        };
        /**
         * 初始化
         */
        MVCView.prototype.initialize = function () {
        };
        /**
         * 反初始化
         * @param 初始化参数
         */
        MVCView.prototype.uninitialize = function () {
        };
        Object.defineProperty(MVCView.prototype, "main", {
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
        /**
         * 获得数据对象
         * @param 数据对象类型
         * @returns 数据对象
         */
        MVCView.prototype.getData = function (dataClass) {
            if (null == this._dataMgr) {
                return null;
            }
            return this._dataMgr.get(dataClass);
        };
        Object.defineProperty(MVCView.prototype, "datas", {
            /** 所有数据 */
            get: function () { return this._dataMgr; },
            enumerable: true,
            configurable: true
        });
        /**
         * 获得视图对象
         * @param 视图对象类型
         * @returns 视图对象
         */
        MVCView.prototype.getView = function (viewClass) {
            if (null == this._viewMgr) {
                return null;
            }
            return this._viewMgr.get(viewClass);
        };
        return MVCView;
    }());
    touch.MVCView = MVCView;
})(touch || (touch = {}));
//# sourceMappingURL=MVCView.js.map