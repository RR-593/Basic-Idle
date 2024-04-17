function screenUpdate() {
    //mats n items
    var autoChopper = player.items.autoChopper;
    var pickaxe = player.items.pickaxe;
    var stone = player.mats.stone;
    var log = player.mats.log;

    //Inventory
    $("#money").html(player.money);

    if (autoChopper.amount > 0) {
        $("#autoChopper-title").css("display", "block");
        $("#ownedAutoChopper").html(autoChopper.plus);
    } else {
        $("#autoChopper-title").css("display", "none");
    }

    if (pickaxe.amount > 0) {
        $("#pickaxe-title").css("display", "block");
        $("#ownedPickaxes").html(pickaxe.amount);
    } else {
        $("#pickaxe-title").css("display", "none");
    }

    if (stone.amount > 0) {
        $("#stone-title").css("display", "block");
        $("#stones").html(stone.amount);
    } else {
        $("#stone-title").css("display", "none");
    }

    $("#logs").html(log.amount);

    //Shop
    if (log.amount > 0) {
        $("#sellAll").removeAttr("disabled");
    } else {
        $("#sellAll").attr('disabled', '');
    }
    if (log.amount >= 1) {
        $("#sell1").removeAttr("disabled");
    } else {
        $("#sell1").attr('disabled', '');
    }
    if (log.amount >= 10) {
        $("#sell10").removeAttr("disabled");
    } else {
        $("#sell10").attr('disabled', '');
    }

    $("#autoChopperCost").html(autoChopper.price);
    if (player.money >= autoChopper.price) {
        $("#autoChopper-buy").css("display", "block");
        $("#autoChopper-buy").removeAttr("disabled");
    } else {
        if (autoChopper.amount > 0)
            $("#autoChopper-buy").attr('disabled', '');
        else
            $("#autoChopper-buy").css("display", "none");
    }

    $("#pickaxeCost").html(pickaxe.price);
    if (player.money >= pickaxe.price) {
        $("#pickaxe-buy").css("display", "block");
        $("#pickaxe-buy").removeAttr("disabled");
    } else {
        if (pickaxe.amount > 0)
            $("#pickaxe-buy").attr('disabled', '');
        else
            $("#pickaxe-buy").css("display", "none");

    }

}