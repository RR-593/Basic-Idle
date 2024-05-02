let player = new Player();
let xpBar = new Progress(0, 0, 100, { parent: "#progress-xp", button: "#progress-xp" });
var CONFIG_HARVEST_LOOP = false;
var menu;

$(document).ready(() => {
	loadTrees();
	$("#maccaTheShopGuy").html(compileAsciiToString(maccaTheShopGuy).replace(/•/g, "<span id='maccaEye'>•</span>"));
	ranNum.onLoad();
	$("#explore-forest").click(onClickExplore);
	$("button#tree1").click(function() {});

	gameLoop();
	xpBar.setUp();


	$(".menu-mats button").on('click', function() { harvestBut(this) });

	$(".tools button").click(function() {
		var toolName = this.id.slice(4);
		for (let tool in player.tools) {
			if (toolName == player.tools[tool].name) {
				player.tools[tool].buy(player);
				return;
			}
		}
	});


	$(".sellButton>button").click(function() {
		player.sellAll();
		$("#maccaEye").html("^");
		setInterval(() => {
			$("#maccaEye").html("•");
		}, 1400);
		screenUpdate();
	});


	$(".sidebar button").click(function() {
		var popup = this.id.slice(0, -7);
		switchPopup(popup);
	})

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