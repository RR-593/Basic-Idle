function onClickExplore() {
	var scenario = ranNum.num() % 20;
	switch (true) {
		case scenario <= 1:
			newMessage("found a cave..");
			switchMenu("cave");
			break;
		case scenario <= 2:
			newMessage("You hear a rustlling in the bushes...");
			newMessage("A big monster appered!");
			break;
		case scenario <= 6:
			newMessage("You hear a rustlling in the bushes...");
			newMessage("A monster appered");
			break;
		case scenario <= 8:
			newMessage("You found some materials");
			break;
		case scenario <= 9:
			newMessage("You found an abandoned shack");
			newMessage("it looks run down...");
			break;
		case scenario <= 12:
			newMessage("You ran into the traveling merchant");
			break;
		case scenario <= 13:
			newMessage("You hear a rustlling in the bushes...");
			newMessage("You see peicing blue eyes through the dark leaves...");
			newMessage("A fox pounces in front of you");

			newMessage("They speak...");
			break;
		default:
			newMessage("found nothing");
	};
}