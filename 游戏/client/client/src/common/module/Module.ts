/**
* momo 
*/
module touch {
	/**
	 * 模块基类
	 */
	export interface Module {
		/**
		 * 销毁
		 */
		destroy(): void 

		/**
		 * 初始化
		 */
		initialize(): void 

		/**
		 * 反初始化
		 */
		uninitialize(): void 

		/**
         * 更新 
         */
		update(): void 
	}
}