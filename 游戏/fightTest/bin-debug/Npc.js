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
    function Npc(x, y, speed, radio, color) {
        var _this = _super.call(this) || this;
        _this._speed = speed;
        _this._radio = radio;
        _this._shape = _this.drawCircle(x, y, color, radio);
        _this._shape.x = x;
        _this._shape.y = y;
        _this._color = color;
        _this._score = 1;
        _this.init();
        return _this;
    }
    //初始化赋值
    Npc.prototype.init = function () {
        var shape = this._shape;
        this.addChild(shape);
    };
    Object.defineProperty(Npc.prototype, "shape", {
        get: function () {
            return this._shape;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Npc.prototype, "x", {
        get: function () {
            return this._shape.x;
        },
        set: function (x) {
            this._shape.x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Npc.prototype, "y", {
        get: function () {
            return this._shape.y;
        },
        set: function (y) {
            this._shape.y = y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Npc.prototype, "radio", {
        get: function () {
            return this._radio;
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
    Object.defineProperty(Npc.prototype, "score", {
        get: function () {
            //this._shape.scaleX = this._radio;
            return this._score;
        },
        set: function (score) {
            this._score = score;
            this._shape.scaleX = score;
            this._shape.scaleY = score;
            this._radio = 5 * score;
            this._speed = 10 - this._score;
            if (this._speed < 1) {
                this._speed = 1;
            }
        },
        enumerable: true,
        configurable: true
    });
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