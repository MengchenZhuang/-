/**白细胞小弟 */
class SkillWiteCell extends Skill{

    constructor(){
        //TODO:假数据试验
        super(1,2,3);
        this.init();
        this.initHitArea();

    }

    /**初始化图片将图片添加到地图上 */
    private init(){

        let pic:LBitMap = new LBitMap();
        pic.x = 0;
        pic.y = 0;
        pic.bitmap.texture = RES.getRes("skill_"+this.type+"_png");
        this.picBox.push(pic);

        for(let i = 0;i< this.picBox.length;i++){
            this.addChild(this.picBox[i]);
        }
 

    }

    /**设置碰撞区域 */
    private initHitArea(){

        for(let i = 0;i< this.picBox.length;i++){
            let hitArea:HitArea  = new HitArea(HitArea.CIRCLE,"Skill"+this.type);
            hitArea.setCircle(this.picBox[i].x,this.picBox[i].y,this.size);
            this.addHitArea(hitArea)
        }

    }

    
}