/**
* momo 
*/
module touch {
	/**
	 * 场景层枚举
	 */
	export enum EnumLayer {

		GameForeGround,        	// 前景层
		GameEntity,            	// 物件层
		GameBackGround,        	// 背景层

		FightBackGround,		// 战斗背景层:背景，树林，萤火虫
		FightEntity, 			// 战斗物件层:房子，角色，怪物，掉落物
		FightUI,				// 战斗ui
		FightForeGround,		// 战斗前景层:虚化的树枝
	}
}