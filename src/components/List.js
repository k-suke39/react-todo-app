import React from 'react'

const List = ({todos ,deleteTodo}) =>{
const complete = (id) => {
  deleteTodo(id)
}
  return (
    <div>
      { todos.map( todo => {
        return (
          <div key={todo.id}>
            <button onClick={() => complete(todo.id)}>完了</button>
            <button>{todo.id}</button>
            <button>{todo.content}</button>
          </div>
        )
      })}
    </div>
  )
}

export default List;