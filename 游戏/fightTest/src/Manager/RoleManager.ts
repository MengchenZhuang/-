/**角色管理器
 * 
 * 将各种角色技能添加到地图上
 * 
 */
class RoleManager {
 private static _instance:RoleManager;
    //private _map:Map;
    public objList:Array<SysObject>;
    constructor(){
        if(RoleManager._instance)throw Error("RoleManager已经实例化，使用instance获取");
        //this._map = map;
        this.objList = new Array<SysObject>();
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
	 * 添加技能
	 */

	/**
	 * 添加病毒
	 */
	
	/**
	 * 添加特效
	 */


    // public addGrid(obj:SysObject,x:number=0,y:number=0):void
    // {
    //     if(!obj.ObjectID)
    //     {
    //         //console.log("对象无objectID");
    //         return;
    //     }
    //     let index:number = this.objList.indexOf(obj);
    //     if(index < 0)
    //     {
    //         this.objList.push(obj);
    //        // obj.pos(x,y);
    //         // this._map.Mapbox.addChild(obj);
    //     }
    //     else
    //     {
    //         //console.log("重复添加对象:"+obj.ObjectID);
    //         return;
    //     }
    // }
    // public addDrop(obj:SysObject,x:number=0,y:number=0):void
    // {
    //     if(!obj.ObjectID)
    //     {
    //         //console.log("对象无objectID");
    //         return;
    //     }

    //     let index:number = this.objList.indexOf(obj);
    //     if(index < 0)
    //     {
    //         this.objList.push(obj);
    //        // obj.pos(x,y);
    //         //this._map.MapHerobox.addChild(obj);
    //     }
    //     else
    //     {
    //         //console.log("重复添加对象:"+obj.ObjectID);
    //         return;
    //     }
    // }
    // public addSysObject(obj:SysObject,x:number=0,y:number=0):void
    // {
    //     if(!obj.ObjectID)
    //     {
    //        // console.log("对象无objectID");
    //         return;
    //     }

    //     let index:number = this.objList.indexOf(obj);
    //     if(index < 0)
    //     {
    //         this.objList.push(obj);
    //         //obj.pos(x,y);
    //         //this._map.MapHerobox.addChild(obj);
    //     }
    //     else
    //     {
    //         //console.log("重复添加对象:"+obj.ObjectID);
    //         return;
    //     }
    // }
    
    public removeUnit(obj:SysObject):void
    {
        // if(obj instanceof Grid)
        // {
        //     //console.log("删除格子");
        // }
        // if(obj instanceof Bullet)
        // {
        //     // console.log("移除子弹");
        // }
        // let index:number = this.objList.indexOf(obj);
        // if(index > -1)
        // {
        //     this.objList.splice(index,1);
        //     obj.destroy(true);
        //     obj = null;
        // }
    }

    // public removeSolider(obj:SysObject):void
    // {
    //     if(obj instanceof soldier || Boss)
    //     {
    //         //console.log("删除敌人");
    //     }
    //     let index:number = this.objList.indexOf(obj);
    //     if(index > -1)
    //     {
    //         this.objList.splice(index,1);
    //         //obj.destroy(true);
    //     }

    //     // let index:number = this.objList.indexOf(obj);
    //     // if(index > -1)
    //     // {
    //     //     this.objList.splice(index,1);
    //     //     obj.destroy(true);
    //     // }
    // }




    /**查 */
    public findUnit(objid:string):SysObject
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
     * DestoryAllObj
    */
    public DestoryAllObj():void {
        // for(let i:number = this.objList.length-1;i > -1;i--)
        // {
        //     if(this.objList[i] instanceof Grid)
        //     {
        //         continue;
        //     }
        //      this.objList.splice(i,1);
        // }
    }

    public DestoryObjByType():void
    {
        // for(let i:number = this.objList.length - 1;i >= 0;i--)
        // {
        //     if(this.objList[i] instanceof Grid)
        //     {
        //         this.objList.splice(i,1);
        //     }
        // }
    }
}