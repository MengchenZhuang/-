class Rect{
	public x:number = 0;
	public y:number = 0;
	public width:number = 0;
	public height:number = 0;

	constructor(x,y,width,height){
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}



}
class QuadTree {

	/**
	 * 节点能持有的最大对象数量，如果超过则进行分裂
	 */
	private MAX_OBJECTS:number = 1;
	/**子节点的最大深度 */
	private MAX_LEVELS:number = 3;

	/**当前节点深度 0表示最上层节点*/
	private level:number;

	/**物体数组 */
	private objects:Array<any>;
	/**2d空间的区域面积 */
	private bounds:Rect;
	/**四个节点的集合 */
	private nodes:Array<QuadTree>;
	public constructor(pLevel:number,pBounds:Rect) {
		this.level = pLevel;
		this.objects = new Array<any>();
		this.bounds = pBounds;
		this.nodes = [];

	}

	/**清除四叉树 */
	public Clear(){
		this.objects = [];

		for(let i = 0; i < this.nodes.length; i++){
			if(this.nodes[i] != null){

				this.nodes[i].Clear();
				this.nodes[i] = null;
			}
		}

	}

	/**将当前节点分裂为四个节点(实际上是添加四个子节点) */
	private Split(){
		let subWidth:number =(this.bounds.width / 2) | 0;
		let subHeight:number =(this.bounds.height/2) | 0;
		let x:number = (this.bounds.x);
		let y:number =(this.bounds.y);

		this.nodes[0] = new QuadTree(this.level + 1, new Rect(x+subWidth,y,subWidth,subHeight));
        this.nodes[1] = new QuadTree(this.level + 1, new Rect(x, y, subWidth, subHeight));
        this.nodes[2] = new QuadTree(this.level + 1, new Rect(x, y + subHeight, subWidth, subHeight));
        this.nodes[3] = new QuadTree(this.level + 1, new Rect(x + subWidth, y + subHeight, subWidth, subHeight));
		
	}

	/**
	 * 四叉树内部的辅助函数。他决定了四叉树中一个对象属于哪个节点，最终将该对象划分到该节点中。
	 * -1指的是当前节点可能在子节点之间的边界上不属于四个节点而还是属于父节点
	 */
	private GetIndex(pRect:Rect):number{

		let index = -1;
		//中线
		let verticalMidpoint = this.bounds.x + this.bounds.width/2;
		let horizontalMidpoint = this.bounds.y + this.bounds.height/2;

		//物体完全位于上面两个节点所在区域
		let topQuadrant:boolean = (pRect.y < horizontalMidpoint && pRect.y+pRect.height < horizontalMidpoint);
		let bottomQuadrant:boolean = pRect.y > horizontalMidpoint;

		//物体完全位于左面两个节点所在区域
		if(pRect.x < verticalMidpoint && pRect.x + pRect.width <  verticalMidpoint ){
			if(topQuadrant){
				index = 1;//处于左上节
			}
			else if(bottomQuadrant){
				index = 2;//处于左下节点 
			}
		}
		// 物体完全位于右面两个节点所在区域
        else if(pRect.x > verticalMidpoint)
        {
            if(topQuadrant)
            {
                index = 0;//处于右上
            }
            else if(bottomQuadrant)
            {
                index = 3;//处于右下
            }

        }
        return index;
	}
	/**
	 * 将物体插入四叉树
	 * 如果当前节点的物体个数超出容量了就将该节点分裂成四个从而让多数节点分给子节点
	 */
	public Insert(pRect){

		//插入到子节点
		if(this.nodes[0] != null){
			let index:number = this.GetIndex(pRect);
				if(index != -1){
					this.nodes[index].Insert(pRect);
					return;
				}
		}

		//还没分裂或者插入到子节点失败，只好留个父节点
		this.objects.push(pRect);

		//超容量后如果没有分裂则分裂
		if(this.objects.length >this.MAX_OBJECTS && this.level <this.MAX_LEVELS){
			if(this.nodes[0]== null){
				this.Split();
			}

			//分裂后要将父节点的物体分给子节点们
			let i:number = 0;
			while(i< this.objects.length){

				let index:number = this.GetIndex(this.objects[i]);
					if(index != -1){
						this.nodes[index].Insert(this.objects.splice(i,1));
						//this.objects.Remove(squareOne);
					}
					else{
						i++;
					}
				}
			}
	}


	/**
	 *返回所有可能和指定物体碰撞的物体
	 */
	private Retrieve(fSpriteList:Array<any>,pRect:Rect):Array<any>{
		let index:number = this.GetIndex(pRect);
		if(index != -1 && this.nodes[0] != null)
		{
			this.nodes[index].Retrieve(fSpriteList, pRect);
		}    
			
		fSpriteList.push(this.objects);
		return fSpriteList;
	}

	
}