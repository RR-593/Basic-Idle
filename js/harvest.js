function harvestBut(e) {
	var matName = e.id.slice(8);
	if (matName != player.mats[matName].name) return;
	var skill = player.skills[player.mats[matName].skill];

	skill.screenUpdate();

	let pb = new Progress(0, 0, 100, { parent: "#" + $("#" + e.id + ">div").attr("id"), button: "#" + e.id });

	var step = Math.ceil(100 / (skill.maxlvl + 1 - skill.lvl));

	var time = 1000;

	pb.startTo(step, time, () => {
		skill.addExp(1);
		player.mats[matName].harvest();
		skill.screenUpdate();
		harvestDone = true;
		if (settings.CONFIG_HARVEST_LOOP) return harvestBut(e);
	});
}