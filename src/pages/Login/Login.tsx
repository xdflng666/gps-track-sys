import { InputContainer, LeftSideContainer, LoginButton, LoginDiv, LoginForm, LoginHeader, LoginInput, LoginLabel, LoginText, PurpleLoginText, RightSideContainer } from "./Login.styled"

const Login = () => {
  return (
    <>
      <LeftSideContainer>
        <LoginDiv>
          <LoginForm>
            <LoginHeader>Войти</LoginHeader>
            <InputContainer>
              <LoginLabel>Логин</LoginLabel>
              <LoginInput></LoginInput>
            </InputContainer>
            <InputContainer>
              <LoginLabel>Пароль</LoginLabel>
              <LoginInput></LoginInput>
            </InputContainer>
            <LoginButton>Продолжить</LoginButton>
          </LoginForm>
        </LoginDiv>
      </LeftSideContainer>
      <RightSideContainer>
        <LoginText>
          GPS 
          <PurpleLoginText> Tracking </PurpleLoginText>
          System
        </LoginText>
      </RightSideContainer>
    </>
  )
}

export default Login
