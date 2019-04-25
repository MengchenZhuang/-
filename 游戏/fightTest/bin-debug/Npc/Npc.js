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
var Npc = (function (_super) {
    __extends(Npc, _super);
    function Npc(speed, size) {
        var _this = _super.call(this) || this;
        _this._picBoxs = [];
        _this._speed = speed;
        _this._size = size;
        //TODO:绘出碰撞区域或其他辅助在子类中绘制
        // this._shape = this.drawCircle(x,y,color,radio);
        // this._shape.x = x;
        // this._shape.y = y;
        // this._color = color;
        _this._score = 1;
        //给图片赋值
        // this.pic.x = x;
        // this.pic.y = y;
        // this.pic.texture = RES.getRes("");
        _this._custombound = { x: 0, y: 0, width: 1, height: 1 };
        _this.checkpoint = new egret.Point();
        return _this;
        // this.initNPC();
    }
    Object.defineProperty(Npc.prototype, "picBox", {
        get: function () {
            return this._picBoxs;
        },
        // //初始化赋值
        // private initNPC():void {
        //     //将图片资源加入
        //     // var shape:egret.Shape = this._shape;
        //     // this.addChild(shape);
        // }
        /**设置图片资源
         * 将要显示的图片加入统一的盒子中，主要为了白细胞小弟
         *  TODO:不同资源图片不同情况不统一显示*/
        set: function (pics) {
            this._picBoxs = pics;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Npc.prototype, "ObjectID", {
        get: function () {
            return this.objectID;
        },
        set: function (value) {
            this.objectID = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Npc.prototype, "size", {
        // public get shape(){
        //     return this._shape;
        // }
        // public get x():number{
        //     return this._shape.x;
        // }
        // public set x(x:number){
        //     this._shape.x = x;
        // }
        // public get y():number{
        //     return this._shape.y;
        // }
        // public set y(y:number){
        //     this._shape.y = y;
        // }
        /**缩放大小 */
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Npc.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Npc.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        set: function (speed) {
            this._speed = 10 - this._score;
            if (this._speed < 1) {
                this._speed = 1;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Npc.prototype, "dir", {
        get: function () {
            return this._dir;
        },
        set: function (value) {
            this._dir = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Npc.prototype, "score", {
        get: function () {
            //this._shape.scaleX = this._radio;
            return this._score;
        },
        set: function (score) {
            this._score = score;
            // this._shape.scaleX = score;
            // this._shape.scaleY = score;
            this._size = 5 * score;
            this._speed = 10 - this._score;
            if (this._speed < 1) {
                this._speed = 1;
            }
        },
        enumerable: true,
        configurable: true
    });
    Npc.prototype.setCollisionID = function (id) {
        this._collisionid = id;
    };
    Object.defineProperty(Npc.prototype, "collisionID", {
        get: function () {
            return this._collisionid;
        },
        enumerable: true,
        configurable: true
    });
    /**设置bound*/
    Npc.prototype.setCustomBound = function (pwidth, pheight) {
        if (pwidth <= 0 || pheight <= 0)
            throw Error("对象bound设置错误!");
        this._custombound = { x: this.x, y: this.y, width: pwidth, height: pheight };
    };
    /**获取bound */
    Npc.prototype.getCustomBound = function () {
        this._custombound.x = this.x;
        this._custombound.y = this.y;
        this._custombound.objectID = this.objectID;
        if (this._custombound.width <= 0 || this._custombound.height <= 0) {
            throw Error("对象bound设置错误!");
        }
        return this._custombound;
    };
    /**加入四叉树，子类复写可以不加入*/
    Npc.prototype.needJoinQuadtree = function (quadtree) {
        quadtree.Insert(this.getCustomBound());
    };
    /**点碰撞检测*/
    Npc.prototype.checkPointHit = function (stageX, stageY) {
        if (this._hitareas) {
            this.checkpoint.setTo(stageX - this.x, stageY - this.y);
            for (var i = 0; i < this._hitareas.length; ++i) {
                //TODO:点碰撞.改成其他碰撞
                if (this._hitareas[i].pointInArea(this.checkpoint.x, this.checkpoint.y) == true) {
                    return { result: true, part: this._hitareas[i].boneName };
                }
            }
            return { result: false, part: "" };
        }
        return { result: false, part: "" };
    };
    /**Npc与Npc碰撞检测 */
    Npc.prototype.checkHit = function (obj) {
        if (this._hitareas) {
            for (var i = 0; i < this._hitareas.length; i++) {
                for (var j = 0; j < obj._hitareas.length; j++) {
                    if (this._hitareas[i].checkCollide(obj._hitareas[j]) == true) {
                        return { result: true, part: this._hitareas[i].boneName };
                    }
                }
            }
            return { result: false, part: "" };
        }
        return { result: false, part: "" };
    };
    /**添加碰撞区域 */
    Npc.prototype.addHitArea = function (area) {
        if (!this._hitareas)
            this._hitareas = [];
        this._hitareas.push(area);
    };
    Object.defineProperty(Npc.prototype, "HitAreas", {
        /**获取碰撞区域 */
        get: function () {
            return this._hitareas;
        },
        enumerable: true,
        configurable: true
    });
    /**检测碰撞 */
    Npc.prototype.checkingCollision = function (obj) {
        // if(obj instanceof Bullet)
        // {
        //     //  console.log(obj.x + "||" + obj.y);
        //     if(this.checkHit(obj.x,obj.y).result == true) 
        //     {    
        //         obj.setCollisionID(this.objectID);
        //         this.collisionIn(obj,this.checkHit(obj.x,obj.y).part);
        //     }
        //     else if(obj.collisionID==this.objectID) {
        //         obj.setCollisionID(null);
        //     }
        // }
    };
    /**四叉树检测*/
    Npc.prototype.checkQuadtree = function (quadtree) {
        var list = quadtree.Retrieve(this.getCustomBound());
        var item;
        for (var i = list.length - 1; i >= 0; --i) {
            item = list[i];
            var obj = RoleManager.instance.findUnit(item.objectID);
            if (obj) {
                this.checkingCollision(obj);
            }
        }
    };
    /**子类复写，监听碰撞*/
    Npc.prototype.collisionIn = function (obj, part) {
        // if(obj instanceof Bullet)
        // {
        //     var bullet:Bullet = obj as Bullet;        
        //     if(bullet.playerid != this.objectID)
        //     {
        //         obj.destroy();
        //     }        
        // }
    };
    /**销毁 */
    Npc.prototype.destroyObj = function () {
        if (this.parent) {
            RoleManager.instance.removeUnit(this);
            this.parent.removeChild(this);
            //super.destroy(true);
            this.setCollisionID(null);
        }
    };
    Npc.prototype.drawCircle = function (x, y, color, ratio) {
        var shape = new egret.Shape();
        shape.graphics.beginFill(color, 1);
        shape.graphics.lineStyle(2, color);
        shape.graphics.drawCircle(0, 0, ratio);
        shape.graphics.endFill();
        shape.x = x;
        shape.y = y;
        return shape;
    };
    return Npc;
}(egret.Sprite));
__reflect(Npc.prototype, "Npc");
//# sourceMappingURL=Npc.js.map