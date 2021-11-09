/** @format */

import { FC, FormEvent, useState } from 'react'
import './NewTodo.css'

interface INewTodoProp {
  addTodo: (text: string) => void
}
const NewTodo: FC<INewTodoProp> = ({ addTodo }) => {
  const [todo, setTodo] = useState<string>('')

  const handleChange = (e: any) => {
    const { value } = e.target
    setTodo(value)
  }
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    addTodo(todo)
    setTodo('')
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="todo-text">Enter task</label>
          <input
            type="text"
            id="todo-text"
            value={todo}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </>
  )
}
export default NewTodo
