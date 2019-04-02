/**
* momo 
*/
module touch {
	/**
	 * 状态堆栈
	 */
	export class StateStack {
		/**
         *状态堆栈 
         */
		protected _stack: Array<IState> = new Array<IState>();

		/**
		 * 构造函数
		 */
		constructor() {

		}

		/**
		 * 压入状态 
		 * @param state
		 * 
		 */
		public pushState(state: IState): void {
			if (null == state) {
				alert("The push state is null");
				return;
			}

			if (this._stack.length > 0) {
				this._stack[this._stack.length - 1].onStateOverride();
			}

			this._stack.push(state);
			state.onStateEnter();
		}

		/**
		 * 弹出状态 
		 * @return 状态
		 * 
		 */
		public popState(): IState {
			if (0 == this._stack.length) {
				return null;
			}

			var state: IState = this._stack.pop();
			state.onStateLeave();

			if (this._stack.length > 0) {
				this._stack[this._stack.length - 1].onStateResume();
			}

			return state;
		}

		/**
		 * 修改栈顶状态 
		 * @param state 新栈顶状态
		 * @return 原栈顶状态
		 * 
		 */
		public changeState(state: IState): IState {
			if (null == state) {
				alert("The change state is null");
				return null;
			}

			var oldState: IState = null;
			if (this._stack.length > 0) {
				oldState = this._stack.pop();
				oldState.onStateLeave();
			}

			this._stack.push(state);
			state.onStateEnter();

			return oldState;
		}

		/**
		 * 清空栈中原来的所有状态，并压入新的状态  
		 * @param state 新栈顶状态
		 * 
		 */
		public setState(state: IState): void {
			if (null == state) {
				alert("The set state is null");
				return;
			}

			while (this._stack.length > 0) {
				var oldstate: IState = this._stack.pop();
				oldstate.onStateLeave();
			}

			this._stack.push(state);
			state.onStateEnter();
		}

		/**
		 * 获取栈顶状态 
		 * @return 栈顶状态 
		 * 
		 */
		public topState(): IState {
			if (this._stack.length > 0) {
				return this._stack[this._stack.length - 1];
			}

			return null;
		}

		/**
		 * 清空状态堆栈 
		 * @return 
		 * 
		 */
		public clearState(): Array<IState> {
			var stack: Array<IState> = new Array<IState>();
			while (this._stack.length > 0) {
				var state: IState = this._stack.pop();
				state.onStateLeave();
				stack.push(state);
			}

			return stack;
		}

		/**
		 * 获取状态数量 
		 * @return 状态数量
		 */
		public get count(): number {
			return this._stack.length;
		}

		/**
		 * 更新(只更新栈中的状态)
		 */
		public update(): void {
			this._stack.forEach(element => {
				element.update();
			});
		}
	}
}