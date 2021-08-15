import React from "react";
import {StyleSheet, Text, View} from "react-native";
import formatTime from "../../../helpers/formatTime";

const Timer = (props) => {
    return <View style={styles.wrapper}>
        <Text style={styles.text}>{formatTime(props.time)}</Text>
    </View>
}
const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        width: '100%'
    },
    text: {
      color: 'white'
    }
})
export default Timer;