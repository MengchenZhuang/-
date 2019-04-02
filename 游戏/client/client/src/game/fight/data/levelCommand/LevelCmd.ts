/**
 * jarekzha
 */
module touch {
    /**
     * 关卡命令
     */
    export class LevelCmd extends Command {
        /** 数据 */
        private _data: LevelCommandData = null

        /**
         * 构造
         */
        constructor(data: LevelCommandData) {
            super()
            this._data = data
        }

		/**
		 * 获取名字
		 */
		public get name(): string {
            return this._data.name
		}

        /** 命令配置数据 */
        public get data(): LevelCommandData { return this._data}
    }
}