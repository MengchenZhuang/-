var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var utils;
(function (utils) {
    var Pool = (function () {
        function Pool() {
            this._poolDic = {};
            if (Pool._instance) {
                return;
            }
            this._poolDic = {};
        }
        Pool.getInstance = function () {
            if (Pool._instance == null) {
                console.log("Pool an only use getInstance() to get an instance!");
                Pool._instance = new Pool();
            }
            return Pool._instance;
        };
        Pool.prototype.getPoolBySign = function (name) {
            return this._poolDic[name] || (this._poolDic[name] = []);
        };
        Pool.prototype.getItemByClass = function (name, className) {
            var pool = this.getPoolBySign(name);
            var result = pool.length ? pool.shift() : new className();
            return result;
        };
        Pool.prototype.recover = function (name, instance) {
            this.getPoolBySign(name).push(instance);
        };
        Pool._instance = null;
        return Pool;
    }());
    utils.Pool = Pool;
    __reflect(Pool.prototype, "utils.Pool");
})(utils || (utils = {}));
//# sourceMappingURL=pool.js.map