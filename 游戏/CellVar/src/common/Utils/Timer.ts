// module touch{
//   /**
//      * <code>Timer</code> 是时钟管理类。它是一个单例，不要手动实例化此类，应该通过 Laya.timer 访问。
//      */
//     class Timer {
        
//         /**@private */
//         private static _pool:Array<TimerHandler> = [];
//         /**@private */
//         public static _mid:number = 1;
        
//         /*[DISABLE-ADD-VARIABLE-DEFAULT-VALUE]*/
//         /** 时针缩放。*/
//         public scale:number = 1;
//         /** 当前帧开始的时间。*/
//         public currTimer:number =  Date.parse(new Date().toString());
//         /** 当前的帧数。*/
//         public currFrame:number = 0;
//         /**@private 两帧之间的时间间隔,单位毫秒。*/
//         public _delta:number = 0;
//         /**@private */
//         public _lastTimer:number = Date.parse(new Date().toString());
//         /**@private */
//         private  _map:Array<any> = [];
//         /**@private */
//         private  _handlers:Array<any> = [];
//         /**@private */
//         private _temp:Array<any> = [];
//         /**@private */
//         private  _count:number = 0;
        
//         /**
//          * 创建 <code>Timer</code> 类的一个实例。
//          */
//         public Timer(autoActive:boolean = true) {
//             autoActive && Laya.systemTimer && egret.systemTimer.frameLoop(1, this, this._update);
//         }
        
//         /**两帧之间的时间间隔,单位毫秒。*/
//         public get delta():number {
//             return this._delta;
//         }
        
//         /**
//          * @private
//          * 帧循环处理函数。
//          */
//         public  _update():void {
//             if (this.scale <= 0) {
//                 this._lastTimer = Date.parse(new Date().toString());
//                 return;
//             }
//             let frame:number = this.currFrame = this.currFrame + this.scale;
//             let now:number = Date.parse(new Date().toString());
//             this._delta = (now - this._lastTimer) * this.scale;
//             let timer:number = this.currTimer = this.currTimer + this._delta;
//             this._lastTimer = now;
            
//             //处理handler
//             let handlers:Array<TimerHandler> = this._handlers;
//             this._count = 0;
//             for (let i:number = 0, n:number = handlers.length; i < n; i++) {
//                 let handler:TimerHandler = handlers[i];
//                 if (handler.method !== null) {
//                     let t:number = handler.userFrame ? frame : timer;
//                     if (t >= handler.exeTime) {
//                         if (handler.repeat) {
//                             if (!handler.jumpFrame) {
//                                 handler.exeTime += handler.delay;
//                                 handler.run(false);
//                                 if (t > handler.exeTime) {
//                                     //如果执行一次后还能再执行，做跳出处理，如果想用多次执行，需要设置jumpFrame=true
//                                     handler.exeTime += Math.ceil((t - handler.exeTime) / handler.delay) * handler.delay;
//                                 }
//                             } else {
//                                 while (t >= handler.exeTime) {
//                                     handler.exeTime += handler.delay;
//                                     handler.run(false);
//                                 }
//                             }
//                         } else {
//                             handler.run(true);
//                         }
//                     }
//                 } else {
//                     this._count++;
//                 }
//             }
            
//             if (this._count > 30 || frame % 200 === 0) this._clearHandlers();
//         }
        
//         /** @private */
//         private  _clearHandlers():void {
//             let handlers:Array<TimerHandler> = this._handlers;
//             for (let i:number = 0, n:number = handlers.length; i < n; i++) {
//                 let handler:TimerHandler = handlers[i];
//                 if (handler.method !== null) this._temp.push(handler);
//                 else this._recoverHandler(handler);
//             }
//             this._handlers = this._temp;
//             handlers.length = 0;
//             this._temp = handlers;
//         }
        
//         /** @private */
//         private _recoverHandler(handler:TimerHandler):void {
//             if (this._map[handler.key] == handler) this._map[handler.key] = null;
//             handler.clear();
//             Timer._pool.push(handler);
//         }
        
