
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class IndexUI extends View {
		public imgBG:Laya.Image;
		public btnStart:Laya.Button;
		public btnTask:Laya.Button;
		public btnShop:Laya.Button;
		public btnSetting:Laya.Button;
		public btnSignIn:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1334,"top":0,"right":0,"left":0,"height":750,"bottom":0},"child":[{"type":"Image","props":{"var":"imgBG","skin":"bg/MainMenuBg.jpg","scaleY":1.3,"scaleX":1.3,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"x":426,"width":482,"var":"btnStart","labelFont":"ruizi","labelAlign":"center","label":"开始游戏","height":92,"centerY":-90,"centerX":0,"anchorY":0}},{"type":"Button","props":{"width":482,"var":"btnTask","labelFont":"ruizi","labelAlign":"center","label":"邀请任务","height":92,"centerY":26,"centerX":0}},{"type":"Button","props":{"x":10,"width":482,"var":"btnShop","labelFont":"ruizi","labelAlign":"center","label":"商 店","height":92,"centerY":130,"centerX":0}},{"type":"Button","props":{"x":20,"width":482,"var":"btnSetting","labelFont":"ruizi","labelAlign":"center","label":"设 置","height":92,"centerY":260,"centerX":0}},{"type":"Button","props":{"width":149,"var":"btnSignIn","labelFont":"ruizi","labelAlign":"center","label":"签 到","height":110,"centerY":-10,"centerX":-549}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.IndexUI.uiView);

        }

    }
}

module ui {
    export class OptionsUI extends View {
		public btn_country:Laya.Button;
		public btn_notic:Laya.Button;
		public btn_sound:Laya.Button;
		public btn_BackHome:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":1334,"top":0,"right":0,"left":0,"height":750,"bottom":0},"child":[{"type":"Image","props":{"top":0,"skin":"bg/OptionsBackground.jpg","right":0,"left":0,"bottom":0}},{"type":"HBox","props":{"y":225,"x":356,"space":100},"child":[{"type":"Button","props":{"var":"btn_country","skin":"game/btn_OptionsCountry.png","stateNum":1}},{"type":"Button","props":{"var":"btn_notic","skin":"game/btn_OptionsNotic.png","stateNum":1}},{"type":"Button","props":{"var":"btn_sound","skin":"game/btn_OptionsSound.png","stateNum":1}}]},{"type":"Label","props":{"y":72,"x":595,"width":143,"text":"设置","height":72,"fontSize":60,"font":"Microsoft YaHei","color":"#A36C1E"}},{"type":"Button","props":{"var":"btn_BackHome","top":10,"skin":"game/btn_Home.png","left":0,"stateNum":1}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.OptionsUI.uiView);

        }

    }
}

