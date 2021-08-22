import {StyleSheet, TouchableNativeFeedback, View} from "react-native";
import React from "react";
import {connect} from "react-redux";
import {statusRecord} from "../../../enums";
import SvgPause from "../../../svg-components/SvgPause";

const MainButton = (props) => {

    const toggleRecorder = async () => {
        if (props.status === statusRecord.INIT) {
            await props.recorder.start();
        }
        if (props.status === statusRecord.RECORDING) {
            await props.recorder.stop();
        }
        if (props.status === statusRecord.STOPPED) {
            props.recorder.continue()
        }
    }

    return <View style={styles.buttonWrapper}>
        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('rgba(0,0,0,0.1)')}
                                 onPress={toggleRecorder}>
            <View style={styles.button}>
                {props.status === statusRecord.RECORDING ?
                    <SvgPause/> :
                    <View style={styles.buttonInner}/>
                }
            </View>
        </TouchableNativeFeedback>
    </View>
}

const styles = StyleSheet.create({
    buttonWrapper: {
        position: 'absolute',
        paddingTop: 15,
        borderRadius: 30,
        overflow: 'hidden'
    },
    button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonInner: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'white'
    }
})

function mapStateToProps(state) {
    return {
        status: state.recorder.status
    }
}

export default connect(mapStateToProps)(MainButton)