var ranNum = {
	lookupTable: [],
	index: 0,

	num: function() {
		return ++this.index >= this.lookupTable.length ? this.lookupTable[this.index = 0] : this.lookupTable[this.index]
	},

	onLoad: function() {
		intvial = setInterval(() => {
			for (var i = 100; i--;) this.lookupTable.push(Math.random() * 101 | 0);
			clearInterval(intvial);
		});
	}
}