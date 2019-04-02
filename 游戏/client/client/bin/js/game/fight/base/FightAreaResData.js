/**
 * jarekzha
 */
var touch;
(function (touch) {
    /**
     * 战斗区域定义,以右下角为原点
     */
    var FightAreaResData = /** @class */ (function () {
        function FightAreaResData() {
        }
        /**地板的上下边 */
        FightAreaResData.FloorBottomY = -10;
        FightAreaResData.FloorTopY = 180;
        /**怪物出生的x点 */
        FightAreaResData.MonsterBornX = 80;
        return FightAreaResData;
    }());
    touch.FightAreaResData = FightAreaResData;
})(touch || (touch = {}));
//# sourceMappingURL=FightAreaResData.js.map