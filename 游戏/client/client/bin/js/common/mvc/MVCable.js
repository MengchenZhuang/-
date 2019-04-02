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
     * 可作为MVC的对象
     */
    var MVCable = /** @class */ (function (_super) {
        __extends(MVCable, _super);
        /**
         * 构造函数
         */
        function MVCable() {
            var _this = _super.call(this) || this;
            /**
             * 数据管理器
             */
            _this._dataMgr = null;
            /**
             * 视图管理器
             */
            _this._viewMgr = null;
            /**
             * 控制器管理器
             */
            _this._controlMgr = null;
            //数据管理器
            _this._dataMgr = new touch.MVCDataManager(_this);
            //视图管理器
            _this._viewMgr = new touch.MVCViewManager(_this, _this._dataMgr);
            //控制器管理器
            _this._controlMgr = new touch.MVCControlManager(_this, _this._dataMgr, _this._viewMgr);
            return _this;
        }
        /**
         * 销毁
         */
        MVCable.prototype.destroy = function () {
            if (this._controlMgr != null) {
                this._controlMgr.destroy();
                this._controlMgr = null;
            }
            if (this._viewMgr != null) {
                this._viewMgr.destroy();
                this._viewMgr = null;
            }
            if (this._dataMgr != null) {
                this._dataMgr.destroy();
                this._dataMgr = null;
            }
        };
        /**
         * 清理
         */
        MVCable.prototype.clear = function () {
        };
        /**
         * 初始化
         */
        MVCable.prototype.initialize = function () {
            if (this._dataMgr != null) {
                this._dataMgr.initialize();
            }
            if (this._viewMgr != null) {
                this._viewMgr.initialize();
            }
            if (this._controlMgr != null) {
                this._controlMgr.initialize();
            }
        };
        /**
         * 反初始化
         */
        MVCable.prototype.uninitialize = function () {
            if (this._controlMgr != null) {
                this._controlMgr.uninitialize();
            }
            if (this._viewMgr != null) {
                this._viewMgr.uninitialize();
            }
            if (this._dataMgr != null) {
                this._dataMgr.uninitialize();
            }
        };
        /**
         * 获得数据对象
         * @param dataClass 数据类型
         * @returns 数据对象
         */
        MVCable.prototype.getData = function (dataClass) {
            if (null == this._dataMgr) {
                return null;
            }
            return this._dataMgr.get(dataClass);
        };
        /**
         * 添加数据对象
         * @param dataClass 数据类型
         * @returns 数据对象
         */
        MVCable.prototype.addData = function (dataClass) {
            if (null == this._dataMgr) {
                return null;
            }
            return this._dataMgr.add(dataClass);
        };
        /**
         * 获得视图对象
         * @param viewClass 视图类型
         * @returns 视图对象
         */
        MVCable.prototype.getView = function (viewClass) {
            if (null == this._viewMgr) {
                return null;
            }
            return this._viewMgr.get(viewClass);
        };
        /**
         * 添加视图对象
         * @param viewClass 视图类型
         * @returns 视图对象
         */
        MVCable.prototype.addView = function (viewClass) {
            if (null == this._viewMgr) {
                return null;
            }
            return this._viewMgr.add(viewClass);
        };
        /**
         * 获得控制器对象
         * @param 控制器对象类型
         * @returns 控制器对象
         */
        MVCable.prototype.getControl = function (controlClass) {
            if (null == this._controlMgr) {
                return null;
            }
            return this._controlMgr.get(controlClass);
        };
        /**
         * 添加控制器对象
         * @param 控制器对象类型
         * @returns 控制器对象
         */
        MVCable.prototype.addControl = function (controlClass) {
            if (null == this._controlMgr) {
                return null;
            }
            return this._controlMgr.add(controlClass);
        };
        return MVCable;
    }(Laya.EventDispatcher));
    touch.MVCable = MVCable;
})(touch || (touch = {}));
//# sourceMappingURL=MVCable.js.map