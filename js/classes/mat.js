class Mat {
    constructor(de_name = "", unlocked = false, de_sellprice = 1, de_plus = 1, amount = 0) {
        this.de_name = de_name;
        this.de_sellprice = de_sellprice;
        this.de_plus = de_plus;

        this.reset();
        this.unlocked = unlocked;
        this.amount = amount;
    }

    reset() {
        this.name = this.de_name;
        this.sellprice = this.de_sellprice;
        this.plus = this.de_plus;
        this.amount = 0;
        this.unlocked = false;
    }

    harvest() {

        if (!this.unlocked) {
            alert("you have nothing to get " + this.name + " with!");
        } else {
            this.amount += this.plus;
            screenUpdate();
        }
    }

    screenUpdate() {
        var id = "." + this.name;
        $("#" + this.name).html(this.amount);
        if (this.amount > 0) {
            $(id).css("display", "block");
        } else {
            $(id).css("display", "none");
        }
    }

}