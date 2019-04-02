var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
     * 怪物管理器
     */
    var MonsterView = /** @class */ (function (_super) {
        __extends(MonsterView, _super);
        function MonsterView() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /** 最大id */
            _this._maxId = 0;
            /** 怪物字典 */
            _this._monsterDic = new Laya.Dictionary();
            /** 父节点 */
            _this._parent = null;
            return _this;
        }
        /**
         * 初始化
         */
        MonsterView.prototype.initialize = function () {
            var layerView = this.getView(touch.FightSceneLayerView);
            var layer = layerView.getLayer(touch.EnumLayer.FightEntity);
            this._parent = layer.role;
        };
        /**
         * 反初始化
         * @param 初始化参数
         */
        MonsterView.prototype.uninitialize = function () {
            for (var _i = 0, _a = this._monsterDic.values; _i < _a.length; _i++) {
                var v = _a[_i];
                v.destroy();
            }
            this._monsterDic.clear();
            this._parent = null;
        };
        /**
         * 创建怪物
         */
        MonsterView.prototype.createMonster = function (name) {
            var data = touch.GameData.getMonsterDataByName(name);
            if (data == null) {
                return null;
            }
            var monster = new touch.MonsterNode(++this._maxId, data);
            this._parent.addChild(monster);
            this._monsterDic.set(monster.id, monster);
            return monster;
        };
        /**
         * 移除怪物
         */
        MonsterView.prototype.removeMonseter = function (monster) {
            var id = monster.id;
            monster.destroy();
            this._monsterDic.remove(id);
        };
        return MonsterView;
    }(touch.MVCView));
    touch.MonsterView = MonsterView;
})(touch || (touch = {}));
//# sourceMappingURL=MonsterView.js.map