class Npc extends egret.Sprite{
     //画圆
    private _shape:egret.Shape;

    private _score:number;

    private _color:number;

    //速度
    private _speed:number;
    //大小
    private _size:number;
    //方向
    private _dir:touch.Vector;
    /**唯一id*/
    protected objectID:string;
    /** 碰撞边界*/
    private _custombound:any;
    private checkpoint:egret.Point;

    private _collisionid:string;
    private _type:string;

    /**图片盒子 */
    private _picBoxs:Array<LBitmap>;

    /**碰撞区域集合 */
    private _hitareas:Array<HitArea>;


    constructor(speed,size){
        super();

        this._picBoxs = [];
        this._speed = speed;
        this._size = size;

        //TODO:绘出碰撞区域或其他辅助在子类中绘制
        // this._shape = this.drawCircle(x,y,color,radio);
        // this._shape.x = x;
        // this._shape.y = y;
        // this._color = color;
        this._score = 1;

        //给图片赋值
        // this.pic.x = x;
        // this.pic.y = y;
        // this.pic.texture = RES.getRes("");

        this._custombound = {x:0,y:0,width:1,height:1};
		this.checkpoint = new egret.Point();


        // this.initNPC();

    }


    
    // //初始化赋值
    // private initNPC():void {
    //     //将图片资源加入
    //     // var shape:egret.Shape = this._shape;
    //     // this.addChild(shape);
    // }

    /**设置图片资源
     * 将要显示的图片加入统一的盒子中，主要为了白细胞小弟
     *  TODO:不同资源图片不同情况不统一显示*/
    public set picBox(pics){
        this._picBoxs = pics;

    }
    public get picBox():Array<LBitmap>{
        return this._picBoxs;
    }

    public get ObjectID():string
    {
        return this.objectID;
    }

    public set ObjectID(value:string)
    {
        this.objectID = value;
    }

    // public get shape(){
    //     return this._shape;
    // }

    // public get x():number{
    //     return this._shape.x;
    // }
    // public set x(x:number){
    //     this._shape.x = x;
    // }

    // public get y():number{
    //     return this._shape.y;
    // }

    // public set y(y:number){
    //     this._shape.y = y;
    // }


    /**缩放大小 */
    public get size():number{
        return this._size;
    }

    public set type(value:string)
    {
        this._type = value;
    }
    public get type():string
    {
        return this._type;
    }



    public get speed():number{
        return this._speed;
    }

    public set speed(speed:number){
        this._speed = 10 - this._score;
        if(this._speed < 1)
        {
            this._speed = 1;
        }
    }

    public set dir(value:touch.Vector)
    {
        this._dir = value;
    }
    public get dir():touch.Vector
    {
        return this._dir;
    }

   public get score():number{
       //this._shape.scaleX = this._radio;
        return this._score;
    }

    public set score(score:number){
        this._score = score;
        // this._shape.scaleX = score;
        // this._shape.scaleY = score;
        this._size = 5 * score;
        this._speed = 10 - this._score;
        if(this._speed < 1)
        {
            this._speed = 1;
        }


    }

    public setCollisionID(id:string)
    {
        this._collisionid = id;
    }
    public get collisionID():string
    {
        return this._collisionid;
    }

    /**设置bound*/
    public setCustomBound(pwidth:number,pheight:number):void
    {
        if(pwidth<=0||pheight<=0)throw Error("对象bound设置错误!");	
        this._custombound={x:this.x,y:this.y,width:pwidth,height:pheight};
    }
    /**获取bound */
    public getCustomBound():any
    {
        this._custombound.x = this.x;
        this._custombound.y = this.y;
        this._custombound.objectID= this.objectID;
        if(this._custombound.width<=0||this._custombound.height<=0)
        {
            throw Error("对象bound设置错误!");
        }
        return this._custombound;
    }



    /**加入四叉树，子类复写可以不加入*/
    public needJoinQuadtree(quadtree:any):void
    {
        quadtree.insert(this.getCustomBound());
    }

    /**点碰撞检测*/
    public checkPointHit(stageX:number,stageY:number):any
    {
        if(this._hitareas)
        {
            this.checkpoint.setTo(stageX-this.x,stageY-this.y);
            for(var i=0;i<this._hitareas.length;++i)
            {
                //TODO:点碰撞.改成其他碰撞
                if(this._hitareas[i].pointInArea(this.checkpoint.x,this.checkpoint.y)==true)
                {
                    return {result:true,part:this._hitareas[i].boneName};
                }
            }
            return {result:false,part:""};
        }
        return {result:false,part:""};
    }


    /**Npc与Npc碰撞检测 */
    public checkHit(obj:Npc):any{
        if(this._hitareas){
            for(let i = 0; i<this._hitareas.length; i++){
                for(let j = 0; j<obj._hitareas.length; i++){
                    if(this._hitareas[i].checkCollide(obj._hitareas[j]) == true){
                        return {result:true,part:this._hitareas[i].boneName};
                    }
                } 
            }
            return {result:false,part:""};
        }
        return {result:false,part:""};
    }

    /**添加碰撞区域 */
    public addHitArea(area:HitArea):void
    {
        if(!this._hitareas)this._hitareas=[];
        this._hitareas.push(area);
    }

    /**检测碰撞 */
    protected checkingCollision (obj:Npc):void
    {
        // if(obj instanceof Bullet)
        // {
        //     //  console.log(obj.x + "||" + obj.y);
        //     if(this.checkHit(obj.x,obj.y).result == true) 
        //     {    
        //         obj.setCollisionID(this.objectID);
        //         this.collisionIn(obj,this.checkHit(obj.x,obj.y).part);
        //     }
        //     else if(obj.collisionID==this.objectID) {
        //         obj.setCollisionID(null);
        //     }
        // }
    }

    /**四叉树检测*/
    public checkQuadtree(quadtree:any):void
    {
        var list = quadtree.retrieve(this.getCustomBound());
        var item:any;
        for(var i=list.length-1;i>=0;--i)
        {
            item = list[i];
            var obj:Npc = RoleManager.instance.findUnit(item.objectID);
            if(obj)
            {
                this.checkingCollision(obj);
            }
        }
    }
    /**子类复写，监听碰撞*/
    protected collisionIn(obj:Npc,part:string):void
    {
        // if(obj instanceof Bullet)
        // {
        //     var bullet:Bullet = obj as Bullet;        
        //     if(bullet.playerid != this.objectID)
        //     {
        //         obj.destroy();

        //     }        
        // }
    } 

        /**销毁 */
    public destroyObj():void
    {
        if(this.parent)
        {
            RoleManager.instance.removeUnit(this);
            this.parent.removeChild(this);
            //super.destroy(true);
            this.setCollisionID(null);
        }
    }

    private drawCircle(x:number, y:number,color:number,ratio:number):egret.Shape {
        var shape:egret.Shape = new egret.Shape();
        shape.graphics.beginFill(color, 1);
        shape.graphics.lineStyle(2, color);
        shape.graphics.drawCircle(0, 0,ratio);
        shape.graphics.endFill();
        shape.x = x;
        shape.y = y;
        return shape;
    }


    
}