//         /** @private */
//         public _create(useFrame:boolean, repeat:boolean, delay:number, caller:any, method:Function, args:Array<TimerHandler>, coverBefore:Boolean):TimerHandler {
//             //如果延迟为0，则立即执行
//             if (!delay) {
//                 method.apply(caller, args);
//                 return null;
//             }
            
//             //先覆盖相同函数的计时
//             if (coverBefore) {
//                 var handler:TimerHandler = this._getHandler(caller, method);
//                 if (handler) {
//                     handler.repeat = repeat;
//                     handler.userFrame = useFrame;
//                     handler.delay = delay;
//                     handler.caller = caller;
//                     handler.method = method;
//                     handler.args = args;
//                     handler.exeTime = delay + (useFrame ? this.currFrame : this.currTimer + Date.parse(new Date().toString()) - this._lastTimer);
//                     return handler;
//                 }
//             }
            
//             //找到一个空闲的timerHandler
//             handler = Timer._pool.length > 0 ? Timer._pool.pop() : new TimerHandler();
//             handler.repeat = repeat;
//             handler.userFrame = useFrame;
//             handler.delay = delay;
//             handler.caller = caller;
//             handler.method = method;
//             handler.args = args;
//             handler.exeTime = delay + (useFrame ? this.currFrame : this.currTimer + Date.parse(new Date().toString()) - this._lastTimer);
            
//             //索引handler
//             this._indexHandler(handler);
            
//             //插入数组
//             this._handlers.push(handler);
            
//             return handler;
//         }
        
//         /** @private */
//         private _indexHandler(handler:TimerHandler):void {
//             let caller:any= handler.caller;
//             let method:any = handler.method;
//             let cid:number = caller ? caller.$_GID || (caller.$_GID = Utils.getGID()) : 0;
//             let mid:number = method.$_TID || (method.$_TID = (Timer._mid++) * 100000);
//             handler.key = cid + mid;
//             this._map[handler.key] = handler;
//         }
        
//         /**
//          * 定时执行一次。
//          * @param    delay    延迟时间(单位为毫秒)。
//          * @param    caller    执行域(this)。
//          * @param    method    定时器回调函数。
//          * @param    args    回调参数。
//          * @param    coverBefore    是否覆盖之前的延迟执行，默认为 true 。
//          */
//         public once(delay:number, caller:any, method:Function, args:Array<any> = null, coverBefore:Boolean = true):void {
//            this._create(false, false, delay, caller, method, args, coverBefore);
//         }
        
//         /**
//          * 定时重复执行。
//          * @param    delay    间隔时间(单位毫秒)。
//          * @param    caller    执行域(this)。
//          * @param    method    定时器回调函数。
//          * @param    args    回调参数。
//          * @param    coverBefore    是否覆盖之前的延迟执行，默认为 true 。
//          * @param    jumpFrame 时钟是否跳帧。基于时间的循环回调，单位时间间隔内，如能执行多次回调，出于性能考虑，引擎默认只执行一次，设置jumpFrame=true后，则回调会连续执行多次
//          */
//         public loop(delay:number, caller:any, method:Function, args:Array<any> = null, coverBefore:Boolean = true, jumpFrame:Boolean = false):void {
//             var handler:TimerHandler = this._create(false, true, delay, caller, method, args, coverBefore);
//             if (handler) 
//             {handler.jumpFrame = jumpFrame;}
//         }
        
//         /**
//          * 定时执行一次(基于帧率)。
//          * @param    delay    延迟几帧(单位为帧)。
//          * @param    caller    执行域(this)。
//          * @param    method    定时器回调函数。
//          * @param    args    回调参数。
//          * @param    coverBefore    是否覆盖之前的延迟执行，默认为 true 。
//          */
//         public frameOnce(delay:number, caller:any, method:Function, args:Array<any> = null, coverBefore:Boolean = true):void {
//             this._create(true, false, delay, caller, method, args, coverBefore);
//         }
        
