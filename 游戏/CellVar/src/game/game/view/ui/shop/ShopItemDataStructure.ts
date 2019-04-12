/**
* name 
*/
module touch{
	export class ShopItemDataStructure{
		/**购买子弹价格 */
		bulletPrice: number;
		/**升级价格 */
		levelUpPrice: number;
		/**当前购买子弹次数 */
		curBuyBulletTimes: number;
		/**解锁花费*/
		openPrice: number;
		/**名称*/
		name: string
		/**解锁状态 */
		isLock: boolean;
		/**一次购买子弹数 */
		onceCanBuyNum:number;
		/**最大购买数量 */
		maxCanBuyNum:number;
		/**最大升级 */
		maxLevelupNum:number;
		/**当前级数 */
		curLevel:number;
	}
}