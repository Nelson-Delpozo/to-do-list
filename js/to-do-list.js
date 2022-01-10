"use strict";

let toDos = function () {
    if (window.localStorage.getItem("toDos") === null) {
        return [
            {title: "No To-Dos"}
        ];
    } else {
        return JSON.parse(window.localStorage.getItem("toDos"));
    }
}();

// THESE TWO FUNCTIONS CREATE THE HTML FOR THE COLUMNS
function createHTML(toDo) {
    return '<div class= "col-12 col-lg-8 mx-auto g-3 item"><div><h2>' + toDo.title + '</h2></div></div>';
}

function createColumns(toDos) {
    let html = '';
    for (let i = 0; i < toDos.length; i++) {
        html += createHTML(toDos[i]);
    }
    return html;
}

// THIS IS TO ADD A TO-DO
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
    location.reload();
}


// GRABS NEW TO DO
let newTitle = document.querySelector('#inlineFormInputName2');

// RENDERS THE CONTENT AREA
let contentArea = document.getElementById('to-do-row');
contentArea.innerHTML = createColumns(toDos);


