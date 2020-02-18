import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import StoryHeader from '../components/StoryHeader';
import Feeds from '../components/Feeds';

export class MainFeed extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <StoryHeader />
                <Feeds />
            </View>
        )
    }
}

export default MainFeed

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#b0b0b0'
    }
})