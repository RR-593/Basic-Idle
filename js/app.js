var player = new Player();
loadFromLocalStorage();
var items = player.items;
var upgrades = player.upgrades;

gameLoop();

$(document).ready(function() {
    var menu;

    $(".menu-mats button").click(function() {
        var matName = this.id.slice(8);
        for (let mat in player.mats) {
            if (matName == player.mats[mat].name) {
                player.mats[mat].harvest();
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


    $("#autoChopper-buy").click(function() {
        if (player.money < items.autoChopper.price) return;
        player.money -= items.autoChopper.price;
        items.autoChopper.amount++;
        items.autoChopper.price *= items.autoChopper.amount;

        screenUpdate();
    });

    $("#pickaxe-buy").click(function() {
        if (player.money < items.pickaxe.price) {
            return;
        }
        player.money -= items.pickaxe.price;
        items.pickaxe.amount++;
        items.pickaxe.price *= items.pickaxe.amount;

        screenUpdate();
    });

    $("#save").click(function() {
        menu = switchMenu("save-menu");
    });

    $("#visit").click(function() {
        menu = switchMenu("shop");
        screenUpdate();
    });

});