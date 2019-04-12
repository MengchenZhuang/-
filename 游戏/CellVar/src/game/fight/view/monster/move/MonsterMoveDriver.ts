/**
 * jarekzha
 */
module touch {
    /**
     * 怪物移动驱动器
     */
    export class MonsterMoveDriver {
        /**怪物节点 */
        private _monster: MonsterNode = null

        private timer:egret.Timer;

        /**
         * 构造
         */
        constructor(monster: MonsterNode) {
            this._monster = monster
            this.timer = new egret.Timer(1000,0);
        }

        /**
         * 开始
         */
        public start() {
            this.timer.addEventListener(egret.TimerEvent.TIMER,this.onLoop,this);
            this.timer.start();
            //Laya.timer.frameLoop(1, this, this.onLoop)
        }

        /**
         * 销毁
         */
        public destory() {
            this.timer.removeEventListener(egret.TimerEvent.TIMER,this.onLoop,this);
            //Laya.timer.clear(this, this.onLoop)
        }

        /**
         * 每帧更新
         */
        private onLoop() {

            //移动检测
            //碰撞检测
            // // 计算移动线段
            // let speed = this._monster.attr.data.speed
            // let moveOffset = this._monster.attr.data.speed * -1 * Laya.timer.delta / 1000
            // let startPoint = new egret.Point(this._monster.x, this._monster.y)
            // let stopPoint = new egret.Point(this._monster.x + moveOffset, this._monster.y)
            // let moveSegment = new Segment(startPoint, stopPoint)

            // // 碰撞判定
            // //let hitBorder = LineIntersectionTool.segment2Segment(moveSegment, FightContext.houseView.border)
            // if (hitBorder == null) {
            //     this._monster.pos(stopPoint.x, stopPoint.y)
            // } else {
            //     this._monster.pos(hitBorder.x, hitBorder.y)
            // }
        }
    }
}