'use strict';

const blackPlayer = ['2H', '3D', '5S', 'KC', 'KD'];
const whitePlayer = ['AC', 'KH', '4S', '2C', '2H'];

function highestCard(cards) {
	let result = {value: 0, card: ''};

	cards.forEach(function(e){

		switch(e[0]){
			case 'T':
				result.value = 10;
				result.card = 'Ten';
				break;
			case 'J':
				result.value = 11;
				result.card = 'Jumbo';
				break;
			case 'Q':
				result.value = 12;
				result.card = 'Queen';
				break;
			case 'K':
				result.value = 13;
				result.card = 'King';
				break;
			case 'A':
				result.value = 14;
				result.card = 'Ace';
				break;
		}
		if(parseInt(e[0]) > result.value){
			result.value = parseInt(e[0]);
			result.card = e[0];
		}
	})
	return result;
}

function havePair(cards){
	let pair = {havePair: false, value: ''};
	let cardsList = [];
	cards.forEach(function(e){
		if(cardsList.includes(e[0])){
			pair.havePair = true;
			pair.value = e[0];
		}
		cardsList.push(e[0]);
	})
	return pair;
}

function highCardWin(black, white){
	let winnerResult;
	if(black.value > white.value){
		winnerResult = 'black - with high card: ' + black.card;
	}else {
		winnerResult = 'white - with high card: ' + white.card;
	}
	return winnerResult;
}

function pairWin(black, white){
	let returnWinner;
	if(black.havePair === false){
		returnWinner = 'white - with pair';
	}else if(white.havePair === false){
		returnWinner = 'black - with pair';
	}else {
		let blackCardValue = highestCard([black.value]);
		let whiteCardValue = highestCard([white.value]);

		if(blackCardValue.value > whiteCardValue.value){
			returnWinner = 'black - with pair';
		}else{
			returnWinner = 'white - with pair';
		}

	}

	return returnWinner;
}

function poker(player1, player2){
	let black = player1;
	let white = player2;
	let winner;

	let blackHighestCard = highestCard(black);
	let whiteHighestCard = highestCard(white);

	let blackPair = havePair(black);
	let whitePair = havePair(white);
	
	winner = pairWin(blackPair, whitePair);

	if(blackPair.havePair === false && whitePair.havePair === false){
		winner = highCardWin(blackHighestCard, whiteHighestCard);	
	}

	return winner;
}

console.log(poker(blackPlayer, whitePlayer));

module.exports = poker;