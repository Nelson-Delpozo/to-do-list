"use strict";
let newTitle = document.querySelector('#inlineFormInputName2');
newTitle.focus();

let toDos = function () {
    if (window.localStorage.getItem("toDos") === null || window.localStorage.getItem("toDos") === '[]') {
        return [
            {
                title: "no to-dos",
                status: "no-delete"
            }
        ]
    } else {
        return JSON.parse(window.localStorage.getItem("toDos"));
    }
}();


// THESE TWO FUNCTIONS CREATE THE HTML FOR THE COLUMNS
function createHTML(toDo) {

    if (toDo.status === "no-delete") {
        return '<div class= "col-12 col-lg-8 d-flex justify-content-between mx-auto g-3 item"><div class="text"><h2 class="title">' + toDo.title + '</h2></div></div>'
    } else if (toDo.status === "done") {
        return '<div class= "col-12 col-lg-8 d-flex justify-content-between mx-auto g-3 item"><div class="text done"><h2 class="title">' + toDo.title + '</h2></div><button class="delete">delete</button></div>';
    } else {
        return '<div class= "col-12 col-lg-8 d-flex justify-content-between mx-auto g-3 item"><div class="text"><h2 class="title">' + toDo.title + '</h2></div><button class="delete">delete</button></div>';
    }
}


function createColumns(toDos) {
    let html = '';
    for (let i = 0; i < toDos.length; i++) {
        html += createHTML(toDos[i]);
    }
    return html;
}


function addToDo() {
    let newToDo = {};
    newToDo.title = newTitle.value;
    console.log(newToDo);
    toDos.push(newToDo);
    console.log(toDos);
    toDos = toDos.filter(toDo => toDo.title !== "no to-dos");
    window.localStorage.setItem('toDos', JSON.stringify(toDos));
    location.reload();

}

// CLEARS TO-DOs FROM LOCAL STORAGE
function clearAll() {
    window.localStorage.removeItem("toDos");
    location.reload();
}


// RENDERS THE CONTENT AREA
let contentArea = document.getElementById('to-do-row');
contentArea.innerHTML = createColumns(toDos);


// THIS CAPTURES ALL THE DELETE BUTTONS AS THEY RENDER
let readyToDelete = document.getElementsByClassName("delete");
// console.log(readyToDelete);
for (let i = 0; i < readyToDelete.length; i++) {
    readyToDelete[i].addEventListener('click', function (e) {
        e.target.closest('div.item').remove();
        let index = e.target.closest('div.item').children[0].children[0];
        // console.log(typeof (index.innerHTML.toLowerCase()));
        let itemTitle = index.innerHTML;
        deleteItem(itemTitle);
    })
}

// THIS IS FOR MARKING EACH ITEM DONE
let doneItems = document.getElementsByClassName("item");
for (let j = 0; j < doneItems.length; j++) {
    doneItems[j].addEventListener('click', function (e) {
        let doneItem = e.target.closest('div.item').children[0];
        // console.log(doneItem)
        doneItem.classList.toggle('done');
        for (let m = 0; m < toDos.length; m++) {
            if (doneItem.children[0].textContent === toDos[m].title) {
                toDos[m].status = "done";
            }
        }
        window.localStorage.setItem("toDos", JSON.stringify(toDos));
    })
}

// THIS DELETES AN ITEM
function deleteItem(item) {
    console.log(toDos);
    for (let i = 0; i < toDos.length; i++) {
        if (item === toDos[i].title) {
            console.log(i);
            toDos = toDos.filter(toDo => toDo.title !== item);
            toDos = toDos.filter(toDo => toDo.title !== "No To-Dos");
            console.log(toDos);
        }
    }
    window.localStorage.setItem("toDos", JSON.stringify(toDos));
    location.reload();


}


// END OF FUNCTIONS



