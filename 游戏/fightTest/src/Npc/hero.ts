/**英雄 
 * 
 * 创建英雄是复活状态
 * 持续时间配置
 * 
*/
class Hero extends Npc{

    /**血量 */
    private _hp:number;
    /**最大血量 不可以外部更改，初始化英雄的时候初始化*/
    private _maxHp:number;

    private picx:number;
    private picy:number;

    /**英雄状态  1.复活  不受伤害
     *          2.正常  受伤害
     *          3.死亡  是否可以复活
     *  */
    private _state:number;
    constructor(type,x,y,speed,size,maxHp){
        super(speed,size);
        this._state = 1;
        this._hp = 1;
        this._maxHp = maxHp;
        this.type = type;
        this.x = x;
        this.y = y;
        // this.width = 60;
        // this.height = 60;

        // this.picx = x;
        // this.picy = y;
        this.objectID = "Hero" +  egret.getTimer();
        this.init();
        this.initHitArea();
        //this.visible = true;

    }

    /**初始化图片将图片添加到地图上 */
    private init(){

        let pic:LBitmap = new LBitmap("hero_png",60,60);
        // pic.bitmap.texture = RES.getRes("hero_png");
        // //设置中心点
        // pic.bitmap.anchorOffsetX = pic.bitmap.width/2;
        // pic.bitmap.anchorOffsetY = pic.bitmap.height/2;
        // pic.x = this.picx;
        // pic.y = this.picy;
        // pic.width = 60;
        // pic.height = 60;

        this.picBox.push(pic);
        //TODO:把中心点放在图片的中点 
        //TODO:在图片中添加一条表示方向的线，起始位置是图片的中心点，结束位置是鼠标方向
        for(let i = 0;i< this.picBox.length;i++){
            this.addChild(this.picBox[i]);
        }
 

    }

    /**设置碰撞区域 */
    private initHitArea(){

        for(let i = 0;i< this.picBox.length;i++){
            let hitArea:HitArea  = new HitArea(HitArea.CIRCLE,"hero");
            //hitArea.setCircle(this.picBox[i].x,this.picBox[i].y,this.size);

            let shape = hitArea.setCircle(this.x,this.y,30*this.size);
            this.addChild(shape);
            this.addHitArea(hitArea)
        }

    }

    /**英雄移动 */
    public move(){
        this.x += this.dir.x * this.speed;
        this.y += this.dir.y * this.speed;
    }

    /**英雄状态  1.复活  2.正常 3.死亡 */
    public set state(state:number){
        this._state = state;
    }

    public get state():number{
        return this._state;
    }

    public set hp(hp:number){
        if(hp > this._maxHp){
            hp = this._maxHp;
        }
        this._hp = hp;
    }

    public get hp():number{
        return this._hp;
    }

    /**最大血量  红细胞小弟的数量 */
    public get maxHp():number{
        return this._maxHp;
    }

    /**英雄能受到伤害
     * 开始游戏，英雄可以移动 不受伤害
     * 英雄复活不受伤害
     * 
     * 时间消失保护消失英雄会受到伤害
    */
    public CanHitHero():boolean{

        return true;
    }
   /**销毁英雄 */
    public destoryHero():void
    {
        this.destroyObj();
    }

    /**TODO:检测碰撞 */
    protected checkingCollision (obj:Npc):void
    {
        if(obj instanceof Monster  || obj instanceof Buff)
        {
            //TODO:如果英雄不能受到伤害返回
            if(!this.CanHitHero() && obj instanceof Monster )
            {
                return;
            }

            if(this.checkHit(obj).result == true) 
            {    
                obj.setCollisionID(this.objectID);
                this.collisionIn(obj,this.checkHit(obj).part);
            }
            else if(obj.collisionID == this.objectID) {
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

            //TODO:英雄受到攻击      
            // if(monster.playerid != this.objectID)
            // {
                //TODO:怪物碰撞英雄受击
                //EventManager.instance.event(EventManager.HIT_ANIMATION,[obj.x,obj.y]);
                //obj.destroy();
            console.log("英雄受到怪物碰撞",obj.x,obj.y,this.x,this.y);
            obj.destroyObj();
            RoleManager.instance.removeUnit(obj);
                //EventManager.instance.event(EventManager.DROP_BLOOD,[this,1]);
                //this.dealByHp();
           // }  


            //角色碰撞到病毒血量减一
            this.hp -= 1; 
            //如果血量小于1死亡
            if(this.hp <1){
                //TODO:死亡
            }
            else{
                //TODO:在英雄所在位置产生一个skill改变病毒的移动方向

            }      
        }

        else if(obj instanceof Buff){

            console.log("英雄碰到buff")
            obj.destroyObj();
            //TODO:添加技能 直接调用技能工厂添加技能
            //如果技能为红细胞血量加一
            
        }


    }



}