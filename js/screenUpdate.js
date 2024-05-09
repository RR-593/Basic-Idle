function screenUpdate() {
	//mats n tools
	var axe = player.tools.axe;
	var pickaxe = player.tools.pickaxe;

	//Skill bar
	//for (let skill in player.skills) player.skills[skill].screenUpdate();

	//Inventory
	if (player.money) {
		$(".money").css("display", "block");
		$("#money").html(player.money);
	} else $(".money").css("display", "none");

	//mats
	for (let mat in player.mats) player.mats[mat].screenUpdate();

	if (axe.amount > 0) {
		$("#ownedAutoChopper").html(axe.plus);
	} else $("#autoChopper-title").css("display", "none");

	if (pickaxe.lvl > 0) {
		$(".pick").css("display", "block");
		$("#ownedPickaxes").html(pickaxe.lvl);
	} else $(".pick").css("display", "none");


	//Shop
	if (!player.matsEmpty()) {
		$("#sellAll").removeAttr("disabled");
	} else {
		$("#sellAll").attr('disabled', '');
	}


	var $buyAxe = $("#buy-axe");
	var isMaxed = ((axe.lvl + 1) >= toolLvls.length);

	$("#axeName").html(!isMaxed ? toolLvls[axe.lvl + 1] : "MAX");
	$("#axeCost").html(!isMaxed ? axe.price : '');

	if (player.money >= axe.price && !isMaxed) {
		$buyAxe.css("display", "block");
		$buyAxe.removeAttr("disabled");
	} else {
		$buyAxe.attr('disabled', '');
		if (axe.amount > 0)
			$buyAxe.css("display", "none");

	}

	var $buyPickaxe = $("#buy-pickaxe");
	$("#pickaxeCost").html(pickaxe.price);
	if (player.money >= pickaxe.price) {
		$buyPickaxe.css("display", "block");
		$buyPickaxe.removeAttr("disabled");
	} else {
		if (pickaxe.amount > 0)
			$buyPickaxe.attr('disabled', '');
		else
			$buyPickaxe.css("display", "none");

	}

	//tips
	$("#tip-cost").html(shopTips.price);
	if (player.money < shopTips.price) {
		$("#buy-tip").attr("disabled", '');
	} else {
		$("#buy-tip").removeAttr('disabled');
	}

}