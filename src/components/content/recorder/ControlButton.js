import React from "react";
import {StyleSheet, Text, TouchableNativeFeedback, View} from "react-native";
import {bindActionCreators} from "redux";
import {actionReset} from "../../../redux/actions/recorderActions";
import {connect} from "react-redux";

const ControlButton = (props) => {
    return <View style={styles.wrapper}>
        <TouchableNativeFeedback onPress={props.onReset}>
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

function mapStateToProps(state) {
    return {
        status: state.recorder.status
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onReset: bindActionCreators(actionReset, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlButton)