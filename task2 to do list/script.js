const inputBox = document.getElementById("input_box");
const listContainer = document.getElementById("list_container");
//for adding the data in a list
function aaddTask(){
    if( inputBox.value === ""){
        alert("You must write something1 ")
    }
    else{
        let li =document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    //for empty the inputBox 
    inputBox.value = "";
    //for saving the new data in a list we call the saveData function
    saveData();
}

listContainer.addEventListener("click" , function(e){
    //for checked the data of a list
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    //for removing the data form the list
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
} , false);
//saving the data in localStorage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
// for showing the data on screen form localStorage
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
//calling the function to showthe data on screen
showTask();