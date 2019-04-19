var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**碰撞区域 */
var HitArea = (function () {
    function HitArea(type, bonename) {
        if (bonename === void 0) { bonename = null; }
        this._x = 0;
        this._y = 0;
        this._sx = 0;
        this._sy = 0;
        this._scale = 1;
        this.shape = new egret.Shape();
        this._type = type;
        this._bonename = bonename;
    }
    HitArea.prototype.drawcircle = function (x, y, radio) {
        var shape = this.shape;
        shape.graphics.beginFill(0xff0000 + Math.floor(Math.random() * 100) * (0xffffff / 100), 1);
        shape.graphics.lineStyle(2, 0xff0000 + Math.floor(Math.random() * 100) * (0xffffff / 100));
        shape.graphics.drawCircle(x, y, radio);
        shape.graphics.endFill();
        shape.alpha = 0.5;
        return shape;
    };
    //初始化赋值
    HitArea.prototype.initCircle = function (x, y, radio) {
        var shape = this.shape;
        return this.drawcircle(x, y, radio);
    };
    /**设置圆形碰撞区域 */
    HitArea.prototype.setCircle = function (x, y, radius) {
        if (this._type == HitArea.CIRCLE) {
            this._sx = this._x = x;
            this._sy = this._y = y;
            this._radius = radius;
            this._collider = new touch.CircleCollider(x, y, radius);
            return this.initCircle(x, y, radius);
        }
        else {
            throw Error("该区域为hitarea_rect，不能设置圆形区域");
        }
    };
    /**设置多边形碰撞区域 4个点  旋转角度  位移 */
    HitArea.prototype.setRect = function (x, y, w, h) {
        if (this._type == HitArea.RECT) {
            //TODO:多边形碰撞区域,根据位置边长找到四个点
            //旋转，平移 缩放 得到四个点
            this._sx = this._x = x;
            this._sy = this._y = y;
            // this._rect = new egret.Rectangle(x,y,w,h);
        }
        else {
            throw Error("该区域为hitArea_circle，不能设置矩形区域");
        }
    };
    /**设置多边形碰撞区域 4个点  旋转角度  位移 */
    HitArea.prototype.setPolygon = function (angle, dx, dy, points) {
        if (this._type == HitArea.RECT) {
            //矩阵变换
            var matrix = new egret.Matrix();
            matrix.rotate(angle);
            matrix.translate(dx, dy);
            egret.Point;
            var point = void 0;
            this._rect = new touch.Collider();
            for (var i = 0; i < points.length; i++) {
                console.log("变换前points[i].x,points[i].y", points[i].x, points[i].y);
                matrix.transformPoint(points[i].x, points[i].y, point);
                points[i].x = point.x;
                points[i].y = point.y;
                this._rect.points.push(points[i]);
                console.log("变换前points[i].x,points[i].y", points[i].x, points[i].y);
            }
        }
        else {
            throw Error("该区域为hitArea_circle，不能设置矩形区域");
        }
    };
    /**检测点在碰撞区域内 */
    HitArea.prototype.pointInArea = function (x, y) {
        if (this._type == HitArea.CIRCLE) {
            if (Math.sqrt((this._x - x) * (this._x - x) + (this._y - y) * (this._y - y)) < this._radius) {
                return true;
            }
        }
        else if (this._type == HitArea.RECT) {
            if (this._rect) {
                if (this._rect.checkPointInside(x, y)) {
                    return true;
                }
            }
        }
        return false;
    };
    /**检测碰撞 */
    HitArea.prototype.checkCollide = function (hitarea) {
        return this._collider.collidesWith(hitarea.collider);
    };
    Object.defineProperty(HitArea.prototype, "areaType", {
        // /**更新碰撞区域位置 */
        // public updatePos(x:number,y:number,scale:number):void
        // {
        //     this._x = x;
        //     this._y = y;
        //     if(this._rect)
        //     {
        //         this._rect.x=x;
        //         this._rect.y=y;
        //     }
        //     this._scale = Math.abs(scale);
        // }
        /**碰撞区域类型 */
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HitArea.prototype, "sx", {
        get: function () {
            return this._sx;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HitArea.prototype, "sy", {
        get: function () {
            return this._sy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HitArea.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HitArea.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HitArea.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HitArea.prototype, "boneName", {
        // public get width():number
        // {
        //     return this._rect.width;
        // }
        // public get height():number
        // {
        //     return this._rect.height;
        // }
        // public get areaRect():egret.Rectangle
        // {
        //     if(this._rect)return this._rect.clone();
        //     return null;
        // }
        get: function () {
            return this._bonename;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HitArea.prototype, "collider", {
        /**获取碰撞区域 */
        get: function () {
            return this._collider;
        },
        enumerable: true,
        configurable: true
    });
    /**圆形碰撞 */
    HitArea.CIRCLE = "hitArea_circle";
    /**矩形碰撞 */
    HitArea.RECT = "hitarea_rect";
    return HitArea;
}());
__reflect(HitArea.prototype, "HitArea");
//# sourceMappingURL=HitArea.js.map