$(document).ready(function(){
	var player = new Player();
	
	var money = 0;
	var logPlus = 1;

	var stones = 0;
	var stonePlus = 1;

	var autoLogPlus = 0;
	var autoChopperPrice = 50;
	
	var pickaxes = 0;
	var pickaxesPrice = 25;

	var logPrice = 1;
	var menu;

	setInterval(function(){
		player.logs += autoLogPlus;
		screenUpdate();
	},1000)


	$("#chop").click(function(){
		player.logs += logPlus;
		screenUpdate();
	});

	$("#mine").click(function(){
		if(pickaxes==0){
			alert("you have nothing to mine stone with!");
		}else{

			stones += stonePlus;
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
			money += player.logs*logPrice;
			player.logs = 0;
		}else{

			money += amount*logPrice;
			player.logs -= amount
		}
	}

	$("#autoChopper-buy").click(function(){
		if(money < autoChopperPrice){
			return;
		}
		money -= autoChopperPrice;
		autoLogPlus ++;
		autoChopperPrice *=autoLogPlus;
		
		changeInventory();
	});

	$("#pickaxe-buy").click(function(){
		if(money < pickaxesPrice){
			return;
		}
		money -= pickaxesPrice;
		pickaxes ++;
		pickaxesPrice *=pickaxes;
		
		changeInventory();
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