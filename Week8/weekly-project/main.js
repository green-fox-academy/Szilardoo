'use strict';



postToServer();
getDataFromServer(post);





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



function getDataFromServer(callback){

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
	  for(var i = 0; i < list.posts.length; i++) {
	  		callback(list.posts[i].timestamp,list.posts[i].id,list.posts[i].title, list.posts[i].href, i,list.posts[i].score, list.posts[i].owner)
	  	}
		}
	}
}





function post(timestamp, id, post, href , num, position, created){
	var addPosts = new addPost(timestamp, id, post, href, num , position, created);
}




var counter= 0;



function addPost(timestamp,id, post, href , num,position=0, created='unknown') {

	counter ++;

	this.num = num
	this.timestamp = timestamp;
	this.id = id;
	this.position = position;
	this.post = post;
	this.createdBy = created;
	this.originalPage = href;

	this.getMain = document.querySelector('main');
	this.createSection = document.createElement('section');
	this.getMain.appendChild(this.createSection);

	this.createDivNumber = document.createElement('div');
	this.createDivNumber.className = 'number';
	this.createDivNumber.textContent = counter.toString();
	this.createSection.appendChild(this.createDivNumber);

	this.createPosDiv = document.createElement('div');
	this.createPosDiv.className = 'pos';
	this.createSection.appendChild(this.createPosDiv);

	this.createUp = document.createElement('button');
	this.createUp.className = 'up';
	this.createUp.textContent = 'up';
	this.createPosDiv.appendChild(this.createUp);

	this.createPositon = document.createElement('div');
	this.createPositon.className = 'position';
	this.createPositon.textContent = this.position.toString();
	this.createPosDiv.appendChild(this.createPositon);

	this.createDown = document.createElement('button');
	this.createDown.className = 'down';
	this.createDown.textContent = 'down';
	this.createPosDiv.appendChild(this.createDown);

	this.createPost = document.createElement('div');
	this.createPost.className = 'post';
	this.createSection.appendChild(this.createPost);

	this.createPostText = document.createElement('a');
	this.createPostText.className = 'postText';
	this.createPostText.href = this.originalPage;
	this.createPostText.textContent = this.post;
	this.createPost.appendChild(this.createPostText);

	this.createArticle = document.createElement('article');
	this.createArticle.className = 'submited';
	this.createArticle.textContent = 'submited by ' + this.createdBy;
	this.createPost.appendChild(this.createArticle);

	this.createModDiv = document.createElement('div');
	this.createModDiv.className = 'mod';
	this.createPost.appendChild(this.createModDiv);

	this.createModify = document.createElement('button');
	this.createModify.className = 'modify';
	this.createModify.textContent = 'modify';
	this.createModDiv.appendChild(this.createModify);

	this.createRemove = document.createElement('button');
	this.createRemove.className = 'remove';
	this.createRemove.textContent = 'remove';
	this.createModDiv.appendChild(this.createRemove);




	this.createUp.addEventListener('click', function(){
		
		var url = 'https://time-radish.glitch.me/posts/'+this.id+'/upvote';
		var xhrSend = new XMLHttpRequest();

		xhrSend.open('PUT', url, true);

		xhrSend.setRequestHeader('Accept', 'application/json')
		xhrSend.send();


//--------------------------------------------------------------------------------------------


		xhrSend.onreadystatechange = function(){
			if (xhrSend.readyState === XMLHttpRequest.DONE){
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
					this.createPositon.textContent = list.posts[this.num].score.toString()
			  	}
				}.bind(this)
			}
		}.bind(this)


//-----------------------------------------------------------------------------------------------------

		
		this.createUp.style.backgroundImage = "url(upvoted.png)";

	}.bind(this))




	this.createDown.addEventListener('click', function(){
		var url = 'https://time-radish.glitch.me/posts/'+this.id+'/downvote';
		var xhrSend = new XMLHttpRequest();

		xhrSend.open('PUT', url, true);

		xhrSend.setRequestHeader('Accept', 'application/json')
		xhrSend.send();

		var xhr = new XMLHttpRequest();



//--------------------------------------------------------------------------------------------------


		xhrSend.onreadystatechange = function(){
			if (xhrSend.readyState === XMLHttpRequest.DONE){
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
					this.createPositon.textContent = list.posts[this.num].score.toString()
			  	}
				}.bind(this)
			}
		}.bind(this)


//------------------------------------------------------------------------------




		this.createDown.style.backgroundImage = "url(downvoted.png)";
	}.bind(this))




	this.createRemove.addEventListener('click', function(){
		this.fun = function (timestamp, id, post, href, num , position, created){
			var addPosts = new addPost(timestamp, id, post, href, num , position, created);
		}
		getDataFromServer(this.fun);
		var url = 'https://time-radish.glitch.me/posts/'+this.id;
		var xhrSend = new XMLHttpRequest();

		xhrSend.open('DELETE', url, true);

		xhrSend.setRequestHeader('Accept', 'application/json')
		xhrSend.send();




	}.bind(this))

}
