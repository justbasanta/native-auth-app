import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCXLZ2qBFG_Egyn34za24Bbq4gcPqAP74w',
      authDomain: 'auth-d6ca5.firebaseapp.com',
      databaseURL: 'https://auth-d6ca5.firebaseio.com',
      storageBucket: 'auth-d6ca5.appspot.com',
      messagingSenderId: '157165463615'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  };

  renderContent() {
    switch(this.state.loggedIn) {
      case true:
        return (
          <Button onPress = { () => firebase.auth().signOut() }>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner />
    }
  };

  render() {
    return (
      <View>
        <Header headerText = "Auth" />
        <View style = { styles.contentStyle }>
          { this.renderContent() }
        </View>
      </View>
    );
  }
};

const styles = {
  contentStyle: {
    marginTop: 50
  }
};
