/**
* momo 
*/
module touch {
	/**
	 * 可作为UI的对象
	 */
	export class UIable extends MVCable {
		/**
		 * 图集路径集合
		 */
		private _atlasUrls: Array<string> = null;
		/**
		 * 界面基本数据
		 */
		private _baseData: UIBaseData = null;
		/**
		 * 进度句柄
		 */
		private _progressHandler: Handler = null;
		/**
		 * 界面类型
		 */
		private _type: EUIType = EUIType.VIEW;

		/**
		 * 构造函数
		 */
		constructor(type: EUIType) {
			super();

			this._type = type;
			this._baseData = this.addData(UIBaseData);
			this._atlasUrls = new Array();
		}

		/**
		 * 销毁
		 */
		public destroy(): void {
			if (this._atlasUrls != null) {
				
				//Laya.loader.cancelLoadByUrls(this._atlasUrls);
				this._atlasUrls.splice(0, this._atlasUrls.length);
				this._atlasUrls = null;
			}
			this._baseData = null;

			//Laya.loader.cancelLoadByUrls(this._atlasUrls);

			if (this._progressHandler != null) {
				this._progressHandler.recover();
				this._progressHandler = null;
			}

			super.destroy();
		}

		/**
		 * 设置打开参数类
		 * @param openParamClass 打开参数类
		 */
		public setOpenParam<T extends MVCData>(openParamClass: { new (): T; }): void {
			this._baseData.openParamClass = openParamClass;
			this.addData(this._baseData.openParamClass);
		}

		/**
         * 获取打开参数
         * @return 打开参数
         */
		public getOpenParam<T extends MVCData>(): T {
			if (null == this._baseData.openParamClass) {
				alert("没有设置打开参数类");
				return null;
			}
			return this.getData<T>(this._baseData.openParamClass);
		}

		/**
		 * 打开界面
		 */
		public open(): void {
			if (this._baseData.isLoading || this._baseData.isOpened) {
				return;
			}

			if (this._baseData.isLoaded) {
				egret.callLater(this.doOpen, this);
			}
			else {
				egret.callLater(this.doLoad, this);
			}
		}

		/**
		 * 关闭界面
		 */
		public close(): void {
			//Laya.timer.clear(this, this.doLoad);

			if (this._baseData.isLoading ||
				!this._baseData.isOpened) {
				return;
			}

			this.doHide();
		}

		/**
		 * 添加图集
		 * @param atlasName 图集名字
		 */
		public addAtlas(atlasName: string): void {
			this._atlasUrls.push("res/atlas/" + atlasName + ".atlas");
		}

		/**
		 * 是否打开
		 */
		public get isOpen(): boolean {
			return this._baseData.isOpened;
		}

		/**
		 * 被打开时
		 */
		protected onOpen(): void {

		}

		/**
         *  执行加载 
         * 
         */
		private doLoad(): void {
			let loader:egret.URLLoader = new egret.URLLoader();
			this._baseData.isLoading = true;
			this._progressHandler = Handler.create(this, this.onAtlasLoadProgress, null, false);
			if (this._atlasUrls.length > 0) {
				//Laya.loader.load(this._atlasUrls,Handler.create(this, this.onAtlasLoadComplete),this._progressHandler);
			}
			else {
				this.onAtlasLoadComplete(true);
			}
		}

		/**
		 * 资源加载完毕
		 */
		private onAtlasLoadComplete(result: boolean): void {
			if (this._progressHandler != null) {
				this._progressHandler.recover();
				this._progressHandler = null;
			}
			if (!result) {
				//egret.MouseManager.instance.disableMouseEvent = false;
				console.assert(false, "atlas 资源加载失败！");
				return;
			}

			this._baseData.isLoading = false;
			this.doOpen();
		}

		/**
		 * 资源加载进度
		 * @param progress 进度
		 */
		private onAtlasLoadProgress(progress: number): void {

		}

		/**
         *  执行开启 
         * 
         */
		private doOpen(): void {
			if (null == this._dataMgr ||
				null == this._viewMgr ||
				null == this._controlMgr) {
				return;
			}

			this._baseData.isOpened = true;
			this._dataMgr.initialize();
			this._viewMgr.initialize();
			this._controlMgr.initialize();

			this.onOpen();

			UIModule.instance.event(UIEvent.OPEN, this);
		}

        /**
         *  执行隐藏
         * 
         */
		private doHide(): void {
			if (null == this._dataMgr ||
				null == this._viewMgr ||
				null == this._controlMgr ||
				!this._baseData.isOpened) {
				return;
			}

			this._controlMgr.uninitialize();
			this._viewMgr.uninitialize();
			this._dataMgr.uninitialize();
			this._baseData.isOpened = true;
		}
	}
}