class Player {
    constructor() {
        this.reset();
    }

    reset() {

        this.last_ts = Date.now();

        this.mats = {
            log: this.newMat("log"),
            stone: this.newMat("stone")
        };

        this.items = {
            pickaxe: this.newItem("pickaxe", 25),
            autoChopper: this.newItem("autoChopper", 70, 1)
        };
        this.money = 0;

        this.time_since_start = 0;
        this.won = false;
    }

    save() {

        let data = [];
        data.push(this.last_ts);

        data.push(this.mats);
        data.push(this.items);

        data.push(this.money);

        data.push(this.time_since_start);
        data.push(this.won);

        return data;
    }

    load(data) {
        this.reset();

        this.last_ts = data[0];

        this.mats = data[1];
        this.items = data[2];

        this.money = data[3];

        this.time_since_start = data[4];
        this.won = data[5];

        screenUpdate();
    }

    newItem(name = "", price = 1, plus = 0, amount = 0) {
        return {
            name: name,
            amount: amount,
            price: price,
            plus: plus
        };
    }

    newMat(name = "", price = 1, plus = 1, amount = 0) {
        return {
            name: name,
            amount: amount,
            price: price,
            plus: plus
        };
    }
}