import React from 'react';
import {View, TouchableNativeFeedback, StyleSheet} from 'react-native';
import { navigate }  from '../navigation/root-navigation' ;

const FooterItem = (props) => {
    const goTo = () => {
        navigate(props.link);
        props.setActiveLink(props.link);
    }
    return (
        <View style={styles.radius}>
            <TouchableNativeFeedback onPress={goTo} background={TouchableNativeFeedback.Ripple('rgba(255,255,255,0.1)')}>
                    <View style={styles.item}>
                        {props.children}
                    </View>               
            </TouchableNativeFeedback >
        </View>       
    );
}
const styles = StyleSheet.create({
    item: {
        height: '100%',
        justifyContent: 'center',
        paddingHorizontal: 15,
        
    },
    radius:{
        borderRadius: 50,
        overflow: 'hidden'
    }
})
export default FooterItem;