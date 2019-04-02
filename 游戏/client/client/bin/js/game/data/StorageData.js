/**
* momo
*/
var touch;
(function (touch) {
    /**
     * 游戏数据
     */
    var StorageData = /** @class */ (function () {
        /**
         * 构造函数
         */
        function StorageData() {
            /**
             * 数据集合
             */
            this._datas = new Laya.Dictionary;
            this.registerData(touch.EnumStorageDataName.SHOP_BUY_AMMO_TIMES_CACHE, touch.EnumStorageDataType.OBJECT, touch.ShopBuyAmmoTimesCacheDic);
            this.registerData(touch.EnumStorageDataName.SHOP_LEVELUP_TIMES_CACHE, touch.EnumStorageDataType.OBJECT, touch.ShopWeaponLevelUpTimesCacheDic);
            this.registerData(touch.EnumStorageDataName.WEAPONSTATE, touch.EnumStorageDataType.OBJECT, touch.ShopItemOpenCache);
        }
        Object.defineProperty(StorageData, "instance", {
            /**
             * 获取实例
             */
            get: function () {
                if (null == StorageData._instance) {
                    StorageData._instance = new StorageData();
                }
                return StorageData._instance;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 销毁函数
         */
        StorageData.prototype.destroy = function () {
            if (this._datas != null) {
                this._datas.clear();
                this._datas = null;
            }
        };
        /**
         * 获取数据
         * @param name 名字
         */
        StorageData.prototype.getValue = function (name) {
            var data = this._datas.get(name);
            if (!data) {
                console.assert(false, "请先注册数据");
                data = new touch.StorageUnitData(name);
                this._datas.set(name, data);
            }
            return data.value;
        };
        /**
         * 设置数据
         * @param name 名字
         * @param value 值
         */
        StorageData.prototype.setValue = function (name, value) {
            var data = this._datas.get(name);
            if (undefined == data) {
                console.assert(false, "请先注册数据");
                data = new touch.StorageUnitData(name);
                this._datas.set(name, data);
            }
            data.value = value;
        };
        /**
         * 累加值(必须是number)
         * @param name 名字
         * @param value 累加值
         */
        StorageData.prototype.addValue = function (name, value) {
            var data = this._datas.get(name);
            if (undefined == data) {
                console.assert(false, "请先注册数据");
                return;
            }
            data.value += value;
            return data.value;
        };
        /**
         * 注册数据
         * @param name 名字
         * @param type 类型
         */
        StorageData.prototype.registerData = function (name, type, dataClass) {
            switch (type) {
                case touch.EnumStorageDataType.INT:
                    var intData = new touch.StorageUnitData(name);
                    intData.value = this.getInt(intData.name);
                    this._datas.set(name, intData);
                    break;
                case touch.EnumStorageDataType.FLOAT:
                    var floatData = new touch.StorageUnitData(name);
                    floatData.value = this.getFloat(floatData.name);
                    this._datas.set(name, floatData);
                    break;
                case touch.EnumStorageDataType.STRING:
                    var stringData = new touch.StorageUnitData(name);
                    stringData.value = this.getString(floatData.name);
                    this._datas.set(name, stringData);
                    break;
                case touch.EnumStorageDataType.OBJECT:
                    if (!dataClass) {
                        console.assert(false, "未给定数据类型");
                        return;
                    }
                    var objectData = new touch.StorageUnitData(name);
                    objectData.value = this.getObject(objectData.name, dataClass);
                    this._datas.set(name, objectData);
                    break;
                default:
                    break;
            }
        };
        /**
         * 获取整形
         * @param name
         */
        StorageData.prototype.getInt = function (name) {
            var value = Laya.LocalStorage.getItem(name);
            if (value) {
                return parseInt(value);
            }
            return 0;
        };
        /**
         * 获取浮点数
         * @param name
         */
        StorageData.prototype.getFloat = function (name) {
            var value = Laya.LocalStorage.getItem(name);
            if (value) {
                return parseFloat(value);
            }
            return 0;
        };
        /**
         * 获取字符串
         * @param name
         */
        StorageData.prototype.getString = function (name) {
            var value = Laya.LocalStorage.getItem(name);
            if (value) {
                return value;
            }
            return "";
        };
        /**
         * 获取对象
         * @param name
         * @param dataClass
         */
        StorageData.prototype.getObject = function (name, dataClass) {
            var value = Laya.LocalStorage.getItem(name);
            if (value && value != "") {
                return JSON.parse(value);
            }
            return new dataClass();
        };
        /**
         * 实例
         */
        StorageData._instance = null;
        return StorageData;
    }());
    touch.StorageData = StorageData;
})(touch || (touch = {}));
//# sourceMappingURL=StorageData.js.map