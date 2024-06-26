var LOCAL_STORAGE_NAME = "raveWriath.BasicIdle";

function saveToLocalStorage() {
	try {
		window.localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(player.save()));
	} catch (e) {}
}

function loadFromLocalStorage() {
	console.log(LOCAL_STORAGE_NAME);
	if (window.localStorage.getItem(LOCAL_STORAGE_NAME) === null) return;
	let backup = player.save();
	try {
		player.load(JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_NAME)));
	} catch (e) { player.load(backup); }
}

function getSave() {
	return btoa(JSON.stringify(player.save()));
}

function loadSave(save) {
	let backup = player.save();
	try {
		player.load(JSON.parse(atob(save.replace(/[^A-Za-z0-9+/=]/g, ''))));
	} catch (e) { player.load(backup); }
}

function hardReset() {
	window.localStorage.removeItem(LOCAL_STORAGE_NAME);
	$("#skill-bar-name").html('');
	$(".level-bar #skill-level-num").html('0');
	xpBar.syncState(0);
	$(".popups>div").css("display", "none");
	$(".main-screen>div:not(.sidebar),.textbox").css("filter", "none");
	player.reset();
}