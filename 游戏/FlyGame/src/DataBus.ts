class DataBus{
    private static _instance:DataBus = null; 

    //public pool:base.Pool;
    public frame:number = 0;
    public score:number = 0;
    public bullets:Array<player.Bullet> = [];
    public enemys:Array<npc.Enemy> = [];
    public animations:Array<base.Animation> = [];
    public gameOver:boolean = false;



    constructor(){
        if(DataBus._instance){
            console.log("DataBus an only use getInstance() to get an instance!");
            return;
        }
        //this.pool = new base.Pool();
        this.reset();


    }

    public reset(){
        this.frame      = 0
        this.score      = 0
        this.bullets    = []
        this.enemys     = []
        this.animations = []
        this.gameOver   = false
    }

    public removeEnemy(enemy){
        let temp = this.enemys.shift();
        temp.visible = false;
        utils.Pool.getInstance().recover("enemy",enemy);
    }

    public removeBullets(bullet){
        let temp = this.bullets.shift();

        temp.visible = false;

        utils.Pool.getInstance().recover("bullet",bullet);
    }

    public static getInstance():DataBus{
        if(!DataBus._instance){
            DataBus._instance = new DataBus();
        }
        return DataBus._instance;
    }

}