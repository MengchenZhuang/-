/**
* momo
*/
var touch;
(function (touch) {
    /**
     * 资源池（对laya的pool的封装）
     */
    var Pool = /** @class */ (function () {
        function Pool() {
        }
        /**
         * 获取对象
         * @param name 名字
         * @param cls 类
         */
        Pool.get = function (name, cls) {
            return Laya.Pool.getItemByClass(name, cls);
        };
        /**
         * 将对象放到对应类型标识的对象池中。
         * @param name 名字
         * @param object 对象
         */
        Pool.recover = function (name, object) {
            if (object != null) {
                object.clear();
                Laya.Pool.recover(name, object);
            }
        };
        /**
         * 获取系统对象
         * @param name 名字
         * @param cls 类
         */
        Pool.getSysObj = function (name, cls) {
            return Laya.Pool.getItemByClass(name, cls);
        };
        /**
         * 将系统对象放到对应类型标识的对象池中。
         * @param name 名字
         * @param object 对象
         */
        Pool.recoverSysObj = function (name, object) {
            if (object != null) {
                Laya.Pool.recover(name, object);
            }
        };
        return Pool;
    }());
    touch.Pool = Pool;
})(touch || (touch = {}));
//# sourceMappingURL=Pool.js.map