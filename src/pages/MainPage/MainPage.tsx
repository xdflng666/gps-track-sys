import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"
import "leaflet-defaulticon-compatibility"
import { green_icon, markersData } from "src/data"
import { CordsPair, DeviceData } from "src/types"
import {
  MainPageContainer,
  MainPageLogo,
  LogoText,
  MarkerInfoDiv,
  PurpleLogoText,
} from "src/pages/MainPage/MainPage.styled"
import logo from "src/assets/logo.png"

const MainPage = () => {
  const showMore = (id: number) => {
    const curField = document.getElementById(id + "")
    const curButton = document.getElementById("button" + id)
    if (curField?.style.display == "none") {
      curField.style.display = "inline"
      curButton!.innerHTML = "-"
    } else if (curField?.style.display == "inline") {
      curField.style.display = "none"
      curButton!.innerHTML = "+"
    }
  }

  return (
    <MainPageContainer>
      <MarkerInfoDiv>
        <MainPageLogo src={logo} />
        <LogoText>
          GPS <PurpleLogoText>Tracking </PurpleLogoText> 
          System
        </LogoText>
      </MarkerInfoDiv>
      <MapContainer
        style={{ height: "100vh", width: "100%", overflow: "hidden" }}
        center={[60.038353, 30.322507]}
        minZoom={3}
        zoom={12}
        maxZoom={18}
        worldCopyJump
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {markersData.map((marker: DeviceData) => (
          <Marker
            position={[marker.curCords.xCord, marker.curCords.yCord]}
            key={marker.id}
            icon={green_icon}
          >
            <Popup>
              <div>id: {marker.id}</div>
              <div>
                текущие координаты: {marker.curCords.xCord},{" "}
                {marker.curCords.yCord}
              </div>
              <div>
                предыдущие координаты{" "}
                <button
                  id={"button" + marker.id}
                  onClick={() => showMore(marker.id)}
                >
                  {" "}
                  +{" "}
                </button>{" "}
                <br />
                <li>
                  {" "}
                  {marker.previousCords[0].xCord},{" "}
                  {marker.previousCords[0].yCord}{" "}
                </li>
                <span id={marker.id + ""} style={{ display: "none" }}>
                  {marker.previousCords
                    .slice(1, marker.previousCords.length)
                    .map((cordsPair: CordsPair) => {
                      return (
                        <li key={cordsPair.xCord}>
                          {cordsPair.xCord}, {cordsPair.yCord}
                        </li>
                      )
                    })}
                </span>
              </div>
              <div>последнее обновление: {marker.lastActivity}</div>
              <div>статус: {marker.status}</div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </MainPageContainer>
  )
}

export default MainPage
