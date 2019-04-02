/**
 * jarekzha
 */
module touch {
    /**
     * 怪物属性
     */
    export class MonsterAttr {
        /** 怪物数据 */
        private _data: MonsterData = null

        /**
         * 构造
         */
        constructor(data: MonsterData) {
            this._data = data
        }

        /** 怪物数据 */
        public get data(): MonsterData { return this._data}
    }
}