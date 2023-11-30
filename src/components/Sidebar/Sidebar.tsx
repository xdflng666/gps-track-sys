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
  UserDataTextWrapper
} from "src/components/Sidebar/Sidebar.styled"
import logo from "src/assets/logo.png"
import users from "src/assets/users.png"
import devices from "src/assets/devices.png"
import addUser from "src/assets/addUser.png"
import userDataIcon from "src/assets/userDataIcon.png"
import { useAppSelector } from "src/hooks"
import { User } from "src/types"
import { Role } from "src/data"

const Sidebar = () => {
  const roleToString = (userRole : Role) => {
    if(userRole == Role.Admin) {
      return "Администратор"
    }
    else {
      return "Пользователь"
    }
  }
  const user: User = useAppSelector((state) => state.user.userData)
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
            <SidebarNavigationDestinationContainer>
              <SidebarNavigationIcon src={users} />
              <SidebarNavigationText>Пользователи</SidebarNavigationText>
            </SidebarNavigationDestinationContainer>
          </SidebarNavigationLi>
          <SidebarNavigationLi>
            <SidebarNavigationDestinationContainer>
              <SidebarNavigationIcon src={devices} />
              <SidebarNavigationText>Устройства</SidebarNavigationText>
            </SidebarNavigationDestinationContainer>
          </SidebarNavigationLi>
          <SidebarNavigationLi>
            <SidebarNavigationDestinationContainer>
              <SidebarNavigationIcon src={addUser} />
              <SidebarNavigationText>
                Регистрация пользователя
              </SidebarNavigationText>
            </SidebarNavigationDestinationContainer>
          </SidebarNavigationLi>
        </SidebarNavigationList>
      </SidebarNavigation>
      <UserDataContainer>
        <UserDataIcon src={userDataIcon} />
        <UserDataTextWrapper>
          <UserDataName>{user.login} </UserDataName>
          <UserDataRole>{roleToString(user.role)}</UserDataRole>
        </UserDataTextWrapper> 
      </UserDataContainer>
    </SidebarContainer>
  )
}

export default Sidebar
