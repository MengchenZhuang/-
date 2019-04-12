var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var DataBus = (function () {
    function DataBus() {
        //public pool:base.Pool;
        this.frame = 0;
        this.score = 0;
        this.bullets = [];
        this.enemys = [];
        this.animations = [];
        this.gameOver = false;
        if (DataBus._instance) {
            console.log("DataBus an only use getInstance() to get an instance!");
            return;
        }
        //this.pool = new base.Pool();
        this.reset();
    }
    DataBus.prototype.reset = function () {
        this.frame = 0;
        this.score = 0;
        this.bullets = [];
        this.enemys = [];
        this.animations = [];
        this.gameOver = false;
    };
    DataBus.prototype.removeEnemy = function (enemy) {
        var temp = this.enemys.shift();
        temp.visible = false;
        utils.Pool.getInstance().recover("enemy", enemy);
    };
    DataBus.prototype.removeBullets = function (bullet) {
        var temp = this.bullets.shift();
        temp.visible = false;
        utils.Pool.getInstance().recover("bullet", bullet);
    };
    DataBus.getInstance = function () {
        if (!DataBus._instance) {
            DataBus._instance = new DataBus();
        }
        return DataBus._instance;
    };
    DataBus._instance = null;
    return DataBus;
}());
__reflect(DataBus.prototype, "DataBus");
//# sourceMappingURL=DataBus.js.map