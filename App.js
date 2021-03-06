
import React, { Component }  from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { Provider  } from 'react-redux';
import store from './store'
import LoginCheck from './Com/LoginCheck'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
    render(){
        return(
            <Provider store={store}>
                <LoginCheck/>
            </Provider>
        )
    }
}