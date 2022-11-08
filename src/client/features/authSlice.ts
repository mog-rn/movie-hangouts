import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
    isLoggedIn: boolean
    phone: string
    email: string
}

const initialState: UserState = {
    isLoggedIn: false,
    phone: '',
    email: ''
}

export const authSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        setSignIn: (state, action) => {
            state.email = action.payload.email
            state.isLoggedIn = action.payload.isLoggedIn
            state.phone = action.payload.phone
        },
        setSignOut: (state) => {
            state.email = ''
            state.phone = ''
            state.isLoggedIn = false
        }
    }
})

export const { setSignIn, setSignOut } = authSlice.actions

export const selectIsLoggedIn = (state: { userAuth: { isLoggedIn: any; }; }) => state.userAuth.isLoggedIn
export const selectEmail = (state: { userAuth: { email: any; }; }) => state.userAuth.email
export const selectPhone = (state: { userAuth: { phone: any; }; }) => state.userAuth.phone

export default authSlice.reducer