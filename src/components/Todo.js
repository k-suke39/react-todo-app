import { useState } from 'react';

import List from "./List"
import Form from "./Form"

const Todo = () =>{
  const todoList = [
    {  id: 1, 
       content: "店を予約する"
    },
    {  id: 2, 
        content: "筋トレ"
    },
    {  id: 3, 
        content: "プログラミング"
    },
  ]
  const [ todos, setTodos ] = useState(todoList)
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    })
    setTodos(newTodos);
  }

  const createTodo = (todo) => {
    setTodos([...todos, todo])
  }
  return (
    <div>
      <List todos={todos} deleteTodo={deleteTodo}/>
      <Form createTodo={createTodo}/>
    </div>
  )
}


export default Todo;