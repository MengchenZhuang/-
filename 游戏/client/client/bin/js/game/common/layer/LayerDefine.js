/**
* momo
*/
var touch;
(function (touch) {
    /**
     * 场景层枚举
     */
    var EnumLayer;
    (function (EnumLayer) {
        EnumLayer[EnumLayer["GameForeGround"] = 0] = "GameForeGround";
        EnumLayer[EnumLayer["GameEntity"] = 1] = "GameEntity";
        EnumLayer[EnumLayer["GameBackGround"] = 2] = "GameBackGround";
        EnumLayer[EnumLayer["FightBackGround"] = 3] = "FightBackGround";
        EnumLayer[EnumLayer["FightEntity"] = 4] = "FightEntity";
        EnumLayer[EnumLayer["FightUI"] = 5] = "FightUI";
        EnumLayer[EnumLayer["FightForeGround"] = 6] = "FightForeGround";
    })(EnumLayer = touch.EnumLayer || (touch.EnumLayer = {}));
})(touch || (touch = {}));
//# sourceMappingURL=LayerDefine.js.map