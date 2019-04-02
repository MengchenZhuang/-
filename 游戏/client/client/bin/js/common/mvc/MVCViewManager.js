/**
* momo
*/
var touch;
(function (touch) {
    /**
     * MVC视图管理对象
     */
    var MVCViewManager = /** @class */ (function () {
        /**
         * 构造函数
         */
        function MVCViewManager(main, dataMgr) {
            /**
             * MVC主对象
             */
            this._main = null;
            /**
             * 数据管理器
             */
            this._dataMgr = null;
            /**
             * 视图对象映射表
             */
            this._viewMap = null;
            this._main = main;
            this._dataMgr = dataMgr;
            this._viewMap = new Laya.Dictionary();
        }
        /**
         * 析构函数
         */
        MVCViewManager.prototype.destroy = function () {
            this._main = null;
            this._dataMgr = null;
            if (this._viewMap != null) {
                for (var index = 0; index < this._viewMap.values.length; index++) {
                    var element = this._viewMap.values[index];
                    if (element != null) {
                        element.destroy();
                    }
                }
                this._viewMap.clear();
                this._viewMap = null;
            }
        };
        /**
         * 初始化
         */
        MVCViewManager.prototype.initialize = function () {
            if (this._viewMap != null) {
                for (var index = 0; index < this._viewMap.values.length; index++) {
                    var element = this._viewMap.values[index];
                    if (element != null) {
                        element.initialize();
                    }
                }
            }
        };
        /**
         * 反初始化
         */
        MVCViewManager.prototype.uninitialize = function () {
            if (this._viewMap != null) {
                for (var index = 0; index < this._viewMap.values.length; index++) {
                    var element = this._viewMap.values[index];
                    if (element != null) {
                        element.uninitialize();
                    }
                }
            }
        };
        /**
         * 获得视图对象
         * @param 视图对象类型
         * @returns 视图对象
         */
        MVCViewManager.prototype.get = function (viewClass) {
            if (null == this._viewMap) {
                return null;
            }
            return this._viewMap.get(viewClass);
        };
        /**
         * 添加视图对象
         * @param 视图对象类型
         */
        MVCViewManager.prototype.add = function (viewClass) {
            if (null == this._viewMap) {
                return null;
            }
            //查询是否已经存在数据对象
            if (this._viewMap.indexOf(viewClass) != -1) {
                return this._viewMap.get(viewClass);
            }
            //创建对象
            var dataImp = new viewClass();
            dataImp.assemble(this._main, this._dataMgr, this);
            this._viewMap.set(viewClass, dataImp);
            return dataImp;
        };
        return MVCViewManager;
    }());
    touch.MVCViewManager = MVCViewManager;
})(touch || (touch = {}));
//# sourceMappingURL=MVCViewManager.js.map