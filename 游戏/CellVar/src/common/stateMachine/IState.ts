/**
* momo 
*/
module touch {
	/**
	 * 状态机接口
	 */
	export interface IState {
		/**
		 * 状态进入状态栈
		 */
		onStateEnter(): void;

        /**
         * 状态退出状态栈 
         */
		onStateLeave(): void;

        /**
         * 状态由栈顶变成非栈顶 
         */
		onStateOverride(): void;

        /**
         * 状态由非栈顶变成栈顶  
         */
		onStateResume(): void;

        /**
         * 更新 
         */
		update(): void;
	}
}