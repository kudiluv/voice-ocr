import React, {useRef, useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {actionTick} from "../../../redux/actions/recorderActions";
import MainButton from "./MainButton";
import {statusRecord} from "../../../enums";
import Timer from "./Timer";
import ControlButton from "./ControlButton";

const Recorder = (props) => {
    if (props.status === statusRecord.RECORDING) {
        setTimeout(() => {
            props.onTick(0.1);
        }, 100)
    }
    return (
        <View style={styles.recorder}>
            {props.status !== statusRecord.INIT ? <Timer time={props.time}/> : undefined}
            <View style={styles.controllers}>
                {props.status === statusRecord.STOPPED ?
                    <ControlButton>Удалить</ControlButton> : undefined}
                <MainButton/>
                {props.status === statusRecord.STOPPED ?
                    <ControlButton>Сохранить</ControlButton> : undefined}
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    recorder: {
        justifyContent: 'flex-end',
        height: '100%',
        width: '100%',
        backgroundColor: '#000000'
    },
    controllers: {
        flexDirection: 'row',
        paddingBottom: 10,
        paddingTop: 10,
        height: 80,
        justifyContent: 'center'
    }
})

function mapStateToProps(state) {
    return {
        status: state.recorder.status,
        time: state.recorder.time
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onTick: bindActionCreators(actionTick, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recorder)