class Player {
	constructor() {
		this.reset();
	}

	reset() {

		this.last_ts = Date.now();

		this.mats = {
			log: new Mat("log", "chop", 1, true),
			stone: new Mat("stone", "mine"),
			iron_ore: new Mat("iron_ore", "mine", 2),
			straw: new Mat("straw", "mine", 2)
		};

		this.tools = {
			pickaxe: this.newTool("pickaxe", 25, ["stone", "iron_ore", "coal"]),
			autoChopper: this.newTool("autoChopper", 70, ["log"], 1)
		};

		this.skills = {
			chop: this.newSkill("chop"),
			mine: this.newSkill("mine")
		}

		this.upgrades = {
			//wheyStone: this.newtool("wheStone", 50)
		}

		this.money = 0;
		this.focus = 0;

		this.time_since_start = 0;
		this.won = false;
	}

	save() {

		let data = [];
		data.push(this.last_ts);

		data.push(this.mats);
		data.push(this.tools);
		data.push(this.skills);

		data.push(this.upgrades);

		data.push(this.money);
		data.push(this.focus);

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

		for (let skill in data[3]) {
			for (let attr in data[3][skill]) this.skills[skill][attr] = data[3][skill][attr];
		}
		this.upgrades = data[4];

		this.money = data[5];
		this.focus = data[6];

		this.time_since_start = data[7];
		this.won = data[8];

		screenUpdate();
	}

	newSkill(name = "", maxlvl = 10, lvl = 0, exp = 0, nextlvl = 1) {
		return {
			name: name,
			maxlvl: maxlvl,
			exp: exp,
			nextlvl: nextlvl,
			lvl: lvl,

			addExp(addexp = 1) {
				this.exp += addexp;
				if (this.exp >= this.nextlvl) this.levelUp();
				return this.exp;
			},

			levelUp(lvl = null) {
				if (lvl) this.lvl = lvl;
				xpBar.syncState(100);
				if (this.maxlvl <= this.lvl) return this.lvl;
				if (!lvl) this.lvl += 1;
				this.exp = 0;
				this.nextlvl = Math.ceil(3 / 3 * this.lvl + 1 / 2);
				return this.lvl;
			},

			screenUpdate() {
				$("#skill-bar-name").html(this.name);
				$(".level-bar #skill-level-num").html(this.lvl);

				let now = (this.exp <= 0) ? 0 : Math.ceil((this.exp / this.nextlvl) * 100);
				if (xpBar.now != now) xpBar.syncState(now);

			}


		};
	}

	newTool(name = "", price = 1, matNames = [], plus = 0, amount = 0, lvl = 0) {
		return {
			name: name,
			price: price,
			matNames: matNames,
			plus: plus,
			amount: amount,
			lvl: lvl,

			upgrade(lvl = null) {
				if (lvl) this.lvl = lvl;
				else this.lvl += 1;

				if (lvl < this.lvl)
					for (let i = 0; i < this.matNames.length; i++)
						if (player.mats[matNames[i]]) player.mats[matNames[i]].unlocked = false;

				for (let i = 0; i < this.matNames.length && i < this.lvl; i++)
					if (player.mats[matNames[i]])
						player.mats[matNames[i]].unlocked = true;

			},

			buy(player) {
				if (player.money < this.price) return;
				player.money -= this.price;
				this.amount++;
				this.price *= this.amount;

				this.upgrade();
				screenUpdate();
			}
		};
	}
}