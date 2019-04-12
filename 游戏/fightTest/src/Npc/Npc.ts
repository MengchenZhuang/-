class Npc extends egret.Sprite{
     //画圆
    private _shape:egret.Shape;

    //速度
    private _speed:number;
    //半径
    private _radio:number;

    private _score:number;

    private _color:number;

    constructor(x,y,speed,radio,color){
        super();
        this._speed = speed;
        this._radio = radio;
        this._shape = this.drawCircle(x,y,color,radio);
        this._shape.x = x;
        this._shape.y = y;
        this._color = color;
        this._score = 1;

        this.init();

    }
    //初始化赋值
    private init():void {
        var shape:egret.Shape = this._shape;
        this.addChild(shape);
    }

    public get shape(){
        return this._shape;
    }

    public get x():number{
        return this._shape.x;
    }
    public set x(x:number){
        this._shape.x = x;
    }

    public get y():number{
        return this._shape.y;
    }

    public set y(y:number){
        this._shape.y = y;
    }


    public get radio():number{
        return this._radio;
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

   public get score():number{
       //this._shape.scaleX = this._radio;
        return this._score;
    }

    public set score(score:number){
        this._score = score;
        this._shape.scaleX = score;
        this._shape.scaleY = score;
        this._radio = 5 * score;
        this._speed = 10 - this._score;
        if(this._speed < 1)
        {
            this._speed = 1;
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