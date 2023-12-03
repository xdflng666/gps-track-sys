import {
  SidebarContainer,
  SidebarDivider,
  SidebarLogo,
  SidebarLogoText,
  SidebarNavigation,
  SidebarNavigationDestinationContainer,
  SidebarNavigationIcon,
  SidebarNavigationLi,
  SidebarNavigationList,
  SidebarNavigationText,
  SidebarPurpleLogoText,
  UserDataContainer,
  UserDataIcon,
  UserDataName,
  UserDataRole,
  UserDataTextWrapper,
} from "src/components/Sidebar/Sidebar.styled"
import logo from "src/assets/logo.png"
import users from "src/assets/users.svg"
import devices from "src/assets/devices.svg"
import addUser from "src/assets/addUser.svg"
import userDataIcon from "src/assets/userDataIcon.png"
import logoutIcon from "src/assets/logout.svg"
import { useAppSelector } from "src/hooks"
import { User } from "src/types"
import { Page, Role } from "src/data"
import { useNavigate } from "react-router-dom"
import { logOut } from "src/slices/userSlice"
import { useDispatch } from "react-redux"
import { AppDispatch } from "src/store"

const Sidebar = ({ curPage }: { curPage: number }) => {
  const user: User = useAppSelector((state) => state.user.userData)
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const roleToString = (userRole: Role) => {
    if (userRole == Role.Admin) {
      return "Администратор"
    } else {
      return "Пользователь"
    }
  }

  const logOutFunction = () => {
    dispatch(logOut())
    setTimeout(function (){
      navigate("/login")
    }, 200)
  }

  let userData = false
  let deviceData = false
  let createNewUser = false

  if (curPage == Page.userData) userData = true
  else if (curPage == Page.deviceData) deviceData = true
  else if (curPage == Page.createUser) createNewUser = true

  return (
    <SidebarContainer>
      <SidebarLogo src={logo} />
      <SidebarLogoText>
        GPS <SidebarPurpleLogoText>Tracking </SidebarPurpleLogoText>
        System
      </SidebarLogoText>
      <SidebarDivider />
      <SidebarNavigation>
        <SidebarNavigationList>
          <SidebarNavigationLi>
            <SidebarNavigationDestinationContainer
              $isActive={userData}
              onClick={() => navigate("/admin/users")}
            >
              <SidebarNavigationIcon src={users} />
              <SidebarNavigationText>Пользователи</SidebarNavigationText>
            </SidebarNavigationDestinationContainer>
          </SidebarNavigationLi>
          <SidebarNavigationLi>
            <SidebarNavigationDestinationContainer
              $isActive={deviceData}
              onClick={() => navigate("/admin/devices")}
            >
              <SidebarNavigationIcon src={devices} />
              <SidebarNavigationText>Устройства</SidebarNavigationText>
            </SidebarNavigationDestinationContainer>
          </SidebarNavigationLi>
          <SidebarNavigationLi>
            <SidebarNavigationDestinationContainer
              $isActive={createNewUser}
              onClick={() => navigate("/admin/register")}
            >
              <SidebarNavigationIcon src={addUser} />
              <SidebarNavigationText>
                Регистрация пользователя
              </SidebarNavigationText>
            </SidebarNavigationDestinationContainer>
            <SidebarNavigationDestinationContainer
              $isActive={false}
              onClick={() => logOutFunction()}
            >
              <SidebarNavigationIcon src={logoutIcon} />
              <SidebarNavigationText>Выйти</SidebarNavigationText>
            </SidebarNavigationDestinationContainer>
          </SidebarNavigationLi>
        </SidebarNavigationList>
      </SidebarNavigation>
      <UserDataContainer>
        <UserDataIcon src={userDataIcon} />
        <UserDataTextWrapper>
          <UserDataName>{user.name} </UserDataName>
          <UserDataRole>{roleToString(user.role)}</UserDataRole>
        </UserDataTextWrapper>
      </UserDataContainer>
    </SidebarContainer>
  )
}

export default Sidebar
