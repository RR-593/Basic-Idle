var ShopTips = {
	tipIndex: 0,
	tips: [],
	maxTips: 0,

	newTip(message = "", callFunc = () => { return null }) {
		if (this.tipIndex >= this.tips.length) callFunc();
		this.tips.push({ message: message, callFunc: callFunc });
	},

	showTip(message = this.tips[this.tipIndex].message) {
		$("#maccaEye").html("^");
		setInterval(() => {
			$("#maccaEye").html("•");
		}, 5400);
		$("#tipMsg").html(message);
		console.log(message);
		screenUpdate();
	},

	buyTip() {
		if (this.tipIndex++ >= this.tips.length) {
			this.showTip("Thats all I got :)");
			return this.tipIndex;
		};
		this.showTip();
		this.tips[this.tipIndex].callFunc();
		return this.tipIndex;
	},

	onload: function(selectIndex = 0) {
		this.tipIndex = selectIndex;
		this.newTip("Need a tip?");

		this.newTip("Did you know you can toggle auto chop trees in the menu!", () => {
			$("#autoChop").css("display", "grid");
			$("#autoChop > input").bind('click', () => { settings.autoChopSetting(); });
		});
		this.newTip("Each level up lets you chop trees faster");
		this.newTip("You don't have to chop one tree at a time");
		this.newTip("You can chop 3 trees at a time");

		this.showTip();
		$("#buy-tip").bind('click', () => { player.tipsIndex = ShopTips.buyTip() });
	}
};