function onClickExplore() {
	var text = "";
	var scenario = ranNum.num() % 20;
	switch (true) {
		case scenario <= 1:
			newMessage("found a cave..");
			switchMenu("cave");
			break;
		case scenario <= 2:
			text = "You hear a rustlling in the bushes...<br/>" +
				"A big monster appered!";
			newMessage(text);
			break;
		case scenario <= 6:
			text = "You hear a rustlling in the bushes...<br/>" +
				"A <b>big</b> monster appered!";
			newMessage(text);
			break;
		case scenario <= 8:
			newMessage("You found some materials");
			var random_item = ranNum.num() % 3;
			var random_amount = (ranNum.num() % 3) + 1;
			switch (random_item) {
				case 0:
					player.mats["log"].harvest(random_amount);
					break;
				case 1:
					player.mats["stone"].harvest(random_amount);
					break;
				case 2:
					player.mats["log"].harvest(random_amount);
					player.mats["stone"].harvest(random_amount);
					break;
			}
			break;
		case scenario <= 9:
			text = "You found an abandoned shack<br/>" +
				"it looks run down...";
			newMessage(text);
			break;
		case scenario <= 12:
			newMessage("You ran into the traveling merchant");
			menu = switchMenu("menu-shop");
			screenUpdate();
			break;
		case scenario <= 13:
			text = "You hear a rustlling in the bushes...<br>" +
				"You see peicing blue eyes through the dark leaves..." +
				"A fox pounces in front of you";
			newMessage(text);

			newMessage("They speak...");
			break;
		default:
			newMessage("found nothing");
	};
}