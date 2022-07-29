import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IGroup } from "../../types/IGroup"
import { fetchGroups } from "./actions"

interface IScheduleState {
  group: IGroup
  status: Status.ERROR | Status.LOADING | Status.SUCCESS
}

enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error"
}

const initialState: IScheduleState = {
  group: {} as IGroup,
  status: Status.LOADING
}

export const scheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    set(state: IScheduleState, action: PayloadAction<IGroup>) {
      state.group = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGroups.pending, (state) => {
      state.group = {} as IGroup
      state.status = Status.LOADING
    })

    builder.addCase(fetchGroups.fulfilled, (state, action) => {
      state.group = action.payload
      state.status = Status.SUCCESS
    })

    builder.addCase(fetchGroups.rejected, (state) => {
      state.group = {} as IGroup
      state.status = Status.ERROR
    })
  }
})

export const { set } = scheduleSlice.actions

export default scheduleSlice.reducer
