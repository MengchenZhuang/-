/**
* momo
*/
var touch;
(function (touch) {
    /**
     * MVC数据管理对象
     */
    var MVCDataManager = /** @class */ (function () {
        /**
         * 构造函数
         * @param main MVC主对象
         */
        function MVCDataManager(main) {
            /**
             * MVC主对象
             */
            this._main = null;
            /**
             * 数据对象映射表
             */
            this._dataMap = null;
            this._main = main;
            this._dataMap = new Laya.Dictionary();
        }
        /**
         * 析构函数
         */
        MVCDataManager.prototype.destroy = function () {
            this._main = null;
            if (this._dataMap != null) {
                for (var index = 0; index < this._dataMap.values.length; index++) {
                    var element = this._dataMap.values[index];
                    if (element != null) {
                        element.destroy();
                    }
                }
            }
        };
        /**
         * 初始化
         */
        MVCDataManager.prototype.initialize = function () {
            if (this._dataMap != null) {
                for (var index = 0; index < this._dataMap.values.length; index++) {
                    var element = this._dataMap.values[index];
                    if (element != null) {
                        element.initialize();
                    }
                }
            }
        };
        /**
         * 反初始化
         */
        MVCDataManager.prototype.uninitialize = function () {
            if (this._dataMap != null) {
                for (var index = 0; index < this._dataMap.values.length; index++) {
                    var element = this._dataMap.values[index];
                    if (element != null) {
                        element.uninitialize();
                    }
                }
            }
        };
        /**
         * 获得数据对象
         * @param 数据对象类型
         * @returns 数据对象
         */
        MVCDataManager.prototype.get = function (dataClass) {
            if (null == this._dataMap) {
                return null;
            }
            return this._dataMap.get(dataClass);
        };
        /**
         * 添加数据对象
         * @param 数据对象类型
         */
        MVCDataManager.prototype.add = function (dataClass) {
            if (null == this._dataMap) {
                return null;
            }
            //查询是否已经存在数据对象
            if (this._dataMap.indexOf(dataClass) != -1) {
                return this._dataMap.get(dataClass);
            }
            //创建对象
            var dataImp = new dataClass();
            dataImp.assemble(this._main);
            this._dataMap.set(dataClass, dataImp);
            return dataImp;
        };
        return MVCDataManager;
    }());
    touch.MVCDataManager = MVCDataManager;
})(touch || (touch = {}));
//# sourceMappingURL=MVCDataManager.js.map