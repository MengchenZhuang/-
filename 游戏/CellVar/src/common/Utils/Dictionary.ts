/**字典数据结构类 */

module touch{
	export class Dictionary{
		private _keys: any = [];
		private _values: any = [];
		private isCache: boolean;
		public get count(): number {
			return this.Count();
		}

		public constructor(isCache: boolean = false) {
			this.isCache = isCache;
		}

		/**给字典增加一条数据,返回字典的长度 */
		public Add(key: any, value: any): number {
			if (this.isCache) {
				this[key] = value;
			}
			this._keys.push(key);
			return this._values.push(value);
		}

		public remove(key: any) {
			var index = this._keys.indexOf(key, 0);
			this._keys.splice(index, 1);
			this._values.splice(index, 1);
			if (this.isCache) {
				delete this[key];
			}
		}

		private Count(): number {
			return this._keys.length;
		}

		/**直接使用SetDicValue()修改已经存在的字典数据项，并更新缓存引用 */
		public set(key: any, value: any) {
			var index = this._keys.indexOf(key, 0);
			if (index != -1) {
				this._keys[index] = key;
				this._values[index] = value;
				if (this.isCache) {
					this[key] = value;
				}
			}
			else
			{
				this.Add(key,value);
			}
		}

		/**
		 *开启"[]"访问的情况下，缓存与字典数据为同一份，引用数据会同时修改，
		*非引用数据不能被修改，只能访问
		*/
		public get(key: any): any {
			var index = this._keys.indexOf(key, 0);
			if (index != -1) {
				return this._values[index];
			}
			return null;
		}

		public ContainsKey(key: any): boolean {
			let ks = this._keys;
			for (let i = 0; i < ks.length; ++i) {
				if (ks[i] == key) {
					return true;;
				}
			}
			return false;
		}

		public get keys(): any {
			return this._keys;
		}

		public get values(): any {
			return this._values;
		}

		public clear(){
			this._keys = [];
			this._values = [];
		}

		public indexOf(key:any):number{
			return this._keys.indexOf(key, 0)
		}
	}
}
