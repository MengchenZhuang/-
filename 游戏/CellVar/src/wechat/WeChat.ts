// /**
// * momo 
// */
// module touch {
// 	/**
// 	 * 微信API
// 	 */
// 	export class WeChat {
// 		/**
// 		 * 微信接口
// 		 */
// 		private static _wx: any = null;
// 		/**
// 		 * 背景音乐路径
// 		 */
// 		private static _bgUrl: string = "";
// 		/**
// 		 * 背景音乐播放完毕事件
// 		 */
// 		private static _bgComplete: egret.Handler = null;
// 		/**
// 		 * 微信背景音频
// 		 */
// 		private static _bgAudio: any = null;
// 		/**
// 		 * 背景音乐是否播放中
// 		 */
// 		private static _bgPlaying: boolean = false;
// 		/**
// 		 * 音效字典
// 		 */
// 		private static _soundDic: touch.Dictionary = new touch.Dictionary();
// 		/**
// 		 * 背景音乐音量
// 		 */
// 		private static _musicVolume: number = 1;
// 		/**
// 		 * 音效音量
// 		 */
// 		private static _soundVolume: number = 1;

// 		/**
// 		 * 构造函数
// 		 */
// 		public static init() {
// 			if (egr.Browser.onMiniGame) {
// 				this._wx = Laya.Browser.window.wx;
// 				let self = this;
// 				//回到前台时恢复背景音乐
// 				this._wx.onShow(function () {
// 					if (self._bgPlaying && self._bgAudio) {
// 						self._bgAudio.play();
// 					}
// 				});

// 				this._wx.onAudioInterruptionEnd(function () {
// 					if (self._bgPlaying && self._bgAudio) {
// 						self._bgAudio.play();
// 					}
// 				});
// 			}
// 		}

// 		/**
// 		 * 销毁函数
// 		 */
// 		public static destory(): void {
// 			this._wx = null;
// 		}

// 		/**
//          * 播放背景音乐。背景音乐同时只能播放一个，如果在播放背景音乐时再次调用本方法，会先停止之前的背景音乐，再播发当前的背景音乐。
//          * @param url		声音文件地址。
//          * @param loop		是否循环
//          * @param complete	声音播放完成回调。
//          */
// 		public static playMusic(url: string, loop: boolean, complete?: Laya.Handler): void {
// 			url = Laya.URL.formatURL(url);
// 			this._bgPlaying = true;
// 			if (Laya.Browser.onMiniGame) {
// 				if (this._bgUrl == url && this._bgAudio != null) {
// 					this._bgAudio.loop = loop;
// 					this._bgAudio.volume = this._musicVolume;
// 					this._bgAudio.play();
// 				}
// 				else {
// 					this._bgUrl = url;
// 					if (this._bgAudio != null) {
// 						this._bgAudio.destroy();
// 						this._bgAudio = null;
// 					}
// 					this._bgAudio = this._wx.createInnerAudioContext();
// 					this._bgAudio.autoplay = true;
// 					this._bgAudio.loop = loop;
// 					this._bgAudio.volume = this._musicVolume;
// 					this._bgAudio.src = this._bgUrl;
// 				}
// 			}
// 			else {
// 				Laya.SoundManager.playMusic(url, loop ? 0 : 1, complete);
// 			}
// 		}

// 		/**
//          * 停止播放背景音乐（不包括音效）。
//          * @param url  声音文件地址。
//          */
// 		public static stopMusic(): void {
// 			if (Laya.Browser.onMiniGame) {
// 				if (this._bgPlaying && this._bgAudio != null) {
// 					this._bgAudio.stop();
// 				}
// 			}
// 			else {
// 				Laya.SoundManager.stopMusic();
// 			}

// 			this._bgPlaying = false;
// 		}

// 		/**
// 		 * 播放音效
// 		 * @param url 
// 		 */
// 		public static playSound(url: string): void {
// 			url = Laya.URL.formatURL(url);
// 			if (Laya.Browser.onMiniGame) {
// 				let audio = this._soundDic.get(url);
// 				if (null == audio) {
// 					audio = this._wx.createInnerAudioContext();
// 					audio.src = url;
// 					audio.volume = this._soundVolume;
// 					audio.play();
// 					this._soundDic.set(url, audio);
// 				}
// 				else {
// 					if (Laya.Browser.onIOS) {
// 						audio.seek(0);
// 					}
// 					else {
// 						audio.stop();
// 					}
// 					audio.play();
// 				}
// 			}
// 			else {
// 				Laya.SoundManager.playSound(url, 1);
// 			}
// 		}

// 		/**
// 		 * 停止音效
// 		 * @param url 
// 		 * @param url 
// 		 */
// 		public static stopSound(url: string): void {
// 			url = Laya.URL.formatURL(url);
// 			if (Laya.Browser.onMiniGame) {
// 				let audio = this._soundDic.get(url);
// 				if (audio != null) {
// 					audio.stop();
// 				}
// 			}
// 			else {
// 				Laya.SoundManager.stopSound(url);
// 			}
// 		}


// 		/**
//          * 设置背景音乐音量。音量范围从 0（静音）至 1（最大音量）。
//          * @param volume	音量。初始值为1。音量范围从 0（静音）至 1（最大音量）。
//          */
// 		public static setMusicVolume(volume: number): void {
// 			if (Laya.Browser.onMiniGame) {
// 				this._musicVolume = volume;
// 				if (this._bgAudio != null) {
// 					this._bgAudio.volume = this._musicVolume;
// 				}
// 			}
// 			else {
// 				Laya.SoundManager.setMusicVolume(volume);
// 			}
// 		}

// 		/**
//          * 设置声音音量
//          * @param volume	音量。初始值为1。音量范围从 0（静音）至 1（最大音量）。
//          */
// 		public static setSoundVolume(volume: number): void {
// 			if (Laya.Browser.onMiniGame) {
// 				this._soundVolume = volume;
// 				this._soundDic.values.forEach(element => {
// 					if (element != null) {
// 						element.volume = this._soundVolume;
// 					}
// 				});
// 			}
// 			else {
// 				Laya.SoundManager.setSoundVolume(volume);
// 				Laya.SoundManager.soundMuted = (0 == volume) ? true : false;
// 			}
// 		}
// 	}
// }