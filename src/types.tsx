type CordsPair = {
    xCord: number
    yCord: number
}

type DeviceData = {
    id: number,
    curCords: CordsPair
    previousCords: CordsPair[]
    lastActivity: string
    status: string
}

export type {DeviceData, CordsPair}