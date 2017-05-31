class main{
	constructor(){
		var communication = new serverCommunication;

		var getUrl = 'http://localhost:3000/todos';
		communication.getData(getUrl, this.drawTodos);
	}

	drawTodos(data){
		for (let i = 0; i < data.length; i++){
			let getMainContainer = document.querySelector('.things-to-do');
			let elementDiv = document.createElement('div');
			let deleteButton = document.createElement('button');
			let propertiesDiv = document.createElement('div');
			elementDiv.className = 'todo-item';
			propertiesDiv.className = "properties";
			deleteButton.className = "delete";
			deleteButton.textContent = 'X';
			let checkBox = document.createElement('input');
			checkBox.className = "done";
			checkBox.type = "checkbox";
			
			elementDiv.textContent = data[i].text;
			getMainContainer.appendChild(elementDiv);
			propertiesDiv.appendChild(deleteButton);
			propertiesDiv.appendChild(checkBox);
			elementDiv.appendChild(propertiesDiv);
		}
	}

}

var start = new main;