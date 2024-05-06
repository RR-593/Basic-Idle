class Mat {
	constructor(name = "", skill = "", xpGain = 1, unlocked = 0, sellprice = 1, de_plus = 1, amount = 0) {
		this.name = name;
		this.skill = skill;
		this.xpGain = xpGain;
		this.sellprice = sellprice;
		this.de_plus = de_plus;

		this.reset();
		this.unlocked = unlocked;
		this.amount = amount;
	}

	reset() {
		this.plus = this.de_plus;
		this.amount = 0;
		this.unlocked = 0;
	}

	harvest(multiplyer = 1) {
		this.amount += this.plus * multiplyer;
		screenUpdate();

		return this.amount;
	}

	screenUpdate() {
		var eclass = "." + this.name;
		$("#" + this.name).html(this.amount);
		$("[id^=harvest-" + this.name + "]").css("display", "none");
		if (this.unlocked > 0)
			for (var i = 0; i < this.unlocked; i++) {
				$("[id=harvest-" + this.name + "-" + (i + 1) + "]").css("display", "grid")
			}
		if (this.amount) $(eclass).css("display", "block")
		else $(eclass).css("display", "none");
	}

}