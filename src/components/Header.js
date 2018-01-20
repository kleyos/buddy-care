import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { Avatar, ButtonGroup } from 'react-native-elements';


class Header extends Component {
    constructor(props){
        super(props)
        this.state = { key: null, selectedIndex: 1 }
    }
    updateIndex = (selectedIndex) => {
        const { dispatch, navigate, data, auth: { isLoggedIn } } = this.props;
        this.setState({ selectedIndex })
        switch(selectedIndex) {
            case 0:
                if (isLoggedIn) {
                    navigate('AddWish')
                } else { navigate('Login') }
                break
            case 1:
                dispatch({ type: 'GET_FILTER_DATA', value: data.fullData })
                break
            case 2:
                dispatch({
                    type: 'GET_FILTER_DATA',
                    value: data.fullData.filter(item => item.type === 'wish')
                })
                break
            case 3:
                dispatch({
                    type: 'GET_FILTER_DATA',
                    value: data.fullData.filter(item => item.type === 'offer')
                })
                break
            default: break
        }
    }

    renderHeader = () => {
        const { data, auth: { result, isLoggedIn }, navigate } = this.props;
        const { key, selectedIndex } = this.state;
        const buttons = ['Add', 'All', 'Wishes', 'Offers']
        return (
            <View style={styles.header}>
                <View style={styles.buttons}>
                    <ButtonGroup
                        selectedIndex={selectedIndex}
                        onPress={this.updateIndex}
                        buttons={buttons}
                        textStyle={styles.text}
                        containerStyle={{height: 25}}
                    />
                    { isLoggedIn &&
                        <Avatar small rounded
                            containerStyle={{ margin: 5 }}
                            source={{ uri: result.picture.data.url }}
                            onPress={() => navigate('Profile',
                                {
                                    id: result.id, name:
                                    result.name,
                                    pic: result.picture.data.url
                                })}
                        />
                    }
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
    text: {
        fontSize: 10,
        fontWeight: "700",
        paddingHorizontal: 8,
        paddingVertical: 10
    },
})
const mapStateToProps = state => ({
    auth: state.auth,
    data: state.data,
  });
export default connect(mapStateToProps)(Header)