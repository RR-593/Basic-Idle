function onClickExplore() {
	switch (ranNum.num() % 3) {
		case 0:
			newMessage("found a cave..");
			switchMenu("cave");
			break;
		default:
			newMessage("found nothing");
	};
}