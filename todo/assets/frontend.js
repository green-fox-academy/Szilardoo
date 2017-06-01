class main{
	constructor(){
		this.communication = new serverCommunication;

		this.getUrl = 'http://localhost:3000/todos';
		this.communication.getData(this.getUrl, this.drawTodos.bind(this), this.deleteTodo.bind(this), this.setItemCompleted.bind(this));
		this.addItem();
	}


	drawTodos(data, cbDelete, completed){
		const getMainContainer = document.querySelector('.things-to-do');
		
		getMainContainer.innerHTML = '';

		for (let i = 0; i < data.length; i++){
			const elementDiv = document.createElement('div');
			const deleteButton = document.createElement('button');
			const propertiesDiv = document.createElement('div');
			elementDiv.className = 'todo-item';
			propertiesDiv.className = "properties";
			deleteButton.className = "delete";
			deleteButton.textContent = 'X';
			const checkBox = document.createElement('input');
			checkBox.className = "done";
			checkBox.type = "checkbox";

			if(data[i].completed === 'true'){
				elementDiv.style.color = '#cecece';
				checkBox.checked = true;
				checkBox.disabled = true;
			}
			
			elementDiv.textContent = data[i].text;
			getMainContainer.appendChild(elementDiv);
			propertiesDiv.appendChild(deleteButton);
			propertiesDiv.appendChild(checkBox);
			elementDiv.appendChild(propertiesDiv);


			deleteButton.addEventListener('click', function(){
				cbDelete(data[i].id);
			})

			checkBox.addEventListener('change', function(){
				completed(data[i].id);
			});
		}
	}

	setItemCompleted(id){
		const doneUrl = this.getUrl + '/' + id;

		this.communication.putData(this.getUrl ,doneUrl, this.drawTodos, this.communication.getData, this.deleteTodo.bind(this), this.setItemCompleted.bind(this));
	}

	addItem(){
		const addButton = document.querySelector('.add'); 

		addButton.addEventListener('click', function(){
			const addInput = document.querySelector('.add-text');
			const value = addInput.value;
			this.communication.postData(this.getUrl, this.drawTodos, value, this.communication.getData, this.deleteTodo.bind(this), this.setItemCompleted.bind(this));
		}.bind(this))
	}

	deleteTodo(id){
		const deleteUrl = this.getUrl + '/' + id;

		this.communication.deleteData(this.getUrl ,deleteUrl, this.drawTodos, this.communication.getData, this.deleteTodo.bind(this), this.setItemCompleted.bind(this));
	}

}

var start = new main;