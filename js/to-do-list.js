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


let list = document.getElementById('to-do-row');
list.innerHTML = '<div class= "col-lg-6 mx-auto item">' + toDos[0].title + '</div>'