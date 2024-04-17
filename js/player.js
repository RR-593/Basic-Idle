class Player {
  constructor() {
    this.reset();
  }

  reset() {
    this.last_ts = Date.now();

    this.logs 							= 0;
		this.logPlus 						= 1;
		this.logPrice 					= 1;
		this.stone 							= 0;
		this.stonePlus 					= 1;
		this.stonePrice 				= 1;
		this.money 							= 0;
		this.pickaxe 						= 0;
		this.pickaxesPrice 			= 25;
		this.autoLogPlus 				= 0;
		this.autoChopperPrice 	= 70;


    this.time_since_start = 0;
    this.won = false;
  }

  save() {
    let data = [];
    data.push(this.last_ts);
		data.push(this.logs);
		data.push(this.logPlus);
		data.push(this.logPrice);
		data.push(this.stonePlus);
		data.push(this.stonePrice);
		data.push(this.money);
		data.push(this.pickaxe);
		data.push(this.pickaxesPrice);
		data.push(this.autoLogPlus);
		data.push(this.autoChopperPrice);

		data.push(this.time_since_start);
		data.push(this.won);

    return data;
  }

  load(data) {
    this.reset();

    this.last_ts = data[0];

    this.logs 							= data[1];
		this.logPlus 						= data[2];
		this.logPrice 					= data[3];
		this.stone 							= data[4];
		this.stonePlus 					= data[5];
		this.stonePrice 				= data[6];
		this.money 							= data[7];
		this.pickaxe 						= data[8];
		this.pickaxesPrice 			= data[9];
		this.autoLogPlus 				= data[10];
		this.autoChopperPrice 	= data[11];


    this.time_since_start = data[12];
    this.won = data[13];

    screenUpdate();
  }
}