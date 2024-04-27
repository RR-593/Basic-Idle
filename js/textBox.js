function newMessage(newtext) {
	para = $("div#text");
	text = para.html();
	para.html(text + "<p style='opacity:0;'>" + newtext + "</p>");
	let $p = $("div#text p:last");
	let add = $p.outerHeight() + parseInt($p.css("margin-top"));
	$("div#text").animate({ top: "-=" + add + "px" });
	$p.animate({ opacity: "1" }, 500);
}