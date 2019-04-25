class HeroUI extends egret.Sprite{
    


    private warea = {x:200,y:200};
    private heroShape:egret.Shape = new egret.Shape();

    private shape:egret.Shape = new egret.Shape();

    public hero:Hero;


    constructor(){
        super();

        this.width = 60;
        this.height = 60;
        this.hero = new Hero("hero",this.warea.x,this.warea.y,0,1,3);
        this.addChild(this.hero);
        RoleManager.instance.addNPC(this.hero,this.hero.x,this.hero.y);

        this.hero.touchEnabled = true;
        this.hero.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBeginHandler, this);

    }


    //private drapShape:egret.Shape;
    private onBeginHandler(e:egret.TouchEvent):void {
        e.stopImmediatePropagation();
        
        //this.drapShape = <egret.Shape>e.currentTarget;
        this.hero.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBeginHandler, this);
        
        this.hero.touchEnabled = false;
        //console.log("----------this.hero.x, this.hero.x", this.hero.x, this.hero.x);
        //console.log("----------e.stageX, e.stageY", e.stageX, e.stageY);
        
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMoveHandler, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onEndHandler, this);
    }    
    
    private onMoveHandler(e:egret.TouchEvent):void {

        this.hero.x = e.stageX;
        this.hero.y = e.stageY;
    }

   private onEndHandler(e:egret.TouchEvent):void {
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMoveHandler, this);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onEndHandler, this);
        
        this.hero.touchEnabled = true;;
        
        this.hero.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBeginHandler, this);
        //console.log("this.heroShape.x, this.heroShape.x", this.hero.x, this.hero.x);
        //console.log("e.stageX, e.stageY", e.stageX, e.stageY);
    }















}