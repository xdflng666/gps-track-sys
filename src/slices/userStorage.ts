import { Role, users } from "src/data"
import { LoginAndPassword, User } from "src/types"

export const logInUser = async (loginAndPassword: LoginAndPassword) => {
  return new Promise<User>((resolve) => {
    let curUser: User = {
      login: "",
      password: "",
      role: Role.HasErrors
    }

    //request to back here
    const allUsers: User[] = users

    allUsers.map((user) => {
      if (
        loginAndPassword.login == user.login &&
        loginAndPassword.password == user.password
      ) {
        curUser = user
      }
    })
    resolve(curUser)
  })
}
