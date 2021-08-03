import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
export default function() {
    const translation = useEffect(Animated.Value(0))
    useEffect(()=>{
        
    })
    return (<View style={{width: 50,
        height: 50,
        backgroundColor: 'green',
        transform: [{translateX: translation.current}]}}>

    </View>);

    
}