'use strict';

var allStart = new gameBasic;

function gameBasic() {
	this.candyCounter = 0;
	this.candies = document.querySelector('.candies');
	this.buttonCandies = document.querySelector('.create-candies');
	this.buyLollypop = document.querySelector('.buy-lollypops');
	this.lollypop = document.querySelector('.lollypops');
	this.lollypopList = this.lollypop.textContent.split('🍭')
	this.candyNumber = parseInt(this.lollypopList.length/10);
	this.candyMachine = document.querySelector('.speed');
	this.makeCandyRainButton = document.querySelector('.candy-machine');
	this.canChange = true;


	this.createCandies = function(){
		this.candyCounter+=1;
		this.candies.textContent = this.candyCounter.toString();
	}

	this.buy = function(){
		if(this.candyCounter >= 100) {
			this.candyCounter -= 100;
			this.lollypop.textContent += '🍭';
			this.candies.textContent = this.candyCounter.toString();
			this.lollypopList = this.lollypop.textContent.split('🍭')
			if(this.canChange){
				this.candyNumber = parseInt(this.lollypopList.length/10);
			}
			this.candyMachine.textContent = this.candyNumber.toString();
		}
	}.bind(this)

	this.oneCandyPerSecond = function(){
		this.candyCounter += this.candyNumber;
		this.candies.textContent = this.candyCounter.toString();
		this.candyMachine.textContent = this.candyNumber.toString();
	}

	this.makeCandyRain = function(){
		this.canChange = false;
		this.candyNumber *= 10;
		this.candies.textContent = this.candyCounter.toString();
		this.candyMachine.textContent = this.candyNumber.toString();
	}

	setInterval(this.oneCandyPerSecond.bind(this), 1000);

	this.makeCandyRainButton.addEventListener('click', this.makeCandyRain.bind(this));
	this.buyLollypop.addEventListener('click', this.buy.bind(this));
	this.buttonCandies.addEventListener('click', this.createCandies.bind(this));

}