import { CordsPair, DeviceData } from "./types"
import { Icon } from "leaflet"
import green_marker from "src/assets/green_marker.png"
import yellow_marker from "src/assets/yellow_marker.png"
import red_marker from "src/assets/red_marker.png"

const mockCords1 : CordsPair = {
  xCord: 60.038353, 
  yCord: 30.322507
}

const mockCords2 : CordsPair = {
  xCord: 60.038360, 
  yCord: 30.325256
}

export const markersData : DeviceData[] = [
  {
    id: 1,
    curCords: mockCords1,
    previousCords: [mockCords2, mockCords2],
    lastActivity: "19.10.2022 23:12:00",
    status: "Активно",
  },
  {
    id: 2,
    curCords: mockCords2,
    previousCords: [mockCords1, mockCords1, mockCords1],
    lastActivity: "19.10.2022 18:12:00",
    status: "Неактивно",
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