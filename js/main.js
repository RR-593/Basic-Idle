var player = new Player();
gameLoop();


$(document).ready(function() {
    screenUpdate();
    var menu;

    $(".menu-mats button").click(function() {
        var matName = this.id.slice(8);
        for (let mat in player.mats) {
            if (matName == player.mats[mat].name) {
                player.mats[mat].harvest();
                return;
            }
        }
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

    $("#save").click(function() {
        menu = switchMenu("save-menu");
    });

    $("#visit").click(function() {
        menu = switchMenu("menu-shop");
        screenUpdate();
    });

    $(".backpack-tabs button").click(function() {
        $(".backpack-tabs button").removeClass('selected');
        this.className = 'selected';
        menu = switchInv(this.id);
        screenUpdate();
    });

});