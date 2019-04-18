class LBitMap extends egret.Sprite{
    private _bitmap:egret.Bitmap;

    constructor(){
        super();
        this._bitmap = new egret.Bitmap();

        this._bitmap.x = 0;
        this._bitmap.y = 0;
    }


    public set bitmap(pic){
        this._bitmap = pic;
    }
    public get bitmap(){
        return this._bitmap;
    }

    public get x(){
        return this._bitmap.x;
    }
    public set x(x){
        this._bitmap.x = x;
    }

    public get y(){
        return this._bitmap.y;
    }
    public set y(y){
        this._bitmap.y = y;
    }






}