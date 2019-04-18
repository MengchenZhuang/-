class FightUI extends egret.Sprite{
    
    private data:Array<Monster> = [];
    //圆数量
    private num:number = 20;

    private cW:number; 
    private cH:number; 

    private lineDis:number = 400;


    // private shape:egret.Shape = new egret.Shape();

    private timer:egret.Timer;

    private heroUi = new HeroUI();

    //private heroUI:HeroUI;

    constructor(main){
        super();
        this.cW = main.stage.stageWidth;
        this.cH = main.stage.stageHeight;

        this.initGraphics();
        this.init();

        this.addEventListener( egret.Event.ENTER_FRAME, ( evt:egret.Event )=>{
            this.movedrawLine(this.data);
        }, this ); 

    }



    private init(){
        for(let i = 0; i<this.num;i++){
            let _data = {
                x:Math.random() * this.cW,
                y:Math.random() * this.cH,
                cx:Math.random() * 0.6 - 0.3,
                cy:Math.random() * 0.6 - 0.3,
                speed:10
            }

            let monster:Monster = new Monster(1,_data.x,_data.y,_data.speed,5);
            this.data.push(monster);
            this.addChild(monster);
        }
        
        console.log("创建敌人完成")

    }

     //初始化赋值
    private initGraphics():void {
        this.addChild(this.heroUi);
    }

    private movedrawLine(ndots:Array<Monster>){

        let ndot:Monster;

        for(let dot of ndots){
            // dot.move();
            this.monsterMove(dot);
            // 循环比对粒子间的距离
            // for (let i = 0; i < ndots.length; i++) {
            //     ndot = ndots[i];
            //     //dot.speed = 10;

            //     if (dot === ndot || ndot.x === null || ndot.y === null) continue;

            //     let xc = dot.x - ndot.x;
            //     let yc = dot.y - ndot.y;
            //     let lineDis = (dot.size + ndot.radio)*(dot.radio + ndot.radio);

            //     // 如果x轴距离或y轴距离大于max,则不计算粒子距离
            //     if(xc*xc > lineDis || yc*yc > lineDis) continue;

            //     // 两个粒子之间的距离
            //     let dis = xc * xc + yc * yc;

            //     // 如果粒子距离超过max,则不做处理

            //     //TODO:直接用半径判断融合，效果不好看，之后改成距离小于较大的半径加较小的半径/2,再调试
            //     if( dis > lineDis+20 ) continue;

            //     ndot.score = dot.score +ndot.score;
   
                
            //     // if(ndot.score > 5){
            //     //     ndot.score = 5;
            //     // }
            //     this.removeChild(dot);
            //     ndots.splice(ndots.indexOf(dot), 1);
            //     break;
            // }
            // 将已经计算过的粒子从数组中删除
            
        }
    }


    private monsterMove(dot:Monster){
        //let self = this;

        // 粒子向英雄的位置移动
        let v:touch.Vector = new touch.Vector();
        v.x = dot.x - this.heroUi.hero.x;
        v.y = dot.y - this.heroUi.hero.y;

        v = v.normalize();
        dot.dir = v;
        dot.move();

   
        // dot.x -= v.x * 0.3 * dot.speed;
        // dot.y -= v.y * 0.3 * dot.speed;



    }


}