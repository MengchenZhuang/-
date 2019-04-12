module touch{
    /**对象池 */
    export class pool{

        private _poolDic:any = {};
        private static _instance:pool = null;

        public static getInstance():pool{
            if(pool._instance == null){
                console.log("Pool an only use getInstance() to get an instance!");
                pool._instance = new pool();
            }
            return pool._instance;
        }
        constructor(){
            if(pool._instance){
                return;
            }
            this._poolDic = {};
        }

        public getPoolBySign(name){
            return this._poolDic[name] || (this._poolDic[name] = []);
        }

        public getItemByClass(name,className){
            let pool = this.getPoolBySign(name);

            let result = pool.length? pool.shift() : new className();

            return result;
        }

        public recover(name,instance){
            this.getPoolBySign(name).push(instance);
        }



    }
}
