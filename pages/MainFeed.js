import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import StoryHeader from '../components/StoryHeader';
import Feeds from '../components/Feeds';
import { ScrollView } from 'react-native-gesture-handler';


export class MainFeed extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log('nav: ', this.props.navigation)
        return (
            <View style = {styles.container}>
                
                <ScrollView>
                    <StoryHeader />
                    <Feeds navigation={this.props.navigation}/>
                </ScrollView>

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