module ui {
    export class ShopUI extends View {
		public boxTabBg:Laya.Box;
		public btn_home:Laya.Button;
		public tab_shop:Laya.Tab;
		public viewStrackList:Laya.ViewStack;
		public vboxEquip:Laya.VBox;
		public img_equip_icon_0:Laya.Image;
		public img_equip_icon_1:Laya.Image;
		public img_equip_icon_2:Laya.Image;
		public btnCoin:Laya.Button;
		public btnPepper:Laya.Button;
		public btnPower:Laya.Button;
		public label_coin_num:Laya.Label;
		public label_power_num:Laya.Label;
		public label_pepper_num:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"top":0,"right":0,"left":0,"bottom":0},"child":[{"type":"Image","props":{"width":1334,"skin":"bg/ShopBackground.jpg","height":750,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":117,"x":159,"var":"boxTabBg"},"child":[{"type":"Image","props":{"width":250,"skin":"game/bg1.png","name":"imgTabBg0","height":250}},{"type":"Image","props":{"x":253,"width":250,"visible":false,"skin":"game/bg1.png","name":"imgTabBg1","height":250}},{"type":"Image","props":{"x":508,"width":250,"visible":false,"skin":"game/bg1.png","name":"imgTabBg2","height":250}},{"type":"Image","props":{"x":760,"width":250,"visible":false,"skin":"game/bg1.png","name":"imgTabBg3","height":250}}]},{"type":"Button","props":{"y":9,"x":-1,"var":"btn_home","skin":"game/btn_Home.png","stateNum":1}},{"type":"Tab","props":{"y":120,"x":217,"width":919,"var":"tab_shop","space":110,"selectedIndex":0,"height":108,"direction":"horizontal"},"child":[{"type":"Button","props":{"y":-8,"x":778,"stateNum":1,"skin":"game/btn_Shop_TabIcons_01.png","name":"item3","label":"label"}},{"type":"Button","props":{"y":-1,"x":0,"stateNum":1,"skin":"game/btn_Shop_TabIcons_02.png","name":"item0","label":"label"}},{"type":"Button","props":{"y":-3,"x":258,"stateNum":1,"skin":"game/btn_Shop_TabIcons_03.png","name":"item1","label":"label"}},{"type":"Button","props":{"y":0,"x":504,"stateNum":1,"skin":"game/btn_Shop_TabIcons_04.png","name":"item2","label":"label"}}]},{"type":"ViewStack","props":{"y":291,"x":175,"width":984,"var":"viewStrackList","height":429},"child":[{"type":"List","props":{"y":-44,"x":-8,"width":1000,"spaceY":5,"name":"item0","height":467},"child":[{"type":"ShopItem","props":{"runtime":"touch.ShopItem","renderType":"render"}}]},{"type":"List","props":{"y":-44,"x":-8,"width":1000,"spaceY":5,"name":"item1","height":481},"child":[{"type":"ShopItem","props":{"runtime":"touch.ShopItem","renderType":"render"}}]},{"type":"List","props":{"y":-44,"x":-8,"width":1000,"spaceY":5,"name":"item2","height":481},"child":[{"type":"ShopItem","props":{"runtime":"touch.ShopItem","renderType":"render"}}]},{"type":"List","props":{"y":-44,"x":-8,"width":1000,"spaceY":5,"name":"item3","height":481},"child":[{"type":"ShopItem","props":{"runtime":"touch.ShopItem","renderType":"render"}}]}]},{"type":"VBox","props":{"y":242,"x":1220,"var":"vboxEquip","space":10},"child":[{"type":"Image","props":{"width":100,"skin":"game/Shop_WeaponIconBg_05.png","height":100},"child":[{"type":"Image","props":{"width":100,"var":"img_equip_icon_0","height":100}}]},{"type":"Image","props":{"y":127,"width":100,"skin":"game/Shop_WeaponIconBg_05.png","height":100},"child":[{"type":"Image","props":{"width":100,"var":"img_equip_icon_1","height":100}}]},{"type":"Image","props":{"y":250,"width":100,"skin":"game/Shop_WeaponIconBg_05.png","height":100},"child":[{"type":"Image","props":{"width":100,"var":"img_equip_icon_2","height":100}}]}]},{"type":"Box","props":{"y":205,"x":218},"child":[{"type":"Box","props":{},"child":[{"type":"Image","props":{"skin":"game/img_shop_txt_bg.png"}},{"type":"Label","props":{"x":7,"width":136,"text":"武器","height":33,"fontSize":25,"color":"#fff9f9","align":"center"}}]},{"type":"Box","props":{"x":248},"child":[{"type":"Image","props":{"skin":"game/img_shop_txt_bg.png"}},{"type":"Label","props":{"x":7,"width":136,"text":"爆炸物","height":33,"fontSize":25,"color":"#fff9f9","align":"center"}}]},{"type":"Box","props":{"x":505},"child":[{"type":"Image","props":{"skin":"game/img_shop_txt_bg.png"}},{"type":"Label","props":{"x":7,"width":136,"text":"防御","height":33,"fontSize":25,"color":"#fff9f9","align":"center"}}]},{"type":"Box","props":{"x":783},"child":[{"type":"Image","props":{"skin":"game/img_shop_txt_bg.png"}},{"type":"Label","props":{"x":7,"width":136,"text":"特供","height":33,"fontSize":25,"color":"#fff9f9","align":"center"}}]}]},{"type":"Button","props":{"y":59,"x":865,"var":"btnCoin","stateNum":1,"skin":"game/btn_gold.png"}},{"type":"Button","props":{"y":48,"x":301,"var":"btnPepper","stateNum":1,"skin":"game/btn_shop_pepper.png","label":"l"}},{"type":"Button","props":{"y":50,"x":569,"var":"btnPower","stateNum":1,"skin":"game/btn_shop_power.png"}},{"type":"Label","props":{"y":62,"x":964,"width":210,"var":"label_coin_num","text":"11000","height":53,"fontSize":40,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":56,"x":669,"width":210,"var":"label_power_num","text":"11000","height":53,"fontSize":40,"color":"#ffffff","align":"left"}},{"type":"Label","props":{"y":56,"x":390,"width":210,"var":"label_pepper_num","text":"11000","height":53,"fontSize":40,"color":"#ffffff","align":"left"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("touch.ShopItem",touch.ShopItem);

            super.createChildren();
            this.createView(ui.ShopUI.uiView);

        }

    }
}

module ui {
    export class ShopItemUI extends View {
		public imgBG:Laya.Image;
		public labelDescClock:Laya.Label;
		public btnBuyAmmo:Laya.Button;
		public labelBuyTop:Laya.Label;
		public labelPrice:Laya.Label;
		public img_coin:Laya.Image;
		public imgIconBg:Laya.Image;
		public imgIcon:Laya.Image;
		public labelNum:Laya.Label;
		public imgTip:Laya.Image;
		public labelName:Laya.Label;
		public btnEquip:Laya.Button;
		public btnLevelUp:Laya.Button;
		public labelLevelUp:Laya.Label;
		public labelLevelUpTop:Laya.Label;
		public imgClock:Laya.Image;
		public img_levelUp_bg:Laya.Image;
		public hbox_levelUp:Laya.HBox;

