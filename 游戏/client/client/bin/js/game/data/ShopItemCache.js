/**
* xlc
*/
var touch;
(function (touch) {
    /**
     * 商城购买次数缓存
     */
    var ShopBuyAmmoTimesCacheDic = /** @class */ (function () {
        function ShopBuyAmmoTimesCacheDic() {
            this._shopBuyAmmoTimesDic = new Laya.Dictionary();
        }
        /**设置 */
        ShopBuyAmmoTimesCacheDic.prototype.setShopBuyAmmoTimes = function (name, value) {
            this._shopBuyAmmoTimesDic.set(name, value);
        };
        ShopBuyAmmoTimesCacheDic.prototype.getShopBuyAmmoTimes = function (name) {
            return this._shopBuyAmmoTimesDic.get(name);
        };
        return ShopBuyAmmoTimesCacheDic;
    }());
    touch.ShopBuyAmmoTimesCacheDic = ShopBuyAmmoTimesCacheDic;
    /**
     * 商城武器升级次数
     */
    var ShopWeaponLevelUpTimesCacheDic = /** @class */ (function () {
        function ShopWeaponLevelUpTimesCacheDic() {
            this._shopWeaponLevelUpTimesDic = new Laya.Dictionary();
        }
        /**设置 */
        ShopWeaponLevelUpTimesCacheDic.prototype.setShopWeaponLevelUpTimes = function (name, value) {
            this._shopWeaponLevelUpTimesDic.set(name, value);
        };
        ShopWeaponLevelUpTimesCacheDic.prototype.getShopWeaponLevelUpTimes = function (name) {
            return this._shopWeaponLevelUpTimesDic.get(name);
        };
        return ShopWeaponLevelUpTimesCacheDic;
    }());
    touch.ShopWeaponLevelUpTimesCacheDic = ShopWeaponLevelUpTimesCacheDic;
    /**
     * 商城Item解锁状态缓存
     */
    var ShopItemOpenCache = /** @class */ (function () {
        function ShopItemOpenCache() {
        }
        return ShopItemOpenCache;
    }());
    touch.ShopItemOpenCache = ShopItemOpenCache;
})(touch || (touch = {}));
//# sourceMappingURL=ShopItemCache.js.map