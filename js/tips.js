var shopTips = {
	price: 1,
	tipsIndex: 0,
	tips: [],
	maxTips: 0,

	newTip(message = "", callFunc = () => { return null }) {
		if (this.tipsIndex >= this.tips.length) callFunc();
		this.tips.push({ message: message, callFunc: callFunc });
	},

	showTip(message = this.tips[this.tipsIndex].message) {
		$("#maccaEye").html("^");
		setInterval(() => {
			$("#maccaEye").html("•");
		}, 5400);
		$("#tipMsg").html(message);
		console.log(message);
	},

	buyTip() {

		if (this.tipsIndex + 1 >= this.tips.length) {
			this.showTip("Thats all I got :)");
			return this.tipsIndex;

		}
		this.tipsIndex++;
		this.showTip();
		this.tips[this.tipsIndex].callFunc();
		return this.tipsIndex;
	},

	onload(selectIndex = 0) {
		this.tipsIndex = selectIndex;
		this.newTip("Need a tip?");
		this.newTip("Did you know you can toggle auto chop trees in the menu!", () => {
			$("#autoChop").css("display", "grid");
			$("#autoChop>input").prop('checked', false);
			$("#autoChop > input").bind('click', () => {
				settings.autoChopSetting();
			});
		});
		this.newTip("Each level up lets you chop trees faster");
		this.newTip("You don't have to chop one tree at a time", () => {
			player.mats.log.unlocked = 2;
		});
		this.newTip("You can chop 3 trees at a time", () => {
			player.mats.log.unlocked = 3;
		});

		this.showTip();

		this.price = (Math.ceil(this.price * 1.4) * (1 + selectIndex));

		$("#buy-tip").bind('click', () => {
			if (player.money < shopTips.price) return;
			player.money -= shopTips.price;
			shopTips.price = Math.ceil(shopTips.price * 1.4);
			player.tipsIndex = shopTips.buyTip();
			screenUpdate();
		});
	}
};