import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IModel, ISliceState } from "../../types"

const initTasks = [
  { id: 1, text: "Feed the cat" },
  { id: 2, text: "Water the plants" },
  { id: 3, text: "Wash the dishes" },
] as IModel[]

const initialState: ISliceState = {
  tasks: initTasks,
  count: initTasks.length,
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IModel>) => {
      state.tasks.push(action.payload)
      state.count += 1
    },
    remove: (state, action: PayloadAction<number>) => {
      const idx = state.tasks.findIndex(el => el.id === action.payload)
      state.tasks.splice(idx, 1)
      state.count -= 1
    },
  },
})

export const { add, remove } = todoSlice.actions
export default todoSlice.reducer
