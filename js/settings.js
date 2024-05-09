//var CONFIG_HARVEST_LOOP = false;
var EXLORE_ONLY = "shop";
var HARVEST_STEP = 20; // n% of 100% 
var settings = {
	CONFIG_HARVEST_LOOP: false,
	numberOfSettings: 1,
	autoChopSetting() {
		if ($("#autoChop>input").is(':checked')) this.CONFIG_HARVEST_LOOP = true;
		else this.CONFIG_HARVEST_LOOP = false;
		console.log(this.CONFIG_HARVEST_LOOP);
	},

	reset() {
		this.CONFIG_HARVEST_LOOP = false;
		return this;
	}
}