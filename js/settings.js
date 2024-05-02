//var CONFIG_HARVEST_LOOP = false;
var EXLORE_ONLY = "shop";
var settings = {
	CONFIG_HARVEST_LOOP: false,
	numberOfSettings: 1,
	autoChopSetting() {
		if ($("#autoChop>input").is(':checked')) this.CONFIG_HARVEST_LOOP = true;
		else this.CONFIG_HARVEST_LOOP = false;
		console.log(this.CONFIG_HARVEST_LOOP);
	}
}