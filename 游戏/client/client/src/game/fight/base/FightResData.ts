/**
 * jarekzha
 */
module touch {
    /**
     * 战斗资源配置
     */
    export class FightResData {
        /**
         * 获取关卡背景图url
         */
        public static getLevelBGUrl(levelName: string): string {
            let file = ""
            let levelType = levelName[0]
            if (levelType == LevelType.Challenge) {
                file = "ChallengeLevel_Background.jpg"
            } else {
                let episode = levelName[1]
                file = "BackgroundEpisode" + episode + ".jpg"
            }

            return "bg/" + file
        }
    }
}