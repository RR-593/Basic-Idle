var ShopTips = {
	tipIndex: 0,
	tips: [],
	maxTips: 0,

	newTip(message = "", callFunc = null) {
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
			return;
		};
		this.showTip();
		if (this.tips[this.tipIndex].callFunc == null) return;
		this.tips[this.tipIndex].callFunc();
	},

	onload: function() {
		this.tipIndex = player.tips;
		this.newTip("Need a tip?");

		this.newTip("Did you know you can toggle auto chop trees in the menu!", () => {
			$("#autoChop").css("display", "grid");
			$("#autoChop > input").bind('click', () => { settings.autoChopSetting() });
			console.log($("#autoChop > input").is(':checked'));
		});
		this.newTip("Each level up lets you chop trees faster");
		this.newTip("You don't have to chop one tree at a time");
		this.newTip("You can chop 3 trees at a time");

		this.showTip();
		$("#buy-tip").bind('click', () => { ShopTips.buyTip() });
	}
};