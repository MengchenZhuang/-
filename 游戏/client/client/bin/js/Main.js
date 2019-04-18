/**
 * 程序入口
 */
var Main = /** @class */ (function () {
    /**
     * 构造函数
     */
    function Main() {
        /**
         * 资源加载数量
         */
        this._resCount = 0;
        //初始化微信小游戏
        Laya.MiniAdpter.init(true, false);
        Laya.init(1334, 750, Laya.WebGL);
        //适配模式
        Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
        Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        var quadtree = new window["Quadtree"]({ x: 0, y: 0, width: Laya.stage.width, height: Laya.stage.height }, 10, 10);
        UIConfig.closeDialogOnSide = false;
        if (touch.Env.debug) {
            Laya.Stat.show();
        }
        touch.WeChat.init();
        Laya.loader.load(["res/atlas/core.atlas",
            "res/atlas/index.atlas",
            "res/atlas/game.atlas",
            "res/atlas/fight.atlas"], Laya.Handler.create(this, this.onAtlasLoadComplete));
        var ruizi = new Laya.BitmapFont();
        ruizi.loadFont("font/ruizi.fnt", new Laya.Handler(this, this.onFontLoaded, ["ruizi", ruizi]));
        Laya.loader.load(touch.GameData.getUrls(), Laya.Handler.create(this, this.onLoadGameData));
    }
    /**
     * 资源加载完毕
     * @param result
     */
    Main.prototype.onAtlasLoadComplete = function (result) {
        if (!result) {
            alert("资源加载失败！");
            return;
        }
        this._resCount++;
        this.checkLoadedComplete();
    };
    /**
     * 加载字体
     */
    Main.prototype.onFontLoaded = function (name, font) {
        Laya.Text.registerBitmapFont(name, font);
        this._resCount++;
        this.checkLoadedComplete();
    };
    /**
     * 加载gamedata
     */
    Main.prototype.onLoadGameData = function (result) {
        if (!result) {
            alert("gamedata加载失败！");
            return;
        }
        this._resCount++;
        this.checkLoadedComplete();
        Laya.LocalStorage.clear();
    };
    /**
     * 检查是否加载完毕
     */
    Main.prototype.checkLoadedComplete = function () {
        if (this._resCount >= 3) {
            touch.GameData.init();
            touch.GameCenter.create();
            touch.GameCenter.instance.initialize();
        }
        Laya.LocalStorage.clear();
    };
    return Main;
}());
new Main();
//# sourceMappingURL=Main.js.map