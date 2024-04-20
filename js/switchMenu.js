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