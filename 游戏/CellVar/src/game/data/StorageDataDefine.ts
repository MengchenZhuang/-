/**
* momo 
*/
module touch {
	/**
     * 数据名字枚举
     */
	export enum EnumStorageDataName {
		SHOP_BUY_AMMO_TIMES_CACHE,//武器已购买子弹次数
		SHOP_LEVELUP_TIMES_CACHE,//武器已升级次数
		WEAPONSTATE //武器解锁状态
	}

	/**
	 * 数据类型
	 */
	export enum EnumStorageDataType {
		INT,    // 整形
		FLOAT,  // 浮点数
		STRING, // 字符串
		OBJECT, // 对象
	}
}