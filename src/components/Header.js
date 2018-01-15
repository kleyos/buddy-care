import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';


export default class Header extends Component {
    render() {
        return <View style={styles.header}><Text>BuddyCare</Text></View>
    }
}
const styles = StyleSheet.create({
    header: {
      width: '100%',
      height: 60,
      borderColor: '#A4DFF9',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#A4DFF9',
    },
})