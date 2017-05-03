'use strict';

var accounts = [
	{ 'client_name': 'Igor', 'account_number': 11234543, 'balance': 203004099.2 },
	{ 'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 5204100071.23 },
	{ 'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1353600.0 }
]

// Create function that returns the name and balance of cash on an account

// Create function that transfers an balance of cash from one account to another
// it should have three parameters:
//  - from account_number
//  - to account_number
//  - balance
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

function nameAndBalace(list, account_number){
	for( var i = 0; i < list.length; i++){
		if (list[i]['account_number'] === account_number){
			return list[i]['client_name'] + ' ' +list[i]['balance']
		}
	}
}

console.log(nameAndBalace(accounts, 11234543))

function balanceTransfer(list, fromAccountNumber, toAccountNumber, balance) {
	var validAccount1 = false;
	var validAccount2 = false;
	for( var i = 0; i < list.length; i++){
		if (list[i]['account_number'] === fromAccountNumber){
			list[i]['balance'] = list[i]['balance'] - balance;
			validAccount1 = true;
		}
	}
	for( var i = 0; i < list.length; i++){
		if (list[i]['account_number'] === toAccountNumber){
			list[i]['balance'] = list[i]['balance'] + balance;
			validAccount2 = true;
		}
	}
	if (validAccount1 === false || validAccount2 === false){
			console.log("404 - account not found")
		}
}

console.log(nameAndBalace(accounts, 11234543))
console.log(nameAndBalace(accounts, 23456311))
balanceTransfer(accounts, 11234543, 23456311, 40000000)
console.log(nameAndBalace(accounts, 11234543))
console.log(nameAndBalace(accounts, 23456311))
balanceTransfer(accounts, 1123454, 1123454, 40000000)
