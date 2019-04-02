/**
 * jarekzha
 */
var touch;
(function (touch) {
    /**
     * 配置数据
     */
    var GameData = /** @class */ (function () {
        function GameData() {
        }
        /**
         * 初始化
         */
        GameData.init = function () {
            touch.LevelData.init();
            this._weaponGroupDataArray = Laya.loader.getRes(this._weaponGroupUrl);
            this.initweaponGroupDataMap(this._weaponGroupDataArray);
            this._weaponDataArray = Laya.loader.getRes(this._weaponUrl);
            this.initweaponDataMap(this._weaponDataArray);
            this._monsterDataArray = Laya.loader.getRes(this._monsterUrl);
            this.initMonsterDataMap(this._monsterDataArray);
        };
        /**
         * 获取所有url
         */
        GameData.getUrls = function () {
            var urls = touch.LevelData.getUrls();
            urls.push(this._weaponGroupUrl);
            urls.push(this._weaponUrl);
            urls.push(this._monsterUrl);
            return urls;
        };
        /**
         * 初始化武器组字典
         * @param data 武器组数据
         */
        GameData.initweaponGroupDataMap = function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var element = data_1[_i];
                var key = element.name;
                this._weaponGroupDataMap.set(key, element.type);
            }
        };
        /**
         * 初始化武器数据字典
         * @param data
         */
        GameData.initweaponDataMap = function (data) {
            for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                var element = data_2[_i];
                var key = element.Name;
                this._weaponDataMap.set(key, element);
            }
        };
        /**
         * 返回 一组武器
         * @param string 类型
         */
        GameData.getGroupByType = function (type) {
            var tempArray = new Array();
            for (var _i = 0, _a = this._weaponGroupDataMap.keys; _i < _a.length; _i++) {
                var element = _a[_i];
                var value = this._weaponGroupDataMap.get(element);
                if (value == type) {
                    tempArray.push(element);
                }
            }
            return tempArray;
        };
        /**
         * 根据名称查询武器配置
         * @param name 名称
         */
        GameData.getWeaponDataByName = function (name) {
            return this._weaponDataMap.get(name);
        };
        /**
         * 初始化怪物数据映射表
         */
        GameData.initMonsterDataMap = function (data) {
            for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                var d = data_3[_i];
                this._monsterDataMap.set(d.name, d);
            }
        };
        /**
         * 通过名字获取怪物
         */
        GameData.getMonsterDataByName = function (name) {
            return this._monsterDataMap.get(name);
        };
        /**武器配置路径 */
        GameData._weaponUrl = "res/gamedata/weapon.json";
        /**武器组配置路径 */
        GameData._weaponGroupUrl = "res/gamedata/weaponGroup.json";
        /**怪物url */
        GameData._monsterUrl = "res/gamedata/monster.json";
        /**武器组数据 */
        GameData._weaponGroupDataArray = null;
        /**武器组字典 */
        GameData._weaponGroupDataMap = new Laya.Dictionary();
        /**武器数据 */
        GameData._weaponDataArray = null;
        /**武器字典 */
        GameData._weaponDataMap = new Laya.Dictionary();
        /**怪物数据 */
        GameData._monsterDataArray = null;
        /**怪物数据映射 */
        GameData._monsterDataMap = new Laya.Dictionary();
        return GameData;
    }());
    touch.GameData = GameData;
})(touch || (touch = {}));
//# sourceMappingURL=GameData.js.map