        public static  uiView:any ={"type":"View","props":{"width":990,"height":230},"child":[{"type":"Image","props":{"y":19,"x":24,"width":855,"var":"imgBG","skin":"game/img_shop_bg_0.png","height":200}},{"type":"Label","props":{"y":109,"x":241,"wordWrap":false,"width":301,"var":"labelDescClock","text":"于第3章第12关解锁","overflow":"hidden","height":85,"fontSize":40,"color":"#ffffff","align":"center"}},{"type":"Button","props":{"y":95,"x":229,"width":320,"var":"btnBuyAmmo","stateNum":1,"skin":"game/btn_green.png","height":115},"child":[{"type":"Label","props":{"y":10,"x":31,"width":242,"var":"labelBuyTop","text":"购买弹药","height":44,"fontSize":40,"color":"#ffffff","align":"left"}},{"type":"Box","props":{"y":63,"x":113},"child":[{"type":"Label","props":{"y":5,"width":132,"var":"labelPrice","text":"1000","height":44,"fontSize":30,"color":"#ffffff","align":"right"}},{"type":"Image","props":{"x":140,"var":"img_coin","skin":"game/CoinIcon.png"}}]}]},{"type":"Image","props":{"y":19,"x":24,"width":200,"var":"imgIconBg","skin":"game/Shop_WeaponIconBg_03.png","height":200,"sizeGrid":"43,31,37,53"},"child":[{"type":"Image","props":{"width":120,"var":"imgIcon","skin":"game/img_weapon_3.png","height":120,"centerY":0,"centerX":0}},{"type":"Label","props":{"y":147,"x":124,"width":69,"var":"labelNum","text":"1","height":40,"fontSize":40,"color":"#ffffff","align":"center"}}]},{"type":"Image","props":{"y":1,"x":1,"var":"imgTip","skin":"game/img_tips.png"}},{"type":"Label","props":{"y":22,"x":227,"width":293,"var":"labelName","text":"散弹枪","height":66,"fontSize":50,"color":"#ffffff","align":"center"}},{"type":"Button","props":{"y":108,"x":886,"var":"btnEquip","stateNum":1,"skin":"game/btn_shop_equip.png","labelSize":40,"labelColors":"#ffffff","label":"装备"}},{"type":"Button","props":{"y":94,"x":550,"width":320,"var":"btnLevelUp","stateNum":1,"skin":"game/btn_green.png","height":115},"child":[{"type":"Label","props":{"y":63,"x":113,"width":132,"var":"labelLevelUp","text":"1000","height":44,"fontSize":30,"color":"#ffffff","align":"right"}},{"type":"Label","props":{"y":10,"x":31,"width":242,"var":"labelLevelUpTop","text":"升级","height":44,"fontSize":40,"color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":63,"x":253,"skin":"game/CoinIcon.png"}}]},{"type":"Image","props":{"y":141,"x":154,"var":"imgClock","skin":"game/img_shop_clock.png"}},{"type":"Image","props":{"y":38,"x":594,"width":271,"var":"img_levelUp_bg","skin":"game/img_shop_white.png","height":26,"sizeGrid":"10,10,10,10"},"child":[{"type":"HBox","props":{"y":3,"x":11,"var":"hbox_levelUp","space":5}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ShopItemUI.uiView);

        }

    }
}
