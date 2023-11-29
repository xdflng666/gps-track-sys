import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Role } from "src/data"
import { LoginAndPassword, User } from "src/types"
import { logInUser } from "./userStorage"

export interface UserState {
  userData: User;
}

const initialState: UserState = {
  userData: { login:"",password: "", role: Role.Unloaded},
}

export const logIn = createAsyncThunk<User, LoginAndPassword>(
  "userSlice/logIn",
  async (loginAndPassword: LoginAndPassword, thunkAPI) => {
    try {
      return await logInUser(loginAndPassword)
    } catch (e) {
      return thunkAPI.rejectWithValue(e)
    }
  }
)

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.userData = action.payload
      console.log("user loaded")
    })
  }
})

export default userSlice.reducer
