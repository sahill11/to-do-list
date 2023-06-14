let input_task = document.getElementById("input-data")
let add_task = document.querySelector(".add-task")
let list_cont = document.querySelector(".list_cont")
let list_items = document.querySelector(".lists")

add_task.addEventListener("click",()=>{
    if(input_task.value === ''){
        alert("Write Something!")
        return
    }

    else{
        let li = document.createElement("li")
        li.innerHTML = input_task.value
        list_cont.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        // let span = 
        // list_cont.innerHTML += `<li class="lists"><i class="fa-sharp fa-regular fa-circle-check"></i> ${input_task.value} <span>\u00d7</span> </li>`;
     
    }
    input_task.value = '';
    saveData();
})

list_cont.addEventListener("click",(e)=>{

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();
    }

    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("data", list_cont.innerHTML);
}

function showData(){
    list_cont.innerHTML = localStorage.getItem("data")
}

showData();

function removeAll(){
    localStorage.clear();
    list_cont.innerHTML = '';
}