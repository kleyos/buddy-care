import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';


export default class Header extends Component {
    renderHeader = () => {
        const buttons = [
            {   name: 'Add',
                press: () => this.props.navigate('AddWish')
            },
            {
                name: 'All',
                press: () => this.props.navigate('AddWish')
            },
            {
                name: 'Wishes',
                press: () => this.props.navigate('AddWish')
            },
            {
                name: 'Offers',
                press: () => this.props.navigate('AddWish')
            }
        ]
        return (
            <View style={styles.header}>
                <View style={styles.buttons}>
                    {buttons.map((item,i) =>
                        <TouchableOpacity
                            key={i}
                            style={styles.btn}
                            onPress={item.press}
                        >
                            <Text style={styles.text}> {item.name} </Text>
                        </TouchableOpacity>)
                    }
                    <View style={styles.user}>
                        <TouchableOpacity
                            onPress={() => this.props.navigate('Profile')}
                        >
                            <Image sourse={require('../images/IMG.jpg')} style={styles.userPic} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    render() {
        return this.renderHeader()
    }
}
const styles = StyleSheet.create({
    header: {
    height: 50,
    flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
      backgroundColor: 'transparent',
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    btn: {
        padding: 5,
        marginLeft: 5,
    },
    user: {
        width: 50,
        height: 50,
        borderRadius: 50,
        borderColor: '#037aff',
        borderWidth: 1,
        margin: 5,
    },
    userPic: {
        width: 45,
        height: 45,
    },
    text: {
        color: '#037aff',
        fontWeight: "700",
    }
})