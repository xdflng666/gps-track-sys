import { Role, Status } from "./data"

type CordsPair = {
    xCord: number
    yCord: number
}

type DeviceData = {
    id: number,
    curCords: CordsPair
    previousCords: CordsPair[]
    previousCordsStatus: Status[]
    lastActivity: string
    status: string
}

type User = {
  login: string,
  password: string,
  role: Role
}

type LoginAndPassword = {
  login: string,
  password: string,
}

export type {DeviceData, CordsPair, User, LoginAndPassword}