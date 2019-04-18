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
var FightUI = (function (_super) {
    __extends(FightUI, _super);
    //private heroUI:HeroUI;
    function FightUI(main) {
        var _this = _super.call(this) || this;
        _this.data = [];
        //圆数量
        _this.num = 20;
        _this.lineDis = 400;
        _this.heroUi = new HeroUI();
        _this.cW = main.stage.stageWidth;
        _this.cH = main.stage.stageHeight;
        _this.initGraphics();
        _this.init();
        _this.addEventListener(egret.Event.ENTER_FRAME, function (evt) {
            _this.movedrawLine(_this.data);
        }, _this);
        return _this;
    }
    FightUI.prototype.init = function () {
        for (var i = 0; i < this.num; i++) {
            var _data = {
                x: Math.random() * this.cW,
                y: Math.random() * this.cH,
                cx: Math.random() * 0.6 - 0.3,
                cy: Math.random() * 0.6 - 0.3,
                speed: 10
            };
            var monster = new Monster(1, _data.x, _data.y, _data.speed, 5);
            this.data.push(monster);
            this.addChild(monster);
        }
        console.log("创建敌人完成");
    };
    //初始化赋值
    FightUI.prototype.initGraphics = function () {
        this.addChild(this.heroUi);
    };
    FightUI.prototype.movedrawLine = function (ndots) {
        var ndot;
        for (var _i = 0, ndots_1 = ndots; _i < ndots_1.length; _i++) {
            var dot = ndots_1[_i];
            // dot.move();
            this.monsterMove(dot);
            // 循环比对粒子间的距离
            // for (let i = 0; i < ndots.length; i++) {
            //     ndot = ndots[i];
            //     //dot.speed = 10;
            //     if (dot === ndot || ndot.x === null || ndot.y === null) continue;
            //     let xc = dot.x - ndot.x;
            //     let yc = dot.y - ndot.y;
            //     let lineDis = (dot.size + ndot.radio)*(dot.radio + ndot.radio);
            //     // 如果x轴距离或y轴距离大于max,则不计算粒子距离
            //     if(xc*xc > lineDis || yc*yc > lineDis) continue;
            //     // 两个粒子之间的距离
            //     let dis = xc * xc + yc * yc;
            //     // 如果粒子距离超过max,则不做处理
            //     //TODO:直接用半径判断融合，效果不好看，之后改成距离小于较大的半径加较小的半径/2,再调试
            //     if( dis > lineDis+20 ) continue;
            //     ndot.score = dot.score +ndot.score;
            //     // if(ndot.score > 5){
            //     //     ndot.score = 5;
            //     // }
            //     this.removeChild(dot);
            //     ndots.splice(ndots.indexOf(dot), 1);
            //     break;
            // }
            // 将已经计算过的粒子从数组中删除
        }
    };
    FightUI.prototype.monsterMove = function (dot) {
        //let self = this;
        // 粒子向英雄的位置移动
        var v = new touch.Vector();
        v.x = dot.x - this.heroUi.hero.x;
        v.y = dot.y - this.heroUi.hero.y;
        v = v.normalize();
        dot.dir = v;
        dot.move();
        // dot.x -= v.x * 0.3 * dot.speed;
        // dot.y -= v.y * 0.3 * dot.speed;
    };
    return FightUI;
}(egret.Sprite));
__reflect(FightUI.prototype, "FightUI");
//# sourceMappingURL=FightUI.js.map