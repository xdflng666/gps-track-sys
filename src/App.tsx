import MainPage from "src/pages/MainPage/MainPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login/Login"
import UserList from "src/pages/Admin/UserList/UserList"
import { AppDispatch } from "./store"
import { load } from "src/slices/userSlice"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useAppSelector } from "src/hooks"
import { Role } from "src/data"

const App = () => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(load())
  }, [dispatch])

  const userStatus: Role = useAppSelector((state) => state.user.userData.role)

  if (userStatus != Role.Unloaded) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Login />} />
          <Route path="/map" element={<MainPage />} />
          <Route path="/admin/users" element={<UserList />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