//         /**
//          * 定时重复执行(基于帧率)。
//          * @param    delay    间隔几帧(单位为帧)。
//          * @param    caller    执行域(this)。
//          * @param    method    定时器回调函数。
//          * @param    args    回调参数。
//          * @param    coverBefore    是否覆盖之前的延迟执行，默认为 true 。
//          */
//         public frameLoop(delay:number, caller:any, method:Function, args:Array<any> = null, coverBefore:Boolean = true):void {
//             this._create(true, true, delay, caller, method, args, coverBefore);
//         }
        
//         /** 返回统计信息。*/
//         public toString():String {
//             return " handlers:" + this._handlers.length + " pool:" + Timer._pool.length;
//         }
        
//         /**
//          * 清理定时器。
//          * @param    caller 执行域(this)。
//          * @param    method 定时器回调函数。
//          */
//         public clear(caller:any, method:Function):void {
//             var handler:TimerHandler = this._getHandler(caller, method);
//             if (handler) {
//                 this._map[handler.key] = null;
//                 handler.key = 0;
//                 handler.clear();
//             }
//         }
        
//         /**
//          * 清理对象身上的所有定时器。
//          * @param    caller 执行域(this)。
//          */
//         public clearAll(caller:any):void {
//             if (!caller) return;
//             for (var i:number = 0, n:number = this._handlers.length; i < n; i++) {
//                 var handler:TimerHandler = this._handlers[i];
//                 if (handler.caller === caller) {
//                     this._map[handler.key] = null;
//                     handler.key = 0;
//                     handler.clear();
//                 }
//             }
//         }
        
//         /** @private */
//         private _getHandler(caller:any, method:any):TimerHandler {
//             var cid:number = caller ? caller.$_GID || (caller.$_GID = Utils.getGID()) : 0;
//             var mid:number = method.$_TID || (method.$_TID = (Timer._mid++) * 100000);
//             return this._map[cid + mid];
//         }
        
//         /**
//          * 延迟执行。
//          * @param    caller 执行域(this)。
//          * @param    method 定时器回调函数。
//          * @param    args 回调参数。
//          */
//         public callLater(caller:any, method:Function, args:Array<any> = null):void {
//             CallLater.I.callLater(caller, method, args);
//         }
        
//         /**
//          * 立即执行 callLater 。
//          * @param    caller 执行域(this)。
//          * @param    method 定时器回调函数。
//          */
//         public runCallLater(caller:any, method:Function):void {
//             CallLater.I.runCallLater(caller, method);
//         }
        
//         /**
//          * 立即提前执行定时器，执行之后从队列中删除
//          * @param    caller 执行域(this)。
//          * @param    method 定时器回调函数。
//          */
//         public runTimer(caller:any, method:Function):void {
//             var handler:TimerHandler = this._getHandler(caller, method);
//             if (handler && handler.method != null) {
//                 this._map[handler.key] = null;
//                 handler.run(true);
//             }
//         }
        
//         /**
//          * 暂停时钟
//          */
//         public pause():void {
//             this.scale = 0;
//         }
        
//         /**
//          * 恢复时钟
//          */
//         public resume():void {
//             this.scale = 1;
//         }
//     }

//     /** @private */
//     class TimerHandler {
//         public key:number;
//         public repeat:boolean;
//         public delay:number;
//         public userFrame:boolean;
//         public exeTime:number;
//         public caller:egret.Texture;
//         public method:Function;
//         public args:Array<any>;
//         public jumpFrame:Boolean;
        
//         public clear():void {
//             this.caller = null;
//             this.method = null;
//             this.args = null;
//         }
        
//         public run(withClear:boolean):void {
//             var caller:egret.Texture = this.caller;
//             if (caller && caller.dispose()) return this.clear();
//             var method:Function = this.method;
//             var args:Array<any> = this.args;
//             withClear && this.clear();
//             if (method == null) return;
//             args ? method.apply(caller, args) : method.call(caller);
//         }
//     }
// }
  