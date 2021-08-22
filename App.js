import React from 'react';
import {StyleSheet, View} from 'react-native';
import Content from './src/components/content';
import Footer from './src/components/footer';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './src/navigation/root-navigation';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {rootReducer} from "./src/redux/reducers";

const store = createStore(rootReducer);

export default function App() {

    return (
        <Provider store={store}>
            <NavigationContainer ref={navigationRef}>
                <View style={styles.app}>
                    <Content/>
                    <Footer/>
                </View>
            </NavigationContainer>
        </Provider>

    );
}

const styles = StyleSheet.create({
    app: {
        height: '100%'
    }
});
