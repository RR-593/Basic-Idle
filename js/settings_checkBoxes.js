var CONFIG_HARVEST_LOOP = false;
var EXLORE_ONLY = "shop";
var settings = {
	autoChopSetting() {
		if ($("#autoChop>input").is(':checked')) CONFIG_HARVEST_LOOP = true;
		else CONFIG_HARVEST_LOOP = false;
		console.log(CONFIG_HARVEST_LOOP);
	}
}