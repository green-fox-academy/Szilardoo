

postToServer();


function postToServer(){
	var url = 'http://localhost:3000/posts';
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

			xhrSend.onreadystatechange = function(){
			if (xhrSend.readyState === XMLHttpRequest.DONE) {
				document.location.href = 'reddit.html';
			}
			}

		})
	}
}