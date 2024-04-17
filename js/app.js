var player = new Player();
loadFromLocalStorage();
gameLoop()

$(document).ready(function(){
	var menu;

	$("#chop").click(function(){
		player.logs += player.logPlus;
		screenUpdate();
	});

	$("#mine").click(function(){
		if(player.pickaxe==0){
			alert("you have nothing to mine stone with!");
		}else{

			player.stone += player.stonePlus;
			screenUpdate();
		}
	});

	$(".sellBut").click(function(){
		sellAmount=this.id;
		switch(sellAmount){
			case "sellAll":
				sellLogs(-1);
				break;
			case "sell1":
				sellLogs(1);
				break;
			case "sell10":
				sellLogs(10);
				break;
		}

		screenUpdate();
	});

	function sellLogs(amount){

		if(player.logs<amount){
			return;
		}

		if(amount < 0){
			player.money += player.logs*player.logPrice;
			player.logs = 0;
		}else{

			player.money += amount*player.logPrice;
			player.logs -= amount
		}
	}

	$("#autoChopper-buy").click(function(){
		if(player.money < player.autoChopperPrice){
			return;
		}
		player.money -= player.autoChopperPrice;
		player.autoLogPlus ++;
		player.autoChopperPrice *=player.autoLogPlus;
		
		screenUpdate();
	});

	$("#pickaxe-buy").click(function(){
		if(player.money < player.pickaxesPrice){
			return;
		}
		player.money -= player.pickaxesPrice;
		player.pickaxe ++;
		player.pickaxesPrice *=player.pickaxe;
		
		screenUpdate();
	});

	$("#save").click(function(){
		menu = switchMenu("save-menu");
	});

	$("#visit").click(function(){
		menu = switchMenu("shop");
		screenUpdate();
	});

	$("#return").click(function(){
		menu = switchMenu("main");
	});
	

	function switchMenu(menu){
		$(".menus").children().css("display","none");
		$("."+menu).css("display","block");
		return menu;
	}
});