module music{
    /**
     * 统一的音效管理器
     */
    export class Music {
        private static instance:Music = null;

        private shoot: egret.SoundChannel;
        private boom: egret.SoundChannel;
        private bgmAudio:egret.Sound ;
        private shootAudio:egret.Sound ;
        private boomAudio:egret.Sound ;

        public static getInstance():Music{
            if(Music.instance == null){
                Music.instance = new Music();
            }
            return Music.instance;
        }
        constructor() {

            if(Music.instance){
                return;
            }

            this.bgmAudio = RES.getRes('bgm_mp3');

            this.shootAudio = RES.getRes('bullet_mp3');

            this.boomAudio = RES.getRes('boom_mp3');

            this.playBgm();

        }

        public playBgm() {
            this.bgmAudio.play();
        }

        public playShoot() {
           this.shoot = this.shootAudio.play(0,1);
        }

        public playExplosion() {
           this.boom = this.boomAudio.play(0,1);
        }

    }
}

