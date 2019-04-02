/**
 * jarekzha
 */
module touch {
    /**
     * 怪物管理器
     */
    export class MonsterView extends MVCView {
        /** 最大id */
        private _maxId = 0
        /** 怪物字典 */
        private _monsterDic: Laya.Dictionary = new Laya.Dictionary()
        /** 父节点 */
        private _parent: Laya.Sprite = null

        /**
         * 初始化
         */
        public initialize(): void {
            let layerView = this.getView(FightSceneLayerView)
            let layer = layerView.getLayer(EnumLayer.FightEntity) as FightEntityLayer
            this._parent = layer.role
        }

        /**
         * 反初始化
         * @param 初始化参数
         */
        public uninitialize(): void {
            for (let v of this._monsterDic.values) {
                (<MonsterNode>v).destroy()
            }
            this._monsterDic.clear()
            this._parent = null
        }

        /**
         * 创建怪物
         */
        public createMonster(name: string): MonsterNode {
            let data = GameData.getMonsterDataByName(name)
            if (data == null) {
                return null
            }

            let monster = new MonsterNode(++this._maxId, data)
            this._parent.addChild(monster)
            this._monsterDic.set(monster.id, monster)
            return monster
        }

        /**
         * 移除怪物
         */
        public removeMonseter(monster: MonsterNode) {
            let id = monster.id
            monster.destroy()
            this._monsterDic.remove(id)
        }
    }
}