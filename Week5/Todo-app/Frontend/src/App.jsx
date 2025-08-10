import { useState } from 'react'
import './App.css'
import { CreateTodo } from './Components/CreateTodo'
import { Todos } from './Components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
       <CreateTodo/>
       <Todos todos={[
        {
          title: "go to gym",
          description: "go to gym from 9 to 10",
          completed: "true"
        },
        {
          title: "learn web dev",
          description: "learn web dev from 10 to 11",
          completed: "false"
        }
       ]}/>
    </div>
  )
}

export default App
