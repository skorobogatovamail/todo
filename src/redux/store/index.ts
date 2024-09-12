import { configureStore } from "@reduxjs/toolkit"
import sliceReducer from "../../slice/slice"

export const store = configureStore({
  reducer: {
    todo: sliceReducer,
  },
})

export type StoreDispatch = typeof store.dispatch
export type StoreState = ReturnType<typeof store.getState>
