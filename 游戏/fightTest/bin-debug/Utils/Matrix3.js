// /**三维矩阵 */
// const _M3_E11 = 0;
// const _M3_E21 = 1;
// const _M3_E31 = 2;
// const _M3_E12 = 3;
// const _M3_E22 = 4;
// const _M3_E32 = 5;
// const _M3_E13 = 6;
// const _M3_E23 = 7;
// const _M3_E33 = 8;
// class Matrix3 {
// 	public e:Array<number>;
// 	public constructor() {
// 		this.e = [];
// 		this.Identity();
// 		egret.Matrix
// 	}
// 	/**单位化 */
// 	private Identity(){
// 		this.e[_M3_E11] = 1.0; this.e[_M3_E21] = 0.0; this.e[_M3_E31] = 0.0;
// 		this.e[_M3_E12] = 0.0; this.e[_M3_E22] = 1.0; this.e[_M3_E32] = 0.0;
// 		this.e[_M3_E13] = 0.0; this.e[_M3_E23] = 0.0; this.e[_M3_E33] = 1.0;
// 		return this;
// 	}
// 	/**平移 */
// 	public Tranlate(x:number,y:number){
// 		this.e[_M3_E11] = 1.0; this.e[_M3_E21] = 0.0; this.e[_M3_E31] = 0.0;
// 		this.e[_M3_E12] = 0.0; this.e[_M3_E22] = 1.0; this.e[_M3_E32] = 0.0;
// 		this.e[_M3_E13] = x;    this.e[_M3_E23] = y;  this.e[_M3_E33] = 1.0;
// 		return this;
// 	}
// 	public Scale(x)
// } 
//# sourceMappingURL=Matrix3.js.map