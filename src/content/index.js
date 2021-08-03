import React, {useRef, useState} from 'react';
import { StyleSheet, Text, View , Animated, TouchableWithoutFeedback,Easing} from 'react-native';
import Records from './records';
import Recorder from './recorder';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../header';

const Stack = createStackNavigator();

const Content = (props) => {
    
    return (
        <View style={styles.content} >
            <Stack.Navigator initialRouteName='Recorder'>
                <Stack.Screen name='Recorder' component={Recorder} options={{title:'Запись',header: Header}}/>
                <Stack.Screen name='Records' component={Records} options={{title:'Записи',header: Header}}/>
            </Stack.Navigator>
        </View>
    )
}
const styles = StyleSheet.create({
    content: {
        flexGrow: 1
    }
})
export default Content