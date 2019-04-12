class HeroUI extends egret.Sprite{
    


    private warea = {x:200,y:200};
    private heroShape:egret.Shape = new egret.Shape();

    private shape:egret.Shape = new egret.Shape();

    public hero:Hero;


    constructor(){
        super();

        this.hero = new Hero(this.warea.x,this.warea.y,0,10,0xff0000);
        this.addChild(this.hero);

        this.hero.shape.touchEnabled = true;
        this.hero.shape.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBeginHandler, this);

    }


    //private drapShape:egret.Shape;
    private onBeginHandler(e:egret.TouchEvent):void {
        e.stopImmediatePropagation();
        
        //this.drapShape = <egret.Shape>e.currentTarget;
        this.hero.shape.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBeginHandler, this);
        
        this.hero.shape.touchEnabled = false;
        console.log("----------this.heroShape.x, this.heroShape.x", this.hero.shape.x, this.hero.shape.x);
        console.log("----------e.stageX, e.stageY", e.stageX, e.stageY);
        
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMoveHandler, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onEndHandler, this);
    }    
    
    private onMoveHandler(e:egret.TouchEvent):void {

        this.hero.shape.x = e.stageX;
        this.hero.shape.y = e.stageY;
    }

   private onEndHandler(e:egret.TouchEvent):void {
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMoveHandler, this);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onEndHandler, this);
        
        this.hero.shape.touchEnabled = true;;
        
        this.hero.shape.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBeginHandler, this);
        console.log("this.heroShape.x, this.heroShape.x", this.hero.shape.x, this.hero.shape.x);
        console.log("e.stageX, e.stageY", e.stageX, e.stageY);
    }















}