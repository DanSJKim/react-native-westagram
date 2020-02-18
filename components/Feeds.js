import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Article from './Article'
import { ScrollView } from 'react-native-gesture-handler'

class Feeds extends Component {
    render() {
        return (
            <View style={styles.feeds}>
                <ScrollView>
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                </ScrollView>

            </View>
        )
    }
}

export default Feeds

const styles = StyleSheet.create({
    feeds: {
      flex: 1,
      width: '100%',
      backgroundColor: '#ffffff'
    }
});