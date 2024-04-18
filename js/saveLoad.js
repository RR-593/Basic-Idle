var LOCAL_STORAGE_NAME = "raveWriath.BasicIdle";

function saveToLocalStorage() {
    saveInverntory();
    try {
        window.localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(player.save()));
    } catch (e) {}
}

function loadFromLocalStorage() {
    if (window.localStorage.getItem(LOCAL_STORAGE_NAME) === null) return;
    let backup = player.save();
    try {
        player.load(JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_NAME)));
    } catch (e) { player.load(backup); }
}

function getSave() {
    saveInverntory();
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
    player.reset();
}

function saveInverntory() {
    player.mats = mats;
    player.items = items;
    player.upgrades = upgrades;
}