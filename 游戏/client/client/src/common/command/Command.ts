/**
* momo
*/
module touch {
	/**
	 * 命令基类
	 */
	export class Command extends Laya.EventDispatcher implements IObjectable {
		/**
		 * 获取名字
		 */
		public get name(): string {
			alert("必须继承");
			return "Command";
		}

		/**
		 * 销毁函数
		 */
		public destroy(): void {
			this.clear();
		}

		/**
		 * 清理
		 */
		public clear(): void {

		}

		/**
		 * 执行
		 */
		public run(): void {
			this.onRunOver();
		}

		/**
		 * 执行完毕
		 */
		protected onRunOver(): void {
			this.event(Laya.Event.COMPLETE);
		}
	}
}