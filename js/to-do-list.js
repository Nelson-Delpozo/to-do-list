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


function addToDo() {
    let newToDo = {};
    newToDo.title = newTitle.value;
    toDos.push(newToDo);
    window.localStorage.setItem('toDos', JSON.stringify(toDos));
    location.reload();
}


let newTitle = document.querySelector('#inlineFormInputName2');


