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
    constructor(now, min, max, options) {
        this.dom = elt("div", {
            className: "progress-bar"
        });
        this.min = min;
        this.max = max;
        this.intervalCode = 0;
        this.now = now;
        this.options = options;
        this.syncState();
        if (options.parent) $(options.parent).empty().append(this.dom);
        else document.body.appendChild(this.dom)
    }

    syncState() {
        $(this.dom).animate({
            width: this.now + '%'
        }, 300, "easeOutQuad");
    }

    startTo(step, time, callBack) {
        if (this.intervalCode !== 0) return;
        this.now += step;
        this.syncState();

        $(this.options.button).removeAttr('hide');
        $(this.options.button).attr('disabled', 'true');
        this.intervalCode = setInterval(() => {
            if (this.now + step >= this.max) {
                this.now = this.max;
                this.syncState();
                clearInterval(this.intervalCode);
                this.intervalCode = 0;

                this.reset();
                callBack();
                return;
            }
            this.now += step;
            this.syncState();
        }, time)
    }

    reset() {
        $(this.dom).animate({
            opacity: '0'
        }, 150);
        setTimeout(() => {
            $(this.options.button).attr('hide', 'true');
            $(this.options.button).removeAttr("disabled");
            this.now = 0;

            $(this.dom).animate({
                width: '0%',
                opacity: '1'
            }, 0);

        }, 200);
    }

    end() {
        console.log("end");
        this.now = this.max;
        clearInterval(this.intervalCode);
        this.intervalCode = 0;
        this.syncState();
    }
}

$(document).ready(() => {



    $(".menu-mats button").click(function() {
        //alert("#" + $("#" + this.id + ">div").attr("id") + " #" + this.id);
        let pb = new Progress(0, 0, 100, { parent: "#" + $("#" + this.id + ">div").attr("id"), button: "#" + this.id });
        var step = 20;
        var time = 1500;

        pb.startTo(step, time, () => {
            var matName = this.id.slice(8);
            if (matName == player.mats[matName].name) player.mats[matName].harvest();

        });
    });
});