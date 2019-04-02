/**
* momo 
*/
module touch {
	/**
	 * 资源池对象
	 */
	export interface IObjectable extends IDestoryable{
		/**
		 * 清理
		 */
		clear(): void;
	}
}