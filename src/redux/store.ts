import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"

import settings from "./settings/slice"
import schedule from "./schedule/slice"

export const store = configureStore({
  reducer: {
    settings,
    schedule
  }
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
