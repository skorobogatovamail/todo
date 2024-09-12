import { IModel } from "../types"

type TodoItemProps = {
  text: IModel["text"]
  id: IModel["id"]
  handleRemove: (id: number) => void
}

export default function TodoItem({ text, id, handleRemove }: TodoItemProps) {
  const deleteItem = () => {
    handleRemove(id)
  }
  return (
    <div className="todo" onClick={deleteItem}>
      {text}
    </div>
  )
}
