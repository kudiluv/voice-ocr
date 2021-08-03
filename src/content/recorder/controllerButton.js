import React, {useRef, useState, useEffect} from 'react';
import { StyleSheet, Text, View , Animated, TouchableNativeFeedback,Easing, Dimensions} from 'react-native';
import { typeControllerButton } from '../../enums';

const ControllerButton = (props) => {
    const type = props.type;
    let backgroundColor;
    let img;
    switch (type) {
        case typeControllerButton.PLAY:
            backgroundColor = '#38b60a'
            break;
        case typeControllerButton.STOP:
            backgroundColor = '#ff0000'
        default:
            backgroundColor = '#ff0000'
            break;
    }
    return (
        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('rgba(0,0,0,0.1)')} onPress={props.clickHandler}>
            <Animated.View style={[styles.button,{backgroundColor}]}>

            </Animated.View>
        </TouchableNativeFeedback>
        
    )
}

export default ControllerButton;

const styles = StyleSheet.create({
    button: {
        height: 60,
        width: 60,
        borderRadius: 30
    }
})