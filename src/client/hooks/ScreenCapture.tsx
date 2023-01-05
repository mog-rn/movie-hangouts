import { usePreventScreenCapture } from "expo-screen-capture";
import React from "react";
import { Text, View } from "react-native";

export default function ScreenCapture() {
    usePreventScreenCapture();

    return (
        <View>
            <Text>You cannot be able to take a screenshot of this page!!</Text>
        </View>
    )
}