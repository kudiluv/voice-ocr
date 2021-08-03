import { StatusBar } from 'expo-status-bar';
import React, {useRef, useState} from 'react';
import { StyleSheet, Text, View , Animated, TouchableWithoutFeedback,Easing} from 'react-native';
import Content from './src/content';
import Footer from './src/footer';
import { NavigationContainer, NavigationContext } from '@react-navigation/native';
import { navigationRef } from './src/navigation/root-navigation';

export default function App() {
  
  return (
      <NavigationContainer ref={navigationRef}>
        <View style={styles.app}>
          <Content />
          <Footer />
        </View>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  app: {
    height: '100%'
  }
});
