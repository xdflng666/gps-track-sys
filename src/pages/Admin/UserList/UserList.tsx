import Sidebar from "src/components/Sidebar/Sidebar"
import {
  UserListPageContainer,
  UserListContainer,
  UserListHeader,
  UserSearchContainer,
  UserSearchInput,
  UserSearchLabel,
} from "src/pages/Admin/UserList/UserList.styled"
import searchIcon from "src/assets/search.png"

const AdminUsersList = () => {
  return (
    <UserListPageContainer>
      <Sidebar></Sidebar>
      <UserListContainer>
        <UserListHeader>Пользователи</UserListHeader>
        <UserSearchContainer>
          <UserSearchLabel src = {searchIcon} />
          <UserSearchInput type="text" placeholder="Поиск пользователя"></UserSearchInput>
        </UserSearchContainer>
      </UserListContainer>
    </UserListPageContainer>
  )
}

export default AdminUsersList
