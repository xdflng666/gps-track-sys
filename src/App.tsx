import MainPage from "src/pages/MainPage/MainPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login/Login"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/map" element={<MainPage />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
