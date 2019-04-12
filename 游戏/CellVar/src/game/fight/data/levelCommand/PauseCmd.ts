/**
 * jarekzha
 */
module touch {
    /**
     * 暂停等待命令
     */
    export class PauseCmd extends LevelCmd {
        /** 暂停毫秒 */
        private _pauseMs: number = 0

        /**
         * 构造
         */
        constructor(data: LevelCommandData) {
            super(data)

            this._pauseMs = Number(this.data.param[0])
        }

        /**
         * 构造
         */
        public run() {
            Laya.timer.once(this._pauseMs * 1000, this, this.onRunOver)
        }
    }
}