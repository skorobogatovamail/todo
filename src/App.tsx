import { Container, Typography } from "@mui/material"
import { useAppDispatch, useAppSelector } from "./redux/hooks"
import { add, remove } from "./redux/slices/todo"
import { useState, FormEvent } from "react"
import { IModel } from "./types"
import TodoItem from "./components/ToDo"

const App = () => {
  const count = useAppSelector(state => state.todo.count)
  const tasks = useAppSelector(state => state.todo.tasks)
  const dispatch = useAppDispatch()

  const [input, setInput] = useState("")

  const handleAddTodo = (e: FormEvent) => {
    e.preventDefault()
    console.log({ id: count + 1, text: input })
    dispatch(add({ id: count + 1, text: input }))
  }

  const handleRemove = (id: IModel["id"]) => {
    dispatch(remove(id))
  }

  return (
    <Container>
      <Typography variant="h3" textAlign={"center"} mt={3} mb={5}>
        To Do App with Redux
      </Typography>
      <div>
        <form onSubmit={handleAddTodo}>
          <input
            type="text"
            placeholder="Add a todo"
            onInput={(e: React.FormEvent<HTMLInputElement>) => {
              setInput(e.currentTarget.value)
            }}
          />
          <button type="submit">+</button>
        </form>
        <div className="todos">
          {tasks.map(el => (
            <TodoItem
              key={el.id}
              text={el.text}
              id={el.id}
              handleRemove={handleRemove}
            />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default App
