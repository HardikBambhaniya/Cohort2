const inputBox = document.getElementById("todoBox");
const addTodo = document.getElementById("add");
const myTodo = document.getElementById("myTodo");
const remainingTodo = document.getElementById("remainingTodo");
const completedTodo = document.getElementById("completedTodo");
const mainUl = document.getElementById("mainUl");
const remainUl = document.getElementById("remainUl");
const completeUl = document.getElementById("completeUl");




function add() {
    let todos = inputBox.value ;
    if(todos.trim() === ''){
        alert("Enter your todo first");
    } else {
        let newTodo = document.createElement("li");
        let removeTodo = document.createElement("button");
        let updateTodo = document.createElement("button");
        removeTodo.innerText = "Remove Todo"
        updateTodo.innerText = "Update Todo"
        mainUl.appendChild(newTodo);
        mainUl.appendChild(removeTodo);
        mainUl.appendChild(updateTodo);
        newTodo.append(todos);
        inputBox.value = "";



        removeTodo.removeEventListener("click", add);
        removeTodo.addEventListener("click", function() {
            newTodo.remove(todos);
            mainUl.removeChild(removeTodo);
            mainUl.removeChild(updateTodo);

        })




        updateTodo.removeEventListener("click", add);
        updateTodo.addEventListener("click", function () {
            inputBox.value = todos;
            addTodo.innerText = "Add updatedTodo"
            inputBox.addEventListener("input", () => {
                if(inputBox.value.trim() !== ""){
                    addTodo.setAttribute("disabled");
                } else {
                    setTimeout(() => {
                    addTodo.setAttribute("disabled", "true");    
                    }, 1000);

                    setTimeout(() => {
                        addTodo.setAttribute("disabled");
                    }, 3000);
                }
            })

            

            
        })
    }
}

addTodo.addEventListener("click", add);