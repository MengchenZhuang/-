/**怪物 */
/**
 * 病毒 不同形态  是否不同形态融合过 分数 速度 移动方向：向量 
 * type
 * type 相同融合 一样的变大
 *      不同  用大圈背景圈起
 *      (圈起中有相同的融合) 背景大圈用动画 
 *      写个碰撞检测工具   融合过的 相同可再融合   不同不可融合 规定活动范围 碰撞向切线的反向运动
 *      没碰撞过的一直向英雄移动  碰撞过的保持原来轨迹
 *      
 * 两张病毒列表
 *            1.原始病毒，会与英雄碰撞
 *            2.融合后的病毒  与原始病毒和其他融合后的病毒有碰撞
 * 
 */
class Monster extends Npc{

    /**不同形态融合 */
    private _canMix:boolean ;
    /**怪物类型 */
    private _type:number;
    /**移动方向 */
    private _vc:touch.Vector;

    /**TODO:状态,不知道是否需要，英雄需要状态复活，死亡，正常*/
    constructor(x,y,speed,radio,color){
        super(x,y,speed,radio,color);
        this._canMix = true;
    }

    /**不同形态融合 默认可以融合
     * 相同融合不改变状态，
     * 不同融合之后改变状态，变为类型不同不可以融合 */
    public get canMix():boolean{
        return this._canMix;
    }

    public set canMix(canMix:boolean){
        this._canMix = canMix;
    }

    /**病毒类型 
     * 相同病毒融合类型不变，删除一个病毒，留一个大的
     * 不同类型病毒融合，类型依然不变，
     * 将病毒从碰撞病毒列表中删除 + 在碰撞病毒列表中加个大的病毒
     * 不同类型的病毒融合过的病毒是新类型
     * 病毒移动份两种   碰撞病毒向英雄移动
     *                 非碰撞病毒沿原路线移动
     */
    public set type(type:number){
        this._type = type;
    }

    public get type():number{
        return this._type;
    }


    /**
     * 病毒方向
     *         1.一直向着英雄
     *         2.不随英雄移动，碰撞后向相反方向移动
     */
    public set vc(vc:touch.Vector){
        this._vc = vc;
    }

    public get vc():touch.Vector{
        return this._vc;
    }

    /**
     * 怪物移动
     */
    public move(){
        this.x -= this.vc.x * this.speed * GData.MonsterSpeedfactor;
        this.y -= this.vc.y * this.speed * GData.MonsterSpeedfactor;
    }






    // public move(){

    //     // 粒子向英雄的位置移动
    //     let xc = this.x - Hero.x;
    //     let yc = this.y - Hero.y;
    //     //if (ndot === warea) {
    //     this.x -= xc * 0.0001 * this.speed;
    //     this.y -= yc * 0.0001 * this.speed;
    //     //}
    //   //this.drawCircle(dot.x,dot.y,0xffff00,5);


    // }



}