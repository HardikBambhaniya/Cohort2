import { useState } from 'react'
import './App.css'


// function App() {
// const [count, setCount] = useState(0);  //useState hooks that helps to define state and that state is read by react.  State means a data that can change 

// function CustomButton(props){ //props - exactly like an argument for function but specifically for react.  it is a parent properties that passes to a child components or function. EX - props pass in function onclickhandler
  

//   function onClickHandler() {
//     props.setCount(count + 1);
//   }

//   return <button onClick={onClickHandler}>
//     counter {props.count}
//   </button>
// }

//   return (
//     <>
//       <CustomButton count = {count} setCount = {setCount}></CustomButton>
//     </>
//   )
// }






//Todo app

function App() {

const [todos, setTodos] = useState([]);


function addTodo() {

  // setTodos([...todos, { //....- spread operator spread each elemnts from array and also add another element inside arr
  let newTodos = [];
  for(let i = 0; i < todos.length; i++){
    newTodos.push(todos[i]);
  }
  newTodos.push({
    title: "asda",
    description: "afaf"
  })

setTodos(newTodos)
  }



  return (
    <div>

      <button onClick={addTodo}>Add random todo</button> 
      {todos.map(todo => {
        return<Todo key={todo.id} title = {todo.title} description = {todo.description}> </Todo>
      })}
      <NewTodos todos={todos}/>
      <DarkNewTodos todos={todos}/>
    </div>
  )
}


function DarkNewTodos(props) {}

function Todo(props) {
  return <div>
    <h1>{props.id}</h1>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
