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
    private _rect:touch.Collider;

    private _x:number = 0;
    private _y:number = 0;
    private _sx:number = 0;
    private _sy:number = 0;
    private _scale:number = 1;
    private _bonename:string;

    private shape:egret.Shape = new egret.Shape();

    /**碰撞体*/
    private _collider:touch.Collider;

    constructor(type:string,bonename:string = null){
        this._type = type;
        this._bonename = bonename;
    }


    private drawcircle(x:number, y:number,radio:number){
        var shape:egret.Shape = this.shape;
        shape.graphics.beginFill(0xff0000 + Math.floor(Math.random() * 100) * (0xffffff / 100), 1);
        shape.graphics.lineStyle(2, 0xff0000 + Math.floor(Math.random() * 100) * (0xffffff / 100));
        shape.graphics.drawCircle(x, y, radio);
        shape.graphics.endFill();
        shape.alpha = 0.5;
        return shape;
    }
    
    //初始化赋值
    private initCircle(x:number,y:number,radio:number) {
        var shape:egret.Shape = this.shape;
        return this.drawcircle(x,y,radio);
    }


	/**设置圆形碰撞区域 */
    public setCircle(x:number,y:number,radius:number)
    {
        if(this._type == HitArea.CIRCLE)
        {
            this._sx = this._x = x;
            this._sy = this._y = y;
            this._radius = radius;
            this._collider = new touch.CircleCollider(x,y,radius);
            return this.initCircle(x,y,radius)
        }else{
            throw Error("该区域为hitarea_rect，不能设置圆形区域"); 
        }
        
    }
	/**设置多边形碰撞区域 4个点  旋转角度  位移 */
    public setRect(x:number,y:number,w:number,h:number):void
    {
        if(this._type == HitArea.RECT)
        {

            //TODO:多边形碰撞区域,根据位置边长找到四个点
            //旋转，平移 缩放 得到四个点
            this._sx = this._x = x;
            this._sy = this._y = y;
            // this._rect = new egret.Rectangle(x,y,w,h);
        }else{
           throw Error("该区域为hitArea_circle，不能设置矩形区域")
        }
    }


    /**设置多边形碰撞区域 4个点  旋转角度  位移 */
    public setPolygon(angle:number,dx:number,dy:number,points:Array<Point>):void
    {
        if(this._type == HitArea.RECT)
        {
            //矩阵变换
            let matrix:egret.Matrix = new egret.Matrix();
            matrix.rotate(angle);
            matrix.translate(dx,dy);
            egret.Point
            let point:egret.Point;
            this._rect = new touch.Collider();
            for(let i = 0; i < points.length; i++){
                console.log("变换前points[i].x,points[i].y",points[i].x,points[i].y);
                matrix.transformPoint(points[i].x,points[i].y,point);
                points[i].x = point.x;
                points[i].y = point.y;
                this._rect.points.push(points[i]);
                console.log("变换前points[i].x,points[i].y",points[i].x,points[i].y);
            }
        }else{
           throw Error("该区域为hitArea_circle，不能设置矩形区域")
        }
    }
    /**检测点在碰撞区域内 */
    public pointInArea(x:number,y:number):boolean
    {
        if(this._type == HitArea.CIRCLE)
        {
            if(Math.sqrt((this._x-x)*(this._x-x)+(this._y-y)*(this._y-y))<this._radius)
            {
                return true;
            }
        }else if(this._type == HitArea.RECT){
            if(this._rect)
            {
                if(this._rect.checkPointInside(x,y))
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
	// /**更新碰撞区域位置 */
    // public updatePos(x:number,y:number,scale:number):void
    // {
    //     this._x = x;
    //     this._y = y;
    //     if(this._rect)
    //     {
    //         this._rect.x=x;
    //         this._rect.y=y;
    //     }
    //     this._scale = Math.abs(scale);
    // }

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
    // public get width():number
    // {
    //     return this._rect.width;
    // }
    // public get height():number
    // {
    //     return this._rect.height;
    // }
    // public get areaRect():egret.Rectangle
    // {
    //     if(this._rect)return this._rect.clone();
    //     return null;
    // }
    public get boneName():string
    {
        return this._bonename;
    }


    /**获取碰撞区域 */
    public get collider(){
        return this._collider;
    }
}