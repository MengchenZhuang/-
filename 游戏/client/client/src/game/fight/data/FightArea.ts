/**
 * jarekzha
 */
module touch {
    /**
     * 战斗区域，用于记录一些战斗相关的关键坐标范围
     */
    export class FightArea extends MVCData {
        /**地板的上边缘y */
        private _floorTopY: number = 0
        /**地板的下边缘y */
        private _floorBottomY: number = 0
        /**怪物出生点x */
        private _monsterBornX: number = 0

		/**
		 * 初始化
		 */
        public initialize(): void {
            this._floorTopY = Laya.stage.height - FightAreaResData.FloorTopY
            this._floorBottomY = Laya.stage.height - FightAreaResData.FloorBottomY
            this._monsterBornX = Laya.stage.width + FightAreaResData.MonsterBornX
        }

        /**怪物出生点x */
        public get monsterBornX() { return this._monsterBornX }
        /**地板的上边缘y */
        public get floorTopY() { return this._floorTopY }
        /**地板的下边缘y */
        public get floorBottomY() { return this._floorBottomY }
        /**随机一个在地板上的y值 */
        public get randomYInFloor(): number {
            return MathUtil.randomInt(this._floorTopY, this._floorBottomY)
        }
    }
}