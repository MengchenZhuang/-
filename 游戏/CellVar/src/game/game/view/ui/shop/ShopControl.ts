/**
* XLC 
*/
module touch {
	export class ShopControl extends MVCControl {

		private static WEAPON_TYPE: string = "weapons";
		private static WEAPON_BOMB_TYPE: string = "explosive";
		private static WEAPON_DEFENSE_TYPE: string = "defense";
		private static SPECIAL_ITEM_TYPE: string = "special";
		/**当前商城页签索引 */
		private _curSelectindex: number = -1;
		/**当前list */
		private _curList: Laya.List = null;
		constructor() {
			super();
		}

		/**
		 * 销毁函数
		 */
		public destroy(): void {
			for (let i: number = 0; i < this._curList.cells.length; i++) {
				let ui: ShopItem = this._curList.getCell(i) as ShopItem;
				if (ui != void 0) {
					ui.off(ShopItem.TOUCH_EVENT_SHOPITEM_BUY_AMMO, this, this.onClickBuyAmmo);
					ui.off(ShopItem.TOUCH_EVENT_SHOPITEM_EQUIP, this, this.onClickEquip);
					ui.off(ShopItem.TOUCH_EVENT_SHOPITEM_LEVEL_UP, this, this.onClickLevelUp);
					ui.off(ShopItem.TOUCH_EVENT_SHOPITEM_TIP, this, this.onClickTip);
				}
			}
			super.destroy();
		}

		/**
		 * 初始化
		 */
		public initialize(): void {
			super.initialize();
			let ui = this.getView(ShopView).ui;
			this.initList(ui);
			ui.tab_shop.selectHandler = new Laya.Handler(this, this.onClickTab, null, false);
			ui.btnCoin.clickHandler = new Laya.Handler(this, this.onClickCoin, null, false);
			ui.btnPepper.clickHandler = new Laya.Handler(this, this.onClickPepper, null, false);
			ui.btnPower.clickHandler = new Laya.Handler(this, this.onClickPower, null, false);
			ui.tab_shop.selectedIndex = 0;

			this.onClickTab(0);
		}

		/**
		 * 反初始化
		 * @param 初始化参数
		 */
		public uninitialize(): void {
			let ui = this.getView(ShopView).ui;
			if (ui.tab_shop.selectHandler != null) {
				ui.tab_shop.selectHandler.recover();
				ui.tab_shop.selectHandler = null;
			}
			if (ui.btnCoin.clickHandler != null) {
				ui.btnCoin.clickHandler.recover();
				ui.btnCoin.clickHandler = null;
			}
			if (ui.btnPepper.clickHandler != null) {
				ui.btnPepper.clickHandler.recover();
				ui.btnPepper.clickHandler = null;
			}
			if (ui.btnPower.clickHandler != null) {
				ui.btnPower.clickHandler.recover();
				ui.btnPower.clickHandler = null;
			}
			super.uninitialize();
		}

		/**
		 * 点击商店页签
		 * @param index Tab索引
		 */
		private onClickTab(index: number): void {
			let ui = this.getView(ShopView).ui;
			this.showTabBg(ui, index);
			ui.viewStrackList.selectedIndex = index;
			this._curList = ui.viewStrackList.getChildByName("item" + index) as Laya.List
			if (this._curSelectindex != index) {
				this._curSelectindex = index;
				switch (this._curSelectindex) {
					case 0:
						this._curList.array = GameData.getGroupByType(ShopControl.WEAPON_TYPE);
						break;
					case 1:
						this._curList.array = GameData.getGroupByType(ShopControl.WEAPON_BOMB_TYPE);
						break;
					case 2:
						this._curList.array = GameData.getGroupByType(ShopControl.WEAPON_DEFENSE_TYPE);
						break;
					case 3:
						this._curList.array = GameData.getGroupByType(ShopControl.SPECIAL_ITEM_TYPE);
						break;
				}
			}

		}

		/**
		 * 点击购买金币
		 */
		private onClickCoin(): void {

		}

		/**
		 * 点击购买辣椒（增加装弹速度）
		 */
		private onClickPepper(): void {

		}

		/**
		 * 点击购买 能量
		 */
		private onClickPower(): void {

		}

		/**
		 * 
		 * @param ui shopUI
		 * @param index Tab当前索引
		 */
		private showTabBg(ui: ui.ShopUI, index: number): void {
			for (let i: number = 0; i < ui.boxTabBg.numChildren; i++) {
				let img: Laya.Image = ui.boxTabBg.getChildByName("imgTabBg" + i) as Laya.Image;
				if (i == index) {
					img.visible = true;
					continue;
				}
				img.visible = false;
			}
		}

		/**
		 * 初始化list
		 * @param ui 
		 */
		private initList(ui: ui.ShopUI): void {
			for (let i: number = 0; i < ui.viewStrackList.numChildren; i++) {
				let list: Laya.List = ui.viewStrackList.getChildByName("item" + i) as Laya.List;
				list.vScrollBarSkin = "";
				list.renderHandler = new Laya.Handler(this, this.renderCurList);
			}
		}


