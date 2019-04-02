var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
* momo
*/
var touch;
(function (touch) {
    /**
     * 可作为UI的对象
     */
    var UIable = /** @class */ (function (_super) {
        __extends(UIable, _super);
        /**
         * 构造函数
         */
        function UIable(type) {
            var _this = _super.call(this) || this;
            /**
             * 图集路径集合
             */
            _this._atlasUrls = null;
            /**
             * 界面基本数据
             */
            _this._baseData = null;
            /**
             * 进度句柄
             */
            _this._progressHandler = null;
            /**
             * 界面类型
             */
            _this._type = touch.EUIType.VIEW;
            _this._type = type;
            _this._baseData = _this.addData(touch.UIBaseData);
            _this._atlasUrls = new Array();
            return _this;
        }
        /**
         * 销毁
         */
        UIable.prototype.destroy = function () {
            if (this._atlasUrls != null) {
                Laya.loader.cancelLoadByUrls(this._atlasUrls);
                this._atlasUrls.splice(0, this._atlasUrls.length);
                this._atlasUrls = null;
            }
            this._baseData = null;
            Laya.loader.cancelLoadByUrls(this._atlasUrls);
            if (this._progressHandler != null) {
                this._progressHandler.recover();
                this._progressHandler = null;
            }
            _super.prototype.destroy.call(this);
        };
        /**
         * 设置打开参数类
         * @param openParamClass 打开参数类
         */
        UIable.prototype.setOpenParam = function (openParamClass) {
            this._baseData.openParamClass = openParamClass;
            this.addData(this._baseData.openParamClass);
        };
        /**
         * 获取打开参数
         * @return 打开参数
         */
        UIable.prototype.getOpenParam = function () {
            if (null == this._baseData.openParamClass) {
                alert("没有设置打开参数类");
                return null;
            }
            return this.getData(this._baseData.openParamClass);
        };
        /**
         * 打开界面
         */
        UIable.prototype.open = function () {
            if (this._baseData.isLoading || this._baseData.isOpened) {
                return;
            }
            if (this._baseData.isLoaded) {
                Laya.timer.callLater(this, this.doOpen);
            }
            else {
                Laya.timer.callLater(this, this.doLoad);
            }
        };
        /**
         * 关闭界面
         */
        UIable.prototype.close = function () {
            Laya.timer.clear(this, this.doLoad);
            if (this._baseData.isLoading ||
                !this._baseData.isOpened) {
                return;
            }
            this.doHide();
        };
        /**
         * 添加图集
         * @param atlasName 图集名字
         */
        UIable.prototype.addAtlas = function (atlasName) {
            this._atlasUrls.push("res/atlas/" + atlasName + ".atlas");
        };
        Object.defineProperty(UIable.prototype, "isOpen", {
            /**
             * 是否打开
             */
            get: function () {
                return this._baseData.isOpened;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 被打开时
         */
        UIable.prototype.onOpen = function () {
        };
        /**
         *  执行加载
         *
         */
        UIable.prototype.doLoad = function () {
            this._baseData.isLoading = true;
            this._progressHandler = Laya.Handler.create(this, this.onAtlasLoadProgress, null, false);
            if (this._atlasUrls.length > 0) {
                Laya.loader.load(this._atlasUrls, Laya.Handler.create(this, this.onAtlasLoadComplete), this._progressHandler);
            }
            else {
                this.onAtlasLoadComplete(true);
            }
        };
        /**
         * 资源加载完毕
         */
        UIable.prototype.onAtlasLoadComplete = function (result) {
            if (this._progressHandler != null) {
                this._progressHandler.recover();
                this._progressHandler = null;
            }
            if (!result) {
                Laya.MouseManager.instance.disableMouseEvent = false;
                console.assert(false, "atlas 资源加载失败！");
                return;
            }
            this._baseData.isLoading = false;
            this.doOpen();
        };
        /**
         * 资源加载进度
         * @param progress 进度
         */
        UIable.prototype.onAtlasLoadProgress = function (progress) {
        };
        /**
         *  执行开启
         *
         */
        UIable.prototype.doOpen = function () {
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
            touch.UIModule.instance.event(touch.UIEvent.OPEN, this);
        };
        /**
         *  执行隐藏
         *
         */
        UIable.prototype.doHide = function () {
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
        };
        return UIable;
    }(touch.MVCable));
    touch.UIable = UIable;
})(touch || (touch = {}));
//# sourceMappingURL=UIable.js.map