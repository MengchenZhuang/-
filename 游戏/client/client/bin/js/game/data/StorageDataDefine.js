/**
* momo
*/
var touch;
(function (touch) {
    /**
     * 数据名字枚举
     */
    var EnumStorageDataName;
    (function (EnumStorageDataName) {
        EnumStorageDataName[EnumStorageDataName["SHOP_BUY_AMMO_TIMES_CACHE"] = 0] = "SHOP_BUY_AMMO_TIMES_CACHE";
        EnumStorageDataName[EnumStorageDataName["SHOP_LEVELUP_TIMES_CACHE"] = 1] = "SHOP_LEVELUP_TIMES_CACHE";
        EnumStorageDataName[EnumStorageDataName["WEAPONSTATE"] = 2] = "WEAPONSTATE"; //武器解锁状态
    })(EnumStorageDataName = touch.EnumStorageDataName || (touch.EnumStorageDataName = {}));
    /**
     * 数据类型
     */
    var EnumStorageDataType;
    (function (EnumStorageDataType) {
        EnumStorageDataType[EnumStorageDataType["INT"] = 0] = "INT";
        EnumStorageDataType[EnumStorageDataType["FLOAT"] = 1] = "FLOAT";
        EnumStorageDataType[EnumStorageDataType["STRING"] = 2] = "STRING";
        EnumStorageDataType[EnumStorageDataType["OBJECT"] = 3] = "OBJECT";
    })(EnumStorageDataType = touch.EnumStorageDataType || (touch.EnumStorageDataType = {}));
})(touch || (touch = {}));
//# sourceMappingURL=StorageDataDefine.js.map