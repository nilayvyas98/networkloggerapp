import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import firebase from '../database/firebase';
import NetworkLogger from 'react-native-network-logger';

export default class Home extends Component {
  constructor() {
    super();
    this.state = { 
      uid: ''
    }
  }

  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('LoginComponent')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }  

  render() {
    this.state = { 
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid
    }    
    return (
      <>
      <View style={styles.container}>
        <Text style = {styles.textStyle}>
          Hello, {this.state.displayName}
        </Text>

        <Button
          color="#3740FE"
          title="Logout"
          onPress={() => this.signOut()}
        />
      </View>
      <View style={styles.container2}>
      <Text style={{ alignSelf: 'center' }}>Network Logger Component</Text>
      <NetworkLogger/>
    </View>
    </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#fff'
  },
  container2: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20
  }
});