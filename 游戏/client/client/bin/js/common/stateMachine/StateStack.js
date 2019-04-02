/**
* momo
*/
var touch;
(function (touch) {
    /**
     * 状态堆栈
     */
    var StateStack = /** @class */ (function () {
        /**
         * 构造函数
         */
        function StateStack() {
            /**
             *状态堆栈
             */
            this._stack = new Array();
        }
        /**
         * 压入状态
         * @param state
         *
         */
        StateStack.prototype.pushState = function (state) {
            if (null == state) {
                alert("The push state is null");
                return;
            }
            if (this._stack.length > 0) {
                this._stack[this._stack.length - 1].onStateOverride();
            }
            this._stack.push(state);
            state.onStateEnter();
        };
        /**
         * 弹出状态
         * @return 状态
         *
         */
        StateStack.prototype.popState = function () {
            if (0 == this._stack.length) {
                return null;
            }
            var state = this._stack.pop();
            state.onStateLeave();
            if (this._stack.length > 0) {
                this._stack[this._stack.length - 1].onStateResume();
            }
            return state;
        };
        /**
         * 修改栈顶状态
         * @param state 新栈顶状态
         * @return 原栈顶状态
         *
         */
        StateStack.prototype.changeState = function (state) {
            if (null == state) {
                alert("The change state is null");
                return null;
            }
            var oldState = null;
            if (this._stack.length > 0) {
                oldState = this._stack.pop();
                oldState.onStateLeave();
            }
            this._stack.push(state);
            state.onStateEnter();
            return oldState;
        };
        /**
         * 清空栈中原来的所有状态，并压入新的状态
         * @param state 新栈顶状态
         *
         */
        StateStack.prototype.setState = function (state) {
            if (null == state) {
                alert("The set state is null");
                return;
            }
            while (this._stack.length > 0) {
                var oldstate = this._stack.pop();
                oldstate.onStateLeave();
            }
            this._stack.push(state);
            state.onStateEnter();
        };
        /**
         * 获取栈顶状态
         * @return 栈顶状态
         *
         */
        StateStack.prototype.topState = function () {
            if (this._stack.length > 0) {
                return this._stack[this._stack.length - 1];
            }
            return null;
        };
        /**
         * 清空状态堆栈
         * @return
         *
         */
        StateStack.prototype.clearState = function () {
            var stack = new Array();
            while (this._stack.length > 0) {
                var state = this._stack.pop();
                state.onStateLeave();
                stack.push(state);
            }
            return stack;
        };
        Object.defineProperty(StateStack.prototype, "count", {
            /**
             * 获取状态数量
             * @return 状态数量
             */
            get: function () {
                return this._stack.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 更新(只更新栈中的状态)
         */
        StateStack.prototype.update = function () {
            this._stack.forEach(function (element) {
                element.update();
            });
        };
        return StateStack;
    }());
    touch.StateStack = StateStack;
})(touch || (touch = {}));
//# sourceMappingURL=StateStack.js.map