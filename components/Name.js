import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert,
  Image,
} from "react-native";

export default class Name extends Component {
  constructor() {
    super();
    this.state = {
      visibility: styles.show,
      username: "",
      showName: styles.hide,
      showButton: styles.buttonShow,
    };
  }

  savename = () => {
    if (this.checkName(this.state.username)) {
      this.setState({ showButton: styles.hide });
      this.setState({ visibility: styles.hide });
      this.setState({ showName: styles.show });
    } else {
      Alert.alert(
        "Name missing",
        "Please enter your name",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    }
  };

  checkName(input) {
    return input.length > 0;
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.tinyLogo} source={require('../assets/somik.jpg')}/>
        <Text style={this.state.showName}>Hello, {this.state.username}</Text>
        <Text style={this.state.showName}>Let's do something fun!</Text>
        <Text>test</Text>
        <Text>camera</Text>
        <TouchableHighlight
          style={this.state.showName}
          onPress={() => this.props.navigation.navigate("Activity")}
        >
          <Text style={styles.buttonText}>Choose an activity</Text>
        </TouchableHighlight>

        <TextInput
          value={this.state.username}
          placeholder={"your name"}
          onChangeText={(username) => this.setState({ username })}
          style={this.state.visibility}
        />
        <TouchableHighlight
          onPress={this.savename}
          style={this.state.showButton}
        >
          <Text style={styles.buttonText}>Save name</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.state.showName}
          onPress={() => this.props.navigation.navigate("ActivityList")}
        >
          <Text style={styles.buttonText}>All activities</Text>
        </TouchableHighlight>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  hide: {
    display: "none",
  },
  show: {
    display: "flex",
    fontSize:20,
    padding: 10,
  },
  buttonShow: {
    display: "flex",
    backgroundColor: "green",
    borderRadius: 20,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 20,
    borderColor: "blue",
    borderWidth: 5,
    borderRadius: 20,
    padding: 10,
  },
  tinyLogo: {  width: 200, height: 160, },
});
