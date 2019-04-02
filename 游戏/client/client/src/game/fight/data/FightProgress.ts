/**
 * jarekzha
 */
module touch {
    /**
     * 战斗进度
     */
    export class FightProgress extends MVCData {
        /** 关卡id */
        private _levelId: string = ""
        /** 关卡配置 */
        private _data: LevelData = null
        /** 当前命令索引 */
        private _curCmdIndex: number = -1
        /** 关卡命令 */
        private _cmdMgr: CommandManager = null

        /**
         * 设置数据
         */
        public setData(levelId: string) {
            this._levelId = levelId
        }

        /**
         * 开始
         */
        public start(): boolean {
            return this.runNextCommand()
        }

        /** 关卡配置数据 */
        public get data(): LevelData { return this._data}

		/**
		 * 初始化
		 */
        public initialize(): void {
            this._data = LevelData.getById(this._levelId)
            this._cmdMgr = new CommandManager(false)
            this._cmdMgr.on(Laya.Event.COMPLETE, this, this.onCommandComplete)
        }

		/**
		 * 反初始化
		 */
        public uninitialize(): void {
            if (this._cmdMgr != null) {
                this._cmdMgr.off(Laya.Event.COMPLETE, this, this.onCommandComplete)
                this._cmdMgr.destroy()
                this._cmdMgr = null
            }
            this._data = null
        }

        /**
         * 命令执行结束
         */
        private onCommandComplete() {
            if (this.runNextCommand()) {
                return
            }

            // TODO:命令结束后的处理
        }

        /**
         * 执行下一个命令
         */
        private runNextCommand(): boolean {
            this._curCmdIndex++
            if (this._curCmdIndex >= this._data.cmds.length) {
                // 命令结束
                return false
            }

            let cmdData = this._data.cmds[this._curCmdIndex]
            let cmd = LevelCmdFactory.I.create(cmdData)
            if (cmd == null) {
                // 当前命令为空继续执行
                return this.runNextCommand()
            }

            // 执行命令
            this._cmdMgr.run(cmd)
            return true
        }
    }
}