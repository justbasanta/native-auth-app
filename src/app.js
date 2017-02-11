import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCXLZ2qBFG_Egyn34za24Bbq4gcPqAP74w',
      authDomain: 'auth-d6ca5.firebaseapp.com',
      databaseURL: 'https://auth-d6ca5.firebaseio.com',
      storageBucket: 'auth-d6ca5.appspot.com',
      messagingSenderId: '157165463615'
    });
  }

  render() {
    return (
      <View>
        <Header headerText = "Auth" />
        <LoginForm />
      </View>
    );
  }
}
