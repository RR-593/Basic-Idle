/* 
 * (class)Progress<nowValue, minValue, maxValue>
 */

//helper function-> return <DOMelement>
function elt(type, prop, ...childrens) {
	let elem = document.createElement(type);
	if (prop) Object.assign(elem, prop);
	for (let child of childrens) {
		if (typeof child == "string") elem.appendChild(document.createTextNode(child));
		else elem.appendChild(elem);
	}
	return elem;
}

//Progress class
class Progress {
	constructor(now, min, max, options = { parent: "", button: "", intervalIndex: 0 }) {
		this.dom = elt("div", {
			className: "progress-bar"
		});
		this.min = min;
		this.max = max;
		this.intervalCode = 0;
		this.now = now;
		this.options = options;
		this.syncState();
		this.setUp();
	}

	setUp(options = this.options) {
		if (options.parent) $(options.parent).empty().append(this.dom);
		else document.body.appendChild(this.dom)
		return options;
	}

	syncState(state = -1) {
		this.now = (state >= 0) ? state : this.now;
		$(this.dom).animate({
			width: this.now + '%'
		}, 300, "easeOutQuad");
		return this.now;
	}

	startTo(step, time, callBack) {
		if (this.intervalCode !== 0) return;
		this.now += step;
		this.syncState();

		this.intervalCode = setInterval(() => {
				var isHarvestInterupt = harvest_interval[this.options.intervalIndex];
				if (this.now + step >= this.max || isHarvestInterupt == 0) {
					if (isHarvestInterupt != 0) {
						this.now = this.max;
						this.syncState();
						callBack();
					}

					clearInterval(this.intervalCode);
					this.intervalCode = 0;

					this.reset();
					return;
				}
				this.now += step;
				this.syncState();
			},
			time);
	}

	reset() {
		$(this.dom).animate({
			opacity: '0'
		}, 150, "easeOutQuad");

		this.now = 0;

		$(this.dom).animate({
			width: '0%',
			opacity: '1'
		}, 0);
	}

	end() {
		console.log("end");
		this.now = this.max;
		clearInterval(this.intervalCode);
		this.intervalCode = 0;
		this.syncState();
	}
}