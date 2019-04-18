/**
 * 技能基类
 * TODO:在进入游戏读表的时候初始化，存入内存池
 */

class Skill extends Npc{

    //读表
    /**类型 */
    //private _type:string;
    /**时间 */
    private _time:number;

    /**距离 */
    private _distance:number;


    //-----------------------------
    /**TODO:可能不需要了
     * 状态 1.未激活 
     *      分布在地图上位置随机
     *      2.激活 
     * */
    private _activate:boolean;

    //初始化
    constructor(type,time,distance){
        //TODO:后期完善初始化参数
        super(3,4);
        //this._type = type;
        this._time = time;
        this._distance = distance;
    
    }

    //赋值
    public create(){

    }

    /**改变激活状态 
     *          如果是细胞替身 (重写)
     *          不激活技能
     *          细胞死亡激活技能
     * */
    public set activate(ac:boolean){
        this._activate = ac;
        if(this._activate == false){
            return;
        }
        this.activateSkill();
    }

    public get activate(){
        return this._activate;
    }


    /**激活技能 每种技能单独重写*/
    public activateSkill(){

    }

     /**TODO:检测碰撞 */
    protected checkingCollision (obj:Npc):void
    {
        //如果病毒碰上删除病毒
        if(obj instanceof Monster)
        {
            //TODO:如果英雄不能受到伤害返回
            if(this.checkHit(obj).result == true) 
            {    
                obj.setCollisionID(this.objectID);
                this.collisionIn(obj,this.checkHit(obj).part);
            }
            else if(obj.collisionID==this.objectID) {
                obj.setCollisionID(null);
                //this.collisionOut(obj);
            }
        }
    }

    /**
     * 发生碰撞
     * TODO:子类复写，监听碰撞
     * */
    protected collisionIn(obj:Npc,part:string):void
    {

        //TODO:角色受到攻击
        if(obj instanceof Monster)
        {
            //var monster:Monster = obj as Monster;  

            //TODO:病毒消失  分数加上病毒的分数  
            //感觉加上特效会更好  
            obj.destroyObj();
            RoleManager.instance.removeUnit(obj);
      
        }
    }





}