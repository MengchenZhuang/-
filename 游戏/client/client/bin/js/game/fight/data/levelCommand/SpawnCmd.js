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
     * 创建怪物命令
     * spawn <MonsterType> [<childMonster>] <Quantity> <Pause>
        - spawns <Quantity> number of <MonsterType> monsters, with
            pause between them of <Pause> seconds
        - Example: spawn Crocodile 3 2
        - Example: spawnk  "Monsters in Box" [Naked Turtle,Naked Turtle] 4-5 2
     */
    var SpawnCmd = /** @class */ (function (_super) {
        __extends(SpawnCmd, _super);
        /**
         * 构造
         */
        function SpawnCmd(data) {
            var _this = _super.call(this, data) || this;
            // 怪物名字
            _this._monsterName = "";
            // 子怪物名字
            _this._childMonsterName = "";
            // 数字字符串
            _this._count = 0;
            // 暂停时间
            _this._pause = 0;
            _this.parseParam();
            return _this;
        }
        /**
         * 运行
         */
        SpawnCmd.prototype.run = function () {
            if (this._count <= 0) {
                this.onRunOver();
                return;
            }
            this.trySpawnMonster();
        };
        /**
         * 召唤怪物
         */
        SpawnCmd.prototype.trySpawnMonster = function () {
            this._count--;
            // context
            var monsterView = touch.FightContext.monsterView;
            var area = touch.FightContext.area;
            // 创建怪物
            var monster = monsterView.createMonster(this._monsterName);
            var bornX = area.monsterBornX;
            var bornY = area.randomYInFloor;
            monster.pos(bornX, bornY);
            monster.start();
            // 继续召唤
            if (this._count > 0) {
                if (this._pause > 0) {
                    Laya.timer.once(this._pause * 1000, this, this.trySpawnMonster);
                }
                else {
                    this.trySpawnMonster();
                }
            }
            else {
                this.onRunOver();
            }
        };
        /**
         * 解析参数
         */
        SpawnCmd.prototype.parseParam = function () {
            var param = this.data.param;
            var paramCountStr = "";
            var paramPauseStr = "";
            if (param.length == 3) {
                this._monsterName = param[0];
                paramCountStr = param[1];
                paramPauseStr = param[2];
            }
            else if (param.length == 4) {
                this._monsterName = param[0];
                this._childMonsterName = param[1];
                paramCountStr = param[2];
                paramPauseStr = param[3];
            }
            else {
                console.error("spawn cmd param invalid: " + this.data.param);
                return;
            }
            // 次数
            this._count = this.calcRandomCount(paramCountStr);
            // 暂停时间
            this._pause = Number(paramPauseStr);
        };
        /**
         * 计算随机次数
         */
        SpawnCmd.prototype.calcRandomCount = function (str) {
            if (str.indexOf('-') < 0) {
                return Number(str);
            }
            else {
                var counts = str.split('-');
                var min = Number(counts[0]);
                var max = Number(counts[1]);
                return touch.MathUtil.randomInt(min, max - 1);
            }
        };
        return SpawnCmd;
    }(touch.LevelCmd));
    touch.SpawnCmd = SpawnCmd;
})(touch || (touch = {}));
//# sourceMappingURL=SpawnCmd.js.map