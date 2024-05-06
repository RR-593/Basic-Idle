function switchMenu(menu) {
	allStop();
	$(".menus").children().css("display", "none");
	$(".ascii").children().css("display", "none");
	$("." + menu).css("display", "block");
	$("." + menu + "-bg").css("display", "flex");
	return menu;
}

function switchInv(menu) {
	$(".inventory").children().css("display", "none");
	$("#" + menu + "pack").css("display", "grid");
	return menu;
}

function switchPopup(popup) {
	$(".popups>div:not(." + popup + ")").css("display", "none");
	var blur = $(".main-screen>*:not(.sidebar),.textbox");
	var hide = $("." + popup).toggle().attr('style');
	if (hide != 'display: block;') {
		blur.css("filter", "none");
	} else {
		blur.css("filter", "blur(3px)");
	}
}