var player = new Player();
const mats = player.mats;
const items = player.items;
loadFromLocalStorage();
gameLoop()

$(document).ready(function() {
    var menu;

    $("#chop").click(function() {
        mats.log.amount += mats.log.plus;
        screenUpdate();
    });

    $("#mine").click(function() {
        if (items.pickaxe.amount == 0) {
            alert("you have nothing to mine stone with!");
        } else {

            mats.stone.amount += mats.stone.plus;
            screenUpdate();
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

        if (mats.log.amount < amount) {
            return;
        }

        if (amount < 0) {
            player.money += mats.log.amount * mats.log.price;
            mats.log.amount = 0;
        } else {

            player.money += amount * mats.log.price;
            mats.log.amount -= amount
        }
    }

    $("#autoChopper-buy").click(function() {
        if (player.money < items.autoChopper.price) {
            return;
        }
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