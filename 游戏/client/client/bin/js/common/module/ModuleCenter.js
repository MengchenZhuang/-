/**
* momo
*/
var touch;
(function (touch) {
    /**
     * 模块管理中心
     */
    var ModuleCenter = /** @class */ (function () {
        /**
         * 构造函数
         */
        function ModuleCenter() {
            /**
             * 模块字典
             */
            this._modules = null;
            this._modules = new Laya.Dictionary();
        }
        /**
         * 销毁
         */
        ModuleCenter.prototype.destroy = function () {
            this._modules.clear();
            this._modules = null;
        };
        /**
         * 初始化
         */
        ModuleCenter.prototype.initialize = function () {
            this._modules.values.forEach(function (element) {
                element.initialize();
            });
        };
        /**
         * 反初始化
         */
        ModuleCenter.prototype.uninitialize = function () {
            this._modules.values.forEach(function (element) {
                element.uninitialize();
            });
        };
        /**
         * 获得指定类型的模块
         * @param moduleClass 模块类
         */
        ModuleCenter.prototype.get = function (moduleClass) {
            if (null == this._modules) {
                return null;
            }
            return this._modules.get(moduleClass);
        };
        /**
         * 添加模块
         * @param 模块类
         * @param 管理器中心
         */
        ModuleCenter.prototype.add = function (moduleClass) {
            if (null == this._modules) {
                return;
            }
            if (this._modules.indexOf(moduleClass) != -1) {
                alert("重复添加模块：" + moduleClass.prototype.constructor.name);
                return;
            }
            this._modules.set(moduleClass, new moduleClass());
        };
        return ModuleCenter;
    }());
    touch.ModuleCenter = ModuleCenter;
})(touch || (touch = {}));
//# sourceMappingURL=ModuleCenter.js.map