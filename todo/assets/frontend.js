'use strict';

class main{
	constructor(){
		this.communication = new serverCommunication;
		this.addItem();
		this.getDataAndDrawElements()
	}

	getDataAndDrawElements(){
		this.getUrl = 'http://localhost:3000/todos';
		this.communication.ajax(this.getUrl, 'GET',this.drawTodos.bind(this));
	}

	drawTodos(data){
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
				this.deleteElement(data[i].id);
			}.bind(this))

			checkBox.addEventListener('change', function(){
				this.setElementCompleted(data[i].id);
			}.bind(this));
		}
	}



	addItem(){
		const addButton = document.querySelector('.add'); 

		addButton.addEventListener('click', function(){
			const addInput = document.querySelector('.add-text');
			const value = addInput.value;
			const postData = {
				"text": value
			}
			this.communication.ajax(this.getUrl, 'POST',this.getDataAndDrawElements.bind(this), postData);
		}.bind(this))
	}

	setElementCompleted(id){
		const doneUrl = this.getUrl + '/' + id;
		this.communication.ajax(doneUrl, 'PUT',this.getDataAndDrawElements.bind(this));
	}

	deleteElement(id){
		const deleteUrl = this.getUrl + '/' + id;

		this.communication.ajax(deleteUrl, 'DELETE',this.getDataAndDrawElements.bind(this));
	}

}

var start = new main;