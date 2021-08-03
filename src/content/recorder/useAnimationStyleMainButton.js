import React, {useRef} from 'react';
import { Animated, Easing} from 'react-native';

export default useAnimationStyleMainButton = () => {
    const animateState = {
        startValue: 1,
        endValue: 0.9
    }
    const value = useRef(new Animated.Value(animateState.startValue)).current;
    const animation = useRef(
        Animated.loop(Animated.sequence([
            Animated.timing(value,{toValue:animateState.endValue,useNativeDriver: true, duration: 1000, easing: Easing.linear }),
            Animated.timing(value,{toValue:animateState.startValue,useNativeDriver: true, duration: 1000, easing: Easing.linear })
        ]))
        ).current;
    return {animation, value}
}