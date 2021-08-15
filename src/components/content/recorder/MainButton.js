import {StyleSheet, TouchableNativeFeedback, View} from "react-native";
import React from "react";
import {bindActionCreators} from "redux";
import {actionStart, actionStop} from "../../../redux/actions/recorderActions";
import {connect} from "react-redux";
import {statusRecord} from "../../../enums";
import SvgPause from "../../../svg-components/SvgPause";

const MainButton = (props) => {

    const toggleRecorder = () => {
        if (props.status === statusRecord.INIT || props.status === statusRecord.STOPPED) {
            props.onStart();
        }
        if (props.status === statusRecord.RECORDING) {
            props.onStop();
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

function mapDispatchToProps(dispatch) {
    return {
        onStart: bindActionCreators(actionStart, dispatch),
        onStop: bindActionCreators(actionStop, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainButton)