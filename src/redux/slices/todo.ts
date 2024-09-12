import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IModel, ISliceState } from "../../types"

const initialState: ISliceState = {
  tasks: [],
  count: 0,
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IModel>) => {
      state.tasks.push(action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      const idx = state.tasks.findIndex(el => el.id === action.payload)
      state.tasks.splice(idx, 1)
    },
  },
})

export const { add, remove } = todoSlice.actions
export default todoSlice.reducer
