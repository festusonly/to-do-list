// creating the constant variables using const

const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("List-cantainer")

// Restore data when the page loads
document.addEventListener("DOMContentLoaded", function () {
    showTasks();
});

// creating/ calling the function addTasks

function addTask(){
    // write alert message if the box is empty

    if(inputBox.value === ""){
        alert("you must write something");
    
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        //cross in list 
        let span  = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    // clearing the inputbox
    inputBox.value ='';
    saveData();
}
// for deleting, checking the tasks 
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("done");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
// saving the data
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTasks(){
    listContainer.innerHTML = localStorage.getItem("data");
}