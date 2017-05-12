'use strict';


/*var getSubButton = document.querySelector('.sub');
getSubButton.addEventListener('click', start);

function start(){
	var start = start = new addPost();
}*/


function addPost() {
	console.log('asd');

	this.counter = 1;
	this.position = 0;
	this.post = 'The text of the post';
	this.createdBy = 'somebody';

	//document.location.href='reddit.html';

	this.getMain = document.querySelector('main');
	console.log(this.getMain);
	this.createSection = document.createElement('section');
	console.log(this.createSection);
	this.getMain.appendChild(this.createSection);

	this.createDivNumber = document.createElement('div');
	this.createDivNumber.className = 'number';
	this.createDivNumber.textContent = this.counter.toString();
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


	this.canVote = true;

	this.createUp.addEventListener('click', function(){
		if(this.canVote) {
			this.position++;
			this.createPositon.textContent = this.position.toString();
			this.createUp.style.backgroundImage = "url(upvoted.png)";
			this.canVote = false;
		}
	}.bind(this))

	this.createDown.addEventListener('click', function(){
		if(this.canVote) {
			this.position--;
			this.createPositon.textContent = this.position.toString();
			this.createDown.style.backgroundImage = "url(downvoted.png)";
			this.canVote = false;
		}
	}.bind(this))

}

var asd = new addPost();