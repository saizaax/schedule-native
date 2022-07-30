import { RootState } from "../store"

export const selectSettings = (state: RootState) => state.settings

export const selectDay = (state: RootState) => selectSettings(state).day

export const selectWeek = (state: RootState) => selectSettings(state).week

export const selectDate = (state: RootState) => selectSettings(state).date

export const selectAmount = (state: RootState) => selectSettings(state).amount

export const selectGroup = (state: RootState) => selectSettings(state).group