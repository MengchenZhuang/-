/**
 * jarekzha
 */
var touch;
(function (touch) {
    /**
     * 战斗资源配置
     */
    var FightResData = /** @class */ (function () {
        function FightResData() {
        }
        /**
         * 获取关卡背景图url
         */
        FightResData.getLevelBGUrl = function (levelName) {
            var file = "";
            var levelType = levelName[0];
            if (levelType == touch.LevelType.Challenge) {
                file = "ChallengeLevel_Background.jpg";
            }
            else {
                var episode = levelName[1];
                file = "BackgroundEpisode" + episode + ".jpg";
            }
            return "bg/" + file;
        };
        return FightResData;
    }());
    touch.FightResData = FightResData;
})(touch || (touch = {}));
//# sourceMappingURL=FightResData.js.map