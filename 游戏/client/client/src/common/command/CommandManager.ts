/**
* momo 
*/
module touch {
	/**
	 * 命令管理器
	 */
	export class CommandManager extends Laya.EventDispatcher implements IObjectable {
		/**
		 * 命令集合
		 */
		private _commands: Array<Command> = null;
		/**
		 * 是否正在执行命令
		 */
		private _isRunning: boolean = false;
		/**
		 * 是否用对象池
		 */
		private _usePool: boolean = false

		/**
		 * 构造函数
		 */
		constructor(usePool: boolean = false) {
			super();
			this._commands = new Array<Command>();
			this._isRunning = false;
			this._usePool = usePool
		}

		/**
		 * 销毁函数
		 */
		public destroy(): void {
			this.clear();
			this._commands = null;
		}

		/**
		 * 清理
		 */
		public clear(): void {
			this._isRunning = false;
			if (this._usePool) {
				this._commands.forEach(element => {
					Pool.recover(element.name, element);
				});
			} else {
				this._commands.forEach(element => {
					element.destroy()
				});
			}
			this._commands.splice(0, this._commands.length);
		}

		/**
		 * 执行命令
		 * @param command 命令
		 */
		public run(command: Command): void {
			if (this._commands != null && command != null) {
				this._commands.push(command);
				if (!this._isRunning) {
					this.runCommand();
				}
			}
		}

		/**
		 * 是否空闲
		 */
		public get isFree(): boolean {
			return !this._isRunning && (0 == this._commands.length);
		}

		/**
		 * 执行命令
		 */
		private runCommand(): void {
			if (this._commands.length > 0) {
				this._isRunning = true;
				let command = this._commands[0];
				command.once(Laya.Event.COMPLETE, this, this.onCommandRunOver)
				console.log("command run: " + command.name + " time " + Laya.timer.currTimer)
				command.run();
			}
			else {
				this.event(Laya.Event.COMPLETE);
			}
		}

		/**
		 * 命令执行完毕
		 */
		private onCommandRunOver(): void {
			this._isRunning = false;
			let commands = this._commands.splice(0, 1);
			if (this._usePool) {
				Pool.recover(commands[0].name, commands[0]);
			} else {
				commands[0].destroy()
			}
			this.runCommand();
		}
	}
}