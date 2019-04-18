var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
* XLC
*/
var touch;
(function (touch) {
    var ShopControl = /** @class */ (function (_super) {
        __extends(ShopControl, _super);
        function ShopControl() {
            var _this = _super.call(this) || this;
            /**当前商城页签索引 */
            _this._curSelectindex = -1;
            /**当前list */
            _this._curList = null;
            return _this;
        }
        /**
         * 销毁函数
         */
        ShopControl.prototype.destroy = function () {
            for (var i = 0; i < this._curList.cells.length; i++) {
                var ui_1 = this._curList.getCell(i);
                if (ui_1 != void 0) {
                    ui_1.off(touch.ShopItem.TOUCH_EVENT_SHOPITEM_BUY_AMMO, this, this.onClickBuyAmmo);
                    ui_1.off(touch.ShopItem.TOUCH_EVENT_SHOPITEM_EQUIP, this, this.onClickEquip);
                    ui_1.off(touch.ShopItem.TOUCH_EVENT_SHOPITEM_LEVEL_UP, this, this.onClickLevelUp);
                    ui_1.off(touch.ShopItem.TOUCH_EVENT_SHOPITEM_TIP, this, this.onClickTip);
                }
            }
            _super.prototype.destroy.call(this);
        };
        /**
         * 初始化
         */
        ShopControl.prototype.initialize = function () {
            _super.prototype.initialize.call(this);
            var ui = this.getView(touch.ShopView).ui;
            this.initList(ui);
            ui.tab_shop.selectHandler = new Laya.Handler(this, this.onClickTab, null, false);
            ui.btnCoin.clickHandler = new Laya.Handler(this, this.onClickCoin, null, false);
            ui.btnPepper.clickHandler = new Laya.Handler(this, this.onClickPepper, null, false);
            ui.btnPower.clickHandler = new Laya.Handler(this, this.onClickPower, null, false);
            ui.tab_shop.selectedIndex = 0;
            this.onClickTab(0);
        };
        /**
         * 反初始化
         * @param 初始化参数
         */
        ShopControl.prototype.uninitialize = function () {
            var ui = this.getView(touch.ShopView).ui;
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
            _super.prototype.uninitialize.call(this);
        };
        /**
         * 点击商店页签
         * @param index Tab索引
         */
        ShopControl.prototype.onClickTab = function (index) {
            var ui = this.getView(touch.ShopView).ui;
            this.showTabBg(ui, index);
            ui.viewStrackList.selectedIndex = index;
            this._curList = ui.viewStrackList.getChildByName("item" + index);
            if (this._curSelectindex != index) {
                this._curSelectindex = index;
                switch (this._curSelectindex) {
                    case 0:
                        this._curList.array = touch.GameData.getGroupByType(ShopControl.WEAPON_TYPE);
                        break;
                    case 1:
                        this._curList.array = touch.GameData.getGroupByType(ShopControl.WEAPON_BOMB_TYPE);
                        break;
                    case 2:
                        this._curList.array = touch.GameData.getGroupByType(ShopControl.WEAPON_DEFENSE_TYPE);
                        break;
                    case 3:
                        this._curList.array = touch.GameData.getGroupByType(ShopControl.SPECIAL_ITEM_TYPE);
                        break;
                }
            }
        };
        /**
         * 点击购买金币
         */
        ShopControl.prototype.onClickCoin = function () {
        };
        /**
         * 点击购买辣椒（增加装弹速度）
         */
        ShopControl.prototype.onClickPepper = function () {
        };
        /**
         * 点击购买 能量
         */
        ShopControl.prototype.onClickPower = function () {
        };
        /**
         *
         * @param ui shopUI
         * @param index Tab当前索引
         */
        ShopControl.prototype.showTabBg = function (ui, index) {
            for (var i = 0; i < ui.boxTabBg.numChildren; i++) {
                var img = ui.boxTabBg.getChildByName("imgTabBg" + i);
                if (i == index) {
                    img.visible = true;
                    continue;
                }
                img.visible = false;
            }
        };
        /**
         * 初始化list
         * @param ui
         */
        ShopControl.prototype.initList = function (ui) {
            for (var i = 0; i < ui.viewStrackList.numChildren; i++) {
                var list = ui.viewStrackList.getChildByName("item" + i);
                list.vScrollBarSkin = "";
                list.renderHandler = new Laya.Handler(this, this.renderCurList);
            }
        };
        /**
         * 渲染list
         */
        ShopControl.prototype.renderCurList = function (ui, index) {
            var name = ui.dataSource;
            var weaponData = touch.GameData.getWeaponDataByName(name);
            var tempData = new touch.ShopItemDataStructure();
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
            ui.off(touch.ShopItem.TOUCH_EVENT_SHOPITEM_BUY_AMMO, this, this.onClickBuyAmmo);
            ui.off(touch.ShopItem.TOUCH_EVENT_SHOPITEM_EQUIP, this, this.onClickEquip);
            ui.off(touch.ShopItem.TOUCH_EVENT_SHOPITEM_LEVEL_UP, this, this.onClickLevelUp);
            ui.off(touch.ShopItem.TOUCH_EVENT_SHOPITEM_TIP, this, this.onClickTip);
            ui.on(touch.ShopItem.TOUCH_EVENT_SHOPITEM_BUY_AMMO, this, this.onClickBuyAmmo);
            ui.on(touch.ShopItem.TOUCH_EVENT_SHOPITEM_EQUIP, this, this.onClickEquip);
            ui.on(touch.ShopItem.TOUCH_EVENT_SHOPITEM_LEVEL_UP, this, this.onClickLevelUp);
            ui.on(touch.ShopItem.TOUCH_EVENT_SHOPITEM_TIP, this, this.onClickTip);
        };
        /**
      * 获取已购买子弹次数
      */
        ShopControl.prototype.getBuyAmmoTimes = function (name) {
            var cacheData = touch.StorageData.instance.getValue(touch.EnumStorageDataName.SHOP_BUY_AMMO_TIMES_CACHE);
            if (cacheData != void 0) {
                var buyAmmoTimes = cacheData.getShopBuyAmmoTimes(name);
                if (buyAmmoTimes == void 0) {
                    buyAmmoTimes = 0;
                    cacheData.setShopBuyAmmoTimes(name, 0);
                    touch.StorageData.instance.setValue(touch.EnumStorageDataName.SHOP_BUY_AMMO_TIMES_CACHE, cacheData);
                    return buyAmmoTimes;
                }
                else {
                    return buyAmmoTimes;
                }
            }
        };
        /**
         * 获取当前升级次数
         */
        ShopControl.prototype.getLevelUpTimes = function (name) {
            var cacheData = touch.StorageData.instance.getValue(touch.EnumStorageDataName.SHOP_LEVELUP_TIMES_CACHE);
            if (cacheData != void 0) {
                var levelUpTimes = cacheData.getShopWeaponLevelUpTimes(name);
                if (levelUpTimes == void 0) {
                    levelUpTimes = 0;
                    cacheData.setShopWeaponLevelUpTimes(name, 0);
                    touch.StorageData.instance.setValue(touch.EnumStorageDataName.SHOP_LEVELUP_TIMES_CACHE, cacheData);
                    return levelUpTimes;
                }
                else {
                    return levelUpTimes;
                }
            }
        };
        /**
         * 购买子弹
         */
        ShopControl.prototype.onClickBuyAmmo = function (args) {
            var name = args.name;
            var cacheData = touch.StorageData.instance.getValue(touch.EnumStorageDataName.SHOP_BUY_AMMO_TIMES_CACHE);
            var times = cacheData.getShopBuyAmmoTimes(name) + 1;
            cacheData.setShopBuyAmmoTimes(name, times);
            touch.StorageData.instance.setValue(touch.EnumStorageDataName.SHOP_BUY_AMMO_TIMES_CACHE, cacheData);
            var data = args.getData();
            data.curBuyBulletTimes = times;
            args.setData(data);
            args.showbulletNum();
            //TODO 扣除金币	
        };
        /**
         * 点击装备
         */
        ShopControl.prototype.onClickEquip = function () {
        };
        /**
         * 点击升级
         */
        ShopControl.prototype.onClickLevelUp = function (args) {
            var name = args.name;
            var cacheData = touch.StorageData.instance.getValue(touch.EnumStorageDataName.SHOP_LEVELUP_TIMES_CACHE);
            var curLevel = cacheData.getShopWeaponLevelUpTimes(name) + 1;
            cacheData.setShopWeaponLevelUpTimes(name, curLevel);
            touch.StorageData.instance.setValue(touch.EnumStorageDataName.SHOP_LEVELUP_TIMES_CACHE, cacheData);
            var data = args.getData();
            data.curLevel = curLevel;
            args.setData(data);
            args.showLevelupInfo();
            //TODO 扣除金币
        };
        /**
         * 点击Tip
         */
        ShopControl.prototype.onClickTip = function () {
        };
        ShopControl.WEAPON_TYPE = "weapons";
        ShopControl.WEAPON_BOMB_TYPE = "explosive";
        ShopControl.WEAPON_DEFENSE_TYPE = "defense";
        ShopControl.SPECIAL_ITEM_TYPE = "special";
        return ShopControl;
    }(touch.MVCControl));
    touch.ShopControl = ShopControl;
})(touch || (touch = {}));
//# sourceMappingURL=ShopControl.js.map