$(document).ready(function(){
	var logs = 0;
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
		logs += autoLogPlus;
		changeInventory();
		changeMarket();
	},1000)


	$("#chop").click(function(){
		logs += logPlus;
		changeInventory();
		changeMarket();
	});

	$("#mine").click(function(){
		if(pickaxes==0){
			alert("you have nothing to mine stone with!");
		}else{

			stones += stonePlus;
			changeInventory();
			changeMarket();
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

		changeMarket();
	});

	function sellLogs(amount){

		if(logs<amount){
			return;
		}

		if(amount < 0){
			money += logs*logPrice;
			logs = 0;
		}else{

			money += amount*logPrice;
			logs -= amount
		}
		changeInventory();
	}

	$("#autoChopper-buy").click(function(){
		if(money < autoChopperPrice){
			return;
		}
		money -= autoChopperPrice;
		autoLogPlus ++;
		autoChopperPrice *=autoLogPlus;
		changeMarket();
		changeInventory();
	});

	$("#pickaxe-buy").click(function(){
		if(money < pickaxesPrice){
			return;
		}
		money -= pickaxesPrice;
		pickaxes ++;
		pickaxesPrice *=pickaxes;
		changeMarket();
		changeInventory();
	});

	$("#visit").click(function(){
		menu = switchMenu("shop");
		changeMarket();
	});

	$("#return").click(function(){
		menu = switchMenu("main");
	});
	
	function changeInventory(){
		$("#money").html(money);

		if(autoLogPlus>0){
			$("#autoChopper-title").css("display","block");
			$("#ownedAutoChopper").html(autoLogPlus);
		}else{
			$("#autoChopper-title").css("display","none");
		}
		
		if(pickaxes>0){
			$("#pickaxe-title").css("display","block");
			$("#ownedPickaxes").html(pickaxes);
		}else{
			$("#pickaxe-title").css("display","none");
		}

		if(pickaxes>0){
			$("#stone-title").css("display","block");
			$("#stones").html(stones);
		}else{
			$("#stone-title").css("display","none");
		}

		if(logs == 1){
			$("#logs").html(logs);

		}else{
			$("#logs").html(logs);
		}
	}

	function changeMarket(){
		if(logs>0){
			$("#sellAll").removeAttr("disabled");
		}else{
			$("#sellAll").attr('disabled','');
		}
		if(logs>=1){
			$("#sell1").removeAttr("disabled");
		}else{
			$("#sell1").attr('disabled','');
		}
		if(logs>=10){
			$("#sell10").removeAttr("disabled");
		}else{
			$("#sell10").attr('disabled','');
		}

		if(money>=autoChopperPrice){
			$("#autoChopperCost").html(autoChopperPrice);
			$("#autoChopper-buy").css("display","block");
			$("#autoChopper-buy").removeAttr("disabled");
		}else{
			if(autoLogPlus>0){
				$("#autoChopper-buy").attr('disabled','');
			}else{
				$("#autoChopper-buy").css("display","none");
			}
		}
		
		if(money>=pickaxesPrice){
			$("#pickaxeCost").html(pickaxesPrice);
			$("#pickaxe-buy").css("display","block");
			$("#pickaxe-buy").removeAttr("disabled");
		}else{
			if(autoLogPlus>0){
				$("#pickaxe-buy").attr('disabled','');
			}else{
				$("#pickaxe-buy").css("display","none");
			}
		}

	}

	function switchMenu(menu){
		$(".menus").children().css("display","none");
		$("."+menu).css("display","block");
		return menu;
	}
});