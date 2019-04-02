/**
 * jarekzha
 */
module touch {
    /**
     * 战斗启动控制器
     */
    export class FightStartupControl extends MVCControl {
        /**
         * 开始
         */
        public start() {
            let progress = this.getData(FightProgress)
            progress.start()
        }
    }
}