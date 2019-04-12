/**点 */
class Point{
    /**
     * x
     */
    public x: number = 0;
    /**
     * y
     */
    public y: number = 0;

    /**
     * 构造函数
     * @param x 
     * @param y 
     */
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    
    public get egretPoint(): egret.Point { return new egret.Point(this.x, this.y) }

}