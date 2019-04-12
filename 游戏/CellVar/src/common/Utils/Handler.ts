module touch{
    export class Handler {
        private _caller:any;
        private _callback:Function;
        private _once:boolean;
        private _arg:any[];
        private _id = 0;
        private static _pool:Handler[] = [];
        private static _gid = 1;

        constructor(caller:any, callback:Function, arg:any[], once = false) {
            this._id = 0;
            this.setTo(caller, callback, arg, once);
        }

        public run():void {
            if (this._callback == null) return;
            this._callback.apply(this._caller, this._arg);
            if (this._once) {
                this.recover();
            }
        }

        public setTo(caller:any, callback:Function, arg:any[], once = false):void {
            this._caller = caller;
            this._callback = callback;
            this._once = once;
            this._arg = arg;
            Handler._gid++;
            this._id =Handler._gid;
        }

        public clear():void {
            this._caller = null;
            this._callback = null;
            this._arg = null;
            this._id = 0;
        }

        public recover():void {
            if (this._id > 0) {
                this.clear();
                Handler._pool.push(this);
            }
        }

        public static create(caller:any, callback:Function, arg?:any[], once = true):Handler {
            if (once && Handler._pool.length > 0) {
                var handler = Handler._pool.pop();
                handler.setTo(caller, callback, arg, once);
                return handler;
            } else {
                return new Handler(caller, callback, arg, once);
            }
        }

        public static destory():void{
            Handler._pool.length=0;
        }
    }
}
