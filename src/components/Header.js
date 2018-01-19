import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = { key: null }
    }
    renderHeader = () => {
        const { data } = this.props;
        const { key } = this.state;
        const buttons = [
            {   name: 'Add',
                press: () => this.props.navigate('AddWish')
            },
            {
                name: 'All',
                press: () => this.props.dispatch({
                    type: 'GET_FILTER_DATA',
                    value: data
                })
            },
            {
                name: 'Wishes',
                press: () => this.props.dispatch({
                    type: 'GET_FILTER_DATA',
                    value: data.filter(item => item.type === 'wish')
                })
            },
            {
                name: 'Offers',
                press: () => this.props.dispatch({
                    type: 'GET_FILTER_DATA',
                    value: data.filter(item => item.type === 'offer')
                })
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
                            onPressIn={()=>this.setState({ key: i })}
                        >
                            <Text style={[styles.text, key === i ? {opacity: 0.4} : {opacity: 1}]}> {item.name} </Text>
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
        opacity: 1,
    },
    user: {
        width: 35,
        height: 35,
        borderRadius: 50,
        borderColor: '#037aff',
        borderWidth: 1,
        margin: 5,
    },
    userPic: {
        width: 35,
        height: 35,
    },
    text: {
        color: '#037aff',
        fontWeight: "700",
    },
    pressedBtn: {
        opacity: 0.2,
        padding: 5,
        marginLeft: 5,
    }
})