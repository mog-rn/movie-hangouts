import { NavigationContainer } from "@react-navigation/native"
import { useSelector } from "react-redux"
import { useUserContext } from "../context/UserContext"
import { selectIsLoggedIn } from "../features/authSlice"

// Navigation stacks
import AuthStackNavigator from "../navigation/AuthStackNavigator"
import MainStackNavigator from "../navigation/MainStackNavigator"

export const Router = () => {
    // const {authData} = useUserContext()
    const isLoggedIn = useSelector(selectIsLoggedIn)
    return (
        <NavigationContainer>
        {isLoggedIn ? <MainStackNavigator /> : <AuthStackNavigator />}
        </NavigationContainer>
    )
}