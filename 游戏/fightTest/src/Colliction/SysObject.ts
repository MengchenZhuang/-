class SysObject extends egret.Sprite{


	/**速度 */
    private _speed:number=17;
    /**方向 */
    private _dir:number=-1;
    /**唯一Id */
    protected objectID:string;
    /**碰撞边界 */
    private _custombound:any;
    private checkpoint:egret.Point;
    private _hitareas:Array<HitArea>;
    private _collisionid:string;
    private _type:string;

    private _m_ID:string;

	constructor() {

		super();
		this._custombound = {x:0,y:0,width:1,height:1};
		this.checkpoint = new egret.Point();

	}

	public get ObjectID():string{
		return this.objectID;
	}

	public set ObjectID(value:string){
		this.objectID = value;
	}
public get m_ID():string
    {
        return this._m_ID;
    }

    public set m_ID(value:string)
    {
        this._m_ID = value;
    }


    public set type(value:string)
    {
        this._type = value;
    }
    public get type():string
    {
        return this._type;
    }

    public set dir(value:number)
    {
        this._dir = value;
    }
    public get dir():number
    {
        return this._dir;
    }
    public set speed(value:number)
    {
        this._speed = value;
    }

    public get speed():number
    {
        return this._speed;
    }
    public setCollisionID(id:string)
    {
        this._collisionid = id;
    }
    public get collisionID():string
    {
        return this._collisionid;
    }
	
    //设置bound
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

    //加入四叉树，子类复写可以不加入
    public needJoinQuadtree(quadtree:any):void
    {
        quadtree.insert(this.getCustomBound());
    }
    //四叉树检测
    public checkQuadtree(quadtree:any):void
    {
    }
    //碰撞检测
    public checkHit(stageX:number,stageY:number):any
    {
        if(this._hitareas)
        {
            this.checkpoint.setTo(stageX-this.x,stageY-this.y);
            for(var i=0;i<this._hitareas.length;++i)
            {
                if(this._hitareas[i].pointInArea(this.checkpoint.x,this.checkpoint.y)==true)
                {
                    return {result:true,part:this._hitareas[i].boneName};
                }
            }
            return {result:false,part:""};
        }
        return {result:false,part:""};
    }

    public addHitArea(area:HitArea):void
    {
        if(!this._hitareas)this._hitareas=[];
        this._hitareas.push(area);
    }


}