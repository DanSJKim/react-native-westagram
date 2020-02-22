import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class HeaderButton extends Component {


    render() {
        return (
            <View>
                <Button onPress={() => console.log(this.props)} title='asd'/>
            </View>
        )
    }
}
