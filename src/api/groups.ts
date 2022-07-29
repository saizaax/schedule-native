import { API } from "./api"
import pickBy from "lodash.pickby"
import identity from "lodash.identity"

import { IParams } from "../types/IParams"
import { IGroup } from "../types/IGroup"

export const getGroups = async (params: IParams) => {
  const { data } = await API.get<IGroup[]>("/groups", {
    params: pickBy(params, identity)
  })
  const [group] = data

  return group
}
