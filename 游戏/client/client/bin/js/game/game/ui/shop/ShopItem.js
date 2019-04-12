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
* name
*/
var touch;
(function (touch) {
    var ShopItem = /** @class */ (function (_super) {
        __extends(ShopItem, _super);
        function ShopItem() {
            var _this = _super.call(this) || this;
            _this.init();
            return _this;
        }
        /**
         * 销毁函数
         */
        ShopItem.prototype.destroy = function () {
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
            _super.prototype.destroy.call(this);
        };
        /**
         * 初始化
         */
        ShopItem.prototype.init = function () {
            this.btnBuyAmmo.clickHandler = new Laya.Handler(this, this.onClickBuyAmmo, null, false);
            this.btnLevelUp.clickHandler = new Laya.Handler(this, this.onClickLevelUp, null, false);
            this.btnEquip.clickHandler = new Laya.Handler(this, this.onClickEquip, null, false);
            this.imgIcon.on(Laya.Event.CLICK, this, this.onClickIcon);
        };
        /**
         * 设置数据
         * @param data 数据
         */
        ShopItem.prototype.setData = function (data) {
            this._data = data;
            this.name = this._data.name;
        };
        /**
         * 获取数据
         */
        ShopItem.prototype.getData = function () {
            return this._data;
        };
        /**
         * 更新
         * @param type 页签索引
         * @param index 项目索引
         */
        ShopItem.prototype.update = function (type, index) {
            this.showDifferenceStyle();
            this.showbulletNum();
            this.showBuyBulletPrice();
            this.showLevelupPrice();
            this.showIcon(type, index);
            this.showLevelupInfo();
        };
        /**
         * 购买子弹
         */
        ShopItem.prototype.onClickBuyAmmo = function () {
            this.event(ShopItem.TOUCH_EVENT_SHOPITEM_BUY_AMMO, this);
        };
        /**
         * 升级
         */
        ShopItem.prototype.onClickLevelUp = function () {
            this.event(ShopItem.TOUCH_EVENT_SHOPITEM_LEVEL_UP, this);
        };
        /**
         * 装备
         * */
        ShopItem.prototype.onClickEquip = function () {
            this.event(ShopItem.TOUCH_EVENT_SHOPITEM_EQUIP);
        };
        /**
         * 点击icon获取提示
         */
        ShopItem.prototype.onClickIcon = function () {
            this.event(ShopItem.TOUCH_EVENT_SHOPITEM_TIP);
        };
        /**显示不同的样式 */
        ShopItem.prototype.showDifferenceStyle = function () {
            if (this._data.isLock == true) {
                this.imgBG.skin = "game/img_shop_bg_1.png";
                this.btnBuyAmmo.visible = false;
                this.btnLevelUp.skin = "game/Shop_WeaponUnlock_01.png";
                this.labelDescClock.visible = true;
                this.imgClock.visible = true;
            }
            else {
                this.imgBG.skin = "game/img_shop_bg_0.png";
                this.btnBuyAmmo.visible = true;
                this.btnLevelUp.skin = "game/btn_green.png";
                this.labelDescClock.visible = false;
                this.imgClock.visible = false;
            }
        };
        /**
         * 设置icon皮肤
         */
        ShopItem.prototype.showIcon = function (type, index) {
            var skin = "";
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
        };
        /**
         *当前子弹数量
         */
        ShopItem.prototype.showbulletNum = function () {
            this.labelName.text = this._data.name;
            if (this._data.curBuyBulletTimes * this._data.onceCanBuyNum >= this._data.maxCanBuyNum) {
                this.labelNum.text = this._data.maxCanBuyNum.toString();
            }
            else {
                this.labelNum.text = (this._data.curBuyBulletTimes * this._data.onceCanBuyNum).toString();
            }
        };
        /**
         * 购买子弹价格
         */
        ShopItem.prototype.showBuyBulletPrice = function () {
            this.labelPrice.text = this._data.bulletPrice.toString();
        };
        /**
         * 升级武器价格
         */
        ShopItem.prototype.showLevelupPrice = function () {
            this.labelLevelUp.text = this._data.levelUpPrice.toString();
        };
        /**
         * 当前升级信息
         */
        ShopItem.prototype.showLevelupInfo = function () {
            var curLevel = this._data.curLevel;
            this.hbox_levelUp.removeChildren();
            for (var i = 0; i < this._data.maxLevelupNum; i++) {
                var img = new Laya.Image();
                img.name = "item" + i;
                if (i <= curLevel) {
                    img.skin = "game/img_shop_green.png";
                }
                else if (i == curLevel + 1) {
                    img.skin = "game/img_shop_yello.png";
                }
                else if (i > curLevel && (i != curLevel + 1)) {
                    img.skin = "game/img_shop_gray.png";
                }
                this.hbox_levelUp.addChildren(img);
            }
        };
        /**武器最大等级 */
        ShopItem.MAXLEVEL = 7;
        /**购买子弹事件 */
        ShopItem.TOUCH_EVENT_SHOPITEM_BUY_AMMO = "TOUCH_EVENT_SHOPITEM_BUY_AMMO";
        /**升级武器事件 */
        ShopItem.TOUCH_EVENT_SHOPITEM_LEVEL_UP = "TOUCH_EVENT_SHOPITEM_LEVEL_UP";
        /**装备事件 */
        ShopItem.TOUCH_EVENT_SHOPITEM_EQUIP = "TOUCH_EVENT_SHOPITEM_EQUIP";
        /**提示事件 */
        ShopItem.TOUCH_EVENT_SHOPITEM_TIP = "TOUCH_EVENT_SHOPITEM_TIP";
        return ShopItem;
    }(ui.ShopItemUI));
    touch.ShopItem = ShopItem;
})(touch || (touch = {}));
//# sourceMappingURL=ShopItem.js.map