/**
* momo 
*/
module touch {
	/**
	 * 主页界面
	 */
	export class IndexUI extends UIable {
		/**
		 * 构造函数
		 */
		constructor() {
			super(EUIType.VIEW);

			this.addView(IndexView);
			this.addControl(IndexControl);
		}
	}
}