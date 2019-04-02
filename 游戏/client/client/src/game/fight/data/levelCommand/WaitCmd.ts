/**
 * jarekzha
 */
module touch {
    /**
     * 等待命令
     * wait <health percent> OR objects OR all
        - waits until all monsters have certain percentage of health left
        - set it to 0% to wait for all monsters to die
        - Example: wait 10% - wait for monsters to get to 10% health
        - Example: wait objects - wait until all the objects (not including monsters) are gone
        - Example: wait all - wait for all monsters and objects to finish
     */
    export class WaitCmd extends LevelCmd {
        /**
         * 构造
         */
        constructor(data: LevelCommandData) {
            super(data)
        }

        /**
         * 执行
         */
        public run() {
            this.onRunOver()
        }
    }
}