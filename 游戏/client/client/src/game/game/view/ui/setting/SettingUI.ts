/**
* name 
*/
module touch {
	export class SettingUI extends UIable {
		constructor() {
			super(EUIType.VIEW);
			this.addView(SettingView);
			this.addControl(SettingControl);
		}
	}
}