/**
 * jarekzha
 */
module touch {
    /**
     * 配置数据
     */
    export class GameData {
        /**武器配置路径 */
        private static _weaponUrl: string = "res/gamedata/weapon.json";
        /**武器组配置路径 */
        private static _weaponGroupUrl: string = "res/gamedata/weaponGroup.json";
        /**怪物url */
        private static _monsterUrl: string = "res/gamedata/monster.json";

        /**武器组数据 */
        private static _weaponGroupDataArray: Array<WeaponGroupData> = null;
        /**武器组字典 */
        private static _weaponGroupDataMap: Dictionary = new Dictionary();
        /**武器数据 */
        private static _weaponDataArray: Array<WeaponData> = null;
        /**武器字典 */
        private static _weaponDataMap: Dictionary = new Dictionary();
        /**怪物数据 */
        private static _monsterDataArray: Array<MonsterData> = null;
        /**怪物数据映射 */
        private static _monsterDataMap: Dictionary = new Dictionary();

        public static stage: egret.Stage;

        /**
         * 初始化
         */
        public static init(main:Main) {
            LevelData.init();
            GameData.stage = main.stage;
            // this._weaponGroupDataArray = Laya.loader.getRes(this._weaponGroupUrl) as Array<WeaponGroupData>;
            // this.initweaponGroupDataMap(this._weaponGroupDataArray)

            // this._weaponDataArray = Laya.loader.getRes(this._weaponUrl) as Array<WeaponData>;
            // this.initweaponDataMap(this._weaponDataArray)

            // this._monsterDataArray = Laya.loader.getRes(this._monsterUrl) as Array<MonsterData>
            // this.initMonsterDataMap(this._monsterDataArray)
        }

        /**
         * 获取所有url 
         */
        public static getUrls():Array<string> {
            let urls = LevelData.getUrls();
            urls.push(this._weaponGroupUrl);
            urls.push(this._weaponUrl);
            urls.push(this._monsterUrl)
            return urls;
        }

        /**
         * 初始化武器组字典
         * @param data 武器组数据
         */
        private static initweaponGroupDataMap(data: Array<WeaponGroupData>): void {
            for (let element of data) {
                let key = element.name;
                this._weaponGroupDataMap.set(key, element.type);
            }
        }

        /**
         * 初始化武器数据字典
         * @param data 
         */
        private static initweaponDataMap(data: Array<WeaponData>): void {
            for (let element of data) {
                let key = element.Name;
                this._weaponDataMap.set(key, element);
            }
        }

        /**
         * 返回 一组武器
         * @param string 类型
         */
        public static getGroupByType(type: string): Array<string> {
            let tempArray: Array<string> = new Array<string>();
            for (let element of this._weaponGroupDataMap.keys) {
                let value = this._weaponGroupDataMap.get(element);
                if (value == type) {
                    tempArray.push(element);
                }
            }
            return tempArray;
        }

        /**
         * 根据名称查询武器配置
         * @param name 名称
         */
        public static getWeaponDataByName(name: string): WeaponData  {
            return this._weaponDataMap.get(name);
        }

        /**
         * 初始化怪物数据映射表
         */
        private static initMonsterDataMap(data: Array<MonsterData>) {
            for (let d of data) {
                this._monsterDataMap.set(d.name, d)
            }
        }

        /**
         * 通过名字获取怪物
         */
        public static getMonsterDataByName(name: string): MonsterData{
            return this._monsterDataMap.get(name)
        }
    }
}