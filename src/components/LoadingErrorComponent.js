import { View, Text } from 'react-native'
import LottieView from 'lottie-react-native';
import React from 'react'

export default function LoadingErrorComponent({ isLoading, error }) {
    if (isLoading) {
        return (
            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                <LottieView
                    source={require("../../assets/jsons/animation.json")}
                    autoPlay
                    style={{ width: 300, height: 300 }}
                />
            </View>
        );
    }

    if (error) {
        return (
            <View style={{ justifyContent: "center", alignItems: "center", height: "100%" }}>
                <Text>We have an error</Text>
            </View>
        );
    }

    return null
}
