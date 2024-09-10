import { configureStore } from "@reduxjs/toolkit"
import inProgressReducer from "../../slice/inProgress"

export const store = configureStore({
  reducer: {
    inProgress: inProgressReducer,
  },
})

export type StoreDispatch = typeof store.dispatch
export type StoreState = ReturnType<typeof store.getState>
