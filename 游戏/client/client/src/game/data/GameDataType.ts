/**
 * jarekzha
 */
module touch {
    export interface LevelCommandData {
        preGiveName: string
        preCondition: string
        name: string
        param: string[]
    }

    /**
     * 关卡数据
     */
    export interface LevelData {
        id: string
        reward: number
        name: string
        hour: string
        cmds: LevelCommandData[]
    }

    /**
     * 怪物数据
     */
    export interface MonsterData {
        name: string        // 名字
        health: number      // 血量
        hthHrd: number      // 困难难度血量
        shield: number      // 护盾
        speed: number       // 速度
        atkCd: number       // 攻击cd
        damage: number      // 单次攻击力
        reward: number      // 杀死奖励
        flags: string       // 
    }
    /** 
     * 武器组配置
     */
    export interface WeaponGroupData  {
        type: string
        name: string
    }

    /**
     * 武器配置
     */
    export interface WeaponData  {
        Name: string
        AmmoPrice: number
        UnlockPrice: number
        BuyAmmoQty: number
        MaxAmmo: number
        AmmoPerClip: number
        XFactor: number
        UpgradePrice: Array<number>
        Health: Array<number>
        Damage: Array<number>
        Crit: Array<number>
        Spread: Array<number>
        DOT: Array<number>
        DOTTime: number
        DOTCool: number
        Duration: Array<number>
        ThrownTex: string
        TT_Index: number
        ShopIdx: number
        IconIdx: number
        SelIcon: number
        Flags: string
        BIF: number
        Description: string
    }

    /**
     * 关卡类型
     */    
    export class LevelType {
        /**普通关卡 */
        public static Normal = 'R' 
        /**困难关卡 */
        public static Hard = 'H'
        /**挑战关卡 */
        public static Challenge = 'C'
    }
}