import {useRef, useState} from "react";
import { Audio } from 'expo-av';

function useRecorder(props) {
    let recorder = new Audio.Recording();
    const reInit = () => {
        recorder = new Audio.Recording();
    }

    return useRef({
        async start() {
            try {
                await recorder.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
                await recorder.startAsync();
                props.onStart();
            } catch (e) {

            }
        },
        async stop() {
            await recorder.pauseAsync();
            props.onStop();
        },
        async save() {
            const res = await recorder.stopAndUnloadAsync();
            reInit();
            props.onReset();
        },
        async reset() {
            const res = await recorder.stopAndUnloadAsync();
            reInit();
            props.onReset();
        },
        async continue() {
            await recorder.startAsync()
            props.onStart()
        },
        async getTime() {
            const status = await recorder.getStatusAsync();
            return status.durationMillis / 1000
        },
    })
}

export default useRecorder