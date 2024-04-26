function newMessage(newtext) {
	para = $("p#text");
	text = para.html();
	para.html(text + "<br>" + newtext);
}