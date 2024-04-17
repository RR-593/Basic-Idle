function screenUpdate(){
	//Inventory
	$("#money").html(player.money);

	if(player.autoLogPlus>0){
		$("#autoChopper-title").css("display","block");
		$("#ownedAutoChopper").html(player.autoLogPlus);
	}else{
		$("#autoChopper-title").css("display","none");
	}
	
	if(player.pickaxe>0){
		$("#pickaxe-title").css("display","block");
		$("#ownedPickaxes").html(player.pickaxe);
	}else{
		$("#pickaxe-title").css("display","none");
	}

	if(player.pickaxe>0){
		$("#stone-title").css("display","block");
		$("#stones").html(stones);
	}else{
		$("#stone-title").css("display","none");
	}

	if(player.logs == 1){
		$("#logs").html(player.logs);

	}else{
		$("#logs").html(player.logs);
	}

	//Shop
	if(player.logs>0){
		$("#sellAll").removeAttr("disabled");
	}else{
		$("#sellAll").attr('disabled','');
	}
	if(player.logs>=1){
		$("#sell1").removeAttr("disabled");
	}else{
		$("#sell1").attr('disabled','');
	}
	if(player.logs>=10){
		$("#sell10").removeAttr("disabled");
	}else{
		$("#sell10").attr('disabled','');
	}

	if(player.money>=player.autoChopperPrice){
		$("#autoChopperCost").html(player.autoChopperPrice);
		$("#autoChopper-buy").css("display","block");
		$("#autoChopper-buy").removeAttr("disabled");
	}else{
		if(player.autoLogPlus>0){
			$("#autoChopper-buy").attr('disabled','');
		}else{
			$("#autoChopper-buy").css("display","none");
		}
	}
	
	if(player.money>=player.pickaxesPrice){
		$("#pickaxeCost").html(player.pickaxesPrice);
		$("#pickaxe-buy").css("display","block");
		$("#pickaxe-buy").removeAttr("disabled");
	}else{
		if(player.autoLogPlus>0){
			$("#pickaxe-buy").attr('disabled','');
		}else{
			$("#pickaxe-buy").css("display","none");
		}
	}

}