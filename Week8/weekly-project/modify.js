modify();

function modify(){

	var getUrl = document.location.href;

	var getIdList = getUrl.split('#');

	console.log(getIdList[1]);


	var url = 'https://time-radish.glitch.me/posts/'+getIdList[1];
	var xhrSend = new XMLHttpRequest();

	xhrSend.open('PUT', url, true);

	xhrSend.setRequestHeader('Accept', 'application/json')
	xhrSend.setRequestHeader('Content-Type', 'application/json')
	
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


		xhrSend.onreadystatechange = function(){
		if (xhrSend.readyState === XMLHttpRequest.DONE) {
			document.location.href = 'reddit.html';
		}
		}

	})

}