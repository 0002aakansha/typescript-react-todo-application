import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todo from "./components/Todo";

interface todo {
  id: string,
  title: string
}

export default function App() {

  const [todos, setTodo] = useState<todo[]>([])

  function getFormData(title: string) {
    setTodo(prevTodos => [...prevTodos, { id: Math.random().toString(), title }])
  }

  function deleteHandler(id: string) {
    setTodo(prevTodos => prevTodos.filter(prevTodo => prevTodo.id !== id))
  }

  return (
    <>
      <NewTodo onAdd={getFormData} />
      <Todo items={todos} onDelete={deleteHandler}></Todo>
    </>
  )
}

