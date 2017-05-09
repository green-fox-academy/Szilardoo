'use strict';

function animal(){
	this.hunger = 50;
	this.thirst = 50;
	this.eat = function() {
		this.hunger--;
	}
	this.drink = function(){
		this.thirst--;
	}
	this.play = function(){
		this.hunger++;
		this.thirst++;
	}
}

function farm(){
	this.animals = [];
	this.freePlaces = 5;
	this.breed = function(animal) {
		if (this.freePlaces > 0){
			this.animals.push(animal)
		}
	}
	this.slaughter = function(){
		var minHunger = 1000;
		for (var i = 0; i < this.animals.length; i++ ){
			if (minHunger > this.animals[i].hunger){
				minHunger = this.animals[i].hunger;
			}
		}
		for (var j = 0; j < this.animals.length; j++ ){
			if (minHunger === this.animals[j].hunger){
				delete this.animals[j];
			}
		}
	}
}


var pig = new animal();
pig.eat()
pig.eat()
pig.eat()
console.log('Pig\'s datas ' + pig.hunger, pig.thirst);
var dog = new animal();
dog.play();
dog.drink();
console.log('Dog\'s datas ' + dog.hunger, dog.thirst);
var cat = new animal();
console.log('Cat\'s datas ' + cat.hunger, cat.thirst)
var farm = new farm();
farm.breed(cat);
farm.breed(pig);
farm.breed(dog);
console.log(farm.animals);
farm.slaughter();
console.log(farm.animals);