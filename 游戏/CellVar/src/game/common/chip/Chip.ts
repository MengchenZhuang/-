module touch{

    export class Chip extends fairygui.GImage implements IObjectable{
        /**
		 * 移动角度
		 */
		public radian: number = 0;
		/**
		 * x方向速度
		 */
		public speedX: number = 0;
		/**
		 * y方向速度
		 */
		public speedY: number = 0;
		/**
		 * 生命
		 */
		public life: number = 0;

		/**
		 * 构造函数
		 */
		constructor() {
			super();

		}

		/**
		 * 销毁函数
		 */
		public destroy(): void {
			this.clear();
            super.dispose();
		}

		/**
		 * 清理函数
		 */
		public clear(): void {
			//this.removeSelf();
            this.removeFromParent();
		}

		/**
		 * 设置数据
		 */
		public setData(skinIndex: number): void {
			this.texture =RES.getRes("game/chip" + skinIndex + "_png");
			this.speedX = Math.random() * 10;
			this.speedY = Math.random() * 10;
			this.radian = Math.random() * Math.PI * 2;
			this.life = Util.randomInt(120, 600);
		}
    }
}