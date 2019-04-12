/**
 * jarekzha
 */
module touch {
    /**
     * 创建怪物命令
     * spawn <MonsterType> [<childMonster>] <Quantity> <Pause>
        - spawns <Quantity> number of <MonsterType> monsters, with 
            pause between them of <Pause> seconds
        - Example: spawn Crocodile 3 2
        - Example: spawnk  "Monsters in Box" [Naked Turtle,Naked Turtle] 4-5 2 
     */
    export class SpawnCmd extends LevelCmd {
        // 怪物名字
        private _monsterName = ""
        // 子怪物名字
        private _childMonsterName = ""
        // 数字字符串
        private _count: number = 0
        // 暂停时间
        private _pause: number = 0

        /**
         * 构造
         */
        constructor(data: LevelCommandData) {
            super(data)
            this.parseParam()
        }

        /**
         * 运行
         */
        public run() {
            if (this._count <= 0) {
                this.onRunOver()
                return
            }

            this.trySpawnMonster()
        }

        /**
         * 召唤怪物
         */
        private trySpawnMonster() {
            this._count--

            // context
            let monsterView = FightContext.monsterView
            let area = FightContext.area

            // 创建怪物
            let monster = monsterView.createMonster(this._monsterName)
            let bornX = area.monsterBornX 
            let bornY = area.randomYInFloor
            monster.pos(bornX, bornY)
            monster.start()

            // 继续召唤
            if (this._count > 0) {
                if (this._pause > 0) {
                    Laya.timer.once(this._pause * 1000, this, this.trySpawnMonster)
                } else {
                    this.trySpawnMonster()
                }
            } else {
                this.onRunOver()
            }
        }

        /**
         * 解析参数
         */
        private parseParam() {
            let param = this.data.param
            let paramCountStr = ""
            let paramPauseStr = ""
            if (param.length == 3) {
                this._monsterName = param[0]
                paramCountStr = param[1]
                paramPauseStr = param[2]
            } else if (param.length == 4) {
                this._monsterName = param[0]
                this._childMonsterName = param[1]
                paramCountStr = param[2]
                paramPauseStr = param[3]
            } else {
                console.error("spawn cmd param invalid: " + this.data.param)
                return
            }

            // 次数
            this._count = this.calcRandomCount(paramCountStr)
            // 暂停时间
            this._pause = Number(paramPauseStr)
        }

        /**
         * 计算随机次数
         */
        private calcRandomCount(str: string): number {
            if (str.indexOf('-') < 0) {
                return Number(str)
            } else {
                let counts = str.split('-')
                let min = Number(counts[0])
                let max = Number(counts[1])
                return MathUtil.randomInt(min, max - 1)
            }
        }
    }
}