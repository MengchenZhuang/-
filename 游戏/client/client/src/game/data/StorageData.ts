/**
* momo 
*/
module touch {
	/**
	 * 游戏数据
	 */
	export class StorageData {
		/**
		 * 数据集合
		 */
		private _datas: Laya.Dictionary = new Laya.Dictionary;
		/**
		 * 实例
		 */
		private static _instance: StorageData = null;

		/**
		 * 构造函数
		 */
		constructor() {
			this.registerData<ShopBuyAmmoTimesCacheDic>(EnumStorageDataName.SHOP_BUY_AMMO_TIMES_CACHE, EnumStorageDataType.OBJECT,ShopBuyAmmoTimesCacheDic);
			this.registerData<ShopWeaponLevelUpTimesCacheDic>(EnumStorageDataName.SHOP_LEVELUP_TIMES_CACHE, EnumStorageDataType.OBJECT,ShopWeaponLevelUpTimesCacheDic);
			this.registerData<ShopItemOpenCache>(EnumStorageDataName.WEAPONSTATE,EnumStorageDataType.OBJECT,ShopItemOpenCache)
		}

		/**
		 * 获取实例
		 */
		public static get instance(): StorageData {
			if (null == StorageData._instance) {
				StorageData._instance = new StorageData();
			}

			return StorageData._instance;
		}

		/**
		 * 销毁函数 
		 */
		public destroy() {
			if (this._datas != null) {
				this._datas.clear();
				this._datas = null;
			}
		}

		/**
		 * 获取数据
		 * @param name 名字
		 */
		public getValue<T>(name: EnumStorageDataName): T {
			let data: StorageUnitData<T> = this._datas.get(name);
			if (!data) {
				console.assert(false, "请先注册数据");
				data = new StorageUnitData<T>(name);
				this._datas.set(name, data);
			}
			return data.value;
		}

		/**
		 * 设置数据
		 * @param name 名字
		 * @param value 值
		 */
		public setValue<T>(name: EnumStorageDataName, value: T): void {
			let data: StorageUnitData<T> = this._datas.get(name);
			if (undefined == data) {
				console.assert(false, "请先注册数据");
				data = new StorageUnitData<T>(name);
				this._datas.set(name, data);
			}
			data.value = value;
		}

		/**
		 * 累加值(必须是number)
		 * @param name 名字
		 * @param value 累加值
		 */
		public addValue(name: EnumStorageDataName, value: number): number {
			let data: StorageUnitData<number> = this._datas.get(name);
			if (undefined == data) {
				console.assert(false, "请先注册数据");
				return;
			}
			data.value += value;
			return data.value;
		}

		/**
		 * 注册数据
		 * @param name 名字
		 * @param type 类型
		 */
		private registerData<T>(name: EnumStorageDataName, type: EnumStorageDataType, dataClass?: { new (): T; }): void {
			switch (type) {
				case EnumStorageDataType.INT:
					let intData = new StorageUnitData<number>(name);
					intData.value = this.getInt(intData.name);
					this._datas.set(name, intData);
					break;

				case EnumStorageDataType.FLOAT:
					let floatData = new StorageUnitData<number>(name);
					floatData.value = this.getFloat(floatData.name);
					this._datas.set(name, floatData);
					break;

				case EnumStorageDataType.STRING:
					let stringData = new StorageUnitData<string>(name);
					stringData.value = this.getString(floatData.name);
					this._datas.set(name, stringData);
					break;

				case EnumStorageDataType.OBJECT:
					if (!dataClass) {
						console.assert(false, "未给定数据类型");
						return
					}
					let objectData = new StorageUnitData<T>(name);
					objectData.value = this.getObject(objectData.name, dataClass);
					this._datas.set(name, objectData);
					break;

				default:
					break;
			}
		}

		/**
		 * 获取整形
		 * @param name 
		 */
		private getInt(name: string): number {
			let value = Laya.LocalStorage.getItem(name);
			if (value) {
				return parseInt(value);
			}

			return 0;
		}

		/**
		 * 获取浮点数
		 * @param name 
		 */
		private getFloat(name: string): number {
			let value = Laya.LocalStorage.getItem(name);
			if (value) {
				return parseFloat(value);
			}

			return 0;
		}

		/**
		 * 获取字符串
		 * @param name 
		 */
		private getString(name: string): string {
			let value = Laya.LocalStorage.getItem(name);
			if (value) {
				return value;
			}

			return "";
		}

		/**
		 * 获取对象
		 * @param name 
		 * @param dataClass 
		 */
		private getObject<T>(name: string, dataClass: { new (): T; }): T {
			let value = Laya.LocalStorage.getItem(name);
			if (value && value != "") {
				return JSON.parse(value) as T;
			}

			return new dataClass();
		}
	}
}