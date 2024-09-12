import { configureStore } from "@reduxjs/toolkit"
import sliceReducer from "./slices/todo"

export const store = configureStore({
  reducer: {
    todo: sliceReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
