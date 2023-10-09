import { createSlice } from '@reduxjs/toolkit'

const initialUserState = {
  userDetails:{},
  isAuth: false
}

const AuthSlice = createSlice({
  name: 'userAuth',
  initialState: initialUserState,
  reducers: {
    authLogin: (state, action) => {
      state.userDetails = action.payload
      state.isAuth = true
    },
    authLogout: (state) => {
      state.userDetails = {}
      state.isAuth = false
    }
  }
})

export const { authLogin, authLogout } = AuthSlice.actions;
export default AuthSlice.reducer;