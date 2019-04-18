var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
* momo
*/
var touch;
(function (touch) {
    /**
     * 碰撞器
     */
    var Collider = (function () {
        /**
         * 构造函数
         */
        function Collider() {
            /**
             * 顶点集合
             */
            this.points = [];
        }
        /**
         * 检测碰撞
         * @param collider
         */
        Collider.prototype.collidesWith = function (collider) {
            var axes = this.getAxes().concat(collider.getAxes());
            return !this.separationOnAxes(axes, collider);
        };
        /**
         * 检测在投影轴上投影是否有分离
         * @param axes
         * @param shape
         */
        Collider.prototype.separationOnAxes = function (axes, collider) {
            for (var i = 0, len = axes.length; i < len; i++) {
                var axis = axes[i];
                if (!axis) {
                    continue;
                }
                //得到形状在当前投影轴上的投影
                var projection1 = collider.project(axis);
                //得到当前拖拽形状在当前投影轴上的投影
                var projection2 = this.project(axis);
                //检测两个投影在当前投影轴上是否重叠,分离返回false
                if (!projection1.overlaps(projection2)) {
                    return true; //在当前投影轴上分离返回true,表示两个形状肯定没有碰撞，不需在检测后面的投影轴了
                }
            }
            //检测完全部的投影轴上的投影没和一个分离的，返回false
            return false;
        };
        /**
         * 获取投影
         * @param axis
         */
        Collider.prototype.project = function (axis) {
            alert("project(axis) not implemented");
            return null;
        };
        /**
         * 得到所有的投影轴
         */
        Collider.prototype.getAxes = function () {
            alert("getAxes() not implemented");
            return null;
        };
        /**
         * 移动
         * @param dx
         * @param dy
         */
        Collider.prototype.move = function (dx, dy) {
            alert("move(dx, dy) not implemented");
        };
        Collider.prototype.getPoints = function () {
            return this.points;
        };
        /**
         * 检测点是否在此碰撞体中
         */
        Collider.prototype.checkPointInside = function (x, y) {
            alert("checkPointInside() not implemented");
            return false;
        };
        return Collider;
    }());
    touch.Collider = Collider;
    __reflect(Collider.prototype, "touch.Collider");
})(touch || (touch = {}));
//# sourceMappingURL=Collider.js.map