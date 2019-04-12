/**
* name 
*/
module touch {
	export class ShopData extends MVCData {
		/**武器配置缓存 */
		private _weaponDic: Laya.Dictionary;
		/**爆炸物缓存 */
		private _explosiveDic: Laya.Dictionary;
		/**防御缓存 */
		private _defenseDic: Laya.Dictionary;
		/**特殊缓存 */
		private _specialDic: Laya.Dictionary;
		/**
		 * 构造函数
		 */
		constructor() {
			super();
		}

		/**
		 * 销毁
		 */
		public destroy(): void {
			super.destroy();
		}

		/**
		 * 清理数据
		 */
		public clear(): void {
			super.clear();
		}

		/**
		 * 初始化
		 */
		public initialize(): void {
			this._weaponDic = new Laya.Dictionary();
			this._explosiveDic = new Laya.Dictionary();
			this._defenseDic = new Laya.Dictionary();
			this._specialDic = new Laya.Dictionary();
		}

		/**
		 * 反初始化
		 */
		public uninitialize(): void {
			if (null != this._weaponDic) {
				this._weaponDic.clear();
				this._weaponDic = null;
			}
			if (null != this._explosiveDic) {
				this._explosiveDic.clear();
				this._explosiveDic = null;
			}
			if (null != this._defenseDic) {
				this._defenseDic.clear();
				this._defenseDic = null;
			}
			if (null != this._specialDic) {
				this._specialDic.clear();
				this._specialDic = null;
			}
		}

		// public get weaponDic():Laya.Dictionary
		// {
		// 	return this._weaponDic;
		// }

		// public set weaponDic(name:any)
		// {
		// 	this._weaponDic.set(name,value);
		// }
	}
}