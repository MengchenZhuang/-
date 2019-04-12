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
 * jarekzha
 */
var touch;
(function (touch) {
    /**
     * 怪物节点
     */
    var MonsterNode = /** @class */ (function (_super) {
        __extends(MonsterNode, _super);
        /**
         * 构造
         */
        function MonsterNode(id, data) {
            var _this = _super.call(this) || this;
            /** id */
            _this._id = 0;
            /** 属性 */
            _this._attr = null;
            /** 移动驱动 */
            _this._move = null;
            if (touch.Env.debug) {
                _this.graphics.drawCircle(0, -20, 20, "#888888");
            }
            _this._id = id;
            _this._attr = new touch.MonsterAttr(data);
            _this._move = new touch.MonsterMoveDriver(_this);
            return _this;
        }
        /**
         * 销毁
         */
        MonsterNode.prototype.destroy = function () {
            if (this._move != null) {
                this._move.destory();
                this._move = null;
            }
            this._attr = null;
            _super.prototype.removeSelf.call(this);
            _super.prototype.destroy.call(this);
        };
        /**
         * 开始运行
         */
        MonsterNode.prototype.start = function () {
            this._move.start();
        };
        Object.defineProperty(MonsterNode.prototype, "id", {
            /** id */
            get: function () { return this._id; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MonsterNode.prototype, "attr", {
            /** 属性 */
            get: function () { return this._attr; },
            enumerable: true,
            configurable: true
        });
        return MonsterNode;
    }(Laya.Sprite));
    touch.MonsterNode = MonsterNode;
})(touch || (touch = {}));
//# sourceMappingURL=MonsterNode.js.map