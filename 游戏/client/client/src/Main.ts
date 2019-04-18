/**
 * 程序入口
 */
class Main {
    /**
	 * 资源加载数量
	 */
    private _resCount: number = 0;

    /**
     * 构造函数
     */
    constructor() {
        //初始化微信小游戏
        Laya.MiniAdpter.init(true, false);
        Laya.init(1334, 750, Laya.WebGL);
        //适配模式
        Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
        Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        
        UIConfig.closeDialogOnSide = false;
        if (touch.Env.debug) {
            Laya.Stat.show();
        }
        touch.WeChat.init();
        Laya.loader.load(["res/atlas/core.atlas",
            "res/atlas/index.atlas",
            "res/atlas/game.atlas",
            "res/atlas/fight.atlas"],
            Laya.Handler.create(this, this.onAtlasLoadComplete));
        let ruizi = new Laya.BitmapFont();
        ruizi.loadFont("font/ruizi.fnt", new Laya.Handler(this, this.onFontLoaded, ["ruizi", ruizi]));
        Laya.loader.load(touch.GameData.getUrls(), Laya.Handler.create(this, this.onLoadGameData))
    }

    /**
	 * 资源加载完毕
	 * @param result 
	 */
    private onAtlasLoadComplete(result: boolean): void {
        if (!result) {
            alert("资源加载失败！");
            return;
        }
        this._resCount++;
        this.checkLoadedComplete();
    }

	/**
	 * 加载字体
	 */
    private onFontLoaded(name: string, font: Laya.BitmapFont): void {
        Laya.Text.registerBitmapFont(name, font);
        this._resCount++;
        this.checkLoadedComplete();
    }

    /**
     * 加载gamedata
     */
    private onLoadGameData(result: boolean): void {
        if (!result) {
            alert("gamedata加载失败！");
            return;
        }
        this._resCount++;
        this.checkLoadedComplete();
        Laya.LocalStorage.clear();
    }

	/**
	 * 检查是否加载完毕
	 */
    private checkLoadedComplete(): void {
        if (this._resCount >= 3) {
            touch.GameData.init()
            touch.GameCenter.create();
            touch.GameCenter.instance.initialize();
        }
        Laya.LocalStorage.clear();
    }
}
new Main();