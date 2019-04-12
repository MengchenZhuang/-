/**
* name 
*/
module touch{
	export class ShopUI extends UIable{
		constructor(){
			super(EUIType.VIEW);
			this.addView(ShopView);
			// this.addData(ShopData)
			this.addControl(ShopControl);
		}
	}
}