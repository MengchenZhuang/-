/**
 * 技能基类
 * TODO:在进入游戏读表的时候初始化，存入内存池
 */

class Skill{

    //读表
    /**类型 */
    private _type:string;
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
        this._type = type;
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





}