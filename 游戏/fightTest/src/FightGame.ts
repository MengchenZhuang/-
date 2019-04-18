/**
 * 战斗
 * 进行碰撞检测 角色添加删除
 */
class FightGame extends egret.EventDispatcher{

    /**四叉树 */
    private quadtree:any;

    constructor(){
        super();

        this.quadtree = new QuadTree(0,new Rect(0,0,100,500));
    }

    /**注册事件 */
    private  initEvents():void{

    }

    /**添加病毒 */
    private addDiren():void{

    }
    /**添加敌人 */
    private addPlayer():void{

    }
    /**添加技能 */
    private addSkill():void{

    }
    /**添加特效 */
    private addActive():void{

    }

    /**刷新 */
    public update():void{
        this.quadtree.clear();
    }

    









}