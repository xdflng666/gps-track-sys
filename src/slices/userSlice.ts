import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Role } from "src/data"
import { LoginAndPassword, User } from "src/types"
import { loadUser, logInUser, logOutUser } from "src/slices/userStorage"

export interface UserState {
  userData: User;
}

const initialState: UserState = {
  userData: {
    login: "",
    password: "",
    role: Role.Unloaded,
    name: "",
    phone: 0,
    email: "",
  },
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

export const logOut = createAsyncThunk<User, void>(
  "userSlice/logOut",
  async (params: void, thunkAPI) => {
    try {
      return await logOutUser()
    } catch (e) {
      return thunkAPI.rejectWithValue(e)
    }
  }
)

export const load = createAsyncThunk<User, void>(
  "userSlice/load",
  async (params: void, thunkAPI) => {
    try {
      return await loadUser()
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
      console.log("user logged in")
    }),
    builder.addCase(load.fulfilled, (state, action) => {
      state.userData = action.payload
      console.log("user loaded")
    }),
    builder.addCase(logOut.fulfilled, (state, action) => {
      state.userData = action.payload
      console.log("user logged out")
    })
  },
})

export default userSlice.reducer
