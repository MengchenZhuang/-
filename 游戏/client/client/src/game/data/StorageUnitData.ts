/**
* momo 
*/
module touch {
	/**
	 * 游戏数据单元
	 */
	export class StorageUnitData<T>{
		/**
		 * 数值
		 */
		private _value: T;
		/**
		 * 名字
		 */
		private _name: string = "";

		/**
		 * 构造函数
		 * @param data 数据
		 */
		constructor(data: EnumStorageDataName) {
			this._name = "touch_" + data;
		}

		/**
		 * 销毁函数 
		 */
		public destroy(): void {

		}

		/**
		 * 获取名字
		 */
		public get name(): string {
			return this._name;
		}

		/**
		 * 获取数值
		 */
		public get value(): T {
			return this._value;
		}

		/**
		 * 设置数值
		 */
		public set value(value: T) {
			if (typeof value === 'string') {
				Laya.LocalStorage.setItem(this._name, value);
			}
			else if (typeof value === 'number') {
				Laya.LocalStorage.setItem(this._name, (value as number).toString());
			}
			else if (typeof value === 'object') {
				Laya.LocalStorage.setItem(this._name, JSON.stringify(value));
			}
			this._value = value;
		}
	}
}