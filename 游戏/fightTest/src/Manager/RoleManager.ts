/**角色管理器
 * 
 * 将各种角色技能添加到地图上
 * 
 */
class RoleManager {
 private static _instance:RoleManager;
    // private _map:Map;
    public objList:Array<Npc>;
    constructor(){
        if(RoleManager._instance)throw Error("RoleManager已经实例化，使用instance获取");
        // this._map = map;
        this.objList = new Array<Npc>();
        RoleManager._instance = this;
    }
    public static get instance():RoleManager
	{
		return this._instance;
	}

    public mapSizeChange(w:number,h:number):void
    {
        //this._map.size(w,h);
    }

	/**
	 * 添加对象到地图中
	 */
    public addNPC(obj:Npc,x:number=0,y:number=0){
        if(!obj.ObjectID)
        {
            console.log("对象无objectID");
            return;
        }
        let index:number = this.objList.indexOf(obj);
        if(index < 0)
        {
            this.objList.push(obj);
            obj.x = x;
            obj.y = y;
            //TODO:把对象加入地图
            //this._map.MapBox.addChild(obj);

        }
        else
        {
            console.log("重复添加对象:"+obj.ObjectID);
            return;
        }
    }
  
    /**TODO:删除地图上的对象 */
    public removeUnit(obj:Npc):void
    {
        if(obj instanceof Buff){
            console.log("删除buff")
        }
        if(obj instanceof Skill)
        {
            console.log("删除技能");
        }
        if(obj instanceof Monster)
        {
            console.log("删除怪物");
        }
        let index:number = this.objList.indexOf(obj);
        if(index > -1)
        {
            this.objList.splice(index,1);
            obj = null;
        }
    }


    /**查 */
    public findUnit(objid:string):Npc
    {
        for(let i:number = 0;i < this.objList.length;i++)
        {
            if(this.objList[i].ObjectID == objid)
            {
                return this.objList[i];
            }
        }
    }

    /**
     * DestoryAllObj销毁所有对象
    */
    public DestoryAllObj():void {
        for(let i:number = this.objList.length-1;i > -1;i--)
        {
            // if(this.objList[i] instanceof Grid)
            // {
            //     continue;
            // }
             this.objList.splice(i,1);
        }
    }


    /**
     * TODO:感觉用不上按类型销毁对象那个
     */

    // public DestoryObjByType():void
    // {
    //     // for(let i:number = this.objList.length - 1;i >= 0;i--)
    //     // {
    //     //     if(this.objList[i] instanceof Grid)
    //     //     {
    //     //         this.objList.splice(i,1);
    //     //     }
    //     // }
    // }
}