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

        this.tools = {
            pickaxe: this.newTool("pickaxe", 25, "stone"),
            autoChopper: this.newTool("autoChopper", 70, "log", 1)
        };

        this.upgrades = {
            //wheyStone: this.newtool("wheStone", 50)
        }

        this.money = 0;

        this.time_since_start = 0;
        this.won = false;
    }

    save() {

        let data = [];
        data.push(this.last_ts);

        data.push(this.mats);
        data.push(this.tools);
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

        for (let tool in data[2]) {
            for (let attr in data[2][tool]) this.tools[tool][attr] = data[2][tool][attr];
        }
        this.upgrades = data[3];

        this.money = data[4];

        this.time_since_start = data[5];
        this.won = data[6];

        screenUpdate();
    }

    newTool(name = "", price = 1, matName = "", plus = 0, amount = 0) {
        return {
            name: name,
            amount: amount,
            price: price,
            plus: plus,
            matName: matName,

            buy: function(player) {
                for (let mat in player.mats) {
                    if (this.matName == player.mats[mat].name) {
                        if (player.money < this.price) return;
                        player.money -= this.price;
                        this.amount++;
                        this.price *= this.amount;

                        player.mats[mat].unlock();
                        screenUpdate();
                        return;
                    }
                }
            }
        };
    }
}