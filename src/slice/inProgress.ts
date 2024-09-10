import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IModel, ISliceState } from "../types"

const initialState: ISliceState = {
  tasks: [],
}

export const inProgressSlice = createSlice({
  name: "inProgress",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IModel>) => {
      state.tasks.push(action.payload)
    },
    update: (state, action: PayloadAction<IModel>) => {
      const idx = state.tasks.findIndex(el => el.id === action.payload.id)
      state.tasks.splice(idx, 1, action.payload)
    },
    remove: (state, action: PayloadAction<number>) => {
      const idx = state.tasks.findIndex(el => el.id === action.payload)
      state.tasks.splice(idx, 1)
    },
  },
})

export const { add, update, remove } = inProgressSlice.actions
export default inProgressSlice.reducer
