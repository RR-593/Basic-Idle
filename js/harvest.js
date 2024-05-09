var harvest_interval = [];

function harvestBut(e) {
	$(e).off();
	$(e).on('click', function() { stopHarvest(e) });

	var matName = e.id.slice("harvest-".length, -2);
	if (matName != player.mats[matName].name) return;

	var skill = player.skills[player.mats[matName].skill];
	var tool = player.getTool_by_mat(matName);

	skill.screenUpdate();

	var intervalIndex = Number(e.id.slice(-1));

	let pb = new Progress(0, 0, 100, { parent: "#" + $("#" + e.id + ">div").attr("id"), button: "#" + e.id, intervalIndex: intervalIndex });

	var step = Math.ceil(100 / (((toolLvls.length - tool.lvl) <= 0) ? 1 : toolLvls.length - tool.lvl));

	var i = ((toolLvls.length - tool.lvl) <= 0) ? 1 : toolLvls.length - tool.lvl;
	var time = 2500 - (skill.lvl * 20);

	var harvestDone = true;

	harvest_interval[intervalIndex] = (setInterval(() => {
		if (harvestDone) {
			time = 2500 - (skill.lvl * 20);
			harvestDone = false;

			pb.startTo(step, time, () => {
				skill.addExp(1);
				player.mats[matName].harvest();
				skill.screenUpdate();
				harvestDone = true;

				if (!settings.CONFIG_HARVEST_LOOP) stopHarvest(e);
			});
		}

		if (!settings.CONFIG_HARVEST_LOOP) {
			clearInterval(harvest_interval[intervalIndex]);
		}
	}, 50));

}

function stopHarvest(e) {
	$(e).off();
	$(e).on('click', function() { harvestBut(e) });

	var intervalIndex = Number(e.id.slice(-1));
	clearInterval(harvest_interval[intervalIndex]);
	harvest_interval[intervalIndex] = 0;
}

function allStop() {
	$(".menu-mats button").off();
	$(".menu-mats button").on('click', function() { harvestBut(this) });

	for (var i = 0; i < harvest_interval.length; i++) {
		clearInterval(harvest_interval[i]);
		harvest_interval[i] = 0;
	}
}