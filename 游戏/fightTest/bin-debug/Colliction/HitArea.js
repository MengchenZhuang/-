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
        this._type = type;
        this._bonename = bonename;
    }
    /**设置圆形碰撞区域 */
    HitArea.prototype.setCircle = function (x, y, radius) {
        if (this._type == HitArea.CIRCLE) {
            this._sx = this._x = x;
            this._sy = this._y = y;
            this._radius = radius;
            this._collider = new touch.CircleCollider(x, y, radius);
        }
        else {
            throw Error("该区域为hitarea_rect，不能设置圆形区域");
        }
    };
    /**设置多边形碰撞区域 */
    HitArea.prototype.setRect = function (x, y, w, h) {
        if (this._type == HitArea.RECT) {
            //TODO:多边形碰撞区域,根据位置边长找到四个点
            //旋转，平移 缩放 得到四个点
            this._sx = this._x = x;
            this._sy = this._y = y;
            this._rect = new egret.Rectangle(x, y, w, h);
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
                if (this._rect.contains(x, y)) {
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
    /**更新碰撞区域位置 */
    HitArea.prototype.updatePos = function (x, y, scale) {
        this._x = x;
        this._y = y;
        if (this._rect) {
            this._rect.x = x;
            this._rect.y = y;
        }
        this._scale = Math.abs(scale);
    };
    Object.defineProperty(HitArea.prototype, "areaType", {
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
    Object.defineProperty(HitArea.prototype, "width", {
        get: function () {
            return this._rect.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HitArea.prototype, "height", {
        get: function () {
            return this._rect.height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HitArea.prototype, "areaRect", {
        get: function () {
            if (this._rect)
                return this._rect.clone();
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HitArea.prototype, "boneName", {
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