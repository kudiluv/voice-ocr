import React, {useState} from 'react';
import {View, StyleSheet,Image} from 'react-native';
import FooterItem from './footerItem';
import Microphone from './img/microphone.png';
import { getCurrentRoute } from '../navigation/root-navigation';

const Footer = (props) => {
    const [activeLink,setActiveLink] = useState('Recorder');
    const createItems = () => {
        const items = [{
            link:'Recorder',
            img: Microphone
        },{
            link:'Records',
            img: Microphone
        },
        ];
        return items.map((item)=>{
            return (
                <FooterItem key={Date.now.toString()+item.link} link={item.link} setActiveLink={setActiveLink}
                    active={activeLink==item.link?true:false}>
                    <Image source={item.img}/>
                </FooterItem>
            )
        })
    }
    return (
        <View style={styles.footer}>
            {createItems()}
        </View>
    )
}
const styles = StyleSheet.create({
    footer: {
        height: 50,
        backgroundColor: '#2c2d2e',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexGrow: 0        
    }
})
export default Footer;