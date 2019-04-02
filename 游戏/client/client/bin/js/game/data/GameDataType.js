/**
 * jarekzha
 */
var touch;
(function (touch) {
    /**
     * 关卡类型
     */
    var LevelType = /** @class */ (function () {
        function LevelType() {
        }
        /**普通关卡 */
        LevelType.Normal = 'R';
        /**困难关卡 */
        LevelType.Hard = 'H';
        /**挑战关卡 */
        LevelType.Challenge = 'C';
        return LevelType;
    }());
    touch.LevelType = LevelType;
})(touch || (touch = {}));
//# sourceMappingURL=GameDataType.js.map