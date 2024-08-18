import { Platform, StatusBar } from "react-native";

/* CITATION: This code is based on: https://stackoverflow.com/a/55017347

To be used in SafeAreaView's on different screens. Ensures content doesn't
overlap StatusBar on Android devices.

PROPS (all optional):
flex (int): Either 0 or 1. 0 if used only for top SafeArea. 1 if rest of screen
bgColor (String): Background color. Default white
additionalPadding (int): Any additional padding user wants to add at top. Default 0.
*/ 
function SafeAreaAndroid({ flex=1, bgColor="white", additionalPadding=0 } = {}) {
    return {
        flex: flex,
        backgroundColor: bgColor,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + additionalPadding : 0
    }
};

export default SafeAreaAndroid;