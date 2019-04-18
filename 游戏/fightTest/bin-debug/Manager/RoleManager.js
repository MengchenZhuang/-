var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**角色管理器
 *
 * 将各种角色技能添加到地图上
 *
 */
var RoleManager = (function () {
    function RoleManager() {
        if (RoleManager._instance)
            throw Error("RoleManager已经实例化，使用instance获取");
        // this._map = map;
        this.objList = new Array();
        RoleManager._instance = this;
    }
    Object.defineProperty(RoleManager, "instance", {
        get: function () {
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    RoleManager.prototype.mapSizeChange = function (w, h) {
        //this._map.size(w,h);
    };
    /**
     * 添加对象到地图中
     */
    RoleManager.prototype.addNPC = function (obj, x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (!obj.ObjectID) {
            console.log("对象无objectID");
            return;
        }
        var index = this.objList.indexOf(obj);
        if (index < 0) {
            this.objList.push(obj);
            obj.x = x;
            obj.y = y;
            //TODO:把对象加入地图
            //this._map.MapBox.addChild(obj);
        }
        else {
            console.log("重复添加对象:" + obj.ObjectID);
            return;
        }
    };
    /**TODO:删除地图上的对象 */
    RoleManager.prototype.removeUnit = function (obj) {
        if (obj instanceof Skill) {
            //console.log("删除格子");
        }
        if (obj instanceof Monster) {
            // console.log("移除子弹");
        }
        var index = this.objList.indexOf(obj);
        if (index > -1) {
            this.objList.splice(index, 1);
            obj = null;
        }
    };
    /**查 */
    RoleManager.prototype.findUnit = function (objid) {
        for (var i = 0; i < this.objList.length; i++) {
            if (this.objList[i].ObjectID == objid) {
                return this.objList[i];
            }
        }
    };
    /**
     * DestoryAllObj销毁所有对象
    */
    RoleManager.prototype.DestoryAllObj = function () {
        for (var i = this.objList.length - 1; i > -1; i--) {
            // if(this.objList[i] instanceof Grid)
            // {
            //     continue;
            // }
            this.objList.splice(i, 1);
        }
    };
    return RoleManager;
}());
__reflect(RoleManager.prototype, "RoleManager");
//# sourceMappingURL=RoleManager.js.map