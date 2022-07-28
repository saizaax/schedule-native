import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ISettingsState {
  group: string
  day: string
  week: number
  date: string
  amount: number
}

const initialState: ISettingsState = {
  group: "",
  day: "ПН",
  week: 18,
  date: "",
  amount: 0
}

const settingSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setGroup(state: ISettingsState, action: PayloadAction<string>) {
      state.group = action.payload
    },
    setDay(state: ISettingsState, action: PayloadAction<string>) {
      state.day = action.payload
    },
    setWeek(state: ISettingsState, action: PayloadAction<number>) {
      state.week = action.payload
    },
    setDate(state: ISettingsState, action: PayloadAction<string>) {
      state.date = action.payload
    },
    setAmount(state: ISettingsState, action: PayloadAction<number>) {
      state.amount = action.payload
    }
  }
})

export const { setGroup, setWeek, setDay, setDate, setAmount } =
  settingSlice.actions

export default settingSlice.reducer
