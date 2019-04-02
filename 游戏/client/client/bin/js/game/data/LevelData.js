/**
 * jarekzha
 */
var touch;
(function (touch) {
    /**
     * 关卡数据
     */
    var LevelData = /** @class */ (function () {
        function LevelData() {
        }
        /**
         * 初始化
         */
        LevelData.init = function () {
            this.loadLevels(this.castFileToUrl(this._challengeLevelsFileName));
            for (var _i = 0, _a = this._normalLevels; _i < _a.length; _i++) {
                var f = _a[_i];
                this.loadLevels(this.castFileToUrl(f));
            }
            for (var _b = 0, _c = this._hardLevels; _b < _c.length; _b++) {
                var f = _c[_b];
                this.loadLevels(this.castFileToUrl(f));
            }
        };
        /**
         * 获取所有关卡url
         */
        LevelData.getUrls = function () {
            var urls = new Array();
            for (var _i = 0, _a = this._normalLevels; _i < _a.length; _i++) {
                var f = _a[_i];
                urls.push(this.castFileToUrl(f));
            }
            for (var _b = 0, _c = this._hardLevels; _b < _c.length; _b++) {
                var f = _c[_b];
                urls.push(this.castFileToUrl(f));
            }
            urls.push(this.castFileToUrl(this._challengeLevelsFileName));
            return urls;
        };
        /**
         * 通过id获取关卡数据
         */
        LevelData.getById = function (levelId) {
            return this._levelMap.get(levelId);
        };
        /**
         * 文件到url
         */
        LevelData.castFileToUrl = function (name) {
            return 'res/gamedata/levels/' + name + '.json';
        };
        /**
         * 加载关卡
         */
        LevelData.loadLevels = function (url) {
            var levels = Laya.loader.getRes(url);
            for (var _i = 0, levels_1 = levels; _i < levels_1.length; _i++) {
                var l = levels_1[_i];
                this._levelMap.set(l.id, l);
            }
        };
        /** 挑战关卡文件名称 */
        LevelData._challengeLevelsFileName = 'challengeLevels';
        /** 普通关卡 */
        LevelData._normalLevels = [
            'episode01',
            'episode02',
            'episode03',
            'episode04',
            'episode05',
            'episode06',
            'episode07',
            'episode08',
            'episode09',
        ];
        /** 困难关卡 */
        LevelData._hardLevels = [
            'episode01_hard',
            'episode02_hard',
            'episode03_hard',
            'episode04_hard',
            'episode05_hard',
            'episode06_hard',
            'episode07_hard',
            'episode08_hard',
            'episode09_hard',
        ];
        /** 关卡映射表 */
        LevelData._levelMap = new Laya.Dictionary();
        return LevelData;
    }());
    touch.LevelData = LevelData;
})(touch || (touch = {}));
//# sourceMappingURL=LevelData.js.map