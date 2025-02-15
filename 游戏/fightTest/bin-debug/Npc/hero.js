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
/**英雄
 *
 * 创建英雄是复活状态
 * 持续时间配置
 *
*/
var Hero = (function (_super) {
    __extends(Hero, _super);
    function Hero(type, x, y, speed, size, maxHp) {
        var _this = _super.call(this, speed, size) || this;
        _this._state = 1;
        _this._hp = 1;
        _this._maxHp = maxHp;
        _this.type = type;
        _this.x = x;
        _this.y = y;
        // this.width = 60;
        // this.height = 60;
        // this.picx = x;
        // this.picy = y;
        _this.objectID = "Hero" + egret.getTimer();
        _this.init();
        _this.initHitArea();
        return _this;
        //this.visible = true;
    }
    /**初始化图片将图片添加到地图上 */
    Hero.prototype.init = function () {
        var pic = new LBitmap("hero_png", 60, 60);
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
        for (var i = 0; i < this.picBox.length; i++) {
            this.addChild(this.picBox[i]);
        }
    };
    /**设置碰撞区域 */
    Hero.prototype.initHitArea = function () {
        for (var i = 0; i < this.picBox.length; i++) {
            var hitArea = new HitArea(HitArea.CIRCLE, "hero");
            //hitArea.setCircle(this.picBox[i].x,this.picBox[i].y,this.size);
            var shape = hitArea.setCircle(this.x, this.y, 30 * this.size);
            this.addChild(shape);
            this.addHitArea(hitArea);
        }
    };
    /**英雄移动 */
    Hero.prototype.move = function () {
        this.x += this.dir.x * this.speed;
        this.y += this.dir.y * this.speed;
    };
    Object.defineProperty(Hero.prototype, "state", {
        get: function () {
            return this._state;
        },
        /**英雄状态  1.复活  2.正常 3.死亡 */
        set: function (state) {
            this._state = state;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "hp", {
        get: function () {
            return this._hp;
        },
        set: function (hp) {
            if (hp > this._maxHp) {
                hp = this._maxHp;
            }
            this._hp = hp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "maxHp", {
        /**最大血量  红细胞小弟的数量 */
        get: function () {
            return this._maxHp;
        },
        enumerable: true,
        configurable: true
    });
    /**英雄能受到伤害
     * 开始游戏，英雄可以移动 不受伤害
     * 英雄复活不受伤害
     *
     * 时间消失保护消失英雄会受到伤害
    */
    Hero.prototype.CanHitHero = function () {
        return true;
    };
    /**销毁英雄 */
    Hero.prototype.destoryHero = function () {
        this.destroyObj();
    };
    /**TODO:检测碰撞 */
    Hero.prototype.checkingCollision = function (obj) {
        if (obj instanceof Monster || obj instanceof Buff) {
            //TODO:如果英雄不能受到伤害返回
            if (!this.CanHitHero() && obj instanceof Monster) {
                return;
            }
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
    Hero.prototype.collisionIn = function (obj, part) {
        //TODO:角色受到攻击
        if (obj instanceof Monster) {
            //var monster:Monster = obj as Monster;  
            //TODO:英雄受到攻击      
            // if(monster.playerid != this.objectID)
            // {
            //TODO:怪物碰撞英雄受击
            //EventManager.instance.event(EventManager.HIT_ANIMATION,[obj.x,obj.y]);
            //obj.destroy();
            console.log("英雄受到怪物碰撞", obj.x, obj.y, this.x, this.y);
            obj.destroyObj();
            RoleManager.instance.removeUnit(obj);
            //EventManager.instance.event(EventManager.DROP_BLOOD,[this,1]);
            //this.dealByHp();
            // }  
            //角色碰撞到病毒血量减一
            this.hp -= 1;
            //如果血量小于1死亡
            if (this.hp < 1) {
                //TODO:死亡
            }
            else {
                //TODO:在英雄所在位置产生一个skill改变病毒的移动方向
            }
        }
        else if (obj instanceof Buff) {
            console.log("英雄碰到buff");
            obj.destroyObj();
            //TODO:添加技能 直接调用技能工厂添加技能
            //如果技能为红细胞血量加一
        }
    };
    return Hero;
}(Npc));
__reflect(Hero.prototype, "Hero");
//# sourceMappingURL=hero.js.map