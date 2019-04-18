/**
 * 技能基类
 * TODO:在进入游戏读表的时候初始化，存入内存池
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Skill = (function (_super) {
    __extends(Skill, _super);
    //初始化
    function Skill(type, time, distance) {
        var _this = 
        //TODO:后期完善初始化参数
        _super.call(this, 3, 4) || this;
        //this._type = type;
        _this._time = time;
        _this._distance = distance;
        return _this;
    }
    //赋值
    Skill.prototype.create = function () {
    };
    Object.defineProperty(Skill.prototype, "activate", {
        get: function () {
            return this._activate;
        },
        /**改变激活状态
         *          如果是细胞替身 (重写)
         *          不激活技能
         *          细胞死亡激活技能
         * */
        set: function (ac) {
            this._activate = ac;
            if (this._activate == false) {
                return;
            }
            this.activateSkill();
        },
        enumerable: true,
        configurable: true
    });
    /**激活技能 每种技能单独重写*/
    Skill.prototype.activateSkill = function () {
    };
    /**TODO:检测碰撞 */
    Skill.prototype.checkingCollision = function (obj) {
        //如果病毒碰上删除病毒
        if (obj instanceof Monster) {
            //TODO:如果英雄不能受到伤害返回
            if (this.checkHit(obj).result == true) {
                obj.setCollisionID(this.objectID);
                this.collisionIn(obj, this.checkHit(obj).part);
            }
            else if (obj.collisionID == this.objectID) {
                obj.setCollisionID(null);
                //this.collisionOut(obj);
            }
        }
    };
    /**
     * 发生碰撞
     * TODO:子类复写，监听碰撞
     * */
    Skill.prototype.collisionIn = function (obj, part) {
        //TODO:角色受到攻击
        if (obj instanceof Monster) {
            //var monster:Monster = obj as Monster;  
            //TODO:病毒消失  分数加上病毒的分数  
            //感觉加上特效会更好  
            obj.destroyObj();
            RoleManager.instance.removeUnit(obj);
        }
    };
    return Skill;
}(Npc));
__reflect(Skill.prototype, "Skill");
//# sourceMappingURL=Skill.js.map