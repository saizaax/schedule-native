import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IGroup } from "../../types/IGroup"

interface IScheduleState {
  group: IGroup
}

const initialState: IScheduleState = {
  group: {} as IGroup
}

export const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    set(state: IScheduleState, action: PayloadAction<IGroup>) {
      state.group = action.payload
    }
  }
})

export const { set } = scheduleSlice.actions

export default scheduleSlice.reducer