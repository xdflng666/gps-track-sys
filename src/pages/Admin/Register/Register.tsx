import { Page, Role } from "src/data"
import Sidebar from "src/components/Sidebar/Sidebar"
import {
  RegisterPageContainer,
  RegisterHeader,
  RegisterForm,
  InputContainer,
  RegisterInput,
  RegisterLabel,
  RegisterContainer,
  RegisterButton,
} from "src/pages/Admin/Register/Register.styled"
import { User } from "src/types"
import { useCallback, useState } from "react"

const Register = () => {
  const [userData, setUserData] = useState<User>({
    login: "",
    password: "",
    role: Role.HasErrors,
    phone: -1,
    email: "",
    name: "",
  })

  const handleRegister = () => {
    if (
      userData.login == "" ||
      userData.password == "" ||
      userData.role == Role.HasErrors ||
      userData.phone == -1 ||
      userData.email == "" ||
      userData.name == ""
    ) {
      alert("Пожалуйста введите все данные")
    } else {
      alert("Регистрация пока не работает")
    }
  }

  const handleInputLogin = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newUserData = Object.assign({}, userData)
      newUserData.login = event.target.value
      setUserData(newUserData)
    },
    [userData]
  )

  const handleInputPassword = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newUserData = Object.assign({}, userData)
      newUserData.password = event.target.value
      setUserData(newUserData)
    },
    [userData]
  )

  const handleInputRole = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newUserData = Object.assign({}, userData)
      if (event.target.value == "Администратор") newUserData.role = Role.Admin
      else if (event.target.value == "Пользователь")
        newUserData.role = Role.User
      setUserData(newUserData)
    },
    [userData]
  )

  const handleInputEmail = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newUserData = Object.assign({}, userData)
      newUserData.email = event.target.value
      setUserData(newUserData)
    },
    [userData]
  )

  const handleInputPhone = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newUserData = Object.assign({}, userData)
      newUserData.phone = parseInt(event.target.value)
      setUserData(newUserData)
    },
    [userData]
  )

  const handleInputName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newUserData = Object.assign({}, userData)
      newUserData.name = event.target.value
      setUserData(newUserData)
    },
    [userData]
  )

  return (
    <RegisterPageContainer>
      <Sidebar curPage={Page.createUser} />
      <RegisterContainer>
        <RegisterHeader> Регистрация пользователя</RegisterHeader>
        <RegisterForm>
          <InputContainer>
            <RegisterInput onChange={handleInputName} />
            <RegisterLabel>имя</RegisterLabel>
          </InputContainer>
          <InputContainer>
            <RegisterInput onChange={handleInputPhone} />
            <RegisterLabel>телефон</RegisterLabel>
          </InputContainer>
          <InputContainer>
            <RegisterInput onChange={handleInputEmail} />
            <RegisterLabel>e-mail</RegisterLabel>
          </InputContainer>
          <InputContainer>
            <RegisterInput onChange={handleInputRole} />
            <RegisterLabel>роль</RegisterLabel>
          </InputContainer>
          <InputContainer>
            <RegisterInput onChange={handleInputPassword} />
            <RegisterLabel>логин</RegisterLabel>
          </InputContainer>
          <InputContainer>
            <RegisterInput onChange={handleInputLogin} />
            <RegisterLabel>пароль</RegisterLabel>
          </InputContainer>
          <RegisterButton onClick={handleRegister}>
            Зарегистрировать
          </RegisterButton>
        </RegisterForm>
      </RegisterContainer>
    </RegisterPageContainer>
  )
}

export default Register
