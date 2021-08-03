import React, {useRef, useState, useEffect} from 'react';
import { StyleSheet,  View,  TouchableNativeFeedback} from 'react-native';
import { statusRecord, typeControllerButton } from '../../enums';
import { Audio } from 'expo-av';
import ControllerButton from './controllerButton';
import MainButton from './mainButton';
import useAnimationStyleMainButton from './useAnimationStyleMainButton';

const Recorder = (props) => {
    const {animation,value} = useAnimationStyleMainButton();
    const [stateRecord,setStatusRecod] = useState(statusRecord.INIT);
    const [time,setTime] = useState(0);
    useEffect(()=>{
        if (stateRecord === statusRecord.RECORDING) {
            setTimeout(()=>{
                setTime(value => value + 0.1);
            },100)
        }
    },[stateRecord,time])
    const startRecording = async () => {
        const granted = (await Audio.requestPermissionsAsync()).granted;
        if (!granted || stateRecord === statusRecord.RECORDING) {
            return;
        }
        setStatusRecod(statusRecord.RECORDING);
        animation.start();
    }
    const stopRecording = () => {
        animation.reset();
        setStatusRecod(statusRecord.STOPED);
    }
    return (
        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.1)')}
        onPress={startRecording}>
            <View style={styles.container}>
                <MainButton value={value} time={time}/>
                <ControllerButton type={typeControllerButton.STOP} clickHandler={stopRecording}/>
                <ControllerButton type={typeControllerButton.PLAY} clickHandler={startRecording}/>
            </View>
        </TouchableNativeFeedback>
        
    )

}
export default Recorder

const styles = StyleSheet.create({
    container:{
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0a0a0a'
    },
})
