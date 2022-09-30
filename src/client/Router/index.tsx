import { NavigationContainer } from "@react-navigation/native"
import { useUserContext } from "../context/UserContext"

// Navigation stacks
import AuthStackNavigator from "../navigation/AuthStackNavigator"
import MainStackNavigator from "../navigation/MainStackNavigator"

export const Router = () => {
    const {authData} = useUserContext()
    return (
        <NavigationContainer>
        {authData?.token ? <MainStackNavigator /> : <AuthStackNavigator />}
        </NavigationContainer>
    )
}