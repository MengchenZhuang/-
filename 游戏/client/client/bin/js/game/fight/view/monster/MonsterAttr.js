/**
 * jarekzha
 */
var touch;
(function (touch) {
    /**
     * 怪物属性
     */
    var MonsterAttr = /** @class */ (function () {
        /**
         * 构造
         */
        function MonsterAttr(data) {
            /** 怪物数据 */
            this._data = null;
            this._data = data;
        }
        Object.defineProperty(MonsterAttr.prototype, "data", {
            /** 怪物数据 */
            get: function () { return this._data; },
            enumerable: true,
            configurable: true
        });
        return MonsterAttr;
    }());
    touch.MonsterAttr = MonsterAttr;
})(touch || (touch = {}));
//# sourceMappingURL=MonsterAttr.js.map