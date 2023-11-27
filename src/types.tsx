import { Status } from "./data"

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

export type {DeviceData, CordsPair}