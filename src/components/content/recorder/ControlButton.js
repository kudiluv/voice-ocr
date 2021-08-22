import React from "react";
import {StyleSheet, Text, TouchableNativeFeedback, View} from "react-native";

const ControlButton = (props) => {
    return <View style={styles.wrapper}>
        <TouchableNativeFeedback onPress={async () => {await props.onPress()}}>
            <View>
                <Text style={styles.text}>{props.children}</Text>
            </View>
        </TouchableNativeFeedback>
    </View>
}

const styles = StyleSheet.create({
    wrapper: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        flexGrow: 1
    },
    text: {
      color: 'white'
    }
})

export default ControlButton