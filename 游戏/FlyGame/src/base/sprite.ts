module base{
    export class Sprite extends egret.Bitmap{


        constructor(imgSrc = "",width = 0, height = 0,x = 0,y = 0){
            super();
            this.texture = RES.getRes(imgSrc);

            this.width  = width;
            this.height = height;

            this.x = x;
            this.y = y;
            this.visible = true;
        }

       
        /**碰撞检测 */
        public isCollideWith(sp){
            let spX = sp.x + sp.width/2;
            let spY = sp.y + sp.height/2;

            if(!this.visible || !sp.visible ){
                return false;
            }

            return !!(spX >= this.x && spX <=this.x + this.width && spY >=this.y && spY <= this.y +this.height)
        }
    }
}