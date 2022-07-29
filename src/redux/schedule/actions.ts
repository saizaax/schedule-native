import { createAsyncThunk } from "@reduxjs/toolkit"
import { getGroups } from "../../api/groups"
import { IGroup } from "../../types/IGroup"
import { IParams } from "../../types/IParams"

export const fetchGroups = createAsyncThunk<IGroup, IParams>(
  "groups/fetchGroups",
  async (params) => await getGroups(params)
)
