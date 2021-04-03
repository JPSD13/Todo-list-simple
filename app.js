let addTodoButton = document.getElementById('addTodo');
let Todocontainer = document.getElementById('Todocontainer');
let inputField = document.getElementById('inputField');

addTodoButton.addEventListener('click', function() {
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    Todocontainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function() {
        Todocontainer.removeChild(paragraph);
    })
})
