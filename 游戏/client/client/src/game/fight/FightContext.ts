/**
 * jarekzha
 */
module touch {
    /**
     * 战斗上下文
     */
    export class FightContext {
        /**战斗进度 */
        public static progress: FightProgress = null
        /**战斗区域 */
        public static area: FightArea = null
        /**场景 */
        public static sceneView: FightSceneLayerView = null
        /**房子 */
        public static houseView: HouseView = null
        /**怪物 */
        public static monsterView: MonsterView = null

        /**
         * 清空上下文
         */
        public static clear() {
            this.progress = null
            this.area = null
            this.sceneView = null
            this.houseView = null
            this.monsterView = null
        }
    }
}