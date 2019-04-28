  /**
    * 游戏容器类
    * by dily
    * (c) copyright 2014 - 2035
    * All Rights Reserved. 
    * EgerPro显示对象层级
    * Main-GameScene（sceneLayer、mainLayer、popLayer、effectLayer、maskLayer、loadLayer）
    * 
    */
class GameLayerManager extends fairygui.GComponent{

    // 场景层 如 战场、主城、副本战场之类的
    public sceneLayer:fairygui.GComponent = new fairygui.GComponent();
    // 主UI层 如 底部功能栏
    public mainLayer:fairygui.GComponent = new fairygui.GComponent();
    // 弹窗层 如 设置、背包、装备之类的
    public panelLayer:fairygui.GComponent = new fairygui.GComponent();
    // 特效层 如 闪烁、飘字之类的
    public effectLayer:fairygui.GComponent = new fairygui.GComponent();   
    // 通讯遮罩层 和服务器通讯UI
    public maskLayer:fairygui.GComponent = new fairygui.GComponent();
    // 加载遮罩层 场景切换的时候加载资源UI
    public loadLayer:fairygui.GComponent = new fairygui.GComponent();

    private static _instance:GameLayerManager; 

    //构造方法
    public constructor(){
        super();
        this.init();
    }

    //游戏容器管理器单例
    public static gameLayer():GameLayerManager  
    {  
        if(!this._instance)  
            this._instance = new GameLayerManager();  
        return this._instance;  
    }  

    //初始化场景类
    public init():void {

        this.touchThrough = true;
        this.sceneLayer.touchThrough = true;
        this.mainLayer.touchThrough = true;
        this.panelLayer.touchThrough = true;
        this.effectLayer.touchThrough = true;
        this.maskLayer.touchThrough = true;
        this.loadLayer.touchThrough = true;
        this.addChild(this.sceneLayer);
        this.addChild(this.mainLayer);
        this.addChild(this.panelLayer);
        this.addChild(this.effectLayer);
        this.addChild(this.maskLayer);
        this.addChild(this.loadLayer);
    }

}

