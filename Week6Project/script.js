const input = document.getElementById('itemInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const clearBtn = document.getElementById('clearBtn');
const counter = document.getElementById('counter');

function updateCounter() {
	const items = document.querySelectorAll("#list li");
	const itemCount = items.length;
    counter.textContent = itemCount === 1 ? "1 item" : `${itemCount} items`;
}

addBtn.addEventListener('click', () => {
	const text = input.value.trim();
	
	if (text === '') return;
	
	const li = document.createElement('li');
    li.textContent = text;
	
	li.addEventListener('click', () => {
		li.classList.toggle('done');
	});
	
	const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✖';
	deleteBtn.className = 'deleteBtn';
	
	deleteBtn.addEventListener('click', (e) => {
		e.stopPropagation(); 
		li.remove(); 
		updateCounter();
	});
	
	li.appendChild(deleteBtn);
    
	list.appendChild(li);
	
	input.value = '';
    
	updateCounter();
});

input.addEventListener('keypress', (e) => {
	if (e.key === 'Enter') {
		addBtn.click();
	}
});

clearBtn.addEventListener('click', () => {
	list.innerHTML = '';
	updateCounter();
});

updateCounter();