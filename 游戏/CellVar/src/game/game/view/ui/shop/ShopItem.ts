/**
* name 
*/
module touch {
	export class ShopItem extends ui.ShopItemUI {
		/**武器最大等级 */
		private static MAXLEVEL: number = 7;
		/**模板数据 */
		private _data: touch.ShopItemDataStructure;
		/**购买子弹事件 */
		public static TOUCH_EVENT_SHOPITEM_BUY_AMMO: string = "TOUCH_EVENT_SHOPITEM_BUY_AMMO";
		/**升级武器事件 */
		public static TOUCH_EVENT_SHOPITEM_LEVEL_UP: string = "TOUCH_EVENT_SHOPITEM_LEVEL_UP";
		/**装备事件 */
		public static TOUCH_EVENT_SHOPITEM_EQUIP: string = "TOUCH_EVENT_SHOPITEM_EQUIP";
		/**提示事件 */
		public static TOUCH_EVENT_SHOPITEM_TIP: string = "TOUCH_EVENT_SHOPITEM_TIP";
		constructor() {
			super();
			this.init();
		}

		/**
		 * 销毁函数
		 */
		public destroy(): void {
			if (this.btnBuyAmmo.clickHandler != null) {
				this.btnBuyAmmo.clickHandler.recover();
				this.btnBuyAmmo.clickHandler = null;
			}
			if (this.btnLevelUp.clickHandler != null) {
				this.btnLevelUp.clickHandler.recover();
				this.btnLevelUp.clickHandler = null;
			}
			if (this.btnEquip.clickHandler != null) {
				this.btnEquip.clickHandler.recover();
				this.btnEquip.clickHandler = null;
			}
			this.imgIcon.off(Laya.Event.CLICK, this, this.onClickIcon);
			if (null != this._data) {
				this._data = null;
			}
			super.destroy();
		}

		/**
		 * 初始化
		 */
		private init(): void {
			this.btnBuyAmmo.clickHandler = new Laya.Handler(this, this.onClickBuyAmmo, null, false);
			this.btnLevelUp.clickHandler = new Laya.Handler(this, this.onClickLevelUp, null, false);
			this.btnEquip.clickHandler = new Laya.Handler(this, this.onClickEquip, null, false);
			this.imgIcon.on(Laya.Event.CLICK, this, this.onClickIcon);
		}

		/**
		 * 设置数据
		 * @param data 数据
		 */
		public setData(data: ShopItemDataStructure): void {
			this._data = data;
			this.name = this._data.name;
		}

		/**
		 * 获取数据
		 */
		public getData(): ShopItemDataStructure {
			return this._data;
		}

		/**
		 * 更新
		 * @param type 页签索引
		 * @param index 项目索引
		 */
		public update(type: number, index: number): void {
			this.showDifferenceStyle();
			this.showbulletNum();
			this.showBuyBulletPrice();
			this.showLevelupPrice();
			this.showIcon(type, index);
			this.showLevelupInfo();
		}

		/**
		 * 购买子弹
		 */
		private onClickBuyAmmo(): void {
			this.event(ShopItem.TOUCH_EVENT_SHOPITEM_BUY_AMMO, this)
		}

		/**
		 * 升级
		 */
		private onClickLevelUp(): void {
			this.event(ShopItem.TOUCH_EVENT_SHOPITEM_LEVEL_UP, this)
		}

		/**
		 * 装备 
		 * */
		private onClickEquip(): void {
			this.event(ShopItem.TOUCH_EVENT_SHOPITEM_EQUIP)
		}

		/**
		 * 点击icon获取提示
		 */
		private onClickIcon(): void {
			this.event(ShopItem.TOUCH_EVENT_SHOPITEM_TIP)
		}

		/**显示不同的样式 */
		private showDifferenceStyle(): void {
			if (this._data.isLock == true) {
				this.imgBG.skin = "game/img_shop_bg_1.png"
				this.btnBuyAmmo.visible = false;
				this.btnLevelUp.skin = "game/Shop_WeaponUnlock_01.png";
				this.labelDescClock.visible = true;
				this.imgClock.visible = true;
			}
			else {
				this.imgBG.skin = "game/img_shop_bg_0.png"
				this.btnBuyAmmo.visible = true;
				this.btnLevelUp.skin = "game/btn_green.png";
				this.labelDescClock.visible = false;
				this.imgClock.visible = false;
			}
		}

		/**
		 * 设置icon皮肤
		 */
		private showIcon(type: number, index: number): void {
			let skin: string = "";
			switch (type) {
				case 0:
					skin = "game/img_weapon_" + index + ".png";
					break;
				case 1:
					skin = "game/Shop_Exploder_" + index + ".png";
					break;
				case 2:
					skin = "game/shop_defense_" + index + ".png";
					break;
				case 3:
					break;
			}
			this.imgIcon.skin = skin;
		}

		/**
		 *当前子弹数量
		 */
		public showbulletNum(): void {
			this.labelName.text = this._data.name;
			if (this._data.curBuyBulletTimes * this._data.onceCanBuyNum >= this._data.maxCanBuyNum) {
				this.labelNum.text = this._data.maxCanBuyNum.toString();
			}
			else {
				this.labelNum.text = (this._data.curBuyBulletTimes * this._data.onceCanBuyNum).toString();
			}
		}

		/**
		 * 购买子弹价格
		 */
		private showBuyBulletPrice(): void {
			this.labelPrice.text = this._data.bulletPrice.toString();
		}

		/**
		 * 升级武器价格
		 */
		private showLevelupPrice(): void {
			this.labelLevelUp.text = this._data.levelUpPrice.toString();
		}

		/**
		 * 当前升级信息
		 */
		public showLevelupInfo(): void {
			let curLevel: number = this._data.curLevel;
			this.hbox_levelUp.removeChildren();
			for (let i: number = 0; i < this._data.maxLevelupNum; i++) {
				let img: Laya.Image = new Laya.Image();
				img.name = "item" + i;
				if (i <= curLevel) {
					img.skin = "game/img_shop_green.png"
				}
				else if (i == curLevel + 1) {
					img.skin = "game/img_shop_yello.png"
				}
				else if (i > curLevel && (i != curLevel + 1)) {
					img.skin = "game/img_shop_gray.png"
				}
				this.hbox_levelUp.addChildren(img)
			}
		}
	}
}