let player = new Player();
let xpBar = new Progress(0, 0, 100, { parent: "#progress-xp", button: "#progress-xp" });

var menu;

$(document).ready(() => {

	ascii.onload();
	ranNum.onLoad();

	$("#explore-forest").click(onClickExplore);
	$("button#tree1").click(function() {});

	gameLoop();
	ShopTips.onload(player.tipsIndex);

	xpBar.setUp();


	$(".menu-mats button").on('click', function() {
		harvestBut(this);
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


	$(".sellButton>button").click(function() {
		player.sellAll();
		$("#maccaEye").html("$");
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