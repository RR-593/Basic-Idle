class Mat {
    constructor(name = "", unlocked = false, sellprice = 1, de_plus = 1, amount = 0) {
        this.name = name;
        this.sellprice = sellprice;
        this.de_plus = de_plus;

        this.reset();
        this.unlocked = unlocked;
        this.amount = amount;
    }

    reset() {
        this.plus = this.de_plus;
        this.amount = 0;
        this.unlocked = false;
    }

    harvest(multiplyer = 1) {

        if (!this.unlocked) {
            alert("you have nothing to get " + this.name + " with!");
        } else {
            this.amount += this.plus * multiplyer;
            screenUpdate();
        }
    }

    screenUpdate() {
        var eclass = "." + this.name;
        $("#" + this.name).html(this.amount);
        if (this.unlocked) $("#harvest-" + this.name).css("display", "grid")
        else $("#harvest-" + this.name).css("display", "none");
        if (this.amount) $(eclass).css("display", "block")
        else $(eclass).css("display", "none");
    }

}