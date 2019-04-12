var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var music;
(function (music) {
    /**
     * 统一的音效管理器
     */
    var Music = (function () {
        function Music() {
            if (Music.instance) {
                return;
            }
            this.bgmAudio = RES.getRes('bgm_mp3');
            this.shootAudio = RES.getRes('bullet_mp3');
            this.boomAudio = RES.getRes('boom_mp3');
            this.playBgm();
        }
        Music.getInstance = function () {
            if (Music.instance == null) {
                Music.instance = new Music();
            }
            return Music.instance;
        };
        Music.prototype.playBgm = function () {
            this.bgmAudio.play();
        };
        Music.prototype.playShoot = function () {
            this.shoot = this.shootAudio.play(0, 1);
        };
        Music.prototype.playExplosion = function () {
            this.boom = this.boomAudio.play(0, 1);
        };
        Music.instance = null;
        return Music;
    }());
    music.Music = Music;
    __reflect(Music.prototype, "music.Music");
})(music || (music = {}));
//# sourceMappingURL=music.js.map