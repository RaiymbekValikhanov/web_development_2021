let myStorage = localStorage;
let button = document.getElementById('btn');
let list = document.getElementsByClassName('task_list');
let template = document.getElementById('task_temp');
let notask = list[0].nextElementSibling;

for (let i = 0; i < myStorage.length; i++) {
    let k = myStorage.key(i);
    addTask(k, myStorage.getItem(k));
}

function addTask(text, check) {
    let name = template.content.querySelector('#name');
    let item = template.content.querySelector('.box-in')
    name.textContent = text;
    check = check == 'true';
    if (check) {
        name.style.textDecoration = "line-through";
        name.style.textDecorationThickness = "2px";
    } else {
        name.style.textDecoration = "none";
    }
    item.checked = check;
    let clone = document.importNode(template.content, true);
    list[0].appendChild(clone);
}

button.onclick = function () {
    let input = document.querySelector('.new_task input');
    let text = input.value;
    if (text.length == 0) {
        alert('Write new task...');
        return;
    }
    if (myStorage.getItem(text) != null) {
        alert('This task is already in list...');
    } else {
        addTask(text);
        myStorage.setItem(text, false);
    }
    input.value = '';
}


list[0].addEventListener('click', function (e) {
    let item = e.target;
    if (item.className == 'del-btn') {
        let par = item.parentElement;
        let name = par.querySelector('#name').textContent;
        myStorage.removeItem(name);
        par.remove();
        return;
    }
    if (item.className == 'box-in') {
        let next = item.nextSibling.nextSibling;
        if (item.checked) {
            next.style.textDecoration = "line-through";
            next.style.textDecorationThickness = "2px";
        } else {
            next.style.textDecoration = "none";
        }
        myStorage.setItem(next.textContent, item.checked);
    }
});


setInterval(function() {
    if (myStorage.length == 0) {
        notask.style.visibility = 'visible';
    } else {
        notask.style.visibility = 'hidden';
    }
}, 20);
