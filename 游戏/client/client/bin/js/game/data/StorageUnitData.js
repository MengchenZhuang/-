/**
* momo
*/
var touch;
(function (touch) {
    /**
     * 游戏数据单元
     */
    var StorageUnitData = /** @class */ (function () {
        /**
         * 构造函数
         * @param data 数据
         */
        function StorageUnitData(data) {
            /**
             * 名字
             */
            this._name = "";
            this._name = "touch_" + data;
        }
        /**
         * 销毁函数
         */
        StorageUnitData.prototype.destroy = function () {
        };
        Object.defineProperty(StorageUnitData.prototype, "name", {
            /**
             * 获取名字
             */
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StorageUnitData.prototype, "value", {
            /**
             * 获取数值
             */
            get: function () {
                return this._value;
            },
            /**
             * 设置数值
             */
            set: function (value) {
                if (typeof value === 'string') {
                    Laya.LocalStorage.setItem(this._name, value);
                }
                else if (typeof value === 'number') {
                    Laya.LocalStorage.setItem(this._name, value.toString());
                }
                else if (typeof value === 'object') {
                    Laya.LocalStorage.setItem(this._name, JSON.stringify(value));
                }
                this._value = value;
            },
            enumerable: true,
            configurable: true
        });
        return StorageUnitData;
    }());
    touch.StorageUnitData = StorageUnitData;
})(touch || (touch = {}));
//# sourceMappingURL=StorageUnitData.js.map