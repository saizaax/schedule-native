import { RootState } from "../store"

export const selectGroup = (state: RootState) => state.schedule.group

export const selectSchedule = (state: RootState) =>
  state.schedule.group.schedule
