module utils{
    export class Pool{

        private _poolDic:any = {};
        private static _instance:Pool = null;

        public static getInstance():Pool{
            if(Pool._instance == null){
                console.log("Pool an only use getInstance() to get an instance!");
                Pool._instance = new Pool();
            }
            return Pool._instance;
        }
        constructor(){
            if(Pool._instance){
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
