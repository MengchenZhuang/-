/**
* momo 
*/
module touch {
	/**
	 * 工具类
	 */
	export class Util {
		/**
		 * 时间轴动画
		 */
		private static _timeLine: Laya.TimeLine;

		/**
		 * 区间随机整数
		 * @param min 
		 * @param max 
		 */
		public static randomInt(min: number, max: number): number {
			var d = max - min + 1;
			return Math.floor(min + Math.random() * d);
		}

		/**
		 * 获取符号
		 * @param value 1或者-1 
		 */
		public static getSign(value: number): number {
			return value > 0 ? 1 : -1;
		}

		/**
		 * 震屏
		 * @param root 
		 * @param shakeX
		 * @param shakeY
		 */
		public static shakeScreen(root: Laya.Sprite, shakeX: number, shakeY: number): void {
			if (this._timeLine) {
				return;
			}
			var shakeToX: number = root.x + shakeX;
			var shakeToY: number = root.y + shakeY;
			var shakeFromX: number = root.x - shakeX;
			var shakeFromY: number = root.y - shakeY;

			this._timeLine = new Laya.TimeLine();
			this._timeLine.to(root, { x: shakeToX, y: shakeToY }, 50, Laya.Ease.backOut, 0).to(root,
				{ x: shakeFromX, y: shakeFromY }, 50, Laya.Ease.bounceIn, 0).to(root,
				{ x: shakeToX, y: shakeToY }, 50, Laya.Ease.bounceOut, 0).to(root,
				{ x: shakeFromX, y: shakeFromY }, 50, Laya.Ease.bounceIn, 0).to(root,
				{ x: shakeToX, y: shakeToY }, 50, Laya.Ease.bounceOut, 0).to(root,
				{ x: root.x, y: root.y }, 50, Laya.Ease.bounceIn, 0);
			this._timeLine.on(Laya.Event.COMPLETE, this, this.onShakeOver);
			this._timeLine.play();
		}

		/**
		 * 震屏结束
		 */
		private static onShakeOver(): void {
			this._timeLine.reset();
			this._timeLine.destroy();
			this._timeLine = null;
		}
	}
}