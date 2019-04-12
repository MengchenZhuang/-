/**
 * jarekzha
 */
module touch {

    /**
     * 关卡命令构造
     */
    interface LevelCmdConstructor {
        new <T>(LevelCommandData): T
    }

    /**
     * 关卡命令工厂
     */
    export class LevelCmdFactory {
        /** 实例 */
        private static _instance: LevelCmdFactory = null
        /** 创建器 */
        private _creatorDic: Dictionary = null

        /**
         * 构造
         */
        constructor() {
            this._creatorDic = new Dictionary()
            this.register("unlocked", LevelNullCmd)
            this.register("text", TextCmd)
            this.register("pause", PauseCmd)
            this.register("wait", WaitCmd)
            this.register("wait-h", WaitCmd)
            this.register("spawn", SpawnCmd)
            this.register("spawnk", SpawnCmd)
        }

        /** 单例 */
        public static get I(): LevelCmdFactory {
            if (this._instance == null) {
                this._instance = new LevelCmdFactory()
            }
            return this._instance
        }

        /**
         * 创建命令
         */
        public create(data: LevelCommandData): Command {
            let creator = this._creatorDic.get(data.name)
            if (creator == undefined || creator == null) {
                return null
            }

            return creator(data)
        }

        /**
         * 注册
         */
        private register<T extends Command>(name: string, cmdClass: LevelCmdConstructor) {
            this._creatorDic.set(name,
                function (data: LevelCommandData): Command {
                    return new cmdClass<T>(data)
                }
            )
        }
    }
}