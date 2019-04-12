module utils{
    export class Utils{
        constructor(){

        }

        public static CreatImage(imgSrc = "",x = 0,y = 0,width = 0, height = 0){

            
            let Img:egret.Bitmap = new egret.Bitmap();
            let texture: egret.Texture = RES.getRes(imgSrc);
            Img.texture = texture;

            Img.x = x;
            Img.y = y;
            Img.width = width;
            Img.height = height;

            //this.addChild(Img);
            return Img;
        }

        public static CreatSImage(imgSrc = "",x = 0,y = 0,width = 0, height = 0,sx = 0,sy = 0,sw = 0,sh = 0){

            
            let Img:egret.Bitmap = new egret.Bitmap();
            let texture: egret.Texture = RES.getRes(imgSrc);
            Img.texture = texture;

            var renderTexture: egret.RenderTexture = new egret.RenderTexture();
            renderTexture.drawToTexture(Img,new egret.Rectangle(sx,sy,sw,sh));

            let Img1:egret.Bitmap = new egret.Bitmap();
            Img1.texture = renderTexture;

            Img1.x = x;
            Img1.y = y;
            Img1.width = width;
            Img1.height = height;

            //this.addChild(Img1);
            return Img1;
        }

        public static CreatText(text = "",size =0,color = 0,x = 0,y = 0){

            let Lable = new egret.TextField();
            Lable.textColor = color;
            Lable.size = size;
            Lable.x = x;
            Lable.y = y;
            Lable.text = text;
            //this.addChild(Lable);
            return Lable;
        }
    }


}

