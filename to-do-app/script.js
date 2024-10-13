let box = document.querySelector(".task-box")
function addtask(){
    let task = document.getElementsByClassName("text")[0].value;

    box.innerHTML = box.innerHTML + `
    <div class="box4">
        <p>${task}</p>
        <div class="box4-1">
            <button class="delete" onclick="deleteTask(this)">Delete</button>
            <button class="edit" onclick="editTask(this)">Edit</button>
        </div>
    </div>
    `
    console.log(box);
}

function deleteTask(element){
    element.parentElement.parentElement.remove();
}

function editTask(element){
    let task = element.parentElement.previousElementSibling
    task.innerHTML =`
    <div class="box6">
        <input type="text" class="text text-2" id="text" placeholder="Add some task.">
        <button class="add add-2" onclick="edited(this)">Done</button>
    </div>
    `    

    console.log(task)
}

function edited(element){
    let newTask = element.previousElementSibling.value;

    element.parentElement.innerHTML =`<p>${newTask}</p>`
    console.log(newTask)

}

function swap(element){
    console.log(element.src)
    if(element.src.includes("/images/undone.svg")){
        element.src ="./images/done.svg";
        element.nextElementSibling.style = "text-decoration:line-through";
    }
    else{
        element.src ="./images/undone.svg";
        element.nextElementSibling.style = "text-decoration:none";
    }
    // element.src ="./images/done.svg"
    
}