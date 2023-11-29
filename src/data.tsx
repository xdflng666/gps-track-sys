import { CordsPair, DeviceData, User } from "./types"
import { Icon } from "leaflet"
import green_marker from "src/assets/green_marker.png"
import yellow_marker from "src/assets/yellow_marker.png"
import red_marker from "src/assets/red_marker.png"

export const enum Status {
  Active = 0,
  Inactive = 1,
}

export const enum Role {
  Admin = 0,
  User = 1,
  LoggedOut = -1,
  HasErrors = -2,
  Unloaded = -3,
}

const mockCords1 : CordsPair = {
  xCord: 60.038353, 
  yCord: 30.322507
}

const mockCords2 : CordsPair = {
  xCord: 60.038360, 
  yCord: 30.325256
}

const mockCords3 : CordsPair = {
  xCord: 60.038760, 
  yCord: 30.325756
}

const mockCords4 : CordsPair = {
  xCord: 60.038960, 
  yCord: 30.325956
}

const mockCords5 : CordsPair = {
  xCord: 60.033360, 
  yCord: 32.325956
}

export const markersData : DeviceData[] = [
  {
    id: 1,
    curCords: mockCords1,
    previousCords: [mockCords2],
    previousCordsStatus: [Status.Active],
    lastActivity: "19.10.2022 23:12:00",
    status: "Активно",
  },
  {
    id: 1,
    curCords: mockCords3,
    previousCords: [mockCords4, mockCords5],
    previousCordsStatus: [Status.Active, Status.Active],
    lastActivity: "19.10.2022 23:12:00",
    status: "Активно",
  },
]

export const users : User[] = [
  {
    login: "user",
    password: "user",
    role: Role.User
  },
  {
    login: "admin",
    password: "admin",
    role: Role.Admin
  }
] 

export const green_icon = new Icon({
  iconUrl: green_marker,
  iconSize: [50,50]
})

export const yellow_icon = new Icon({
  iconUrl: yellow_marker,
  iconSize: [50,50]
})

export const red_icon = new Icon({
  iconUrl: red_marker,
  iconSize: [50,50]
})