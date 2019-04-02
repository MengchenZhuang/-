/**
 * jarekzha
 */
module touch {
    /**
     * 关卡数据
     */
    export class LevelData {
        /** 挑战关卡文件名称 */
        private static _challengeLevelsFileName = 'challengeLevels'
        /** 普通关卡 */
        private static _normalLevels = [
            'episode01',
            'episode02',
            'episode03',
            'episode04',
            'episode05',
            'episode06',
            'episode07',
            'episode08',
            'episode09',
        ]
        /** 困难关卡 */
        private static _hardLevels = [
            'episode01_hard',
            'episode02_hard',
            'episode03_hard',
            'episode04_hard',
            'episode05_hard',
            'episode06_hard',
            'episode07_hard',
            'episode08_hard',
            'episode09_hard',
        ]
        /** 关卡映射表 */
        private static _levelMap: Laya.Dictionary = new Laya.Dictionary()

        /**
         * 初始化
         */
        public static init() {
            this.loadLevels(this.castFileToUrl(this._challengeLevelsFileName))
            for (let f of this._normalLevels) {
                this.loadLevels(this.castFileToUrl(f))
            }
            for (let f of this._hardLevels) {
                this.loadLevels(this.castFileToUrl(f))
            }
        }

        /**
         * 获取所有关卡url
         */
        public static getUrls(): string[] {
            let urls = new Array<string>()
            for (let f of this._normalLevels) {
                urls.push(this.castFileToUrl(f))
            }
            for (let f of this._hardLevels) {
                urls.push(this.castFileToUrl(f))
            }
            urls.push(this.castFileToUrl(this._challengeLevelsFileName))
            return urls
        }

        /**
         * 通过id获取关卡数据
         */
        public static getById(levelId: string): LevelData {
            return this._levelMap.get(levelId) as LevelData
        }

        /**
         * 文件到url 
         */
        private static castFileToUrl(name: string): string {
            return 'res/gamedata/levels/' + name + '.json'
        }

        /**
         * 加载关卡
         */
        private static loadLevels(url: string) {
            let levels = Laya.loader.getRes(url) as Array<LevelData>
            for (let l of levels) {
                this._levelMap.set(l.id, l)
            }
        }
    }
}