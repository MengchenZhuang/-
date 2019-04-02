/**
 * jarekzha
 */
var touch;
(function (touch) {
    /**
     * 战斗上下文
     */
    var FightContext = /** @class */ (function () {
        function FightContext() {
        }
        /**
         * 清空上下文
         */
        FightContext.clear = function () {
            this.progress = null;
            this.area = null;
            this.sceneView = null;
            this.houseView = null;
            this.monsterView = null;
        };
        /**战斗进度 */
        FightContext.progress = null;
        /**战斗区域 */
        FightContext.area = null;
        /**场景 */
        FightContext.sceneView = null;
        /**房子 */
        FightContext.houseView = null;
        /**怪物 */
        FightContext.monsterView = null;
        return FightContext;
    }());
    touch.FightContext = FightContext;
})(touch || (touch = {}));
//# sourceMappingURL=FightContext.js.map