import { useRef } from "react"
import { useState } from "react"

const TodoList = () => {

    const [todos, setTodos] = useState([])

    const inputRef = useRef();

    const handleNewTodo = () =>{
      console.log('cargando..')
      console.log(inputRef.current.value)
    }
  return (
    <section>
      {/* Creacion de tareas */}
      <fieldset>
        <label>nueva tarea</label>
        <input type="text" ref={inputRef}/>
        <button onClick={handleNewTodo}>cargar</button>
      </fieldset>
      {/* Listado de tareas */}
      <ul>
        {
          todos.map((todo, index)=>{
            return <li key={index}>{todo}</li>
          })
        }
      </ul>
    </section>
  )
}
export default TodoList