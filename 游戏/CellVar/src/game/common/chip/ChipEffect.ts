/**
* momo 
*/
module touch {
	/**
	 * 碎片特效
	 */
	export class ChipEffect extends fairygui.GComponent {
		/**
		 * 最大碎片数量
		 */
		public static MAX_CHIP: number = 80;

		/**
		 * 碎片集合
		 */
		private _chips: Array<Chip> = null;
		/**
		 * 构造函数
		 */

        private timer:egret.Timer;
		constructor() {
			super();

			this._chips = new Array<Chip>();
            this.timer = new egret.Timer(1000,0);
            this.timer.addEventListener(egret.TimerEvent.TIMER,this.onLoop,this);
            this.timer.start();
			//Laya.timer.frameLoop(1, this, this.onLoop);
		}

		/**
		 * 销毁函数
		 */
		public destroy(): void {
			this.timer.removeEventListener(egret.TimerEvent.TIMER,this.onLoop,this);
			this._chips.forEach(element => {
				Pool.recover("Chip", element);
			});
			this._chips.splice(0, this._chips.length);
			this._chips = null;

			//super.destroy();
		}

		/**
		 * 循环
		 */
		public onLoop(): void {
			for (var index = 0; index < this._chips.length;) {
				var chip: Chip = this._chips[index];
				if (null == chip) {
					this._chips.splice(index, 1);
					continue;
				}
				chip.x += Math.cos(chip.radian) * chip.speedX;
				chip.y += Math.sin(chip.radian) * chip.speedY;
				chip.life--;
				if (chip.life <= 0) {
					Pool.recover("Chip", chip);
					this._chips.splice(index, 1);
				}
				else {
					index++;
				}
			}
		}

		/**
		 * 添加圆
		 * @param x 
		 * @param y 
		 * @param radius 
		 * @param type 
		 */
		public addCircle(x: number, y: number, radius: number, type: EChip): void {
			for (let radians = 0; radians <= Math.PI * 2; radians += Math.PI / 5) {
				let chip = this.createChip();
				chip.x = x + radius * Math.cos(radians);
				chip.y = y + radius * Math.sin(radians);
				chip.setData(type);
				this.addChild(chip);
				this._chips.push(chip);
			}
		}

		/**
		 * 创建碎片
		 */
		private createChip(): Chip {
			if (this._chips.length >= ChipEffect.MAX_CHIP) {
				let chip:Chip = this._chips.splice(0, 1)[0];
				chip.clear();
				return chip;
			}
			else {
				return Pool.get("Chip", Chip);
			}
		}
	}
}