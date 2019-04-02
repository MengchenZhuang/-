/**
* momo
*/
var touch;
(function (touch) {
    /**
     * 界面事件
     */
    var UIEvent = /** @class */ (function () {
        function UIEvent() {
        }
        /**
         * 打开
         */
        UIEvent.OPEN = "open";
        /**
         * 关闭
         */
        UIEvent.CLOSE = "close";
        return UIEvent;
    }());
    touch.UIEvent = UIEvent;
})(touch || (touch = {}));
//# sourceMappingURL=UIEvent.js.map