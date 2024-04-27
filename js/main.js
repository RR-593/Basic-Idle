var player = new Player();
let xpBar = new Progress(0, 0, 100, { parent: "#progress-xp", button: "#progress-xp" });
var menu;

$(document).ready(() => {
	$("#explore-forest").click(onClickExplore);
	ranNum.onLoad();
	//$(".tree").html("\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0_-_<br/>" + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0/~~\xa0\xa0\xa0~~\\<br/>" + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0/~~\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0_-_<br/>" + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0_-_\xa0\xa0\xa0\xa0\xa0\xa0\xa0/~~\xa0\xa0\xa0~~\\<br/>" + "\xa0\xa0\xa0\xa0/~~\xa0\xa0\xa0~~\\\xa0/~~\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0~~\\<br/>" + "\xa0/~~\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0~~\\\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0}<br/>" + "{\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0}_-\xa0\xa0\xa0\xa0\xa0-_\xa0\xa0/<br/>" + "\xa0\\\xa0\xa0_-\xa0\xa0\xa0\xa0\xa0-_\xa0\xa0/~\xa0\xa0\\\\\xa0//\xa0\xa0~<br/>" + "\xa0\xa0\xa0~\xa0\xa0\\\\\xa0//\xa0\xa0~\xa0|\xa0\xa0\xa0\xa0|\xa0|<br/>" + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0|\xa0|\xa0\xa0//\xa0\\\\\xa0\xa0\xa0|\xa0|<br/>" + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0|\xa0|\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0//\xa0\\\\<br/>" + "\xa0\xa0\xa0\xa0\xa0\xa0//\xa0\\\\");
	loadTrees();
	$("button#tree1").click(function() {});

	gameLoop();
	xpBar.setUp();


	$(".menu-mats button").click(function() {
		//alert("#" + $("#" + this.id + ">div").attr("id") + " #" + this.id);
		var matName = this.id.slice(8);
		if (matName != player.mats[matName].name) return;
		var skill = player.skills[player.mats[matName].skill];

		if (skill.lvl >= skill.maxlvl) {
			player.mats[matName].harvest();
			return;
		}
		skill.screenUpdate();
		let pb = new Progress(0, 0, 100, { parent: "#" + $("#" + this.id + ">div").attr("id"), button: "#" + this.id });
		var step = Math.ceil(100 / (skill.maxlvl + 1 - skill.lvl));

		var time = 1000;

		pb.startTo(step, time, () => {
			skill.addExp(1);
			player.mats[matName].harvest();
			skill.screenUpdate();
		});
	});

	$(".tools button").click(function() {
		var toolName = this.id.slice(4);
		for (let tool in player.tools) {
			if (toolName == player.tools[tool].name) {
				player.tools[tool].buy(player);
				return;
			}
		}
	});


	$(".sellBut").click(function() {
		sellAmount = this.id;
		switch (sellAmount) {
			case "sellAll":
				sell(-1);
				break;
			case "sell1":
				sell(1);
				break;
			case "sell10":
				sell(10);
				break;
		}

		screenUpdate();
	});

	function sell(amount) {

		if (player.mats.log.amount < amount) {
			return;
		}

		if (amount < 0) {
			player.money += player.mats.log.amount * player.mats.log.sellprice;
			player.mats.log.amount = 0;
		} else {

			player.money += amount * player.mats.log.sellprice;
			player.mats.log.amount -= amount;
		}
	}

	$("#whetStone-buy").click(function() {
		if (player.money < upgrades.wheyStone.price) return;
		player.money -= upgrades.wheyStone.price;
		upgrades.wheyStone.amount++;
		upgrades.wheyStone.price *= upgrades.wheyStone.price;
	});

	$(".sidebar button").click(function() {
		var popup = this.id.slice(0, -7);
		switchPopup(popup);
	})

	$("#save").click(function() {
		menu = switchMenu("save-menu");
	});

	$("#visit").click(function() {
		menu = switchMenu("menu-shop");
		screenUpdate();
	});

	$("[id=return]").click(function() {
		menu = switchMenu("forest");
	});

	$(".backpack-tabs button").click(function() {
		$(".backpack-tabs button").removeClass('selected');
		this.className = 'selected';
		menu = switchInv(this.id);
		screenUpdate();
	});
});