/**
* xlc
*/
module touch {
	/**
	 * 商城购买次数缓存
	 */
	export class ShopBuyAmmoTimesCacheDic {
		/**已购买子弹次数字典*/
		private _shopBuyAmmoTimesDic:Laya.Dictionary;
		constructor(){
			this._shopBuyAmmoTimesDic = new Laya.Dictionary();
		}

		/**设置 */
		public setShopBuyAmmoTimes(name:string,value:number):void
		{
			this._shopBuyAmmoTimesDic.set(name,value);
		}

		public getShopBuyAmmoTimes(name:string):number
		{
			return this._shopBuyAmmoTimesDic.get(name);
		}
	}

	/**
	 * 商城武器升级次数
	 */
	export class ShopWeaponLevelUpTimesCacheDic {
		/**已升级次数字典*/
		private _shopWeaponLevelUpTimesDic:Laya.Dictionary;
		constructor(){
			this._shopWeaponLevelUpTimesDic = new Laya.Dictionary();
		}

		/**设置 */
		public setShopWeaponLevelUpTimes(name:string,value:number):void
		{
			this._shopWeaponLevelUpTimesDic.set(name,value);
		}

		public getShopWeaponLevelUpTimes(name:string):number
		{
			return this._shopWeaponLevelUpTimesDic.get(name);
		}
	}

	/**
	 * 商城Item解锁状态缓存
	 */
	export class ShopItemOpenCache {
		/**
		 *是否锁住  锁住true  解锁false
		 */
		isLock: boolean
	}
}