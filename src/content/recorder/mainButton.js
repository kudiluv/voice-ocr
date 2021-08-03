import React, {useRef, useState, useEffect} from 'react';
import { StyleSheet, Text, View , Animated, TouchableNativeFeedback,Easing, Dimensions} from 'react-native';

const MainButton = (props) => {

    const getTime = (seconds) => {
        const hours = Math.floor(seconds/60/60);
        const minutes = Math.floor((seconds-hours*60*60)/60);
        const sec = Math.floor(seconds-hours*60*60-minutes*60);
        function addZerros(value){
            if (value == 0) {
                return "00";
            }
            return (value.toString().length == 1) ? `0${value}` : value;
        }
        return `${addZerros(hours)}:${addZerros(minutes)}:${addZerros(sec)}`;
    }

    return (
        <View style={styles.mainButton}>
            <Text style={styles.timer}>{getTime(props.time)}</Text> 
            <Animated.View style={[styles.button,{transform:[{scale: props.value}]}]}>                   
            </Animated.View>
        </View> 
    );
}

export default MainButton;

const widthButton = Dimensions.get('window').width/2;

const styles = StyleSheet.create({
    mainButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor:'red',
        height: widthButton,
        width: widthButton,
        borderRadius: widthButton/2,
    },
    timer: {
        position:'absolute',
        zIndex: 2,
        color: 'white'
    }
})