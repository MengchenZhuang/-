var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Rect = (function () {
    function Rect(x, y, width, height) {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    return Rect;
}());
__reflect(Rect.prototype, "Rect");
var QuadTree = (function () {
    function QuadTree(pLevel, pBounds) {
        /**
         * 节点能持有的最大对象数量，如果超过则进行分裂
         */
        this.MAX_OBJECTS = 1;
        /**子节点的最大深度 */
        this.MAX_LEVELS = 3;
        this.level = pLevel;
        this.objects = new Array();
        this.bounds = pBounds;
        this.nodes = [];
    }
    /**清除四叉树 */
    QuadTree.prototype.Clear = function () {
        this.objects = [];
        for (var i = 0; i < this.nodes.length; i++) {
            if (this.nodes[i] != null) {
                this.nodes[i].Clear();
                this.nodes[i] = null;
            }
        }
    };
    /**将当前节点分裂为四个节点(实际上是添加四个子节点) */
    QuadTree.prototype.Split = function () {
        var subWidth = (this.bounds.width / 2) | 0;
        var subHeight = (this.bounds.height / 2) | 0;
        var x = (this.bounds.x);
        var y = (this.bounds.y);
        this.nodes[0] = new QuadTree(this.level + 1, new Rect(x + subWidth, y, subWidth, subHeight));
        this.nodes[1] = new QuadTree(this.level + 1, new Rect(x, y, subWidth, subHeight));
        this.nodes[2] = new QuadTree(this.level + 1, new Rect(x, y + subHeight, subWidth, subHeight));
        this.nodes[3] = new QuadTree(this.level + 1, new Rect(x + subWidth, y + subHeight, subWidth, subHeight));
    };
    /**
     * 四叉树内部的辅助函数。他决定了四叉树中一个对象属于哪个节点，最终将该对象划分到该节点中。
     * -1指的是当前节点可能在子节点之间的边界上不属于四个节点而还是属于父节点
     */
    QuadTree.prototype.GetIndex = function (pRect) {
        var index = -1;
        //中线
        var verticalMidpoint = this.bounds.x + this.bounds.width / 2;
        var horizontalMidpoint = this.bounds.y + this.bounds.height / 2;
        //物体完全位于上面两个节点所在区域
        var topQuadrant = (pRect.y < horizontalMidpoint && pRect.y + pRect.height < horizontalMidpoint);
        var bottomQuadrant = pRect.y > horizontalMidpoint;
        //物体完全位于左面两个节点所在区域
        if (pRect.x < verticalMidpoint && pRect.x + pRect.width < verticalMidpoint) {
            if (topQuadrant) {
                index = 1; //处于左上节
            }
            else if (bottomQuadrant) {
                index = 2; //处于左下节点 
            }
        }
        else if (pRect.x > verticalMidpoint) {
            if (topQuadrant) {
                index = 0; //处于右上
            }
            else if (bottomQuadrant) {
                index = 3; //处于右下
            }
        }
        return index;
    };
    /**
     * 将物体插入四叉树
     * 如果当前节点的物体个数超出容量了就将该节点分裂成四个从而让多数节点分给子节点
     */
    QuadTree.prototype.Insert = function (pRect) {
        //插入到子节点
        if (this.nodes[0] != null) {
            var index = this.GetIndex(pRect);
            if (index != -1) {
                this.nodes[index].Insert(pRect);
                return;
            }
        }
        //还没分裂或者插入到子节点失败，只好留个父节点
        this.objects.push(pRect);
        //超容量后如果没有分裂则分裂
        if (this.objects.length > this.MAX_OBJECTS && this.level < this.MAX_LEVELS) {
            if (this.nodes[0] == null) {
                this.Split();
            }
            //分裂后要将父节点的物体分给子节点们
            var i = 0;
            while (i < this.objects.length) {
                var index = this.GetIndex(this.objects[i]);
                if (index != -1) {
                    this.nodes[index].Insert(this.objects.splice(i, 1));
                    //this.objects.Remove(squareOne);
                }
                else {
                    i++;
                }
            }
        }
    };
    /**
     *返回所有可能和指定物体碰撞的物体
     */
    QuadTree.prototype.Retrieve = function (pRect) {
        var result = [];
        var arr;
        var index;
        if (this.nodes.length) {
            index = this.GetIndex(pRect);
            if (index != -1) {
                result = result.concat(this.nodes[index].Retrieve(pRect));
                // this.nodes[index].Retrieve(pRect,fSpriteList);
            }
        }
        for (var i = 0, len = this.objects.length; i < len; i++) {
            result.push(this.objects[i]);
        }
        return result;
    };
    return QuadTree;
}());
__reflect(QuadTree.prototype, "QuadTree");
//# sourceMappingURL=QuadTree.js.map