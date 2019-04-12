/**英雄 
 * 
 * 创建英雄是复活状态
 * 持续时间配置
 * 
*/
class Hero extends Npc{

    /**英雄状态  1.复活  不受伤害
     *          2.正常  受伤害
     *          3.死亡  是否可以复活
     *  */
    private _state:number;
    constructor(x,y,speed,radio,color){
        super(x,y,speed,radio,color);
        this._state = 1;
    }

    /**英雄状态  1.复活  2.正常 3.死亡 */
    public set state(state:number){
        this._state = state;
    }

    public get state():number{
        return this._state;
    }

    /**英雄能受到伤害
     * 开始游戏，英雄可以移动 不受伤害
     * 英雄复活不受伤害
     * 
     * 时间消失保护消失英雄会受到伤害
    */
    public CanHitHero(){

    }


}