/**碰撞区域 */
class HitArea {
	/**圆形碰撞 */
    public static readonly CIRCLE:string = "hitArea_circle";
	/**矩形碰撞 */
    public static readonly RECT:string = "hitarea_rect";

	/**半径 */
    private _radius:number;
	/**碰撞类型 */
    private _type:string;

	/**矩形 */
    private _rect:egret.Rectangle;

    private _x:number=0;
    private _y:number=0;
    private _sx:number=0;
    private _sy:number=0;
    private _scale:number=1;
    private _bonename:string;

    /**碰撞体*/
    private _collider:touch.Collider;

    constructor(type:string,bonename:string=null){
        this._type = type;
        this._bonename = bonename;
    }
	/**设置圆形碰撞区域 */
    public setCircle(x:number,y:number,radius:number):void
    {
        if(this._type==HitArea.CIRCLE)
        {
            this._sx=this._x = x;
            this._sy=this._y = y;
            this._radius = radius;
            this._collider = new touch.CircleCollider(x,y,radius);
        }else{
            throw Error("该区域为hitarea_rect，不能设置圆形区域"); 
        }
        
    }
	/**设置多边形碰撞区域 */
    public setRect(x:number,y:number,w:number,h:number):void
    {
        if(this._type==HitArea.RECT)
        {
            //TODO:多边形碰撞区域,根据位置边长找到四个点
            //旋转，平移 缩放 得到四个点
            this._sx=this._x = x;
            this._sy=this._y = y;
            this._rect = new egret.Rectangle(x,y,w,h);
        }else{
           throw Error("该区域为hitArea_circle，不能设置矩形区域")
        }
    }
    /**检测点在碰撞区域内 */
    public pointInArea(x:number,y:number):boolean
    {
        if(this._type==HitArea.CIRCLE)
        {
            if(Math.sqrt((this._x-x)*(this._x-x)+(this._y-y)*(this._y-y))<this._radius)
            {
                return true;
            }
        }else if(this._type==HitArea.RECT){
            if(this._rect)
            {
                if(this._rect.contains(x,y))
                {
                    return true;
                }           
            }
        }
        return false;
    }


    /**检测碰撞 */
    public checkCollide(hitarea){
        return this._collider.collidesWith(hitarea.collider);

    }
	/**更新碰撞区域位置 */
    public updatePos(x:number,y:number,scale:number):void
    {
        this._x = x;
        this._y = y;
        if(this._rect)
        {
            this._rect.x=x;
            this._rect.y=y;
        }
        this._scale = Math.abs(scale);
    }

	/**碰撞区域类型 */
    public get areaType():string
    {
        return this._type;
    }
    public get sx():number
    {
        return this._sx;
    }
    public get sy():number
    {
        return this._sy;
    }
    public get x():number
    {
        return this._x;
    }
    public get y():number
    {
        return this._y;
    }
    public get radius():number
    {
        return this._radius;
    }
    public get width():number
    {
        return this._rect.width;
    }
    public get height():number
    {
        return this._rect.height;
    }
    public get areaRect():egret.Rectangle
    {
        if(this._rect)return this._rect.clone();
        return null;
    }
    public get boneName():string
    {
        return this._bonename;
    }


    /**获取碰撞区域 */
    public get collider(){
        return this._collider;
    }
}