
//分数界面
class ScoreUI extends egret.Sprite{
    public btnArea;
    private utils = new utils.Utils();
    private lable:egret.TextField;
    constructor(){
        super();
        this.lable = utils.Utils.CreatText("0",40, 0xffffff,10,30);
        this.addChild(this.lable);
    }
    public renderGameScore(score) {
        this.lable.text = score +"";

    }
}
