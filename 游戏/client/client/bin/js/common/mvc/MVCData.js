/**
* momo
*/
var touch;
(function (touch) {
    /**
     * MVC数据对象
     */
    var MVCData = /** @class */ (function () {
        /**
         * 构造函数
         */
        function MVCData() {
            /**
             * MVC主对象
             */
            this._main = null;
        }
        /**
         * 销毁
         */
        MVCData.prototype.destroy = function () {
            this._main = null;
        };
        /**
         * 清理数据
         */
        MVCData.prototype.clear = function () {
        };
        /**
         * 部署对象
         * @param MVC主对象
         */
        MVCData.prototype.assemble = function (main) {
            //MVC主对象
            this._main = main;
        };
        /**
         * 初始化
         */
        MVCData.prototype.initialize = function () {
        };
        /**
         * 反初始化
         */
        MVCData.prototype.uninitialize = function () {
        };
        Object.defineProperty(MVCData.prototype, "main", {
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
        return MVCData;
    }());
    touch.MVCData = MVCData;
})(touch || (touch = {}));
//# sourceMappingURL=MVCData.js.map