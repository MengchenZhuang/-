/**
* momo 
*/
module touch {
	/**
	 * 资源池（对laya的pool的封装）
	 */
	export class Pool {
		/**
		 * 获取对象
		 * @param name 名字
		 * @param cls 类
		 */
		public static get<T extends IObjectable>(name: string, cls: { new (): T; }): T {
			return Laya.Pool.getItemByClass(name, cls);
		}

		/**
		 * 将对象放到对应类型标识的对象池中。
		 * @param name 名字
		 * @param object 对象
		 */
		public static recover<T extends IObjectable>(name: string, object: T): void {
			if (object != null) {
				object.clear();
				Laya.Pool.recover(name, object);
			}
		}

		/**
		 * 获取系统对象
		 * @param name 名字
		 * @param cls 类
		 */
		public static getSysObj<T extends Object>(name: string, cls: { new (): T; }): T {
			return Laya.Pool.getItemByClass(name, cls);
		}

		/**
		 * 将系统对象放到对应类型标识的对象池中。
		 * @param name 名字
		 * @param object 对象
		 */
		public static recoverSysObj<T extends Object>(name: string, object: T): void {
			if (object != null) {
				Laya.Pool.recover(name, object);
			}
		}
	}
}