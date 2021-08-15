import React, {useState} from 'react';
import {View, StyleSheet,Image} from 'react-native';
import SvgMicrophone from '../../svg-components/microphone';
import SvgRecords from '../../svg-components/SvgRecords';
import FooterItem from './footerItem';

const Footer = () => {
    const [activeLink,setActiveLink] = useState('Recorder');
    const createItems = () => {
        const items = [{
            link:'Recorder',
            img: SvgMicrophone
        },{
            link:'Records',
            img: SvgRecords
        },
        ];
        return items.map((item)=>{
            return (
                <FooterItem key={Date.now.toString()+item.link} link={item.link} setActiveLink={setActiveLink}
                    active={activeLink==item.link?true:false}>
                    {(activeLink === item.link)? item.img({active:true}): item.img({})}
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
        backgroundColor: '#000000',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexGrow: 0        
    }
})
export default Footer;