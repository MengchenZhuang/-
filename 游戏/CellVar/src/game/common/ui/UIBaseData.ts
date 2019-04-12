/**
* momo 
*/
module touch {
	/**
	 * 界面基本数据
	 */
	export class UIBaseData extends MVCData {
		/**
		 * 打开参数类
		 */
		public openParamClass: any = null;
		/**
		 * 是否打开
		 */
		public isOpened: boolean = false;
		/**
		 * 是否加载中
		 */
		public isLoading: boolean = false;
		/**
		 * 资源是否已经加载
		 */
		public isLoaded: boolean = false;
	}
}