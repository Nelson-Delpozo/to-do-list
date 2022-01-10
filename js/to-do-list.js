"use strict";

let toDos = function () {
    if (window.localStorage.getItem("toDos") === null) {
        return [
            {title: "No To-Dos"}
        ]
    } else {
        return JSON.parse(window.localStorage.getItem("toDos"));
    }
}();

// THESE TWO FUNCTIONS CREATE THE HTML FOR THE COLUMNS
function createHTML(toDo) {
    return '<div class= "col-12 col-lg-8 d-flex justify-content-between mx-auto g-3 item"><div><h2 class="title">' + toDo.title + '</h2></div><button class="delete">delete</button></div>';
}


function createColumns(toDos) {
    let html = '';
    for (let i = 0; i < toDos.length; i++) {
        html += createHTML(toDos[i]);
    }
    return html;
}

// THIS IS TO ADD A TO-DO
let newTitle = document.querySelector('#inlineFormInputName2');

function addToDo() {
    let newToDo = {};
    newToDo.title = newTitle.value;
    console.log(newToDo);
    toDos.push(newToDo);
    console.log(toDos);
    window.localStorage.setItem('toDos', JSON.stringify(toDos));
    location.reload();
}

// CLEARS TO-DOs FROM LOCAL STORAGE
function clearAll() {
    window.localStorage.removeItem('toDos');
    contentArea.innerHTML = createColumns(toDos);
}

function markDone() {
    let done = document.getElementsByClassName('item');
}


// RENDERS THE CONTENT AREA
let contentArea = document.getElementById('to-do-row');
contentArea.innerHTML = createColumns(toDos);


// THIS CAPTURES ALL THE DELETE BUTTONS AS THEY RENDER
let readyToDelete = document.getElementsByClassName("delete");
console.log(readyToDelete);
for (let i = 0; i < readyToDelete.length; i++) {
    readyToDelete[i].addEventListener('click', function (e) {
        e.target.closest('div.item').remove();
        let index = e.target.closest('div.item').children[0].children[0];
        // console.log(typeof (index.innerHTML.toLowerCase()));
        let itemTitle = index.innerHTML.toLowerCase();
        deleteItem(itemTitle);
    })
}

// THIS DELETES AN ITEM
function deleteItem(item) {
    console.log(toDos);
    for (let i = 0; i < toDos.length; i++) {
        if (item === toDos[i].title) {
            console.log(i);
            toDos = toDos.filter(toDo => toDo.title !== item);
            console.log(toDos);
        }
    }
}

// END OF FUNCTIONS
