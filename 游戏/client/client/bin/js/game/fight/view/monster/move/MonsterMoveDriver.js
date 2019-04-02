/**
 * jarekzha
 */
var touch;
(function (touch) {
    /**
     * 怪物移动驱动器
     */
    var MonsterMoveDriver = /** @class */ (function () {
        /**
         * 构造
         */
        function MonsterMoveDriver(monster) {
            /**怪物节点 */
            this._monster = null;
            this._monster = monster;
        }
        /**
         * 开始
         */
        MonsterMoveDriver.prototype.start = function () {
            Laya.timer.frameLoop(1, this, this.onLoop);
        };
        /**
         * 销毁
         */
        MonsterMoveDriver.prototype.destory = function () {
            Laya.timer.clear(this, this.onLoop);
        };
        /**
         * 每帧更新
         */
        MonsterMoveDriver.prototype.onLoop = function () {
            // 计算移动线段
            var speed = this._monster.attr.data.speed;
            var moveOffset = this._monster.attr.data.speed * -1 * Laya.timer.delta / 1000;
            var startPoint = new Laya.Point(this._monster.x, this._monster.y);
            var stopPoint = new Laya.Point(this._monster.x + moveOffset, this._monster.y);
            var moveSegment = new touch.Segment(startPoint, stopPoint);
            // 碰撞判定
            var hitBorder = touch.LineIntersectionTool.segment2Segment(moveSegment, touch.FightContext.houseView.border);
            if (hitBorder == null) {
                this._monster.pos(stopPoint.x, stopPoint.y);
            }
            else {
                this._monster.pos(hitBorder.x, hitBorder.y);
            }
        };
        return MonsterMoveDriver;
    }());
    touch.MonsterMoveDriver = MonsterMoveDriver;
})(touch || (touch = {}));
//# sourceMappingURL=MonsterMoveDriver.js.map