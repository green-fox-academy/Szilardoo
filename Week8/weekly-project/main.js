'use strict';



postToServer();
getDataFromServer();





function postToServer(){
	var url = 'https://time-radish.glitch.me/posts';
	var xhrSend = new XMLHttpRequest();

	xhrSend.open('POST', url, true);

	xhrSend.setRequestHeader('Accept', 'application/json')
	xhrSend.setRequestHeader('Content-Type', 'application/json')

	if (document.location.href === 'file:///C:/Greenfox/Szilardoo/Week8/weekly-project/add.html'){
		var subButton = document.querySelector('button');
		subButton.addEventListener('click', function(){
			var url = document.querySelector(".url");
			var urlValue = url.value;
			var title = document.querySelector("textarea");
			var titleValue = title.value;
			xhrSend.send(JSON.stringify({
				  "title": titleValue,
				  "href": urlValue
				}));

			var timed = function() {document.location.href = 'file:///C:/Greenfox/Szilardoo/Week8/weekly-project/reddit.html';}
			setTimeout(timed, 700);
		})
	}
}



function getDataFromServer(){

	var url = 'https://time-radish.glitch.me/posts';
	var xhr = new XMLHttpRequest();


	xhr.open('GET', url, true);

	xhr.setRequestHeader('Accept', 'application/json')

	xhr.send('');

	var list;

	xhr.onreadystatechange = function(){
	if (xhr.readyState === XMLHttpRequest.DONE && document.location.href ==='file:///C:/Greenfox/Szilardoo/Week8/weekly-project/reddit.html') {
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
		createAll(list.posts[i].timestamp,list.posts[i].id,list.posts[i].score,list.posts[i].title,list.posts[i].owner,list.posts[i].href,getMain, counter)
	}

}


function createAll(a,b,c,d,e,f,g,counter){

		counter ++;

		var getMain = g;

		var timestamp = a;//list.posts[i].timestamp;
		var id = b;//list.posts[i].id;
		var position = c;//list.posts[i].score;
		var post = d;//list.posts[i].title;
		var createdBy = e;//list.posts[i].owner;
		var originalPage = f;//list.posts[i].href;

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
		
		var url = 'https://time-radish.glitch.me/posts/'+id+'/upvote';
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
		var url = 'https://time-radish.glitch.me/posts/'+id+'/downvote';
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

		var url = 'https://time-radish.glitch.me/posts/'+id;
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

}