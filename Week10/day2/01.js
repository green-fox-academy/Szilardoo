'use strict';

// Create a constructor for creating Animals.
// it should take one parameter: what the animal says
// Every animal should have a method called say() that prints what the animal says

class Animals {
	constructor(animalSays) {
		this.says = animalSays;
	}

	say(){
		console.log(this.says);
	}
}

var pig = new Animals('RÖFFF');

pig.say()

var cat = new Animals('MeaooooowWWW');

cat.say()


function Animals2(animalSays){
	this.animalSays = animalSays;
}

Animals2.prototype.say = function(){
	console.log(this.animalSays);
}

var dog = new Animals2('wooof');

dog.say()