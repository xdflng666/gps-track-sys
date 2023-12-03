import { CordsPair, DeviceData, User, UserTableItem, deviceTableItem } from "src/types"
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

export const enum Page {
  userData = 0,
  deviceData = 1,
  createUser = 2,
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
    role: Role.User,
    name: "user",
    phone: 123456,
    email : "mail@mail.com"
  },
  {
    login: "admin",
    password: "admin",
    role: Role.Admin,
    name: "Denis",
    phone: 123456,
    email : "mail@mail.com"
  }
] 

export const userTableData: UserTableItem[] = [
  {
    name: "Денис",
    login: "admin",
    gmail: "admin@gmail.com",
    phoneNumber: "123456",
    role: "Админ",
  },
  {
    name: "Даня",
    login: "user",
    gmail: "user@gmail.com",
    phoneNumber: "654321",
    role: "Неадмин",
  },
]

export const deviceTableData: deviceTableItem[] = [
  {
    id: "1",
    curCords: "1.0000000, 1.0000000",
    prevCords: "2.0000000, 2.0000000",
    status: "Активен"
  },
  {
    id: "2",
    curCords: "3.0000000, 3.0000000",
    prevCords: "4.0000000, 4.0000000",
    status: "Неактивен"
  },
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