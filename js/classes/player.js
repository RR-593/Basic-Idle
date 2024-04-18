class Player {
    constructor() {
        this.reset();
    }

    reset() {

        this.last_ts = Date.now();

        this.mats = {
            log: new Mat("log", true),
            stone: new Mat("stone"),
            iron_ore: new Mat("iron_ore")
        };

        this.items = {
            pickaxe: this.newItem("pickaxe", 25),
            autoChopper: this.newItem("autoChopper", 70, 1)
        };

        this.upgrades = {
            wheyStone: this.newItem("wheStone", 50)
        }

        this.money = 0;

        this.time_since_start = 0;
        this.won = false;
    }

    save() {

        let data = [];
        data.push(this.last_ts);

        data.push(this.mats);
        data.push(this.items);
        data.push(this.upgrades);

        data.push(this.money);

        data.push(this.time_since_start);
        data.push(this.won);

        return data;
    }

    load(data) {
        this.reset();

        this.last_ts = data[0];

        for (let mat in data[1]) {
            for (let attr in data[1][mat]) this.mats[mat][attr] = data[1][mat][attr];
        }
        this.items = data[2];
        this.upgrades = data[3];

        this.money = data[4];

        this.time_since_start = data[5];
        this.won = data[6];

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
}