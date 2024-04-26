function switchMenu(menu) {
	$(".menus").children().css("display", "none");
	$("." + menu).css("display", "block");
	return menu;
}

function switchInv(menu) {
	$(".inventory").children().css("display", "none");
	$("#" + menu + "pack").css("display", "grid");
	return menu;
}

function switchPopup(popup) {
	$(".popups>div:not(." + popup + ")").css("display", "none");
	var hide = $("." + popup).toggle().attr('style');
	if (hide != 'display: block;') {
		$(".main-screen>div:not(.sidebar)").css("filter", "none");
	} else {
		$(".main-screen>div:not(.sidebar)").css("filter", "blur(3px)");
	}
}