'use strict';


getDataFromServer();


function getDataFromServer(){

	//var url = 'https://time-radish.glitch.me/posts';
	var url = 'http://localhost:3000/posts';
	var xhr = new XMLHttpRequest();


	xhr.open('GET', url, true);

	xhr.setRequestHeader('Accept', 'application/json');

	xhr.send('');

	var list;

	xhr.onreadystatechange = function(){
	if (xhr.readyState === XMLHttpRequest.DONE) {

	 console.log(JSON.parse(xhr.response));
	  list = JSON.parse(xhr.response);
	  		addPost(list);
		




		}
	}
}



function addPost(list) {
	var counter= 0;

	var getMain = document.querySelector('main');
	getMain.innerHTML = '';
	for(var i = 0; i < list.posts.length; i++) {
		counter++
		createAll(list.posts[i], getMain, counter)
	}

}


function createAll(serveData,main,counter){

		var counter = counter;

		var getMain = main;

		var id = serveData.id;
		var position = serveData.score;
		var post = serveData.title;
		var createdBy = serveData.owner;
		var originalPage = serveData.href;

		var createSection = document.createElement('section');
		getMain.appendChild(createSection);

		var createDivNumber = document.createElement('div');
		createDivNumber.className = 'number';
		createDivNumber.textContent = counter.toString();
		createSection.appendChild(createDivNumber);

		var createPosDiv = document.createElement('div');
		createPosDiv.className = 'pos';
		createSection.appendChild(createPosDiv);

		var createUp = document.createElement('button');
		createUp.className = 'up';
		createUp.textContent = 'up';
		createPosDiv.appendChild(createUp);

		var createPositon = document.createElement('div');
		createPositon.className = 'position';
		createPositon.textContent = position.toString();
		createPosDiv.appendChild(createPositon);

		var createDown = document.createElement('button');
		createDown.className = 'down';
		createDown.textContent = 'down';
		createPosDiv.appendChild(createDown);

		var createPost = document.createElement('div');
		createPost.className = 'post';
		createSection.appendChild(createPost);

		var createPostText = document.createElement('a');
		createPostText.className = 'postText';
		createPostText.href = originalPage;
		createPostText.textContent = post;
		createPost.appendChild(createPostText);

		var createArticle = document.createElement('article');
		createArticle.className = 'submited';
		createArticle.textContent = 'submited by ' + createdBy;
		createPost.appendChild(createArticle);

		var createModDiv = document.createElement('div');
		createModDiv.className = 'mod';
		createPost.appendChild(createModDiv);

		var createModify = document.createElement('button');
		createModify.className = 'modify';
		createModify.textContent = 'modify';
		createModDiv.appendChild(createModify);

		var createRemove = document.createElement('button');
		createRemove.className = 'remove';
		createRemove.textContent = 'remove';
		createModDiv.appendChild(createRemove);
	



	createUp.addEventListener('click', function(){
		
		var url = 'http://localhost:3000/posts/'+id+'/upvote';
		var xhrSend = new XMLHttpRequest();

		xhrSend.open('PUT', url, true);

		xhrSend.setRequestHeader('Accept', 'application/json')
		xhrSend.send();

		xhrSend.onreadystatechange = function(){
		if (xhrSend.readyState === XMLHttpRequest.DONE) {
			getDataFromServer();
			}
		}

		createUp.style.backgroundImage = "url(upvoted.png)";

	})




	createDown.addEventListener('click', function(){
		var url = 'http://localhost:3000/posts/'+id+'/downvote';
		var xhrSend = new XMLHttpRequest();

		xhrSend.open('PUT', url, true);

		xhrSend.setRequestHeader('Accept', 'application/json')
		xhrSend.send();


		xhrSend.onreadystatechange = function(){
		if (xhrSend.readyState === XMLHttpRequest.DONE) {
			getDataFromServer();
			}
		}


		createDown.style.backgroundImage = "url(downvoted.png)";
	})




	createRemove.addEventListener('click', function(){

		var url = 'http://localhost:3000/posts/'+id;
		var xhrSend = new XMLHttpRequest();

		xhrSend.open('DELETE', url, true);

		xhrSend.setRequestHeader('Accept', 'application/json')
		xhrSend.send();

		xhrSend.onreadystatechange = function(){
		if (xhrSend.readyState === XMLHttpRequest.DONE) {
			getDataFromServer();
			}
		}

	})

	createModify.addEventListener('click', function(){

		document.location.href = 'modify.html#'+id;
		
	})

}