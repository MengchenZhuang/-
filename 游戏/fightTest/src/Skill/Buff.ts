/**地图上随机产生的技能 */
/**
 * 与英雄发生碰撞产生不同效果
 * skillFactory.createSkill(Buff.type);
 * 
 */
class Buff extends Npc{
    /**位置 */
    //private Position:point;

    /**类型 */

    /**图片资源 */

    constructor(type,x,y,speed,size){
        //TODO:暂时写这个
        super(1,1);

        this.type = type;

        this.init();
        this.initHitArea();

    }

    /**初始化图片将图片添加到地图上 */
    private init(){

        let pic:LBitMap = new LBitMap();
        pic.x = 0;
        pic.y = 0;
        pic.bitmap.texture = RES.getRes("buff_"+this.type+"_png");
        this.picBox.push(pic);

        for(let i = 0;i< this.picBox.length;i++){
            this.addChild(this.picBox[i]);
        }
 

    }

    /**设置碰撞区域 */
    private initHitArea(){

        for(let i = 0;i< this.picBox.length;i++){
            let hitArea:HitArea  = new HitArea(HitArea.CIRCLE,"Buff"+this.type);
            hitArea.setCircle(this.picBox[i].x,this.picBox[i].y,this.size);
            this.addHitArea(hitArea)
        }

    }
    /**碰撞检测 */
     /**TODO:检测碰撞 */
    protected checkingCollision (obj:Npc):void
    {
        
    }

    /**
     * 发生碰撞
     * TODO:子类复写，监听碰撞
     * */
    protected collisionIn(obj:Npc,part:string):void
    {


    }

    
}