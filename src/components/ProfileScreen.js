import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class ProfileScreen extends Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
    title: `Profile ${navigation.state.params.item.name}`,
    headerRight: <Button color={screenProps.tintColor} title={'button'} />
	})

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {`Profile Screen ${params.item.name}`}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
