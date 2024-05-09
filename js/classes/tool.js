var toolLvls = ['Wooden', 'bone', 'stone', 'iron', 'gold', 'diamond'];

class Tool {
	constructor(name = "", price = 1, matNames = [], plus = 0, amount = 0, lvl = 0) {
		this.name = name;
		this.price = price;
		this.matNames = matNames;
		this.plus = plus;
		this.amount = amount;
		this.lvl = lvl;
	}

	upgrade(lvl = null) {
		if (lvl) this.lvl = lvl;
		else this.lvl += 1;

		if (lvl < this.lvl)
			for (let i = 0; i < this.matNames.length; i++) {
				if (player.mats[this.matNames[i]]) player.mats[this.matNames[i]].unlocked = 0;
			}

		for (let i = 0; i < this.matNames.length && i < this.lvl; i++)
			if (player.mats[this.matNames[i]])
				player.mats[this.matNames[i]].unlocked = 1;

	}

	buy(player) {
		if (player.money < this.price) return;
		player.money -= this.price;
		this.amount++;
		this.price *= this.amount;

		this.upgrade();
		screenUpdate();
	}

}