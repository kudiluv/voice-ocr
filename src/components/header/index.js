import React from 'react';
import { StyleSheet, Text, View , Animated, TouchableWithoutFeedback,Easing} from 'react-native';

const Header = ({ scene, previous, navigation }) =>{
    const { options } = scene.descriptor;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{options.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'#19191a',
    },
    text:{
        fontSize:18,
        color: 'white'
    }
})

export default Header;