		/**
		 * 渲染list
		 */
		private renderCurList(ui: ShopItem, index: number): void {
			let name = ui.dataSource;
			let weaponData: WeaponData = GameData.getWeaponDataByName(name) as WeaponData;
			let tempData: ShopItemDataStructure = new ShopItemDataStructure();
			tempData.bulletPrice = weaponData.AmmoPrice;
			tempData.name = weaponData.Name;
			tempData.openPrice = weaponData.UnlockPrice;
			tempData.onceCanBuyNum = weaponData.BuyAmmoQty;
			tempData.maxCanBuyNum = weaponData.MaxAmmo;
			tempData.curBuyBulletTimes = this.getBuyAmmoTimes(name);
			tempData.levelUpPrice = weaponData.UpgradePrice[this.getLevelUpTimes(name)];
			tempData.curLevel = this.getLevelUpTimes(name);
			tempData.maxLevelupNum = weaponData.UpgradePrice.length;


			tempData.isLock = false;
			ui.setData(tempData);
			ui.update(this._curSelectindex, index);
			ui.off(ShopItem.TOUCH_EVENT_SHOPITEM_BUY_AMMO, this, this.onClickBuyAmmo);
			ui.off(ShopItem.TOUCH_EVENT_SHOPITEM_EQUIP, this, this.onClickEquip);
			ui.off(ShopItem.TOUCH_EVENT_SHOPITEM_LEVEL_UP, this, this.onClickLevelUp);
			ui.off(ShopItem.TOUCH_EVENT_SHOPITEM_TIP, this, this.onClickTip);
			ui.on(ShopItem.TOUCH_EVENT_SHOPITEM_BUY_AMMO, this, this.onClickBuyAmmo);
			ui.on(ShopItem.TOUCH_EVENT_SHOPITEM_EQUIP, this, this.onClickEquip);
			ui.on(ShopItem.TOUCH_EVENT_SHOPITEM_LEVEL_UP, this, this.onClickLevelUp);
			ui.on(ShopItem.TOUCH_EVENT_SHOPITEM_TIP, this, this.onClickTip);
		}

		/**
	  * 获取已购买子弹次数
	  */
		private getBuyAmmoTimes(name: string): number {
			let cacheData = StorageData.instance.getValue<ShopBuyAmmoTimesCacheDic>(EnumStorageDataName.SHOP_BUY_AMMO_TIMES_CACHE);
			if (cacheData != void 0) {
				let buyAmmoTimes: number = cacheData.getShopBuyAmmoTimes(name);
				if (buyAmmoTimes == void 0) {
					buyAmmoTimes = 0;
					cacheData.setShopBuyAmmoTimes(name, 0)
					StorageData.instance.setValue(EnumStorageDataName.SHOP_BUY_AMMO_TIMES_CACHE, cacheData)
					return buyAmmoTimes;
				}
				else {
					return buyAmmoTimes;
				}
			}
		}

		/**
		 * 获取当前升级次数
		 */
		private getLevelUpTimes(name: string): number {
			let cacheData: ShopWeaponLevelUpTimesCacheDic = StorageData.instance.getValue<ShopWeaponLevelUpTimesCacheDic>(EnumStorageDataName.SHOP_LEVELUP_TIMES_CACHE);
			if (cacheData != void 0) {
				let levelUpTimes: number = cacheData.getShopWeaponLevelUpTimes(name);
				if (levelUpTimes == void 0) {
					levelUpTimes = 0;
					cacheData.setShopWeaponLevelUpTimes(name, 0)
					StorageData.instance.setValue(EnumStorageDataName.SHOP_LEVELUP_TIMES_CACHE, cacheData)
					return levelUpTimes;
				}
				else {
					return levelUpTimes;
				}
			}
		}

		/**
		 * 购买子弹
		 */
		private onClickBuyAmmo(args: ShopItem): void {
			let name: string = args.name;
			let cacheData = StorageData.instance.getValue<ShopBuyAmmoTimesCacheDic>(EnumStorageDataName.SHOP_BUY_AMMO_TIMES_CACHE);
			let times: number = cacheData.getShopBuyAmmoTimes(name) + 1;
			cacheData.setShopBuyAmmoTimes(name, times);
			StorageData.instance.setValue(EnumStorageDataName.SHOP_BUY_AMMO_TIMES_CACHE, cacheData);

			let data: ShopItemDataStructure = args.getData();
			data.curBuyBulletTimes = times;
			args.setData(data);
			args.showbulletNum();
			//TODO 扣除金币	
		}

		/**
		 * 点击装备
		 */
		private onClickEquip(): void {

		}

		/**
		 * 点击升级
		 */
		private onClickLevelUp(args: ShopItem): void {
			let name: string = args.name;
			let cacheData = StorageData.instance.getValue<ShopWeaponLevelUpTimesCacheDic>(EnumStorageDataName.SHOP_LEVELUP_TIMES_CACHE);
			let curLevel: number = cacheData.getShopWeaponLevelUpTimes(name) + 1;
			cacheData.setShopWeaponLevelUpTimes(name, curLevel);
			StorageData.instance.setValue(EnumStorageDataName.SHOP_LEVELUP_TIMES_CACHE, cacheData);

			let data: ShopItemDataStructure = args.getData();
			data.curLevel = curLevel;
			args.setData(data);
			args.showLevelupInfo();
			//TODO 扣除金币
		}

		/**
		 * 点击Tip
		 */
		private onClickTip(): void {

		}
	}
}