
class LBitmap extends egret.Bitmap{


    constructor(imgSrc = "",width = 0, height = 0,x = 0,y = 0){
        super();
        this.texture = RES.getRes(imgSrc);

        this.width  = width;
        this.height = height;
        this.anchorOffsetX = width/2;
        this.anchorOffsetY = height/2;

        this.x = x;
        this.y = y;
        this.visible = true;
    }

}