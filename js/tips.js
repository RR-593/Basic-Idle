var ShopTips = {
	tipIndex: 0,
	tips: [],
	maxTips: 0,

	newTip(message = "", callFunc = null) {
		this.tips.push({ message: message, callFunc: callFunc });
	},

	showTip() {
		console.log(this.tips[this.tipIndex].message);
	},

	buyTip() {
		this.tipIndex = (this.tipIndex + 1) % this.tips.length;
		this.showTip();
		if (this.tips[this.tipIndex].callFunc == null) return;
		this.tips[this.tipIndex].callFunc();
	},

	onload: function() {
		this.tipIndex = 0;
		this.newTip("Do want a tip?");

		this.newTip("Did you know you can toggle auto chop trees in the menu!", () => {

			$("#autoChop").css("display", "grid");
			$("#autoChop > input").bind('click', () => { settings.autoChopSetting() });
			console.log($("#autoChop > input").is(':checked'));
		});


		this.showTip();
		$("#buy-tip").bind('click', () => { ShopTips.buyTip() });
	}
};