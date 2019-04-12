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
var base;
(function (base) {
    //let databus = new DataBus();
    var Animation = (function (_super) {
        __extends(Animation, _super);
        function Animation(imgSrc, width, height) {
            var _this = _super.call(this, imgSrc, width, height) || this;
            _this.timer = null;
            // 当前播放的帧
            _this.index = -1;
            // 总帧数
            _this.count = 0;
            // 帧图片集合
            _this.imgList = [];
            // 当前动画是否播放中
            _this.isPlaying = false;
            // 动画是否需要循环播放
            _this.loop = false;
            // 每一帧的时间间隔
            _this.interval = 1000 / 60;
            // 帧定时器
            _this.timer = null;
            // 当前播放的帧
            _this.index = -1;
            // 总帧数
            _this.count = 0;
            // 帧图片集合
            _this.imgList = [];
            /**
             * 推入到全局动画池里面
             * 便于全局绘图的时候遍历和绘制当前动画帧
             */
            DataBus.getInstance().animations.push(_this);
            return _this;
        }
        /**
         * 初始化帧动画的所有帧
         * 为了简单，只支持一个帧动画
         */
        Animation.prototype.initFrames = function (imgList) {
            var _this = this;
            imgList.forEach(function (imgSrc) {
                _this.imgList.push(imgSrc);
            });
            this.count = imgList.length;
        };
        // 将播放中的帧绘制到canvas上
        Animation.prototype.aniRender = function () {
            this.texture = RES.getRes(this.imgList[this.index]);
        };
        // 播放预定的帧动画
        Animation.prototype.playAnimation = function (index, loop) {
            if (index === void 0) { index = 0; }
            if (loop === void 0) { loop = false; }
            this.isPlaying = true;
            this.loop = loop;
            this.index = index;
            if (this.interval > 0 && this.count) {
                this.timer = setInterval(this.frameLoop.bind(this), this.interval);
            }
        };
        // 帧遍历
        Animation.prototype.frameLoop = function () {
            this.index++;
            if (this.index > this.count - 1) {
                if (this.loop) {
                    this.index = 0;
                }
                else {
                    this.index--;
                    this.stop();
                }
            }
        };
        Animation.prototype.stop = function () {
            this.isPlaying = false;
            this.visible = false;
            if (this.timer)
                clearInterval(this.timer);
        };
        return Animation;
    }(base.Sprite));
    base.Animation = Animation;
    __reflect(Animation.prototype, "base.Animation");
})(base || (base = {}));
//# sourceMappingURL=animation.js.map