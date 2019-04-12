

let atlas = 'Common_png';

//游戏结束界面
class GameOverUI extends egret.Sprite{

    public btnArea:any;
    private score:egret.TextField;
    constructor(){
        super();
        this.btnArea = {
            startX: screenWidth / 2 - 100,
            startY: screenHeight / 2 - 100 + 180,
            endX  : screenWidth / 2  + 100,
            endY  : screenHeight / 2 - 100 + 180+120
        };

        let Img1 = utils.Utils.CreatSImage(atlas,screenWidth / 2 - 175, screenHeight / 2 - 125, 350, 350, 0, 0, 119, 108);
        this.addChild(Img1);

        let lable1 = utils.Utils.CreatText("游戏结束",40,0xffffff,screenWidth / 2 - 80,screenHeight / 2 - 100 + 30);
        this.addChild(lable1);
        
        let Img2 = utils.Utils.CreatSImage(atlas,screenWidth / 2 - 100, screenHeight / 2 - 100 + 180,200, 80,120, 6, 39, 24);
        this.addChild(Img2);

        let lable2 = utils.Utils.CreatText("重新开始",40,0xffffff,screenWidth / 2 - 80,screenHeight / 2 - 100 + 205);
        this.addChild(lable2);
        
        this.score = utils.Utils.CreatText('得分: ' + 0,40,0xffffff,screenWidth / 2 - 20,screenHeight / 2 - 100 + 130);
        this.addChild(this.score);

        
    }

    public createUI(score){

        this.score.text = score +"";

    }
}